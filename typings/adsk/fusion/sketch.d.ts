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

//     //=========== DimensionOrientations ============
//     // The different dimension orientations.
//     adsk.fusion.DimensionOrientations = {
//         AlignedDimensionOrientation : 0,
//         HorizontalDimensionOrientation : 1,
//         VerticalDimensionOrientation : 2
//     };

//     //=========== GeometricConstraint ============
//     // The base class for all geometric constraints.
//     adsk.fusion.GeometricConstraint = function GeometricConstraint(handle) {
//         if (!(this instanceof adsk.fusion.GeometricConstraint)) {
//             return adsk.fusion.GeometricConstraint.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.GeometricConstraint.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.GeometricConstraint.prototype.constructor = adsk.fusion.GeometricConstraint;
//     adsk.fusion.GeometricConstraint.interfaceId = 'adsk.fusion.GeometricConstraint';
//     adsk.objectTypes['adsk.fusion.GeometricConstraint'] = adsk.fusion.GeometricConstraint;
//     adsk.fusion.GeometricConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.GeometricConstraint ? object : null;
//     };

//     // Indicates if this constraint is deletable.
//     Object.defineProperty(adsk.fusion.GeometricConstraint.prototype, 'isDeletable', {
//         get : function () {
//             var result = this._execute('isDeletable');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parent sketch object.
//     Object.defineProperty(adsk.fusion.GeometricConstraint.prototype, 'parentSketch', {
//         get : function () {
//             var result = this._execute('parentSketch');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.GeometricConstraint.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Deletes this constraint. The IsDeletable property can be used to determine if this
//     // constraint can be deleted.
//     // Returns true if the delete was successful.
//     adsk.fusion.GeometricConstraint.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== GeometricConstraintList ============
//     // A list of geometric constraints.
//     adsk.fusion.GeometricConstraintList = function GeometricConstraintList(handle) {
//         if (!(this instanceof adsk.fusion.GeometricConstraintList)) {
//             return adsk.fusion.GeometricConstraintList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.GeometricConstraintList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.GeometricConstraintList.prototype.constructor = adsk.fusion.GeometricConstraintList;
//     adsk.fusion.GeometricConstraintList.interfaceId = 'adsk.fusion.GeometricConstraintList';
//     adsk.objectTypes['adsk.fusion.GeometricConstraintList'] = adsk.fusion.GeometricConstraintList;
//     adsk.fusion.GeometricConstraintList.cast = function (object) {
//         return object instanceof adsk.fusion.GeometricConstraintList ? object : null;
//     };

//     // Returns the number of constraints in the sketch.
//     Object.defineProperty(adsk.fusion.GeometricConstraintList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified geometry constraint using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.GeometricConstraintList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.GeometricConstraint) : null;
//     };

//     //=========== GeometricConstraints ============
//     // A collection of all of the geometric constraints in a sketch. This object
//     // also supports the methods to create new geometric constraints.
//     adsk.fusion.GeometricConstraints = function GeometricConstraints(handle) {
//         if (!(this instanceof adsk.fusion.GeometricConstraints)) {
//             return adsk.fusion.GeometricConstraints.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.GeometricConstraints.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.GeometricConstraints.prototype.constructor = adsk.fusion.GeometricConstraints;
//     adsk.fusion.GeometricConstraints.interfaceId = 'adsk.fusion.GeometricConstraints';
//     adsk.objectTypes['adsk.fusion.GeometricConstraints'] = adsk.fusion.GeometricConstraints;
//     adsk.fusion.GeometricConstraints.cast = function (object) {
//         return object instanceof adsk.fusion.GeometricConstraints ? object : null;
//     };

//     // Returns the number of constraints in the sketch.
//     Object.defineProperty(adsk.fusion.GeometricConstraints.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch constraint using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.GeometricConstraints.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.GeometricConstraint) : null;
//     };

//     // Creates a new coincident constraint between two entities. The first argument
//     // is a sketch point. The second argument is a sketch curve or point.
//     // point : The SketchPoint that will be made coincident.
//     // entity : The SketchPoint or sketch curve that the point will be made coincident to.
//     // Returns the newly created CoincidentConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addCoincident = function (point, entity) {
//         if (point !== null && !(point instanceof adsk.fusion.SketchPoint)) { throw new TypeError('point must be a adsk.fusion.SketchPoint'); }
//         if (entity !== null && !(entity instanceof adsk.fusion.SketchEntity)) { throw new TypeError('entity must be a adsk.fusion.SketchEntity'); }
//         var args = {
//             point : (point === null ? point : point.handle),
//             entity : (entity === null ? entity : entity.handle)
//         };
//         var result = this._execute('addCoincident', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CoincidentConstraint) : null;
//     };

//     // Creates a new collinear constraint between two lines.
//     // lineOne : The first line to create the constraint on.
//     // lineTwo : The second line to create the constraint on.
//     // Returns the newly created CollinearConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addCollinear = function (lineOne, lineTwo) {
//         if (lineOne !== null && !(lineOne instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineOne must be a adsk.fusion.SketchLine'); }
//         if (lineTwo !== null && !(lineTwo instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineTwo must be a adsk.fusion.SketchLine'); }
//         var args = {
//             lineOne : (lineOne === null ? lineOne : lineOne.handle),
//             lineTwo : (lineTwo === null ? lineTwo : lineTwo.handle)
//         };
//         var result = this._execute('addCollinear', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CollinearConstraint) : null;
//     };

//     // Creates a new concentric constraint between two circles, arcs, ellipses, or elliptical arcs.
//     // entityOne : The first circle, arc, ellipse or elliptical arc.
//     // entityTwo : The second circle, arc, ellipse or elliptical arc.
//     // Returns the newly created ConcentricConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addConcentric = function (entityOne, entityTwo) {
//         if (entityOne !== null && !(entityOne instanceof adsk.fusion.SketchCurve)) { throw new TypeError('entityOne must be a adsk.fusion.SketchCurve'); }
//         if (entityTwo !== null && !(entityTwo instanceof adsk.fusion.SketchCurve)) { throw new TypeError('entityTwo must be a adsk.fusion.SketchCurve'); }
//         var args = {
//             entityOne : (entityOne === null ? entityOne : entityOne.handle),
//             entityTwo : (entityTwo === null ? entityTwo : entityTwo.handle)
//         };
//         var result = this._execute('addConcentric', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConcentricConstraint) : null;
//     };

//     // Creates a new midpoint constraint between a point and a curve.
//     // point : The point to constrain to the midpoint of a curve.
//     // midPointCurve : The curve that defines the midpoint to constraint to.
//     // Returns the newly created MidPointConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addMidPoint = function (point, midPointCurve) {
//         if (point !== null && !(point instanceof adsk.fusion.SketchPoint)) { throw new TypeError('point must be a adsk.fusion.SketchPoint'); }
//         if (midPointCurve !== null && !(midPointCurve instanceof adsk.fusion.SketchCurve)) { throw new TypeError('midPointCurve must be a adsk.fusion.SketchCurve'); }
//         var args = {
//             point : (point === null ? point : point.handle),
//             midPointCurve : (midPointCurve === null ? midPointCurve : midPointCurve.handle)
//         };
//         var result = this._execute('addMidPoint', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MidPointConstraint) : null;
//     };

//     // Creates a new parallel constraint between two lines.
//     // lineOne : The first SketchLine.
//     // lineTwo : The second SketchLine.
//     // Returns the newly created ParallelConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addParallel = function (lineOne, lineTwo) {
//         if (lineOne !== null && !(lineOne instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineOne must be a adsk.fusion.SketchLine'); }
//         if (lineTwo !== null && !(lineTwo instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineTwo must be a adsk.fusion.SketchLine'); }
//         var args = {
//             lineOne : (lineOne === null ? lineOne : lineOne.handle),
//             lineTwo : (lineTwo === null ? lineTwo : lineTwo.handle)
//         };
//         var result = this._execute('addParallel', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParallelConstraint) : null;
//     };

//     // Creates a new perpendicular constraint between two lines.
//     // lineOne : The first SketchLine.
//     // lineTwo : The second SketchLine.
//     // Returns the newly created PerpendicularConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addPerpendicular = function (lineOne, lineTwo) {
//         if (lineOne !== null && !(lineOne instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineOne must be a adsk.fusion.SketchLine'); }
//         if (lineTwo !== null && !(lineTwo instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineTwo must be a adsk.fusion.SketchLine'); }
//         var args = {
//             lineOne : (lineOne === null ? lineOne : lineOne.handle),
//             lineTwo : (lineTwo === null ? lineTwo : lineTwo.handle)
//         };
//         var result = this._execute('addPerpendicular', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PerpendicularConstraint) : null;
//     };

//     // Creates a new horizontal constraint on a line.
//     // line : The line to constrain horizontally.
//     // Returns the newly created HorizontalConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addHorizontal = function (line) {
//         if (line !== null && !(line instanceof adsk.fusion.SketchLine)) { throw new TypeError('line must be a adsk.fusion.SketchLine'); }
//         var args = {
//             line : (line === null ? line : line.handle)
//         };
//         var result = this._execute('addHorizontal', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HorizontalConstraint) : null;
//     };

//     // Creates a new horizontal constraint between two points.
//     // pointOne : The first SketchPoint to constrain horizontally.
//     // pointTwo : The second SketchPoint to constrain horizontally.
//     // Returns the newly created HorizontalPointsConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addHorizontalPoints = function (pointOne, pointTwo) {
//         if (pointOne !== null && !(pointOne instanceof adsk.fusion.SketchPoint)) { throw new TypeError('pointOne must be a adsk.fusion.SketchPoint'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.fusion.SketchPoint)) { throw new TypeError('pointTwo must be a adsk.fusion.SketchPoint'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle)
//         };
//         var result = this._execute('addHorizontalPoints', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HorizontalPointsConstraint) : null;
//     };

//     // Creates a new vertical constraint on a line.
//     // line : The line to constrain vertically.
//     // Returns the newly created VerticalConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addVertical = function (line) {
//         if (line !== null && !(line instanceof adsk.fusion.SketchLine)) { throw new TypeError('line must be a adsk.fusion.SketchLine'); }
//         var args = {
//             line : (line === null ? line : line.handle)
//         };
//         var result = this._execute('addVertical', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.VerticalConstraint) : null;
//     };

//     // Creates a new vertical constraint between two points.
//     // pointOne : The first SketchPoint to constrain vertically.
//     // pointTwo : The second SketchPoint to constrain vertically.
//     // Returns the newly created VerticalPointsConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addVerticalPoints = function (pointOne, pointTwo) {
//         if (pointOne !== null && !(pointOne instanceof adsk.fusion.SketchPoint)) { throw new TypeError('pointOne must be a adsk.fusion.SketchPoint'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.fusion.SketchPoint)) { throw new TypeError('pointTwo must be a adsk.fusion.SketchPoint'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle)
//         };
//         var result = this._execute('addVerticalPoints', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.VerticalPointsConstraint) : null;
//     };

//     // Creates a new tangent constraint between two curves.
//     // curveOne : The first curve to be tangent.
//     // curveTwo : The second curve to be tangent.
//     // Returns the newly created TangentConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addTangent = function (curveOne, curveTwo) {
//         if (curveOne !== null && !(curveOne instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curveOne must be a adsk.fusion.SketchCurve'); }
//         if (curveTwo !== null && !(curveTwo instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curveTwo must be a adsk.fusion.SketchCurve'); }
//         var args = {
//             curveOne : (curveOne === null ? curveOne : curveOne.handle),
//             curveTwo : (curveTwo === null ? curveTwo : curveTwo.handle)
//         };
//         var result = this._execute('addTangent', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TangentConstraint) : null;
//     };

//     // Creates a new smooth constraint between two curves. One of the curves
//     // must be a spline. The other curve can be a spline or an arc.
//     // curveOne : The first curve to be smooth.
//     // curveTwo : The first curve to be smooth.
//     // Returns the newly created SmoothConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addSmooth = function (curveOne, curveTwo) {
//         if (curveOne !== null && !(curveOne instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curveOne must be a adsk.fusion.SketchCurve'); }
//         if (curveTwo !== null && !(curveTwo instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curveTwo must be a adsk.fusion.SketchCurve'); }
//         var args = {
//             curveOne : (curveOne === null ? curveOne : curveOne.handle),
//             curveTwo : (curveTwo === null ? curveTwo : curveTwo.handle)
//         };
//         var result = this._execute('addSmooth', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SmoothConstraint) : null;
//     };

//     // Creates a new equal constraint between two lines, or between arcs and circles.
//     // curveOne : The first line, arc, or circle.
//     // curveTwo : The second line, arc, or circle.
//     // Returns the newly created EqualConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addEqual = function (curveOne, curveTwo) {
//         if (curveOne !== null && !(curveOne instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curveOne must be a adsk.fusion.SketchCurve'); }
//         if (curveTwo !== null && !(curveTwo instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curveTwo must be a adsk.fusion.SketchCurve'); }
//         var args = {
//             curveOne : (curveOne === null ? curveOne : curveOne.handle),
//             curveTwo : (curveTwo === null ? curveTwo : curveTwo.handle)
//         };
//         var result = this._execute('addEqual', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.EqualConstraint) : null;
//     };

//     // Creates a new symmetry constraint.
//     // entityOne : The first sketch entity to be symmetric.
//     // entityTwo : The second sketch entity to be symmetric. It must be the same type as the first entity.
//     // symmetryLine : The SketchLine that defines the axis of symmetry.
//     // Returns the newly created SymmetryConstraint object or null if the creation failed.
//     adsk.fusion.GeometricConstraints.prototype.addSymmetry = function (entityOne, entityTwo, symmetryLine) {
//         if (entityOne !== null && !(entityOne instanceof adsk.fusion.SketchEntity)) { throw new TypeError('entityOne must be a adsk.fusion.SketchEntity'); }
//         if (entityTwo !== null && !(entityTwo instanceof adsk.fusion.SketchEntity)) { throw new TypeError('entityTwo must be a adsk.fusion.SketchEntity'); }
//         if (symmetryLine !== null && !(symmetryLine instanceof adsk.fusion.SketchLine)) { throw new TypeError('symmetryLine must be a adsk.fusion.SketchLine'); }
//         var args = {
//             entityOne : (entityOne === null ? entityOne : entityOne.handle),
//             entityTwo : (entityTwo === null ? entityTwo : entityTwo.handle),
//             symmetryLine : (symmetryLine === null ? symmetryLine : symmetryLine.handle)
//         };
//         var result = this._execute('addSymmetry', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SymmetryConstraint) : null;
//     };

//     //=========== Profile ============
//     // Represents a profile in a sketch. Profiles are automatically computed by Fusion and
//     // represent closed areas within the sketch.
//     adsk.fusion.Profile = function Profile(handle) {
//         if (!(this instanceof adsk.fusion.Profile)) {
//             return adsk.fusion.Profile.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Profile.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Profile.prototype.constructor = adsk.fusion.Profile;
//     adsk.fusion.Profile.interfaceId = 'adsk.fusion.Profile';
//     adsk.objectTypes['adsk.fusion.Profile'] = adsk.fusion.Profile;
//     adsk.fusion.Profile.cast = function (object) {
//         return object instanceof adsk.fusion.Profile ? object : null;
//     };

//     // Returns the 3D bounding box of the profile in sketch space.
//     Object.defineProperty(adsk.fusion.Profile.prototype, 'boundingBox', {
//         get : function () {
//             var result = this._execute('boundingBox');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
//         }
//     });

//     // Returns the plane the profile is defined in. Profiles are always planar and exist within
//     // a single plane.
//     Object.defineProperty(adsk.fusion.Profile.prototype, 'plane', {
//         get : function () {
//             var result = this._execute('plane');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Plane) : null;
//         }
//     });

//     // The loops or closed areas within this profile. There is always a single outer loop
//     // but there can be zero to many inner loops defining voids in the profile.
//     Object.defineProperty(adsk.fusion.Profile.prototype, 'profileLoops', {
//         get : function () {
//             var result = this._execute('profileLoops');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileLoops) : null;
//         }
//     });

//     // Returns the parent sketch of the profile.
//     Object.defineProperty(adsk.fusion.Profile.prototype, 'parentSketch', {
//         get : function () {
//             var result = this._execute('parentSketch');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this
//     // object in an assembly. This is only valid in the case where this
//     // is acting as a proxy in an assembly. Returns null
//     // in the case where the object is not in the context of an assembly.
//     // but is already the native object.
//     Object.defineProperty(adsk.fusion.Profile.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Profile.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // Returns null if this isn't the NativeObject.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.Profile.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
//     };

//     //=========== ProfileCurve ============
//     // A single curve in a profile.
//     adsk.fusion.ProfileCurve = function ProfileCurve(handle) {
//         if (!(this instanceof adsk.fusion.ProfileCurve)) {
//             return adsk.fusion.ProfileCurve.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ProfileCurve.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ProfileCurve.prototype.constructor = adsk.fusion.ProfileCurve;
//     adsk.fusion.ProfileCurve.interfaceId = 'adsk.fusion.ProfileCurve';
//     adsk.objectTypes['adsk.fusion.ProfileCurve'] = adsk.fusion.ProfileCurve;
//     adsk.fusion.ProfileCurve.cast = function (object) {
//         return object instanceof adsk.fusion.ProfileCurve ? object : null;
//     };

//     // Returns the geometric entity of this portion of the profile.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Curve3D) : null;
//         }
//     });

//     // Return the geometry type that the Geometry property will return.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'geometryType', {
//         get : function () {
//             var result = this._execute('geometryType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the associated sketch entity that defines this curve.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'sketchEntity', {
//         get : function () {
//             var result = this._execute('sketchEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // Returns the parent ProfileLoop object.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'parentProfileLoop', {
//         get : function () {
//             var result = this._execute('parentProfileLoop');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileLoop) : null;
//         }
//     });

//     // Returns the parent Profile object.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'parentProfile', {
//         get : function () {
//             var result = this._execute('parentProfile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
//         }
//     });

//     // Returns the parent Profile object.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'parentSketch', {
//         get : function () {
//             var result = this._execute('parentSketch');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileCurve) : null;
//         }
//     });

//     // Returns the bounding box of the profile curve in sketch space.
//     Object.defineProperty(adsk.fusion.ProfileCurve.prototype, 'boundingBox', {
//         get : function () {
//             var result = this._execute('boundingBox');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // Returns null if this isn't the NativeObject.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ProfileCurve.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileCurve) : null;
//     };

//     //=========== ProfileCurves ============
//     // A collection of profile curves within a profile loop.
//     adsk.fusion.ProfileCurves = function ProfileCurves(handle) {
//         if (!(this instanceof adsk.fusion.ProfileCurves)) {
//             return adsk.fusion.ProfileCurves.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ProfileCurves.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ProfileCurves.prototype.constructor = adsk.fusion.ProfileCurves;
//     adsk.fusion.ProfileCurves.interfaceId = 'adsk.fusion.ProfileCurves';
//     adsk.objectTypes['adsk.fusion.ProfileCurves'] = adsk.fusion.ProfileCurves;
//     adsk.fusion.ProfileCurves.cast = function (object) {
//         return object instanceof adsk.fusion.ProfileCurves ? object : null;
//     };

