/// <reference path="dashboard.d.ts"/>
/// <reference path="geometry.d.ts"/>
/// <reference path="materials.d.ts"/>
/// <reference path="userInterface.d.ts"/>

// /*global console*/
// /*global define*/
// /*global window*/
// /*jslint vars: true, nomen: true, plusplus: true*/

// (function (root, factory) {

//     'use strict';

//     if (typeof define === 'function' && define.amd) {
//         // using require.js
//         define(factory);
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
//     if (adsk.core === undefined) {
//         adsk.core = {};
//     }

//     var neutronJavaScriptHandler = window.neutronJavaScriptHandler = window.neutronJavaScriptHandler || {};
//     neutronJavaScriptHandler.handle = function handle(command, args) {
//         try {
//             switch (command) {
//             case 'API.fireEvent':
//                 var data = JSON.parse(args);
//                 adsk.core.Event.fire(data.eventid, data.argsHandle);
//                 break;
//             case 'debugger':
//                 /*jslint debug: true*/
//                 debugger;
//                 /*jslint debug: false*/
//                 break;
//             }
//         } catch (e) {
//             console.log(e);
//             console.log('exception caught with command: ' + command + ', args: ' + args);
//         }
//         return 'OK';
//     };

//     adsk.debug = false;
//     /*global neutronJavaScriptObject*/
//     var debug = neutronJavaScriptObject.executeQuery('debugOnLoad', '');
//     if (debug === 'stop') {
//         window.location.assign('about:blank');
//     } else if (debug === 'true') {
//         adsk.debug = true;
//     }

//     adsk.terminate = function terminate() {
//         neutronJavaScriptObject.executeQuery('terminate', '');
//     };

//     adsk.objectTypes = {};
//     adsk.createObject = function createObject(handle, expectedType) {
//         var type = adsk.objectTypes[handle.objectType];
//         var res;
//         if (type !== undefined) {
//             res = new type(handle);
//             if (!(res instanceof expectedType)) { console.log('Unexpected Type! ' + type.name + ' is not a ' + expectedType.name); }
//         } else {
//             if (handle.objectType) {
//                 console.log('' + expectedType.name + ' not defined! Please include its containing script file');
//             } else {
//                 console.log('Unexpected object handle for ' + expectedType.name);
//             }
//             res = new expectedType(handle);
//         }
//         return res;
//     };

interface Base {
    //     adsk.core.Base = function Base(handle) {

    //         // If called as a function, perform a cast
    //         if (!(this instanceof adsk.core.Base)) {
    //             return adsk.core.Base.cast(handle, adsk.core.Base);
    //         }

    //         this.handle = handle;
    //     };

    //     adsk.core.Base.interfaceId = 'adsk.core.Base';
    //     adsk.objectTypes['adsk.core.Base'] = adsk.core.Base;

    //     adsk.core.Base.prototype.equals = function equals(object) {
    //         if (!(object instanceof adsk.core.Base)) {
    //             return false;
    //         }
    //         return JSON.stringify(this.handle) === JSON.stringify(object.handle);
    //     };

    //     Object.defineProperty(adsk.core.Base.prototype, 'objectType', {
    //         get : function () {
    //             var result = this._execute('objectType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     Object.defineProperty(adsk.core.Base.prototype, 'isValid', {
    //         get : function () {
    //             var result = this._execute('isValid');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     adsk.core.Base.prototype._execute = function _execute(method, methodArguments) {
    //         var result;
    //         try {
    //             var args = {
    //                 subject : {
    //                     handle : this.handle
    //                 },
    //                 method : method
    //             };
    //             if (methodArguments) {
    //                 args.args = methodArguments;
    //             }
    //             /*global neutronJavaScriptObject*/
    //             result = JSON.parse(neutronJavaScriptObject.executeQuery('execute', JSON.stringify(args)));
    //             if (result && result.newhandle) {
    //                 this.handle = result.newhandle;
    //             }
    //         } catch (e) {
    //             console.log(e);
    //             throw e;
    //         }
    //         if (result && result.error && adsk.onError) {
    //             adsk.onError(result.error);
    //         }
    //         debugger;
    //         return result;
    //     };

    //     adsk.core.Base._executeStatic = function executeStatic(interfaceName, method, methodArguments) {
    //         var result;
    //         try {
    //             var args = {
    //                 subject : {},
    //                 method : method
    //             };
    //             args.subject['static'] = interfaceName;
    //             if (methodArguments) {
    //                 args.args = methodArguments;
    //             }
    //             /*global neutronJavaScriptObject*/
    //             result = JSON.parse(neutronJavaScriptObject.executeQuery('execute', JSON.stringify(args)));
    //         } catch (e) {
    //             console.log(e);
    //             throw e;
    //         }
    //         if (result && result.error && adsk.onError) {
    //             adsk.onError(result.error);
    //         }
    //         return result;
    //     };

    //     // Default error throwing handler.
    //     adsk.onErrorThrow = function onErrorThrow(error) {
    //         throw error;
    //     };

    //     // Error handling function that is called when any API call returns an error code.
    //     // The 'error' argument passed to this error handler will have a 'code' and 'description'
    //     // value matching the values returned from adsk.core.Application.getLastError.
    //     // Set adsk.onError with a custom handler, or 'adsk.onError = undefined' to use non-throwing
    //     // error handling (check the return code from API calls and call getLastError for error codes and descriptions).
    //     adsk.onError = adsk.onErrorThrow;
}

//=========== Application ============
// The top-level object that represents the Fusion application (all of Fusion).
// This provides access to the modeler and files.
interface Application {
    // Returns the Documents collection object which supports accessing
    // opened documents, opening existing documents, and creating new documents.

    documents: Documents;

    // Returns the current active document.
    activeDocument: Document;

    // Returns the current active product.
    activeProduct: Product;

    // Returns the currently active graphics view.
    activeViewport: Viewport;

    // Returns the current edit target as seen in the user interface. This edit target
    // is defined as the container object that will be added to if something is created.
    // For example, a component can be an edit target so that when new bodies are created they
    // are added to that component. A sketch can also be an edit target.
    activeEditObject: Base;

    // Returns the Data object which provides access the files.
    data: Data;

    // The modeling tolerance used internally when comparing two points. The value is in centimeters.
    pointTolerance;

    // The modeling tolerance used when comparing vector angles. The value is in radians.
    vectorAngleTolerance;

    // Provides access to all of the application preferences.
    preferences: Preferences;

    // The DocumentOpening event fires at the VERY start of a document being opened.
    // There is no promise that the document will be opened, hence
    // a documentOpened event may not follow.
    // The client can add or remove DocumentEventHandlers from the DocumentEvent.
    documentOpening: DocumentEvent;

    // The DocumentOpened event fires at the VERY end of a document being opened -
    // e.g. the UI is all displayed.
    // The client can add or remove DocumentEventHandlers from the DocumentEvent.
    documentOpened: DocumentEvent;

    // Provides access to functionality specific to the user interface.
    userInterface: UserInterface;

    // Returns the collection of material libraries currently available.
    materialLibraries: MaterialLibraries;

    // Returns the set of favorite materials.
    favoriteMaterials: FavoriteMaterials;

    //     // Returns the set of favorite appearances.
    //     Object.defineProperty(adsk.core.Application.prototype, 'favoriteAppearances', {
    //         get : function () {
    //             var result = this._execute('favoriteAppearances');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.FavoriteAppearances) : null;
    //         }
    //     });

    //     // Returns an array containing the names of the products types currently
    //     // supported by Fusion. For example, the name returned for Fusion is
    //     // "DesignProductType". These product type names are used to identify
    //     // specific products in some other API functions such as the productType
    //     // property on the Workspace and ToolbarPanel objects.
    //     Object.defineProperty(adsk.core.Application.prototype, 'supportedProductTypes', {
    //         get : function () {
    //             var result = this._execute('supportedProductTypes');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the ImportManager. You use the ImportManager
    //     // to import files (of various neutral formats.) into existing components or new document.
    //     Object.defineProperty(adsk.core.Application.prototype, 'importManager', {
    //         get : function () {
    //             var result = this._execute('importManager');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ImportManager) : null;
    //         }
    //     });

    //     // Returns the user name of the Autodesk account currently logged in.
    //     Object.defineProperty(adsk.core.Application.prototype, 'userName', {
    //         get : function () {
    //             var result = this._execute('userName');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the internal name of the Autodesk account currently logged in.
    //     // This can be used by applications sold through the Autodesk Exchange Store
    //     // to verify that the user has in fact purchased the product.
    //     Object.defineProperty(adsk.core.Application.prototype, 'userId', {
    //         get : function () {
    //             var result = this._execute('userId');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if Fusion is offline or not.
    //     Object.defineProperty(adsk.core.Application.prototype, 'isOffLine', {
    //         get : function () {
    //             var result = this._execute('isOffLine');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isOffLine', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Boolean property indicating whether Fusion has completed its initialization.
    //     // This includes initialization of all the Add-ins loaded at startup.
    //     Object.defineProperty(adsk.core.Application.prototype, 'isStartupComplete', {
    //         get : function () {
    //             var result = this._execute('isStartupComplete');
    //             return result ? result.value : undefined;
    //         }
    //     });

    // Returns the User that is currently logged in.
    currentUser: User;

    // Access to the root Application object.
    // Return the root Application object or null if it failed.
    get(): Application;

    // Returns information about the last error that occurred.
    // description : A description of the last error in English.
    // Returns the number of the specific error.
    getLastError(description: Object);
}

//=========== Camera ============
// The Camera class represents the information that specifies how a model
// is viewed and displayed. It's analogous to a real camera where it has
// a position in space, is pointed towards a specific point and is oriented
// in a particular way.
interface Camera {
    //         if (!(this instanceof adsk.core.Camera)) {
    //             return adsk.core.Camera.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.Camera.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.Camera.prototype.constructor = adsk.core.Camera;
    //     adsk.core.Camera.interfaceId = 'adsk.core.Camera';
    //     adsk.objectTypes['adsk.core.Camera'] = adsk.core.Camera;
    //     adsk.core.Camera.cast = function (object) {
    //         return object instanceof adsk.core.Camera ? object : null;
    //     };

