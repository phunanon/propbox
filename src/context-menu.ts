import { Vector } from 'matter-js';
import { Box, Context, Menu, MenuControl, ToolKind, icons } from './types';
import { PutDomControls } from './dom-controls';
import { ResetCtx } from './reset-ctx';

const fontSize = 16;
const gridY = fontSize * 2;
const gridX = gridY / 2;
export const [menuMargin, controlMargin] = [4, 2];

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
  const { mouseConstraint, mouseState, menus } = ctx;
  const rightClicked = mouseConstraint.mouse.button === 2;

  const closeLeftmost = () => {
    const idx = menus.findIndex(m => !isPinned(m));
    if (idx !== -1) {
      menus.splice(idx, 1);
    }
  };

  //Click a menu or close the leftmost menu
  let clicked = false;
  if (mouseState === 'click') {
    clicked = !!HandleMenuClick(ctx);
    ctx.mouseState = 'rest';
    if (!clicked) closeLeftmost();
  }

  //Move menu
  if (Array.isArray(mouseState) && mouseState[1] === 'menuDrag') {
    const menu = mouseState[2];
    menu.position = Vector.sub(mouseConstraint.mouse.absolute, mouseState[0]);
    if (menu.pinnedScale) {
      menu.position = Vector.add(
        Vector.mult(menu.position, ctx.scale.by),
        ctx.render.bounds.min
      );
    }
  }

  //Close menus based on their optional predicates
  menus.forEach(menu => {
    if (menu.closeWhen && menu.closeWhen(ctx, menu)) {
      const idx = menus.findIndex(m => m === menu);
      if (idx >= 0) menus.splice(idx, 1);
    }
  });

  if (rightClicked) {
    closeLeftmost();
    const position = Vector.clone(ctx.mouseConstraint.mouse.absolute);
    menus.push({ name: 'scene', position, controls: SceneControls() });
  }

  const ctx2d = ctx.render.canvas.getContext('2d');
  if (!ctx2d) return;

  DrawMenus(ctx, ctx2d);
  PutDomControls(ctx);
  return clicked;
};

const HandleMenuClick = (ctx: Context, justCheck = false) => {
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
    if (justCheck) return menu;
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
    const onClick = clicked?.onClick;
    if (!onClick) continue;
    console.log(clicked.kind);
    const action = onClick(ctx, menu, clicked);
    const pinned = isPinned(menu);
    if (
      (action !== 'keep' && !pinned && !clicked.keepMenuOpen) ||
      action === 'close'
    ) {
      menus.splice(m, 1);
    }
    return true;
  }
  return false;
};

export const MenuUnderMouse = (ctx: Context) =>
  (HandleMenuClick(ctx, true) || undefined) as Menu | undefined;

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
  const width = x2 * gridX + menuMargin * 2;
  const height = y2 * gridY + menuMargin * 2;
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
export const MenuPosition = (context: Context, menu: Menu) => {
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
    ctx.fillRect(0, 0, width, height);
    //Controls
    ctx.translate(menuMargin, menuMargin);
    menu.controls.forEach(control => {
      if (control.hidden?.(context, menu)) return;
      const box = ControlBounds(context, menu, control);
      if (control.type === 'text') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      } else {
        ctx.fillStyle = !control.highlighted?.(context)
          ? 'rgba(0, 0, 0, 0.25)'
          : 'rgba(127, 255, 127, 0.5)';
      }
      const stretch = doStretchControl(visibleControls(menu, context), control);
      ctx.fillRect(
        box.x + controlMargin,
        box.y + controlMargin,
        (stretch ? width - menuMargin * 2 : box.width) - controlMargin * 2,
        box.height - controlMargin * 2
      );
      ctx.fillStyle = '#fff';
      const baseline = box.y + box.height / 1.5;
      if (control.icon) {
        ctx.font = `${fontSize - 2}px FA6${control.farIcon ? 'R' : 'S'}`;
        const icon =
          typeof control.icon === 'string'
            ? control.icon
            : control.icon(context, menu, control);
        ctx.save();
        ctx.translate(box.x + fontSize / 2 + controlMargin, baseline);
        if (icon === '\uf04c') {
          ctx.translate(1.5, 0);
        }
        if (icon === '\uf121') {
          ctx.translate(0, -1);
          ctx.scale(0.75, 0.75);
        }
        if (icon === '\uf00d') {
          ctx.translate(1, 0);
        }
        ctx.fillText(icon, 0, 0);
        ctx.restore();
      }
      if (control.text) {
        ctx.font = `${fontSize}px Arial`;
        const offset = control.type === 'label' ? 8 : fontSize + 12;
        ctx.fillText(control.text, box.x + offset, baseline);
      }
    });
    ctx.restore();
  });
};

