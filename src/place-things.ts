import { Body, Composite, Constraint, Query, Vector, World } from 'matter-js';
import { Context, placeTools } from './types';

export let hingeFromBodyCentre = false;

export const HandlePlaceThings = (ctx: Context) => {
  const { mouseState, mouseConstraint } = ctx;
  //console.log(mouseState);
  if (mouseState !== 'click') return;
  if (!placeTools.some(t => t === ctx.tool)) return;

  const { mouse } = mouseConstraint;

  if (CreateThing(ctx, mouse.absolute)) ctx.mouseState = 'rest';
};

const CreateThing = (ctx: Context, pos: Vector) => {
  const scale = ctx.scale.by;
  if (ctx.tool === 'hinge') {
    const xy = Vector.add(ctx.render.bounds.min, Vector.mult(pos, scale));
    const bodies = Query.point(Composite.allBodies(ctx.engine.world), xy);
    const [bottomOrSingle, topOrNone] = bodies.slice(-2);
    if (!bottomOrSingle) return;
    const top = topOrNone ?? bottomOrSingle;
    let bottom = topOrNone ? bottomOrSingle : undefined;
    if (!topOrNone && ctx.hingeFromBodyCentre) {
      const bodies = Query.point(
        Composite.allBodies(ctx.engine.world),
        bottomOrSingle.position
      );
      bottom = bodies.reverse().find(b => b !== bottomOrSingle);
    }
    console.log(bottomOrSingle, topOrNone);
    console.log(top, bottom);
    const constraint = Constraint.create({
      bodyA: top,
      bodyB: bottom,
      pointA: ctx.hingeFromBodyCentre
        ? Vector.create()
        : Vector.sub(xy, top.position),
      pointB: Vector.sub(
        ctx.hingeFromBodyCentre ? top.position : xy,
        bottom?.position ?? Vector.create()
      ),
      stiffness: 0.7,
      render: { type: 'pin', strokeStyle: '#000', anchors: false },
    });
    //Make bodies not collide with one another
    //FIXME: this isn't powerful enough, as it makes either everything not collide, or using centre, causes collisions
    if (top && bottom) {
      const groupA = top.collisionFilter.group ?? 0;
      const groupB = bottom.collisionFilter.group ?? 0;
      const group =
        groupA < 0 ? groupA : groupB < 0 ? groupB : Body.nextGroup(true);
      top.collisionFilter.group = group;
      bottom.collisionFilter.group = group;
    }
    World.add(ctx.engine.world, constraint);
    return true;
  }
};
