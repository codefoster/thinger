//=========== BoundingBox2D ============
// Transient object that represents a 2D bounding box. A 2D bounding box is a rectangle box that is parallel
// to the x and y axes. The box is defined by a minimum point (smallest x-y values) and maximum point (largest x-y values).
// This object is a wrapper for these points and serves as a way to pass bounding box information
// in and out of functions. It also provides some convenience function when working with the bounding box data.
// They are created statically using the create method of the BoundingBox2D class.
interface BoundingBox2D {
    cast(object: Object): BoundingBox2D;

    // Gets and sets the minimum point of the box.
    minPoint: Point2D;

    // Gets and sets the maximum point of the box.
    maxPoint: Point2D;

    // Creates a transient bounding box object.
    // minPoint : The minimum point of the box.
    // maxPoint : The maximum point of the box.
    // Returns the new bounding box.
    create(minPoint: Point2D, maxPoint: Point2D): BoundingBox2D;

    // Determines if the specified point lies within the bounding box.
    // point : The point to test containment with.
    // Returns true if the point lies within the bounding box.
    contains(point: Point2D): boolean;

    // Expand this bounding box to contain the specified point.
    // point : The point to expand the box to.
    // Returns true if successful.
    expand(point: Point2D): boolean;

    // Test if this bounding box intersects with the specified bounding box.
    // boundingBox : The bounding box to test intersection with.
    // Returns true if the bounding boxes intersect.
    intersects(boundingBox: BoundingBox2D): boolean;

    // Create a copy of this bounding box.
    // Returns the new bounding box copy.
    copy(): BoundingBox2D;

    // Combines this bounding box with the input bounding box. If the input
    // bounding box extends outside this bounding box then this bounding box will
    // be extended to encompass both of the original bounding boxes.
    // boundingBox : The other bounding box. It is not edited but is used to extend the boundaries
    // of the bounding box the method is being called on.
    // Returns true if the combine was successful.
    combine(boundingBox: BoundingBox2D): boolean;
}

//=========== BoundingBox3D ============
// Transient object that represents a 3D bounding box.
// It defines a rectangular box whose sides are parallel to the model space x, y, and z
// planes. Because of the fixed orientation of the box it can be fully defined
// by two points at opposing corners; the min and max points. This object is usually
// used to provide a rough approximation of the volume in space that an entity occupies.
// It also provides some convenience function when working with the bounding box data.
// They are created statically using the create method of the BoundingBox3D class.
interface BoundingBox3D {
    cast(object: Object): BoundingBox3D;

    // Gets and sets the minimum point corner of the box.
    minPoint: Point3D;

    // Gets and sets the maximum point corner of the box.
    maxPoint: Point3D;

    // Creates a transient bounding box object. This object is created statically using the BoundingBox3D.create method.
    // minPoint : The point that defines the minimum corner of the bounding box.
    // maxPoint : The point that defines the maximum corner of the bounding box.
    // Returns the newly created bounding box or null if the creation failed.
    create(minPoint: Point3D, maxPoint: Point3D): BoundingBox3D;

    // Determines if the specified point is within the bound box.
    // point : The point you want to check to see if it's in the bounding box.
    // Returns true if the point is within the bounding box.
    contains(point: Point3D): boolean;

    // Expands the size of bounding box to include the specified point.
    // point : The point to include within the bounding box.
    // Returns true if the expansion was successful.
    expand(point: Point3D): boolean;

    // Determines if the two bounding boxes intersect.
    // boundingBox : The other bounding box to check for intersection with.
    // Returns true if the two boxes intersect.
    intersects(boundingBox: BoundingBox3D): boolean;

    // Creates an independent copy of this bounding box.
    // Returns the new bounding box or null if the copy failed.
    copy(): BoundingBox3D;

    // Combines this bounding box with the input bounding box. If the input
    // bounding box extends outside this bounding box then this bounding box will
    // be extended to encompass both of the original bounding boxes.
    // boundingBox : The other bounding box. It is not edited but is used to extend the boundaries
    // of the bounding box the method is being called on.
    // Returns true if the combine was successful.
    combine(boundingBox: BoundingBox3D): boolean;
}

//=========== Curve2D ============
// The base class for all 2D transient geometry classes.
interface Curve2D {
    cast(object: Object): Curve2D;

    //     // Returns the type of geometry this curve represents.
    //     Object.defineProperty(adsk.core.Curve2D.prototype, 'curveType', {
    //         get : function () {
    //             var result = this._execute('curveType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns an evaluator object that lets you perform additional evaluations on the curve.
    //     Object.defineProperty(adsk.core.Curve2D.prototype, 'evaluator', {
    //         get : function () {
    //             var result = this._execute('evaluator');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CurveEvaluator2D) : null;
    //         }
    //     });

    //     // Transforms this curve in 2D space.
    //     // matrix : A 2D matrix that defines the transform to apply to the curve.
    //     // Return true if the transform was successful.
    //     adsk.core.Curve2D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix2D)) { throw new TypeError('matrix must be a adsk.core.Matrix2D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };
}

//     //=========== Curve2DTypes ============
//     // The different types of 2D curves.
//     adsk.core.Curve2DTypes = {
//         Line2DCurveType : 0,
//         Arc2DCurveType : 1,
//         Circle2DCurveType : 2,
//         Ellipse2DCurveType : 3,
//         EllipticalArc2DCurveType : 4,
//         InfiniteLine2DCurveType : 5,
//         NurbsCurve2DCurveType : 6
//     };

//=========== Curve3D ============
// The base class for all 3D transient geometry classes.
interface Curve3D {
    cast(object: Object): Curve3D;

    //     // Returns the type of geometry this curve represents.
    //     Object.defineProperty(adsk.core.Curve3D.prototype, 'curveType', {
    //         get : function () {
    //             var result = this._execute('curveType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns an evaluator object that lets you perform additional evaluations on the curve.
    //     Object.defineProperty(adsk.core.Curve3D.prototype, 'evaluator', {
    //         get : function () {
    //             var result = this._execute('evaluator');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CurveEvaluator3D) : null;
    //         }
    //     });

    //     // Transforms this curve in 3D space.
    //     // matrix : A 3D matrix that defines the transform to apply to the curve.
    //     // Return true if the transform was successful.
    //     adsk.core.Curve3D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix3D)) { throw new TypeError('matrix must be a adsk.core.Matrix3D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };
}

//     //=========== Curve3DTypes ============
//     // The different types of 3D curves.
//     adsk.core.Curve3DTypes = {
//         Line3DCurveType : 0,
//         Arc3DCurveType : 1,
//         Circle3DCurveType : 2,
//         Ellipse3DCurveType : 3,
//         EllipticalArc3DCurveType : 4,
//         InfiniteLine3DCurveType : 5,
//         NurbsCurve3DCurveType : 6
//     };

//=========== CurveEvaluator2D ============
// 2D curve evaluator that is obtained from a transient curve and allows you to perform
// various evaluations on the curve.
interface CurveEvaluator2D {
    cast(object: Object): CurveEvaluator2D;

    //     // Get the curvature values at a number of parameter positions on the curve.
    //     // parameters : The array of parameter positions to return curvature information at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // directions : The output array of the direction of the curvature at each position on the curve.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // curvatures : The output array of the magnitude of the curvature at the position on the curve.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // Returns true if the curvatures were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getCurvatures = function (parameters, directions, curvatures) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof directions !== 'object') { throw new TypeError('directions must be an object'); }
    //         if (typeof curvatures !== 'object') { throw new TypeError('curvatures must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             directions : null,
    //             curvatures : null
    //         };
    //         var result = this._execute('getCurvatures', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.directions)) {
    //                 var directionsIter;
    //                 directions.value = [];
    //                 for (directionsIter = 0; directionsIter < result.outargs.directions.length; ++directionsIter) {
    //                     directions.value[directionsIter] = (result.outargs.directions[directionsIter] !== undefined) ? adsk.createObject(result.outargs.directions[directionsIter], adsk.core.Vector2D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.curvatures)) {
    //                 var curvaturesIter;
    //                 curvatures.value = [];
    //                 for (curvaturesIter = 0; curvaturesIter < result.outargs.curvatures.length; ++curvaturesIter) {
    //                     curvatures.value[curvaturesIter] = (result.outargs.curvatures[curvaturesIter] !== undefined) ? result.outargs.curvatures[curvaturesIter] : undefined;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the curvature value at a parameter position on the curve.
    //     // parameter : The parameter position to return the curvature information at.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // direction : The output direction of the curvature at the position on the curve.
    //     // curvature : The output magnitude of the curvature at the position on the curve.
    //     // Returns true if the curvature was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getCurvature = function (parameter, direction, curvature) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof direction !== 'object') { throw new TypeError('direction must be an object'); }
    //         if (typeof curvature !== 'object') { throw new TypeError('curvature must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             direction : null,
    //             curvature : null
    //         };
    //         var result = this._execute('getCurvature', args);
    //         if (result && result.outargs) {
    //             direction.value = (result.outargs.direction !== undefined) ? adsk.createObject(result.outargs.direction, adsk.core.Vector2D) : null;
    //             curvature.value = (result.outargs.curvature !== undefined) ? result.outargs.curvature : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the tangent to the curve at a number of parameter positions on the curve.
    //     // parameters : The array of parameter positions to return the tangent at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // tangents : The output array of tangent vectors for each position on the curve.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // Returns true if the tangents were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getTangents = function (parameters, tangents) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof tangents !== 'object') { throw new TypeError('tangents must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             tangents : null
    //         };
    //         var result = this._execute('getTangents', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.tangents)) {
    //                 var tangentsIter;
    //                 tangents.value = [];
    //                 for (tangentsIter = 0; tangentsIter < result.outargs.tangents.length; ++tangentsIter) {
    //                     tangents.value[tangentsIter] = (result.outargs.tangents[tangentsIter] !== undefined) ? adsk.createObject(result.outargs.tangents[tangentsIter], adsk.core.Vector2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the tangent to the curve at a parameter position on the curve.
    //     // parameter : The parameter position to return the tangent at.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // tangent : The output tangent vector at the curve position.
    //     // Returns true if the tangent was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getTangent = function (parameter, tangent) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof tangent !== 'object') { throw new TypeError('tangent must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             tangent : null
    //         };
    //         var result = this._execute('getTangent', args);
    //         if (result && result.outargs) {
    //             tangent.value = (result.outargs.tangent !== undefined) ? adsk.createObject(result.outargs.tangent, adsk.core.Vector2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the end points of the curve.
    //     // startPoint : The output start point of the curve. If the curve is unbounded at the start, this value will be null.
    //     // endPoint : The output end point of the curve. If the curve is unbounded at the end, this value will be null.
    //     // Returns true if the end points were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getEndPoints = function (startPoint, endPoint) {
    //         if (typeof startPoint !== 'object') { throw new TypeError('startPoint must be an object'); }
    //         if (typeof endPoint !== 'object') { throw new TypeError('endPoint must be an object'); }
    //         var args = {
    //             startPoint : null,
    //             endPoint : null
    //         };
    //         var result = this._execute('getEndPoints', args);
    //         if (result && result.outargs) {
    //             startPoint.value = (result.outargs.startPoint !== undefined) ? adsk.createObject(result.outargs.startPoint, adsk.core.Point2D) : null;
    //             endPoint.value = (result.outargs.endPoint !== undefined) ? adsk.createObject(result.outargs.endPoint, adsk.core.Point2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the length of the curve between two parameter positions on the curve.
    //     // fromParameter : The parameter position to measure the curve length from.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // toParameter : The parameter position to measure the curve length to.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // length : The output curve length between the from and to parameter positions on the curve.
    //     // Returns true if the length was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getLengthAtParameter = function (fromParameter, toParameter, length) {
    //         if (!isFinite(fromParameter)) { throw new TypeError('fromParameter must be a number'); }
    //         if (!isFinite(toParameter)) { throw new TypeError('toParameter must be a number'); }
    //         if (typeof length !== 'object') { throw new TypeError('length must be an object'); }
    //         var args = {
    //             fromParameter : Number(fromParameter),
    //             toParameter : Number(toParameter),
    //             length : null
    //         };
    //         var result = this._execute('getLengthAtParameter', args);
    //         if (result && result.outargs) {
    //             length.value = (result.outargs.length !== undefined) ? result.outargs.length : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter position on the curve that is the specified curve length from the specified starting parameter position.
    //     // fromParameter : The parameter position to start measuring the curve length from.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // length : The curve length to offset the from parameter by.
    //     // A negative length value will offset in the negative parameter direction.
    //     // parameter : The output parameter value that is the specified curve length from the starting parameter position.
    //     // Returns true if the parameter was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getParameterAtLength = function (fromParameter, length, parameter) {
    //         if (!isFinite(fromParameter)) { throw new TypeError('fromParameter must be a number'); }
    //         if (!isFinite(length)) { throw new TypeError('length must be a number'); }
    //         if (typeof parameter !== 'object') { throw new TypeError('parameter must be an object'); }
    //         var args = {
    //             fromParameter : Number(fromParameter),
    //             length : Number(length),
    //             parameter : null
    //         };
    //         var result = this._execute('getParameterAtLength', args);
    //         if (result && result.outargs) {
    //             parameter.value = (result.outargs.parameter !== undefined) ? result.outargs.parameter : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter positions that correspond to a set of points on the curve.
    //     // For reliable results, the points should lie on the curve within model tolerance.
    //     // If the points do not lie on the curve, the parameter of the nearest point on the curve will generally be returned.
    //     // points : An array of points to get the curve parameter values at.
    //     // parameters : The output array of parameter positions corresponding to the set of points.
    //     // The length of this array will be equal to the length of the points array specified.
    //     // Returns true if the parameters were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getParametersAtPoints = function (points, parameters) {
    //         if (!Array.isArray(points)) { throw new TypeError('points must be an array'); }
    //         var pointsLength = points.length;
    //         var pointsIt;
    //         for (pointsIt = 0; pointsIt < pointsLength; ++pointsIt) {
    //             if (points[pointsIt] !== null && !(points[pointsIt] instanceof adsk.core.Point2D)) { throw new TypeError('points[pointsIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof parameters !== 'object') { throw new TypeError('parameters must be an object'); }
    //         var args = {
    //             points : points,
    //             parameters : null
    //         };
    //         var result = this._execute('getParametersAtPoints', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.parameters)) {
    //                 var parametersIter;
    //                 parameters.value = [];
    //                 for (parametersIter = 0; parametersIter < result.outargs.parameters.length; ++parametersIter) {
    //                     parameters.value[parametersIter] = (result.outargs.parameters[parametersIter] !== undefined) ? result.outargs.parameters[parametersIter] : undefined;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter position that correspond to a point on the curve.
    //     // For reliable results, the point should lie on the curve within model tolerance.
    //     // If the point does not lie on the curve, the parameter of the nearest point on the curve will generally be returned.
    //     // point : The point to get the curve parameter value at.
    //     // parameter : The output parameter position corresponding to the point.
    //     // Returns true of the parameter was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getParameterAtPoint = function (point, parameter) {
    //         if (point !== null && !(point instanceof adsk.core.Point2D)) { throw new TypeError('point must be a adsk.core.Point2D'); }
    //         if (typeof parameter !== 'object') { throw new TypeError('parameter must be an object'); }
    //         var args = {
    //             point : (point === null ? point : point.handle),
    //             parameter : null
    //         };
    //         var result = this._execute('getParameterAtPoint', args);
    //         if (result && result.outargs) {
    //             parameter.value = (result.outargs.parameter !== undefined) ? result.outargs.parameter : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parametric range of the curve.
    //     // startParameter : The output lower bound of the parameter range.
    //     // endParameter : The output upper bound of the parameter range.
    //     // Returns true if the curve is bounded and the parameter extents were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getParameterExtents = function (startParameter, endParameter) {
    //         if (typeof startParameter !== 'object') { throw new TypeError('startParameter must be an object'); }
    //         if (typeof endParameter !== 'object') { throw new TypeError('endParameter must be an object'); }
    //         var args = {
    //             startParameter : null,
    //             endParameter : null
    //         };
    //         var result = this._execute('getParameterExtents', args);
    //         if (result && result.outargs) {
    //             startParameter.value = (result.outargs.startParameter !== undefined) ? result.outargs.startParameter : undefined;
    //             endParameter.value = (result.outargs.endParameter !== undefined) ? result.outargs.endParameter : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the points on the curve that correspond to evaluating a set of parameter positions on the curve.
    //     // parameters : The array of parameter positions to evaluate the curve position at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // points : The output array of curve positions corresponding to evaluating the curve at that parameter position.
    //     // The length of this array will be equal to the length of the parameters array specified.
    //     // Returns true if the points were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getPointsAtParameters = function (parameters, points) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof points !== 'object') { throw new TypeError('points must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             points : null
    //         };
    //         var result = this._execute('getPointsAtParameters', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.points)) {
    //                 var pointsIter;
    //                 points.value = [];
    //                 for (pointsIter = 0; pointsIter < result.outargs.points.length; ++pointsIter) {
    //                     points.value[pointsIter] = (result.outargs.points[pointsIter] !== undefined) ? adsk.createObject(result.outargs.points[pointsIter], adsk.core.Point2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the point on the curve that corresponds to evaluating a parameter position on the curve.
    //     // parameter : The parameter position to evaluate the curve position at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // point : The output curve position corresponding to evaluating the curve at that parameter position.
    //     // Returns true if the point was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getPointAtParameter = function (parameter, point) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof point !== 'object') { throw new TypeError('point must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             point : null
    //         };
    //         var result = this._execute('getPointAtParameter', args);
    //         if (result && result.outargs) {
    //             point.value = (result.outargs.point !== undefined) ? adsk.createObject(result.outargs.point, adsk.core.Point2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the first derivatives of the curve at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the curve first derivative at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // firstDerivatives : The output array of first derivative vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the first derivatives were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getFirstDerivatives = function (parameters, firstDerivatives) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof firstDerivatives !== 'object') { throw new TypeError('firstDerivatives must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             firstDerivatives : null
    //         };
    //         var result = this._execute('getFirstDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.firstDerivatives)) {
    //                 var firstDerivativesIter;
    //                 firstDerivatives.value = [];
    //                 for (firstDerivativesIter = 0; firstDerivativesIter < result.outargs.firstDerivatives.length; ++firstDerivativesIter) {
    //                     firstDerivatives.value[firstDerivativesIter] = (result.outargs.firstDerivatives[firstDerivativesIter] !== undefined) ? adsk.createObject(result.outargs.firstDerivatives[firstDerivativesIter], adsk.core.Vector2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the first derivative of the curve at the specified parameter position.
    //     // parameter : The parameter position to get the curve first derivative at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // firstDerivative : The output first derivative vector at the parameter position specified.
    //     // Returns true if the first derivative was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getFirstDerivative = function (parameter, firstDerivative) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof firstDerivative !== 'object') { throw new TypeError('firstDerivative must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             firstDerivative : null
    //         };
    //         var result = this._execute('getFirstDerivative', args);
    //         if (result && result.outargs) {
    //             firstDerivative.value = (result.outargs.firstDerivative !== undefined) ? adsk.createObject(result.outargs.firstDerivative, adsk.core.Vector2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the second derivatives of the curve at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the curve second derivative at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // secondDerivatives : The output array of second derivative vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the second derivatives were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getSecondDerivatives = function (parameters, secondDerivatives) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof secondDerivatives !== 'object') { throw new TypeError('secondDerivatives must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             secondDerivatives : null
    //         };
    //         var result = this._execute('getSecondDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.secondDerivatives)) {
    //                 var secondDerivativesIter;
    //                 secondDerivatives.value = [];
    //                 for (secondDerivativesIter = 0; secondDerivativesIter < result.outargs.secondDerivatives.length; ++secondDerivativesIter) {
    //                     secondDerivatives.value[secondDerivativesIter] = (result.outargs.secondDerivatives[secondDerivativesIter] !== undefined) ? adsk.createObject(result.outargs.secondDerivatives[secondDerivativesIter], adsk.core.Vector2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the second derivative of the curve at the specified parameter position.
    //     // parameter : The parameter position to get the curve second derivative at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // secondDerivative : The output second derivative vector at the parameter position specified.
    //     // Returns true if the second derivative was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getSecondDerivative = function (parameter, secondDerivative) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof secondDerivative !== 'object') { throw new TypeError('secondDerivative must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             secondDerivative : null
    //         };
    //         var result = this._execute('getSecondDerivative', args);
    //         if (result && result.outargs) {
    //             secondDerivative.value = (result.outargs.secondDerivative !== undefined) ? adsk.createObject(result.outargs.secondDerivative, adsk.core.Vector2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the third derivatives of the curve at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the curve third derivative at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // thirdDerivatives : The output array of third derivative vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the third derivatives were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getThirdDerivatives = function (parameters, thirdDerivatives) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof thirdDerivatives !== 'object') { throw new TypeError('thirdDerivatives must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             thirdDerivatives : null
    //         };
    //         var result = this._execute('getThirdDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.thirdDerivatives)) {
    //                 var thirdDerivativesIter;
    //                 thirdDerivatives.value = [];
    //                 for (thirdDerivativesIter = 0; thirdDerivativesIter < result.outargs.thirdDerivatives.length; ++thirdDerivativesIter) {
    //                     thirdDerivatives.value[thirdDerivativesIter] = (result.outargs.thirdDerivatives[thirdDerivativesIter] !== undefined) ? adsk.createObject(result.outargs.thirdDerivatives[thirdDerivativesIter], adsk.core.Vector2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the third derivative of the curve at the specified parameter position.
    //     // parameter : The parameter position to get the curve third derivative at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // thirdDerivative : The output third derivative vector at the parameter position specified.
    //     // Returns true if the third derivative was successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getThirdDerivative = function (parameter, thirdDerivative) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof thirdDerivative !== 'object') { throw new TypeError('thirdDerivative must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             thirdDerivative : null
    //         };
    //         var result = this._execute('getThirdDerivative', args);
    //         if (result && result.outargs) {
    //             thirdDerivative.value = (result.outargs.thirdDerivative !== undefined) ? adsk.createObject(result.outargs.thirdDerivative, adsk.core.Vector2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get a sequence of points between two curve parameter positions.
    //     // The points will be a linear interpolation along the curve between these two
    //     // parameter positions where the maximum deviation between the curve and each line
    //     // segment will not exceed the specified tolerance value.
    //     // fromParameter : The starting parameter position to interpolate points from.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // toParameter : The ending parameter position to interpolate points to.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // tolerance : The maximum distance tolerance between the curve and the linear interpolation.
    //     // vertexCoordinates : The output array of linear interpolation points.
    //     // Returns true if the interpolation points were successfully returned.
    //     adsk.core.CurveEvaluator2D.prototype.getStrokes = function (fromParameter, toParameter, tolerance, vertexCoordinates) {
    //         if (!isFinite(fromParameter)) { throw new TypeError('fromParameter must be a number'); }
    //         if (!isFinite(toParameter)) { throw new TypeError('toParameter must be a number'); }
    //         if (!isFinite(tolerance)) { throw new TypeError('tolerance must be a number'); }
    //         if (typeof vertexCoordinates !== 'object') { throw new TypeError('vertexCoordinates must be an object'); }
    //         var args = {
    //             fromParameter : Number(fromParameter),
    //             toParameter : Number(toParameter),
    //             tolerance : Number(tolerance),
    //             vertexCoordinates : null
    //         };
    //         var result = this._execute('getStrokes', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.vertexCoordinates)) {
    //                 var vertexCoordinatesIter;
    //                 vertexCoordinates.value = [];
    //                 for (vertexCoordinatesIter = 0; vertexCoordinatesIter < result.outargs.vertexCoordinates.length; ++vertexCoordinatesIter) {
    //                     vertexCoordinates.value[vertexCoordinatesIter] = (result.outargs.vertexCoordinates[vertexCoordinatesIter] !== undefined) ? adsk.createObject(result.outargs.vertexCoordinates[vertexCoordinatesIter], adsk.core.Point2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };
}

//=========== CurveEvaluator3D ============
// 3D curve evaluator that is obtained from a transient curve and allows you to perform
// various evaluations on the curve.
interface CurveEvaluator3D {
    cast(object: Object): CurveEvaluator3D;