/** Calculates the absolute scaled bounds of a control in a menu */
export const ControlBounds = (
  ctx: Context,
  menu: Menu,
  control: MenuControl,
  scale = 1
): Box => {
  const { box } = control;
  const controls = visibleControls(menu, ctx);
  const stretch = doStretchControl(controls, control);
  const flow = controlFlow(controls, control);
  const boxY = box.y + flow;
  const contWidth = stretch
    ? MenuDimensions(ctx, menu).width
    : box.width * gridX;
  const { x, y } = Vector.mult(
    Vector.create(box.x * gridX, boxY * gridY),
    scale
  );
  const { x: width, y: height } = Vector.mult(
    Vector.create(contWidth, box.height * gridY),
    scale
  );
  return { x, y, width, height };
};

/** Closes menu */
const MenuCloseControl = ({ x, y }: Vector = Vector.create()): MenuControl => ({
  type: 'button',
  kind: 'close',
  icon: icons.close,
  box: { x, y, width: 2, height: 1 },
  keepMenuOpen: true,
  onClick: (ctx, menu) => {
    delete menu.pinnedScale;
    delete menu.pinnedPos;
    return 'close';
  },
});

/** Pins a menu both in scale and position */
const PinControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'pin',
  text: 'here',
  icon: icons.pin,
  box: { x, y, width: 5, height: 1 },
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
const PosPinControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'posPin',
  text: 'stay',
  icon: icons.posPin,
  box: { x, y, width: 5, height: 1 },
  keepMenuOpen: true,
  onClick: (ctx, menu) => {
    menu.pinnedScale = undefined;
    menu.pinnedPos = true;
    menu.controls.unshift(MenuCloseControl());
  },
  hidden: (ctx, menu) => !!menu.controls.find(c => c.kind === 'close'),
});

const ToolboxControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'toolbox',
  text: 'toolbox',
  icon: icons.toolbox,
  box: { x, y, width: 6, height: 1 },
  onClick: OpenToolboxMenu,
  hidden: ctx => !!ctx.menus.find(m => m.name === 'toolbox'),
});

const MoveControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'pan',
  icon: icons.pan,
  box: { x, y, width: 2, height: 1 },
  onClick: ctx => {
    ctx.tool = 'pan';
  },
  highlighted: ctx => ctx.tool === 'pan',
});

const DragControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'drag',
  icon: icons.drag,
  box: { x, y, width: 2, height: 1 },
  onClick: ctx => {
    ctx.tool = 'drag';
  },
  highlighted: ctx => ctx.tool === 'drag',
});

const PauseResumeControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'pauseResume',
  icon: icons.pauseResume,
  box: { x, y, width: 2, height: 1 },
  onClick: (ctx, menu, self) => {
    ctx.runner.enabled = !ctx.runner.enabled;
    self.icon = ctx.runner.enabled ? '\uf04c' : '\uf04b';
  },
  highlighted: ctx => !ctx.runner.enabled,
});

const ToolControl = (xy: Vector, kind: ToolKind): MenuControl => ({
  type: 'button',
  kind,
  icon: icons[kind],
  box: { x: xy.x, y: xy.y, width: 2, height: 1 },
  onClick: OpenTool(kind),
  highlighted: ctx => ctx.tool === kind,
});

const ConsoleControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'console',
  text: 'console',
  icon: icons.console,
  box: { x, y, width: 6, height: 1 },
  onClick: OpenConsoleMenu,
  hidden: ctx => !!ctx.menus.find(m => m.name === 'console'),
});

const NewSceneControl = ({ x, y }: Vector): MenuControl => ({
  type: 'button',
  kind: 'newScene',
  text: 'new scene',
  icon: icons.newScene,
  box: { x, y, width: 6, height: 1 },
  onClick: ResetCtx,
});

const SceneControls = (): MenuControl[] => [
  PinControl(Vector.create(0, 0)),
  PosPinControl(Vector.create(5, 0)),
  ToolboxControl(Vector.create(0, 1)),
  ConsoleControl(Vector.create(0, 1)),
  NewSceneControl(Vector.create(0, 2)),
];

const ToolboxControls = (): MenuControl[] => [
  MenuCloseControl(),
  MoveControl(Vector.create(3, 0)),
  DragControl(Vector.create(5, 0)),
  ToolControl(Vector.create(7, 0), 'erase'),
  ToolControl(Vector.create(10, 0), 'rectangle'),
  ToolControl(Vector.create(12, 0), 'circle'),
  ToolControl(Vector.create(14, 0), 'spring'),
  ToolControl(Vector.create(16, 0), 'hinge'),
  PauseResumeControl(Vector.create(19, 0)),
];

const SpringControls = (): MenuControl[] => [
  MenuCloseControl(),
  {
    type: 'checkbox',
    kind: 'checkbox',
    text: 'from body centre',
    icon: ctx =>
      ctx.springFromBodyCentre ? icons.checkboxChecked : icons.checkbox,
    farIcon: true,
    box: { x: 0, y: 1, width: 10, height: 1 },
    onClick: ctx => {
      ctx.springFromBodyCentre = !ctx.springFromBodyCentre;
      return 'keep';
    },
  },
];

const HingeControls = (): MenuControl[] => [
  MenuCloseControl(),
  {
    type: 'checkbox',
    kind: 'checkbox',
    text: 'from body centre',
    icon: ctx =>
      ctx.hingeFromBodyCentre ? icons.checkboxChecked : icons.checkbox,
    farIcon: true,
    box: { x: 0, y: 1, width: 10, height: 1 },
    onClick: ctx => {
      ctx.hingeFromBodyCentre = !ctx.hingeFromBodyCentre;
      return 'keep';
    },
  },
];

const OpenTool = (kind: ToolKind) => (ctx: Context) => {
  if (ctx.tool !== kind) {
    const menuFactory = (controlFactory: () => MenuControl[]) =>
      <Menu>{
        name: 'tool',
        position: Vector.create(0, gridY + menuMargin * 2),
        controls: controlFactory(),
        pinnedPos: true,
        closeWhen: ctx => ctx.tool !== kind,
      };
    if (kind === 'spring') {
      ctx.menus.push(menuFactory(SpringControls));
    } else if (kind === 'hinge') {
      ctx.menus.push(menuFactory(HingeControls));
    }
    ctx.tool = kind;
  }
};

const ConsoleControls = (): MenuControl[] => [
  { type: 'label', text: 'Console', box: { x: 0, y: 0, width: 18, height: 1 } },
  MenuCloseControl(Vector.create(18, 0)),
  { type: 'text', kind: 'console', box: { x: 0, y: 1, width: 20, height: 8 } },
];

const OpenConsoleMenu = (ctx: Context) => {
  ctx.menus.push({
    name: 'console',
    controls: ConsoleControls(),
    position: Vector.create(0, gridY + menuMargin * 2),
    pinnedPos: true,
  });
};

export const OpenToolboxMenu = (ctx: Context) => {
  ctx.menus.push({
    name: 'toolbox',
    controls: ToolboxControls(),
    position: Vector.create(),
    pinnedPos: true,
  });
};
