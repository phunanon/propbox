import { Vector } from 'matter-js';
import { Context, Menu, MenuControl, ToolKind } from './types';

const fontSize = 16;
const gridY = fontSize * 2;
const gridX = gridY / 2;

/** Checks if a menu is pinned */
const isPinned = (menu: Menu) => menu.pinnedPos || menu.pinnedScale;

/** A control stretches horizontally if it doesn't share a Y coordinate */
const doStretchControl = (controls: MenuControl[], control: MenuControl) => {
  const { x, y } = control.box;
  return !controls.some(c => c !== control && c.box.x !== x && c.box.y === y);
};

/** Filters for non-hidden controls */
const visibleControls = (menu: Menu, context: Context) =>
  menu.controls.filter(c => !c.hidden || !c.hidden(context, menu));

/** A control flows if it shares an X and Y coordinate */
const controlFlow = (controls: MenuControl[], control: MenuControl) => {
  const { x, y } = control.box;
  const sameXY = controls.filter(c => c.box.x === x && c.box.y === y);
  const index = sameXY.findIndex(c => c === control);
  return Math.max(0, index);
};

export const HandleMenu = (ctx: Context) => {
  const rightClicked = ctx.mouseConstraint.mouse.button === 2;
  const { body } = ctx.mouseConstraint;
  const now = new Date().getTime();
  const menus = ctx.menus;

  const closeLeftmost = () => {
    const idx = menus.findIndex(m => !isPinned(m));
    if (idx !== -1) {
      menus.splice(idx, 1);
    }
  };

  //Click a menu or close the leftmost menu
  let clicked = false;
  if (ctx.mouseState === 'click') {
    clicked = HandleMenuClick(ctx);
    ctx.mouseState = 'rest';
    if (!clicked) closeLeftmost();
  }

  if (rightClicked) {
    if (!ctx.menuOpenedWhen || now > ctx.menuOpenedWhen + 500) {
      closeLeftmost();
      const position = Vector.clone(ctx.mouseConstraint.mouse.absolute);
      OpenMenu('scene', position, ctx, SceneControls);
    }
  } else {
    delete ctx.menuOpenedWhen;
  }

  const ctx2d = ctx.render.canvas.getContext('2d');
  if (!ctx2d) return;

  DrawMenus(ctx, ctx2d);
  return clicked;
};

const HandleMenuClick = (ctx: Context) => {
  const { menus, mouseConstraint } = ctx;
  const { absolute } = mouseConstraint.mouse;
  for (let m = menus.length - 1; m >= 0; --m) {
    const menu = menus[m]!;
    const menuDim = ScaledMenuDimensions(ctx, menu);
    const { x, y } = MenuPosition(ctx, menu);
    const inBounds =
      absolute.x > x &&
      absolute.x < x + menuDim.width &&
      absolute.y > y &&
      absolute.y < y + menuDim.height;
    if (!inBounds) continue;
    const controls = visibleControls(menu, ctx);
    const clicked = controls.find(control => {
      const contDim = ControlBounds(ctx, menu, control, menuDim.scale);
      return (
        absolute.x > x + contDim.x &&
        absolute.x < x + contDim.x + contDim.width &&
        absolute.y > y + contDim.y &&
        absolute.y < y + contDim.y + contDim.height
      );
    });
    if (!clicked) continue;
    console.log(clicked.kind);
    const action = clicked.onClick(ctx, menu, clicked);
    const pinned = isPinned(menu);
    if ((!pinned && !clicked.keepMenuOpen) || action === 'close') {
      menus.splice(m, 1);
    }
    return true;
  }
  return false;
};

/** Gets the menu's calculated dimensions, unscaled */
const MenuDimensions = (ctx: Context, menu: Menu) => {
  let [x2, y2] = [0, 0];
  const controls = visibleControls(menu, ctx);
  for (const control of controls) {
    const { box } = control;
    const flow = controlFlow(controls, control);
    x2 = Math.max(x2, box.x + box.width);
    y2 = Math.max(y2, box.y + box.height + flow);
  }
  const width = x2 * gridX;
  const height = y2 * gridY;
  return { width, height };
};

