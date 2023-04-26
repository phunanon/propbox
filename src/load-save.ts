import {
  Engine,
  IBodyDefinition,
  ICompositeDefinition,
  Body,
  Composite,
  Vector,
  World,
} from 'matter-js';

type BodyDef = Omit<IBodyDefinition, 'parts' | 'vertices'> & {
  vertices: Vector[];
  partDefs: BodyDef[];
};
type CompositeDef = Omit<ICompositeDefinition, 'bodies' | 'composites'> & {
  bodies: BodyDef[];
  composites: CompositeDef[];
};

type SaveObject = {
  bodies: BodyDef[];
  composites: CompositeDef[];
};

const body2def = (body: Body): BodyDef => {
  //Physical attributes
  const {
    density,
    friction,
    frictionAir,
    frictionStatic,
    restitution,
    ...sansPhysical
  } = body;
  //Physical spacetime
  const { angle, position, velocity, ...sansPosition } = sansPhysical;
  //Physical structure
  const { vertices, parts, ...sansStructure } = sansPosition;
  //Properties
  const { collisionFilter, isStatic, label, timeScale, type } = sansStructure;
  //The first member of parts is itself
  const partDefs = parts.slice(1).map(body2def);
  return {
    ...{ density, friction, frictionAir, frictionStatic, restitution },
    ...{ angle, position, velocity },
    ...{
      vertices: vertices.map(v => ({ x: v.x, y: v.y })),
      partDefs,
    },
    ...{ collisionFilter, isStatic, label, position, timeScale, type },
  };
};

const def2body = (def: BodyDef): Body => {
  //Physical attributes
  const {
    density,
    friction,
    frictionAir,
    frictionStatic,
    restitution,
    ...sansPhysical
  } = def;
  //Physical spacetime
  const { angle, position, velocity, ...sansPosition } = sansPhysical;
  //Physical structure
  const { vertices, partDefs, ...sansStructure } = sansPosition;
  //Properties
  const { collisionFilter, isStatic, label, timeScale, type } = sansStructure;
  const body = Body.create({
    ...{ density, friction, frictionAir, frictionStatic, restitution },
    ...{ angle, position, velocity },
    ...{ collisionFilter, isStatic, label, timeScale, type },
  });
  Body.setParts(body, partDefs.map(def2body));
  return body;
};

const comp2def = (composite: Composite): CompositeDef => {
  const { bodies, composites, label, type } = composite;
  return {
    bodies: bodies.map(body2def),
    composites: composites.map(comp2def),
    label,
    type,
  };
};

const def2comp = (def: CompositeDef): Composite => {
  const { bodies, composites, label, type } = def;
  const composite = Composite.create({ label, type });
  bodies.forEach(bodyDef => Composite.add(composite, def2body(bodyDef)));
  composites.forEach(compDef => Composite.add(composite, def2comp(compDef)));
  return composite;
};

export const save = ({ world }: Engine) => {
  const obj: SaveObject = {
    bodies: world.bodies.map(body2def),
    composites: world.composites.map(comp2def),
  };
  localStorage.setItem('propbox', JSON.stringify(obj));
};

export const load = (): Engine | undefined => {
  const serialisedEngine = localStorage.getItem('propbox');
  if (!serialisedEngine) return;
  const { bodies, composites } = JSON.parse(serialisedEngine) as SaveObject;
  const engine = Engine.create();
  bodies.map(def2body).forEach(body => World.add(engine.world, body));
  composites.map(def2comp).forEach(comp => World.add(engine.world, comp));
  return engine;
};