//     // Returns the number of curves in the collection.
//     Object.defineProperty(adsk.fusion.ProfileCurves.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified profile curve using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ProfileCurves.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileCurve) : null;
//     };

//     //=========== ProfileLoop ============
//     // A loop within a profile.
//     adsk.fusion.ProfileLoop = function ProfileLoop(handle) {
//         if (!(this instanceof adsk.fusion.ProfileLoop)) {
//             return adsk.fusion.ProfileLoop.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ProfileLoop.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ProfileLoop.prototype.constructor = adsk.fusion.ProfileLoop;
//     adsk.fusion.ProfileLoop.interfaceId = 'adsk.fusion.ProfileLoop';
//     adsk.objectTypes['adsk.fusion.ProfileLoop'] = adsk.fusion.ProfileLoop;
//     adsk.fusion.ProfileLoop.cast = function (object) {
//         return object instanceof adsk.fusion.ProfileLoop ? object : null;
//     };

//     // Indicates if this is an outer or inner loop. Profiles always have
//     // one outer loop and have an zero to many inner loops defining voids.
//     Object.defineProperty(adsk.fusion.ProfileLoop.prototype, 'isOuter', {
//         get : function () {
//             var result = this._execute('isOuter');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a collection of the curves making up this loop.
//     Object.defineProperty(adsk.fusion.ProfileLoop.prototype, 'profileCurves', {
//         get : function () {
//             var result = this._execute('profileCurves');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileCurves) : null;
//         }
//     });

//     // Returns the parent Profile object.
//     Object.defineProperty(adsk.fusion.ProfileLoop.prototype, 'parentProfile', {
//         get : function () {
//             var result = this._execute('parentProfile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ProfileLoop.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ProfileLoop.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileLoop) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // Returns null if this isn't the NativeObject.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ProfileLoop.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileLoop) : null;
//     };

//     //=========== ProfileLoops ============
//     // A collection of loops within a Profile.
//     adsk.fusion.ProfileLoops = function ProfileLoops(handle) {
//         if (!(this instanceof adsk.fusion.ProfileLoops)) {
//             return adsk.fusion.ProfileLoops.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ProfileLoops.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ProfileLoops.prototype.constructor = adsk.fusion.ProfileLoops;
//     adsk.fusion.ProfileLoops.interfaceId = 'adsk.fusion.ProfileLoops';
//     adsk.objectTypes['adsk.fusion.ProfileLoops'] = adsk.fusion.ProfileLoops;
//     adsk.fusion.ProfileLoops.cast = function (object) {
//         return object instanceof adsk.fusion.ProfileLoops ? object : null;
//     };

//     // Returns the number of loops within this profile.
//     Object.defineProperty(adsk.fusion.ProfileLoops.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified profile loop using an index into the collection.
//     // index : The index of the item within the collection to return.
//     // The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ProfileLoops.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ProfileLoop) : null;
//     };

//     //=========== Profiles ============
//     // A collection of all of the closed profiles currently calculated for this sketch. Closed profiles are
//     // automatically computed by Fusion and represent closed areas within the sketch.
//     // This class also provides some additional utility functions to create open profiles and text based profiles
//     // that can be used as input for various features.
//     adsk.fusion.Profiles = function Profiles(handle) {
//         if (!(this instanceof adsk.fusion.Profiles)) {
//             return adsk.fusion.Profiles.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Profiles.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Profiles.prototype.constructor = adsk.fusion.Profiles;
//     adsk.fusion.Profiles.interfaceId = 'adsk.fusion.Profiles';
//     adsk.objectTypes['adsk.fusion.Profiles'] = adsk.fusion.Profiles;
//     adsk.fusion.Profiles.cast = function (object) {
//         return object instanceof adsk.fusion.Profiles ? object : null;
//     };

//     // Returns the number of closed profiles in the sketch. Open and text based profiles are not included.
//     Object.defineProperty(adsk.fusion.Profiles.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified closed profile using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the
//     // collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Profiles.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
//     };

//     //=========== Sketch ============
//     // Represents a sketch within a component.
//     adsk.fusion.Sketch = function Sketch(handle) {
//         if (!(this instanceof adsk.fusion.Sketch)) {
//             return adsk.fusion.Sketch.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Sketch.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Sketch.prototype.constructor = adsk.fusion.Sketch;
//     adsk.fusion.Sketch.interfaceId = 'adsk.fusion.Sketch';
//     adsk.objectTypes['adsk.fusion.Sketch'] = adsk.fusion.Sketch;
//     adsk.fusion.Sketch.cast = function (object) {
//         return object instanceof adsk.fusion.Sketch ? object : null;
//     };

//     // Gets and sets the name of this sketch as seen in the browser and timeline.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'name', {
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

//     // Returns the sketch points collection associated with this sketch.
//     // This provides access to the existing sketch points and supports
//     // the creation of new sketch points.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'sketchPoints', {
//         get : function () {
//             var result = this._execute('sketchPoints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoints) : null;
//         }
//     });

//     // Returns the sketch curves collection associated with this sketch.
//     // This provides access to the existing sketch curves which is all
//     // geometry in the sketch except for sketch points. It is through this
//     // collection that new sketch geometry gets created.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'sketchCurves', {
//         get : function () {
//             var result = this._execute('sketchCurves');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurves) : null;
//         }
//     });

//     // Returns the sketch dimensions collection associated with this sketch.
//     // This provides access to the existing sketch dimensions and supports
//     // the creation of new sketch dimensions.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'sketchDimensions', {
//         get : function () {
//             var result = this._execute('sketchDimensions');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDimensions) : null;
//         }
//     });

//     // Returns the sketch constraints collection associated with this sketch.
//     // This provides access to the existing sketch constraints and supports
//     // the creation of new sketch constraints.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'geometricConstraints', {
//         get : function () {
//             var result = this._execute('geometricConstraints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.GeometricConstraints) : null;
//         }
//     });