    //     // Get the curvature values at a number of parameter positions on the curve.
    //     // parameters : The array of parameter positions to return curvature information at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // directions : The output array of the direction of the curvature at each position on the curve.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // curvatures : The output array of the magnitude of the curvature at the position on the curve.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // Returns true if the curvatures were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getCurvatures = function (parameters, directions, curvatures) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof directions !== 'object') { throw new TypeError('directions must be an object'); }
    //         if (typeof curvatures !== 'object') { throw new TypeError('curvatures must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             directions : null,
    //             curvatures : null
    //         };
    //         var result = this._execute('getCurvatures', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.directions)) {
    //                 var directionsIter;
    //                 directions.value = [];
    //                 for (directionsIter = 0; directionsIter < result.outargs.directions.length; ++directionsIter) {
    //                     directions.value[directionsIter] = (result.outargs.directions[directionsIter] !== undefined) ? adsk.createObject(result.outargs.directions[directionsIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.curvatures)) {
    //                 var curvaturesIter;
    //                 curvatures.value = [];
    //                 for (curvaturesIter = 0; curvaturesIter < result.outargs.curvatures.length; ++curvaturesIter) {
    //                     curvatures.value[curvaturesIter] = (result.outargs.curvatures[curvaturesIter] !== undefined) ? result.outargs.curvatures[curvaturesIter] : undefined;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the curvature value at a parameter position on the curve.
    //     // parameter : The parameter position to return the curvature information at.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // direction : The output direction of the curvature at the position on the curve.
    //     // curvature : The output magnitude of the curvature at the position on the curve.
    //     // Returns true if the curvature was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getCurvature = function (parameter, direction, curvature) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof direction !== 'object') { throw new TypeError('direction must be an object'); }
    //         if (typeof curvature !== 'object') { throw new TypeError('curvature must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             direction : null,
    //             curvature : null
    //         };
    //         var result = this._execute('getCurvature', args);
    //         if (result && result.outargs) {
    //             direction.value = (result.outargs.direction !== undefined) ? adsk.createObject(result.outargs.direction, adsk.core.Vector3D) : null;
    //             curvature.value = (result.outargs.curvature !== undefined) ? result.outargs.curvature : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the end points of the curve.
    //     // startPoint : The output start point of the curve. If the curve is unbounded at the start, this value will be null.
    //     // endPoint : The output end point of the curve. If the curve is unbounded at the end, this value will be null.
    //     // Returns true if the end points were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getEndPoints = function (startPoint, endPoint) {
    //         if (typeof startPoint !== 'object') { throw new TypeError('startPoint must be an object'); }
    //         if (typeof endPoint !== 'object') { throw new TypeError('endPoint must be an object'); }
    //         var args = {
    //             startPoint : null,
    //             endPoint : null
    //         };
    //         var result = this._execute('getEndPoints', args);
    //         if (result && result.outargs) {
    //             startPoint.value = (result.outargs.startPoint !== undefined) ? adsk.createObject(result.outargs.startPoint, adsk.core.Point3D) : null;
    //             endPoint.value = (result.outargs.endPoint !== undefined) ? adsk.createObject(result.outargs.endPoint, adsk.core.Point3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the length of the curve between two parameter positions on the curve.
    //     // fromParameter : The parameter position to measure the curve length from.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // toParameter : The parameter position to measure the curve length to.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // length : The output curve length between the from and to parameter positions on the curve.
    //     // Returns true if the length was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getLengthAtParameter = function (fromParameter, toParameter, length) {
    //         if (!isFinite(fromParameter)) { throw new TypeError('fromParameter must be a number'); }
    //         if (!isFinite(toParameter)) { throw new TypeError('toParameter must be a number'); }
    //         if (typeof length !== 'object') { throw new TypeError('length must be an object'); }
    //         var args = {
    //             fromParameter : Number(fromParameter),
    //             toParameter : Number(toParameter),
    //             length : null
    //         };
    //         var result = this._execute('getLengthAtParameter', args);
    //         if (result && result.outargs) {
    //             length.value = (result.outargs.length !== undefined) ? result.outargs.length : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter position on the curve that is the specified curve length from the specified starting parameter position.
    //     // fromParameter : The parameter position to start measuring the curve length from.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // length : The curve length to offset the from parameter by.
    //     // A negative length value will offset in the negative parameter direction.
    //     // parameter : The output parameter value that is the specified curve length from the starting parameter position.
    //     // Returns true if the parameter was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getParameterAtLength = function (fromParameter, length, parameter) {
    //         if (!isFinite(fromParameter)) { throw new TypeError('fromParameter must be a number'); }
    //         if (!isFinite(length)) { throw new TypeError('length must be a number'); }
    //         if (typeof parameter !== 'object') { throw new TypeError('parameter must be an object'); }
    //         var args = {
    //             fromParameter : Number(fromParameter),
    //             length : Number(length),
    //             parameter : null
    //         };
    //         var result = this._execute('getParameterAtLength', args);
    //         if (result && result.outargs) {
    //             parameter.value = (result.outargs.parameter !== undefined) ? result.outargs.parameter : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter positions that correspond to a set of points on the curve.
    //     // For reliable results, the points should lie on the curve within model tolerance.
    //     // If the points do not lie on the curve, the parameter of the nearest point on the curve will generally be returned.
    //     // points : An array of points to get the curve parameter values at.
    //     // parameters : The output array of parameter positions corresponding to the set of points.
    //     // The length of this array will be equal to the length of the points array specified.
    //     // Returns true if the parameters were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getParametersAtPoints = function (points, parameters) {
    //         if (!Array.isArray(points)) { throw new TypeError('points must be an array'); }
    //         var pointsLength = points.length;
    //         var pointsIt;
    //         for (pointsIt = 0; pointsIt < pointsLength; ++pointsIt) {
    //             if (points[pointsIt] !== null && !(points[pointsIt] instanceof adsk.core.Point3D)) { throw new TypeError('points[pointsIt] must be a adsk.core.Point3D'); }
    //         }
    //         if (typeof parameters !== 'object') { throw new TypeError('parameters must be an object'); }
    //         var args = {
    //             points : points,
    //             parameters : null
    //         };
    //         var result = this._execute('getParametersAtPoints', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.parameters)) {
    //                 var parametersIter;
    //                 parameters.value = [];
    //                 for (parametersIter = 0; parametersIter < result.outargs.parameters.length; ++parametersIter) {
    //                     parameters.value[parametersIter] = (result.outargs.parameters[parametersIter] !== undefined) ? result.outargs.parameters[parametersIter] : undefined;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter position that correspond to a point on the curve.
    //     // For reliable results, the point should lie on the curve within model tolerance.
    //     // If the point does not lie on the curve, the parameter of the nearest point on the curve will generally be returned.
    //     // point : The point to get the curve parameter value at.
    //     // parameter : The output parameter position corresponding to the point.
    //     // Returns true of the parameter was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getParameterAtPoint = function (point, parameter) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         if (typeof parameter !== 'object') { throw new TypeError('parameter must be an object'); }
    //         var args = {
    //             point : (point === null ? point : point.handle),
    //             parameter : null
    //         };
    //         var result = this._execute('getParameterAtPoint', args);
    //         if (result && result.outargs) {
    //             parameter.value = (result.outargs.parameter !== undefined) ? result.outargs.parameter : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parametric range of the curve.
    //     // startParameter : The output lower bound of the parameter range.
    //     // endParameter : The output upper bound of the parameter range.
    //     // Returns true if the curve is bounded and the parameter extents were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getParameterExtents = function (startParameter, endParameter) {
    //         if (typeof startParameter !== 'object') { throw new TypeError('startParameter must be an object'); }
    //         if (typeof endParameter !== 'object') { throw new TypeError('endParameter must be an object'); }
    //         var args = {
    //             startParameter : null,
    //             endParameter : null
    //         };
    //         var result = this._execute('getParameterExtents', args);
    //         if (result && result.outargs) {
    //             startParameter.value = (result.outargs.startParameter !== undefined) ? result.outargs.startParameter : undefined;
    //             endParameter.value = (result.outargs.endParameter !== undefined) ? result.outargs.endParameter : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the points on the curve that correspond to evaluating a set of parameter positions on the curve.
    //     // parameters : The array of parameter positions to evaluate the curve position at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // points : The output array of curve positions corresponding to evaluating the curve at that parameter position.
    //     // The length of this array will be equal to the length of the parameters array specified.
    //     // Returns true if the points were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getPointsAtParameters = function (parameters, points) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof points !== 'object') { throw new TypeError('points must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             points : null
    //         };
    //         var result = this._execute('getPointsAtParameters', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.points)) {
    //                 var pointsIter;
    //                 points.value = [];
    //                 for (pointsIter = 0; pointsIter < result.outargs.points.length; ++pointsIter) {
    //                     points.value[pointsIter] = (result.outargs.points[pointsIter] !== undefined) ? adsk.createObject(result.outargs.points[pointsIter], adsk.core.Point3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the point on the curve that corresponds to evaluating a parameter position on the curve.
    //     // parameter : The parameter position to evaluate the curve position at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // point : The output curve position corresponding to evaluating the curve at that parameter position.
    //     // Returns true if the point was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getPointAtParameter = function (parameter, point) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof point !== 'object') { throw new TypeError('point must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             point : null
    //         };
    //         var result = this._execute('getPointAtParameter', args);
    //         if (result && result.outargs) {
    //             point.value = (result.outargs.point !== undefined) ? adsk.createObject(result.outargs.point, adsk.core.Point3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the first derivatives of the curve at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the curve first derivative at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // firstDerivatives : The output array of first derivative vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the first derivatives were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getFirstDerivatives = function (parameters, firstDerivatives) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof firstDerivatives !== 'object') { throw new TypeError('firstDerivatives must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             firstDerivatives : null
    //         };
    //         var result = this._execute('getFirstDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.firstDerivatives)) {
    //                 var firstDerivativesIter;
    //                 firstDerivatives.value = [];
    //                 for (firstDerivativesIter = 0; firstDerivativesIter < result.outargs.firstDerivatives.length; ++firstDerivativesIter) {
    //                     firstDerivatives.value[firstDerivativesIter] = (result.outargs.firstDerivatives[firstDerivativesIter] !== undefined) ? adsk.createObject(result.outargs.firstDerivatives[firstDerivativesIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the first derivative of the curve at the specified parameter position.
    //     // parameter : The parameter position to get the curve first derivative at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // firstDerivative : The output first derivative vector at the parameter position specified.
    //     // Returns true if the first derivative was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getFirstDerivative = function (parameter, firstDerivative) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof firstDerivative !== 'object') { throw new TypeError('firstDerivative must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             firstDerivative : null
    //         };
    //         var result = this._execute('getFirstDerivative', args);
    //         if (result && result.outargs) {
    //             firstDerivative.value = (result.outargs.firstDerivative !== undefined) ? adsk.createObject(result.outargs.firstDerivative, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the second derivatives of the curve at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the curve second derivative at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // secondDerivatives : The output array of second derivative vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the second derivatives were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getSecondDerivatives = function (parameters, secondDerivatives) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof secondDerivatives !== 'object') { throw new TypeError('secondDerivatives must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             secondDerivatives : null
    //         };
    //         var result = this._execute('getSecondDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.secondDerivatives)) {
    //                 var secondDerivativesIter;
    //                 secondDerivatives.value = [];
    //                 for (secondDerivativesIter = 0; secondDerivativesIter < result.outargs.secondDerivatives.length; ++secondDerivativesIter) {
    //                     secondDerivatives.value[secondDerivativesIter] = (result.outargs.secondDerivatives[secondDerivativesIter] !== undefined) ? adsk.createObject(result.outargs.secondDerivatives[secondDerivativesIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the second derivative of the curve at the specified parameter position.
    //     // parameter : The parameter position to get the curve second derivative at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // secondDerivative : The output second derivative vector at the parameter position specified.
    //     // Returns true if the second derivative was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getSecondDerivative = function (parameter, secondDerivative) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof secondDerivative !== 'object') { throw new TypeError('secondDerivative must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             secondDerivative : null
    //         };
    //         var result = this._execute('getSecondDerivative', args);
    //         if (result && result.outargs) {
    //             secondDerivative.value = (result.outargs.secondDerivative !== undefined) ? adsk.createObject(result.outargs.secondDerivative, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the third derivatives of the curve at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the curve third derivative at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // thirdDerivatives : The output array of third derivative vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the third derivatives were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getThirdDerivatives = function (parameters, thirdDerivatives) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof thirdDerivatives !== 'object') { throw new TypeError('thirdDerivatives must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             thirdDerivatives : null
    //         };
    //         var result = this._execute('getThirdDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.thirdDerivatives)) {
    //                 var thirdDerivativesIter;
    //                 thirdDerivatives.value = [];
    //                 for (thirdDerivativesIter = 0; thirdDerivativesIter < result.outargs.thirdDerivatives.length; ++thirdDerivativesIter) {
    //                     thirdDerivatives.value[thirdDerivativesIter] = (result.outargs.thirdDerivatives[thirdDerivativesIter] !== undefined) ? adsk.createObject(result.outargs.thirdDerivatives[thirdDerivativesIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the third derivative of the curve at the specified parameter position.
    //     // parameter : The parameter position to get the curve third derivative at.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // thirdDerivative : The output third derivative vector at the parameter position specified.
    //     // Returns true if the third derivative was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getThirdDerivative = function (parameter, thirdDerivative) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof thirdDerivative !== 'object') { throw new TypeError('thirdDerivative must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             thirdDerivative : null
    //         };
    //         var result = this._execute('getThirdDerivative', args);
    //         if (result && result.outargs) {
    //             thirdDerivative.value = (result.outargs.thirdDerivative !== undefined) ? adsk.createObject(result.outargs.thirdDerivative, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get a sequence of points between two curve parameter positions.
    //     // The points will be a linear interpolation along the curve between these two
    //     // parameter positions where the maximum deviation between the curve and each line
    //     // segment will not exceed the specified tolerance value.
    //     // fromParameter : The starting parameter position to interpolate points from.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // toParameter : The ending parameter position to interpolate points to.
    //     // The parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // tolerance : The maximum distance tolerance between the curve and the linear interpolation.
    //     // vertexCoordinates : The output array of linear interpolation points.
    //     // Returns true if the interpolation points were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getStrokes = function (fromParameter, toParameter, tolerance, vertexCoordinates) {
    //         if (!isFinite(fromParameter)) { throw new TypeError('fromParameter must be a number'); }
    //         if (!isFinite(toParameter)) { throw new TypeError('toParameter must be a number'); }
    //         if (!isFinite(tolerance)) { throw new TypeError('tolerance must be a number'); }
    //         if (typeof vertexCoordinates !== 'object') { throw new TypeError('vertexCoordinates must be an object'); }
    //         var args = {
    //             fromParameter : Number(fromParameter),
    //             toParameter : Number(toParameter),
    //             tolerance : Number(tolerance),
    //             vertexCoordinates : null
    //         };
    //         var result = this._execute('getStrokes', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.vertexCoordinates)) {
    //                 var vertexCoordinatesIter;
    //                 vertexCoordinates.value = [];
    //                 for (vertexCoordinatesIter = 0; vertexCoordinatesIter < result.outargs.vertexCoordinates.length; ++vertexCoordinatesIter) {
    //                     vertexCoordinates.value[vertexCoordinatesIter] = (result.outargs.vertexCoordinates[vertexCoordinatesIter] !== undefined) ? adsk.createObject(result.outargs.vertexCoordinates[vertexCoordinatesIter], adsk.core.Point3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the tangent to the curve at a number of parameter positions on the curve.
    //     // parameters : The array of parameter positions to return the tangent at.
    //     // Each parameter value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // tangents : The output array of tangent vectors for each position on the curve.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // Returns true if the tangents were successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getTangents = function (parameters, tangents) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (!isFinite(parameters[parametersIt])) { throw new TypeError('parameters[parametersIt] must be a number'); }
    //         }
    //         if (typeof tangents !== 'object') { throw new TypeError('tangents must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             tangents : null
    //         };
    //         var result = this._execute('getTangents', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.tangents)) {
    //                 var tangentsIter;
    //                 tangents.value = [];
    //                 for (tangentsIter = 0; tangentsIter < result.outargs.tangents.length; ++tangentsIter) {
    //                     tangents.value[tangentsIter] = (result.outargs.tangents[tangentsIter] !== undefined) ? adsk.createObject(result.outargs.tangents[tangentsIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the tangent to the curve at a parameter position on the curve.
    //     // parameter : The parameter position to return the tangent at.
    //     // This value must be within the range of the parameter extents as provided by getParameterExtents.
    //     // tangent : The output tangent vector at the curve position.
    //     // Returns true if the tangent was successfully returned.
    //     adsk.core.CurveEvaluator3D.prototype.getTangent = function (parameter, tangent) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof tangent !== 'object') { throw new TypeError('tangent must be an object'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             tangent : null
    //         };
    //         var result = this._execute('getTangent', args);
    //         if (result && result.outargs) {
    //             tangent.value = (result.outargs.tangent !== undefined) ? adsk.createObject(result.outargs.tangent, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };
}

//=========== Matrix2D ============
// Transient 2D 3x3 matrix. This object is a wrapper over 2D matrix data and is used as way to pass matrix data
// in and out of the API and as a convenience when operating on matrix data.
// They are created statically using the create method of the Matrix2D class.
interface Matrix2D {
    cast(object: Object): Matrix2D;

    //     // Returns the determinant of the matrix.
    //     // Returns the determinant value of this matrix.
    //     Object.defineProperty(adsk.core.Matrix2D.prototype, 'determinant', {
    //         get : function () {
    //             var result = this._execute('determinant');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 2D matrix (3x3) object. It is initialized as an identity matrix.
    //     // Returns the new matrix.
    //     adsk.core.Matrix2D.create = function () {
    //         var result = adsk.core.Base._executeStatic('adsk.core.Matrix2D', 'create');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix2D) : null;
    //     };

    //     // Resets this matrix to be an identity matrix.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setToIdentity = function () {
    //         var result = this._execute('setToIdentity');
    //         return result ? result.value : undefined;
    //     };

    //     // Invert this matrix.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.invert = function () {
    //         var result = this._execute('invert');
    //         return result ? result.value : undefined;
    //     };

    //     // Creates an independent copy of this matrix.
    //     // Returns the new matrix copy.
    //     adsk.core.Matrix2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix2D) : null;
    //     };

    //     // Transforms this matrix using the input matrix.
    //     // matrix : The transformation matrix.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix2D)) { throw new TypeError('matrix must be a adsk.core.Matrix2D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the value of the specified cell in the 3x3 matrix.
    //     // row : The index of the row. The first row has in index of 0
    //     // column : The index of the column. The first column has an index of 0
    //     // Returns the value at [row][column].
    //     adsk.core.Matrix2D.prototype.getCell = function (row, column) {
    //         if (!isFinite(row)) { throw new TypeError('row must be a number'); }
    //         if (!isFinite(column)) { throw new TypeError('column must be a number'); }
    //         var args = {
    //             row : Number(row),
    //             column : Number(column)
    //         };
    //         var result = this._execute('getCell', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the specified cell in the 3x3 matrix to the specified value.
    //     // row : The index of the row. The first row has in index of 0
    //     // column : The index of the column. The first column has an index of 0
    //     // value : The new value of the cell.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setCell = function (row, column, value) {
    //         if (!isFinite(row)) { throw new TypeError('row must be a number'); }
    //         if (!isFinite(column)) { throw new TypeError('column must be a number'); }
    //         if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //         var args = {
    //             row : Number(row),
    //             column : Number(column),
    //             value : Number(value)
    //         };
    //         var result = this._execute('setCell', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the matrix data as the components that define a coordinate system.
    //     // origin : The output origin point of the coordinate system.
    //     // xAxis : The output x axis direction of the coordinate system.
    //     // yAxis : The output y axis direction of the coordinate system.
    //     adsk.core.Matrix2D.prototype.getAsCoordinateSystem = function (origin, xAxis, yAxis) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof xAxis !== 'object') { throw new TypeError('xAxis must be an object'); }
    //         if (typeof yAxis !== 'object') { throw new TypeError('yAxis must be an object'); }
    //         var args = {
    //             origin : null,
    //             xAxis : null,
    //             yAxis : null
    //         };
    //         var result = this._execute('getAsCoordinateSystem', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point2D) : null;
    //             xAxis.value = (result.outargs.xAxis !== undefined) ? adsk.createObject(result.outargs.xAxis, adsk.core.Vector2D) : null;
    //             yAxis.value = (result.outargs.yAxis !== undefined) ? adsk.createObject(result.outargs.yAxis, adsk.core.Vector2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Returns the contents of the matrix as a 9 element array.
    //     // Returns the array of matrix values.
    //     adsk.core.Matrix2D.prototype.asArray = function () {
    //         var result = this._execute('asArray');
    //         return result ? result.value : undefined;
    //     };

    //     // Reset this matrix to align with a specific coordinate system.
    //     // origin : The origin point of the coordinate system.
    //     // xAxis : The x axis direction of the coordinate system.
    //     // yAxis : The y axis direction of the coordinate system.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setWithCoordinateSystem = function (origin, xAxis, yAxis) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point2D)) { throw new TypeError('origin must be a adsk.core.Point2D'); }
    //         if (xAxis !== null && !(xAxis instanceof adsk.core.Vector2D)) { throw new TypeError('xAxis must be a adsk.core.Vector2D'); }
    //         if (yAxis !== null && !(yAxis instanceof adsk.core.Vector2D)) { throw new TypeError('yAxis must be a adsk.core.Vector2D'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             xAxis : (xAxis === null ? xAxis : xAxis.handle),
    //             yAxis : (yAxis === null ? yAxis : yAxis.handle)
    //         };
    //         var result = this._execute('setWithCoordinateSystem', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the contents of the array using a 9 element array.
    //     // cells : The array of cell values.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setWithArray = function (cells) {
    //         if (!Array.isArray(cells)) { throw new TypeError('cells must be an array'); }
    //         var cellsLength = cells.length;
    //         var cellsIt;
    //         for (cellsIt = 0; cellsIt < cellsLength; ++cellsIt) {
    //             if (!isFinite(cells[cellsIt])) { throw new TypeError('cells[cellsIt] must be a number'); }
    //         }
    //         var args = {
    //             cells : cells
    //         };
    //         var result = this._execute('setWithArray', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Compares this matrix with another matrix and returns True if they're identical.
    //     // matrix : The matrix to compare to.
    //     // Returns true if the matrix is equal to this matrix.
    //     adsk.core.Matrix2D.prototype.isEqualTo = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix2D)) { throw new TypeError('matrix must be a adsk.core.Matrix2D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('isEqualTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets this matrix to be the matrix that maps from the 'from' coordinate system to the 'to' coordinate system.
    //     // fromOrigin : The origin point of the from coordinate system.
    //     // fromXAxis : The x axis direction of the from coordinate system.
    //     // fromYAxis : The y axis direction of the from coordinate system.
    //     // toOrigin : The origin point of the to coordinate system.
    //     // toXAxis : The x axis direction of the to coordinate system.
    //     // toYAxis : The y axis direction of the to coordinate system.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setToAlignCoordinateSystems = function (fromOrigin, fromXAxis, fromYAxis, toOrigin, toXAxis, toYAxis) {
    //         if (fromOrigin !== null && !(fromOrigin instanceof adsk.core.Point2D)) { throw new TypeError('fromOrigin must be a adsk.core.Point2D'); }
    //         if (fromXAxis !== null && !(fromXAxis instanceof adsk.core.Vector2D)) { throw new TypeError('fromXAxis must be a adsk.core.Vector2D'); }
    //         if (fromYAxis !== null && !(fromYAxis instanceof adsk.core.Vector2D)) { throw new TypeError('fromYAxis must be a adsk.core.Vector2D'); }
    //         if (toOrigin !== null && !(toOrigin instanceof adsk.core.Point2D)) { throw new TypeError('toOrigin must be a adsk.core.Point2D'); }
    //         if (toXAxis !== null && !(toXAxis instanceof adsk.core.Vector2D)) { throw new TypeError('toXAxis must be a adsk.core.Vector2D'); }
    //         if (toYAxis !== null && !(toYAxis instanceof adsk.core.Vector2D)) { throw new TypeError('toYAxis must be a adsk.core.Vector2D'); }
    //         var args = {
    //             fromOrigin : (fromOrigin === null ? fromOrigin : fromOrigin.handle),
    //             fromXAxis : (fromXAxis === null ? fromXAxis : fromXAxis.handle),
    //             fromYAxis : (fromYAxis === null ? fromYAxis : fromYAxis.handle),
    //             toOrigin : (toOrigin === null ? toOrigin : toOrigin.handle),
    //             toXAxis : (toXAxis === null ? toXAxis : toXAxis.handle),
    //             toYAxis : (toYAxis === null ? toYAxis : toYAxis.handle)
    //         };
    //         var result = this._execute('setToAlignCoordinateSystems', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets to the matrix of rotation that would align the 'from' vector with the 'to' vector.
    //     // from : The from vector.
    //     // to : The to vector.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setToRotateTo = function (from, to) {
    //         if (from !== null && !(from instanceof adsk.core.Vector2D)) { throw new TypeError('from must be a adsk.core.Vector2D'); }
    //         if (to !== null && !(to instanceof adsk.core.Vector2D)) { throw new TypeError('to must be a adsk.core.Vector2D'); }
    //         var args = {
    //             from : (from === null ? from : from.handle),
    //             to : (to === null ? to : to.handle)
    //         };
    //         var result = this._execute('setToRotateTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets this matrix to the matrix of rotation by the specified angle, through the specified origin.
    //     // angle : The rotation angle in radians.
    //     // origin : The origin point of the rotation.
    //     // Returns true if successful.
    //     adsk.core.Matrix2D.prototype.setToRotation = function (angle, origin) {
    //         if (!isFinite(angle)) { throw new TypeError('angle must be a number'); }
    //         if (origin !== null && !(origin instanceof adsk.core.Point2D)) { throw new TypeError('origin must be a adsk.core.Point2D'); }
    //         var args = {
    //             angle : Number(angle),
    //             origin : (origin === null ? origin : origin.handle)
    //         };
    //         var result = this._execute('setToRotation', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Matrix3D ============
// Transient 3D 4x4 matrix. This object is a wrapper over 3D matrix data and is used as way to pass matrix data
// in and out of the API and as a convenience when operating on matrix data.
// They are created statically using the create method of the Matrix3D class.
interface Matrix3D {
    cast(object: Object): Matrix3D;
    //     // Returns the determinant of the matrix.
    //     Object.defineProperty(adsk.core.Matrix3D.prototype, 'determinant', {
    //         get : function () {
    //             var result = this._execute('determinant');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the translation component of the matrix.
    //     Object.defineProperty(adsk.core.Matrix3D.prototype, 'translation', {
    //         get : function () {
    //             var result = this._execute('translation');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('translation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 3d matrix object. It is initialized as an identity matrix and
    //     // is created statically using the Matrix3D.create method.
    //     // Returns the new matrix.
    //     adsk.core.Matrix3D.create = function () {
    //         var result = adsk.core.Base._executeStatic('adsk.core.Matrix3D', 'create');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix3D) : null;
    //     };

    //     // Resets this matrix to an identify matrix.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setToIdentity = function () {
    //         var result = this._execute('setToIdentity');
    //         return result ? result.value : undefined;
    //     };

    //     // Inverts this matrix.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.invert = function () {
    //         var result = this._execute('invert');
    //         return result ? result.value : undefined;
    //     };

    //     // Creates an independent copy of this matrix.
    //     // Returns the new matrix copy.
    //     adsk.core.Matrix3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix3D) : null;
    //     };