/** Gets the menu's calculated dimensions, scaled */
const ScaledMenuDimensions = (ctx: Context, menu: Menu) => {
  const dimensions = MenuDimensions(ctx, menu);
  const dim = Vector.create(dimensions.width, dimensions.height);
  const scale = menu.pinnedScale ? menu.pinnedScale / ctx.scale.by : 1;
  const scaled = Vector.mult(dim, scale);
  return { width: scaled.x, height: scaled.y, scale };
};

/** Gets the absolute position of a menu on the screen */
const MenuPosition = (context: Context, menu: Menu) => {
  if (menu.pinnedScale) {
    const pos = Vector.div(
      Vector.sub(menu.position, context.render.bounds.min),
      context.scale.by
    );
    return { x: pos.x, y: pos.y };
  }
  return menu.position;
};

const DrawMenus = (context: Context, ctx: CanvasRenderingContext2D) => {
  const menus = context.menus;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  menus.forEach(menu => {
    const { width, height } = MenuDimensions(context, menu);
    const { x, y } = MenuPosition(context, menu);
    ctx.save();
    ctx.translate(x, y);
    //A pinned menu's position and scale is relative, like a scene object
    //else it floats on top of the scene, unscaled
    if (menu.pinnedScale) {
      const menuScale = menu.pinnedScale / context.scale.by;
      ctx.scale(menuScale, menuScale);
    }
    //Background
    ctx.fillRect(-2, -2, width + 4, height + 6);
    //Controls
    ctx.translate(0, 2);
    menu.controls.forEach(control => {
      if (control.hidden?.(context, menu)) return;
      const box = ControlBounds(context, menu, control);
      ctx.fillStyle = !control.highlighted?.(context)
        ? 'rgba(0, 0, 0, 0.25)'
        : 'rgba(127, 255, 127, 0.5)';
      const stretch = doStretchControl(visibleControls(menu, context), control);
      ctx.fillRect(
        box.x + 2,
        box.y + 2,
        stretch ? width - 4 : box.width - 4,
        box.height - 4
      );
      ctx.fillStyle = '#fff';
      const baseline = box.y + box.height / 1.5;
      if (control.icon) {
        ctx.font = `${fontSize - 2}px 'Font Awesome 6 Free'`;
        ctx.fillText(control.icon, box.x + 10, baseline);
      }
      if (control.label) {
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(control.label, box.x + 12 + fontSize, baseline);
      }
    });
    ctx.restore();
  });
};

/** Calculates the absolute scaled dimensions and position of a control */
const ControlBounds = (
  ctx: Context,
  menu: Menu,
  control: MenuControl,
  scale = 1
) => {
  const { box } = control;
  const controls = visibleControls(menu, ctx);
  const stretch = doStretchControl(controls, control);
  const flow = controlFlow(controls, control);
  const boxY = box.y + flow;
  const contWidth = stretch ? MenuDimensions(ctx, menu).width : box.width;
  const { x, y } = Vector.mult(
    Vector.create(box.x * gridX, boxY * gridY),
    scale
  );
  const { x: width, y: height } = Vector.mult(
    Vector.create(contWidth * gridX, box.height * gridY),
    scale
  );
  return { x, y, width, height };
};

/** Closes menu */
const MenuCloseControl = (): MenuControl => ({
  type: 'button',
  kind: 'close',
  icon: '\uf00d',
  box: { x: 0, y: 0, width: 2, height: 1 },
  keepMenuOpen: true,
  onClick: (ctx, menu) => {
    delete menu.pinnedScale;
    delete menu.pinnedPos;
    return 'close';
  },
});

/** Pins a menu both in scale and position */
const PinControl = (xy: Vector): MenuControl => ({
  type: 'button',
  kind: 'pin',
  label: 'here',
  icon: '\uf08d',
  box: { x: xy.x, y: xy.y, width: 5, height: 1 },
  keepMenuOpen: true,
  onClick: (ctx, menu) => {
    menu.pinnedScale = ctx.scale.by;
    //Convert absolute position to relative position
    menu.position = Vector.add(
      Vector.mult(menu.position, menu.pinnedScale),
      ctx.render.bounds.min
    );
    menu.controls.unshift(MenuCloseControl());
  },
  hidden: (ctx, menu) => !!menu.controls.find(c => c.kind === 'close'),
});

