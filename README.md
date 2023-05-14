## Propbox - fun 2D simulator

If you enjoy the premise of this project, check out [Algodoo](http://www.algodoo.com/), to which I owe many happy solid months of my life.  
This is essentially an interface to the [Matter.js](https://brm.io/matter-js/) physics engine.

**Features (adding upon Matter.js):**

- zooming and panning
- auto-save and auto-load
- body drag, erase
- play/pause
- draggable context menus
- create rectangles, circles, springs, hinges
- scene reset

**Planned features:**

- control engine.timing.timeScale
- scene ruler
- tooltips
- create motors
- non-rotate drag (use menu with checkbox for option)
- dynamic cursor
- kinetic pan
- specify and create polygon
- draw polygon
- save/load/import/export
- clouds
- grid
- select shape/s
- follow shape
- change fixed physical properties (dimensions, density, etc)
- resize shapes
- rotate shapes
- create fixjoints
- create thrusters
- move fixjoints
- move hinges
- move springs
- change dynamic physical properties (position, velocity, etc)
- event-driven scene scripts
- event-driven object scripts
- undo/redo
- change scene properties (background, gravity, etc)
- dynamic spring size
- Algodoo-esque dragging
- change colours
- change textures
- create planes?

**Known issues:**
- a group of bodies connected by hinges either never collide with one another, or explode
  - [Github issue](https://github.com/liabru/matter-js/issues/1222)
- springs with both ends off-screen are not rendered
  - [Github issue](https://github.com/liabru/matter-js/issues/1218)
