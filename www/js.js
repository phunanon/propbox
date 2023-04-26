/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1787__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_1787__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_1787__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_1787__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_1787__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_1787__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_1787__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_1787__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_1787__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_1787__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_1787__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_1787__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_1787__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._baseDelta = 1000 / 60;
    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());
    Common._warnedOnce = {};
    Common._decomp = null;
    
    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */
    Common.now = function() {
        if (typeof window !== 'undefined' && window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        if (Date.now) {
            return Date.now();
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @static
     * @property logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */
    Common.warnOnce = function() {
        var message = Array.prototype.slice.call(arguments).join(' ');

        if (!Common._warnedOnce[message]) {
            Common.warn(message);
            Common._warnedOnce[message] = true;
        }
    };

    /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */
    Common.deprecated = function(obj, prop, warning) {
        obj[prop] = Common.chain(function() {
            Common.warnOnce('🔅 deprecated 🔅', warning);
        }, obj[prop]);
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */
    Common.setDecomp = function(decomp) {
        Common._decomp = decomp;
    };

    /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */
    Common.getDecomp = function() {
        // get user provided decomp if set
        var decomp = Common._decomp;

        try {
            // otherwise from window global
            if (!decomp && typeof window !== 'undefined') {
                decomp = window.decomp;
            }
    
            // otherwise from node global
            if (!decomp && typeof __webpack_require__.g !== 'undefined') {
                decomp = __webpack_require__.g.decomp;
            }
        } catch (e) {
            // decomp not available
            decomp = null;
        }

        return decomp;
    };
})();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_35421__) {

/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = __nested_webpack_require_35421__(2);
var Common = __nested_webpack_require_35421__(0);

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        scalar = typeof scalar !== 'undefined' ? scalar : 1;

        var verticesLength = vertices.length,
            translateX = vector.x * scalar,
            translateY = vector.y * scalar,
            i;
        
        for (i = 0; i < verticesLength; i++) {
            vertices[i].x += translateX;
            vertices[i].y += translateY;
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex,
            dx,
            dy,
            i;

        for (i = 0; i < verticesLength; i++) {
            vertex = vertices[i];
            dx = vertex.x - pointX;
            dy = vertex.y - pointY;
            vertex.x = pointX + (dx * cos - dy * sin);
            vertex.y = pointY + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        var pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex = vertices[verticesLength - 1],
            nextVertex;

        for (var i = 0; i < verticesLength; i++) {
            nextVertex = vertices[i];

            if ((pointX - vertex.x) * (nextVertex.y - vertex.y) 
                + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                return false;
            }

            vertex = nextVertex;
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_49544__) {

/**
* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = __nested_webpack_require_49544__(3);
var Vector = __nested_webpack_require_49544__(2);
var Sleeping = __nested_webpack_require_49544__(7);
var Common = __nested_webpack_require_49544__(0);
var Bounds = __nested_webpack_require_49544__(1);
var Axes = __nested_webpack_require_49544__(11);

(function() {

    Body._timeCorrection = true;
    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;
    Body._baseDelta = 1000 / 60;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                }
            },
            events: null,
            bounds: null,
            chamfer: null,
            circleRadius: 0,
            positionPrev: null,
            anglePrev: 0,
            parent: null,
            axes: null,
            area: 0,
            mass: 0,
            inertia: 0,
            deltaTime: 1000 / 60,
            _original: null
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            if (!Object.prototype.hasOwnProperty.call(settings, property))
                continue;

            value = settings[property];
            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'speed':
                Body.setSpeed(body, value);
                break;
            case 'angularSpeed':
                Body.setAngularSpeed(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            case 'centre':
                Body.setCentre(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.isStatic = isStatic;

            if (isStatic) {
                part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                };

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                part._original = null;
            }
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
     * 
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param {body[]} parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */
    Body.setCentre = function(body, centre, relative) {
        if (!relative) {
            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
            body.position.x = centre.x;
            body.position.y = centre.y;
        } else {
            body.positionPrev.x += centre.x;
            body.positionPrev.y += centre.y;
            body.position.x += centre.x;
            body.position.y += centre.y;
        }
    };

    /**
     * Sets the position of the body. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     * @param {boolean} [updateVelocity=false]
     */
    Body.setPosition = function(body, position, updateVelocity) {
        var delta = Vector.sub(position, body.position);

        if (updateVelocity) {
            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;
            body.velocity.x = delta.x;
            body.velocity.y = delta.y;
            body.speed = Vector.magnitude(delta);
        } else {
            body.positionPrev.x += delta.x;
            body.positionPrev.y += delta.y;
        }

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     * @param {boolean} [updateVelocity=false]
     */
    Body.setAngle = function(body, angle, updateVelocity) {
        var delta = angle - body.angle;
        
        if (updateVelocity) {
            body.anglePrev = body.angle;
            body.angularVelocity = delta;
            body.angularSpeed = Math.abs(delta);
        } else {
            body.anglePrev += delta;
        }

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the current linear velocity of the body.  
     * Affects body speed.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        var timeScale = body.deltaTime / Body._baseDelta;
        body.positionPrev.x = body.position.x - velocity.x * timeScale;
        body.positionPrev.y = body.position.y - velocity.y * timeScale;
        body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
        body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Gets the current linear velocity of the body.
     * @method getVelocity
     * @param {body} body
     * @return {vector} velocity
     */
    Body.getVelocity = function(body) {
        var timeScale = Body._baseDelta / body.deltaTime;

        return {
            x: (body.position.x - body.positionPrev.x) * timeScale,
            y: (body.position.y - body.positionPrev.y) * timeScale
        };
    };

    /**
     * Gets the current linear speed of the body.  
     * Equivalent to the magnitude of its velocity.
     * @method getSpeed
     * @param {body} body
     * @return {number} speed
     */
    Body.getSpeed = function(body) {
        return Vector.magnitude(Body.getVelocity(body));
    };

    /**
     * Sets the current linear speed of the body.  
     * Direction is maintained. Affects body velocity.
     * @method setSpeed
     * @param {body} body
     * @param {number} speed
     */
    Body.setSpeed = function(body, speed) {
        Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
    };

    /**
     * Sets the current rotational velocity of the body.  
     * Affects body angular speed.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        var timeScale = body.deltaTime / Body._baseDelta;
        body.anglePrev = body.angle - velocity * timeScale;
        body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Gets the current rotational velocity of the body.
     * @method getAngularVelocity
     * @param {body} body
     * @return {number} angular velocity
     */
    Body.getAngularVelocity = function(body) {
        return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
    };

    /**
     * Gets the current rotational speed of the body.  
     * Equivalent to the magnitude of its angular velocity.
     * @method getAngularSpeed
     * @param {body} body
     * @return {number} angular speed
     */
    Body.getAngularSpeed = function(body) {
        return Math.abs(Body.getAngularVelocity(body));
    };

    /**
     * Sets the current rotational speed of the body.  
     * Direction is maintained. Affects body angular velocity.
     * @method setAngularSpeed
     * @param {body} body
     * @param {number} speed
     */
    Body.setAngularSpeed = function(body, speed) {
        Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
    };

    /**
     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     * @param {boolean} [updateVelocity=false]
     */
    Body.translate = function(body, translation, updateVelocity) {
        Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
    };

    /**
     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     * @param {boolean} [updateVelocity=false]
     */
    Body.rotate = function(body, rotation, point, updateVelocity) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation, updateVelocity);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            }, updateVelocity);

            Body.setAngle(body, body.angle + rotation, updateVelocity);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs an update by integrating the equations of motion on the `body`.
     * This is applied every update by `Matter.Engine` automatically.
     * @method update
     * @param {body} body
     * @param {number} [deltaTime=16.666]
     */
    Body.update = function(body, deltaTime) {
        deltaTime = (typeof deltaTime !== 'undefined' ? deltaTime : (1000 / 60)) * body.timeScale;

        var deltaTimeSquared = deltaTime * deltaTime,
            correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;

        // from the previous step
        var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta),
            velocityPrevX = (body.position.x - body.positionPrev.x) * correction,
            velocityPrevY = (body.position.y - body.positionPrev.y) * correction;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;
        body.deltaTime = deltaTime;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
     * @method updateVelocities
     * @param {body} body
     */
    Body.updateVelocities = function(body) {
        var timeScale = Body._baseDelta / body.deltaTime,
            bodyVelocity = body.velocity;

        bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
        bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
        body.speed = Math.sqrt((bodyVelocity.x * bodyVelocity.x) + (bodyVelocity.y * bodyVelocity.y));

        body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
     * 
     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
     * 
     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
     * 
     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
     * 
     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
     * 
     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
     * 
     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
     * @method applyForce
     * @param {body} body
     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.force.x += force.x;
        body.force.y += force.y;
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * _Read only_. Set by `Body.create`.
     * 
     * A `String` denoting the type of object.
     *
     * @readOnly
     * @property type
     * @type string
     * @default "body"
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * _Read only_. Use `Body.setParts` to set. 
     * 
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @readOnly
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * _Read only_. Updated by `Body.setParts`.
     * 
     * A reference to the body that this is a part of. See `body.parts`.
     * This is a self reference if the body is not a part of another body.
     *
     * @readOnly
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
     * 
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     * `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
     * 
     * Vertices must always be convex, in clockwise order and must not contain any duplicate points.
     * 
     * Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
     *
     * When set the vertices are translated such that `body.position` is at the centre of mass.
     * Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
     * 
     * The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @readOnly
     * @property vertices
     * @type vector[]
     */

    /**
     * _Read only_. Use `Body.setPosition` to set. 
     * 
     * A `Vector` that specifies the current world-space position of the body.
     * 
     * @readOnly
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that accumulates the total force applied to the body for a single update.
     * Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
     * 
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
     * Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
     *
     * Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
     * 
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setSpeed` to set. 
     * 
     * See `Body.getSpeed` for details.
     * 
     * Equivalent to the magnitude of `body.velocity` (always positive).
     * 
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setVelocity` to set. 
     * 
     * See `Body.getVelocity` for details.
     * 
     * Equivalent to the magnitude of `body.angularVelocity` (always positive).
     * 
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * _Read only_. Use `Body.setAngularSpeed` to set. 
     * 
     * See `Body.getAngularSpeed` for details.
     * 
     * 
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setAngularVelocity` to set. 
     * 
     * See `Body.getAngularVelocity` for details.
     * 
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setStatic` to set. 
     * 
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     *
     * @readOnly
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * _Read only_. Use `Sleeping.set` to set. 
     * 
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     *
     * @readOnly
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * _Read only_. Calculated during engine update only when sleeping is enabled.
     * 
     * A `Number` that loosely measures the amount of movement a body currently has.
     *
     * Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
     * 
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     * 
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * _Read only_. Use `Body.setDensity` to set. 
     * 
     * A `Number` that defines the density of the body (mass per unit area).
     * 
     * Mass will also be updated when set.
     *
     * @readOnly
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the mass of the body.
     * 
     * Density will also be updated when set.
     * 
     * @readOnly
     * @property mass
     * @type number
     */

    /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     *
     * @readOnly
     * @property inverseMass
     * @type number
     */

    /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
     * 
     * A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
     * 
     * Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
     * 
     * @readOnly
     * @property inertia
     * @type number
     */

    /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
     * 
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * 
     * @readOnly
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     * `Math.max(bodyA.restitution, bodyB.restitution)`
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     * `Math.min(bodyA.friction, bodyB.friction)`
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
     * 
     * This is required for proper collision response, including friction and restitution effects.
     * 
     * The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that specifies per-body time scaling.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * _Read only_. Updated during engine update.
     * 
     * A `Number` that records the last delta time value used to update this body.
     * Used to calculate speed and velocity.
     *
     * @readOnly
     * @property deltaTime
     * @type number
     * @default 1000 / 60
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

    /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

    /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated when vertices are set.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @readOnly
     * @property axes
     * @type vector[]
     */
     
    /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * A `Number` that measures the area of the body's convex hull.
     * 
     * @readOnly
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
     * 
     * @property bounds
     * @type bounds
     */

})();


/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_99052__) {

/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = __nested_webpack_require_99052__(0);

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        var events = object.events;
        
        if (events && Common.keys(events).length > 0) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_102250__) {

/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = __nested_webpack_require_102250__(5);
var Common = __nested_webpack_require_102250__(0);
var Bounds = __nested_webpack_require_102250__(1);
var Body = __nested_webpack_require_102250__(4);

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {},
            cache: {
                allBodies: null,
                allConstraints: null,
                allComposites: null
            }
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (isModified && composite.cache) {
            composite.cache.allBodies = null;
            composite.cache.allConstraints = null;
            composite.cache.allComposites = null;
        }

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for (var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);
        if (position !== -1) {
            Composite.removeCompositeAt(compositeA, position);
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);
        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        if (composite.cache && composite.cache.allBodies) {
            return composite.cache.allBodies;
        }

        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allBodies = bodies;
        }

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        if (composite.cache && composite.cache.allConstraints) {
            return composite.cache.allConstraints;
        }

        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allConstraints = constraints;
        }

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        if (composite.cache && composite.cache.allComposites) {
            return composite.cache.allComposites;
        }

        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allComposites = composites;
        }

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
            .concat(Composite.allConstraints(composite))
            .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */

})();


/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_125937__) {

/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Body = __nested_webpack_require_125937__(4);
var Events = __nested_webpack_require_125937__(5);
var Common = __nested_webpack_require_125937__(0);

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} delta
     */
    Sleeping.update = function(bodies, delta) {
        var timeScale = delta / Common._baseDelta,
            motionSleepThreshold = Sleeping._motionSleepThreshold;
        
        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                speed = Body.getSpeed(body),
                angularSpeed = Body.getAngularSpeed(body),
                motion = speed * speed + angularSpeed * angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;

            if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                    Sleeping.set(body, true);
                }
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     */
    Sleeping.afterCollisions = function(pairs) {
        var motionSleepThreshold = Sleeping._motionSleepThreshold;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();


/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_130181__) {

/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/

var Collision = {};

module.exports = Collision;

var Vertices = __nested_webpack_require_130181__(3);
var Pair = __nested_webpack_require_130181__(9);

(function() {
    var _supports = [];

    var _overlapAB = {
        overlap: 0,
        axis: null
    };

    var _overlapBA = {
        overlap: 0,
        axis: null
    };

    /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */
    Collision.create = function(bodyA, bodyB) {
        return { 
            pair: null,
            collided: false,
            bodyA: bodyA,
            bodyB: bodyB,
            parentA: bodyA.parent,
            parentB: bodyB.parent,
            depth: 0,
            normal: { x: 0, y: 0 },
            tangent: { x: 0, y: 0 },
            penetration: { x: 0, y: 0 },
            supports: []
        };
    };

    /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */
    Collision.collides = function(bodyA, bodyB, pairs) {
        Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);

        if (_overlapAB.overlap <= 0) {
            return null;
        }

        Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);

        if (_overlapBA.overlap <= 0) {
            return null;
        }

        // reuse collision records for gc efficiency
        var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)],
            collision;

        if (!pair) {
            collision = Collision.create(bodyA, bodyB);
            collision.collided = true;
            collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
            collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
            collision.parentA = collision.bodyA.parent;
            collision.parentB = collision.bodyB.parent;
        } else {
            collision = pair.collision;
        }

        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        var minOverlap;

        if (_overlapAB.overlap < _overlapBA.overlap) {
            minOverlap = _overlapAB;
        } else {
            minOverlap = _overlapBA;
        }

        var normal = collision.normal,
            supports = collision.supports,
            minAxis = minOverlap.axis,
            minAxisX = minAxis.x,
            minAxisY = minAxis.y;

        // ensure normal is facing away from bodyA
        if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
            normal.x = minAxisX;
            normal.y = minAxisY;
        } else {
            normal.x = -minAxisX;
            normal.y = -minAxisY;
        }
        
        collision.tangent.x = -normal.y;
        collision.tangent.y = normal.x;

        collision.depth = minOverlap.overlap;

        collision.penetration.x = normal.x * collision.depth;
        collision.penetration.y = normal.y * collision.depth;

        // find support points, there is always either exactly one or two
        var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1),
            supportCount = 0;

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, supportsB[0])) {
            supports[supportCount++] = supportsB[0];
        }

        if (Vertices.contains(bodyA.vertices, supportsB[1])) {
            supports[supportCount++] = supportsB[1];
        }

        // find the supports from bodyA that are inside bodyB
        if (supportCount < 2) {
            var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);

            if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                supports[supportCount++] = supportsA[0];
            }

            if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                supports[supportCount++] = supportsA[1];
            }
        }

        // account for the edge case of overlapping but no vertex containment
        if (supportCount === 0) {
            supports[supportCount++] = supportsB[0];
        }

        // update supports array size
        supports.length = supportCount;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */
    Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
        var verticesALength = verticesA.length,
            verticesBLength = verticesB.length,
            verticesAX = verticesA[0].x,
            verticesAY = verticesA[0].y,
            verticesBX = verticesB[0].x,
            verticesBY = verticesB[0].y,
            axesLength = axes.length,
            overlapMin = Number.MAX_VALUE,
            overlapAxisNumber = 0,
            overlap,
            overlapAB,
            overlapBA,
            dot,
            i,
            j;

        for (i = 0; i < axesLength; i++) {
            var axis = axes[i],
                axisX = axis.x,
                axisY = axis.y,
                minA = verticesAX * axisX + verticesAY * axisY,
                minB = verticesBX * axisX + verticesBY * axisY,
                maxA = minA,
                maxB = minB;
            
            for (j = 1; j < verticesALength; j += 1) {
                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;

                if (dot > maxA) { 
                    maxA = dot;
                } else if (dot < minA) { 
                    minA = dot;
                }
            }

            for (j = 1; j < verticesBLength; j += 1) {
                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;

                if (dot > maxB) { 
                    maxB = dot;
                } else if (dot < minB) { 
                    minB = dot;
                }
            }

            overlapAB = maxA - minB;
            overlapBA = maxB - minA;
            overlap = overlapAB < overlapBA ? overlapAB : overlapBA;

            if (overlap < overlapMin) {
                overlapMin = overlap;
                overlapAxisNumber = i;

                if (overlap <= 0) {
                    // can not be intersecting
                    break;
                }
            } 
        }

        result.axis = axes[overlapAxisNumber];
        result.overlap = overlapMin;
    };

    /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */
    Collision._projectToAxis = function(projection, vertices, axis) {
        var min = vertices[0].x * axis.x + vertices[0].y * axis.y,
            max = min;

        for (var i = 1; i < vertices.length; i += 1) {
            var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;

            if (dot > max) { 
                max = dot; 
            } else if (dot < min) { 
                min = dot; 
            }
        }

        projection.min = min;
        projection.max = max;
    };

    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */
    Collision._findSupports = function(bodyA, bodyB, normal, direction) {
        var vertices = bodyB.vertices,
            verticesLength = vertices.length,
            bodyAPositionX = bodyA.position.x,
            bodyAPositionY = bodyA.position.y,
            normalX = normal.x * direction,
            normalY = normal.y * direction,
            nearestDistance = Number.MAX_VALUE,
            vertexA,
            vertexB,
            vertexC,
            distance,
            j;

        // find deepest vertex relative to the axis
        for (j = 0; j < verticesLength; j += 1) {
            vertexB = vertices[j];
            distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);

            // convex hill-climbing
            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertexB;
            }
        }

        // measure next vertex
        vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
        nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);

        // compare with previous vertex
        vertexB = vertices[(vertexA.index + 1) % verticesLength];
        if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
            _supports[0] = vertexA;
            _supports[1] = vertexB;

            return _supports;
        }

        _supports[0] = vertexA;
        _supports[1] = vertexC;

        return _supports;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */

    /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */

    /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */

    /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */

    /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */

    /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */

    /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */

    /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * An array of body vertices that represent the support points in the collision.
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */

})();


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_142084__) {

/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = __nested_webpack_require_142084__(16);

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            collision: collision,
            contacts: [],
            activeContacts: [],
            separation: 0,
            isActive: true,
            confirmedActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: 0,
            friction: 0,
            frictionStatic: 0,
            restitution: 0,
            slop: 0
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var contacts = pair.contacts,
            supports = collision.supports,
            activeContacts = pair.activeContacts,
            parentA = collision.parentA,
            parentB = collision.parentB,
            parentAVerticesLength = parentA.vertices.length;
        
        pair.isActive = true;
        pair.timeUpdated = timestamp;
        pair.collision = collision;
        pair.separation = collision.depth;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
        pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
        pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
        pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;

        collision.pair = pair;
        activeContacts.length = 0;
        
        for (var i = 0; i < supports.length; i++) {
            var support = supports[i],
                contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index,
                contact = contacts[contactId];

            if (contact) {
                activeContacts.push(contact);
            } else {
                activeContacts.push(contacts[contactId] = Contact.create(support));
            }
        }
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.activeContacts.length = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        if (bodyA.id < bodyB.id) {
            return 'A' + bodyA.id + 'B' + bodyB.id;
        } else {
            return 'A' + bodyB.id + 'B' + bodyA.id;
        }
    };

})();


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_145828__) {

/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = __nested_webpack_require_145828__(3);
var Vector = __nested_webpack_require_145828__(2);
var Sleeping = __nested_webpack_require_145828__(7);
var Bounds = __nested_webpack_require_145828__(1);
var Axes = __nested_webpack_require_145828__(11);
var Common = __nested_webpack_require_145828__(0);

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} delta
     */
    Constraint.solveAll = function(constraints, delta) {
        var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);

        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            isRigid = constraint.stiffness >= 1 || constraint.length === 0,
            stiffness = isRigid ? constraint.stiffness * timeScale 
                : constraint.stiffness * timeScale * timeScale,
            damping = constraint.damping * timeScale,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;
    
        if (damping > 0) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (damping > 0) {
                bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (damping > 0) {
                bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointAWorld = function(constraint) {
        return {
            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) 
                + (constraint.pointA ? constraint.pointA.x : 0),
            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) 
                + (constraint.pointA ? constraint.pointA.y : 0)
        };
    };

    /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointBWorld = function(constraint) {
        return {
            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) 
                + (constraint.pointB ? constraint.pointB.x : 0),
            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) 
                + (constraint.pointB ? constraint.pointB.y : 0)
        };
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_162575__) {

/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = __nested_webpack_require_162575__(2);
var Common = __nested_webpack_require_162575__(0);

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_164316__) {

/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = __nested_webpack_require_164316__(3);
var Common = __nested_webpack_require_164316__(0);
var Body = __nested_webpack_require_164316__(4);
var Bounds = __nested_webpack_require_164316__(1);
var Vector = __nested_webpack_require_164316__(2);

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
        var decomp = Common.getDecomp(),
            canDecomp,
            body,
            parts,
            isConvex,
            isConcave,
            vertices,
            i,
            j,
            k,
            v,
            z;

        // check decomp is as expected
        canDecomp = Boolean(decomp && decomp.quickDecomp);

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);
            isConcave = !isConvex;

            if (isConcave && !canDecomp) {
                Common.warnOnce(
                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
                );
            }

            if (isConvex || !canDecomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);
                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

            // offset such that body.position is at the centre off mass
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_178316__) {

/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/

var Detector = {};

module.exports = Detector;

var Common = __nested_webpack_require_178316__(0);
var Collision = __nested_webpack_require_178316__(8);

(function() {

    /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */
    Detector.create = function(options) {
        var defaults = {
            bodies: [],
            pairs: null
        };

        return Common.extend(defaults, options);
    };

    /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */
    Detector.setBodies = function(detector, bodies) {
        detector.bodies = bodies.slice(0);
    };

    /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */
    Detector.clear = function(detector) {
        detector.bodies = [];
    };

    /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */
    Detector.collisions = function(detector) {
        var collisions = [],
            pairs = detector.pairs,
            bodies = detector.bodies,
            bodiesLength = bodies.length,
            canCollide = Detector.canCollide,
            collides = Collision.collides,
            i,
            j;

        bodies.sort(Detector._compareBoundsX);

        for (i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                boundsA = bodyA.bounds,
                boundXMax = bodyA.bounds.max.x,
                boundYMax = bodyA.bounds.max.y,
                boundYMin = bodyA.bounds.min.y,
                bodyAStatic = bodyA.isStatic || bodyA.isSleeping,
                partsALength = bodyA.parts.length,
                partsASingle = partsALength === 1;

            for (j = i + 1; j < bodiesLength; j++) {
                var bodyB = bodies[j],
                    boundsB = bodyB.bounds;

                if (boundsB.min.x > boundXMax) {
                    break;
                }

                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                    continue;
                }

                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                    continue;
                }

                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                    continue;
                }

                var partsBLength = bodyB.parts.length;

                if (partsASingle && partsBLength === 1) {
                    var collision = collides(bodyA, bodyB, pairs);

                    if (collision) {
                        collisions.push(collision);
                    }
                } else {
                    var partsAStart = partsALength > 1 ? 1 : 0,
                        partsBStart = partsBLength > 1 ? 1 : 0;
                    
                    for (var k = partsAStart; k < partsALength; k++) {
                        var partA = bodyA.parts[k],
                            boundsA = partA.bounds;

                        for (var z = partsBStart; z < partsBLength; z++) {
                            var partB = bodyB.parts[z],
                                boundsB = partB.bounds;

                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x
                                || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                                continue;
                            }

                            var collision = collides(partA, partB, pairs);

                            if (collision) {
                                collisions.push(collision);
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

    /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */
    Detector._compareBoundsX = function(bodyA, bodyB) {
        return bodyA.bounds.min.x - bodyB.bounds.min.x;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */

})();


/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_184361__) {

/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = __nested_webpack_require_184361__(0);

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove);
        element.addEventListener('mousedown', mouse.mousedown);
        element.addEventListener('mouseup', mouse.mouseup);
        
        element.addEventListener('mousewheel', mouse.mousewheel);
        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

        element.addEventListener('touchmove', mouse.mousemove);
        element.addEventListener('touchstart', mouse.mousedown);
        element.addEventListener('touchend', mouse.mouseup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();


/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_191365__) {

/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = __nested_webpack_require_191365__(0);

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var parts = pattern.exec(range);
        var major = Number(parts[4]);
        var minor = Number(parts[5]);
        var patch = Number(parts[6]);

        return {
            isRange: Boolean(parts[1] || parts[2]),
            version: parts[3],
            range: range,
            operator: parts[1] || parts[2] || '',
            major: major,
            minor: minor,
            patch: patch,
            parts: [major, minor, patch],
            prerelease: parts[7],
            number: major * 1e8 + minor * 1e4 + patch
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var r = Plugin.versionParse(range),
            v = Plugin.versionParse(version);

        if (r.isRange) {
            if (r.operator === '*' || version === '*') {
                return true;
            }

            if (r.operator === '>') {
                return v.number > r.number;
            }

            if (r.operator === '>=') {
                return v.number >= r.number;
            }

            if (r.operator === '~') {
                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
            }

            if (r.operator === '^') {
                if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                }

                if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                }

                return v.patch === r.patch;
            }
        }

        return version === range || version === '*';
    };

})();


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };

})();


/***/ }),
/* 17 */
/***/ (function(module, exports, __nested_webpack_require_205269__) {

/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var Sleeping = __nested_webpack_require_205269__(7);
var Resolver = __nested_webpack_require_205269__(18);
var Detector = __nested_webpack_require_205269__(13);
var Pairs = __nested_webpack_require_205269__(19);
var Events = __nested_webpack_require_205269__(5);
var Composite = __nested_webpack_require_205269__(6);
var Constraint = __nested_webpack_require_205269__(10);
var Common = __nested_webpack_require_205269__(0);
var Body = __nested_webpack_require_205269__(4);

(function() {

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(options) {
        options = options || {};

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0
            }
        };

        var engine = Common.extend(defaults, options);

        engine.world = options.world || Composite.create({ label: 'World' });
        engine.pairs = options.pairs || Pairs.create();
        engine.detector = options.detector || Detector.create();

        // for temporary back compatibility only
        engine.grid = { buckets: [] };
        engine.world.gravity = engine.gravity;
        engine.broadphase = engine.grid;
        engine.metrics = {};
        
        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` milliseconds.
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     */
    Engine.update = function(engine, delta) {
        var startTime = Common.now();

        var world = engine.world,
            detector = engine.detector,
            pairs = engine.pairs,
            timing = engine.timing,
            timestamp = timing.timestamp,
            i;

        delta = typeof delta !== 'undefined' ? delta : Common._baseDelta;
        delta *= timing.timeScale;

        // increment timestamp
        timing.timestamp += delta;
        timing.lastDelta = delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp,
            delta: delta
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get all bodies and all constraints in the world
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);

        // if the world has changed
        if (world.isModified) {
            // update the detector bodies
            Detector.setBodies(detector, allBodies);

            // reset all composite modified flags
            Composite.setModified(world, false, false, true);
        }

        // update sleeping if enabled
        if (engine.enableSleeping)
            Sleeping.update(allBodies, delta);

        // apply gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, engine.gravity);

        // update all body position and rotation by integration
        if (delta > 0) {
            Engine._bodiesUpdate(allBodies, delta);
        }

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, delta);
        }
        Constraint.postSolveAll(allBodies);

        // find all collisions
        detector.pairs = engine.pairs;
        var collisions = Detector.collisions(detector);

        // update collision pairs
        Pairs.update(pairs, collisions, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list);

        // trigger collision events
        if (pairs.collisionStart.length > 0)
            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

        // iteratively resolve position between collisions
        var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
        
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, delta, positionDamping);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, delta);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, delta);
        }

        // update body speed and velocity properties
        Engine._bodiesUpdateVelocities(allBodies);

        // trigger collision events
        if (pairs.collisionActive.length > 0)
            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

        if (pairs.collisionEnd.length > 0)
            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });

        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        // log the time elapsed computing this update
        engine.timing.lastElapsed = Common.now() - startTime;

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        Pairs.clear(engine.pairs);
        Detector.clear(engine.detector);
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        var bodiesLength = bodies.length;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applies gravitational acceleration to all `bodies`.
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
     * 
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001,
            bodiesLength = bodies.length;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // add the resultant force of gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applies `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} delta The amount of time elapsed between updates
     */
    Engine._bodiesUpdate = function(bodies, delta) {
        var bodiesLength = bodies.length;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, delta);
        }
    };

    /**
     * Applies `Body.updateVelocities` to all given `bodies`.
     * @method _bodiesUpdateVelocities
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesUpdateVelocities = function(bodies) {
        var bodiesLength = bodies.length;

        for (var i = 0; i < bodiesLength; i++) {
            Body.updateVelocities(bodies[i]);
        }
    };

    /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     * 
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     * 
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the `delta` value used in the last engine update.
     * 
     * @property timing.lastDelta
     * @type number
     * @default 0
     */

    /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */

    /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
     * 
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
     * 
     * To disable set the `scale` component to `0`.
     * 
     * This is split into three components for ease of use:  
     * a normalised direction (`x` and `y`) and magnitude (`scale`).
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
     * 
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The magnitude of the gravitational acceleration.
     * 
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

})();


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_222656__) {

/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = __nested_webpack_require_222656__(3);
var Common = __nested_webpack_require_222656__(0);
var Bounds = __nested_webpack_require_222656__(1);

(function() {

    Resolver._restingThresh = 2;
    Resolver._restingThreshTangent = Math.sqrt(6);
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;
    Resolver._frictionMaxStatic = Number.MAX_VALUE;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            activeCount,
            pairsLength = pairs.length;

        // find total contacts on each body
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            activeCount = pair.activeContacts.length;
            pair.collision.parentA.totalContacts += activeCount;
            pair.collision.parentB.totalContacts += activeCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} delta
     * @param {number} [damping=1]
     */
    Resolver.solvePosition = function(pairs, delta, damping) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            contactShare,
            positionImpulse,
            positionDampen = Resolver._positionDampen * (damping || 1),
            slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1),
            pairsLength = pairs.length;

        // find impulses required to resolve penetration
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            pair.separation = 
                normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x)
                + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
        }
        
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = pair.separation - pair.slop * slopDampen;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        var positionWarming = Resolver._positionWarming,
            bodiesLength = bodies.length,
            verticesTranslate = Vertices.translate,
            boundsUpdate = Bounds.update;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i],
                positionImpulse = body.positionImpulse,
                positionImpulseX = positionImpulse.x,
                positionImpulseY = positionImpulse.y,
                velocity = body.velocity;

            // reset contact count
            body.totalContacts = 0;

            if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    verticesTranslate(part.vertices, positionImpulse);
                    boundsUpdate(part.bounds, part.vertices, velocity);
                    part.position.x += positionImpulseX;
                    part.position.y += positionImpulseY;
                }

                // move the body without changing velocity
                body.positionPrev.x += positionImpulseX;
                body.positionPrev.y += positionImpulseY;

                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                    // reset cached impulse if the body has velocity along it
                    positionImpulse.x = 0;
                    positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    positionImpulse.x *= positionWarming;
                    positionImpulse.y *= positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var pairsLength = pairs.length,
            i,
            j;
        
        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var contacts = pair.activeContacts,
                contactsLength = contacts.length,
                collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent;
    
            // resolve each contact
            for (j = 0; j < contactsLength; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    normalImpulse = contact.normalImpulse,
                    tangentImpulse = contact.tangentImpulse;
    
                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse,
                        impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += bodyA.inverseInertia * (
                            (contactVertex.x - bodyA.position.x) * impulseY
                            - (contactVertex.y - bodyA.position.y) * impulseX
                        );
                    }
    
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= bodyB.inverseInertia * (
                            (contactVertex.x - bodyB.position.x) * impulseY 
                            - (contactVertex.y - bodyB.position.y) * impulseX
                        );
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} delta
     */
    Resolver.solveVelocity = function(pairs, delta) {
        var timeScale = delta / Common._baseDelta,
            timeScaleSquared = timeScale * timeScale,
            timeScaleCubed = timeScaleSquared * timeScale,
            restingThresh = -Resolver._restingThresh * timeScale,
            restingThreshTangent = Resolver._restingThreshTangent,
            frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale,
            frictionMaxStatic = Resolver._frictionMaxStatic,
            pairsLength = pairs.length,
            tangentImpulse,
            maxFriction,
            i,
            j;

        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                bodyAVelocity = bodyA.velocity,
                bodyBVelocity = bodyB.velocity,
                normalX = collision.normal.x,
                normalY = collision.normal.y,
                tangentX = collision.tangent.x,
                tangentY = collision.tangent.y,
                contacts = pair.activeContacts,
                contactsLength = contacts.length,
                contactShare = 1 / contactsLength,
                inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass,
                friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;

            // update body velocities
            bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
            bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
            bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
            bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (j = 0; j < contactsLength; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex;

                var offsetAX = contactVertex.x - bodyA.position.x,
                    offsetAY = contactVertex.y - bodyA.position.y,
                    offsetBX = contactVertex.x - bodyB.position.x,
                    offsetBY = contactVertex.y - bodyB.position.y;
 
                var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity,
                    velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity,
                    velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity,
                    velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;

                var relativeVelocityX = velocityPointAX - velocityPointBX,
                    relativeVelocityY = velocityPointAY - velocityPointBY;

                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY,
                    tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;

                // coulomb friction
                var normalOverlap = pair.separation + normalVelocity;
                var normalForce = Math.min(normalOverlap, 1);
                normalForce = normalOverlap < 0 ? 0 : normalForce;

                var frictionLimit = normalForce * friction;

                if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                    maxFriction = (tangentVelocity > 0 ? tangentVelocity : -tangentVelocity);
                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                    
                    if (tangentImpulse < -maxFriction) {
                        tangentImpulse = -maxFriction;
                    } else if (tangentImpulse > maxFriction) {
                        tangentImpulse = maxFriction;
                    }
                } else {
                    tangentImpulse = tangentVelocity;
                    maxFriction = frictionMaxStatic;
                }

                // account for mass, inertia and contact offset
                var oAcN = offsetAX * normalY - offsetAY * normalX,
                    oBcN = offsetBX * normalY - offsetBY * normalX,
                    share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity < restingThresh) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse += normalImpulse;
                    if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse += tangentImpulse;
                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse,
                    impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                }
            }
        }
    };

})();


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_238208__) {

/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = __nested_webpack_require_238208__(9);
var Common = __nested_webpack_require_238208__(0);

(function() {

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairsList = pairs.list,
            pairsListLength = pairsList.length,
            pairsTable = pairs.table,
            collisionsLength = collisions.length,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            collision,
            pairIndex,
            pair,
            i;

        // clear collision state arrays, but maintain old reference
        collisionStart.length = 0;
        collisionEnd.length = 0;
        collisionActive.length = 0;

        for (i = 0; i < pairsListLength; i++) {
            pairsList[i].confirmedActive = false;
        }

        for (i = 0; i < collisionsLength; i++) {
            collision = collisions[i];
            pair = collision.pair;

            if (pair) {
                // pair already exists (but may or may not be active)
                if (pair.isActive) {
                    // pair exists and is active
                    collisionActive.push(pair);
                } else {
                    // pair exists but was inactive, so a collision has just started again
                    collisionStart.push(pair);
                }

                // update the pair
                Pair.update(pair, collision, timestamp);
                pair.confirmedActive = true;
            } else {
                // pair did not exist, create a new pair
                pair = Pair.create(collision, timestamp);
                pairsTable[pair.id] = pair;

                // push the new pair
                collisionStart.push(pair);
                pairsList.push(pair);
            }
        }

        // find pairs that are no longer active
        var removePairIndex = [];
        pairsListLength = pairsList.length;

        for (i = 0; i < pairsListLength; i++) {
            pair = pairsList[i];
            
            if (!pair.confirmedActive) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);

                if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
                    removePairIndex.push(i);
                }
            }
        }

        // remove inactive pairs
        for (i = 0; i < removePairIndex.length; i++) {
            pairIndex = removePairIndex[i] - i;
            pair = pairsList[pairIndex];
            pairsList.splice(pairIndex, 1);
            delete pairsTable[pair.id];
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_242061__) {

var Matter = module.exports = __nested_webpack_require_242061__(21);

Matter.Axes = __nested_webpack_require_242061__(11);
Matter.Bodies = __nested_webpack_require_242061__(12);
Matter.Body = __nested_webpack_require_242061__(4);
Matter.Bounds = __nested_webpack_require_242061__(1);
Matter.Collision = __nested_webpack_require_242061__(8);
Matter.Common = __nested_webpack_require_242061__(0);
Matter.Composite = __nested_webpack_require_242061__(6);
Matter.Composites = __nested_webpack_require_242061__(22);
Matter.Constraint = __nested_webpack_require_242061__(10);
Matter.Contact = __nested_webpack_require_242061__(16);
Matter.Detector = __nested_webpack_require_242061__(13);
Matter.Engine = __nested_webpack_require_242061__(17);
Matter.Events = __nested_webpack_require_242061__(5);
Matter.Grid = __nested_webpack_require_242061__(23);
Matter.Mouse = __nested_webpack_require_242061__(14);
Matter.MouseConstraint = __nested_webpack_require_242061__(24);
Matter.Pair = __nested_webpack_require_242061__(9);
Matter.Pairs = __nested_webpack_require_242061__(19);
Matter.Plugin = __nested_webpack_require_242061__(15);
Matter.Query = __nested_webpack_require_242061__(25);
Matter.Render = __nested_webpack_require_242061__(26);
Matter.Resolver = __nested_webpack_require_242061__(18);
Matter.Runner = __nested_webpack_require_242061__(27);
Matter.SAT = __nested_webpack_require_242061__(28);
Matter.Sleeping = __nested_webpack_require_242061__(7);
Matter.Svg = __nested_webpack_require_242061__(29);
Matter.Vector = __nested_webpack_require_242061__(2);
Matter.Vertices = __nested_webpack_require_242061__(3);
Matter.World = __nested_webpack_require_242061__(30);

// temporary back compatibility
Matter.Engine.run = Matter.Runner.run;
Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_243597__) {

/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = __nested_webpack_require_243597__(15);
var Common = __nested_webpack_require_243597__(0);

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version =   true ? "0.19.0" : 0;

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_246505__) {

/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = __nested_webpack_require_246505__(6);
var Constraint = __nested_webpack_require_246505__(10);
var Common = __nested_webpack_require_246505__(0);
var Body = __nested_webpack_require_246505__(4);
var Bodies = __nested_webpack_require_246505__(12);
var deprecated = Common.deprecated;

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            x = xx,
            y = yy,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    x = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    x += columnGap;
                }
            }
            
            y += maxHeight + rowGap;
            x = xx;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
        });
    };

    /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(xx, yy, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };

    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
    
    /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(xx, yy, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

    /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
            return Bodies.circle(x, y, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
})();


/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_259115__) {

/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/

var Grid = {};

module.exports = Grid;

var Pair = __nested_webpack_require_259115__(9);
var Common = __nested_webpack_require_259115__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // temporary back compatibility bounds check
            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');

    /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            bucketLength = bucket.length,
            i;

        // add new pairs
        for (i = 0; i < bucketLength; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var id = pairId(body, bodyB),
                pair = gridPairs[id];

            if (pair) {
                pair[2] += 1;
            } else {
                gridPairs[id] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            i;

        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        var bucketLength = bucket.length;

        // update pair counts
        for (i = 0; i < bucketLength; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var pair = gridPairs[pairId(body, bucket[i])];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pair,
            gridPairs = grid.pairs,
            pairKeys = Common.keys(gridPairs),
            pairKeysLength = pairKeys.length,
            pairs = [],
            k;

        // iterate over grid.pairs
        for (k = 0; k < pairKeysLength; k++) {
            pair = gridPairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete gridPairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_269445__) {

/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = __nested_webpack_require_269445__(3);
var Sleeping = __nested_webpack_require_269445__(7);
var Mouse = __nested_webpack_require_269445__(14);
var Events = __nested_webpack_require_269445__(5);
var Detector = __nested_webpack_require_269445__(13);
var Constraint = __nested_webpack_require_269445__(10);
var Composite = __nested_webpack_require_269445__(6);
var Common = __nested_webpack_require_269445__(0);
var Bounds = __nested_webpack_require_269445__(1);

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_277940__) {

/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = __nested_webpack_require_277940__(2);
var Collision = __nested_webpack_require_277940__(8);
var Bounds = __nested_webpack_require_277940__(1);
var Bodies = __nested_webpack_require_277940__(12);
var Vertices = __nested_webpack_require_277940__(3);

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [],
            bodiesLength = bodies.length,
            bounds = body.bounds,
            collides = Collision.collides,
            overlaps = Bounds.overlaps;

        for (var i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                partsALength = bodyA.parts.length,
                partsAStart = partsALength === 1 ? 0 : 1;
            
            if (overlaps(bodyA.bounds, bounds)) {
                for (var j = partsAStart; j < partsALength; j++) {
                    var part = bodyA.parts[j];

                    if (overlaps(part.bounds, bounds)) {
                        var collision = collides(part, body);

                        if (collision) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_282315__) {

/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Body = __nested_webpack_require_282315__(4);
var Common = __nested_webpack_require_282315__(0);
var Composite = __nested_webpack_require_282315__(6);
var Bounds = __nested_webpack_require_282315__(1);
var Events = __nested_webpack_require_282315__(5);
var Vector = __nested_webpack_require_282315__(2);
var Mouse = __nested_webpack_require_282315__(14);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    Render._goodFps = 30;
    Render._goodDelta = 1000 / 60;

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                elapsedHistory: []
            },
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#14151f',
                wireframeBackground: '#14151f',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showStats: false,
                showPerformance: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        // for temporary back compatibility only
        render.controller = Render;
        render.options.showBroadphase = false;

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            
            _updateTiming(render, time);

            Render.world(render, time);

            if (render.options.showStats || render.options.showDebug) {
                Render.stats(render, render.context, time);
            }

            if (render.options.showPerformance || render.options.showDebug) {
                Render.performance(render, render.context, time);
            }
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.setTransform(
            render.options.pixelRatio / boundsScaleX, 0, 0, 
            render.options.pixelRatio / boundsScaleY, 0, 0
        );
        
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render, time) {
        var startTime = Common.now(),
            engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            timing = render.timing;

        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;

            if (render.options.pixelRatio !== 1) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            }
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);

        // log the time elapsed computing this update
        timing.lastElapsed = Common.now() - startTime;
    };

    /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */
    Render.stats = function(render, context, time) {
        var engine = render.engine,
            world = engine.world,
            bodies = Composite.allBodies(world),
            parts = 0,
            width = 55,
            height = 44,
            x = 0,
            y = 0;
        
        // count parts
        for (var i = 0; i < bodies.length; i += 1) {
            parts += bodies[i].parts.length;
        }

        // sections
        var sections = {
            'Part': parts,
            'Body': bodies.length,
            'Cons': Composite.allConstraints(world).length,
            'Comp': Composite.allComposites(world).length,
            'Pair': engine.pairs.list.length
        };

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(x, y, width * 5.5, height);

        context.font = '12px Arial';
        context.textBaseline = 'top';
        context.textAlign = 'right';

        // sections
        for (var key in sections) {
            var section = sections[key];
            // label
            context.fillStyle = '#aaa';
            context.fillText(key, x + width, y + 8);

            // value
            context.fillStyle = '#eee';
            context.fillText(section, x + width, y + 26);

            x += width;
        }
    };

    /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.performance = function(render, context) {
        var engine = render.engine,
            timing = render.timing,
            deltaHistory = timing.deltaHistory,
            elapsedHistory = timing.elapsedHistory,
            timestampElapsedHistory = timing.timestampElapsedHistory,
            engineDeltaHistory = timing.engineDeltaHistory,
            engineElapsedHistory = timing.engineElapsedHistory,
            lastEngineDelta = engine.timing.lastDelta;
        
        var deltaMean = _mean(deltaHistory),
            elapsedMean = _mean(elapsedHistory),
            engineDeltaMean = _mean(engineDeltaHistory),
            engineElapsedMean = _mean(engineElapsedHistory),
            timestampElapsedMean = _mean(timestampElapsedHistory),
            rateMean = (timestampElapsedMean / deltaMean) || 0,
            fps = (1000 / deltaMean) || 0;

        var graphHeight = 4,
            gap = 12,
            width = 60,
            height = 34,
            x = 10,
            y = 69;

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);

        // show FPS
        Render.status(
            context, x, y, width, graphHeight, deltaHistory.length, 
            Math.round(fps) + ' fps', 
            fps / Render._goodFps,
            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
        );

        // show engine delta
        Render.status(
            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
            lastEngineDelta.toFixed(2) + ' dt', 
            Render._goodDelta / lastEngineDelta,
            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
        );

        // show engine update time
        Render.status(
            context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length,
            engineElapsedMean.toFixed(2) + ' ut', 
            1 - (engineElapsedMean / Render._goodFps),
            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
        );

        // show render time
        Render.status(
            context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length,
            elapsedMean.toFixed(2) + ' rt', 
            1 - (elapsedMean / Render._goodFps),
            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
        );

        // show effective speed
        Render.status(
            context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, 
            rateMean.toFixed(2) + ' x', 
            rateMean * rateMean * rateMean,
            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
        );
    };

    /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */
    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
        // background
        context.strokeStyle = '#888';
        context.fillStyle = '#444';
        context.lineWidth = 1;
        context.fillRect(x, y + 7, width, 1);

        // chart
        context.beginPath();
        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
        for (var i = 0; i < width; i += 1) {
            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
        }
        context.stroke();

        // indicator
        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
        context.fillRect(x, y - 7, 4, 4);

        // label
        context.font = '12px Arial';
        context.textBaseline = 'middle';
        context.textAlign = 'right';
        context.fillStyle = '#eee';
        context.fillText(label, x + width, y - 5);
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = '#bbb';
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = '#bbb';
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            var velocity = Body.getVelocity(body);

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x,
                    normalPosY = pair.activeContacts[0].vertex.y;

                if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */
    var _updateTiming = function(render, time) {
        var engine = render.engine,
            timing = render.timing,
            historySize = timing.historySize,
            timestamp = engine.timing.timestamp;

        timing.delta = time - timing.lastTime || Render._goodDelta;
        timing.lastTime = time;

        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
        timing.lastTimestamp = timestamp;

        timing.deltaHistory.unshift(timing.delta);
        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

        timing.elapsedHistory.unshift(timing.lastElapsed);
        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
    };

    /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */
    var _mean = function(values) {
        var result = 0;
        for (var i = 0; i < values.length; i += 1) {
            result += values[i];
        }
        return (result / values.length) || 0;
    };

    /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @deprecated
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

    /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */
    
    /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */

    /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */

})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_339525__) {

/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = __nested_webpack_require_339525__(5);
var Engine = __nested_webpack_require_339525__(17);
var Common = __nested_webpack_require_339525__(0);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    if (!_requestAnimationFrame) {
        var _frameTimeout;

        _requestAnimationFrame = function(callback){ 
            _frameTimeout = setTimeout(function() { 
                callback(Common.now()); 
            }, 1000 / 60);
        };

        _cancelAnimationFrame = function() {
            clearTimeout(_frameTimeout);
        };
    }

    /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            fps: 60,
            deltaSampleSize: 60,
            counterTimestamp: 0,
            frameCounter: 0,
            deltaHistory: [],
            timePrev: null,
            frameRequestId: null,
            isFixed: false,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        runner.delta = runner.delta || 1000 / runner.fps;
        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
        runner.fps = 1000 / runner.delta;

        return runner;
    };

    /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */
    Runner.run = function(runner, engine) {
        // create runner if engine is first argument
        if (typeof runner.positionIterations !== 'undefined') {
            engine = runner;
            runner = Runner.create();
        }

        (function run(time){
            runner.frameRequestId = _requestAnimationFrame(run);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var timing = engine.timing,
            delta;

        if (runner.isFixed) {
            // fixed timestep
            delta = runner.delta;
        } else {
            // dynamic timestep based on wall clock between calls
            delta = (time - runner.timePrev) || runner.delta;
            runner.timePrev = time;

            // optimistically filter delta over a few frames, to improve stability
            runner.deltaHistory.push(delta);
            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
            delta = Math.min.apply(null, runner.deltaHistory);

            // limit delta
            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

            // update engine timing object
            runner.delta = delta;
        }

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(runner, 'beforeTick', event);

        // fps counter
        runner.frameCounter += 1;
        if (time - runner.counterTimestamp >= 1000) {
            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
            runner.counterTimestamp = time;
            runner.frameCounter = 0;
        }

        Events.trigger(runner, 'tick', event);

        // update
        Events.trigger(runner, 'beforeUpdate', event);

        Engine.update(engine, delta);

        Events.trigger(runner, 'afterUpdate', event);

        Events.trigger(runner, 'afterTick', event);
    };

    /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        _cancelAnimationFrame(runner.frameRequestId);
    };

    /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */
    Runner.start = function(runner, engine) {
        Runner.run(runner, engine);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */

})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_348064__) {

/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/

var SAT = {};

module.exports = SAT;

var Collision = __nested_webpack_require_348064__(8);
var Common = __nested_webpack_require_348064__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB) {
        return Collision.collides(bodyA, bodyB);
    };

    deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');

})();


/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_349134__) {

/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = __nested_webpack_require_349134__(1);
var Common = __nested_webpack_require_349134__(0);

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_356595__) {

/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/

var World = {};

module.exports = World;

var Composite = __nested_webpack_require_356595__(6);
var Common = __nested_webpack_require_356595__(0);

(function() {

    /**
     * See above, aliases for back compatibility only
     */
    World.create = Composite.create;
    World.add = Composite.add;
    World.remove = Composite.remove;
    World.clear = Composite.clear;
    World.addComposite = Composite.addComposite;
    World.addBody = Composite.addBody;
    World.addConstraint = Composite.addConstraint;

})();


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interface": () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);



var Interface = function (canvas) {
    var engine = matter_js__WEBPACK_IMPORTED_MODULE_0__.Engine.create();
    var world = engine.world;
    var render = matter_js__WEBPACK_IMPORTED_MODULE_0__.Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            hasBounds: true,
            wireframes: false,
        },
    });
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Render.run(render);
    var mouse = matter_js__WEBPACK_IMPORTED_MODULE_0__.Mouse.create(render.canvas), mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_0__.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { render: { visible: false } },
    });
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    render.mouse = mouse;
    var stack = matter_js__WEBPACK_IMPORTED_MODULE_0__.Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
        switch (Math.round(matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(0, 1))) {
            case 0:
                if (matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random() < 0.8) {
                    return matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(x, y, matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(20, 50), matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(20, 50));
                }
                else {
                    return matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(x, y, matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(80, 120), matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(20, 30));
                }
            case 1:
                var sides = Math.round(matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(1, 8));
                sides = sides === 3 ? 4 : sides;
                return matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.polygon(x, y, sides, matter_js__WEBPACK_IMPORTED_MODULE_0__.Common.random(20, 50));
        }
    });
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Composite.add(world, [
        stack,
        // Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: {fillStyle: "#fff"} }),
        matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(400, 600, 800, 50, {
            isStatic: true,
            render: { fillStyle: '#fff' },
        }),
        matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        matter_js__WEBPACK_IMPORTED_MODULE_0__.Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);
    var context = {
        render: render,
        scale: { min: 0.1, max: 10, by: 1, target: 1 },
        mouseConstraint: mouseConstraint,
    };
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(render, 'beforeRender', BeforeRender(context));
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Render.run(render);
    var runner = matter_js__WEBPACK_IMPORTED_MODULE_0__.Runner.create();
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Runner.run(runner, engine);
    return {
        HandleResize: function (w, h) {
            render.canvas.width = w;
            render.canvas.height = h;
            render.options.width = w;
            render.options.height = h;
            render.bounds.max.x = render.bounds.min.x + w * render.mouse.scale.x;
            render.bounds.max.y = render.bounds.min.y + h * render.mouse.scale.y;
        },
    };
};
var BeforeRender = function (context) { return function () {
    HandleZoom(context);
    HandlePan(context);
}; };
var HandleZoom = function (_a) {
    var _b, _c;
    var mouseConstraint = _a.mouseConstraint, scale = _a.scale, render = _a.render;
    var mouse = mouseConstraint.mouse;
    var width = (_b = render.options.width) !== null && _b !== void 0 ? _b : 0;
    var height = (_c = render.options.height) !== null && _c !== void 0 ? _c : 0;
    if (mouse.wheelDelta) {
        var scaleFactor_1 = mouse.wheelDelta * -0.05 * scale.by;
        scale.target = Math.min(Math.max(scale.target + scaleFactor_1, scale.min), scale.max);
    }
    if (Math.abs(scale.by - scale.target) < 0.01)
        return;
    //smooth zooming
    var scaleFactor = (scale.target - scale.by) * 0.05;
    scale.by += scaleFactor;
    render.bounds.max.x = render.bounds.min.x + width * scale.by;
    render.bounds.max.y = render.bounds.min.y + height * scale.by;
    var translate = {
        x: mouse.absolute.x * -scaleFactor,
        y: mouse.absolute.y * -scaleFactor,
    };
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Bounds.translate(render.bounds, translate);
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Mouse.setScale(mouse, { x: scale.by, y: scale.by });
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Mouse.setOffset(mouse, render.bounds.min);
};
var HandlePan = function (context) {
    var _a;
    var mouseConstraint = context.mouseConstraint, render = context.render, panningFrom = context.panningFrom;
    var mouse = mouseConstraint.mouse, body = mouseConstraint.body;
    var button = (_a = {}, _a[-1] = 'none', _a[0] = 'left', _a[2] = 'right', _a)[mouse.button];
    if (button === 'none' || (body && !body.isStatic)) {
        delete context.panningFrom;
        return;
    }
    if (!panningFrom) {
        context.panningFrom = matter_js__WEBPACK_IMPORTED_MODULE_0__.Vector.clone(mouse.absolute);
        return;
    }
    var delta = matter_js__WEBPACK_IMPORTED_MODULE_0__.Vector.sub(mouse.absolute, panningFrom);
    if (delta.x === 0 && delta.y === 0)
        return;
    var translate = {
        x: -delta.x * mouse.scale.x,
        y: -delta.y * mouse.scale.y,
    };
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Bounds.translate(render.bounds, translate);
    matter_js__WEBPACK_IMPORTED_MODULE_0__.Mouse.setOffset(mouse, render.bounds.min);
    context.panningFrom = matter_js__WEBPACK_IMPORTED_MODULE_0__.Vector.clone(mouse.absolute);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");

window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.querySelector('canvas');
    if (!canvas)
        return;
    var HandleResize = (0,_interface__WEBPACK_IMPORTED_MODULE_0__.Interface)(canvas).HandleResize;
    var handleDomResize = function () {
        HandleResize(document.body.offsetWidth, document.body.offsetHeight);
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
    };
    window.addEventListener('resize', handleDomResize);
    handleDomResize();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsaUNBQW1CO0FBQ2hDLGFBQWEsaUNBQW1COztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLGlDQUFtQjtBQUNsQyxhQUFhLGlDQUFtQjtBQUNoQyxXQUFXLGlDQUFtQjtBQUM5QixhQUFhLGlDQUFtQjtBQUNoQyxhQUFhLGlDQUFtQjs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1FQUFtRTtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTyx5REFBeUQsWUFBWTtBQUMzRixlQUFlLFFBQVE7QUFDdkIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDOztBQUVBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRCx3Q0FBd0MsMkJBQTJCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLHVCQUF1Qjs7QUFFdEU7QUFDQSxxQ0FBcUMsWUFBWTs7QUFFakQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdELE9BQU87QUFDUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxpQ0FBbUI7QUFDaEMsZ0JBQWdCLGlDQUFtQjs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7O0FBRUEsa0RBQWtELGtCQUFrQjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGlDQUFtQjs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGlDQUFtQjs7QUFFaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEMsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixvQkFBb0IsUUFBUTtBQUM1QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEMsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLHFCQUFxQixRQUFRO0FBQzdCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdELE9BQU87QUFDUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLGlDQUFtQjtBQUNsQyxlQUFlLGlDQUFtQjtBQUNsQyxlQUFlLGlDQUFtQjtBQUNsQyxZQUFZLGlDQUFtQjtBQUMvQixhQUFhLGlDQUFtQjtBQUNoQyxnQkFBZ0IsaUNBQW1CO0FBQ25DLGlCQUFpQixpQ0FBbUI7QUFDcEMsYUFBYSxpQ0FBbUI7QUFDaEMsV0FBVyxpQ0FBbUI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCw2QkFBNkI7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELDhCQUE4Qjs7QUFFdEY7QUFDQSxxREFBcUQsMkJBQTJCOztBQUVoRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGlDQUFtQjtBQUNoQyxhQUFhLGlDQUFtQjtBQUNoQyxhQUFhLGlDQUFtQjs7QUFFaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JB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bWF0dGVyLmpzIiwid2VicGFjazovL3Byb3Bib3gvLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovL3Byb3Bib3gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvcGJveC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9wYm94L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9wYm94L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvcGJveC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb3Bib3gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9wYm94Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogbWF0dGVyLWpzIDAuMTkuMCBieSBAbGlhYnJ1XG4gKiBodHRwOi8vYnJtLmlvL21hdHRlci1qcy9cbiAqIExpY2Vuc2UgTUlUXG4gKiBcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIExpYW0gQnJ1bW1pdHQgYW5kIGNvbnRyaWJ1dG9ycy5cbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk1hdHRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNYXR0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTWF0dGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db21tb25gIG1vZHVsZSBjb250YWlucyB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IGFyZSBjb21tb24gdG8gYWxsIG1vZHVsZXMuXG4qXG4qIEBjbGFzcyBDb21tb25cbiovXG5cbnZhciBDb21tb24gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb247XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbW1vbi5fYmFzZURlbHRhID0gMTAwMCAvIDYwO1xuICAgIENvbW1vbi5fbmV4dElkID0gMDtcbiAgICBDb21tb24uX3NlZWQgPSAwO1xuICAgIENvbW1vbi5fbm93U3RhcnRUaW1lID0gKyhuZXcgRGF0ZSgpKTtcbiAgICBDb21tb24uX3dhcm5lZE9uY2UgPSB7fTtcbiAgICBDb21tb24uX2RlY29tcCA9IG51bGw7XG4gICAgXG4gICAgLyoqXG4gICAgICogRXh0ZW5kcyB0aGUgb2JqZWN0IGluIHRoZSBmaXJzdCBhcmd1bWVudCB1c2luZyB0aGUgb2JqZWN0IGluIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICAgICogQG1ldGhvZCBleHRlbmRcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkZWVwXG4gICAgICogQHJldHVybiB7fSBvYmogZXh0ZW5kZWRcbiAgICAgKi9cbiAgICBDb21tb24uZXh0ZW5kID0gZnVuY3Rpb24ob2JqLCBkZWVwKSB7XG4gICAgICAgIHZhciBhcmdzU3RhcnQsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgZGVlcENsb25lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGVlcCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhcmdzU3RhcnQgPSAyO1xuICAgICAgICAgICAgZGVlcENsb25lID0gZGVlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3NTdGFydCA9IDE7XG4gICAgICAgICAgICBkZWVwQ2xvbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGFyZ3NTdGFydDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwQ2xvbmUgJiYgc291cmNlW3Byb3BdICYmIHNvdXJjZVtwcm9wXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9ialtwcm9wXSB8fCBvYmpbcHJvcF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IG9ialtwcm9wXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tb24uZXh0ZW5kKG9ialtwcm9wXSwgZGVlcENsb25lLCBzb3VyY2VbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY2xvbmUgb2YgdGhlIG9iamVjdCwgaWYgZGVlcCBpcyB0cnVlIHJlZmVyZW5jZXMgd2lsbCBhbHNvIGJlIGNsb25lZC5cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEBwYXJhbSB7Ym9vbH0gZGVlcFxuICAgICAqIEByZXR1cm4ge30gb2JqIGNsb25lZFxuICAgICAqL1xuICAgIENvbW1vbi5jbG9uZSA9IGZ1bmN0aW9uKG9iaiwgZGVlcCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7fSwgZGVlcCwgb2JqKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBrZXlzIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2Qga2V5c1xuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0ga2V5c1xuICAgICAqL1xuICAgIENvbW1vbi5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cylcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIC8vIGF2b2lkIGhhc093blByb3BlcnR5IGZvciBwZXJmb3JtYW5jZVxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHZhbHVlcyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gQXJyYXkgb2YgdGhlIG9iamVjdHMgcHJvcGVydHkgdmFsdWVzXG4gICAgICovXG4gICAgQ29tbW9uLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtrZXlzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBhdm9pZCBoYXNPd25Qcm9wZXJ0eSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtrZXldKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZhbHVlIGZyb20gYGJhc2VgIHJlbGF0aXZlIHRvIHRoZSBgcGF0aGAgc3RyaW5nLlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICogQHBhcmFtIHt9IG9iaiBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWAsIGUuZy4gJ0Zvby5CYXIuYmF6J1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYmVnaW5dIFBhdGggc2xpY2UgYmVnaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZF0gUGF0aCBzbGljZSBlbmRcbiAgICAgKiBAcmV0dXJuIHt9IFRoZSBvYmplY3QgYXQgdGhlIGdpdmVuIHBhdGhcbiAgICAgKi9cbiAgICBDb21tb24uZ2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJykuc2xpY2UoYmVnaW4sIGVuZCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdmFsdWUgb24gYGJhc2VgIHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBgcGF0aGAgc3RyaW5nLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHt9IG9iaiBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWAsIGUuZy4gJ0Zvby5CYXIuYmF6J1xuICAgICAqIEBwYXJhbSB7fSB2YWwgVGhlIHZhbHVlIHRvIHNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYmVnaW5dIFBhdGggc2xpY2UgYmVnaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZF0gUGF0aCBzbGljZSBlbmRcbiAgICAgKiBAcmV0dXJuIHt9IFBhc3MgdGhyb3VnaCBgdmFsYCBmb3IgY2hhaW5pbmdcbiAgICAgKi9cbiAgICBDb21tb24uc2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCB2YWwsIGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgICBDb21tb24uZ2V0KG9iaiwgcGF0aCwgMCwgLTEpW3BhcnRzW3BhcnRzLmxlbmd0aCAtIDFdXSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgdGhlIGdpdmVuIGFycmF5IGluLXBsYWNlLlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCBzaHVmZmxlXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gYXJyYXkgc2h1ZmZsZWQgcmFuZG9tbHlcbiAgICAgKi9cbiAgICBDb21tb24uc2h1ZmZsZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoQ29tbW9uLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IGNob29zZXMgYSB2YWx1ZSBmcm9tIGEgbGlzdCB3aXRoIGVxdWFsIHByb2JhYmlsaXR5LlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCBjaG9vc2VcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjaG9pY2VzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBBIHJhbmRvbSBjaG9pY2Ugb2JqZWN0IGZyb20gdGhlIGFycmF5XG4gICAgICovXG4gICAgQ29tbW9uLmNob29zZSA9IGZ1bmN0aW9uKGNob2ljZXMpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZXNbTWF0aC5mbG9vcihDb21tb24ucmFuZG9tKCkgKiBjaG9pY2VzLmxlbmd0aCldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUxFbGVtZW50LCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICogQG1ldGhvZCBpc0VsZW1lbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgSFRNTEVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlICYmIG9iai5ub2RlTmFtZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGFycmF5LlxuICAgICAqIEBtZXRob2QgaXNBcnJheVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gYXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAgICAgKiBAbWV0aG9kIGlzRnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2QgaXNQbGFpbk9iamVjdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBwbGFpbiBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBpc1N0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc1N0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGNsYW1wZWQgYmV0d2VlbiBhIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWUuXG4gICAgICogQG1ldGhvZCBjbGFtcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgY2xhbXBlZCBiZXR3ZWVuIG1pbiBhbmQgbWF4IGluY2x1c2l2ZVxuICAgICAqL1xuICAgIENvbW1vbi5jbGFtcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgICBpZiAodmFsdWUgPCBtaW4pXG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXgpXG4gICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICAgKiBAbWV0aG9kIHNpZ25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0xIGlmIG5lZ2F0aXZlLCArMSBpZiAwIG9yIHBvc2l0aXZlXG4gICAgICovXG4gICAgQ29tbW9uLnNpZ24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gLTEgOiAxO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB0aW1lc3RhbXAgc2luY2UgdGhlIHRpbWUgb3JpZ2luIChlLmcuIGZyb20gcGFnZSBsb2FkKS5cbiAgICAgKiBUaGUgcmVzdWx0IGlzIGluIG1pbGxpc2Vjb25kcyBhbmQgd2lsbCB1c2UgaGlnaC1yZXNvbHV0aW9uIHRpbWluZyBpZiBhdmFpbGFibGUuXG4gICAgICogQG1ldGhvZCBub3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBDb21tb24ubm93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2Uubm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRGF0ZS5ub3cpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKSAtIENvbW1vbi5fbm93U3RhcnRUaW1lO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIGEgbWluaW11bSBhbmQgYSBtYXhpbXVtIHZhbHVlIGluY2x1c2l2ZS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2QgcmFuZG9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IGluY2x1c2l2ZVxuICAgICAqL1xuICAgIENvbW1vbi5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSAodHlwZW9mIG1pbiAhPT0gXCJ1bmRlZmluZWRcIikgPyBtaW4gOiAwO1xuICAgICAgICBtYXggPSAodHlwZW9mIG1heCAhPT0gXCJ1bmRlZmluZWRcIikgPyBtYXggOiAxO1xuICAgICAgICByZXR1cm4gbWluICsgX3NlZWRlZFJhbmRvbSgpICogKG1heCAtIG1pbik7XG4gICAgfTtcblxuICAgIHZhciBfc2VlZGVkUmFuZG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpbmVhcl9jb25ncnVlbnRpYWxfZ2VuZXJhdG9yXG4gICAgICAgIENvbW1vbi5fc2VlZCA9IChDb21tb24uX3NlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgICAgICByZXR1cm4gQ29tbW9uLl9zZWVkIC8gMjMzMjgwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIENTUyBoZXggY29sb3VyIHN0cmluZyBpbnRvIGFuIGludGVnZXIuXG4gICAgICogQG1ldGhvZCBjb2xvclRvTnVtYmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yU3RyaW5nXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgQ1NTIGhleCBzdHJpbmdcbiAgICAgKi9cbiAgICBDb21tb24uY29sb3JUb051bWJlciA9IGZ1bmN0aW9uKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgIGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcucmVwbGFjZSgnIycsJycpO1xuXG4gICAgICAgIGlmIChjb2xvclN0cmluZy5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgY29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5jaGFyQXQoMCkgKyBjb2xvclN0cmluZy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29sb3JTdHJpbmcuY2hhckF0KDEpICsgY29sb3JTdHJpbmcuY2hhckF0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbG9yU3RyaW5nLmNoYXJBdCgyKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc29sZSBsb2dnaW5nIGxldmVsIHRvIHVzZSwgd2hlcmUgZWFjaCBsZXZlbCBpbmNsdWRlcyBhbGwgbGV2ZWxzIGFib3ZlIGFuZCBleGNsdWRlcyB0aGUgbGV2ZWxzIGJlbG93LlxuICAgICAqIFRoZSBkZWZhdWx0IGxldmVsIGlzICdkZWJ1Zycgd2hpY2ggc2hvd3MgYWxsIGNvbnNvbGUgbWVzc2FnZXMuICBcbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIGxldmVsIHZhbHVlcyBhcmU6XG4gICAgICogLSAwID0gTm9uZVxuICAgICAqIC0gMSA9IERlYnVnXG4gICAgICogLSAyID0gSW5mb1xuICAgICAqIC0gMyA9IFdhcm5cbiAgICAgKiAtIDQgPSBFcnJvclxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcHJvcGVydHkgbG9nTGV2ZWxcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBDb21tb24ubG9nTGV2ZWwgPSAxO1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS5sb2dgIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIGxvZ1xuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24ubG9nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS5pbmZvYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCBpbmZvXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi5pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUud2FybmAgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2Qgd2FyblxuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24ud2FybiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIGBDb21tb24ud2FybmAgdG8gbG9nIHRoZSBnaXZlbiBtZXNzYWdlIG9uZSB0aW1lIG9ubHkuXG4gICAgICogQG1ldGhvZCB3YXJuT25jZVxuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24ud2Fybk9uY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoIUNvbW1vbi5fd2FybmVkT25jZVttZXNzYWdlXSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4obWVzc2FnZSk7XG4gICAgICAgICAgICBDb21tb24uX3dhcm5lZE9uY2VbbWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgZGVwcmVjYXRlZCBjb25zb2xlIHdhcm5pbmcgd2hlbiB0aGUgZnVuY3Rpb24gb24gdGhlIGdpdmVuIG9iamVjdCBpcyBjYWxsZWQuXG4gICAgICogVGhlIHRhcmdldCBmdW5jdGlvbiB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYSBuZXcgZnVuY3Rpb24gdGhhdCBmaXJzdCBzaG93cyB0aGUgd2FybmluZ1xuICAgICAqIGFuZCB0aGVuIGNhbGxzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgICAgKiBAbWV0aG9kIGRlcHJlY2F0ZWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgb3IgbW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIHByb3BlcnR5IG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG9uIG9ialxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3YXJuaW5nIFRoZSBvbmUtdGltZSBtZXNzYWdlIHRvIHNob3cgaWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICAgICAqL1xuICAgIENvbW1vbi5kZXByZWNhdGVkID0gZnVuY3Rpb24ob2JqLCBwcm9wLCB3YXJuaW5nKSB7XG4gICAgICAgIG9ialtwcm9wXSA9IENvbW1vbi5jaGFpbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuT25jZSgn8J+UhSBkZXByZWNhdGVkIPCflIUnLCB3YXJuaW5nKTtcbiAgICAgICAgfSwgb2JqW3Byb3BdKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgc2VxdWVudGlhbCBJRC5cbiAgICAgKiBAbWV0aG9kIG5leHRJZFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIHNlcXVlbnRpYWwgSURcbiAgICAgKi9cbiAgICBDb21tb24ubmV4dElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uX25leHRJZCsrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJsZSBpbmRleE9mIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBtZXRob2QgaW5kZXhPZlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGhheXN0YWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5lZWRsZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIG5lZWRsZSBpbiBoYXlzdGFjaywgb3RoZXJ3aXNlIC0xLlxuICAgICAqL1xuICAgIENvbW1vbi5pbmRleE9mID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgICAgICBpZiAoaGF5c3RhY2suaW5kZXhPZilcbiAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXlzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgY3Jvc3MgYnJvd3NlciBjb21wYXRpYmxlIGFycmF5IG1hcCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAbWV0aG9kIG1hcFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpc3RcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybiB7YXJyYXl9IFZhbHVlcyBmcm9tIGxpc3QgdHJhbnNmb3JtZWQgYnkgZnVuYy5cbiAgICAgKi9cbiAgICBDb21tb24ubWFwID0gZnVuY3Rpb24obGlzdCwgZnVuYykge1xuICAgICAgICBpZiAobGlzdC5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0Lm1hcChmdW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG1hcHBlZC5wdXNoKGZ1bmMobGlzdFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBkaXJlY3RlZCBncmFwaCBhbmQgcmV0dXJucyB0aGUgcGFydGlhbGx5IG9yZGVyZWQgc2V0IG9mIHZlcnRpY2VzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAqIENpcmN1bGFyIGRlcGVuZGVuY2llcyBhcmUgYWxsb3dlZC5cbiAgICAgKiBAbWV0aG9kIHRvcG9sb2dpY2FsU29ydFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBncmFwaFxuICAgICAqIEByZXR1cm4ge2FycmF5fSBQYXJ0aWFsbHkgb3JkZXJlZCBzZXQgb2YgdmVydGljZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICovXG4gICAgQ29tbW9uLnRvcG9sb2dpY2FsU29ydCA9IGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2phdmFzY3JpcHQtYWxnb3JpdGhtc1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIE1pbmtvIEdlY2hldiAoTUlUIGxpY2Vuc2UpXG4gICAgICAgIC8vIE1vZGlmaWNhdGlvbnM6IHRpZHkgZm9ybWF0dGluZyBhbmQgbmFtaW5nXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIHZpc2l0ZWQgPSBbXSxcbiAgICAgICAgICAgIHRlbXAgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBub2RlIGluIGdyYXBoKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRbbm9kZV0gJiYgIXRlbXBbbm9kZV0pIHtcbiAgICAgICAgICAgICAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydChub2RlLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0ID0gZnVuY3Rpb24obm9kZSwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCkge1xuICAgICAgICB2YXIgbmVpZ2hib3JzID0gZ3JhcGhbbm9kZV0gfHwgW107XG4gICAgICAgIHRlbXBbbm9kZV0gPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVpZ2hib3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XG5cbiAgICAgICAgICAgIGlmICh0ZW1wW25laWdoYm9yXSkge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdmlzaXRlZFtuZWlnaGJvcl0pIHtcbiAgICAgICAgICAgICAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydChuZWlnaGJvciwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wW25vZGVdID0gZmFsc2U7XG4gICAgICAgIHZpc2l0ZWRbbm9kZV0gPSB0cnVlO1xuXG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBfbl8gZnVuY3Rpb25zIGFzIGFyZ3VtZW50cyBhbmQgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZW0gaW4gb3JkZXIuXG4gICAgICogVGhlIGFyZ3VtZW50cyBhcHBsaWVkIHdoZW4gY2FsbGluZyB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYWxzbyBiZSBhcHBsaWVkIHRvIGV2ZXJ5IGZ1bmN0aW9uIHBhc3NlZC5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYHRoaXNgIHJlZmVycyB0byB0aGUgbGFzdCB2YWx1ZSByZXR1cm5lZCBpbiB0aGUgY2hhaW4gdGhhdCB3YXMgbm90IGB1bmRlZmluZWRgLlxuICAgICAqIFRoZXJlZm9yZSBpZiBhIHBhc3NlZCBmdW5jdGlvbiBkb2VzIG5vdCByZXR1cm4gYSB2YWx1ZSwgdGhlIHByZXZpb3VzbHkgcmV0dXJuZWQgdmFsdWUgaXMgbWFpbnRhaW5lZC5cbiAgICAgKiBBZnRlciBhbGwgcGFzc2VkIGZ1bmN0aW9ucyBoYXZlIGJlZW4gY2FsbGVkIHRoZSBuZXcgZnVuY3Rpb24gcmV0dXJucyB0aGUgbGFzdCByZXR1cm5lZCB2YWx1ZSAoaWYgYW55KS5cbiAgICAgKiBJZiBhbnkgb2YgdGhlIHBhc3NlZCBmdW5jdGlvbnMgYXJlIGEgY2hhaW4sIHRoZW4gdGhlIGNoYWluIHdpbGwgYmUgZmxhdHRlbmVkLlxuICAgICAqIEBtZXRob2QgY2hhaW5cbiAgICAgKiBAcGFyYW0gLi4uZnVuY3Mge2Z1bmN0aW9ufSBUaGUgZnVuY3Rpb25zIHRvIGNoYWluLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBwYXNzZWQgZnVuY3Rpb25zIGluIG9yZGVyLlxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZnVuY3MgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChmdW5jLl9jaGFpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gZmxhdHRlbiBhbHJlYWR5IGNoYWluZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgZnVuY3MucHVzaC5hcHBseShmdW5jcywgZnVuYy5fY2hhaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZ1bmNzLnB1c2goZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvZGV2dG9vbHMtZG9jcy9pc3N1ZXMvNTMjaXNzdWVjb21tZW50LTUxOTQxMzU4XG4gICAgICAgICAgICB2YXIgbGFzdFJlc3VsdCxcbiAgICAgICAgICAgICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3NbaV0uYXBwbHkobGFzdFJlc3VsdCwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNoYWluLl9jaGFpbmVkID0gZnVuY3M7XG5cbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYmVmb3JlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBiYXNlYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGNoYWluUGF0aEJlZm9yZVxuICAgICAqIEBwYXJhbSB7fSBiYXNlIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGJlZm9yZSB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW5QYXRoQmVmb3JlID0gZnVuY3Rpb24oYmFzZSwgcGF0aCwgZnVuYykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLnNldChiYXNlLCBwYXRoLCBDb21tb24uY2hhaW4oXG4gICAgICAgICAgICBmdW5jLFxuICAgICAgICAgICAgQ29tbW9uLmdldChiYXNlLCBwYXRoKVxuICAgICAgICApKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGFmdGVyIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBiYXNlYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGNoYWluUGF0aEFmdGVyXG4gICAgICogQHBhcmFtIHt9IGJhc2UgVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYWZ0ZXIgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluUGF0aEFmdGVyID0gZnVuY3Rpb24oYmFzZSwgcGF0aCwgZnVuYykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLnNldChiYXNlLCBwYXRoLCBDb21tb24uY2hhaW4oXG4gICAgICAgICAgICBDb21tb24uZ2V0KGJhc2UsIHBhdGgpLFxuICAgICAgICAgICAgZnVuY1xuICAgICAgICApKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZSB0aGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlIHRvIGVuYWJsZVxuICAgICAqIGNvbmNhdmUgdmVydGV4IGRlY29tcG9zaXRpb24gc3VwcG9ydCB3aGVuIHVzaW5nIGBCb2RpZXMuZnJvbVZlcnRpY2VzYCBlLmcuIGBDb21tb24uc2V0RGVjb21wKHJlcXVpcmUoJ3BvbHktZGVjb21wJykpYC5cbiAgICAgKiBAbWV0aG9kIHNldERlY29tcFxuICAgICAqIEBwYXJhbSB7fSBkZWNvbXAgVGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZS5cbiAgICAgKi9cbiAgICBDb21tb24uc2V0RGVjb21wID0gZnVuY3Rpb24oZGVjb21wKSB7XG4gICAgICAgIENvbW1vbi5fZGVjb21wID0gZGVjb21wO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUgcHJvdmlkZWQgdGhyb3VnaCBgQ29tbW9uLnNldERlY29tcGAsXG4gICAgICogb3RoZXJ3aXNlIHJldHVybnMgdGhlIGdsb2JhbCBgZGVjb21wYCBpZiBzZXQuXG4gICAgICogQG1ldGhvZCBnZXREZWNvbXBcbiAgICAgKiBAcmV0dXJuIHt9IFRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUgaWYgcHJvdmlkZWQuXG4gICAgICovXG4gICAgQ29tbW9uLmdldERlY29tcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBnZXQgdXNlciBwcm92aWRlZCBkZWNvbXAgaWYgc2V0XG4gICAgICAgIHZhciBkZWNvbXAgPSBDb21tb24uX2RlY29tcDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZyb20gd2luZG93IGdsb2JhbFxuICAgICAgICAgICAgaWYgKCFkZWNvbXAgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWNvbXAgPSB3aW5kb3cuZGVjb21wO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZyb20gbm9kZSBnbG9iYWxcbiAgICAgICAgICAgIGlmICghZGVjb21wICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVjb21wID0gZ2xvYmFsLmRlY29tcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZGVjb21wIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgIGRlY29tcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVjb21wO1xuICAgIH07XG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQm91bmRzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBheGlzLWFsaWduZWQgYm91bmRpbmcgYm94ZXMgKEFBQkIpLlxuKlxuKiBAY2xhc3MgQm91bmRzXG4qL1xuXG52YXIgQm91bmRzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGF4aXMtYWxpZ25lZCBib3VuZGluZyBib3ggKEFBQkIpIGZvciB0aGUgZ2l2ZW4gdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2JvdW5kc30gQSBuZXcgYm91bmRzIG9iamVjdFxuICAgICAqL1xuICAgIEJvdW5kcy5jcmVhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYm91bmRzID0geyBcbiAgICAgICAgICAgIG1pbjogeyB4OiAwLCB5OiAwIH0sIFxuICAgICAgICAgICAgbWF4OiB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2ZXJ0aWNlcylcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUoYm91bmRzLCB2ZXJ0aWNlcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGJvdW5kcyB1c2luZyB0aGUgZ2l2ZW4gdmVydGljZXMgYW5kIGV4dGVuZHMgdGhlIGJvdW5kcyBnaXZlbiBhIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm91bmRzLnVwZGF0ZSA9IGZ1bmN0aW9uKGJvdW5kcywgdmVydGljZXMsIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvdW5kcy5taW4ueCA9IEluZmluaXR5O1xuICAgICAgICBib3VuZHMubWF4LnggPSAtSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5taW4ueSA9IEluZmluaXR5O1xuICAgICAgICBib3VuZHMubWF4LnkgPSAtSW5maW5pdHk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgaWYgKHZlcnRleC54ID4gYm91bmRzLm1heC54KSBib3VuZHMubWF4LnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA8IGJvdW5kcy5taW4ueCkgYm91bmRzLm1pbi54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPiBib3VuZHMubWF4LnkpIGJvdW5kcy5tYXgueSA9IHZlcnRleC55O1xuICAgICAgICAgICAgaWYgKHZlcnRleC55IDwgYm91bmRzLm1pbi55KSBib3VuZHMubWluLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHZlbG9jaXR5KSB7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueCA+IDApIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWF4LnggKz0gdmVsb2NpdHkueDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1pbi54ICs9IHZlbG9jaXR5Lng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS55ID4gMCkge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueSArPSB2ZWxvY2l0eS55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWluLnkgKz0gdmVsb2NpdHkueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJvdW5kcyBjb250YWlucyB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAgICogQG1ldGhvZCBjb250YWluc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBib3VuZHMgY29udGFpbiB0aGUgcG9pbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIEJvdW5kcy5jb250YWlucyA9IGZ1bmN0aW9uKGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gYm91bmRzLm1pbi54ICYmIHBvaW50LnggPD0gYm91bmRzLm1heC54IFxuICAgICAgICAgICAgICAgJiYgcG9pbnQueSA+PSBib3VuZHMubWluLnkgJiYgcG9pbnQueSA8PSBib3VuZHMubWF4Lnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIGJvdW5kcyBpbnRlcnNlY3QuXG4gICAgICogQG1ldGhvZCBvdmVybGFwc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNBXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc0JcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBib3VuZHMgb3ZlcmxhcCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQm91bmRzLm92ZXJsYXBzID0gZnVuY3Rpb24oYm91bmRzQSwgYm91bmRzQikge1xuICAgICAgICByZXR1cm4gKGJvdW5kc0EubWluLnggPD0gYm91bmRzQi5tYXgueCAmJiBib3VuZHNBLm1heC54ID49IGJvdW5kc0IubWluLnhcbiAgICAgICAgICAgICAgICAmJiBib3VuZHNBLm1heC55ID49IGJvdW5kc0IubWluLnkgJiYgYm91bmRzQS5taW4ueSA8PSBib3VuZHNCLm1heC55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgYm91bmRzIGJ5IHRoZSBnaXZlbiB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqL1xuICAgIEJvdW5kcy50cmFuc2xhdGUgPSBmdW5jdGlvbihib3VuZHMsIHZlY3Rvcikge1xuICAgICAgICBib3VuZHMubWluLnggKz0gdmVjdG9yLng7XG4gICAgICAgIGJvdW5kcy5tYXgueCArPSB2ZWN0b3IueDtcbiAgICAgICAgYm91bmRzLm1pbi55ICs9IHZlY3Rvci55O1xuICAgICAgICBib3VuZHMubWF4LnkgKz0gdmVjdG9yLnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNoaWZ0cyB0aGUgYm91bmRzIHRvIHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIHNoaWZ0XG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqL1xuICAgIEJvdW5kcy5zaGlmdCA9IGZ1bmN0aW9uKGJvdW5kcywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhWCA9IGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGRlbHRhWSA9IGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueTtcbiAgICAgICAgICAgIFxuICAgICAgICBib3VuZHMubWluLnggPSBwb3NpdGlvbi54O1xuICAgICAgICBib3VuZHMubWF4LnggPSBwb3NpdGlvbi54ICsgZGVsdGFYO1xuICAgICAgICBib3VuZHMubWluLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICBib3VuZHMubWF4LnkgPSBwb3NpdGlvbi55ICsgZGVsdGFZO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuVmVjdG9yYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyB2ZWN0b3JzLlxuKiBWZWN0b3JzIGFyZSB0aGUgYmFzaXMgb2YgYWxsIHRoZSBnZW9tZXRyeSByZWxhdGVkIG9wZXJhdGlvbnMgaW4gdGhlIGVuZ2luZS5cbiogQSBgTWF0dGVyLlZlY3RvcmAgb2JqZWN0IGlzIG9mIHRoZSBmb3JtIGB7IHg6IDAsIHk6IDAgfWAuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBWZWN0b3JcbiovXG5cbi8vIFRPRE86IGNvbnNpZGVyIHBhcmFtcyBmb3IgcmV1c2luZyB2ZWN0b3Igb2JqZWN0c1xuXG52YXIgVmVjdG9yID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5jcmVhdGUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiB7IHg6IHggfHwgMCwgeTogeSB8fCAwIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgdmVjdG9yIHdpdGggYHhgIGFuZCBgeWAgY29waWVkIGZyb20gdGhlIGdpdmVuIGB2ZWN0b3JgLlxuICAgICAqIEBtZXRob2QgY2xvbmVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyBjbG9uZWQgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLmNsb25lID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54LCB5OiB2ZWN0b3IueSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgYSB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCBtYWduaXR1ZGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IubWFnbml0dWRlID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHZlY3Rvci54ICogdmVjdG9yLngpICsgKHZlY3Rvci55ICogdmVjdG9yLnkpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIGEgdmVjdG9yICh0aGVyZWZvcmUgc2F2aW5nIGEgYHNxcnRgIG9wZXJhdGlvbikuXG4gICAgICogQG1ldGhvZCBtYWduaXR1ZGVTcXVhcmVkXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNxdWFyZWQgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IubWFnbml0dWRlU3F1YXJlZCA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gKHZlY3Rvci54ICogdmVjdG9yLngpICsgKHZlY3Rvci55ICogdmVjdG9yLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZWN0b3IgYWJvdXQgKDAsIDApIGJ5IHNwZWNpZmllZCBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSB2ZWN0b3Igcm90YXRlZCBhYm91dCAoMCwgMClcbiAgICAgKi9cbiAgICBWZWN0b3Iucm90YXRlID0gZnVuY3Rpb24odmVjdG9yLCBhbmdsZSwgb3V0cHV0KSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgeCA9IHZlY3Rvci54ICogY29zIC0gdmVjdG9yLnkgKiBzaW47XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yLnggKiBzaW4gKyB2ZWN0b3IueSAqIGNvcztcbiAgICAgICAgb3V0cHV0LnggPSB4O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZWN0b3IgYWJvdXQgYSBzcGVjaWZpZWQgcG9pbnQgYnkgc3BlY2lmaWVkIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlQWJvdXRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igcm90YXRlZCBhYm91dCB0aGUgcG9pbnRcbiAgICAgKi9cbiAgICBWZWN0b3Iucm90YXRlQWJvdXQgPSBmdW5jdGlvbih2ZWN0b3IsIGFuZ2xlLCBwb2ludCwgb3V0cHV0KSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgeCA9IHBvaW50LnggKyAoKHZlY3Rvci54IC0gcG9pbnQueCkgKiBjb3MgLSAodmVjdG9yLnkgLSBwb2ludC55KSAqIHNpbik7XG4gICAgICAgIG91dHB1dC55ID0gcG9pbnQueSArICgodmVjdG9yLnggLSBwb2ludC54KSAqIHNpbiArICh2ZWN0b3IueSAtIHBvaW50LnkpICogY29zKTtcbiAgICAgICAgb3V0cHV0LnggPSB4O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2VzIGEgdmVjdG9yIChzdWNoIHRoYXQgaXRzIG1hZ25pdHVkZSBpcyBgMWApLlxuICAgICAqIEBtZXRob2Qgbm9ybWFsaXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG5vcm1hbGlzZWRcbiAgICAgKi9cbiAgICBWZWN0b3Iubm9ybWFsaXNlID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHZhciBtYWduaXR1ZGUgPSBWZWN0b3IubWFnbml0dWRlKHZlY3Rvcik7XG4gICAgICAgIGlmIChtYWduaXR1ZGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54IC8gbWFnbml0dWRlLCB5OiB2ZWN0b3IueSAvIG1hZ25pdHVkZSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QtcHJvZHVjdCBvZiB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGRvdFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBkb3QgcHJvZHVjdCBvZiB0aGUgdHdvIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuZG90ID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQikge1xuICAgICAgICByZXR1cm4gKHZlY3RvckEueCAqIHZlY3RvckIueCkgKyAodmVjdG9yQS55ICogdmVjdG9yQi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGNyb3NzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhlIHR3byB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmNyb3NzID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQikge1xuICAgICAgICByZXR1cm4gKHZlY3RvckEueCAqIHZlY3RvckIueSkgLSAodmVjdG9yQS55ICogdmVjdG9yQi54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0aHJlZSB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgY3Jvc3MzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JDXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGUgdGhyZWUgdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5jcm9zczMgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCB2ZWN0b3JDKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQi54IC0gdmVjdG9yQS54KSAqICh2ZWN0b3JDLnkgLSB2ZWN0b3JBLnkpIC0gKHZlY3RvckIueSAtIHZlY3RvckEueSkgKiAodmVjdG9yQy54IC0gdmVjdG9yQS54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBhZGRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igb2YgdmVjdG9yQSBhbmQgdmVjdG9yQiBhZGRlZFxuICAgICAqL1xuICAgIFZlY3Rvci5hZGQgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCBvdXRwdXQpIHtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICBvdXRwdXQueCA9IHZlY3RvckEueCArIHZlY3RvckIueDtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3JBLnkgKyB2ZWN0b3JCLnk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBzdWJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igb2YgdmVjdG9yQSBhbmQgdmVjdG9yQiBzdWJ0cmFjdGVkXG4gICAgICovXG4gICAgVmVjdG9yLnN1YiA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIG91dHB1dCkge1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIG91dHB1dC54ID0gdmVjdG9yQS54IC0gdmVjdG9yQi54O1xuICAgICAgICBvdXRwdXQueSA9IHZlY3RvckEueSAtIHZlY3RvckIueTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBhbmQgYSBzY2FsYXIuXG4gICAgICogQG1ldGhvZCBtdWx0XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBtdWx0aXBsaWVkIGJ5IHNjYWxhclxuICAgICAqL1xuICAgIFZlY3Rvci5tdWx0ID0gZnVuY3Rpb24odmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggKiBzY2FsYXIsIHk6IHZlY3Rvci55ICogc2NhbGFyIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYW5kIGEgc2NhbGFyLlxuICAgICAqIEBtZXRob2QgZGl2XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBkaXZpZGVkIGJ5IHNjYWxhclxuICAgICAqL1xuICAgIFZlY3Rvci5kaXYgPSBmdW5jdGlvbih2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAvIHNjYWxhciwgeTogdmVjdG9yLnkgLyBzY2FsYXIgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGVycGVuZGljdWxhciB2ZWN0b3IuIFNldCBgbmVnYXRlYCB0byB0cnVlIGZvciB0aGUgcGVycGVuZGljdWxhciBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgICAqIEBtZXRob2QgcGVycFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtuZWdhdGU9ZmFsc2VdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgcGVycGVuZGljdWxhciB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IucGVycCA9IGZ1bmN0aW9uKHZlY3RvciwgbmVnYXRlKSB7XG4gICAgICAgIG5lZ2F0ZSA9IG5lZ2F0ZSA9PT0gdHJ1ZSA/IC0xIDogMTtcbiAgICAgICAgcmV0dXJuIHsgeDogbmVnYXRlICogLXZlY3Rvci55LCB5OiBuZWdhdGUgKiB2ZWN0b3IueCB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBOZWdhdGVzIGJvdGggY29tcG9uZW50cyBvZiBhIHZlY3RvciBzdWNoIHRoYXQgaXQgcG9pbnRzIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgICogQG1ldGhvZCBuZWdcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgbmVnYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IubmVnID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiB7IHg6IC12ZWN0b3IueCwgeTogLXZlY3Rvci55IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvciBgdmVjdG9yQiAtIHZlY3RvckFgIGFuZCB0aGUgeC1heGlzIGluIHJhZGlhbnMuXG4gICAgICogQG1ldGhvZCBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gICAgICovXG4gICAgVmVjdG9yLmFuZ2xlID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih2ZWN0b3JCLnkgLSB2ZWN0b3JBLnksIHZlY3RvckIueCAtIHZlY3RvckEueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSB2ZWN0b3IgcG9vbCAobm90IHRocmVhZC1zYWZlKS5cbiAgICAgKiBAcHJvcGVydHkgX3RlbXBcbiAgICAgKiBAdHlwZSB7dmVjdG9yW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBWZWN0b3IuX3RlbXAgPSBbXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpLCBcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKCksIFxuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKVxuICAgIF07XG5cbn0pKCk7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuVmVydGljZXNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNldHMgb2YgdmVydGljZXMuXG4qIEEgc2V0IG9mIHZlcnRpY2VzIGlzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCB3aXRoIGFkZGl0aW9uYWwgaW5kZXhpbmcgcHJvcGVydGllcyBpbnNlcnRlZCBieSBgVmVydGljZXMuY3JlYXRlYC5cbiogQSBgTWF0dGVyLkJvZHlgIG1haW50YWlucyBhIHNldCBvZiB2ZXJ0aWNlcyB0byByZXByZXNlbnQgdGhlIHNoYXBlIG9mIHRoZSBvYmplY3QgKGl0cyBjb252ZXggaHVsbCkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBWZXJ0aWNlc1xuKi9cblxudmFyIFZlcnRpY2VzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljZXM7XG5cbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc2V0IG9mIGBNYXR0ZXIuQm9keWAgY29tcGF0aWJsZSB2ZXJ0aWNlcy5cbiAgICAgKiBUaGUgYHBvaW50c2AgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgcG9pbnRzIG9yaWVudGF0ZWQgYXJvdW5kIHRoZSBvcmlnaW4gYCgwLCAwKWAsIGZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogICAgIFt7IHg6IDAsIHk6IDAgfSwgeyB4OiAyNSwgeTogNTAgfSwgeyB4OiA1MCwgeTogMCB9XVxuICAgICAqXG4gICAgICogVGhlIGBWZXJ0aWNlcy5jcmVhdGVgIG1ldGhvZCByZXR1cm5zIGEgbmV3IGFycmF5IG9mIHZlcnRpY2VzLCB3aGljaCBhcmUgc2ltaWxhciB0byBNYXR0ZXIuVmVjdG9yIG9iamVjdHMsXG4gICAgICogYnV0IHdpdGggc29tZSBhZGRpdGlvbmFsIHJlZmVyZW5jZXMgcmVxdWlyZWQgZm9yIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uIHJvdXRpbmVzLlxuICAgICAqXG4gICAgICogVmVydGljZXMgbXVzdCBiZSBzcGVjaWZpZWQgaW4gY2xvY2t3aXNlIG9yZGVyLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBgYm9keWAgYXJndW1lbnQgaXMgbm90IG9wdGlvbmFsLCBhIGBNYXR0ZXIuQm9keWAgcmVmZXJlbmNlIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yW119IHBvaW50c1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvaW50cywgYm9keSkge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgICAgICAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIGlzSW50ZXJuYWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBzdHJpbmcgY29udGFpbmluZyBvcmRlcmVkIHggeSBwYWlycyBzZXBhcmF0ZWQgYnkgc3BhY2VzIChhbmQgb3B0aW9uYWxseSBjb21tYXMpLCBcbiAgICAgKiBpbnRvIGEgYE1hdHRlci5WZXJ0aWNlc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gYE1hdHRlci5Cb2R5YC5cbiAgICAgKiBGb3IgcGFyc2luZyBTVkcgcGF0aHMsIHNlZSBgU3ZnLnBhdGhUb1ZlcnRpY2VzYC5cbiAgICAgKiBAbWV0aG9kIGZyb21QYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5mcm9tUGF0aCA9IGZ1bmN0aW9uKHBhdGgsIGJvZHkpIHtcbiAgICAgICAgdmFyIHBhdGhQYXR0ZXJuID0gL0w/XFxzKihbLVxcZC5lXSspW1xccyxdKihbLVxcZC5lXSspKi9pZyxcbiAgICAgICAgICAgIHBvaW50cyA9IFtdO1xuXG4gICAgICAgIHBhdGgucmVwbGFjZShwYXRoUGF0dGVybiwgZnVuY3Rpb24obWF0Y2gsIHgsIHkpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogcGFyc2VGbG9hdCh4KSwgeTogcGFyc2VGbG9hdCh5KSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFZlcnRpY2VzLmNyZWF0ZShwb2ludHMsIGJvZHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjZW50cmUgKGNlbnRyb2lkKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgY2VudHJlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBjZW50cmUgcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jZW50cmUgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXJlYSA9IFZlcnRpY2VzLmFyZWEodmVydGljZXMsIHRydWUpLFxuICAgICAgICAgICAgY2VudHJlID0geyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBjcm9zcyxcbiAgICAgICAgICAgIHRlbXAsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGogPSAoaSArIDEpICUgdmVydGljZXMubGVuZ3RoO1xuICAgICAgICAgICAgY3Jvc3MgPSBWZWN0b3IuY3Jvc3ModmVydGljZXNbaV0sIHZlcnRpY2VzW2pdKTtcbiAgICAgICAgICAgIHRlbXAgPSBWZWN0b3IubXVsdChWZWN0b3IuYWRkKHZlcnRpY2VzW2ldLCB2ZXJ0aWNlc1tqXSksIGNyb3NzKTtcbiAgICAgICAgICAgIGNlbnRyZSA9IFZlY3Rvci5hZGQoY2VudHJlLCB0ZW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWZWN0b3IuZGl2KGNlbnRyZSwgNiAqIGFyZWEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhdmVyYWdlIChtZWFuKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgbWVhblxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgYXZlcmFnZSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLm1lYW4gPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXZlcmFnZSA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF2ZXJhZ2UueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZlcmFnZS55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVmVjdG9yLmRpdihhdmVyYWdlLCB2ZXJ0aWNlcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhcmVhIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBhcmVhXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHNpZ25lZFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFyZWFcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5hcmVhID0gZnVuY3Rpb24odmVydGljZXMsIHNpZ25lZCkge1xuICAgICAgICB2YXIgYXJlYSA9IDAsXG4gICAgICAgICAgICBqID0gdmVydGljZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmVhICs9ICh2ZXJ0aWNlc1tqXS54IC0gdmVydGljZXNbaV0ueCkgKiAodmVydGljZXNbal0ueSArIHZlcnRpY2VzW2ldLnkpO1xuICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lnbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGFyZWEgLyAyO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhcmVhKSAvIDI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChzZWNvbmQgbW9tZW50IG9mIGFyZWEpIG9mIHRoZSBzZXQgb2YgdmVydGljZXMgZ2l2ZW4gdGhlIHRvdGFsIG1hc3MuXG4gICAgICogQG1ldGhvZCBpbmVydGlhXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWFzc1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvbHlnb24ncyBtb21lbnQgb2YgaW5lcnRpYVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmluZXJ0aWEgPSBmdW5jdGlvbih2ZXJ0aWNlcywgbWFzcykge1xuICAgICAgICB2YXIgbnVtZXJhdG9yID0gMCxcbiAgICAgICAgICAgIGRlbm9taW5hdG9yID0gMCxcbiAgICAgICAgICAgIHYgPSB2ZXJ0aWNlcyxcbiAgICAgICAgICAgIGNyb3NzLFxuICAgICAgICAgICAgajtcblxuICAgICAgICAvLyBmaW5kIHRoZSBwb2x5Z29uJ3MgbW9tZW50IG9mIGluZXJ0aWEsIHVzaW5nIHNlY29uZCBtb21lbnQgb2YgYXJlYVxuICAgICAgICAvLyBmcm9tIGVxdWF0aW9ucyBhdCBodHRwOi8vd3d3LnBoeXNpY3Nmb3J1bXMuY29tL3Nob3d0aHJlYWQucGhwP3Q9MjUyOTNcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB2Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBqID0gKG4gKyAxKSAlIHYubGVuZ3RoO1xuICAgICAgICAgICAgY3Jvc3MgPSBNYXRoLmFicyhWZWN0b3IuY3Jvc3ModltqXSwgdltuXSkpO1xuICAgICAgICAgICAgbnVtZXJhdG9yICs9IGNyb3NzICogKFZlY3Rvci5kb3QodltqXSwgdltqXSkgKyBWZWN0b3IuZG90KHZbal0sIHZbbl0pICsgVmVjdG9yLmRvdCh2W25dLCB2W25dKSk7XG4gICAgICAgICAgICBkZW5vbWluYXRvciArPSBjcm9zcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobWFzcyAvIDYpICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgc2V0IG9mIHZlcnRpY2VzIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqL1xuICAgIFZlcnRpY2VzLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCB2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICBzY2FsYXIgPSB0eXBlb2Ygc2NhbGFyICE9PSAndW5kZWZpbmVkJyA/IHNjYWxhciA6IDE7XG5cbiAgICAgICAgdmFyIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHZlY3Rvci54ICogc2NhbGFyLFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IHZlY3Rvci55ICogc2NhbGFyLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ICs9IHRyYW5zbGF0ZVg7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS55ICs9IHRyYW5zbGF0ZVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHNldCBvZiB2ZXJ0aWNlcyBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMucm90YXRlID0gZnVuY3Rpb24odmVydGljZXMsIGFuZ2xlLCBwb2ludCkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgIHBvaW50WCA9IHBvaW50LngsXG4gICAgICAgICAgICBwb2ludFkgPSBwb2ludC55LFxuICAgICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBkeCxcbiAgICAgICAgICAgIGR5LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBkeCA9IHZlcnRleC54IC0gcG9pbnRYO1xuICAgICAgICAgICAgZHkgPSB2ZXJ0ZXgueSAtIHBvaW50WTtcbiAgICAgICAgICAgIHZlcnRleC54ID0gcG9pbnRYICsgKGR4ICogY29zIC0gZHkgKiBzaW4pO1xuICAgICAgICAgICAgdmVydGV4LnkgPSBwb2ludFkgKyAoZHggKiBzaW4gKyBkeSAqIGNvcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBgcG9pbnRgIGlzIGluc2lkZSB0aGUgc2V0IG9mIGB2ZXJ0aWNlc2AuXG4gICAgICogQG1ldGhvZCBjb250YWluc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVydGljZXMgY29udGFpbnMgcG9pbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNvbnRhaW5zID0gZnVuY3Rpb24odmVydGljZXMsIHBvaW50KSB7XG4gICAgICAgIHZhciBwb2ludFggPSBwb2ludC54LFxuICAgICAgICAgICAgcG9pbnRZID0gcG9pbnQueSxcbiAgICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbdmVydGljZXNMZW5ndGggLSAxXSxcbiAgICAgICAgICAgIG5leHRWZXJ0ZXg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIGlmICgocG9pbnRYIC0gdmVydGV4LngpICogKG5leHRWZXJ0ZXgueSAtIHZlcnRleC55KSBcbiAgICAgICAgICAgICAgICArIChwb2ludFkgLSB2ZXJ0ZXgueSkgKiAodmVydGV4LnggLSBuZXh0VmVydGV4LngpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmVydGV4ID0gbmV4dFZlcnRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIHZlcnRpY2VzIGZyb20gYSBwb2ludCAoZGVmYXVsdCBpcyBjZW50cmUpIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuc2NhbGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KSB7XG4gICAgICAgIGlmIChzY2FsZVggPT09IDEgJiYgc2NhbGVZID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgVmVydGljZXMuY2VudHJlKHZlcnRpY2VzKTtcblxuICAgICAgICB2YXIgdmVydGV4LFxuICAgICAgICAgICAgZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBkZWx0YSA9IFZlY3Rvci5zdWIodmVydGV4LCBwb2ludCk7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ID0gcG9pbnQueCArIGRlbHRhLnggKiBzY2FsZVg7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS55ID0gcG9pbnQueSArIGRlbHRhLnkgKiBzY2FsZVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYW1mZXJzIGEgc2V0IG9mIHZlcnRpY2VzIGJ5IGdpdmluZyB0aGVtIHJvdW5kZWQgY29ybmVycywgcmV0dXJucyBhIG5ldyBzZXQgb2YgdmVydGljZXMuXG4gICAgICogVGhlIHJhZGl1cyBwYXJhbWV0ZXIgaXMgYSBzaW5nbGUgbnVtYmVyIG9yIGFuIGFycmF5IHRvIHNwZWNpZnkgdGhlIHJhZGl1cyBmb3IgZWFjaCB2ZXJ0ZXguXG4gICAgICogQG1ldGhvZCBjaGFtZmVyXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5TWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlNYXhcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jaGFtZmVyID0gZnVuY3Rpb24odmVydGljZXMsIHJhZGl1cywgcXVhbGl0eSwgcXVhbGl0eU1pbiwgcXVhbGl0eU1heCkge1xuICAgICAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IFtyYWRpdXNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFkaXVzID0gcmFkaXVzIHx8IFs4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHF1YWxpdHkgZGVmYXVsdHMgdG8gLTEsIHdoaWNoIGlzIGF1dG9cbiAgICAgICAgcXVhbGl0eSA9ICh0eXBlb2YgcXVhbGl0eSAhPT0gJ3VuZGVmaW5lZCcpID8gcXVhbGl0eSA6IC0xO1xuICAgICAgICBxdWFsaXR5TWluID0gcXVhbGl0eU1pbiB8fCAyO1xuICAgICAgICBxdWFsaXR5TWF4ID0gcXVhbGl0eU1heCB8fCAxNDtcblxuICAgICAgICB2YXIgbmV3VmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJldlZlcnRleCA9IHZlcnRpY2VzW2kgLSAxID49IDAgPyBpIC0gMSA6IHZlcnRpY2VzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1soaSArIDEpICUgdmVydGljZXMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFkaXVzID0gcmFkaXVzW2kgPCByYWRpdXMubGVuZ3RoID8gaSA6IHJhZGl1cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSYWRpdXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcmV2Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IHZlcnRleC55IC0gcHJldlZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiBwcmV2VmVydGV4LnggLSB2ZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IG5leHRWZXJ0ZXgueSAtIHZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiB2ZXJ0ZXgueCAtIG5leHRWZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBkaWFnb25hbFJhZGl1cyA9IE1hdGguc3FydCgyICogTWF0aC5wb3coY3VycmVudFJhZGl1cywgMikpLFxuICAgICAgICAgICAgICAgIHJhZGl1c1ZlY3RvciA9IFZlY3Rvci5tdWx0KENvbW1vbi5jbG9uZShwcmV2Tm9ybWFsKSwgY3VycmVudFJhZGl1cyksXG4gICAgICAgICAgICAgICAgbWlkTm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZShWZWN0b3IubXVsdChWZWN0b3IuYWRkKHByZXZOb3JtYWwsIG5leHROb3JtYWwpLCAwLjUpKSxcbiAgICAgICAgICAgICAgICBzY2FsZWRWZXJ0ZXggPSBWZWN0b3Iuc3ViKHZlcnRleCwgVmVjdG9yLm11bHQobWlkTm9ybWFsLCBkaWFnb25hbFJhZGl1cykpO1xuXG4gICAgICAgICAgICB2YXIgcHJlY2lzaW9uID0gcXVhbGl0eTtcblxuICAgICAgICAgICAgaWYgKHF1YWxpdHkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSBkZWNpZGUgcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gTWF0aC5wb3coY3VycmVudFJhZGl1cywgMC4zMikgKiAxLjc1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBDb21tb24uY2xhbXAocHJlY2lzaW9uLCBxdWFsaXR5TWluLCBxdWFsaXR5TWF4KTtcblxuICAgICAgICAgICAgLy8gdXNlIGFuIGV2ZW4gdmFsdWUgZm9yIHByZWNpc2lvbiwgbW9yZSBsaWtlbHkgdG8gcmVkdWNlIGF4ZXMgYnkgdXNpbmcgc3ltbWV0cnlcbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24gJSAyID09PSAxKVxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiArPSAxO1xuXG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBNYXRoLmFjb3MoVmVjdG9yLmRvdChwcmV2Tm9ybWFsLCBuZXh0Tm9ybWFsKSksXG4gICAgICAgICAgICAgICAgdGhldGEgPSBhbHBoYSAvIHByZWNpc2lvbjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcmVjaXNpb247IGorKykge1xuICAgICAgICAgICAgICAgIG5ld1ZlcnRpY2VzLnB1c2goVmVjdG9yLmFkZChWZWN0b3Iucm90YXRlKHJhZGl1c1ZlY3RvciwgdGhldGEgKiBqKSwgc2NhbGVkVmVydGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBpbnB1dCB2ZXJ0aWNlcyBpbnRvIGNsb2Nrd2lzZSBvcmRlciBpbiBwbGFjZS5cbiAgICAgKiBAbWV0aG9kIGNsb2Nrd2lzZVNvcnRcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgY2VudHJlID0gVmVydGljZXMubWVhbih2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdmVydGljZXMuc29ydChmdW5jdGlvbih2ZXJ0ZXhBLCB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yLmFuZ2xlKGNlbnRyZSwgdmVydGV4QSkgLSBWZWN0b3IuYW5nbGUoY2VudHJlLCB2ZXJ0ZXhCKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZlcnRpY2VzIGZvcm0gYSBjb252ZXggc2hhcGUgKHZlcnRpY2VzIG11c3QgYmUgaW4gY2xvY2t3aXNlIG9yZGVyKS5cbiAgICAgKiBAbWV0aG9kIGlzQ29udmV4XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtib29sfSBgdHJ1ZWAgaWYgdGhlIGB2ZXJ0aWNlc2AgYXJlIGNvbnZleCwgYGZhbHNlYCBpZiBub3QgKG9yIGBudWxsYCBpZiBub3QgY29tcHV0YWJsZSkuXG4gICAgICovXG4gICAgVmVydGljZXMuaXNDb252ZXggPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAvLyBodHRwOi8vcGF1bGJvdXJrZS5uZXQvZ2VvbWV0cnkvcG9seWdvbm1lc2gvXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgUGF1bCBCb3Vya2UgKHVzZSBwZXJtaXR0ZWQpXG5cbiAgICAgICAgdmFyIGZsYWcgPSAwLFxuICAgICAgICAgICAgbiA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHo7XG5cbiAgICAgICAgaWYgKG4gPCAzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSBuO1xuICAgICAgICAgICAgayA9IChpICsgMikgJSBuO1xuICAgICAgICAgICAgeiA9ICh2ZXJ0aWNlc1tqXS54IC0gdmVydGljZXNbaV0ueCkgKiAodmVydGljZXNba10ueSAtIHZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgeiAtPSAodmVydGljZXNbal0ueSAtIHZlcnRpY2VzW2ldLnkpICogKHZlcnRpY2VzW2tdLnggLSB2ZXJ0aWNlc1tqXS54KTtcblxuICAgICAgICAgICAgaWYgKHogPCAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyB8PSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh6ID4gMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgfD0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZsYWcgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxhZyAhPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnZleCBodWxsIG9mIHRoZSBpbnB1dCB2ZXJ0aWNlcyBhcyBhIG5ldyBhcnJheSBvZiBwb2ludHMuXG4gICAgICogQG1ldGhvZCBodWxsXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIFt2ZXJ0ZXhdIHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuaHVsbCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9nZW9tYWxnb3JpdGhtcy5jb20vYTEwLV9odWxsLTEuaHRtbFxuXG4gICAgICAgIHZhciB1cHBlciA9IFtdLFxuICAgICAgICAgICAgbG93ZXIgPSBbXSwgXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIHNvcnQgdmVydGljZXMgb24geC1heGlzICh5LWF4aXMgZm9yIHRpZXMpXG4gICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuc2xpY2UoMCk7XG4gICAgICAgIHZlcnRpY2VzLnNvcnQoZnVuY3Rpb24odmVydGV4QSwgdmVydGV4Qikge1xuICAgICAgICAgICAgdmFyIGR4ID0gdmVydGV4QS54IC0gdmVydGV4Qi54O1xuICAgICAgICAgICAgcmV0dXJuIGR4ICE9PSAwID8gZHggOiB2ZXJ0ZXhBLnkgLSB2ZXJ0ZXhCLnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJ1aWxkIGxvd2VyIGh1bGxcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgd2hpbGUgKGxvd2VyLmxlbmd0aCA+PSAyIFxuICAgICAgICAgICAgICAgICAgICYmIFZlY3Rvci5jcm9zczMobG93ZXJbbG93ZXIubGVuZ3RoIC0gMl0sIGxvd2VyW2xvd2VyLmxlbmd0aCAtIDFdLCB2ZXJ0ZXgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBsb3dlci5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG93ZXIucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnVpbGQgdXBwZXIgaHVsbFxuICAgICAgICBmb3IgKGkgPSB2ZXJ0aWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIHdoaWxlICh1cHBlci5sZW5ndGggPj0gMiBcbiAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuY3Jvc3MzKHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLCB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgdmVydGV4KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwcGVyLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgdGhlIGxvd2VyIGFuZCB1cHBlciBodWxscyBnaXZlcyB0aGUgY29udmV4IGh1bGxcbiAgICAgICAgLy8gb21pdCBsYXN0IHBvaW50cyBiZWNhdXNlIHRoZXkgYXJlIHJlcGVhdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG90aGVyIGxpc3RcbiAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgIGxvd2VyLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiB1cHBlci5jb25jYXQobG93ZXIpO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyByaWdpZCBib2RpZXMuXG4qIEZvciBjcmVhdGluZyBib2RpZXMgd2l0aCBjb21tb24gY29uZmlndXJhdGlvbnMgc3VjaCBhcyByZWN0YW5nbGVzLCBjaXJjbGVzIGFuZCBvdGhlciBwb2x5Z29ucyBzZWUgdGhlIG1vZHVsZSBgTWF0dGVyLkJvZGllc2AuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG5cbiogQGNsYXNzIEJvZHlcbiovXG5cbnZhciBCb2R5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBCb2R5Ll90aW1lQ29ycmVjdGlvbiA9IHRydWU7XG4gICAgQm9keS5faW5lcnRpYVNjYWxlID0gNDtcbiAgICBCb2R5Ll9uZXh0Q29sbGlkaW5nR3JvdXBJZCA9IDE7XG4gICAgQm9keS5fbmV4dE5vbkNvbGxpZGluZ0dyb3VwSWQgPSAtMTtcbiAgICBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPSAweDAwMDE7XG4gICAgQm9keS5fYmFzZURlbHRhID0gMTAwMCAvIDYwO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFZlcnRpY2VzIG11c3QgYmUgc3BlY2lmaWVkIGluIGNsb2Nrd2lzZSBvcmRlci5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgQm9keS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGlkOiBDb21tb24ubmV4dElkKCksXG4gICAgICAgICAgICB0eXBlOiAnYm9keScsXG4gICAgICAgICAgICBsYWJlbDogJ0JvZHknLFxuICAgICAgICAgICAgcGFydHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKCdMIDAgMCBMIDQwIDAgTCA0MCA0MCBMIDAgNDAnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGZvcmNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHRvcnF1ZTogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBjb25zdHJhaW50SW1wdWxzZTogeyB4OiAwLCB5OiAwLCBhbmdsZTogMCB9LFxuICAgICAgICAgICAgdG90YWxDb250YWN0czogMCxcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgYW5ndWxhclNwZWVkOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgYW5ndWxhclZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgaXNTZW5zb3I6IGZhbHNlLFxuICAgICAgICAgICAgaXNTdGF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgaXNTbGVlcGluZzogZmFsc2UsXG4gICAgICAgICAgICBtb3Rpb246IDAsXG4gICAgICAgICAgICBzbGVlcFRocmVzaG9sZDogNjAsXG4gICAgICAgICAgICBkZW5zaXR5OiAwLjAwMSxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuMSxcbiAgICAgICAgICAgIGZyaWN0aW9uU3RhdGljOiAwLjUsXG4gICAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsb3A6IDAuMDUsXG4gICAgICAgICAgICB0aW1lU2NhbGU6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeFNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB5U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHhPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzOiBudWxsLFxuICAgICAgICAgICAgYm91bmRzOiBudWxsLFxuICAgICAgICAgICAgY2hhbWZlcjogbnVsbCxcbiAgICAgICAgICAgIGNpcmNsZVJhZGl1czogMCxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJldjogbnVsbCxcbiAgICAgICAgICAgIGFuZ2xlUHJldjogMCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGF4ZXM6IG51bGwsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgbWFzczogMCxcbiAgICAgICAgICAgIGluZXJ0aWE6IDAsXG4gICAgICAgICAgICBkZWx0YVRpbWU6IDEwMDAgLyA2MCxcbiAgICAgICAgICAgIF9vcmlnaW5hbDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBib2R5ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgX2luaXRQcm9wZXJ0aWVzKGJvZHksIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBncm91cCBpbmRleCBmb3Igd2hpY2ggYm9kaWVzIHdpbGwgY29sbGlkZS5cbiAgICAgKiBJZiBgaXNOb25Db2xsaWRpbmdgIGlzIGB0cnVlYCwgcmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgZ3JvdXAgaW5kZXggZm9yIHdoaWNoIGJvZGllcyB3aWxsIF9ub3RfIGNvbGxpZGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBuZXh0R3JvdXBcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtpc05vbkNvbGxpZGluZz1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBncm91cCBpbmRleFxuICAgICAqL1xuICAgIEJvZHkubmV4dEdyb3VwID0gZnVuY3Rpb24oaXNOb25Db2xsaWRpbmcpIHtcbiAgICAgICAgaWYgKGlzTm9uQ29sbGlkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIEJvZHkuX25leHROb25Db2xsaWRpbmdHcm91cElkLS07XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuX25leHRDb2xsaWRpbmdHcm91cElkKys7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIGNhdGVnb3J5IGJpdGZpZWxkIChzdGFydGluZyBhZnRlciB0aGUgaW5pdGlhbCBkZWZhdWx0IGNhdGVnb3J5IGAweDAwMDFgKS5cbiAgICAgKiBUaGVyZSBhcmUgMzIgYXZhaWxhYmxlLiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5leHRDYXRlZ29yeVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIGNhdGVnb3J5IGJpdGZpZWxkXG4gICAgICovXG4gICAgQm9keS5uZXh0Q2F0ZWdvcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgQm9keS5fbmV4dENhdGVnb3J5ID0gQm9keS5fbmV4dENhdGVnb3J5IDw8IDE7XG4gICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Q2F0ZWdvcnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGJvZHkgcHJvcGVydGllcy5cbiAgICAgKiBAbWV0aG9kIF9pbml0UHJvcGVydGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt9IFtvcHRpb25zXVxuICAgICAqL1xuICAgIHZhciBfaW5pdFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIC8vIGluaXQgcmVxdWlyZWQgcHJvcGVydGllcyAob3JkZXIgaXMgaW1wb3J0YW50KVxuICAgICAgICBCb2R5LnNldChib2R5LCB7XG4gICAgICAgICAgICBib3VuZHM6IGJvZHkuYm91bmRzIHx8IEJvdW5kcy5jcmVhdGUoYm9keS52ZXJ0aWNlcyksXG4gICAgICAgICAgICBwb3NpdGlvblByZXY6IGJvZHkucG9zaXRpb25QcmV2IHx8IFZlY3Rvci5jbG9uZShib2R5LnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGFuZ2xlUHJldjogYm9keS5hbmdsZVByZXYgfHwgYm9keS5hbmdsZSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBib2R5LnZlcnRpY2VzLFxuICAgICAgICAgICAgcGFydHM6IGJvZHkucGFydHMgfHwgW2JvZHldLFxuICAgICAgICAgICAgaXNTdGF0aWM6IGJvZHkuaXNTdGF0aWMsXG4gICAgICAgICAgICBpc1NsZWVwaW5nOiBib2R5LmlzU2xlZXBpbmcsXG4gICAgICAgICAgICBwYXJlbnQ6IGJvZHkucGFyZW50IHx8IGJvZHlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgVmVydGljZXMucm90YXRlKGJvZHkudmVydGljZXMsIGJvZHkuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBBeGVzLnJvdGF0ZShib2R5LmF4ZXMsIGJvZHkuYW5nbGUpO1xuICAgICAgICBCb3VuZHMudXBkYXRlKGJvZHkuYm91bmRzLCBib2R5LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcblxuICAgICAgICAvLyBhbGxvdyBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgICBCb2R5LnNldChib2R5LCB7XG4gICAgICAgICAgICBheGVzOiBvcHRpb25zLmF4ZXMgfHwgYm9keS5heGVzLFxuICAgICAgICAgICAgYXJlYTogb3B0aW9ucy5hcmVhIHx8IGJvZHkuYXJlYSxcbiAgICAgICAgICAgIG1hc3M6IG9wdGlvbnMubWFzcyB8fCBib2R5Lm1hc3MsXG4gICAgICAgICAgICBpbmVydGlhOiBvcHRpb25zLmluZXJ0aWEgfHwgYm9keS5pbmVydGlhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbmRlciBwcm9wZXJ0aWVzXG4gICAgICAgIHZhciBkZWZhdWx0RmlsbFN0eWxlID0gKGJvZHkuaXNTdGF0aWMgPyAnIzE0MTUxZicgOiBDb21tb24uY2hvb3NlKFsnI2YxOTY0OCcsICcjZjVkMjU5JywgJyNmNTVhM2MnLCAnIzA2M2U3YicsICcjZWNlY2QxJ10pKSxcbiAgICAgICAgICAgIGRlZmF1bHRTdHJva2VTdHlsZSA9IGJvZHkuaXNTdGF0aWMgPyAnIzU1NScgOiAnI2NjYycsXG4gICAgICAgICAgICBkZWZhdWx0TGluZVdpZHRoID0gYm9keS5pc1N0YXRpYyAmJiBib2R5LnJlbmRlci5maWxsU3R5bGUgPT09IG51bGwgPyAxIDogMDtcbiAgICAgICAgYm9keS5yZW5kZXIuZmlsbFN0eWxlID0gYm9keS5yZW5kZXIuZmlsbFN0eWxlIHx8IGRlZmF1bHRGaWxsU3R5bGU7XG4gICAgICAgIGJvZHkucmVuZGVyLnN0cm9rZVN0eWxlID0gYm9keS5yZW5kZXIuc3Ryb2tlU3R5bGUgfHwgZGVmYXVsdFN0cm9rZVN0eWxlO1xuICAgICAgICBib2R5LnJlbmRlci5saW5lV2lkdGggPSBib2R5LnJlbmRlci5saW5lV2lkdGggfHwgZGVmYXVsdExpbmVXaWR0aDtcbiAgICAgICAgYm9keS5yZW5kZXIuc3ByaXRlLnhPZmZzZXQgKz0gLShib2R5LmJvdW5kcy5taW4ueCAtIGJvZHkucG9zaXRpb24ueCkgLyAoYm9keS5ib3VuZHMubWF4LnggLSBib2R5LmJvdW5kcy5taW4ueCk7XG4gICAgICAgIGJvZHkucmVuZGVyLnNwcml0ZS55T2Zmc2V0ICs9IC0oYm9keS5ib3VuZHMubWluLnkgLSBib2R5LnBvc2l0aW9uLnkpIC8gKGJvZHkuYm91bmRzLm1heC55IC0gYm9keS5ib3VuZHMubWluLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHByb3BlcnR5IGFuZCBhIHZhbHVlIChvciBtYXAgb2YpLCBzZXRzIHRoZSBwcm9wZXJ0eShzKSBvbiB0aGUgYm9keSwgdXNpbmcgdGhlIGFwcHJvcHJpYXRlIHNldHRlciBmdW5jdGlvbnMgaWYgdGhleSBleGlzdC5cbiAgICAgKiBQcmVmZXIgdG8gdXNlIHRoZSBhY3R1YWwgc2V0dGVyIGZ1bmN0aW9ucyBpbiBwZXJmb3JtYW5jZSBjcml0aWNhbCBzaXR1YXRpb25zLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt9IHNldHRpbmdzIEEgcHJvcGVydHkgbmFtZSAob3IgbWFwIG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcykgdG8gc2V0IG9uIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSB7fSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IGlmIGBzZXR0aW5nc2AgaXMgYSBzaW5nbGUgcHJvcGVydHkgbmFtZS5cbiAgICAgKi9cbiAgICBCb2R5LnNldCA9IGZ1bmN0aW9uKGJvZHksIHNldHRpbmdzLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvcGVydHk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gc2V0dGluZ3M7XG4gICAgICAgICAgICBzZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ3NbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHByb3BlcnR5IGluIHNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgcHJvcGVydHkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHNldHRpbmdzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydHkpIHtcblxuICAgICAgICAgICAgY2FzZSAnaXNTdGF0aWMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0U3RhdGljKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lzU2xlZXBpbmcnOlxuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXNzJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVuc2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXREZW5zaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZXJ0aWEnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2ZXJ0aWNlcyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRWZXJ0aWNlcyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3NpdGlvbic6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbmdsZSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRWZWxvY2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbmd1bGFyVmVsb2NpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NwZWVkJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFNwZWVkKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ3VsYXJTcGVlZCc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRBbmd1bGFyU3BlZWQoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGFydHMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0UGFydHMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2VudHJlJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldENlbnRyZShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJvZHlbcHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5IGFzIHN0YXRpYywgaW5jbHVkaW5nIGlzU3RhdGljIGZsYWcgYW5kIHNldHRpbmcgbWFzcyBhbmQgaW5lcnRpYSB0byBJbmZpbml0eS5cbiAgICAgKiBAbWV0aG9kIHNldFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gaXNTdGF0aWNcbiAgICAgKi9cbiAgICBCb2R5LnNldFN0YXRpYyA9IGZ1bmN0aW9uKGJvZHksIGlzU3RhdGljKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuICAgICAgICAgICAgcGFydC5pc1N0YXRpYyA9IGlzU3RhdGljO1xuXG4gICAgICAgICAgICBpZiAoaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdGl0dXRpb246IHBhcnQucmVzdGl0dXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyaWN0aW9uOiBwYXJ0LmZyaWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtYXNzOiBwYXJ0Lm1hc3MsXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWE6IHBhcnQuaW5lcnRpYSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2l0eTogcGFydC5kZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlTWFzczogcGFydC5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUluZXJ0aWE6IHBhcnQuaW52ZXJzZUluZXJ0aWFcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcGFydC5yZXN0aXR1dGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgcGFydC5tYXNzID0gcGFydC5pbmVydGlhID0gcGFydC5kZW5zaXR5ID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlTWFzcyA9IHBhcnQuaW52ZXJzZUluZXJ0aWEgPSAwO1xuXG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvblByZXYueCA9IHBhcnQucG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uUHJldi55ID0gcGFydC5wb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIHBhcnQuYW5nbGVQcmV2ID0gcGFydC5hbmdsZTtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5hbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQubW90aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5fb3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnJlc3RpdHV0aW9uID0gcGFydC5fb3JpZ2luYWwucmVzdGl0dXRpb247XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IHBhcnQuX29yaWdpbmFsLmZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIHBhcnQubWFzcyA9IHBhcnQuX29yaWdpbmFsLm1hc3M7XG4gICAgICAgICAgICAgICAgcGFydC5pbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW5lcnRpYTtcbiAgICAgICAgICAgICAgICBwYXJ0LmRlbnNpdHkgPSBwYXJ0Ll9vcmlnaW5hbC5kZW5zaXR5O1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZU1hc3MgPSBwYXJ0Ll9vcmlnaW5hbC5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VJbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW52ZXJzZUluZXJ0aWE7XG5cbiAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbWFzcyBvZiB0aGUgYm9keS4gSW52ZXJzZSBtYXNzLCBkZW5zaXR5IGFuZCBpbmVydGlhIGFyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLlxuICAgICAqIEBtZXRob2Qgc2V0TWFzc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXNzXG4gICAgICovXG4gICAgQm9keS5zZXRNYXNzID0gZnVuY3Rpb24oYm9keSwgbWFzcykge1xuICAgICAgICB2YXIgbW9tZW50ID0gYm9keS5pbmVydGlhIC8gKGJvZHkubWFzcyAvIDYpO1xuICAgICAgICBib2R5LmluZXJ0aWEgPSBtb21lbnQgKiAobWFzcyAvIDYpO1xuICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMSAvIGJvZHkuaW5lcnRpYTtcblxuICAgICAgICBib2R5Lm1hc3MgPSBtYXNzO1xuICAgICAgICBib2R5LmludmVyc2VNYXNzID0gMSAvIGJvZHkubWFzcztcbiAgICAgICAgYm9keS5kZW5zaXR5ID0gYm9keS5tYXNzIC8gYm9keS5hcmVhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZW5zaXR5IG9mIHRoZSBib2R5LiBNYXNzIGFuZCBpbmVydGlhIGFyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLlxuICAgICAqIEBtZXRob2Qgc2V0RGVuc2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5zaXR5XG4gICAgICovXG4gICAgQm9keS5zZXREZW5zaXR5ID0gZnVuY3Rpb24oYm9keSwgZGVuc2l0eSkge1xuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgZGVuc2l0eSAqIGJvZHkuYXJlYSk7XG4gICAgICAgIGJvZHkuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vbWVudCBvZiBpbmVydGlhIG9mIHRoZSBib2R5LiBUaGlzIGlzIHRoZSBzZWNvbmQgbW9tZW50IG9mIGFyZWEgaW4gdHdvIGRpbWVuc2lvbnMuXG4gICAgICogSW52ZXJzZSBpbmVydGlhIGlzIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuIE1hc3MgaXMgbm90IGNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRJbmVydGlhXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZXJ0aWFcbiAgICAgKi9cbiAgICBCb2R5LnNldEluZXJ0aWEgPSBmdW5jdGlvbihib2R5LCBpbmVydGlhKSB7XG4gICAgICAgIGJvZHkuaW5lcnRpYSA9IGluZXJ0aWE7XG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAxIC8gYm9keS5pbmVydGlhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5J3MgdmVydGljZXMgYW5kIHVwZGF0ZXMgYm9keSBwcm9wZXJ0aWVzIGFjY29yZGluZ2x5LCBpbmNsdWRpbmcgaW5lcnRpYSwgYXJlYSBhbmQgbWFzcyAod2l0aCByZXNwZWN0IHRvIGBib2R5LmRlbnNpdHlgKS5cbiAgICAgKiBWZXJ0aWNlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmb3JtZWQgdG8gYmUgb3JpZW50YXRlZCBhcm91bmQgdGhlaXIgY2VudHJlIG9mIG1hc3MgYXMgdGhlIG9yaWdpbi5cbiAgICAgKiBUaGV5IGFyZSB0aGVuIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlZCB0byB3b3JsZCBzcGFjZSBiYXNlZCBvbiBgYm9keS5wb3NpdGlvbmAuXG4gICAgICpcbiAgICAgKiBUaGUgYHZlcnRpY2VzYCBhcmd1bWVudCBzaG91bGQgYmUgcGFzc2VkIGFzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCBwb2ludHMgKG9yIGEgYE1hdHRlci5WZXJ0aWNlc2AgYXJyYXkpLlxuICAgICAqIFZlcnRpY2VzIG11c3QgZm9ybSBhIGNvbnZleCBodWxsLiBDb25jYXZlIHZlcnRpY2VzIG11c3QgYmUgZGVjb21wb3NlZCBpbnRvIGNvbnZleCBwYXJ0cy5cbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIHNldFZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3JbXX0gdmVydGljZXNcbiAgICAgKi9cbiAgICBCb2R5LnNldFZlcnRpY2VzID0gZnVuY3Rpb24oYm9keSwgdmVydGljZXMpIHtcbiAgICAgICAgLy8gY2hhbmdlIHZlcnRpY2VzXG4gICAgICAgIGlmICh2ZXJ0aWNlc1swXS5ib2R5ID09PSBib2R5KSB7XG4gICAgICAgICAgICBib2R5LnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LnZlcnRpY2VzID0gVmVydGljZXMuY3JlYXRlKHZlcnRpY2VzLCBib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGJvZHkuYXhlcyA9IEF4ZXMuZnJvbVZlcnRpY2VzKGJvZHkudmVydGljZXMpO1xuICAgICAgICBib2R5LmFyZWEgPSBWZXJ0aWNlcy5hcmVhKGJvZHkudmVydGljZXMpO1xuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogYm9keS5hcmVhKTtcblxuICAgICAgICAvLyBvcmllbnQgdmVydGljZXMgYXJvdW5kIHRoZSBjZW50cmUgb2YgbWFzcyBhdCBvcmlnaW4gKDAsIDApXG4gICAgICAgIHZhciBjZW50cmUgPSBWZXJ0aWNlcy5jZW50cmUoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBjZW50cmUsIC0xKTtcblxuICAgICAgICAvLyB1cGRhdGUgaW5lcnRpYSB3aGlsZSB2ZXJ0aWNlcyBhcmUgYXQgb3JpZ2luICgwLCAwKVxuICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShib2R5LnZlcnRpY2VzLCBib2R5Lm1hc3MpKTtcblxuICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnlcbiAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBCb3VuZHMudXBkYXRlKGJvZHkuYm91bmRzLCBib2R5LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGFydHMgb2YgdGhlIGBib2R5YCBhbmQgdXBkYXRlcyBtYXNzLCBpbmVydGlhIGFuZCBjZW50cm9pZC5cbiAgICAgKiBFYWNoIHBhcnQgd2lsbCBoYXZlIGl0cyBwYXJlbnQgc2V0IHRvIGBib2R5YC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBjb252ZXggaHVsbCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY29tcHV0ZWQgYW5kIHNldCBvbiBgYm9keWAsIHVubGVzcyBgYXV0b0h1bGxgIGlzIHNldCB0byBgZmFsc2UuYFxuICAgICAqIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGVuc3VyZSB0aGF0IHRoZSBmaXJzdCBwYXJ0IGluIGBib2R5LnBhcnRzYCB3aWxsIGFsd2F5cyBiZSB0aGUgYGJvZHlgLlxuICAgICAqIEBtZXRob2Qgc2V0UGFydHNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gcGFydHNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFthdXRvSHVsbD10cnVlXVxuICAgICAqL1xuICAgIEJvZHkuc2V0UGFydHMgPSBmdW5jdGlvbihib2R5LCBwYXJ0cywgYXV0b0h1bGwpIHtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgLy8gYWRkIGFsbCB0aGUgcGFydHMsIGVuc3VyaW5nIHRoYXQgdGhlIGZpcnN0IHBhcnQgaXMgYWx3YXlzIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuICAgICAgICBib2R5LnBhcnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGJvZHkucGFydHMucHVzaChib2R5KTtcbiAgICAgICAgYm9keS5wYXJlbnQgPSBib2R5O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSBib2R5KSB7XG4gICAgICAgICAgICAgICAgcGFydC5wYXJlbnQgPSBib2R5O1xuICAgICAgICAgICAgICAgIGJvZHkucGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBhdXRvSHVsbCA9IHR5cGVvZiBhdXRvSHVsbCAhPT0gJ3VuZGVmaW5lZCcgPyBhdXRvSHVsbCA6IHRydWU7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgY29udmV4IGh1bGwgb2YgYWxsIHBhcnRzIHRvIHNldCBvbiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGF1dG9IdWxsKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuY29uY2F0KHBhcnRzW2ldLnZlcnRpY2VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVmVydGljZXMuY2xvY2t3aXNlU29ydCh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgICAgIHZhciBodWxsID0gVmVydGljZXMuaHVsbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgICAgICAgaHVsbENlbnRyZSA9IFZlcnRpY2VzLmNlbnRyZShodWxsKTtcblxuICAgICAgICAgICAgQm9keS5zZXRWZXJ0aWNlcyhib2R5LCBodWxsKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBodWxsQ2VudHJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1bSB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIHZhciB0b3RhbCA9IEJvZHkuX3RvdGFsUHJvcGVydGllcyhib2R5KTtcblxuICAgICAgICBib2R5LmFyZWEgPSB0b3RhbC5hcmVhO1xuICAgICAgICBib2R5LnBhcmVudCA9IGJvZHk7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueCA9IHRvdGFsLmNlbnRyZS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnkgPSB0b3RhbC5jZW50cmUueTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IHRvdGFsLmNlbnRyZS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gdG90YWwuY2VudHJlLnk7XG5cbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIHRvdGFsLm1hc3MpO1xuICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWwuaW5lcnRpYSk7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgdG90YWwuY2VudHJlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjZW50cmUgb2YgbWFzcyBvZiB0aGUgYm9keS4gXG4gICAgICogVGhlIGBjZW50cmVgIGlzIGEgdmVjdG9yIGluIHdvcmxkLXNwYWNlIHVubGVzcyBgcmVsYXRpdmVgIGlzIHNldCwgaW4gd2hpY2ggY2FzZSBpdCBpcyBhIHRyYW5zbGF0aW9uLlxuICAgICAqIFRoZSBjZW50cmUgb2YgbWFzcyBpcyB0aGUgcG9pbnQgdGhlIGJvZHkgcm90YXRlcyBhYm91dCBhbmQgY2FuIGJlIHVzZWQgdG8gc2ltdWxhdGUgbm9uLXVuaWZvcm0gZGVuc2l0eS5cbiAgICAgKiBUaGlzIGlzIGVxdWFsIHRvIG1vdmluZyBgYm9keS5wb3NpdGlvbmAgYnV0IG5vdCB0aGUgYGJvZHkudmVydGljZXNgLlxuICAgICAqIEludmFsaWQgaWYgdGhlIGBjZW50cmVgIGZhbGxzIG91dHNpZGUgdGhlIGJvZHkncyBjb252ZXggaHVsbC5cbiAgICAgKiBAbWV0aG9kIHNldENlbnRyZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBjZW50cmVcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHJlbGF0aXZlXG4gICAgICovXG4gICAgQm9keS5zZXRDZW50cmUgPSBmdW5jdGlvbihib2R5LCBjZW50cmUsIHJlbGF0aXZlKSB7XG4gICAgICAgIGlmICghcmVsYXRpdmUpIHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBjZW50cmUueCAtIChib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54KTtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBjZW50cmUueSAtIChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KTtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCA9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ID0gY2VudHJlLnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSArPSBjZW50cmUueTtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBjZW50cmUueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSBjZW50cmUueTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYm9keS4gQnkgZGVmYXVsdCB2ZWxvY2l0eSBpcyB1bmNoYW5nZWQuXG4gICAgICogSWYgYHVwZGF0ZVZlbG9jaXR5YCBpcyBgdHJ1ZWAgdGhlbiB2ZWxvY2l0eSBpcyBpbmZlcnJlZCBmcm9tIHRoZSBjaGFuZ2UgaW4gcG9zaXRpb24uXG4gICAgICogQG1ldGhvZCBzZXRQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZVZlbG9jaXR5PWZhbHNlXVxuICAgICAqL1xuICAgIEJvZHkuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihib2R5LCBwb3NpdGlvbiwgdXBkYXRlVmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1Yihwb3NpdGlvbiwgYm9keS5wb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKHVwZGF0ZVZlbG9jaXR5KSB7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkueCA9IGRlbHRhLng7XG4gICAgICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSBkZWx0YS55O1xuICAgICAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoZGVsdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBkZWx0YS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSArPSBkZWx0YS55O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBkZWx0YS55O1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGRlbHRhKTtcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ2xlIG9mIHRoZSBib2R5LiBCeSBkZWZhdWx0IGFuZ3VsYXIgdmVsb2NpdHkgaXMgdW5jaGFuZ2VkLlxuICAgICAqIElmIGB1cGRhdGVWZWxvY2l0eWAgaXMgYHRydWVgIHRoZW4gYW5ndWxhciB2ZWxvY2l0eSBpcyBpbmZlcnJlZCBmcm9tIHRoZSBjaGFuZ2UgaW4gYW5nbGUuXG4gICAgICogQG1ldGhvZCBzZXRBbmdsZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZVZlbG9jaXR5PWZhbHNlXVxuICAgICAqL1xuICAgIEJvZHkuc2V0QW5nbGUgPSBmdW5jdGlvbihib2R5LCBhbmdsZSwgdXBkYXRlVmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gYW5nbGUgLSBib2R5LmFuZ2xlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHVwZGF0ZVZlbG9jaXR5KSB7XG4gICAgICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IGRlbHRhO1xuICAgICAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSBNYXRoLmFicyhkZWx0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmFuZ2xlUHJldiArPSBkZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuICAgICAgICAgICAgcGFydC5hbmdsZSArPSBkZWx0YTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBkZWx0YSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGRlbHRhKTtcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGRlbHRhLCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGxpbmVhciB2ZWxvY2l0eSBvZiB0aGUgYm9keS4gIFxuICAgICAqIEFmZmVjdHMgYm9keSBzcGVlZC5cbiAgICAgKiBAbWV0aG9kIHNldFZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm9keS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGUgPSBib2R5LmRlbHRhVGltZSAvIEJvZHkuX2Jhc2VEZWx0YTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueCAtIHZlbG9jaXR5LnggKiB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnkgLSB2ZWxvY2l0eS55ICogdGltZVNjYWxlO1xuICAgICAgICBib2R5LnZlbG9jaXR5LnggPSAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCkgLyB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueSA9IChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KSAvIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgbGluZWFyIHZlbG9jaXR5IG9mIHRoZSBib2R5LlxuICAgICAqIEBtZXRob2QgZ2V0VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm9keS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZSA9IEJvZHkuX2Jhc2VEZWx0YSAvIGJvZHkuZGVsdGFUaW1lO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCkgKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICB5OiAoYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueSkgKiB0aW1lU2NhbGVcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBsaW5lYXIgc3BlZWQgb2YgdGhlIGJvZHkuICBcbiAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBtYWduaXR1ZGUgb2YgaXRzIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgZ2V0U3BlZWRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHNwZWVkXG4gICAgICovXG4gICAgQm9keS5nZXRTcGVlZCA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5tYWduaXR1ZGUoQm9keS5nZXRWZWxvY2l0eShib2R5KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgbGluZWFyIHNwZWVkIG9mIHRoZSBib2R5LiAgXG4gICAgICogRGlyZWN0aW9uIGlzIG1haW50YWluZWQuIEFmZmVjdHMgYm9keSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHNldFNwZWVkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG4gICAgICovXG4gICAgQm9keS5zZXRTcGVlZCA9IGZ1bmN0aW9uKGJvZHksIHNwZWVkKSB7XG4gICAgICAgIEJvZHkuc2V0VmVsb2NpdHkoYm9keSwgVmVjdG9yLm11bHQoVmVjdG9yLm5vcm1hbGlzZShCb2R5LmdldFZlbG9jaXR5KGJvZHkpKSwgc3BlZWQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCByb3RhdGlvbmFsIHZlbG9jaXR5IG9mIHRoZSBib2R5LiAgXG4gICAgICogQWZmZWN0cyBib2R5IGFuZ3VsYXIgc3BlZWQuXG4gICAgICogQG1ldGhvZCBzZXRBbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGUgPSBib2R5LmRlbHRhVGltZSAvIEJvZHkuX2Jhc2VEZWx0YTtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlIC0gdmVsb2NpdHkgKiB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKGJvZHkuYW5nbGUgLSBib2R5LmFuZ2xlUHJldikgLyB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHJvdGF0aW9uYWwgdmVsb2NpdHkgb2YgdGhlIGJvZHkuXG4gICAgICogQG1ldGhvZCBnZXRBbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IGFuZ3VsYXIgdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LmdldEFuZ3VsYXJWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIChib2R5LmFuZ2xlIC0gYm9keS5hbmdsZVByZXYpICogQm9keS5fYmFzZURlbHRhIC8gYm9keS5kZWx0YVRpbWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcm90YXRpb25hbCBzcGVlZCBvZiB0aGUgYm9keS4gIFxuICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIG1hZ25pdHVkZSBvZiBpdHMgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIGdldEFuZ3VsYXJTcGVlZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gYW5ndWxhciBzcGVlZFxuICAgICAqL1xuICAgIEJvZHkuZ2V0QW5ndWxhclNwZWVkID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoQm9keS5nZXRBbmd1bGFyVmVsb2NpdHkoYm9keSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHJvdGF0aW9uYWwgc3BlZWQgb2YgdGhlIGJvZHkuICBcbiAgICAgKiBEaXJlY3Rpb24gaXMgbWFpbnRhaW5lZC4gQWZmZWN0cyBib2R5IGFuZ3VsYXIgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCBzZXRBbmd1bGFyU3BlZWRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ3VsYXJTcGVlZCA9IGZ1bmN0aW9uKGJvZHksIHNwZWVkKSB7XG4gICAgICAgIEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5KGJvZHksIENvbW1vbi5zaWduKEJvZHkuZ2V0QW5ndWxhclZlbG9jaXR5KGJvZHkpKSAqIHNwZWVkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYSBib2R5IGJ5IGEgZ2l2ZW4gdmVjdG9yIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uLiBCeSBkZWZhdWx0IHZlbG9jaXR5IGlzIHVuY2hhbmdlZC5cbiAgICAgKiBJZiBgdXBkYXRlVmVsb2NpdHlgIGlzIGB0cnVlYCB0aGVuIHZlbG9jaXR5IGlzIGluZmVycmVkIGZyb20gdGhlIGNoYW5nZSBpbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB0cmFuc2xhdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZVZlbG9jaXR5PWZhbHNlXVxuICAgICAqL1xuICAgIEJvZHkudHJhbnNsYXRlID0gZnVuY3Rpb24oYm9keSwgdHJhbnNsYXRpb24sIHVwZGF0ZVZlbG9jaXR5KSB7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgVmVjdG9yLmFkZChib2R5LnBvc2l0aW9uLCB0cmFuc2xhdGlvbiksIHVwZGF0ZVZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyBhIGJvZHkgYnkgYSBnaXZlbiBhbmdsZSByZWxhdGl2ZSB0byBpdHMgY3VycmVudCBhbmdsZS4gQnkgZGVmYXVsdCBhbmd1bGFyIHZlbG9jaXR5IGlzIHVuY2hhbmdlZC5cbiAgICAgKiBJZiBgdXBkYXRlVmVsb2NpdHlgIGlzIGB0cnVlYCB0aGVuIGFuZ3VsYXIgdmVsb2NpdHkgaXMgaW5mZXJyZWQgZnJvbSB0aGUgY2hhbmdlIGluIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtwb2ludF1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVWZWxvY2l0eT1mYWxzZV1cbiAgICAgKi9cbiAgICBCb2R5LnJvdGF0ZSA9IGZ1bmN0aW9uKGJvZHksIHJvdGF0aW9uLCBwb2ludCwgdXBkYXRlVmVsb2NpdHkpIHtcbiAgICAgICAgaWYgKCFwb2ludCkge1xuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24sIHVwZGF0ZVZlbG9jaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbiksXG4gICAgICAgICAgICAgICAgc2luID0gTWF0aC5zaW4ocm90YXRpb24pLFxuICAgICAgICAgICAgICAgIGR4ID0gYm9keS5wb3NpdGlvbi54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IGJvZHkucG9zaXRpb24ueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54ICsgKGR4ICogY29zIC0gZHkgKiBzaW4pLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyAoZHggKiBzaW4gKyBkeSAqIGNvcylcbiAgICAgICAgICAgIH0sIHVwZGF0ZVZlbG9jaXR5KTtcblxuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24sIHVwZGF0ZVZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGJvZHksIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50IChkZWZhdWx0IGlzIGJvZHkgY2VudHJlKS5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BvaW50XVxuICAgICAqL1xuICAgIEJvZHkuc2NhbGUgPSBmdW5jdGlvbihib2R5LCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpIHtcbiAgICAgICAgdmFyIHRvdGFsQXJlYSA9IDAsXG4gICAgICAgICAgICB0b3RhbEluZXJ0aWEgPSAwO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgYm9keS5wb3NpdGlvbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgLy8gc2NhbGUgdmVydGljZXNcbiAgICAgICAgICAgIFZlcnRpY2VzLnNjYWxlKHBhcnQudmVydGljZXMsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBwYXJ0LmF4ZXMgPSBBeGVzLmZyb21WZXJ0aWNlcyhwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIHBhcnQuYXJlYSA9IFZlcnRpY2VzLmFyZWEocGFydC52ZXJ0aWNlcyk7XG4gICAgICAgICAgICBCb2R5LnNldE1hc3MocGFydCwgYm9keS5kZW5zaXR5ICogcGFydC5hcmVhKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGluZXJ0aWEgKHJlcXVpcmVzIHZlcnRpY2VzIHRvIGJlIGF0IG9yaWdpbilcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IC1wYXJ0LnBvc2l0aW9uLngsIHk6IC1wYXJ0LnBvc2l0aW9uLnkgfSk7XG4gICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEocGFydCwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShwYXJ0LnZlcnRpY2VzLCBwYXJ0Lm1hc3MpKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IHBhcnQucG9zaXRpb24ueCwgeTogcGFydC5wb3NpdGlvbi55IH0pO1xuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbEFyZWEgKz0gcGFydC5hcmVhO1xuICAgICAgICAgICAgICAgIHRvdGFsSW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjYWxlIHBvc2l0aW9uXG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggPSBwb2ludC54ICsgKHBhcnQucG9zaXRpb24ueCAtIHBvaW50LngpICogc2NhbGVYO1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ID0gcG9pbnQueSArIChwYXJ0LnBvc2l0aW9uLnkgLSBwb2ludC55KSAqIHNjYWxlWTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvdW5kc1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYm9keS5hcmVhID0gdG90YWxBcmVhO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogdG90YWxBcmVhKTtcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWxJbmVydGlhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBjaXJjbGVzXG4gICAgICAgIGlmIChib2R5LmNpcmNsZVJhZGl1cykgeyBcbiAgICAgICAgICAgIGlmIChzY2FsZVggPT09IHNjYWxlWSkge1xuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzICo9IHNjYWxlWDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYm9keSBpcyBubyBsb25nZXIgYSBjaXJjbGVcbiAgICAgICAgICAgICAgICBib2R5LmNpcmNsZVJhZGl1cyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gdXBkYXRlIGJ5IGludGVncmF0aW5nIHRoZSBlcXVhdGlvbnMgb2YgbW90aW9uIG9uIHRoZSBgYm9keWAuXG4gICAgICogVGhpcyBpcyBhcHBsaWVkIGV2ZXJ5IHVwZGF0ZSBieSBgTWF0dGVyLkVuZ2luZWAgYXV0b21hdGljYWxseS5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGFUaW1lPTE2LjY2Nl1cbiAgICAgKi9cbiAgICBCb2R5LnVwZGF0ZSA9IGZ1bmN0aW9uKGJvZHksIGRlbHRhVGltZSkge1xuICAgICAgICBkZWx0YVRpbWUgPSAodHlwZW9mIGRlbHRhVGltZSAhPT0gJ3VuZGVmaW5lZCcgPyBkZWx0YVRpbWUgOiAoMTAwMCAvIDYwKSkgKiBib2R5LnRpbWVTY2FsZTtcblxuICAgICAgICB2YXIgZGVsdGFUaW1lU3F1YXJlZCA9IGRlbHRhVGltZSAqIGRlbHRhVGltZSxcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSBCb2R5Ll90aW1lQ29ycmVjdGlvbiA/IGRlbHRhVGltZSAvIChib2R5LmRlbHRhVGltZSB8fCBkZWx0YVRpbWUpIDogMTtcblxuICAgICAgICAvLyBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAgIHZhciBmcmljdGlvbkFpciA9IDEgLSBib2R5LmZyaWN0aW9uQWlyICogKGRlbHRhVGltZSAvIENvbW1vbi5fYmFzZURlbHRhKSxcbiAgICAgICAgICAgIHZlbG9jaXR5UHJldlggPSAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCkgKiBjb3JyZWN0aW9uLFxuICAgICAgICAgICAgdmVsb2NpdHlQcmV2WSA9IChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KSAqIGNvcnJlY3Rpb247XG5cbiAgICAgICAgLy8gdXBkYXRlIHZlbG9jaXR5IHdpdGggVmVybGV0IGludGVncmF0aW9uXG4gICAgICAgIGJvZHkudmVsb2NpdHkueCA9ICh2ZWxvY2l0eVByZXZYICogZnJpY3Rpb25BaXIpICsgKGJvZHkuZm9yY2UueCAvIGJvZHkubWFzcykgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAodmVsb2NpdHlQcmV2WSAqIGZyaWN0aW9uQWlyKSArIChib2R5LmZvcmNlLnkgLyBib2R5Lm1hc3MpICogZGVsdGFUaW1lU3F1YXJlZDtcblxuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gYm9keS52ZWxvY2l0eS55O1xuICAgICAgICBib2R5LmRlbHRhVGltZSA9IGRlbHRhVGltZTtcblxuICAgICAgICAvLyB1cGRhdGUgYW5ndWxhciB2ZWxvY2l0eSB3aXRoIFZlcmxldCBpbnRlZ3JhdGlvblxuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9ICgoYm9keS5hbmdsZSAtIGJvZHkuYW5nbGVQcmV2KSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS50b3JxdWUgLyBib2R5LmluZXJ0aWEpICogZGVsdGFUaW1lU3F1YXJlZDtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICBib2R5LmFuZ2xlICs9IGJvZHkuYW5ndWxhclZlbG9jaXR5O1xuXG4gICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgYm9keSBnZW9tZXRyeVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2R5LmFuZ3VsYXJWZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHByb3BlcnRpZXMgYGJvZHkudmVsb2NpdHlgLCBgYm9keS5zcGVlZGAsIGBib2R5LmFuZ3VsYXJWZWxvY2l0eWAgYW5kIGBib2R5LmFuZ3VsYXJTcGVlZGAgd2hpY2ggYXJlIG5vcm1hbGlzZWQgaW4gcmVsYXRpb24gdG8gYEJvZHkuX2Jhc2VEZWx0YWAuXG4gICAgICogQG1ldGhvZCB1cGRhdGVWZWxvY2l0aWVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgQm9keS51cGRhdGVWZWxvY2l0aWVzID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICB2YXIgdGltZVNjYWxlID0gQm9keS5fYmFzZURlbHRhIC8gYm9keS5kZWx0YVRpbWUsXG4gICAgICAgICAgICBib2R5VmVsb2NpdHkgPSBib2R5LnZlbG9jaXR5O1xuXG4gICAgICAgIGJvZHlWZWxvY2l0eS54ID0gKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpICogdGltZVNjYWxlO1xuICAgICAgICBib2R5VmVsb2NpdHkueSA9IChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KSAqIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS5zcGVlZCA9IE1hdGguc3FydCgoYm9keVZlbG9jaXR5LnggKiBib2R5VmVsb2NpdHkueCkgKyAoYm9keVZlbG9jaXR5LnkgKiBib2R5VmVsb2NpdHkueSkpO1xuXG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKGJvZHkuYW5nbGUgLSBib2R5LmFuZ2xlUHJldikgKiB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBgZm9yY2VgIHRvIHRoZSBgYm9keWAgZnJvbSB0aGUgZm9yY2Ugb3JpZ2luIGBwb3NpdGlvbmAgaW4gd29ybGQtc3BhY2UsIG92ZXIgYSBzaW5nbGUgdGltZXN0ZXAsIGluY2x1ZGluZyBhcHBseWluZyBhbnkgcmVzdWx0aW5nIGFuZ3VsYXIgdG9ycXVlLlxuICAgICAqIFxuICAgICAqIEZvcmNlcyBhcmUgdXNlZnVsIGZvciBlZmZlY3RzIGxpa2UgZ3Jhdml0eSwgd2luZCBvciByb2NrZXQgdGhydXN0LCBidXQgY2FuIGJlIGRpZmZpY3VsdCBpbiBwcmFjdGljZSB3aGVuIHByZWNpc2UgY29udHJvbCBpcyBuZWVkZWQuIEluIHRoZXNlIGNhc2VzIHNlZSBgQm9keS5zZXRWZWxvY2l0eWAgYW5kIGBCb2R5LnNldFBvc2l0aW9uYCBhcyBhbiBhbHRlcm5hdGl2ZS5cbiAgICAgKiBcbiAgICAgKiBUaGUgZm9yY2UgZnJvbSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgYXBwbGllZCBvbmNlIGZvciB0aGUgZHVyYXRpb24gb2YgYSBzaW5nbGUgdGltZXN0ZXAsIGluIG90aGVyIHdvcmRzIHRoZSBkdXJhdGlvbiBkZXBlbmRzIGRpcmVjdGx5IG9uIHRoZSBjdXJyZW50IGVuZ2luZSB1cGRhdGUgYGRlbHRhYCBhbmQgdGhlIHJhdGUgb2YgY2FsbHMgdG8gdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBcbiAgICAgKiBUaGVyZWZvcmUgdG8gYWNjb3VudCBmb3IgdGltZSwgeW91IHNob3VsZCBhcHBseSB0aGUgZm9yY2UgY29uc3RhbnRseSBvdmVyIGFzIG1hbnkgZW5naW5lIHVwZGF0ZXMgYXMgZXF1aXZhbGVudCB0byB0aGUgaW50ZW5kZWQgZHVyYXRpb24uXG4gICAgICogXG4gICAgICogSWYgYWxsIG9yIHBhcnQgb2YgdGhlIGZvcmNlIGR1cmF0aW9uIGlzIHNvbWUgZnJhY3Rpb24gb2YgYSB0aW1lc3RlcCwgZmlyc3QgbXVsdGlwbHkgdGhlIGZvcmNlIGJ5IGBkdXJhdGlvbiAvIHRpbWVzdGVwYC5cbiAgICAgKiBcbiAgICAgKiBUaGUgZm9yY2Ugb3JpZ2luIGBwb3NpdGlvbmAgaW4gd29ybGQtc3BhY2UgbXVzdCBhbHNvIGJlIHNwZWNpZmllZC4gUGFzc2luZyBgYm9keS5wb3NpdGlvbmAgd2lsbCByZXN1bHQgaW4gemVybyBhbmd1bGFyIGVmZmVjdCBhcyB0aGUgZm9yY2Ugb3JpZ2luIHdvdWxkIGJlIGF0IHRoZSBjZW50cmUgb2YgbWFzcy5cbiAgICAgKiBcbiAgICAgKiBUaGUgYGJvZHlgIHdpbGwgdGFrZSB0aW1lIHRvIGFjY2VsZXJhdGUgdW5kZXIgYSBmb3JjZSwgdGhlIHJlc3VsdGluZyBlZmZlY3QgZGVwZW5kcyBvbiBkdXJhdGlvbiBvZiB0aGUgZm9yY2UsIHRoZSBib2R5IG1hc3MgYW5kIG90aGVyIGZvcmNlcyBvbiB0aGUgYm9keSBpbmNsdWRpbmcgZnJpY3Rpb24gY29tYmluZWQuXG4gICAgICogQG1ldGhvZCBhcHBseUZvcmNlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uIFRoZSBmb3JjZSBvcmlnaW4gaW4gd29ybGQtc3BhY2UuIFBhc3MgYGJvZHkucG9zaXRpb25gIHRvIGF2b2lkIGFuZ3VsYXIgdG9ycXVlLlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBmb3JjZVxuICAgICAqL1xuICAgIEJvZHkuYXBwbHlGb3JjZSA9IGZ1bmN0aW9uKGJvZHksIHBvc2l0aW9uLCBmb3JjZSkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0geyB4OiBwb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgIGJvZHkuZm9yY2UueCArPSBmb3JjZS54O1xuICAgICAgICBib2R5LmZvcmNlLnkgKz0gZm9yY2UueTtcbiAgICAgICAgYm9keS50b3JxdWUgKz0gb2Zmc2V0LnggKiBmb3JjZS55IC0gb2Zmc2V0LnkgKiBmb3JjZS54O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdW1zIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHkuXG4gICAgICogQG1ldGhvZCBfdG90YWxQcm9wZXJ0aWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt9XG4gICAgICovXG4gICAgQm9keS5fdG90YWxQcm9wZXJ0aWVzID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICAvLyBmcm9tIGVxdWF0aW9ucyBhdDpcbiAgICAgICAgLy8gaHR0cHM6Ly9lY291cnNlcy5vdS5lZHUvY2dpLWJpbi9lYm9vay5jZ2k/ZG9jPSZ0b3BpYz1zdCZjaGFwX3NlYz0wNy4yJnBhZ2U9dGhlb3J5XG4gICAgICAgIC8vIGh0dHA6Ly9vdXRwdXQudG8vc2lkZXdheS9kZWZhdWx0LmFzcD9xbm89MTIxMTAwMDg3XG5cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBtYXNzOiAwLFxuICAgICAgICAgICAgYXJlYTogMCxcbiAgICAgICAgICAgIGluZXJ0aWE6IDAsXG4gICAgICAgICAgICBjZW50cmU6IHsgeDogMCwgeTogMCB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc3VtIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgZm9yICh2YXIgaSA9IGJvZHkucGFydHMubGVuZ3RoID09PSAxID8gMCA6IDE7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV0sXG4gICAgICAgICAgICAgICAgbWFzcyA9IHBhcnQubWFzcyAhPT0gSW5maW5pdHkgPyBwYXJ0Lm1hc3MgOiAxO1xuXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLm1hc3MgKz0gbWFzcztcbiAgICAgICAgICAgIHByb3BlcnRpZXMuYXJlYSArPSBwYXJ0LmFyZWE7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmluZXJ0aWEgKz0gcGFydC5pbmVydGlhO1xuICAgICAgICAgICAgcHJvcGVydGllcy5jZW50cmUgPSBWZWN0b3IuYWRkKHByb3BlcnRpZXMuY2VudHJlLCBWZWN0b3IubXVsdChwYXJ0LnBvc2l0aW9uLCBtYXNzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0aWVzLmNlbnRyZSA9IFZlY3Rvci5kaXYocHJvcGVydGllcy5jZW50cmUsIHByb3BlcnRpZXMubWFzcyk7XG5cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBib2R5IHN0YXJ0cyBzbGVlcGluZyAod2hlcmUgYHRoaXNgIGlzIHRoZSBib2R5KS5cbiAgICAqXG4gICAgKiBAZXZlbnQgc2xlZXBTdGFydFxuICAgICogQHRoaXMge2JvZHl9IFRoZSBib2R5IHRoYXQgaGFzIHN0YXJ0ZWQgc2xlZXBpbmdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgYm9keSBlbmRzIHNsZWVwaW5nICh3aGVyZSBgdGhpc2AgaXMgdGhlIGJvZHkpLlxuICAgICpcbiAgICAqIEBldmVudCBzbGVlcEVuZFxuICAgICogQHRoaXMge2JvZHl9IFRoZSBib2R5IHRoYXQgaGFzIGVuZGVkIHNsZWVwaW5nXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBCb2R5LmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gU2V0IGJ5IGBCb2R5LmNyZWF0ZWAuXG4gICAgICogXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiYm9keVwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgYm9kaWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJCb2R5XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVc2UgYEJvZHkuc2V0UGFydHNgIHRvIHNldC4gXG4gICAgICogXG4gICAgICogQW4gYXJyYXkgb2YgYm9kaWVzIHRoYXQgbWFrZSB1cCB0aGlzIGJvZHkuIFxuICAgICAqIFRoZSBmaXJzdCBib2R5IGluIHRoZSBhcnJheSBtdXN0IGFsd2F5cyBiZSBhIHNlbGYgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGJvZHkgaW5zdGFuY2UuXG4gICAgICogQWxsIGJvZGllcyBpbiB0aGUgYHBhcnRzYCBhcnJheSB0b2dldGhlciBmb3JtIGEgc2luZ2xlIHJpZ2lkIGNvbXBvdW5kIGJvZHkuXG4gICAgICogUGFydHMgYXJlIGFsbG93ZWQgdG8gb3ZlcmxhcCwgaGF2ZSBnYXBzIG9yIGhvbGVzIG9yIGV2ZW4gZm9ybSBjb25jYXZlIGJvZGllcy5cbiAgICAgKiBQYXJ0cyB0aGVtc2VsdmVzIHNob3VsZCBuZXZlciBiZSBhZGRlZCB0byBhIGBXb3JsZGAsIG9ubHkgdGhlIHBhcmVudCBib2R5IHNob3VsZCBiZS5cbiAgICAgKiBVc2UgYEJvZHkuc2V0UGFydHNgIHdoZW4gc2V0dGluZyBwYXJ0cyB0byBlbnN1cmUgY29ycmVjdCB1cGRhdGVzIG9mIGFsbCBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHBhcnRzXG4gICAgICogQHR5cGUgYm9keVtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVcGRhdGVkIGJ5IGBCb2R5LnNldFBhcnRzYC5cbiAgICAgKiBcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYm9keSB0aGF0IHRoaXMgaXMgYSBwYXJ0IG9mLiBTZWUgYGJvZHkucGFydHNgLlxuICAgICAqIFRoaXMgaXMgYSBzZWxmIHJlZmVyZW5jZSBpZiB0aGUgYm9keSBpcyBub3QgYSBwYXJ0IG9mIGFub3RoZXIgYm9keS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHNwZWNpZnlpbmcgdGhlIGFuZ2xlIG9mIHRoZSBib2R5LCBpbiByYWRpYW5zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFuZ2xlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRWZXJ0aWNlc2Agb3IgYEJvZHkuc2V0UGFydHNgIHRvIHNldC4gU2VlIGFsc28gYEJvZGllcy5mcm9tVmVydGljZXNgLlxuICAgICAqIFxuICAgICAqIEFuIGFycmF5IG9mIGBWZWN0b3JgIG9iamVjdHMgdGhhdCBzcGVjaWZ5IHRoZSBjb252ZXggaHVsbCBvZiB0aGUgcmlnaWQgYm9keS5cbiAgICAgKiBUaGVzZSBzaG91bGQgYmUgcHJvdmlkZWQgYWJvdXQgdGhlIG9yaWdpbiBgKDAsIDApYC4gRS5nLlxuICAgICAqXG4gICAgICogYFt7IHg6IDAsIHk6IDAgfSwgeyB4OiAyNSwgeTogNTAgfSwgeyB4OiA1MCwgeTogMCB9XWBcbiAgICAgKiBcbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGFsd2F5cyBiZSBjb252ZXgsIGluIGNsb2Nrd2lzZSBvcmRlciBhbmQgbXVzdCBub3QgY29udGFpbiBhbnkgZHVwbGljYXRlIHBvaW50cy5cbiAgICAgKiBcbiAgICAgKiBDb25jYXZlIHZlcnRpY2VzIHNob3VsZCBiZSBkZWNvbXBvc2VkIGludG8gY29udmV4IGBwYXJ0c2AsIHNlZSBgQm9kaWVzLmZyb21WZXJ0aWNlc2AgYW5kIGBCb2R5LnNldFBhcnRzYC5cbiAgICAgKlxuICAgICAqIFdoZW4gc2V0IHRoZSB2ZXJ0aWNlcyBhcmUgdHJhbnNsYXRlZCBzdWNoIHRoYXQgYGJvZHkucG9zaXRpb25gIGlzIGF0IHRoZSBjZW50cmUgb2YgbWFzcy5cbiAgICAgKiBNYW55IG90aGVyIGJvZHkgcHJvcGVydGllcyBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlc2UgdmVydGljZXMgd2hlbiBzZXQgaW5jbHVkaW5nIGBkZW5zaXR5YCwgYGFyZWFgIGFuZCBgaW5lcnRpYWAuXG4gICAgICogXG4gICAgICogVGhlIG1vZHVsZSBgTWF0dGVyLlZlcnRpY2VzYCBjb250YWlucyB1c2VmdWwgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIHZlcnRpY2VzLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHZlcnRpY2VzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVc2UgYEJvZHkuc2V0UG9zaXRpb25gIHRvIHNldC4gXG4gICAgICogXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgY3VycmVudCB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiB0aGUgYm9keS5cbiAgICAgKiBcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgcG9zaXRpb25cbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IGFjY3VtdWxhdGVzIHRoZSB0b3RhbCBmb3JjZSBhcHBsaWVkIHRvIHRoZSBib2R5IGZvciBhIHNpbmdsZSB1cGRhdGUuXG4gICAgICogRm9yY2UgaXMgemVyb2VkIGFmdGVyIGV2ZXJ5IGBFbmdpbmUudXBkYXRlYCwgc28gY29uc3RhbnQgZm9yY2VzIHNob3VsZCBiZSBhcHBsaWVkIGZvciBldmVyeSB1cGRhdGUgdGhleSBhcmUgbmVlZGVkLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgZm9yY2VcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGFjY3VtdWxhdGVzIHRoZSB0b3RhbCB0b3JxdWUgKHR1cm5pbmcgZm9yY2UpIGFwcGxpZWQgdG8gdGhlIGJvZHkgZm9yIGEgc2luZ2xlIHVwZGF0ZS4gU2VlIGFsc28gYEJvZHkuYXBwbHlGb3JjZWAuXG4gICAgICogVG9ycXVlIGlzIHplcm9lZCBhZnRlciBldmVyeSBgRW5naW5lLnVwZGF0ZWAsIHNvIGNvbnN0YW50IHRvcnF1ZXMgc2hvdWxkIGJlIGFwcGxpZWQgZm9yIGV2ZXJ5IHVwZGF0ZSB0aGV5IGFyZSBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBUb3JxdWVzIHJlc3VsdCBpbiBhbmd1bGFyIGFjY2VsZXJhdGlvbiBvbiBldmVyeSB1cGRhdGUsIHdoaWNoIGRlcGVuZHMgb24gYm9keSBpbmVydGlhIGFuZCB0aGUgZW5naW5lIHVwZGF0ZSBkZWx0YS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgdG9ycXVlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRTcGVlZGAgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBTZWUgYEJvZHkuZ2V0U3BlZWRgIGZvciBkZXRhaWxzLlxuICAgICAqIFxuICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIG1hZ25pdHVkZSBvZiBgYm9keS52ZWxvY2l0eWAgKGFsd2F5cyBwb3NpdGl2ZSkuXG4gICAgICogXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHNwZWVkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRWZWxvY2l0eWAgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBTZWUgYEJvZHkuZ2V0VmVsb2NpdHlgIGZvciBkZXRhaWxzLlxuICAgICAqIFxuICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIG1hZ25pdHVkZSBvZiBgYm9keS5hbmd1bGFyVmVsb2NpdHlgIChhbHdheXMgcG9zaXRpdmUpLlxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSB2ZWxvY2l0eVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldEFuZ3VsYXJTcGVlZGAgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBTZWUgYEJvZHkuZ2V0QW5ndWxhclNwZWVkYCBmb3IgZGV0YWlscy5cbiAgICAgKiBcbiAgICAgKiBcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgYW5ndWxhclNwZWVkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRBbmd1bGFyVmVsb2NpdHlgIHRvIHNldC4gXG4gICAgICogXG4gICAgICogU2VlIGBCb2R5LmdldEFuZ3VsYXJWZWxvY2l0eWAgZm9yIGRldGFpbHMuXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgYW5ndWxhclZlbG9jaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRTdGF0aWNgIHRvIHNldC4gXG4gICAgICogXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYSBib2R5IGlzIGNvbnNpZGVyZWQgc3RhdGljLiBBIHN0YXRpYyBib2R5IGNhbiBuZXZlciBjaGFuZ2UgcG9zaXRpb24gb3IgYW5nbGUgYW5kIGlzIGNvbXBsZXRlbHkgZml4ZWQuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgaXNTdGF0aWNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGEgYm9keSBpcyBhIHNlbnNvci4gU2Vuc29yIHRyaWdnZXJzIGNvbGxpc2lvbiBldmVudHMsIGJ1dCBkb2Vzbid0IHJlYWN0IHdpdGggY29sbGlkaW5nIGJvZHkgcGh5c2ljYWxseS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc1NlbnNvclxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgU2xlZXBpbmcuc2V0YCB0byBzZXQuIFxuICAgICAqIFxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBib2R5IGlzIGNvbnNpZGVyZWQgc2xlZXBpbmcuIEEgc2xlZXBpbmcgYm9keSBhY3RzIHNpbWlsYXIgdG8gYSBzdGF0aWMgYm9keSwgZXhjZXB0IGl0IGlzIG9ubHkgdGVtcG9yYXJ5IGFuZCBjYW4gYmUgYXdva2VuLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGlzU2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBDYWxjdWxhdGVkIGR1cmluZyBlbmdpbmUgdXBkYXRlIG9ubHkgd2hlbiBzbGVlcGluZyBpcyBlbmFibGVkLlxuICAgICAqIFxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBsb29zZWx5IG1lYXN1cmVzIHRoZSBhbW91bnQgb2YgbW92ZW1lbnQgYSBib2R5IGN1cnJlbnRseSBoYXMuXG4gICAgICpcbiAgICAgKiBEZXJpdmVkIGZyb20gYGJvZHkuc3BlZWReMiArIGJvZHkuYW5ndWxhclNwZWVkXjJgLiBTZWUgYFNsZWVwaW5nLnVwZGF0ZWAuXG4gICAgICogXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IG1vdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsZW5ndGggb2YgdGltZSBkdXJpbmcgd2hpY2ggdGhpcyBib2R5IG11c3QgaGF2ZSBuZWFyLXplcm8gdmVsb2NpdHkgYmVmb3JlIGl0IGlzIHNldCBhcyBzbGVlcGluZyBieSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlIChpZiBzbGVlcGluZyBpcyBlbmFibGVkIGJ5IHRoZSBlbmdpbmUpLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBzbGVlcFRocmVzaG9sZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldERlbnNpdHlgIHRvIHNldC4gXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHkgKG1hc3MgcGVyIHVuaXQgYXJlYSkuXG4gICAgICogXG4gICAgICogTWFzcyB3aWxsIGFsc28gYmUgdXBkYXRlZCB3aGVuIHNldC5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBkZW5zaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVc2UgYEJvZHkuc2V0TWFzc2AgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbWFzcyBvZiB0aGUgYm9keS5cbiAgICAgKiBcbiAgICAgKiBEZW5zaXR5IHdpbGwgYWxzbyBiZSB1cGRhdGVkIHdoZW4gc2V0LlxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBtYXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldE1hc3NgIHRvIHNldC4gXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGludmVyc2UgbWFzcyBvZiB0aGUgYm9keSAoYDEgLyBtYXNzYCkuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgaW52ZXJzZU1hc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBBdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgd2hlbiB2ZXJ0aWNlcywgbWFzcyBvciBkZW5zaXR5IGFyZSBzZXQgb3Igc2V0IHRocm91Z2ggYEJvZHkuc2V0SW5lcnRpYWAuXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG1vbWVudCBvZiBpbmVydGlhIG9mIHRoZSBib2R5LiBUaGlzIGlzIHRoZSBzZWNvbmQgbW9tZW50IG9mIGFyZWEgaW4gdHdvIGRpbWVuc2lvbnMuXG4gICAgICogXG4gICAgICogQ2FuIGJlIG1hbnVhbGx5IHNldCB0byBgSW5maW5pdHlgIHRvIHByZXZlbnQgcm90YXRpb24gb2YgdGhlIGJvZHkuIFNlZSBgQm9keS5zZXRJbmVydGlhYC5cbiAgICAgKiBcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgaW5lcnRpYVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIEF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCB3aGVuIHZlcnRpY2VzLCBtYXNzIG9yIGRlbnNpdHkgYXJlIHNldCBvciBjYWxjdWxhdGVkIGJ5IGBCb2R5LnNldEluZXJ0aWFgLlxuICAgICAqIFxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBpbnZlcnNlIG1vbWVudCBvZiBpbmVydGlhIG9mIHRoZSBib2R5IChgMSAvIGluZXJ0aWFgKS5cbiAgICAgKiBcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgaW52ZXJzZUluZXJ0aWFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSByZXN0aXR1dGlvbiAoZWxhc3RpY2l0eSkgb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBjb2xsaXNpb25zIG1heSBiZSBwZXJmZWN0bHkgaW5lbGFzdGljIGFuZCBubyBib3VuY2luZyBtYXkgb2NjdXIuIFxuICAgICAqIEEgdmFsdWUgb2YgYDAuOGAgbWVhbnMgdGhlIGJvZHkgbWF5IGJvdW5jZSBiYWNrIHdpdGggYXBwcm94aW1hdGVseSA4MCUgb2YgaXRzIGtpbmV0aWMgZW5lcmd5LlxuICAgICAqIE5vdGUgdGhhdCBjb2xsaXNpb24gcmVzcG9uc2UgaXMgYmFzZWQgb24gX3BhaXJzXyBvZiBib2RpZXMsIGFuZCB0aGF0IGByZXN0aXR1dGlvbmAgdmFsdWVzIGFyZSBfY29tYmluZWRfIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtdWxhOlxuICAgICAqXG4gICAgICogYE1hdGgubWF4KGJvZHlBLnJlc3RpdHV0aW9uLCBib2R5Qi5yZXN0aXR1dGlvbilgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVzdGl0dXRpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZnJpY3Rpb24gb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGF0IHRoZSBib2R5IG1heSBzbGlkZSBpbmRlZmluaXRlbHkuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGJvZHkgbWF5IGNvbWUgdG8gYSBzdG9wIGFsbW9zdCBpbnN0YW50bHkgYWZ0ZXIgYSBmb3JjZSBpcyBhcHBsaWVkLlxuICAgICAqXG4gICAgICogVGhlIGVmZmVjdHMgb2YgdGhlIHZhbHVlIG1heSBiZSBub24tbGluZWFyLiBcbiAgICAgKiBIaWdoIHZhbHVlcyBtYXkgYmUgdW5zdGFibGUgZGVwZW5kaW5nIG9uIHRoZSBib2R5LlxuICAgICAqIFRoZSBlbmdpbmUgdXNlcyBhIENvdWxvbWIgZnJpY3Rpb24gbW9kZWwgaW5jbHVkaW5nIHN0YXRpYyBhbmQga2luZXRpYyBmcmljdGlvbi5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgZnJpY3Rpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqIGBNYXRoLm1pbihib2R5QS5mcmljdGlvbiwgYm9keUIuZnJpY3Rpb24pYFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4xXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc3RhdGljIGZyaWN0aW9uIG9mIHRoZSBib2R5IChpbiB0aGUgQ291bG9tYiBmcmljdGlvbiBtb2RlbCkuIFxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBib2R5IHdpbGwgbmV2ZXIgJ3N0aWNrJyB3aGVuIGl0IGlzIG5lYXJseSBzdGF0aW9uYXJ5IGFuZCBvbmx5IGR5bmFtaWMgYGZyaWN0aW9uYCBpcyB1c2VkLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlIChlLmcuIGAxMGApLCB0aGUgbW9yZSBmb3JjZSBpdCB3aWxsIHRha2UgdG8gaW5pdGlhbGx5IGdldCB0aGUgYm9keSBtb3Zpbmcgd2hlbiBuZWFybHkgc3RhdGlvbmFyeS5cbiAgICAgKiBUaGlzIHZhbHVlIGlzIG11bHRpcGxpZWQgd2l0aCB0aGUgYGZyaWN0aW9uYCBwcm9wZXJ0eSB0byBtYWtlIGl0IGVhc2llciB0byBjaGFuZ2UgYGZyaWN0aW9uYCBhbmQgbWFpbnRhaW4gYW4gYXBwcm9wcmlhdGUgYW1vdW50IG9mIHN0YXRpYyBmcmljdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmcmljdGlvblN0YXRpY1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuNVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGFpciBmcmljdGlvbiBvZiB0aGUgYm9keSAoYWlyIHJlc2lzdGFuY2UpLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgYm9keSB3aWxsIG5ldmVyIHNsb3cgYXMgaXQgbW92ZXMgdGhyb3VnaCBzcGFjZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGZhc3RlciBhIGJvZHkgc2xvd3Mgd2hlbiBtb3ZpbmcgdGhyb3VnaCBzcGFjZS5cbiAgICAgKiBUaGUgZWZmZWN0cyBvZiB0aGUgdmFsdWUgYXJlIG5vbi1saW5lYXIuIFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uQWlyXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBmaWx0ZXJpbmcgcHJvcGVydGllcyBvZiB0aGlzIGJvZHkuXG4gICAgICpcbiAgICAgKiBDb2xsaXNpb25zIGJldHdlZW4gdHdvIGJvZGllcyB3aWxsIG9iZXkgdGhlIGZvbGxvd2luZyBydWxlczpcbiAgICAgKiAtIElmIHRoZSB0d28gYm9kaWVzIGhhdmUgdGhlIHNhbWUgbm9uLXplcm8gdmFsdWUgb2YgYGNvbGxpc2lvbkZpbHRlci5ncm91cGAsXG4gICAgICogICB0aGV5IHdpbGwgYWx3YXlzIGNvbGxpZGUgaWYgdGhlIHZhbHVlIGlzIHBvc2l0aXZlLCBhbmQgdGhleSB3aWxsIG5ldmVyIGNvbGxpZGVcbiAgICAgKiAgIGlmIHRoZSB2YWx1ZSBpcyBuZWdhdGl2ZS5cbiAgICAgKiAtIElmIHRoZSB0d28gYm9kaWVzIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBvZiBgY29sbGlzaW9uRmlsdGVyLmdyb3VwYCBvciBpZiBvbmVcbiAgICAgKiAgIChvciBib3RoKSBvZiB0aGUgYm9kaWVzIGhhcyBhIHZhbHVlIG9mIDAsIHRoZW4gdGhlIGNhdGVnb3J5L21hc2sgcnVsZXMgYXBwbHkgYXMgZm9sbG93czpcbiAgICAgKlxuICAgICAqIEVhY2ggYm9keSBiZWxvbmdzIHRvIGEgY29sbGlzaW9uIGNhdGVnb3J5LCBnaXZlbiBieSBgY29sbGlzaW9uRmlsdGVyLmNhdGVnb3J5YC4gVGhpc1xuICAgICAqIHZhbHVlIGlzIHVzZWQgYXMgYSBiaXQgZmllbGQgYW5kIHRoZSBjYXRlZ29yeSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBiaXQgc2V0LCBtZWFuaW5nIHRoYXRcbiAgICAgKiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBhIHBvd2VyIG9mIHR3byBpbiB0aGUgcmFuZ2UgWzEsIDJeMzFdLiBUaHVzLCB0aGVyZSBhcmUgMzJcbiAgICAgKiBkaWZmZXJlbnQgY29sbGlzaW9uIGNhdGVnb3JpZXMgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogRWFjaCBib2R5IGFsc28gZGVmaW5lcyBhIGNvbGxpc2lvbiBiaXRtYXNrLCBnaXZlbiBieSBgY29sbGlzaW9uRmlsdGVyLm1hc2tgIHdoaWNoIHNwZWNpZmllc1xuICAgICAqIHRoZSBjYXRlZ29yaWVzIGl0IGNvbGxpZGVzIHdpdGggKHRoZSB2YWx1ZSBpcyB0aGUgYml0d2lzZSBBTkQgdmFsdWUgb2YgYWxsIHRoZXNlIGNhdGVnb3JpZXMpLlxuICAgICAqXG4gICAgICogVXNpbmcgdGhlIGNhdGVnb3J5L21hc2sgcnVsZXMsIHR3byBib2RpZXMgYEFgIGFuZCBgQmAgY29sbGlkZSBpZiBlYWNoIGluY2x1ZGVzIHRoZSBvdGhlcidzXG4gICAgICogY2F0ZWdvcnkgaW4gaXRzIG1hc2ssIGkuZS4gYChjYXRlZ29yeUEgJiBtYXNrQikgIT09IDBgIGFuZCBgKGNhdGVnb3J5QiAmIG1hc2tBKSAhPT0gMGBcbiAgICAgKiBhcmUgYm90aCB0cnVlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gSW50ZWdlciBgTnVtYmVyYCwgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBncm91cCB0aGlzIGJvZHkgYmVsb25ncyB0by5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJpdCBmaWVsZCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGNhdGVnb3J5IHRoaXMgYm9keSBiZWxvbmdzIHRvLlxuICAgICAqIFRoZSBjYXRlZ29yeSB2YWx1ZSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBiaXQgc2V0LCBmb3IgZXhhbXBsZSBgMHgwMDAxYC5cbiAgICAgKiBUaGlzIG1lYW5zIHRoZXJlIGFyZSB1cCB0byAzMiB1bmlxdWUgY29sbGlzaW9uIGNhdGVnb3JpZXMgYXZhaWxhYmxlLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5jYXRlZ29yeVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYml0IG1hc2sgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBjYXRlZ29yaWVzIHRoaXMgYm9keSBtYXkgY29sbGlkZSB3aXRoLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5tYXNrXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgLTFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgYSB0aGluIGJvdW5kYXJ5IGFyb3VuZCB0aGUgYm9keSB3aGVyZSBpdCBpcyBhbGxvd2VkIHRvIHNsaWdodGx5IHNpbmsgaW50byBvdGhlciBib2RpZXMuXG4gICAgICogXG4gICAgICogVGhpcyBpcyByZXF1aXJlZCBmb3IgcHJvcGVyIGNvbGxpc2lvbiByZXNwb25zZSwgaW5jbHVkaW5nIGZyaWN0aW9uIGFuZCByZXN0aXR1dGlvbiBlZmZlY3RzLlxuICAgICAqIFxuICAgICAqIFRoZSBkZWZhdWx0IHNob3VsZCBnZW5lcmFsbHkgc3VmZmljZSBpbiBtb3N0IGNhc2VzLiBZb3UgbWF5IG5lZWQgdG8gZGVjcmVhc2UgdGhpcyB2YWx1ZSBmb3IgdmVyeSBzbWFsbCBib2RpZXMgdGhhdCBhcmUgbmVhcmluZyB0aGUgZGVmYXVsdCB2YWx1ZSBpbiBzY2FsZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzbG9wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wNVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyBwZXItYm9keSB0aW1lIHNjYWxpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVwZGF0ZWQgZHVyaW5nIGVuZ2luZSB1cGRhdGUuXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlY29yZHMgdGhlIGxhc3QgZGVsdGEgdGltZSB2YWx1ZSB1c2VkIHRvIHVwZGF0ZSB0aGlzIGJvZHkuXG4gICAgICogVXNlZCB0byBjYWxjdWxhdGUgc3BlZWQgYW5kIHZlbG9jaXR5LlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGRlbHRhVGltZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDEwMDAgLyA2MFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgYm9keSBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgb3BhY2l0eSB0byB1c2Ugd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLm9wYWNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgc3ByaXRlIHByb3BlcnRpZXMgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byB1c2UgYXMgdGhlIHNwcml0ZSB0ZXh0dXJlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS50ZXh0dXJlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgIFxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzY2FsaW5nIGluIHRoZSB4LWF4aXMgZm9yIHRoZSBzcHJpdGUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnhTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzY2FsaW5nIGluIHRoZSB5LWF4aXMgZm9yIHRoZSBzcHJpdGUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnlTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgb2Zmc2V0IGluIHRoZSB4LWF4aXMgZm9yIHRoZSBzcHJpdGUgKG5vcm1hbGlzZWQgYnkgdGV4dHVyZSB3aWR0aCkuXG4gICAgICAqXG4gICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnhPZmZzZXRcbiAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICovXG5cbiAgICAvKipcbiAgICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG9mZnNldCBpbiB0aGUgeS1heGlzIGZvciB0aGUgc3ByaXRlIChub3JtYWxpc2VkIGJ5IHRleHR1cmUgaGVpZ2h0KS5cbiAgICAgICpcbiAgICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueU9mZnNldFxuICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICogQGRlZmF1bHQgMFxuICAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsaW5lIHdpZHRoIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSBvdXRsaW5lIChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgZmlsbCBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmZpbGxTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHN0cm9rZSBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgb3V0bGluZSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBDYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB2ZXJ0aWNlcyBhcmUgc2V0LlxuICAgICAqIFxuICAgICAqIEFuIGFycmF5IG9mIHVuaXF1ZSBheGlzIHZlY3RvcnMgKGVkZ2Ugbm9ybWFscykgdXNlZCBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAgICAgKiBUaGVzZSBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHdoZW4gdmVydGljZXMgYXJlIHNldC5cbiAgICAgKiBUaGV5IGFyZSBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgdGhlIHNpbXVsYXRpb24uXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgYXhlc1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICovXG4gICAgIFxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBDYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB2ZXJ0aWNlcyBhcmUgc2V0LlxuICAgICAqIFxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBtZWFzdXJlcyB0aGUgYXJlYSBvZiB0aGUgYm9keSdzIGNvbnZleCBodWxsLlxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhcmVhXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb3VuZHNgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIEFBQkIgcmVnaW9uIGZvciB0aGUgYm9keS5cbiAgICAgKiBJdCBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgd2hlbiB2ZXJ0aWNlcyBhcmUgc2V0IGFuZCBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgc2ltdWxhdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5FdmVudHNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIHRvIGZpcmUgYW5kIGxpc3RlbiB0byBldmVudHMgb24gb3RoZXIgb2JqZWN0cy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEV2ZW50c1xuKi9cblxudmFyIEV2ZW50cyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50cztcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgZ2l2ZW4gb2JqZWN0J3MgYGV2ZW50TmFtZWAuXG4gICAgICogQG1ldGhvZCBvblxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgRXZlbnRzLm9uID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyksXG4gICAgICAgICAgICBuYW1lO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHMgPSBvYmplY3QuZXZlbnRzIHx8IHt9O1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lXSA9IG9iamVjdC5ldmVudHNbbmFtZV0gfHwgW107XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBldmVudCBjYWxsYmFjay4gSWYgbm8gY2FsbGJhY2ssIGNsZWFycyBhbGwgY2FsbGJhY2tzIGluIGBldmVudE5hbWVzYC4gSWYgbm8gYGV2ZW50TmFtZXNgLCBjbGVhcnMgYWxsIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIG9mZlxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgRXZlbnRzLm9mZiA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFldmVudE5hbWVzKSB7XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzID0ge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgRXZlbnRzLm9mZihvYmplY3QsIGNhbGxiYWNrKVxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXZlbnROYW1lcztcbiAgICAgICAgICAgIGV2ZW50TmFtZXMgPSBDb21tb24ua2V5cyhvYmplY3QuZXZlbnRzKS5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IG9iamVjdC5ldmVudHNbbmFtZXNbaV1dLFxuICAgICAgICAgICAgICAgIG5ld0NhbGxiYWNrcyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tqXSAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MucHVzaChjYWxsYmFja3Nbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lc1tpXV0gPSBuZXdDYWxsYmFja3M7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYWxsIHRoZSBjYWxsYmFja3Mgc3Vic2NyaWJlZCB0byB0aGUgZ2l2ZW4gb2JqZWN0J3MgYGV2ZW50TmFtZWAsIGluIHRoZSBvcmRlciB0aGV5IHN1YnNjcmliZWQsIGlmIGFueS5cbiAgICAgKiBAbWV0aG9kIHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge30gZXZlbnRcbiAgICAgKi9cbiAgICBFdmVudHMudHJpZ2dlciA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgZXZlbnQpIHtcbiAgICAgICAgdmFyIG5hbWVzLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGV2ZW50Q2xvbmU7XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IG9iamVjdC5ldmVudHM7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnRzICYmIENvbW1vbi5rZXlzKGV2ZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFldmVudClcbiAgICAgICAgICAgICAgICBldmVudCA9IHt9O1xuXG4gICAgICAgICAgICBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MgPSBldmVudHNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUgPSBDb21tb24uY2xvbmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5zb3VyY2UgPSBvYmplY3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tqXS5hcHBseShvYmplY3QsIFtldmVudENsb25lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogQSBjb21wb3NpdGUgaXMgYSBjb2xsZWN0aW9uIG9mIGBNYXR0ZXIuQm9keWAsIGBNYXR0ZXIuQ29uc3RyYWludGAgYW5kIG90aGVyIGBNYXR0ZXIuQ29tcG9zaXRlYCBvYmplY3RzLlxuKlxuKiBUaGV5IGFyZSBhIGNvbnRhaW5lciB0aGF0IGNhbiByZXByZXNlbnQgY29tcGxleCBvYmplY3RzIG1hZGUgb2YgbXVsdGlwbGUgcGFydHMsIGV2ZW4gaWYgdGhleSBhcmUgbm90IHBoeXNpY2FsbHkgY29ubmVjdGVkLlxuKiBBIGNvbXBvc2l0ZSBjb3VsZCBjb250YWluIGFueXRoaW5nIGZyb20gYSBzaW5nbGUgYm9keSBhbGwgdGhlIHdheSB1cCB0byBhIHdob2xlIHdvcmxkLlxuKiBcbiogV2hlbiBtYWtpbmcgYW55IGNoYW5nZXMgdG8gY29tcG9zaXRlcywgdXNlIHRoZSBpbmNsdWRlZCBmdW5jdGlvbnMgcmF0aGVyIHRoYW4gY2hhbmdpbmcgdGhlaXIgcHJvcGVydGllcyBkaXJlY3RseS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbXBvc2l0ZVxuKi9cblxudmFyIENvbXBvc2l0ZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZTtcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbXBvc2l0ZS4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJpdGVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHsgXG4gICAgICAgICAgICBpZDogQ29tbW9uLm5leHRJZCgpLFxuICAgICAgICAgICAgdHlwZTogJ2NvbXBvc2l0ZScsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBpc01vZGlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJvZGllczogW10sIFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLCBcbiAgICAgICAgICAgIGNvbXBvc2l0ZXM6IFtdLFxuICAgICAgICAgICAgbGFiZWw6ICdDb21wb3NpdGUnLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgICAgICAgYWxsQm9kaWVzOiBudWxsLFxuICAgICAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzOiBudWxsLFxuICAgICAgICAgICAgICAgIGFsbENvbXBvc2l0ZXM6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXBvc2l0ZSdzIGBpc01vZGlmaWVkYCBmbGFnLiBcbiAgICAgKiBJZiBgdXBkYXRlUGFyZW50c2AgaXMgdHJ1ZSwgYWxsIHBhcmVudHMgd2lsbCBiZSBzZXQgKGRlZmF1bHQ6IGZhbHNlKS5cbiAgICAgKiBJZiBgdXBkYXRlQ2hpbGRyZW5gIGlzIHRydWUsIGFsbCBjaGlsZHJlbiB3aWxsIGJlIHNldCAoZGVmYXVsdDogZmFsc2UpLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzZXRNb2RpZmllZFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVQYXJlbnRzPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZUNoaWxkcmVuPWZhbHNlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgY29tcG9zaXRlLmlzTW9kaWZpZWQgPSBpc01vZGlmaWVkO1xuXG4gICAgICAgIGlmIChpc01vZGlmaWVkICYmIGNvbXBvc2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcyA9IG51bGw7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHMgPSBudWxsO1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbXBvc2l0ZXMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZVBhcmVudHMgJiYgY29tcG9zaXRlLnBhcmVudCkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZS5wYXJlbnQsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGVDaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZENvbXBvc2l0ZSA9IGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjaGlsZENvbXBvc2l0ZSwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgc2luZ2xlIG9yIG11bHRpLWFkZCBmdW5jdGlvbi4gQWRkcyBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVBZGRgIGFuZCBgYWZ0ZXJBZGRgIGV2ZW50cyBvbiB0aGUgYGNvbXBvc2l0ZWAuXG4gICAgICogQG1ldGhvZCBhZGRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9iamVjdCBBIHNpbmdsZSBvciBhbiBhcnJheSBvZiBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGNvbXBvc2l0ZShzKVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgb2JqZWN0KSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gW10uY29uY2F0KG9iamVjdCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYmVmb3JlQWRkJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgIC8vIHNraXAgYWRkaW5nIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICAgICAgaWYgKG9iai5wYXJlbnQgIT09IG9iaikge1xuICAgICAgICAgICAgICAgICAgICBDb21tb24ud2FybignQ29tcG9zaXRlLmFkZDogc2tpcHBlZCBhZGRpbmcgYSBjb21wb3VuZCBib2R5IHBhcnQgKHlvdSBtdXN0IGFkZCBpdHMgcGFyZW50IGluc3RlYWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZShjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZUNvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLmNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdhZnRlckFkZCcsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyByZW1vdmUgZnVuY3Rpb24uIFJlbW92ZXMgb25lIG9yIG1hbnkgYm9keShzKSwgY29uc3RyYWludChzKSBvciBhIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlUmVtb3ZlYCBhbmQgYGFmdGVyUmVtb3ZlYCBldmVudHMgb24gdGhlIGBjb21wb3NpdGVgLlxuICAgICAqIEBtZXRob2QgcmVtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlLCBvYmplY3QsIGRlZXApIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdiZWZvcmVSZW1vdmUnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlKGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlQ29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmouY29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2FmdGVyUmVtb3ZlJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9zaXRlIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZENvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIG9iamVjdHMgZnJvbSBjb21wb3NpdGVCIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIpIHtcbiAgICAgICAgY29tcG9zaXRlQS5jb21wb3NpdGVzLnB1c2goY29tcG9zaXRlQik7XG4gICAgICAgIGNvbXBvc2l0ZUIucGFyZW50ID0gY29tcG9zaXRlQTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZUEsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVCXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIsIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlQS5jb21wb3NpdGVzLCBjb21wb3NpdGVCKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0KGNvbXBvc2l0ZUEsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZUEuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZShjb21wb3NpdGVBLmNvbXBvc2l0ZXNbaV0sIGNvbXBvc2l0ZUIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVBdFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29tcG9zaXRlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlQXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJvZHkgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQm9keVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5KSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMucHVzaChib2R5KTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUsIGFuZCBvcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkgPSBmdW5jdGlvbihjb21wb3NpdGUsIGJvZHksIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlLmJvZGllcywgYm9keSk7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGJvZHksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29uc3RyYWludCB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnN0cmFpbnQgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5jb25zdHJhaW50cywgY29uc3RyYWludCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGNvbnN0cmFpbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGJvZGllcywgY29uc3RyYWludHMgYW5kIGNvbXBvc2l0ZXMgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXJpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBrZWVwU3RhdGljXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuY2xlYXIgPSBmdW5jdGlvbihjb21wb3NpdGUsIGtlZXBTdGF0aWMsIGRlZXApIHtcbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5jbGVhcihjb21wb3NpdGUuY29tcG9zaXRlc1tpXSwga2VlcFN0YXRpYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChrZWVwU3RhdGljKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcy5maWx0ZXIoZnVuY3Rpb24oYm9keSkgeyByZXR1cm4gYm9keS5pc1N0YXRpYzsgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuYm9kaWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMubGVuZ3RoID0gMDtcbiAgICAgICAgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoID0gMDtcblxuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgYm9kaWVzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxCb2RpZXNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Ym9keVtdfSBBbGwgdGhlIGJvZGllc1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxCb2RpZXMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSAmJiBjb21wb3NpdGUuY2FjaGUuYWxsQm9kaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib2RpZXMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmJvZGllcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGJvZGllcyA9IGJvZGllcy5jb25jYXQoQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXMgPSBib2RpZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9kaWVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb25zdHJhaW50cyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbnN0cmFpbnRzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxDb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb25zdHJhaW50W119IEFsbCB0aGUgY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSAmJiBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmNvbnN0cmFpbnRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgY29uc3RyYWludHMgPSBjb25zdHJhaW50cy5jb25jYXQoQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RyYWludHM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNvbXBvc2l0ZXMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBjb21wb3NpdGVzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxDb21wb3NpdGVzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZVtdfSBBbGwgdGhlIGNvbXBvc2l0ZXNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlICYmIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlLmNhY2hlLmFsbENvbXBvc2l0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcG9zaXRlcyA9IFtdLmNvbmNhdChjb21wb3NpdGUuY29tcG9zaXRlcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGNvbXBvc2l0ZXMgPSBjb21wb3NpdGVzLmNvbmNhdChDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzID0gY29tcG9zaXRlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyB0aGUgY29tcG9zaXRlIHJlY3Vyc2l2ZWx5IGZvciBhbiBvYmplY3QgbWF0Y2hpbmcgdGhlIHR5cGUgYW5kIGlkIHN1cHBsaWVkLCBudWxsIGlmIG5vdCBmb3VuZC5cbiAgICAgKiBAbWV0aG9kIGdldFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHJlcXVlc3RlZCBvYmplY3QsIGlmIGZvdW5kXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmdldCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgaWQsIHR5cGUpIHtcbiAgICAgICAgdmFyIG9iamVjdHMsXG4gICAgICAgICAgICBvYmplY3Q7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb21wb3NpdGUnOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZSkuY29uY2F0KGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb2JqZWN0cylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIG9iamVjdCA9IG9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkgeyBcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYmplY3QubGVuZ3RoID09PSAwID8gbnVsbCA6IG9iamVjdFswXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIGdpdmVuIG9iamVjdChzKSBmcm9tIGNvbXBvc2l0ZUEgdG8gY29tcG9zaXRlQiAoZXF1YWwgdG8gYSByZW1vdmUgZm9sbG93ZWQgYnkgYW4gYWRkKS5cbiAgICAgKiBAbWV0aG9kIG1vdmVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZUF9IGNvbXBvc2l0ZUFcbiAgICAgKiBAcGFyYW0ge29iamVjdFtdfSBvYmplY3RzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGVCfSBjb21wb3NpdGVCXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBSZXR1cm5zIGNvbXBvc2l0ZUFcbiAgICAgKi9cbiAgICBDb21wb3NpdGUubW92ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIG9iamVjdHMsIGNvbXBvc2l0ZUIpIHtcbiAgICAgICAgQ29tcG9zaXRlLnJlbW92ZShjb21wb3NpdGVBLCBvYmplY3RzKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZChjb21wb3NpdGVCLCBvYmplY3RzKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgbmV3IGlkcyBmb3IgYWxsIG9iamVjdHMgaW4gdGhlIGNvbXBvc2l0ZSwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCByZWJhc2VcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBSZXR1cm5zIGNvbXBvc2l0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZWJhc2UgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSlcbiAgICAgICAgICAgIC5jb25jYXQoQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZSkpXG4gICAgICAgICAgICAuY29uY2F0KENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZSkpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2JqZWN0c1tpXS5pZCA9IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gdGhlaXIgY3VycmVudCBwb3NpdGlvbnMsIFxuICAgICAqIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUudHJhbnNsYXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCB0cmFuc2xhdGlvbiwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2RpZXNbaV0sIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgZ2l2ZW4gcG9pbnQsIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSBhbmd1bGFyIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yb3RhdGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHJvdGF0aW9uLCBwb2ludCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbiksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIChkeCAqIGNvcyAtIGR5ICogc2luKSxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5yb3RhdGUoYm9keSwgcm90YXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2NhbGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlLCBpbmNsdWRpbmcgdXBkYXRpbmcgcGh5c2ljYWwgcHJvcGVydGllcyAobWFzcywgYXJlYSwgYXhlcywgaW5lcnRpYSksIGZyb20gYSB3b3JsZC1zcGFjZSBwb2ludC5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHBhcmFtIHtib29sfSBbcmVjdXJzaXZlPXRydWVdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnNjYWxlID0gZnVuY3Rpb24oY29tcG9zaXRlLCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQsIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyBkeCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgZHkgKiBzY2FsZVlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBCb2R5LnNjYWxlKGJvZHksIHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuaW9uIG9mIHRoZSBib3VuZHMgb2YgYWxsIG9mIHRoZSBjb21wb3NpdGUncyBib2RpZXMuXG4gICAgICogQG1ldGhvZCBib3VuZHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlIFRoZSBjb21wb3NpdGUuXG4gICAgICogQHJldHVybnMge2JvdW5kc30gVGhlIGNvbXBvc2l0ZSBib3VuZHMuXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmJvdW5kcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpLFxuICAgICAgICAgICAgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKGJvZHkuYm91bmRzLm1pbiwgYm9keS5ib3VuZHMubWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb3VuZHMuY3JlYXRlKHZlcnRpY2VzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5hZGRgIGlzIG1hZGUsIGJlZm9yZSBvYmplY3RzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdG8gYmUgYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLmFkZGAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdGhhdCBoYXZlIGJlZW4gYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYmVmb3JlIG9iamVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRvIGJlIHJlbW92ZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBDb21wb3NpdGUuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbXBvc2l0ZVwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgY29tcG9zaXRlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQ29tcG9zaXRlXCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb21wb3NpdGUgaGFzIGJlZW4gbW9kaWZpZWQgZHVyaW5nIHRoZSBjdXJyZW50IHN0ZXAuXG4gICAgICogVGhpcyBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgd2hlbiBib2RpZXMsIGNvbnN0cmFpbnRzIG9yIGNvbXBvc2l0ZXMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNNb2RpZmllZFxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBDb21wb3NpdGVgIHRoYXQgaXMgdGhlIHBhcmVudCBvZiB0aGlzIGNvbXBvc2l0ZS4gSXQgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkIGJ5IHRoZSBgTWF0dGVyLkNvbXBvc2l0ZWAgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQm9keWAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBib2RpZXMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQm9kaWVzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9kaWVzXG4gICAgICogQHR5cGUgYm9keVtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBDb25zdHJhaW50YCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGNvbnN0cmFpbnRzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludHNcbiAgICAgKiBAdHlwZSBjb25zdHJhaW50W11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYENvbXBvc2l0ZWAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBjb21wb3NpdGVzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb21wb3NpdGVzXG4gICAgICogQHR5cGUgY29tcG9zaXRlW11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdXNlZCBmb3Igc3RvcmluZyBjYWNoZWQgcmVzdWx0cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBvbmx5IGFuZCBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwcm9wZXJ0eSBjYWNoZVxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgdG8gbWFuYWdlIHRoZSBzbGVlcGluZyBzdGF0ZSBvZiBib2RpZXMuXG4qXG4qIEBjbGFzcyBTbGVlcGluZ1xuKi9cblxudmFyIFNsZWVwaW5nID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU2xlZXBpbmc7XG5cbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFNsZWVwaW5nLl9tb3Rpb25XYWtlVGhyZXNob2xkID0gMC4xODtcbiAgICBTbGVlcGluZy5fbW90aW9uU2xlZXBUaHJlc2hvbGQgPSAwLjA4O1xuICAgIFNsZWVwaW5nLl9taW5CaWFzID0gMC45O1xuXG4gICAgLyoqXG4gICAgICogUHV0cyBib2RpZXMgdG8gc2xlZXAgb3Igd2FrZXMgdGhlbSB1cCBkZXBlbmRpbmcgb24gdGhlaXIgbW90aW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVxuICAgICAqL1xuICAgIFNsZWVwaW5nLnVwZGF0ZSA9IGZ1bmN0aW9uKGJvZGllcywgZGVsdGEpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZSA9IGRlbHRhIC8gQ29tbW9uLl9iYXNlRGVsdGEsXG4gICAgICAgICAgICBtb3Rpb25TbGVlcFRocmVzaG9sZCA9IFNsZWVwaW5nLl9tb3Rpb25TbGVlcFRocmVzaG9sZDtcbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSBib2RpZXMgc2xlZXBpbmcgc3RhdHVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBzcGVlZCA9IEJvZHkuZ2V0U3BlZWQoYm9keSksXG4gICAgICAgICAgICAgICAgYW5ndWxhclNwZWVkID0gQm9keS5nZXRBbmd1bGFyU3BlZWQoYm9keSksXG4gICAgICAgICAgICAgICAgbW90aW9uID0gc3BlZWQgKiBzcGVlZCArIGFuZ3VsYXJTcGVlZCAqIGFuZ3VsYXJTcGVlZDtcblxuICAgICAgICAgICAgLy8gd2FrZSB1cCBib2RpZXMgaWYgdGhleSBoYXZlIGEgZm9yY2UgYXBwbGllZFxuICAgICAgICAgICAgaWYgKGJvZHkuZm9yY2UueCAhPT0gMCB8fCBib2R5LmZvcmNlLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWluTW90aW9uID0gTWF0aC5taW4oYm9keS5tb3Rpb24sIG1vdGlvbiksXG4gICAgICAgICAgICAgICAgbWF4TW90aW9uID0gTWF0aC5tYXgoYm9keS5tb3Rpb24sIG1vdGlvbik7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gYmlhc2VkIGF2ZXJhZ2UgbW90aW9uIGVzdGltYXRpb24gYmV0d2VlbiBmcmFtZXNcbiAgICAgICAgICAgIGJvZHkubW90aW9uID0gU2xlZXBpbmcuX21pbkJpYXMgKiBtaW5Nb3Rpb24gKyAoMSAtIFNsZWVwaW5nLl9taW5CaWFzKSAqIG1heE1vdGlvbjtcblxuICAgICAgICAgICAgaWYgKGJvZHkuc2xlZXBUaHJlc2hvbGQgPiAwICYmIGJvZHkubW90aW9uIDwgbW90aW9uU2xlZXBUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2R5LnNsZWVwQ291bnRlciA+PSBib2R5LnNsZWVwVGhyZXNob2xkIC8gdGltZVNjYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvZHkuc2xlZXBDb3VudGVyID4gMCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBzZXQgb2YgY29sbGlkaW5nIHBhaXJzLCB3YWtlcyB0aGUgc2xlZXBpbmcgYm9kaWVzIGludm9sdmVkLlxuICAgICAqIEBtZXRob2QgYWZ0ZXJDb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICovXG4gICAgU2xlZXBpbmcuYWZ0ZXJDb2xsaXNpb25zID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgdmFyIG1vdGlvblNsZWVwVGhyZXNob2xkID0gU2xlZXBpbmcuX21vdGlvblNsZWVwVGhyZXNob2xkO1xuXG4gICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGludm9sdmVkIGluIGNvbGxpc2lvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZG9uJ3Qgd2FrZSBpbmFjdGl2ZSBwYWlyc1xuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUEucGFyZW50LCBcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gZG9uJ3Qgd2FrZSBpZiBhdCBsZWFzdCBvbmUgYm9keSBpcyBzdGF0aWNcbiAgICAgICAgICAgIGlmICgoYm9keUEuaXNTbGVlcGluZyAmJiBib2R5Qi5pc1NsZWVwaW5nKSB8fCBib2R5QS5pc1N0YXRpYyB8fCBib2R5Qi5pc1N0YXRpYylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTbGVlcGluZyB8fCBib2R5Qi5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsZWVwaW5nQm9keSA9IChib2R5QS5pc1NsZWVwaW5nICYmICFib2R5QS5pc1N0YXRpYykgPyBib2R5QSA6IGJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdCb2R5ID0gc2xlZXBpbmdCb2R5ID09PSBib2R5QSA/IGJvZHlCIDogYm9keUE7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNsZWVwaW5nQm9keS5pc1N0YXRpYyAmJiBtb3ZpbmdCb2R5Lm1vdGlvbiA+IG1vdGlvblNsZWVwVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChzbGVlcGluZ0JvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvKipcbiAgICAgKiBTZXQgYSBib2R5IGFzIHNsZWVwaW5nIG9yIGF3YWtlLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NsZWVwaW5nXG4gICAgICovXG4gICAgU2xlZXBpbmcuc2V0ID0gZnVuY3Rpb24oYm9keSwgaXNTbGVlcGluZykge1xuICAgICAgICB2YXIgd2FzU2xlZXBpbmcgPSBib2R5LmlzU2xlZXBpbmc7XG5cbiAgICAgICAgaWYgKGlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgIGJvZHkuaXNTbGVlcGluZyA9IHRydWU7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IGJvZHkuc2xlZXBUaHJlc2hvbGQ7XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnggPSAwO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueSA9IDA7XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuXG4gICAgICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgICAgICBib2R5LnNwZWVkID0gMDtcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgICAgIGJvZHkubW90aW9uID0gMDtcblxuICAgICAgICAgICAgaWYgKCF3YXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGJvZHksICdzbGVlcFN0YXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmlzU2xlZXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyID0gMDtcblxuICAgICAgICAgICAgaWYgKHdhc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoYm9keSwgJ3NsZWVwRW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29sbGlzaW9uYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBhIGdpdmVuIHBhaXIgb2YgYm9kaWVzLlxuKlxuKiBGb3IgZWZmaWNpZW50IGRldGVjdGlvbiBiZXR3ZWVuIGEgbGlzdCBvZiBib2RpZXMsIHNlZSBgTWF0dGVyLkRldGVjdG9yYCBhbmQgYE1hdHRlci5RdWVyeWAuXG4qXG4qIFNlZSBgTWF0dGVyLkVuZ2luZWAgZm9yIGNvbGxpc2lvbiBldmVudHMuXG4qXG4qIEBjbGFzcyBDb2xsaXNpb25cbiovXG5cbnZhciBDb2xsaXNpb24gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsaXNpb247XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgX3N1cHBvcnRzID0gW107XG5cbiAgICB2YXIgX292ZXJsYXBBQiA9IHtcbiAgICAgICAgb3ZlcmxhcDogMCxcbiAgICAgICAgYXhpczogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgX292ZXJsYXBCQSA9IHtcbiAgICAgICAgb3ZlcmxhcDogMCxcbiAgICAgICAgYXhpczogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGxpc2lvbiByZWNvcmQuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBIFRoZSBmaXJzdCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiByZWNvcmRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCIFRoZSBzZWNvbmQgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gcmVjb3JkXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9ufSBBIG5ldyBjb2xsaXNpb24gcmVjb3JkXG4gICAgICovXG4gICAgQ29sbGlzaW9uLmNyZWF0ZSA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHBhaXI6IG51bGwsXG4gICAgICAgICAgICBjb2xsaWRlZDogZmFsc2UsXG4gICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICBib2R5QjogYm9keUIsXG4gICAgICAgICAgICBwYXJlbnRBOiBib2R5QS5wYXJlbnQsXG4gICAgICAgICAgICBwYXJlbnRCOiBib2R5Qi5wYXJlbnQsXG4gICAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAgIG5vcm1hbDogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICB0YW5nZW50OiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHBlbmV0cmF0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHN1cHBvcnRzOiBbXVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgY29sbGlzaW9uIGJldHdlZW4gdHdvIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcGFyYW0ge3BhaXJzfSBbcGFpcnNdIE9wdGlvbmFsbHkgcmV1c2UgY29sbGlzaW9uIHJlY29yZHMgZnJvbSBleGlzdGluZyBwYWlycy5cbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb258bnVsbH0gQSBjb2xsaXNpb24gcmVjb3JkIGlmIGRldGVjdGVkLCBvdGhlcndpc2UgbnVsbFxuICAgICAqL1xuICAgIENvbGxpc2lvbi5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5QiwgcGFpcnMpIHtcbiAgICAgICAgQ29sbGlzaW9uLl9vdmVybGFwQXhlcyhfb3ZlcmxhcEFCLCBib2R5QS52ZXJ0aWNlcywgYm9keUIudmVydGljZXMsIGJvZHlBLmF4ZXMpO1xuXG4gICAgICAgIGlmIChfb3ZlcmxhcEFCLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBDb2xsaXNpb24uX292ZXJsYXBBeGVzKF9vdmVybGFwQkEsIGJvZHlCLnZlcnRpY2VzLCBib2R5QS52ZXJ0aWNlcywgYm9keUIuYXhlcyk7XG5cbiAgICAgICAgaWYgKF9vdmVybGFwQkEub3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldXNlIGNvbGxpc2lvbiByZWNvcmRzIGZvciBnYyBlZmZpY2llbmN5XG4gICAgICAgIHZhciBwYWlyID0gcGFpcnMgJiYgcGFpcnMudGFibGVbUGFpci5pZChib2R5QSwgYm9keUIpXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbjtcblxuICAgICAgICBpZiAoIXBhaXIpIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IENvbGxpc2lvbi5jcmVhdGUoYm9keUEsIGJvZHlCKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5jb2xsaWRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb2xsaXNpb24uYm9keUEgPSBib2R5QS5pZCA8IGJvZHlCLmlkID8gYm9keUEgOiBib2R5QjtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ib2R5QiA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QiA6IGJvZHlBO1xuICAgICAgICAgICAgY29sbGlzaW9uLnBhcmVudEEgPSBjb2xsaXNpb24uYm9keUEucGFyZW50O1xuICAgICAgICAgICAgY29sbGlzaW9uLnBhcmVudEIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgIH1cblxuICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QTtcbiAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUI7XG5cbiAgICAgICAgdmFyIG1pbk92ZXJsYXA7XG5cbiAgICAgICAgaWYgKF9vdmVybGFwQUIub3ZlcmxhcCA8IF9vdmVybGFwQkEub3ZlcmxhcCkge1xuICAgICAgICAgICAgbWluT3ZlcmxhcCA9IF9vdmVybGFwQUI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5PdmVybGFwID0gX292ZXJsYXBCQTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsLFxuICAgICAgICAgICAgc3VwcG9ydHMgPSBjb2xsaXNpb24uc3VwcG9ydHMsXG4gICAgICAgICAgICBtaW5BeGlzID0gbWluT3ZlcmxhcC5heGlzLFxuICAgICAgICAgICAgbWluQXhpc1ggPSBtaW5BeGlzLngsXG4gICAgICAgICAgICBtaW5BeGlzWSA9IG1pbkF4aXMueTtcblxuICAgICAgICAvLyBlbnN1cmUgbm9ybWFsIGlzIGZhY2luZyBhd2F5IGZyb20gYm9keUFcbiAgICAgICAgaWYgKG1pbkF4aXNYICogKGJvZHlCLnBvc2l0aW9uLnggLSBib2R5QS5wb3NpdGlvbi54KSArIG1pbkF4aXNZICogKGJvZHlCLnBvc2l0aW9uLnkgLSBib2R5QS5wb3NpdGlvbi55KSA8IDApIHtcbiAgICAgICAgICAgIG5vcm1hbC54ID0gbWluQXhpc1g7XG4gICAgICAgICAgICBub3JtYWwueSA9IG1pbkF4aXNZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9ybWFsLnggPSAtbWluQXhpc1g7XG4gICAgICAgICAgICBub3JtYWwueSA9IC1taW5BeGlzWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29sbGlzaW9uLnRhbmdlbnQueCA9IC1ub3JtYWwueTtcbiAgICAgICAgY29sbGlzaW9uLnRhbmdlbnQueSA9IG5vcm1hbC54O1xuXG4gICAgICAgIGNvbGxpc2lvbi5kZXB0aCA9IG1pbk92ZXJsYXAub3ZlcmxhcDtcblxuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCA9IG5vcm1hbC54ICogY29sbGlzaW9uLmRlcHRoO1xuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSA9IG5vcm1hbC55ICogY29sbGlzaW9uLmRlcHRoO1xuXG4gICAgICAgIC8vIGZpbmQgc3VwcG9ydCBwb2ludHMsIHRoZXJlIGlzIGFsd2F5cyBlaXRoZXIgZXhhY3RseSBvbmUgb3IgdHdvXG4gICAgICAgIHZhciBzdXBwb3J0c0IgPSBDb2xsaXNpb24uX2ZpbmRTdXBwb3J0cyhib2R5QSwgYm9keUIsIG5vcm1hbCwgMSksXG4gICAgICAgICAgICBzdXBwb3J0Q291bnQgPSAwO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUIgdGhhdCBhcmUgaW5zaWRlIGJvZHlBXG4gICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5QS52ZXJ0aWNlcywgc3VwcG9ydHNCWzBdKSkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlBLnZlcnRpY2VzLCBzdXBwb3J0c0JbMV0pKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0JbMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHRoZSBzdXBwb3J0cyBmcm9tIGJvZHlBIHRoYXQgYXJlIGluc2lkZSBib2R5QlxuICAgICAgICBpZiAoc3VwcG9ydENvdW50IDwgMikge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnRzQSA9IENvbGxpc2lvbi5fZmluZFN1cHBvcnRzKGJvZHlCLCBib2R5QSwgbm9ybWFsLCAtMSk7XG5cbiAgICAgICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5Qi52ZXJ0aWNlcywgc3VwcG9ydHNBWzBdKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA8IDIgJiYgVmVydGljZXMuY29udGFpbnMoYm9keUIudmVydGljZXMsIHN1cHBvcnRzQVsxXSkpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0FbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIG9mIG92ZXJsYXBwaW5nIGJ1dCBubyB2ZXJ0ZXggY29udGFpbm1lbnRcbiAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN1cHBvcnRzIGFycmF5IHNpemVcbiAgICAgICAgc3VwcG9ydHMubGVuZ3RoID0gc3VwcG9ydENvdW50O1xuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIG92ZXJsYXAgYmV0d2VlbiB0d28gc2V0cyBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIF9vdmVybGFwQXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzQVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzQlxuICAgICAqIEBwYXJhbSB7YXhlc30gYXhlc1xuICAgICAqL1xuICAgIENvbGxpc2lvbi5fb3ZlcmxhcEF4ZXMgPSBmdW5jdGlvbihyZXN1bHQsIHZlcnRpY2VzQSwgdmVydGljZXNCLCBheGVzKSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlc0FMZW5ndGggPSB2ZXJ0aWNlc0EubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGljZXNCTGVuZ3RoID0gdmVydGljZXNCLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRpY2VzQVggPSB2ZXJ0aWNlc0FbMF0ueCxcbiAgICAgICAgICAgIHZlcnRpY2VzQVkgPSB2ZXJ0aWNlc0FbMF0ueSxcbiAgICAgICAgICAgIHZlcnRpY2VzQlggPSB2ZXJ0aWNlc0JbMF0ueCxcbiAgICAgICAgICAgIHZlcnRpY2VzQlkgPSB2ZXJ0aWNlc0JbMF0ueSxcbiAgICAgICAgICAgIGF4ZXNMZW5ndGggPSBheGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG92ZXJsYXBNaW4gPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgb3ZlcmxhcEF4aXNOdW1iZXIgPSAwLFxuICAgICAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgICAgIG92ZXJsYXBBQixcbiAgICAgICAgICAgIG92ZXJsYXBCQSxcbiAgICAgICAgICAgIGRvdCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBheGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXSxcbiAgICAgICAgICAgICAgICBheGlzWCA9IGF4aXMueCxcbiAgICAgICAgICAgICAgICBheGlzWSA9IGF4aXMueSxcbiAgICAgICAgICAgICAgICBtaW5BID0gdmVydGljZXNBWCAqIGF4aXNYICsgdmVydGljZXNBWSAqIGF4aXNZLFxuICAgICAgICAgICAgICAgIG1pbkIgPSB2ZXJ0aWNlc0JYICogYXhpc1ggKyB2ZXJ0aWNlc0JZICogYXhpc1ksXG4gICAgICAgICAgICAgICAgbWF4QSA9IG1pbkEsXG4gICAgICAgICAgICAgICAgbWF4QiA9IG1pbkI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCB2ZXJ0aWNlc0FMZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdCA9IHZlcnRpY2VzQVtqXS54ICogYXhpc1ggKyB2ZXJ0aWNlc0Fbal0ueSAqIGF4aXNZO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvdCA+IG1heEEpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1heEEgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb3QgPCBtaW5BKSB7IFxuICAgICAgICAgICAgICAgICAgICBtaW5BID0gZG90O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IHZlcnRpY2VzQkxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gdmVydGljZXNCW2pdLnggKiBheGlzWCArIHZlcnRpY2VzQltqXS55ICogYXhpc1k7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG90ID4gbWF4QikgeyBcbiAgICAgICAgICAgICAgICAgICAgbWF4QiA9IGRvdDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvdCA8IG1pbkIpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1pbkIgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdmVybGFwQUIgPSBtYXhBIC0gbWluQjtcbiAgICAgICAgICAgIG92ZXJsYXBCQSA9IG1heEIgLSBtaW5BO1xuICAgICAgICAgICAgb3ZlcmxhcCA9IG92ZXJsYXBBQiA8IG92ZXJsYXBCQSA/IG92ZXJsYXBBQiA6IG92ZXJsYXBCQTtcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXAgPCBvdmVybGFwTWluKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcE1pbiA9IG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcEF4aXNOdW1iZXIgPSBpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gbm90IGJlIGludGVyc2VjdGluZ1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmF4aXMgPSBheGVzW292ZXJsYXBBeGlzTnVtYmVyXTtcbiAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSBvdmVybGFwTWluO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyB2ZXJ0aWNlcyBvbiBhbiBheGlzIGFuZCByZXR1cm5zIGFuIGludGVydmFsLlxuICAgICAqIEBtZXRob2QgX3Byb2plY3RUb0F4aXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBwcm9qZWN0aW9uXG4gICAgICogQHBhcmFtIHt9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt9IGF4aXNcbiAgICAgKi9cbiAgICBDb2xsaXNpb24uX3Byb2plY3RUb0F4aXMgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB2ZXJ0aWNlcywgYXhpcykge1xuICAgICAgICB2YXIgbWluID0gdmVydGljZXNbMF0ueCAqIGF4aXMueCArIHZlcnRpY2VzWzBdLnkgKiBheGlzLnksXG4gICAgICAgICAgICBtYXggPSBtaW47XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGRvdCA9IHZlcnRpY2VzW2ldLnggKiBheGlzLnggKyB2ZXJ0aWNlc1tpXS55ICogYXhpcy55O1xuXG4gICAgICAgICAgICBpZiAoZG90ID4gbWF4KSB7IFxuICAgICAgICAgICAgICAgIG1heCA9IGRvdDsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvdCA8IG1pbikgeyBcbiAgICAgICAgICAgICAgICBtaW4gPSBkb3Q7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdGlvbi5taW4gPSBtaW47XG4gICAgICAgIHByb2plY3Rpb24ubWF4ID0gbWF4O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBzdXBwb3J0aW5nIHZlcnRpY2VzIGdpdmVuIHR3byBib2RpZXMgYWxvbmcgYSBnaXZlbiBkaXJlY3Rpb24gdXNpbmcgaGlsbC1jbGltYmluZy5cbiAgICAgKiBAbWV0aG9kIF9maW5kU3VwcG9ydHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IG5vcm1hbFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIFt2ZWN0b3JdXG4gICAgICovXG4gICAgQ29sbGlzaW9uLl9maW5kU3VwcG9ydHMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIsIG5vcm1hbCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IGJvZHlCLnZlcnRpY2VzLFxuICAgICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICBib2R5QVBvc2l0aW9uWCA9IGJvZHlBLnBvc2l0aW9uLngsXG4gICAgICAgICAgICBib2R5QVBvc2l0aW9uWSA9IGJvZHlBLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBub3JtYWxYID0gbm9ybWFsLnggKiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBub3JtYWxZID0gbm9ybWFsLnkgKiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgdmVydGV4QSxcbiAgICAgICAgICAgIHZlcnRleEIsXG4gICAgICAgICAgICB2ZXJ0ZXhDLFxuICAgICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIC8vIGZpbmQgZGVlcGVzdCB2ZXJ0ZXggcmVsYXRpdmUgdG8gdGhlIGF4aXNcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHZlcnRpY2VzTGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRleEIgPSB2ZXJ0aWNlc1tqXTtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gbm9ybWFsWCAqIChib2R5QVBvc2l0aW9uWCAtIHZlcnRleEIueCkgKyBub3JtYWxZICogKGJvZHlBUG9zaXRpb25ZIC0gdmVydGV4Qi55KTtcblxuICAgICAgICAgICAgLy8gY29udmV4IGhpbGwtY2xpbWJpbmdcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG5lYXJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG5lYXJlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIHZlcnRleEEgPSB2ZXJ0ZXhCO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWVhc3VyZSBuZXh0IHZlcnRleFxuICAgICAgICB2ZXJ0ZXhDID0gdmVydGljZXNbKHZlcnRpY2VzTGVuZ3RoICsgdmVydGV4QS5pbmRleCAtIDEpICUgdmVydGljZXNMZW5ndGhdO1xuICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBub3JtYWxYICogKGJvZHlBUG9zaXRpb25YIC0gdmVydGV4Qy54KSArIG5vcm1hbFkgKiAoYm9keUFQb3NpdGlvblkgLSB2ZXJ0ZXhDLnkpO1xuXG4gICAgICAgIC8vIGNvbXBhcmUgd2l0aCBwcmV2aW91cyB2ZXJ0ZXhcbiAgICAgICAgdmVydGV4QiA9IHZlcnRpY2VzWyh2ZXJ0ZXhBLmluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aF07XG4gICAgICAgIGlmIChub3JtYWxYICogKGJvZHlBUG9zaXRpb25YIC0gdmVydGV4Qi54KSArIG5vcm1hbFkgKiAoYm9keUFQb3NpdGlvblkgLSB2ZXJ0ZXhCLnkpIDwgbmVhcmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICBfc3VwcG9ydHNbMF0gPSB2ZXJ0ZXhBO1xuICAgICAgICAgICAgX3N1cHBvcnRzWzFdID0gdmVydGV4QjtcblxuICAgICAgICAgICAgcmV0dXJuIF9zdXBwb3J0cztcbiAgICAgICAgfVxuXG4gICAgICAgIF9zdXBwb3J0c1swXSA9IHZlcnRleEE7XG4gICAgICAgIF9zdXBwb3J0c1sxXSA9IHZlcnRleEM7XG5cbiAgICAgICAgcmV0dXJuIF9zdXBwb3J0cztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcGFpciB1c2luZyB0aGlzIGNvbGxpc2lvbiByZWNvcmQsIGlmIHRoZXJlIGlzIG9uZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYWlyXG4gICAgICogQHR5cGUge3BhaXJ8bnVsbH1cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJvZGllcyB3ZXJlIGNvbGxpZGluZyB3aGVuIHRoZSBjb2xsaXNpb24gd2FzIGxhc3QgdXBkYXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgY29sbGlkZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoc2VlIGFsc28gYGNvbGxpc2lvbi5wYXJlbnRBYCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IGJvZHlBXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoc2VlIGFsc28gYGNvbGxpc2lvbi5wYXJlbnRCYCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IGJvZHlCXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IGJvZHkgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoaS5lLiBgY29sbGlzaW9uLmJvZHlBLnBhcmVudGApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRBXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBib2R5IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKGkuZS4gYGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnRgKS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCByZXByZXNlbnRzIHRoZSBtaW5pbXVtIHNlcGFyYXRpbmcgZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm9kaWVzIGFsb25nIHRoZSBjb2xsaXNpb24gbm9ybWFsLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGRlcHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBub3JtYWxpc2VkIGBWZWN0b3JgIHRoYXQgcmVwcmVzZW50cyB0aGUgZGlyZWN0aW9uIGJldHdlZW4gdGhlIGJvZGllcyB0aGF0IHByb3ZpZGVzIHRoZSBtaW5pbXVtIHNlcGFyYXRpbmcgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbm9ybWFsXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgbm9ybWFsaXNlZCBgVmVjdG9yYCB0aGF0IGlzIHRoZSB0YW5nZW50IGRpcmVjdGlvbiB0byB0aGUgY29sbGlzaW9uIG5vcm1hbC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0YW5nZW50XG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCByZXByZXNlbnRzIHRoZSBkaXJlY3Rpb24gYW5kIGRlcHRoIG9mIHRoZSBjb2xsaXNpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGVuZXRyYXRpb25cbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYm9keSB2ZXJ0aWNlcyB0aGF0IHJlcHJlc2VudCB0aGUgc3VwcG9ydCBwb2ludHMgaW4gdGhlIGNvbGxpc2lvbi5cbiAgICAgKiBUaGVzZSBhcmUgdGhlIGRlZXBlc3QgdmVydGljZXMgKGFsb25nIHRoZSBjb2xsaXNpb24gbm9ybWFsKSBvZiBlYWNoIGJvZHkgdGhhdCBhcmUgY29udGFpbmVkIGJ5IHRoZSBvdGhlciBib2R5J3MgdmVydGljZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc3VwcG9ydHNcbiAgICAgKiBAdHlwZSB2ZWN0b3JbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5QYWlyYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBQYWlyXG4qL1xuXG52YXIgUGFpciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhaXI7XG5cbnZhciBDb250YWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGFpci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICogQHJldHVybiB7cGFpcn0gQSBuZXcgcGFpclxuICAgICAqL1xuICAgIFBhaXIuY3JlYXRlID0gZnVuY3Rpb24oY29sbGlzaW9uLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBLFxuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUI7XG5cbiAgICAgICAgdmFyIHBhaXIgPSB7XG4gICAgICAgICAgICBpZDogUGFpci5pZChib2R5QSwgYm9keUIpLFxuICAgICAgICAgICAgYm9keUE6IGJvZHlBLFxuICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgY29sbGlzaW9uOiBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb250YWN0czogW10sXG4gICAgICAgICAgICBhY3RpdmVDb250YWN0czogW10sXG4gICAgICAgICAgICBzZXBhcmF0aW9uOiAwLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBjb25maXJtZWRBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBpc1NlbnNvcjogYm9keUEuaXNTZW5zb3IgfHwgYm9keUIuaXNTZW5zb3IsXG4gICAgICAgICAgICB0aW1lQ3JlYXRlZDogdGltZXN0YW1wLFxuICAgICAgICAgICAgdGltZVVwZGF0ZWQ6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGludmVyc2VNYXNzOiAwLFxuICAgICAgICAgICAgZnJpY3Rpb246IDAsXG4gICAgICAgICAgICBmcmljdGlvblN0YXRpYzogMCxcbiAgICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLFxuICAgICAgICAgICAgc2xvcDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIFBhaXIudXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcblxuICAgICAgICByZXR1cm4gcGFpcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHBhaXIgZ2l2ZW4gYSBjb2xsaXNpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge3BhaXJ9IHBhaXJcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXIudXBkYXRlID0gZnVuY3Rpb24ocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGNvbnRhY3RzID0gcGFpci5jb250YWN0cyxcbiAgICAgICAgICAgIHN1cHBvcnRzID0gY29sbGlzaW9uLnN1cHBvcnRzLFxuICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgcGFyZW50QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgcGFyZW50QiA9IGNvbGxpc2lvbi5wYXJlbnRCLFxuICAgICAgICAgICAgcGFyZW50QVZlcnRpY2VzTGVuZ3RoID0gcGFyZW50QS52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICBwYWlyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcGFpci50aW1lVXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgcGFpci5jb2xsaXNpb24gPSBjb2xsaXNpb247XG4gICAgICAgIHBhaXIuc2VwYXJhdGlvbiA9IGNvbGxpc2lvbi5kZXB0aDtcbiAgICAgICAgcGFpci5pbnZlcnNlTWFzcyA9IHBhcmVudEEuaW52ZXJzZU1hc3MgKyBwYXJlbnRCLmludmVyc2VNYXNzO1xuICAgICAgICBwYWlyLmZyaWN0aW9uID0gcGFyZW50QS5mcmljdGlvbiA8IHBhcmVudEIuZnJpY3Rpb24gPyBwYXJlbnRBLmZyaWN0aW9uIDogcGFyZW50Qi5mcmljdGlvbjtcbiAgICAgICAgcGFpci5mcmljdGlvblN0YXRpYyA9IHBhcmVudEEuZnJpY3Rpb25TdGF0aWMgPiBwYXJlbnRCLmZyaWN0aW9uU3RhdGljID8gcGFyZW50QS5mcmljdGlvblN0YXRpYyA6IHBhcmVudEIuZnJpY3Rpb25TdGF0aWM7XG4gICAgICAgIHBhaXIucmVzdGl0dXRpb24gPSBwYXJlbnRBLnJlc3RpdHV0aW9uID4gcGFyZW50Qi5yZXN0aXR1dGlvbiA/IHBhcmVudEEucmVzdGl0dXRpb24gOiBwYXJlbnRCLnJlc3RpdHV0aW9uO1xuICAgICAgICBwYWlyLnNsb3AgPSBwYXJlbnRBLnNsb3AgPiBwYXJlbnRCLnNsb3AgPyBwYXJlbnRBLnNsb3AgOiBwYXJlbnRCLnNsb3A7XG5cbiAgICAgICAgY29sbGlzaW9uLnBhaXIgPSBwYWlyO1xuICAgICAgICBhY3RpdmVDb250YWN0cy5sZW5ndGggPSAwO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSBzdXBwb3J0c1tpXSxcbiAgICAgICAgICAgICAgICBjb250YWN0SWQgPSBzdXBwb3J0LmJvZHkgPT09IHBhcmVudEEgPyBzdXBwb3J0LmluZGV4IDogcGFyZW50QVZlcnRpY2VzTGVuZ3RoICsgc3VwcG9ydC5pbmRleCxcbiAgICAgICAgICAgICAgICBjb250YWN0ID0gY29udGFjdHNbY29udGFjdElkXTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250YWN0cy5wdXNoKGNvbnRhY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250YWN0cy5wdXNoKGNvbnRhY3RzW2NvbnRhY3RJZF0gPSBDb250YWN0LmNyZWF0ZShzdXBwb3J0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFNldCBhIHBhaXIgYXMgYWN0aXZlIG9yIGluYWN0aXZlLlxuICAgICAqIEBtZXRob2Qgc2V0QWN0aXZlXG4gICAgICogQHBhcmFtIHtwYWlyfSBwYWlyXG4gICAgICogQHBhcmFtIHtib29sfSBpc0FjdGl2ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlyLnNldEFjdGl2ZSA9IGZ1bmN0aW9uKHBhaXIsIGlzQWN0aXZlLCB0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBwYWlyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhaXIudGltZVVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWlyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpZCBmb3IgdGhlIGdpdmVuIHBhaXIuXG4gICAgICogQG1ldGhvZCBpZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBVbmlxdWUgcGFpcklkXG4gICAgICovXG4gICAgUGFpci5pZCA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICBpZiAoYm9keUEuaWQgPCBib2R5Qi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuICdBJyArIGJvZHlBLmlkICsgJ0InICsgYm9keUIuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0EnICsgYm9keUIuaWQgKyAnQicgKyBib2R5QS5pZDtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29uc3RyYWludGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29uc3RyYWludHMuXG4qIENvbnN0cmFpbnRzIGFyZSB1c2VkIGZvciBzcGVjaWZ5aW5nIHRoYXQgYSBmaXhlZCBkaXN0YW5jZSBtdXN0IGJlIG1haW50YWluZWQgYmV0d2VlbiB0d28gYm9kaWVzIChvciBhIGJvZHkgYW5kIGEgZml4ZWQgd29ybGQtc3BhY2UgcG9zaXRpb24pLlxuKiBUaGUgc3RpZmZuZXNzIG9mIGNvbnN0cmFpbnRzIGNhbiBiZSBtb2RpZmllZCB0byBjcmVhdGUgc3ByaW5ncyBvciBlbGFzdGljLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29uc3RyYWludFxuKi9cblxudmFyIENvbnN0cmFpbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdHJhaW50O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbnN0cmFpbnQuX3dhcm1pbmcgPSAwLjQ7XG4gICAgQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuID0gMTtcbiAgICBDb25zdHJhaW50Ll9taW5MZW5ndGggPSAwLjAwMDAwMTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29uc3RyYWludC5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFRvIHNpbXVsYXRlIGEgcmV2b2x1dGUgY29uc3RyYWludCAob3IgcGluIGpvaW50KSBzZXQgYGxlbmd0aDogMGAgYW5kIGEgaGlnaCBgc3RpZmZuZXNzYCB2YWx1ZSAoZS5nLiBgMC43YCBvciBhYm92ZSkuXG4gICAgICogSWYgdGhlIGNvbnN0cmFpbnQgaXMgdW5zdGFibGUsIHRyeSBsb3dlcmluZyB0aGUgYHN0aWZmbmVzc2AgdmFsdWUgYW5kIC8gb3IgaW5jcmVhc2luZyBgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zYC5cbiAgICAgKiBGb3IgY29tcG91bmQgYm9kaWVzLCBjb25zdHJhaW50cyBtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBib2R5IChub3Qgb25lIG9mIGl0cyBwYXJ0cykuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgY29uc3RyYWludCA9IG9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgYm9kaWVzIGRlZmluZWQgYnV0IG5vIHBvaW50cywgdXNlIGJvZHkgY2VudHJlXG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlBICYmICFjb25zdHJhaW50LnBvaW50QSlcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlCICYmICFjb25zdHJhaW50LnBvaW50QilcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHN0YXRpYyBsZW5ndGggdXNpbmcgaW5pdGlhbCB3b3JsZCBzcGFjZSBwb2ludHNcbiAgICAgICAgdmFyIGluaXRpYWxQb2ludEEgPSBjb25zdHJhaW50LmJvZHlBID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSkgOiBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIGluaXRpYWxQb2ludEIgPSBjb25zdHJhaW50LmJvZHlCID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QikgOiBjb25zdHJhaW50LnBvaW50QixcbiAgICAgICAgICAgIGxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1Yihpbml0aWFsUG9pbnRBLCBpbml0aWFsUG9pbnRCKSk7XG4gICAgXG4gICAgICAgIGNvbnN0cmFpbnQubGVuZ3RoID0gdHlwZW9mIGNvbnN0cmFpbnQubGVuZ3RoICE9PSAndW5kZWZpbmVkJyA/IGNvbnN0cmFpbnQubGVuZ3RoIDogbGVuZ3RoO1xuXG4gICAgICAgIC8vIG9wdGlvbiBkZWZhdWx0c1xuICAgICAgICBjb25zdHJhaW50LmlkID0gY29uc3RyYWludC5pZCB8fCBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIGNvbnN0cmFpbnQubGFiZWwgPSBjb25zdHJhaW50LmxhYmVsIHx8ICdDb25zdHJhaW50JztcbiAgICAgICAgY29uc3RyYWludC50eXBlID0gJ2NvbnN0cmFpbnQnO1xuICAgICAgICBjb25zdHJhaW50LnN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuc3RpZmZuZXNzIHx8IChjb25zdHJhaW50Lmxlbmd0aCA+IDAgPyAxIDogMC43KTtcbiAgICAgICAgY29uc3RyYWludC5kYW1waW5nID0gY29uc3RyYWludC5kYW1waW5nIHx8IDA7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyB8fCAwO1xuICAgICAgICBjb25zdHJhaW50LmFuZ2xlQSA9IGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLmFuZ2xlIDogY29uc3RyYWludC5hbmdsZUE7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIuYW5nbGUgOiBjb25zdHJhaW50LmFuZ2xlQjtcbiAgICAgICAgY29uc3RyYWludC5wbHVnaW4gPSB7fTtcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgdmFyIHJlbmRlciA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgYW5jaG9yczogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50Lmxlbmd0aCA9PT0gMCAmJiBjb25zdHJhaW50LnN0aWZmbmVzcyA+IDAuMSkge1xuICAgICAgICAgICAgcmVuZGVyLnR5cGUgPSAncGluJztcbiAgICAgICAgICAgIHJlbmRlci5hbmNob3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludC5zdGlmZm5lc3MgPCAwLjkpIHtcbiAgICAgICAgICAgIHJlbmRlci50eXBlID0gJ3NwcmluZyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJhaW50LnJlbmRlciA9IENvbW1vbi5leHRlbmQocmVuZGVyLCBjb25zdHJhaW50LnJlbmRlcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGZvciBzb2x2aW5nIGJ5IGNvbnN0cmFpbnQgd2FybWluZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcHJlU29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbCA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgaW1wdWxzZSA9IGJvZHkuY29uc3RyYWludEltcHVsc2U7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IChpbXB1bHNlLnggPT09IDAgJiYgaW1wdWxzZS55ID09PSAwICYmIGltcHVsc2UuYW5nbGUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gaW1wdWxzZS55O1xuICAgICAgICAgICAgYm9keS5hbmdsZSArPSBpbXB1bHNlLmFuZ2xlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvbHZlcyBhbGwgY29uc3RyYWludHMgaW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50W119IGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhXG4gICAgICovXG4gICAgQ29uc3RyYWludC5zb2x2ZUFsbCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBkZWx0YSkge1xuICAgICAgICB2YXIgdGltZVNjYWxlID0gQ29tbW9uLmNsYW1wKGRlbHRhIC8gQ29tbW9uLl9iYXNlRGVsdGEsIDAsIDEpO1xuXG4gICAgICAgIC8vIFNvbHZlIGZpeGVkIGNvbnN0cmFpbnRzIGZpcnN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgIGZpeGVkQSA9ICFjb25zdHJhaW50LmJvZHlBIHx8IChjb25zdHJhaW50LmJvZHlBICYmIGNvbnN0cmFpbnQuYm9keUEuaXNTdGF0aWMpLFxuICAgICAgICAgICAgICAgIGZpeGVkQiA9ICFjb25zdHJhaW50LmJvZHlCIHx8IChjb25zdHJhaW50LmJvZHlCICYmIGNvbnN0cmFpbnQuYm9keUIuaXNTdGF0aWMpO1xuXG4gICAgICAgICAgICBpZiAoZml4ZWRBIHx8IGZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb2x2ZSBmcmVlIGNvbnN0cmFpbnRzIGxhc3QuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldO1xuICAgICAgICAgICAgZml4ZWRBID0gIWNvbnN0cmFpbnQuYm9keUEgfHwgKGNvbnN0cmFpbnQuYm9keUEgJiYgY29uc3RyYWludC5ib2R5QS5pc1N0YXRpYyk7XG4gICAgICAgICAgICBmaXhlZEIgPSAhY29uc3RyYWludC5ib2R5QiB8fCAoY29uc3RyYWludC5ib2R5QiAmJiBjb25zdHJhaW50LmJvZHlCLmlzU3RhdGljKTtcblxuICAgICAgICAgICAgaWYgKCFmaXhlZEEgJiYgIWZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29sdmVzIGEgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2QuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmUgPSBmdW5jdGlvbihjb25zdHJhaW50LCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgIHBvaW50QSA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgaWYgKCFib2R5QSAmJiAhYm9keUIpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gdXBkYXRlIHJlZmVyZW5jZSBhbmdsZVxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBWZWN0b3Iucm90YXRlKHBvaW50QSwgYm9keUEuYW5nbGUgLSBjb25zdHJhaW50LmFuZ2xlQSwgcG9pbnRBKTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVBID0gYm9keUEuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSByZWZlcmVuY2UgYW5nbGVcbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZShwb2ludEIsIGJvZHlCLmFuZ2xlIC0gY29uc3RyYWludC5hbmdsZUIsIHBvaW50Qik7XG4gICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGJvZHlCLmFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50QVdvcmxkID0gcG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBwb2ludEI7XG5cbiAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIHBvaW50QSk7XG4gICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBwb2ludEIpO1xuXG4gICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIocG9pbnRBV29ybGQsIHBvaW50QldvcmxkKSxcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKGRlbHRhKTtcblxuICAgICAgICAvLyBwcmV2ZW50IHNpbmd1bGFyaXR5XG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoIDwgQ29uc3RyYWludC5fbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50TGVuZ3RoID0gQ29uc3RyYWludC5fbWluTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29sdmUgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2RcbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSAoY3VycmVudExlbmd0aCAtIGNvbnN0cmFpbnQubGVuZ3RoKSAvIGN1cnJlbnRMZW5ndGgsXG4gICAgICAgICAgICBpc1JpZ2lkID0gY29uc3RyYWludC5zdGlmZm5lc3MgPj0gMSB8fCBjb25zdHJhaW50Lmxlbmd0aCA9PT0gMCxcbiAgICAgICAgICAgIHN0aWZmbmVzcyA9IGlzUmlnaWQgPyBjb25zdHJhaW50LnN0aWZmbmVzcyAqIHRpbWVTY2FsZSBcbiAgICAgICAgICAgICAgICA6IGNvbnN0cmFpbnQuc3RpZmZuZXNzICogdGltZVNjYWxlICogdGltZVNjYWxlLFxuICAgICAgICAgICAgZGFtcGluZyA9IGNvbnN0cmFpbnQuZGFtcGluZyAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIGZvcmNlID0gVmVjdG9yLm11bHQoZGVsdGEsIGRpZmZlcmVuY2UgKiBzdGlmZm5lc3MpLFxuICAgICAgICAgICAgbWFzc1RvdGFsID0gKGJvZHlBID8gYm9keUEuaW52ZXJzZU1hc3MgOiAwKSArIChib2R5QiA/IGJvZHlCLmludmVyc2VNYXNzIDogMCksXG4gICAgICAgICAgICBpbmVydGlhVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlSW5lcnRpYSA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZUluZXJ0aWEgOiAwKSxcbiAgICAgICAgICAgIHJlc2lzdGFuY2VUb3RhbCA9IG1hc3NUb3RhbCArIGluZXJ0aWFUb3RhbCxcbiAgICAgICAgICAgIHRvcnF1ZSxcbiAgICAgICAgICAgIHNoYXJlLFxuICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHksXG4gICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5O1xuICAgIFxuICAgICAgICBpZiAoZGFtcGluZyA+IDApIHtcbiAgICAgICAgICAgIHZhciB6ZXJvID0gVmVjdG9yLmNyZWF0ZSgpO1xuICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLmRpdihkZWx0YSwgY3VycmVudExlbmd0aCk7XG5cbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHkgPSBWZWN0b3Iuc3ViKFxuICAgICAgICAgICAgICAgIGJvZHlCICYmIFZlY3Rvci5zdWIoYm9keUIucG9zaXRpb24sIGJvZHlCLnBvc2l0aW9uUHJldikgfHwgemVybyxcbiAgICAgICAgICAgICAgICBib2R5QSAmJiBWZWN0b3Iuc3ViKGJvZHlBLnBvc2l0aW9uLCBib2R5QS5wb3NpdGlvblByZXYpIHx8IHplcm9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG5vcm1hbFZlbG9jaXR5ID0gVmVjdG9yLmRvdChub3JtYWwsIHJlbGF0aXZlVmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlBICYmICFib2R5QS5pc1N0YXRpYykge1xuICAgICAgICAgICAgc2hhcmUgPSBib2R5QS5pbnZlcnNlTWFzcyAvIG1hc3NUb3RhbDtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhcHBsaWVkIGltcHVsc2VzIGZvciBwb3N0IHNvbHZpbmdcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLnggLT0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueSAtPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGZvcmNlc1xuICAgICAgICAgICAgYm9keUEucG9zaXRpb24ueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZGFtcGluZ1xuICAgICAgICAgICAgaWYgKGRhbXBpbmcgPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggLT0gZGFtcGluZyAqIG5vcm1hbC54ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSAtPSBkYW1waW5nICogbm9ybWFsLnkgKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBseSB0b3JxdWVcbiAgICAgICAgICAgIHRvcnF1ZSA9IChWZWN0b3IuY3Jvc3MocG9pbnRBLCBmb3JjZSkgLyByZXNpc3RhbmNlVG90YWwpICogQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuICogYm9keUEuaW52ZXJzZUluZXJ0aWEgKiAoMSAtIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyk7XG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS5hbmdsZSAtPSB0b3JxdWU7XG4gICAgICAgICAgICBib2R5QS5hbmdsZSAtPSB0b3JxdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUIgJiYgIWJvZHlCLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBzaGFyZSA9IGJvZHlCLmludmVyc2VNYXNzIC8gbWFzc1RvdGFsO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGFwcGxpZWQgaW1wdWxzZXMgZm9yIHBvc3Qgc29sdmluZ1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UueCArPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS55ICs9IGZvcmNlLnkgKiBzaGFyZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYXBwbHkgZm9yY2VzXG4gICAgICAgICAgICBib2R5Qi5wb3NpdGlvbi54ICs9IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uLnkgKz0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBkYW1waW5nXG4gICAgICAgICAgICBpZiAoZGFtcGluZyA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCArPSBkYW1waW5nICogbm9ybWFsLnggKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55ICs9IGRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEIsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlCLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGJvZHkgdXBkYXRlcyByZXF1aXJlZCBhZnRlciBzb2x2aW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwb3N0U29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGltcHVsc2UgPSBib2R5LmNvbnN0cmFpbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCAoaW1wdWxzZS54ID09PSAwICYmIGltcHVsc2UueSA9PT0gMCAmJiBpbXB1bHNlLmFuZ2xlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnkgYW5kIHJlc2V0XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBpbXB1bHNlLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGltcHVsc2UuYW5nbGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGltcHVsc2UuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBpbXB1bHNlLmFuZ2xlLCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkYW1wZW4gdGhlIGNhY2hlZCBpbXB1bHNlIGZvciB3YXJtaW5nIG5leHQgc3RlcFxuICAgICAgICAgICAgaW1wdWxzZS5hbmdsZSAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICAgICAgaW1wdWxzZS54ICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgICAgICBpbXB1bHNlLnkgKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiBgY29uc3RyYWludC5wb2ludEFgLCBhY2NvdW50aW5nIGZvciBgY29uc3RyYWludC5ib2R5QWAuXG4gICAgICogQG1ldGhvZCBwb2ludEFXb3JsZFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm5zIHt2ZWN0b3J9IHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9pbnRBV29ybGQgPSBmdW5jdGlvbihjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueCA6IDApIFxuICAgICAgICAgICAgICAgICsgKGNvbnN0cmFpbnQucG9pbnRBID8gY29uc3RyYWludC5wb2ludEEueCA6IDApLFxuICAgICAgICAgICAgeTogKGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLnkgOiAwKSBcbiAgICAgICAgICAgICAgICArIChjb25zdHJhaW50LnBvaW50QSA/IGNvbnN0cmFpbnQucG9pbnRBLnkgOiAwKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiBgY29uc3RyYWludC5wb2ludEJgLCBhY2NvdW50aW5nIGZvciBgY29uc3RyYWludC5ib2R5QmAuXG4gICAgICogQG1ldGhvZCBwb2ludEJXb3JsZFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm5zIHt2ZWN0b3J9IHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9pbnRCV29ybGQgPSBmdW5jdGlvbihjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24ueCA6IDApIFxuICAgICAgICAgICAgICAgICsgKGNvbnN0cmFpbnQucG9pbnRCID8gY29uc3RyYWludC5wb2ludEIueCA6IDApLFxuICAgICAgICAgICAgeTogKGNvbnN0cmFpbnQuYm9keUIgPyBjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLnkgOiAwKSBcbiAgICAgICAgICAgICAgICArIChjb25zdHJhaW50LnBvaW50QiA/IGNvbnN0cmFpbnQucG9pbnRCLnkgOiAwKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQ29tcG9zaXRlLmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb25zdHJhaW50XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBib2RpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkNvbnN0cmFpbnRcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgY29uc3RyYWludCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBjb25zdHJhaW50IG91dGxpbmUuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBjb25zdHJhaW50IHJlbmRlcmluZyB0eXBlLiBcbiAgICAgKiBUaGUgcG9zc2libGUgdmFsdWVzIGFyZSAnbGluZScsICdwaW4nLCAnc3ByaW5nJy5cbiAgICAgKiBBbiBhcHByb3ByaWF0ZSByZW5kZXIgdHlwZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2hvc2VuIHVubGVzcyBvbmUgaXMgZ2l2ZW4gaW4gb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICdsaW5lJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm9vbGVhbmAgdGhhdCBkZWZpbmVzIGlmIHRoZSBjb25zdHJhaW50J3MgYW5jaG9yIHBvaW50cyBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmFuY2hvcnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Vjb25kIHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBvZmZzZXQgb2YgdGhlIGNvbnN0cmFpbnQgZnJvbSBjZW50ZXIgb2YgdGhlIGBjb25zdHJhaW50LmJvZHlBYCBpZiBkZWZpbmVkLCBvdGhlcndpc2UgYSB3b3JsZC1zcGFjZSBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb2ludEFcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QmAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRCXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHN0aWZmbmVzcyBvZiB0aGUgY29uc3RyYWludCwgaS5lLiB0aGUgcmF0ZSBhdCB3aGljaCBpdCByZXR1cm5zIHRvIGl0cyByZXN0aW5nIGBjb25zdHJhaW50Lmxlbmd0aGAuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHZlcnkgc3RpZmYuXG4gICAgICogQSB2YWx1ZSBvZiBgMC4yYCBtZWFucyB0aGUgY29uc3RyYWludCBhY3RzIGxpa2UgYSBzb2Z0IHNwcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzdGlmZm5lc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBkYW1waW5nIG9mIHRoZSBjb25zdHJhaW50LCBcbiAgICAgKiBpLmUuIHRoZSBhbW91bnQgb2YgcmVzaXN0YW5jZSBhcHBsaWVkIHRvIGVhY2ggYm9keSBiYXNlZCBvbiB0aGVpciB2ZWxvY2l0aWVzIHRvIGxpbWl0IHRoZSBhbW91bnQgb2Ygb3NjaWxsYXRpb24uXG4gICAgICogRGFtcGluZyB3aWxsIG9ubHkgYmUgYXBwYXJlbnQgd2hlbiB0aGUgY29uc3RyYWludCBhbHNvIGhhcyBhIHZlcnkgbG93IGBzdGlmZm5lc3NgLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgd2lsbCBhcHBseSBoZWF2eSBkYW1waW5nLCByZXN1bHRpbmcgaW4gbGl0dGxlIHRvIG5vIG9zY2lsbGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgbm8gZGFtcGluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlc3RpbmcgbGVuZ3RoIG9mIHRoZSBjb25zdHJhaW50LiBcbiAgICAgKiBJdCBpcyBjYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgaW4gYENvbnN0cmFpbnQuY3JlYXRlYCBmcm9tIGluaXRpYWwgcG9zaXRpb25zIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgYW5kIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsZW5ndGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkF4ZXNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNldHMgb2YgYXhlcy5cbipcbiogQGNsYXNzIEF4ZXNcbiovXG5cbnZhciBBeGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQXhlcztcblxudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXQgb2YgYXhlcyBmcm9tIHRoZSBnaXZlbiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGZyb21WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7YXhlc30gQSBuZXcgYXhlcyBmcm9tIHRoZSBnaXZlbiB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIEF4ZXMuZnJvbVZlcnRpY2VzID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSB7fTtcblxuICAgICAgICAvLyBmaW5kIHRoZSB1bmlxdWUgYXhlcywgdXNpbmcgZWRnZSBub3JtYWwgZ3JhZGllbnRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBqID0gKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgICAgICB4OiB2ZXJ0aWNlc1tqXS55IC0gdmVydGljZXNbaV0ueSwgXG4gICAgICAgICAgICAgICAgICAgIHk6IHZlcnRpY2VzW2ldLnggLSB2ZXJ0aWNlc1tqXS54XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQgPSAobm9ybWFsLnkgPT09IDApID8gSW5maW5pdHkgOiAobm9ybWFsLnggLyBub3JtYWwueSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxpbWl0IHByZWNpc2lvblxuICAgICAgICAgICAgZ3JhZGllbnQgPSBncmFkaWVudC50b0ZpeGVkKDMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBheGVzW2dyYWRpZW50XSA9IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDb21tb24udmFsdWVzKGF4ZXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgc2V0IG9mIGF4ZXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtheGVzfSBheGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgQXhlcy5yb3RhdGUgPSBmdW5jdGlvbihheGVzLCBhbmdsZSkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2ldLFxuICAgICAgICAgICAgICAgIHh4O1xuICAgICAgICAgICAgeHggPSBheGlzLnggKiBjb3MgLSBheGlzLnkgKiBzaW47XG4gICAgICAgICAgICBheGlzLnkgPSBheGlzLnggKiBzaW4gKyBheGlzLnkgKiBjb3M7XG4gICAgICAgICAgICBheGlzLnggPSB4eDtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQm9kaWVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyByaWdpZCBib2R5IG1vZGVscyBcbiogd2l0aCBjb21tb25seSB1c2VkIGJvZHkgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgcmVjdGFuZ2xlcywgY2lyY2xlcyBhbmQgb3RoZXIgcG9seWdvbnMpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQm9kaWVzXG4qL1xuXG4vLyBUT0RPOiB0cnVlIGNpcmNsZSBib2RpZXNcblxudmFyIEJvZGllcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZGllcztcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWN0YW5nbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyByZWN0YW5nbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5yZWN0YW5nbGUgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciByZWN0YW5nbGUgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdSZWN0YW5nbGUgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgJyArIHdpZHRoICsgJyAwIEwgJyArIHdpZHRoICsgJyAnICsgaGVpZ2h0ICsgJyBMIDAgJyArIGhlaWdodClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHJlY3RhbmdsZS52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocmVjdGFuZ2xlLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHJlY3RhbmdsZSwgb3B0aW9ucykpO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSB0cmFwZXpvaWQgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCB0cmFwZXpvaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzbG9wZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyB0cmFwZXpvaWQgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy50cmFwZXpvaWQgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzbG9wZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBzbG9wZSAqPSAwLjU7XG4gICAgICAgIHZhciByb29mID0gKDEgLSAoc2xvcGUgKiAyKSkgKiB3aWR0aDtcbiAgICAgICAgXG4gICAgICAgIHZhciB4MSA9IHdpZHRoICogc2xvcGUsXG4gICAgICAgICAgICB4MiA9IHgxICsgcm9vZixcbiAgICAgICAgICAgIHgzID0geDIgKyB4MSxcbiAgICAgICAgICAgIHZlcnRpY2VzUGF0aDtcblxuICAgICAgICBpZiAoc2xvcGUgPCAwLjUpIHtcbiAgICAgICAgICAgIHZlcnRpY2VzUGF0aCA9ICdMIDAgMCBMICcgKyB4MSArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDIgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgzICsgJyAwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcnRpY2VzUGF0aCA9ICdMIDAgMCBMICcgKyB4MiArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDMgKyAnIDAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYXBlem9pZCA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1RyYXBlem9pZCBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCh2ZXJ0aWNlc1BhdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhbWZlcikge1xuICAgICAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgICAgICB0cmFwZXpvaWQudmVydGljZXMgPSBWZXJ0aWNlcy5jaGFtZmVyKHRyYXBlem9pZC52ZXJ0aWNlcywgY2hhbWZlci5yYWRpdXMsIFxuICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCB0cmFwZXpvaWQsIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSBjaXJjbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjaXJjbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFNpZGVzXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IGNpcmNsZSBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLmNpcmNsZSA9IGZ1bmN0aW9uKHgsIHksIHJhZGl1cywgb3B0aW9ucywgbWF4U2lkZXMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIGNpcmNsZSA9IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2lyY2xlIEJvZHknLFxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzOiByYWRpdXNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFwcHJveGltYXRlIGNpcmNsZXMgd2l0aCBwb2x5Z29ucyB1bnRpbCB0cnVlIGNpcmNsZXMgaW1wbGVtZW50ZWQgaW4gU0FUXG4gICAgICAgIG1heFNpZGVzID0gbWF4U2lkZXMgfHwgMjU7XG4gICAgICAgIHZhciBzaWRlcyA9IE1hdGguY2VpbChNYXRoLm1heCgxMCwgTWF0aC5taW4obWF4U2lkZXMsIHJhZGl1cykpKTtcblxuICAgICAgICAvLyBvcHRpbWlzYXRpb246IGFsd2F5cyB1c2UgZXZlbiBudW1iZXIgb2Ygc2lkZXMgKGhhbGYgdGhlIG51bWJlciBvZiB1bmlxdWUgYXhlcylcbiAgICAgICAgaWYgKHNpZGVzICUgMiA9PT0gMSlcbiAgICAgICAgICAgIHNpZGVzICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIEJvZGllcy5wb2x5Z29uKHgsIHksIHNpZGVzLCByYWRpdXMsIENvbW1vbi5leHRlbmQoe30sIGNpcmNsZSwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHJlZ3VsYXIgcG9seWdvbiBodWxsIHdpdGggdGhlIGdpdmVuIG51bWJlciBvZiBzaWRlcy4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBwb2x5Z29uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWRlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgcmVndWxhciBwb2x5Z29uIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMucG9seWdvbiA9IGZ1bmN0aW9uKHgsIHksIHNpZGVzLCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYgKHNpZGVzIDwgMylcbiAgICAgICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIHJhZGl1cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHRoZXRhID0gMiAqIE1hdGguUEkgLyBzaWRlcyxcbiAgICAgICAgICAgIHBhdGggPSAnJyxcbiAgICAgICAgICAgIG9mZnNldCA9IHRoZXRhICogMC41O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZXM7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gb2Zmc2V0ICsgKGkgKiB0aGV0YSksXG4gICAgICAgICAgICAgICAgeHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICAgICAgICAgICAgeXkgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG5cbiAgICAgICAgICAgIHBhdGggKz0gJ0wgJyArIHh4LnRvRml4ZWQoMykgKyAnICcgKyB5eS50b0ZpeGVkKDMpICsgJyAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvbHlnb24gPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdQb2x5Z29uIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHBhdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhbWZlcikge1xuICAgICAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgICAgICBwb2x5Z29uLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihwb2x5Z29uLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHBvbHlnb24sIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBjcmVhdGUgYSBjb21wb3VuZCBib2R5IGJhc2VkIG9uIHNldChzKSBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBcbiAgICAgKiBfTm90ZTpfIFRvIG9wdGlvbmFsbHkgZW5hYmxlIGF1dG9tYXRpYyBjb25jYXZlIHZlcnRpY2VzIGRlY29tcG9zaXRpb24gdGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBcbiAgICAgKiBwYWNrYWdlIG11c3QgYmUgZmlyc3QgaW5zdGFsbGVkIGFuZCBwcm92aWRlZCBzZWUgYENvbW1vbi5zZXREZWNvbXBgLCBvdGhlcndpc2UgdGhlIGNvbnZleCBodWxsIG9mIGVhY2ggdmVydGV4IHNldCB3aWxsIGJlIHVzZWQuXG4gICAgICogXG4gICAgICogVGhlIHJlc3VsdGluZyB2ZXJ0aWNlcyBhcmUgcmVvcmllbnRhdGVkIGFib3V0IHRoZWlyIGNlbnRyZSBvZiBtYXNzLFxuICAgICAqIGFuZCBvZmZzZXQgc3VjaCB0aGF0IGBib2R5LnBvc2l0aW9uYCBjb3JyZXNwb25kcyB0byB0aGlzIHBvaW50LlxuICAgICAqIFxuICAgICAqIFRoZSByZXN1bHRpbmcgb2Zmc2V0IG1heSBiZSBmb3VuZCBpZiBuZWVkZWQgYnkgc3VidHJhY3RpbmcgYGJvZHkuYm91bmRzYCBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dCBib3VuZHMuXG4gICAgICogVG8gbGF0ZXIgbW92ZSB0aGUgY2VudHJlIG9mIG1hc3Mgc2VlIGBCb2R5LnNldENlbnRyZWAuXG4gICAgICogXG4gICAgICogTm90ZSB0aGF0IGF1dG9tYXRpYyBjb25jb25jYXZlIGRlY29tcG9zaXRpb24gcmVzdWx0cyBhcmUgbm90IGFsd2F5cyBvcHRpbWFsLiBcbiAgICAgKiBGb3IgYmVzdCByZXN1bHRzLCBzaW1wbGlmeSB0aGUgaW5wdXQgdmVydGljZXMgYXMgbXVjaCBhcyBwb3NzaWJsZSBmaXJzdC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoaXMgZnVuY3Rpb24gYXBwbGllcyBzb21lIGFkZHRpb25hbCBzaW1wbGlmaWNhdGlvbiB0byBoZWxwLlxuICAgICAqIFxuICAgICAqIFNvbWUgb3V0cHV0cyBtYXkgYWxzbyByZXF1aXJlIGZ1cnRoZXIgbWFudWFsIHByb2Nlc3NpbmcgYWZ0ZXJ3YXJkcyB0byBiZSByb2J1c3QuXG4gICAgICogSW4gcGFydGljdWxhciBzb21lIHBhcnRzIG1heSBuZWVkIHRvIGJlIG92ZXJsYXBwZWQgdG8gYXZvaWQgY29sbGlzaW9uIGdhcHMuXG4gICAgICogVGhpbiBwYXJ0cyBhbmQgc2hhcnAgcG9pbnRzIHNob3VsZCBiZSBhdm9pZGVkIG9yIHJlbW92ZWQgd2hlcmUgcG9zc2libGUuXG4gICAgICpcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgb2JqZWN0IHNwZWNpZmllcyBhbnkgYE1hdHRlci5Cb2R5YCBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBcbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGZyb21WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB2ZXJ0ZXhTZXRzIE9uZSBvciBtb3JlIGFycmF5cyBvZiB2ZXJ0ZXggcG9pbnRzIGUuZy4gYFtbeyB4OiAwLCB5OiAwIH0uLi5dLCAuLi5dYC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFRoZSBib2R5IG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHtib29sfSBbZmxhZ0ludGVybmFsPWZhbHNlXSBPcHRpb25hbGx5IG1hcmtzIGludGVybmFsIGVkZ2VzIHdpdGggYGlzSW50ZXJuYWxgLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmVtb3ZlQ29sbGluZWFyPTAuMDFdIFRocmVzaG9sZCB3aGVuIHNpbXBsaWZ5aW5nIHZlcnRpY2VzIGFsb25nIHRoZSBzYW1lIGVkZ2UuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW5pbXVtQXJlYT0xMF0gVGhyZXNob2xkIHdoZW4gcmVtb3Zpbmcgc21hbGwgcGFydHMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyZW1vdmVEdXBsaWNhdGVQb2ludHM9MC4wMV0gVGhyZXNob2xkIHdoZW4gc2ltcGxpZnlpbmcgbmVhcmJ5IHZlcnRpY2VzLlxuICAgICAqIEByZXR1cm4ge2JvZHl9XG4gICAgICovXG4gICAgQm9kaWVzLmZyb21WZXJ0aWNlcyA9IGZ1bmN0aW9uKHgsIHksIHZlcnRleFNldHMsIG9wdGlvbnMsIGZsYWdJbnRlcm5hbCwgcmVtb3ZlQ29sbGluZWFyLCBtaW5pbXVtQXJlYSwgcmVtb3ZlRHVwbGljYXRlUG9pbnRzKSB7XG4gICAgICAgIHZhciBkZWNvbXAgPSBDb21tb24uZ2V0RGVjb21wKCksXG4gICAgICAgICAgICBjYW5EZWNvbXAsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydHMsXG4gICAgICAgICAgICBpc0NvbnZleCxcbiAgICAgICAgICAgIGlzQ29uY2F2ZSxcbiAgICAgICAgICAgIHZlcnRpY2VzLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgdixcbiAgICAgICAgICAgIHo7XG5cbiAgICAgICAgLy8gY2hlY2sgZGVjb21wIGlzIGFzIGV4cGVjdGVkXG4gICAgICAgIGNhbkRlY29tcCA9IEJvb2xlYW4oZGVjb21wICYmIGRlY29tcC5xdWlja0RlY29tcCk7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHBhcnRzID0gW107XG5cbiAgICAgICAgZmxhZ0ludGVybmFsID0gdHlwZW9mIGZsYWdJbnRlcm5hbCAhPT0gJ3VuZGVmaW5lZCcgPyBmbGFnSW50ZXJuYWwgOiBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQ29sbGluZWFyID0gdHlwZW9mIHJlbW92ZUNvbGxpbmVhciAhPT0gJ3VuZGVmaW5lZCcgPyByZW1vdmVDb2xsaW5lYXIgOiAwLjAxO1xuICAgICAgICBtaW5pbXVtQXJlYSA9IHR5cGVvZiBtaW5pbXVtQXJlYSAhPT0gJ3VuZGVmaW5lZCcgPyBtaW5pbXVtQXJlYSA6IDEwO1xuICAgICAgICByZW1vdmVEdXBsaWNhdGVQb2ludHMgPSB0eXBlb2YgcmVtb3ZlRHVwbGljYXRlUG9pbnRzICE9PSAndW5kZWZpbmVkJyA/IHJlbW92ZUR1cGxpY2F0ZVBvaW50cyA6IDAuMDE7XG5cbiAgICAgICAgLy8gZW5zdXJlIHZlcnRleFNldHMgaXMgYW4gYXJyYXkgb2YgYXJyYXlzXG4gICAgICAgIGlmICghQ29tbW9uLmlzQXJyYXkodmVydGV4U2V0c1swXSkpIHtcbiAgICAgICAgICAgIHZlcnRleFNldHMgPSBbdmVydGV4U2V0c107XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHYgPSAwOyB2IDwgdmVydGV4U2V0cy5sZW5ndGg7IHYgKz0gMSkge1xuICAgICAgICAgICAgdmVydGljZXMgPSB2ZXJ0ZXhTZXRzW3ZdO1xuICAgICAgICAgICAgaXNDb252ZXggPSBWZXJ0aWNlcy5pc0NvbnZleCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICBpc0NvbmNhdmUgPSAhaXNDb252ZXg7XG5cbiAgICAgICAgICAgIGlmIChpc0NvbmNhdmUgJiYgIWNhbkRlY29tcCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuT25jZShcbiAgICAgICAgICAgICAgICAgICAgJ0JvZGllcy5mcm9tVmVydGljZXM6IEluc3RhbGwgdGhlIFxcJ3BvbHktZGVjb21wXFwnIGxpYnJhcnkgYW5kIHVzZSBDb21tb24uc2V0RGVjb21wIG9yIHByb3ZpZGUgXFwnZGVjb21wXFwnIGFzIGEgZ2xvYmFsIHRvIGRlY29tcG9zZSBjb25jYXZlIHZlcnRpY2VzLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDb252ZXggfHwgIWNhbkRlY29tcCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbnZleCkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIGNvbnZleCBodWxsIHdoZW4gZGVjb21wb3NpdGlvbiBpcyBub3QgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgPSBWZXJ0aWNlcy5odWxsKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogdmVydGljZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBhIGRlY29tcG9zaXRpb25cbiAgICAgICAgICAgICAgICB2YXIgY29uY2F2ZSA9IHZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt2ZXJ0ZXgueCwgdmVydGV4LnldO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gdmVydGljZXMgYXJlIGNvbmNhdmUgYW5kIHNpbXBsZSwgd2UgY2FuIGRlY29tcG9zZSBpbnRvIHBhcnRzXG4gICAgICAgICAgICAgICAgZGVjb21wLm1ha2VDQ1coY29uY2F2ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUNvbGxpbmVhciAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIGRlY29tcC5yZW1vdmVDb2xsaW5lYXJQb2ludHMoY29uY2F2ZSwgcmVtb3ZlQ29sbGluZWFyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRHVwbGljYXRlUG9pbnRzICE9PSBmYWxzZSAmJiBkZWNvbXAucmVtb3ZlRHVwbGljYXRlUG9pbnRzKVxuICAgICAgICAgICAgICAgICAgICBkZWNvbXAucmVtb3ZlRHVwbGljYXRlUG9pbnRzKGNvbmNhdmUsIHJlbW92ZUR1cGxpY2F0ZVBvaW50cyk7XG5cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHF1aWNrIGRlY29tcG9zaXRpb24gYWxnb3JpdGhtIChCYXlheml0KVxuICAgICAgICAgICAgICAgIHZhciBkZWNvbXBvc2VkID0gZGVjb21wLnF1aWNrRGVjb21wKGNvbmNhdmUpO1xuXG4gICAgICAgICAgICAgICAgLy8gZm9yIGVhY2ggZGVjb21wb3NlZCBjaHVua1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkZWNvbXBvc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IGRlY29tcG9zZWRbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCB2ZXJ0aWNlcyBpbnRvIHRoZSBjb3JyZWN0IHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmtWZXJ0aWNlcyA9IGNodW5rLm1hcChmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB2ZXJ0aWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB2ZXJ0aWNlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBzbWFsbCBjaHVua3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbmltdW1BcmVhID4gMCAmJiBWZXJ0aWNlcy5hcmVhKGNodW5rVmVydGljZXMpIDwgbWluaW11bUFyZWEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBjb21wb3VuZCBwYXJ0XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFZlcnRpY2VzLmNlbnRyZShjaHVua1ZlcnRpY2VzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBjaHVua1ZlcnRpY2VzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBib2R5IHBhcnRzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHNbaV0gPSBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHBhcnRzW2ldLCBvcHRpb25zKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmbGFnIGludGVybmFsIGVkZ2VzIChjb2luY2lkZW50IHBhcnQgZWRnZXMpXG4gICAgICAgIGlmIChmbGFnSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHZhciBjb2luY2lkZW50X21heF9kaXN0ID0gNTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRBID0gcGFydHNbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IHBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMocGFydEEuYm91bmRzLCBwYXJ0Qi5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF2ID0gcGFydEEudmVydGljZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJ2ID0gcGFydEIudmVydGljZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgdmVydGljZXMgb2YgYm90aCBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnRBLnZlcnRpY2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh6ID0gMDsgeiA8IHBhcnRCLnZlcnRpY2VzLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgZGlzdGFuY2VzIGJldHdlZW4gdGhlIHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYSA9IFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkKFZlY3Rvci5zdWIocGF2WyhrICsgMSkgJSBwYXYubGVuZ3RoXSwgcGJ2W3pdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYiA9IFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkKFZlY3Rvci5zdWIocGF2W2tdLCBwYnZbKHogKyAxKSAlIHBidi5sZW5ndGhdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYm90aCB2ZXJ0aWNlcyBhcmUgdmVyeSBjbG9zZSwgY29uc2lkZXIgdGhlIGVkZ2UgY29uY2lkZW50IChpbnRlcm5hbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhIDwgY29pbmNpZGVudF9tYXhfZGlzdCAmJiBkYiA8IGNvaW5jaWRlbnRfbWF4X2Rpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdltrXS5pc0ludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBidlt6XS5pc0ludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgcGFyZW50IGJvZHkgdG8gYmUgcmV0dXJuZWQsIHRoYXQgY29udGFpbnMgZ2VuZXJhdGVkIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBib2R5ID0gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IHBhcnRzOiBwYXJ0cy5zbGljZSgwKSB9LCBvcHRpb25zKSk7XG5cbiAgICAgICAgICAgIC8vIG9mZnNldCBzdWNoIHRoYXQgYm9keS5wb3NpdGlvbiBpcyBhdCB0aGUgY2VudHJlIG9mZiBtYXNzXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHsgeDogeCwgeTogeSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkRldGVjdG9yYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZWZmaWNpZW50bHkgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBhIGxpc3Qgb2YgYm9kaWVzIHVzaW5nIGEgYnJvYWRwaGFzZSBhbGdvcml0aG0uXG4qXG4qIEBjbGFzcyBEZXRlY3RvclxuKi9cblxudmFyIERldGVjdG9yID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0ZWN0b3I7XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sbGlzaW9uIGRldGVjdG9yLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtkZXRlY3Rvcn0gQSBuZXcgY29sbGlzaW9uIGRldGVjdG9yXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBib2RpZXM6IFtdLFxuICAgICAgICAgICAgcGFpcnM6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpc3Qgb2YgYm9kaWVzIGluIHRoZSBkZXRlY3Rvci5cbiAgICAgKiBAbWV0aG9kIHNldEJvZGllc1xuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIERldGVjdG9yLnNldEJvZGllcyA9IGZ1bmN0aW9uKGRldGVjdG9yLCBib2RpZXMpIHtcbiAgICAgICAgZGV0ZWN0b3IuYm9kaWVzID0gYm9kaWVzLnNsaWNlKDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGRldGVjdG9yIGluY2x1ZGluZyBpdHMgbGlzdCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY2xlYXIgPSBmdW5jdGlvbihkZXRlY3Rvcikge1xuICAgICAgICBkZXRlY3Rvci5ib2RpZXMgPSBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRWZmaWNpZW50bHkgZmluZHMgYWxsIGNvbGxpc2lvbnMgYW1vbmcgYWxsIHRoZSBib2RpZXMgaW4gYGRldGVjdG9yLmJvZGllc2AgdXNpbmcgYSBicm9hZHBoYXNlIGFsZ29yaXRobS5cbiAgICAgKiBcbiAgICAgKiBfTm90ZTpfIFRoZSBzcGVjaWZpYyBvcmRlcmluZyBvZiBjb2xsaXNpb25zIHJldHVybmVkIGlzIG5vdCBndWFyYW50ZWVkIGJldHdlZW4gcmVsZWFzZXMgYW5kIG1heSBjaGFuZ2UgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gICAgICogSWYgYSBzcGVjaWZpYyBvcmRlcmluZyBpcyByZXF1aXJlZCB0aGVuIGFwcGx5IGEgc29ydCB0byB0aGUgcmVzdWx0aW5nIGFycmF5LlxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9uW119IGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jb2xsaXNpb25zID0gZnVuY3Rpb24oZGV0ZWN0b3IpIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBbXSxcbiAgICAgICAgICAgIHBhaXJzID0gZGV0ZWN0b3IucGFpcnMsXG4gICAgICAgICAgICBib2RpZXMgPSBkZXRlY3Rvci5ib2RpZXMsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgY2FuQ29sbGlkZSA9IERldGVjdG9yLmNhbkNvbGxpZGUsXG4gICAgICAgICAgICBjb2xsaWRlcyA9IENvbGxpc2lvbi5jb2xsaWRlcyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGJvZGllcy5zb3J0KERldGVjdG9yLl9jb21wYXJlQm91bmRzWCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgYm91bmRzQSA9IGJvZHlBLmJvdW5kcyxcbiAgICAgICAgICAgICAgICBib3VuZFhNYXggPSBib2R5QS5ib3VuZHMubWF4LngsXG4gICAgICAgICAgICAgICAgYm91bmRZTWF4ID0gYm9keUEuYm91bmRzLm1heC55LFxuICAgICAgICAgICAgICAgIGJvdW5kWU1pbiA9IGJvZHlBLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QVN0YXRpYyA9IGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcsXG4gICAgICAgICAgICAgICAgcGFydHNBTGVuZ3RoID0gYm9keUEucGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcnRzQVNpbmdsZSA9IHBhcnRzQUxlbmd0aCA9PT0gMTtcblxuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBib2RpZXNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5QiA9IGJvZGllc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzQiA9IGJvZHlCLmJvdW5kcztcblxuICAgICAgICAgICAgICAgIGlmIChib3VuZHNCLm1pbi54ID4gYm91bmRYTWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChib3VuZFlNYXggPCBib3VuZHNCLm1pbi55IHx8IGJvdW5kWU1pbiA+IGJvdW5kc0IubWF4LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlBU3RhdGljICYmIChib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNhbkNvbGxpZGUoYm9keUEuY29sbGlzaW9uRmlsdGVyLCBib2R5Qi5jb2xsaXNpb25GaWx0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJ0c0JMZW5ndGggPSBib2R5Qi5wYXJ0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydHNBU2luZ2xlICYmIHBhcnRzQkxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gY29sbGlkZXMoYm9keUEsIGJvZHlCLCBwYWlycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydHNBU3RhcnQgPSBwYXJ0c0FMZW5ndGggPiAxID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0c0JTdGFydCA9IHBhcnRzQkxlbmd0aCA+IDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBwYXJ0c0FTdGFydDsgayA8IHBhcnRzQUxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBib2R5QS5wYXJ0c1trXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZHNBID0gcGFydEEuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gcGFydHNCU3RhcnQ7IHogPCBwYXJ0c0JMZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IGJvZHlCLnBhcnRzW3pdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZHNCID0gcGFydEIuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kc0EubWluLnggPiBib3VuZHNCLm1heC54IHx8IGJvdW5kc0EubWF4LnggPCBib3VuZHNCLm1pbi54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGJvdW5kc0EubWF4LnkgPCBib3VuZHNCLm1pbi55IHx8IGJvdW5kc0EubWluLnkgPiBib3VuZHNCLm1heC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaWRlcyhwYXJ0QSwgcGFydEIsIHBhaXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggc3VwcGxpZWQgY29sbGlzaW9uIGZpbHRlcnMgd2lsbCBhbGxvdyBhIGNvbGxpc2lvbiB0byBvY2N1ci5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIGNhbkNvbGxpZGVcbiAgICAgKiBAcGFyYW0ge30gZmlsdGVyQVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJCXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIGNvbGxpc2lvbiBjYW4gb2NjdXJcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jYW5Db2xsaWRlID0gZnVuY3Rpb24oZmlsdGVyQSwgZmlsdGVyQikge1xuICAgICAgICBpZiAoZmlsdGVyQS5ncm91cCA9PT0gZmlsdGVyQi5ncm91cCAmJiBmaWx0ZXJBLmdyb3VwICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckEuZ3JvdXAgPiAwO1xuXG4gICAgICAgIHJldHVybiAoZmlsdGVyQS5tYXNrICYgZmlsdGVyQi5jYXRlZ29yeSkgIT09IDAgJiYgKGZpbHRlckIubWFzayAmIGZpbHRlckEuY2F0ZWdvcnkpICE9PSAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB1c2VkIGluIHRoZSBicm9hZHBoYXNlIGFsZ29yaXRobS5cbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgZGVsdGEgb2YgdGhlIGJvZGllcyBib3VuZHMgb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgX3NvcnRDb21wYXJlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaWduZWQgZGVsdGEgdXNlZCBmb3Igc29ydGluZ1xuICAgICAqL1xuICAgIERldGVjdG9yLl9jb21wYXJlQm91bmRzWCA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4gYm9keUEuYm91bmRzLm1pbi54IC0gYm9keUIuYm91bmRzLm1pbi54O1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBhcnJheSBvZiBgTWF0dGVyLkJvZHlgIGJldHdlZW4gd2hpY2ggdGhlIGRldGVjdG9yIGZpbmRzIGNvbGxpc2lvbnMuXG4gICAgICogXG4gICAgICogX05vdGU6XyBUaGUgb3JkZXIgb2YgYm9kaWVzIGluIHRoaXMgYXJyYXkgX2lzIG5vdCBmaXhlZF8gYW5kIHdpbGwgYmUgY29udGludWFsbHkgbWFuYWdlZCBieSB0aGUgZGV0ZWN0b3IuXG4gICAgICogQHByb3BlcnR5IGJvZGllc1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbC4gQSBgTWF0dGVyLlBhaXJzYCBvYmplY3QgZnJvbSB3aGljaCBwcmV2aW91cyBjb2xsaXNpb24gb2JqZWN0cyBtYXkgYmUgcmV1c2VkLiBJbnRlbmRlZCBmb3IgaW50ZXJuYWwgYE1hdHRlci5FbmdpbmVgIHVzYWdlLlxuICAgICAqIEBwcm9wZXJ0eSBwYWlyc1xuICAgICAqIEB0eXBlIHtwYWlyc3xudWxsfVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Nb3VzZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgbW91c2UgaW5wdXRzLlxuKlxuKiBAY2xhc3MgTW91c2VcbiovXG5cbnZhciBNb3VzZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1vdXNlIGlucHV0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge21vdXNlfSBBIG5ldyBtb3VzZVxuICAgICAqL1xuICAgIE1vdXNlLmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0ge307XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBDb21tb24ubG9nKCdNb3VzZS5jcmVhdGU6IGVsZW1lbnQgd2FzIHVuZGVmaW5lZCwgZGVmYXVsdGluZyB0byBkb2N1bWVudC5ib2R5JywgJ3dhcm4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbW91c2UuZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbW91c2UuYWJzb2x1dGUgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5zY2FsZSA9IHsgeDogMSwgeTogMSB9O1xuICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gMDtcbiAgICAgICAgbW91c2UuYnV0dG9uID0gLTE7XG4gICAgICAgIG1vdXNlLnBpeGVsUmF0aW8gPSBwYXJzZUludChtb3VzZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1waXhlbC1yYXRpbycpLCAxMCkgfHwgMTtcblxuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMgPSB7XG4gICAgICAgICAgICBtb3VzZW1vdmU6IG51bGwsXG4gICAgICAgICAgICBtb3VzZWRvd246IG51bGwsXG4gICAgICAgICAgICBtb3VzZXVwOiBudWxsLFxuICAgICAgICAgICAgbW91c2V3aGVlbDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2Vtb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSBldmVudC5idXR0b247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbi55ID0gbW91c2UucG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNldXAgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueSA9IG1vdXNlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IGV2ZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vdXNlLm1vdXNld2hlZWwgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgTW91c2Uuc2V0RWxlbWVudChtb3VzZSwgbW91c2UuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IHRoZSBtb3VzZSBpcyBib3VuZCB0byAoYW5kIHJlbGF0aXZlIHRvKS5cbiAgICAgKiBAbWV0aG9kIHNldEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRFbGVtZW50ID0gZnVuY3Rpb24obW91c2UsIGVsZW1lbnQpIHtcbiAgICAgICAgbW91c2UuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZS5tb3VzZW1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlLm1vdXNlZG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlLm1vdXNldXApO1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2UubW91c2V3aGVlbCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBtb3VzZS5tb3VzZXdoZWVsKTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdXNlLm1vdXNlbW92ZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG1vdXNlLm1vdXNlZG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBtb3VzZS5tb3VzZXVwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjYXB0dXJlZCBzb3VyY2UgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgY2xlYXJTb3VyY2VFdmVudHNcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqL1xuICAgIE1vdXNlLmNsZWFyU291cmNlRXZlbnRzID0gZnVuY3Rpb24obW91c2UpIHtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXdoZWVsID0gbnVsbDtcbiAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vdXNlIHBvc2l0aW9uIG9mZnNldC5cbiAgICAgKiBAbWV0aG9kIHNldE9mZnNldFxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IG9mZnNldFxuICAgICAqL1xuICAgIE1vdXNlLnNldE9mZnNldCA9IGZ1bmN0aW9uKG1vdXNlLCBvZmZzZXQpIHtcbiAgICAgICAgbW91c2Uub2Zmc2V0LnggPSBvZmZzZXQueDtcbiAgICAgICAgbW91c2Uub2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiBzY2FsZS5cbiAgICAgKiBAbWV0aG9kIHNldFNjYWxlXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gc2NhbGVcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRTY2FsZSA9IGZ1bmN0aW9uKG1vdXNlLCBzY2FsZSkge1xuICAgICAgICBtb3VzZS5zY2FsZS54ID0gc2NhbGUueDtcbiAgICAgICAgbW91c2Uuc2NhbGUueSA9IHNjYWxlLnk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIGFuIGVsZW1lbnQgZ2l2ZW4gYSBzY3JlZW4gcGl4ZWwgcmF0aW8uXG4gICAgICogQG1ldGhvZCBfZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZXZlbnRcbiAgICAgKiBAcGFyYW0ge30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvXG4gICAgICogQHJldHVybiB7fVxuICAgICAqL1xuICAgIE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbihldmVudCwgZWxlbWVudCwgcGl4ZWxSYXRpbykge1xuICAgICAgICB2YXIgZWxlbWVudEJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICByb290Tm9kZSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLFxuICAgICAgICAgICAgc2Nyb2xsWCA9ICh3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiByb290Tm9kZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsWSA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiByb290Tm9kZS5zY3JvbGxUb3AsXG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICB4LCB5O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgIHggPSB0b3VjaGVzWzBdLnBhZ2VYIC0gZWxlbWVudEJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgPSB0b3VjaGVzWzBdLnBhZ2VZIC0gZWxlbWVudEJvdW5kcy50b3AgLSBzY3JvbGxZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYIC0gZWxlbWVudEJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgPSBldmVudC5wYWdlWSAtIGVsZW1lbnRCb3VuZHMudG9wIC0gc2Nyb2xsWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgeDogeCAvIChlbGVtZW50LmNsaWVudFdpZHRoIC8gKGVsZW1lbnQud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCkgKiBwaXhlbFJhdGlvKSxcbiAgICAgICAgICAgIHk6IHkgLyAoZWxlbWVudC5jbGllbnRIZWlnaHQgLyAoZWxlbWVudC5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQpICogcGl4ZWxSYXRpbylcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlBsdWdpbmAgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3IgcmVnaXN0ZXJpbmcgYW5kIGluc3RhbGxpbmcgcGx1Z2lucyBvbiBtb2R1bGVzLlxuKlxuKiBAY2xhc3MgUGx1Z2luXG4qL1xuXG52YXIgUGx1Z2luID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGx1Z2luO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgUGx1Z2luLl9yZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgcGx1Z2luIG9iamVjdCBzbyBpdCBjYW4gYmUgcmVzb2x2ZWQgbGF0ZXIgYnkgbmFtZS5cbiAgICAgKiBAbWV0aG9kIHJlZ2lzdGVyXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luIHRvIHJlZ2lzdGVyLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHBsdWdpbi5cbiAgICAgKi9cbiAgICBQbHVnaW4ucmVnaXN0ZXIgPSBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgaWYgKCFQbHVnaW4uaXNQbHVnaW4ocGx1Z2luKSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2RvZXMgbm90IGltcGxlbWVudCBhbGwgcmVxdWlyZWQgZmllbGRzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsdWdpbi5uYW1lIGluIFBsdWdpbi5fcmVnaXN0cnkpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RlcmVkID0gUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0sXG4gICAgICAgICAgICAgICAgcGx1Z2luVmVyc2lvbiA9IFBsdWdpbi52ZXJzaW9uUGFyc2UocGx1Z2luLnZlcnNpb24pLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkVmVyc2lvbiA9IFBsdWdpbi52ZXJzaW9uUGFyc2UocmVnaXN0ZXJlZC52ZXJzaW9uKS5udW1iZXI7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW5WZXJzaW9uID4gcmVnaXN0ZXJlZFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhyZWdpc3RlcmVkKSwgJ3dhcyB1cGdyYWRlZCB0bycsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgICAgICBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luVmVyc2lvbiA8IHJlZ2lzdGVyZWRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocmVnaXN0ZXJlZCksICdjYW4gbm90IGJlIGRvd25ncmFkZWQgdG8nLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbiAhPT0gcmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgdG8gZGlmZmVyZW50IHBsdWdpbiBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdID0gcGx1Z2luO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBsdWdpbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgYSBkZXBlbmRlbmN5IHRvIGEgcGx1Z2luIG9iamVjdCBmcm9tIHRoZSByZWdpc3RyeSBpZiBpdCBleGlzdHMuIFxuICAgICAqIFRoZSBgZGVwZW5kZW5jeWAgbWF5IGNvbnRhaW4gYSB2ZXJzaW9uLCBidXQgb25seSB0aGUgbmFtZSBtYXR0ZXJzIHdoZW4gcmVzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcmVzb2x2ZVxuICAgICAqIEBwYXJhbSBkZXBlbmRlbmN5IHtzdHJpbmd9IFRoZSBkZXBlbmRlbmN5LlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHBsdWdpbiBpZiByZXNvbHZlZCwgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICAgICAqL1xuICAgIFBsdWdpbi5yZXNvbHZlID0gZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICByZXR1cm4gUGx1Z2luLl9yZWdpc3RyeVtQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKGRlcGVuZGVuY3kpLm5hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJldHR5IHByaW50ZWQgcGx1Z2luIG5hbWUgYW5kIHZlcnNpb24uXG4gICAgICogQG1ldGhvZCB0b1N0cmluZ1xuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbi5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFByZXR0eSBwcmludGVkIHBsdWdpbiBuYW1lIGFuZCB2ZXJzaW9uLlxuICAgICAqL1xuICAgIFBsdWdpbi50b1N0cmluZyA9IGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHBsdWdpbiA9PT0gJ3N0cmluZycgPyBwbHVnaW4gOiAocGx1Z2luLm5hbWUgfHwgJ2Fub255bW91cycpICsgJ0AnICsgKHBsdWdpbi52ZXJzaW9uIHx8IHBsdWdpbi5yYW5nZSB8fCAnMC4wLjAnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBtZWV0cyB0aGUgbWluaW11bSBzdGFuZGFyZCB0byBiZSBjb25zaWRlcmVkIGEgcGx1Z2luLlxuICAgICAqIFRoaXMgbWVhbnMgaXQgbXVzdCBkZWZpbmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAqIC0gYG5hbWVgXG4gICAgICogLSBgdmVyc2lvbmBcbiAgICAgKiAtIGBpbnN0YWxsYFxuICAgICAqIEBtZXRob2QgaXNQbHVnaW5cbiAgICAgKiBAcGFyYW0gb2JqIHt9IFRoZSBvYmogdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBjYW4gYmUgY29uc2lkZXJlZCBhIHBsdWdpbiBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNQbHVnaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoubmFtZSAmJiBvYmoudmVyc2lvbiAmJiBvYmouaW5zdGFsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW4gYG5hbWVgIGJlZW4gaW5zdGFsbGVkIG9uIGBtb2R1bGVgLlxuICAgICAqIEBtZXRob2QgaXNVc2VkXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBwbHVnaW4gbmFtZS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgYSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW4gYG5hbWVgIGJlZW4gaW5zdGFsbGVkIG9uIGBtb2R1bGVgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNVc2VkID0gZnVuY3Rpb24obW9kdWxlLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudXNlZC5pbmRleE9mKG5hbWUpID4gLTE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGBwbHVnaW4uZm9yYCBpcyBhcHBsaWNhYmxlIHRvIGBtb2R1bGVgIGJ5IGNvbXBhcmluZyBhZ2FpbnN0IGBtb2R1bGUubmFtZWAgYW5kIGBtb2R1bGUudmVyc2lvbmAuXG4gICAgICogSWYgYHBsdWdpbi5mb3JgIGlzIG5vdCBzcGVjaWZpZWQgdGhlbiBpdCBpcyBhc3N1bWVkIHRvIGJlIGFwcGxpY2FibGUuXG4gICAgICogVGhlIHZhbHVlIG9mIGBwbHVnaW4uZm9yYCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBAbWV0aG9kIGlzRm9yXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luLlxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgYHBsdWdpbi5mb3JgIGlzIGFwcGxpY2FibGUgdG8gYG1vZHVsZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc0ZvciA9IGZ1bmN0aW9uKHBsdWdpbiwgbW9kdWxlKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSBwbHVnaW4uZm9yICYmIFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UocGx1Z2luLmZvcik7XG4gICAgICAgIHJldHVybiAhcGx1Z2luLmZvciB8fCAobW9kdWxlLm5hbWUgPT09IHBhcnNlZC5uYW1lICYmIFBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzKG1vZHVsZS52ZXJzaW9uLCBwYXJzZWQucmFuZ2UpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5zdGFsbHMgdGhlIHBsdWdpbnMgYnkgY2FsbGluZyBgcGx1Z2luLmluc3RhbGxgIG9uIGVhY2ggcGx1Z2luIHNwZWNpZmllZCBpbiBgcGx1Z2luc2AgaWYgcGFzc2VkLCBvdGhlcndpc2UgYG1vZHVsZS51c2VzYC5cbiAgICAgKiBGb3IgaW5zdGFsbGluZyBwbHVnaW5zIG9uIGBNYXR0ZXJgIHNlZSB0aGUgY29udmVuaWVuY2UgZnVuY3Rpb24gYE1hdHRlci51c2VgLlxuICAgICAqIFBsdWdpbnMgbWF5IGJlIHNwZWNpZmllZCBlaXRoZXIgYnkgdGhlaXIgbmFtZSBvciBhIHJlZmVyZW5jZSB0byB0aGUgcGx1Z2luIG9iamVjdC5cbiAgICAgKiBQbHVnaW5zIHRoZW1zZWx2ZXMgbWF5IHNwZWNpZnkgZnVydGhlciBkZXBlbmRlbmNpZXMsIGJ1dCBlYWNoIHBsdWdpbiBpcyBpbnN0YWxsZWQgb25seSBvbmNlLlxuICAgICAqIE9yZGVyIGlzIGltcG9ydGFudCwgYSB0b3BvbG9naWNhbCBzb3J0IGlzIHBlcmZvcm1lZCB0byBmaW5kIHRoZSBiZXN0IHJlc3VsdGluZyBvcmRlciBvZiBpbnN0YWxsYXRpb24uXG4gICAgICogVGhpcyBzb3J0aW5nIGF0dGVtcHRzIHRvIHNhdGlzZnkgZXZlcnkgZGVwZW5kZW5jeSdzIHJlcXVlc3RlZCBvcmRlcmluZywgYnV0IG1heSBub3QgYmUgZXhhY3QgaW4gYWxsIGNhc2VzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gbG9ncyB0aGUgcmVzdWx0aW5nIHN0YXR1cyBvZiBlYWNoIGRlcGVuZGVuY3kgaW4gdGhlIGNvbnNvbGUsIGFsb25nIHdpdGggYW55IHdhcm5pbmdzLlxuICAgICAqIC0gQSBncmVlbiB0aWNrIOKchSBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IHdhcyByZXNvbHZlZCBhbmQgaW5zdGFsbGVkLlxuICAgICAqIC0gQW4gb3JhbmdlIGRpYW1vbmQg8J+UtiBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IHdhcyByZXNvbHZlZCBidXQgYSB3YXJuaW5nIHdhcyB0aHJvd24gZm9yIGl0IG9yIG9uZSBpZiBpdHMgZGVwZW5kZW5jaWVzLlxuICAgICAqIC0gQSByZWQgY3Jvc3Mg4p2MIGluZGljYXRlcyBhIGRlcGVuZGVuY3kgY291bGQgbm90IGJlIHJlc29sdmVkLlxuICAgICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBtb2R1bGUgdW5sZXNzIHlvdSBpbnRlbmQgdG8gbWFudWFsbHkgY29udHJvbCBpbnN0YWxsYXRpb24gb3JkZXIuXG4gICAgICogQG1ldGhvZCB1c2VcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUgaW5zdGFsbCBwbHVnaW5zIG9uLlxuICAgICAqIEBwYXJhbSBbcGx1Z2lucz1tb2R1bGUudXNlc10ge30gVGhlIHBsdWdpbnMgdG8gaW5zdGFsbCBvbiBtb2R1bGUgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byBgbW9kdWxlLnVzZXNgKS5cbiAgICAgKi9cbiAgICBQbHVnaW4udXNlID0gZnVuY3Rpb24obW9kdWxlLCBwbHVnaW5zKSB7XG4gICAgICAgIG1vZHVsZS51c2VzID0gKG1vZHVsZS51c2VzIHx8IFtdKS5jb25jYXQocGx1Z2lucyB8fCBbXSk7XG5cbiAgICAgICAgaWYgKG1vZHVsZS51c2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKG1vZHVsZSksICdkb2VzIG5vdCBzcGVjaWZ5IGFueSBkZXBlbmRlbmNpZXMgdG8gaW5zdGFsbC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXBlbmRlbmNpZXMgPSBQbHVnaW4uZGVwZW5kZW5jaWVzKG1vZHVsZSksXG4gICAgICAgICAgICBzb3J0ZWREZXBlbmRlbmNpZXMgPSBDb21tb24udG9wb2xvZ2ljYWxTb3J0KGRlcGVuZGVuY2llcyksXG4gICAgICAgICAgICBzdGF0dXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNvcnRlZERlcGVuZGVuY2llc1tpXSA9PT0gbW9kdWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBsdWdpbiA9IFBsdWdpbi5yZXNvbHZlKHNvcnRlZERlcGVuZGVuY2llc1tpXSk7XG5cbiAgICAgICAgICAgIGlmICghcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ+KdjCAnICsgc29ydGVkRGVwZW5kZW5jaWVzW2ldKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFBsdWdpbi5pc1VzZWQobW9kdWxlLCBwbHVnaW4ubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFQbHVnaW4uaXNGb3IocGx1Z2luLCBtb2R1bGUpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdpcyBmb3InLCBwbHVnaW4uZm9yLCAnYnV0IGluc3RhbGxlZCBvbicsIFBsdWdpbi50b1N0cmluZyhtb2R1bGUpICsgJy4nKTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaW5zdGFsbCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbnN0YWxsKG1vZHVsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnZG9lcyBub3Qgc3BlY2lmeSBhbiBpbnN0YWxsIGZ1bmN0aW9uLicpO1xuICAgICAgICAgICAgICAgIHBsdWdpbi5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5fd2FybmVkKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ/CflLYgJyArIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcGx1Z2luLl93YXJuZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfinIUgJyArIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kdWxlLnVzZWQucHVzaChwbHVnaW4ubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdHVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIENvbW1vbi5pbmZvKHN0YXR1cy5qb2luKCcgICcpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBmaW5kcyBhbGwgb2YgYSBtb2R1bGUncyBkZXBlbmRlbmNpZXMgYW5kIHJldHVybnMgYSBmbGF0IGRlcGVuZGVuY3kgZ3JhcGguXG4gICAgICogQG1ldGhvZCBkZXBlbmRlbmNpZXNcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBBIGRlcGVuZGVuY3kgZ3JhcGguXG4gICAgICovXG4gICAgUGx1Z2luLmRlcGVuZGVuY2llcyA9IGZ1bmN0aW9uKG1vZHVsZSwgdHJhY2tlZCkge1xuICAgICAgICB2YXIgcGFyc2VkQmFzZSA9IFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UobW9kdWxlKSxcbiAgICAgICAgICAgIG5hbWUgPSBwYXJzZWRCYXNlLm5hbWU7XG5cbiAgICAgICAgdHJhY2tlZCA9IHRyYWNrZWQgfHwge307XG5cbiAgICAgICAgaWYgKG5hbWUgaW4gdHJhY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kdWxlID0gUGx1Z2luLnJlc29sdmUobW9kdWxlKSB8fCBtb2R1bGU7XG5cbiAgICAgICAgdHJhY2tlZFtuYW1lXSA9IENvbW1vbi5tYXAobW9kdWxlLnVzZXMgfHwgW10sIGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIGlmIChQbHVnaW4uaXNQbHVnaW4oZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgICAgICBQbHVnaW4ucmVnaXN0ZXIoZGVwZW5kZW5jeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKGRlcGVuZGVuY3kpLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gUGx1Z2luLnJlc29sdmUoZGVwZW5kZW5jeSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNvbHZlZCAmJiAhUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMocmVzb2x2ZWQudmVyc2lvbiwgcGFyc2VkLnJhbmdlKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKFxuICAgICAgICAgICAgICAgICAgICAnUGx1Z2luLmRlcGVuZGVuY2llczonLCBQbHVnaW4udG9TdHJpbmcocmVzb2x2ZWQpLCAnZG9lcyBub3Qgc2F0aXNmeScsXG4gICAgICAgICAgICAgICAgICAgIFBsdWdpbi50b1N0cmluZyhwYXJzZWQpLCAndXNlZCBieScsIFBsdWdpbi50b1N0cmluZyhwYXJzZWRCYXNlKSArICcuJ1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlZC5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBtb2R1bGUuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKFxuICAgICAgICAgICAgICAgICAgICAnUGx1Z2luLmRlcGVuZGVuY2llczonLCBQbHVnaW4udG9TdHJpbmcoZGVwZW5kZW5jeSksICd1c2VkIGJ5JyxcbiAgICAgICAgICAgICAgICAgICAgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZEJhc2UpLCAnY291bGQgbm90IGJlIHJlc29sdmVkLidcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgbW9kdWxlLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkLm5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tlZFtuYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgUGx1Z2luLmRlcGVuZGVuY2llcyh0cmFja2VkW25hbWVdW2ldLCB0cmFja2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFja2VkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBkZXBlbmRlbmN5IHN0cmluZyBpbnRvIGl0cyBjb21wb25lbnRzLlxuICAgICAqIFRoZSBgZGVwZW5kZW5jeWAgaXMgYSBzdHJpbmcgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGBQbHVnaW4udmVyc2lvblBhcnNlYCBmb3IgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZm9ybWF0LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gaGFuZGxlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBhbHJlYWR5IHJlc29sdmVkIChlLmcuIGEgbW9kdWxlIG9iamVjdCkuXG4gICAgICogQG1ldGhvZCBkZXBlbmRlbmN5UGFyc2VcbiAgICAgKiBAcGFyYW0gZGVwZW5kZW5jeSB7c3RyaW5nfSBUaGUgZGVwZW5kZW5jeSBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBkZXBlbmRlbmN5IHBhcnNlZCBpbnRvIGl0cyBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UgPSBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgIGlmIChDb21tb24uaXNTdHJpbmcoZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL15bXFx3LV0rKEAoXFwqfFtcXF5+XT9cXGQrXFwuXFxkK1xcLlxcZCsoLVswLTlBLVphLXotK10rKT8pKT8kLztcblxuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QoZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLmRlcGVuZGVuY3lQYXJzZTonLCBkZXBlbmRlbmN5LCAnaXMgbm90IGEgdmFsaWQgZGVwZW5kZW5jeSBzdHJpbmcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzBdLFxuICAgICAgICAgICAgICAgIHJhbmdlOiBkZXBlbmRlbmN5LnNwbGl0KCdAJylbMV0gfHwgJyonXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kubmFtZSxcbiAgICAgICAgICAgIHJhbmdlOiBkZXBlbmRlbmN5LnJhbmdlIHx8IGRlcGVuZGVuY3kudmVyc2lvblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSB2ZXJzaW9uIHN0cmluZyBpbnRvIGl0cyBjb21wb25lbnRzLiAgXG4gICAgICogVmVyc2lvbnMgYXJlIHN0cmljdGx5IG9mIHRoZSBmb3JtYXQgYHgueS56YCAoYXMgaW4gW3NlbXZlcl0oaHR0cDovL3NlbXZlci5vcmcvKSkuXG4gICAgICogVmVyc2lvbnMgbWF5IG9wdGlvbmFsbHkgaGF2ZSBhIHByZXJlbGVhc2UgdGFnIGluIHRoZSBmb3JtYXQgYHgueS56LWFscGhhYC5cbiAgICAgKiBSYW5nZXMgYXJlIGEgc3RyaWN0IHN1YnNldCBvZiBbbnBtIHJhbmdlc10oaHR0cHM6Ly9kb2NzLm5wbWpzLmNvbS9taXNjL3NlbXZlciNhZHZhbmNlZC1yYW5nZS1zeW50YXgpLlxuICAgICAqIE9ubHkgdGhlIGZvbGxvd2luZyByYW5nZSB0eXBlcyBhcmUgc3VwcG9ydGVkOlxuICAgICAqIC0gVGlsZGUgcmFuZ2VzIGUuZy4gYH4xLjIuM2BcbiAgICAgKiAtIENhcmV0IHJhbmdlcyBlLmcuIGBeMS4yLjNgXG4gICAgICogLSBHcmVhdGVyIHRoYW4gcmFuZ2VzIGUuZy4gYD4xLjIuM2BcbiAgICAgKiAtIEdyZWF0ZXIgdGhhbiBvciBlcXVhbCByYW5nZXMgZS5nLiBgPj0xLjIuM2BcbiAgICAgKiAtIEV4YWN0IHZlcnNpb24gZS5nLiBgMS4yLjNgXG4gICAgICogLSBBbnkgdmVyc2lvbiBgKmBcbiAgICAgKiBAbWV0aG9kIHZlcnNpb25QYXJzZVxuICAgICAqIEBwYXJhbSByYW5nZSB7c3RyaW5nfSBUaGUgdmVyc2lvbiBzdHJpbmcuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgdmVyc2lvbiByYW5nZSBwYXJzZWQgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBQbHVnaW4udmVyc2lvblBhcnNlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihcXCopfChcXF58fnw+PXw+KT9cXHMqKChcXGQrKVxcLihcXGQrKVxcLihcXGQrKSkoLVswLTlBLVphLXotK10rKT8kLztcblxuICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChyYW5nZSkpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udmVyc2lvblBhcnNlOicsIHJhbmdlLCAnaXMgbm90IGEgdmFsaWQgdmVyc2lvbiBvciByYW5nZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdHRlcm4uZXhlYyhyYW5nZSk7XG4gICAgICAgIHZhciBtYWpvciA9IE51bWJlcihwYXJ0c1s0XSk7XG4gICAgICAgIHZhciBtaW5vciA9IE51bWJlcihwYXJ0c1s1XSk7XG4gICAgICAgIHZhciBwYXRjaCA9IE51bWJlcihwYXJ0c1s2XSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmFuZ2U6IEJvb2xlYW4ocGFydHNbMV0gfHwgcGFydHNbMl0pLFxuICAgICAgICAgICAgdmVyc2lvbjogcGFydHNbM10sXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgICAgICBvcGVyYXRvcjogcGFydHNbMV0gfHwgcGFydHNbMl0gfHwgJycsXG4gICAgICAgICAgICBtYWpvcjogbWFqb3IsXG4gICAgICAgICAgICBtaW5vcjogbWlub3IsXG4gICAgICAgICAgICBwYXRjaDogcGF0Y2gsXG4gICAgICAgICAgICBwYXJ0czogW21ham9yLCBtaW5vciwgcGF0Y2hdLFxuICAgICAgICAgICAgcHJlcmVsZWFzZTogcGFydHNbN10sXG4gICAgICAgICAgICBudW1iZXI6IG1ham9yICogMWU4ICsgbWlub3IgKiAxZTQgKyBwYXRjaFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIHRoZSBnaXZlbiBgcmFuZ2VgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBJZiBhIHZlcnNpb24gb3IgcmFuZ2UgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBhbnkgdmVyc2lvbiAoYCpgKSBpcyBhc3N1bWVkIHRvIHNhdGlzZnkuXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uU2F0aXNmaWVzXG4gICAgICogQHBhcmFtIHZlcnNpb24ge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEBwYXJhbSByYW5nZSB7c3RyaW5nfSBUaGUgcmFuZ2Ugc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIGByYW5nZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzID0gZnVuY3Rpb24odmVyc2lvbiwgcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSByYW5nZSB8fCAnKic7XG5cbiAgICAgICAgdmFyIHIgPSBQbHVnaW4udmVyc2lvblBhcnNlKHJhbmdlKSxcbiAgICAgICAgICAgIHYgPSBQbHVnaW4udmVyc2lvblBhcnNlKHZlcnNpb24pO1xuXG4gICAgICAgIGlmIChyLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnKicgfHwgdmVyc2lvbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5udW1iZXIgPiByLm51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5udW1iZXIgPj0gci5udW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnficpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5tYWpvciA9PT0gci5tYWpvciAmJiB2Lm1pbm9yID09PSByLm1pbm9yICYmIHYucGF0Y2ggPj0gci5wYXRjaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICdeJykge1xuICAgICAgICAgICAgICAgIGlmIChyLm1ham9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5tYWpvciA9PT0gci5tYWpvciAmJiB2Lm51bWJlciA+PSByLm51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoci5taW5vciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYubWlub3IgPT09IHIubWlub3IgJiYgdi5wYXRjaCA+PSByLnBhdGNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2LnBhdGNoID09PSByLnBhdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPT09IHJhbmdlIHx8IHZlcnNpb24gPT09ICcqJztcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbnRhY3RgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBjb250YWN0cy5cbipcbiogQGNsYXNzIENvbnRhY3RcbiovXG5cbnZhciBDb250YWN0ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb250YWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0ZXh9IHZlcnRleFxuICAgICAqIEByZXR1cm4ge2NvbnRhY3R9IEEgbmV3IGNvbnRhY3RcbiAgICAgKi9cbiAgICBDb250YWN0LmNyZWF0ZSA9IGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICBub3JtYWxJbXB1bHNlOiAwLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2U6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkVuZ2luZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgZW5naW5lcy5cbiogQW4gZW5naW5lIGlzIGEgY29udHJvbGxlciB0aGF0IG1hbmFnZXMgdXBkYXRpbmcgdGhlIHNpbXVsYXRpb24gb2YgdGhlIHdvcmxkLlxuKiBTZWUgYE1hdHRlci5SdW5uZXJgIGZvciBhbiBvcHRpb25hbCBnYW1lIGxvb3AgdXRpbGl0eS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEVuZ2luZVxuKi9cblxudmFyIEVuZ2luZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZ2luZTtcblxudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xudmFyIERldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgUGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZW5naW5lLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbkl0ZXJhdGlvbnM6IDYsXG4gICAgICAgICAgICB2ZWxvY2l0eUl0ZXJhdGlvbnM6IDQsXG4gICAgICAgICAgICBjb25zdHJhaW50SXRlcmF0aW9uczogMixcbiAgICAgICAgICAgIGVuYWJsZVNsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgZ3Jhdml0eToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgICAgICBzY2FsZTogMC4wMDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1pbmc6IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IDAsXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgICAgIGxhc3REZWx0YTogMCxcbiAgICAgICAgICAgICAgICBsYXN0RWxhcHNlZDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlbmdpbmUgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBlbmdpbmUud29ybGQgPSBvcHRpb25zLndvcmxkIHx8IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1dvcmxkJyB9KTtcbiAgICAgICAgZW5naW5lLnBhaXJzID0gb3B0aW9ucy5wYWlycyB8fCBQYWlycy5jcmVhdGUoKTtcbiAgICAgICAgZW5naW5lLmRldGVjdG9yID0gb3B0aW9ucy5kZXRlY3RvciB8fCBEZXRlY3Rvci5jcmVhdGUoKTtcblxuICAgICAgICAvLyBmb3IgdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICAgIGVuZ2luZS5ncmlkID0geyBidWNrZXRzOiBbXSB9O1xuICAgICAgICBlbmdpbmUud29ybGQuZ3Jhdml0eSA9IGVuZ2luZS5ncmF2aXR5O1xuICAgICAgICBlbmdpbmUuYnJvYWRwaGFzZSA9IGVuZ2luZS5ncmlkO1xuICAgICAgICBlbmdpbmUubWV0cmljcyA9IHt9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNpbXVsYXRpb24gZm9yd2FyZCBpbiB0aW1lIGJ5IGBkZWx0YWAgbWlsbGlzZWNvbmRzLlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVVcGRhdGVgIGFuZCBgYWZ0ZXJVcGRhdGVgIGV2ZW50cy5cbiAgICAgKiBUcmlnZ2VycyBgY29sbGlzaW9uU3RhcnRgLCBgY29sbGlzaW9uQWN0aXZlYCBhbmQgYGNvbGxpc2lvbkVuZGAgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9MTYuNjY2XVxuICAgICAqL1xuICAgIEVuZ2luZS51cGRhdGUgPSBmdW5jdGlvbihlbmdpbmUsIGRlbHRhKSB7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBDb21tb24ubm93KCk7XG5cbiAgICAgICAgdmFyIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgZGV0ZWN0b3IgPSBlbmdpbmUuZGV0ZWN0b3IsXG4gICAgICAgICAgICBwYWlycyA9IGVuZ2luZS5wYWlycyxcbiAgICAgICAgICAgIHRpbWluZyA9IGVuZ2luZS50aW1pbmcsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSB0aW1pbmcudGltZXN0YW1wLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBkZWx0YSA9IHR5cGVvZiBkZWx0YSAhPT0gJ3VuZGVmaW5lZCcgPyBkZWx0YSA6IENvbW1vbi5fYmFzZURlbHRhO1xuICAgICAgICBkZWx0YSAqPSB0aW1pbmcudGltZVNjYWxlO1xuXG4gICAgICAgIC8vIGluY3JlbWVudCB0aW1lc3RhbXBcbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcCArPSBkZWx0YTtcbiAgICAgICAgdGltaW5nLmxhc3REZWx0YSA9IGRlbHRhO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBldmVudCBvYmplY3RcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1pbmcudGltZXN0YW1wLFxuICAgICAgICAgICAgZGVsdGE6IGRlbHRhXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGdldCBhbGwgYm9kaWVzIGFuZCBhbGwgY29uc3RyYWludHMgaW4gdGhlIHdvcmxkXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKTtcblxuICAgICAgICAvLyBpZiB0aGUgd29ybGQgaGFzIGNoYW5nZWRcbiAgICAgICAgaWYgKHdvcmxkLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZGV0ZWN0b3IgYm9kaWVzXG4gICAgICAgICAgICBEZXRlY3Rvci5zZXRCb2RpZXMoZGV0ZWN0b3IsIGFsbEJvZGllcyk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBjb21wb3NpdGUgbW9kaWZpZWQgZmxhZ3NcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZCh3b3JsZCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBzbGVlcGluZyBpZiBlbmFibGVkXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy51cGRhdGUoYWxsQm9kaWVzLCBkZWx0YSk7XG5cbiAgICAgICAgLy8gYXBwbHkgZ3Jhdml0eSB0byBhbGwgYm9kaWVzXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5KGFsbEJvZGllcywgZW5naW5lLmdyYXZpdHkpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgYm9keSBwb3NpdGlvbiBhbmQgcm90YXRpb24gYnkgaW50ZWdyYXRpb25cbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgRW5naW5lLl9ib2RpZXNVcGRhdGUoYWxsQm9kaWVzLCBkZWx0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGNvbnN0cmFpbnRzIChmaXJzdCBwYXNzKVxuICAgICAgICBDb25zdHJhaW50LnByZVNvbHZlQWxsKGFsbEJvZGllcyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUuY29uc3RyYWludEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZUFsbChhbGxDb25zdHJhaW50cywgZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gZmluZCBhbGwgY29sbGlzaW9uc1xuICAgICAgICBkZXRlY3Rvci5wYWlycyA9IGVuZ2luZS5wYWlycztcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBEZXRlY3Rvci5jb2xsaXNpb25zKGRldGVjdG9yKTtcblxuICAgICAgICAvLyB1cGRhdGUgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIFBhaXJzLnVwZGF0ZShwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMocGFpcnMubGlzdCk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBjb2xsaXNpb24gZXZlbnRzXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uU3RhcnQnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25TdGFydCB9KTtcblxuICAgICAgICAvLyBpdGVyYXRpdmVseSByZXNvbHZlIHBvc2l0aW9uIGJldHdlZW4gY29sbGlzaW9uc1xuICAgICAgICB2YXIgcG9zaXRpb25EYW1waW5nID0gQ29tbW9uLmNsYW1wKDIwIC8gZW5naW5lLnBvc2l0aW9uSXRlcmF0aW9ucywgMCwgMSk7XG4gICAgICAgIFxuICAgICAgICBSZXNvbHZlci5wcmVTb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLnBvc2l0aW9uSXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBSZXNvbHZlci5zb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QsIGRlbHRhLCBwb3NpdGlvbkRhbXBpbmcpO1xuICAgICAgICB9XG4gICAgICAgIFJlc29sdmVyLnBvc3RTb2x2ZVBvc2l0aW9uKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoc2Vjb25kIHBhc3MpXG4gICAgICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwoYWxsQm9kaWVzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlQWxsKGFsbENvbnN0cmFpbnRzLCBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwoYWxsQm9kaWVzKTtcblxuICAgICAgICAvLyBpdGVyYXRpdmVseSByZXNvbHZlIHZlbG9jaXR5IGJldHdlZW4gY29sbGlzaW9uc1xuICAgICAgICBSZXNvbHZlci5wcmVTb2x2ZVZlbG9jaXR5KHBhaXJzLmxpc3QpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLnZlbG9jaXR5SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBSZXNvbHZlci5zb2x2ZVZlbG9jaXR5KHBhaXJzLmxpc3QsIGRlbHRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBib2R5IHNwZWVkIGFuZCB2ZWxvY2l0eSBwcm9wZXJ0aWVzXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlVmVsb2NpdGllcyhhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIHRyaWdnZXIgY29sbGlzaW9uIGV2ZW50c1xuICAgICAgICBpZiAocGFpcnMuY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25BY3RpdmUnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25BY3RpdmUgfSk7XG5cbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uRW5kJywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uRW5kIH0pO1xuXG4gICAgICAgIC8vIGNsZWFyIGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgRW5naW5lLl9ib2RpZXNDbGVhckZvcmNlcyhhbGxCb2RpZXMpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2FmdGVyVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGxvZyB0aGUgdGltZSBlbGFwc2VkIGNvbXB1dGluZyB0aGlzIHVwZGF0ZVxuICAgICAgICBlbmdpbmUudGltaW5nLmxhc3RFbGFwc2VkID0gQ29tbW9uLm5vdygpIC0gc3RhcnRUaW1lO1xuXG4gICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBNZXJnZXMgdHdvIGVuZ2luZXMgYnkga2VlcGluZyB0aGUgY29uZmlndXJhdGlvbiBvZiBgZW5naW5lQWAgYnV0IHJlcGxhY2luZyB0aGUgd29ybGQgd2l0aCB0aGUgb25lIGZyb20gYGVuZ2luZUJgLlxuICAgICAqIEBtZXRob2QgbWVyZ2VcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lQVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVCXG4gICAgICovXG4gICAgRW5naW5lLm1lcmdlID0gZnVuY3Rpb24oZW5naW5lQSwgZW5naW5lQikge1xuICAgICAgICBDb21tb24uZXh0ZW5kKGVuZ2luZUEsIGVuZ2luZUIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGVuZ2luZUIud29ybGQpIHtcbiAgICAgICAgICAgIGVuZ2luZUEud29ybGQgPSBlbmdpbmVCLndvcmxkO1xuXG4gICAgICAgICAgICBFbmdpbmUuY2xlYXIoZW5naW5lQSk7XG5cbiAgICAgICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZUEud29ybGQpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYm9keS5pZCA9IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGVuZ2luZSBwYWlycyBhbmQgZGV0ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY2xlYXIgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICAgICAgUGFpcnMuY2xlYXIoZW5naW5lLnBhaXJzKTtcbiAgICAgICAgRGV0ZWN0b3IuY2xlYXIoZW5naW5lLmRldGVjdG9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSBgYm9keS5mb3JjZWAgYW5kIGBib2R5LnRvcnF1ZWAgZm9yY2UgYnVmZmVycy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNDbGVhckZvcmNlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQ2xlYXJGb3JjZXMgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgdmFyIGJvZGllc0xlbmd0aCA9IGJvZGllcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueCA9IDA7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnkgPSAwO1xuICAgICAgICAgICAgYm9keS50b3JxdWUgPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgZ3Jhdml0YXRpb25hbCBhY2NlbGVyYXRpb24gdG8gYWxsIGBib2RpZXNgLlxuICAgICAqIFRoaXMgbW9kZWxzIGEgW3VuaWZvcm0gZ3Jhdml0YXRpb25hbCBmaWVsZF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3Jhdml0eV9vZl9FYXJ0aCksIHNpbWlsYXIgdG8gbmVhciB0aGUgc3VyZmFjZSBvZiBhIHBsYW5ldC5cbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNBcHBseUdyYXZpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZ3Jhdml0eVxuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5ID0gZnVuY3Rpb24oYm9kaWVzLCBncmF2aXR5KSB7XG4gICAgICAgIHZhciBncmF2aXR5U2NhbGUgPSB0eXBlb2YgZ3Jhdml0eS5zY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBncmF2aXR5LnNjYWxlIDogMC4wMDEsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICgoZ3Jhdml0eS54ID09PSAwICYmIGdyYXZpdHkueSA9PT0gMCkgfHwgZ3Jhdml0eVNjYWxlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVzdWx0YW50IGZvcmNlIG9mIGdyYXZpdHlcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnkgKiBncmF2aXR5U2NhbGU7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnggKz0gYm9keS5tYXNzICogZ3Jhdml0eS54ICogZ3Jhdml0eVNjYWxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYEJvZHkudXBkYXRlYCB0byBhbGwgZ2l2ZW4gYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzVXBkYXRlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIFRoZSBhbW91bnQgb2YgdGltZSBlbGFwc2VkIGJldHdlZW4gdXBkYXRlc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCBkZWx0YSkge1xuICAgICAgICB2YXIgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgYm9keS5pc1NsZWVwaW5nKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBCb2R5LnVwZGF0ZShib2R5LCBkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBgQm9keS51cGRhdGVWZWxvY2l0aWVzYCB0byBhbGwgZ2l2ZW4gYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzVXBkYXRlVmVsb2NpdGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlVmVsb2NpdGllcyA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICB2YXIgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBCb2R5LnVwZGF0ZVZlbG9jaXRpZXMoYm9kaWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGRlcHJlY2F0ZWQgYWxpYXMgZm9yIGBSdW5uZXIucnVuYCwgdXNlIGBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpYCBpbnN0ZWFkIGFuZCBzZWUgYE1hdHRlci5SdW5uZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWRcbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQganVzdCBiZWZvcmUgYW4gdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVVwZGF0ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQuZGVsdGEgVGhlIGRlbHRhIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHZhbHVlIHVzZWQgaW4gdGhlIHVwZGF0ZVxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUgYW5kIGFsbCBjb2xsaXNpb24gZXZlbnRzXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVXBkYXRlXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC5kZWx0YSBUaGUgZGVsdGEgdGltZSBpbiBtaWxsaXNlY29uZHMgdmFsdWUgdXNlZCBpbiB0aGUgdXBkYXRlXG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgc3RhcnRlZCB0byBjb2xsaWRlIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uU3RhcnRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC5kZWx0YSBUaGUgZGVsdGEgdGltZSBpbiBtaWxsaXNlY29uZHMgdmFsdWUgdXNlZCBpbiB0aGUgdXBkYXRlXG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGFyZSBjb2xsaWRpbmcgaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25BY3RpdmVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC5kZWx0YSBUaGUgZGVsdGEgdGltZSBpbiBtaWxsaXNlY29uZHMgdmFsdWUgdXNlZCBpbiB0aGUgdXBkYXRlXG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgZW5kZWQgY29sbGlzaW9uIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uRW5kXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge3BhaXJbXX0gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQuZGVsdGEgVGhlIGRlbHRhIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHZhbHVlIHVzZWQgaW4gdGhlIHVwZGF0ZVxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwb3NpdGlvbiBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uSXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDZcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2ZWxvY2l0eSBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHZlbG9jaXR5SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBjb25zdHJhaW50IGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgYDJgIGlzIHVzdWFsbHkgdmVyeSBhZGVxdWF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBlbmdpbmUgc2hvdWxkIGFsbG93IHNsZWVwaW5nIHZpYSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlLlxuICAgICAqIFNsZWVwaW5nIGNhbiBpbXByb3ZlIHN0YWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UsIGJ1dCBvZnRlbiBhdCB0aGUgZXhwZW5zZSBvZiBhY2N1cmFjeS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgY29udGFpbmluZyBwcm9wZXJ0aWVzIHJlZ2FyZGluZyB0aGUgdGltaW5nIHN5c3RlbXMgb2YgdGhlIGVuZ2luZS4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBnbG9iYWwgc2NhbGluZyBmYWN0b3Igb2YgdGltZSBmb3IgYWxsIGJvZGllcy5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBmcmVlemVzIHRoZSBzaW11bGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgZ2l2ZXMgYSBzbG93LW1vdGlvbiBlZmZlY3QuXG4gICAgICogQSB2YWx1ZSBvZiBgMS4yYCBnaXZlcyBhIHNwZWVkLXVwIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgY3VycmVudCBzaW11bGF0aW9uLXRpbWUgaW4gbWlsbGlzZWNvbmRzIHN0YXJ0aW5nIGZyb20gYDBgLiBcbiAgICAgKiBJdCBpcyBpbmNyZW1lbnRlZCBvbiBldmVyeSBgRW5naW5lLnVwZGF0ZWAgYnkgdGhlIGdpdmVuIGBkZWx0YWAgYXJndW1lbnQuIFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZXN0YW1wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIGVsYXBzZWQgZHVyaW5nIHRoZSBsYXN0IGBFbmdpbmUudXBkYXRlYCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogSXQgaXMgdXBkYXRlZCBieSB0aW1pbmcgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGxhc3QgYEVuZ2luZS51cGRhdGVgIGNhbGwgdW50aWwgaXQgZW5kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgdmFsdWUgd2lsbCBhbHNvIGluY2x1ZGUgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIG9mIGFsbCBldmVudCBoYW5kbGVycyBkaXJlY3RseSBvciBpbmRpcmVjdGx5IHRyaWdnZXJlZCBieSB0aGUgZW5naW5lIHVwZGF0ZS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLmxhc3RFbGFwc2VkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIGBkZWx0YWAgdmFsdWUgdXNlZCBpbiB0aGUgbGFzdCBlbmdpbmUgdXBkYXRlLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcubGFzdERlbHRhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTWF0dGVyLkRldGVjdG9yYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZXRlY3RvclxuICAgICAqIEB0eXBlIGRldGVjdG9yXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuRGV0ZWN0b3IgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE1hdHRlci5HcmlkYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBlbmdpbmUuZGV0ZWN0b3JgXG4gICAgICogQHByb3BlcnR5IGdyaWRcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZWQgYnkgYW5kIG5vdyBhbGlhcyBmb3IgYGVuZ2luZS5ncmlkYC5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBlbmdpbmUuZGV0ZWN0b3JgXG4gICAgICogQHByb3BlcnR5IGJyb2FkcGhhc2VcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJvb3QgYE1hdHRlci5Db21wb3NpdGVgIGluc3RhbmNlIHRoYXQgd2lsbCBjb250YWluIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBvdGhlciBjb21wb3NpdGVzIHRvIGJlIHNpbXVsYXRlZCBieSB0aGlzIGVuZ2luZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB3b3JsZFxuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkNvbXBvc2l0ZSBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBncmF2aXRhdGlvbmFsIGFjY2VsZXJhdGlvbiBhcHBsaWVkIHRvIGFsbCBib2RpZXMgaW4gYGVuZ2luZS53b3JsZGAgb24gZXZlcnkgdXBkYXRlLlxuICAgICAqIFxuICAgICAqIFRoaXMgbW9kZWxzIGEgW3VuaWZvcm0gZ3Jhdml0YXRpb25hbCBmaWVsZF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3Jhdml0eV9vZl9FYXJ0aCksIHNpbWlsYXIgdG8gbmVhciB0aGUgc3VyZmFjZSBvZiBhIHBsYW5ldC4gRm9yIGdyYXZpdHkgaW4gb3RoZXIgY29udGV4dHMsIGRpc2FibGUgdGhpcyBhbmQgYXBwbHkgZm9yY2VzIGFzIG5lZWRlZC5cbiAgICAgKiBcbiAgICAgKiBUbyBkaXNhYmxlIHNldCB0aGUgYHNjYWxlYCBjb21wb25lbnQgdG8gYDBgLlxuICAgICAqIFxuICAgICAqIFRoaXMgaXMgc3BsaXQgaW50byB0aHJlZSBjb21wb25lbnRzIGZvciBlYXNlIG9mIHVzZTogIFxuICAgICAqIGEgbm9ybWFsaXNlZCBkaXJlY3Rpb24gKGB4YCBhbmQgYHlgKSBhbmQgbWFnbml0dWRlIChgc2NhbGVgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0YXRpb25hbCBkaXJlY3Rpb24gbm9ybWFsIGB4YCBjb21wb25lbnQsIHRvIGJlIG11bHRpcGxpZWQgYnkgYGdyYXZpdHkuc2NhbGVgLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnhcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0YXRpb25hbCBkaXJlY3Rpb24gbm9ybWFsIGB5YCBjb21wb25lbnQsIHRvIGJlIG11bHRpcGxpZWQgYnkgYGdyYXZpdHkuc2NhbGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkueVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWduaXR1ZGUgb2YgdGhlIGdyYXZpdGF0aW9uYWwgYWNjZWxlcmF0aW9uLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnNjYWxlXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5SZXNvbHZlcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHJlc29sdmluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBSZXNvbHZlclxuKi9cblxudmFyIFJlc29sdmVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb2x2ZXI7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCA9IDI7XG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ID0gTWF0aC5zcXJ0KDYpO1xuICAgIFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbiA9IDAuOTtcbiAgICBSZXNvbHZlci5fcG9zaXRpb25XYXJtaW5nID0gMC44O1xuICAgIFJlc29sdmVyLl9mcmljdGlvbk5vcm1hbE11bHRpcGxpZXIgPSA1O1xuICAgIFJlc29sdmVyLl9mcmljdGlvbk1heFN0YXRpYyA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciBwb3NpdGlvbiBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCxcbiAgICAgICAgICAgIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoO1xuXG4gICAgICAgIC8vIGZpbmQgdG90YWwgY29udGFjdHMgb24gZWFjaCBib2R5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aDtcbiAgICAgICAgICAgIHBhaXIuY29sbGlzaW9uLnBhcmVudEEudG90YWxDb250YWN0cyArPSBhY3RpdmVDb3VudDtcbiAgICAgICAgICAgIHBhaXIuY29sbGlzaW9uLnBhcmVudEIudG90YWxDb250YWN0cyArPSBhY3RpdmVDb3VudDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgc29sdXRpb24gZm9yIHBhaXIgcG9zaXRpb25zLlxuICAgICAqIEBtZXRob2Qgc29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGFtcGluZz0xXVxuICAgICAqL1xuICAgIFJlc29sdmVyLnNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycywgZGVsdGEsIGRhbXBpbmcpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgIGNvbnRhY3RTaGFyZSxcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSxcbiAgICAgICAgICAgIHBvc2l0aW9uRGFtcGVuID0gUmVzb2x2ZXIuX3Bvc2l0aW9uRGFtcGVuICogKGRhbXBpbmcgfHwgMSksXG4gICAgICAgICAgICBzbG9wRGFtcGVuID0gQ29tbW9uLmNsYW1wKGRlbHRhIC8gQ29tbW9uLl9iYXNlRGVsdGEsIDAsIDEpLFxuICAgICAgICAgICAgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGg7XG5cbiAgICAgICAgLy8gZmluZCBpbXB1bHNlcyByZXF1aXJlZCB0byByZXNvbHZlIHBlbmV0cmF0aW9uXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcblxuICAgICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgc2VwYXJhdGlvbiBiZXR3ZWVuIGJvZHkgZWRnZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uXG4gICAgICAgICAgICBwYWlyLnNlcGFyYXRpb24gPSBcbiAgICAgICAgICAgICAgICBub3JtYWwueCAqIChib2R5Qi5wb3NpdGlvbkltcHVsc2UueCArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54IC0gYm9keUEucG9zaXRpb25JbXB1bHNlLngpXG4gICAgICAgICAgICAgICAgKyBub3JtYWwueSAqIChib2R5Qi5wb3NpdGlvbkltcHVsc2UueSArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55IC0gYm9keUEucG9zaXRpb25JbXB1bHNlLnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgPSBwYWlyLnNlcGFyYXRpb24gLSBwYWlyLnNsb3AgKiBzbG9wRGFtcGVuO1xuXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gcG9zaXRpb25EYW1wZW4gLyBib2R5QS50b3RhbENvbnRhY3RzO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS54ICs9IG5vcm1hbC54ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS55ICs9IG5vcm1hbC55ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IHBvc2l0aW9uRGFtcGVuIC8gYm9keUIudG90YWxDb250YWN0cztcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueCAtPSBub3JtYWwueCAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueSAtPSBub3JtYWwueSAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBwb3NpdGlvbiByZXNvbHV0aW9uLlxuICAgICAqIEBtZXRob2QgcG9zdFNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucG9zdFNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uV2FybWluZyA9IFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmcsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGljZXNUcmFuc2xhdGUgPSBWZXJ0aWNlcy50cmFuc2xhdGUsXG4gICAgICAgICAgICBib3VuZHNVcGRhdGUgPSBCb3VuZHMudXBkYXRlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSA9IGJvZHkucG9zaXRpb25JbXB1bHNlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZVggPSBwb3NpdGlvbkltcHVsc2UueCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2VZID0gcG9zaXRpb25JbXB1bHNlLnksXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkgPSBib2R5LnZlbG9jaXR5O1xuXG4gICAgICAgICAgICAvLyByZXNldCBjb250YWN0IGNvdW50XG4gICAgICAgICAgICBib2R5LnRvdGFsQ29udGFjdHMgPSAwO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb25JbXB1bHNlWCAhPT0gMCB8fCBwb3NpdGlvbkltcHVsc2VZICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgZ2VvbWV0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1RyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBwb3NpdGlvbkltcHVsc2UpO1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNVcGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIHZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IHBvc2l0aW9uSW1wdWxzZVg7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBwb3NpdGlvbkltcHVsc2VZO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdGhlIGJvZHkgd2l0aG91dCBjaGFuZ2luZyB2ZWxvY2l0eVxuICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gcG9zaXRpb25JbXB1bHNlWDtcbiAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IHBvc2l0aW9uSW1wdWxzZVk7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JbXB1bHNlWCAqIHZlbG9jaXR5LnggKyBwb3NpdGlvbkltcHVsc2VZICogdmVsb2NpdHkueSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgY2FjaGVkIGltcHVsc2UgaWYgdGhlIGJvZHkgaGFzIHZlbG9jaXR5IGFsb25nIGl0XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhcm0gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS54ICo9IHBvc2l0aW9uV2FybWluZztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnkgKj0gcG9zaXRpb25XYXJtaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciB2ZWxvY2l0eSBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cyxcbiAgICAgICAgICAgICAgICBjb250YWN0c0xlbmd0aCA9IGNvbnRhY3RzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEIsXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbCxcbiAgICAgICAgICAgICAgICB0YW5nZW50ID0gY29sbGlzaW9uLnRhbmdlbnQ7XG4gICAgXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IGNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VmVydGV4ID0gY29udGFjdC52ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsSW1wdWxzZSAhPT0gMCB8fCB0YW5nZW50SW1wdWxzZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0b3RhbCBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1wdWxzZVggPSBub3JtYWwueCAqIG5vcm1hbEltcHVsc2UgKyB0YW5nZW50LnggKiB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcHVsc2VZID0gbm9ybWFsLnkgKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudC55ICogdGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBseSBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggKz0gaW1wdWxzZVggKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55ICs9IGltcHVsc2VZICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5hbmdsZVByZXYgKz0gYm9keUEuaW52ZXJzZUluZXJ0aWEgKiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlBLnBvc2l0aW9uLngpICogaW1wdWxzZVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIChjb250YWN0VmVydGV4LnkgLSBib2R5QS5wb3NpdGlvbi55KSAqIGltcHVsc2VYXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCAtPSBpbXB1bHNlWCAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgLT0gaW1wdWxzZVkgKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLmFuZ2xlUHJldiAtPSBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udGFjdFZlcnRleC54IC0gYm9keUIucG9zaXRpb24ueCkgKiBpbXB1bHNlWSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIChjb250YWN0VmVydGV4LnkgLSBib2R5Qi5wb3NpdGlvbi55KSAqIGltcHVsc2VYXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgYSBzb2x1dGlvbiBmb3IgcGFpciB2ZWxvY2l0aWVzLlxuICAgICAqIEBtZXRob2Qgc29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVxuICAgICAqL1xuICAgIFJlc29sdmVyLnNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycywgZGVsdGEpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZSA9IGRlbHRhIC8gQ29tbW9uLl9iYXNlRGVsdGEsXG4gICAgICAgICAgICB0aW1lU2NhbGVTcXVhcmVkID0gdGltZVNjYWxlICogdGltZVNjYWxlLFxuICAgICAgICAgICAgdGltZVNjYWxlQ3ViZWQgPSB0aW1lU2NhbGVTcXVhcmVkICogdGltZVNjYWxlLFxuICAgICAgICAgICAgcmVzdGluZ1RocmVzaCA9IC1SZXNvbHZlci5fcmVzdGluZ1RocmVzaCAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIHJlc3RpbmdUaHJlc2hUYW5nZW50ID0gUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50LFxuICAgICAgICAgICAgZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyID0gUmVzb2x2ZXIuX2ZyaWN0aW9uTm9ybWFsTXVsdGlwbGllciAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIGZyaWN0aW9uTWF4U3RhdGljID0gUmVzb2x2ZXIuX2ZyaWN0aW9uTWF4U3RhdGljLFxuICAgICAgICAgICAgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGgsXG4gICAgICAgICAgICB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgIG1heEZyaWN0aW9uLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCLFxuICAgICAgICAgICAgICAgIGJvZHlBVmVsb2NpdHkgPSBib2R5QS52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBib2R5QlZlbG9jaXR5ID0gYm9keUIudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgbm9ybWFsWCA9IGNvbGxpc2lvbi5ub3JtYWwueCxcbiAgICAgICAgICAgICAgICBub3JtYWxZID0gY29sbGlzaW9uLm5vcm1hbC55LFxuICAgICAgICAgICAgICAgIHRhbmdlbnRYID0gY29sbGlzaW9uLnRhbmdlbnQueCxcbiAgICAgICAgICAgICAgICB0YW5nZW50WSA9IGNvbGxpc2lvbi50YW5nZW50LnksXG4gICAgICAgICAgICAgICAgY29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzTGVuZ3RoID0gY29udGFjdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IDEgLyBjb250YWN0c0xlbmd0aCxcbiAgICAgICAgICAgICAgICBpbnZlcnNlTWFzc1RvdGFsID0gYm9keUEuaW52ZXJzZU1hc3MgKyBib2R5Qi5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICBmcmljdGlvbiA9IHBhaXIuZnJpY3Rpb24gKiBwYWlyLmZyaWN0aW9uU3RhdGljICogZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9keSB2ZWxvY2l0aWVzXG4gICAgICAgICAgICBib2R5QVZlbG9jaXR5LnggPSBib2R5QS5wb3NpdGlvbi54IC0gYm9keUEucG9zaXRpb25QcmV2Lng7XG4gICAgICAgICAgICBib2R5QVZlbG9jaXR5LnkgPSBib2R5QS5wb3NpdGlvbi55IC0gYm9keUEucG9zaXRpb25QcmV2Lnk7XG4gICAgICAgICAgICBib2R5QlZlbG9jaXR5LnggPSBib2R5Qi5wb3NpdGlvbi54IC0gYm9keUIucG9zaXRpb25QcmV2Lng7XG4gICAgICAgICAgICBib2R5QlZlbG9jaXR5LnkgPSBib2R5Qi5wb3NpdGlvbi55IC0gYm9keUIucG9zaXRpb25QcmV2Lnk7XG4gICAgICAgICAgICBib2R5QS5hbmd1bGFyVmVsb2NpdHkgPSBib2R5QS5hbmdsZSAtIGJvZHlBLmFuZ2xlUHJldjtcbiAgICAgICAgICAgIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eSA9IGJvZHlCLmFuZ2xlIC0gYm9keUIuYW5nbGVQcmV2O1xuXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IGNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VmVydGV4ID0gY29udGFjdC52ZXJ0ZXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0QVggPSBjb250YWN0VmVydGV4LnggLSBib2R5QS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRBWSA9IGNvbnRhY3RWZXJ0ZXgueSAtIGJvZHlBLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEJYID0gY29udGFjdFZlcnRleC54IC0gYm9keUIucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QlkgPSBjb250YWN0VmVydGV4LnkgLSBib2R5Qi5wb3NpdGlvbi55O1xuIFxuICAgICAgICAgICAgICAgIHZhciB2ZWxvY2l0eVBvaW50QVggPSBib2R5QVZlbG9jaXR5LnggLSBvZmZzZXRBWSAqIGJvZHlBLmFuZ3VsYXJWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEFZID0gYm9keUFWZWxvY2l0eS55ICsgb2Zmc2V0QVggKiBib2R5QS5hbmd1bGFyVmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRCWCA9IGJvZHlCVmVsb2NpdHkueCAtIG9mZnNldEJZICogYm9keUIuYW5ndWxhclZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QlkgPSBib2R5QlZlbG9jaXR5LnkgKyBvZmZzZXRCWCAqIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eTtcblxuICAgICAgICAgICAgICAgIHZhciByZWxhdGl2ZVZlbG9jaXR5WCA9IHZlbG9jaXR5UG9pbnRBWCAtIHZlbG9jaXR5UG9pbnRCWCxcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eVkgPSB2ZWxvY2l0eVBvaW50QVkgLSB2ZWxvY2l0eVBvaW50Qlk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsVmVsb2NpdHkgPSBub3JtYWxYICogcmVsYXRpdmVWZWxvY2l0eVggKyBub3JtYWxZICogcmVsYXRpdmVWZWxvY2l0eVksXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRWZWxvY2l0eSA9IHRhbmdlbnRYICogcmVsYXRpdmVWZWxvY2l0eVggKyB0YW5nZW50WSAqIHJlbGF0aXZlVmVsb2NpdHlZO1xuXG4gICAgICAgICAgICAgICAgLy8gY291bG9tYiBmcmljdGlvblxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxPdmVybGFwID0gcGFpci5zZXBhcmF0aW9uICsgbm9ybWFsVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbEZvcmNlID0gTWF0aC5taW4obm9ybWFsT3ZlcmxhcCwgMSk7XG4gICAgICAgICAgICAgICAgbm9ybWFsRm9yY2UgPSBub3JtYWxPdmVybGFwIDwgMCA/IDAgOiBub3JtYWxGb3JjZTtcblxuICAgICAgICAgICAgICAgIHZhciBmcmljdGlvbkxpbWl0ID0gbm9ybWFsRm9yY2UgKiBmcmljdGlvbjtcblxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmVsb2NpdHkgPCAtZnJpY3Rpb25MaW1pdCB8fCB0YW5nZW50VmVsb2NpdHkgPiBmcmljdGlvbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEZyaWN0aW9uID0gKHRhbmdlbnRWZWxvY2l0eSA+IDAgPyB0YW5nZW50VmVsb2NpdHkgOiAtdGFuZ2VudFZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBwYWlyLmZyaWN0aW9uICogKHRhbmdlbnRWZWxvY2l0eSA+IDAgPyAxIDogLTEpICogdGltZVNjYWxlQ3ViZWQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuZ2VudEltcHVsc2UgPCAtbWF4RnJpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gLW1heEZyaWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhbmdlbnRJbXB1bHNlID4gbWF4RnJpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IHRhbmdlbnRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgbWF4RnJpY3Rpb24gPSBmcmljdGlvbk1heFN0YXRpYztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGZvciBtYXNzLCBpbmVydGlhIGFuZCBjb250YWN0IG9mZnNldFxuICAgICAgICAgICAgICAgIHZhciBvQWNOID0gb2Zmc2V0QVggKiBub3JtYWxZIC0gb2Zmc2V0QVkgKiBub3JtYWxYLFxuICAgICAgICAgICAgICAgICAgICBvQmNOID0gb2Zmc2V0QlggKiBub3JtYWxZIC0gb2Zmc2V0QlkgKiBub3JtYWxYLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZSA9IGNvbnRhY3RTaGFyZSAvIChpbnZlcnNlTWFzc1RvdGFsICsgYm9keUEuaW52ZXJzZUluZXJ0aWEgKiBvQWNOICogb0FjTiArIGJvZHlCLmludmVyc2VJbmVydGlhICogb0JjTiAqIG9CY04pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmF3IGltcHVsc2VzXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbEltcHVsc2UgPSAoMSArIHBhaXIucmVzdGl0dXRpb24pICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSAqPSBzaGFyZTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBoaWdoIHZlbG9jaXR5IGFuZCByZXN0aW5nIGNvbGxpc2lvbnMgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxWZWxvY2l0eSA8IHJlc3RpbmdUaHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaCBub3JtYWwgdmVsb2NpdHkgc28gY2xlYXIgY2FjaGVkIGNvbnRhY3Qgbm9ybWFsIGltcHVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5ub3JtYWxJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb2x2ZSByZXN0aW5nIGNvbGxpc2lvbiBjb25zdHJhaW50cyB1c2luZyBFcmluIENhdHRvJ3MgbWV0aG9kIChHREMwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1wdWxzZSBjb25zdHJhaW50IHRlbmRzIHRvIDBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhY3ROb3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgKz0gbm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3Qubm9ybWFsSW1wdWxzZSA+IDApIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2UgLSBjb250YWN0Tm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaGlnaCB2ZWxvY2l0eSBhbmQgcmVzdGluZyBjb2xsaXNpb25zIHNlcGFyYXRlbHlcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZlbG9jaXR5IDwgLXJlc3RpbmdUaHJlc2hUYW5nZW50IHx8IHRhbmdlbnRWZWxvY2l0eSA+IHJlc3RpbmdUaHJlc2hUYW5nZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2ggdGFuZ2VudCB2ZWxvY2l0eSBzbyBjbGVhciBjYWNoZWQgY29udGFjdCB0YW5nZW50IGltcHVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50YW5nZW50SW1wdWxzZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29sdmUgcmVzdGluZyBjb2xsaXNpb24gY29uc3RyYWludHMgdXNpbmcgRXJpbiBDYXR0bydzIG1ldGhvZCAoR0RDMDgpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhbmdlbnQgaW1wdWxzZSB0ZW5kcyB0byAtdGFuZ2VudFNwZWVkIG9yICt0YW5nZW50U3BlZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhY3RUYW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgKz0gdGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWN0LnRhbmdlbnRJbXB1bHNlIDwgLW1heEZyaWN0aW9uKSBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gLW1heEZyaWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFjdC50YW5nZW50SW1wdWxzZSA+IG1heEZyaWN0aW9uKSBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZSAtIGNvbnRhY3RUYW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0b3RhbCBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgIHZhciBpbXB1bHNlWCA9IG5vcm1hbFggKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudFggKiB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW1wdWxzZVkgPSBub3JtYWxZICogbm9ybWFsSW1wdWxzZSArIHRhbmdlbnRZICogdGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCArPSBpbXB1bHNlWCAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSArPSBpbXB1bHNlWSAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5hbmdsZVByZXYgKz0gKG9mZnNldEFYICogaW1wdWxzZVkgLSBvZmZzZXRBWSAqIGltcHVsc2VYKSAqIGJvZHlBLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54IC09IGltcHVsc2VYICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55IC09IGltcHVsc2VZICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLmFuZ2xlUHJldiAtPSAob2Zmc2V0QlggKiBpbXB1bHNlWSAtIG9mZnNldEJZICogaW1wdWxzZVgpICogYm9keUIuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5QYWlyc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIHBhaXIgc2V0cy5cbipcbiogQGNsYXNzIFBhaXJzXG4qL1xuXG52YXIgUGFpcnMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlycztcblxudmFyIFBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcGFpcnMgc3RydWN0dXJlLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtwYWlyc30gQSBuZXcgcGFpcnMgc3RydWN0dXJlXG4gICAgICovXG4gICAgUGFpcnMuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7IFxuICAgICAgICAgICAgdGFibGU6IHt9LFxuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydDogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25BY3RpdmU6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kOiBbXVxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBwYWlycyBnaXZlbiBhIGxpc3Qgb2YgY29sbGlzaW9ucy5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWlyc1xuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9uW119IGNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpcnMudXBkYXRlID0gZnVuY3Rpb24ocGFpcnMsIGNvbGxpc2lvbnMsIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgcGFpcnNMaXN0ID0gcGFpcnMubGlzdCxcbiAgICAgICAgICAgIHBhaXJzTGlzdExlbmd0aCA9IHBhaXJzTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gcGFpcnMudGFibGUsXG4gICAgICAgICAgICBjb2xsaXNpb25zTGVuZ3RoID0gY29sbGlzaW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydCA9IHBhaXJzLmNvbGxpc2lvblN0YXJ0LFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kID0gcGFpcnMuY29sbGlzaW9uRW5kLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlID0gcGFpcnMuY29sbGlzaW9uQWN0aXZlLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgcGFpckluZGV4LFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gY2xlYXIgY29sbGlzaW9uIHN0YXRlIGFycmF5cywgYnV0IG1haW50YWluIG9sZCByZWZlcmVuY2VcbiAgICAgICAgY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xpc3RMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpcnNMaXN0W2ldLmNvbmZpcm1lZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbGxpc2lvbnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcbiAgICAgICAgICAgIHBhaXIgPSBjb2xsaXNpb24ucGFpcjtcblxuICAgICAgICAgICAgaWYgKHBhaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBwYWlyIGFscmVhZHkgZXhpc3RzIChidXQgbWF5IG9yIG1heSBub3QgYmUgYWN0aXZlKVxuICAgICAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZXhpc3RzIGFuZCBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlLnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFpciBleGlzdHMgYnV0IHdhcyBpbmFjdGl2ZSwgc28gYSBjb2xsaXNpb24gaGFzIGp1c3Qgc3RhcnRlZCBhZ2FpblxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcGFpclxuICAgICAgICAgICAgICAgIFBhaXIudXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBwYWlyLmNvbmZpcm1lZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBhaXIgZGlkIG5vdCBleGlzdCwgY3JlYXRlIGEgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICBwYWlyID0gUGFpci5jcmVhdGUoY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIHBhaXJzVGFibGVbcGFpci5pZF0gPSBwYWlyO1xuXG4gICAgICAgICAgICAgICAgLy8gcHVzaCB0aGUgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgIHBhaXJzTGlzdC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBwYWlycyB0aGF0IGFyZSBubyBsb25nZXIgYWN0aXZlXG4gICAgICAgIHZhciByZW1vdmVQYWlySW5kZXggPSBbXTtcbiAgICAgICAgcGFpcnNMaXN0TGVuZ3RoID0gcGFpcnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMaXN0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5jb25maXJtZWRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBQYWlyLnNldEFjdGl2ZShwYWlyLCBmYWxzZSwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25FbmQucHVzaChwYWlyKTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFpci5jb2xsaXNpb24uYm9keUEuaXNTbGVlcGluZyAmJiAhcGFpci5jb2xsaXNpb24uYm9keUIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQYWlySW5kZXgucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgaW5hY3RpdmUgcGFpcnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlbW92ZVBhaXJJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpckluZGV4ID0gcmVtb3ZlUGFpckluZGV4W2ldIC0gaTtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbcGFpckluZGV4XTtcbiAgICAgICAgICAgIHBhaXJzTGlzdC5zcGxpY2UocGFpckluZGV4LCAxKTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYWlyc1RhYmxlW3BhaXIuaWRdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ2l2ZW4gcGFpcnMgc3RydWN0dXJlLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge3BhaXJzfSBwYWlyc1xuICAgICAqIEByZXR1cm4ge3BhaXJzfSBwYWlyc1xuICAgICAqL1xuICAgIFBhaXJzLmNsZWFyID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgcGFpcnMudGFibGUgPSB7fTtcbiAgICAgICAgcGFpcnMubGlzdC5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25BY3RpdmUubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIHJldHVybiBwYWlycztcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE1hdHRlciA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XHJcblxyXG5NYXR0ZXIuQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xyXG5NYXR0ZXIuQm9kaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XHJcbk1hdHRlci5Cb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcclxuTWF0dGVyLkJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XHJcbk1hdHRlci5Db2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xyXG5NYXR0ZXIuQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxuTWF0dGVyLkNvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XHJcbk1hdHRlci5Db21wb3NpdGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XHJcbk1hdHRlci5Db25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XHJcbk1hdHRlci5Db250YWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XHJcbk1hdHRlci5EZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xyXG5NYXR0ZXIuRW5naW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XHJcbk1hdHRlci5FdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5NYXR0ZXIuR3JpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xyXG5NYXR0ZXIuTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcclxuTWF0dGVyLk1vdXNlQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xyXG5NYXR0ZXIuUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XHJcbk1hdHRlci5QYWlycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xyXG5NYXR0ZXIuUGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbk1hdHRlci5RdWVyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xyXG5NYXR0ZXIuUmVuZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XHJcbk1hdHRlci5SZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xyXG5NYXR0ZXIuUnVubmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XHJcbk1hdHRlci5TQVQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcclxuTWF0dGVyLlNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcclxuTWF0dGVyLlN2ZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpO1xyXG5NYXR0ZXIuVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcclxuTWF0dGVyLlZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcclxuTWF0dGVyLldvcmxkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XHJcblxyXG4vLyB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5XHJcbk1hdHRlci5FbmdpbmUucnVuID0gTWF0dGVyLlJ1bm5lci5ydW47XHJcbk1hdHRlci5Db21tb24uZGVwcmVjYXRlZChNYXR0ZXIuRW5naW5lLCAncnVuJywgJ0VuZ2luZS5ydW4g4p6kIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWQnKTtcclxuXG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXHJcbiogVGhlIGBNYXR0ZXJgIG1vZHVsZSBpcyB0aGUgdG9wIGxldmVsIG5hbWVzcGFjZS4gSXQgYWxzbyBpbmNsdWRlcyBhIGZ1bmN0aW9uIGZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gdG9wIG9mIHRoZSBsaWJyYXJ5LlxyXG4qXHJcbiogQGNsYXNzIE1hdHRlclxyXG4qL1xyXG5cclxudmFyIE1hdHRlciA9IHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXR0ZXI7XHJcblxyXG52YXIgUGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpYnJhcnkgbmFtZS5cclxuICAgICAqIEBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5uYW1lID0gJ21hdHRlci1qcyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlicmFyeSB2ZXJzaW9uLlxyXG4gICAgICogQHByb3BlcnR5IHZlcnNpb25cclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnZlcnNpb24gPSAgdHJ1ZSA/IFwiMC4xOS4wXCIgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgcGx1Z2luIGRlcGVuZGVuY2llcyB0byBiZSBpbnN0YWxsZWQuIFRoZXNlIGFyZSBub3JtYWxseSBzZXQgYW5kIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIudXNlYC5cclxuICAgICAqIEFsdGVybmF0aXZlbHkgeW91IG1heSBzZXQgYE1hdHRlci51c2VzYCBtYW51YWxseSBhbmQgaW5zdGFsbCB0aGVtIGJ5IGNhbGxpbmcgYFBsdWdpbi51c2UoTWF0dGVyKWAuXHJcbiAgICAgKiBAcHJvcGVydHkgdXNlc1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlcyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBsdWdpbnMgdGhhdCBoYXZlIGJlZW4gaW5zdGFsbGVkIHRocm91Z2ggYE1hdHRlci5QbHVnaW4uaW5zdGFsbGAuIFJlYWQgb25seS5cclxuICAgICAqIEBwcm9wZXJ0eSB1c2VkXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZWQgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbGxzIHRoZSBnaXZlbiBwbHVnaW5zIG9uIHRoZSBgTWF0dGVyYCBuYW1lc3BhY2UuXHJcbiAgICAgKiBUaGlzIGlzIGEgc2hvcnQtaGFuZCBmb3IgYFBsdWdpbi51c2VgLCBzZWUgaXQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICAgKiBDYWxsIHRoaXMgZnVuY3Rpb24gb25jZSBhdCB0aGUgc3RhcnQgb2YgeW91ciBjb2RlLCB3aXRoIGFsbCBvZiB0aGUgcGx1Z2lucyB5b3Ugd2lzaCB0byBpbnN0YWxsIGFzIGFyZ3VtZW50cy5cclxuICAgICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cclxuICAgICAqIEBtZXRob2QgdXNlXHJcbiAgICAgKiBAcGFyYW0gLi4ucGx1Z2luIHtGdW5jdGlvbn0gVGhlIHBsdWdpbihzKSB0byBpbnN0YWxsIG9uIGBiYXNlYCAobXVsdGktYXJndW1lbnQpLlxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgUGx1Z2luLnVzZShNYXR0ZXIsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBiZWZvcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXHJcbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cclxuICAgICAqIEBtZXRob2QgYmVmb3JlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYmVmb3JlIHRoZSBvcmlnaW5hbFxyXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5iZWZvcmUgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhCZWZvcmUoTWF0dGVyLCBwYXRoLCBmdW5jKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYWZ0ZXIgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXHJcbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cclxuICAgICAqIEBtZXRob2QgYWZ0ZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBNYXR0ZXJgXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBhZnRlciB0aGUgb3JpZ2luYWxcclxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIuYWZ0ZXIgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhBZnRlcihNYXR0ZXIsIHBhdGgsIGZ1bmMpO1xyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db21wb3NpdGVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyBjb21wb3NpdGUgYm9kaWVzXG4qIHdpdGggY29tbW9ubHkgdXNlZCBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyBzdGFja3MgYW5kIGNoYWlucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb21wb3NpdGVzXG4qL1xuXG52YXIgQ29tcG9zaXRlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZXM7XG5cbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIEJvZGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIGRlcHJlY2F0ZWQgPSBDb21tb24uZGVwcmVjYXRlZDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIGJvZGllcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFjayBpbiBhIGdyaWQgYXJyYW5nZW1lbnQuXG4gICAgICogVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBib2R5J3MgYm91bmRzIHRvIHByZXZlbnQgb3ZlcmxhcHMuXG4gICAgICogQG1ldGhvZCBzdGFja1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5zdGFjayA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdGFjayA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1N0YWNrJyB9KSxcbiAgICAgICAgICAgIHggPSB4eCxcbiAgICAgICAgICAgIHkgPSB5eSxcbiAgICAgICAgICAgIGxhc3RCb2R5LFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gY2FsbGJhY2soeCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHlIZWlnaHQgPSBib2R5LmJvdW5kcy5tYXgueSAtIGJvZHkuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keVdpZHRoID0gYm9keS5ib3VuZHMubWF4LnggLSBib2R5LmJvdW5kcy5taW4ueDsgXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlIZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBib2R5SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQm9keS50cmFuc2xhdGUoYm9keSwgeyB4OiBib2R5V2lkdGggKiAwLjUsIHk6IGJvZHlIZWlnaHQgKiAwLjUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgeCA9IGJvZHkuYm91bmRzLm1heC54ICsgY29sdW1uR2FwO1xuXG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KHN0YWNrLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHggKz0gY29sdW1uR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeSArPSBtYXhIZWlnaHQgKyByb3dHYXA7XG4gICAgICAgICAgICB4ID0geHg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYWxsIGJvZGllcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlIHRvZ2V0aGVyIHVzaW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBtZXRob2QgY2hhaW5cbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhPZmZzZXRBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlPZmZzZXRBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhPZmZzZXRCXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlPZmZzZXRCXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY2hhaW5lZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5jaGFpbiA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgeE9mZnNldEEsIHlPZmZzZXRBLCB4T2Zmc2V0QiwgeU9mZnNldEIsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2kgLSAxXSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBib2R5QUhlaWdodCA9IGJvZHlBLmJvdW5kcy5tYXgueSAtIGJvZHlBLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QVdpZHRoID0gYm9keUEuYm91bmRzLm1heC54IC0gYm9keUEuYm91bmRzLm1pbi54LCBcbiAgICAgICAgICAgICAgICBib2R5QkhlaWdodCA9IGJvZHlCLmJvdW5kcy5tYXgueSAtIGJvZHlCLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QldpZHRoID0gYm9keUIuYm91bmRzLm1heC54IC0gYm9keUIuYm91bmRzLm1pbi54O1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICAgICAgcG9pbnRBOiB7IHg6IGJvZHlBV2lkdGggKiB4T2Zmc2V0QSwgeTogYm9keUFIZWlnaHQgKiB5T2Zmc2V0QSB9LFxuICAgICAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgICAgICBwb2ludEI6IHsgeDogYm9keUJXaWR0aCAqIHhPZmZzZXRCLCB5OiBib2R5QkhlaWdodCAqIHlPZmZzZXRCIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShjb25zdHJhaW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUubGFiZWwgKz0gJyBDaGFpbic7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0cyBib2RpZXMgaW4gdGhlIGNvbXBvc2l0ZSB3aXRoIGNvbnN0cmFpbnRzIGluIGEgZ3JpZCBwYXR0ZXJuLCB3aXRoIG9wdGlvbmFsIGNyb3NzIGJyYWNlcy5cbiAgICAgKiBAbWV0aG9kIG1lc2hcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3Jvc3NCcmFjZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBtZXNoZWQgdG9nZXRoZXIgd2l0aCBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMubWVzaCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29sdW1ucywgcm93cywgY3Jvc3NCcmFjZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcyxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBib2R5QztcbiAgICAgICAgXG4gICAgICAgIGZvciAocm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAoY29sID0gMTsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBib2R5QSA9IGJvZGllc1soY29sIC0gMSkgKyAocm93ICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2NvbCArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzW2NvbCArICgocm93IC0gMSkgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2NvbCArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QSwgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyb3NzQnJhY2UgJiYgY29sID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUMgPSBib2RpZXNbKGNvbCAtIDEpICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QywgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPCBjb2x1bW5zIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUMgPSBib2RpZXNbKGNvbCArIDEpICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QywgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUubGFiZWwgKz0gJyBNZXNoJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgYm9kaWVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrIGluIGEgcHlyYW1pZCBhcnJhbmdlbWVudC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGJvZHkncyBib3VuZHMgdG8gcHJldmVudCBvdmVybGFwcy5cbiAgICAgKiBAbWV0aG9kIHB5cmFtaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMucHlyYW1pZCA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBDb21wb3NpdGVzLnN0YWNrKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGZ1bmN0aW9uKHgsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSkge1xuICAgICAgICAgICAgdmFyIGFjdHVhbFJvd3MgPSBNYXRoLm1pbihyb3dzLCBNYXRoLmNlaWwoY29sdW1ucyAvIDIpKSxcbiAgICAgICAgICAgICAgICBsYXN0Qm9keVdpZHRoID0gbGFzdEJvZHkgPyBsYXN0Qm9keS5ib3VuZHMubWF4LnggLSBsYXN0Qm9keS5ib3VuZHMubWluLnggOiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93ID4gYWN0dWFsUm93cylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldmVyc2Ugcm93IG9yZGVyXG4gICAgICAgICAgICByb3cgPSBhY3R1YWxSb3dzIC0gcm93O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSByb3csXG4gICAgICAgICAgICAgICAgZW5kID0gY29sdW1ucyAtIDEgLSByb3c7XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW4gPCBzdGFydCB8fCBjb2x1bW4gPiBlbmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByZXRyb2FjdGl2ZWx5IGZpeCB0aGUgZmlyc3QgYm9keSdzIHBvc2l0aW9uLCBzaW5jZSB3aWR0aCB3YXMgdW5rbm93blxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShsYXN0Qm9keSwgeyB4OiAoY29sdW1uICsgKGNvbHVtbnMgJSAyID09PSAxID8gMSA6IC0xKSkgKiBsYXN0Qm9keVdpZHRoLCB5OiAwIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeE9mZnNldCA9IGxhc3RCb2R5ID8gY29sdW1uICogbGFzdEJvZHlXaWR0aCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh4eCArIHhPZmZzZXQgKyBjb2x1bW4gKiBjb2x1bW5HYXAsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtuZXd0b25zQ3JhZGxlIGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL25ld3RvbnNDcmFkbGUuanMpLCBmb2xsb3cgdGhhdCBpbnN0ZWFkIGFzIHRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCBoZXJlLlxuICAgICAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIG5ld3RvbnNDcmFkbGUgZXhhbXBsZVxuICAgICAqIEBtZXRob2QgbmV3dG9uc0NyYWRsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBuZXd0b25zQ3JhZGxlIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLm5ld3RvbnNDcmFkbGUgPSBmdW5jdGlvbih4eCwgeXksIG51bWJlciwgc2l6ZSwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXd0b25zQ3JhZGxlID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnTmV3dG9ucyBDcmFkbGUnIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0aW9uID0gMS45LFxuICAgICAgICAgICAgICAgIGNpcmNsZSA9IEJvZGllcy5jaXJjbGUoeHggKyBpICogKHNpemUgKiBzZXBhcmF0aW9uKSwgeXkgKyBsZW5ndGgsIHNpemUsIFxuICAgICAgICAgICAgICAgICAgICB7IGluZXJ0aWE6IEluZmluaXR5LCByZXN0aXR1dGlvbjogMSwgZnJpY3Rpb246IDAsIGZyaWN0aW9uQWlyOiAwLjAwMDEsIHNsb3A6IDEgfSksXG4gICAgICAgICAgICAgICAgY29uc3RyYWludCA9IENvbnN0cmFpbnQuY3JlYXRlKHsgcG9pbnRBOiB7IHg6IHh4ICsgaSAqIChzaXplICogc2VwYXJhdGlvbiksIHk6IHl5IH0sIGJvZHlCOiBjaXJjbGUgfSk7XG5cbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KG5ld3RvbnNDcmFkbGUsIGNpcmNsZSk7XG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChuZXd0b25zQ3JhZGxlLCBjb25zdHJhaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXd0b25zQ3JhZGxlO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKENvbXBvc2l0ZXMsICduZXd0b25zQ3JhZGxlJywgJ0NvbXBvc2l0ZXMubmV3dG9uc0NyYWRsZSDinqQgbW92ZWQgdG8gbmV3dG9uc0NyYWRsZSBleGFtcGxlJyk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBoYXMgbm93IG1vdmVkIHRvIHRoZSBbY2FyIGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL2Nhci5qcyksIGZvbGxvdyB0aGF0IGluc3RlYWQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGhlcmUuXG4gICAgICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gY2FyIGV4YW1wbGVcbiAgICAgKiBAbWV0aG9kIGNhclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2hlZWxTaXplXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY2FyIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNhciA9IGZ1bmN0aW9uKHh4LCB5eSwgd2lkdGgsIGhlaWdodCwgd2hlZWxTaXplKSB7XG4gICAgICAgIHZhciBncm91cCA9IEJvZHkubmV4dEdyb3VwKHRydWUpLFxuICAgICAgICAgICAgd2hlZWxCYXNlID0gMjAsXG4gICAgICAgICAgICB3aGVlbEFPZmZzZXQgPSAtd2lkdGggKiAwLjUgKyB3aGVlbEJhc2UsXG4gICAgICAgICAgICB3aGVlbEJPZmZzZXQgPSB3aWR0aCAqIDAuNSAtIHdoZWVsQmFzZSxcbiAgICAgICAgICAgIHdoZWVsWU9mZnNldCA9IDA7XG4gICAgXG4gICAgICAgIHZhciBjYXIgPSBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdDYXInIH0pLFxuICAgICAgICAgICAgYm9keSA9IEJvZGllcy5yZWN0YW5nbGUoeHgsIHl5LCB3aWR0aCwgaGVpZ2h0LCB7IFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoYW1mZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBoZWlnaHQgKiAwLjVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IDAuMDAwMlxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHZhciB3aGVlbEEgPSBCb2RpZXMuY2lyY2xlKHh4ICsgd2hlZWxBT2Zmc2V0LCB5eSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciB3aGVlbEIgPSBCb2RpZXMuY2lyY2xlKHh4ICsgd2hlZWxCT2Zmc2V0LCB5eSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBheGVsQSA9IENvbnN0cmFpbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHlCOiBib2R5LFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IHdoZWVsQU9mZnNldCwgeTogd2hlZWxZT2Zmc2V0IH0sXG4gICAgICAgICAgICBib2R5QTogd2hlZWxBLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBheGVsQiA9IENvbnN0cmFpbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHlCOiBib2R5LFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IHdoZWVsQk9mZnNldCwgeTogd2hlZWxZT2Zmc2V0IH0sXG4gICAgICAgICAgICBib2R5QTogd2hlZWxCLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCBib2R5KTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCB3aGVlbEEpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIHdoZWVsQik7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNhciwgYXhlbEEpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjYXIsIGF4ZWxCKTtcblxuICAgICAgICByZXR1cm4gY2FyO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKENvbXBvc2l0ZXMsICdjYXInLCAnQ29tcG9zaXRlcy5jYXIg4p6kIG1vdmVkIHRvIGNhciBleGFtcGxlJyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtzb2Z0Qm9keSBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9zb2Z0Qm9keS5qcylcbiAgICAgKiBhbmQgdGhlIFtjbG90aCBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9jbG90aC5qcyksIGZvbGxvdyB0aG9zZSBpbnN0ZWFkIGFzIHRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCBoZXJlLlxuICAgICAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHNvZnRCb2R5IGFuZCBjbG90aCBleGFtcGxlc1xuICAgICAqIEBtZXRob2Qgc29mdEJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNyb3NzQnJhY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFydGljbGVSYWRpdXNcbiAgICAgKiBAcGFyYW0ge30gcGFydGljbGVPcHRpb25zXG4gICAgICogQHBhcmFtIHt9IGNvbnN0cmFpbnRPcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgc29mdEJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnNvZnRCb2R5ID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY3Jvc3NCcmFjZSwgcGFydGljbGVSYWRpdXMsIHBhcnRpY2xlT3B0aW9ucywgY29uc3RyYWludE9wdGlvbnMpIHtcbiAgICAgICAgcGFydGljbGVPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IGluZXJ0aWE6IEluZmluaXR5IH0sIHBhcnRpY2xlT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0cmFpbnRPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IHN0aWZmbmVzczogMC4yLCByZW5kZXI6IHsgdHlwZTogJ2xpbmUnLCBhbmNob3JzOiBmYWxzZSB9IH0sIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICB2YXIgc29mdEJvZHkgPSBDb21wb3NpdGVzLnN0YWNrKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIHBhcnRpY2xlUmFkaXVzLCBwYXJ0aWNsZU9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBDb21wb3NpdGVzLm1lc2goc29mdEJvZHksIGNvbHVtbnMsIHJvd3MsIGNyb3NzQnJhY2UsIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICBzb2Z0Qm9keS5sYWJlbCA9ICdTb2Z0IEJvZHknO1xuXG4gICAgICAgIHJldHVybiBzb2Z0Qm9keTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChDb21wb3NpdGVzLCAnc29mdEJvZHknLCAnQ29tcG9zaXRlcy5zb2Z0Qm9keSDinqQgbW92ZWQgdG8gc29mdEJvZHkgYW5kIGNsb3RoIGV4YW1wbGVzJyk7XG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkRldGVjdG9yYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byBgTWF0dGVyLkRldGVjdG9yYCBvciBhbm90aGVyIGFsdGVybmF0aXZlLlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGZvciBhIHNob3J0IHRlcm0gYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBUaGUgYE1hdHRlci5HcmlkYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gYnJvYWRwaGFzZSBncmlkIHN0cnVjdHVyZXMuXG4qXG4qIEBjbGFzcyBHcmlkXG4qIEBkZXByZWNhdGVkXG4qL1xuXG52YXIgR3JpZCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyaWQ7XG5cbnZhciBQYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGRlcHJlY2F0ZWQgPSBDb21tb24uZGVwcmVjYXRlZDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtncmlkfSBBIG5ldyBncmlkXG4gICAgICovXG4gICAgR3JpZC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGJ1Y2tldHM6IHt9LFxuICAgICAgICAgICAgcGFpcnM6IHt9LFxuICAgICAgICAgICAgcGFpcnNMaXN0OiBbXSxcbiAgICAgICAgICAgIGJ1Y2tldFdpZHRoOiA0OCxcbiAgICAgICAgICAgIGJ1Y2tldEhlaWdodDogNDhcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiBhIHNpbmdsZSBncmlkIGJ1Y2tldC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBidWNrZXRXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDQ4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIGEgc2luZ2xlIGdyaWQgYnVja2V0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJ1Y2tldEhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDQ4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgR3JpZC51cGRhdGUgPSBmdW5jdGlvbihncmlkLCBib2RpZXMsIGVuZ2luZSwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgdmFyIGksIGNvbCwgcm93LFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBidWNrZXRzID0gZ3JpZC5idWNrZXRzLFxuICAgICAgICAgICAgYnVja2V0LFxuICAgICAgICAgICAgYnVja2V0SWQsXG4gICAgICAgICAgICBncmlkQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1NsZWVwaW5nICYmICFmb3JjZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBib3VuZHMgY2hlY2tcbiAgICAgICAgICAgIGlmICh3b3JsZC5ib3VuZHMgJiYgKGJvZHkuYm91bmRzLm1heC54IDwgd29ybGQuYm91bmRzLm1pbi54IHx8IGJvZHkuYm91bmRzLm1pbi54ID4gd29ybGQuYm91bmRzLm1heC54XG4gICAgICAgICAgICAgICAgfHwgYm9keS5ib3VuZHMubWF4LnkgPCB3b3JsZC5ib3VuZHMubWluLnkgfHwgYm9keS5ib3VuZHMubWluLnkgPiB3b3JsZC5ib3VuZHMubWF4LnkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgbmV3UmVnaW9uID0gR3JpZC5fZ2V0UmVnaW9uKGdyaWQsIGJvZHkpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgYm9keSBoYXMgY2hhbmdlZCBncmlkIHJlZ2lvblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlZ2lvbiB8fCBuZXdSZWdpb24uaWQgIT09IGJvZHkucmVnaW9uLmlkIHx8IGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJvZHkucmVnaW9uIHx8IGZvcmNlVXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICBib2R5LnJlZ2lvbiA9IG5ld1JlZ2lvbjtcblxuICAgICAgICAgICAgICAgIHZhciB1bmlvbiA9IEdyaWQuX3JlZ2lvblVuaW9uKG5ld1JlZ2lvbiwgYm9keS5yZWdpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGdyaWQgYnVja2V0cyBhZmZlY3RlZCBieSByZWdpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHRoZSB1bmlvbiBvZiBib3RoIHJlZ2lvbnNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IHVuaW9uLnN0YXJ0Q29sOyBjb2wgPD0gdW5pb24uZW5kQ29sOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IHVuaW9uLnN0YXJ0Um93OyByb3cgPD0gdW5pb24uZW5kUm93OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0SWQgPSBHcmlkLl9nZXRCdWNrZXRJZChjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5zaWRlTmV3UmVnaW9uID0gKGNvbCA+PSBuZXdSZWdpb24uc3RhcnRDb2wgJiYgY29sIDw9IG5ld1JlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBuZXdSZWdpb24uc3RhcnRSb3cgJiYgcm93IDw9IG5ld1JlZ2lvbi5lbmRSb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNJbnNpZGVPbGRSZWdpb24gPSAoY29sID49IGJvZHkucmVnaW9uLnN0YXJ0Q29sICYmIGNvbCA8PSBib2R5LnJlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBib2R5LnJlZ2lvbi5zdGFydFJvdyAmJiByb3cgPD0gYm9keS5yZWdpb24uZW5kUm93KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gb2xkIHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW5zaWRlTmV3UmVnaW9uICYmIGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLl9idWNrZXRSZW1vdmVCb2R5KGdyaWQsIGJ1Y2tldCwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gbmV3IHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5yZWdpb24gPT09IG5ld1JlZ2lvbiB8fCAoaXNJbnNpZGVOZXdSZWdpb24gJiYgIWlzSW5zaWRlT2xkUmVnaW9uKSB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnVja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBHcmlkLl9jcmVhdGVCdWNrZXQoYnVja2V0cywgYnVja2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkoZ3JpZCwgYnVja2V0LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHJlZ2lvblxuICAgICAgICAgICAgICAgIGJvZHkucmVnaW9uID0gbmV3UmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgLy8gZmxhZyBjaGFuZ2VzIHNvIHdlIGNhbiB1cGRhdGUgcGFpcnNcbiAgICAgICAgICAgICAgICBncmlkQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgcGFpcnMgbGlzdCBvbmx5IGlmIHBhaXJzIGNoYW5nZWQgKGkuZS4gYSBib2R5IGNoYW5nZWQgcmVnaW9uKVxuICAgICAgICBpZiAoZ3JpZENoYW5nZWQpXG4gICAgICAgICAgICBncmlkLnBhaXJzTGlzdCA9IEdyaWQuX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdChncmlkKTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChHcmlkLCAndXBkYXRlJywgJ0dyaWQudXBkYXRlIOKepCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3InKTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZC5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICovXG4gICAgR3JpZC5jbGVhciA9IGZ1bmN0aW9uKGdyaWQpIHtcbiAgICAgICAgZ3JpZC5idWNrZXRzID0ge307XG4gICAgICAgIGdyaWQucGFpcnMgPSB7fTtcbiAgICAgICAgZ3JpZC5wYWlyc0xpc3QgPSBbXTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChHcmlkLCAnY2xlYXInLCAnR3JpZC5jbGVhciDinqQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yJyk7XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgdW5pb24gb2YgdHdvIHJlZ2lvbnMuXG4gICAgICogQG1ldGhvZCBfcmVnaW9uVW5pb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSByZWdpb25BXG4gICAgICogQHBhcmFtIHt9IHJlZ2lvbkJcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX3JlZ2lvblVuaW9uID0gZnVuY3Rpb24ocmVnaW9uQSwgcmVnaW9uQikge1xuICAgICAgICB2YXIgc3RhcnRDb2wgPSBNYXRoLm1pbihyZWdpb25BLnN0YXJ0Q29sLCByZWdpb25CLnN0YXJ0Q29sKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGgubWF4KHJlZ2lvbkEuZW5kQ29sLCByZWdpb25CLmVuZENvbCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGgubWluKHJlZ2lvbkEuc3RhcnRSb3csIHJlZ2lvbkIuc3RhcnRSb3cpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5tYXgocmVnaW9uQS5lbmRSb3csIHJlZ2lvbkIuZW5kUm93KTtcblxuICAgICAgICByZXR1cm4gR3JpZC5fY3JlYXRlUmVnaW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZWdpb24gYSBnaXZlbiBib2R5IGZhbGxzIGluIGZvciBhIGdpdmVuIGdyaWQuXG4gICAgICogQG1ldGhvZCBfZ2V0UmVnaW9uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9nZXRSZWdpb24gPSBmdW5jdGlvbihncmlkLCBib2R5KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBib2R5LmJvdW5kcyxcbiAgICAgICAgICAgIHN0YXJ0Q29sID0gTWF0aC5mbG9vcihib3VuZHMubWluLnggLyBncmlkLmJ1Y2tldFdpZHRoKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGguZmxvb3IoYm91bmRzLm1heC54IC8gZ3JpZC5idWNrZXRXaWR0aCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGguZmxvb3IoYm91bmRzLm1pbi55IC8gZ3JpZC5idWNrZXRIZWlnaHQpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLyBncmlkLmJ1Y2tldEhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIEdyaWQuX2NyZWF0ZVJlZ2lvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlZ2lvbi5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVSZWdpb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBzdGFydENvbFxuICAgICAqIEBwYXJhbSB7fSBlbmRDb2xcbiAgICAgKiBAcGFyYW0ge30gc3RhcnRSb3dcbiAgICAgKiBAcGFyYW0ge30gZW5kUm93XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVSZWdpb24gPSBmdW5jdGlvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgaWQ6IHN0YXJ0Q29sICsgJywnICsgZW5kQ29sICsgJywnICsgc3RhcnRSb3cgKyAnLCcgKyBlbmRSb3csXG4gICAgICAgICAgICBzdGFydENvbDogc3RhcnRDb2wsIFxuICAgICAgICAgICAgZW5kQ29sOiBlbmRDb2wsIFxuICAgICAgICAgICAgc3RhcnRSb3c6IHN0YXJ0Um93LCBcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93IFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBidWNrZXQgaWQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2QgX2dldEJ1Y2tldElkXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gY29sdW1uXG4gICAgICogQHBhcmFtIHt9IHJvd1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30gYnVja2V0IGlkXG4gICAgICovXG4gICAgR3JpZC5fZ2V0QnVja2V0SWQgPSBmdW5jdGlvbihjb2x1bW4sIHJvdykge1xuICAgICAgICByZXR1cm4gJ0MnICsgY29sdW1uICsgJ1InICsgcm93O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUJ1Y2tldFxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldHNcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0SWRcbiAgICAgKiBAcmV0dXJuIHt9IGJ1Y2tldFxuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZUJ1Y2tldCA9IGZ1bmN0aW9uKGJ1Y2tldHMsIGJ1Y2tldElkKSB7XG4gICAgICAgIHZhciBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXSA9IFtdO1xuICAgICAgICByZXR1cm4gYnVja2V0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYm9keSB0byBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRBZGRCb2R5XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkLFxuICAgICAgICAgICAgYnVja2V0TGVuZ3RoID0gYnVja2V0Lmxlbmd0aCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWlyc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVja2V0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QiA9IGJ1Y2tldFtpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaWQgPT09IGJvZHlCLmlkIHx8IChib2R5LmlzU3RhdGljICYmIGJvZHlCLmlzU3RhdGljKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGJ1Y2tldHMgdGhlIHBhaXIgZXhpc3RzIGluXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIEdyaWQudXBkYXRlIHRvIHdvcmtcbiAgICAgICAgICAgIHZhciBpZCA9IHBhaXJJZChib2R5LCBib2R5QiksXG4gICAgICAgICAgICAgICAgcGFpciA9IGdyaWRQYWlyc1tpZF07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgcGFpclsyXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUGFpcnNbaWRdID0gW2JvZHksIGJvZHlCLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0byBib2RpZXMgKGFmdGVyIHBhaXJzLCBvdGhlcndpc2UgcGFpcnMgd2l0aCBzZWxmKVxuICAgICAgICBidWNrZXQucHVzaChib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRSZW1vdmVCb2R5XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldFJlbW92ZUJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyByZW1vdmUgZnJvbSBidWNrZXRcbiAgICAgICAgYnVja2V0LnNwbGljZShDb21tb24uaW5kZXhPZihidWNrZXQsIGJvZHkpLCAxKTtcblxuICAgICAgICB2YXIgYnVja2V0TGVuZ3RoID0gYnVja2V0Lmxlbmd0aDtcblxuICAgICAgICAvLyB1cGRhdGUgcGFpciBjb3VudHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Y2tldExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgYnVja2V0cyB0aGUgcGFpciBleGlzdHMgaW5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdCB0byB3b3JrXG4gICAgICAgICAgICB2YXIgcGFpciA9IGdyaWRQYWlyc1twYWlySWQoYm9keSwgYnVja2V0W2ldKV07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKVxuICAgICAgICAgICAgICAgIHBhaXJbMl0gLT0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHRoZSBhY3RpdmUgcGFpcnMgaW4gdGhlIGdyaWQuXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQWN0aXZlUGFpcnNMaXN0XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEByZXR1cm4gW10gcGFpcnNcbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVBY3RpdmVQYWlyc0xpc3QgPSBmdW5jdGlvbihncmlkKSB7XG4gICAgICAgIHZhciBwYWlyLFxuICAgICAgICAgICAgZ3JpZFBhaXJzID0gZ3JpZC5wYWlycyxcbiAgICAgICAgICAgIHBhaXJLZXlzID0gQ29tbW9uLmtleXMoZ3JpZFBhaXJzKSxcbiAgICAgICAgICAgIHBhaXJLZXlzTGVuZ3RoID0gcGFpcktleXMubGVuZ3RoLFxuICAgICAgICAgICAgcGFpcnMgPSBbXSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGdyaWQucGFpcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHBhaXJLZXlzTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBncmlkUGFpcnNbcGFpcktleXNba11dO1xuXG4gICAgICAgICAgICAvLyBpZiBwYWlyIGV4aXN0cyBpbiBhdCBsZWFzdCBvbmUgYnVja2V0XG4gICAgICAgICAgICAvLyBpdCBpcyBhIHBhaXIgdGhhdCBuZWVkcyBmdXJ0aGVyIGNvbGxpc2lvbiB0ZXN0aW5nIHNvIHB1c2ggaXRcbiAgICAgICAgICAgIGlmIChwYWlyWzJdID4gMCkge1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2gocGFpcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBncmlkUGFpcnNbcGFpcktleXNba11dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLk1vdXNlQ29uc3RyYWludGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIG1vdXNlIGNvbnN0cmFpbnRzLlxuKiBNb3VzZSBjb25zdHJhaW50cyBhcmUgdXNlZCBmb3IgYWxsb3dpbmcgdXNlciBpbnRlcmFjdGlvbiwgcHJvdmlkaW5nIHRoZSBhYmlsaXR5IHRvIG1vdmUgYm9kaWVzIHZpYSB0aGUgbW91c2Ugb3IgdG91Y2guXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBNb3VzZUNvbnN0cmFpbnRcbiovXG5cbnZhciBNb3VzZUNvbnN0cmFpbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUNvbnN0cmFpbnQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIE1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBEZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb3VzZSBjb25zdHJhaW50LlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge01vdXNlQ29uc3RyYWludH0gQSBuZXcgTW91c2VDb25zdHJhaW50XG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50LmNyZWF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgbW91c2UgPSAoZW5naW5lID8gZW5naW5lLm1vdXNlIDogbnVsbCkgfHwgKG9wdGlvbnMgPyBvcHRpb25zLm1vdXNlIDogbnVsbCk7XG5cbiAgICAgICAgaWYgKCFtb3VzZSkge1xuICAgICAgICAgICAgaWYgKGVuZ2luZSAmJiBlbmdpbmUucmVuZGVyICYmIGVuZ2luZS5yZW5kZXIuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUoZW5naW5lLnJlbmRlci5jYW52YXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ01vdXNlQ29uc3RyYWludC5jcmVhdGU6IG9wdGlvbnMubW91c2Ugd2FzIHVuZGVmaW5lZCwgb3B0aW9ucy5lbGVtZW50IHdhcyB1bmRlZmluZWQsIG1heSBub3QgZnVuY3Rpb24gYXMgZXhwZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBcbiAgICAgICAgICAgIGxhYmVsOiAnTW91c2UgQ29uc3RyYWludCcsXG4gICAgICAgICAgICBwb2ludEE6IG1vdXNlLnBvc2l0aW9uLFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogMC4wMSwgXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDAuMSxcbiAgICAgICAgICAgIGFuZ3VsYXJTdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogJyM5MEVFOTAnLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0eXBlOiAnbW91c2VDb25zdHJhaW50JyxcbiAgICAgICAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludDogY29uc3RyYWludCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtb3VzZUNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBFdmVudHMub24oZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50LnVwZGF0ZShtb3VzZUNvbnN0cmFpbnQsIGFsbEJvZGllcyk7XG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMobW91c2VDb25zdHJhaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlQ29uc3RyYWludDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ2l2ZW4gbW91c2UgY29uc3RyYWludC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtNb3VzZUNvbnN0cmFpbnR9IG1vdXNlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQudXBkYXRlID0gZnVuY3Rpb24obW91c2VDb25zdHJhaW50LCBib2RpZXMpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgY29uc3RyYWludCA9IG1vdXNlQ29uc3RyYWludC5jb25zdHJhaW50LFxuICAgICAgICAgICAgYm9keSA9IG1vdXNlQ29uc3RyYWludC5ib2R5O1xuXG4gICAgICAgIGlmIChtb3VzZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5ib2R5Qikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMoYm9keS5ib3VuZHMsIG1vdXNlLnBvc2l0aW9uKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBEZXRlY3Rvci5jYW5Db2xsaWRlKGJvZHkuY29sbGlzaW9uRmlsdGVyLCBtb3VzZUNvbnN0cmFpbnQuY29sbGlzaW9uRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgbW91c2UucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0gbW91c2UucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiBtb3VzZS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBtb3VzZS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gYm9keS5hbmdsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdzdGFydGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChjb25zdHJhaW50LmJvZHlCLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSBtb3VzZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChib2R5KVxuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ2VuZGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBtb3VzZSBjb25zdHJhaW50IGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIF90cmlnZ2VyRXZlbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZUNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihtb3VzZUNvbnN0cmFpbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgbW91c2VFdmVudHMgPSBtb3VzZS5zb3VyY2VFdmVudHM7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNlbW92ZSlcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNlbW92ZScsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZWRvd24pXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZWRvd24nLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2V1cClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNldXAnLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICAvLyByZXNldCB0aGUgbW91c2Ugc3RhdGUgcmVhZHkgZm9yIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgTW91c2UuY2xlYXJTb3VyY2VFdmVudHMobW91c2UpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBoYXMgbW92ZWQgKG9yIGEgdG91Y2ggbW92ZXMpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaXMgZG93biAob3IgYSB0b3VjaCBoYXMgc3RhcnRlZCkgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2Vkb3duXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBpcyB1cCAob3IgYSB0b3VjaCBoYXMgZW5kZWQpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNldXBcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIGEgYm9keVxuICAgICpcbiAgICAqIEBldmVudCBzdGFydGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IGJlaW5nIGRyYWdnZWRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGVuZHMgZHJhZ2dpbmcgYSBib2R5XG4gICAgKlxuICAgICogQGV2ZW50IGVuZGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IHRoYXQgaGFzIHN0b3BwZWQgYmVpbmcgZHJhZ2dlZFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbnN0cmFpbnRcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBNb3VzZWAgaW5zdGFuY2UgaW4gdXNlLiBJZiBub3Qgc3VwcGxpZWQgaW4gYE1vdXNlQ29uc3RyYWludC5jcmVhdGVgLCBvbmUgd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBtb3VzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBCb2R5YCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBtb3ZlZCBieSB0aGUgdXNlciwgb3IgYG51bGxgIGlmIG5vIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbnN0cmFpbnRgIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gbW92ZSB0aGUgYm9keSBkdXJpbmcgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludFxuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZmlsdGVyIHByb3BlcnRpZXMuXG4gICAgICogVGhlIGNvbGxpc2lvbiBmaWx0ZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB3aGljaCB0eXBlcyBvZiBib2R5IHRoaXMgbW91c2UgY29uc3RyYWludCBjYW4gaW50ZXJhY3Qgd2l0aC5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5RdWVyeWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29sbGlzaW9uIHF1ZXJpZXMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBRdWVyeVxuKi9cblxudmFyIFF1ZXJ5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBCb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGNvbGxpc2lvbnMgYmV0d2VlbiBgYm9keWAgYW5kIGBib2RpZXNgLlxuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9uW119IENvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBRdWVyeS5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHksIGJvZGllcykge1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdLFxuICAgICAgICAgICAgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIGJvdW5kcyA9IGJvZHkuYm91bmRzLFxuICAgICAgICAgICAgY29sbGlkZXMgPSBDb2xsaXNpb24uY29sbGlkZXMsXG4gICAgICAgICAgICBvdmVybGFwcyA9IEJvdW5kcy5vdmVybGFwcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgcGFydHNBTGVuZ3RoID0gYm9keUEucGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcnRzQVN0YXJ0ID0gcGFydHNBTGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvdmVybGFwcyhib2R5QS5ib3VuZHMsIGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcGFydHNBU3RhcnQ7IGogPCBwYXJ0c0FMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHlBLnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGFwcyhwYXJ0LmJvdW5kcywgYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpZGVzKHBhcnQsIGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FzdHMgYSByYXkgc2VnbWVudCBhZ2FpbnN0IGEgc2V0IG9mIGJvZGllcyBhbmQgcmV0dXJucyBhbGwgY29sbGlzaW9ucywgcmF5IHdpZHRoIGlzIG9wdGlvbmFsLiBJbnRlcnNlY3Rpb24gcG9pbnRzIGFyZSBub3QgcHJvdmlkZWQuXG4gICAgICogQG1ldGhvZCByYXlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHN0YXJ0UG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZW5kUG9pbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JheVdpZHRoXVxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbltdfSBDb2xsaXNpb25zXG4gICAgICovXG4gICAgUXVlcnkucmF5ID0gZnVuY3Rpb24oYm9kaWVzLCBzdGFydFBvaW50LCBlbmRQb2ludCwgcmF5V2lkdGgpIHtcbiAgICAgICAgcmF5V2lkdGggPSByYXlXaWR0aCB8fCAxZS0xMDA7XG5cbiAgICAgICAgdmFyIHJheUFuZ2xlID0gVmVjdG9yLmFuZ2xlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSxcbiAgICAgICAgICAgIHJheUxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1YihzdGFydFBvaW50LCBlbmRQb2ludCkpLFxuICAgICAgICAgICAgcmF5WCA9IChlbmRQb2ludC54ICsgc3RhcnRQb2ludC54KSAqIDAuNSxcbiAgICAgICAgICAgIHJheVkgPSAoZW5kUG9pbnQueSArIHN0YXJ0UG9pbnQueSkgKiAwLjUsXG4gICAgICAgICAgICByYXkgPSBCb2RpZXMucmVjdGFuZ2xlKHJheVgsIHJheVksIHJheUxlbmd0aCwgcmF5V2lkdGgsIHsgYW5nbGU6IHJheUFuZ2xlIH0pLFxuICAgICAgICAgICAgY29sbGlzaW9ucyA9IFF1ZXJ5LmNvbGxpZGVzKHJheSwgYm9kaWVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHkgPSBjb2xsaXNpb24uYm9keUIgPSBjb2xsaXNpb24uYm9keUE7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIGJvdW5kcyBhcmUgaW5zaWRlIChvciBvdXRzaWRlIGlmIHNldCkgdGhlIGdpdmVuIHNldCBvZiBib3VuZHMsIGZyb20gdGhlIGdpdmVuIHNldCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCByZWdpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW291dHNpZGU9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnJlZ2lvbiA9IGZ1bmN0aW9uKGJvZGllcywgYm91bmRzLCBvdXRzaWRlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgb3ZlcmxhcHMgPSBCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoKG92ZXJsYXBzICYmICFvdXRzaWRlKSB8fCAoIW92ZXJsYXBzICYmIG91dHNpZGUpKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIHZlcnRpY2VzIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LCBmcm9tIHRoZSBnaXZlbiBzZXQgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgcG9pbnRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnBvaW50ID0gZnVuY3Rpb24oYm9kaWVzLCBwb2ludCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKGJvZHkuYm91bmRzLCBwb2ludCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocGFydC5ib3VuZHMsIHBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlIGlzIGEgc2ltcGxlIGNhbnZhcyBiYXNlZCByZW5kZXJlciBmb3IgdmlzdWFsaXNpbmcgaW5zdGFuY2VzIG9mIGBNYXR0ZXIuRW5naW5lYC5cbiogSXQgaXMgaW50ZW5kZWQgZm9yIGRldmVsb3BtZW50IGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXMsIGJ1dCBtYXkgYWxzbyBiZSBzdWl0YWJsZSBmb3Igc2ltcGxlIGdhbWVzLlxuKiBJdCBpbmNsdWRlcyBhIG51bWJlciBvZiBkcmF3aW5nIG9wdGlvbnMgaW5jbHVkaW5nIHdpcmVmcmFtZSwgdmVjdG9yIHdpdGggc3VwcG9ydCBmb3Igc3ByaXRlcyBhbmQgdmlld3BvcnRzLlxuKlxuKiBAY2xhc3MgUmVuZGVyXG4qL1xuXG52YXIgUmVuZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyO1xuXG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIE1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhDb21tb24ubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xuXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIFJlbmRlci5fZ29vZEZwcyA9IDMwO1xuICAgIFJlbmRlci5fZ29vZERlbHRhID0gMTAwMCAvIDYwO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByZW5kZXJlci4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge3JlbmRlcn0gQSBuZXcgcmVuZGVyZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBlbmdpbmU6IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgICAgICAgbW91c2U6IG51bGwsXG4gICAgICAgICAgICBmcmFtZVJlcXVlc3RJZDogbnVsbCxcbiAgICAgICAgICAgIHRpbWluZzoge1xuICAgICAgICAgICAgICAgIGhpc3RvcnlTaXplOiA2MCxcbiAgICAgICAgICAgICAgICBkZWx0YTogMCxcbiAgICAgICAgICAgICAgICBkZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lOiAwLFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICAgICAgbGFzdEVsYXBzZWQ6IDAsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZDogMCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZW5naW5lRGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbmdpbmVFbGFwc2VkSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZWxhcHNlZEhpc3Rvcnk6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgcGl4ZWxSYXRpbzogMSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE0MTUxZicsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lQmFja2dyb3VuZDogJyMxNDE1MWYnLFxuICAgICAgICAgICAgICAgIGhhc0JvdW5kczogISFvcHRpb25zLmJvdW5kcyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1NsZWVwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dEZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1N0YXRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCb3VuZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZWxvY2l0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0NvbGxpc2lvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dTZXBhcmF0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0F4ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0lkczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ZlcnRleE51bWJlcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dDb252ZXhIdWxsczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dNb3VzZVBvc2l0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZW5kZXIgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAocmVuZGVyLmNhbnZhcykge1xuICAgICAgICAgICAgcmVuZGVyLmNhbnZhcy53aWR0aCA9IHJlbmRlci5vcHRpb25zLndpZHRoIHx8IHJlbmRlci5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IHJlbmRlci5vcHRpb25zLmhlaWdodCB8fCByZW5kZXIuY2FudmFzLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlci5tb3VzZSA9IG9wdGlvbnMubW91c2U7XG4gICAgICAgIHJlbmRlci5lbmdpbmUgPSBvcHRpb25zLmVuZ2luZTtcbiAgICAgICAgcmVuZGVyLmNhbnZhcyA9IHJlbmRlci5jYW52YXMgfHwgX2NyZWF0ZUNhbnZhcyhyZW5kZXIub3B0aW9ucy53aWR0aCwgcmVuZGVyLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyLmNvbnRleHQgPSByZW5kZXIuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHJlbmRlci50ZXh0dXJlcyA9IHt9O1xuXG4gICAgICAgIHJlbmRlci5ib3VuZHMgPSByZW5kZXIuYm91bmRzIHx8IHtcbiAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgIHg6IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmb3IgdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICAgIHJlbmRlci5jb250cm9sbGVyID0gUmVuZGVyO1xuICAgICAgICByZW5kZXIub3B0aW9ucy5zaG93QnJvYWRwaGFzZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICBSZW5kZXIuc2V0UGl4ZWxSYXRpbyhyZW5kZXIsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbW1vbi5pc0VsZW1lbnQocmVuZGVyLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZW5kZXIuZWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXIuY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnRpbnVvdXNseSB1cGRhdGVzIHRoZSByZW5kZXIgY2FudmFzIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIucnVuID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIChmdW5jdGlvbiBsb29wKHRpbWUpe1xuICAgICAgICAgICAgcmVuZGVyLmZyYW1lUmVxdWVzdElkID0gX3JlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3VwZGF0ZVRpbWluZyhyZW5kZXIsIHRpbWUpO1xuXG4gICAgICAgICAgICBSZW5kZXIud29ybGQocmVuZGVyLCB0aW1lKTtcblxuICAgICAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnNob3dTdGF0cyB8fCByZW5kZXIub3B0aW9ucy5zaG93RGVidWcpIHtcbiAgICAgICAgICAgICAgICBSZW5kZXIuc3RhdHMocmVuZGVyLCByZW5kZXIuY29udGV4dCwgdGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5zaG93UGVyZm9ybWFuY2UgfHwgcmVuZGVyLm9wdGlvbnMuc2hvd0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgUmVuZGVyLnBlcmZvcm1hbmNlKHJlbmRlciwgcmVuZGVyLmNvbnRleHQsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUmVuZGVyLnJ1bmAgb24gdGhlIGdpdmVuIGByZW5kZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogQG1ldGhvZCBzdG9wXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5zdG9wID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIuZnJhbWVSZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwaXhlbCByYXRpbyBvZiB0aGUgcmVuZGVyZXIgYW5kIHVwZGF0ZXMgdGhlIGNhbnZhcy5cbiAgICAgKiBUbyBhdXRvbWF0aWNhbGx5IGRldGVjdCB0aGUgY29ycmVjdCByYXRpbywgcGFzcyB0aGUgc3RyaW5nIGAnYXV0bydgIGZvciBgcGl4ZWxSYXRpb2AuXG4gICAgICogQG1ldGhvZCBzZXRQaXhlbFJhdGlvXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvXG4gICAgICovXG4gICAgUmVuZGVyLnNldFBpeGVsUmF0aW8gPSBmdW5jdGlvbihyZW5kZXIsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXM7XG5cbiAgICAgICAgaWYgKHBpeGVsUmF0aW8gPT09ICdhdXRvJykge1xuICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IF9nZXRQaXhlbFJhdGlvKGNhbnZhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXBpeGVsLXJhdGlvJywgcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKiBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb25zIGFuZCBzaXplcyB0aGUgdmlld3BvcnQgYXJvdW5kIHRoZSBnaXZlbiBvYmplY3QgYm91bmRzLlxuICAgICAqIE9iamVjdHMgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogLSBgb2JqZWN0LmJvdW5kc2BcbiAgICAgKiAtIGBvYmplY3QucG9zaXRpb25gXG4gICAgICogLSBgb2JqZWN0Lm1pbmAgYW5kIGBvYmplY3QubWF4YFxuICAgICAqIC0gYG9iamVjdC54YCBhbmQgYG9iamVjdC55YFxuICAgICAqIEBtZXRob2QgbG9va0F0XG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BhZGRpbmddXG4gICAgICogQHBhcmFtIHtib29sfSBbY2VudGVyPXRydWVdXG4gICAgICovXG4gICAgUmVuZGVyLmxvb2tBdCA9IGZ1bmN0aW9uKHJlbmRlciwgb2JqZWN0cywgcGFkZGluZywgY2VudGVyKSB7XG4gICAgICAgIGNlbnRlciA9IHR5cGVvZiBjZW50ZXIgIT09ICd1bmRlZmluZWQnID8gY2VudGVyIDogdHJ1ZTtcbiAgICAgICAgb2JqZWN0cyA9IENvbW1vbi5pc0FycmF5KG9iamVjdHMpID8gb2JqZWN0cyA6IFtvYmplY3RzXTtcbiAgICAgICAgcGFkZGluZyA9IHBhZGRpbmcgfHwge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmaW5kIGJvdW5kcyBvZiBhbGwgb2JqZWN0c1xuICAgICAgICB2YXIgYm91bmRzID0ge1xuICAgICAgICAgICAgbWluOiB7IHg6IEluZmluaXR5LCB5OiBJbmZpbml0eSB9LFxuICAgICAgICAgICAgbWF4OiB7IHg6IC1JbmZpbml0eSwgeTogLUluZmluaXR5IH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzW2ldLFxuICAgICAgICAgICAgICAgIG1pbiA9IG9iamVjdC5ib3VuZHMgPyBvYmplY3QuYm91bmRzLm1pbiA6IChvYmplY3QubWluIHx8IG9iamVjdC5wb3NpdGlvbiB8fCBvYmplY3QpLFxuICAgICAgICAgICAgICAgIG1heCA9IG9iamVjdC5ib3VuZHMgPyBvYmplY3QuYm91bmRzLm1heCA6IChvYmplY3QubWF4IHx8IG9iamVjdC5wb3NpdGlvbiB8fCBvYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAobWluICYmIG1heCkge1xuICAgICAgICAgICAgICAgIGlmIChtaW4ueCA8IGJvdW5kcy5taW4ueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1pbi54ID0gbWluLng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4LnggPiBib3VuZHMubWF4LngpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueCA9IG1heC54O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbi55IDwgYm91bmRzLm1pbi55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnkgPSBtaW4ueTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueSA+IGJvdW5kcy5tYXgueSlcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC55ID0gbWF4Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHJhdGlvc1xuICAgICAgICB2YXIgd2lkdGggPSAoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54KSArIDIgKiBwYWRkaW5nLngsXG4gICAgICAgICAgICBoZWlnaHQgPSAoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSArIDIgKiBwYWRkaW5nLnksXG4gICAgICAgICAgICB2aWV3SGVpZ2h0ID0gcmVuZGVyLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICB2aWV3V2lkdGggPSByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgb3V0ZXJSYXRpbyA9IHZpZXdXaWR0aCAvIHZpZXdIZWlnaHQsXG4gICAgICAgICAgICBpbm5lclJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgICBzY2FsZVggPSAxLFxuICAgICAgICAgICAgc2NhbGVZID0gMTtcblxuICAgICAgICAvLyBmaW5kIHNjYWxlIGZhY3RvclxuICAgICAgICBpZiAoaW5uZXJSYXRpbyA+IG91dGVyUmF0aW8pIHtcbiAgICAgICAgICAgIHNjYWxlWSA9IGlubmVyUmF0aW8gLyBvdXRlclJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NhbGVYID0gb3V0ZXJSYXRpbyAvIGlubmVyUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmFibGUgYm91bmRzXG4gICAgICAgIHJlbmRlci5vcHRpb25zLmhhc0JvdW5kcyA9IHRydWU7XG5cbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIHNpemVcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCA9IGJvdW5kcy5taW4ueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCA9IGJvdW5kcy5taW4ueCArIHdpZHRoICogc2NhbGVYO1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ID0gYm91bmRzLm1pbi55O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC55ID0gYm91bmRzLm1pbi55ICsgaGVpZ2h0ICogc2NhbGVZO1xuXG4gICAgICAgIC8vIGNlbnRlclxuICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ICs9IHdpZHRoICogMC41IC0gKHdpZHRoICogc2NhbGVYKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgKz0gaGVpZ2h0ICogMC41IC0gKGhlaWdodCAqIHNjYWxlWSkgKiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYWRkaW5nXG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54IC09IHBhZGRpbmcueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSAtPSBwYWRkaW5nLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgLT0gcGFkZGluZy55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICBpZiAocmVuZGVyLm1vdXNlKSB7XG4gICAgICAgICAgICBNb3VzZS5zZXRTY2FsZShyZW5kZXIubW91c2UsIHtcbiAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiAocmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnkpIC8gcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBNb3VzZS5zZXRPZmZzZXQocmVuZGVyLm1vdXNlLCByZW5kZXIuYm91bmRzLm1pbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB2aWV3cG9ydCB0cmFuc2Zvcm1zIGJhc2VkIG9uIGByZW5kZXIuYm91bmRzYCB0byBhIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2Qgc3RhcnRWaWV3VHJhbnNmb3JtXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5zdGFydFZpZXdUcmFuc2Zvcm0gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgdmFyIGJvdW5kc1dpZHRoID0gcmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngsXG4gICAgICAgICAgICBib3VuZHNIZWlnaHQgPSByZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICBib3VuZHNTY2FsZVkgPSBib3VuZHNIZWlnaHQgLyByZW5kZXIub3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICAgICAgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAvIGJvdW5kc1NjYWxlWCwgMCwgMCwgXG4gICAgICAgICAgICByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvIC8gYm91bmRzU2NhbGVZLCAwLCAwXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICByZW5kZXIuY29udGV4dC50cmFuc2xhdGUoLXJlbmRlci5ib3VuZHMubWluLngsIC1yZW5kZXIuYm91bmRzLm1pbi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIGFsbCB0cmFuc2Zvcm1zIG9uIHRoZSByZW5kZXIgY29udGV4dC5cbiAgICAgKiBAbWV0aG9kIGVuZFZpZXdUcmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLmVuZFZpZXdUcmFuc2Zvcm0gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDAsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBnaXZlbiBgZW5naW5lYCdzIGBNYXR0ZXIuV29ybGRgIG9iamVjdC5cbiAgICAgKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgYWxsIHJlbmRlcmluZyBhbmQgc2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBzY2VuZSBjaGFuZ2VzLlxuICAgICAqIEBtZXRob2Qgd29ybGRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLndvcmxkID0gZnVuY3Rpb24ocmVuZGVyLCB0aW1lKSB7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBDb21tb24ubm93KCksXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBjYW52YXMgPSByZW5kZXIuY2FudmFzLFxuICAgICAgICAgICAgY29udGV4dCA9IHJlbmRlci5jb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgdGltaW5nID0gcmVuZGVyLnRpbWluZztcblxuICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBhbGxDb25zdHJhaW50cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gb3B0aW9ucy53aXJlZnJhbWVzID8gb3B0aW9ucy53aXJlZnJhbWVCYWNrZ3JvdW5kIDogb3B0aW9ucy5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgYm9kaWVzID0gW10sXG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IFtdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IGVuZ2luZS50aW1pbmcudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocmVuZGVyLCAnYmVmb3JlUmVuZGVyJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGFwcGx5IGJhY2tncm91bmQgaWYgaXQgaGFzIGNoYW5nZWRcbiAgICAgICAgaWYgKHJlbmRlci5jdXJyZW50QmFja2dyb3VuZCAhPT0gYmFja2dyb3VuZClcbiAgICAgICAgICAgIF9hcHBseUJhY2tncm91bmQocmVuZGVyLCBiYWNrZ3JvdW5kKTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgY2FudmFzIHdpdGggYSB0cmFuc3BhcmVudCBmaWxsLCB0byBhbGxvdyB0aGUgY2FudmFzIGJhY2tncm91bmQgdG8gc2hvd1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtaW4nO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG5cbiAgICAgICAgLy8gaGFuZGxlIGJvdW5kc1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgYm9kaWVzIHRoYXQgYXJlIG5vdCBpbiB2aWV3XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxsQm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBhbGxCb2RpZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhib2R5LmJvdW5kcywgcmVuZGVyLmJvdW5kcykpXG4gICAgICAgICAgICAgICAgICAgIGJvZGllcy5wdXNoKGJvZHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGNvbnN0cmFpbnRzIHRoYXQgYXJlIG5vdCBpbiB2aWV3XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxsQ29uc3RyYWludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGFsbENvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgICAgICBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRBV29ybGQgPSBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBjb25zdHJhaW50LnBvaW50QjtcblxuICAgICAgICAgICAgICAgIGlmIChib2R5QSkgcG9pbnRBV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICAgICAgaWYgKGJvZHlCKSBwb2ludEJXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKTtcblxuICAgICAgICAgICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocmVuZGVyLmJvdW5kcywgcG9pbnRBV29ybGQpIHx8IEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEJXb3JsZCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgdmlld1xuICAgICAgICAgICAgUmVuZGVyLnN0YXJ0Vmlld1RyYW5zZm9ybShyZW5kZXIpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgbW91c2VcbiAgICAgICAgICAgIGlmIChyZW5kZXIubW91c2UpIHtcbiAgICAgICAgICAgICAgICBNb3VzZS5zZXRTY2FsZShyZW5kZXIubW91c2UsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogKHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54KSAvIHJlbmRlci5vcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiAocmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnkpIC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBNb3VzZS5zZXRPZmZzZXQocmVuZGVyLm1vdXNlLCByZW5kZXIuYm91bmRzLm1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IGFsbENvbnN0cmFpbnRzO1xuICAgICAgICAgICAgYm9kaWVzID0gYWxsQm9kaWVzO1xuXG4gICAgICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJlbmRlci5jb250ZXh0LnNldFRyYW5zZm9ybShyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwLCByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy53aXJlZnJhbWVzIHx8IChlbmdpbmUuZW5hYmxlU2xlZXBpbmcgJiYgb3B0aW9ucy5zaG93U2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAvLyBmdWxseSBmZWF0dXJlZCByZW5kZXJpbmcgb2YgYm9kaWVzXG4gICAgICAgICAgICBSZW5kZXIuYm9kaWVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dDb252ZXhIdWxscylcbiAgICAgICAgICAgICAgICBSZW5kZXIuYm9keUNvbnZleEh1bGxzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgLy8gb3B0aW1pc2VkIG1ldGhvZCBmb3Igd2lyZWZyYW1lcyBvbmx5XG4gICAgICAgICAgICBSZW5kZXIuYm9keVdpcmVmcmFtZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0JvdW5kcylcbiAgICAgICAgICAgIFJlbmRlci5ib2R5Qm91bmRzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93QXhlcyB8fCBvcHRpb25zLnNob3dBbmdsZUluZGljYXRvcilcbiAgICAgICAgICAgIFJlbmRlci5ib2R5QXhlcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1Bvc2l0aW9ucylcbiAgICAgICAgICAgIFJlbmRlci5ib2R5UG9zaXRpb25zKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93VmVsb2NpdHkpXG4gICAgICAgICAgICBSZW5kZXIuYm9keVZlbG9jaXR5KHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93SWRzKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlJZHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dTZXBhcmF0aW9ucylcbiAgICAgICAgICAgIFJlbmRlci5zZXBhcmF0aW9ucyhyZW5kZXIsIGVuZ2luZS5wYWlycy5saXN0LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93Q29sbGlzaW9ucylcbiAgICAgICAgICAgIFJlbmRlci5jb2xsaXNpb25zKHJlbmRlciwgZW5naW5lLnBhaXJzLmxpc3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dWZXJ0ZXhOdW1iZXJzKVxuICAgICAgICAgICAgUmVuZGVyLnZlcnRleE51bWJlcnMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uKVxuICAgICAgICAgICAgUmVuZGVyLm1vdXNlUG9zaXRpb24ocmVuZGVyLCByZW5kZXIubW91c2UsIGNvbnRleHQpO1xuXG4gICAgICAgIFJlbmRlci5jb25zdHJhaW50cyhjb25zdHJhaW50cywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICAvLyByZXZlcnQgdmlldyB0cmFuc2Zvcm1zXG4gICAgICAgICAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybShyZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocmVuZGVyLCAnYWZ0ZXJSZW5kZXInLCBldmVudCk7XG5cbiAgICAgICAgLy8gbG9nIHRoZSB0aW1lIGVsYXBzZWQgY29tcHV0aW5nIHRoaXMgdXBkYXRlXG4gICAgICAgIHRpbWluZy5sYXN0RWxhcHNlZCA9IENvbW1vbi5ub3coKSAtIHN0YXJ0VGltZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBzdGF0aXN0aWNzIGFib3V0IHRoZSBlbmdpbmUgYW5kIHdvcmxkIHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzdGF0c1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZVxuICAgICAqL1xuICAgIFJlbmRlci5zdGF0cyA9IGZ1bmN0aW9uKHJlbmRlciwgY29udGV4dCwgdGltZSkge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBwYXJ0cyA9IDAsXG4gICAgICAgICAgICB3aWR0aCA9IDU1LFxuICAgICAgICAgICAgaGVpZ2h0ID0gNDQsXG4gICAgICAgICAgICB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8gY291bnQgcGFydHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHBhcnRzICs9IGJvZGllc1tpXS5wYXJ0cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZWN0aW9uc1xuICAgICAgICB2YXIgc2VjdGlvbnMgPSB7XG4gICAgICAgICAgICAnUGFydCc6IHBhcnRzLFxuICAgICAgICAgICAgJ0JvZHknOiBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgJ0NvbnMnOiBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMod29ybGQpLmxlbmd0aCxcbiAgICAgICAgICAgICdDb21wJzogQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMod29ybGQpLmxlbmd0aCxcbiAgICAgICAgICAgICdQYWlyJzogZW5naW5lLnBhaXJzLmxpc3QubGVuZ3RoXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMGUwZjE5JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCAqIDUuNSwgaGVpZ2h0KTtcblxuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTJweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ3JpZ2h0JztcblxuICAgICAgICAvLyBzZWN0aW9uc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VjdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gc2VjdGlvbnNba2V5XTtcbiAgICAgICAgICAgIC8vIGxhYmVsXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjYWFhJztcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoa2V5LCB4ICsgd2lkdGgsIHkgKyA4KTtcblxuICAgICAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChzZWN0aW9uLCB4ICsgd2lkdGgsIHkgKyAyNik7XG5cbiAgICAgICAgICAgIHggKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBlbmdpbmUgYW5kIHJlbmRlciBwZXJmb3JtYW5jZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcGVyZm9ybWFuY2VcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnBlcmZvcm1hbmNlID0gZnVuY3Rpb24ocmVuZGVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgdGltaW5nID0gcmVuZGVyLnRpbWluZyxcbiAgICAgICAgICAgIGRlbHRhSGlzdG9yeSA9IHRpbWluZy5kZWx0YUhpc3RvcnksXG4gICAgICAgICAgICBlbGFwc2VkSGlzdG9yeSA9IHRpbWluZy5lbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5ID0gdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5LFxuICAgICAgICAgICAgZW5naW5lRGVsdGFIaXN0b3J5ID0gdGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeSxcbiAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRIaXN0b3J5ID0gdGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5LFxuICAgICAgICAgICAgbGFzdEVuZ2luZURlbHRhID0gZW5naW5lLnRpbWluZy5sYXN0RGVsdGE7XG4gICAgICAgIFxuICAgICAgICB2YXIgZGVsdGFNZWFuID0gX21lYW4oZGVsdGFIaXN0b3J5KSxcbiAgICAgICAgICAgIGVsYXBzZWRNZWFuID0gX21lYW4oZWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgZW5naW5lRGVsdGFNZWFuID0gX21lYW4oZW5naW5lRGVsdGFIaXN0b3J5KSxcbiAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRNZWFuID0gX21lYW4oZW5naW5lRWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZE1lYW4gPSBfbWVhbih0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeSksXG4gICAgICAgICAgICByYXRlTWVhbiA9ICh0aW1lc3RhbXBFbGFwc2VkTWVhbiAvIGRlbHRhTWVhbikgfHwgMCxcbiAgICAgICAgICAgIGZwcyA9ICgxMDAwIC8gZGVsdGFNZWFuKSB8fCAwO1xuXG4gICAgICAgIHZhciBncmFwaEhlaWdodCA9IDQsXG4gICAgICAgICAgICBnYXAgPSAxMixcbiAgICAgICAgICAgIHdpZHRoID0gNjAsXG4gICAgICAgICAgICBoZWlnaHQgPSAzNCxcbiAgICAgICAgICAgIHggPSAxMCxcbiAgICAgICAgICAgIHkgPSA2OTtcblxuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMwZTBmMTknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDUwLCBnYXAgKiA0ICsgd2lkdGggKiA1ICsgMjIsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gc2hvdyBGUFNcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHgsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZGVsdGFIaXN0b3J5Lmxlbmd0aCwgXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGZwcykgKyAnIGZwcycsIFxuICAgICAgICAgICAgZnBzIC8gUmVuZGVyLl9nb29kRnBzLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGRlbHRhSGlzdG9yeVtpXSAvIGRlbHRhTWVhbikgLSAxOyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyBlbmdpbmUgZGVsdGFcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyBnYXAgKyB3aWR0aCwgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCBlbmdpbmVEZWx0YUhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgbGFzdEVuZ2luZURlbHRhLnRvRml4ZWQoMikgKyAnIGR0JywgXG4gICAgICAgICAgICBSZW5kZXIuX2dvb2REZWx0YSAvIGxhc3RFbmdpbmVEZWx0YSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChlbmdpbmVEZWx0YUhpc3RvcnlbaV0gLyBlbmdpbmVEZWx0YU1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZW5naW5lIHVwZGF0ZSB0aW1lXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDIsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgZW5naW5lRWxhcHNlZE1lYW4udG9GaXhlZCgyKSArICcgdXQnLCBcbiAgICAgICAgICAgIDEgLSAoZW5naW5lRWxhcHNlZE1lYW4gLyBSZW5kZXIuX2dvb2RGcHMpLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVuZ2luZUVsYXBzZWRIaXN0b3J5W2ldIC8gZW5naW5lRWxhcHNlZE1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgcmVuZGVyIHRpbWVcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyAoZ2FwICsgd2lkdGgpICogMywgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCBlbGFwc2VkSGlzdG9yeS5sZW5ndGgsXG4gICAgICAgICAgICBlbGFwc2VkTWVhbi50b0ZpeGVkKDIpICsgJyBydCcsIFxuICAgICAgICAgICAgMSAtIChlbGFwc2VkTWVhbiAvIFJlbmRlci5fZ29vZEZwcyksXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZWxhcHNlZEhpc3RvcnlbaV0gLyBlbGFwc2VkTWVhbikgLSAxOyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyBlZmZlY3RpdmUgc3BlZWRcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyAoZ2FwICsgd2lkdGgpICogNCwgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS5sZW5ndGgsIFxuICAgICAgICAgICAgcmF0ZU1lYW4udG9GaXhlZCgyKSArICcgeCcsIFxuICAgICAgICAgICAgcmF0ZU1lYW4gKiByYXRlTWVhbiAqIHJhdGVNZWFuLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKCgodGltZXN0YW1wRWxhcHNlZEhpc3RvcnlbaV0gLyBkZWx0YUhpc3RvcnlbaV0pIC8gcmF0ZU1lYW4pIHx8IDApIC0gMTsgfVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgbGFiZWwsIGluZGljYXRvciBhbmQgYSBjaGFydC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc3RhdHVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5kaWNhdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcGxvdFlcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RhdHVzID0gZnVuY3Rpb24oY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY291bnQsIGxhYmVsLCBpbmRpY2F0b3IsIHBsb3RZKSB7XG4gICAgICAgIC8vIGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjODg4JztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzQ0NCc7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5ICsgNywgd2lkdGgsIDEpO1xuXG4gICAgICAgIC8vIGNoYXJ0XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHgsIHkgKyA3IC0gaGVpZ2h0ICogQ29tbW9uLmNsYW1wKDAuNCAqIHBsb3RZKDApLCAtMiwgMikpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdpZHRoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHggKyBpLCB5ICsgNyAtIChpIDwgY291bnQgPyBoZWlnaHQgKiBDb21tb24uY2xhbXAoMC40ICogcGxvdFkoaSksIC0yLCAyKSA6IDApKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGluZGljYXRvclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdoc2woJyArIENvbW1vbi5jbGFtcCgyNSArIDk1ICogaW5kaWNhdG9yLCAwLCAxMjApICsgJywxMDAlLDYwJSknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHkgLSA3LCA0LCA0KTtcblxuICAgICAgICAvLyBsYWJlbFxuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTJweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2VlZSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQobGFiZWwsIHggKyB3aWR0aCwgeSAtIDUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludFtdfSBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5jb25zdHJhaW50cyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWNvbnN0cmFpbnQucmVuZGVyLnZpc2libGUgfHwgIWNvbnN0cmFpbnQucG9pbnRBIHx8ICFjb25zdHJhaW50LnBvaW50QilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgZW5kO1xuXG4gICAgICAgICAgICBpZiAoYm9keUEpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBjb25zdHJhaW50LnBvaW50QTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLnR5cGUgPT09ICdwaW4nKSB7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhzdGFydC54LCBzdGFydC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvZHlCKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjb25zdHJhaW50LnBvaW50QjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLnR5cGUgPT09ICdzcHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIoZW5kLCBzdGFydCksXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWwgPSBWZWN0b3IucGVycChWZWN0b3Iubm9ybWFsaXNlKGRlbHRhKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2lscyA9IE1hdGguY2VpbChDb21tb24uY2xhbXAoY29uc3RyYWludC5sZW5ndGggLyA1LCAxMiwgMjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGNvaWxzOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGogJSAyID09PSAwID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydC54ICsgZGVsdGEueCAqIChqIC8gY29pbHMpICsgbm9ybWFsLnggKiBvZmZzZXQgKiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LnkgKyBkZWx0YS55ICogKGogLyBjb2lscykgKyBub3JtYWwueSAqIG9mZnNldCAqIDRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIubGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSBjb25zdHJhaW50LnJlbmRlci5saW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IGNvbnN0cmFpbnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci5hbmNob3JzKSB7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSBjb25zdHJhaW50LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuYXJjKHN0YXJ0LngsIHN0YXJ0LnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhlbmQueCwgZW5kLnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZGllc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZGllcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlcyA9IG9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXMgfHwgIW9wdGlvbnMud2lyZWZyYW1lcyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dTbGVlcGluZyAmJiBib2R5LmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5nbG9iYWxBbHBoYSA9IDAuNSAqIHBhcnQucmVuZGVyLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0LnJlbmRlci5vcGFjaXR5ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSBwYXJ0LnJlbmRlci5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnJlbmRlci5zcHJpdGUgJiYgcGFydC5yZW5kZXIuc3ByaXRlLnRleHR1cmUgJiYgIW9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0IHNwcml0ZVxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlID0gcGFydC5yZW5kZXIuc3ByaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSA9IF9nZXRUZXh0dXJlKHJlbmRlciwgc3ByaXRlLnRleHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgYy5yb3RhdGUocGFydC5hbmdsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYy5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCAqIC1zcHJpdGUueE9mZnNldCAqIHNwcml0ZS54U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCAqIC1zcHJpdGUueU9mZnNldCAqIHNwcml0ZS55U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLndpZHRoICogc3ByaXRlLnhTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaGVpZ2h0ICogc3ByaXRlLnlTY2FsZVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldmVydCB0cmFuc2xhdGlvbiwgaG9wZWZ1bGx5IGZhc3RlciB0aGFuIHNhdmUgLyByZXN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGMucm90YXRlKC1wYXJ0LmFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgYy50cmFuc2xhdGUoLXBhcnQucG9zaXRpb24ueCwgLXBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydCBwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LmNpcmNsZVJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYXJjKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55LCBwYXJ0LmNpcmNsZVJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnZlcnRpY2VzW2ogLSAxXS5pc0ludGVybmFsIHx8IHNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudmVydGljZXNbal0uaXNJbnRlcm5hbCAmJiAhc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLngsIHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSBwYXJ0LnJlbmRlci5maWxsU3R5bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnJlbmRlci5saW5lV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVXaWR0aCA9IHBhcnQucmVuZGVyLmxpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gcGFydC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJyNiYmInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE9wdGltaXNlZCBtZXRob2QgZm9yIGRyYXdpbmcgYm9keSB3aXJlZnJhbWVzIGluIG9uZSBwYXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlXaXJlZnJhbWVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVdpcmVmcmFtZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlcyA9IHJlbmRlci5vcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgYWxsIGJvZGllc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG5cbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQudmVydGljZXNbaiAtIDFdLmlzSW50ZXJuYWwgfHwgc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueCwgcGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJyNiYmInO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcHRpbWlzZWQgbWV0aG9kIGZvciBkcmF3aW5nIGJvZHkgY29udmV4IGh1bGwgd2lyZWZyYW1lcyBpbiBvbmUgcGFzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5Q29udmV4SHVsbHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5Q29udmV4SHVsbHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb252ZXggaHVsbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlIHx8IGJvZHkucGFydHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5LnZlcnRpY2VzWzBdLngsIGJvZHkudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCBib2R5LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYy5saW5lVG8oYm9keS52ZXJ0aWNlc1tqXS54LCBib2R5LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5LnZlcnRpY2VzWzBdLngsIGJvZHkudmVydGljZXNbMF0ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIpJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBib2R5IHZlcnRleCBudW1iZXJzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCB2ZXJ0ZXhOdW1iZXJzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIudmVydGV4TnVtYmVycyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICBmb3IgKGsgPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBwYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNba107XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIpJztcbiAgICAgICAgICAgICAgICAgICAgYy5maWxsVGV4dChpICsgJ18nICsgaiwgcGFydC5wb3NpdGlvbi54ICsgKHBhcnQudmVydGljZXNbal0ueCAtIHBhcnQucG9zaXRpb24ueCkgKiAwLjgsIHBhcnQucG9zaXRpb24ueSArIChwYXJ0LnZlcnRpY2VzW2pdLnkgLSBwYXJ0LnBvc2l0aW9uLnkpICogMC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBtb3VzZSBwb3NpdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgbW91c2VQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5tb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24ocmVuZGVyLCBtb3VzZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG4gICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC44KSc7XG4gICAgICAgIGMuZmlsbFRleHQobW91c2UucG9zaXRpb24ueCArICcgICcgKyBtb3VzZS5wb3NpdGlvbi55LCBtb3VzZS5wb3NpdGlvbi54ICsgNSwgbW91c2UucG9zaXRpb24ueSAtIDUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGJvdW5kc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5Qm91bmRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUJvdW5kcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnM7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LnJlbmRlci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBjLnJlY3QocGFydC5ib3VuZHMubWluLngsIHBhcnQuYm91bmRzLm1pbi55LCBwYXJ0LmJvdW5kcy5tYXgueCAtIHBhcnQuYm91bmRzLm1pbi54LCBwYXJ0LmJvdW5kcy5tYXgueSAtIHBhcnQuYm91bmRzLm1pbi55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wOCknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMSknO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGFuZ2xlIGluZGljYXRvcnMgYW5kIGF4ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUF4ZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5QXhlcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgcGFydHMgPSBib2R5LnBhcnRzO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dBeGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGFsbCBheGVzXG4gICAgICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydC5heGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXhpcyA9IHBhcnQuYXhlc1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQucG9zaXRpb24ueCArIGF4aXMueCAqIDIwLCBwYXJ0LnBvc2l0aW9uLnkgKyBheGlzLnkgKiAyMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnQuYXhlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIGEgc2luZ2xlIGF4aXMgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbygocGFydC52ZXJ0aWNlc1swXS54ICsgcGFydC52ZXJ0aWNlc1twYXJ0LnZlcnRpY2VzLmxlbmd0aC0xXS54KSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnQudmVydGljZXNbMF0ueSArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueSkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcbiAgICAgICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ292ZXJsYXknO1xuICAgICAgICAgICAgYy5saW5lV2lkdGggPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IHBvc2l0aW9uc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5UG9zaXRpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVBvc2l0aW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGN1cnJlbnQgcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuICAgICAgICAgICAgICAgIGMuYXJjKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55LCAzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdpbmRpYW5yZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjUpJztcbiAgICAgICAgfVxuICAgICAgICBjLmZpbGwoKTtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBwcmV2aW91cyBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIGlmIChib2R5LnJlbmRlci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgYy5hcmMoYm9keS5wb3NpdGlvblByZXYueCwgYm9keS5wb3NpdGlvblByZXYueSwgMiwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC44KSc7XG4gICAgICAgIGMuZmlsbCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IHZlbG9jaXR5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlWZWxvY2l0eSA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgdmVsb2NpdHkgPSBCb2R5LmdldFZlbG9jaXR5KGJvZHkpO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5LnBvc2l0aW9uLnggKyB2ZWxvY2l0eS54LCBib2R5LnBvc2l0aW9uLnkgKyB2ZWxvY2l0eS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMztcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgaWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlJZHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5SWRzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFib2RpZXNbaV0ucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICBjLmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgICAgICAgICAgIGMuZmlsbFRleHQocGFydC5pZCwgcGFydC5wb3NpdGlvbi54ICsgMTAsIHBhcnQucG9zaXRpb24ueSAtIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5jb2xsaXNpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBwYWlycywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY29ycmVjdGVkLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbGxpc2lvbiBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gcGFpci5hY3RpdmVDb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4ID0gY29udGFjdC52ZXJ0ZXg7XG4gICAgICAgICAgICAgICAgYy5yZWN0KHZlcnRleC54IC0gMS41LCB2ZXJ0ZXgueSAtIDEuNSwgMy41LCAzLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5maWxsKCk7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29sbGlzaW9uIG5vcm1hbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG5cbiAgICAgICAgICAgIGlmIChwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsUG9zWCA9IHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LngsXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1kgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC55O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1ggPSAocGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueCArIHBhaXIuYWN0aXZlQ29udGFjdHNbMV0udmVydGV4LngpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWSA9IChwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC55ICsgcGFpci5hY3RpdmVDb250YWN0c1sxXS52ZXJ0ZXgueSkgLyAyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24uYm9keUIgPT09IGNvbGxpc2lvbi5zdXBwb3J0c1swXS5ib2R5IHx8IGNvbGxpc2lvbi5ib2R5QS5pc1N0YXRpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhub3JtYWxQb3NYIC0gY29sbGlzaW9uLm5vcm1hbC54ICogOCwgbm9ybWFsUG9zWSAtIGNvbGxpc2lvbi5ub3JtYWwueSAqIDgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKG5vcm1hbFBvc1ggKyBjb2xsaXNpb24ubm9ybWFsLnggKiA4LCBub3JtYWxQb3NZICsgY29sbGlzaW9uLm5vcm1hbC55ICogOCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8obm9ybWFsUG9zWCwgbm9ybWFsUG9zWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzZXBhcmF0aW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuc2VwYXJhdGlvbnMgPSBmdW5jdGlvbihyZW5kZXIsIHBhaXJzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb3JyZWN0ZWQsXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgc2VwYXJhdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgICAgICB2YXIgayA9IDE7XG5cbiAgICAgICAgICAgIGlmICghYm9keUIuaXNTdGF0aWMgJiYgIWJvZHlBLmlzU3RhdGljKSBrID0gMC41O1xuICAgICAgICAgICAgaWYgKGJvZHlCLmlzU3RhdGljKSBrID0gMDtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keUIucG9zaXRpb24ueCwgYm9keUIucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5Qi5wb3NpdGlvbi54IC0gY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggKiBrLCBib2R5Qi5wb3NpdGlvbi55IC0gY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgKiBrKTtcblxuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGlmICghYm9keUIuaXNTdGF0aWMgJiYgIWJvZHlBLmlzU3RhdGljKSBrID0gMC41O1xuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU3RhdGljKSBrID0gMDtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keUEucG9zaXRpb24ueCwgYm9keUEucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5QS5wb3NpdGlvbi54ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggKiBrLCBib2R5QS5wb3NpdGlvbi55ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgKiBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC41KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgaW5zcGVjdG9yXG4gICAgICogQHBhcmFtIHtpbnNwZWN0b3J9IGluc3BlY3RvclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5pbnNwZWN0b3IgPSBmdW5jdGlvbihpbnNwZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IGluc3BlY3Rvci5lbmdpbmUsXG4gICAgICAgICAgICBzZWxlY3RlZCA9IGluc3BlY3Rvci5zZWxlY3RlZCxcbiAgICAgICAgICAgIHJlbmRlciA9IGluc3BlY3Rvci5yZW5kZXIsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib3VuZHM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgICAgICBib3VuZHNIZWlnaHQgPSByZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib3VuZHNTY2FsZVggPSBib3VuZHNXaWR0aCAvIHJlbmRlci5vcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICAgICAgY29udGV4dC5zY2FsZSgxIC8gYm91bmRzU2NhbGVYLCAxIC8gYm91bmRzU2NhbGVZKTtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC1yZW5kZXIuYm91bmRzLm1pbi54LCAtcmVuZGVyLmJvdW5kcy5taW4ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHNlbGVjdGVkW2ldLmRhdGE7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC45KSc7XG4gICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFsxLDJdKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgYm9keSBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgYm91bmRzID0gaXRlbS5ib3VuZHM7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnJlY3QoTWF0aC5mbG9vcihib3VuZHMubWluLnggLSAzKSwgTWF0aC5mbG9vcihib3VuZHMubWluLnkgLSAzKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihib3VuZHMubWF4LnggLSBib3VuZHMubWluLnggKyA2KSwgTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkgKyA2KSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGNvbnN0cmFpbnQgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IGl0ZW0ucG9pbnRBO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmJvZHlBKVxuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IGl0ZW0ucG9pbnRCO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmMocG9pbnQueCwgcG9pbnQueSwgMTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtdKTtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC0wLjUsIC0wLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVuZGVyIHNlbGVjdGlvbiByZWdpb25cbiAgICAgICAgaWYgKGluc3BlY3Rvci5zZWxlY3RTdGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjYpJztcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuMSknO1xuICAgICAgICAgICAgYm91bmRzID0gaW5zcGVjdG9yLnNlbGVjdEJvdW5kcztcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3QoTWF0aC5mbG9vcihib3VuZHMubWluLngpLCBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSksXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihib3VuZHMubWF4LnggLSBib3VuZHMubWluLngpLCBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSkpO1xuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC0wLjUsIC0wLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKVxuICAgICAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcmVuZGVyIHRpbWluZy5cbiAgICAgKiBAbWV0aG9kIF91cGRhdGVUaW1pbmdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIHZhciBfdXBkYXRlVGltaW5nID0gZnVuY3Rpb24ocmVuZGVyLCB0aW1lKSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgdGltaW5nID0gcmVuZGVyLnRpbWluZyxcbiAgICAgICAgICAgIGhpc3RvcnlTaXplID0gdGltaW5nLmhpc3RvcnlTaXplLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gZW5naW5lLnRpbWluZy50aW1lc3RhbXA7XG5cbiAgICAgICAgdGltaW5nLmRlbHRhID0gdGltZSAtIHRpbWluZy5sYXN0VGltZSB8fCBSZW5kZXIuX2dvb2REZWx0YTtcbiAgICAgICAgdGltaW5nLmxhc3RUaW1lID0gdGltZTtcblxuICAgICAgICB0aW1pbmcudGltZXN0YW1wRWxhcHNlZCA9IHRpbWVzdGFtcCAtIHRpbWluZy5sYXN0VGltZXN0YW1wIHx8IDA7XG4gICAgICAgIHRpbWluZy5sYXN0VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG4gICAgICAgIHRpbWluZy5kZWx0YUhpc3RvcnkudW5zaGlmdCh0aW1pbmcuZGVsdGEpO1xuICAgICAgICB0aW1pbmcuZGVsdGFIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5kZWx0YUhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeS51bnNoaWZ0KGVuZ2luZS50aW1pbmcubGFzdERlbHRhKTtcbiAgICAgICAgdGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS51bnNoaWZ0KHRpbWluZy50aW1lc3RhbXBFbGFwc2VkKTtcbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnkudW5zaGlmdChlbmdpbmUudGltaW5nLmxhc3RFbGFwc2VkKTtcbiAgICAgICAgdGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZWxhcHNlZEhpc3RvcnkudW5zaGlmdCh0aW1pbmcubGFzdEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcuZWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtZWFuIHZhbHVlIG9mIHRoZSBnaXZlbiBudW1iZXJzLlxuICAgICAqIEBtZXRob2QgX21lYW5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIG1lYW4gb2YgZ2l2ZW4gdmFsdWVzXG4gICAgICovXG4gICAgdmFyIF9tZWFuID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJlc3VsdCAvIHZhbHVlcy5sZW5ndGgpIHx8IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUNhbnZhc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHdpZHRoXG4gICAgICogQHBhcmFtIHt9IGhlaWdodFxuICAgICAqIEByZXR1cm4gY2FudmFzXG4gICAgICovXG4gICAgdmFyIF9jcmVhdGVDYW52YXMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgY2FudmFzLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwaXhlbCByYXRpbyBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBtZXRob2QgX2dldFBpeGVsUmF0aW9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbnZhc1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gcGl4ZWwgcmF0aW9cbiAgICAgKi9cbiAgICB2YXIgX2dldFBpeGVsUmF0aW8gPSBmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgICAgIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICAgICAgYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyA9IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgICAgICByZXR1cm4gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW87XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlcXVlc3RlZCB0ZXh0dXJlIChhbiBJbWFnZSkgdmlhIGl0cyBwYXRoXG4gICAgICogQG1ldGhvZCBfZ2V0VGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVBhdGhcbiAgICAgKiBAcmV0dXJuIHtJbWFnZX0gdGV4dHVyZVxuICAgICAqL1xuICAgIHZhciBfZ2V0VGV4dHVyZSA9IGZ1bmN0aW9uKHJlbmRlciwgaW1hZ2VQYXRoKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdO1xuXG4gICAgICAgIGlmIChpbWFnZSlcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcblxuICAgICAgICBpbWFnZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlUGF0aDtcblxuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgdG8gdGhlIGNhbnZhcyB1c2luZyBDU1MuXG4gICAgICogQG1ldGhvZCBhcHBseUJhY2tncm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZFxuICAgICAqL1xuICAgIHZhciBfYXBwbHlCYWNrZ3JvdW5kID0gZnVuY3Rpb24ocmVuZGVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHZhciBjc3NCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcblxuICAgICAgICBpZiAoLyhqcGd8Z2lmfHBuZykkLy50ZXN0KGJhY2tncm91bmQpKVxuICAgICAgICAgICAgY3NzQmFja2dyb3VuZCA9ICd1cmwoJyArIGJhY2tncm91bmQgKyAnKSc7XG5cbiAgICAgICAgcmVuZGVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gY3NzQmFja2dyb3VuZDtcbiAgICAgICAgcmVuZGVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgICAgICByZW5kZXIuY3VycmVudEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBiZWZvcmUgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbmRlclxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJhY2stcmVmZXJlbmNlIHRvIHRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlLlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcHJvcGVydHkgY29udHJvbGxlclxuICAgICAqIEB0eXBlIHJlbmRlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGBNYXR0ZXIuRW5naW5lYCBpbnN0YW5jZSB0byBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuZ2luZVxuICAgICAqIEB0eXBlIGVuZ2luZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGNhbnZhcyBpcyB0byBiZSBpbnNlcnRlZCAoaWYgYHJlbmRlci5jYW52YXNgIGhhcyBub3QgYmVlbiBzcGVjaWZpZWQpXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZWxlbWVudFxuICAgICAqIEB0eXBlIEhUTUxFbGVtZW50XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbnZhcyBlbGVtZW50IHRvIHJlbmRlciB0by4gSWYgbm90IHNwZWNpZmllZCwgb25lIHdpbGwgYmUgY3JlYXRlZCBpZiBgcmVuZGVyLmVsZW1lbnRgIGhhcyBiZWVuIHNwZWNpZmllZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjYW52YXNcbiAgICAgKiBAdHlwZSBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgc3BlY2lmaWVzIHRoZSBkcmF3aW5nIHZpZXcgcmVnaW9uLlxuICAgICAqIFJlbmRlcmluZyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmb3JtZWQgYW5kIHNjYWxlZCB0byBmaXQgd2l0aGluIHRoZSBjYW52YXMgc2l6ZSAoYHJlbmRlci5vcHRpb25zLndpZHRoYCBhbmQgYHJlbmRlci5vcHRpb25zLmhlaWdodGApLlxuICAgICAqIFRoaXMgYWxsb3dzIGZvciBjcmVhdGluZyB2aWV3cyB0aGF0IGNhbiBwYW4gb3Igem9vbSBhcm91bmQgdGhlIHNjZW5lLlxuICAgICAqIFlvdSBtdXN0IGFsc28gc2V0IGByZW5kZXIub3B0aW9ucy5oYXNCb3VuZHNgIHRvIGB0cnVlYCB0byBlbmFibGUgYm91bmRlZCByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgMmQgcmVuZGVyaW5nIGNvbnRleHQgZnJvbSB0aGUgYHJlbmRlci5jYW52YXNgIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29udGV4dFxuICAgICAqIEB0eXBlIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwcml0ZSB0ZXh0dXJlIGNhY2hlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRleHR1cmVzXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBtb3VzZSB0byByZW5kZXIgaWYgYHJlbmRlci5vcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uYCBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9mIHRoZSByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSBgcmVuZGVyLmNhbnZhc2AgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBTZWUgYWxzbyB0aGUgYG9wdGlvbnMucGl4ZWxSYXRpb2AgcHJvcGVydHkgdG8gY2hhbmdlIHJlbmRlciBxdWFsaXR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMud2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA4MDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgaGVpZ2h0IGluIHBpeGVscyBvZiB0aGUgYHJlbmRlci5jYW52YXNgIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogU2VlIGFsc28gdGhlIGBvcHRpb25zLnBpeGVsUmF0aW9gIHByb3BlcnR5IHRvIGNoYW5nZSByZW5kZXIgcXVhbGl0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIFtwaXhlbCByYXRpb10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9kZXZpY2VQaXhlbFJhdGlvKSB0byB1c2Ugd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5waXhlbFJhdGlvXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBDU1MgYmFja2dyb3VuZCBjb2xvciBzdHJpbmcgdG8gdXNlIHdoZW4gYHJlbmRlci5vcHRpb25zLndpcmVmcmFtZXNgIGlzIGRpc2FibGVkLlxuICAgICAqIFRoaXMgbWF5IGJlIGFsc28gc2V0IHRvIGAndHJhbnNwYXJlbnQnYCBvciBlcXVpdmFsZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuYmFja2dyb3VuZFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICcjMTQxNTFmJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBDU1MgYmFja2dyb3VuZCBjb2xvciBzdHJpbmcgdG8gdXNlIHdoZW4gYHJlbmRlci5vcHRpb25zLndpcmVmcmFtZXNgIGlzIGVuYWJsZWQuXG4gICAgICogVGhpcyBtYXkgYmUgYWxzbyBzZXQgdG8gYCd0cmFuc3BhcmVudCdgIG9yIGVxdWl2YWxlbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aXJlZnJhbWVCYWNrZ3JvdW5kXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgJyMxNDE1MWYnXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgaWYgYHJlbmRlci5ib3VuZHNgIHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuaGFzQm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgYWxsIGRlYnVnIGluZm9ybWF0aW9uIG92ZXJsYXlzIHRvZ2V0aGVyLiAgXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmQgaGFzIHByaW9yaXR5IG92ZXIgdGhlIHZhbHVlcyBvZjpcbiAgICAgKlxuICAgICAqIC0gYHJlbmRlci5vcHRpb25zLnNob3dTdGF0c2BcbiAgICAgKiAtIGByZW5kZXIub3B0aW9ucy5zaG93UGVyZm9ybWFuY2VgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93RGVidWdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgZW5naW5lIHN0YXRzIGluZm8gb3ZlcmxheS4gIFxuICAgICAqIEZyb20gbGVmdCB0byByaWdodCwgdGhlIHZhbHVlcyBzaG93biBhcmU6XG4gICAgICpcbiAgICAgKiAtIGJvZHkgcGFydHMgdG90YWxcbiAgICAgKiAtIGJvZHkgdG90YWxcbiAgICAgKiAtIGNvbnN0cmFpbnRzIHRvdGFsXG4gICAgICogLSBjb21wb3NpdGVzIHRvdGFsXG4gICAgICogLSBjb2xsaXNpb24gcGFpcnMgdG90YWxcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTdGF0c1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHBlcmZvcm1hbmNlIGNoYXJ0cy4gIFxuICAgICAqIEZyb20gbGVmdCB0byByaWdodCwgdGhlIHZhbHVlcyBzaG93biBhcmU6XG4gICAgICpcbiAgICAgKiAtIGF2ZXJhZ2UgcmVuZGVyIGZyZXF1ZW5jeSAoZS5nLiA2MCBmcHMpXG4gICAgICogLSBleGFjdCBlbmdpbmUgZGVsdGEgdGltZSB1c2VkIGZvciBsYXN0IHVwZGF0ZSAoZS5nLiAxNi42Nm1zKVxuICAgICAqIC0gYXZlcmFnZSBlbmdpbmUgZXhlY3V0aW9uIGR1cmF0aW9uIChlLmcuIDUuMDBtcylcbiAgICAgKiAtIGF2ZXJhZ2UgcmVuZGVyIGV4ZWN1dGlvbiBkdXJhdGlvbiAoZS5nLiAwLjQwbXMpXG4gICAgICogLSBhdmVyYWdlIGVmZmVjdGl2ZSBwbGF5IHNwZWVkIChlLmcuICcxLjAweCcgaXMgJ3JlYWwtdGltZScpXG4gICAgICpcbiAgICAgKiBFYWNoIHZhbHVlIGlzIHJlY29yZGVkIG92ZXIgYSBmaXhlZCBzYW1wbGUgb2YgcGFzdCBmcmFtZXMgKDYwIGZyYW1lcykuXG4gICAgICpcbiAgICAgKiBBIGNoYXJ0IHNob3duIGJlbG93IGVhY2ggdmFsdWUgaW5kaWNhdGVzIHRoZSB2YXJpYW5jZSBmcm9tIHRoZSBhdmVyYWdlIG92ZXIgdGhlIHNhbXBsZS5cbiAgICAgKiBUaGUgbW9yZSBzdGFibGUgb3IgZml4ZWQgdGhlIHZhbHVlIGlzIHRoZSBmbGF0dGVyIHRoZSBjaGFydCB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dQZXJmb3JtYW5jZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSByZW5kZXJpbmcgZW50aXJlbHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5lbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gdG9nZ2xlIHdpcmVmcmFtZSByZW5kZXJpbmcgb3RoZXJ3aXNlIHNvbGlkIGZpbGwgcmVuZGVyaW5nIGlzIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aXJlZnJhbWVzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSBzbGVlcGluZyBib2RpZXMgaW5kaWNhdG9ycy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGRlYnVnIGluZm9ybWF0aW9uIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93RGVidWdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgY29sbGlzaW9uIGJyb2FkcGhhc2UgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIG5vIGxvbmdlciBpbXBsZW1lbnRlZFxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dCcm9hZHBoYXNlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYm91bmRzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Qm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgdmVsb2NpdHkgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dWZWxvY2l0eVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGNvbGxpc2lvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dDb2xsaXNpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGNvbGxpc2lvbiByZXNvbHZlciBzZXBhcmF0aW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYXhlcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0F4ZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBwb3NpdGlvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dQb3NpdGlvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBhbmdsZSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYW5kIHBhcnQgaWRzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93SWRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgdmVydGV4IG51bWJlcnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dWZXJ0ZXhOdW1iZXJzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgY29udmV4IGh1bGxzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Q29udmV4SHVsbHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBpbnRlcm5hbCBlZGdlcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgbW91c2UgcG9zaXRpb24gZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUnVubmVyYCBtb2R1bGUgaXMgYW4gb3B0aW9uYWwgdXRpbGl0eSB3aGljaCBwcm92aWRlcyBhIGdhbWUgbG9vcCwgXG4qIHRoYXQgaGFuZGxlcyBjb250aW51b3VzbHkgdXBkYXRpbmcgYSBgTWF0dGVyLkVuZ2luZWAgZm9yIHlvdSB3aXRoaW4gYSBicm93c2VyLlxuKiBJdCBpcyBpbnRlbmRlZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlYnVnZ2luZyBwdXJwb3NlcywgYnV0IG1heSBhbHNvIGJlIHN1aXRhYmxlIGZvciBzaW1wbGUgZ2FtZXMuXG4qIElmIHlvdSBhcmUgdXNpbmcgeW91ciBvd24gZ2FtZSBsb29wIGluc3RlYWQsIHRoZW4geW91IGRvIG5vdCBuZWVkIHRoZSBgTWF0dGVyLlJ1bm5lcmAgbW9kdWxlLlxuKiBJbnN0ZWFkIGp1c3QgY2FsbCBgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhKWAgaW4geW91ciBvd24gbG9vcC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFJ1bm5lclxuKi9cblxudmFyIFJ1bm5lciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bm5lcjtcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgRW5naW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgdmFyIF9mcmFtZVRpbWVvdXQ7XG5cbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKXsgXG4gICAgICAgICAgICBfZnJhbWVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soQ29tbW9uLm5vdygpKTsgXG4gICAgICAgICAgICB9LCAxMDAwIC8gNjApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF9mcmFtZVRpbWVvdXQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgUnVubmVyLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICovXG4gICAgUnVubmVyLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZnBzOiA2MCxcbiAgICAgICAgICAgIGRlbHRhU2FtcGxlU2l6ZTogNjAsXG4gICAgICAgICAgICBjb3VudGVyVGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgZnJhbWVDb3VudGVyOiAwLFxuICAgICAgICAgICAgZGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIHRpbWVQcmV2OiBudWxsLFxuICAgICAgICAgICAgZnJhbWVSZXF1ZXN0SWQ6IG51bGwsXG4gICAgICAgICAgICBpc0ZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcnVubmVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgcnVubmVyLmRlbHRhID0gcnVubmVyLmRlbHRhIHx8IDEwMDAgLyBydW5uZXIuZnBzO1xuICAgICAgICBydW5uZXIuZGVsdGFNaW4gPSBydW5uZXIuZGVsdGFNaW4gfHwgMTAwMCAvIHJ1bm5lci5mcHM7XG4gICAgICAgIHJ1bm5lci5kZWx0YU1heCA9IHJ1bm5lci5kZWx0YU1heCB8fCAxMDAwIC8gKHJ1bm5lci5mcHMgKiAwLjUpO1xuICAgICAgICBydW5uZXIuZnBzID0gMTAwMCAvIHJ1bm5lci5kZWx0YTtcblxuICAgICAgICByZXR1cm4gcnVubmVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250aW51b3VzbHkgdGlja3MgYSBgTWF0dGVyLkVuZ2luZWAgYnkgY2FsbGluZyBgUnVubmVyLnRpY2tgIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIucnVuID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgLy8gY3JlYXRlIHJ1bm5lciBpZiBlbmdpbmUgaXMgZmlyc3QgYXJndW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiBydW5uZXIucG9zaXRpb25JdGVyYXRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZW5naW5lID0gcnVubmVyO1xuICAgICAgICAgICAgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgKGZ1bmN0aW9uIHJ1bih0aW1lKXtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZVJlcXVlc3RJZCA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgJiYgcnVubmVyLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBSdW5uZXIudGljayhydW5uZXIsIGVuZ2luZSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBnYW1lIGxvb3AgdXRpbGl0eSB0aGF0IHVwZGF0ZXMgdGhlIGVuZ2luZSBhbmQgcmVuZGVyZXIgYnkgb25lIHN0ZXAgKGEgJ3RpY2snKS5cbiAgICAgKiBGZWF0dXJlcyBkZWx0YSBzbW9vdGhpbmcsIHRpbWUgY29ycmVjdGlvbiBhbmQgZml4ZWQgb3IgZHluYW1pYyB0aW1pbmcuXG4gICAgICogQ29uc2lkZXIganVzdCBgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhKWAgaWYgeW91J3JlIHVzaW5nIHlvdXIgb3duIGxvb3AuXG4gICAgICogQG1ldGhvZCB0aWNrXG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIFJ1bm5lci50aWNrID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUsIHRpbWUpIHtcbiAgICAgICAgdmFyIHRpbWluZyA9IGVuZ2luZS50aW1pbmcsXG4gICAgICAgICAgICBkZWx0YTtcblxuICAgICAgICBpZiAocnVubmVyLmlzRml4ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpeGVkIHRpbWVzdGVwXG4gICAgICAgICAgICBkZWx0YSA9IHJ1bm5lci5kZWx0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGR5bmFtaWMgdGltZXN0ZXAgYmFzZWQgb24gd2FsbCBjbG9jayBiZXR3ZWVuIGNhbGxzXG4gICAgICAgICAgICBkZWx0YSA9ICh0aW1lIC0gcnVubmVyLnRpbWVQcmV2KSB8fCBydW5uZXIuZGVsdGE7XG4gICAgICAgICAgICBydW5uZXIudGltZVByZXYgPSB0aW1lO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzdGljYWxseSBmaWx0ZXIgZGVsdGEgb3ZlciBhIGZldyBmcmFtZXMsIHRvIGltcHJvdmUgc3RhYmlsaXR5XG4gICAgICAgICAgICBydW5uZXIuZGVsdGFIaXN0b3J5LnB1c2goZGVsdGEpO1xuICAgICAgICAgICAgcnVubmVyLmRlbHRhSGlzdG9yeSA9IHJ1bm5lci5kZWx0YUhpc3Rvcnkuc2xpY2UoLXJ1bm5lci5kZWx0YVNhbXBsZVNpemUpO1xuICAgICAgICAgICAgZGVsdGEgPSBNYXRoLm1pbi5hcHBseShudWxsLCBydW5uZXIuZGVsdGFIaXN0b3J5KTtcblxuICAgICAgICAgICAgLy8gbGltaXQgZGVsdGFcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGEgPCBydW5uZXIuZGVsdGFNaW4gPyBydW5uZXIuZGVsdGFNaW4gOiBkZWx0YTtcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGEgPiBydW5uZXIuZGVsdGFNYXggPyBydW5uZXIuZGVsdGFNYXggOiBkZWx0YTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGVuZ2luZSB0aW1pbmcgb2JqZWN0XG4gICAgICAgICAgICBydW5uZXIuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBldmVudCBvYmplY3RcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1pbmcudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVGljaycsIGV2ZW50KTtcblxuICAgICAgICAvLyBmcHMgY291bnRlclxuICAgICAgICBydW5uZXIuZnJhbWVDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aW1lIC0gcnVubmVyLmNvdW50ZXJUaW1lc3RhbXAgPj0gMTAwMCkge1xuICAgICAgICAgICAgcnVubmVyLmZwcyA9IHJ1bm5lci5mcmFtZUNvdW50ZXIgKiAoKHRpbWUgLSBydW5uZXIuY291bnRlclRpbWVzdGFtcCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wID0gdGltZTtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAndGljaycsIGV2ZW50KTtcblxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIEVuZ2luZS51cGRhdGUoZW5naW5lLCBkZWx0YSk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJUaWNrJywgZXZlbnQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUnVubmVyLnJ1bmAgb24gdGhlIGdpdmVuIGBydW5uZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogSWYgeW91IHdpc2ggdG8gb25seSB0ZW1wb3JhcmlseSBwYXVzZSB0aGUgZW5naW5lLCBzZWUgYGVuZ2luZS5lbmFibGVkYCBpbnN0ZWFkLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RvcCA9IGZ1bmN0aW9uKHJ1bm5lcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocnVubmVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGBSdW5uZXIucnVuYC5cbiAgICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RhcnQgPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSkge1xuICAgICAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYXQgdGhlIHN0YXJ0IG9mIGEgdGljaywgYmVmb3JlIGFueSB1cGRhdGVzIHRvIHRoZSBlbmdpbmUgb3IgdGltaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB0aW1pbmcgdXBkYXRlZCwgYnV0IGp1c3QgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCB0aWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhdCB0aGUgZW5kIG9mIGEgdGljaywgYWZ0ZXIgZW5naW5lIHVwZGF0ZSBhbmQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIHJ1bm5lciBpcyBydW5uaW5nIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgc3BlY2lmaWVzIGlmIHRoZSBydW5uZXIgc2hvdWxkIHVzZSBhIGZpeGVkIHRpbWVzdGVwIChvdGhlcndpc2UgaXQgaXMgdmFyaWFibGUpLlxuICAgICAqIElmIHRpbWluZyBpcyBmaXhlZCwgdGhlbiB0aGUgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZCB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIGZyYW1lIHJhdGUgKGJ1dCBiZWhhdmlvdXIgd2lsbCBiZSBkZXRlcm1pbmlzdGljKS5cbiAgICAgKiBJZiB0aGUgdGltaW5nIGlzIHZhcmlhYmxlLCB0aGVuIHRoZSBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkIHdpbGwgYmUgY29uc3RhbnQgKGFwcHJveGltYXRlbHksIGJ1dCBhdCB0aGUgY29zdCBvZiBkZXRlcm1pbmluaXNtKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc0ZpeGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0aW1lIHN0ZXAgYmV0d2VlbiB1cGRhdGVzIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBJZiBgZW5naW5lLnRpbWluZy5pc0ZpeGVkYCBpcyBzZXQgdG8gYHRydWVgLCB0aGVuIGBkZWx0YWAgaXMgZml4ZWQuXG4gICAgICogSWYgaXQgaXMgYGZhbHNlYCwgdGhlbiBgZGVsdGFgIGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgdG8gbWFpbnRhaW4gdGhlIGNvcnJlY3QgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZWx0YVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDEwMDAgLyA2MFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkNvbGxpc2lvbmAuXG4qXG4qIEFsbCB1c2FnZSBzaG91bGQgYmUgbWlncmF0ZWQgdG8gYE1hdHRlci5Db2xsaXNpb25gLlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGZvciBhIHNob3J0IHRlcm0gYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBUaGUgYE1hdHRlci5TQVRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBkZXRlY3RpbmcgY29sbGlzaW9ucyB1c2luZyB0aGUgU2VwYXJhdGluZyBBeGlzIFRoZW9yZW0uXG4qXG4qIEBjbGFzcyBTQVRcbiogQGRlcHJlY2F0ZWRcbiovXG5cbnZhciBTQVQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTQVQ7XG5cbnZhciBDb2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgZGVwcmVjYXRlZCA9IENvbW1vbi5kZXByZWNhdGVkO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgY29sbGlzaW9uIGJldHdlZW4gdHdvIGJvZGllcyB1c2luZyB0aGUgU2VwYXJhdGluZyBBeGlzIFRoZW9yZW0uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgQ29sbGlzaW9uLmNvbGxpZGVzXG4gICAgICogQG1ldGhvZCBjb2xsaWRlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKi9cbiAgICBTQVQuY29sbGlkZXMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgcmV0dXJuIENvbGxpc2lvbi5jb2xsaWRlcyhib2R5QSwgYm9keUIpO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKFNBVCwgJ2NvbGxpZGVzJywgJ1NBVC5jb2xsaWRlcyDinqQgcmVwbGFjZWQgYnkgQ29sbGlzaW9uLmNvbGxpZGVzJyk7XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuU3ZnYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY29udmVydGluZyBTVkcgaW1hZ2VzIGludG8gYW4gYXJyYXkgb2YgdmVjdG9yIHBvaW50cy5cbipcbiogVG8gdXNlIHRoaXMgbW9kdWxlIHlvdSBhbHNvIG5lZWQgdGhlIFNWR1BhdGhTZWcgcG9seWZpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9nZXJzL3BhdGhzZWdcbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFN2Z1xuKi9cblxudmFyIFN2ZyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN2ZztcblxudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW4gU1ZHIHBhdGggaW50byBhbiBhcnJheSBvZiB2ZWN0b3IgcG9pbnRzLlxuICAgICAqIElmIHRoZSBpbnB1dCBwYXRoIGZvcm1zIGEgY29uY2F2ZSBzaGFwZSwgeW91IG11c3QgZGVjb21wb3NlIHRoZSByZXN1bHQgaW50byBjb252ZXggcGFydHMgYmVmb3JlIHVzZS5cbiAgICAgKiBTZWUgYEJvZGllcy5mcm9tVmVydGljZXNgIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnQgZm9yIHRoaXMuXG4gICAgICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IGd1YXJhbnRlZWQgdG8gc3VwcG9ydCBjb21wbGV4IHBhdGhzIChzdWNoIGFzIHRob3NlIHdpdGggaG9sZXMpLlxuICAgICAqIFlvdSBtdXN0IGxvYWQgdGhlIGBwYXRoc2VnLmpzYCBwb2x5ZmlsbCBvbiBuZXdlciBicm93c2Vycy5cbiAgICAgKiBAbWV0aG9kIHBhdGhUb1ZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtTVkdQYXRoRWxlbWVudH0gcGF0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlTGVuZ3RoPTE1XVxuICAgICAqIEByZXR1cm4ge1ZlY3RvcltdfSBwb2ludHNcbiAgICAgKi9cbiAgICBTdmcucGF0aFRvVmVydGljZXMgPSBmdW5jdGlvbihwYXRoLCBzYW1wbGVMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEoJ1NWR1BhdGhTZWcnIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdTdmcucGF0aFRvVmVydGljZXM6IFNWR1BhdGhTZWcgbm90IGRlZmluZWQsIGEgcG9seWZpbGwgaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd291dC9zdmcudG9wb2x5LmpzL2Jsb2IvbWFzdGVyL3N2Zy50b3BvbHkuanNcbiAgICAgICAgdmFyIGksIGlsLCB0b3RhbCwgcG9pbnQsIHNlZ21lbnQsIHNlZ21lbnRzLCBcbiAgICAgICAgICAgIHNlZ21lbnRzUXVldWUsIGxhc3RTZWdtZW50LCBcbiAgICAgICAgICAgIGxhc3RQb2ludCwgc2VnbWVudEluZGV4LCBwb2ludHMgPSBbXSxcbiAgICAgICAgICAgIGx4LCBseSwgbGVuZ3RoID0gMCwgeCA9IDAsIHkgPSAwO1xuXG4gICAgICAgIHNhbXBsZUxlbmd0aCA9IHNhbXBsZUxlbmd0aCB8fCAxNTtcblxuICAgICAgICB2YXIgYWRkUG9pbnQgPSBmdW5jdGlvbihweCwgcHksIHBhdGhTZWdUeXBlKSB7XG4gICAgICAgICAgICAvLyBhbGwgb2RkLW51bWJlcmVkIHBhdGggdHlwZXMgYXJlIHJlbGF0aXZlIGV4Y2VwdCBQQVRIU0VHX0NMT1NFUEFUSCAoMSlcbiAgICAgICAgICAgIHZhciBpc1JlbGF0aXZlID0gcGF0aFNlZ1R5cGUgJSAyID09PSAxICYmIHBhdGhTZWdUeXBlID4gMTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgbGFzdCBwb2ludCBkb2Vzbid0IGVxdWFsIHRoZSBjdXJyZW50IHBvaW50IGFkZCB0aGUgY3VycmVudCBwb2ludFxuICAgICAgICAgICAgaWYgKCFsYXN0UG9pbnQgfHwgcHggIT0gbGFzdFBvaW50LnggfHwgcHkgIT0gbGFzdFBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFBvaW50ICYmIGlzUmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbHggPSBsYXN0UG9pbnQueDtcbiAgICAgICAgICAgICAgICAgICAgbHkgPSBsYXN0UG9pbnQueTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBseCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGx5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGx4ICsgcHgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGx5ICsgcHlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGxhc3QgcG9pbnRcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWxhdGl2ZSB8fCAhbGFzdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RQb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAgICAgICAgIHggPSBseCArIHB4O1xuICAgICAgICAgICAgICAgIHkgPSBseSArIHB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhZGRTZWdtZW50UG9pbnQgPSBmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgICAgICB2YXIgc2VnVHlwZSA9IHNlZ21lbnQucGF0aFNlZ1R5cGVBc0xldHRlci50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvLyBza2lwIHBhdGggZW5kc1xuICAgICAgICAgICAgaWYgKHNlZ1R5cGUgPT09ICdaJykgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBtYXAgc2VnbWVudCB0byB4IGFuZCB5XG4gICAgICAgICAgICBzd2l0Y2ggKHNlZ1R5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHggPSBzZWdtZW50Lng7XG4gICAgICAgICAgICAgICAgeSA9IHNlZ21lbnQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHggPSBzZWdtZW50Lng7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB5ID0gc2VnbWVudC55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRQb2ludCh4LCB5LCBzZWdtZW50LnBhdGhTZWdUeXBlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbnN1cmUgcGF0aCBpcyBhYnNvbHV0ZVxuICAgICAgICBTdmcuX3N2Z1BhdGhUb0Fic29sdXRlKHBhdGgpO1xuXG4gICAgICAgIC8vIGdldCB0b3RhbCBsZW5ndGhcbiAgICAgICAgdG90YWwgPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgICAgLy8gcXVldWUgc2VnbWVudHNcbiAgICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhdGgucGF0aFNlZ0xpc3QubnVtYmVyT2ZJdGVtczsgaSArPSAxKVxuICAgICAgICAgICAgc2VnbWVudHMucHVzaChwYXRoLnBhdGhTZWdMaXN0LmdldEl0ZW0oaSkpO1xuXG4gICAgICAgIHNlZ21lbnRzUXVldWUgPSBzZWdtZW50cy5jb25jYXQoKTtcblxuICAgICAgICAvLyBzYW1wbGUgdGhyb3VnaCBwYXRoXG4gICAgICAgIHdoaWxlIChsZW5ndGggPCB0b3RhbCkge1xuICAgICAgICAgICAgLy8gZ2V0IHNlZ21lbnQgYXQgcG9zaXRpb25cbiAgICAgICAgICAgIHNlZ21lbnRJbmRleCA9IHBhdGguZ2V0UGF0aFNlZ0F0TGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudEluZGV4XTtcblxuICAgICAgICAgICAgLy8gbmV3IHNlZ21lbnRcbiAgICAgICAgICAgIGlmIChzZWdtZW50ICE9IGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlZ21lbnRzUXVldWUubGVuZ3RoICYmIHNlZ21lbnRzUXVldWVbMF0gIT0gc2VnbWVudClcbiAgICAgICAgICAgICAgICAgICAgYWRkU2VnbWVudFBvaW50KHNlZ21lbnRzUXVldWUuc2hpZnQoKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0U2VnbWVudCA9IHNlZ21lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwb2ludHMgaW4gYmV0d2VlbiB3aGVuIGN1cnZpbmdcbiAgICAgICAgICAgIC8vIFRPRE86IGFkYXB0aXZlIHNhbXBsaW5nXG4gICAgICAgICAgICBzd2l0Y2ggKHNlZ21lbnQucGF0aFNlZ1R5cGVBc0xldHRlci50b1VwcGVyQ2FzZSgpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgcG9pbnQgPSBwYXRoLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBhZGRQb2ludChwb2ludC54LCBwb2ludC55LCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgYnkgc2FtcGxlIHZhbHVlXG4gICAgICAgICAgICBsZW5ndGggKz0gc2FtcGxlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHJlbWFpbmluZyBzZWdtZW50cyBub3QgcGFzc2VkIGJ5IHNhbXBsaW5nXG4gICAgICAgIGZvciAoaSA9IDAsIGlsID0gc2VnbWVudHNRdWV1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAgYWRkU2VnbWVudFBvaW50KHNlZ21lbnRzUXVldWVbaV0pO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfTtcblxuICAgIFN2Zy5fc3ZnUGF0aFRvQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9waHJvZ3oubmV0L2NvbnZlcnQtc3ZnLXBhdGgtdG8tYWxsLWFic29sdXRlLWNvbW1hbmRzXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgR2F2aW4gS2lzdG5lclxuICAgICAgICAvLyBodHRwOi8vcGhyb2d6Lm5ldC9qcy9fUmV1c2VMaWNlbnNlLnR4dFxuICAgICAgICAvLyBNb2RpZmljYXRpb25zOiB0aWR5IGZvcm1hdHRpbmcgYW5kIG5hbWluZ1xuICAgICAgICB2YXIgeDAsIHkwLCB4MSwgeTEsIHgyLCB5Miwgc2VncyA9IHBhdGgucGF0aFNlZ0xpc3QsXG4gICAgICAgICAgICB4ID0gMCwgeSA9IDAsIGxlbiA9IHNlZ3MubnVtYmVyT2ZJdGVtcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgc2VnID0gc2Vncy5nZXRJdGVtKGkpLFxuICAgICAgICAgICAgICAgIHNlZ1R5cGUgPSBzZWcucGF0aFNlZ1R5cGVBc0xldHRlcjtcblxuICAgICAgICAgICAgaWYgKC9bTUxIVkNTUVRBXS8udGVzdChzZWdUeXBlKSkge1xuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gc2VnKSB4ID0gc2VnLng7XG4gICAgICAgICAgICAgICAgaWYgKCd5JyBpbiBzZWcpIHkgPSBzZWcueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCd4MScgaW4gc2VnKSB4MSA9IHggKyBzZWcueDE7XG4gICAgICAgICAgICAgICAgaWYgKCd4MicgaW4gc2VnKSB4MiA9IHggKyBzZWcueDI7XG4gICAgICAgICAgICAgICAgaWYgKCd5MScgaW4gc2VnKSB5MSA9IHkgKyBzZWcueTE7XG4gICAgICAgICAgICAgICAgaWYgKCd5MicgaW4gc2VnKSB5MiA9IHkgKyBzZWcueTI7XG4gICAgICAgICAgICAgICAgaWYgKCd4JyBpbiBzZWcpIHggKz0gc2VnLng7XG4gICAgICAgICAgICAgICAgaWYgKCd5JyBpbiBzZWcpIHkgKz0gc2VnLnk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlZ1R5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ01vdmV0b0Ficyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b0Ficyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b0hvcml6b250YWxBYnMoeCksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9WZXJ0aWNhbEFicyh5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY0Ficyh4LCB5LCB4MSwgeTEsIHgyLCB5MiksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNTbW9vdGhBYnMoeCwgeSwgeDIsIHkyKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNBYnMoeCwgeSwgeDEsIHkxKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNTbW9vdGhBYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdBcmNBYnMoeCwgeSwgc2VnLnIxLCBzZWcucjIsIHNlZy5hbmdsZSwgc2VnLmxhcmdlQXJjRmxhZywgc2VnLnN3ZWVwRmxhZyksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICAgICAgeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICB5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VnVHlwZSA9PSAnTScgfHwgc2VnVHlwZSA9PSAnbScpIHtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICAgICAgeTAgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhpcyBtb2R1bGUgaGFzIG5vdyBiZWVuIHJlcGxhY2VkIGJ5IGBNYXR0ZXIuQ29tcG9zaXRlYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byB0aGUgZXF1aXZhbGVudCBmdW5jdGlvbnMgZm91bmQgb24gYE1hdHRlci5Db21wb3NpdGVgLlxuKiBGb3IgZXhhbXBsZSBgV29ybGQuYWRkKHdvcmxkLCBib2R5KWAgbm93IGJlY29tZXMgYENvbXBvc2l0ZS5hZGQod29ybGQsIGJvZHkpYC5cbipcbiogVGhlIHByb3BlcnR5IGB3b3JsZC5ncmF2aXR5YCBoYXMgYmVlbiBtb3ZlZCB0byBgZW5naW5lLmdyYXZpdHlgLlxuKlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGFzIGEgZGlyZWN0IGFsaWFzIHRvIGBNYXR0ZXIuQ29tcG9zaXRlYCBpbiB0aGUgc2hvcnQgdGVybSBkdXJpbmcgbWlncmF0aW9uLlxuKiBFdmVudHVhbGx5IHRoaXMgYWxpYXMgbW9kdWxlIHdpbGwgYmUgbWFya2VkIGFzIGRlcHJlY2F0ZWQgYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBAY2xhc3MgV29ybGRcbiovXG5cbnZhciBXb3JsZCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmxkO1xuXG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBTZWUgYWJvdmUsIGFsaWFzZXMgZm9yIGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICovXG4gICAgV29ybGQuY3JlYXRlID0gQ29tcG9zaXRlLmNyZWF0ZTtcbiAgICBXb3JsZC5hZGQgPSBDb21wb3NpdGUuYWRkO1xuICAgIFdvcmxkLnJlbW92ZSA9IENvbXBvc2l0ZS5yZW1vdmU7XG4gICAgV29ybGQuY2xlYXIgPSBDb21wb3NpdGUuY2xlYXI7XG4gICAgV29ybGQuYWRkQ29tcG9zaXRlID0gQ29tcG9zaXRlLmFkZENvbXBvc2l0ZTtcbiAgICBXb3JsZC5hZGRCb2R5ID0gQ29tcG9zaXRlLmFkZEJvZHk7XG4gICAgV29ybGQuYWRkQ29uc3RyYWludCA9IENvbXBvc2l0ZS5hZGRDb25zdHJhaW50O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsImltcG9ydCB7IEVuZ2luZSwgUmVuZGVyLCBSdW5uZXIsIFZlY3RvciwgTW91c2UsIENvbW1vbiB9IGZyb20gJ21hdHRlci1qcyc7XG5pbXBvcnQgeyBCb2RpZXMsIENvbXBvc2l0ZSwgTW91c2VDb25zdHJhaW50LCBDb21wb3NpdGVzIH0gZnJvbSAnbWF0dGVyLWpzJztcbmltcG9ydCB7IEJvdW5kcywgRXZlbnRzIH0gZnJvbSAnbWF0dGVyLWpzJztcbmV4cG9ydCB2YXIgSW50ZXJmYWNlID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAgIHZhciBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XG4gICAgdmFyIHdvcmxkID0gZW5naW5lLndvcmxkO1xuICAgIHZhciByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcbiAgICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICAgIGVuZ2luZTogZW5naW5lLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBoYXNCb3VuZHM6IHRydWUsXG4gICAgICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBSZW5kZXIucnVuKHJlbmRlcik7XG4gICAgdmFyIG1vdXNlID0gTW91c2UuY3JlYXRlKHJlbmRlci5jYW52YXMpLCBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xuICAgICAgICBtb3VzZTogbW91c2UsXG4gICAgICAgIGNvbnN0cmFpbnQ6IHsgcmVuZGVyOiB7IHZpc2libGU6IGZhbHNlIH0gfSxcbiAgICB9KTtcbiAgICBDb21wb3NpdGUuYWRkKHdvcmxkLCBtb3VzZUNvbnN0cmFpbnQpO1xuICAgIC8vIGtlZXAgdGhlIG1vdXNlIGluIHN5bmMgd2l0aCByZW5kZXJpbmdcbiAgICByZW5kZXIubW91c2UgPSBtb3VzZTtcbiAgICB2YXIgc3RhY2sgPSBDb21wb3NpdGVzLnN0YWNrKDIwLCAyMCwgMTAsIDQsIDAsIDAsIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHN3aXRjaCAoTWF0aC5yb3VuZChDb21tb24ucmFuZG9tKDAsIDEpKSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChDb21tb24ucmFuZG9tKCkgPCAwLjgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5yZWN0YW5nbGUoeCwgeSwgQ29tbW9uLnJhbmRvbSgyMCwgNTApLCBDb21tb24ucmFuZG9tKDIwLCA1MCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5yZWN0YW5nbGUoeCwgeSwgQ29tbW9uLnJhbmRvbSg4MCwgMTIwKSwgQ29tbW9uLnJhbmRvbSgyMCwgMzApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdmFyIHNpZGVzID0gTWF0aC5yb3VuZChDb21tb24ucmFuZG9tKDEsIDgpKTtcbiAgICAgICAgICAgICAgICBzaWRlcyA9IHNpZGVzID09PSAzID8gNCA6IHNpZGVzO1xuICAgICAgICAgICAgICAgIHJldHVybiBCb2RpZXMucG9seWdvbih4LCB5LCBzaWRlcywgQ29tbW9uLnJhbmRvbSgyMCwgNTApKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIENvbXBvc2l0ZS5hZGQod29ybGQsIFtcbiAgICAgICAgc3RhY2ssXG4gICAgICAgIC8vIEJvZGllcy5yZWN0YW5nbGUoNDAwLCAwLCA4MDAsIDUwLCB7IGlzU3RhdGljOiB0cnVlLCByZW5kZXI6IHtmaWxsU3R5bGU6IFwiI2ZmZlwifSB9KSxcbiAgICAgICAgQm9kaWVzLnJlY3RhbmdsZSg0MDAsIDYwMCwgODAwLCA1MCwge1xuICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICByZW5kZXI6IHsgZmlsbFN0eWxlOiAnI2ZmZicgfSxcbiAgICAgICAgfSksXG4gICAgICAgIEJvZGllcy5yZWN0YW5nbGUoODAwLCAzMDAsIDUwLCA2MDAsIHsgaXNTdGF0aWM6IHRydWUgfSksXG4gICAgICAgIEJvZGllcy5yZWN0YW5nbGUoMCwgMzAwLCA1MCwgNjAwLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuICAgIF0pO1xuICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc2NhbGU6IHsgbWluOiAwLjEsIG1heDogMTAsIGJ5OiAxLCB0YXJnZXQ6IDEgfSxcbiAgICAgICAgbW91c2VDb25zdHJhaW50OiBtb3VzZUNvbnN0cmFpbnQsXG4gICAgfTtcbiAgICBFdmVudHMub24ocmVuZGVyLCAnYmVmb3JlUmVuZGVyJywgQmVmb3JlUmVuZGVyKGNvbnRleHQpKTtcbiAgICBSZW5kZXIucnVuKHJlbmRlcik7XG4gICAgdmFyIHJ1bm5lciA9IFJ1bm5lci5jcmVhdGUoKTtcbiAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBIYW5kbGVSZXNpemU6IGZ1bmN0aW9uICh3LCBoKSB7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gdztcbiAgICAgICAgICAgIHJlbmRlci5jYW52YXMuaGVpZ2h0ID0gaDtcbiAgICAgICAgICAgIHJlbmRlci5vcHRpb25zLndpZHRoID0gdztcbiAgICAgICAgICAgIHJlbmRlci5vcHRpb25zLmhlaWdodCA9IGg7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1heC54ID0gcmVuZGVyLmJvdW5kcy5taW4ueCArIHcgKiByZW5kZXIubW91c2Uuc2NhbGUueDtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgPSByZW5kZXIuYm91bmRzLm1pbi55ICsgaCAqIHJlbmRlci5tb3VzZS5zY2FsZS55O1xuICAgICAgICB9LFxuICAgIH07XG59O1xudmFyIEJlZm9yZVJlbmRlciA9IGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgSGFuZGxlWm9vbShjb250ZXh0KTtcbiAgICBIYW5kbGVQYW4oY29udGV4dCk7XG59OyB9O1xudmFyIEhhbmRsZVpvb20gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHZhciBtb3VzZUNvbnN0cmFpbnQgPSBfYS5tb3VzZUNvbnN0cmFpbnQsIHNjYWxlID0gX2Euc2NhbGUsIHJlbmRlciA9IF9hLnJlbmRlcjtcbiAgICB2YXIgbW91c2UgPSBtb3VzZUNvbnN0cmFpbnQubW91c2U7XG4gICAgdmFyIHdpZHRoID0gKF9iID0gcmVuZGVyLm9wdGlvbnMud2lkdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDA7XG4gICAgdmFyIGhlaWdodCA9IChfYyA9IHJlbmRlci5vcHRpb25zLmhlaWdodCkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogMDtcbiAgICBpZiAobW91c2Uud2hlZWxEZWx0YSkge1xuICAgICAgICB2YXIgc2NhbGVGYWN0b3JfMSA9IG1vdXNlLndoZWVsRGVsdGEgKiAtMC4wNSAqIHNjYWxlLmJ5O1xuICAgICAgICBzY2FsZS50YXJnZXQgPSBNYXRoLm1pbihNYXRoLm1heChzY2FsZS50YXJnZXQgKyBzY2FsZUZhY3Rvcl8xLCBzY2FsZS5taW4pLCBzY2FsZS5tYXgpO1xuICAgIH1cbiAgICBpZiAoTWF0aC5hYnMoc2NhbGUuYnkgLSBzY2FsZS50YXJnZXQpIDwgMC4wMSlcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vc21vb3RoIHpvb21pbmdcbiAgICB2YXIgc2NhbGVGYWN0b3IgPSAoc2NhbGUudGFyZ2V0IC0gc2NhbGUuYnkpICogMC4wNTtcbiAgICBzY2FsZS5ieSArPSBzY2FsZUZhY3RvcjtcbiAgICByZW5kZXIuYm91bmRzLm1heC54ID0gcmVuZGVyLmJvdW5kcy5taW4ueCArIHdpZHRoICogc2NhbGUuYnk7XG4gICAgcmVuZGVyLmJvdW5kcy5tYXgueSA9IHJlbmRlci5ib3VuZHMubWluLnkgKyBoZWlnaHQgKiBzY2FsZS5ieTtcbiAgICB2YXIgdHJhbnNsYXRlID0ge1xuICAgICAgICB4OiBtb3VzZS5hYnNvbHV0ZS54ICogLXNjYWxlRmFjdG9yLFxuICAgICAgICB5OiBtb3VzZS5hYnNvbHV0ZS55ICogLXNjYWxlRmFjdG9yLFxuICAgIH07XG4gICAgQm91bmRzLnRyYW5zbGF0ZShyZW5kZXIuYm91bmRzLCB0cmFuc2xhdGUpO1xuICAgIE1vdXNlLnNldFNjYWxlKG1vdXNlLCB7IHg6IHNjYWxlLmJ5LCB5OiBzY2FsZS5ieSB9KTtcbiAgICBNb3VzZS5zZXRPZmZzZXQobW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbn07XG52YXIgSGFuZGxlUGFuID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIG1vdXNlQ29uc3RyYWludCA9IGNvbnRleHQubW91c2VDb25zdHJhaW50LCByZW5kZXIgPSBjb250ZXh0LnJlbmRlciwgcGFubmluZ0Zyb20gPSBjb250ZXh0LnBhbm5pbmdGcm9tO1xuICAgIHZhciBtb3VzZSA9IG1vdXNlQ29uc3RyYWludC5tb3VzZSwgYm9keSA9IG1vdXNlQ29uc3RyYWludC5ib2R5O1xuICAgIHZhciBidXR0b24gPSAoX2EgPSB7fSwgX2FbLTFdID0gJ25vbmUnLCBfYVswXSA9ICdsZWZ0JywgX2FbMl0gPSAncmlnaHQnLCBfYSlbbW91c2UuYnV0dG9uXTtcbiAgICBpZiAoYnV0dG9uID09PSAnbm9uZScgfHwgKGJvZHkgJiYgIWJvZHkuaXNTdGF0aWMpKSB7XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0LnBhbm5pbmdGcm9tO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcGFubmluZ0Zyb20pIHtcbiAgICAgICAgY29udGV4dC5wYW5uaW5nRnJvbSA9IFZlY3Rvci5jbG9uZShtb3VzZS5hYnNvbHV0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1Yihtb3VzZS5hYnNvbHV0ZSwgcGFubmluZ0Zyb20pO1xuICAgIGlmIChkZWx0YS54ID09PSAwICYmIGRlbHRhLnkgPT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgdHJhbnNsYXRlID0ge1xuICAgICAgICB4OiAtZGVsdGEueCAqIG1vdXNlLnNjYWxlLngsXG4gICAgICAgIHk6IC1kZWx0YS55ICogbW91c2Uuc2NhbGUueSxcbiAgICB9O1xuICAgIEJvdW5kcy50cmFuc2xhdGUocmVuZGVyLmJvdW5kcywgdHJhbnNsYXRlKTtcbiAgICBNb3VzZS5zZXRPZmZzZXQobW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICBjb250ZXh0LnBhbm5pbmdGcm9tID0gVmVjdG9yLmNsb25lKG1vdXNlLmFic29sdXRlKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gICAgaWYgKCFjYW52YXMpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgSGFuZGxlUmVzaXplID0gSW50ZXJmYWNlKGNhbnZhcykuSGFuZGxlUmVzaXplO1xuICAgIHZhciBoYW5kbGVEb21SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEhhbmRsZVJlc2l6ZShkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVEb21SZXNpemUpO1xuICAgIGhhbmRsZURvbVJlc2l6ZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=