import { MouseConstraint, Render, Vector } from 'matter-js';

export type Context = {
  render: Render;
  mouseConstraint: MouseConstraint;
  scale: {
    by: number;
    target: number;
    lastImpulse: number;
    targetPos: Vector;
    readonly min: number;
    readonly max: number;
  };
  mouseDownAt?: Vector;
  /** For menu closing mechanism */
  mouseState?: 'undetermined' | 'drag' | 'pan' | 'afterDragOrPan' | 'up';
  panningFrom?: Vector;
  menuOpenedWhen?: number;
  menus: Menu[];
};

export type Menu = {
  pinnedScale?: number;
  position: Vector;
  controls: MenuControl[];
};

export type MenuControl = {
  /** xy on a gapped grid, wh in 1:2 intervals */
  box: Box;
  type: 'button';
  label: string;
  icon: string;
  onClick: (menu: Menu) => void;
};

export type Box = {
  x: number;
  y: number;
  width: number;
  height: number;
};