/** Pins a menu in position only */
const PosPinControl = (xy: Vector): MenuControl => ({
  type: 'button',
  kind: 'posPin',
  label: 'open',
  icon: '\uf08d',
  box: { x: xy.x, y: xy.y, width: 5, height: 1 },
  keepMenuOpen: true,
  onClick: (ctx, menu) => {
    menu.pinnedScale = undefined;
    menu.pinnedPos = true;
    menu.controls.unshift(MenuCloseControl());
  },
  hidden: (ctx, menu) => !!menu.controls.find(c => c.kind === 'close'),
});

const ToolboxControl = (xy: Vector): MenuControl => ({
  type: 'button',
  kind: 'toolbox',
  label: 'toolbox',
  icon: '\uf0ad',
  box: { x: xy.x, y: xy.y, width: 6, height: 1 },
  onClick: ctx => OpenToolboxMenu(ctx),
  hidden: ctx => !!ctx.menus.find(m => m.name === 'toolbox'),
});

const MoveControl = (xy: Vector): MenuControl => ({
  type: 'button',
  kind: 'pan',
  icon: '\uf0b2',
  box: { x: xy.x, y: xy.y, width: 2, height: 1 },
  onClick: ctx => {
    ctx.tool = 'pan';
  },
  highlighted: ctx => ctx.tool === 'pan',
});

const DragControl = (xy: Vector): MenuControl => ({
  type: 'button',
  kind: 'drag',
  icon: '\uf25a',
  box: { x: xy.x, y: xy.y, width: 2, height: 1 },
  onClick: ctx => {
    ctx.tool = 'drag';
  },
  highlighted: ctx => ctx.tool === 'drag',
});

const PauseResumeControl = (xy: Vector): MenuControl => ({
  type: 'button',
  kind: 'pauseResume',
  icon: '\uf04c',
  box: { x: xy.x, y: xy.y, width: 2, height: 1 },
  onClick: (ctx, menu, self) => {
    ctx.runner.enabled = !ctx.runner.enabled;
    self.icon = ctx.runner.enabled ? '\uf04c' : '\uf04b';
  },
  highlighted: ctx => !ctx.runner.enabled,
});

const CreateControl = (xy: Vector, kind: ToolKind): MenuControl => ({
  type: 'button',
  kind,
  icon: kind === 'rectangle' ? '\uf0c8' : '\uf111',
  box: { x: xy.x, y: xy.y, width: 2, height: 1 },
  onClick: ctx => {
    ctx.tool = kind;
  },
  highlighted: ctx => ctx.tool === kind,
});

const SceneControls = (): MenuControl[] => [
  PinControl(Vector.create(0, 0)),
  PosPinControl(Vector.create(5, 0)),
  ToolboxControl(Vector.create(0, 1)),
  PosPinControl(Vector.create(0, 1)), //TODO: Remove this
];

const ToolboxControls = (): MenuControl[] => [
  MenuCloseControl(),
  MoveControl(Vector.create(3, 0)),
  DragControl(Vector.create(5, 0)),
  CreateControl(Vector.create(8, 0), 'rectangle'),
  CreateControl(Vector.create(10, 0), 'circle'),
  PauseResumeControl(Vector.create(13, 0)),
];

export const OpenToolboxMenu = (ctx: Context) => {
  const menu = OpenMenu('toolbox', Vector.create(), ctx, ToolboxControls);
  menu.pinnedPos = true;
};

const OpenMenu = (
  name: string,
  position: Vector,
  ctx: Context,
  controlsFactory: (context: Context) => MenuControl[]
) => {
  const menu: Menu = { name, position, controls: controlsFactory(ctx) };
  ctx.menus.push(menu);
  ctx.menuOpenedWhen = new Date().getTime();
  return menu;
};

// const RemoveControl = (menu: Menu, label: string) => {
//   const index = menu.controls.findIndex(c => c.label === label);
//   if (index >= 0) menu.controls.splice(index, 1);
// };