    //     // Transforms this matrix using the input matrix.
    //     // matrix : The transformation matrix.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix3D)) { throw new TypeError('matrix must be a adsk.core.Matrix3D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the matrix data as the components that define a coordinate system.
    //     // origin : The output origin point of the coordinate system.
    //     // xAxis : The output x axis direction of the coordinate system.
    //     // yAxis : The output y axis direction of the coordinate system.
    //     // zAxis : The output z axis direction of the coordinate system.
    //     adsk.core.Matrix3D.prototype.getAsCoordinateSystem = function (origin, xAxis, yAxis, zAxis) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof xAxis !== 'object') { throw new TypeError('xAxis must be an object'); }
    //         if (typeof yAxis !== 'object') { throw new TypeError('yAxis must be an object'); }
    //         if (typeof zAxis !== 'object') { throw new TypeError('zAxis must be an object'); }
    //         var args = {
    //             origin : null,
    //             xAxis : null,
    //             yAxis : null,
    //             zAxis : null
    //         };
    //         var result = this._execute('getAsCoordinateSystem', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point3D) : null;
    //             xAxis.value = (result.outargs.xAxis !== undefined) ? adsk.createObject(result.outargs.xAxis, adsk.core.Vector3D) : null;
    //             yAxis.value = (result.outargs.yAxis !== undefined) ? adsk.createObject(result.outargs.yAxis, adsk.core.Vector3D) : null;
    //             zAxis.value = (result.outargs.zAxis !== undefined) ? adsk.createObject(result.outargs.zAxis, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the matrix based on the components of a coordinate system.
    //     // origin : The origin point of the coordinate system.
    //     // xAxis : The x axis direction of the coordinate system.
    //     // yAxis : The y axis direction of the coordinate system.
    //     // zAxis : The z axis direction of the coordinate system.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setWithCoordinateSystem = function (origin, xAxis, yAxis, zAxis) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (xAxis !== null && !(xAxis instanceof adsk.core.Vector3D)) { throw new TypeError('xAxis must be a adsk.core.Vector3D'); }
    //         if (yAxis !== null && !(yAxis instanceof adsk.core.Vector3D)) { throw new TypeError('yAxis must be a adsk.core.Vector3D'); }
    //         if (zAxis !== null && !(zAxis instanceof adsk.core.Vector3D)) { throw new TypeError('zAxis must be a adsk.core.Vector3D'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             xAxis : (xAxis === null ? xAxis : xAxis.handle),
    //             yAxis : (yAxis === null ? yAxis : yAxis.handle),
    //             zAxis : (zAxis === null ? zAxis : zAxis.handle)
    //         };
    //         var result = this._execute('setWithCoordinateSystem', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the value of the specified cell in the 4x4 matrix.
    //     // row : The index of the row. The first row has in index of 0
    //     // column : The index of the column. The first column has an index of 0
    //     // The cell value at [row][column].
    //     adsk.core.Matrix3D.prototype.getCell = function (row, column) {
    //         if (!isFinite(row)) { throw new TypeError('row must be a number'); }
    //         if (!isFinite(column)) { throw new TypeError('column must be a number'); }
    //         var args = {
    //             row : Number(row),
    //             column : Number(column)
    //         };
    //         var result = this._execute('getCell', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the specified cell in the 4x4 matrix to the specified value.
    //     // row : The index of the row. The first row has in index of 0
    //     // column : The index of the column. The first column has an index of 0
    //     // value : The new cell value.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setCell = function (row, column, value) {
    //         if (!isFinite(row)) { throw new TypeError('row must be a number'); }
    //         if (!isFinite(column)) { throw new TypeError('column must be a number'); }
    //         if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //         var args = {
    //             row : Number(row),
    //             column : Number(column),
    //             value : Number(value)
    //         };
    //         var result = this._execute('setCell', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns the contents of the matrix as a 16 element array.
    //     // Returns the array of cell values.
    //     adsk.core.Matrix3D.prototype.asArray = function () {
    //         var result = this._execute('asArray');
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the contents of the array using a 16 element array.
    //     // cells : The array of cell values.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setWithArray = function (cells) {
    //         if (!Array.isArray(cells)) { throw new TypeError('cells must be an array'); }
    //         var cellsLength = cells.length;
    //         var cellsIt;
    //         for (cellsIt = 0; cellsIt < cellsLength; ++cellsIt) {
    //             if (!isFinite(cells[cellsIt])) { throw new TypeError('cells[cellsIt] must be a number'); }
    //         }
    //         var args = {
    //             cells : cells
    //         };
    //         var result = this._execute('setWithArray', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Compares this matrix with another matrix and returns True if they're identical.
    //     // matrix : The matrix to compare this matrix to.
    //     // Returns true if the matrices are equal.
    //     adsk.core.Matrix3D.prototype.isEqualTo = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix3D)) { throw new TypeError('matrix must be a adsk.core.Matrix3D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('isEqualTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets this matrix to be the matrix that maps from the 'from' coordinate system to the 'to' coordinate system.
    //     // fromOrigin : The origin point of the from coordinate system.
    //     // fromXAxis : The x axis direction of the from coordinate system.
    //     // fromYAxis : The y axis direction of the from coordinate system.
    //     // fromZAxis : The z axis direction of the from coordinate system.
    //     // toOrigin : The origin point of the to coordinate system.
    //     // toXAxis : The x axis direction of the to coordinate system.
    //     // toYAxis : The y axis direction of the to coordinate system.
    //     // toZAxis : The z axis direction of the to coordinate system.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setToAlignCoordinateSystems = function (fromOrigin, fromXAxis, fromYAxis, fromZAxis, toOrigin, toXAxis, toYAxis, toZAxis) {
    //         if (fromOrigin !== null && !(fromOrigin instanceof adsk.core.Point3D)) { throw new TypeError('fromOrigin must be a adsk.core.Point3D'); }
    //         if (fromXAxis !== null && !(fromXAxis instanceof adsk.core.Vector3D)) { throw new TypeError('fromXAxis must be a adsk.core.Vector3D'); }
    //         if (fromYAxis !== null && !(fromYAxis instanceof adsk.core.Vector3D)) { throw new TypeError('fromYAxis must be a adsk.core.Vector3D'); }
    //         if (fromZAxis !== null && !(fromZAxis instanceof adsk.core.Vector3D)) { throw new TypeError('fromZAxis must be a adsk.core.Vector3D'); }
    //         if (toOrigin !== null && !(toOrigin instanceof adsk.core.Point3D)) { throw new TypeError('toOrigin must be a adsk.core.Point3D'); }
    //         if (toXAxis !== null && !(toXAxis instanceof adsk.core.Vector3D)) { throw new TypeError('toXAxis must be a adsk.core.Vector3D'); }
    //         if (toYAxis !== null && !(toYAxis instanceof adsk.core.Vector3D)) { throw new TypeError('toYAxis must be a adsk.core.Vector3D'); }
    //         if (toZAxis !== null && !(toZAxis instanceof adsk.core.Vector3D)) { throw new TypeError('toZAxis must be a adsk.core.Vector3D'); }
    //         var args = {
    //             fromOrigin : (fromOrigin === null ? fromOrigin : fromOrigin.handle),
    //             fromXAxis : (fromXAxis === null ? fromXAxis : fromXAxis.handle),
    //             fromYAxis : (fromYAxis === null ? fromYAxis : fromYAxis.handle),
    //             fromZAxis : (fromZAxis === null ? fromZAxis : fromZAxis.handle),
    //             toOrigin : (toOrigin === null ? toOrigin : toOrigin.handle),
    //             toXAxis : (toXAxis === null ? toXAxis : toXAxis.handle),
    //             toYAxis : (toYAxis === null ? toYAxis : toYAxis.handle),
    //             toZAxis : (toZAxis === null ? toZAxis : toZAxis.handle)
    //         };
    //         var result = this._execute('setToAlignCoordinateSystems', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets to the matrix of rotation that would align the 'from' vector with the 'to' vector. The optional
    //     // axis argument may be used when the two vectors are perpendicular and in opposite directions to
    //     // specify a specific solution, but is otherwise ignored
    //     // from : The vector to rotate from.
    //     // to : The vector to rotate to.
    //     // axis : The optional axis vector to disambiguate the rotation axis.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setToRotateTo = function (from, to, axis) {
    //         if (from !== null && !(from instanceof adsk.core.Vector3D)) { throw new TypeError('from must be a adsk.core.Vector3D'); }
    //         if (to !== null && !(to instanceof adsk.core.Vector3D)) { throw new TypeError('to must be a adsk.core.Vector3D'); }
    //         if (axis === null || (axis !== undefined && axis !== null && !(axis instanceof adsk.core.Vector3D))) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         var args = {
    //             from : (from === null ? from : from.handle),
    //             to : (to === null ? to : to.handle)
    //         };
    //         if (axis !== undefined) {
    //             args.axis = (axis === null ? axis : axis.handle);
    //         }
    //         var result = this._execute('setToRotateTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets this matrix to the matrix of rotation by the specified angle, through the specified origin, around the specified axis
    //     // angle : The rotation angle in radians.
    //     // axis : The axis of rotation.
    //     // origin : The origin point of the axis of rotation.
    //     // Returns true if successful.
    //     adsk.core.Matrix3D.prototype.setToRotation = function (angle, axis, origin) {
    //         if (!isFinite(angle)) { throw new TypeError('angle must be a number'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         var args = {
    //             angle : Number(angle),
    //             axis : (axis === null ? axis : axis.handle),
    //             origin : (origin === null ? origin : origin.handle)
    //         };
    //         var result = this._execute('setToRotation', args);
    //         return result ? result.value : undefined;
    //     };
}

//     //=========== NurbsSurfaceProperties ============
//     // The different surface property types.
//     adsk.core.NurbsSurfaceProperties = {
//         OpenNurbsSurface : 1,
//         ClosedNurbsSurface : 2,
//         PeriodicNurbsSurface : 4,
//         RationalNurbsSurface : 8
//     };

//=========== Point2D ============
// Transient 2D point. A transient point is not displayed or saved in a document.
// Transient 2D points are used as a wrapper to work with raw 2D point information.
// They are created statically using the create methods of the Point2D class.
interface Point2D {
    cast(object: Object): Point2D;

    //     // Gets and sets the X coordinate of the point.
    //     Object.defineProperty(adsk.core.Point2D.prototype, 'x', {
    //         get : function () {
    //             var result = this._execute('x');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('x', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the Y coordinate of the point.
    //     Object.defineProperty(adsk.core.Point2D.prototype, 'y', {
    //         get : function () {
    //             var result = this._execute('y');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('y', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 2D point object.
    //     // x : The x coordinate of the point
    //     // y : The y coordinate of the point
    //     // Returns the new Point2D object or null if the creation failed.
    //     adsk.core.Point2D.create = function (x, y) {
    //         if (x === null || (x !== undefined && !isFinite(x))) { throw new TypeError('x must be a number'); }
    //         if (y === null || (y !== undefined && !isFinite(y))) { throw new TypeError('y must be a number'); }
    //         var args;
    //         if (x !== undefined || y !== undefined) {
    //             args = {};
    //             if (x !== undefined) {
    //                 args.x = Number(x);
    //             }
    //             if (y !== undefined) {
    //                 args.y = Number(y);
    //             }
    //         }
    //         var result = adsk.core.Base._executeStatic('adsk.core.Point2D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //     };

    //     // Creates and returns a copy of this point object.
    //     // Returns an independent copy of this point object.
    //     adsk.core.Point2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //     };

    //     // Gets the data defining the point.
    //     // x : The output x coordinate of the point.
    //     // y : The output y coordinate of the point.
    //     // Returns true if successful.
    //     adsk.core.Point2D.prototype.getData = function (x, y) {
    //         if (typeof x !== 'object') { throw new TypeError('x must be an object'); }
    //         if (typeof y !== 'object') { throw new TypeError('y must be an object'); }
    //         var args = {
    //             x : null,
    //             y : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             x.value = (result.outargs.x !== undefined) ? result.outargs.x : undefined;
    //             y.value = (result.outargs.y !== undefined) ? result.outargs.y : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Returns the distance from this point to another point.
    //     // point : The point to measure the distance to
    //     // Returns the distance to the point.
    //     adsk.core.Point2D.prototype.distanceTo = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point2D)) { throw new TypeError('point must be a adsk.core.Point2D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('distanceTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Get coordinate data of the point
    //     // Returns the coordinate data of the point as an array
    //     adsk.core.Point2D.prototype.asArray = function () {
    //         var result = this._execute('asArray');
    //         return result ? result.value : undefined;
    //     };

    //     // Checks to see if this point and another point are equal. (have identical coordinates)
    //     // point : The point to compare for equality
    //     // Returns true if the points are equal. (have identical coordinates)
    //     adsk.core.Point2D.prototype.isEqualTo = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point2D)) { throw new TypeError('point must be a adsk.core.Point2D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('isEqualTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the coordinates of the point using an array as input.
    //     // coordinates : An array that defines the coordinates of the point
    //     // Returns true if successful
    //     adsk.core.Point2D.prototype.setWithArray = function (coordinates) {
    //         if (!Array.isArray(coordinates)) { throw new TypeError('coordinates must be an array'); }
    //         var coordinatesLength = coordinates.length;
    //         var coordinatesIt;
    //         for (coordinatesIt = 0; coordinatesIt < coordinatesLength; ++coordinatesIt) {
    //             if (!isFinite(coordinates[coordinatesIt])) { throw new TypeError('coordinates[coordinatesIt] must be a number'); }
    //         }
    //         var args = {
    //             coordinates : coordinates
    //         };
    //         var result = this._execute('setWithArray', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the coordinates of the point by specifying the x, y coordinates.
    //     // x : The x coordinate of the point.
    //     // y : The y coordinate of the point.
    //     // Returns true if successful
    //     adsk.core.Point2D.prototype.set = function (x, y) {
    //         if (!isFinite(x)) { throw new TypeError('x must be a number'); }
    //         if (!isFinite(y)) { throw new TypeError('y must be a number'); }
    //         var args = {
    //             x : Number(x),
    //             y : Number(y)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Transforms the point using the provided matrix.
    //     // matrix : The Matrix2D object that defines the transformation
    //     // Returns true if successful
    //     adsk.core.Point2D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix2D)) { throw new TypeError('matrix must be a adsk.core.Matrix2D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Defines a vector using the coordinates of the point.
    //     // Returns a Vector2D object
    //     adsk.core.Point2D.prototype.asVector = function () {
    //         var result = this._execute('asVector');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector2D) : null;
    //     };

    //     // Translates the point using the provided vector.
    //     // vector : The vector to use to translate the point
    //     // Returns true if successful
    //     adsk.core.Point2D.prototype.translateBy = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('translateBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns a vector from this point to another point.
    //     // point : The other point to use to create the vector
    //     // Returns a Vector2D object
    //     adsk.core.Point2D.prototype.vectorTo = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point2D)) { throw new TypeError('point must be a adsk.core.Point2D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('vectorTo', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector2D) : null;
    //     };
}

//=========== Point3D ============
// Transient 3D point. A transient point is not displayed or saved in a document.
// Transient 3D points are used as a wrapper to work with raw 3D point information.
// They are created statically using the create method of the Point3D class.
interface Point3D {
    cast(object: Object): Point3D;

    //     // Gets and sets the X coordinate of the point.
    //     Object.defineProperty(adsk.core.Point3D.prototype, 'x', {
    //         get : function () {
    //             var result = this._execute('x');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('x', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the Y coordinate of the point.
    //     Object.defineProperty(adsk.core.Point3D.prototype, 'y', {
    //         get : function () {
    //             var result = this._execute('y');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('y', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the Z coordinate of the point.
    //     Object.defineProperty(adsk.core.Point3D.prototype, 'z', {
    //         get : function () {
    //             var result = this._execute('z');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('z', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 3D point object.
    //     // x : The x coordinate of the point
    //     // y : The y coordinate of the point
    //     // z : The z coordinate of the point
    //     // Returns the new Point3D object or null if the creation failed.
    //     adsk.core.Point3D.create = function (x, y, z) {
    //         if (x === null || (x !== undefined && !isFinite(x))) { throw new TypeError('x must be a number'); }
    //         if (y === null || (y !== undefined && !isFinite(y))) { throw new TypeError('y must be a number'); }
    //         if (z === null || (z !== undefined && !isFinite(z))) { throw new TypeError('z must be a number'); }
    //         var args;
    //         if (x !== undefined || y !== undefined || z !== undefined) {
    //             args = {};
    //             if (x !== undefined) {
    //                 args.x = Number(x);
    //             }
    //             if (y !== undefined) {
    //                 args.y = Number(y);
    //             }
    //             if (z !== undefined) {
    //                 args.z = Number(z);
    //             }
    //         }
    //         var result = adsk.core.Base._executeStatic('adsk.core.Point3D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //     };

    //     // Returns the distance from this point to another point.
    //     // point : The point to measure the distance to.
    //     // Returns the distance to the point.
    //     adsk.core.Point3D.prototype.distanceTo = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('distanceTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns a copy of this point object.
    //     // Returns an independent copy of this point object.
    //     adsk.core.Point3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //     };

    //     // Get coordinate data of the point.
    //     // Returns the coordinate data of the point as an array [x, y, z].
    //     adsk.core.Point3D.prototype.asArray = function () {
    //         var result = this._execute('asArray');
    //         return result ? result.value : undefined;
    //     };

    //     // Checks to see if this point and another point are equal (have identical coordinates).
    //     // point : The point to compare for equality.
    //     // Returns true if the points are equal (have identical coordinates).
    //     adsk.core.Point3D.prototype.isEqualTo = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('isEqualTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the coordinates of the point using an array as input.
    //     // coordinates : An array that defines the coordinates of the point [x, y, z].
    //     // Returns true if successful.
    //     adsk.core.Point3D.prototype.setWithArray = function (coordinates) {
    //         if (!Array.isArray(coordinates)) { throw new TypeError('coordinates must be an array'); }
    //         var coordinatesLength = coordinates.length;
    //         var coordinatesIt;
    //         for (coordinatesIt = 0; coordinatesIt < coordinatesLength; ++coordinatesIt) {
    //             if (!isFinite(coordinates[coordinatesIt])) { throw new TypeError('coordinates[coordinatesIt] must be a number'); }
    //         }
    //         var args = {
    //             coordinates : coordinates
    //         };
    //         var result = this._execute('setWithArray', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Transforms the point using the provided matrix.
    //     // matrix : The Matrix3D object that defines the transformation.
    //     // Returns true if successful.
    //     adsk.core.Point3D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix3D)) { throw new TypeError('matrix must be a adsk.core.Matrix3D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Defines a vector using the coordinates of the point.
    //     // Returns a Vector2D object.
    //     adsk.core.Point3D.prototype.asVector = function () {
    //         var result = this._execute('asVector');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //     };

    //     // Translates the point using the provided vector.
    //     // vector : The vector to use to translate the point.
    //     // Returns true if successful.
    //     adsk.core.Point3D.prototype.translateBy = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('translateBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the data defining the point.
    //     // x : The output x coordinate of the point.
    //     // y : The output y coordinate of the point.
    //     // z : The output z coordinate of the point.
    //     // Returns true if successful.
    //     adsk.core.Point3D.prototype.getData = function (x, y, z) {
    //         if (typeof x !== 'object') { throw new TypeError('x must be an object'); }
    //         if (typeof y !== 'object') { throw new TypeError('y must be an object'); }
    //         if (typeof z !== 'object') { throw new TypeError('z must be an object'); }
    //         var args = {
    //             x : null,
    //             y : null,
    //             z : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             x.value = (result.outargs.x !== undefined) ? result.outargs.x : undefined;
    //             y.value = (result.outargs.y !== undefined) ? result.outargs.y : undefined;
    //             z.value = (result.outargs.z !== undefined) ? result.outargs.z : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the data defining the point.
    //     // x : The x coordinate of the point.
    //     // y : The y coordinate of the point.
    //     // z : The z coordinate of the point.
    //     // Returns true if successful.
    //     adsk.core.Point3D.prototype.set = function (x, y, z) {
    //         if (!isFinite(x)) { throw new TypeError('x must be a number'); }
    //         if (!isFinite(y)) { throw new TypeError('y must be a number'); }
    //         if (!isFinite(z)) { throw new TypeError('z must be a number'); }
    //         var args = {
    //             x : Number(x),
    //             y : Number(y),
    //             z : Number(z)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns a vector from this point to another point.
    //     // point : The other point to use to create the vector.
    //     // Returns a Vector3D object.
    //     adsk.core.Point3D.prototype.vectorTo = function (point) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         var args = {
    //             point : (point === null ? point : point.handle)
    //         };
    //         var result = this._execute('vectorTo', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //     };
}
//=========== Surface ============
// Describes a two-dimensional topological, manifold in three-dimensional space.
// It is used as the underlying geometry for a BRepFace.
interface Surface {
    cast(object: Object): Surface;

    //     // Returns the surface type.
    //     Object.defineProperty(adsk.core.Surface.prototype, 'surfaceType', {
    //         get : function () {
    //             var result = this._execute('surfaceType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the surface evaluator.
    //     Object.defineProperty(adsk.core.Surface.prototype, 'evaluator', {
    //         get : function () {
    //             var result = this._execute('evaluator');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.SurfaceEvaluator) : null;
    //         }
    //     });

    //     // Updates this surface by transforming it with a given input matrix.
    //     // matrix : A 3D matrix that defines the transform to apply to the surface.
    //     // Returns true if the transform was successful.
    //     adsk.core.Surface.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix3D)) { throw new TypeError('matrix must be a adsk.core.Matrix3D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== SurfaceEvaluator ============
// Surface evaluator that is obtained from a transient surface and allows you to perform
// various evaluations on the surface.
interface SurfaceEvaluator {
    cast(object: Object): SurfaceEvaluator;

