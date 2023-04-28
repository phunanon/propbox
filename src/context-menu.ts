import { Vector } from 'matter-js';
import { Context, Menu, MenuControl } from './types';

const fontSize = 16;
const gridY = fontSize * 2;
const gridX = gridY / 2;

export const HandleMenu = (context: Context) => {
  const rightClicked = context.mouseConstraint.mouse.button === 2;
  const { body } = context.mouseConstraint;
  const now = new Date().getTime();
  const menus = context.menus;

  const closeLeftmost = () => {
    const idx = menus.findIndex(m => !m.pinnedScale);
    if (idx !== -1) {
      menus.splice(idx, 1);
    }
  };

  if (context.mouseState === 'up') {
    HandleMenuClick(context);
    delete context.mouseState;
    closeLeftmost();
  }

  if (rightClicked) {
    if (!context.menuOpenedWhen || now > context.menuOpenedWhen + 500) {
      closeLeftmost();
      const position = Vector.clone(context.mouseConstraint.mouse.absolute);
      menus.push({ position, controls: MakeSceneControls(context) });
      context.menuOpenedWhen = new Date().getTime();
    }
  } else {
    delete context.menuOpenedWhen;
  }

  const ctx = context.render.canvas.getContext('2d');
  if (!ctx) return;

  DrawMenus(context, ctx);
};

const HandleMenuClick = (context: Context) => {
  const menus = context.menus;
  const { absolute } = context.mouseConstraint.mouse;
  for (let m = menus.length - 1; m >= 0; --m) {
    const menu = menus[m]!;
    const menuDim = ScaledMenuDimensions(context, menu);
    const { x, y } = MenuPosition(context, menu);
    const clicked =
      absolute.x > x &&
      absolute.x < x + menuDim.width &&
      absolute.y > y &&
      absolute.y < y + menuDim.height;
    if (!clicked) continue;
    const clickedControl = menu.controls.find((control, i) => {
      const contDim = ControlBounds(control, menuDim.scale);
      return (
        absolute.x > x + contDim.x &&
        absolute.x < x + contDim.x + contDim.width &&
        absolute.y > y + contDim.y &&
        absolute.y < y + contDim.y + contDim.height
      );
    });
    if (!clickedControl) continue;
    clickedControl.onClick(menu);
    break;
  }
};

/** Gets the menu's calculated dimensions, unscaled */
const MenuDimensions = (menu: Menu) => {
  const x2 = menu.controls.reduce(
    (acc, { box }) => Math.max(acc, box.x + box.width),
    0
  );
  const y2 = menu.controls.reduce(
    (acc, { box }) => Math.max(acc, box.y + box.height),
    0
  );
  const width = x2 * gridX;
  const height = y2 * gridY;
  return { width, height };
};

/** Gets the menu's calculated dimensions, scaled */
const ScaledMenuDimensions = (context: Context, menu: Menu) => {
  const dimensions = MenuDimensions(menu);
  const dim = Vector.create(dimensions.width, dimensions.height);
  const scale = menu.pinnedScale ? menu.pinnedScale / context.scale.by : 1;
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
    const { width, height } = MenuDimensions(menu);
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
    ctx.fillRect(0, -2, width, height + 6);
    //Controls
    ctx.translate(0, 2);
    menu.controls.forEach((control, i) => {
      const box = ControlBounds(control);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(box.x + 4, box.y + 2, box.width - 8, box.height - 4);
      ctx.fillStyle = '#fff';
      ctx.font = `${fontSize}px Arial`;
      const baseline = box.y + box.height / 1.5;
      ctx.fillText(control.label, 8, baseline);
      ctx.font = `${fontSize - 2}px Arial`;
      ctx.fillText(control.icon, width - fontSize * 1.75, baseline);
    });
    ctx.restore();
  });
};

const ControlBounds = ({ box }: MenuControl, scale = 1) => {
  const { x, y } = Vector.mult(
    Vector.create(box.x * gridX, box.y * gridY),
    scale
  );
  const { x: width, y: height } = Vector.mult(
    Vector.create(box.width * gridX, box.height * gridY),
    scale
  );
  return { x, y, width, height };
};

const UnpinControl = (context: Context, xy: Vector): MenuControl => {
  return {
    type: 'button',
    label: 'Unpin menu',
    icon: '📌',
    box: { x: xy.x, y: xy.y, width: 8, height: 1 },
    onClick: menu => {
      console.log('unpin');
      menu.pinnedScale = undefined;
      //Convert relative position to absolute position
      menu.position = Vector.sub(menu.position, context.render.bounds.min);
      menu.controls.splice(0, 1, PinControl(context, xy));
    },
  };
};

const PinControl = (context: Context, xy: Vector): MenuControl => {
  return {
    type: 'button',
    label: 'Pin menu',
    icon: '📌',
    box: { x: xy.x, y: xy.y, width: 8, height: 1 },
    onClick: menu => {
      menu.pinnedScale = context.scale.by;
      //Convert absolute position to relative position
      menu.position = Vector.add(
        Vector.mult(menu.position, menu.pinnedScale),
        context.render.bounds.min
      );
      menu.controls.splice(0, 1, UnpinControl(context, xy));
    },
  };
};

const MakeSceneControls = (context: Context): MenuControl[] => {
  return [
    PinControl(context, Vector.create(0, 0)),
    {
      type: 'button',
      label: 'Toolbox',
      icon: '🧰',
      box: { x: 0, y: 1, width: 8, height: 1 },
      onClick: menu => {
        console.log('toolbox');
      },
    },
  ];
};
