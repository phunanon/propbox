import { Engine, Runner, Mouse, Common, Vector } from 'matter-js';
import { Bodies, Composite, MouseConstraint, Composites } from 'matter-js';
import { Events } from 'matter-js';
import { Context, drawTools } from './types';
import { HandlePan, HandleZoom } from './zoom-pan';
import { load, save } from './load-save';
import { Render } from './render';
import {
  HandleMenu,
  MenuUnderMouse,
  MenuPosition,
  OpenToolboxMenu,
} from './context-menu';
import { HandleDrawShapes } from './draw-things';
import { HandlePlaceThings } from './place-things';
import { HandleEraseShapes } from './erase-shapes';
import { addGround, initialCtxScale } from './reset-ctx';

export const Interface = (canvas: HTMLCanvasElement) => {
  const engine = load() ?? Engine.create({ enableSleeping: true });
  const { world } = engine;

  const render = Render.create({
    canvas,
    engine,
    options: {
      hasBounds: true,
      wireframes: false,
      background: '#87CEEB',
      showSleeping: false,
    },
  });

  Render.run(render);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      render: { visible: false },
      //FIXME: I can submit a PR to the type definitions to fix this
      //@ts-ignore because the type definition is wrong
      angularStiffness: 0,
    },
  });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  if (!world.bodies.length) addGround(world);

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  const ctx: Context = {
    scale: { ...initialCtxScale },
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
    if (leftClicked) {
      const menu = MenuUnderMouse(ctx);
      if (menu) {
        ctx.mouseState = [Vector.clone(mouse.absolute), 'menuPress', menu];
      } else {
        ctx.mouseState = [Vector.clone(mouse.absolute), 'press'];
      }
    }
  } else if (Array.isArray(mouseState) && mouseState[1] !== 'menuDrag') {
    const [pos, state] = mouseState;
    const mouseHasMoved =
      mouse.absolute.x !== pos.x || mouse.absolute.y !== pos.y;
    if (mouseHasMoved && state === 'menuPress') {
      const offset = Vector.sub(
        mouse.absolute,
        MenuPosition(ctx, mouseState[2])
      );
      ctx.mouseState = [offset, 'menuDrag', mouseState[2]];
    } else if (state !== 'draw') {
      if (mouseHasMoved) {
        if (tool === 'drag') {
          ctx.mouseState = body && !body.isStatic ? 'drag' : 'pan';
        } else if (tool === 'pan') {
          ctx.mouseState = 'pan';
        } else if (drawTools.some(t => t === tool)) {
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
  if (
    tool !== 'drag' ||
    (Array.isArray(mouseState) && mouseState[1] === 'menuDrag')
  ) {
    mouseConstraint.constraint.bodyA = null;
    mouseConstraint.constraint.bodyB = null;
  }

  HandleZoom(ctx);
  HandlePan(ctx);
};

const AfterRender = (ctx: Context) => () => {
  HandlePlaceThings(ctx);

  if (HandleMenu(ctx)) return;

  HandleDrawShapes(ctx);
  HandleEraseShapes(ctx);

  if (ctx.mouseConstraint.mouse.button) {
    ctx.mouseState = 'rest';
  }
};