    //     // Indicates if the surface is closed (forms a loop) in the U direction
    //     Object.defineProperty(adsk.core.SurfaceEvaluator.prototype, 'isClosedInU', {
    //         get : function () {
    //             var result = this._execute('isClosedInU');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if the surface is closed (forms a loop) in the V direction
    //     Object.defineProperty(adsk.core.SurfaceEvaluator.prototype, 'isClosedInV', {
    //         get : function () {
    //             var result = this._execute('isClosedInV');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the area of the surface. This is typically used when the SurfaceEvaluator is associated
    //     // with a BRepFace object where it is always valid. This can fail in the case where the SurfaceEvaluator is
    //     // associated with one of the geometry classes, (Plane, Cylinder, Cone, EllipticalCone, or EllipticalCylinder
    //     // object), because these surfaces are unbounded. A BRepFace, even one of these shapes, is bounded by its
    //     // edges and has a well-defined area.
    //     Object.defineProperty(adsk.core.SurfaceEvaluator.prototype, 'area', {
    //         get : function () {
    //             var result = this._execute('area');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates the 3D equivalent curve in model space, of a 2D curve defined in the
    //     // parametric space of the surface.
    //     // parametricCurve : The parameter space curve to map into this surface's parameter space.
    //     // Returns an ObjectCollection containing one or more curves.
    //     // When the SufaceEvaluatior is obtained from a face, and the curve cuts across internal
    //     // boundaries of the face, multiple curves are returned. The returned curves are trimmed
    //     // to the boundaries of the face.
    //     // If the SurfaceEvaluator is obtained from a geometry object, a single curve returned
    //     // because there are no boundaries with which to trim the curve.
    //     // The type of curve(s) returned depends on the shape of the input curve and surface.
    //     adsk.core.SurfaceEvaluator.prototype.getModelCurveFromParametricCurve = function (parametricCurve) {
    //         if (parametricCurve !== null && !(parametricCurve instanceof adsk.core.Curve2D)) { throw new TypeError('parametricCurve must be a adsk.core.Curve2D'); }
    //         var args = {
    //             parametricCurve : (parametricCurve === null ? parametricCurve : parametricCurve.handle)
    //         };
    //         var result = this._execute('getModelCurveFromParametricCurve', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Gets (by extraction) a curve that follows a constant u or v parameter along the surface.
    //     // The curve will have the same properties as the surface in the direction of the extraction.
    //     // For example, when a curve is extracted from the periodic direction of a surface, the extracted
    //     // curve will also be periodic.
    //     // The type of curve returned is dependent on the shape the surface.
    //     // parameter : The parameter at which to extract the curve
    //     // isUDirection : A bool that indicates whether to extract the curve from the U or V direction
    //     // Returns an ObjectCollection that contains one or more curves.
    //     // Multiple curves are returned when the SurfaceEvaluator is obtained from a Face
    //     // and the curve cuts across internal boundaries. The resulting curves are trimmed to the
    //     // boundaries of the Face.
    //     // When the SurfaceEvaluator is obtained from a geometry object, a single curve is returned
    //     // because there are no boundaries to trim the curve.
    //     // The type of curve(s) returned is dependent on the shape of the surface.
    //     adsk.core.SurfaceEvaluator.prototype.getIsoCurve = function (parameter, isUDirection) {
    //         if (!isFinite(parameter)) { throw new TypeError('parameter must be a number'); }
    //         if (typeof isUDirection !== 'boolean') { throw new TypeError('isUDirection must be a boolean'); }
    //         var args = {
    //             parameter : Number(parameter),
    //             isUDirection : isUDirection
    //         };
    //         var result = this._execute('getIsoCurve', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Get the curvature values at a number of parameter positions on the surface.
    //     // parameters : The array of parameter positions to return curvature information at.
    //     // Each parameter position must be with the range of the parameter extents as verified by isParameterOnFace.
    //     // maxTangents : The output array of directions of maximum curvature at each position on the surface.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // maxCurvatures : The output array of the magnitude of the maximum curvature at each position on the surface.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // minCurvatures : The output array of the magnitude of the minimum curvature at each position on the surface.
    //     // The minimum curvature direction is perpendicular to the maximum curvature tangent directions.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // Returns true if the curvatures were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getCurvatures = function (parameters, maxTangents, maxCurvatures, minCurvatures) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (parameters[parametersIt] !== null && !(parameters[parametersIt] instanceof adsk.core.Point2D)) { throw new TypeError('parameters[parametersIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof maxTangents !== 'object') { throw new TypeError('maxTangents must be an object'); }
    //         if (typeof maxCurvatures !== 'object') { throw new TypeError('maxCurvatures must be an object'); }
    //         if (typeof minCurvatures !== 'object') { throw new TypeError('minCurvatures must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             maxTangents : null,
    //             maxCurvatures : null,
    //             minCurvatures : null
    //         };
    //         var result = this._execute('getCurvatures', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.maxTangents)) {
    //                 var maxTangentsIter;
    //                 maxTangents.value = [];
    //                 for (maxTangentsIter = 0; maxTangentsIter < result.outargs.maxTangents.length; ++maxTangentsIter) {
    //                     maxTangents.value[maxTangentsIter] = (result.outargs.maxTangents[maxTangentsIter] !== undefined) ? adsk.createObject(result.outargs.maxTangents[maxTangentsIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.maxCurvatures)) {
    //                 var maxCurvaturesIter;
    //                 maxCurvatures.value = [];
    //                 for (maxCurvaturesIter = 0; maxCurvaturesIter < result.outargs.maxCurvatures.length; ++maxCurvaturesIter) {
    //                     maxCurvatures.value[maxCurvaturesIter] = (result.outargs.maxCurvatures[maxCurvaturesIter] !== undefined) ? result.outargs.maxCurvatures[maxCurvaturesIter] : undefined;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.minCurvatures)) {
    //                 var minCurvaturesIter;
    //                 minCurvatures.value = [];
    //                 for (minCurvaturesIter = 0; minCurvaturesIter < result.outargs.minCurvatures.length; ++minCurvaturesIter) {
    //                     minCurvatures.value[minCurvaturesIter] = (result.outargs.minCurvatures[minCurvaturesIter] !== undefined) ? result.outargs.minCurvatures[minCurvaturesIter] : undefined;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the curvature values at a parameter positions on the surface.
    //     // parameter : The parameter positions to return curvature information at.
    //     // maxTangent : The output directions of maximum curvature at the position on the surface.
    //     // maxCurvature : The output magnitude of the maximum curvature at the position on the surface.
    //     // minCurvature : The output magnitude of the minimum curvature at the position on the surface.
    //     // The minimum curvature direction is perpendicular to the maximum curvature tangent directions.
    //     // Returns true if the curvature was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getCurvature = function (parameter, maxTangent, maxCurvature, minCurvature) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         if (typeof maxTangent !== 'object') { throw new TypeError('maxTangent must be an object'); }
    //         if (typeof maxCurvature !== 'object') { throw new TypeError('maxCurvature must be an object'); }
    //         if (typeof minCurvature !== 'object') { throw new TypeError('minCurvature must be an object'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle),
    //             maxTangent : null,
    //             maxCurvature : null,
    //             minCurvature : null
    //         };
    //         var result = this._execute('getCurvature', args);
    //         if (result && result.outargs) {
    //             maxTangent.value = (result.outargs.maxTangent !== undefined) ? adsk.createObject(result.outargs.maxTangent, adsk.core.Vector3D) : null;
    //             maxCurvature.value = (result.outargs.maxCurvature !== undefined) ? result.outargs.maxCurvature : undefined;
    //             minCurvature.value = (result.outargs.minCurvature !== undefined) ? result.outargs.minCurvature : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the surface normal at a number of parameter positions on the surface.
    //     // parameters : The array of parameter positions to return the normal at.
    //     // Each parameter position must be with the range of the parameter extents as verified by isParameterOnFace.
    //     // normals : The output array of normals for each parameter position on the surface.
    //     // The length of this array will be the same as the length of the parameters array provided.
    //     // Returns true if the normals were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getNormalsAtParameters = function (parameters, normals) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (parameters[parametersIt] !== null && !(parameters[parametersIt] instanceof adsk.core.Point2D)) { throw new TypeError('parameters[parametersIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof normals !== 'object') { throw new TypeError('normals must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             normals : null
    //         };
    //         var result = this._execute('getNormalsAtParameters', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.normals)) {
    //                 var normalsIter;
    //                 normals.value = [];
    //                 for (normalsIter = 0; normalsIter < result.outargs.normals.length; ++normalsIter) {
    //                     normals.value[normalsIter] = (result.outargs.normals[normalsIter] !== undefined) ? adsk.createObject(result.outargs.normals[normalsIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the surface normal at a parameter position on the surface.
    //     // parameter : The parameter position to return the normal at.
    //     // The parameter position must be with the range of the parameter extents as verified by isParameterOnFace.
    //     // normal : The output normal for the parameter position on the surface.
    //     // Returns true if the normal was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getNormalAtParameter = function (parameter, normal) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         if (typeof normal !== 'object') { throw new TypeError('normal must be an object'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle),
    //             normal : null
    //         };
    //         var result = this._execute('getNormalAtParameter', args);
    //         if (result && result.outargs) {
    //             normal.value = (result.outargs.normal !== undefined) ? adsk.createObject(result.outargs.normal, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the surface normal at a number of positions on the surface.
    //     // points : The array of points to return the normal at.
    //     // For reliable results each point should lie on the surface.
    //     // normals : The output array of normals for each point on the surface.
    //     // The length of this array will be the same as the length of the points array provided.
    //     // Returns true if the normals were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getNormalsAtPoints = function (points, normals) {
    //         if (!Array.isArray(points)) { throw new TypeError('points must be an array'); }
    //         var pointsLength = points.length;
    //         var pointsIt;
    //         for (pointsIt = 0; pointsIt < pointsLength; ++pointsIt) {
    //             if (points[pointsIt] !== null && !(points[pointsIt] instanceof adsk.core.Point3D)) { throw new TypeError('points[pointsIt] must be a adsk.core.Point3D'); }
    //         }
    //         if (typeof normals !== 'object') { throw new TypeError('normals must be an object'); }
    //         var args = {
    //             points : points,
    //             normals : null
    //         };
    //         var result = this._execute('getNormalsAtPoints', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.normals)) {
    //                 var normalsIter;
    //                 normals.value = [];
    //                 for (normalsIter = 0; normalsIter < result.outargs.normals.length; ++normalsIter) {
    //                     normals.value[normalsIter] = (result.outargs.normals[normalsIter] !== undefined) ? adsk.createObject(result.outargs.normals[normalsIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the surface normal at a point on the surface.
    //     // point : The point to return the normal at.
    //     // For reliable results the point should lie on the surface.
    //     // normal : The output normal for the point on the surface.
    //     // Returns true if the normal was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getNormalAtPoint = function (point, normal) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         if (typeof normal !== 'object') { throw new TypeError('normal must be an object'); }
    //         var args = {
    //             point : (point === null ? point : point.handle),
    //             normal : null
    //         };
    //         var result = this._execute('getNormalAtPoint', args);
    //         if (result && result.outargs) {
    //             normal.value = (result.outargs.normal !== undefined) ? adsk.createObject(result.outargs.normal, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter positions that correspond to a set of points on the surface.
    //     // For reliable results, the points should lie on the surface within model tolerance.
    //     // If the points do not lie on the surface, the parameter of the nearest point on the surface will generally be returned.
    //     // points : An array of points to get the surface parameter values at.
    //     // parameters : The output array of parameter positions corresponding to the set of points.
    //     // The length of this array will be equal to the length of the points array specified.
    //     // Returns true if the parameters were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getParametersAtPoints = function (points, parameters) {
    //         if (!Array.isArray(points)) { throw new TypeError('points must be an array'); }
    //         var pointsLength = points.length;
    //         var pointsIt;
    //         for (pointsIt = 0; pointsIt < pointsLength; ++pointsIt) {
    //             if (points[pointsIt] !== null && !(points[pointsIt] instanceof adsk.core.Point3D)) { throw new TypeError('points[pointsIt] must be a adsk.core.Point3D'); }
    //         }
    //         if (typeof parameters !== 'object') { throw new TypeError('parameters must be an object'); }
    //         var args = {
    //             points : points,
    //             parameters : null
    //         };
    //         var result = this._execute('getParametersAtPoints', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.parameters)) {
    //                 var parametersIter;
    //                 parameters.value = [];
    //                 for (parametersIter = 0; parametersIter < result.outargs.parameters.length; ++parametersIter) {
    //                     parameters.value[parametersIter] = (result.outargs.parameters[parametersIter] !== undefined) ? adsk.createObject(result.outargs.parameters[parametersIter], adsk.core.Point2D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the parameter position that correspond to a point on the surface.
    //     // For reliable results, the point should lie on the surface within model tolerance.
    //     // If the point does not lie on the surface, the parameter of the nearest point on the surface will generally be returned.
    //     // point : The point to get the curve parameter value at.
    //     // parameter : The output parameter position corresponding to the point.
    //     // Returns true of the parameter was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getParameterAtPoint = function (point, parameter) {
    //         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
    //         if (typeof parameter !== 'object') { throw new TypeError('parameter must be an object'); }
    //         var args = {
    //             point : (point === null ? point : point.handle),
    //             parameter : null
    //         };
    //         var result = this._execute('getParameterAtPoint', args);
    //         if (result && result.outargs) {
    //             parameter.value = (result.outargs.parameter !== undefined) ? adsk.createObject(result.outargs.parameter, adsk.core.Point2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the points on the surface that correspond to evaluating a set of parameter positions on the surface.
    //     // parameters : The array of parameter positions to evaluate the surface position at.
    //     // Each parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // points : The output array of points corresponding to evaluating the curve at that parameter position.
    //     // The length of this array will be equal to the length of the parameters array specified.
    //     // Returns true if the points were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getPointsAtParameters = function (parameters, points) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (parameters[parametersIt] !== null && !(parameters[parametersIt] instanceof adsk.core.Point2D)) { throw new TypeError('parameters[parametersIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof points !== 'object') { throw new TypeError('points must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             points : null
    //         };
    //         var result = this._execute('getPointsAtParameters', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.points)) {
    //                 var pointsIter;
    //                 points.value = [];
    //                 for (pointsIter = 0; pointsIter < result.outargs.points.length; ++pointsIter) {
    //                     points.value[pointsIter] = (result.outargs.points[pointsIter] !== undefined) ? adsk.createObject(result.outargs.points[pointsIter], adsk.core.Point3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the point on the surface that correspond to evaluating a parameter position on the surface.
    //     // parameter : The parameter positions to evaluate the surface position at.
    //     // The parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // point : The output point corresponding to evaluating the curve at that parameter position.
    //     // Returns true if the point was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getPointAtParameter = function (parameter, point) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         if (typeof point !== 'object') { throw new TypeError('point must be an object'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle),
    //             point : null
    //         };
    //         var result = this._execute('getPointAtParameter', args);
    //         if (result && result.outargs) {
    //             point.value = (result.outargs.point !== undefined) ? adsk.createObject(result.outargs.point, adsk.core.Point3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Gets details about anomalies in parameter space of the surface.
    //     // This includes information about periodic intervals, singularities, or unbounded parameter ranges.
    //     // periodicityU : The output array with information about the period of the surface in U.
    //     // periodicityU[0] will contain the period of the surface in U.
    //     // If periodicityU[0] is 0, the surface is not periodic in U.
    //     // If the surface is periodic in U, peridocityU[1] will contain the parameter value at the start of the principle period.
    //     // periodicityV : The output array with information about the period of the surface in V.
    //     // periodicityV[0] will contain the period of the surface in V.
    //     // If periodicityV[0] is 0, the surface is not periodic in V.
    //     // If the surface is periodic in V, peridocityV[1] will contain the parameter value at the start of the principle period.
    //     // singularitiesU : The output array parameter values of singularities in U.
    //     // If this array is empty, there are no singularities in U.
    //     // singularitiesV : The output array parameter values of singularities in V.
    //     // If this array is empty, there are no singularities in V.
    //     // unboundedParameters : The output array that indicates if the parameter range is unbounded in U or V.
    //     // unboundedParameters[0] will be true if U is unbounded.
    //     // unboundedParameters[1] will be true if V is unbounded.
    //     // Returns true if the parameter anomalies were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getParamAnomaly = function (periodicityU, periodicityV, singularitiesU, singularitiesV, unboundedParameters) {
    //         if (typeof periodicityU !== 'object') { throw new TypeError('periodicityU must be an object'); }
    //         if (typeof periodicityV !== 'object') { throw new TypeError('periodicityV must be an object'); }
    //         if (typeof singularitiesU !== 'object') { throw new TypeError('singularitiesU must be an object'); }
    //         if (typeof singularitiesV !== 'object') { throw new TypeError('singularitiesV must be an object'); }
    //         if (typeof unboundedParameters !== 'object') { throw new TypeError('unboundedParameters must be an object'); }
    //         var args = {
    //             periodicityU : null,
    //             periodicityV : null,
    //             singularitiesU : null,
    //             singularitiesV : null,
    //             unboundedParameters : null
    //         };
    //         var result = this._execute('getParamAnomaly', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.periodicityU)) {
    //                 var periodicityUIter;
    //                 periodicityU.value = [];
    //                 for (periodicityUIter = 0; periodicityUIter < result.outargs.periodicityU.length; ++periodicityUIter) {
    //                     periodicityU.value[periodicityUIter] = (result.outargs.periodicityU[periodicityUIter] !== undefined) ? result.outargs.periodicityU[periodicityUIter] : undefined;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.periodicityV)) {
    //                 var periodicityVIter;
    //                 periodicityV.value = [];
    //                 for (periodicityVIter = 0; periodicityVIter < result.outargs.periodicityV.length; ++periodicityVIter) {
    //                     periodicityV.value[periodicityVIter] = (result.outargs.periodicityV[periodicityVIter] !== undefined) ? result.outargs.periodicityV[periodicityVIter] : undefined;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.singularitiesU)) {
    //                 var singularitiesUIter;
    //                 singularitiesU.value = [];
    //                 for (singularitiesUIter = 0; singularitiesUIter < result.outargs.singularitiesU.length; ++singularitiesUIter) {
    //                     singularitiesU.value[singularitiesUIter] = (result.outargs.singularitiesU[singularitiesUIter] !== undefined) ? result.outargs.singularitiesU[singularitiesUIter] : undefined;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.singularitiesV)) {
    //                 var singularitiesVIter;
    //                 singularitiesV.value = [];
    //                 for (singularitiesVIter = 0; singularitiesVIter < result.outargs.singularitiesV.length; ++singularitiesVIter) {
    //                     singularitiesV.value[singularitiesVIter] = (result.outargs.singularitiesV[singularitiesVIter] !== undefined) ? result.outargs.singularitiesV[singularitiesVIter] : undefined;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.unboundedParameters)) {
    //                 var unboundedParametersIter;
    //                 unboundedParameters.value = [];
    //                 for (unboundedParametersIter = 0; unboundedParametersIter < result.outargs.unboundedParameters.length; ++unboundedParametersIter) {
    //                     unboundedParameters.value[unboundedParametersIter] = (result.outargs.unboundedParameters[unboundedParametersIter] !== undefined) ? result.outargs.unboundedParameters[unboundedParametersIter] : undefined;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the first derivatives of the surface at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the surface first derivative at.
    //     // Each parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // partialsU : The output array of first derivative U partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // partialsV : The output array of first derivative V partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the first derivatives were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getFirstDerivatives = function (parameters, partialsU, partialsV) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (parameters[parametersIt] !== null && !(parameters[parametersIt] instanceof adsk.core.Point2D)) { throw new TypeError('parameters[parametersIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof partialsU !== 'object') { throw new TypeError('partialsU must be an object'); }
    //         if (typeof partialsV !== 'object') { throw new TypeError('partialsV must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             partialsU : null,
    //             partialsV : null
    //         };
    //         var result = this._execute('getFirstDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.partialsU)) {
    //                 var partialsUIter;
    //                 partialsU.value = [];
    //                 for (partialsUIter = 0; partialsUIter < result.outargs.partialsU.length; ++partialsUIter) {
    //                     partialsU.value[partialsUIter] = (result.outargs.partialsU[partialsUIter] !== undefined) ? adsk.createObject(result.outargs.partialsU[partialsUIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.partialsV)) {
    //                 var partialsVIter;
    //                 partialsV.value = [];
    //                 for (partialsVIter = 0; partialsVIter < result.outargs.partialsV.length; ++partialsVIter) {
    //                     partialsV.value[partialsVIter] = (result.outargs.partialsV[partialsVIter] !== undefined) ? adsk.createObject(result.outargs.partialsV[partialsVIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the first derivative of the surface at the specified parameter position.
    //     // parameter : The parameter positions to get the surface first derivative at.
    //     // The parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // partialU : The output first derivative U partial vector at the parameter position specified.
    //     // partialV : The output first derivative V partial vector at the parameter position specified.
    //     // Returns true if the first derivative was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getFirstDerivative = function (parameter, partialU, partialV) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         if (typeof partialU !== 'object') { throw new TypeError('partialU must be an object'); }
    //         if (typeof partialV !== 'object') { throw new TypeError('partialV must be an object'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle),
    //             partialU : null,
    //             partialV : null
    //         };
    //         var result = this._execute('getFirstDerivative', args);
    //         if (result && result.outargs) {
    //             partialU.value = (result.outargs.partialU !== undefined) ? adsk.createObject(result.outargs.partialU, adsk.core.Vector3D) : null;
    //             partialV.value = (result.outargs.partialV !== undefined) ? adsk.createObject(result.outargs.partialV, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the second derivatives of the surface at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the surface second derivative at.
    //     // Each parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // partialsUU : The output array of second derivative UU partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // partialsUV : The output array of second derivative UV mixed partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // partialsVV : The output array of second derivative VV partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the second derivatives were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getSecondDerivatives = function (parameters, partialsUU, partialsUV, partialsVV) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (parameters[parametersIt] !== null && !(parameters[parametersIt] instanceof adsk.core.Point2D)) { throw new TypeError('parameters[parametersIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof partialsUU !== 'object') { throw new TypeError('partialsUU must be an object'); }
    //         if (typeof partialsUV !== 'object') { throw new TypeError('partialsUV must be an object'); }
    //         if (typeof partialsVV !== 'object') { throw new TypeError('partialsVV must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             partialsUU : null,
    //             partialsUV : null,
    //             partialsVV : null
    //         };
    //         var result = this._execute('getSecondDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.partialsUU)) {
    //                 var partialsUUIter;
    //                 partialsUU.value = [];
    //                 for (partialsUUIter = 0; partialsUUIter < result.outargs.partialsUU.length; ++partialsUUIter) {
    //                     partialsUU.value[partialsUUIter] = (result.outargs.partialsUU[partialsUUIter] !== undefined) ? adsk.createObject(result.outargs.partialsUU[partialsUUIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.partialsUV)) {
    //                 var partialsUVIter;
    //                 partialsUV.value = [];
    //                 for (partialsUVIter = 0; partialsUVIter < result.outargs.partialsUV.length; ++partialsUVIter) {
    //                     partialsUV.value[partialsUVIter] = (result.outargs.partialsUV[partialsUVIter] !== undefined) ? adsk.createObject(result.outargs.partialsUV[partialsUVIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.partialsVV)) {
    //                 var partialsVVIter;
    //                 partialsVV.value = [];
    //                 for (partialsVVIter = 0; partialsVVIter < result.outargs.partialsVV.length; ++partialsVVIter) {
    //                     partialsVV.value[partialsVVIter] = (result.outargs.partialsVV[partialsVVIter] !== undefined) ? adsk.createObject(result.outargs.partialsVV[partialsVVIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the second derivative of the surface at the specified parameter position.
    //     // parameter : The parameter position to get the surface second derivative at.
    //     // The parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // partialUU : The output second derivative UU partial vector at each parameter position specified.
    //     // partialUV : The output second derivative UV mixed partial vector at each parameter position specified.
    //     // partialVV : The output second derivative VV partial vector at each parameter position specified.
    //     // Returns true if the second derivative was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getSecondDerivative = function (parameter, partialUU, partialUV, partialVV) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         if (typeof partialUU !== 'object') { throw new TypeError('partialUU must be an object'); }
    //         if (typeof partialUV !== 'object') { throw new TypeError('partialUV must be an object'); }
    //         if (typeof partialVV !== 'object') { throw new TypeError('partialVV must be an object'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle),
    //             partialUU : null,
    //             partialUV : null,
    //             partialVV : null
    //         };
    //         var result = this._execute('getSecondDerivative', args);
    //         if (result && result.outargs) {
    //             partialUU.value = (result.outargs.partialUU !== undefined) ? adsk.createObject(result.outargs.partialUU, adsk.core.Vector3D) : null;
    //             partialUV.value = (result.outargs.partialUV !== undefined) ? adsk.createObject(result.outargs.partialUV, adsk.core.Vector3D) : null;
    //             partialVV.value = (result.outargs.partialVV !== undefined) ? adsk.createObject(result.outargs.partialVV, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the third derivatives of the surface at the specified parameter positions.
    //     // parameters : The array of parameter positions to get the surface third derivative at.
    //     // Each parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // partialsUUU : The output array of third derivative UUU partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // partialsVVV : The output array of third derivative VVV partial vectors at each parameter position specified.
    //     // The length of this array is equal to the length of the parameters array specified.
    //     // Returns true if the third derivatives were successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getThirdDerivatives = function (parameters, partialsUUU, partialsVVV) {
    //         if (!Array.isArray(parameters)) { throw new TypeError('parameters must be an array'); }
    //         var parametersLength = parameters.length;
    //         var parametersIt;
    //         for (parametersIt = 0; parametersIt < parametersLength; ++parametersIt) {
    //             if (parameters[parametersIt] !== null && !(parameters[parametersIt] instanceof adsk.core.Point2D)) { throw new TypeError('parameters[parametersIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (typeof partialsUUU !== 'object') { throw new TypeError('partialsUUU must be an object'); }
    //         if (typeof partialsVVV !== 'object') { throw new TypeError('partialsVVV must be an object'); }
    //         var args = {
    //             parameters : parameters,
    //             partialsUUU : null,
    //             partialsVVV : null
    //         };
    //         var result = this._execute('getThirdDerivatives', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.partialsUUU)) {
    //                 var partialsUUUIter;
    //                 partialsUUU.value = [];
    //                 for (partialsUUUIter = 0; partialsUUUIter < result.outargs.partialsUUU.length; ++partialsUUUIter) {
    //                     partialsUUU.value[partialsUUUIter] = (result.outargs.partialsUUU[partialsUUUIter] !== undefined) ? adsk.createObject(result.outargs.partialsUUU[partialsUUUIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //             if (Array.isArray(result.outargs.partialsVVV)) {
    //                 var partialsVVVIter;
    //                 partialsVVV.value = [];
    //                 for (partialsVVVIter = 0; partialsVVVIter < result.outargs.partialsVVV.length; ++partialsVVVIter) {
    //                     partialsVVV.value[partialsVVVIter] = (result.outargs.partialsVVV[partialsVVVIter] !== undefined) ? adsk.createObject(result.outargs.partialsVVV[partialsVVVIter], adsk.core.Vector3D) : null;
    //                 }
    //             }
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Get the third derivative of the surface at the specified parameter position.
    //     // parameter : The parameter position to get the surface third derivative at.
    //     // The parameter position must be within the range of the parameter extents as verified by isParameterOnFace.
    //     // partialUUU : The output third derivative UUU partial vector at each parameter position specified.
    //     // partialVVV : The output third derivative VVV partial vector at each parameter position specified.
    //     // Returns true if the third derivative was successfully returned.
    //     adsk.core.SurfaceEvaluator.prototype.getThirdDerivative = function (parameter, partialUUU, partialVVV) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         if (typeof partialUUU !== 'object') { throw new TypeError('partialUUU must be an object'); }
    //         if (typeof partialVVV !== 'object') { throw new TypeError('partialVVV must be an object'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle),
    //             partialUUU : null,
    //             partialVVV : null
    //         };
    //         var result = this._execute('getThirdDerivative', args);
    //         if (result && result.outargs) {
    //             partialUUU.value = (result.outargs.partialUUU !== undefined) ? adsk.createObject(result.outargs.partialUUU, adsk.core.Vector3D) : null;
    //             partialVVV.value = (result.outargs.partialVVV !== undefined) ? adsk.createObject(result.outargs.partialVVV, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Determines if the specified parameter position lies with the parametric range of the surface.
    //     // parameter : The parameter position to test.
    //     // Returns true if the parameter position lies within the valid parametric range of the surface.
    //     adsk.core.SurfaceEvaluator.prototype.isParameterOnFace = function (parameter) {
    //         if (parameter !== null && !(parameter instanceof adsk.core.Point2D)) { throw new TypeError('parameter must be a adsk.core.Point2D'); }
    //         var args = {
    //             parameter : (parameter === null ? parameter : parameter.handle)
    //         };
    //         var result = this._execute('isParameterOnFace', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns the parametric range of the surface.
    //     // If the surface is periodic in a direction, the range is set to the principle period's range.
    //     // If the surface is only upper bounded in a direction, the lower bound is set to -double-max.
    //     // If the surface is only lower bounded in a direction, the upper bound is set to double-max.
    //     // If the surface is unbounded in a direction, the lower bound and upper bound of the range will both be zero.
    //     // Returns the bounding box with the parameter extents, with the X value being the U range, and the Y value being the V range.
    //     adsk.core.SurfaceEvaluator.prototype.parametricRange = function () {
    //         var result = this._execute('parametricRange');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox2D) : null;
    //     };
}
//     //=========== SurfaceTypes ============
//     // The different types of surfaces.
//     adsk.core.SurfaceTypes = {
//         PlaneSurfaceType : 0,
//         CylinderSurfaceType : 1,
//         ConeSurfaceType : 2,
//         SphereSurfaceType : 3,
//         TorusSurfaceType : 4,
//         EllipticalCylinderSurfaceType : 5,
//         EllipticalConeSurfaceType : 6,
//         NurbsSurfaceType : 7
//     };

//=========== Vector2D ============
// Transient 2D vector. This object is a wrapper for 2D vector data and is used to
// pass vector data in and out of the API.
// They are created statically using the create method of the Vector2D class.
interface Vector2D {
    cast(object: Object): Vector2D;

    //     // Gets the length of the vector.
    //     Object.defineProperty(adsk.core.Vector2D.prototype, 'length', {
    //         get : function () {
    //             var result = this._execute('length');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the X coordinate of the vector.
    //     Object.defineProperty(adsk.core.Vector2D.prototype, 'x', {
    //         get : function () {
    //             var result = this._execute('x');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('x', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the Y coordinate of the vector.
    //     Object.defineProperty(adsk.core.Vector2D.prototype, 'y', {
    //         get : function () {
    //             var result = this._execute('y');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('y', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a 2D vector object.
    //     // x : The x coordinate of the vector.
    //     // y : The y coordinate of the vector.
    //     // Returns the new Vector2D object or null if the creation failed.
    //     adsk.core.Vector2D.create = function (x, y) {
    //         if (x === null || (x !== undefined && !isFinite(x))) { throw new TypeError('x must be a number'); }
    //         if (y === null || (y !== undefined && !isFinite(y))) { throw new TypeError('y must be a number'); }
    //         var args;
    //         if (x !== undefined || y !== undefined) {
    //             args = {};
    //             if (x !== undefined) {
    //                 args.x = Number(x);
    //             }
    //             if (y !== undefined) {
    //                 args.y = Number(y);
    //             }
    //         }
    //         var result = adsk.core.Base._executeStatic('adsk.core.Vector2D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector2D) : null;
    //     };

    //     // Add a vector to this vector.
    //     // vector : The vector to add to this vector.
    //     // Returns true if successful.
    //     adsk.core.Vector2D.prototype.add = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the angle between this vector and another vector.
    //     // vector : The vector to measure the angle to.
    //     // Returns the angle in radians.
    //     adsk.core.Vector2D.prototype.angleTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('angleTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns an independent copy of this Vector2D object.
    //     // Returns a new Vector2D object that is a copy of this Vector2D object.
    //     adsk.core.Vector2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector2D) : null;
    //     };

    //     // Calculates the Dot Product of this vector and an input vector.
    //     // vector : The vector to use in the dot product calculation.
    //     // Returns the dot product of the two vectors.
    //     adsk.core.Vector2D.prototype.dotProduct = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('dotProduct', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns the vector values as an array [x, y].
    //     // Returns an array of the vector's values [x, y].
    //     adsk.core.Vector2D.prototype.asArray = function () {
    //         var result = this._execute('asArray');
    //         return result ? result.value : undefined;
    //     };

    //     // Compare this vector with another to check for equality.
    //     // vector : The vector to compare with for equality.
    //     // Returns true if the vectors are equal.
    //     adsk.core.Vector2D.prototype.isEqualTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('isEqualTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Compare this vector with another to check for parallelism.
    //     // vector : The vector to compare with for parallelism.
    //     // Returns true if the vectors are parallel.
    //     adsk.core.Vector2D.prototype.isParallelTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('isParallelTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Compare this vector with another to check for perpendicularity.
    //     // vector : The vector to compare with for perpendicularity.
    //     // Returns true if the vectors are perpendicular.
    //     adsk.core.Vector2D.prototype.isPerpendicularTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('isPerpendicularTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Normalizes the vector.
    //     // Normalization makes the vector length equal to one.
    //     // The vector should not be zero length.
    //     // Returns true if successful.
    //     adsk.core.Vector2D.prototype.normalize = function () {
    //         var result = this._execute('normalize');
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the definition of the vector by specifying an array containing the x and y coordinates.
    //     // coordinates : An array that specifies the values for the x and y coordinates of the vector.
    //     // Returns true if successful
    //     adsk.core.Vector2D.prototype.setWithArray = function (coordinates) {
    //         if (!Array.isArray(coordinates)) { throw new TypeError('coordinates must be an array'); }
    //         var coordinatesLength = coordinates.length;
    //         var coordinatesIt;
    //         for (coordinatesIt = 0; coordinatesIt < coordinatesLength; ++coordinatesIt) {
    //             if (!isFinite(coordinates[coordinatesIt])) { throw new TypeError('coordinates[coordinatesIt] must be a number'); }
    //         }
    //         var args = {
    //             coordinates : coordinates
    //         };
    //         var result = this._execute('setWithArray', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Scales the vector by specifying a scaling factor.
    //     // scale : The scale factor to multiple the vector by (i.e. 1.5).
    //     // Returns true if successful.
    //     adsk.core.Vector2D.prototype.scaleBy = function (scale) {
    //         if (!isFinite(scale)) { throw new TypeError('scale must be a number'); }
    //         var args = {
    //             scale : Number(scale)
    //         };
    //         var result = this._execute('scaleBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Subtract a vector from this vector.
    //     // vector : The vector to subtract from this vector.
    //     // Returns true if successful.
    //     adsk.core.Vector2D.prototype.subtract = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector2D)) { throw new TypeError('vector must be a adsk.core.Vector2D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('subtract', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Transforms the vector by specifying a 2D transformation matrix.
    //     // matrix : The Matrix2D object that defines the transformation.
    //     // Returns true if successful.
    //     adsk.core.Vector2D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix2D)) { throw new TypeError('matrix must be a adsk.core.Matrix2D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Return a point with the same x and y values as this vector.
    //     // Returns the new point.
    //     adsk.core.Vector2D.prototype.asPoint = function () {
    //         var result = this._execute('asPoint');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //     };
}

//=========== Vector3D ============
// Transient 3D vector. This object is a wrapper over 3D vector data and is used as way to pass vector data
// in and out of the API and as a convenience when operating on vector data.
// They are created statically using the create method of the Vector3D class.
interface Vector3D {
    cast(object: Object): Vector3D;

