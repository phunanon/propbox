import { Bodies, Composite, Constraint, Query, Vector, World } from 'matter-js';
import { Context, drawTools } from './types';

export let springFromBodyCentre = false;

export const HandleDrawShapes = (ctx: Context) => {
  const { mouseState, mouseConstraint } = ctx;
  if (!Array.isArray(mouseState) || mouseState[1] !== 'draw') return;
  if (!drawTools.some(t => t === ctx.tool)) return;

  const { mouse } = mouseConstraint;
  const [pos] = mouseState;

  if (mouseConstraint.mouse.button) {
    CreateThing(ctx, pos, mouse.absolute);
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
  } else if (context.tool === 'spring') {
    ctx.lineWidth = 2;
    ctx.moveTo(a.x, a.y);
    const angle = Math.atan2(delta.y, delta.x);
    const length = Vector.magnitude(delta);
    for (let i = 0; i < length / 5; i++) {
      const zigzag = i % 2 === 1 ? Math.PI / 10 : -Math.PI / 10;
      const x = a.x + Math.cos(angle) * i * 5 + Math.cos(angle + zigzag) * 10;
      const y = a.y + Math.sin(angle) * i * 5 + Math.sin(angle + zigzag) * 10;
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
};

const CreateThing = (ctx: Context, a: Vector, b: Vector) => {
  const scale = ctx.scale.by;
  const delta = Vector.sub(b, a);
  const magnitude = Vector.magnitude(delta);
  if (magnitude < 1) return;
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
    const radius = magnitude * scale;
    if (radius < 1) return;
    const body = createCircle(xy, radius);
    World.add(ctx.engine.world, body);
  } else if (ctx.tool === 'spring') {
    const xyA = Vector.add(ctx.render.bounds.min, Vector.mult(a, scale));
    const xyB = Vector.add(ctx.render.bounds.min, Vector.mult(b, scale));
    const [bodyA] = Query.point(Composite.allBodies(ctx.engine.world), xyA);
    const [bodyB] = Query.point(Composite.allBodies(ctx.engine.world), xyB);
    if (bodyA === bodyB || (!bodyA && !bodyB)) return;
    const constraint = Constraint.create({
      bodyA,
      bodyB,
      pointA: bodyA
        ? ctx.springFromBodyCentre
          ? undefined
          : Vector.sub(xyA, bodyA.position)
        : Vector.add(xyA, Vector.create(1, 1)),
      pointB: bodyB
        ? ctx.springFromBodyCentre
          ? undefined
          : Vector.sub(xyB, bodyB.position)
        : Vector.add(xyB, Vector.create(1, 1)),
      stiffness: 0.05,
      damping: 0.01,
      render: { strokeStyle: '#000' },
    });
    World.add(ctx.engine.world, constraint);
  }
};

const style = { render: { lineWidth: 1, strokeStyle: '#000' } };

const createRectangle = (xy: Vector, wh: Vector) =>
  Bodies.rectangle(xy.x + wh.x / 2, xy.y + wh.y / 2, wh.x, wh.y, style);

const createCircle = (xy: Vector, radius: number) =>
  Bodies.circle(xy.x, xy.y, radius, style);
