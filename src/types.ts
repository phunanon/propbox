import { MouseConstraint, Render, Vector } from "matter-js";


export type RenderContext = {
  render: Render;
  scale: {
    by: number;
    target: number;
    readonly min: number;
    readonly max: number;
  };
  panningFrom?: Vector;
  mouseConstraint: MouseConstraint;
};