    //     // Get the length of this vector.
    //     Object.defineProperty(adsk.core.Vector3D.prototype, 'length', {
    //         get : function () {
    //             var result = this._execute('length');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // The x value.
    //     Object.defineProperty(adsk.core.Vector3D.prototype, 'x', {
    //         get : function () {
    //             var result = this._execute('x');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('x', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // The y value.
    //     Object.defineProperty(adsk.core.Vector3D.prototype, 'y', {
    //         get : function () {
    //             var result = this._execute('y');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('y', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // The z value.
    //     Object.defineProperty(adsk.core.Vector3D.prototype, 'z', {
    //         get : function () {
    //             var result = this._execute('z');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('z', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a 3D vector object. This object is created statically using the Vector3D.create method.
    //     // x : The optional x value.
    //     // y : The optional y value.
    //     // z : The optional z value.
    //     // Returns the new vector.
    //     adsk.core.Vector3D.create = function (x, y, z) {
    //         if (x === null || (x !== undefined && !isFinite(x))) { throw new TypeError('x must be a number'); }
    //         if (y === null || (y !== undefined && !isFinite(y))) { throw new TypeError('y must be a number'); }
    //         if (z === null || (z !== undefined && !isFinite(z))) { throw new TypeError('z must be a number'); }
    //         var args;
    //         if (x !== undefined || y !== undefined || z !== undefined) {
    //             args = {};
    //             if (x !== undefined) {
    //                 args.x = Number(x);
    //             }
    //             if (y !== undefined) {
    //                 args.y = Number(y);
    //             }
    //             if (z !== undefined) {
    //                 args.z = Number(z);
    //             }
    //         }
    //         var result = adsk.core.Base._executeStatic('adsk.core.Vector3D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //     };

    //     // Adds a vector to this vector.
    //     // vector : The vector to add to this vector.
    //     // Returns true if successful.
    //     adsk.core.Vector3D.prototype.add = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Determines the angle between this vector and the specified vector.
    //     // vector : The vector to measure the angle to.
    //     // The angle in radians between this vector and the specified vector.
    //     adsk.core.Vector3D.prototype.angleTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('angleTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns a new point with the same coordinate values as this vector.
    //     // Return the new point.
    //     adsk.core.Vector3D.prototype.asPoint = function () {
    //         var result = this._execute('asPoint');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //     };

    //     // Creates a copy of this vector.
    //     // Returns the new vector copy.
    //     adsk.core.Vector3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //     };

    //     // Returns the cross product between this vector and the specified vector.
    //     // vector : The vector to take the cross product to.
    //     // Returns the vector cross product.
    //     adsk.core.Vector3D.prototype.crossProduct = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('crossProduct', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //     };

    //     // Returns the dot product between this vector and the specified vector.
    //     // vector : The vector to take the dot product to.
    //     // Returns the dot product value.
    //     adsk.core.Vector3D.prototype.dotProduct = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('dotProduct', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns the vector coordinates as an array [x, y, z].
    //     // Returns the array of vector coordinates [x, y, z].
    //     adsk.core.Vector3D.prototype.asArray = function () {
    //         var result = this._execute('asArray');
    //         return result ? result.value : undefined;
    //     };

    //     // Determines if this vector is equal to the specified vector.
    //     // vector : The vector to test equality to.
    //     // Returns true if the vectors are equal.
    //     adsk.core.Vector3D.prototype.isEqualTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('isEqualTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Determines if the input vector is parallel with this vector.
    //     // vector : The vector to test parallelism to.
    //     // Returns true if the vectors are parallel.
    //     adsk.core.Vector3D.prototype.isParallelTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('isParallelTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Determines if the input vector is perpendicular to this vector.
    //     // vector : The vector to test perpendicularity to.
    //     // Returns true if the vectors are perpendicular.
    //     adsk.core.Vector3D.prototype.isPerpendicularTo = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('isPerpendicularTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Makes this vector of unit length.
    //     // This vector should not be zero length.
    //     // Returns true if successful.
    //     adsk.core.Vector3D.prototype.normalize = function () {
    //         var result = this._execute('normalize');
    //         return result ? result.value : undefined;
    //     };

    //     // Reset this vector with the coordinate values in an array [x, y, z].
    //     // coordinates : The array of coordinate values.
    //     // Returns true if successful.
    //     adsk.core.Vector3D.prototype.setWithArray = function (coordinates) {
    //         if (!Array.isArray(coordinates)) { throw new TypeError('coordinates must be an array'); }
    //         var coordinatesLength = coordinates.length;
    //         var coordinatesIt;
    //         for (coordinatesIt = 0; coordinatesIt < coordinatesLength; ++coordinatesIt) {
    //             if (!isFinite(coordinates[coordinatesIt])) { throw new TypeError('coordinates[coordinatesIt] must be a number'); }
    //         }
    //         var args = {
    //             coordinates : coordinates
    //         };
    //         var result = this._execute('setWithArray', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Scale this vector by the specified product.
    //     // scale : The scale value.
    //     // Returns true if successful.
    //     adsk.core.Vector3D.prototype.scaleBy = function (scale) {
    //         if (!isFinite(scale)) { throw new TypeError('scale must be a number'); }
    //         var args = {
    //             scale : Number(scale)
    //         };
    //         var result = this._execute('scaleBy', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Subtract a vector from this vector.
    //     // vector : The vector to subtract.
    //     // Returns true if successful.
    //     adsk.core.Vector3D.prototype.subtract = function (vector) {
    //         if (vector !== null && !(vector instanceof adsk.core.Vector3D)) { throw new TypeError('vector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             vector : (vector === null ? vector : vector.handle)
    //         };
    //         var result = this._execute('subtract', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Transform this vector by the specified matrix.
    //     // matrix : The transformation matrix.
    //     // Returns true if successful.
    //     adsk.core.Vector3D.prototype.transformBy = function (matrix) {
    //         if (matrix !== null && !(matrix instanceof adsk.core.Matrix3D)) { throw new TypeError('matrix must be a adsk.core.Matrix3D'); }
    //         var args = {
    //             matrix : (matrix === null ? matrix : matrix.handle)
    //         };
    //         var result = this._execute('transformBy', args);
    //         return result ? result.value : undefined;
    //     };
}

//     //=========== VectorError ============
//     // Error values for various vector operations.
//     adsk.core.VectorError = {
//         ZeroLengthVectorError : 100
//     };

//=========== Arc2D ============
// Transient 2D arc. A transient arc is not displayed or saved in a document.
// Transient arcs are used as a wrapper to work with raw 2D arc information. They
// are created statically using one of the create methods supported by the Arc2D class.
interface Arc2D {
    cast(object: Object): Arc2D;

    // Gets and sets the center position of the arc.
    center: Point2D;

    //     // Gets and sets the radius of the arc.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'radius', {
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

    //     // Gets and sets the start angle of the arc in radians, where 0 is along the x axis.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'startAngle', {
    //         get : function () {
    //             var result = this._execute('startAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('startAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the end angle of the arc in radians, where 0 is along the x axis.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'endAngle', {
    //         get : function () {
    //             var result = this._execute('endAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('endAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Specifies if the sweep direction of the arc is clockwise or counterclockwise.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'isClockwise', {
    //         get : function () {
    //             var result = this._execute('isClockwise');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the position of the start point of the arc.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'startPoint', {
    //         get : function () {
    //             var result = this._execute('startPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         }
    //     });

    //     // Gets the position of the end point of the arc.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'endPoint', {
    //         get : function () {
    //             var result = this._execute('endPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the arc.
    //     Object.defineProperty(adsk.core.Arc2D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //         }
    //     });

    // Creates a transient 2D arc object specifying the center, radius and start and end angles.
    // A transient arc is not displayed or saved in a document. Transient arcs arcs are used as
    // a wrapper to work with raw 2D arc information.
    // center : A Point2D object that defines the center position of the arc in 2D space.
    // radius : The radius of the arc.
    // startAngle : The start angle in radians, where 0 is along the X-axis.
    // endAngle : The end angle in radians, where 0 is along the X-axis.
    // isClockwise : Specifies if the sweep of the arc is clockwise or counterclockwise from the start to end angle.
    // Returns the newly created arc or null if the creation failed.
    createByCenter(center: Point2D, radius: number, startAngle: number, endAngle: number, isClockwise: boolean): Arc2D;

    //     // Creates a transient 2D arc by specifying 3 points.
    //     // A transient arc is not displayed or saved in a document. Transient arcs arcs are used as
    //     // a wrapper to work with raw 2D arc information.
    //     // startPoint : The start point of the arc.
    //     // point : A point along the arc.
    //     // endPoint : The end point of the arc.
    //     // Returns the newly created arc or null if the creation failed.
    //     adsk.core.Arc2D.createByThreePoints = function (startPoint, point, endPoint) {
    //         if (startPoint !== null && !(startPoint instanceof adsk.core.Point2D)) { throw new TypeError('startPoint must be a adsk.core.Point2D'); }
    //         if (point !== null && !(point instanceof adsk.core.Point2D)) { throw new TypeError('point must be a adsk.core.Point2D'); }
    //         if (endPoint !== null && !(endPoint instanceof adsk.core.Point2D)) { throw new TypeError('endPoint must be a adsk.core.Point2D'); }
    //         var args = {
    //             startPoint : (startPoint === null ? startPoint : startPoint.handle),
    //             point : (point === null ? point : point.handle),
    //             endPoint : (endPoint === null ? endPoint : endPoint.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Arc2D', 'createByThreePoints', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc2D) : null;
    //     };

    //     // Creates and returns an independent copy of this Arc2D object.
    //     // Returns a new Arc2D object that is a copy of this Arc2D object.
    //     adsk.core.Arc2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc2D) : null;
    //     };

    //     // Gets all of the data defining the arc.
    //     // center : The output center point of the arc.
    //     // radius : The output radius of the arc.
    //     // startAngle : The output start angle of the arc in radians, where 0 is along the x axis.
    //     // endAngle : The output end angle of the arc in radians, where 0 is along the x axis.
    //     // isClockwise : The output value that indicates if the sweep direction is clockwise or counterclockwise.
    //     // Returns true if successful
    //     adsk.core.Arc2D.prototype.getData = function (center, radius, startAngle, endAngle, isClockwise) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof radius !== 'object') { throw new TypeError('radius must be an object'); }
    //         if (typeof startAngle !== 'object') { throw new TypeError('startAngle must be an object'); }
    //         if (typeof endAngle !== 'object') { throw new TypeError('endAngle must be an object'); }
    //         if (typeof isClockwise !== 'object') { throw new TypeError('isClockwise must be an object'); }
    //         var args = {
    //             center : null,
    //             radius : null,
    //             startAngle : null,
    //             endAngle : null,
    //             isClockwise : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point2D) : null;
    //             radius.value = (result.outargs.radius !== undefined) ? result.outargs.radius : undefined;
    //             startAngle.value = (result.outargs.startAngle !== undefined) ? result.outargs.startAngle : undefined;
    //             endAngle.value = (result.outargs.endAngle !== undefined) ? result.outargs.endAngle : undefined;
    //             isClockwise.value = (result.outargs.isClockwise !== undefined) ? result.outargs.isClockwise : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the arc.
    //     // center : A Point2D object defining the center position of the arc.
    //     // radius : The radius of the arc.
    //     // startAngle : The start angle of the arc in radians, where 0 is along the x axis.
    //     // endAngle : The end angle of the arc in radians, where 0 is along the x axis.
    //     // isClockwise : Indicates if the sweep direction is clockwise or counterclockwise.
    //     // Returns true if redefining the arc is successful
    //     adsk.core.Arc2D.prototype.set = function (center, radius, startAngle, endAngle, isClockwise) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         if (typeof isClockwise !== 'boolean') { throw new TypeError('isClockwise must be a boolean'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             radius : Number(radius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle),
    //             isClockwise : isClockwise
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Arc3D ============
// Transient 3D arc. A transient arc is not displayed or saved in a document.
// Transient 3D arcs are used as a wrapper to work with raw 3D arc information.
// They are created statically using one of the create methods of the Arc3D class.
interface Arc3D {
    cast(object: Object): Arc3D;

    //     // Gets and sets the center position of the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the normal of the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'normal', {
    //         get : function () {
    //             var result = this._execute('normal');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         }
    //     });

    //     // Gets and sets the reference vector of the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'referenceVector', {
    //         get : function () {
    //             var result = this._execute('referenceVector');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         }
    //     });

    //     // Gets and sets the radius of the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'radius', {
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

    //     // Gets and sets the start angle of the arc in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'startAngle', {
    //         get : function () {
    //             var result = this._execute('startAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('startAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the end angle of the arc in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'endAngle', {
    //         get : function () {
    //             var result = this._execute('endAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('endAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the start point of the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'startPoint', {
    //         get : function () {
    //             var result = this._execute('startPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         }
    //     });

    //     // Gets the end point of the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'endPoint', {
    //         get : function () {
    //             var result = this._execute('endPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the arc.
    //     Object.defineProperty(adsk.core.Arc3D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //         }
    //     });

    //     // Creates a transient 3D arc object by specifying a center point and radius.
    //     // center : The center point of the arc.
    //     // normal : The normal vector of the arc.
    //     // The plane perpendicular to this normal at the center point is the plane of the arc.
    //     // referenceVector : A reference vector from which the start and end angles are measured from.
    //     // This vector must be perpendicular to the normal vector.
    //     // radius : The radius of the arc.
    //     // startAngle : The start angle in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     // endAngle : The end angle in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     // Returns the newly created arc or null if the creation failed.
    //     adsk.core.Arc3D.createByCenter = function (center, normal, referenceVector, radius, startAngle, endAngle) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (referenceVector !== null && !(referenceVector instanceof adsk.core.Vector3D)) { throw new TypeError('referenceVector must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             referenceVector : (referenceVector === null ? referenceVector : referenceVector.handle),
    //             radius : Number(radius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Arc3D', 'createByCenter', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc3D) : null;
    //     };

    //     // Creates a transient 3D arc by specifying 3 points.
    //     // A transient arc is not displayed or saved in a document. Transient arcs arcs are used as
    //     // a wrapper to work with raw 3D arc information.
    //     // pointOne : The start point of the arc.
    //     // pointTwo : A point along the arc.
    //     // This point must not be coincident with the first or third points.
    //     // This point must not lie on the line between the first and third points.
    //     // pointThree : The end point of the arc.
    //     // This point must not be coincident with the first or second points.
    //     // Returns the newly created arc or null if the creation failed.
    //     adsk.core.Arc3D.createByThreePoints = function (pointOne, pointTwo, pointThree) {
    //         if (pointOne !== null && !(pointOne instanceof adsk.core.Point3D)) { throw new TypeError('pointOne must be a adsk.core.Point3D'); }
    //         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Point3D)) { throw new TypeError('pointTwo must be a adsk.core.Point3D'); }
    //         if (pointThree !== null && !(pointThree instanceof adsk.core.Point3D)) { throw new TypeError('pointThree must be a adsk.core.Point3D'); }
    //         var args = {
    //             pointOne : (pointOne === null ? pointOne : pointOne.handle),
    //             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle),
    //             pointThree : (pointThree === null ? pointThree : pointThree.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Arc3D', 'createByThreePoints', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc3D) : null;
    //     };

    //     // Sets the normal and reference vectors of the arc.
    //     // normal : The new normal vector.
    //     // referenceVector : The new reference vector from which the start and end angles are measured from.
    //     // The reference vector must be perpendicular to the normal vector.
    //     // Returns true if successful
    //     adsk.core.Arc3D.prototype.setAxes = function (normal, referenceVector) {
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (referenceVector !== null && !(referenceVector instanceof adsk.core.Vector3D)) { throw new TypeError('referenceVector must be a adsk.core.Vector3D'); }
    //         var args = {
    //             normal : (normal === null ? normal : normal.handle),
    //             referenceVector : (referenceVector === null ? referenceVector : referenceVector.handle)
    //         };
    //         var result = this._execute('setAxes', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns an independent copy of this Arc3D object.
    //     // Returns a new Arc3D object that is a copy of this Arc3D object.
    //     adsk.core.Arc3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Arc3D) : null;
    //     };

    //     // Gets all of the data defining the arc.
    //     // center : The output center point of the arc.
    //     // normal : The output normal vector.
    //     // referenceVector : The output reference vector.
    //     // radius : The output radius of the arc.
    //     // startAngle : The output start angle in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     // endAngle : The output end angle in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     // Returns true if successful
    //     adsk.core.Arc3D.prototype.getData = function (center, normal, referenceVector, radius, startAngle, endAngle) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof normal !== 'object') { throw new TypeError('normal must be an object'); }
    //         if (typeof referenceVector !== 'object') { throw new TypeError('referenceVector must be an object'); }
    //         if (typeof radius !== 'object') { throw new TypeError('radius must be an object'); }
    //         if (typeof startAngle !== 'object') { throw new TypeError('startAngle must be an object'); }
    //         if (typeof endAngle !== 'object') { throw new TypeError('endAngle must be an object'); }
    //         var args = {
    //             center : null,
    //             normal : null,
    //             referenceVector : null,
    //             radius : null,
    //             startAngle : null,
    //             endAngle : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point3D) : null;
    //             normal.value = (result.outargs.normal !== undefined) ? adsk.createObject(result.outargs.normal, adsk.core.Vector3D) : null;
    //             referenceVector.value = (result.outargs.referenceVector !== undefined) ? adsk.createObject(result.outargs.referenceVector, adsk.core.Vector3D) : null;
    //             radius.value = (result.outargs.radius !== undefined) ? result.outargs.radius : undefined;
    //             startAngle.value = (result.outargs.startAngle !== undefined) ? result.outargs.startAngle : undefined;
    //             endAngle.value = (result.outargs.endAngle !== undefined) ? result.outargs.endAngle : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the arc.
    //     // center : The center point of the arc.
    //     // normal : The normal vector of the arc.
    //     // The plane perpendicular to this normal at the center point is the plane of the arc.
    //     // referenceVector : A reference vector from which the start and end angles are measured from.
    //     // This vector must be perpendicular to the normal vector.
    //     // radius : The radius of the arc.
    //     // startAngle : The start angle in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     // endAngle : The end angle in radians.
    //     // This angle is measured from the reference vector using the right hand rule around the normal vector.
    //     // Returns true if successful
    //     adsk.core.Arc3D.prototype.set = function (center, normal, referenceVector, radius, startAngle, endAngle) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (referenceVector !== null && !(referenceVector instanceof adsk.core.Vector3D)) { throw new TypeError('referenceVector must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             referenceVector : (referenceVector === null ? referenceVector : referenceVector.handle),
    //             radius : Number(radius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Circle2D ============
// Transient 2D circle. A transient circle is not displayed or saved in a document.
// Transient circles are used as a wrapper to work with raw 2D arc information. They
// are created statically using one of the create methods of the Circle2D class.
interface Circle2D {
    cast(object: Object): Circle2D;

    //     // Gets and sets the center position of the circle.
    //     Object.defineProperty(adsk.core.Circle2D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point2D)) { throw new TypeError('value must be a adsk.core.Point2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the radius of the circle.
    //     Object.defineProperty(adsk.core.Circle2D.prototype, 'radius', {
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

    //     // Returns a NURBS curve that is geometrically identical to the circle.
    //     Object.defineProperty(adsk.core.Circle2D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //         }
    //     });

    //     // Creates a transient 2D circle object by specifying a center and radius.
    //     // center : A Point2D object that defines the center of the circle.
    //     // radius : The radius of the circle.
    //     // Returns the new Circle2D object or null if the creation failed.
    //     adsk.core.Circle2D.createByCenter = function (center, radius) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             radius : Number(radius)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Circle2D', 'createByCenter', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle2D) : null;
    //     };

    //     // Creates a transient 2D circle through three points.
    //     // pointOne : The first point on the circle.
    //     // pointTwo : The second point on the circle.
    //     // pointThree : The third point on the circle.
    //     // Returns the new Circle2D object or null if the creation failed.
    //     adsk.core.Circle2D.createByThreePoints = function (pointOne, pointTwo, pointThree) {
    //         if (pointOne !== null && !(pointOne instanceof adsk.core.Point2D)) { throw new TypeError('pointOne must be a adsk.core.Point2D'); }
    //         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Point2D)) { throw new TypeError('pointTwo must be a adsk.core.Point2D'); }
    //         if (pointThree !== null && !(pointThree instanceof adsk.core.Point2D)) { throw new TypeError('pointThree must be a adsk.core.Point2D'); }
    //         var args = {
    //             pointOne : (pointOne === null ? pointOne : pointOne.handle),
    //             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle),
    //             pointThree : (pointThree === null ? pointThree : pointThree.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Circle2D', 'createByThreePoints', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle2D) : null;
    //     };

    //     // Creates and returns an independent copy of this Circle2D object.
    //     // Returns an independent copy of this Circle2D object.
    //     adsk.core.Circle2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle2D) : null;
    //     };

    //     // Gets all of the data defining the circle.
    //     // center : The output point defining the center position of the circle.
    //     // radius : The output radius of the circle.
    //     // Returns true if successful.
    //     adsk.core.Circle2D.prototype.getData = function (center, radius) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof radius !== 'object') { throw new TypeError('radius must be an object'); }
    //         var args = {
    //             center : null,
    //             radius : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point2D) : null;
    //             radius.value = (result.outargs.radius !== undefined) ? result.outargs.radius : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the circle.
    //     // center : A point that defines the center position of the circle.
    //     // radius : The radius of the circle.
    //     // Returns true if redefining the circle is successful
    //     adsk.core.Circle2D.prototype.set = function (center, radius) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             radius : Number(radius)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Circle3D ============
// Transient 3D circle. A transient circle is not displayed or saved in a document.
// Transient 3D circles are used as a wrapper to work with raw 3D circle information.
// They are created statically using one of the create methods of the Circle3D class.
interface Circle3D {
    cast(object: Object): Circle3D;

    //     // Gets and sets the center position of the circle.
    //     Object.defineProperty(adsk.core.Circle3D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the normal of the circle.
    //     Object.defineProperty(adsk.core.Circle3D.prototype, 'normal', {
    //         get : function () {
    //             var result = this._execute('normal');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('normal', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the radius of the circle.
    //     Object.defineProperty(adsk.core.Circle3D.prototype, 'radius', {
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

    //     // Returns a NURBS curve that is geometrically identical to the circle.
    //     Object.defineProperty(adsk.core.Circle3D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //         }
    //     });

    //     // Creates a transient 3D circle object by specifying a center and radius.
    //     // center : The center point of the circle.
    //     // normal : The normal vector of the circle.
    //     // The plane through the center point and perpendicular to the normal vector defines the plane of the circle.
    //     // radius : The radius of the circle.
    //     // Returns the new Circle3D object or null if the creation failed.
    //     adsk.core.Circle3D.createByCenter = function (center, normal, radius) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             radius : Number(radius)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Circle3D', 'createByCenter', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle3D) : null;
    //     };

    //     // Creates a transient 3D circle through three points.
    //     // pointOne : The first point on the circle.
    //     // pointTwo : The second point on the circle.
    //     // This point cannot be coincident with pointOne or pointThree.
    //     // This point cannot lie on the line defined by pointOne and pointThree.
    //     // pointThree : The third point on the circle.
    //     // This point cannot be coincident with pointOne or pointThree.
    //     // Returns the new Circle3D object or null if the creation failed.
    //     adsk.core.Circle3D.createByThreePoints = function (pointOne, pointTwo, pointThree) {
    //         if (pointOne !== null && !(pointOne instanceof adsk.core.Point3D)) { throw new TypeError('pointOne must be a adsk.core.Point3D'); }
    //         if (pointTwo !== null && !(pointTwo instanceof adsk.core.Point3D)) { throw new TypeError('pointTwo must be a adsk.core.Point3D'); }
    //         if (pointThree !== null && !(pointThree instanceof adsk.core.Point3D)) { throw new TypeError('pointThree must be a adsk.core.Point3D'); }
    //         var args = {
    //             pointOne : (pointOne === null ? pointOne : pointOne.handle),
    //             pointTwo : (pointTwo === null ? pointTwo : pointTwo.handle),
    //             pointThree : (pointThree === null ? pointThree : pointThree.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Circle3D', 'createByThreePoints', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle3D) : null;
    //     };

    //     // Creates and returns an independent copy of this Circle3D object.
    //     // Returns an independent copy of this Circle3D object.
    //     adsk.core.Circle3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Circle3D) : null;
    //     };

    //     // Gets all of the data defining the circle.
    //     // center : The output center point of the circle.
    //     // normal : The output normal vector.
    //     // radius : The output radius of the circle.
    //     // Returns true if successful
    //     adsk.core.Circle3D.prototype.getData = function (center, normal, radius) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof normal !== 'object') { throw new TypeError('normal must be an object'); }
    //         if (typeof radius !== 'object') { throw new TypeError('radius must be an object'); }
    //         var args = {
    //             center : null,
    //             normal : null,
    //             radius : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point3D) : null;
    //             normal.value = (result.outargs.normal !== undefined) ? adsk.createObject(result.outargs.normal, adsk.core.Vector3D) : null;
    //             radius.value = (result.outargs.radius !== undefined) ? result.outargs.radius : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the circle.
    //     // center : The center point of the circle.
    //     // normal : The normal vector of the circle.
    //     // The plane through the center point and perpendicular to the normal vector defines the plane of the circle.
    //     // radius : The radius of the circle.
    //     // Returns true if successful
    //     adsk.core.Circle3D.prototype.set = function (center, normal, radius) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             radius : Number(radius)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Cone ============
// Transient cone. A transient cone is not displayed or saved in a document.
// A transient cone is used as a wrapper to work with raw cone information.
// A transient cone has no boundaries.
// The cone always goes to a point in its narrowing direction, and is infinite in its
// widening direction.
// They are created statically using the create method of the Cone class.
interface Cone {
    cast(object: Object): Cone;

    //     // Gets and sets the origin point (center) of the base of the cone.
    //     Object.defineProperty(adsk.core.Cone.prototype, 'origin', {
    //         get : function () {
    //             var result = this._execute('origin');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('origin', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the center axis (along the length) of the cone that defines its
    //     // normal direction.
    //     Object.defineProperty(adsk.core.Cone.prototype, 'axis', {
    //         get : function () {
    //             var result = this._execute('axis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('axis', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the radius of the cone.
    //     Object.defineProperty(adsk.core.Cone.prototype, 'radius', {
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

    //     // Gets and sets the taper half-angle of the cone in radians.
    //     // A negative value indicates that the cone is narrowing in the direction of the
    //     // axis vector, whereas a positive value indicates that it is expanding in the direction of
    //     // the axis vector.
    //     Object.defineProperty(adsk.core.Cone.prototype, 'halfAngle', {
    //         get : function () {
    //             var result = this._execute('halfAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('halfAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient cone object.
    //     // origin : The origin point (center) of the base of the cone.
    //     // axis : The center axis (along the length) of the cone that defines its normal direction.
    //     // radius : The radius of the cone.
    //     // halfAngle : The taper half-angle of the cone.
    //     // Returns the new Cone object or null if the creation failed.
    //     adsk.core.Cone.create = function (origin, axis, radius, halfAngle) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         if (!isFinite(halfAngle)) { throw new TypeError('halfAngle must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             radius : Number(radius),
    //             halfAngle : Number(halfAngle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Cone', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Cone) : null;
    //     };