    //     // Gets and sets the position of the eye in world space.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'eye', {
    //         get : function () {
    //             var result = this._execute('eye');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('eye', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the camera target point in world space.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'target', {
    //         get : function () {
    //             var result = this._execute('target');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Point3D)) { throw new TypeError('value must be a adsk.core.Point3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('target', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the current camera type.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'cameraType', {
    //         get : function () {
    //             var result = this._execute('cameraType');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('cameraType', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the perspective angle of the camera. This
    //     // property is only valid when the CameraType property is
    //     // either Perspective or PerspectiveWithOrthoFaces.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'perspectiveAngle', {
    //         get : function () {
    //             var result = this._execute('perspectiveAngle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('perspectiveAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Defines the "up" direction for the camera which controls the orientation of the camera around the line
    //     // defined between the eye and target points.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'upVector', {
    //         get : function () {
    //             var result = this._execute('upVector');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Vector3D)) { throw new TypeError('value must be a adsk.core.Vector3D'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('upVector', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Defines the area that's visible by the camera. This
    //     // value is the radius of a sphere centered at the target point.
    //     // The camera will display everything within that sphere and
    //     // everything in front of and behind the sphere. Additional
    //     // geometry outside of the sphere will also be visible depending
    //     // on the shape of the window. Setting this
    //     // value can cause the eye and/or perspective angle to be
    //     // modified when the camera type is perspective.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'viewExtents', {
    //         get : function () {
    //             var result = this._execute('viewExtents');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('viewExtents', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // If this property is true, when this camera is applied to a viewport it
    //     // will modify the camera such that the entire model is displayed in the viewport.
    //     // When getting a camera from a viewport this property is always initialized to false.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'isFitView', {
    //         get : function () {
    //             var result = this._execute('isFitView');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isFitView', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Determines whether Fusion does a smooth transition to this camera positoin when the
    //     // camera is assigned to a ViewPort. If this is true it will do a smooth transition from
    //     // the current camera position to the new camera position. If false, the view will jump
    //     // to the position defined by the camera with no intermediate steps. This is useful if
    //     // you're providing a series of cameras to control the camera animation.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'isSmoothTransition', {
    //         get : function () {
    //             var result = this._execute('isSmoothTransition');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isSmoothTransition', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Sets the camera to a standard orientation. If this is set,
    //     // it will result in resetting all of the camera values except
    //     // the camera type.
    //     Object.defineProperty(adsk.core.Camera.prototype, 'viewOrientation', {
    //         get : function () {
    //             var result = this._execute('viewOrientation');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('viewOrientation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//     //=========== CameraTypes ============
//     // The different types of cameras.
//     adsk.core.CameraTypes = {
//         OrthographicCameraType : 0,
//         PerspectiveCameraType : 1,
//         PerspectiveWithOrthoFacesCameraType : 2
//     };

//     //=========== CloseError ============
//     // List of possible errors when closing a document.
//     adsk.core.CloseError = {
//         CloseCancelledError : 200
//     };

//=========== Color ============
// The Color class wraps all of the information that defines a simple color.
interface Color {
    //         if (!(this instanceof adsk.core.Color)) {
    //             return adsk.core.Color.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.Color.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.Color.prototype.constructor = adsk.core.Color;
    //     adsk.core.Color.interfaceId = 'adsk.core.Color';
    //     adsk.objectTypes['adsk.core.Color'] = adsk.core.Color;
    //     adsk.core.Color.cast = function (object) {
    //         return object instanceof adsk.core.Color ? object : null;
    //     };

    //     // Gets and sets the red component of the color. The value can be 0 to 255.
    //     Object.defineProperty(adsk.core.Color.prototype, 'red', {
    //         get : function () {
    //             var result = this._execute('red');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('red', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the green component of the color. The value can be 0 to 255.
    //     Object.defineProperty(adsk.core.Color.prototype, 'green', {
    //         get : function () {
    //             var result = this._execute('green');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('green', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the blue component of the color. The value can be 0 to 255.
    //     Object.defineProperty(adsk.core.Color.prototype, 'blue', {
    //         get : function () {
    //             var result = this._execute('blue');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('blue', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the opacity of the color. The value can be 0 to 255.
    //     Object.defineProperty(adsk.core.Color.prototype, 'opacity', {
    //         get : function () {
    //             var result = this._execute('opacity');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('opacity', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets all of the information defining this color.
    //     // red : The red component of the color. The value can be 0 to 255.
    //     // green : The green component of the color. The value can be 0 to 255.
    //     // blue : The blue component of the color. The value can be 0 to 255.
    //     // opacity : The opacity of the color. The value can be 0 to 255.
    //     // Returns true if getting the color information was successful.
    //     adsk.core.Color.prototype.getColor = function (red, green, blue, opacity) {
    //         if (typeof red !== 'object') { throw new TypeError('red must be an object'); }
    //         if (typeof green !== 'object') { throw new TypeError('green must be an object'); }
    //         if (typeof blue !== 'object') { throw new TypeError('blue must be an object'); }
    //         if (typeof opacity !== 'object') { throw new TypeError('opacity must be an object'); }
    //         var args = {
    //             red : null,
    //             green : null,
    //             blue : null,
    //             opacity : null
    //         };
    //         var result = this._execute('getColor', args);
    //         if (result && result.outargs) {
    //             red.value = (result.outargs.red !== undefined) ? result.outargs.red : undefined;
    //             green.value = (result.outargs.green !== undefined) ? result.outargs.green : undefined;
    //             blue.value = (result.outargs.blue !== undefined) ? result.outargs.blue : undefined;
    //             opacity.value = (result.outargs.opacity !== undefined) ? result.outargs.opacity : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Sets all of the color information.
    //     // red : The red component of the color. The value can be 0 to 255.
    //     // green : The green component of the color. The value can be 0 to 255.
    //     // blue : The blue component of the color. The value can be 0 to 255.
    //     // opacity : The opacity of the color. The value can be 0 to 255.
    //     // Returns true if setting the color information was successful.
    //     adsk.core.Color.prototype.setColor = function (red, green, blue, opacity) {
    //         if (!isFinite(red)) { throw new TypeError('red must be a number'); }
    //         if (!isFinite(green)) { throw new TypeError('green must be a number'); }
    //         if (!isFinite(blue)) { throw new TypeError('blue must be a number'); }
    //         if (!isFinite(opacity)) { throw new TypeError('opacity must be a number'); }
    //         var args = {
    //             red : Number(red),
    //             green : Number(green),
    //             blue : Number(blue),
    //             opacity : Number(opacity)
    //         };
    //         var result = this._execute('setColor', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Creates a new color.
    //     // red : The red component of the color. The value can be 0 to 255.
    //     // green : The green component of the color. The value can be 0 to 255.
    //     // blue : The blue component of the color. The value can be 0 to 255.
    //     // opacity : The opacity of the color. The value can be 0 to 255.
    //     // Returns the newly created color or null if the creation failed.
    //     adsk.core.Color.create = function (red, green, blue, opacity) {
    //         if (!isFinite(red)) { throw new TypeError('red must be a number'); }
    //         if (!isFinite(green)) { throw new TypeError('green must be a number'); }
    //         if (!isFinite(blue)) { throw new TypeError('blue must be a number'); }
    //         if (!isFinite(opacity)) { throw new TypeError('opacity must be a number'); }
    //         var args = {
    //             red : Number(red),
    //             green : Number(green),
    //             blue : Number(blue),
    //             opacity : Number(opacity)
    //         };
    //         var result = adsk.core.Base._executeStatic('adsk.core.Color', 'create', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Color) : null;
    //     };
}

//     //=========== DefaultModelingOrientations ============
//     // A list of the valid modeling orientations.
//     adsk.core.DefaultModelingOrientations = {
//         YUpModelingOrientation : 0,
//         ZUpModelingOrientation : 1
//     };

//     //=========== DefaultOrbits ============
//     // A list of the valid orbit modes.
//     adsk.core.DefaultOrbits = {
//         ConstrainedOrbit : 0,
//         FreeOrbit : 1
//     };

//     //=========== DefaultUnitsPreferences ============
//     // The base class for the default units preference. There is a derived class
//     // supported by each product where the specific preference values are exposed.
//     adsk.core.DefaultUnitsPreferences = function DefaultUnitsPreferences(handle) {
//         if (!(this instanceof adsk.core.DefaultUnitsPreferences)) {
//             return adsk.core.DefaultUnitsPreferences.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.DefaultUnitsPreferences.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.DefaultUnitsPreferences.prototype.constructor = adsk.core.DefaultUnitsPreferences;
//     adsk.core.DefaultUnitsPreferences.interfaceId = 'adsk.core.DefaultUnitsPreferences';
//     adsk.objectTypes['adsk.core.DefaultUnitsPreferences'] = adsk.core.DefaultUnitsPreferences;
//     adsk.core.DefaultUnitsPreferences.cast = function (object) {
//         return object instanceof adsk.core.DefaultUnitsPreferences ? object : null;
//     };

//     // Returns the name of this DefaultUnitPreferences object.
//     Object.defineProperty(adsk.core.DefaultUnitsPreferences.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//=========== DefaultUnitsPreferencesCollection ============
// A collection that provides access to product specific unit preference objects.
interface DefaultUnitsPreferencesCollection {
    //         if (!(this instanceof adsk.core.DefaultUnitsPreferencesCollection)) {
    //             return adsk.core.DefaultUnitsPreferencesCollection.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.DefaultUnitsPreferencesCollection.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.DefaultUnitsPreferencesCollection.prototype.constructor = adsk.core.DefaultUnitsPreferencesCollection;
    //     adsk.core.DefaultUnitsPreferencesCollection.interfaceId = 'adsk.core.DefaultUnitsPreferencesCollection';
    //     adsk.objectTypes['adsk.core.DefaultUnitsPreferencesCollection'] = adsk.core.DefaultUnitsPreferencesCollection;
    //     adsk.core.DefaultUnitsPreferencesCollection.cast = function (object) {
    //         return object instanceof adsk.core.DefaultUnitsPreferencesCollection ? object : null;
    //     };

    //     // Returns the number of DefaultUnitsPreference objects.
    //     Object.defineProperty(adsk.core.DefaultUnitsPreferencesCollection.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified DefaultUnitPreferences object using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.core.DefaultUnitsPreferencesCollection.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DefaultUnitsPreferences) : null;
    //     };

    //     // Returns the DefaultUnitsPreference object with the specified name.
    //     // name : The name of the DefaultUnitsPreference to return.
    //     // Returns the DefaultUnitsPreference object or null if if an invalid name was specified.
    //     adsk.core.DefaultUnitsPreferencesCollection.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DefaultUnitsPreferences) : null;
    //     };
}

//     //=========== DegradedSelectionDisplayStyles ============
//     // A list of the valid degraded display styles.
//     adsk.core.DegradedSelectionDisplayStyles = {
//         NormalWithGlowDegradedSelectionStyle : 0,
//         SimpleWithoutGlowDegradedSelectionStyle : 1
//     };

//     //=========== DegreeDisplayFormats ============
//     // List of the valid degree display formats.
//     adsk.core.DegreeDisplayFormats = {
//         DecimalDegreeDisplay : 0,
//         MinutesAndSecondsDegreeDisplay : 1
//     };

//     //=========== Document ============
//     // Object that represents an open document. This is the base class for all document types.
//     adsk.core.Document = function Document(handle) {
//         if (!(this instanceof adsk.core.Document)) {
//             return adsk.core.Document.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Document.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Document.prototype.constructor = adsk.core.Document;
//     adsk.core.Document.interfaceId = 'adsk.core.Document';
//     adsk.objectTypes['adsk.core.Document'] = adsk.core.Document;
//     adsk.core.Document.cast = function (object) {
//         return object instanceof adsk.core.Document ? object : null;
//     };

//     // Gets and sets the name of the document.
//     Object.defineProperty(adsk.core.Document.prototype, 'name', {
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

//     // Property that indicates if the document has been modified since it was last saved.
//     Object.defineProperty(adsk.core.Document.prototype, 'isModified', {
//         get : function () {
//             var result = this._execute('isModified');
//             return result ? result.value : undefined;
//         }
//     });

//     // Property that indicates if this document has been saved or not. The initial save of
//     // a document requires that the name and location be specified and requires the saveAs method
//     // to be used. If the document has been saved then the save method can be used to save changes made.
//     Object.defineProperty(adsk.core.Document.prototype, 'isSaved', {
//         get : function () {
//             var result = this._execute('isSaved');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parent Application object.
//     Object.defineProperty(adsk.core.Document.prototype, 'parent', {
//         get : function () {
//             var result = this._execute('parent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Application) : null;
//         }
//     });

//     // Returns the products associated with this document.
//     Object.defineProperty(adsk.core.Document.prototype, 'products', {
//         get : function () {
//             var result = this._execute('products');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Products) : null;
//         }
//     });

//     // Gets if this document is the active document in the user interface.
//     Object.defineProperty(adsk.core.Document.prototype, 'isActive', {
//         get : function () {
//             var result = this._execute('isActive');
//             return result ? result.value : undefined;
//         }
//     });

//     // Causes this document to become the active document in the user interface.
//     // Returns true if the activation was successful.
//     adsk.core.Document.prototype.activate = function () {
//         var result = this._execute('activate');
//         return result ? result.value : undefined;
//     };

//     // Closes this document.
//     // saveChanges : This argument defines what the behavior of the close is when the document
//     // has been modified. If the document hasn't been modified then this argument
//     // is ignored and the document is closed. If the document has been modified
//     // and this argument is false then Fusion will close the document and lose
//     // any changes. If the document has been modified and this argument is true then
//     // it will prompt the user if they want to save the changes or not, just the same
//     // as if the user was to interactively close the document.
//     // Returns true if closing the document was successful.
//     adsk.core.Document.prototype.close = function (saveChanges) {
//         if (typeof saveChanges !== 'boolean') { throw new TypeError('saveChanges must be a boolean'); }
//         var args = {
//             saveChanges : saveChanges
//         };
//         var result = this._execute('close', args);
//         return result ? result.value : undefined;
//     };

//     // Saves a version of the current document. You must use the SaveAs method the first
//     // time a document is saved. You can determine if a document has been saved by checking
//     // the value of the isSaved property.
//     // description : The version description for this document
//     // Returns true if saving the document was successful.
//     adsk.core.Document.prototype.save = function (description) {
//         if (description === undefined || description === null || description.constructor !== String) { throw new TypeError('description must be a string'); }
//         var args = {
//             description : description
//         };
//         var result = this._execute('save', args);
//         return result ? result.value : undefined;
//     };

//     // Performs a Save As on this document. This saves the currently open document to the specified
//     // location and this document becomes the saved document. If this is a new document that has
//     // never been saved you must use the SaveAs method in order to specify the location and name. You
//     // can determine if the document has been saved by checking the value of the isSaved property.
//     // name : The name to use for this document. If this is an empty string, Fusion will use the default name
//     // assigned when the document was created.
//     // dataFolder : The data folder to save this document to.
//     // description : The description string of the document. This can be an empty string.
//     // tag : The tag string of the document. This can be an empty string.
//     // Returns true if the save as was successful.
//     adsk.core.Document.prototype.saveAs = function (name, dataFolder, description, tag) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (dataFolder !== null && !(dataFolder instanceof adsk.core.DataFolder)) { throw new TypeError('dataFolder must be a adsk.core.DataFolder'); }
//         if (description === undefined || description === null || description.constructor !== String) { throw new TypeError('description must be a string'); }
//         if (tag === undefined || tag === null || tag.constructor !== String) { throw new TypeError('tag must be a string'); }
//         var args = {
//             name : name,
//             dataFolder : (dataFolder === null ? dataFolder : dataFolder.handle),
//             description : description,
//             tag : tag
//         };
//         var result = this._execute('saveAs', args);
//         return result ? result.value : undefined;
//     };

//=========== Documents ============
// The Documents object provides access to all of the currently open documents and
// provides methods to create and open documents.
interface Documents {

