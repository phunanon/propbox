import { MouseConstraint, Render, Runner, Vector } from 'matter-js';

type ToolKind = 'move' | 'drag';
type ControlKind =
  | 'close'
  | 'pin'
  | 'posPin'
  | 'toolbox'
  | 'pauseResume'
  | ToolKind;

export type Context = {
  render: Render;
  runner: Runner;
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
