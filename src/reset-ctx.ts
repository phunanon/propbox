import { Bodies, Bounds, Composite, Mouse, Vector } from 'matter-js';
import { Context } from './types';

export const initialCtxScale = {
  min: 0.1,
  max: 10,
  by: 1,
  target: 1,
  lastImpulse: new Date().getTime(),
  targetPos: { x: 0, y: 0 },
};

export const ResetCtx = (ctx: Context) => {
  const { render, engine, mouseConstraint } = ctx;
  const { world } = engine;
  const { mouse } = mouseConstraint;
  ctx.tool = 'pan';

  Bounds.translate(render.bounds, Vector.neg(render.bounds.min));
  render.bounds.min.x = 0;
  render.bounds.min.y = 0;
  console.log(render.bounds, render.options);
  render.bounds.max.x = render.options.width ?? 0;
  render.bounds.max.y = render.options.height ?? 0;
  Mouse.setScale(mouse, Vector.create(1, 1));
  Mouse.setOffset(mouse, render.bounds.min);
  ctx.scale = { ...initialCtxScale };

  Composite.clear(world, false, true);
  addGround(ctx.engine.world);
};

export const addGround = (world: Composite) => {
  const planeWidth = 65_536;
  Composite.add(world, [
    Bodies.rectangle(0, planeWidth / 2 + 600, planeWidth, planeWidth, {
      isStatic: true,
      render: { fillStyle: '#afa' },
    }),
  ]);
};
