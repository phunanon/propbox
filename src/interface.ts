import { Engine, Runner, Mouse, Common, Vector, Body } from 'matter-js';
import { Bodies, Composite, MouseConstraint, Composites } from 'matter-js';
import { Events } from 'matter-js';
import { Context } from './types';
import { HandlePan, HandleZoom } from './zoom-pan';
import { load, save } from './load-save';
import { Render } from './render';
import { HandleMenu, OpenToolboxMenu } from './context-menu';

export const Interface = (canvas: HTMLCanvasElement) => {
  const engine = Engine.create(); //load() ?? Engine.create();
  const { world } = engine;

  const render = Render.create({
    canvas,
    engine,
    options: {
      hasBounds: true,
      wireframes: false,
      background: '#87CEEB',
    },
  });

  Render.run(render);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: { render: { visible: false } },
  });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  const stack = Composites.stack(
    20,
    20,
    10,
    4,
    0,
    0,
    function (x: number, y: number) {
      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(20, 50),
              Common.random(20, 50),
              { render: { lineWidth: 2, strokeStyle: '#aaa' } }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(20, 30),
              { render: { lineWidth: 2, strokeStyle: '#aaa' } }
            );
          }
        case 1:
          var sides = Math.round(Common.random(1, 8));
          sides = sides === 3 ? 4 : sides;
          return Bodies.polygon(x, y, sides, Common.random(20, 50), {
            render: { lineWidth: 2, strokeStyle: '#aaa' },
          });
      }
    }
  );

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

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  const ctx: Context = {
    scale: {
      min: 0.1,
      max: 10,
      by: 1,
      target: 1,
      lastImpulse: new Date().getTime(),
      targetPos: { x: 0, y: 0 },
    },
    ...{ render, runner, mouseConstraint, menus: [], tool: 'drag' },
  };

  OpenToolboxMenu(ctx);
  Events.on(render, 'beforeRender', BeforeRender(ctx));
  Events.on(render, 'afterRender', AfterRender(ctx));

  //Autosave
  setInterval(() => save(engine), 10_000);

  return {
    HandleResize: (w: number, h: number) => {
      render.canvas.width = w;
      render.canvas.height = h;
      render.options.width = w;
      render.options.height = h;
      render.bounds.max.x = render.bounds.min.x + w * render.mouse.scale.x;
      render.bounds.max.y = render.bounds.min.y + h * render.mouse.scale.y;
    },
    HandlePlayToggle: () => {
      if (runner.enabled) {
        runner.enabled = false;
      } else {
        runner.enabled = true;
      }
    },
  };
};

const BeforeRender = (context: Context) => () => {
  const { mouseState, mouseConstraint } = context;
  const { mouse, body } = mouseConstraint;
  const leftClicked = mouse.button === 0;
  if (!mouseState || mouseState === 'up' || mouseState === 'afterDragOrPan') {
    if (leftClicked) {
      context.mouseState = 'undetermined';
      context.mouseDownAt = Vector.clone(mouse.absolute);
    }
  } else {
    if (mouseState === 'undetermined') {
      if (body && !body.isStatic) context.mouseState = 'drag';
      else if (!leftClicked) context.mouseState = 'up';
    } else if (!leftClicked) {
      context.mouseState = 'afterDragOrPan';
    }
  }
  HandleZoom(context);
  HandlePan(context);
};

const AfterRender = (context: Context) => () => {
  HandleMenu(context);
};
