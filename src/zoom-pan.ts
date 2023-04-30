import { Bounds, Mouse, Vector } from 'matter-js';
import { Context } from './types';

//FIXME: zoom is uncontrolled when paused
export const HandleZoom = ({ mouseConstraint, scale, render }: Context) => {
  const { mouse } = mouseConstraint;
  const width = render.options.width ?? 0;
  const height = render.options.height ?? 0;

  if (mouse.wheelDelta) {
    const scaleFactor = mouse.wheelDelta * -0.02 * scale.by;
    scale.target = Math.min(
      Math.max(scale.target + scaleFactor, scale.min),
      scale.max
    );
    const now = new Date().getTime();
    if (now > scale.lastImpulse + 100) {
      scale.targetPos = Vector.clone(mouse.absolute);
    }
    scale.lastImpulse = now;
  }

  if (Math.abs(scale.by - scale.target) < 0.01) return;

  //smooth zooming
  const scaleFactor = (scale.target - scale.by) * 0.1;
  scale.by += scaleFactor;

  render.bounds.max.x = render.bounds.min.x + width * scale.by;
  render.bounds.max.y = render.bounds.min.y + height * scale.by;
  const translate = {
    x: scale.targetPos.x * -scaleFactor,
    y: scale.targetPos.y * -scaleFactor,
  };

  Bounds.translate(render.bounds, translate);
  Mouse.setScale(mouse, { x: scale.by, y: scale.by });
  Mouse.setOffset(mouse, render.bounds.min);
};

/** Pans scene */
export const HandlePan = (ctx: Context) => {
  const { mouseState, mouseConstraint, render, panningFrom } = ctx;
  const { mouse } = mouseConstraint;

  if (mouseState !== 'pan') {
    delete ctx.panningFrom;
    return;
  }

  //Begin or renew pan
  if (!panningFrom) {
    ctx.panningFrom = Vector.clone(mouse.absolute);
    return;
  }

  const delta = Vector.sub(mouse.absolute, panningFrom);

  if (delta.x === 0 && delta.y === 0) return;

  const translate = {
    x: -delta.x * mouse.scale.x,
    y: -delta.y * mouse.scale.y,
  };

  Bounds.translate(render.bounds, translate);
  Mouse.setOffset(mouse, render.bounds.min);
  ctx.panningFrom = Vector.clone(mouse.absolute);
};