    // Returns the number of currently open files.
    count: number;

    // Creates and opens a new document of the specified type.
    // documentType : A value from the DocumentTypes enum that specifies the type of document to create.
    // visible : Optional argument specifying is the document should be visible or not.
    // options : Various options that are supported that are specific to the document type. See the documentation
    // for the DocumentTypes enum for information about the options supported for the various types.
    // Returns the created document
    add(documentType: number, visible: boolean, options: NamedValues): Document;

    // Function that returns the specified document using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): Document;

    //     // Opens an item that has previously been saved.
    //     // dataFile : The item to open.
    //     // visible : Specifies if the document should be opened visibly or not.
    //     // Returns the open document or null if the open failed.
    //     adsk.core.Documents.prototype.open = function (dataFile, visible) {
    //         if (dataFile !== null && !(dataFile instanceof adsk.core.DataFile)) { throw new TypeError('dataFile must be a adsk.core.DataFile'); }
    //         if (visible === null || (visible !== undefined && typeof visible !== 'boolean')) { throw new TypeError('visible must be a boolean'); }
    //         var args = {
    //             dataFile : (dataFile === null ? dataFile : dataFile.handle)
    //         };
    //         if (visible !== undefined) {
    //             args.visible = visible;
    //         }
    //         var result = this._execute('open', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Document) : null;
    //     };
}

//     //=========== DocumentTypes ============
//     // The types of documents that can be created.
//     adsk.core.DocumentTypes = {
//         FusionDesignDocumentType : 0
//     };

//     //=========== Event ============
//     // Objects can have several Event properties that fire when
//     // some 'event' occurs. Clients can attach EventHandlers
//     // to one or more Events and they get notified when the 'event' occurs.
//     // This is a base class - classes like DocumentEvent add type safety
//     // (i.e. only allow the correct type of handler to be added to them).
//     adsk.core.Event = function Event(handle) {
//         if (!(this instanceof adsk.core.Event)) {
//             return adsk.core.Event.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Event.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Event.prototype.constructor = adsk.core.Event;
//     adsk.core.Event.interfaceId = 'adsk.core.Event';
//     adsk.objectTypes['adsk.core.Event'] = adsk.core.Event;
//     adsk.core.Event.cast = function (object) {
//         return object instanceof adsk.core.Event ? object : null;
//     };

//     // The name of the event - e.g. "DocumentOpening"
//     Object.defineProperty(adsk.core.Event.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//     // The object that is firing the event. For example, in the case of a command
//     // input event this will return the command.
//     Object.defineProperty(adsk.core.Event.prototype, 'sender', {
//         get : function () {
//             var result = this._execute('sender');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     Object.defineProperty(adsk.core.Event.prototype, 'eventid', {
//         get : function () {
//             if (this.eventid_ === undefined) {
//                 var result = this._execute('eventid');
//                 if (result) {
//                     this.eventid_ = result.value;
//                 }
//             }
//             return this.eventid_;
//         }
//     });

//     adsk.core.Event.prototype.add = function (handler, argType) {
//         adsk.core.Event.handlers = adsk.core.Event.handlers || {};
//         var eventid = this.eventid;
//         var handlers = adsk.core.Event.handlers[eventid];
//         if (handlers === undefined || handler.length === 0) {
//             // no existing handler for this event, so add one
//             var result = this._execute('add');
//             if (result && result.value === true) {
//                 if (handlers === undefined) {
//                     handlers = [];
//                     adsk.core.Event.handlers[eventid] = {
//                         argType: argType,
//                         handlers: handlers
//                     };
//                 }
//                 handlers.push(handler);
//             }
//         }
//     };

//     adsk.core.Event.prototype.remove = function (handler) {
//         if (adsk.core.Event.handlers) {
//             var handlers = adsk.core.Event.handlers[this.eventid];
//             if (handlers && handlers.handlers) {
//                 var i;
//                 for (i = 0; i < handlers.handlers.length; i) {
//                     if (handlers.handlers[i] === handler) {
//                         handlers.handlers.splice(i, 1);
//                     } else {
//                         ++i;
//                     }
//                 }
//                 if (!handlers.handlers.length) {
//                     // final handler removed, so remove the event handling
//                     this._execute('remove');
//                     delete adsk.core.Event.handlers[this.eventid];
//                 }
//             }
//         }
//     };

//     adsk.core.Event.fire = function (eventid, argsHandle) {
//         if (eventid === undefined || argsHandle === undefined) {
//             console.log('failed to fire event');
//             return;
//         }

//         if (adsk.core.Event.handlers) {
//             var handlers = adsk.core.Event.handlers[eventid];
//             if (handlers && handlers.argType && handlers.handlers) {
//                 var args = new handlers.argType(argsHandle);

//                 // Work on a copy to allow handler removal during event firing
//                 var tempHandlers = handlers.handlers.slice();
//                 var tempHandlersLength = tempHandlers.length;
//                 var i, handler;
//                 for (i = 0; i < tempHandlersLength; ++i) {
//                     handler = tempHandlers[i];
//                     if (handlers.handlers.indexOf(handler) !== -1) {
//                         handler.call(this, args);
//                     }
//                 }
//             }
//         }
//     };

//     //=========== EventArgs ============
//     // When an event handler is called, it is passed
//     // an EventArgs object that describes the 'event'.
//     // This is a base class - classes like DocumentEventArgs add more information on
//     // the 'event'.
//     adsk.core.EventArgs = function EventArgs(handle) {
//         if (!(this instanceof adsk.core.EventArgs)) {
//             return adsk.core.EventArgs.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.EventArgs.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.EventArgs.prototype.constructor = adsk.core.EventArgs;
//     adsk.core.EventArgs.interfaceId = 'adsk.core.EventArgs';
//     adsk.objectTypes['adsk.core.EventArgs'] = adsk.core.EventArgs;
//     adsk.core.EventArgs.cast = function (object) {
//         return object instanceof adsk.core.EventArgs ? object : null;
//     };

//     // The event that the firing is in response to.
//     Object.defineProperty(adsk.core.EventArgs.prototype, 'firingEvent', {
//         get : function () {
//             var result = this._execute('firingEvent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Event) : null;
//         }
//     });

//     //=========== FootAndInchDisplayFormats ============
//     // List of the valid foot and inch formats.
//     adsk.core.FootAndInchDisplayFormats = {
//         DecimalFootAndInchDisplay : 0,
//         FractionalFootAndInchDisplay : 1,
//         ArchitecturalFootAndInchDisplay : 2
//     };

//=========== GeneralPreferences ============
// Provides access to the general preferences.
interface GeneralPreferences {
    //         if (!(this instanceof adsk.core.GeneralPreferences)) {
    //             return adsk.core.GeneralPreferences.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.GeneralPreferences.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.GeneralPreferences.prototype.constructor = adsk.core.GeneralPreferences;
    //     adsk.core.GeneralPreferences.interfaceId = 'adsk.core.GeneralPreferences';
    //     adsk.objectTypes['adsk.core.GeneralPreferences'] = adsk.core.GeneralPreferences;
    //     adsk.core.GeneralPreferences.cast = function (object) {
    //         return object instanceof adsk.core.GeneralPreferences ? object : null;
    //     };

