// /*global console*/
// /*global define*/
// /*global window*/
// /*jslint vars: true, nomen: true, plusplus: true*/

// (function (root, factory) {

//     'use strict';

//     if (typeof define === 'function' && define.amd) {
//         // using require.js
//         define(['./application.js'], factory);
//     } else {
//         root.adsk = factory(root.adsk);
//     }
// }(this, function (adsk) {

//     'use strict';

//     if (adsk === undefined) {
//         adsk = {
//             objectTypes: {}
//         };
//     }
//     if (adsk.fusion === undefined) {
//         adsk.fusion = {};
//     }

//     //=========== BRepBodies ============
//     // The BRepBodies collection provides access to all of the B-Rep
//     // bodies within a component.
//     adsk.fusion.BRepBodies = function BRepBodies(handle) {
//         if (!(this instanceof adsk.fusion.BRepBodies)) {
//             return adsk.fusion.BRepBodies.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.BRepBodies.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.BRepBodies.prototype.constructor = adsk.fusion.BRepBodies;
//     adsk.fusion.BRepBodies.interfaceId = 'adsk.fusion.BRepBodies';
//     adsk.objectTypes['adsk.fusion.BRepBodies'] = adsk.fusion.BRepBodies;
//     adsk.fusion.BRepBodies.cast = function (object) {
//         return object instanceof adsk.fusion.BRepBodies ? object : null;
//     };

//     // Returns the number of bodies in the collection.
//     Object.defineProperty(adsk.fusion.BRepBodies.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified body using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.BRepBodies.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//     };

//     // Returns a specific body using the name of the body within the collection.
//     // name : The name of the body, as seen in the browser, to return.
//     // The BRepBody or null if a body with the defined name is not found.
//     adsk.fusion.BRepBodies.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//     };

//=========== BRepBody ============
// Represents a B-Rep (Boundary Representation) body.
interface BRepBody {
    sayHi();
    cast(object: Object): BRepBody;

    //     // Returns the component this body is owned by.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'parentComponent', {
    //         get : function () {
    //             var result = this._execute('parentComponent');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //         }
    //     });

    // Returns a collection of all of the lumps in the body.
    lumps: BRepLumps;

    //     // Returns a collection of all of the shells in the body.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'shells', {
    //         get : function () {
    //             var result = this._execute('shells');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShells) : null;
    //         }
    //     });

    //     // Returns a collection of all of the faces in the body.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'faces', {
    //         get : function () {
    //             var result = this._execute('faces');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
    //         }
    //     });

    //     // Returns a collection of all of the edges in the body.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'edges', {
    //         get : function () {
    //             var result = this._execute('edges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
    //         }
    //     });

    //     // Returns a collection of all of the vertices in the body.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'vertices', {
    //         get : function () {
    //             var result = this._execute('vertices');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertices) : null;
    //         }
    //     });

    //     // Returns whether this body is closed (solid) or not.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'isSolid', {
    //         get : function () {
    //             var result = this._execute('isSolid');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the bounding box of this body.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'boundingBox', {
    //         get : function () {
    //             var result = this._execute('boundingBox');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
    //         }
    //     });

    //     // Returns all of the edges that connect concave faces.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'concaveEdges', {
    //         get : function () {
    //             var result = this._execute('concaveEdges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
    //         }
    //     });

    //     // Returns all of the edges that connect convex faces.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'convexEdges', {
    //         get : function () {
    //             var result = this._execute('convexEdges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
    //         }
    //     });

    //     // Returns the area in cm ^ 2.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'area', {
    //         get : function () {
    //             var result = this._execute('area');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the volume in cm ^ 3. Returns 0 in the case the body is not solid.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'volume', {
    //         get : function () {
    //             var result = this._execute('volume');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if this body is represented in the model or is transient.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'isTransient', {
    //         get : function () {
    //             var result = this._execute('isTransient');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the name of the body.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'name', {
    //         get : function () {
    //             var result = this._execute('name');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('name', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets if this body is currently visible in the graphics window. Use the
    //     // isLightBulbOn to change if the light bulb beside the body node in the
    //     // browser is on or not. Parent nodes in the browser can have their light
    //     // bulb off which affects all of their children. This property indicates
    //     // the final result and whether this body is actually visible or not.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'isVisible', {
    //         get : function () {
    //             var result = this._execute('isVisible');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isVisible', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if this body is selectable.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'isSelectable', {
    //         get : function () {
    //             var result = this._execute('isSelectable');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isSelectable', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Read-write property that gets and sets the current appearance of the body. Setting this property will result in applying
    //     // an override appearance to the body and the AppearanceSourceType property will return OverrideAppearanceSource. Setting
    //     // this property to null will remove any override.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'appearance', {
    //         get : function () {
    //             var result = this._execute('appearance');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Appearance) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Appearance)) { throw new TypeError('value must be a adsk.core.Appearance'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('appearance', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Read-write property that gets the source of the appearance for the body. If this returns OverrideAppearanceSource, an override exists
    //     // on this body. The override can be removed by setting the Appearance property to null.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'appearanceSourceType', {
    //         get : function () {
    //             var result = this._execute('appearanceSourceType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the material assigned to this body.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'material', {
    //         get : function () {
    //             var result = this._execute('material');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Material) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Material)) { throw new TypeError('value must be a adsk.core.Material'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('material', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the mesh manager object for this body.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'meshManager', {
    //         get : function () {
    //             var result = this._execute('meshManager');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MeshManager) : null;
    //         }
    //     });

