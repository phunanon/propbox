import { Engine, MouseConstraint, Render, Runner, Vector } from 'matter-js';

export const createTools = ['rectangle', 'circle'] as const;
export type ToolKind = 'pan' | 'drag' | 'erase' | (typeof createTools)[number];
type ControlKind =
  | 'close'
  | 'pin'
  | 'posPin'
  | 'toolbox'
  | 'pauseResume'
  | ToolKind;
type MouseState =
  | 'rest'
  | [Vector, 'press']
  | 'drag'
  | 'pan'
  | [Vector, 'draw']
  /** Just a click */
  | 'click';

export type Context = {
  render: Render;
  runner: Runner;
  engine: Engine;
  mouseConstraint: MouseConstraint;
  scale: {
    by: number;
    target: number;
    lastImpulse: number;
    targetPos: Vector;
    readonly min: number;
    readonly max: number;
  };
  mouseState: MouseState;
  panningFrom?: Vector;
  menuOpenedWhen?: number;
  menus: Menu[];
  tool: ToolKind;
};

export type Menu = {
  name: string;
  position: Vector;
  pinnedScale?: number;
  pinnedPos?: boolean;
  controls: MenuControl[];
};

export type MenuControl = {
  /** xy on a gapped grid, wh in 1:2 intervals */
  box: Box;
  type: 'button';
  kind: ControlKind;
  label?: string;
  icon: string;
  readonly keepMenuOpen?: boolean;
  onClick: (ctx: Context, menu: Menu, self: MenuControl) => void | 'close';
  hidden?: (ctx: Context, menu: Menu) => boolean;
  highlighted?: (ctx: Context) => boolean;
};

export type Box = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const toolIcons: Record<ToolKind, string> = {
  pan: '\uf0b2',
  drag: '\uf25a',
  erase: '\uf12d',
  rectangle: '\uf0c8',
  circle: '\uf111',
};