//     // Gets and sets the transform of the sketch with respect to model space.
//     // This defines the transform from the parent component space
//     // to the sketch space. For example, if you have point coordinates in the space
//     // of the parent component and apply this transform it will result in the
//     // coordinates of the equivalent position in sketch space.
//     // The transform is sensitive to the assembly context.
//     // Setting the transform will fail in the case where the sketch is parametric
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'transform', {
//         get : function () {
//             var result = this._execute('transform');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix3D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Matrix3D)) { throw new TypeError('value must be a adsk.core.Matrix3D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('transform', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this sketch is parametric or not. For parametric sketches, you can also
//     // get the construction plane or face it is associative to using the ReferencePlane property.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'isParametric', {
//         get : function () {
//             var result = this._execute('isParametric');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this sketch is visible or not. Sketches that are not
//     // visible are ignored in profile calculations.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'isVisible', {
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

//     // Indicates if the dimensions of the sketch are displayed when the sketch is not active
//     // (in sketch edit mode)
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'areDimensionsShown', {
//         get : function () {
//             var result = this._execute('areDimensionsShown');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('areDimensionsShown', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if the profiles of the sketch are displayed
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'areProfilesShown', {
//         get : function () {
//             var result = this._execute('areProfilesShown');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('areProfilesShown', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the origin point of the sketch in model space.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'origin', {
//         get : function () {
//             var result = this._execute('origin');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Returns the X direction of the sketch as defined in model space.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'xDirection', {
//         get : function () {
//             var result = this._execute('xDirection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the Y direction of the sketch as defined in model space.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'yDirection', {
//         get : function () {
//             var result = this._execute('yDirection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets and sets the construction plane or planar face the sketch is associated
//     // to. This is only valid when the IsParametric property is True otherwise this
//     // returns null and setting the property will fail.
//     // Setting this property is the equivalent of the Redefine command.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'referencePlane', {
//         get : function () {
//             var result = this._execute('referencePlane');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('referencePlane', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Temporarily turns off the compute of the sketch. This is used to
//     // increase the performance as sketch geometry is created. Once the
//     // sketch is drawn the this property should be set to false to allow
//     // the sketch to recompute. This setting is not saved by the file and is
//     // always false when a file is opened.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'isComputeDeferred', {
//         get : function () {
//             var result = this._execute('isComputeDeferred');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isComputeDeferred', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the profiles currently computed for the sketch.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'profiles', {
//         get : function () {
//             var result = this._execute('profiles');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profiles) : null;
//         }
//     });

//     // Returns the timeline object associated with this sketch.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // Returns the parent Component.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'parentComponent', {
//         get : function () {
//             var result = this._execute('parentComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this
//     // object in an assembly. This is only valid in the case where this
//     // is acting as a proxy in an assembly. Returns null
//     // in the case where the object is not in the context of an assembly.
//     // but is already the native object.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//         }
//     });

//     // Returns the 3D bounding box of the sketch
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'boundingBox', {
//         get : function () {
//             var result = this._execute('boundingBox');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
//         }
//     });

//     // Returns the sketch text collection associated with this sketch.
//     // This provides access to existing text and supports the creation
//     // of new text.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'sketchTexts', {
//         get : function () {
//             var result = this._execute('sketchTexts');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchTexts) : null;
//         }
//     });

//     // Returns the sketch point that was automatically created by projecting the
//     // origin construction point into the sketch.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'originPoint', {
//         get : function () {
//             var result = this._execute('originPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Indicates if this sketch is fully constrained.
//     Object.defineProperty(adsk.fusion.Sketch.prototype, 'isFullyConstrained', {
//         get : function () {
//             var result = this._execute('isFullyConstrained');
//             return result ? result.value : undefined;
//         }
//     });

//     // Projects the specified entity onto the x-y plane of the sketch
//     // and returns the created sketch entity(s).
//     // entity : The entity to project. This can be a sketch entity, an edge, a face to get all
//     // of its edges, a vertex, a construction axis, a construction point, or a
//     // construction plane that is perpendicular to the sketch to create a line.
//     // Returns a collection of the sketch entities that were created as a result of the
//     // projection.
//     adsk.fusion.Sketch.prototype.project = function (entity) {
//         if (entity !== null && !(entity instanceof adsk.core.Base)) { throw new TypeError('entity must be a adsk.core.Base'); }
//         var args = {
//             entity : (entity === null ? entity : entity.handle)
//         };
//         var result = this._execute('project', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Intersects the specified body with the sketch plane and creates new
//     // curves representing the intersection.
//     // body : The body to be intersected by the sketch.
//     // Returns a collection of the sketch entities that were created a a result of the
//     // cut.
//     adsk.fusion.Sketch.prototype.projectCutEdges = function (body) {
//         if (body !== null && !(body instanceof adsk.fusion.BRepBody)) { throw new TypeError('body must be a adsk.fusion.BRepBody'); }
//         var args = {
//             body : (body === null ? body : body.handle)
//         };
//         var result = this._execute('projectCutEdges', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Creates new sketch curves and points that represent the specified entity
//     // as sketch geometry.
//     // entity : The entity to include into the sketch. This can be a sketch entity from
//     // another sketch, edge, face (which results in getting all of its edges, a
//     // vertex, construction axis, or construction point.
//     //
//     adsk.fusion.Sketch.prototype.include = function (entity) {
//         if (entity !== null && !(entity instanceof adsk.core.Base)) { throw new TypeError('entity must be a adsk.core.Base'); }
//         var args = {
//             entity : (entity === null ? entity : entity.handle)
//         };
//         var result = this._execute('include', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Finds the sketch curves that are end connected to the input curve. This can be useful
//     // for many cases but is especially useful in gathering the input when creating an offset.
//     // curve : The initial sketch curve that will be used to find the connected curves.
//     // A collection of the connected curves. They are returned in their connected order with
//     // the original input curve being one of the curves.
//     adsk.fusion.Sketch.prototype.findConnectedCurves = function (curve) {
//         if (curve !== null && !(curve instanceof adsk.fusion.SketchCurve)) { throw new TypeError('curve must be a adsk.fusion.SketchCurve'); }
//         var args = {
//             curve : (curve === null ? curve : curve.handle)
//         };
//         var result = this._execute('findConnectedCurves', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Creates offset curves for the set of input curves. If the offset distance is not
//     // provided, the offset distance is defined by the direction point.
//     // curves : A set of end connected curves. The Sketch.FindConnectedCurves method is a convenient way to get
//     // this set of curves.
//     // directionPoint : Defines which side of the input curves to create the offset on
//     // offset : The distance to offset the curves in centimeters.
//     // A collection of the new offset sketch curves created
//     adsk.fusion.Sketch.prototype.offset = function (curves, directionPoint, offset) {
//         if (curves !== null && !(curves instanceof adsk.core.ObjectCollection)) { throw new TypeError('curves must be a adsk.core.ObjectCollection'); }
//         if (directionPoint !== null && !(directionPoint instanceof adsk.core.Point3D)) { throw new TypeError('directionPoint must be a adsk.core.Point3D'); }
//         if (offset === null || (offset !== undefined && !isFinite(offset))) { throw new TypeError('offset must be a number'); }
//         var args = {
//             curves : (curves === null ? curves : curves.handle),
//             directionPoint : (directionPoint === null ? directionPoint : directionPoint.handle)
//         };
//         if (offset !== undefined) {
//             args.offset = Number(offset);
//         }
//         var result = this._execute('offset', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // A specified point in model space returns the equivalent point in sketch space.
//     // This is sensitive to the assembly context.
//     // modelCoordinate : A coordinate in model space.
//     // Returns the equivalent point in sketch space.
//     adsk.fusion.Sketch.prototype.modelToSketchSpace = function (modelCoordinate) {
//         if (modelCoordinate !== null && !(modelCoordinate instanceof adsk.core.Point3D)) { throw new TypeError('modelCoordinate must be a adsk.core.Point3D'); }
//         var args = {
//             modelCoordinate : (modelCoordinate === null ? modelCoordinate : modelCoordinate.handle)
//         };
//         var result = this._execute('modelToSketchSpace', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//     };

//     // A specified point in sketch space returns the equivalent point in model space.
//     // This is sensitive to the assembly context.
//     // sketchCoordinate : A coordinate in sketch space.
//     // Returns the equivalent point in model space.
//     adsk.fusion.Sketch.prototype.sketchToModelSpace = function (sketchCoordinate) {
//         if (sketchCoordinate !== null && !(sketchCoordinate instanceof adsk.core.Point3D)) { throw new TypeError('sketchCoordinate must be a adsk.core.Point3D'); }
//         var args = {
//             sketchCoordinate : (sketchCoordinate === null ? sketchCoordinate : sketchCoordinate.handle)
//         };
//         var result = this._execute('sketchToModelSpace', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//     };

//     // Moves the specified sketch entities using the specified transform.
//     // Transform respects any constraints that would normally prohibit the move.
//     // sketchEntities : A collection of sketch entities to transform.
//     // transform : The transform that defines the move, rotate or scale.
//     // Returns true if the move was successful.
//     adsk.fusion.Sketch.prototype.move = function (sketchEntities, transform) {
//         if (sketchEntities !== null && !(sketchEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('sketchEntities must be a adsk.core.ObjectCollection'); }
//         if (transform !== null && !(transform instanceof adsk.core.Matrix3D)) { throw new TypeError('transform must be a adsk.core.Matrix3D'); }
//         var args = {
//             sketchEntities : (sketchEntities === null ? sketchEntities : sketchEntities.handle),
//             transform : (transform === null ? transform : transform.handle)
//         };
//         var result = this._execute('move', args);
//         return result ? result.value : undefined;
//     };

//     // Copies the specified sketch entities, applying the specified transform.
//     // Any geometric or dimension constraints associated with the entities will
//     // automatically be copied, if possible. For example, if there is a horizontal
//     // dimension and the transform defines a rotation then it will not be included in the
//     // result. This same behavior can be seen when performing a copy/paste operation
//     // in the user interface.
//     // sketchEntities : The collection of sketch entities to copy. They must all exist in this sketch.
//     // transform : The transform to apply to the copied entities.
//     // targetSketch : Optionally specifies the sketch to copy the entities to. If not provided the entities are copied to this sketch.
//     // Returns a collection of the new sketch entities that were created as a result of the copy.
//     adsk.fusion.Sketch.prototype.copy = function (sketchEntities, transform, targetSketch) {
//         if (sketchEntities !== null && !(sketchEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('sketchEntities must be a adsk.core.ObjectCollection'); }
//         if (transform !== null && !(transform instanceof adsk.core.Matrix3D)) { throw new TypeError('transform must be a adsk.core.Matrix3D'); }
//         if (targetSketch === null || (targetSketch !== undefined && targetSketch !== null && !(targetSketch instanceof adsk.fusion.Sketch))) { throw new TypeError('targetSketch must be a adsk.fusion.Sketch'); }
//         var args = {
//             sketchEntities : (sketchEntities === null ? sketchEntities : sketchEntities.handle),
//             transform : (transform === null ? transform : transform.handle)
//         };
//         if (targetSketch !== undefined) {
//             args.targetSketch = (targetSketch === null ? targetSketch : targetSketch.handle);
//         }
//         var result = this._execute('copy', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Deletes the sketch.
//     // Returns true if the delete was successful.
//     adsk.fusion.Sketch.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Saves the contents of the sketch to a specified DXF file.
//     // ///
//     // fullFilename : The full filename, including the path, of the DXF file.
//     // Returns true if the operation was successful.
//     adsk.fusion.Sketch.prototype.saveAsDXF = function (fullFilename) {
//         if (fullFilename === undefined || fullFilename === null || fullFilename.constructor !== String) { throw new TypeError('fullFilename must be a string'); }
//         var args = {
//             fullFilename : fullFilename
//         };
//         var result = this._execute('saveAsDXF', args);
//         return result ? result.value : undefined;
//     };

//     // Imports the contents of an SVG file into the active sketch
//     // ///
//     // fullFilename : The full filename, including the path, of the SVG file.
//     // xPosition : The X offset in centimeters in the sketch for the origin of the SVG data
//     // relative to the sketch origin.
//     // yPosition : The Y offset in centimeters in the sketch for the origin of the SVG data
//     // relative to the sketch origin.
//     // scale : The scale value to apply to the imported SVG data.
//     // Returns true if the import was successful.
//     adsk.fusion.Sketch.prototype.importSVG = function (fullFilename, xPosition, yPosition, scale) {
//         if (fullFilename === undefined || fullFilename === null || fullFilename.constructor !== String) { throw new TypeError('fullFilename must be a string'); }
//         if (!isFinite(xPosition)) { throw new TypeError('xPosition must be a number'); }
//         if (!isFinite(yPosition)) { throw new TypeError('yPosition must be a number'); }
//         if (!isFinite(scale)) { throw new TypeError('scale must be a number'); }
//         var args = {
//             fullFilename : fullFilename,
//             xPosition : Number(xPosition),
//             yPosition : Number(yPosition),
//             scale : Number(scale)
//         };
//         var result = this._execute('importSVG', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.Sketch.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//     };

//     //=========== SketchArcs ============
//     // The collection of arcs in a sketch. This provides access to the existing
//     // arcs and supports the methods to create new arcs.
//     adsk.fusion.SketchArcs = function SketchArcs(handle) {
//         if (!(this instanceof adsk.fusion.SketchArcs)) {
//             return adsk.fusion.SketchArcs.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchArcs.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchArcs.prototype.constructor = adsk.fusion.SketchArcs;
//     adsk.fusion.SketchArcs.interfaceId = 'adsk.fusion.SketchArcs';
//     adsk.objectTypes['adsk.fusion.SketchArcs'] = adsk.fusion.SketchArcs;
//     adsk.fusion.SketchArcs.cast = function (object) {
//         return object instanceof adsk.fusion.SketchArcs ? object : null;
//     };

//     // Returns the number of arcs in the sketch.
//     Object.defineProperty(adsk.fusion.SketchArcs.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch arc using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchArcs.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArc) : null;
//     };

//     // Creates a sketch arc that is always parallel to the x-y plane of the sketch
//     // and is centered at the specified point.
//     // centerPoint : The center point of the arc. This can be either an existing SketchPoint or a Point3D object.
//     // startPoint : The start point of the arc. The distance between this point and the center defines the radius
//     // of the arc. This can be either an existing SketchPoint or a Point3D object.
//     // sweepAngle : The sweep of the arc. This is defined in radians and a positive value defines a counter-clockwise sweep.
//     // Returns the newly created SketchArc object or null if the creation failed.
//     adsk.fusion.SketchArcs.prototype.addByCenterStartSweep = function (centerPoint, startPoint, sweepAngle) {
//         if (centerPoint !== null && !(centerPoint instanceof adsk.core.Base)) { throw new TypeError('centerPoint must be a adsk.core.Base'); }
//         if (startPoint !== null && !(startPoint instanceof adsk.core.Base)) { throw new TypeError('startPoint must be a adsk.core.Base'); }
//         if (!isFinite(sweepAngle)) { throw new TypeError('sweepAngle must be a number'); }
//         var args = {
//             centerPoint : (centerPoint === null ? centerPoint : centerPoint.handle),
//             startPoint : (startPoint === null ? startPoint : startPoint.handle),
//             sweepAngle : Number(sweepAngle)
//         };
//         var result = this._execute('addByCenterStartSweep', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArc) : null;
//     };

//     // Creates a sketch arc that passes through the three points.
//     // startPoint : The start point of the arc. This can be either an existing SketchPoint or a Point3D object.
//     // point : A point along the arc. This is a Point3D object.
//     // endPoint : The end point of the arc. This can be either an existing SketchPoint or a Point3D object.
//     //
//     adsk.fusion.SketchArcs.prototype.addByThreePoints = function (startPoint, point, endPoint) {
//         if (startPoint !== null && !(startPoint instanceof adsk.core.Base)) { throw new TypeError('startPoint must be a adsk.core.Base'); }
//         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
//         if (endPoint !== null && !(endPoint instanceof adsk.core.Base)) { throw new TypeError('endPoint must be a adsk.core.Base'); }
//         var args = {
//             startPoint : (startPoint === null ? startPoint : startPoint.handle),
//             point : (point === null ? point : point.handle),
//             endPoint : (endPoint === null ? endPoint : endPoint.handle)
//         };
//         var result = this._execute('addByThreePoints', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArc) : null;
//     };

//     // Creates a fillet between two sketch entities
//     // The side (quadrant) the fillet is created on is determined by the points specified.
//     // The point for each entity can be its startSketchPoint or endSketchPoint
//     // firstEntity : The first curve for the fillet definition. The curve must be open.
//     // firstEntityPoint : A point on or closer to one end of the first curve that indicates the side to create the fillet on
//     // secondEnitity : The second curve for the fillet definition. The curve must be open.
//     // secondEntityPoint : A point on or closer to one end of the second curve that indicates the side to create the fillet on
//     // radius : radius of the arc in centimeters
//     // Returns the newly created SketchArc object (fillet) if the operation was successful or null if it failed.
//     adsk.fusion.SketchArcs.prototype.addFillet = function (firstEntity, firstEntityPoint, secondEnitity, secondEntityPoint, radius) {
//         if (firstEntity !== null && !(firstEntity instanceof adsk.fusion.SketchCurve)) { throw new TypeError('firstEntity must be a adsk.fusion.SketchCurve'); }
//         if (firstEntityPoint !== null && !(firstEntityPoint instanceof adsk.core.Point3D)) { throw new TypeError('firstEntityPoint must be a adsk.core.Point3D'); }
//         if (secondEnitity !== null && !(secondEnitity instanceof adsk.fusion.SketchCurve)) { throw new TypeError('secondEnitity must be a adsk.fusion.SketchCurve'); }
//         if (secondEntityPoint !== null && !(secondEntityPoint instanceof adsk.core.Point3D)) { throw new TypeError('secondEntityPoint must be a adsk.core.Point3D'); }
//         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
//         var args = {
//             firstEntity : (firstEntity === null ? firstEntity : firstEntity.handle),
//             firstEntityPoint : (firstEntityPoint === null ? firstEntityPoint : firstEntityPoint.handle),
//             secondEnitity : (secondEnitity === null ? secondEnitity : secondEnitity.handle),
//             secondEntityPoint : (secondEntityPoint === null ? secondEntityPoint : secondEntityPoint.handle),
//             radius : Number(radius)
//         };
//         var result = this._execute('addFillet', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArc) : null;
//     };

//     //=========== SketchCircles ============
//     // The collection of circles in a sketch. This provides access to the existing
//     // circles and supports the methods to create new circles.
//     adsk.fusion.SketchCircles = function SketchCircles(handle) {
//         if (!(this instanceof adsk.fusion.SketchCircles)) {
//             return adsk.fusion.SketchCircles.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchCircles.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchCircles.prototype.constructor = adsk.fusion.SketchCircles;
//     adsk.fusion.SketchCircles.interfaceId = 'adsk.fusion.SketchCircles';
//     adsk.objectTypes['adsk.fusion.SketchCircles'] = adsk.fusion.SketchCircles;
//     adsk.fusion.SketchCircles.cast = function (object) {
//         return object instanceof adsk.fusion.SketchCircles ? object : null;
//     };

//     // Returns the number of circles in the sketch.
//     Object.defineProperty(adsk.fusion.SketchCircles.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch circle using an index into the collection.
//     // index : The index of the item within the collection to return.
//     // The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchCircles.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     // Creates a sketch circle that is always parallel to the x-y plane of the sketch
//     // and is centered at the specified point.
//     // centerPoint : The center point of the circle. It can be an existing SketchPoint or a Point3D object.
//     // radius : The radius of the circle in centimeters.
//     // Returns the newly created SketchCircle object or null if the creation failed.
//     adsk.fusion.SketchCircles.prototype.addByCenterRadius = function (centerPoint, radius) {
//         if (centerPoint !== null && !(centerPoint instanceof adsk.core.Base)) { throw new TypeError('centerPoint must be a adsk.core.Base'); }
//         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
//         var args = {
//             centerPoint : (centerPoint === null ? centerPoint : centerPoint.handle),
//             radius : Number(radius)
//         };
//         var result = this._execute('addByCenterRadius', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     // Creates a sketch circle where the circle passes through the two points and the
//     // distance between the two points is the diameter of the circle.
//     // pointOne : A Point3D object that defines a point is sketch space and lies on the x-y plane of the sketch.
//     // pointTwo : A Point3D object that defines a point is sketch space and lies on the x-y plane of the sketch.
//     // Returns the newly created SketchCircle object or null if the creation failed.
//     adsk.fusion.SketchCircles.prototype.addByTwoPoints = function (pointOne, pointTwo) {
//         if (pointOne !== null && !(pointOne instanceof adsk.core.Point3D)) { throw new TypeError('pointOne must be a adsk.core.Point3D'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Point3D)) { throw new TypeError('pointTwo must be a adsk.core.Point3D'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle)
//         };
//         var result = this._execute('addByTwoPoints', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     // Creates a sketch circle that passes through the three points. The three points must
//     // lie on the x-y plane of the sketch.
//     // pointOne : The first point that the circle will pass through. The z component must be zero.
//     // pointTwo : The second point that the circle will pass through. The z component must be zero.
//     // pointThree : The third point that the circle will pass through. The z component must be zero.
//     // Returns the newly created SketchCircle object or null if the creation failed.
//     adsk.fusion.SketchCircles.prototype.addByThreePoints = function (pointOne, pointTwo, pointThree) {
//         if (pointOne !== null && !(pointOne instanceof adsk.core.Point3D)) { throw new TypeError('pointOne must be a adsk.core.Point3D'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Point3D)) { throw new TypeError('pointTwo must be a adsk.core.Point3D'); }
//         if (pointThree !== null && !(pointThree instanceof adsk.core.Point3D)) { throw new TypeError('pointThree must be a adsk.core.Point3D'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle),
//             pointThree : (pointThree === null ? pointThree : pointThree.handle)
//         };
//         var result = this._execute('addByThreePoints', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     // Creates a sketch circle that is tangent to the two input lines.
//     // The two lines must lie on the x-y plane of the sketch.
//     // tangentOne : The first line that the circle will be tangent to.
//     // The line must lie on the x-y plane of the sketch.
//     // tangentTwo : The second line that the circle will be tangent to.
//     // The line must lie on the x-y plane of the sketch and cannot
//     // be parallel to the first line.
//     // radius : The radius of the circle in centimeters.
//     // hintPoint : A point that specifies which of the possible four solutions to use
//     // when creating the circle. If you consider the two input lines to be infinite
//     // they create four quadrants which results in four possible solutions for the
//     // creation of the circle. The hint point is a point anywhere within the quadrant
//     // where you want the circle created.
//     // Returns the newly created SketchCircle object or null if the creation failed.
//     adsk.fusion.SketchCircles.prototype.addByTwoTangents = function (tangentOne, tangentTwo, radius, hintPoint) {
//         if (tangentOne !== null && !(tangentOne instanceof adsk.fusion.SketchLine)) { throw new TypeError('tangentOne must be a adsk.fusion.SketchLine'); }
//         if (tangentTwo !== null && !(tangentTwo instanceof adsk.fusion.SketchLine)) { throw new TypeError('tangentTwo must be a adsk.fusion.SketchLine'); }
//         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
//         if (hintPoint !== null && !(hintPoint instanceof adsk.core.Point3D)) { throw new TypeError('hintPoint must be a adsk.core.Point3D'); }
//         var args = {
//             tangentOne : (tangentOne === null ? tangentOne : tangentOne.handle),
//             tangentTwo : (tangentTwo === null ? tangentTwo : tangentTwo.handle),
//             radius : Number(radius),
//             hintPoint : (hintPoint === null ? hintPoint : hintPoint.handle)
//         };
//         var result = this._execute('addByTwoTangents', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     // Creates a sketch circle that is tangent to the three input lines.
//     // The three lines must lie on the x-y plane of the sketch.
//     // tangentOne : The first line that the circle will be tangent to.
//     // The line must lie on the x-y plane of the sketch and cannot be parallel
//     // to the second or third line.
//     // tangentTwo : The second line that the circle will be tangent to.
//     // The line must lie on the x-y plane of the sketch and cannot be parallel
//     // to the first or third line.
//     // tangentThree : The third line that the circle will be tangent to.
//     // The line must lie on the x-y plane of the sketch and cannot be parallel
//     // to the first or second line.
//     // hintPoint : A point that specifies which of the possible multiple solutions to use
//     // when creating the circle. If you consider the three input lines to be infinite
//     // there are many possible solutions when creating a circle that is tangent to all
//     // three lines. The hint point is a point anywhere within the area defined by the
//     // three lines where the circle is to be created.
//     // Returns the newly created SketchCircle object or null if the creation failed.
//     adsk.fusion.SketchCircles.prototype.addByThreeTangents = function (tangentOne, tangentTwo, tangentThree, hintPoint) {
//         if (tangentOne !== null && !(tangentOne instanceof adsk.fusion.SketchLine)) { throw new TypeError('tangentOne must be a adsk.fusion.SketchLine'); }
//         if (tangentTwo !== null && !(tangentTwo instanceof adsk.fusion.SketchLine)) { throw new TypeError('tangentTwo must be a adsk.fusion.SketchLine'); }
//         if (tangentThree !== null && !(tangentThree instanceof adsk.fusion.SketchLine)) { throw new TypeError('tangentThree must be a adsk.fusion.SketchLine'); }
//         if (hintPoint !== null && !(hintPoint instanceof adsk.core.Point3D)) { throw new TypeError('hintPoint must be a adsk.core.Point3D'); }
//         var args = {
//             tangentOne : (tangentOne === null ? tangentOne : tangentOne.handle),
//             tangentTwo : (tangentTwo === null ? tangentTwo : tangentTwo.handle),
//             tangentThree : (tangentThree === null ? tangentThree : tangentThree.handle),
//             hintPoint : (hintPoint === null ? hintPoint : hintPoint.handle)
//         };
//         var result = this._execute('addByThreeTangents', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     //=========== SketchConicCurves ============
//     // The collection of conic curves in a sketch. This provides access to the existing
//     // conic curves and supports the method to create new conic curves.
//     adsk.fusion.SketchConicCurves = function SketchConicCurves(handle) {
//         if (!(this instanceof adsk.fusion.SketchConicCurves)) {
//             return adsk.fusion.SketchConicCurves.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchConicCurves.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchConicCurves.prototype.constructor = adsk.fusion.SketchConicCurves;
//     adsk.fusion.SketchConicCurves.interfaceId = 'adsk.fusion.SketchConicCurves';
//     adsk.objectTypes['adsk.fusion.SketchConicCurves'] = adsk.fusion.SketchConicCurves;
//     adsk.fusion.SketchConicCurves.cast = function (object) {
//         return object instanceof adsk.fusion.SketchConicCurves ? object : null;
//     };

//     // Returns the number of conic curves in the sketch.
//     Object.defineProperty(adsk.fusion.SketchConicCurves.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified conic curve using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchConicCurves.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConicCurve) : null;
//     };

//     //=========== SketchCurves ============
//     // A collection of sketch curves in a sketch. This also provides access to collections
//     // for the specific types of curves where you can get the curves based on type and
//     // create new curves.
//     adsk.fusion.SketchCurves = function SketchCurves(handle) {
//         if (!(this instanceof adsk.fusion.SketchCurves)) {
//             return adsk.fusion.SketchCurves.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchCurves.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchCurves.prototype.constructor = adsk.fusion.SketchCurves;
//     adsk.fusion.SketchCurves.interfaceId = 'adsk.fusion.SketchCurves';
//     adsk.objectTypes['adsk.fusion.SketchCurves'] = adsk.fusion.SketchCurves;
//     adsk.fusion.SketchCurves.cast = function (object) {
//         return object instanceof adsk.fusion.SketchCurves ? object : null;
//     };

//     // Returns the number of sketch curves in the sketch.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the sketch arcs collection associated with this sketch.
//     // This provides access to the existing sketch arcs and supports
//     // the creation of new sketch arcs.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchArcs', {
//         get : function () {
//             var result = this._execute('sketchArcs');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArcs) : null;
//         }
//     });

//     // Returns the sketch circles collection associated with this sketch.
//     // This provides access to the existing sketch circles and supports
//     // the creation of new sketch circles.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchCircles', {
//         get : function () {
//             var result = this._execute('sketchCircles');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircles) : null;
//         }
//     });

//     // Returns the sketch ellipses collection associated with this sketch.
//     // This provides access to the existing sketch ellipses and supports
//     // the creation of new sketch ellipses.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchEllipses', {
//         get : function () {
//             var result = this._execute('sketchEllipses');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipses) : null;
//         }
//     });

//     // Returns the sketch elliptical arcs collection associated with this sketch.
//     // This provides access to the existing sketch elliptical arcs and supports
//     // the creation of new sketch elliptical arcs.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchEllipticalArcs', {
//         get : function () {
//             var result = this._execute('sketchEllipticalArcs');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipticalArcs) : null;
//         }
//     });

//     // Returns the sketch lines collection associated with this sketch.
//     // This provides access to the existing sketch lines and supports
//     // the creation of new sketch lines.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchLines', {
//         get : function () {
//             var result = this._execute('sketchLines');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLines) : null;
//         }
//     });

//     // Returns the sketch splines collection associated with this sketch.
//     // This provides access to the existing sketch splines and supports
//     // the creation of new sketch splines.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchFittedSplines', {
//         get : function () {
//             var result = this._execute('sketchFittedSplines');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFittedSplines) : null;
//         }
//     });

//     // Returns the fixed sketch splines collection associated with this sketch.
//     // This provides access to the existing fixed sketch splines and supports
//     // the creation of new fixed sketch splines.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchFixedSplines', {
//         get : function () {
//             var result = this._execute('sketchFixedSplines');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFixedSplines) : null;
//         }
//     });

//     // Returns the conic curves collection associated with this sketch.
//     // This provides access to the existing conic curves and support the
//     // creation of new conic curves.
//     Object.defineProperty(adsk.fusion.SketchCurves.prototype, 'sketchConicCurves', {
//         get : function () {
//             var result = this._execute('sketchConicCurves');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConicCurves) : null;
//         }
//     });

//     // Function that returns the specified sketch curve using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchCurves.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//     };

//     //=========== SketchDimension ============
//     // The base class for the all sketch dimensions.
//     adsk.fusion.SketchDimension = function SketchDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchDimension)) {
//             return adsk.fusion.SketchDimension.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchDimension.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchDimension.prototype.constructor = adsk.fusion.SketchDimension;
//     adsk.fusion.SketchDimension.interfaceId = 'adsk.fusion.SketchDimension';
//     adsk.objectTypes['adsk.fusion.SketchDimension'] = adsk.fusion.SketchDimension;
//     adsk.fusion.SketchDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchDimension ? object : null;
//     };

//     // Indicates if this dimension is deletable.
//     Object.defineProperty(adsk.fusion.SketchDimension.prototype, 'isDeletable', {
//         get : function () {
//             var result = this._execute('isDeletable');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets position of the dimension text.
//     Object.defineProperty(adsk.fusion.SketchDimension.prototype, 'textPosition', {
//         get : function () {
//             var result = this._execute('textPosition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('textPosition', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parent sketch object.
//     Object.defineProperty(adsk.fusion.SketchDimension.prototype, 'parentSketch', {
//         get : function () {
//             var result = this._execute('parentSketch');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//         }
//     });

//     // Returns the associated parameter or null if there is no associated parameter.
//     Object.defineProperty(adsk.fusion.SketchDimension.prototype, 'parameter', {
//         get : function () {
//             var result = this._execute('parameter');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchDimension.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Gets and sets if the dimension is Driving or is Driven. Setting this property to true for a given dimension
//     // may fail if the result would overconstrain the sketch. Fusion does not allow overconstrained sketches.
//     Object.defineProperty(adsk.fusion.SketchDimension.prototype, 'isDriving', {
//         get : function () {
//             var result = this._execute('isDriving');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDriving', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes this dimension. The IsDeletable property indicates if this dimension can be deleted.
//     // Returns true if the delete was successful.
//     adsk.fusion.SketchDimension.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== SketchDimensionList ============
//     // A list of sketch dimensions.
//     adsk.fusion.SketchDimensionList = function SketchDimensionList(handle) {
//         if (!(this instanceof adsk.fusion.SketchDimensionList)) {
//             return adsk.fusion.SketchDimensionList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchDimensionList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchDimensionList.prototype.constructor = adsk.fusion.SketchDimensionList;
//     adsk.fusion.SketchDimensionList.interfaceId = 'adsk.fusion.SketchDimensionList';
//     adsk.objectTypes['adsk.fusion.SketchDimensionList'] = adsk.fusion.SketchDimensionList;
//     adsk.fusion.SketchDimensionList.cast = function (object) {
//         return object instanceof adsk.fusion.SketchDimensionList ? object : null;
//     };

//     // Returns the number of sketch dimensions in the sketch.
//     Object.defineProperty(adsk.fusion.SketchDimensionList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch dimension using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection
//     // has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchDimensionList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDimension) : null;
//     };

//     //=========== SketchDimensions ============
//     // A collection of the dimensions in a sketch. This object also supports the methods to add
//     // new sketch dimensions.
//     adsk.fusion.SketchDimensions = function SketchDimensions(handle) {
//         if (!(this instanceof adsk.fusion.SketchDimensions)) {
//             return adsk.fusion.SketchDimensions.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchDimensions.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchDimensions.prototype.constructor = adsk.fusion.SketchDimensions;
//     adsk.fusion.SketchDimensions.interfaceId = 'adsk.fusion.SketchDimensions';
//     adsk.objectTypes['adsk.fusion.SketchDimensions'] = adsk.fusion.SketchDimensions;
//     adsk.fusion.SketchDimensions.cast = function (object) {
//         return object instanceof adsk.fusion.SketchDimensions ? object : null;
//     };

//     // Returns the number of sketch dimensions in the sketch.
//     Object.defineProperty(adsk.fusion.SketchDimensions.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch dimension using an index into the
//     // collection.
//     // index : The index of the item within the collection to return. The first item in the
//     // collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchDimensions.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDimension) : null;
//     };

//     // Creates a new linear dimension constraint between the two input entities.
//     // pointOne : The first SketchPoint to dimension to.
//     // pointTwo : The second SketchPoint to dimension to..
//     // orientation : The orientation of the dimension.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addDistanceDimension = function (pointOne, pointTwo, orientation, textPoint) {
//         if (pointOne !== null && !(pointOne instanceof adsk.fusion.SketchPoint)) { throw new TypeError('pointOne must be a adsk.fusion.SketchPoint'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.fusion.SketchPoint)) { throw new TypeError('pointTwo must be a adsk.fusion.SketchPoint'); }
//         if (!isFinite(orientation)) { throw new TypeError('orientation must be a number'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle),
//             orientation : Number(orientation),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addDistanceDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLinearDimension) : null;
//     };

//     // Creates a new linear dimension constraint between the two input entities. The first input
//     // entity must be a sketch line. The second entity can be a point or a line that is parallel
//     // to the first. The dimension controls the distance as measured perpendicular to the first
//     // input line.
//     // line : The SketchLine to dimension to.
//     // entityTwo : The parallel SketchLine or SketchPoint to dimension to. If a SketchLine is used it must be
//     // parallel to the first line.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addOffsetDimension = function (line, entityTwo, textPoint) {
//         if (line !== null && !(line instanceof adsk.fusion.SketchLine)) { throw new TypeError('line must be a adsk.fusion.SketchLine'); }
//         if (entityTwo !== null && !(entityTwo instanceof adsk.fusion.SketchEntity)) { throw new TypeError('entityTwo must be a adsk.fusion.SketchEntity'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             line : (line === null ? line : line.handle),
//             entityTwo : (entityTwo === null ? entityTwo : entityTwo.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addOffsetDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchOffsetDimension) : null;
//     };

//     // Creates a new angular dimension constraint between the two input lines.
//     // The position of the text controls which of the four quadrants will be dimensioned.
//     // lineOne : The first SketchLine to dimension to.
//     // lineTwo : The second SketchLine to dimension to.
//     // textPoint : A Point3D object that defines the position of the dimension text. The position of this
//     // text defines which quadrant will be dimensioned.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addAngularDimension = function (lineOne, lineTwo, textPoint) {
//         if (lineOne !== null && !(lineOne instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineOne must be a adsk.fusion.SketchLine'); }
//         if (lineTwo !== null && !(lineTwo instanceof adsk.fusion.SketchLine)) { throw new TypeError('lineTwo must be a adsk.fusion.SketchLine'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             lineOne : (lineOne === null ? lineOne : lineOne.handle),
//             lineTwo : (lineTwo === null ? lineTwo : lineTwo.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addAngularDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchAngularDimension) : null;
//     };

//     // Creates a new diameter dimension constraint on the arc or circle.
//     // entity : The SketchCircle or SketchArc to dimension.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addDiameterDimension = function (entity, textPoint) {
//         if (entity !== null && !(entity instanceof adsk.fusion.SketchCurve)) { throw new TypeError('entity must be a adsk.fusion.SketchCurve'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             entity : (entity === null ? entity : entity.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addDiameterDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDiameterDimension) : null;
//     };

//     // Creates a new radial dimension constraint on the arc or circle.
//     // entity : The SketchCircle or SketchArc to dimension.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addRadialDimension = function (entity, textPoint) {
//         if (entity !== null && !(entity instanceof adsk.fusion.SketchCurve)) { throw new TypeError('entity must be a adsk.fusion.SketchCurve'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             entity : (entity === null ? entity : entity.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addRadialDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchRadialDimension) : null;
//     };

//     // Creates a new dimension constraint on the major radius of an ellipse.
//     // ellipse : The SketchEllipse to dimension.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addEllipseMajorRadiusDimension = function (ellipse, textPoint) {
//         if (ellipse !== null && !(ellipse instanceof adsk.fusion.SketchCurve)) { throw new TypeError('ellipse must be a adsk.fusion.SketchCurve'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             ellipse : (ellipse === null ? ellipse : ellipse.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addEllipseMajorRadiusDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipseMajorRadiusDimension) : null;
//     };

//     // Creates a new dimension constraint on the minor radius of an ellipse.
//     // ellipse : The SketchEllipse to dimension.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addEllipseMinorRadiusDimension = function (ellipse, textPoint) {
//         if (ellipse !== null && !(ellipse instanceof adsk.fusion.SketchCurve)) { throw new TypeError('ellipse must be a adsk.fusion.SketchCurve'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             ellipse : (ellipse === null ? ellipse : ellipse.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addEllipseMinorRadiusDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipseMinorRadiusDimension) : null;
//     };

//     // Creates a new dimension constraint between to concentric circles or arcs.
//     // circleOne : The first SketchCircle or SketchArc to dimension.
//     // circleTwo : The second SketchCircle or SketchArc to dimension.
//     // textPoint : A Point3D object that defines the position of the dimension text.
//     // Returns the newly created dimension or null if the creation failed.
//     adsk.fusion.SketchDimensions.prototype.addConcentricCircleDimension = function (circleOne, circleTwo, textPoint) {
//         if (circleOne !== null && !(circleOne instanceof adsk.fusion.SketchCurve)) { throw new TypeError('circleOne must be a adsk.fusion.SketchCurve'); }
//         if (circleTwo !== null && !(circleTwo instanceof adsk.fusion.SketchCurve)) { throw new TypeError('circleTwo must be a adsk.fusion.SketchCurve'); }
//         if (textPoint !== null && !(textPoint instanceof adsk.core.Point3D)) { throw new TypeError('textPoint must be a adsk.core.Point3D'); }
//         var args = {
//             circleOne : (circleOne === null ? circleOne : circleOne.handle),
//             circleTwo : (circleTwo === null ? circleTwo : circleTwo.handle),
//             textPoint : (textPoint === null ? textPoint : textPoint.handle)
//         };
//         var result = this._execute('addConcentricCircleDimension', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConcentricCircleDimension) : null;
//     };

//     //=========== SketchEllipses ============
//     // The collection of ellipses in a sketch. This provides access to the existing
//     // ellipses and supports the methods to create new ellipses.
//     adsk.fusion.SketchEllipses = function SketchEllipses(handle) {
//         if (!(this instanceof adsk.fusion.SketchEllipses)) {
//             return adsk.fusion.SketchEllipses.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchEllipses.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchEllipses.prototype.constructor = adsk.fusion.SketchEllipses;
//     adsk.fusion.SketchEllipses.interfaceId = 'adsk.fusion.SketchEllipses';
//     adsk.objectTypes['adsk.fusion.SketchEllipses'] = adsk.fusion.SketchEllipses;
//     adsk.fusion.SketchEllipses.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEllipses ? object : null;
//     };

//     // Returns the number of ellipses in the sketch.
//     Object.defineProperty(adsk.fusion.SketchEllipses.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch ellipse using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchEllipses.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipse) : null;
//     };

//     // Creates a sketch ellipse using the center point, a point defining the major axis
//     // and a third point anywhere along the ellipse. The created ellipse is parallel to the
//     // x-y plane of the sketch.
//     // centerPoint : The center point of the ellipse. This can be either an existing SketchPoint or a Point3D object.
//     // majorAxisPoint : A point3D object that defines both the major axis direction and major axis radius.
//     // point : A point3D object that the ellipse will pass through.
//     // Returns the newly created SketchEllipse object if the creation was successful or null if it failed.
//     adsk.fusion.SketchEllipses.prototype.add = function (centerPoint, majorAxisPoint, point) {
//         if (centerPoint !== null && !(centerPoint instanceof adsk.core.Base)) { throw new TypeError('centerPoint must be a adsk.core.Base'); }
//         if (majorAxisPoint !== null && !(majorAxisPoint instanceof adsk.core.Point3D)) { throw new TypeError('majorAxisPoint must be a adsk.core.Point3D'); }
//         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
//         var args = {
//             centerPoint : (centerPoint === null ? centerPoint : centerPoint.handle),
//             majorAxisPoint : (majorAxisPoint === null ? majorAxisPoint : majorAxisPoint.handle),
//             point : (point === null ? point : point.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipse) : null;
//     };

//     //=========== SketchEllipticalArcs ============
//     // The collection of elliptical arcs in a sketch. This provides access to the existing
//     // elliptical arcs and supports the methods to create new elliptical arcs.
//     adsk.fusion.SketchEllipticalArcs = function SketchEllipticalArcs(handle) {
//         if (!(this instanceof adsk.fusion.SketchEllipticalArcs)) {
//             return adsk.fusion.SketchEllipticalArcs.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchEllipticalArcs.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchEllipticalArcs.prototype.constructor = adsk.fusion.SketchEllipticalArcs;
//     adsk.fusion.SketchEllipticalArcs.interfaceId = 'adsk.fusion.SketchEllipticalArcs';
//     adsk.objectTypes['adsk.fusion.SketchEllipticalArcs'] = adsk.fusion.SketchEllipticalArcs;
//     adsk.fusion.SketchEllipticalArcs.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEllipticalArcs ? object : null;
//     };

//     // Returns the number of elliptical arcs in the sketch.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArcs.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch elliptical arc using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchEllipticalArcs.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipticalArc) : null;
//     };

//     //=========== SketchEntity ============
//     // This object represents all geometry in a sketch, including
//     // points and lines and the various curves.
//     adsk.fusion.SketchEntity = function SketchEntity(handle) {
//         if (!(this instanceof adsk.fusion.SketchEntity)) {
//             return adsk.fusion.SketchEntity.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchEntity.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchEntity.prototype.constructor = adsk.fusion.SketchEntity;
//     adsk.fusion.SketchEntity.interfaceId = 'adsk.fusion.SketchEntity';
//     adsk.objectTypes['adsk.fusion.SketchEntity'] = adsk.fusion.SketchEntity;
//     adsk.fusion.SketchEntity.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEntity ? object : null;
//     };

//     // Returns the parent sketch.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'parentSketch', {
//         get : function () {
//             var result = this._execute('parentSketch');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//         }
//     });

//     // Returns the sketch dimensions that are attached to this curve.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'sketchDimensions', {
//         get : function () {
//             var result = this._execute('sketchDimensions');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDimensionList) : null;
//         }
//     });

//     // Returns the sketch constraints that are attached to this curve.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'geometricConstraints', {
//         get : function () {
//             var result = this._execute('geometricConstraints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.GeometricConstraintList) : null;
//         }
//     });

//     // Indicates if this curve lies entirely on the sketch x-y plane.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'is2D', {
//         get : function () {
//             var result = this._execute('is2D');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this geometry is a reference.
//     // Changing this property from true to false removes the reference.
//     // This property can not be set to true if it is already false.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'isReference', {
//         get : function () {
//             var result = this._execute('isReference');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isReference', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this geometry is "fixed".
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'isFixed', {
//         get : function () {
//             var result = this._execute('isFixed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFixed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // When a sketch is created geometry is sometimes automatically included in the sketch.
//     // For example the origin point is always included and depending on what was selected
//     // to create the sketch one, geometry from the selected face will be included. This geometry
//     // behaves in a special way in that it is invisible but is available for selection and
//     // it also participates in profile calculations. It's not possible to make them visible
//     // but they can be deleted and they can be used for any other standard sketch operation.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'isVisible', {
//         get : function () {
//             var result = this._execute('isVisible');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the bounding box of the entity in sketch space.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'boundingBox', {
//         get : function () {
//             var result = this._execute('boundingBox');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
//         }
//     });

//     // Returns the referenced entity in the case where IsReference
//     // is true. However, this property can also return null when
//     // IsReference is true in the case where the reference is not
//     // parametric.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'referencedEntity', {
//         get : function () {
//             var result = this._execute('referencedEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Indicates if this sketch entity can be deleted. There are cases, especially with sketch
//     // points where another entity is dependent on an entity so deleting it is not allowed.
//     // For example, you can't delete the center point of circle by itself but deleting the circle
//     // will delete the point. The same is true for the end points of a line.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'isDeletable', {
//         get : function () {
//             var result = this._execute('isDeletable');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this sketch entity is fully constrained.
//     Object.defineProperty(adsk.fusion.SketchEntity.prototype, 'isFullyConstrained', {
//         get : function () {
//             var result = this._execute('isFullyConstrained');
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes the entity from the sketch.
//     // Returns true is the delete was successful.
//     adsk.fusion.SketchEntity.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== SketchEntityList ============
//     // A list of sketch entities.
//     adsk.fusion.SketchEntityList = function SketchEntityList(handle) {
//         if (!(this instanceof adsk.fusion.SketchEntityList)) {
//             return adsk.fusion.SketchEntityList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchEntityList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchEntityList.prototype.constructor = adsk.fusion.SketchEntityList;
//     adsk.fusion.SketchEntityList.interfaceId = 'adsk.fusion.SketchEntityList';
//     adsk.objectTypes['adsk.fusion.SketchEntityList'] = adsk.fusion.SketchEntityList;
//     adsk.fusion.SketchEntityList.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEntityList ? object : null;
//     };

//     // Returns the number of sketch entities in the list.
//     Object.defineProperty(adsk.fusion.SketchEntityList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch entity using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchEntityList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//     };

//     //=========== Sketches ============
//     // Provides access to the sketches within a design and provides
//     // methods to create new sketches.
//     adsk.fusion.Sketches = function Sketches(handle) {
//         if (!(this instanceof adsk.fusion.Sketches)) {
//             return adsk.fusion.Sketches.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Sketches.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Sketches.prototype.constructor = adsk.fusion.Sketches;
//     adsk.fusion.Sketches.interfaceId = 'adsk.fusion.Sketches';
//     adsk.objectTypes['adsk.fusion.Sketches'] = adsk.fusion.Sketches;
//     adsk.fusion.Sketches.cast = function (object) {
//         return object instanceof adsk.fusion.Sketches ? object : null;
//     };

//     // Returns the number of sketches in a component
//     Object.defineProperty(adsk.fusion.Sketches.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the
//     // collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Sketches.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//     };

//     // Returns the sketch with the specified name.
//     // name : The name of the sketch as seen in the browser and the timeline.
//     // Returns the sketch or null if there isn't a sketch with that name.
//     adsk.fusion.Sketches.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//     };

//     // Creates a new sketch on the specified planar entity.
//     // planarEntity : A construction plane or planar face that defines the sketch plane
//     // occurrenceForCreation : A creation occurrence is needed if the planarEntity is in another component AND the
//     // sketch is not in the root component. The occurrenceForCreation is analogous
//     // to the active occurrence in the UI.
//     // Returns the newly created Sketch or null if the creation failed.
//     adsk.fusion.Sketches.prototype.add = function (planarEntity, occurrenceForCreation) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (occurrenceForCreation === null || (occurrenceForCreation !== undefined && occurrenceForCreation !== null && !(occurrenceForCreation instanceof adsk.fusion.Occurrence))) { throw new TypeError('occurrenceForCreation must be a adsk.fusion.Occurrence'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
//         };
//         if (occurrenceForCreation !== undefined) {
//             args.occurrenceForCreation = (occurrenceForCreation === null ? occurrenceForCreation : occurrenceForCreation.handle);
//         }
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketch) : null;
//     };

//     //=========== SketchFittedSplines ============
//     // The collection of fitted splines in a sketch. This provides access to the existing
//     // fitted splines and supports the methods to create new fitted splines.
//     adsk.fusion.SketchFittedSplines = function SketchFittedSplines(handle) {
//         if (!(this instanceof adsk.fusion.SketchFittedSplines)) {
//             return adsk.fusion.SketchFittedSplines.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchFittedSplines.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchFittedSplines.prototype.constructor = adsk.fusion.SketchFittedSplines;
//     adsk.fusion.SketchFittedSplines.interfaceId = 'adsk.fusion.SketchFittedSplines';
//     adsk.objectTypes['adsk.fusion.SketchFittedSplines'] = adsk.fusion.SketchFittedSplines;
//     adsk.fusion.SketchFittedSplines.cast = function (object) {
//         return object instanceof adsk.fusion.SketchFittedSplines ? object : null;
//     };

//     // Returns the number of fitted splines in the sketch.
//     Object.defineProperty(adsk.fusion.SketchFittedSplines.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch fitted spline using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchFittedSplines.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFittedSpline) : null;
//     };

//     // Creates a new fitted spline through the specified points.
//     // fitPoints : A collection of points that the curve will fit through. They
//     // can be any combination of existing SketchPoint or Point3D objects.
//     // Returns the newly created SketchFittedSpline object if the creation was successful or null if it failed.
//     adsk.fusion.SketchFittedSplines.prototype.add = function (fitPoints) {
//         if (fitPoints !== null && !(fitPoints instanceof adsk.core.ObjectCollection)) { throw new TypeError('fitPoints must be a adsk.core.ObjectCollection'); }
//         var args = {
//             fitPoints : (fitPoints === null ? fitPoints : fitPoints.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFittedSpline) : null;
//     };

//     //=========== SketchFixedSplines ============
//     // The collection of fixed splines in a sketch. Fixed splines are splines that were created
//     // as the result of some operation (i.e. intersection) and is not directly editable.
//     adsk.fusion.SketchFixedSplines = function SketchFixedSplines(handle) {
//         if (!(this instanceof adsk.fusion.SketchFixedSplines)) {
//             return adsk.fusion.SketchFixedSplines.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchFixedSplines.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchFixedSplines.prototype.constructor = adsk.fusion.SketchFixedSplines;
//     adsk.fusion.SketchFixedSplines.interfaceId = 'adsk.fusion.SketchFixedSplines';
//     adsk.objectTypes['adsk.fusion.SketchFixedSplines'] = adsk.fusion.SketchFixedSplines;
//     adsk.fusion.SketchFixedSplines.cast = function (object) {
//         return object instanceof adsk.fusion.SketchFixedSplines ? object : null;
//     };

//     // Returns the number of fitted splines in the sketch.
//     Object.defineProperty(adsk.fusion.SketchFixedSplines.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch fixed spline using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchFixedSplines.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFixedSpline) : null;
//     };

//     //=========== SketchLineList ============
//     // A list of sketch lines.
//     adsk.fusion.SketchLineList = function SketchLineList(handle) {
//         if (!(this instanceof adsk.fusion.SketchLineList)) {
//             return adsk.fusion.SketchLineList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchLineList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchLineList.prototype.constructor = adsk.fusion.SketchLineList;
//     adsk.fusion.SketchLineList.interfaceId = 'adsk.fusion.SketchLineList';
//     adsk.objectTypes['adsk.fusion.SketchLineList'] = adsk.fusion.SketchLineList;
//     adsk.fusion.SketchLineList.cast = function (object) {
//         return object instanceof adsk.fusion.SketchLineList ? object : null;
//     };

//     // Returns the number of sketch lines in the list.
//     Object.defineProperty(adsk.fusion.SketchLineList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch line using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchLineList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//     };

//     //=========== SketchLines ============
//     // The collection of lines in a sketch. This provides access to the existing
//     // lines and supports the methods to create new lines.
//     adsk.fusion.SketchLines = function SketchLines(handle) {
//         if (!(this instanceof adsk.fusion.SketchLines)) {
//             return adsk.fusion.SketchLines.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchLines.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchLines.prototype.constructor = adsk.fusion.SketchLines;
//     adsk.fusion.SketchLines.interfaceId = 'adsk.fusion.SketchLines';
//     adsk.objectTypes['adsk.fusion.SketchLines'] = adsk.fusion.SketchLines;
//     adsk.fusion.SketchLines.cast = function (object) {
//         return object instanceof adsk.fusion.SketchLines ? object : null;
//     };

//     // Returns the number of lines in the sketch.
//     Object.defineProperty(adsk.fusion.SketchLines.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch line using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchLines.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//     };

//     // Creates a sketch line between the two input points. The input points
//     // can be either existing SketchPoints or Point3D objects. If a SketchPoint
//     // is used the new line will be based on that sketch point and update if the
//     // sketch point is modified.
//     // startPoint : The start point of the line. It can be a SketchPoint or Point3D object.
//     // endPoint : The end point of the line. It can be a SketchPoint or Point3D object.
//     // Returns the newly created SketchLine object or null if the creation failed.
//     adsk.fusion.SketchLines.prototype.addByTwoPoints = function (startPoint, endPoint) {
//         if (startPoint !== null && !(startPoint instanceof adsk.core.Base)) { throw new TypeError('startPoint must be a adsk.core.Base'); }
//         if (endPoint !== null && !(endPoint instanceof adsk.core.Base)) { throw new TypeError('endPoint must be a adsk.core.Base'); }
//         var args = {
//             startPoint : (startPoint === null ? startPoint : startPoint.handle),
//             endPoint : (endPoint === null ? endPoint : endPoint.handle)
//         };
//         var result = this._execute('addByTwoPoints', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//     };

//     // Creates four sketch lines representing a rectangle where the two points are the opposing corners
//     // of the rectangle. The input points can be either existing SketchPoints or Point3D objects.
//     // If a SketchPoint is used the new lines will be based on that sketch point and update if the
//     // sketch point is modified.
//     // pointOne : The first corner of the rectangle. It can be a SketchPoint or Point3D object.
//     // pointTwo : The second corner of the rectangle. It can be a SketchPoint or Point3D object.
//     // Returns the four new sketch lines or null if the creation failed.
//     adsk.fusion.SketchLines.prototype.addTwoPointRectangle = function (pointOne, pointTwo) {
//         if (pointOne !== null && !(pointOne instanceof adsk.core.Base)) { throw new TypeError('pointOne must be a adsk.core.Base'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Base)) { throw new TypeError('pointTwo must be a adsk.core.Base'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle)
//         };
//         var result = this._execute('addTwoPointRectangle', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLineList) : null;
//     };

//     // Creates four sketch lines representing a rectangle where the first two points are the base corners
//     // of the rectangle and the third point defines the height.
//     // pointOne : The first corner of the rectangle. It can be a SketchPoint or Point3D object.
//     // pointTwo : The first corner of the rectangle. It can be a SketchPoint or Point3D object.
//     // pointThree : The first corner of the rectangle. a Point3D object defining the height of the rectangle.
//     // Returns the four new sketch lines or null if the creation failed.
//     adsk.fusion.SketchLines.prototype.addThreePointRectangle = function (pointOne, pointTwo, pointThree) {
//         if (pointOne !== null && !(pointOne instanceof adsk.core.Base)) { throw new TypeError('pointOne must be a adsk.core.Base'); }
//         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Base)) { throw new TypeError('pointTwo must be a adsk.core.Base'); }
//         if (pointThree !== null && !(pointThree instanceof adsk.core.Point3D)) { throw new TypeError('pointThree must be a adsk.core.Point3D'); }
//         var args = {
//             pointOne : (pointOne === null ? pointOne : pointOne.handle),
//             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle),
//             pointThree : (pointThree === null ? pointThree : pointThree.handle)
//         };
//         var result = this._execute('addThreePointRectangle', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLineList) : null;
//     };

//     // Creates four sketch lines representing a rectangle where the first point represents the center of
//     // the rectangle. The second point is the corner of the rectangle and can be either an existing
//     // SketchPoint or Point3D object. The four sketch lines are returned.
//     // centerPoint : The center point of the rectangle
//     // cornerPoint : The corner of the rectangle. It can be a SketchPoint or Point3D object.
//     // Returns the four new sketch lines or null if the creation failed.
//     adsk.fusion.SketchLines.prototype.addCenterPointRectangle = function (centerPoint, cornerPoint) {
//         if (centerPoint !== null && !(centerPoint instanceof adsk.core.Point3D)) { throw new TypeError('centerPoint must be a adsk.core.Point3D'); }
//         if (cornerPoint !== null && !(cornerPoint instanceof adsk.core.Base)) { throw new TypeError('cornerPoint must be a adsk.core.Base'); }
//         var args = {
//             centerPoint : (centerPoint === null ? centerPoint : centerPoint.handle),
//             cornerPoint : (cornerPoint === null ? cornerPoint : cornerPoint.handle)
//         };
//         var result = this._execute('addCenterPointRectangle', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLineList) : null;
//     };

//     //=========== SketchPointList ============
//     // A list of sketch points.
//     adsk.fusion.SketchPointList = function SketchPointList(handle) {
//         if (!(this instanceof adsk.fusion.SketchPointList)) {
//             return adsk.fusion.SketchPointList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchPointList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchPointList.prototype.constructor = adsk.fusion.SketchPointList;
//     adsk.fusion.SketchPointList.interfaceId = 'adsk.fusion.SketchPointList';
//     adsk.objectTypes['adsk.fusion.SketchPointList'] = adsk.fusion.SketchPointList;
//     adsk.fusion.SketchPointList.cast = function (object) {
//         return object instanceof adsk.fusion.SketchPointList ? object : null;
//     };

//     // Returns the number of sketch points in the list.
//     Object.defineProperty(adsk.fusion.SketchPointList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch point using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchPointList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//     };

//     //=========== SketchPoints ============
//     // A collection of sketch points.
//     adsk.fusion.SketchPoints = function SketchPoints(handle) {
//         if (!(this instanceof adsk.fusion.SketchPoints)) {
//             return adsk.fusion.SketchPoints.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchPoints.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchPoints.prototype.constructor = adsk.fusion.SketchPoints;
//     adsk.fusion.SketchPoints.interfaceId = 'adsk.fusion.SketchPoints';
//     adsk.objectTypes['adsk.fusion.SketchPoints'] = adsk.fusion.SketchPoints;
//     adsk.fusion.SketchPoints.cast = function (object) {
//         return object instanceof adsk.fusion.SketchPoints ? object : null;
//     };

//     // Returns the number of sketch points in the sketch.
//     Object.defineProperty(adsk.fusion.SketchPoints.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchPoints.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//     };

//     // Creates a point at the specified location. This is the equivalent
//     // of creating a sketch point using the Point command in the user
//     // interface and will create a visible point in the graphics window.
//     // point : The coordinate location to create the sketch point.
//     // Returns the new sketch point or null if the creation fails.
//     adsk.fusion.SketchPoints.prototype.add = function (point) {
//         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
//         var args = {
//             point : (point === null ? point : point.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//     };

//     //=========== SketchTextInput ============
//     // The SketchTextInput object is equivalent to the Sketch Text dialog in that it collects all of the input required
//     // to create sketch text. Once the properties of the SketchTextInput object have been defined, use the add method
//     // to create the sketch text. A SketchTextInput object is created by using the createInput of the SketchTexts object.
//     adsk.fusion.SketchTextInput = function SketchTextInput(handle) {
//         if (!(this instanceof adsk.fusion.SketchTextInput)) {
//             return adsk.fusion.SketchTextInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchTextInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchTextInput.prototype.constructor = adsk.fusion.SketchTextInput;
//     adsk.fusion.SketchTextInput.interfaceId = 'adsk.fusion.SketchTextInput';
//     adsk.objectTypes['adsk.fusion.SketchTextInput'] = adsk.fusion.SketchTextInput;
//     adsk.fusion.SketchTextInput.cast = function (object) {
//         return object instanceof adsk.fusion.SketchTextInput ? object : null;
//     };

//     // Gets and sets the height of the text in centimeters.
//     Object.defineProperty(adsk.fusion.SketchTextInput.prototype, 'height', {
//         get : function () {
//             var result = this._execute('height');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('height', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text.
//     Object.defineProperty(adsk.fusion.SketchTextInput.prototype, 'text', {
//         get : function () {
//             var result = this._execute('text');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('text', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the position of the text on the x-y plane of the sketch. The text must lie on the x-y plane so the Z component
//     // of the point is ignored and always treated as zero.
//     Object.defineProperty(adsk.fusion.SketchTextInput.prototype, 'position', {
//         get : function () {
//             var result = this._execute('position');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('position', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the name of the font to use.
//     Object.defineProperty(adsk.fusion.SketchTextInput.prototype, 'fontName', {
//         get : function () {
//             var result = this._execute('fontName');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('fontName', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the angle of the text relative to the x-axis of the x-y plane of the sketch.
//     Object.defineProperty(adsk.fusion.SketchTextInput.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('angle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text style to apply to the entire text. This is a bitwise enum so styles
//     // can be combined to apply multiple styles. For example you can apply bold and underline.
//     Object.defineProperty(adsk.fusion.SketchTextInput.prototype, 'textStyle', {
//         get : function () {
//             var result = this._execute('textStyle');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('textStyle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== SketchTexts ============
//     // The collection of text blocks in a sketch. This provides access to the existing
//     // text blocks and supports creating new text blocks.
//     adsk.fusion.SketchTexts = function SketchTexts(handle) {
//         if (!(this instanceof adsk.fusion.SketchTexts)) {
//             return adsk.fusion.SketchTexts.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SketchTexts.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SketchTexts.prototype.constructor = adsk.fusion.SketchTexts;
//     adsk.fusion.SketchTexts.interfaceId = 'adsk.fusion.SketchTexts';
//     adsk.objectTypes['adsk.fusion.SketchTexts'] = adsk.fusion.SketchTexts;
//     adsk.fusion.SketchTexts.cast = function (object) {
//         return object instanceof adsk.fusion.SketchTexts ? object : null;
//     };

//     // Returns the number of texts in the sketch.
//     Object.defineProperty(adsk.fusion.SketchTexts.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sketch text using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SketchTexts.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchText) : null;
//     };

//     // Creates a SketchTextInput object that can be used to define additional settings when creating sketch text. The
//     // SketchTextInput object is equivalent to the Sketch Text dialog in that it collects all of the input required
//     // to create sketch text. Once the properties of the SketchTextInput object have been defined, use the add method
//     // to create the sketch text.
//     // formattedText : The text used for the sketch text. This is a simple string as no additional formatting is currently supported.
//     // height : The height of the text in centimeters.
//     // position : The position of the text on the x-y plane of the sketch. The text must lie on the x-y plane so the Z component
//     // of the point is ignored and always treated as zero.
//     // Returns a SketchTextInput object that can be used to set additional formatting and is used as input to the add method.
//     adsk.fusion.SketchTexts.prototype.createInput = function (formattedText, height, position) {
//         if (formattedText === undefined || formattedText === null || formattedText.constructor !== String) { throw new TypeError('formattedText must be a string'); }
//         if (!isFinite(height)) { throw new TypeError('height must be a number'); }
//         if (position !== null && !(position instanceof adsk.core.Point3D)) { throw new TypeError('position must be a adsk.core.Point3D'); }
//         var args = {
//             formattedText : formattedText,
//             height : Number(height),
//             position : (position === null ? position : position.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchTextInput) : null;
//     };

//     // Creates a sketch text.
//     // input : A SketchTextInput object created using the SketchTexts.createInput method.
//     // Returns the newly created SketchText object or null in the case of failure.
//     adsk.fusion.SketchTexts.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.SketchTextInput)) { throw new TypeError('input must be a adsk.fusion.SketchTextInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchText) : null;
//     };

//     //=========== TextStyles ============
//     // Defines the various text style formatting options that can be applied to text. These are
//     // bitwise values to they can be combined.
//     adsk.fusion.TextStyles = {
//         TextStyleBold : 1,
//         TextStyleItalic : 2,
//         TextStyleUnderline : 4
//     };

//     //=========== CircularPatternConstraint ============
//     // A circular pattern constraint in a sketch.
//     adsk.fusion.CircularPatternConstraint = function CircularPatternConstraint(handle) {
//         if (!(this instanceof adsk.fusion.CircularPatternConstraint)) {
//             return adsk.fusion.CircularPatternConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.CircularPatternConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.CircularPatternConstraint.prototype.constructor = adsk.fusion.CircularPatternConstraint;
//     adsk.fusion.CircularPatternConstraint.interfaceId = 'adsk.fusion.CircularPatternConstraint';
//     adsk.objectTypes['adsk.fusion.CircularPatternConstraint'] = adsk.fusion.CircularPatternConstraint;
//     adsk.fusion.CircularPatternConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.CircularPatternConstraint ? object : null;
//     };

//     //=========== CoincidentConstraint ============
//     // A coincident constraint in a sketch.
//     adsk.fusion.CoincidentConstraint = function CoincidentConstraint(handle) {
//         if (!(this instanceof adsk.fusion.CoincidentConstraint)) {
//             return adsk.fusion.CoincidentConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.CoincidentConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.CoincidentConstraint.prototype.constructor = adsk.fusion.CoincidentConstraint;
//     adsk.fusion.CoincidentConstraint.interfaceId = 'adsk.fusion.CoincidentConstraint';
//     adsk.objectTypes['adsk.fusion.CoincidentConstraint'] = adsk.fusion.CoincidentConstraint;
//     adsk.fusion.CoincidentConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.CoincidentConstraint ? object : null;
//     };

//     // Returns the sketch point that is constrained.
//     Object.defineProperty(adsk.fusion.CoincidentConstraint.prototype, 'point', {
//         get : function () {
//             var result = this._execute('point');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch curve or point the point is constrained to.
//     Object.defineProperty(adsk.fusion.CoincidentConstraint.prototype, 'entity', {
//         get : function () {
//             var result = this._execute('entity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.CoincidentConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CoincidentConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.CoincidentConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CoincidentConstraint) : null;
//     };

//     //=========== CollinearConstraint ============
//     // A collinear constraint in a sketch.
//     adsk.fusion.CollinearConstraint = function CollinearConstraint(handle) {
//         if (!(this instanceof adsk.fusion.CollinearConstraint)) {
//             return adsk.fusion.CollinearConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.CollinearConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.CollinearConstraint.prototype.constructor = adsk.fusion.CollinearConstraint;
//     adsk.fusion.CollinearConstraint.interfaceId = 'adsk.fusion.CollinearConstraint';
//     adsk.objectTypes['adsk.fusion.CollinearConstraint'] = adsk.fusion.CollinearConstraint;
//     adsk.fusion.CollinearConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.CollinearConstraint ? object : null;
//     };

//     // Returns the first line.
//     Object.defineProperty(adsk.fusion.CollinearConstraint.prototype, 'lineOne', {
//         get : function () {
//             var result = this._execute('lineOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // Returns the second line.
//     Object.defineProperty(adsk.fusion.CollinearConstraint.prototype, 'lineTwo', {
//         get : function () {
//             var result = this._execute('lineTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.CollinearConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CollinearConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.CollinearConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CollinearConstraint) : null;
//     };

//     //=========== ConcentricConstraint ============
//     // A concentric constraint in a sketch.
//     adsk.fusion.ConcentricConstraint = function ConcentricConstraint(handle) {
//         if (!(this instanceof adsk.fusion.ConcentricConstraint)) {
//             return adsk.fusion.ConcentricConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.ConcentricConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.ConcentricConstraint.prototype.constructor = adsk.fusion.ConcentricConstraint;
//     adsk.fusion.ConcentricConstraint.interfaceId = 'adsk.fusion.ConcentricConstraint';
//     adsk.objectTypes['adsk.fusion.ConcentricConstraint'] = adsk.fusion.ConcentricConstraint;
//     adsk.fusion.ConcentricConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.ConcentricConstraint ? object : null;
//     };

//     // Returns the first curve.
//     Object.defineProperty(adsk.fusion.ConcentricConstraint.prototype, 'entityOne', {
//         get : function () {
//             var result = this._execute('entityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // Returns the second curve.
//     Object.defineProperty(adsk.fusion.ConcentricConstraint.prototype, 'entityTwo', {
//         get : function () {
//             var result = this._execute('entityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ConcentricConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConcentricConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ConcentricConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConcentricConstraint) : null;
//     };

//     //=========== EqualConstraint ============
//     // An equal constraint in a sketch.
//     adsk.fusion.EqualConstraint = function EqualConstraint(handle) {
//         if (!(this instanceof adsk.fusion.EqualConstraint)) {
//             return adsk.fusion.EqualConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.EqualConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.EqualConstraint.prototype.constructor = adsk.fusion.EqualConstraint;
//     adsk.fusion.EqualConstraint.interfaceId = 'adsk.fusion.EqualConstraint';
//     adsk.objectTypes['adsk.fusion.EqualConstraint'] = adsk.fusion.EqualConstraint;
//     adsk.fusion.EqualConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.EqualConstraint ? object : null;
//     };

//     // Returns the first curve.
//     Object.defineProperty(adsk.fusion.EqualConstraint.prototype, 'curveOne', {
//         get : function () {
//             var result = this._execute('curveOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // Returns the second curve.
//     Object.defineProperty(adsk.fusion.EqualConstraint.prototype, 'curveTwo', {
//         get : function () {
//             var result = this._execute('curveTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.EqualConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.EqualConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.EqualConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.EqualConstraint) : null;
//     };

//     //=========== HorizontalConstraint ============
//     // A horizontal constraint in a sketch.
//     adsk.fusion.HorizontalConstraint = function HorizontalConstraint(handle) {
//         if (!(this instanceof adsk.fusion.HorizontalConstraint)) {
//             return adsk.fusion.HorizontalConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.HorizontalConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.HorizontalConstraint.prototype.constructor = adsk.fusion.HorizontalConstraint;
//     adsk.fusion.HorizontalConstraint.interfaceId = 'adsk.fusion.HorizontalConstraint';
//     adsk.objectTypes['adsk.fusion.HorizontalConstraint'] = adsk.fusion.HorizontalConstraint;
//     adsk.fusion.HorizontalConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.HorizontalConstraint ? object : null;
//     };

//     // Returns the line being constrained.
//     Object.defineProperty(adsk.fusion.HorizontalConstraint.prototype, 'line', {
//         get : function () {
//             var result = this._execute('line');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.HorizontalConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HorizontalConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.HorizontalConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HorizontalConstraint) : null;
//     };

//     //=========== HorizontalPointsConstraint ============
//     // A horizontal constraint between two points in a sketch.
//     adsk.fusion.HorizontalPointsConstraint = function HorizontalPointsConstraint(handle) {
//         if (!(this instanceof adsk.fusion.HorizontalPointsConstraint)) {
//             return adsk.fusion.HorizontalPointsConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.HorizontalPointsConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.HorizontalPointsConstraint.prototype.constructor = adsk.fusion.HorizontalPointsConstraint;
//     adsk.fusion.HorizontalPointsConstraint.interfaceId = 'adsk.fusion.HorizontalPointsConstraint';
//     adsk.objectTypes['adsk.fusion.HorizontalPointsConstraint'] = adsk.fusion.HorizontalPointsConstraint;
//     adsk.fusion.HorizontalPointsConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.HorizontalPointsConstraint ? object : null;
//     };

//     // Returns the first point.
//     Object.defineProperty(adsk.fusion.HorizontalPointsConstraint.prototype, 'pointOne', {
//         get : function () {
//             var result = this._execute('pointOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the second point.
//     Object.defineProperty(adsk.fusion.HorizontalPointsConstraint.prototype, 'pointTwo', {
//         get : function () {
//             var result = this._execute('pointTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.HorizontalPointsConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HorizontalPointsConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.HorizontalPointsConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HorizontalPointsConstraint) : null;
//     };

//     //=========== MidPointConstraint ============
//     // A midpoint constraint in a sketch.
//     adsk.fusion.MidPointConstraint = function MidPointConstraint(handle) {
//         if (!(this instanceof adsk.fusion.MidPointConstraint)) {
//             return adsk.fusion.MidPointConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.MidPointConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.MidPointConstraint.prototype.constructor = adsk.fusion.MidPointConstraint;
//     adsk.fusion.MidPointConstraint.interfaceId = 'adsk.fusion.MidPointConstraint';
//     adsk.objectTypes['adsk.fusion.MidPointConstraint'] = adsk.fusion.MidPointConstraint;
//     adsk.fusion.MidPointConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.MidPointConstraint ? object : null;
//     };

//     // Returns the sketch point being constrained.
//     Object.defineProperty(adsk.fusion.MidPointConstraint.prototype, 'point', {
//         get : function () {
//             var result = this._execute('point');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the curve defining the midpoint.
//     Object.defineProperty(adsk.fusion.MidPointConstraint.prototype, 'midPointCurve', {
//         get : function () {
//             var result = this._execute('midPointCurve');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.MidPointConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MidPointConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.MidPointConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MidPointConstraint) : null;
//     };

//     //=========== OffsetConstraint ============
//     // An offset constraint in a sketch.
//     adsk.fusion.OffsetConstraint = function OffsetConstraint(handle) {
//         if (!(this instanceof adsk.fusion.OffsetConstraint)) {
//             return adsk.fusion.OffsetConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.OffsetConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.OffsetConstraint.prototype.constructor = adsk.fusion.OffsetConstraint;
//     adsk.fusion.OffsetConstraint.interfaceId = 'adsk.fusion.OffsetConstraint';
//     adsk.objectTypes['adsk.fusion.OffsetConstraint'] = adsk.fusion.OffsetConstraint;
//     adsk.fusion.OffsetConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.OffsetConstraint ? object : null;
//     };

//     //=========== ParallelConstraint ============
//     // A parallel constraint in a sketch.
//     adsk.fusion.ParallelConstraint = function ParallelConstraint(handle) {
//         if (!(this instanceof adsk.fusion.ParallelConstraint)) {
//             return adsk.fusion.ParallelConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.ParallelConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.ParallelConstraint.prototype.constructor = adsk.fusion.ParallelConstraint;
//     adsk.fusion.ParallelConstraint.interfaceId = 'adsk.fusion.ParallelConstraint';
//     adsk.objectTypes['adsk.fusion.ParallelConstraint'] = adsk.fusion.ParallelConstraint;
//     adsk.fusion.ParallelConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.ParallelConstraint ? object : null;
//     };

//     // Returns the first line.
//     Object.defineProperty(adsk.fusion.ParallelConstraint.prototype, 'lineOne', {
//         get : function () {
//             var result = this._execute('lineOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // Returns the second line.
//     Object.defineProperty(adsk.fusion.ParallelConstraint.prototype, 'lineTwo', {
//         get : function () {
//             var result = this._execute('lineTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ParallelConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParallelConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ParallelConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParallelConstraint) : null;
//     };

//     //=========== PerpendicularConstraint ============
//     // A perpendicular constraint in a sketch.
//     adsk.fusion.PerpendicularConstraint = function PerpendicularConstraint(handle) {
//         if (!(this instanceof adsk.fusion.PerpendicularConstraint)) {
//             return adsk.fusion.PerpendicularConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.PerpendicularConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.PerpendicularConstraint.prototype.constructor = adsk.fusion.PerpendicularConstraint;
//     adsk.fusion.PerpendicularConstraint.interfaceId = 'adsk.fusion.PerpendicularConstraint';
//     adsk.objectTypes['adsk.fusion.PerpendicularConstraint'] = adsk.fusion.PerpendicularConstraint;
//     adsk.fusion.PerpendicularConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.PerpendicularConstraint ? object : null;
//     };

//     // Returns the first line.
//     Object.defineProperty(adsk.fusion.PerpendicularConstraint.prototype, 'lineOne', {
//         get : function () {
//             var result = this._execute('lineOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // Returns the second line.
//     Object.defineProperty(adsk.fusion.PerpendicularConstraint.prototype, 'lineTwo', {
//         get : function () {
//             var result = this._execute('lineTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.PerpendicularConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PerpendicularConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.PerpendicularConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PerpendicularConstraint) : null;
//     };

//     //=========== PolygonConstraint ============
//     // A polygon constraint in a sketch.
//     adsk.fusion.PolygonConstraint = function PolygonConstraint(handle) {
//         if (!(this instanceof adsk.fusion.PolygonConstraint)) {
//             return adsk.fusion.PolygonConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.PolygonConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.PolygonConstraint.prototype.constructor = adsk.fusion.PolygonConstraint;
//     adsk.fusion.PolygonConstraint.interfaceId = 'adsk.fusion.PolygonConstraint';
//     adsk.objectTypes['adsk.fusion.PolygonConstraint'] = adsk.fusion.PolygonConstraint;
//     adsk.fusion.PolygonConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.PolygonConstraint ? object : null;
//     };

//     //=========== RectangularPatternConstraint ============
//     // A rectangular pattern constraint in a sketch.
//     adsk.fusion.RectangularPatternConstraint = function RectangularPatternConstraint(handle) {
//         if (!(this instanceof adsk.fusion.RectangularPatternConstraint)) {
//             return adsk.fusion.RectangularPatternConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.RectangularPatternConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.RectangularPatternConstraint.prototype.constructor = adsk.fusion.RectangularPatternConstraint;
//     adsk.fusion.RectangularPatternConstraint.interfaceId = 'adsk.fusion.RectangularPatternConstraint';
//     adsk.objectTypes['adsk.fusion.RectangularPatternConstraint'] = adsk.fusion.RectangularPatternConstraint;
//     adsk.fusion.RectangularPatternConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.RectangularPatternConstraint ? object : null;
//     };

//     //=========== SketchAngularDimension ============
//     // An angular dimension in a sketch.
//     adsk.fusion.SketchAngularDimension = function SketchAngularDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchAngularDimension)) {
//             return adsk.fusion.SketchAngularDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchAngularDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchAngularDimension.prototype.constructor = adsk.fusion.SketchAngularDimension;
//     adsk.fusion.SketchAngularDimension.interfaceId = 'adsk.fusion.SketchAngularDimension';
//     adsk.objectTypes['adsk.fusion.SketchAngularDimension'] = adsk.fusion.SketchAngularDimension;
//     adsk.fusion.SketchAngularDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchAngularDimension ? object : null;
//     };

//     // The first line being constrained.
//     Object.defineProperty(adsk.fusion.SketchAngularDimension.prototype, 'lineOne', {
//         get : function () {
//             var result = this._execute('lineOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The second line being constrained.
//     Object.defineProperty(adsk.fusion.SketchAngularDimension.prototype, 'lineTwo', {
//         get : function () {
//             var result = this._execute('lineTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchAngularDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchAngularDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchAngularDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchAngularDimension) : null;
//     };

//     //=========== SketchConcentricCircleDimension ============
//     // A concentric circle dimension in a sketch.
//     adsk.fusion.SketchConcentricCircleDimension = function SketchConcentricCircleDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchConcentricCircleDimension)) {
//             return adsk.fusion.SketchConcentricCircleDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchConcentricCircleDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchConcentricCircleDimension.prototype.constructor = adsk.fusion.SketchConcentricCircleDimension;
//     adsk.fusion.SketchConcentricCircleDimension.interfaceId = 'adsk.fusion.SketchConcentricCircleDimension';
//     adsk.objectTypes['adsk.fusion.SketchConcentricCircleDimension'] = adsk.fusion.SketchConcentricCircleDimension;
//     adsk.fusion.SketchConcentricCircleDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchConcentricCircleDimension ? object : null;
//     };

//     // Returns the first concentric circle or arc.
//     Object.defineProperty(adsk.fusion.SketchConcentricCircleDimension.prototype, 'circleOne', {
//         get : function () {
//             var result = this._execute('circleOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // Returns the second concentric circle or arc.
//     Object.defineProperty(adsk.fusion.SketchConcentricCircleDimension.prototype, 'circleTwo', {
//         get : function () {
//             var result = this._execute('circleTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchConcentricCircleDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConcentricCircleDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchConcentricCircleDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConcentricCircleDimension) : null;
//     };

//     //=========== SketchCurve ============
//     // A single sketch curve. This is the base class for the specific curve types.
//     adsk.fusion.SketchCurve = function SketchCurve(handle) {
//         if (!(this instanceof adsk.fusion.SketchCurve)) {
//             return adsk.fusion.SketchCurve.cast(handle);
//         }
//         adsk.fusion.SketchEntity.call(this, handle);
//     };
//     adsk.fusion.SketchCurve.prototype = Object.create(adsk.fusion.SketchEntity.prototype);
//     adsk.fusion.SketchCurve.prototype.constructor = adsk.fusion.SketchCurve;
//     adsk.fusion.SketchCurve.interfaceId = 'adsk.fusion.SketchCurve';
//     adsk.objectTypes['adsk.fusion.SketchCurve'] = adsk.fusion.SketchCurve;
//     adsk.fusion.SketchCurve.cast = function (object) {
//         return object instanceof adsk.fusion.SketchCurve ? object : null;
//     };

//     // Returns the length of the curve in centimeters.
//     Object.defineProperty(adsk.fusion.SketchCurve.prototype, 'length', {
//         get : function () {
//             var result = this._execute('length');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether this curve is construction geometry.
//     Object.defineProperty(adsk.fusion.SketchCurve.prototype, 'isConstruction', {
//         get : function () {
//             var result = this._execute('isConstruction');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isConstruction', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Split a curve at a position specified along the curve
//     // splitPoint : A position (transient Point3D) on the curve that defines the point at which to split the curve
//     // createConstraints : Constraints are created by default. Specify false to create no constraints.
//     // Returns the resulting 2 curves; the original curve + the newly created curve
//     // When split spline the original is deleted and two new curves returned.
//     // Empty collection returned if curve is closed.
//     adsk.fusion.SketchCurve.prototype.split = function (splitPoint, createConstraints) {
//         if (splitPoint !== null && !(splitPoint instanceof adsk.core.Point3D)) { throw new TypeError('splitPoint must be a adsk.core.Point3D'); }
//         if (createConstraints === null || (createConstraints !== undefined && typeof createConstraints !== 'boolean')) { throw new TypeError('createConstraints must be a boolean'); }
//         var args = {
//             splitPoint : (splitPoint === null ? splitPoint : splitPoint.handle)
//         };
//         if (createConstraints !== undefined) {
//             args.createConstraints = createConstraints;
//         }
//         var result = this._execute('split', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Trim a curve by specifying a point that determines the segment of the curve to trim away
//     // segmentPoint : A point (transient Point3D) on or closest to the segment of the curve to remove. (start, end or middle)
//     // The segment of the curve closest to the segmentPoint gets removed
//     // createConstraints : Constraints are created by default. Specify false to not create constraints.
//     // When trimming the start or end side of a line, unclosed circular or elliptical arc, the original entity is modified and returned
//     // When trimming the middle of a line, unclosed circular or elliptical arc the original entity is deleted and two new entities are returned
//     // When trimming the start or end of any type of closed curve, the original is deleted and a new curve is returned
//     // Any trimming of a spline (open or closed) deletes the original and new spline/s are returned
//     // Trimming a curve having no intersections deletes the original and returns an empty collection
//     adsk.fusion.SketchCurve.prototype.trim = function (segmentPoint, createConstraints) {
//         if (segmentPoint !== null && !(segmentPoint instanceof adsk.core.Point3D)) { throw new TypeError('segmentPoint must be a adsk.core.Point3D'); }
//         if (createConstraints === null || (createConstraints !== undefined && typeof createConstraints !== 'boolean')) { throw new TypeError('createConstraints must be a boolean'); }
//         var args = {
//             segmentPoint : (segmentPoint === null ? segmentPoint : segmentPoint.handle)
//         };
//         if (createConstraints !== undefined) {
//             args.createConstraints = createConstraints;
//         }
//         var result = this._execute('trim', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Breaks a curve into two or three pieces by finding intersections of this curve with all other curves in the
//     // sketch and splitting this curve at the nearest intersections to a specified point on the curve.
//     // segmentPoint : A point that specifies the segment of the curve that is to be split from the rest of the curve. The nearest
//     // intersection(s) to this point define the break location(s).
//     // createConstraints : Optional argument that specifies if constraints should be created between the new curve segments. A value of
//     // true indicates constraints will be created.
//     // All of the curves resulting from the break are returned in an ObjectCollection. In the case where no intersections
//     // are found and as a result the curve is not broken, an empty ObjectCollection is returned.
//     adsk.fusion.SketchCurve.prototype.breakCurve = function (segmentPoint, createConstraints) {
//         if (segmentPoint !== null && !(segmentPoint instanceof adsk.core.Point3D)) { throw new TypeError('segmentPoint must be a adsk.core.Point3D'); }
//         if (createConstraints === null || (createConstraints !== undefined && typeof createConstraints !== 'boolean')) { throw new TypeError('createConstraints must be a boolean'); }
//         var args = {
//             segmentPoint : (segmentPoint === null ? segmentPoint : segmentPoint.handle)
//         };
//         if (createConstraints !== undefined) {
//             args.createConstraints = createConstraints;
//         }
//         var result = this._execute('breakCurve', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Extend a curve by specifying a point that determines the end of the curve to extend
//     // endPoint : A point (transient Point3D) on or closest to the end of the curve to extend. (start or end)
//     // The end of the curve closest to the endPoint gets extended
//     // createConstraints : Constraints are created by default. Specify false to not create constraints.
//     // Returns the modified original curve if the start or end of the curve is extended
//     // If the extend joins a curve to another, the two original curves are deleted and a new curve is returned
//     // If an arc is extended so as to become a circle, the original arc is deleted and a new circle is returned
//     adsk.fusion.SketchCurve.prototype.extend = function (endPoint, createConstraints) {
//         if (endPoint !== null && !(endPoint instanceof adsk.core.Point3D)) { throw new TypeError('endPoint must be a adsk.core.Point3D'); }
//         if (createConstraints === null || (createConstraints !== undefined && typeof createConstraints !== 'boolean')) { throw new TypeError('createConstraints must be a boolean'); }
//         var args = {
//             endPoint : (endPoint === null ? endPoint : endPoint.handle)
//         };
//         if (createConstraints !== undefined) {
//             args.createConstraints = createConstraints;
//         }
//         var result = this._execute('extend', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     // Get the curves that intersect this curve along with the intersection points (Point2D)
//     // sketchCurves : A collection of curves to attempt to find intersections with.
//     // Set the value of this parameter to null to use all curves in the sketch for the calculation.
//     // intersectingCurves : A collection of the actual intersecting curves
//     // intersectionPoints : A collection of intersection points (Point3D)
//     // Item numbers in this collection correspond to the item numbers in the intersectingCurves collection.
//     // Returns true if intersections are found
//     adsk.fusion.SketchCurve.prototype.intersections = function (sketchCurves, intersectingCurves, intersectionPoints) {
//         if (sketchCurves !== null && !(sketchCurves instanceof adsk.core.ObjectCollection)) { throw new TypeError('sketchCurves must be a adsk.core.ObjectCollection'); }
//         if (typeof intersectingCurves !== 'object') { throw new TypeError('intersectingCurves must be an object'); }
//         if (typeof intersectionPoints !== 'object') { throw new TypeError('intersectionPoints must be an object'); }
//         var args = {
//             sketchCurves : (sketchCurves === null ? sketchCurves : sketchCurves.handle),
//             intersectingCurves : null,
//             intersectionPoints : null
//         };
//         var result = this._execute('intersections', args);
//         if (result && result.outargs) {
//             intersectingCurves.value = (result.outargs.intersectingCurves !== undefined) ? adsk.createObject(result.outargs.intersectingCurves, adsk.core.ObjectCollection) : null;
//             intersectionPoints.value = (result.outargs.intersectionPoints !== undefined) ? adsk.createObject(result.outargs.intersectionPoints, adsk.core.ObjectCollection) : null;
//         }
//         return result ? result.value : undefined;
//     };

//     //=========== SketchDiameterDimension ============
//     // An diameter dimension in a sketch.
//     adsk.fusion.SketchDiameterDimension = function SketchDiameterDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchDiameterDimension)) {
//             return adsk.fusion.SketchDiameterDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchDiameterDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchDiameterDimension.prototype.constructor = adsk.fusion.SketchDiameterDimension;
//     adsk.fusion.SketchDiameterDimension.interfaceId = 'adsk.fusion.SketchDiameterDimension';
//     adsk.objectTypes['adsk.fusion.SketchDiameterDimension'] = adsk.fusion.SketchDiameterDimension;
//     adsk.fusion.SketchDiameterDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchDiameterDimension ? object : null;
//     };

//     // Returns the arc or circle being constrained.
//     Object.defineProperty(adsk.fusion.SketchDiameterDimension.prototype, 'entity', {
//         get : function () {
//             var result = this._execute('entity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchDiameterDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDiameterDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchDiameterDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchDiameterDimension) : null;
//     };

//     //=========== SketchEllipseMajorRadiusDimension ============
//     // An ellipse major radius dimension in a sketch.
//     adsk.fusion.SketchEllipseMajorRadiusDimension = function SketchEllipseMajorRadiusDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchEllipseMajorRadiusDimension)) {
//             return adsk.fusion.SketchEllipseMajorRadiusDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchEllipseMajorRadiusDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchEllipseMajorRadiusDimension.prototype.constructor = adsk.fusion.SketchEllipseMajorRadiusDimension;
//     adsk.fusion.SketchEllipseMajorRadiusDimension.interfaceId = 'adsk.fusion.SketchEllipseMajorRadiusDimension';
//     adsk.objectTypes['adsk.fusion.SketchEllipseMajorRadiusDimension'] = adsk.fusion.SketchEllipseMajorRadiusDimension;
//     adsk.fusion.SketchEllipseMajorRadiusDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEllipseMajorRadiusDimension ? object : null;
//     };

//     // Returns the ellipse or elliptical arc being constrained.
//     Object.defineProperty(adsk.fusion.SketchEllipseMajorRadiusDimension.prototype, 'ellipse', {
//         get : function () {
//             var result = this._execute('ellipse');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchEllipseMajorRadiusDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipseMajorRadiusDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchEllipseMajorRadiusDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipseMajorRadiusDimension) : null;
//     };

//     //=========== SketchEllipseMinorRadiusDimension ============
//     // An ellipse minor radius dimension in a sketch.
//     adsk.fusion.SketchEllipseMinorRadiusDimension = function SketchEllipseMinorRadiusDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchEllipseMinorRadiusDimension)) {
//             return adsk.fusion.SketchEllipseMinorRadiusDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchEllipseMinorRadiusDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchEllipseMinorRadiusDimension.prototype.constructor = adsk.fusion.SketchEllipseMinorRadiusDimension;
//     adsk.fusion.SketchEllipseMinorRadiusDimension.interfaceId = 'adsk.fusion.SketchEllipseMinorRadiusDimension';
//     adsk.objectTypes['adsk.fusion.SketchEllipseMinorRadiusDimension'] = adsk.fusion.SketchEllipseMinorRadiusDimension;
//     adsk.fusion.SketchEllipseMinorRadiusDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEllipseMinorRadiusDimension ? object : null;
//     };

//     // Returns the ellipse or elliptical arc being constrained.
//     Object.defineProperty(adsk.fusion.SketchEllipseMinorRadiusDimension.prototype, 'ellipse', {
//         get : function () {
//             var result = this._execute('ellipse');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchEllipseMinorRadiusDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipseMinorRadiusDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchEllipseMinorRadiusDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipseMinorRadiusDimension) : null;
//     };

//     //=========== SketchLinearDimension ============
//     // A linear dimension in a sketch.
//     adsk.fusion.SketchLinearDimension = function SketchLinearDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchLinearDimension)) {
//             return adsk.fusion.SketchLinearDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchLinearDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchLinearDimension.prototype.constructor = adsk.fusion.SketchLinearDimension;
//     adsk.fusion.SketchLinearDimension.interfaceId = 'adsk.fusion.SketchLinearDimension';
//     adsk.objectTypes['adsk.fusion.SketchLinearDimension'] = adsk.fusion.SketchLinearDimension;
//     adsk.fusion.SketchLinearDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchLinearDimension ? object : null;
//     };

//     // The first entity being constrained.
//     Object.defineProperty(adsk.fusion.SketchLinearDimension.prototype, 'entityOne', {
//         get : function () {
//             var result = this._execute('entityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // The second entity being constrained.
//     Object.defineProperty(adsk.fusion.SketchLinearDimension.prototype, 'entityTwo', {
//         get : function () {
//             var result = this._execute('entityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // The orientation of this dimension.
//     Object.defineProperty(adsk.fusion.SketchLinearDimension.prototype, 'orientation', {
//         get : function () {
//             var result = this._execute('orientation');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchLinearDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLinearDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchLinearDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLinearDimension) : null;
//     };

//     //=========== SketchOffsetCurvesDimension ============
//     // A SketchOffsetCurvesDimension object is created automatically whenever curves are offset.
//     adsk.fusion.SketchOffsetCurvesDimension = function SketchOffsetCurvesDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchOffsetCurvesDimension)) {
//             return adsk.fusion.SketchOffsetCurvesDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchOffsetCurvesDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchOffsetCurvesDimension.prototype.constructor = adsk.fusion.SketchOffsetCurvesDimension;
//     adsk.fusion.SketchOffsetCurvesDimension.interfaceId = 'adsk.fusion.SketchOffsetCurvesDimension';
//     adsk.objectTypes['adsk.fusion.SketchOffsetCurvesDimension'] = adsk.fusion.SketchOffsetCurvesDimension;
//     adsk.fusion.SketchOffsetCurvesDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchOffsetCurvesDimension ? object : null;
//     };

//     //=========== SketchOffsetDimension ============
//     // An offset dimension in a sketch.
//     adsk.fusion.SketchOffsetDimension = function SketchOffsetDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchOffsetDimension)) {
//             return adsk.fusion.SketchOffsetDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchOffsetDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchOffsetDimension.prototype.constructor = adsk.fusion.SketchOffsetDimension;
//     adsk.fusion.SketchOffsetDimension.interfaceId = 'adsk.fusion.SketchOffsetDimension';
//     adsk.objectTypes['adsk.fusion.SketchOffsetDimension'] = adsk.fusion.SketchOffsetDimension;
//     adsk.fusion.SketchOffsetDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchOffsetDimension ? object : null;
//     };

//     // The first line being constrained.
//     Object.defineProperty(adsk.fusion.SketchOffsetDimension.prototype, 'line', {
//         get : function () {
//             var result = this._execute('line');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The second entity being constrained. (a parallel SketchLine or a SketchPoint)
//     Object.defineProperty(adsk.fusion.SketchOffsetDimension.prototype, 'entityTwo', {
//         get : function () {
//             var result = this._execute('entityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchOffsetDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchOffsetDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchOffsetDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchOffsetDimension) : null;
//     };

//     //=========== SketchPoint ============
//     // A point within a sketch.
//     adsk.fusion.SketchPoint = function SketchPoint(handle) {
//         if (!(this instanceof adsk.fusion.SketchPoint)) {
//             return adsk.fusion.SketchPoint.cast(handle);
//         }
//         adsk.fusion.SketchEntity.call(this, handle);
//     };
//     adsk.fusion.SketchPoint.prototype = Object.create(adsk.fusion.SketchEntity.prototype);
//     adsk.fusion.SketchPoint.prototype.constructor = adsk.fusion.SketchPoint;
//     adsk.fusion.SketchPoint.interfaceId = 'adsk.fusion.SketchPoint';
//     adsk.objectTypes['adsk.fusion.SketchPoint'] = adsk.fusion.SketchPoint;
//     adsk.fusion.SketchPoint.cast = function (object) {
//         return object instanceof adsk.fusion.SketchPoint ? object : null;
//     };

//     // Returns a Point3D object which provides the position of the sketch point.
//     // The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchPoint.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Returns a Point3D object which provides the position of the sketch point in world space.
//     // The returned coordinate takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the coordinate will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchPoint.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchPoint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the set of sketch entities that are directly connected to this point. For
//     // example any entities that use this point as their start point or end point will be returned
//     // and any circle, arc or ellipse who have this point as a center point will be returned. This
//     // does not include entities that are related to the point through a constraint.
//     Object.defineProperty(adsk.fusion.SketchPoint.prototype, 'connectedEntities', {
//         get : function () {
//             var result = this._execute('connectedEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntityList) : null;
//         }
//     });

//     // Moves the sketch geometry using the specified transform.
//     // Move respects any constraints that would normally prohibit the move.
//     // This will fail in the case where the IsReference property is true.
//     // translation : The vector that defines the distance and direction to move.
//     //
//     adsk.fusion.SketchPoint.prototype.move = function (translation) {
//         if (translation !== null && !(translation instanceof adsk.core.Vector3D)) { throw new TypeError('translation must be a adsk.core.Vector3D'); }
//         var args = {
//             translation : (translation === null ? translation : translation.handle)
//         };
//         var result = this._execute('move', args);
//         return result ? result.value : undefined;
//     };

//     // Merges the input sketch point into this sketch point. This effectively
//     // deletes the other sketch point and changes all entities that referenced
//     // that sketch point to reference this sketch point.
//     // This is the equivalent of dragging a sketch point on top of another
//     // sketch point in the user interface.
//     // point : The point to merge with this point.
//     // Returns true if the merge was successful.
//     adsk.fusion.SketchPoint.prototype.merge = function (point) {
//         if (point !== null && !(point instanceof adsk.fusion.SketchPoint)) { throw new TypeError('point must be a adsk.fusion.SketchPoint'); }
//         var args = {
//             point : (point === null ? point : point.handle)
//         };
//         var result = this._execute('merge', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchPoint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//     };

//     //=========== SketchRadialDimension ============
//     // An radial dimension in a sketch.
//     adsk.fusion.SketchRadialDimension = function SketchRadialDimension(handle) {
//         if (!(this instanceof adsk.fusion.SketchRadialDimension)) {
//             return adsk.fusion.SketchRadialDimension.cast(handle);
//         }
//         adsk.fusion.SketchDimension.call(this, handle);
//     };
//     adsk.fusion.SketchRadialDimension.prototype = Object.create(adsk.fusion.SketchDimension.prototype);
//     adsk.fusion.SketchRadialDimension.prototype.constructor = adsk.fusion.SketchRadialDimension;
//     adsk.fusion.SketchRadialDimension.interfaceId = 'adsk.fusion.SketchRadialDimension';
//     adsk.objectTypes['adsk.fusion.SketchRadialDimension'] = adsk.fusion.SketchRadialDimension;
//     adsk.fusion.SketchRadialDimension.cast = function (object) {
//         return object instanceof adsk.fusion.SketchRadialDimension ? object : null;
//     };

//     // The arc or circle being constrained.
//     Object.defineProperty(adsk.fusion.SketchRadialDimension.prototype, 'entity', {
//         get : function () {
//             var result = this._execute('entity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchRadialDimension.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchRadialDimension) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchRadialDimension.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchRadialDimension) : null;
//     };

//     //=========== SketchText ============
//     // Text in a sketch.
//     adsk.fusion.SketchText = function SketchText(handle) {
//         if (!(this instanceof adsk.fusion.SketchText)) {
//             return adsk.fusion.SketchText.cast(handle);
//         }
//         adsk.fusion.SketchEntity.call(this, handle);
//     };
//     adsk.fusion.SketchText.prototype = Object.create(adsk.fusion.SketchEntity.prototype);
//     adsk.fusion.SketchText.prototype.constructor = adsk.fusion.SketchText;
//     adsk.fusion.SketchText.interfaceId = 'adsk.fusion.SketchText';
//     adsk.objectTypes['adsk.fusion.SketchText'] = adsk.fusion.SketchText;
//     adsk.fusion.SketchText.cast = function (object) {
//         return object instanceof adsk.fusion.SketchText ? object : null;
//     };

//     // Gets and sets the height of the text in centimeters.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'height', {
//         get : function () {
//             var result = this._execute('height');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('height', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text. This is a simple string and ignores any formatting defined within the text.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'text', {
//         get : function () {
//             var result = this._execute('text');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('text', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the position of the text on the x-y plane of the sketch. The text must lie on the x-y plane so the Z component
//     // of the point is ignored and always treated as zero.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'position', {
//         get : function () {
//             var result = this._execute('position');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('position', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the name of the font to use.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'fontName', {
//         get : function () {
//             var result = this._execute('fontName');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('fontName', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the angle of the text relative to the x-axis of the x-y plane of the sketch.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('angle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text style to apply to the entire text. This is a bitwise enum so styles
//     // can be combined to apply multiple styles. For example you can apply bold and underline.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'textStyle', {
//         get : function () {
//             var result = this._execute('textStyle');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('textStyle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the four sketch lines that define the boundary of the sketch text. By adding constraints to these lines
//     // you can associatively control the size, position and angle of the sketch text.
//     Object.defineProperty(adsk.fusion.SketchText.prototype, 'boundaryLines', {
//         get : function () {
//             var result = this._execute('boundaryLines');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLineList) : null;
//         }
//     });

//     //=========== SmoothConstraint ============
//     // A smooth constraint in a sketch.
//     adsk.fusion.SmoothConstraint = function SmoothConstraint(handle) {
//         if (!(this instanceof adsk.fusion.SmoothConstraint)) {
//             return adsk.fusion.SmoothConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.SmoothConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.SmoothConstraint.prototype.constructor = adsk.fusion.SmoothConstraint;
//     adsk.fusion.SmoothConstraint.interfaceId = 'adsk.fusion.SmoothConstraint';
//     adsk.objectTypes['adsk.fusion.SmoothConstraint'] = adsk.fusion.SmoothConstraint;
//     adsk.fusion.SmoothConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.SmoothConstraint ? object : null;
//     };

//     // Returns the first curve.
//     Object.defineProperty(adsk.fusion.SmoothConstraint.prototype, 'curveOne', {
//         get : function () {
//             var result = this._execute('curveOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // Returns the second curve.
//     Object.defineProperty(adsk.fusion.SmoothConstraint.prototype, 'curveTwo', {
//         get : function () {
//             var result = this._execute('curveTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SmoothConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SmoothConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SmoothConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SmoothConstraint) : null;
//     };

//     //=========== SymmetryConstraint ============
//     // A symmetry constraint in a sketch.
//     adsk.fusion.SymmetryConstraint = function SymmetryConstraint(handle) {
//         if (!(this instanceof adsk.fusion.SymmetryConstraint)) {
//             return adsk.fusion.SymmetryConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.SymmetryConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.SymmetryConstraint.prototype.constructor = adsk.fusion.SymmetryConstraint;
//     adsk.fusion.SymmetryConstraint.interfaceId = 'adsk.fusion.SymmetryConstraint';
//     adsk.objectTypes['adsk.fusion.SymmetryConstraint'] = adsk.fusion.SymmetryConstraint;
//     adsk.fusion.SymmetryConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.SymmetryConstraint ? object : null;
//     };

//     // Returns the first curve.
//     Object.defineProperty(adsk.fusion.SymmetryConstraint.prototype, 'entityOne', {
//         get : function () {
//             var result = this._execute('entityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // Returns the second curve.
//     Object.defineProperty(adsk.fusion.SymmetryConstraint.prototype, 'entityTwo', {
//         get : function () {
//             var result = this._execute('entityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEntity) : null;
//         }
//     });

//     // Returns the axis (SketchLine) that defines the symmetry.
//     Object.defineProperty(adsk.fusion.SymmetryConstraint.prototype, 'symmetryLine', {
//         get : function () {
//             var result = this._execute('symmetryLine');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SymmetryConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SymmetryConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SymmetryConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SymmetryConstraint) : null;
//     };

//     //=========== TangentConstraint ============
//     // A tangent constraint in a sketch.
//     adsk.fusion.TangentConstraint = function TangentConstraint(handle) {
//         if (!(this instanceof adsk.fusion.TangentConstraint)) {
//             return adsk.fusion.TangentConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.TangentConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.TangentConstraint.prototype.constructor = adsk.fusion.TangentConstraint;
//     adsk.fusion.TangentConstraint.interfaceId = 'adsk.fusion.TangentConstraint';
//     adsk.objectTypes['adsk.fusion.TangentConstraint'] = adsk.fusion.TangentConstraint;
//     adsk.fusion.TangentConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.TangentConstraint ? object : null;
//     };

//     // Returns the first curve.
//     Object.defineProperty(adsk.fusion.TangentConstraint.prototype, 'curveOne', {
//         get : function () {
//             var result = this._execute('curveOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // Returns the second curve.
//     Object.defineProperty(adsk.fusion.TangentConstraint.prototype, 'curveTwo', {
//         get : function () {
//             var result = this._execute('curveTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCurve) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.TangentConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TangentConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.TangentConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TangentConstraint) : null;
//     };

//     //=========== VerticalConstraint ============
//     // A vertical constraint in a sketch.
//     adsk.fusion.VerticalConstraint = function VerticalConstraint(handle) {
//         if (!(this instanceof adsk.fusion.VerticalConstraint)) {
//             return adsk.fusion.VerticalConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.VerticalConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.VerticalConstraint.prototype.constructor = adsk.fusion.VerticalConstraint;
//     adsk.fusion.VerticalConstraint.interfaceId = 'adsk.fusion.VerticalConstraint';
//     adsk.objectTypes['adsk.fusion.VerticalConstraint'] = adsk.fusion.VerticalConstraint;
//     adsk.fusion.VerticalConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.VerticalConstraint ? object : null;
//     };

//     // Returns the line being constrained.
//     Object.defineProperty(adsk.fusion.VerticalConstraint.prototype, 'line', {
//         get : function () {
//             var result = this._execute('line');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.VerticalConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.VerticalConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.VerticalConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.VerticalConstraint) : null;
//     };

//     //=========== VerticalPointsConstraint ============
//     // A vertical constraint between two points in a sketch.
//     adsk.fusion.VerticalPointsConstraint = function VerticalPointsConstraint(handle) {
//         if (!(this instanceof adsk.fusion.VerticalPointsConstraint)) {
//             return adsk.fusion.VerticalPointsConstraint.cast(handle);
//         }
//         adsk.fusion.GeometricConstraint.call(this, handle);
//     };
//     adsk.fusion.VerticalPointsConstraint.prototype = Object.create(adsk.fusion.GeometricConstraint.prototype);
//     adsk.fusion.VerticalPointsConstraint.prototype.constructor = adsk.fusion.VerticalPointsConstraint;
//     adsk.fusion.VerticalPointsConstraint.interfaceId = 'adsk.fusion.VerticalPointsConstraint';
//     adsk.objectTypes['adsk.fusion.VerticalPointsConstraint'] = adsk.fusion.VerticalPointsConstraint;
//     adsk.fusion.VerticalPointsConstraint.cast = function (object) {
//         return object instanceof adsk.fusion.VerticalPointsConstraint ? object : null;
//     };

//     // Returns the first point.
//     Object.defineProperty(adsk.fusion.VerticalPointsConstraint.prototype, 'pointOne', {
//         get : function () {
//             var result = this._execute('pointOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the second point.
//     Object.defineProperty(adsk.fusion.VerticalPointsConstraint.prototype, 'pointTwo', {
//         get : function () {
//             var result = this._execute('pointTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.VerticalPointsConstraint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.VerticalPointsConstraint) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.VerticalPointsConstraint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.VerticalPointsConstraint) : null;
//     };

//     //=========== SketchArc ============
//     // An arc in a sketch.
//     adsk.fusion.SketchArc = function SketchArc(handle) {
//         if (!(this instanceof adsk.fusion.SketchArc)) {
//             return adsk.fusion.SketchArc.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchArc.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchArc.prototype.constructor = adsk.fusion.SketchArc;
//     adsk.fusion.SketchArc.interfaceId = 'adsk.fusion.SketchArc';
//     adsk.objectTypes['adsk.fusion.SketchArc'] = adsk.fusion.SketchArc;
//     adsk.fusion.SketchArc.cast = function (object) {
//         return object instanceof adsk.fusion.SketchArc ? object : null;
//     };

//     // The sketch point at the center of the arc. The arc is dependent on this point and moving the
//     // point will cause the arc to adjust.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'centerSketchPoint', {
//         get : function () {
//             var result = this._execute('centerSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch point at the start of the arc. The arc is dependent on this point and moving the
//     // point will cause the arc to adjust.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'startSketchPoint', {
//         get : function () {
//             var result = this._execute('startSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch point at the end of the arc. The arc is dependent on this point and moving the
//     // point will cause the arc to adjust.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'endSketchPoint', {
//         get : function () {
//             var result = this._execute('endSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Gets and sets the radius of the arc. Changing the radius is limited
//     // by any constraints that might exist on the circle. Setting the radius
//     // can fail in cases where the radius is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'radius', {
//         get : function () {
//             var result = this._execute('radius');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('radius', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the transient geometry of the arc which provides geometric
//     // information about the arc. The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc3D) : null;
//         }
//     });

//     // Returns an Arc3D object which provides geometric information in world space.
//     // The returned geometry takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the geometry will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchArc.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArc) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchArc.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchArc) : null;
//     };

//     //=========== SketchCircle ============
//     // A circle in a sketch.
//     adsk.fusion.SketchCircle = function SketchCircle(handle) {
//         if (!(this instanceof adsk.fusion.SketchCircle)) {
//             return adsk.fusion.SketchCircle.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchCircle.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchCircle.prototype.constructor = adsk.fusion.SketchCircle;
//     adsk.fusion.SketchCircle.interfaceId = 'adsk.fusion.SketchCircle';
//     adsk.objectTypes['adsk.fusion.SketchCircle'] = adsk.fusion.SketchCircle;
//     adsk.fusion.SketchCircle.cast = function (object) {
//         return object instanceof adsk.fusion.SketchCircle ? object : null;
//     };

//     // Returns the sketch point at the center of the circle.
//     Object.defineProperty(adsk.fusion.SketchCircle.prototype, 'centerSketchPoint', {
//         get : function () {
//             var result = this._execute('centerSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the transient geometry of the circle which provides geometric
//     // information about the circle. The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchCircle.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle3D) : null;
//         }
//     });

//     // Returns a Point3D object which provides the position of the sketch point in world space.
//     // The returned coordinate takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the coordinate will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchCircle.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle3D) : null;
//         }
//     });

//     // Returns the area of the circle in square centimeters.
//     Object.defineProperty(adsk.fusion.SketchCircle.prototype, 'area', {
//         get : function () {
//             var result = this._execute('area');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the radius of the circle. Changing the radius is limited
//     // by any constraints that might exist on the circle.
//     Object.defineProperty(adsk.fusion.SketchCircle.prototype, 'radius', {
//         get : function () {
//             var result = this._execute('radius');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('radius', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchCircle.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchCircle.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchCircle) : null;
//     };

//     //=========== SketchConicCurve ============
//     // The SketchConicCurve class represents conic curves in a sketch.
//     adsk.fusion.SketchConicCurve = function SketchConicCurve(handle) {
//         if (!(this instanceof adsk.fusion.SketchConicCurve)) {
//             return adsk.fusion.SketchConicCurve.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchConicCurve.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchConicCurve.prototype.constructor = adsk.fusion.SketchConicCurve;
//     adsk.fusion.SketchConicCurve.interfaceId = 'adsk.fusion.SketchConicCurve';
//     adsk.objectTypes['adsk.fusion.SketchConicCurve'] = adsk.fusion.SketchConicCurve;
//     adsk.fusion.SketchConicCurve.cast = function (object) {
//         return object instanceof adsk.fusion.SketchConicCurve ? object : null;
//     };

//     // The sketch point at the start of the curve.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'startSketchPoint', {
//         get : function () {
//             var result = this._execute('startSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch point at the end of the curve.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'endSketchPoint', {
//         get : function () {
//             var result = this._execute('endSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch point at the apex of the conic curve.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'apexSketchPoint', {
//         get : function () {
//             var result = this._execute('apexSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the transient geometry of the curve which provides geometric
//     // information about the curve. The returned geometry is always in sketch space.
//     // Because the fixed spline can be analytically defined, for example it
//     // can be the precise intersection of a surface and the sketch plane,
//     // returning a NURBS curve that represents the spline may be an
//     // approximation of the actual curve. You can use the Evaluator
//     // property of the SketchFixedSpline object to perform evaluations
//     // on the precise curve.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
//         }
//     });

//     // Returns a NurbsCurve3D object that is the equivalent of this sketch curve
//     // but is in the space of the parent component rather than in sketch space.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
//         }
//     });

//     // Returns an evaluator object that lets you perform evaluations
//     // on the precise geometry of the curve.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'evaluator', {
//         get : function () {
//             var result = this._execute('evaluator');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CurveEvaluator3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchConicCurve.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConicCurve) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchConicCurve.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchConicCurve) : null;
//     };

//     //=========== SketchEllipse ============
//     // An ellipse in a sketch.
//     adsk.fusion.SketchEllipse = function SketchEllipse(handle) {
//         if (!(this instanceof adsk.fusion.SketchEllipse)) {
//             return adsk.fusion.SketchEllipse.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchEllipse.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchEllipse.prototype.constructor = adsk.fusion.SketchEllipse;
//     adsk.fusion.SketchEllipse.interfaceId = 'adsk.fusion.SketchEllipse';
//     adsk.objectTypes['adsk.fusion.SketchEllipse'] = adsk.fusion.SketchEllipse;
//     adsk.fusion.SketchEllipse.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEllipse ? object : null;
//     };

//     // Returns the sketch point that defines the center of the ellipse. You can
//     // reposition the ellipse by moving the sketch point, assuming any existing
//     // constraints allow the desired change.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'centerSketchPoint', {
//         get : function () {
//             var result = this._execute('centerSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Gets and sets the major axis direction of the ellipse. Changing the axis is
//     // limited by any constraints that might exist on the ellipse. Setting the axis
//     // can fail in cases where the direction is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'majorAxis', {
//         get : function () {
//             var result = this._execute('majorAxis');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('majorAxis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the major axis radius of the ellipse. Changing the radius is
//     // limited by any constraints that might exist on the ellipse. Setting the radius
//     // can fail in cases where the radius is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'majorAxisRadius', {
//         get : function () {
//             var result = this._execute('majorAxisRadius');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('majorAxisRadius', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the minor axis radius of the ellipse. Changing the radius is
//     // limited by any constraints that might exist on the ellipse. Setting the radius
//     // can fail in cases where the radius is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'minorAxisRadius', {
//         get : function () {
//             var result = this._execute('minorAxisRadius');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('minorAxisRadius', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the transient geometry of the ellipse which provides geometric
//     // information about the ellipse. The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Ellipse3D) : null;
//         }
//     });

//     // Returns an Ellipse3D object which provides geometric information in world space.
//     // The returned geometry takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the geometry will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Ellipse3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchEllipse.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipse) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchEllipse.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipse) : null;
//     };

//     //=========== SketchEllipticalArc ============
//     // An elliptical arc in a sketch.
//     adsk.fusion.SketchEllipticalArc = function SketchEllipticalArc(handle) {
//         if (!(this instanceof adsk.fusion.SketchEllipticalArc)) {
//             return adsk.fusion.SketchEllipticalArc.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchEllipticalArc.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchEllipticalArc.prototype.constructor = adsk.fusion.SketchEllipticalArc;
//     adsk.fusion.SketchEllipticalArc.interfaceId = 'adsk.fusion.SketchEllipticalArc';
//     adsk.objectTypes['adsk.fusion.SketchEllipticalArc'] = adsk.fusion.SketchEllipticalArc;
//     adsk.fusion.SketchEllipticalArc.cast = function (object) {
//         return object instanceof adsk.fusion.SketchEllipticalArc ? object : null;
//     };

//     // Gets the sketch point that defines the center of the elliptical arc. You can
//     // reposition the elliptical arc by moving the sketch point, assuming any existing
//     // constraints allow the desired change.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'centerSketchPoint', {
//         get : function () {
//             var result = this._execute('centerSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Gets the sketch point that defines the start of the elliptical arc. You can
//     // reposition the sketch point, assuming any existing constraints allow the
//     // desired change.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'startSketchPoint', {
//         get : function () {
//             var result = this._execute('startSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Gets the sketch point that defines the end of the elliptical arc. You can
//     // reposition the sketch point, assuming any existing constraints allow the
//     // desired change.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'endSketchPoint', {
//         get : function () {
//             var result = this._execute('endSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Gets and sets the major axis direction of the elliptical arc. Changing the axis is
//     // limited by any constraints that might exist on the elliptical arc. Setting the axis
//     // can fail in cases where the direction is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'majorAxis', {
//         get : function () {
//             var result = this._execute('majorAxis');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('majorAxis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the major axis radius of the elliptical arc. Changing the radius is
//     // limited by any constraints that might exist on the elliptical arc. Setting the radius
//     // can fail in cases where the radius is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'majorAxisRadius', {
//         get : function () {
//             var result = this._execute('majorAxisRadius');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('majorAxisRadius', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the minor axis radius of the elliptical arc. Changing the radius is
//     // limited by any constraints that might exist on the elliptical arc. Setting the radius
//     // can fail in cases where the radius is fully defined through constraints.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'minorAxisRadius', {
//         get : function () {
//             var result = this._execute('minorAxisRadius');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('minorAxisRadius', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the transient geometry of the elliptical arc which provides geometric
//     // information about the elliptical arc. The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalArc3D) : null;
//         }
//     });

//     // Returns an EllipticalArc3D object which provides geometric information in world space.
//     // The returned geometry takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the geometry will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalArc3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchEllipticalArc.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipticalArc) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchEllipticalArc.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchEllipticalArc) : null;
//     };

//     //=========== SketchFittedSpline ============
//     // A fitted spline in a sketch.
//     adsk.fusion.SketchFittedSpline = function SketchFittedSpline(handle) {
//         if (!(this instanceof adsk.fusion.SketchFittedSpline)) {
//             return adsk.fusion.SketchFittedSpline.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchFittedSpline.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchFittedSpline.prototype.constructor = adsk.fusion.SketchFittedSpline;
//     adsk.fusion.SketchFittedSpline.interfaceId = 'adsk.fusion.SketchFittedSpline';
//     adsk.objectTypes['adsk.fusion.SketchFittedSpline'] = adsk.fusion.SketchFittedSpline;
//     adsk.fusion.SketchFittedSpline.cast = function (object) {
//         return object instanceof adsk.fusion.SketchFittedSpline ? object : null;
//     };

//     // Returns the sketch point that defines the starting position
//     // of the spline. Editing the position of this sketch point
//     // will result in editing the spline.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'startSketchPoint', {
//         get : function () {
//             var result = this._execute('startSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the sketch point that defines the ending position
//     // of the spline. Editing the position of this sketch point
//     // will result in editing the spline.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'endSketchPoint', {
//         get : function () {
//             var result = this._execute('endSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the set of sketch points that the spline fits through.
//     // This does not include the start or end points, which are obtained
//     // using the StartSketchPoint and EndSketchPoint properties.
//     // Editing the position of these sketch points will result in
//     // editing the spline.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'fitPoints', {
//         get : function () {
//             var result = this._execute('fitPoints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPointList) : null;
//         }
//     });

//     // Gets and sets if this spline is closed. A closed spline
//     // is also periodic. This property can return false even in
//     // the case where the spline is physically closed. It's possible
//     // that the start and end points of a spline can be the same point
//     // but the curve is still not considered closed. This can happen
//     // when the start and end points of an open curve are merged. The
//     // curve is physically closed but is not periodic and can have a
//     // discontinuity at the joint. Setting it to closed will cause it
//     // to be periodic and to always remain closed even as fit points
//     // are deleted.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'isClosed', {
//         get : function () {
//             var result = this._execute('isClosed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isClosed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the transient geometry of the curve which provides geometric
//     // information about the curve. The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
//         }
//     });

//     // Returns an NurbsCurve3D object which provides geometric information in world space.
//     // The returned geometry takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the geometry will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchFittedSpline.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFittedSpline) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchFittedSpline.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFittedSpline) : null;
//     };

//     //=========== SketchFixedSpline ============
//     // The SketchFixedSpline class represents splines in a sketch that are
//     // uneditable. These can result from including splines from other sketches
//     // or the spline edges. They can also be created by intersections and
//     // projecting splines onto a sketch.
//     adsk.fusion.SketchFixedSpline = function SketchFixedSpline(handle) {
//         if (!(this instanceof adsk.fusion.SketchFixedSpline)) {
//             return adsk.fusion.SketchFixedSpline.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchFixedSpline.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchFixedSpline.prototype.constructor = adsk.fusion.SketchFixedSpline;
//     adsk.fusion.SketchFixedSpline.interfaceId = 'adsk.fusion.SketchFixedSpline';
//     adsk.objectTypes['adsk.fusion.SketchFixedSpline'] = adsk.fusion.SketchFixedSpline;
//     adsk.fusion.SketchFixedSpline.cast = function (object) {
//         return object instanceof adsk.fusion.SketchFixedSpline ? object : null;
//     };

//     // The sketch point at the start of the spline.
//     Object.defineProperty(adsk.fusion.SketchFixedSpline.prototype, 'startSketchPoint', {
//         get : function () {
//             var result = this._execute('startSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch point at the end of the spline.
//     Object.defineProperty(adsk.fusion.SketchFixedSpline.prototype, 'endSketchPoint', {
//         get : function () {
//             var result = this._execute('endSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the transient geometry of the curve which provides geometric
//     // information about the curve. The returned geometry is always in sketch space.
//     // Because the fixed spline can be analytically defined, for example it
//     // can be the precise intersection of a surface and the sketch plane,
//     // returning a NURBS curve that represents the spline may be an
//     // approximation of the actual curve. You can use the Evaluator
//     // property of the SketchFixedSpline object to perform evaluations
//     // on the precise curve.
//     Object.defineProperty(adsk.fusion.SketchFixedSpline.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
//         }
//     });

//     // Returns a NurbsCurve3D object that is the equivalent of this sketch curve
//     // but is in the space of the parent component rather than in sketch space.
//     Object.defineProperty(adsk.fusion.SketchFixedSpline.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
//         }
//     });

//     // Returns an evaluator object that lets you perform evaluations
//     // on the precise geometry of the curve.
//     Object.defineProperty(adsk.fusion.SketchFixedSpline.prototype, 'evaluator', {
//         get : function () {
//             var result = this._execute('evaluator');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CurveEvaluator3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchFixedSpline.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFixedSpline) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchFixedSpline.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchFixedSpline) : null;
//     };

//     //=========== SketchLine ============
//     // A line in a sketch.
//     adsk.fusion.SketchLine = function SketchLine(handle) {
//         if (!(this instanceof adsk.fusion.SketchLine)) {
//             return adsk.fusion.SketchLine.cast(handle);
//         }
//         adsk.fusion.SketchCurve.call(this, handle);
//     };
//     adsk.fusion.SketchLine.prototype = Object.create(adsk.fusion.SketchCurve.prototype);
//     adsk.fusion.SketchLine.prototype.constructor = adsk.fusion.SketchLine;
//     adsk.fusion.SketchLine.interfaceId = 'adsk.fusion.SketchLine';
//     adsk.objectTypes['adsk.fusion.SketchLine'] = adsk.fusion.SketchLine;
//     adsk.fusion.SketchLine.cast = function (object) {
//         return object instanceof adsk.fusion.SketchLine ? object : null;
//     };

//     // The sketch point at the start of the line. The line is dependent on this point and moving the
//     // point will cause the line to adjust.
//     Object.defineProperty(adsk.fusion.SketchLine.prototype, 'startSketchPoint', {
//         get : function () {
//             var result = this._execute('startSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // The sketch point at the end of the line. The line is dependent on this point and moving the
//     // point will cause the line to adjust.
//     Object.defineProperty(adsk.fusion.SketchLine.prototype, 'endSketchPoint', {
//         get : function () {
//             var result = this._execute('endSketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     // Returns the transient geometry of the line which provides geometry
//     // information about the line. The returned geometry is always in sketch space.
//     Object.defineProperty(adsk.fusion.SketchLine.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Line3D) : null;
//         }
//     });

//     // Returns a Line3D object which provides geometric information in world space.
//     // The returned geometry takes into account the assembly context and the position of the
//     // sketch in it's parent component, which means the geometry will be returned in the root
//     // component space.
//     Object.defineProperty(adsk.fusion.SketchLine.prototype, 'worldGeometry', {
//         get : function () {
//             var result = this._execute('worldGeometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Line3D) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SketchLine.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SketchLine.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchLine) : null;
//     };

//     return adsk;
// }));