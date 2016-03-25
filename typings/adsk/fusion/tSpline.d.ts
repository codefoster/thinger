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

//     //=========== TSplineBodies ============
//     // A collection of TSpline bodies.
//     adsk.fusion.TSplineBodies = function TSplineBodies(handle) {
//         if (!(this instanceof adsk.fusion.TSplineBodies)) {
//             return adsk.fusion.TSplineBodies.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TSplineBodies.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TSplineBodies.prototype.constructor = adsk.fusion.TSplineBodies;
//     adsk.fusion.TSplineBodies.interfaceId = 'adsk.fusion.TSplineBodies';
//     adsk.objectTypes['adsk.fusion.TSplineBodies'] = adsk.fusion.TSplineBodies;
//     adsk.fusion.TSplineBodies.cast = function (object) {
//         return object instanceof adsk.fusion.TSplineBodies ? object : null;
//     };

//     // The number of bodies in the collection.
//     Object.defineProperty(adsk.fusion.TSplineBodies.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified T-Spline body using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.TSplineBodies.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TSplineBody) : null;
//     };

//     //=========== TSplineBody ============
//     // A TSpline body.
//     adsk.fusion.TSplineBody = function TSplineBody(handle) {
//         if (!(this instanceof adsk.fusion.TSplineBody)) {
//             return adsk.fusion.TSplineBody.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TSplineBody.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TSplineBody.prototype.constructor = adsk.fusion.TSplineBody;
//     adsk.fusion.TSplineBody.interfaceId = 'adsk.fusion.TSplineBody';
//     adsk.objectTypes['adsk.fusion.TSplineBody'] = adsk.fusion.TSplineBody;
//     adsk.fusion.TSplineBody.cast = function (object) {
//         return object instanceof adsk.fusion.TSplineBody ? object : null;
//     };

//     return adsk;
// }));