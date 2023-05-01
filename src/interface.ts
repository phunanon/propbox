import { Engine, Runner, Mouse, Common, Vector, Body } from 'matter-js';
import { Bodies, Composite, MouseConstraint, Composites } from 'matter-js';
import { Events } from 'matter-js';
import { Context, createTools } from './types';
import { HandlePan, HandleZoom } from './zoom-pan';
import { load, save } from './load-save';
import { Render } from './render';
import { HandleMenu, OpenToolboxMenu } from './context-menu';
import { HandleCreateShapes } from './create-shapes';
import { HandleEraseShapes } from './erase-shapes';

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
      var sides = Math.round(Common.random(1, 8));
      return Bodies.polygon(x, y, sides, Common.random(20, 50), {
        render: { lineWidth: 2, strokeStyle: '#aaa' },
      });
    }
  );

  Composite.add(world, [
    stack,
    Bodies.rectangle(0, 600, 8000, 50, { isStatic: true }),
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
    mouseState: 'rest',
    ...{ render, runner, engine, mouseConstraint, menus: [], tool: 'drag' },
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

const BeforeRender = (ctx: Context) => () => {
  const { mouseState, mouseConstraint, tool } = ctx;
  const { mouse, body } = mouseConstraint;
  const leftClicked = mouse.button === 0;

  if (mouseState === 'rest') {
    if (leftClicked) ctx.mouseState = [Vector.clone(mouse.absolute), 'press'];
  } else if (Array.isArray(mouseState)) {
    const [pos, state] = mouseState;
    if (state !== 'draw') {
      const mouseHasMoved =
        mouse.absolute.x !== pos.x || mouse.absolute.y !== pos.y;
      if (mouseHasMoved) {
        if (tool === 'drag') {
          ctx.mouseState = body && !body.isStatic ? 'drag' : 'pan';
        } else if (tool === 'pan') {
          ctx.mouseState = 'pan';
        } else if (createTools.some(t => t === tool)) {
          ctx.mouseState = [pos, 'draw'];
        }
      } else if (!leftClicked) {
        ctx.mouseState = 'click';
      }
    }
  } else {
    if (mouseState === 'drag' || mouseState === 'pan') {
      if (!leftClicked) ctx.mouseState = 'rest';
    }
    //The drawing mouseState is handled by create-shapes.ts
    //The click mouseState is handled by context-menu.ts
    //TODO: in the future, we'll be able to click shapes too, so this needs to be changed
  }

  //Do not allow anything but drag tool to drag bodies
  if (tool !== 'drag') {
    //@ts-ignore because the type definition is wrong
    mouseConstraint.constraint.bodyA = null;
    //@ts-ignore because the type definition is wrong
    mouseConstraint.constraint.bodyB = null;
  }

  HandleZoom(ctx);
  HandlePan(ctx);
};

const AfterRender = (ctx: Context) => () => {
  if (HandleMenu(ctx)) return;

  HandleCreateShapes(ctx);
  HandleEraseShapes(ctx);

  if (ctx.mouseConstraint.mouse.button) {
    ctx.mouseState = 'rest';
  }
};
