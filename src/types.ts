import { Engine, MouseConstraint, Render, Runner, Vector } from 'matter-js';

export const createTools = ['rectangle', 'circle', 'spring'] as const;

export type ToolKind = 'pan' | 'drag' | 'erase' | (typeof createTools)[number];

type ControlKind =
  | 'close'
  | 'pin'
  | 'posPin'
  | 'toolbox'
  | 'pauseResume'
  | 'checkbox'
  | 'checkboxChecked'
  | 'console'
  | 'text'
  | ToolKind;

type MouseState =
  | 'rest'
  | [Vector, 'press']
  | [Vector, 'menuPress', Menu]
  | 'drag'
  | 'pan'
  | [Vector, 'draw']
  | [Vector, 'menuDrag', Menu]
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
  menus: Menu[];
  tool: ToolKind;
  springFromBodyCentre?: boolean;
};

export type Menu = {
  name: string;
  position: Vector;
  pinnedScale?: number;
  pinnedPos?: boolean;
  controls: MenuControl[];
  closeWhen?: (ctx: Context, self: Menu) => boolean;
};

export type MenuControl = {
  /** xy on a gapped grid, wh in 1:2 intervals */
  box: Box;
  type: 'button' | 'checkbox' | 'text';
  kind: ControlKind;
  label?: string;
  icon?: string | ((ctx: Context, menu: Menu, control: MenuControl) => string);
  farIcon?: boolean;
  readonly keepMenuOpen?: boolean;
  onClick: (
    ctx: Context,
    menu: Menu,
    self: MenuControl
  ) => void | 'close' | 'keep';
  hidden?: (ctx: Context, menu: Menu) => boolean;
  highlighted?: (ctx: Context) => boolean;
};

export type Box = {
  x: number;
  y: number;
  width: number;
  height: number;
};

//TODO: settings f1de  layers f5fd  text f10d  select f065  hinge? f140  grid f00a  console f120
//https://fontawesome.com/search?p=3&o=r&m=free&s=solid&f=classic
export const icons: Record<ControlKind, string> = {
  pan: '\uf0b2',
  drag: '\uf25a',
  erase: '\uf12d',
  rectangle: '\uf0c8',
  circle: '\uf111',
  spring: '\ue289',
  close: '\uf00d',
  pin: '\uf08d',
  posPin: '\uf276',
  toolbox: '\uf0ad',
  pauseResume: '\uf04c',
  checkbox: '\uf0c8',
  checkboxChecked: '\uf14a',
  console: '\uf121',
  text: '\uf031',
};