    //     // Gets and sets the current language. Setting the language does not
    //     // take effect until the next time Fusion is started.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'userLanguage', {
    //         get : function () {
    //             var result = this._execute('userLanguage');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('userLanguage', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the length of time, in days, that the offline cache of a document will remain.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'offlineCachePeriod', {
    //         get : function () {
    //             var result = this._execute('offlineCachePeriod');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('offlineCachePeriod', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the graphics driver used to display the graphics.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'graphicsDriver', {
    //         get : function () {
    //             var result = this._execute('graphicsDriver');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('graphicsDriver', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the file is automatically saved on close.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'isAutomaticSaveOnCloseEnabled', {
    //         get : function () {
    //             var result = this._execute('isAutomaticSaveOnCloseEnabled');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isAutomaticSaveOnCloseEnabled', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if a version of the file is automatically saved using a background thread.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'isAutomaticVersioningEnabled', {
    //         get : function () {
    //             var result = this._execute('isAutomaticVersioningEnabled');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isAutomaticVersioningEnabled', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the interval, in minutes, for automatic versioning.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'automateVersioningTimeInterval', {
    //         get : function () {
    //             var result = this._execute('automateVersioningTimeInterval');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('automateVersioningTimeInterval', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the default for which direction is considered "up".
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'defaultModelingOrientation', {
    //         get : function () {
    //             var result = this._execute('defaultModelingOrientation');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('defaultModelingOrientation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if tooltips are shown.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'areTooltipsShown', {
    //         get : function () {
    //             var result = this._execute('areTooltipsShown');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areTooltipsShown', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the command prompt is shown.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'isCommandPromptShown', {
    //         get : function () {
    //             var result = this._execute('isCommandPromptShown');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isCommandPromptShown', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if in command tips and tricks are shown.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'areTipsAndTricksShown', {
    //         get : function () {
    //             var result = this._execute('areTipsAndTricksShown');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areTipsAndTricksShown', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if in command errors and warnings are shown.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'areInCommandErrorsAndWarningsShown', {
    //         get : function () {
    //             var result = this._execute('areInCommandErrorsAndWarningsShown');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areInCommandErrorsAndWarningsShown', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if Autodesk 360 notifications are shown.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'areAutodesk360NotificationsShown', {
    //         get : function () {
    //             var result = this._execute('areAutodesk360NotificationsShown');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areAutodesk360NotificationsShown', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if gesture based view navigation is used.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'isGestureBasedViewNavigationUsed', {
    //         get : function () {
    //             var result = this._execute('isGestureBasedViewNavigationUsed');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isGestureBasedViewNavigationUsed', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the direction of the zoom is reversed.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'isZoomDirectionReversed', {
    //         get : function () {
    //             var result = this._execute('isZoomDirectionReversed');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isZoomDirectionReversed', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if zoom and orbit commands use camera pivot point for transition.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'isCameraPivotEnabled', {
    //         get : function () {
    //             var result = this._execute('isCameraPivotEnabled');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isCameraPivotEnabled', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Get and sets the type of orbit.
    //     Object.defineProperty(adsk.core.GeneralPreferences.prototype, 'defaultOrbit', {
    //         get : function () {
    //             var result = this._execute('defaultOrbit');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('defaultOrbit', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//     //=========== GenericErrors ============
//     // Errors that every API call can return via Application::GetLastError.
//     // These can be augmented with class and function specific errors.
//     adsk.core.GenericErrors = {
//         Ok : 0,
//         UnexpectedError : 1,
//         InternalValidationError : 2,
//         BadApiCallError : 3,
//         UnderlyingObjectDeletedError : 4,
//         OperationFailed : 5,
//         ExpressionError : 6,
//         InvalidGeometryError : 7,
//         ClassSpecificError : 100,
//         FunctionSpecificError : 200
//     };

//     //=========== GraphicsDrivers ============
//     // A list of the valid graphics drivers.
//     adsk.core.GraphicsDrivers = {
//         DirectX9GraphicsDriver : 0,
//         DirectX11GraphicsDriver : 1,
//         AutoSelectGraphicsDriver : 2,
//         OpenGLCoreProfileGraphicsDriver : 3,
//         OpenGLGraphicsDriver : 4
//     };

//=========== GraphicsPreferences ============
// The GraphicsPreferences object provides access to the various graphics related preferences.
interface GraphicsPreferences {
    //         if (!(this instanceof adsk.core.GraphicsPreferences)) {
    //             return adsk.core.GraphicsPreferences.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.GraphicsPreferences.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.GraphicsPreferences.prototype.constructor = adsk.core.GraphicsPreferences;
    //     adsk.core.GraphicsPreferences.interfaceId = 'adsk.core.GraphicsPreferences';
    //     adsk.objectTypes['adsk.core.GraphicsPreferences'] = adsk.core.GraphicsPreferences;
    //     adsk.core.GraphicsPreferences.cast = function (object) {
    //         return object instanceof adsk.core.GraphicsPreferences ? object : null;
    //     };

    //     // Gets and sets the minimum frames per second.
    //     Object.defineProperty(adsk.core.GraphicsPreferences.prototype, 'minimumFramesPerSecond', {
    //         get : function () {
    //             var result = this._execute('minimumFramesPerSecond');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minimumFramesPerSecond', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the style of display to use for selections.
    //     Object.defineProperty(adsk.core.GraphicsPreferences.prototype, 'selectionDisplayStyle', {
    //         get : function () {
    //             var result = this._execute('selectionDisplayStyle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('selectionDisplayStyle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the style of display for degraded selections.
    //     Object.defineProperty(adsk.core.GraphicsPreferences.prototype, 'degradedSelectionDisplayStyle', {
    //         get : function () {
    //             var result = this._execute('degradedSelectionDisplayStyle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('degradedSelectionDisplayStyle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the style of display for transparency effects.
    //     Object.defineProperty(adsk.core.GraphicsPreferences.prototype, 'transparencyEffects', {
    //         get : function () {
    //             var result = this._execute('transparencyEffects');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('transparencyEffects', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if automatically disable or degrade visual effects to keep the video memory pressure under a safe threshold.
    //     Object.defineProperty(adsk.core.GraphicsPreferences.prototype, 'autoThrottleEffects', {
    //         get : function () {
    //             var result = this._execute('autoThrottleEffects');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('autoThrottleEffects', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the dimming percentage to use for hidden edges.
    //     // the value is a percentage expressed by a value between 0 and 100.
    //     Object.defineProperty(adsk.core.GraphicsPreferences.prototype, 'hiddenEdgeDimming', {
    //         get : function () {
    //             var result = this._execute('hiddenEdgeDimming');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('hiddenEdgeDimming', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//     //=========== GridPreferences ============
//     // The GridPreferences object provides access to grid related preferences.
//     adsk.core.GridPreferences = function GridPreferences(handle) {
//         if (!(this instanceof adsk.core.GridPreferences)) {
//             return adsk.core.GridPreferences.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.GridPreferences.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.GridPreferences.prototype.constructor = adsk.core.GridPreferences;
//     adsk.core.GridPreferences.interfaceId = 'adsk.core.GridPreferences';
//     adsk.objectTypes['adsk.core.GridPreferences'] = adsk.core.GridPreferences;
//     adsk.core.GridPreferences.cast = function (object) {
//         return object instanceof adsk.core.GridPreferences ? object : null;
//     };

//     // Gets and sets if the layout grid lock is enabled.
//     Object.defineProperty(adsk.core.GridPreferences.prototype, 'isLayoutGridLockEnabled', {
//         get : function () {
//             var result = this._execute('isLayoutGridLockEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isLayoutGridLockEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ImportManager ============
//     adsk.core.ImportManager = function ImportManager(handle) {
//         if (!(this instanceof adsk.core.ImportManager)) {
//             return adsk.core.ImportManager.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ImportManager.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ImportManager.prototype.constructor = adsk.core.ImportManager;
//     adsk.core.ImportManager.interfaceId = 'adsk.core.ImportManager';
//     adsk.objectTypes['adsk.core.ImportManager'] = adsk.core.ImportManager;
//     adsk.core.ImportManager.cast = function (object) {
//         return object instanceof adsk.core.ImportManager ? object : null;
//     };

//     // Creates an IGESImportOptions object that is used to import a design from IGES format. Creation
//     // of the IGESImportOptions object does not perform the import. You must pass this object to one of the
//     // ImportManager import methods to perform the import. The IGESImportOptions supports any available
//     // options when importing from IGES format.
//     // filename : The filename or url of the IGES file to be imported.
//     // The created IGESImportOptions object or null if the creation failed.
//     adsk.core.ImportManager.prototype.createIGESImportOptions = function (filename) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         var args = {
//             filename : filename
//         };
//         var result = this._execute('createIGESImportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.IGESImportOptions) : null;
//     };

//     // Creates an STEPImportOptions object that's used to import a design from STEP format. Creation
//     // of the STEPImportOptions object does not perform the import. You must pass this object to one of the
//     // ImportManager import methods to perform the import. The STEPImportOptions supports any available
//     // options when importing from STEP format.
//     // filename : The filename or url of the STEP file to be imported.
//     // The created STEPImportOptions object or null if the creation failed.
//     adsk.core.ImportManager.prototype.createSTEPImportOptions = function (filename) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         var args = {
//             filename : filename
//         };
//         var result = this._execute('createSTEPImportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.STEPImportOptions) : null;
//     };

//     // Creates an SATImportOptions object that's used to import a design from SAT format. Creation
//     // of the SATImportOptions object does not perform the import. You must pass this object to one of the
//     // ImportManager import methods to perform the import. The SATImportOptions supports any available
//     // options when importing from SAT format.
//     // filename : The filename or url of the SAT file to be imported.
//     // The created SATImportOptions object or null if the creation failed.
//     adsk.core.ImportManager.prototype.createSATImportOptions = function (filename) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         var args = {
//             filename : filename
//         };
//         var result = this._execute('createSATImportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.SATImportOptions) : null;
//     };

//     // Creates an SMTImportOptions object that's used to import a design from SMT format. Creation
//     // of the SMTImportOptions object does not perform the import. You must pass this object to one of the
//     // ImportManager import methods to perform the import. The SMTImportOptions supports any available
//     // options when importing from SMT format.
//     // filename : The filename or url of the SMT file to be imported.
//     // The created SMTImportOptions object or null if the creation failed.
//     adsk.core.ImportManager.prototype.createSMTImportOptions = function (filename) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         var args = {
//             filename : filename
//         };
//         var result = this._execute('createSMTImportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.SMTImportOptions) : null;
//     };

//     // Creates an FusionArchiveImportOptions object that is used to import a design from a Fusion archive format. Creation
//     // of the FusionArchiveImportOptions object does not perform the import. You must pass this object to one of the
//     // ImportManager import methods to perform the import. The FusionArchiveImportOptions supports any available
//     // options when importing from Fusion archive format.
//     // filename : The filename or url of the Fusion archive file to be imported.
//     // .f3z files and .f3d files containing externally referenced designs are currently not supported.
//     // The created FusionArchiveImportOptions object or null if the creation failed.
//     adsk.core.ImportManager.prototype.createFusionArchiveImportOptions = function (filename) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         var args = {
//             filename : filename
//         };
//         var result = this._execute('createFusionArchiveImportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.FusionArchiveImportOptions) : null;
//     };

//     // Executes the import operation to import a file (of the format specified by the input ImportOptions object)
//     // to a new document.
//     // ***This method does not currently support the DXF2DImportOptions ImportOptions object.***
//     // importOptions : An ImportOptions object that is created using one of the create methods on the ImportManager object. This
//     // defines the type of file and any available options supported for that file type.
//     // Returns the newly created Document object or null if the creation failed.
//     // A new unnamed, unsaved document will be opened in Fusion as a result.
//     adsk.core.ImportManager.prototype.importToNewDocument = function (importOptions) {
//         if (importOptions !== null && !(importOptions instanceof adsk.core.ImportOptions)) { throw new TypeError('importOptions must be a adsk.core.ImportOptions'); }
//         var args = {
//             importOptions : (importOptions === null ? importOptions : importOptions.handle)
//         };
//         var result = this._execute('importToNewDocument', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Document) : null;
//     };

//     // Executes the import operation to import a file (of the format specified by the input ImportOptions object)
//     // into an existing component in an existing design.
//     // importOptions : An ImportOptions object that is created using one of the create methods on the ImportManager object. This
//     // defines the type of file and any available options supported for that file type.
//     // Supplying a DXF2DImportOptions object will result in the creation of one or more sketches
//     // (depending on the layers in the DXF file) in the target component.
//     // target : Currently supports importing to a Fusion Component.
//     // Returns true if the import was successful.
//     adsk.core.ImportManager.prototype.importToTarget = function (importOptions, target) {
//         if (importOptions !== null && !(importOptions instanceof adsk.core.ImportOptions)) { throw new TypeError('importOptions must be a adsk.core.ImportOptions'); }
//         if (target !== null && !(target instanceof adsk.core.Base)) { throw new TypeError('target must be a adsk.core.Base'); }
//         var args = {
//             importOptions : (importOptions === null ? importOptions : importOptions.handle),
//             target : (target === null ? target : target.handle)
//         };
//         var result = this._execute('importToTarget', args);
//         return result ? result.value : undefined;
//     };

//     // Creates a DXF2DImportOptions object that is used to import 2D data to create sketches. Creation
//     // of the createDXF2DImportOptions object does not perform the import. You must pass this object to the
//     // ImportManager.importToTarget method to perform the import. The sketches created as a result of
//     // the import are available through the 'results' property of the DXF2DImportOptions.
//     // filename : The filename of the DXF file to be imported.
//     // planarEntity : The construction plane or planar face that defines the plane that the resulting sketches will
//     // be created on.
//     // The created DXF2DImportOptions object or null if the creation failed.
//     adsk.core.ImportManager.prototype.createDXF2DImportOptions = function (filename, planarEntity) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         var args = {
//             filename : filename,
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
//         };
//         var result = this._execute('createDXF2DImportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DXF2DImportOptions) : null;
//     };

//     //=========== ImportOptions ============
//     // The base class for the different import types. This class is never directly used
//     // in an import because you need the specific import type to specify the type of
//     // import to be performed.
//     adsk.core.ImportOptions = function ImportOptions(handle) {
//         if (!(this instanceof adsk.core.ImportOptions)) {
//             return adsk.core.ImportOptions.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ImportOptions.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ImportOptions.prototype.constructor = adsk.core.ImportOptions;
//     adsk.core.ImportOptions.interfaceId = 'adsk.core.ImportOptions';
//     adsk.objectTypes['adsk.core.ImportOptions'] = adsk.core.ImportOptions;
//     adsk.core.ImportOptions.cast = function (object) {
//         return object instanceof adsk.core.ImportOptions ? object : null;
//     };

//     // Gets and sets the filename or url of the file to be imported.
//     Object.defineProperty(adsk.core.ImportOptions.prototype, 'filename', {
//         get : function () {
//             var result = this._execute('filename');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('filename', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== MaterialDisplayUnits ============
//     // List of the different types of material related units supported for displaying values.
//     adsk.core.MaterialDisplayUnits = {
//         MetricStandardDisplayUnits : 0,
//         MetricMKSDisplayUnits : 1,
//         MetricMMNSDisplayUnits : 2,
//         MetricCGSDisplayUnits : 3,
//         MetricUMNSDisplayUnits : 4,
//         EnglishStandardDisplayUnits : 5,
//         EnglishInchDisplayUnits : 6,
//         EnglishFootDisplayUnits : 7
//     };

//=========== MaterialPreferences ============
// Provides access to the material related preferences.
interface MaterialPreferences {
    //         if (!(this instanceof adsk.core.MaterialPreferences)) {
    //             return adsk.core.MaterialPreferences.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.MaterialPreferences.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.MaterialPreferences.prototype.constructor = adsk.core.MaterialPreferences;
    //     adsk.core.MaterialPreferences.interfaceId = 'adsk.core.MaterialPreferences';
    //     adsk.objectTypes['adsk.core.MaterialPreferences'] = adsk.core.MaterialPreferences;
    //     adsk.core.MaterialPreferences.cast = function (object) {
    //         return object instanceof adsk.core.MaterialPreferences ? object : null;
    //     };

    //     // Gets and sets the default material.
    //     Object.defineProperty(adsk.core.MaterialPreferences.prototype, 'defaultMaterial', {
    //         get : function () {
    //             var result = this._execute('defaultMaterial');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Material) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Material)) { throw new TypeError('value must be a adsk.core.Material'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('defaultMaterial', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets an appearance override.
    //     // This property return null indicating that there is no override, or be set to null to remove
    //     // the current appearance override.
    //     Object.defineProperty(adsk.core.MaterialPreferences.prototype, 'appearanceOverride', {
    //         get : function () {
    //             var result = this._execute('appearanceOverride');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Appearance) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Appearance)) { throw new TypeError('value must be a adsk.core.Appearance'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('appearanceOverride', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//=========== NamedValues ============
// Wraps a list of named values.
interface NamedValues {
    //         if (!(this instanceof adsk.core.NamedValues)) {
    //             return adsk.core.NamedValues.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.NamedValues.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.NamedValues.prototype.constructor = adsk.core.NamedValues;
    //     adsk.core.NamedValues.interfaceId = 'adsk.core.NamedValues';
    //     adsk.objectTypes['adsk.core.NamedValues'] = adsk.core.NamedValues;
    //     adsk.core.NamedValues.cast = function (object) {
    //         return object instanceof adsk.core.NamedValues ? object : null;
    //     };

    //     // Returns the number of name value pairs in this object.
    //     // ///
    //     Object.defineProperty(adsk.core.NamedValues.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates a transient NamedValues object.
    //     adsk.core.NamedValues.create = function () {
    //         var result = adsk.core.Base._executeStatic('adsk.core.NamedValues', 'create');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.NamedValues) : null;
    //     };

    //     // Adds a name value pair to the NamedValues object
    //     // name : A name for the name value pair
    //     // value : A ValueInput object that defines the value of the name value pair
    //     // Returns true if the name value pair is added successfully.
    //     adsk.core.NamedValues.prototype.add = function (name, value) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
    //         var args = {
    //             name : name,
    //             value : (value === null ? value : value.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Function that returns the name and ValueInput object of a name value pair
    //     // by specifying an index number
    //     // index : The index of the name value pair to return. The first pair in the collection
    //     // has an index of 0.
    //     // name : The name
    //     // value : The ValueInput object
    //     // Returns true if successful
    //     adsk.core.NamedValues.prototype.getByIndex = function (index, name, value) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         if (typeof name !== 'object') { throw new TypeError('name must be an object'); }
    //         if (typeof value !== 'object') { throw new TypeError('value must be an object'); }
    //         var args = {
    //             index : Number(index),
    //             name : null,
    //             value : null
    //         };
    //         var result = this._execute('getByIndex', args);
    //         if (result && result.outargs) {
    //             name.value = (result.outargs.name !== undefined) ? result.outargs.name : undefined;
    //             value.value = (result.outargs.value !== undefined) ? adsk.createObject(result.outargs.value, adsk.core.ValueInput) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Function that returns the ValueInput object of a name value pair
    //     // by specifying its name
    //     // name : The name of the name value pair to return the ValueInput object from
    //     // value : The ValueInput object
    //     // Returns true if successful
    //     adsk.core.NamedValues.prototype.getValueByName = function (name, value) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         if (typeof value !== 'object') { throw new TypeError('value must be an object'); }
    //         var args = {
    //             name : name,
    //             value : null
    //         };
    //         var result = this._execute('getValueByName', args);
    //         if (result && result.outargs) {
    //             value.value = (result.outargs.value !== undefined) ? adsk.createObject(result.outargs.value, adsk.core.ValueInput) : null;
    //         }
    //         return result ? result.value : undefined;
    //     };
}

//=========== NetworkPreferences ============
// The NetworkPreferences object provides access to network related preferences.
interface NetworkPreferences {
    //         if (!(this instanceof adsk.core.NetworkPreferences)) {
    //             return adsk.core.NetworkPreferences.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.NetworkPreferences.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.NetworkPreferences.prototype.constructor = adsk.core.NetworkPreferences;
    //     adsk.core.NetworkPreferences.interfaceId = 'adsk.core.NetworkPreferences';
    //     adsk.objectTypes['adsk.core.NetworkPreferences'] = adsk.core.NetworkPreferences;
    //     adsk.core.NetworkPreferences.cast = function (object) {
    //         return object instanceof adsk.core.NetworkPreferences ? object : null;
    //     };

    //     // Gets and sets the network proxy setting.
    //     Object.defineProperty(adsk.core.NetworkPreferences.prototype, 'networkProxySetting', {
    //         get : function () {
    //             var result = this._execute('networkProxySetting');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('networkProxySetting', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the proxy host.
    //     Object.defineProperty(adsk.core.NetworkPreferences.prototype, 'proxyHost', {
    //         get : function () {
    //             var result = this._execute('proxyHost');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('proxyHost', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the proxy host.
    //     Object.defineProperty(adsk.core.NetworkPreferences.prototype, 'proxyPort', {
    //         get : function () {
    //             var result = this._execute('proxyPort');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('proxyPort', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//     //=========== NetworkProxySettings ============
//     // A list of the valid network proxy settings.
//     adsk.core.NetworkProxySettings = {
//         AutomaticProxySettings : 0,
//         NoProxyProxySettings : 1,
//         WindowsDefaultProxySettings : 2,
//         OverrideProxySettings : 3
//     };

//=========== ObjectCollection ============
// Generic collection used to handle lists of any object type.
interface ObjectCollection {
    cast(object: Object): ObjectCollection;

    //     // Returns the number of occurrences in the collection.
    //     Object.defineProperty(adsk.core.ObjectCollection.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified object using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.core.ObjectCollection.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     };

    //     // Adds an object to the end of the collection.
    //     // Duplicates can be added to the collection.
    //     // item : The item to add to the list.
    //     // Returns false if the item was not added.
    //     adsk.core.ObjectCollection.prototype.add = function (item) {
    //         if (item !== null && !(item instanceof adsk.core.Base)) { throw new TypeError('item must be a adsk.core.Base'); }
    //         var args = {
    //             item : (item === null ? item : item.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Function that removes an item from the collection.
    //     // item : The object to remove from the collection.
    //     // Returns true if the removal was successful.
    //     adsk.core.ObjectCollection.prototype.removeByItem = function (item) {
    //         if (item !== null && !(item instanceof adsk.core.Base)) { throw new TypeError('item must be a adsk.core.Base'); }
    //         var args = {
    //             item : (item === null ? item : item.handle)
    //         };
    //         var result = this._execute('removeByItem', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Function that removes an item from the list.
    //     // Will fail if the list is read only.
    //     // index : The index of the item to remove from the collection. The first item has an index of 0.
    //     // Returns true if the removal was successful.
    //     adsk.core.ObjectCollection.prototype.removeByIndex = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('removeByIndex', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Finds the specified component in the collection.
    //     // item : The item to search for within the collection.
    //     // startIndex : The index to begin the search.
    //     // Returns the index of the found item. If not found, -1 is returned.
    //     adsk.core.ObjectCollection.prototype.find = function (item, startIndex) {
    //         if (item !== null && !(item instanceof adsk.core.Base)) { throw new TypeError('item must be a adsk.core.Base'); }
    //         if (startIndex === null || (startIndex !== undefined && !isFinite(startIndex))) { throw new TypeError('startIndex must be a number'); }
    //         var args = {
    //             item : (item === null ? item : item.handle)
    //         };
    //         if (startIndex !== undefined) {
    //             args.startIndex = Number(startIndex);
    //         }
    //         var result = this._execute('find', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Returns whether the specified object exists within the collection.
    //     // item : The item to look for in the collection.
    //     // Returns true if the specified item is found in the collection.
    //     adsk.core.ObjectCollection.prototype.contains = function (item) {
    //         if (item !== null && !(item instanceof adsk.core.Base)) { throw new TypeError('item must be a adsk.core.Base'); }
    //         var args = {
    //             item : (item === null ? item : item.handle)
    //         };
    //         var result = this._execute('contains', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Clears the entire contents of the collection.
    //     // Returns true if successful.
    //     adsk.core.ObjectCollection.prototype.clear = function () {
    //         var result = this._execute('clear');
    //         return result ? result.value : undefined;
    //     };

    //     // Creates a new ObjectCollection object.
    //     // Returns the newly created ObjectCollection.
    //     adsk.core.ObjectCollection.create = function () {
    //         var result = adsk.core.Base._executeStatic('adsk.core.ObjectCollection', 'create');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //     };
}

//     //=========== OpenDocumentError ============
//     // The possible errors when a document is opened.
//     adsk.core.OpenDocumentError = {
//         DocumentNotFoundError : 200
//     };

//=========== Preferences ============
// The Preferences object provides access to the various preference related objects
// for getting and setting the various preference values.
interface Preferences {
    generalPreferences: GeneralPreferences;

    // Gets the MaterialPreferences object.
    materialPreferences: MaterialPreferences;

    // Gets the GraphicsPreferences object.
    graphicsPreferences: GraphicsPreferences;

    // Gets the NetworkPreferences object.
    networkPreferences: NetworkPreferences;

    // Gets the UnitAndValuePreferences object.
    unitAndValuePreferences: UnitAndValuePreferences;

    // Gets the DefaultUnitsPreferences object.
    defaultUnitsPreferences: DefaultUnitsPreferencesCollection;

    // Gets the ProductPreferences object.
    productPreferences: ProductPreferencesCollection;

    //     // Gets the GridPreferences object.
    //     Object.defineProperty(adsk.core.Preferences.prototype, 'gridPreferences', {
    //         get : function () {
    //             var result = this._execute('gridPreferences');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.GridPreferences) : null;
    //         }
    //     });

    //     // Gets the ProductUsageData object.
    //     Object.defineProperty(adsk.core.Preferences.prototype, 'productUsageData', {
    //         get : function () {
    //             var result = this._execute('productUsageData');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ProductUsageData) : null;
    //         }
    //     });
}
//=========== Product ============
// The base class for the various product specific containers. For
// Fusion this is the Design object. For CAM this is Toolpath object.
interface Product {

    // Returns the parent Document object.
    parentDocument: Document;

    // Returns the UnitsManager object associated with this product.
    unitsManager: UnitsManager;

    // Returns the workspaces associated with this product.
    workspaces: WorkspaceList;

    // Returns the product type name of this product. A list of all of
    // the possible product types can be obtained by using the
    // Application.supportedProductTypes property.
    productType;
}

//=========== ProductPreferences ============
// The base class for the general product preferences. There is a derived class
// for each product where the specific preference values are exposed.
interface ProductPreferences {
    // Returns the name of this ProductPreferences object.
    name: string;
}

//=========== ProductPreferencesCollection ============
// A collection that provides access to product specific preference objects.
interface ProductPreferencesCollection {
    // Returns the number of ProductPreference objects.
    count: number;

    // Function that returns the specified ProfductPreferences object using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): ProductPreferences;

    // Returns the ProductPreference object with the specified name.
    // name : The name of the ProductPreferences to return.
    // Returns the ProductPreferences object or null if if an invalid name was specified.
    itemByName(name: string): ProductPreferences;
}

//=========== Products ============
// The Products object provides access to all of the products that exist in the document.
interface Products {
    // Returns the number of products within the collection.
    count: number;

    //     // Function that returns the specified product using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.core.Products.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Product) : null;
    //     };

    //     // Returns the specified product, if it exists within this document.
    //     // productType : The product type string. For example, to get the product that represents the design data
    //     // you use "DesignProductType" or to get the product that represent the CAM data you use "CAMProductType".
    //     // A complete list of available products can be obtained by using the Application.supportedProductTypes property.
    //     // Returns the specified item or null if the specified productType does not exist within this document.
    //     adsk.core.Products.prototype.itemByProductType = function (productType) {
    //         if (productType === undefined || productType === null || productType.constructor !== String) { throw new TypeError('productType must be a string'); }
    //         var args = {
    //             productType : productType
    //         };
    //         var result = this._execute('itemByProductType', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Product) : null;
    //     };
}

//=========== ProductUsageData ============
// Provides access to the product usage data settings.
interface ProductUsageData {
    //         if (!(this instanceof adsk.core.ProductUsageData)) {
    //             return adsk.core.ProductUsageData.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.ProductUsageData.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.ProductUsageData.prototype.constructor = adsk.core.ProductUsageData;
    //     adsk.core.ProductUsageData.interfaceId = 'adsk.core.ProductUsageData';
    //     adsk.objectTypes['adsk.core.ProductUsageData'] = adsk.core.ProductUsageData;
    //     adsk.core.ProductUsageData.cast = function (object) {
    //         return object instanceof adsk.core.ProductUsageData ? object : null;
    //     };

    //     // Gets and sets if tracking to improve the software is enabled.
    //     Object.defineProperty(adsk.core.ProductUsageData.prototype, 'isTrackingToImproveSoftwareEnabled', {
    //         get : function () {
    //             var result = this._execute('isTrackingToImproveSoftwareEnabled');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isTrackingToImproveSoftwareEnabled', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if tracking to improve communication is enabled.
    //     Object.defineProperty(adsk.core.ProductUsageData.prototype, 'isTrackingToImproveCommunicationEnabled', {
    //         get : function () {
    //             var result = this._execute('isTrackingToImproveCommunicationEnabled');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isTrackingToImproveCommunicationEnabled', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//     //=========== SaveLocalErrors ============
//     // List of possible errors when saving a document locally.
//     adsk.core.SaveLocalErrors = {
//         SaveCancelledSaveLocalError : 200,
//         DiskFullSaveLocalError : 201,
//         FileReadOnlySaveLocalError : 202
//     };

//     //=========== SelectionDisplayStyles ============
//     // A list of the valid selection display styles.
//     adsk.core.SelectionDisplayStyles = {
//         NormalDisplayStyle : 0,
//         SimpleDisplayStyle : 1
//     };

//     //=========== TransparencyDisplayEffects ============
//     // A list of the valid transparency display effects.
//     adsk.core.TransparencyDisplayEffects = {
//         BetterPerformanceTransparencyEffect : 0,
//         BetterDisplayTransparencyEffect : 1
//     };

//=========== UnitAndValuePreferences ============
// The UnitAndValuePreferences object provides access to unit and value precision
// related preferences.
interface UnitAndValuePreferences {
    //         if (!(this instanceof adsk.core.UnitAndValuePreferences)) {
    //             return adsk.core.UnitAndValuePreferences.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.UnitAndValuePreferences.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.UnitAndValuePreferences.prototype.constructor = adsk.core.UnitAndValuePreferences;
    //     adsk.core.UnitAndValuePreferences.interfaceId = 'adsk.core.UnitAndValuePreferences';
    //     adsk.objectTypes['adsk.core.UnitAndValuePreferences'] = adsk.core.UnitAndValuePreferences;
    //     adsk.core.UnitAndValuePreferences.cast = function (object) {
    //         return object instanceof adsk.core.UnitAndValuePreferences ? object : null;
    //     };

    //     // Gets and sets the general precision for distance values. This
    //     // value specifies the number of decimals to display.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'generalPrecision', {
    //         get : function () {
    //             var result = this._execute('generalPrecision');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('generalPrecision', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the angular precision. This
    //     // value specifies the number of decimals to display.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'angularPrecision', {
    //         get : function () {
    //             var result = this._execute('angularPrecision');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('angularPrecision', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the number scientific notation precision. This
    //     // value specifies the number of decimals to display.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'scientificNotationPrecision', {
    //         get : function () {
    //             var result = this._execute('scientificNotationPrecision');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('scientificNotationPrecision', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the foot and inch display format.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'footAndInchDisplayFormat', {
    //         get : function () {
    //             var result = this._execute('footAndInchDisplayFormat');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('footAndInchDisplayFormat', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the degree display format.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'degreeDisplayFormat', {
    //         get : function () {
    //             var result = this._execute('degreeDisplayFormat');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('degreeDisplayFormat', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the decimal is a period or comma.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'isPeriodDecimalPoint', {
    //         get : function () {
    //             var result = this._execute('isPeriodDecimalPoint');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isPeriodDecimalPoint', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if abbreviations are used for units display.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'areAbbreviationsForUnitDisplayed', {
    //         get : function () {
    //             var result = this._execute('areAbbreviationsForUnitDisplayed');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areAbbreviationsForUnitDisplayed', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if symbols are used for units display.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'areSymbolsForUnitDisplayed', {
    //         get : function () {
    //             var result = this._execute('areSymbolsForUnitDisplayed');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areSymbolsForUnitDisplayed', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if scientific notation is used when displaying numbers.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'isScientificNotationUsed', {
    //         get : function () {
    //             var result = this._execute('isScientificNotationUsed');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isScientificNotationUsed', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the number of whole digits that will be displayed before
    //     // switching to scientific notation.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'useScientficNotationAbove', {
    //         get : function () {
    //             var result = this._execute('useScientficNotationAbove');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('useScientficNotationAbove', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the number of non zero decimal places that will be
    //     // displayed before switching to scientific notation.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'useScientficNotationBelow', {
    //         get : function () {
    //             var result = this._execute('useScientficNotationBelow');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('useScientficNotationBelow', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if trailing zeros are hidden when displaying numbers.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'areTrailingZerosHidden', {
    //         get : function () {
    //             var result = this._execute('areTrailingZerosHidden');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('areTrailingZerosHidden', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the minimum number of digits to the right of the decimal to display
    //     // before hiding trailing zeros.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'minimumPrecisionWhenHidingZeros', {
    //         get : function () {
    //             var result = this._execute('minimumPrecisionWhenHidingZeros');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('minimumPrecisionWhenHidingZeros', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the units types to use when displaying values.
    //     Object.defineProperty(adsk.core.UnitAndValuePreferences.prototype, 'materialDisplayUnit', {
    //         get : function () {
    //             var result = this._execute('materialDisplayUnit');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('materialDisplayUnit', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//=========== UnitsManager ============
// Utility class used to work with Values and control default units.
// Internal values are held in SI units (e.g. seconds, radians, kg for time, angle, mass)
// with the exception that all lengths are in cm rather than meter and this affects derived
// units (e.g. velocity is cm/s, volume is cm^3).
// Units are specified flexibility via strings (e.g. "cm", "in", "inch", "cm^3", "cm*cm*cm", "mph", "mps" "m/s").
// Units like length can be defaulted based on the design settings if the user does not explicitly
// specify units - so "3" can be 3 inches, mm or cm depending on what the design
// settings are.
interface UnitsManager {
    //         if (!(this instanceof adsk.core.UnitsManager)) {
    //             return adsk.core.UnitsManager.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.UnitsManager.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.UnitsManager.prototype.constructor = adsk.core.UnitsManager;
    //     adsk.core.UnitsManager.interfaceId = 'adsk.core.UnitsManager';
    //     adsk.objectTypes['adsk.core.UnitsManager'] = adsk.core.UnitsManager;
    //     adsk.core.UnitsManager.cast = function (object) {
    //         return object instanceof adsk.core.UnitsManager ? object : null;
    //     };

    //     // Returns the parent Product.
    //     Object.defineProperty(adsk.core.UnitsManager.prototype, 'product', {
    //         get : function () {
    //             var result = this._execute('product');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Product) : null;
    //         }
    //     });

    //     // Returns a string that represents internal units - i.e. "internalUnits".
    //     // This can be used when performing conversions via Convert.
    //     Object.defineProperty(adsk.core.UnitsManager.prototype, 'internalUnits', {
    //         get : function () {
    //             var result = this._execute('internalUnits');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the unit strings for the current default length unit as specified in preferences. - e.g. "cm" or "in"
    //     Object.defineProperty(adsk.core.UnitsManager.prototype, 'defaultLengthUnits', {
    //         get : function () {
    //             var result = this._execute('defaultLengthUnits');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Checks to see if the given expression is valid.
    //     // expression :
    //     // units : The units to use when validating the expression.
    //     // Returns True if it is a valid expression.
    //     adsk.core.UnitsManager.prototype.isValidExpression = function (expression, units) {
    //         if (expression === undefined || expression === null || expression.constructor !== String) { throw new TypeError('expression must be a string'); }
    //         if (units === undefined || units === null || units.constructor !== String) { throw new TypeError('units must be a string'); }
    //         var args = {
    //             expression : expression,
    //             units : units
    //         };
    //         var result = this._execute('isValidExpression', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Gets the value (in internal units) of the expression.
    //     // expression : EvaluateExpression("1cm + 1in") -> 3.54
    //     // EvaluateExpression("1") -> -> depends on the DistanceUnits, with "mm" it gives 0.1
    //     // units : If not supplied the units will default to the default length specified in the preferences.
    //     // Returns -1 AND GetLastError will return ExpressionError in the event of an error.
    //     adsk.core.UnitsManager.prototype.evaluateExpression = function (expression, units) {
    //         if (expression === undefined || expression === null || expression.constructor !== String) { throw new TypeError('expression must be a string'); }
    //         if (units === null || (units !== undefined && units.constructor !== String)) { throw new TypeError('units must be a string'); }
    //         var args = {
    //             expression : expression
    //         };
    //         if (units !== undefined) {
    //             args.units = units;
    //         }
    //         var result = this._execute('evaluateExpression', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Converts a value from one unit to another. The input and output unit specifiers must be compatible.
    //     // For example, "in" (inches) and "cm" (centimeters) will work because they both define length.
    //     // So Convert(1.5, "in", "ft") -> 0.125
    //     // Convert(1.5, unitsManager.defaultLengthUnits, "cm") -> depends on the current default distance units, with "mm" it gives 0.15
    //     // So Convert(1.5, "in", "kg") -> -1 and GetLastError returns ExpressionError (to denote error)
    //     // So Convert(1, "in", "internalUnits") -> 2.54
    //     // So Convert(1, "internalUnits", "in") -> 0.3937...
    //     // valueInInputUnits : The value to convert
    //     // inputUnits : The units of the value to convert
    //     // outputUnits : The units to convert the value to
    //     // Returns -1 AND GetLastError returns ExpressionError in the event of an error.
    //     adsk.core.UnitsManager.prototype.convert = function (valueInInputUnits, inputUnits, outputUnits) {
    //         if (!isFinite(valueInInputUnits)) { throw new TypeError('valueInInputUnits must be a number'); }
    //         if (inputUnits === undefined || inputUnits === null || inputUnits.constructor !== String) { throw new TypeError('inputUnits must be a string'); }
    //         if (outputUnits === undefined || outputUnits === null || outputUnits.constructor !== String) { throw new TypeError('outputUnits must be a string'); }
    //         var args = {
    //             valueInInputUnits : Number(valueInInputUnits),
    //             inputUnits : inputUnits,
    //             outputUnits : outputUnits
    //         };
    //         var result = this._execute('convert', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Formats the internal value as a string. The output string is formatted using the current
    //     // unit settings in preferences. The preferences control the number of decimal places, whether
    //     // units are abbreviated and several other things.
    //     // FormatInternalValue(1.5, "in") -> "0.591 in"
    //     // FormatInternalValue(1.5, "in", false) -> "0.591"
    //     // FormatInternalValue(1.5, "mm", true) -> "15.00 mm"
    //     // FormatInternalValue(1.5) -> depends on DistanceUnits, might be "15.0 mm"
    //     // internalValue : The internal value to format.
    //     // displayUnits : The units to display the value in. If not supplied the units will default to the default length specified in the preferences.
    //     // showUnits : Specify false to exclude units from the format. The default is true.
    //     // Returns an empty string if the units are incorrectly specified.
    //     adsk.core.UnitsManager.prototype.formatInternalValue = function (internalValue, displayUnits, showUnits) {
    //         if (!isFinite(internalValue)) { throw new TypeError('internalValue must be a number'); }
    //         if (displayUnits === null || (displayUnits !== undefined && displayUnits.constructor !== String)) { throw new TypeError('displayUnits must be a string'); }
    //         if (showUnits === null || (showUnits !== undefined && typeof showUnits !== 'boolean')) { throw new TypeError('showUnits must be a boolean'); }
    //         var args = {
    //             internalValue : Number(internalValue)
    //         };
    //         if (displayUnits !== undefined) {
    //             args.displayUnits = displayUnits;
    //         }
    //         if (showUnits !== undefined) {
    //             args.showUnits = showUnits;
    //         }
    //         var result = this._execute('formatInternalValue', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Formats the unit according to the user preferences
    //     // "centimeter" -> "cm"
    //     // "inch" -> "in"
    //     // "cm* cm *cm / s" -> , "cm^3 / s"
    //     // units : The unit to use when converting the value into a string.
    //     // Returns an empty string and GetLastError returns ExpressionError in the event of an error.
    //     adsk.core.UnitsManager.prototype.formatUnits = function (units) {
    //         if (units === undefined || units === null || units.constructor !== String) { throw new TypeError('units must be a string'); }
    //         var args = {
    //             units : units
    //         };
    //         var result = this._execute('formatUnits', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Standardizes the expression in terms of spacing and user preferences.
    //     // StandardizeExpression("1.5") -> depends on distance units, but with mmight be "1.5 mm"
    //     // StandardizeExpression("1.5", "in") -> "1.5 in"
    //     // StandardizeExpression("1.5 cm + 1.50001 centimeter") -> "1.5 cm + 1.50001 cm"
    //     // StandardizeExpression("1.5", "m * m * m / s") -> "1.5 m^3 /s"
    //     // expression : The expression to standardize
    //     // units : The units to apply to the standardized expression. If not supplied the units will default to the default length specified in the preferences.
    //     // Returns an empty string AND GetLastError returns ExpressionError in the event of an error.
    //     adsk.core.UnitsManager.prototype.standardizeExpression = function (expression, units) {
    //         if (expression === undefined || expression === null || expression.constructor !== String) { throw new TypeError('expression must be a string'); }
    //         if (units === null || (units !== undefined && units.constructor !== String)) { throw new TypeError('units must be a string'); }
    //         var args = {
    //             expression : expression
    //         };
    //         if (units !== undefined) {
    //             args.units = units;
    //         }
    //         var result = this._execute('standardizeExpression', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== User ============
// A class that represents a Fusion User
interface User {
    cast(object: Object): User;

    // Returns the Username associated with this user's Autodesk account
    userName: string;

    // Returns display name of the user. (i.e. the name that shows up in the Fusion UI)
    displayName: string;

    // Returns the user's internal Autodesk account name.
    // This can be used by applications sold through the Autodesk Exchange Store to verify that the user has in
    // fact purchased the product.
    userId: string;

    // Get the email associated with this users Fusion account
    email: string;

//     //=========== UserLanguages ============
//     // A list of the valid languages.
//     adsk.core.UserLanguages = {
//         ChinesePRCLanguage : 0,
//         ChineseTaiwanLanguage : 1,
//         CzechLanguage : 2,
//         EnglishLanguage : 3,
//         FrenchLanguage : 4,
//         GermanLanguage : 5,
//         HungarianLanguage : 6,
//         ItalianLanguage : 7,
//         JapaneseLanguage : 8,
//         KoreanLanguage : 9,
//         PolishLanguage : 10,
//         PortugueseBrazilianLanguage : 11,
//         RussianLanguage : 12,
//         SpanishLanguage : 13
//     };

//     //=========== ValueInput ============
//     // A ValueInput provides a flexible way of specifying a string or a double.
//     // No semantics are associated with a ValueInput (e.g. is the string valid, can the string
//     // be converted to a double) - it is merely a way of supplying information in
//     // either string OR double form as a function parameter.
//     // ValueInput objects are typically used to specify things like an extrude depth, or hole dia, etc.
//     adsk.core.ValueInput = function ValueInput(handle) {
//         if (!(this instanceof adsk.core.ValueInput)) {
//             return adsk.core.ValueInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ValueInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ValueInput.prototype.constructor = adsk.core.ValueInput;
//     adsk.core.ValueInput.interfaceId = 'adsk.core.ValueInput';
//     adsk.objectTypes['adsk.core.ValueInput'] = adsk.core.ValueInput;
//     adsk.core.ValueInput.cast = function (object) {
//         return object instanceof adsk.core.ValueInput ? object : null;
//     };

//     // Gets the real value (if there is one) in this object.
//     // Returns -1 AND GetLastError returns ValueNotOfType if there is no real value in this object.
//     Object.defineProperty(adsk.core.ValueInput.prototype, 'realValue', {
//         get : function () {
//             var result = this._execute('realValue');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the string value (if there is one) in this object.
//     // Returns an empty string AND GetLastError returns ValueNotOfType if there is no string value in this object.
//     Object.defineProperty(adsk.core.ValueInput.prototype, 'stringValue', {
//         get : function () {
//             var result = this._execute('stringValue');
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates a new ValueInput object using a double. For example, if you create a value using
//     // the double value 2 and use it as input for a length, it will be interpreted as 2 cm because
//     // centimeters are the internal unit for length. Values defined by a real are are always
//     // interpreted to be in the appropriate internal unit.
//     // For example, if the value 2 is used to define the depth of an extrusion (a length value),
//     // it will be 2 cm because cm is the internal unit for lengths. If the value 2 is used
//     // to define the angle of the extrude, it will be 2 radians because radians are the internal
//     // unit for angles.
//     // realValue : a double value
//     // Returns the newly created ValueInput object or null if the creation failed.
//     adsk.core.ValueInput.createByReal = function (realValue) {
//         if (!isFinite(realValue)) { throw new TypeError('realValue must be a number'); }
//         var args = {
//             realValue : Number(realValue)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.core.ValueInput', 'createByReal', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//     };

//     // When a string is used to create a value it needs to be evaluated as an expression so
//     // its value can be determined using the UnitsManager class.
//     // The units of an expression can be explicitly defined or will default to the current default
//     // units.
//     // For example, if you create an expression with the string "6" and specify it as a length,
//     // it will use the current active units. If the current active units are defined as inches
//     // the expression will be interpreted as 6 inches.
//     // You can specify the units as part of the string (i.e. "6 mm").
//     // You can also use equations in the string (ie. "6 + 5mm")
//     // In order for an expression to be valid, its units must be compatible with the value it
//     // represents. For example if you specify "5 in + 3 cm" as an expresssion to supply the value
//     // of an angle, it will fail because the units of the expression define a length.
//     // stringValue : The expression string
//     // Returns the newly created ValueInput object or null if the creation failed.
//     adsk.core.ValueInput.createByString = function (stringValue) {
//         if (stringValue === undefined || stringValue === null || stringValue.constructor !== String) { throw new TypeError('stringValue must be a string'); }
//         var args = {
//             stringValue : stringValue
//         };
//         var result = adsk.core.Base._executeStatic('adsk.core.ValueInput', 'createByString', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//     };

//     //=========== ValueInputError ============
//     // Errors that can occur when using the ValueInput object.
//     adsk.core.ValueInputError = {
//         ValueNotOfTypeError : 100
//     };

//     //=========== ViewOrientations ============
//     // Common view orientations.
//     adsk.core.ViewOrientations = {
//         ArbitraryViewOrientation : 0,
//         BackViewOrientation : 1,
//         BottomViewOrientation : 2,
//         FrontViewOrientation : 3,
//         IsoBottomLeftViewOrientation : 4,
//         IsoBottomRightViewOrientation : 5,
//         IsoTopLeftViewOrientation : 6,
//         IsoTopRightViewOrientation : 7,
//         LeftViewOrientation : 8,
//         RightViewOrientation : 9,
//         TopViewOrientation : 10
//     };

//=========== Viewport ============
// A viewport within Fusion. A viewport is the window where the model is displayed.
interface Viewport {
    //         if (!(this instanceof adsk.core.Viewport)) {
    //             return adsk.core.Viewport.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.Viewport.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.Viewport.prototype.constructor = adsk.core.Viewport;
    //     adsk.core.Viewport.interfaceId = 'adsk.core.Viewport';
    //     adsk.objectTypes['adsk.core.Viewport'] = adsk.core.Viewport;
    //     adsk.core.Viewport.cast = function (object) {
    //         return object instanceof adsk.core.Viewport ? object : null;
    //     };

    //     // Gets and sets the camera associated with the view.
    //     // The camera returned is a copy of the current camera
    //     // settings of the view. Editing the properties of the
    //     // camera will have no affect on the viewport until the
    //     // camera is assigned back to the viewport.
    //     Object.defineProperty(adsk.core.Viewport.prototype, 'camera', {
    //         get : function () {
    //             var result = this._execute('camera');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Camera) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Camera)) { throw new TypeError('value must be a adsk.core.Camera'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('camera', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the height of the viewport in pixels.
    //     Object.defineProperty(adsk.core.Viewport.prototype, 'height', {
    //         get : function () {
    //             var result = this._execute('height');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the width of the viewport in pixels.
    //     Object.defineProperty(adsk.core.Viewport.prototype, 'width', {
    //         get : function () {
    //             var result = this._execute('width');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the view is in full screen mode.
    //     Object.defineProperty(adsk.core.Viewport.prototype, 'isFullScreen', {
    //         get : function () {
    //             var result = this._execute('isFullScreen');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isFullScreen', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the current visual style being used.
    //     Object.defineProperty(adsk.core.Viewport.prototype, 'visualStyle', {
    //         get : function () {
    //             var result = this._execute('visualStyle');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('visualStyle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Forces the view to refresh. It is sometimes useful to force a refresh to
    //     // be able to see edits that have been made using the API.
    //     // Returns true if the operation was successful.
    //     adsk.core.Viewport.prototype.refresh = function () {
    //         var result = this._execute('refresh');
    //         return result ? result.value : undefined;
    //     };

    //     // Saves the current view to the specified image file.
    //     // ///
    //     // filename : The full filename, including the path, of the image file. The type of image file to be created is inferred from the extension of the filename.
    //     // width : The width in pixels of the output image. A value of zero indicates that the current width of the viewport is to be used.
    //     // height : The height in pixels of the output image. A value of zero indicates that the current height of the viewport is to be used.
    //     // Returns true if the operation was successful.
    //     adsk.core.Viewport.prototype.saveAsImageFile = function (filename, width, height) {
    //         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
    //         if (!isFinite(width)) { throw new TypeError('width must be a number'); }
    //         if (!isFinite(height)) { throw new TypeError('height must be a number'); }
    //         var args = {
    //             filename : filename,
    //             width : Number(width),
    //             height : Number(height)
    //         };
    //         var result = this._execute('saveAsImageFile', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Forces a camera change so that all of the graphics are visible in the viewport.
    //     // Returns true if the fit was successful.
    //     adsk.core.Viewport.prototype.fit = function () {
    //         var result = this._execute('fit');
    //         return result ? result.value : undefined;
    //     };
}

//     //=========== VisualStyles ============
//     // A list of the support visual styles that Fusion uses when rendering the model.
//     adsk.core.VisualStyles = {
//         RayTracingVisualStyle : 0,
//         ShadedVisualStyle : 1,
//         ShadedWithHiddenEdgesVisualStyle : 2,
//         ShadedWithVisibleEdgesOnlyVisualStyle : 3,
//         WireframeVisualStyle : 4,
//         WireframeWithHiddenEdgesVisualStyle : 5,
//         WireframeWithVisibleEdgesOnlyVisualStyle : 6
//     };

//     //=========== DocumentEvent ============
//     // A DocumentEvent represents a document related event. For example, DocumentOpening or DocumentOpened.
//     adsk.core.DocumentEvent = function DocumentEvent(handle) {
//         if (!(this instanceof adsk.core.DocumentEvent)) {
//             return adsk.core.DocumentEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.DocumentEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.DocumentEvent.prototype.constructor = adsk.core.DocumentEvent;
//     adsk.core.DocumentEvent.interfaceId = 'adsk.core.DocumentEvent';
//     adsk.objectTypes['adsk.core.DocumentEvent'] = adsk.core.DocumentEvent;
//     adsk.core.DocumentEvent.cast = function (object) {
//         return object instanceof adsk.core.DocumentEvent ? object : null;
//     };

//     adsk.core.DocumentEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.DocumentEventArgs);
//     };

//     //=========== DocumentEventArgs ============
//     // The DocumentEventArgs provides information associated with a document event.
//     // Note that some properties are not available on every event
//     // - for example, the Document is not available on the DocumentOpening event because
//     // the Document is not yet available.
//     adsk.core.DocumentEventArgs = function DocumentEventArgs(handle) {
//         if (!(this instanceof adsk.core.DocumentEventArgs)) {
//             return adsk.core.DocumentEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.DocumentEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.DocumentEventArgs.prototype.constructor = adsk.core.DocumentEventArgs;
//     adsk.core.DocumentEventArgs.interfaceId = 'adsk.core.DocumentEventArgs';
//     adsk.objectTypes['adsk.core.DocumentEventArgs'] = adsk.core.DocumentEventArgs;
//     adsk.core.DocumentEventArgs.cast = function (object) {
//         return object instanceof adsk.core.DocumentEventArgs ? object : null;
//     };

//     // Provides access to the document that is open. Can be null in the case
//     // where the event is fired before the document has been opened or after it has been closed.
//     Object.defineProperty(adsk.core.DocumentEventArgs.prototype, 'document', {
//         get : function () {
//             var result = this._execute('document');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Document) : null;
//         }
//     });

//     // The full path to the file.
//     Object.defineProperty(adsk.core.DocumentEventArgs.prototype, 'fullPath', {
//         get : function () {
//             var result = this._execute('fullPath');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== DXF2DImportOptions ============
//     // Defines that a 2D DXF Import to create sketches (based on layers in the DXF file) is to be performed and
//     // specifies the various options.
//     adsk.core.DXF2DImportOptions = function DXF2DImportOptions(handle) {
//         if (!(this instanceof adsk.core.DXF2DImportOptions)) {
//             return adsk.core.DXF2DImportOptions.cast(handle);
//         }
//         adsk.core.ImportOptions.call(this, handle);
//     };
//     adsk.core.DXF2DImportOptions.prototype = Object.create(adsk.core.ImportOptions.prototype);
//     adsk.core.DXF2DImportOptions.prototype.constructor = adsk.core.DXF2DImportOptions;
//     adsk.core.DXF2DImportOptions.interfaceId = 'adsk.core.DXF2DImportOptions';
//     adsk.objectTypes['adsk.core.DXF2DImportOptions'] = adsk.core.DXF2DImportOptions;
//     adsk.core.DXF2DImportOptions.cast = function (object) {
//         return object instanceof adsk.core.DXF2DImportOptions ? object : null;
//     };

//     // Gets and sets the construction plane or planar face that defines the plane that the resulting sketches will
//     // be created on.
//     Object.defineProperty(adsk.core.DXF2DImportOptions.prototype, 'planarEntity', {
//         get : function () {
//             var result = this._execute('planarEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('planarEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the X,Y offset position for the origin of the imported DXF data relative to the sketch origin.
//     // This defaults to (0,0) in a newly created DXF2DImportOptions object.
//     Object.defineProperty(adsk.core.DXF2DImportOptions.prototype, 'position', {
//         get : function () {
//             var result = this._execute('position');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Point2D)) { throw new TypeError('value must be a adsk.core.Point2D'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('position', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a collection of Sketch objects. A sketch is created for each layer in the dxf file
//     // that contains 2D geometry. Any 3D geometry contained in the DXF file is ignored.
//     // The names of the resulting sketches correspond to the layer names in the DXF file.
//     // Currently, the only way to get a single sketch as a result is to supply a DXF file that only has 2D geometry
//     // on a single layer.
//     Object.defineProperty(adsk.core.DXF2DImportOptions.prototype, 'results', {
//         get : function () {
//             var result = this._execute('results');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     //=========== FusionArchiveImportOptions ============
//     // Defines that a Fusion Archive import is to be done and specifies the various options.
//     adsk.core.FusionArchiveImportOptions = function FusionArchiveImportOptions(handle) {
//         if (!(this instanceof adsk.core.FusionArchiveImportOptions)) {
//             return adsk.core.FusionArchiveImportOptions.cast(handle);
//         }
//         adsk.core.ImportOptions.call(this, handle);
//     };
//     adsk.core.FusionArchiveImportOptions.prototype = Object.create(adsk.core.ImportOptions.prototype);
//     adsk.core.FusionArchiveImportOptions.prototype.constructor = adsk.core.FusionArchiveImportOptions;
//     adsk.core.FusionArchiveImportOptions.interfaceId = 'adsk.core.FusionArchiveImportOptions';
//     adsk.objectTypes['adsk.core.FusionArchiveImportOptions'] = adsk.core.FusionArchiveImportOptions;
//     adsk.core.FusionArchiveImportOptions.cast = function (object) {
//         return object instanceof adsk.core.FusionArchiveImportOptions ? object : null;
//     };

//     //=========== IGESImportOptions ============
//     // Defines that an IGES import is to be done and specifies the various options.
//     adsk.core.IGESImportOptions = function IGESImportOptions(handle) {
//         if (!(this instanceof adsk.core.IGESImportOptions)) {
//             return adsk.core.IGESImportOptions.cast(handle);
//         }
//         adsk.core.ImportOptions.call(this, handle);
//     };
//     adsk.core.IGESImportOptions.prototype = Object.create(adsk.core.ImportOptions.prototype);
//     adsk.core.IGESImportOptions.prototype.constructor = adsk.core.IGESImportOptions;
//     adsk.core.IGESImportOptions.interfaceId = 'adsk.core.IGESImportOptions';
//     adsk.objectTypes['adsk.core.IGESImportOptions'] = adsk.core.IGESImportOptions;
//     adsk.core.IGESImportOptions.cast = function (object) {
//         return object instanceof adsk.core.IGESImportOptions ? object : null;
//     };

//     //=========== SATImportOptions ============
//     // Defines that a SAT import is to be done and specifies the various options.
//     adsk.core.SATImportOptions = function SATImportOptions(handle) {
//         if (!(this instanceof adsk.core.SATImportOptions)) {
//             return adsk.core.SATImportOptions.cast(handle);
//         }
//         adsk.core.ImportOptions.call(this, handle);
//     };
//     adsk.core.SATImportOptions.prototype = Object.create(adsk.core.ImportOptions.prototype);
//     adsk.core.SATImportOptions.prototype.constructor = adsk.core.SATImportOptions;
//     adsk.core.SATImportOptions.interfaceId = 'adsk.core.SATImportOptions';
//     adsk.objectTypes['adsk.core.SATImportOptions'] = adsk.core.SATImportOptions;
//     adsk.core.SATImportOptions.cast = function (object) {
//         return object instanceof adsk.core.SATImportOptions ? object : null;
//     };

//     //=========== SMTImportOptions ============
//     // Defines that an SMT import is to be done and specifies the various options.
//     adsk.core.SMTImportOptions = function SMTImportOptions(handle) {
//         if (!(this instanceof adsk.core.SMTImportOptions)) {
//             return adsk.core.SMTImportOptions.cast(handle);
//         }
//         adsk.core.ImportOptions.call(this, handle);
//     };
//     adsk.core.SMTImportOptions.prototype = Object.create(adsk.core.ImportOptions.prototype);
//     adsk.core.SMTImportOptions.prototype.constructor = adsk.core.SMTImportOptions;
//     adsk.core.SMTImportOptions.interfaceId = 'adsk.core.SMTImportOptions';
//     adsk.objectTypes['adsk.core.SMTImportOptions'] = adsk.core.SMTImportOptions;
//     adsk.core.SMTImportOptions.cast = function (object) {
//         return object instanceof adsk.core.SMTImportOptions ? object : null;
//     };

//     //=========== STEPImportOptions ============
//     // Defines that a STEP import is to be done and specifies the various options.
//     adsk.core.STEPImportOptions = function STEPImportOptions(handle) {
//         if (!(this instanceof adsk.core.STEPImportOptions)) {
//             return adsk.core.STEPImportOptions.cast(handle);
//         }
//         adsk.core.ImportOptions.call(this, handle);
//     };
//     adsk.core.STEPImportOptions.prototype = Object.create(adsk.core.ImportOptions.prototype);
//     adsk.core.STEPImportOptions.prototype.constructor = adsk.core.STEPImportOptions;
//     adsk.core.STEPImportOptions.interfaceId = 'adsk.core.STEPImportOptions';
//     adsk.objectTypes['adsk.core.STEPImportOptions'] = adsk.core.STEPImportOptions;
//     adsk.core.STEPImportOptions.cast = function (object) {
//         return object instanceof adsk.core.STEPImportOptions ? object : null;
//     };

//     return adsk;
// }));