    //     // Returns the assembly occurrence (i.e. the occurrence) of this
    //     // object in an assembly. This is only valid in the case where this
    //     // BRepBody object is acting as a proxy in an assembly. Returns null
    //     // in the case where the object is not in the context of an assembly.
    //     // but is already the native object. Also returns null in the case
    //     // where this body is transient.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'assemblyContext', {
    //         get : function () {
    //             var result = this._execute('assemblyContext');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // The NativeObject is the object outside the context of an assembly.
    //     // Returns null in the case where this object is not in the context of
    //     // an assembly but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'nativeObject', {
    //         get : function () {
    //             var result = this._execute('nativeObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });

    //     // Returns the PhysicalProperties object that has properties for getting the area, density, mass, volume, moments, etc
    //     // of this body. Property values will be calulated using the 'LowCalculationAccuracy' setting when using this property
    //     // to get the PhysicalProperties object. To specify a higher calculation tolerance, use the getPhysicalProperties method
    //     // on the Design class instead.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'physicalProperties', {
    //         get : function () {
    //             var result = this._execute('physicalProperties');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PhysicalProperties) : null;
    //         }
    //     });

    //     // Gets and set if the light bulb beside the body node in the
    //     // browser is on or not. Parent nodes in the browser can have their light
    //     // bulb off which affects all of their children so this property does not
    //     // indicate if the body is actually visible, just that it should be visible
    //     // if all of it's parent nodes are also visible. Use the isVisible property
    //     // to determine if it's actually visible.
    //     // This property is only valid if the IsTransient property is false.
    //     Object.defineProperty(adsk.fusion.BRepBody.prototype, 'isLightBulbOn', {
    //         get : function () {
    //             var result = this._execute('isLightBulbOn');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isLightBulbOn', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Determines the relationship of the input point with respect to this body.
    //     // point : The point to do the containment check for.
    //     //
    //     adsk.fusion.BRepBody.prototype.pointContainment = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('pointContainment', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Deletes the body.
    //     // This property is only valid if the IsTransient property is false.
    //     // Returns true if the delete was successful.
    //     adsk.fusion.BRepBody.prototype.deleteMe = function () {
    //         var result = this._execute('deleteMe');
    //         return result ? result.value : undefined;
    //     };

    //     // Copies the body to the clipboard.
    //     // This property is only valid if the IsTransient property is false.
    //     // Returns true if the copy was successful.
    //     adsk.fusion.BRepBody.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return result ? result.value : undefined;
    //     };

    //     // Cuts the body to the clipboard.
    //     // This property is only valid if the IsTransient property is false.
    //     // Returns true if the cut was successful.
    //     adsk.fusion.BRepBody.prototype.cut = function () {
    //         var result = this._execute('cut');
    //         return result ? result.value : undefined;
    //     };

    //     // Returns a proxy for the native object
    //     // - i.e. a new object that represents this object but adds the assembly context
    //     // defined by the input occurrence.
    //     // This method is only valid if the IsTransient property is false.
    //     // occurrence : The occurrence that defines the context for the created proxy.
    //     // Returns the new BRepBoy proxy or null if this isn't the NativeObject.
    //     adsk.fusion.BRepBody.prototype.createForAssemblyContext = function (occurrence) {
    //         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //         };
    //         var result = this._execute('createForAssemblyContext', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //     };

    //     // Creates a new component and occurrence within the component that currently owns this body.
    //     // This body is moved into the new component and returned. The newly created component can be
    //     // obtained by using the parentComponent property of the BRepBody object.
    //     // This method is only valid if the IsTransient property is false.
    //     // Returns the BRrepBody in the new component or null in the case the creation failed.
    //     adsk.fusion.BRepBody.prototype.createComponent = function () {
    //         var result = this._execute('createComponent');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //     };

    //     // Moves this body from it's current component into the root component or the component owned by the
    //     // specified occurrence.
    //     // target : The target can be either the root component or an occurrence.
    //     // In the case where an occurrence is specified, the body will be moved into the parent component of the target
    //     // occurrence and the target occurrence defines the transform of how the body will be copied so that the body
    //     // maintains it's same position with respect to the assembly.
    //     // Returns the moved BRepBody or null in the case the move failed.
    //     adsk.fusion.BRepBody.prototype.moveToComponent = function (target) {
    //         if (target !== null && !(target instanceof adsk.core.Base)) { throw new TypeError('target must be a adsk.core.Base'); }
    //         var args = {
    //             target : (target === null ? target : target.handle)
    //         };
    //         var result = this._execute('moveToComponent', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //     };

    //     // Creates a copy of this body into the specified target.
    //     // target : The target can be either the root component or an occurrence.
    //     // In the case where an occurrence is specified, the body will be copied into the parent component of the target
    //     // occurrence and the target occurrence defines the transform of how the body will be copied so that the body
    //     // maintains it's same position with respect to the assembly.
    //     // If target is null, then a copy of the body is created in the owning component of the original body.
    //     // Returns the moved BRepBody or null in the case the move failed.
    //     adsk.fusion.BRepBody.prototype.copyToComponent = function (target) {
    //         if (target !== null && !(target instanceof adsk.core.Base)) { throw new TypeError('target must be a adsk.core.Base'); }
    //         var args = {
    //             target : (target === null ? target : target.handle)
    //         };
    //         var result = this._execute('copyToComponent', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //     };

