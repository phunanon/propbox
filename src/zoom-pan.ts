import { Bounds, Mouse, Vector } from "matter-js";
import { RenderContext } from "./types";


export const HandleZoom = ({ mouseConstraint, scale, render }: RenderContext) => {
  const { mouse } = mouseConstraint;
  const width = render.options.width ?? 0;
  const height = render.options.height ?? 0;

  if (mouse.wheelDelta) {
    const scaleFactor = mouse.wheelDelta * -0.05 * scale.by;
    scale.target = Math.min(
      Math.max(scale.target + scaleFactor, scale.min),
      scale.max
    );
  }

  if (Math.abs(scale.by - scale.target) < 0.01) return;

  //smooth zooming
  const scaleFactor = (scale.target - scale.by) * 0.05;
  scale.by += scaleFactor;

  render.bounds.max.x = render.bounds.min.x + width * scale.by;
  render.bounds.max.y = render.bounds.min.y + height * scale.by;
  const translate = {
    x: mouse.absolute.x * -scaleFactor,
    y: mouse.absolute.y * -scaleFactor,
  };

  Bounds.translate(render.bounds, translate);
  Mouse.setScale(mouse, { x: scale.by, y: scale.by });
  Mouse.setOffset(mouse, render.bounds.min);
};

export const HandlePan = (context: RenderContext) => {
  const { mouseConstraint, render, panningFrom } = context;
  const { mouse, body } = mouseConstraint;
  const button = { [-1]: 'none', 0: 'left', 2: 'right' }[mouse.button];

  if (button === 'none' || (body && !body.isStatic)) {
    delete context.panningFrom;
    return;
  }

  if (!panningFrom) {
    context.panningFrom = Vector.clone(mouse.absolute);
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
  context.panningFrom = Vector.clone(mouse.absolute);
};
