import { Bodies, Vector, World } from 'matter-js';
import { Context } from './types';

export const HandleCreateShapes = (ctx: Context) => {
  const { mouseState, mouseConstraint } = ctx;
  if (!Array.isArray(mouseState) || mouseState[1] !== 'draw') return;

  const { mouse } = mouseConstraint;
  const [pos] = mouseState;

  if (mouseConstraint.mouse.button) {
    CreateShape(ctx, pos, mouse.absolute);
    ctx.mouseState = 'rest';
    return;
  }

  DrawOutline(ctx, pos, mouse.absolute);
};

const DrawOutline = (context: Context, a: Vector, b: Vector) => {
  const ctx = context.render.context;
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  const delta = Vector.sub(b, a);
  if (context.tool === 'rectangle') {
    const x = Math.min(a.x, b.x);
    const y = Math.min(a.y, b.y);
    const width = Math.abs(delta.x);
    const height = Math.abs(delta.y);
    ctx.rect(x, y, width, height);
  } else if (context.tool === 'circle') {
    const r = Vector.magnitude(delta);
    ctx.arc(a.x, a.y, r, 0, 2 * Math.PI);
  }
  ctx.stroke();
};

const CreateShape = (ctx: Context, a: Vector, b: Vector) => {
  const scale = ctx.scale.by;
  const delta = Vector.sub(b, a);
  if (ctx.tool === 'rectangle') {
    const x = Math.min(a.x, b.x);
    const y = Math.min(a.y, b.y);
    const xy = Vector.add(
      ctx.render.bounds.min,
      Vector.mult(Vector.create(x, y), scale)
    );
    const width = Math.abs(delta.x);
    const height = Math.abs(delta.y);
    const wh = Vector.mult(Vector.create(width, height), scale);
    const body = createRectangle(xy, wh);
    World.add(ctx.engine.world, body);
  } else if (ctx.tool === 'circle') {
    const xy = Vector.add(
      ctx.render.bounds.min,
      Vector.mult(Vector.create(a.x, a.y), scale)
    );
    const radius = Vector.magnitude(delta) * scale;
    const body = createCircle(xy, radius);
    World.add(ctx.engine.world, body);
  }
};

const style = { render: { lineWidth: 1, strokeStyle: '#000' } };

const createRectangle = (xy: Vector, wh: Vector) =>
  Bodies.rectangle(xy.x + wh.x / 2, xy.y + wh.y / 2, wh.x, wh.y, style);

const createCircle = (xy: Vector, radius: number) =>
  Bodies.circle(xy.x, xy.y, radius, style);