    //     //=========== BRepCoEdge ============
    //     // Represents the use of a BRepEdge by a BRepFace.
    //     adsk.fusion.BRepCoEdge = function BRepCoEdge(handle) {
    //         if (!(this instanceof adsk.fusion.BRepCoEdge)) {
    //             return adsk.fusion.BRepCoEdge.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepCoEdge.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepCoEdge.prototype.constructor = adsk.fusion.BRepCoEdge;
    //     adsk.fusion.BRepCoEdge.interfaceId = 'adsk.fusion.BRepCoEdge';
    //     adsk.objectTypes['adsk.fusion.BRepCoEdge'] = adsk.fusion.BRepCoEdge;
    //     adsk.fusion.BRepCoEdge.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepCoEdge ? object : null;
    //     };

    //     // Returns the edge this co-edge is associated with.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'edge', {
    //         get : function () {
    //             var result = this._execute('edge');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
    //         }
    //     });

    //     // Returns the loop this co-edge is part of.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'loop', {
    //         get : function () {
    //             var result = this._execute('loop');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLoop) : null;
    //         }
    //     });

    //     // Returns a curve evaluator that can be used to perform geometric evaluations on the co-edge.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'evaluator', {
    //         get : function () {
    //             var result = this._execute('evaluator');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CurveEvaluator2D) : null;
    //         }
    //     });

    //     // Returns a geometry object that represents the shape of this co-edge in parameter space of the parent face's surface.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'geometry', {
    //         get : function () {
    //             var result = this._execute('geometry');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Curve2D) : null;
    //         }
    //     });

    //     // Indicates if the orientation of this co-edge is in the same direction or opposed to its associated edge.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'isOpposedToEdge', {
    //         get : function () {
    //             var result = this._execute('isOpposedToEdge');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns if the parametric direction of this co-edge is reversed
    //     // from the parametric direction of the underlying curve obtained from the geometry property.
    //     // A co-edge's parametric direction is from the start vertex to the end vertex.
    //     // But the underlying curve geometry may have the opposite parameterization.
    //     // This property indicates if the parameterization order of the evaluator obtained from
    //     // this co-edge is reversed from the order of the geometry curve's evaluator.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'isParamReversed', {
    //         get : function () {
    //             var result = this._execute('isParamReversed');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the next co-edge in the loop.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'next', {
    //         get : function () {
    //             var result = this._execute('next');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdge) : null;
    //         }
    //     });

    //     // Returns the body this co-edge is part of.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'body', {
    //         get : function () {
    //             var result = this._execute('body');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });

    //     // Returns the co-edge on the adjacent face
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'partner', {
    //         get : function () {
    //             var result = this._execute('partner');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdge) : null;
    //         }
    //     });

    //     // Returns the previous co-edge in the loop.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'previous', {
    //         get : function () {
    //             var result = this._execute('previous');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdge) : null;
    //         }
    //     });

    //     // Returns the assembly occurrence (i.e. the occurrence) of this
    //     // object in an assembly. This is only valid in the case where this
    //     // BRepCoEdge object is acting as a proxy in an assembly. Returns null
    //     // in the case where the object is not in the context of an assembly.
    //     // but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'assemblyContext', {
    //         get : function () {
    //             var result = this._execute('assemblyContext');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // The NativeObject is the object outside the context of an assembly.
    //     // Returns null in the case where this object is not in the context of
    //     // an assembly but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepCoEdge.prototype, 'nativeObject', {
    //         get : function () {
    //             var result = this._execute('nativeObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdge) : null;
    //         }
    //     });

    //     // Returns a proxy for the native object
    //     // - i.e. a new object that represents this object but adds the assembly context
    //     // defined by the input occurrence.
    //     // occurrence : The occurrence that defines the context for the created proxy.
    //     // Returns the new BrepCoEdge proxy or null if this isn't the NativeObject.
    //     adsk.fusion.BRepCoEdge.prototype.createForAssemblyContext = function (occurrence) {
    //         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //         };
    //         var result = this._execute('createForAssemblyContext', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdge) : null;
    //     };

    //     //=========== BRepCoEdges ============
    //     // BRepCoEdge Collection.
    //     adsk.fusion.BRepCoEdges = function BRepCoEdges(handle) {
    //         if (!(this instanceof adsk.fusion.BRepCoEdges)) {
    //             return adsk.fusion.BRepCoEdges.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepCoEdges.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepCoEdges.prototype.constructor = adsk.fusion.BRepCoEdges;
    //     adsk.fusion.BRepCoEdges.interfaceId = 'adsk.fusion.BRepCoEdges';
    //     adsk.objectTypes['adsk.fusion.BRepCoEdges'] = adsk.fusion.BRepCoEdges;
    //     adsk.fusion.BRepCoEdges.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepCoEdges ? object : null;
    //     };

    //     // The number of co-edges in the collection.
    //     Object.defineProperty(adsk.fusion.BRepCoEdges.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified co-edge using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BRepCoEdges.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdge) : null;
    //     };

    //     //=========== BRepEdge ============
    //     // Represents a one-dimensional topological element that can be used to bound a BRepFace A BRepEdge uses a single, connected and bounded subset of a curve for it geometry.
    //     adsk.fusion.BRepEdge = function BRepEdge(handle) {
    //         if (!(this instanceof adsk.fusion.BRepEdge)) {
    //             return adsk.fusion.BRepEdge.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepEdge.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepEdge.prototype.constructor = adsk.fusion.BRepEdge;
    //     adsk.fusion.BRepEdge.interfaceId = 'adsk.fusion.BRepEdge';
    //     adsk.objectTypes['adsk.fusion.BRepEdge'] = adsk.fusion.BRepEdge;
    //     adsk.fusion.BRepEdge.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepEdge ? object : null;
    //     };

    //     // Returns the BRepVertex that bounds its low parameter end.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'startVertex', {
    //         get : function () {
    //             var result = this._execute('startVertex');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertex) : null;
    //         }
    //     });

    //     // Returns the BRepVertex that bounds its high parameter end.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'endVertex', {
    //         get : function () {
    //             var result = this._execute('endVertex');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertex) : null;
    //         }
    //     });

    //     // Returns the BRepFaces that are associated with this edge through its BRepCoEdges.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'faces', {
    //         get : function () {
    //             var result = this._execute('faces');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
    //         }
    //     });

    //     // Returns the parent shell of the edge.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'shell', {
    //         get : function () {
    //             var result = this._execute('shell');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShell) : null;
    //         }
    //     });

    //     // Returns the parent body of the edge.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'body', {
    //         get : function () {
    //             var result = this._execute('body');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });

    //     // Returns if the edge's geometry is degenerate.
    //     // For example, the apex of a cone is a degerate edge.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'isDegenerate', {
    //         get : function () {
    //             var result = this._execute('isDegenerate');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns CurveEvaluator3D for evaluation.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'evaluator', {
    //         get : function () {
    //             var result = this._execute('evaluator');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CurveEvaluator3D) : null;
    //         }
    //     });

    //     // Returns the underlying curve geometry of the edge.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'geometry', {
    //         get : function () {
    //             var result = this._execute('geometry');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Curve3D) : null;
    //         }
    //     });

    //     // Returns if the edge is tolerant.
    //     // The tolerance used is available from the tolerance property.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'isTolerant', {
    //         get : function () {
    //             var result = this._execute('isTolerant');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the tolerance used by a tolerant edge.
    //     // This value is only useful when isTolerant is true.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'tolerance', {
    //         get : function () {
    //             var result = this._execute('tolerance');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a sample point guaranteed to lie on the edge's curve, within its boundaries,
    //     // and not on a vertex (unless this is a degenerate edge).
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'pointOnEdge', {
    //         get : function () {
    //             var result = this._execute('pointOnEdge');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         }
    //     });

    //     // Returns the BRepCoEdges on the edge.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'coEdges', {
    //         get : function () {
    //             var result = this._execute('coEdges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdges) : null;
    //         }
    //     });

    //     // Returns if the parametric direction of this edge is reversed
    //     // from the parametric direction of the underlying curve obtained from the geometry property.
    //     // An edge's parametric direction is from the start vertex to the end vertex.
    //     // But the underlying curve geometry may have the opposite parameterization.
    //     // This property indicates if the parameterization order of the evaluator obtained from
    //     // this edge is reversed from the order of the geometry curve's evaluator.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'isParamReversed', {
    //         get : function () {
    //             var result = this._execute('isParamReversed');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a collection of edges that includes all of the edges tangentially connected
    //     // to this edge. The result includes this edge. The edges are in the collection
    //     // in their connected order.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'tangentiallyConnectedEdges', {
    //         get : function () {
    //             var result = this._execute('tangentiallyConnectedEdges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //         }
    //     });

    //     // Returns the assembly occurrence (i.e. the occurrence) of this
    //     // object in an assembly. This is only valid in the case where this
    //     // BRepEdge object is acting as a proxy in an assembly. Returns null
    //     // in the case where the object is not in the context of an assembly.
    //     // but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'assemblyContext', {
    //         get : function () {
    //             var result = this._execute('assemblyContext');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // The NativeObject is the object outside the context of an assembly.
    //     // Returns null in the case where this object is not in the context of
    //     // an assembly but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepEdge.prototype, 'nativeObject', {
    //         get : function () {
    //             var result = this._execute('nativeObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
    //         }
    //     });

    //     // Returns a proxy for the native object
    //     // - i.e. a new object that represents this object but adds the assembly context
    //     // defined by the input occurrence.
    //     // occurrence : The occurrence that defines the context for the created proxy.
    //     // Returns the new BrepEdge proxy or null if this isn't the NativeObject.
    //     adsk.fusion.BRepEdge.prototype.createForAssemblyContext = function (occurrence) {
    //         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //         };
    //         var result = this._execute('createForAssemblyContext', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
    //     };

    //     //=========== BRepEdges ============
    //     // BRepEdge collection.
    //     adsk.fusion.BRepEdges = function BRepEdges(handle) {
    //         if (!(this instanceof adsk.fusion.BRepEdges)) {
    //             return adsk.fusion.BRepEdges.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepEdges.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepEdges.prototype.constructor = adsk.fusion.BRepEdges;
    //     adsk.fusion.BRepEdges.interfaceId = 'adsk.fusion.BRepEdges';
    //     adsk.objectTypes['adsk.fusion.BRepEdges'] = adsk.fusion.BRepEdges;
    //     adsk.fusion.BRepEdges.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepEdges ? object : null;
    //     };

    //     // The number of edges in the collection.
    //     Object.defineProperty(adsk.fusion.BRepEdges.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified edge using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BRepEdges.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
    //     };

    //     //=========== BRepFace ============
    //     // Represent a connected region on a single geometric surface.
    //     adsk.fusion.BRepFace = function BRepFace(handle) {
    //         if (!(this instanceof adsk.fusion.BRepFace)) {
    //             return adsk.fusion.BRepFace.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepFace.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepFace.prototype.constructor = adsk.fusion.BRepFace;
    //     adsk.fusion.BRepFace.interfaceId = 'adsk.fusion.BRepFace';
    //     adsk.objectTypes['adsk.fusion.BRepFace'] = adsk.fusion.BRepFace;
    //     adsk.fusion.BRepFace.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepFace ? object : null;
    //     };

    //     // Returns the BRepEdges used by this face
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'edges', {
    //         get : function () {
    //             var result = this._execute('edges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
    //         }
    //     });

    //     // Returns the BRepVertices used by this face
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'vertices', {
    //         get : function () {
    //             var result = this._execute('vertices');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertices) : null;
    //         }
    //     });

    //     // Returns the parent shell of the face.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'shell', {
    //         get : function () {
    //             var result = this._execute('shell');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShell) : null;
    //         }
    //     });

    //     // Returns the BRepLoops owned by this face
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'loops', {
    //         get : function () {
    //             var result = this._execute('loops');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLoops) : null;
    //         }
    //     });

    //     // Returns the parent body of the face.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'body', {
    //         get : function () {
    //             var result = this._execute('body');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });

    //     // Returns the underlying surface geometry of this face
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'geometry', {
    //         get : function () {
    //             var result = this._execute('geometry');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Surface) : null;
    //         }
    //     });

    //     // Returns a SurfaceEvaluator to allow geometric evaluations across the face's surface.
    //     // This evaluator differs from the evaluator available from the Surface obtained from the geometry
    //     // property by being bounded by the topological boundaries of this face.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'evaluator', {
    //         get : function () {
    //             var result = this._execute('evaluator');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.SurfaceEvaluator) : null;
    //         }
    //     });

    //     // Returns a sample point guaranteed to lie on the face's surface, within the face's boundaries, and not on a boundary edge.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'pointOnFace', {
    //         get : function () {
    //             var result = this._execute('pointOnFace');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         }
    //     });

    //     // Returns the set of faces that are tengentially adjacent to this face.
    //     // In other words, it is the set of faces that are adjacent to this face's edges
    //     // and have a smooth transition across those edges.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'tangentiallyConnectedFaces', {
    //         get : function () {
    //             var result = this._execute('tangentiallyConnectedFaces');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
    //         }
    //     });

    //     // Returns a MeshManager object that allows access to existing and new meshes of this face.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'meshManager', {
    //         get : function () {
    //             var result = this._execute('meshManager');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MeshManager) : null;
    //         }
    //     });

    //     // Read-write property that gets and sets the current appearance of the face. Setting this property will result in applying
    //     // an override appearance to the face and the AppearanceSourceType property will return OverrideAppearanceSource. Setting
    //     // this property to null will remove any override.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'appearance', {
    //         get : function () {
    //             var result = this._execute('appearance');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Appearance) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Appearance)) { throw new TypeError('value must be a adsk.core.Appearance'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('appearance', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Read-write property that gets the source of the appearance for the face. If this returns OverrideAppearanceSource, an override exists
    //     // on this face. The override can be removed by setting the Appearance property to null.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'appearanceSourceType', {
    //         get : function () {
    //             var result = this._execute('appearanceSourceType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the assembly occurrence (i.e. the occurrence) of this
    //     // object in an assembly. This is only valid in the case where this
    //     // BRepFace object is acting as a proxy in an assembly. Returns null
    //     // in the case where the object is not in the context of an assembly.
    //     // but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'assemblyContext', {
    //         get : function () {
    //             var result = this._execute('assemblyContext');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // The NativeObject is the object outside the context of an assembly.
    //     // Returns null in the case where this object is not in the context of
    //     // an assembly but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepFace.prototype, 'nativeObject', {
    //         get : function () {
    //             var result = this._execute('nativeObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //         }
    //     });

    //     // Returns a proxy for the native object
    //     // - i.e. a new object that represents this object but adds the assembly context
    //     // defined by the input occurrence.
    //     // occurrence : The occurrence that defines the context for the created proxy.
    //     // Returns the new BRepFace proxy or null if this isn't the NativeObject.
    //     adsk.fusion.BRepFace.prototype.createForAssemblyContext = function (occurrence) {
    //         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //         };
    //         var result = this._execute('createForAssemblyContext', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //     };

    //     //=========== BRepFaces ============
    //     // BRepFace collection.
    //     adsk.fusion.BRepFaces = function BRepFaces(handle) {
    //         if (!(this instanceof adsk.fusion.BRepFaces)) {
    //             return adsk.fusion.BRepFaces.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepFaces.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepFaces.prototype.constructor = adsk.fusion.BRepFaces;
    //     adsk.fusion.BRepFaces.interfaceId = 'adsk.fusion.BRepFaces';
    //     adsk.objectTypes['adsk.fusion.BRepFaces'] = adsk.fusion.BRepFaces;
    //     adsk.fusion.BRepFaces.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepFaces ? object : null;
    //     };

    //     // The number of faces in the collection.
    //     Object.defineProperty(adsk.fusion.BRepFaces.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified face using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BRepFaces.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //     };

    //     //=========== BRepLoop ============
    //     // Represents a connected portion of a BRepFace boundary. It consists of a chain of BRepCoEdges.
    //     adsk.fusion.BRepLoop = function BRepLoop(handle) {
    //         if (!(this instanceof adsk.fusion.BRepLoop)) {
    //             return adsk.fusion.BRepLoop.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepLoop.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepLoop.prototype.constructor = adsk.fusion.BRepLoop;
    //     adsk.fusion.BRepLoop.interfaceId = 'adsk.fusion.BRepLoop';
    //     adsk.objectTypes['adsk.fusion.BRepLoop'] = adsk.fusion.BRepLoop;
    //     adsk.fusion.BRepLoop.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepLoop ? object : null;
    //     };

    //     // Returns the BRepEdges used by this loop
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'edges', {
    //         get : function () {
    //             var result = this._execute('edges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
    //         }
    //     });

    //     // Returns the BRepCoEdges consisting this loop
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'coEdges', {
    //         get : function () {
    //             var result = this._execute('coEdges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCoEdges) : null;
    //         }
    //     });

    //     // Returns true of this loop is an outer loop of a face
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'isOuter', {
    //         get : function () {
    //             var result = this._execute('isOuter');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the bounding box of this loop
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'boundingBox', {
    //         get : function () {
    //             var result = this._execute('boundingBox');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
    //         }
    //     });

    //     // Returns the parent face of the loop.
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'face', {
    //         get : function () {
    //             var result = this._execute('face');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //         }
    //     });

    //     // Returns the parent body of the loop.
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'body', {
    //         get : function () {
    //             var result = this._execute('body');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });

    //     // Returns the assembly occurrence (i.e. the occurrence) of this
    //     // object in an assembly. This is only valid in the case where this
    //     // BRepLoop object is acting as a proxy in an assembly. Returns null
    //     // in the case where the object is not in the context of an assembly.
    //     // but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'assemblyContext', {
    //         get : function () {
    //             var result = this._execute('assemblyContext');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // The NativeObject is the object outside the context of an assembly.
    //     // Returns null in the case where this object is not in the context of
    //     // an assembly but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepLoop.prototype, 'nativeObject', {
    //         get : function () {
    //             var result = this._execute('nativeObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLoop) : null;
    //         }
    //     });

    //     // Returns a proxy for the native object
    //     // - i.e. a new object that represents this object but adds the assembly context
    //     // defined by the input occurrence.
    //     // occurrence : The occurrence that defines the context for the created proxy.
    //     // Returns the new BrepLoop proxy or null if this isn't the NativeObject.
    //     adsk.fusion.BRepLoop.prototype.createForAssemblyContext = function (occurrence) {
    //         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //         };
    //         var result = this._execute('createForAssemblyContext', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLoop) : null;
    //     };

    //     //=========== BRepLoops ============
    //     // BRepLoop collection.
    //     adsk.fusion.BRepLoops = function BRepLoops(handle) {
    //         if (!(this instanceof adsk.fusion.BRepLoops)) {
    //             return adsk.fusion.BRepLoops.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepLoops.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepLoops.prototype.constructor = adsk.fusion.BRepLoops;
    //     adsk.fusion.BRepLoops.interfaceId = 'adsk.fusion.BRepLoops';
    //     adsk.objectTypes['adsk.fusion.BRepLoops'] = adsk.fusion.BRepLoops;
    //     adsk.fusion.BRepLoops.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepLoops ? object : null;
    //     };

    //     // The number of loops in the collection.
    //     Object.defineProperty(adsk.fusion.BRepLoops.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified loop using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BRepLoops.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLoop) : null;
    //     };

    //     //=========== BRepLump ============
    //     // Represents an entirely connected set of entities. A BRepBody consists of BRepLumps.
    //     adsk.fusion.BRepLump = function BRepLump(handle) {
    //         if (!(this instanceof adsk.fusion.BRepLump)) {
    //             return adsk.fusion.BRepLump.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepLump.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepLump.prototype.constructor = adsk.fusion.BRepLump;
    //     adsk.fusion.BRepLump.interfaceId = 'adsk.fusion.BRepLump';
    //     adsk.objectTypes['adsk.fusion.BRepLump'] = adsk.fusion.BRepLump;
    //     adsk.fusion.BRepLump.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepLump ? object : null;
    //     };

    //     // Returns the BRepShells owned by the lump
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'shells', {
    //         get : function () {
    //             var result = this._execute('shells');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShells) : null;
    //         }
    //     });

    //     // Returns the BRepFaces owned by the lump
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'faces', {
    //         get : function () {
    //             var result = this._execute('faces');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
    //         }
    //     });

    //     // Returns the BRepEdges owned by the lump
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'edges', {
    //         get : function () {
    //             var result = this._execute('edges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
    //         }
    //     });

    //     // Returns the BRepVertices owned by the lump
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'vertices', {
    //         get : function () {
    //             var result = this._execute('vertices');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertices) : null;
    //         }
    //     });

    //     // Returns the immediate owner BRepBody of the lump
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'body', {
    //         get : function () {
    //             var result = this._execute('body');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });

    //     // Returns true of the lump is closed
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'isClosed', {
    //         get : function () {
    //             var result = this._execute('isClosed');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the bounding box of the lump
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'boundingBox', {
    //         get : function () {
    //             var result = this._execute('boundingBox');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
    //         }
    //     });

    //     // Returns the area in cm ^ 2.
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'area', {
    //         get : function () {
    //             var result = this._execute('area');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the volume in cm ^ 3. Returns 0 in the case the lump is not solid.
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'volume', {
    //         get : function () {
    //             var result = this._execute('volume');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the mesh manager object for this lump.
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'meshManager', {
    //         get : function () {
    //             var result = this._execute('meshManager');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MeshManager) : null;
    //         }
    //     });

    //     // Returns the assembly context that is directly referencing this
    //     // object in an assembly. This is only valid in the case where this
    //     // BRepLump object is acting as a proxy in an assembly. Returns null
    //     // in the case where the object is not in the context of an assembly.
    //     // but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'assemblyContext', {
    //         get : function () {
    //             var result = this._execute('assemblyContext');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // The NativeObject is the object outside the context of an assembly.
    //     // Returns null in the case where this object is not in the context of
    //     // an assembly but is already the native object.
    //     Object.defineProperty(adsk.fusion.BRepLump.prototype, 'nativeObject', {
    //         get : function () {
    //             var result = this._execute('nativeObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLump) : null;
    //         }
    //     });

    //     // Determines the relationship of the input point with respect to this lump.
    //     // point : The point to do the containment check for.
    //     //
    //     adsk.fusion.BRepLump.prototype.pointContainment = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('pointContainment', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns a proxy for the native object
    //     // - i.e. a new object that represents this object but adds the assembly context
    //     // defined by the input occurrence.
    //     // occurrence : The occurrence that defines the context for the created proxy.
    //     // Returns the new BrepLump proxy or null if this isn't the NativeObject.
    //     adsk.fusion.BRepLump.prototype.createForAssemblyContext = function (occurrence) {
    //         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //         };
    //         var result = this._execute('createForAssemblyContext', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLump) : null;
    //     };
}

//=========== BRepLumps ============
// BRepLump collection.
interface BRepLumps {
    //         if (!(this instanceof adsk.fusion.BRepLumps)) {
    //             return adsk.fusion.BRepLumps.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepLumps.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepLumps.prototype.constructor = adsk.fusion.BRepLumps;
    //     adsk.fusion.BRepLumps.interfaceId = 'adsk.fusion.BRepLumps';
    //     adsk.objectTypes['adsk.fusion.BRepLumps'] = adsk.fusion.BRepLumps;
    //     adsk.fusion.BRepLumps.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepLumps ? object : null;
    //     };

    //     // Returns the number of lumps in the collection.
    //     Object.defineProperty(adsk.fusion.BRepLumps.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified lump using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BRepLumps.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLump) : null;
    //     };
}

//     //=========== BRepShell ============
//     // Represents an entirely connected set of BRepFaces. A BRepLump may contain multiple BRepShells.
//     adsk.fusion.BRepShell = function BRepShell(handle) {
//         if (!(this instanceof adsk.fusion.BRepShell)) {
//             return adsk.fusion.BRepShell.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.BRepShell.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.BRepShell.prototype.constructor = adsk.fusion.BRepShell;
//     adsk.fusion.BRepShell.interfaceId = 'adsk.fusion.BRepShell';
//     adsk.objectTypes['adsk.fusion.BRepShell'] = adsk.fusion.BRepShell;
//     adsk.fusion.BRepShell.cast = function (object) {
//         return object instanceof adsk.fusion.BRepShell ? object : null;
//     };

//     // Returns the BRepFaces directly owned by this shell
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'faces', {
//         get : function () {
//             var result = this._execute('faces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // returns the BRepEdges owned by this shell
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
//         }
//     });

//     // Returns the BRepVertices owned by this shell
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'vertices', {
//         get : function () {
//             var result = this._execute('vertices');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertices) : null;
//         }
//     });

//     // Returns the parent lump of this shell.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'lump', {
//         get : function () {
//             var result = this._execute('lump');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepLump) : null;
//         }
//     });

//     // Returns the parent body of the shell.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'body', {
//         get : function () {
//             var result = this._execute('body');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//         }
//     });

//     // Returns the bounding box of this shell
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'boundingBox', {
//         get : function () {
//             var result = this._execute('boundingBox');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
//         }
//     });

//     // Returns true if this shell is closed
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'isClosed', {
//         get : function () {
//             var result = this._execute('isClosed');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns true if the faces of this shell bound a void or an empty space within an outer shell.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'isVoid', {
//         get : function () {
//             var result = this._execute('isVoid');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the area in cm ^ 2.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'area', {
//         get : function () {
//             var result = this._execute('area');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the volume in cm ^ 3. Returns 0 in the case the shell is not solid.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'volume', {
//         get : function () {
//             var result = this._execute('volume');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the mesh manager object for this shell.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'meshManager', {
//         get : function () {
//             var result = this._execute('meshManager');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MeshManager) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this
//     // object in an assembly. This is only valid in the case where this
//     // BRepShell object is acting as a proxy in an assembly. Returns null
//     // in the case where the object is not in the context of an assembly.
//     // but is already the native object.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.BRepShell.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShell) : null;
//         }
//     });

//     // Determines the relationship of the input point with respect to this shell.
//     // point : The point to do the containment check for.
//     //
//     adsk.fusion.BRepShell.prototype.pointContainment = function (point) {
//         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
//         var args = {
//             point : (point === null ? point : point.handle)
//         };
//         var result = this._execute('pointContainment', args);
//         return result ? result.value : undefined;
//     };

//     // Returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context for the created proxy.
//     // Returns the new BrepShell proxy or null if this isn't the NativeObject.
//     adsk.fusion.BRepShell.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShell) : null;
//     };

//     //=========== BRepShells ============
//     // BRepShell collection.
//     adsk.fusion.BRepShells = function BRepShells(handle) {
//         if (!(this instanceof adsk.fusion.BRepShells)) {
//             return adsk.fusion.BRepShells.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.BRepShells.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.BRepShells.prototype.constructor = adsk.fusion.BRepShells;
//     adsk.fusion.BRepShells.interfaceId = 'adsk.fusion.BRepShells';
//     adsk.objectTypes['adsk.fusion.BRepShells'] = adsk.fusion.BRepShells;
//     adsk.fusion.BRepShells.cast = function (object) {
//         return object instanceof adsk.fusion.BRepShells ? object : null;
//     };

//     // The number of shells in the collection.
//     Object.defineProperty(adsk.fusion.BRepShells.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified shell using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.BRepShells.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShell) : null;
//     };

//     //=========== BRepVertex ============
//     // A 0-dimentional topological entity that bounds a BRepEdge.
//     adsk.fusion.BRepVertex = function BRepVertex(handle) {
//         if (!(this instanceof adsk.fusion.BRepVertex)) {
//             return adsk.fusion.BRepVertex.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.BRepVertex.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.BRepVertex.prototype.constructor = adsk.fusion.BRepVertex;
//     adsk.fusion.BRepVertex.interfaceId = 'adsk.fusion.BRepVertex';
//     adsk.objectTypes['adsk.fusion.BRepVertex'] = adsk.fusion.BRepVertex;
//     adsk.fusion.BRepVertex.cast = function (object) {
//         return object instanceof adsk.fusion.BRepVertex ? object : null;
//     };

//     // Returns the BRepFaces that uses this vertex through BRepEdge
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'faces', {
//         get : function () {
//             var result = this._execute('faces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Returns the BRepEdges bounded by this vertex
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdges) : null;
//         }
//     });

//     // Returns if the vertex is tolerant.
//     // The tolerance used is available from the tolerance property.
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'isTolerant', {
//         get : function () {
//             var result = this._execute('isTolerant');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the tolerance used by a tolerant vertex.
//     // This value is only useful when isTolerant is true.
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'tolerance', {
//         get : function () {
//             var result = this._execute('tolerance');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the underlying geometry point
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Returns the parent shell.
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'shell', {
//         get : function () {
//             var result = this._execute('shell');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepShell) : null;
//         }
//     });

//     // Returns the parent body.
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'body', {
//         get : function () {
//             var result = this._execute('body');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this
//     // object in an assembly. This is only valid in the case where this
//     // BRepVertex object is acting as a proxy in an assembly. Returns null
//     // in the case where the object is not in the context of an assembly.
//     // but is already the native object.
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.BRepVertex.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertex) : null;
//         }
//     });

//     // Returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context for the created proxy.
//     // Returns the new BrepVertex proxy or null if this isn't the NativeObject.
//     adsk.fusion.BRepVertex.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertex) : null;
//     };

//     //=========== BRepVertices ============
//     // BRepVertex collection.
//     adsk.fusion.BRepVertices = function BRepVertices(handle) {
//         if (!(this instanceof adsk.fusion.BRepVertices)) {
//             return adsk.fusion.BRepVertices.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.BRepVertices.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.BRepVertices.prototype.constructor = adsk.fusion.BRepVertices;
//     adsk.fusion.BRepVertices.interfaceId = 'adsk.fusion.BRepVertices';
//     adsk.objectTypes['adsk.fusion.BRepVertices'] = adsk.fusion.BRepVertices;
//     adsk.fusion.BRepVertices.cast = function (object) {
//         return object instanceof adsk.fusion.BRepVertices ? object : null;
//     };

//     // The number of vertices in the collection.
//     Object.defineProperty(adsk.fusion.BRepVertices.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified vertex using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.BRepVertices.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepVertex) : null;
//     };

//     //=========== PointContainment ============
//     // Types that define the nature of the relationship between a point and a containing entity.
//     adsk.fusion.PointContainment = {
//         PointInsidePointContainment : 0,
//         PointOnPointContainment : 1,
//         PointOutsidePointContainment : 2,
//         UnknownPointContainment : 3
//     };

//     return adsk;
// }));