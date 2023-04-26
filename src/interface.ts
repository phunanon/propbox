import { Engine, Render, Runner, Vector, Mouse, Common } from 'matter-js';
import { Bodies, Composite, MouseConstraint, Composites } from 'matter-js';
import { Bounds, Events } from 'matter-js';

export const Interface = (canvas: HTMLCanvasElement) => {
  const engine = Engine.create();
  const { world } = engine;

  const render = Render.create({
    canvas,
    engine,
    options: {
      hasBounds: true,
      wireframes: false,
    },
  });

  Render.run(render);

  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { render: { visible: false } },
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  const stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
    switch (Math.round(Common.random(0, 1))) {
      case 0:
        if (Common.random() < 0.8) {
          return Bodies.rectangle(
            x,
            y,
            Common.random(20, 50),
            Common.random(20, 50)
          );
        } else {
          return Bodies.rectangle(
            x,
            y,
            Common.random(80, 120),
            Common.random(20, 30)
          );
        }
      case 1:
        var sides = Math.round(Common.random(1, 8));
        sides = sides === 3 ? 4 : sides;
        return Bodies.polygon(x, y, sides, Common.random(20, 50));
    }
  });

  Composite.add(world, [
    stack,
    // Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: {fillStyle: "#fff"} }),
    Bodies.rectangle(400, 600, 800, 50, {
      isStatic: true,
      render: { fillStyle: '#fff' },
    }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  ]);

  const context: RenderContext = {
    render,
    scale: { min: 0.1, max: 10, by: 1, target: 1 },
    mouseConstraint,
  };

  Events.on(render, 'beforeRender', BeforeRender(context));

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  return {
    HandleResize: (w: number, h: number) => {
      render.canvas.width = w;
      render.canvas.height = h;
      render.options.width = w;
      render.options.height = h;
      render.bounds.max.x = render.bounds.min.x + w * render.mouse.scale.x;
      render.bounds.max.y = render.bounds.min.y + h * render.mouse.scale.y;
    },
  };
};

type RenderContext = {
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

const BeforeRender = (context: RenderContext) => () => {
  HandleZoom(context);
  HandlePan(context);
};

const HandleZoom = ({ mouseConstraint, scale, render }: RenderContext) => {
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

const HandlePan = (context: RenderContext) => {
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