    //     // Gets the data that defines the cone.
    //     // origin : The output origin point (center) of the base of the cone.
    //     // axis : The output center axis (along the length) of the cone that defines its normal direction.
    //     // radius : The output radius of the cone.
    //     // halfAngle : The output taper half-angle of the cone.
    //     // Returns true if successful.
    //     adsk.core.Cone.prototype.getData = function (origin, axis, radius, halfAngle) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof axis !== 'object') { throw new TypeError('axis must be an object'); }
    //         if (typeof radius !== 'object') { throw new TypeError('radius must be an object'); }
    //         if (typeof halfAngle !== 'object') { throw new TypeError('halfAngle must be an object'); }
    //         var args = {
    //             origin : null,
    //             axis : null,
    //             radius : null,
    //             halfAngle : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point3D) : null;
    //             axis.value = (result.outargs.axis !== undefined) ? adsk.createObject(result.outargs.axis, adsk.core.Vector3D) : null;
    //             radius.value = (result.outargs.radius !== undefined) ? result.outargs.radius : undefined;
    //             halfAngle.value = (result.outargs.halfAngle !== undefined) ? result.outargs.halfAngle : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the data that defines the cone.
    //     // origin : The origin point (center) of the base of the cone.
    //     // axis : The center axis (along the length) of the cone that defines its normal direction.
    //     // radius : The radius of the cone.
    //     // halfAngle : The taper half-angle of the cone.
    //     // Returns true if successful.
    //     adsk.core.Cone.prototype.set = function (origin, axis, radius, halfAngle) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         if (!isFinite(halfAngle)) { throw new TypeError('halfAngle must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             radius : Number(radius),
    //             halfAngle : Number(halfAngle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns an independent copy of this Cone object.
    //     // Returns a new Cone object that is a copy of this Cone object.
    //     adsk.core.Cone.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Cone) : null;
    //     };
}

//=========== Cylinder ============
// Transient cylinder. A transient cylinder is not displayed or saved in a document.
// A transient cylinder is but is used as a wrapper to work with raw cylinder information.
// A transient cylinder has no boundaries and is infinite in length.
// They are created statically using the create method of the Cylinder class.
interface Cylinder {
    cast(object: Object): Cylinder;

    //     // The origin point (center) of the base of the cylinder.
    //     Object.defineProperty(adsk.core.Cylinder.prototype, 'origin', {
    //         get : function () {
    //             var result = this._execute('origin');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('origin', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // The center axis (along the length) of the cylinder that defines its normal direction.
    //     Object.defineProperty(adsk.core.Cylinder.prototype, 'axis', {
    //         get : function () {
    //             var result = this._execute('axis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('axis', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // The radius of the cylinder.
    //     Object.defineProperty(adsk.core.Cylinder.prototype, 'radius', {
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

    //     // Creates a transient cylinder object.
    //     // origin : The origin point (center) of the base of the cylinder.
    //     // axis : The center axis (along the length) of the cylinder that defines its normal direction.
    //     // radius : The radius of the cylinder.
    //     // Returns the new Cylinder object or null if the creation failed.
    //     adsk.core.Cylinder.create = function (origin, axis, radius) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             radius : Number(radius)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Cylinder', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Cylinder) : null;
    //     };

    //     // Gets the data that defines the cylinder.
    //     // origin : The output origin point (center) of the base of the cylinder.
    //     // axis : The output center axis (along the length) of the cylinder that defines its normal direction.
    //     // radius : The output radius of the cylinder.
    //     // Returns true if successful.
    //     adsk.core.Cylinder.prototype.getData = function (origin, axis, radius) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof axis !== 'object') { throw new TypeError('axis must be an object'); }
    //         if (typeof radius !== 'object') { throw new TypeError('radius must be an object'); }
    //         var args = {
    //             origin : null,
    //             axis : null,
    //             radius : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point3D) : null;
    //             axis.value = (result.outargs.axis !== undefined) ? adsk.createObject(result.outargs.axis, adsk.core.Vector3D) : null;
    //             radius.value = (result.outargs.radius !== undefined) ? result.outargs.radius : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the data that defines the cylinder.
    //     // origin : The origin point (center) of the base of the cylinder.
    //     // axis : The center axis (along the length) of the cylinder that defines its normal direction.
    //     // radius : The radius of the cylinder.
    //     // Returns true if successful.
    //     adsk.core.Cylinder.prototype.set = function (origin, axis, radius) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(radius)) { throw new TypeError('radius must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             radius : Number(radius)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns an independent copy of this Cylinder object.
    //     // Returns a new Cylinder object that is a copy of this Cylinder object.
    //     adsk.core.Cylinder.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Cylinder) : null;
    //     };
}

//=========== Ellipse2D ============
// Transient 2D ellipse. A transient ellipse is not displayed or saved in a document.
// Transient 2D ellipses are used as a wrapper to work with raw 2D ellipse information.
// They are created statically using the create method of the Ellipse2D class.
interface Ellipse2D {
    cast(object: Object): Ellipse2D;

    //     // Gets and sets the center position of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse2D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point2D)) { throw new TypeError('value must be a adsk.core.Point2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the major axis of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse2D.prototype, 'majorAxis', {
    //         get : function () {
    //             var result = this._execute('majorAxis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector2D)) { throw new TypeError('value must be a adsk.core.Vector2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('majorAxis', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the major radius of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse2D.prototype, 'majorRadius', {
    //         get : function () {
    //             var result = this._execute('majorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('majorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minor radius of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse2D.prototype, 'minorRadius', {
    //         get : function () {
    //             var result = this._execute('minorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse2D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //         }
    //     });

    //     // Creates a transient 2D ellipse by specifying a center position, major and minor axes,
    //     // and major and minor radii.
    //     // center : A Point2D object that defines the center of the ellipse.
    //     // majorAxis : The major axis of the ellipse
    //     // majorRadius : The major radius of the of the ellipse.
    //     // minorRadius : The minor radius of the of the ellipse.
    //     // Returns the new Ellipse 2D object or null if the creation failed.
    //     adsk.core.Ellipse2D.create = function (center, majorAxis, majorRadius, minorRadius) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector2D)) { throw new TypeError('majorAxis must be a adsk.core.Vector2D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Ellipse2D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Ellipse2D) : null;
    //     };

    //     // Creates and returns a copy of this Ellipse2D object.
    //     // Returns a new Ellipse2D object that is a copy of this Ellipse2D object.
    //     adsk.core.Ellipse2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Ellipse2D) : null;
    //     };

    //     // Gets all of the data defining the ellipse.
    //     // center : The output center point of the ellipse.
    //     // majorAxis : The output major axis of the ellipse.
    //     // majorRadius : The output major radius of the of the ellipse.
    //     // minorRadius : The output minor radius of the of the ellipse.
    //     // Returns true if successful.
    //     adsk.core.Ellipse2D.prototype.getData = function (center, majorAxis, majorRadius, minorRadius) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof majorAxis !== 'object') { throw new TypeError('majorAxis must be an object'); }
    //         if (typeof majorRadius !== 'object') { throw new TypeError('majorRadius must be an object'); }
    //         if (typeof minorRadius !== 'object') { throw new TypeError('minorRadius must be an object'); }
    //         var args = {
    //             center : null,
    //             majorAxis : null,
    //             majorRadius : null,
    //             minorRadius : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point2D) : null;
    //             majorAxis.value = (result.outargs.majorAxis !== undefined) ? adsk.createObject(result.outargs.majorAxis, adsk.core.Vector2D) : null;
    //             majorRadius.value = (result.outargs.majorRadius !== undefined) ? result.outargs.majorRadius : undefined;
    //             minorRadius.value = (result.outargs.minorRadius !== undefined) ? result.outargs.minorRadius : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the ellipse.
    //     // center : A Point2D object that defines the center of the ellipse.
    //     // majorAxis : The major axis of the ellipse.
    //     // majorRadius : The major radius of the of the ellipse.
    //     // minorRadius : The minor radius of the of the ellipse.
    //     // Returns true if redefining the ellipse is successful.
    //     adsk.core.Ellipse2D.prototype.set = function (center, majorAxis, majorRadius, minorRadius) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector2D)) { throw new TypeError('majorAxis must be a adsk.core.Vector2D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Ellipse3D ============
// Transient 3D ellipse. A transient ellipse is n0t displayed or saved in a document.
// Transient 3D ellipses are used as a wrapper to work with raw 3D ellipse information.
// They are created statically using the create method of the Ellipse3D class.
interface Ellipse3D {
    cast(object: Object): Ellipse3D;

    //     // Gets and sets the center position of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse3D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the normal of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse3D.prototype, 'normal', {
    //         get : function () {
    //             var result = this._execute('normal');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         }
    //     });

    //     // Gets and sets the major axis of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse3D.prototype, 'majorAxis', {
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

    //     // Gets and sets the major radius of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse3D.prototype, 'majorRadius', {
    //         get : function () {
    //             var result = this._execute('majorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('majorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minor radius of the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse3D.prototype, 'minorRadius', {
    //         get : function () {
    //             var result = this._execute('minorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the ellipse.
    //     Object.defineProperty(adsk.core.Ellipse3D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //         }
    //     });

    //     // Creates a transient 3D ellipse object.
    //     // center : The center point of the ellipse.
    //     // normal : The normal vector of the ellipse.
    //     // The plane through the center point and perpendicular to the normal vector defines the plane of the ellipse.
    //     // majorAxis : The major axis of the ellipse
    //     // majorRadius : The major radius of the of the ellipse.
    //     // minorRadius : The minor radius of the of the ellipse.
    //     // Returns the new Ellipse 3D object or null if the creation failed.
    //     adsk.core.Ellipse3D.create = function (center, normal, majorAxis, majorRadius, minorRadius) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Ellipse3D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Ellipse3D) : null;
    //     };

    //     // Creates a copy of this Ellipse3D object.
    //     // Returns the independent copy of the ellipse.
    //     adsk.core.Ellipse3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Ellipse3D) : null;
    //     };

