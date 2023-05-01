import { Composite, Query, Vector, World } from 'matter-js';
import { Context } from './types';

export const HandleEraseShapes = (ctx: Context) => {
  const { mouseConstraint, tool } = ctx;
  if (tool !== 'erase') return;

  if (mouseConstraint.mouse.button) {
    ctx.mouseState = 'rest';
    return;
  }

  const { absolute } = mouseConstraint.mouse;
  const relative = Vector.add(
    ctx.render.bounds.min,
    Vector.mult(absolute, ctx.scale.by)
  );

  const searchComposite = (composite: Composite) => {
    Query.point(composite.bodies, relative).forEach(body =>
      World.remove(composite, body)
    );
    composite.composites.forEach(searchComposite);
  };

  searchComposite(ctx.engine.world);
};
