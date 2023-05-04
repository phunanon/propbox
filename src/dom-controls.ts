import { Vector } from 'matter-js';
import {
  ControlBounds,
  MenuPosition,
  controlMargin,
  menuMargin,
} from './context-menu';
import { Box, Context, Menu, MenuControl } from './types';

type DomControl = { menu: Menu; control: MenuControl };
type ControlWithBounds = MenuControl & {
  originalControl: MenuControl;
  calculatedBounds: Box;
};
type MenuWithPos = Omit<Menu, 'controls'> & {
  originalMenu: Menu;
  controls: ControlWithBounds[];
  calculatedPos: Vector;
};

const controls: DomControl[] = [];

const cId = (menu: Menu, control: MenuControl) =>
  `${menu.name}-${control.kind}`;

export const PutDomControls = (ctx: Context) => {
  const container = document.querySelector('controls');
  if (!container) return;

  const menus: MenuWithPos[] = ctx.menus.map(m => ({
    ...m,
    originalMenu: m,
    controls: m.controls
      .filter(c => c.type === 'text')
      .map(c => ({
        ...c,
        originalControl: c,
        calculatedBounds: ControlBounds(ctx, m, c),
      })),
    calculatedPos: MenuPosition(ctx, m),
  }));

  menus.forEach(PutMenuControls(container));

  //Remove controls from menus that no longer exist
  controls.forEach(c => {
    if (!menus.some(m => m.originalMenu === c.menu)) {
      controls.splice(controls.indexOf(c), 1);
      document.getElementById(cId(c.menu, c.control))?.remove();
    }
  });
};

const PutMenuControls = (container: Element) => (menu: MenuWithPos) => {
  const existingControls = controls.filter(c => c.menu === menu.originalMenu);

  //Remove controls that no longer exist
  existingControls.forEach(c => {
    if (!menu.controls.some(mc => mc.originalControl === c.control)) {
      controls.splice(controls.indexOf(c), 1);
      document.getElementById(cId(menu, c.control))?.remove();
    }
  });

  //Add new controls, or reposition existing ones
  menu.controls.forEach(control => {
    const existing = controls.find(c => c.control === control.originalControl);
    if (existing) {
      const textarea = document.getElementById(cId(menu, control));
      if (textarea) {
        const pos = menu.calculatedPos;
        const bounds = control.calculatedBounds;
        PositionTextarea(textarea, pos, bounds);
      }
    } else {
      controls.push({
        menu: menu.originalMenu,
        control: control.originalControl,
      });

      const pos = menu.calculatedPos;
      const bounds = control.calculatedBounds;
      const textarea = document.createElement('textarea');
      textarea.id = cId(menu, control);
      textarea.value = control.text ?? '';
      PositionTextarea(textarea, pos, bounds);
      container.appendChild(textarea);
    }
  });
};

const PositionTextarea = (
  textarea: HTMLElement,
  pos: Vector,
  bounds: Box
) => {
  const margin = menuMargin + controlMargin;
  textarea.style.left = `${pos.x + bounds.x + margin}px`;
  textarea.style.top = `${pos.y + bounds.y + margin}px`;
  textarea.style.width = `${bounds.width - margin * 2}px`;
  textarea.style.height = `${bounds.height - margin}px`;
};