    //     // Gets all of the data defining the ellipse.
    //     // center : The output center point of the ellipse.
    //     // normal : The output normal vector of the ellipse.
    //     // majorAxis : The output major axis of the ellipse
    //     // majorRadius : The output major radius of the of the ellipse.
    //     // minorRadius : The output minor radius of the of the ellipse.
    //     // Returns true if successful.
    //     adsk.core.Ellipse3D.prototype.getData = function (center, normal, majorAxis, majorRadius, minorRadius) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof normal !== 'object') { throw new TypeError('normal must be an object'); }
    //         if (typeof majorAxis !== 'object') { throw new TypeError('majorAxis must be an object'); }
    //         if (typeof majorRadius !== 'object') { throw new TypeError('majorRadius must be an object'); }
    //         if (typeof minorRadius !== 'object') { throw new TypeError('minorRadius must be an object'); }
    //         var args = {
    //             center : null,
    //             normal : null,
    //             majorAxis : null,
    //             majorRadius : null,
    //             minorRadius : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point3D) : null;
    //             normal.value = (result.outargs.normal !== undefined) ? adsk.createObject(result.outargs.normal, adsk.core.Vector3D) : null;
    //             majorAxis.value = (result.outargs.majorAxis !== undefined) ? adsk.createObject(result.outargs.majorAxis, adsk.core.Vector3D) : null;
    //             majorRadius.value = (result.outargs.majorRadius !== undefined) ? result.outargs.majorRadius : undefined;
    //             minorRadius.value = (result.outargs.minorRadius !== undefined) ? result.outargs.minorRadius : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the ellipse.
    //     // center : The center point of the ellipse.
    //     // normal : The normal vector of the ellipse.
    //     // The plane through the center point and perpendicular to the normal vector defines the plane of the ellipse.
    //     // majorAxis : The major axis of the ellipse.
    //     // majorRadius : The major radius of the of the ellipse.
    //     // minorRadius : The minor radius of the of the ellipse.
    //     // Returns true if successful.
    //     adsk.core.Ellipse3D.prototype.set = function (center, normal, majorAxis, majorRadius, minorRadius) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== EllipticalArc2D ============
// Transient 2D elliptical arc. A transient elliptical arc is not displayed or saved in a document.
// Transient 2D elliptical arcs are used as a wrapper to work with raw 2D elliptical arc information.
// They are created statically using the create method of the EllipticalArc2D class.
interface EllipticalArc2D {
    cast(object: Object): EllipticalArc2D;
    //     // Gets and sets the center position of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point2D)) { throw new TypeError('value must be a adsk.core.Point2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the major axis of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'majorAxis', {
    //         get : function () {
    //             var result = this._execute('majorAxis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector2D)) { throw new TypeError('value must be a adsk.core.Vector2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('majorAxis', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the major radius of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'majorRadius', {
    //         get : function () {
    //             var result = this._execute('majorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('majorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minor radius of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'minorRadius', {
    //         get : function () {
    //             var result = this._execute('minorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'startAngle', {
    //         get : function () {
    //             var result = this._execute('startAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('startAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'endAngle', {
    //         get : function () {
    //             var result = this._execute('endAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('endAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if the sweep direction of the elliptical arc is clockwise or counterclockwise.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'isClockwise', {
    //         get : function () {
    //             var result = this._execute('isClockwise');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if the elliptical arc is the geometric equivalent of a circular arc
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'isCircular', {
    //         get : function () {
    //             var result = this._execute('isCircular');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the position of the start point of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'startPoint', {
    //         get : function () {
    //             var result = this._execute('startPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         }
    //     });

    //     // Gets the position of the end point of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'endPoint', {
    //         get : function () {
    //             var result = this._execute('endPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc2D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //         }
    //     });

    //     // Creates a transient 2D elliptical arc
    //     // center : A Point2D object that defines the center of the elliptical arc.
    //     // majorAxis : The major axis of the elliptical arc
    //     // majorRadius : The major radius of the of the elliptical arc.
    //     // minorRadius : The minor radius of the of the elliptical arc.
    //     // startAngle : The start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // endAngle : The end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // Returns the newly created elliptical arc or null if the creation failed.
    //     adsk.core.EllipticalArc2D.create = function (center, majorAxis, majorRadius, minorRadius, startAngle, endAngle) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector2D)) { throw new TypeError('majorAxis must be a adsk.core.Vector2D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.EllipticalArc2D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalArc2D) : null;
    //     };

    //     // Creates and returns a copy of this EllipticalArc2D object.
    //     // Returns a new EllipticalArc2D object that is a copy of this Arc2D object.
    //     adsk.core.EllipticalArc2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalArc2D) : null;
    //     };

    //     // Gets all of the data defining the elliptical arc.
    //     // center : The output center point of the elliptical arc.
    //     // majorAxis : The output major axis of the elliptical arc.
    //     // majorRadius : The output major radius of the of the elliptical arc.
    //     // minorRadius : The output minor radius of the of the elliptical arc.
    //     // startAngle : The output start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // endAngle : The output end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // Returns true if successful
    //     adsk.core.EllipticalArc2D.prototype.getData = function (center, majorAxis, majorRadius, minorRadius, startAngle, endAngle) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof majorAxis !== 'object') { throw new TypeError('majorAxis must be an object'); }
    //         if (typeof majorRadius !== 'object') { throw new TypeError('majorRadius must be an object'); }
    //         if (typeof minorRadius !== 'object') { throw new TypeError('minorRadius must be an object'); }
    //         if (typeof startAngle !== 'object') { throw new TypeError('startAngle must be an object'); }
    //         if (typeof endAngle !== 'object') { throw new TypeError('endAngle must be an object'); }
    //         var args = {
    //             center : null,
    //             majorAxis : null,
    //             majorRadius : null,
    //             minorRadius : null,
    //             startAngle : null,
    //             endAngle : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point2D) : null;
    //             majorAxis.value = (result.outargs.majorAxis !== undefined) ? adsk.createObject(result.outargs.majorAxis, adsk.core.Vector2D) : null;
    //             majorRadius.value = (result.outargs.majorRadius !== undefined) ? result.outargs.majorRadius : undefined;
    //             minorRadius.value = (result.outargs.minorRadius !== undefined) ? result.outargs.minorRadius : undefined;
    //             startAngle.value = (result.outargs.startAngle !== undefined) ? result.outargs.startAngle : undefined;
    //             endAngle.value = (result.outargs.endAngle !== undefined) ? result.outargs.endAngle : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // center : A Point2D object that defines the center of the elliptical arc.
    //     // majorAxis : The major axis of the elliptical arc.
    //     // majorRadius : The major radius of the of the elliptical arc.
    //     // minorRadius : The minor radius of the of the elliptical arc.
    //     // startAngle : The start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // endAngle : The end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // Returns true if redefining the elliptical arc is successful
    //     adsk.core.EllipticalArc2D.prototype.set = function (center, majorAxis, majorRadius, minorRadius, startAngle, endAngle) {
    //         if (center !== null && !(center instanceof adsk.core.Point2D)) { throw new TypeError('center must be a adsk.core.Point2D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector2D)) { throw new TypeError('majorAxis must be a adsk.core.Vector2D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== EllipticalArc3D ============
// Transient 3D elliptical arc. A transient elliptical arc is not displayed or saved in a document.
// Transient 3D elliptical arcs are used as a wrapper to work with raw 3D elliptical arc information.
// They are created statically using the create method of the EllipticalArc3D class.
interface EllipticalArc3D {
    cast(object: Object): EllipticalArc3D;
    //     // Gets and sets the center point of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'center', {
    //         get : function () {
    //             var result = this._execute('center');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('center', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the normal of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'normal', {
    //         get : function () {
    //             var result = this._execute('normal');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         }
    //     });

    //     // Gets and sets the major axis of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'majorAxis', {
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

    //     // Gets and sets the major radius of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'majorRadius', {
    //         get : function () {
    //             var result = this._execute('majorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('majorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minor radius of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'minorRadius', {
    //         get : function () {
    //             var result = this._execute('minorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the start angle of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'startAngle', {
    //         get : function () {
    //             var result = this._execute('startAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('startAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the end angle of the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'endAngle', {
    //         get : function () {
    //             var result = this._execute('endAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('endAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the elliptical arc.
    //     Object.defineProperty(adsk.core.EllipticalArc3D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //         }
    //     });

    //     // Creates a transient 3D elliptical arc.
    //     // center : The center point of the elliptical arc.
    //     // normal : The normal vector of the elliptical arc.
    //     // majorAxis : The major axis of the elliptical arc.
    //     // majorRadius : The major radius of the of the elliptical arc.
    //     // minorRadius : The minor radius of the of the elliptical arc.
    //     // startAngle : The start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // endAngle : The end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // Returns the newly created elliptical arc or null if the creation failed.
    //     adsk.core.EllipticalArc3D.create = function (center, normal, majorAxis, majorRadius, minorRadius, startAngle, endAngle) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.EllipticalArc3D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalArc3D) : null;
    //     };

    //     // Creates and returns a copy of this EllipticalArc3D object.
    //     // Returns a new EllipticalArc3D object that is a copy of this Arc3D object.
    //     adsk.core.EllipticalArc3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalArc3D) : null;
    //     };

    //     // Gets all of the data defining the elliptical arc.
    //     // center : The output center point of the elliptical arc.
    //     // normal : The output normal vector of the elliptical arc.
    //     // majorAxis : The output major axis of the elliptical arc.
    //     // majorRadius : The output major radius of the of the elliptical arc.
    //     // minorRadius : The output minor radius of the of the elliptical arc.
    //     // startAngle : The output start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // endAngle : The output end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // Returns true if successful.
    //     adsk.core.EllipticalArc3D.prototype.getData = function (center, normal, majorAxis, majorRadius, minorRadius, startAngle, endAngle) {
    //         if (typeof center !== 'object') { throw new TypeError('center must be an object'); }
    //         if (typeof normal !== 'object') { throw new TypeError('normal must be an object'); }
    //         if (typeof majorAxis !== 'object') { throw new TypeError('majorAxis must be an object'); }
    //         if (typeof majorRadius !== 'object') { throw new TypeError('majorRadius must be an object'); }
    //         if (typeof minorRadius !== 'object') { throw new TypeError('minorRadius must be an object'); }
    //         if (typeof startAngle !== 'object') { throw new TypeError('startAngle must be an object'); }
    //         if (typeof endAngle !== 'object') { throw new TypeError('endAngle must be an object'); }
    //         var args = {
    //             center : null,
    //             normal : null,
    //             majorAxis : null,
    //             majorRadius : null,
    //             minorRadius : null,
    //             startAngle : null,
    //             endAngle : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             center.value = (result.outargs.center !== undefined) ? adsk.createObject(result.outargs.center, adsk.core.Point3D) : null;
    //             normal.value = (result.outargs.normal !== undefined) ? adsk.createObject(result.outargs.normal, adsk.core.Vector3D) : null;
    //             majorAxis.value = (result.outargs.majorAxis !== undefined) ? adsk.createObject(result.outargs.majorAxis, adsk.core.Vector3D) : null;
    //             majorRadius.value = (result.outargs.majorRadius !== undefined) ? result.outargs.majorRadius : undefined;
    //             minorRadius.value = (result.outargs.minorRadius !== undefined) ? result.outargs.minorRadius : undefined;
    //             startAngle.value = (result.outargs.startAngle !== undefined) ? result.outargs.startAngle : undefined;
    //             endAngle.value = (result.outargs.endAngle !== undefined) ? result.outargs.endAngle : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the elliptical arc.
    //     // center : The center point of the elliptical arc.
    //     // normal : The normal vector of the elliptical arc.
    //     // majorAxis : The major axis of the elliptical arc.
    //     // majorRadius : The major radius of the of the elliptical arc.
    //     // minorRadius : The minor radius of the of the elliptical arc.
    //     // startAngle : The start angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // endAngle : The end angle of the elliptical arc in radians, where 0 is along the major axis.
    //     // Returns true if successful.
    //     adsk.core.EllipticalArc3D.prototype.set = function (center, normal, majorAxis, majorRadius, minorRadius, startAngle, endAngle) {
    //         if (center !== null && !(center instanceof adsk.core.Point3D)) { throw new TypeError('center must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         if (!isFinite(startAngle)) { throw new TypeError('startAngle must be a number'); }
    //         if (!isFinite(endAngle)) { throw new TypeError('endAngle must be a number'); }
    //         var args = {
    //             center : (center === null ? center : center.handle),
    //             normal : (normal === null ? normal : normal.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius),
    //             startAngle : Number(startAngle),
    //             endAngle : Number(endAngle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== EllipticalCone ============
// Transient elliptical cone. A transient elliptical cone is not displayed or saved in a document.
// A transient elliptical cone is used as a wrapper to work with raw elliptical cone information.
// A transient elliptical cone has no boundaries.
// The cone always goes to a point in its narrowing direction, and is infinite in its
// widening direction.
// They are created statically using the create method of the EllipticalCone class.
interface EllipticalCone {
    cast(object: Object): EllipticalCone;

    //     // Gets and sets the origin point (center) of the base of the cone.
    //     Object.defineProperty(adsk.core.EllipticalCone.prototype, 'origin', {
    //         get : function () {
    //             var result = this._execute('origin');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('origin', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the major radius of the ellipse that defines the cone.
    //     Object.defineProperty(adsk.core.EllipticalCone.prototype, 'majorRadius', {
    //         get : function () {
    //             var result = this._execute('majorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('majorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minor radius of the ellipse that defines the cone.
    //     Object.defineProperty(adsk.core.EllipticalCone.prototype, 'minorRadius', {
    //         get : function () {
    //             var result = this._execute('minorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the taper half-angle of the elliptical cone.
    //     // A negative value indicates that the cone is narrowing in the direction of the axis vector,
    //     // whereas a positive values indicates that it is expanding in the direction of the axis vector.
    //     Object.defineProperty(adsk.core.EllipticalCone.prototype, 'halfAngle', {
    //         get : function () {
    //             var result = this._execute('halfAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('halfAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient elliptical cone object.
    //     // origin : The origin point (center) of the base of the cone.
    //     // axis : The center axis (along the length) of the cone that defines its normal direction.
    //     // majorAxisDirection : The direction of the major axis of the ellipse that defines the cone.
    //     // majorRadius : The major radius of the ellipse that defines the cone.
    //     // minorRadius : The minor radius of the ellipse that defines the cone.
    //     // halfAngle : The taper half-angle of the cone.
    //     // Returns the new EllipticalCone object or null if the creation failed.
    //     adsk.core.EllipticalCone.create = function (origin, axis, majorAxisDirection, majorRadius, minorRadius, halfAngle) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (majorAxisDirection !== null && !(majorAxisDirection instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxisDirection must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         if (!isFinite(halfAngle)) { throw new TypeError('halfAngle must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             majorAxisDirection : (majorAxisDirection === null ? majorAxisDirection : majorAxisDirection.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius),
    //             halfAngle : Number(halfAngle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.EllipticalCone', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalCone) : null;
    //     };

    //     // Gets the center axis of the cone that defines its normal direction and the major axis
    //     // direction of the ellipse that defines it.
    //     // axis : The output center axis (along the length) of the cone that defines its normal direction.
    //     // majorAxisDirection : The output direction of the major axis of the ellipse that defines the cone.
    //     adsk.core.EllipticalCone.prototype.getAxes = function (axis, majorAxisDirection) {
    //         if (typeof axis !== 'object') { throw new TypeError('axis must be an object'); }
    //         if (typeof majorAxisDirection !== 'object') { throw new TypeError('majorAxisDirection must be an object'); }
    //         var args = {
    //             axis : null,
    //             majorAxisDirection : null
    //         };
    //         var result = this._execute('getAxes', args);
    //         if (result && result.outargs) {
    //             axis.value = (result.outargs.axis !== undefined) ? adsk.createObject(result.outargs.axis, adsk.core.Vector3D) : null;
    //             majorAxisDirection.value = (result.outargs.majorAxisDirection !== undefined) ? adsk.createObject(result.outargs.majorAxisDirection, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the center axis of the cone and the major axis direction of the ellipse that defines it.
    //     // axis : The center axis (along the length) of the cone that defines its normal direction.
    //     // majorAxisDirection : The direction of the major axis of the ellipse that defines the cone.
    //     // Returns true if successful.
    //     adsk.core.EllipticalCone.prototype.setAxes = function (axis, majorAxisDirection) {
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (majorAxisDirection !== null && !(majorAxisDirection instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxisDirection must be a adsk.core.Vector3D'); }
    //         var args = {
    //             axis : (axis === null ? axis : axis.handle),
    //             majorAxisDirection : (majorAxisDirection === null ? majorAxisDirection : majorAxisDirection.handle)
    //         };
    //         var result = this._execute('setAxes', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the data that defines the Elliptical Cone.
    //     // origin : The output origin point (center) of the base of the cone.
    //     // axis : The output center axis (along the length) of the cone that defines its normal direction.
    //     // majorAxisDirection : The output direction of the major axis of the ellipse that defines the cone.
    //     // majorRadius : The output major radius of the ellipse that defines the cone.
    //     // minorRadius : The output minor radius of the ellipse that defines the cone.
    //     // halfAngle : The output taper half-angle of the cone.
    //     // Returns true if successful.
    //     adsk.core.EllipticalCone.prototype.getData = function (origin, axis, majorAxisDirection, majorRadius, minorRadius, halfAngle) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof axis !== 'object') { throw new TypeError('axis must be an object'); }
    //         if (typeof majorAxisDirection !== 'object') { throw new TypeError('majorAxisDirection must be an object'); }
    //         if (typeof majorRadius !== 'object') { throw new TypeError('majorRadius must be an object'); }
    //         if (typeof minorRadius !== 'object') { throw new TypeError('minorRadius must be an object'); }
    //         if (typeof halfAngle !== 'object') { throw new TypeError('halfAngle must be an object'); }
    //         var args = {
    //             origin : null,
    //             axis : null,
    //             majorAxisDirection : null,
    //             majorRadius : null,
    //             minorRadius : null,
    //             halfAngle : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point3D) : null;
    //             axis.value = (result.outargs.axis !== undefined) ? adsk.createObject(result.outargs.axis, adsk.core.Vector3D) : null;
    //             majorAxisDirection.value = (result.outargs.majorAxisDirection !== undefined) ? adsk.createObject(result.outargs.majorAxisDirection, adsk.core.Vector3D) : null;
    //             majorRadius.value = (result.outargs.majorRadius !== undefined) ? result.outargs.majorRadius : undefined;
    //             minorRadius.value = (result.outargs.minorRadius !== undefined) ? result.outargs.minorRadius : undefined;
    //             halfAngle.value = (result.outargs.halfAngle !== undefined) ? result.outargs.halfAngle : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the data that defines the Elliptical Cone.
    //     // origin : The origin point (center) of the base of the cone.
    //     // axis : The center axis (along the length) of the cone that defines its normal direction.
    //     // majorAxisDirection : The direction of the major axis of the ellipse that defines the cone.
    //     // majorRadius : The major radius of the ellipse that defines the cone.
    //     // minorRadius : The minor radius of the ellipse that defines the cone.
    //     // halfAngle : The taper half-angle of the cone.
    //     // Returns true if successful.
    //     adsk.core.EllipticalCone.prototype.set = function (origin, axis, majorAxisDirection, majorRadius, minorRadius, halfAngle) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (majorAxisDirection !== null && !(majorAxisDirection instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxisDirection must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         if (!isFinite(halfAngle)) { throw new TypeError('halfAngle must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             majorAxisDirection : (majorAxisDirection === null ? majorAxisDirection : majorAxisDirection.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius),
    //             halfAngle : Number(halfAngle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns an independent copy of this EllipticalCone object.
    //     // Returns a new EllipticalCone object that is a copy of this EllipticalCone object.
    //     adsk.core.EllipticalCone.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalCone) : null;
    //     };
}

//=========== EllipticalCylinder ============
// Transient elliptical cylinder. A transient elliptical cylinder is not displayed or saved
// in a document.
// A transient elliptical cylinder is used as a wrapper to work with raw elliptical cylinder
// information.
// A transient elliptical cylinder has no boundaries and is infinite in length.
// They are created statically using the create method of the EllipticalCylinder class.
interface EllipticalCylinder {
    cast(object: Object): EllipticalCylinder;

    //     // Gets and sets the origin point (center) of the base of the cylinder.
    //     Object.defineProperty(adsk.core.EllipticalCylinder.prototype, 'origin', {
    //         get : function () {
    //             var result = this._execute('origin');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('origin', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and set the center axis (along the length) of the cylinder that defines
    //     // its normal direction.
    //     Object.defineProperty(adsk.core.EllipticalCylinder.prototype, 'axis', {
    //         get : function () {
    //             var result = this._execute('axis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('axis', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the direction of the major axis of the ellipse that defines the cylinder.
    //     Object.defineProperty(adsk.core.EllipticalCylinder.prototype, 'majorAxis', {
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

    //     // Gets and sets the major radius of the ellipse that defines the cylinder.
    //     Object.defineProperty(adsk.core.EllipticalCylinder.prototype, 'majorRadius', {
    //         get : function () {
    //             var result = this._execute('majorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('majorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minor radius of the ellipse that defines the cylinder.
    //     Object.defineProperty(adsk.core.EllipticalCylinder.prototype, 'minorRadius', {
    //         get : function () {
    //             var result = this._execute('minorRadius');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minorRadius', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 3D elliptical cylinder object.
    //     // origin : The origin point (center) of the base of the cylinder.
    //     // axis : The center axis (along the length) of the cylinder that defines its normal direction.
    //     // majorAxis : The direction of the major axis of the ellipse that defines the cylinder.
    //     // majorRadius : The major radius of the ellipse that defines the cylinder.
    //     // minorRadius : The minor radius of the ellipse that defines the cylinder.
    //     // Returns the new EllipticalCylinder object or null if the creation failed.
    //     adsk.core.EllipticalCylinder.create = function (origin, axis, majorAxis, majorRadius, minorRadius) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.EllipticalCylinder', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalCylinder) : null;
    //     };

    //     // Gets the data defining the elliptical cylinder.
    //     // origin : The output origin point (center) of the base of the cylinder.
    //     // axis : The output center axis (along the length) of the cylinder that defines its normal direction.
    //     // majorAxis : The output direction of the major axis of the ellipse that defines the cylinder.
    //     // majorRadius : The output major radius of the ellipse that defines the cylinder.
    //     // minorRadius : The output minor radius of the ellipse that defines the cylinder.
    //     // Returns true if successful.
    //     adsk.core.EllipticalCylinder.prototype.getData = function (origin, axis, majorAxis, majorRadius, minorRadius) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof axis !== 'object') { throw new TypeError('axis must be an object'); }
    //         if (typeof majorAxis !== 'object') { throw new TypeError('majorAxis must be an object'); }
    //         if (typeof majorRadius !== 'object') { throw new TypeError('majorRadius must be an object'); }
    //         if (typeof minorRadius !== 'object') { throw new TypeError('minorRadius must be an object'); }
    //         var args = {
    //             origin : null,
    //             axis : null,
    //             majorAxis : null,
    //             majorRadius : null,
    //             minorRadius : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point3D) : null;
    //             axis.value = (result.outargs.axis !== undefined) ? adsk.createObject(result.outargs.axis, adsk.core.Vector3D) : null;
    //             majorAxis.value = (result.outargs.majorAxis !== undefined) ? adsk.createObject(result.outargs.majorAxis, adsk.core.Vector3D) : null;
    //             majorRadius.value = (result.outargs.majorRadius !== undefined) ? result.outargs.majorRadius : undefined;
    //             minorRadius.value = (result.outargs.minorRadius !== undefined) ? result.outargs.minorRadius : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the data defining the elliptical cylinder.
    //     // origin : The origin point (center) of the base of the cylinder.
    //     // axis : The center axis (along the length) of the cylinder that defines its normal direction.
    //     // majorAxis : The direction of the major axis of the ellipse that defines the cylinder.
    //     // majorRadius : The major radius of the ellipse that defines the cylinder.
    //     // minorRadius : The minor radius of the ellipse that defines the cylinder.
    //     // Returns true if successful.
    //     adsk.core.EllipticalCylinder.prototype.set = function (origin, axis, majorAxis, majorRadius, minorRadius) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Vector3D)) { throw new TypeError('axis must be a adsk.core.Vector3D'); }
    //         if (majorAxis !== null && !(majorAxis instanceof adsk.core.Vector3D)) { throw new TypeError('majorAxis must be a adsk.core.Vector3D'); }
    //         if (!isFinite(majorRadius)) { throw new TypeError('majorRadius must be a number'); }
    //         if (!isFinite(minorRadius)) { throw new TypeError('minorRadius must be a number'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             majorAxis : (majorAxis === null ? majorAxis : majorAxis.handle),
    //             majorRadius : Number(majorRadius),
    //             minorRadius : Number(minorRadius)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns an independent copy of this EllipticalCylinder object.
    //     // Returns a new EllipticalCylinder object that is a copy of this EllipticalCylinder object.
    //     adsk.core.EllipticalCylinder.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.EllipticalCylinder) : null;
    //     };
}

//=========== InfiniteLine3D ============
// Transient 3D infinite line. An infinite line is defined by a position and direction in space
// and has no start or end points.
// They are created statically using the create method of the InfiniteLine3D class.
interface InfiniteLine3D {
    cast(object: Object): InfiniteLine3D;

    //     // Gets and sets the origin point of the line.
    //     Object.defineProperty(adsk.core.InfiniteLine3D.prototype, 'origin', {
    //         get : function () {
    //             var result = this._execute('origin');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('origin', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the direction of the line.
    //     Object.defineProperty(adsk.core.InfiniteLine3D.prototype, 'direction', {
    //         get : function () {
    //             var result = this._execute('direction');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('direction', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 3D infinite line.
    //     // origin : The origin point of the line.
    //     // direction : The direction of the line.
    //     // Returns the new InfiniteLine3D object or null if the creation failed.
    //     adsk.core.InfiniteLine3D.create = function (origin, direction) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (direction !== null && !(direction instanceof adsk.core.Vector3D)) { throw new TypeError('direction must be a adsk.core.Vector3D'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             direction : (direction === null ? direction : direction.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.InfiniteLine3D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.InfiniteLine3D) : null;
    //     };

    //     // Compare this line with another to check for collinearity.
    //     // line : The line to compare with for collinearity.
    //     // Returns true if the two lines are collinear.
    //     adsk.core.InfiniteLine3D.prototype.isColinearTo = function (line) {
    //         if (line !== null && !(line instanceof adsk.core.InfiniteLine3D)) { throw new TypeError('line must be a adsk.core.InfiniteLine3D'); }
    //         var args = {
    //             line : (line === null ? line : line.handle)
    //         };
    //         var result = this._execute('isColinearTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates and returns a copy of this line object.
    //     // Returns an independent copy of this line object.
    //     adsk.core.InfiniteLine3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.InfiniteLine3D) : null;
    //     };

    //     // Intersect this line with a curve to get the intersection point(s).
    //     // curve : The intersecting curve.
    //     // The curve can be a Line3D, InfininteLine3D, Circle3D, Arc3D, EllipticalArc3D, Ellipse3D,
    //     // or NurbsCurve3D.
    //     // Returns a collection of the intersection points.
    //     adsk.core.InfiniteLine3D.prototype.intersectWithCurve = function (curve) {
    //         if (curve !== null && !(curve instanceof adsk.core.Curve3D)) { throw new TypeError('curve must be a adsk.core.Curve3D'); }
    //         var args = {
    //             curve : (curve === null ? curve : curve.handle)
    //         };
    //         var result = this._execute('intersectWithCurve', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Intersect this line with a surface to get the intersection point(s).
    //     // surface : The intersecting surface.
    //     // The surface can be a Plane, Cone, Cylinder, EllipticalCone, EllipticalCylinder, Sphere,
    //     // Torus, or a NurbsSurface.
    //     // Returns a collection of the intersection points.
    //     adsk.core.InfiniteLine3D.prototype.intersectWithSurface = function (surface) {
    //         if (surface !== null && !(surface instanceof adsk.core.Surface)) { throw new TypeError('surface must be a adsk.core.Surface'); }
    //         var args = {
    //             surface : (surface === null ? surface : surface.handle)
    //         };
    //         var result = this._execute('intersectWithSurface', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Gets all of the data defining the infinite line.
    //     // origin : The output origin point of the line.
    //     // direction : The output direction of the line.
    //     // Returns true if successful.
    //     adsk.core.InfiniteLine3D.prototype.getData = function (origin, direction) {
    //         if (typeof origin !== 'object') { throw new TypeError('origin must be an object'); }
    //         if (typeof direction !== 'object') { throw new TypeError('direction must be an object'); }
    //         var args = {
    //             origin : null,
    //             direction : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             origin.value = (result.outargs.origin !== undefined) ? adsk.createObject(result.outargs.origin, adsk.core.Point3D) : null;
    //             direction.value = (result.outargs.direction !== undefined) ? adsk.createObject(result.outargs.direction, adsk.core.Vector3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the infinite line.
    //     // origin : The origin point of the line.
    //     // direction : The direction of the line.
    //     // Returns true if successful.
    //     adsk.core.InfiniteLine3D.prototype.set = function (origin, direction) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (direction !== null && !(direction instanceof adsk.core.Vector3D)) { throw new TypeError('direction must be a adsk.core.Vector3D'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             direction : (direction === null ? direction : direction.handle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Line2D ============
// Transient 2D line. A transient line is not displayed or saved in a document.
// Transient 2D lines are used as a wrapper to work with raw 2D line information.
// They are created statically using the create method of the Line2D class.
interface Line2D {
    cast(object: Object): Line2D;

    //     // Gets and sets the start point of the line.
    //     Object.defineProperty(adsk.core.Line2D.prototype, 'startPoint', {
    //         get : function () {
    //             var result = this._execute('startPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point2D)) { throw new TypeError('value must be a adsk.core.Point2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('startPoint', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the end point of the line.
    //     Object.defineProperty(adsk.core.Line2D.prototype, 'endPoint', {
    //         get : function () {
    //             var result = this._execute('endPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point2D)) { throw new TypeError('value must be a adsk.core.Point2D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('endPoint', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the line.
    //     Object.defineProperty(adsk.core.Line2D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //         }
    //     });

    //     // Creates a transient line.
    //     // startPoint : The start point of the line
    //     // endPoint : The end point of the line
    //     // Returns the new Line2D object or null if the creation failed.
    //     adsk.core.Line2D.create = function (startPoint, endPoint) {
    //         if (startPoint !== null && !(startPoint instanceof adsk.core.Point2D)) { throw new TypeError('startPoint must be a adsk.core.Point2D'); }
    //         if (endPoint !== null && !(endPoint instanceof adsk.core.Point2D)) { throw new TypeError('endPoint must be a adsk.core.Point2D'); }
    //         var args = {
    //             startPoint : (startPoint === null ? startPoint : startPoint.handle),
    //             endPoint : (endPoint === null ? endPoint : endPoint.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Line2D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Line2D) : null;
    //     };

    //     // Creates and returns a copy of this line object.
    //     // Returns an independent copy of this line object.
    //     adsk.core.Line2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Line2D) : null;
    //     };

    //     // Gets all of the data defining the line segment.
    //     // startPoint : The output start point of the line.
    //     // endPoint : The output end point of the line.
    //     // Returns true if successful.
    //     adsk.core.Line2D.prototype.getData = function (startPoint, endPoint) {
    //         if (typeof startPoint !== 'object') { throw new TypeError('startPoint must be an object'); }
    //         if (typeof endPoint !== 'object') { throw new TypeError('endPoint must be an object'); }
    //         var args = {
    //             startPoint : null,
    //             endPoint : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             startPoint.value = (result.outargs.startPoint !== undefined) ? adsk.createObject(result.outargs.startPoint, adsk.core.Point2D) : null;
    //             endPoint.value = (result.outargs.endPoint !== undefined) ? adsk.createObject(result.outargs.endPoint, adsk.core.Point2D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the line segment.
    //     // startPoint : The start point of the line
    //     // endPoint : The end point of the line
    //     // Returns true if redefining the line is successful
    //     adsk.core.Line2D.prototype.set = function (startPoint, endPoint) {
    //         if (startPoint !== null && !(startPoint instanceof adsk.core.Point2D)) { throw new TypeError('startPoint must be a adsk.core.Point2D'); }
    //         if (endPoint !== null && !(endPoint instanceof adsk.core.Point2D)) { throw new TypeError('endPoint must be a adsk.core.Point2D'); }
    //         var args = {
    //             startPoint : (startPoint === null ? startPoint : startPoint.handle),
    //             endPoint : (endPoint === null ? endPoint : endPoint.handle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== Line3D ============
// Transient 3D line. A transient line is not displayed or saved in a document.
// Transient 3D lines are used as a wrapper to work with raw 3D line information.
// They are created statically using the create method of the Line3D class.
interface Line3D {
    cast(object: Object): Line3D;

    //     // Gets and sets the start point of the line.
    //     Object.defineProperty(adsk.core.Line3D.prototype, 'startPoint', {
    //         get : function () {
    //             var result = this._execute('startPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('startPoint', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the end point of the line.
    //     Object.defineProperty(adsk.core.Line3D.prototype, 'endPoint', {
    //         get : function () {
    //             var result = this._execute('endPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('endPoint', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns a NURBS curve that is geometrically identical to the line.
    //     Object.defineProperty(adsk.core.Line3D.prototype, 'asNurbsCurve', {
    //         get : function () {
    //             var result = this._execute('asNurbsCurve');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //         }
    //     });

    //     // Creates a transient line.
    //     // startPoint : The start point of the line.
    //     // endPoint : The end point of the line.
    //     // Returns the new Line3D object or null if the creation failed.
    //     adsk.core.Line3D.create = function (startPoint, endPoint) {
    //         if (startPoint !== null && !(startPoint instanceof adsk.core.Point3D)) { throw new TypeError('startPoint must be a adsk.core.Point3D'); }
    //         if (endPoint !== null && !(endPoint instanceof adsk.core.Point3D)) { throw new TypeError('endPoint must be a adsk.core.Point3D'); }
    //         var args = {
    //             startPoint : (startPoint === null ? startPoint : startPoint.handle),
    //             endPoint : (endPoint === null ? endPoint : endPoint.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Line3D', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Line3D) : null;
    //     };

    //     // Creates and returns a copy of this line object.
    //     // Returns an independent copy of this line object.
    //     adsk.core.Line3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Line3D) : null;
    //     };

    //     // Creates an equivalent InfiniteLine3D.
    //     // Returns an equivalent InfiniteLine3D
    //     adsk.core.Line3D.prototype.asInfiniteLine = function () {
    //         var result = this._execute('asInfiniteLine');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.InfiniteLine3D) : null;
    //     };

    //     // Compare this line with another to check for collinearity
    //     // line : The line to compare with for collinearity
    //     // Returns true if the two lines are collinear
    //     adsk.core.Line3D.prototype.isColinearTo = function (line) {
    //         if (line !== null && !(line instanceof adsk.core.Line3D)) { throw new TypeError('line must be a adsk.core.Line3D'); }
    //         var args = {
    //             line : (line === null ? line : line.handle)
    //         };
    //         var result = this._execute('isColinearTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Intersect this line with a curve to get the intersection point(s).
    //     // curve : The intersecting curve.
    //     // The curve can be a Line3D, InfininteLine3D, Circle3D, Arc3D, EllipticalArc3D, Ellipse3D,
    //     // or NurbsCurve3D.
    //     // Returns a collection of the intersection points
    //     adsk.core.Line3D.prototype.intersectWithCurve = function (curve) {
    //         if (curve !== null && !(curve instanceof adsk.core.Curve3D)) { throw new TypeError('curve must be a adsk.core.Curve3D'); }
    //         var args = {
    //             curve : (curve === null ? curve : curve.handle)
    //         };
    //         var result = this._execute('intersectWithCurve', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Intersect this line with a surface to get the intersection point(s).
    //     // surface : The intersecting surface.
    //     // The surface can be a Plane, Cone, Cylinder, EllipticalCone, EllipticalCylinder, Sphere,
    //     // Torus or a NurbsSurface.
    //     // Returns a collection of the intersection points.
    //     adsk.core.Line3D.prototype.intersectWithSurface = function (surface) {
    //         if (surface !== null && !(surface instanceof adsk.core.Surface)) { throw new TypeError('surface must be a adsk.core.Surface'); }
    //         var args = {
    //             surface : (surface === null ? surface : surface.handle)
    //         };
    //         var result = this._execute('intersectWithSurface', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Gets all of the data defining the line segment.
    //     // startPoint : The output start point of the line.
    //     // endPoint : The output end point of the line.
    //     // Returns true if successful.
    //     adsk.core.Line3D.prototype.getData = function (startPoint, endPoint) {
    //         if (typeof startPoint !== 'object') { throw new TypeError('startPoint must be an object'); }
    //         if (typeof endPoint !== 'object') { throw new TypeError('endPoint must be an object'); }
    //         var args = {
    //             startPoint : null,
    //             endPoint : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             startPoint.value = (result.outargs.startPoint !== undefined) ? adsk.createObject(result.outargs.startPoint, adsk.core.Point3D) : null;
    //             endPoint.value = (result.outargs.endPoint !== undefined) ? adsk.createObject(result.outargs.endPoint, adsk.core.Point3D) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the data defining the line segment.
    //     // startPoint : The start point of the line.
    //     // endPoint : The end point of the line.
    //     // Returns true if successful.
    //     adsk.core.Line3D.prototype.set = function (startPoint, endPoint) {
    //         if (startPoint !== null && !(startPoint instanceof adsk.core.Point3D)) { throw new TypeError('startPoint must be a adsk.core.Point3D'); }
    //         if (endPoint !== null && !(endPoint instanceof adsk.core.Point3D)) { throw new TypeError('endPoint must be a adsk.core.Point3D'); }
    //         var args = {
    //             startPoint : (startPoint === null ? startPoint : startPoint.handle),
    //             endPoint : (endPoint === null ? endPoint : endPoint.handle)
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== NurbsCurve2D ============
// Transient 2D NURBS curve. A transient NURBS curve is not displayed or saved in a document.
// Transient 2D NURBS curves are used as a wrapper to work with raw 2D NURBS curve information.
// They are created statically using one of the create methods of the NurbsCurve2D class.
interface NurbsCurve2D {
    cast(object: Object): NurbsCurve2D;

    //     // Gets the number of control points that define the curve
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'controlPointCount', {
    //         get : function () {
    //             var result = this._execute('controlPointCount');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the degree of the curve
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'degree', {
    //         get : function () {
    //             var result = this._execute('degree');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the knot count of the curve
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'knotCount', {
    //         get : function () {
    //             var result = this._execute('knotCount');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if the curve is rational or non-rational type
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'isRational', {
    //         get : function () {
    //             var result = this._execute('isRational');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if the curve is closed
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'isClosed', {
    //         get : function () {
    //             var result = this._execute('isClosed');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Indicates if the curve is periodic.
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'isPeriodic', {
    //         get : function () {
    //             var result = this._execute('isPeriodic');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns an array of Point2D objects that define the control points of the curve.
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'controlPoints', {
    //         get : function () {
    //             var result = this._execute('controlPoints');
    //             if (!result || !Array.isArray(result.value)) {
    //                 return undefined
    //             }
    //             var resultIter;
    //             var resultValue = [];
    //             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
    //                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Point2D) : null;
    //             }
    //             return resultValue
    //         }
    //     });

    //     // Returns an array of numbers that define the Knots of the curve.
    //     Object.defineProperty(adsk.core.NurbsCurve2D.prototype, 'knots', {
    //         get : function () {
    //             var result = this._execute('knots');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient 2D NURBS non-rational b-spline object.
    //     // controlPoints : An array of control point that define the path of the spline
    //     // degree : The degree of curvature of the spline
    //     // knots : An array of numbers that define the knot vector of the spline. The knots is an array of (>=degree + N + 1) numbers, where N is the number of control points.
    //     // isPeriodic : A bool specifying if the spline is to be Periodic. A periodic spline has a start point and
    //     // end point that meet forming a closed loop.
    //     // Returns the new NurbsCurve2D object or null if the creation failed.
    //     adsk.core.NurbsCurve2D.createNonRational = function (controlPoints, degree, knots, isPeriodic) {
    //         if (!Array.isArray(controlPoints)) { throw new TypeError('controlPoints must be an array'); }
    //         var controlPointsLength = controlPoints.length;
    //         var controlPointsIt;
    //         for (controlPointsIt = 0; controlPointsIt < controlPointsLength; ++controlPointsIt) {
    //             if (controlPoints[controlPointsIt] !== null && !(controlPoints[controlPointsIt] instanceof adsk.core.Point2D)) { throw new TypeError('controlPoints[controlPointsIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (!isFinite(degree)) { throw new TypeError('degree must be a number'); }
    //         if (!Array.isArray(knots)) { throw new TypeError('knots must be an array'); }
    //         var knotsLength = knots.length;
    //         var knotsIt;
    //         for (knotsIt = 0; knotsIt < knotsLength; ++knotsIt) {
    //             if (!isFinite(knots[knotsIt])) { throw new TypeError('knots[knotsIt] must be a number'); }
    //         }
    //         if (typeof isPeriodic !== 'boolean') { throw new TypeError('isPeriodic must be a boolean'); }
    //         var args = {
    //             controlPoints : controlPoints,
    //             degree : Number(degree),
    //             knots : knots,
    //             isPeriodic : isPeriodic
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.NurbsCurve2D', 'createNonRational', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //     };

    //     // Creates a transient 2D NURBS rational b-spline object.
    //     // controlPoints : An array of control point that define the path of the spline
    //     // degree : The degree of curvature of the spline
    //     // knots : An array of numbers that define the knot vector of the spline. The knots is an array of (>=degree + N + 1) numbers, where N is the number of control points.
    //     // weights : An array of numbers that define the weights for the spline.
    //     // isPeriodic : A bool specifying if the spline is to be Periodic. A periodic curve has a start point and
    //     // end point that meet (with curvature continuity) forming a closed loop.
    //     // Returns the new NurbsCurve2D object or null if the creation failed.
    //     adsk.core.NurbsCurve2D.createRational = function (controlPoints, degree, knots, weights, isPeriodic) {
    //         if (!Array.isArray(controlPoints)) { throw new TypeError('controlPoints must be an array'); }
    //         var controlPointsLength = controlPoints.length;
    //         var controlPointsIt;
    //         for (controlPointsIt = 0; controlPointsIt < controlPointsLength; ++controlPointsIt) {
    //             if (controlPoints[controlPointsIt] !== null && !(controlPoints[controlPointsIt] instanceof adsk.core.Point2D)) { throw new TypeError('controlPoints[controlPointsIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (!isFinite(degree)) { throw new TypeError('degree must be a number'); }
    //         if (!Array.isArray(knots)) { throw new TypeError('knots must be an array'); }
    //         var knotsLength = knots.length;
    //         var knotsIt;
    //         for (knotsIt = 0; knotsIt < knotsLength; ++knotsIt) {
    //             if (!isFinite(knots[knotsIt])) { throw new TypeError('knots[knotsIt] must be a number'); }
    //         }
    //         if (!Array.isArray(weights)) { throw new TypeError('weights must be an array'); }
    //         var weightsLength = weights.length;
    //         var weightsIt;
    //         for (weightsIt = 0; weightsIt < weightsLength; ++weightsIt) {
    //             if (!isFinite(weights[weightsIt])) { throw new TypeError('weights[weightsIt] must be a number'); }
    //         }
    //         if (typeof isPeriodic !== 'boolean') { throw new TypeError('isPeriodic must be a boolean'); }
    //         var args = {
    //             controlPoints : controlPoints,
    //             degree : Number(degree),
    //             knots : knots,
    //             weights : weights,
    //             isPeriodic : isPeriodic
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.NurbsCurve2D', 'createRational', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //     };

    //     // Creates and returns an independent copy of this NurbsCurve2D object.
    //     // Returns an independent copy of this NurbsCurve2D.
    //     adsk.core.NurbsCurve2D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //     };

    //     // Gets the data that defines a transient 2D NURBS rational b-spline object.
    //     // controlPoints : The output array of control point that define the path of the spline.
    //     // degree : The output degree of curvature of the spline.
    //     // knots : The output array of numbers that define the knots of the spline.
    //     // isRational : The output value indicating if the spline is rational. A rational spline will have a weight value
    //     // for each control point.
    //     // weights : The output array of numbers that define the weights for the spline.
    //     // isPeriodic : The output value indicating if the spline is Periodic. A periodic curve has a start point and
    //     // end point that meet (with curvature continuity) forming a closed loop.
    //     // Returns true if successful.
    //     adsk.core.NurbsCurve2D.prototype.getData = function (controlPoints, degree, knots, isRational, weights, isPeriodic) {
    //         if (typeof controlPoints !== 'object') { throw new TypeError('controlPoints must be an object'); }
    //         if (typeof degree !== 'object') { throw new TypeError('degree must be an object'); }
    //         if (typeof knots !== 'object') { throw new TypeError('knots must be an object'); }
    //         if (typeof isRational !== 'object') { throw new TypeError('isRational must be an object'); }
    //         if (typeof weights !== 'object') { throw new TypeError('weights must be an object'); }
    //         if (typeof isPeriodic !== 'object') { throw new TypeError('isPeriodic must be an object'); }
    //         var args = {
    //             controlPoints : null,
    //             degree : null,
    //             knots : null,
    //             isRational : null,
    //             weights : null,
    //             isPeriodic : null
    //         };
    //         var result = this._execute('getData', args);
    //         if (result && result.outargs) {
    //             if (Array.isArray(result.outargs.controlPoints)) {
    //                 var controlPointsIter;
    //                 controlPoints.value = [];
    //                 for (controlPointsIter = 0; controlPointsIter < result.outargs.controlPoints.length; ++controlPointsIter) {
    //                     controlPoints.value[controlPointsIter] = (result.outargs.controlPoints[controlPointsIter] !== undefined) ? adsk.createObject(result.outargs.controlPoints[controlPointsIter], adsk.core.Point2D) : null;
    //                 }
    //             }
    //             degree.value = (result.outargs.degree !== undefined) ? result.outargs.degree : undefined;
    //             if (Array.isArray(result.outargs.knots)) {
    //                 var knotsIter;
    //                 knots.value = [];
    //                 for (knotsIter = 0; knotsIter < result.outargs.knots.length; ++knotsIter) {
    //                     knots.value[knotsIter] = (result.outargs.knots[knotsIter] !== undefined) ? result.outargs.knots[knotsIter] : undefined;
    //                 }
    //             }
    //             isRational.value = (result.outargs.isRational !== undefined) ? result.outargs.isRational : undefined;
    //             if (Array.isArray(result.outargs.weights)) {
    //                 var weightsIter;
    //                 weights.value = [];
    //                 for (weightsIter = 0; weightsIter < result.outargs.weights.length; ++weightsIter) {
    //                     weights.value[weightsIter] = (result.outargs.weights[weightsIter] !== undefined) ? result.outargs.weights[weightsIter] : undefined;
    //                 }
    //             }
    //             isPeriodic.value = (result.outargs.isPeriodic !== undefined) ? result.outargs.isPeriodic : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the data that defines a transient 2D NURBS rational b-spline object.
    //     // controlPoints : The array of control point that define the path of the spline
    //     // degree : The degree of curvature of the spline
    //     // knots : An array of numbers that define the knots of the spline.
    //     // isRational : A bool indicating if the spline is rational. A rational spline must have a weight value
    //     // for each control point.
    //     // weights : An array of numbers that define the weights for the spline.
    //     // isPeriodic : A bool specifying if the spline is to be Periodic. A periodic curve has a start point and
    //     // end point that meet (with curvature continuity) forming a closed loop.
    //     // Returns true if successful
    //     adsk.core.NurbsCurve2D.prototype.set = function (controlPoints, degree, knots, isRational, weights, isPeriodic) {
    //         if (!Array.isArray(controlPoints)) { throw new TypeError('controlPoints must be an array'); }
    //         var controlPointsLength = controlPoints.length;
    //         var controlPointsIt;
    //         for (controlPointsIt = 0; controlPointsIt < controlPointsLength; ++controlPointsIt) {
    //             if (controlPoints[controlPointsIt] !== null && !(controlPoints[controlPointsIt] instanceof adsk.core.Point2D)) { throw new TypeError('controlPoints[controlPointsIt] must be a adsk.core.Point2D'); }
    //         }
    //         if (!isFinite(degree)) { throw new TypeError('degree must be a number'); }
    //         if (!Array.isArray(knots)) { throw new TypeError('knots must be an array'); }
    //         var knotsLength = knots.length;
    //         var knotsIt;
    //         for (knotsIt = 0; knotsIt < knotsLength; ++knotsIt) {
    //             if (!isFinite(knots[knotsIt])) { throw new TypeError('knots[knotsIt] must be a number'); }
    //         }
    //         if (typeof isRational !== 'boolean') { throw new TypeError('isRational must be a boolean'); }
    //         if (!Array.isArray(weights)) { throw new TypeError('weights must be an array'); }
    //         var weightsLength = weights.length;
    //         var weightsIt;
    //         for (weightsIt = 0; weightsIt < weightsLength; ++weightsIt) {
    //             if (!isFinite(weights[weightsIt])) { throw new TypeError('weights[weightsIt] must be a number'); }
    //         }
    //         if (typeof isPeriodic !== 'boolean') { throw new TypeError('isPeriodic must be a boolean'); }
    //         var args = {
    //             controlPoints : controlPoints,
    //             degree : Number(degree),
    //             knots : knots,
    //             isRational : isRational,
    //             weights : weights,
    //             isPeriodic : isPeriodic
    //         };
    //         var result = this._execute('set', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Defines a new nurbs curve that is the subset of this nurbs curve in the parameter
    //     // range of [startParam, endParam]
    //     // startParam : The parameter position of the start of the subset.
    //     // endParam : The parameter position of the end of the subset.
    //     // Returns a new NurbsCurve2D object.
    //     adsk.core.NurbsCurve2D.prototype.extract = function (startParam, endParam) {
    //         if (!isFinite(startParam)) { throw new TypeError('startParam must be a number'); }
    //         if (!isFinite(endParam)) { throw new TypeError('endParam must be a number'); }
    //         var args = {
    //             startParam : Number(startParam),
    //             endParam : Number(endParam)
    //         };
    //         var result = this._execute('extract', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //     };

    //     // Define a new nurbs curve that is the result of combining this nurbs curve with
    //     // another nurbs curve.
    //     // nurbsCurve : The nurbs curve to combine with
    //     // Returns a new NurbsCurve2D object.
    //     adsk.core.NurbsCurve2D.prototype.merge = function (nurbsCurve) {
    //         if (nurbsCurve !== null && !(nurbsCurve instanceof adsk.core.NurbsCurve2D)) { throw new TypeError('nurbsCurve must be a adsk.core.NurbsCurve2D'); }
    //         var args = {
    //             nurbsCurve : (nurbsCurve === null ? nurbsCurve : nurbsCurve.handle)
    //         };
    //         var result = this._execute('merge', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve2D) : null;
    //     };
}

//=========== NurbsCurve3D ============
// Transient 3D NURBS curve. A transient NURBS curve is not displayed or saved in a document.
// Transient 3D NURBS curves are used as a wrapper to work with raw 3D NURBS curve information.
// They are created statically using one of the create methods of the NurbsCurve3D class.
interface NurbsCurve3D {
    cast(object: Object): NurbsCurve3D;

    // Gets the number of control points that define the curve.
    controlPointCount: number;

    // Returns the degree of the curve.
    degree: number;

    // Returns the knot count of the curve.
    knotCount: number;

    // Indicates if the curve is rational or non-rational type.
    isRational: boolean;

    // Indicates if the curve is closed.
    isClosed: boolean;

    // Indicates if the curve is periodic.
    isPeriodic: boolean;

    // Returns an array of Point3D objects that define the control points of the curve.
    controlPoints: Point3D[];

    // Returns an array of numbers that define the knot vector of the curve.
    knots: number[]

    // Creates a transient 3D NURBS non-rational b-spline object.
    // controlPoints : An array of control point that define the path of the spline.
    // degree : The degree of curvature of the spline.
    // knots : An array of numbers that define the knot vector of the spline. The knots is an array of (>=degree + N + 1) numbers, where N is the number of control points.
    // isPeriodic : A bool specifying if the spline is to be Periodic. A periodic spline has a start point and
    // end point that meet forming a closed loop.
    // Returns the new NurbsCurve3D object or null if the creation failed.
    createNonRational(controlPoints: Point3D[], degree: number, knots: number[], isPeriodic: boolean): NurbsCurve3D;

    // Creates a transient 3D NURBS rational b-spline object.
    // controlPoints : An array of control point that define the path of the spline.
    // degree : The degree of curvature of the spline.
    // knots : An array of numbers that define the knot vector of the spline. The knots is an array of (>=degree + N + 1) numbers, where N is the number of control points.
    // weights : An array of numbers that define the weight at each control point.
    // isPeriodic : A bool specifying if the spline is to be Periodic. A periodic curve has a start point and
    // end point that meet (with curvature continuity) forming a closed loop.
    // Returns the new NurbsCurve3D object or null if the creation failed.
    createRational(controlPoints: Point3D[], degree: number, knots: number[], weights: number[], isPeriodic: boolean): NurbsCurve3D;

    // Gets the data that defines a transient 3D NURBS rational b-spline object.
    // controlPoints : The output array of control point that define the path of the spline.
    // degree : The output degree of curvature of the spline.
    // knots : The output array of numbers that define the knot vector of the spline.
    // isRational : The output value indicating if the spline is rational. A rational spline will have a weight value
    // for each control point.
    // weights : The output array of numbers that define the weights for the spline.
    // isPeriodic : The output value indicating if the spline is Periodic. A periodic curve has a start point and
    // end point that meet (with curvature continuity) forming a closed loop.
    // Returns true if successful.
    getData(controlPoints: Object, degree: Object, knots: Object, isRational: Object, weights: Object, isPeriodic: Object): boolean;

    // Sets the data that defines a transient 3D NURBS rational b-spline object.
    // controlPoints : The array of control point that define the path of the spline.
    // degree : The degree of curvature of the spline.
    // knots : An array of numbers that define the knot vector of the spline.
    // isRational : A bool value indicating if the spline is rational. A rational spline must have a weight value
    // for each control point.
    // weights : An array of numbers that define the weights for the spline.
    // isPeriodic : A bool indicating if the spline is Periodic. A periodic curve has a start point and
    // end point that meet (with curvature continuity) forming a closed loop.
    // Returns true if successful.
    set(controlPoints: Point3D[], degree: number, knots: number[], isRational: boolean, weights: number[], isPeriodic: boolean): boolean;

    //     // Defines a new nurbs curve that is the subset of this nurbs curve in the parameter
    //     // range of [startParam, endParam]
    //     // startParam : The parameter position that defines the start of the subset.
    //     // endParam : The parameter position that defines the end of the subset.
    //     // Returns a new NurbsCurve3D object.
    //     adsk.core.NurbsCurve3D.prototype.extract = function (startParam, endParam) {
    //         if (!isFinite(startParam)) { throw new TypeError('startParam must be a number'); }
    //         if (!isFinite(endParam)) { throw new TypeError('endParam must be a number'); }
    //         var args = {
    //             startParam : Number(startParam),
    //             endParam : Number(endParam)
    //         };
    //         var result = this._execute('extract', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //     };

    //     // Define a new nurbs curve that is the result of combining this nurbs curve with
    //     // another nurbs curve.
    //     // nurbsCurve : The nurbs curve to combine with.
    //     // Returns a new NurbsCurve3D object.
    //     adsk.core.NurbsCurve3D.prototype.merge = function (nurbsCurve) {
    //         if (nurbsCurve !== null && !(nurbsCurve instanceof adsk.core.NurbsCurve3D)) { throw new TypeError('nurbsCurve must be a adsk.core.NurbsCurve3D'); }
    //         var args = {
    //             nurbsCurve : (nurbsCurve === null ? nurbsCurve : nurbsCurve.handle)
    //         };
    //         var result = this._execute('merge', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //     };

    //     // Creates and returns an independent copy of this NurbsCurve3D object.
    //     // Returns an independent copy of this NurbsCurve3D.
    //     adsk.core.NurbsCurve3D.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NurbsCurve3D) : null;
    //     };
}

//=========== NurbsSurface ============
// Transient NURBS surface. A transient NURBS surface is not displayed or saved in a document.
// A transient NURBS surface is used as a wrapper to work with raw NURBS surface information.
// A transient NURBS surface is bounded by it's natural boundaries and does not support the
// definition of arbitrary boundaries.
// A NURBS surface is typically obtained from a BREPFace object, which does have boundary information.
// They are created statically using the create method of the NurbsSurface class.
interface NurbsSurface {
    cast(object: Object): NurbsSurface;

    //     // Gets the number of control points in the U direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'controlPointCountU', {
    //         get : function () {
    //             var result = this._execute('controlPointCountU');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the number of control points in the V direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'controlPointCountV', {
    //         get : function () {
    //             var result = this._execute('controlPointCountV');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the degree in the U direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'degreeU', {
    //         get : function () {
    //             var result = this._execute('degreeU');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the degree in the V direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'degreeV', {
    //         get : function () {
    //             var result = this._execute('degreeV');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the knot count in the U direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'knotCountU', {
    //         get : function () {
    //             var result = this._execute('knotCountU');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets thekKnot count in the V direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'knotCountV', {
    //         get : function () {
    //             var result = this._execute('knotCountV');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the properties (NurbsSurfaceProperties) of the surface in the U direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'propertiesU', {
    //         get : function () {
    //             var result = this._execute('propertiesU');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the properties (NurbsSurfaceProperties) of the surface in the V direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'propertiesV', {
    //         get : function () {
    //             var result = this._execute('propertiesV');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets an array of control points from the surface.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'controlPoints', {
    //         get : function () {
    //             var result = this._execute('controlPoints');
    //             if (!result || !Array.isArray(result.value)) {
    //                 return undefined
    //             }
    //             var resultIter;
    //             var resultValue = [];
    //             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
    //                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Point3D) : null;
    //             }
    //             return resultValue
    //         }
    //     });

    //     // Get the knot vector from the U direction.
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'knotsU', {
    //         get : function () {
    //             var result = this._execute('knotsU');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Get the knot vector from the V direction
    //     Object.defineProperty(adsk.core.NurbsSurface.prototype, 'knotsV', {
    //         get : function () {
    //             var result = this._execute('knotsV');
    //             return result ? result.value : undefined;
    //         }
    //     });

    // Creates a transient NURBS surface object.
    // degreeU : The degree in the U direction.
    // degreeV : The degree in the V direction.
    // controlPointCountU : The number of control points in the U direction.
    // controlPointCountV : The number of control points in the V direction.
    // controlPoints : An array of surface control points.
    // The length of this array must be controlPointCountU * controlPointCountV.
    // knotsU : The knot vector for the U direction.
    // knotsV : The knot vector for the V direction.
    // weights : An array of weights that corresponds to the control points of the surface.
    // propertiesU : The properties (NurbsSurfaceProperties) of the surface in the U direction.
    // propertiesV : The properties (NurbsSurfaceProperties) of the surface in the V direction.
    // Returns the new NurbsSurface object or null if the creation failed.
    create(degreeU: number, degreeV: number, controlPointCountU: number, controlPointCountV: number, controlPoints: Point3D[], knotsU: number[], knotsV: number[], weights: number[], propertiesU: number, propertiesV: number): NurbsSurface;

    // Gets the data that defines the NURBS surface.
    // degreeU : The output degree in the U direction.
    // degreeV : The output degree in the V direction.
    // controlPointCountU : The output number of control points in the U direction.
    // controlPointCountV : The output number of control points in the V direction.
    // controlPoints : An output array of surface control points.
    // knotsU : The output knot vector for the U direction.
    // knotsV : The output knot vector for the V direction.
    // weights : An output array of weights that corresponds to the control points of the surface.
    // propertiesU : The output properties (NurbsSurfaceProperties) of the surface in the U direction.
    // propertiesV : The output properties (NurbsSurfaceProperties) of the surface in the V direction.
    // Returns true if successful.
    getData(degreeU: Object, degreeV: Object, controlPointCountU: Object, controlPointCountV: Object, controlPoints: Object, knotsU: Object, knotsV: Object, weights: Object, propertiesU: Object, propertiesV: Object): boolean;

    // Sets the data that defines the NURBS surface.
    // degreeU : The degree in the U direction.
    // degreeV : The degree in the V direction.
    // controlPointCountU : The number of control points in the U direction.
    // controlPointCountV : The number of control points in the V direction.
    // controlPoints : An array of surface control points.
    // knotsU : The knot vector for the U direction.
    // knotsV : The knot vector for the V direction.
    // weights : An array of weights that corresponds to the control points of the surface.
    // propertiesU : The properties (NurbsSurfaceProperties) of the surface in the U direction.
    // propertiesV : The properties (NurbsSurfaceProperties) of the surface in the V direction.
    // Returns true if successful
    set(degreeU: number, degreeV: number, controlPointCountU: number, controlPointCountV: number, controlPoints: Point3D[], knotsU: number[], knotsV: number[], weights: number[], propertiesU: number, propertiesV: number)

    // Creates and returns an independent copy of this NurbsSurface object.
    // Returns a new NurbsSurface object that is a copy of this NurbsSurface object.
    copy(): NurbsSurface;
}

//=========== Plane ============
// Transient plane. A transient plane is not displayed or saved in a document.
// Transient planes are used as a wrapper to work with raw plane information.
// A transient plane has no boundaries or size, but is infinite and is represented
// by a position, a normal, and an orientation in space.
// They are created statically using the create method of the Plane class.
interface Plane {
    cast(object: Object): Plane;

    //     // Gets and sets the origin point of the plane.
    //     Object.defineProperty(adsk.core.Plane.prototype, 'origin', {
    //         get : function () {
    //             var result = this._execute('origin');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('origin', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the normal of the plane.
    //     Object.defineProperty(adsk.core.Plane.prototype, 'normal', {
    //         get : function () {
    //             var result = this._execute('normal');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('normal', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the U Direction of the plane.
    //     Object.defineProperty(adsk.core.Plane.prototype, 'uDirection', {
    //         get : function () {
    //             var result = this._execute('uDirection');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         }
    //     });

    //     // Gets the V Direction of the plane.
    //     Object.defineProperty(adsk.core.Plane.prototype, 'vDirection', {
    //         get : function () {
    //             var result = this._execute('vDirection');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         }
    //     });

    //     // Creates a transient plane object by specifying an origin and a normal direction.
    //     // origin : The origin point of the plane.
    //     // normal : The normal direction of the plane.
    //     // Returns the new plane object or null if the creation failed.
    //     adsk.core.Plane.create = function (origin, normal) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (normal !== null && !(normal instanceof adsk.core.Vector3D)) { throw new TypeError('normal must be a adsk.core.Vector3D'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             normal : (normal === null ? normal : normal.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Plane', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Plane) : null;
    //     };

    //     // Creates a transient plane object by specifying an origin along with U and V directions.
    //     // origin : The origin point of the plane.
    //     // UDirection : The U direction for the plane.
    //     // VDirection : The V direction for the plane.
    //     // Returns the new plane object or null if the creation failed.
    //     adsk.core.Plane.createUsingDirections = function (origin, uDirection, vDirection) {
    //         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
    //         if (uDirection !== null && !(uDirection instanceof adsk.core.Vector3D)) { throw new TypeError('uDirection must be a adsk.core.Vector3D'); }
    //         if (vDirection !== null && !(vDirection instanceof adsk.core.Vector3D)) { throw new TypeError('vDirection must be a adsk.core.Vector3D'); }
    //         var args = {
    //             origin : (origin === null ? origin : origin.handle),
    //             uDirection : (uDirection === null ? uDirection : uDirection.handle),
    //             vDirection : (vDirection === null ? vDirection : vDirection.handle)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Plane', 'createUsingDirections', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Plane) : null;
    //     };

    //     // Sets the U and V directions of the plane.
    //     // uDirection : The U direction for the plane.
    //     // vDirection : The V direction for the plane.
    //     // Returns true if successful.
    //     adsk.core.Plane.prototype.setUVDirections = function (uDirection, vDirection) {
    //         if (uDirection !== null && !(uDirection instanceof adsk.core.Vector3D)) { throw new TypeError('uDirection must be a adsk.core.Vector3D'); }
    //         if (vDirection !== null && !(vDirection instanceof adsk.core.Vector3D)) { throw new TypeError('vDirection must be a adsk.core.Vector3D'); }
    //         var args = {
    //             uDirection : (uDirection === null ? uDirection : uDirection.handle),
    //             vDirection : (vDirection === null ? vDirection : vDirection.handle)
    //         };
    //         var result = this._execute('setUVDirections', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Checks if this plane is parallel to another plane.
    //     // plane : The plane to compare with for parallelism.
    //     // Returns true if the planes are parallel.
    //     adsk.core.Plane.prototype.isParallelToPlane = function (plane) {
    //         if (plane !== null && !(plane instanceof adsk.core.Plane)) { throw new TypeError('plane must be a adsk.core.Plane'); }
    //         var args = {
    //             plane : (plane === null ? plane : plane.handle)
    //         };
    //         var result = this._execute('isParallelToPlane', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Checks if this plane is parallel to a line.
    //     // line : The line to compare with for parallelism.
    //     // Returns true if the plane and line are parallel.
    //     adsk.core.Plane.prototype.isParallelToLine = function (line) {
    //         if (line !== null && !(line instanceof adsk.core.Line3D)) { throw new TypeError('line must be a adsk.core.Line3D'); }
    //         var args = {
    //             line : (line === null ? line : line.handle)
    //         };
    //         var result = this._execute('isParallelToLine', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Checks if this plane is perpendicular to another plane.
    //     // plane : The plane to compare with for perpendicularity.
    //     // Returns true if the planes are perpendicular.
    //     adsk.core.Plane.prototype.isPerpendicularToPlane = function (plane) {
    //         if (plane !== null && !(plane instanceof adsk.core.Plane)) { throw new TypeError('plane must be a adsk.core.Plane'); }
    //         var args = {
    //             plane : (plane === null ? plane : plane.handle)
    //         };
    //         var result = this._execute('isPerpendicularToPlane', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Checks if this plane is perpendicular to a line.
    //     // line : The line to compare with for perpendicularity.
    //     // Returns true if the plane and line are perpendicular.
    //     adsk.core.Plane.prototype.isPerpendicularToLine = function (line) {
    //         if (line !== null && !(line instanceof adsk.core.Line3D)) { throw new TypeError('line must be a adsk.core.Line3D'); }
    //         var args = {
    //             line : (line === null ? line : line.handle)
    //         };
    //         var result = this._execute('isPerpendicularToLine', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Checks if this plane is coplanar with another plane.
    //     // plane : The plane to compare with for coplanarity.
    //     // Returns true if the planes are coplanar.
    //     adsk.core.Plane.prototype.isCoPlanarTo = function (plane) {
    //         if (plane !== null && !(plane instanceof adsk.core.Plane)) { throw new TypeError('plane must be a adsk.core.Plane'); }
    //         var args = {
    //             plane : (plane === null ? plane : plane.handle)
    //         };
    //         var result = this._execute('isCoPlanarTo', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates an infinite line at the intersection of this plane with another plane.
    //     // plane : The plane to intersect with.
    //     // Returns an InfiniteLine3D object or null if the planes do not intersect (are parallel).
    //     adsk.core.Plane.prototype.intersectWithPlane = function (plane) {
    //         if (plane !== null && !(plane instanceof adsk.core.Plane)) { throw new TypeError('plane must be a adsk.core.Plane'); }
    //         var args = {
    //             plane : (plane === null ? plane : plane.handle)
    //         };
    //         var result = this._execute('intersectWithPlane', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.InfiniteLine3D) : null;
    //     };

    //     // Creates a 3D point at the intersection of this plane and a line.
    //     // line : The line to intersect with.
    //     // Returns a Point3D object or null if the plane and line do not intersect (are parallel).
    //     adsk.core.Plane.prototype.intersectWithLine = function (line) {
    //         if (line !== null && !(line instanceof adsk.core.InfiniteLine3D)) { throw new TypeError('line must be a adsk.core.InfiniteLine3D'); }
    //         var args = {
    //             line : (line === null ? line : line.handle)
    //         };
    //         var result = this._execute('intersectWithLine', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //     };

    //     // Intersect this plane with a curve to get the intersection point(s).
    //     // curve : The intersecting curve.
    //     // The curve can be a Line3D, InfininteLine3D, Circle3D, Arc3D, EllipticalArc3D, Ellipse3D,
    //     // or NurbsCurve3D.
    //     // Returns a collection of the intersection points.
    //     adsk.core.Plane.prototype.intersectWithCurve = function (curve) {
    //         if (curve !== null && !(curve instanceof adsk.core.Curve3D)) { throw new TypeError('curve must be a adsk.core.Curve3D'); }
    //         var args = {
    //             curve : (curve === null ? curve : curve.handle)
    //         };
    //         var result = this._execute('intersectWithCurve', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Intersect this plane with a surface to get the intersection point(s).
    //     // surface : The intersecting surface.
    //     // The surface can be a Plane, Cone, Cylinder, EllipticalCone, EllipticalCylinder, Sphere,
    //     // Torus, or a NurbsSurface.
    //     // Returns a collection of the intersection points.
    //     adsk.core.Plane.prototype.intersectWithSurface = function (surface) {
    //         if (surface !== null && !(surface instanceof adsk.core.Surface)) { throw new TypeError('surface must be a adsk.core.Surface'); }
    //         var args = {
    //             surface : (surface === null ? surface : surface.handle)
    //         };
    //         var result = this._execute('intersectWithSurface', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };

    //     // Creates and returns an independent copy of this Plane object.
    //     // Returns a new Plane object that is a copy of this Plane object.
    //     adsk.core.Plane.prototype.copy = function () {
    //         var result = this._execute('copy');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Plane) : null;
    //     };
}

//=========== Sphere ============
// Transient sphere. A transient sphere is not displayed or saved in a document.
// Transient spheres are used as a wrapper to work with raw sphere information.
// A transient sphere is a full sphere defined by a point and a radius.
// They are created statically using the create method of the Sphere class.
interface Sphere {
    cast(object: Object): Sphere;

    // Gets and sets the origin point (center) of the sphere.
    origin: Point3D;

    // Gets and sets the radius of the sphere.
    radius: number;

    // Creates a transient sphere object.
    // origin : The origin point (center) of the sphere.
    // radius : The radius of the sphere.
    // Returns the new Sphere object or null if the creation failed.
    create(origin: Point3D, radius: number): Sphere;

    // Gets all of the data defining the sphere.
    // origin : The output origin point (center) of the sphere.
    // radius : The output radius of the sphere.
    // Returns true if successful.
    getData(origin: Object, radius: Object): boolean;

    // Sets all of the data defining the sphere.
    // origin : The origin point (center) of the sphere.
    // radius : The radius of the sphere.
    // Returns true if successful.
    set(origin: Point3D, radius: number): boolean;

    // Creates and returns an independent copy of this Sphere object.
    // Returns a new Sphere object that is a copy of this Sphere object.
    copy(): Sphere;
}

//=========== Torus ============
// Transient torus. A transient torus is not displayed or saved in a document.
// A transient torus is used as a wrapper to work with raw torus information.
// A transient torus is a full torus with no boundaries.
// They are created statically using the create method of the Torus class.
interface Torus {
    cast(object: Object): Torus;

    // Gets and sets the origin point (center) of the torus.
    origin: Point3D;

    // Gets and sets the center axis of the torus.
    axis: Vector3D;

    // Gets and sets the major radius of the torus.
    majorRadius: number;

    // Gets and sets the minor radius of the torus.
    minorRadius: number;

    // Creates a transient torus object.
    // origin : The origin point (center) of the torus.
    // axis : The center axis of the torus.
    // majorRadius : The major radius of the torus.
    // minorRadius : The minor radius of the torus.
    // Returns the new Torus object or null if the creation failed.
    create(origin: Point3D, axis: Vector3D, majorRadius: number, minorRadius: number): Torus;

    // Gets all of the data defining the torus.
    // origin : The output origin point (center) of the torus.
    // axis : The output center axis of the torus.
    // majorRadius : The output major radius of the torus.
    // minorRadius : The output minor radius of the torus.
    // Returns true if successful.
    getData(origin: Object, axis: Object, majorRadius: number, minorRadius: number): boolean;

    // Sets all of the data defining the torus.
    // origin : The origin point (center) of the torus.
    // axis : The center axis of the torus.
    // majorRadius : The major radius of the torus.
    // minorRadius : The minor radius of the torus.
    // Returns true if successful.
    set(origin: Point3D, axis: Vector3D, majorRadius: number, minorRadius: number): boolean;

    // Creates and returns an independent copy of this Torus object.
    // Returns a new Torus object that is a copy of this Torus object.
    copy(): Torus;
}