import { MouseConstraint, Render, Vector } from "matter-js";


export type RenderContext = {
  render: Render;
  scale: {
    by: number;
    target: number;
    lastImpulse: number;
    targetPos: Vector;
    readonly min: number;
    readonly max: number;
  };
  panningFrom?: Vector;
  mouseConstraint: MouseConstraint;
};
