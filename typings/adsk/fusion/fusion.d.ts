/// <reference path="components.d.ts"/>

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

//     //=========== DefaultDesignTypeOptions ============
//     // The valid options for the Design History (default design type) setting.
//     adsk.fusion.DefaultDesignTypeOptions = {
//         PromptForDesignTypeOption : 0,
//         DirectDesignTypeOption : 1,
//         ParametricDesignTypeOption : 2
//     };

//     //=========== DefaultWorkspaces ============
//     // The valid options for the Default workspaces setting.
//     adsk.fusion.DefaultWorkspaces = {
//         ModelWorkspace : 0,
//         SculptWorkspace : 1,
//         PatchWorkspace : 2
//     };

//     //=========== DeleteMeError ============
//     // Specific error types for DeleteMe methods.
//     adsk.fusion.DeleteMeError = {
//         ParameterReferencedByOtherParameterError : 200
//     };

//=========== Design ============
// Object that represents an open Fusion design. This derives from the
// Design base class and adds the Fusion specific functionality.
interface Design {
    cast(object: Object): Design;

    // Gets and sets the current design type (DirectDesignType or ParametricDesignType)
    // Changing an exising design from ParametricDesignType to DirectDesignType will result in the timeline and all design
    // history being removed and further operations will not be captured in the timeline.
    designType: number;

    // Returns the root Component
    rootComponent: Component;

    //     // Returns the Components collection that provides access to existing components
    //     // in a design
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'allComponents', {
    //         get : function () {
    //             var result = this._execute('allComponents');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Components) : null;
    //         }
    //     });

    //     // Returns the current edit target as seen in the user interface. This edit target
    //     // is defined as the container object that will be added to if something is created.
    //     // For example, a component can be an edit target so that when new bodies are created they
    //     // are added to that component. A sketch can also be an edit target.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'activeEditObject', {
    //         get : function () {
    //             var result = this._execute('activeEditObject');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //         }
    //     });

    //     // Returns the component that is current being edited. This can return the root component
    //     // or another component within the design.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'activeComponent', {
    //         get : function () {
    //             var result = this._execute('activeComponent');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //         }
    //     });

    //     // Returns the Snapshots object associated with this design which provides access to the
    //     // existing snapshots and the creation of new snapshots.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'snapshots', {
    //         get : function () {
    //             var result = this._execute('snapshots');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Snapshots) : null;
    //         }
    //     });

    //     // Returns the timeline associated with this design.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'timeline', {
    //         get : function () {
    //             var result = this._execute('timeline');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Timeline) : null;
    //         }
    //     });

    //     // Returns the collection of User Parameters in a design
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'userParameters', {
    //         get : function () {
    //             var result = this._execute('userParameters');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UserParameters) : null;
    //         }
    //     });

    //     // Returns a read only list of all parameters in the design. This includes
    //     // the user parameters and model parameters from all components in this design.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'allParameters', {
    //         get : function () {
    //             var result = this._execute('allParameters');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParameterList) : null;
    //         }
    //     });

    //     // Returns a specialized UnitsManager that can set the default length units and work
    //     // with parameters.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'fusionUnitsManager', {
    //         get : function () {
    //             var result = this._execute('fusionUnitsManager');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FusionUnitsManager) : null;
    //         }
    //     });

    //     // Returns the ExportManager for this design. You use the ExportManager
    //     // to export the current design in various formats.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'exportManager', {
    //         get : function () {
    //             var result = this._execute('exportManager');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExportManager) : null;
    //         }
    //     });

    //     // Gets whether the root component is the active edit target in the user interface.
    //     // This is the same as checking the state of the radio button next to the root compoonent in the browser.
    //     // To activate the root component use the ActivateRootComponent method.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'isRootComponentActive', {
    //         get : function () {
    //             var result = this._execute('isRootComponentActive');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the materials contained in this document.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'materials', {
    //         get : function () {
    //             var result = this._execute('materials');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Materials) : null;
    //         }
    //     });

    //     // Returns the appearances contained in this document.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'appearances', {
    //         get : function () {
    //             var result = this._execute('appearances');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Appearances) : null;
    //         }
    //     });

    //     // Returns the occurrence that is currently activated, if any. This can return null in the case
    //     // where no occurrence is activated and the root component is active.
    //     Object.defineProperty(adsk.fusion.Design.prototype, 'activeOccurrence', {
    //         get : function () {
    //             var result = this._execute('activeOccurrence');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         }
    //     });

    //     // Makes the root component the active component in the user interface. This is the same
    //     // as enabling the radio button next to the root component in the browser.
    //     // Returns true if the activation was successful.
    //     adsk.fusion.Design.prototype.activateRootComponent = function () {
    //         var result = this._execute('activateRootComponent');
    //         return result ? result.value : undefined;
    //     };

    //     // Creates an InterferenceInput object. This object collects the entities and options that are
    //     // used when calculating interference. To analyze interference you first create an InterferenceInput
    //     // supplying the entities and set any other settings and then provide this object as input to the
    //     // analyzeInterference method.
    //     // entities : An ObjectCollection containing the BRepBody and/or Occurrence entities that will be used in the
    //     // interference calculation. All entities must be in the context of the root component of the top-level design.
    //     // Returns an InterferenceInput object which you can use to set any other interference settings and then
    //     // use as input to the analyzeInterference method to calculate the interference. Returns null if the
    //     // creation failed.
    //     adsk.fusion.Design.prototype.createInterferenceInput = function (entities) {
    //         if (entities !== null && !(entities instanceof adsk.core.ObjectCollection)) { throw new TypeError('entities must be a adsk.core.ObjectCollection'); }
    //         var args = {
    //             entities : (entities === null ? entities : entities.handle)
    //         };
    //         var result = this._execute('createInterferenceInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.InterferenceInput) : null;
    //     };

    //     // Calculates the interference between the input bodies and/or occurrences.
    //     // input : An InterferenceInput that defines all of the necessary input needed to calculate the interference.
    //     // An InterferenceInput object is created using the createInterferenceInput method.
    //     // Returns an InterferenceResults object that can be used to examine the interference results.
    //     adsk.fusion.Design.prototype.analyzeInterference = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.InterferenceInput)) { throw new TypeError('input must be a adsk.fusion.InterferenceInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('analyzeInterference', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.InterferenceResults) : null;
    //     };
}
//     //=========== DesignTypes ============
//     // Fusion design types
//     adsk.fusion.DesignTypes = {
//         DirectDesignType : 0,
//         ParametricDesignType : 1
//     };

//     //=========== DistanceUnits ============
//     // Valid unit types for distance
//     adsk.fusion.DistanceUnits = {
//         MillimeterDistanceUnits : 0,
//         CentimeterDistanceUnits : 1,
//         MeterDistanceUnits : 2,
//         InchDistanceUnits : 3,
//         FootDistanceUnits : 4
//     };

//     //=========== ExportManager ============
//     // Provides support for exporting model data to various formats.
//     adsk.fusion.ExportManager = function ExportManager(handle) {
//         if (!(this instanceof adsk.fusion.ExportManager)) {
//             return adsk.fusion.ExportManager.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExportManager.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExportManager.prototype.constructor = adsk.fusion.ExportManager;
//     adsk.fusion.ExportManager.interfaceId = 'adsk.fusion.ExportManager';
//     adsk.objectTypes['adsk.fusion.ExportManager'] = adsk.fusion.ExportManager;
//     adsk.fusion.ExportManager.cast = function (object) {
//         return object instanceof adsk.fusion.ExportManager ? object : null;
//     };

//     // Creates an IGESExportOptions object that's used to export a design in IGES format. Creation
//     // of the IGESExportOptions object does not perform the export. You must pass this object to the
//     // ExportManager.execute method to perform the export. The IGESExportOptions supports any available
//     // options when exporting to IGES format.
//     // filename : The filename of the IGES file to be created.
//     // geometry : The geometry to export. Valid geometry for this is currently a Component object. This argument is optional
//     // and if not specified, it results in the root component and it entire contents being exported.
//     // The created IGESExportOptions object or null if the creation failed.
//     adsk.fusion.ExportManager.prototype.createIGESExportOptions = function (filename, geometry) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.core.Base))) { throw new TypeError('geometry must be a adsk.core.Base'); }
//         var args = {
//             filename : filename
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         var result = this._execute('createIGESExportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.IGESExportOptions) : null;
//     };

//     // Creates an STEPExportOptions object that's used to export a design in STEP format. Creation
//     // of the STEPExportOptions object does not perform the export. You must pass this object to the
//     // ExportManager.execute method to perform the export. The STEPExportOptions supports any available
//     // options when exporting to STEP format.
//     // filename : The filename of the STEP file to be created.
//     // geometry : The geometry to export. Valid geometry for this is currently a Component object. This argument is optional
//     // and if not specified, it results in the root component and it entire contents being exported.
//     // The created STEPExportOptions object or null if the creation failed.
//     adsk.fusion.ExportManager.prototype.createSTEPExportOptions = function (filename, geometry) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.core.Base))) { throw new TypeError('geometry must be a adsk.core.Base'); }
//         var args = {
//             filename : filename
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         var result = this._execute('createSTEPExportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.STEPExportOptions) : null;
//     };

//     // Creates an SATExportOptions object that's used to export a design in SAT format. Creation
//     // of the SATExportOptions object does not perform the export. You must pass this object to the
//     // ExportManager.execute method to perform the export. The SATExportOptions supports any available
//     // options when exporting to SAT format.
//     // filename : The filename of the SAT file to be created.
//     // geometry : The geometry to export. Valid geometry for this is currently a Component object. This argument is optional
//     // and if not specified, it results in the root component and it entire contents being exported.
//     // The created SATExportOptions object or null if the creation failed.
//     adsk.fusion.ExportManager.prototype.createSATExportOptions = function (filename, geometry) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.core.Base))) { throw new TypeError('geometry must be a adsk.core.Base'); }
//         var args = {
//             filename : filename
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         var result = this._execute('createSATExportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SATExportOptions) : null;
//     };

//     // Creates an SMTExportOptions object that's used to export a design in SMT format. Creation
//     // of the SMTExportOptions object does not perform the export. You must pass this object to the
//     // ExportManager.execute method to perform the export. The SMTExportOptions supports any available
//     // options when exporting to SMT format.
//     // filename : The filename of the SMT file to be created.
//     // geometry : The geometry to export. Valid geometry for this is currently a Component object. This argument is optional
//     // and if not specified, it results in the root component and it entire contents being exported.
//     // The created SMTExportOptions object or null if the creation failed.
//     adsk.fusion.ExportManager.prototype.createSMTExportOptions = function (filename, geometry) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.core.Base))) { throw new TypeError('geometry must be a adsk.core.Base'); }
//         var args = {
//             filename : filename
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         var result = this._execute('createSMTExportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SMTExportOptions) : null;
//     };

//     // Creates an FusionArchiveExportOptions object that's used to export a design in Fusion archive format. Creation
//     // of the FusionArchiveExportOptions object does not perform the export. You must pass this object to the
//     // ExportManager.execute method to perform the export. The FusionArchiveExportOptions supports any available
//     // options when exporting to Fusion archive format.
//     // filename : The filename of the Fusion archive file to be created.
//     // geometry : The geometry to export. Valid geometry for this is currently a Component object. This argument is optional
//     // and if not specified, it results in the root component and it entire contents being exported.
//     // The created FusionArchiveExportOptions object or null if the creation failed.
//     adsk.fusion.ExportManager.prototype.createFusionArchiveExportOptions = function (filename, geometry) {
//         if (filename === undefined || filename === null || filename.constructor !== String) { throw new TypeError('filename must be a string'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.core.Base))) { throw new TypeError('geometry must be a adsk.core.Base'); }
//         var args = {
//             filename : filename
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         var result = this._execute('createFusionArchiveExportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FusionArchiveExportOptions) : null;
//     };

//     // Creates an createSTLExportOptions object that's used to export a design in STL format. Creation
//     // of the createSTLExportOptions object does not perform the export. You must pass this object to the
//     // ExportManager.execute method to perform the export. The createSTLExportOptions supports any available
//     // options when exporting to STL format.
//     // geometry : The geometry to export. This can be a BRepBody, Occurrence, or the root Component object.
//     // filename : The filename of the STL file to be created. This is optional and can be left out if the mesh will be opened in a mesh editor.
//     // The created createSTLExportOptions object or null if the creation failed.
//     adsk.fusion.ExportManager.prototype.createSTLExportOptions = function (geometry, filename) {
//         if (geometry !== null && !(geometry instanceof adsk.core.Base)) { throw new TypeError('geometry must be a adsk.core.Base'); }
//         if (filename === null || (filename !== undefined && filename.constructor !== String)) { throw new TypeError('filename must be a string'); }
//         var args = {
//             geometry : (geometry === null ? geometry : geometry.handle)
//         };
//         if (filename !== undefined) {
//             args.filename = filename;
//         }
//         var result = this._execute('createSTLExportOptions', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.STLExportOptions) : null;
//     };

//     // Executes the export operation to create the file in the format specified by the input ExportOptions object.
//     // exportOptions : An ExportOptions object that is created using one of the create methods on the ExportManager object. This
//     // defines the type of file and any available options supported for that file type.
//     // Returns true if the export was successful.
//     adsk.fusion.ExportManager.prototype.execute = function (exportOptions) {
//         if (exportOptions !== null && !(exportOptions instanceof adsk.fusion.ExportOptions)) { throw new TypeError('exportOptions must be a adsk.fusion.ExportOptions'); }
//         var args = {
//             exportOptions : (exportOptions === null ? exportOptions : exportOptions.handle)
//         };
//         var result = this._execute('execute', args);
//         return result ? result.value : undefined;
//     };

//     //=========== ExportOptions ============
//     // The base class for the different export types. This class is never directly used
//     // in an export because you need the specific export type to specify the type of
//     // export to be performed.
//     adsk.fusion.ExportOptions = function ExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.ExportOptions)) {
//             return adsk.fusion.ExportOptions.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExportOptions.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExportOptions.prototype.constructor = adsk.fusion.ExportOptions;
//     adsk.fusion.ExportOptions.interfaceId = 'adsk.fusion.ExportOptions';
//     adsk.objectTypes['adsk.fusion.ExportOptions'] = adsk.fusion.ExportOptions;
//     adsk.fusion.ExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.ExportOptions ? object : null;
//     };

//     // Gets and sets the filename that the exported file will be written to. This can
//     // be empty in the case of STL export and sending the result to the mesh editor.
//     Object.defineProperty(adsk.fusion.ExportOptions.prototype, 'filename', {
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

//     // Specifies the geometry to export. This can be Occurrence, or the root Component. For STLExport, we also support BRepBody.
//     Object.defineProperty(adsk.fusion.ExportOptions.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometry', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ExpressionError ============
//     // The expression of the parameter. Setting this can fail because of an invalid expression or
//     // because a cyclic reference is created between parameters.
//     adsk.fusion.ExpressionError = {
//         CyclicParameterReferenceError : 200
//     };

//     //=========== FusionDefaultUnitsPreferences ============
//     // Fusion Default Units for Design Preferences
//     adsk.fusion.FusionDefaultUnitsPreferences = function FusionDefaultUnitsPreferences(handle) {
//         if (!(this instanceof adsk.fusion.FusionDefaultUnitsPreferences)) {
//             return adsk.fusion.FusionDefaultUnitsPreferences.cast(handle);
//         }
//         adsk.core.DefaultUnitsPreferences.call(this, handle);
//     };
//     adsk.fusion.FusionDefaultUnitsPreferences.prototype = Object.create(adsk.core.DefaultUnitsPreferences.prototype);
//     adsk.fusion.FusionDefaultUnitsPreferences.prototype.constructor = adsk.fusion.FusionDefaultUnitsPreferences;
//     adsk.fusion.FusionDefaultUnitsPreferences.interfaceId = 'adsk.fusion.FusionDefaultUnitsPreferences';
//     adsk.objectTypes['adsk.fusion.FusionDefaultUnitsPreferences'] = adsk.fusion.FusionDefaultUnitsPreferences;
//     adsk.fusion.FusionDefaultUnitsPreferences.cast = function (object) {
//         return object instanceof adsk.fusion.FusionDefaultUnitsPreferences ? object : null;
//     };

//     // Gets and sets the default units for length when creating a new Fusion file.
//     Object.defineProperty(adsk.fusion.FusionDefaultUnitsPreferences.prototype, 'distanceDisplayUnits', {
//         get : function () {
//             var result = this._execute('distanceDisplayUnits');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('distanceDisplayUnits', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== FusionDocument ============
//     // Object that represents a Fusion specific document.
//     adsk.fusion.FusionDocument = function FusionDocument(handle) {
//         if (!(this instanceof adsk.fusion.FusionDocument)) {
//             return adsk.fusion.FusionDocument.cast(handle);
//         }
//         adsk.core.Document.call(this, handle);
//     };
//     adsk.fusion.FusionDocument.prototype = Object.create(adsk.core.Document.prototype);
//     adsk.fusion.FusionDocument.prototype.constructor = adsk.fusion.FusionDocument;
//     adsk.fusion.FusionDocument.interfaceId = 'adsk.fusion.FusionDocument';
//     adsk.objectTypes['adsk.fusion.FusionDocument'] = adsk.fusion.FusionDocument;
//     adsk.fusion.FusionDocument.cast = function (object) {
//         return object instanceof adsk.fusion.FusionDocument ? object : null;
//     };

//     // Returns the design associated with this fusion document.
//     Object.defineProperty(adsk.fusion.FusionDocument.prototype, 'design', {
//         get : function () {
//             var result = this._execute('design');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Design) : null;
//         }
//     });

//     //=========== FusionProductPreferences ============
//     // Fusion General Design Preferences
//     adsk.fusion.FusionProductPreferences = function FusionProductPreferences(handle) {
//         if (!(this instanceof adsk.fusion.FusionProductPreferences)) {
//             return adsk.fusion.FusionProductPreferences.cast(handle);
//         }
//         adsk.core.ProductPreferences.call(this, handle);
//     };
//     adsk.fusion.FusionProductPreferences.prototype = Object.create(adsk.core.ProductPreferences.prototype);
//     adsk.fusion.FusionProductPreferences.prototype.constructor = adsk.fusion.FusionProductPreferences;
//     adsk.fusion.FusionProductPreferences.interfaceId = 'adsk.fusion.FusionProductPreferences';
//     adsk.objectTypes['adsk.fusion.FusionProductPreferences'] = adsk.fusion.FusionProductPreferences;
//     adsk.fusion.FusionProductPreferences.cast = function (object) {
//         return object instanceof adsk.fusion.FusionProductPreferences ? object : null;
//     };

//     // Gets and sets the Active Component Visibility option
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'isActiveComponentVisibilityUsed', {
//         get : function () {
//             var result = this._execute('isActiveComponentVisibilityUsed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isActiveComponentVisibilityUsed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the Design History (default design type) setting
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'defaultDesignType', {
//         get : function () {
//             var result = this._execute('defaultDesignType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('defaultDesignType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the Default workspace setting. (Model, Sculpt or Patch)
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'defaultWorkspace', {
//         get : function () {
//             var result = this._execute('defaultWorkspace');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('defaultWorkspace', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the Animate joint preview option
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'isJointPreviewAnimated', {
//         get : function () {
//             var result = this._execute('isJointPreviewAnimated');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isJointPreviewAnimated', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the Allow 3D sketching of lines and splines option
//     // which controls if 3D sketching is allowed or if sketching is forced to
//     // be on the x-y plane of the sketch.
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'is3DSketchingAllowed', {
//         get : function () {
//             var result = this._execute('is3DSketchingAllowed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('is3DSketchingAllowed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the Show ghosted result body option
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'isGhostedResultBodyShown', {
//         get : function () {
//             var result = this._execute('isGhostedResultBodyShown');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isGhostedResultBodyShown', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if dimension value is edited when the dimension is created.
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'isDimensionEditedWhenCreated', {
//         get : function () {
//             var result = this._execute('isDimensionEditedWhenCreated');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDimensionEditedWhenCreated', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the view is re-oriented to view the newly created sketch.
//     Object.defineProperty(adsk.fusion.FusionProductPreferences.prototype, 'isAutoLookAtSketch', {
//         get : function () {
//             var result = this._execute('isAutoLookAtSketch');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isAutoLookAtSketch', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== FusionUnitsManager ============
//     // Utility class used to work with Values and control default units.
//     // Internal values are held in SI units (e.g. seconds, radians, kg for time, angle, mass)
//     // with the exception that all lengths are in cm rather than meter and this affects derived
//     // units (e.g. velocity is cm/s, volume is cm^3). Units are specified flexibly via strings
//     // (e.g. "cm", "in", "inch", "cm^3", "cm*cm*cm", "mph", "mps" "m/s").
//     adsk.fusion.FusionUnitsManager = function FusionUnitsManager(handle) {
//         if (!(this instanceof adsk.fusion.FusionUnitsManager)) {
//             return adsk.fusion.FusionUnitsManager.cast(handle);
//         }
//         adsk.core.UnitsManager.call(this, handle);
//     };
//     adsk.fusion.FusionUnitsManager.prototype = Object.create(adsk.core.UnitsManager.prototype);
//     adsk.fusion.FusionUnitsManager.prototype.constructor = adsk.fusion.FusionUnitsManager;
//     adsk.fusion.FusionUnitsManager.interfaceId = 'adsk.fusion.FusionUnitsManager';
//     adsk.objectTypes['adsk.fusion.FusionUnitsManager'] = adsk.fusion.FusionUnitsManager;
//     adsk.fusion.FusionUnitsManager.cast = function (object) {
//         return object instanceof adsk.fusion.FusionUnitsManager ? object : null;
//     };

//     // Returns the the parent design
//     Object.defineProperty(adsk.fusion.FusionUnitsManager.prototype, 'design', {
//         get : function () {
//             var result = this._execute('design');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Design) : null;
//         }
//     });

//     // Gets and sets the default distance units for this design.
//     Object.defineProperty(adsk.fusion.FusionUnitsManager.prototype, 'distanceDisplayUnits', {
//         get : function () {
//             var result = this._execute('distanceDisplayUnits');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('distanceDisplayUnits', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== InterferenceInput ============
//     // Used to gather and define the various inputs and settings needed to calculate interference. This
//     // object is created using the Design.createInterferenceInput method.
//     adsk.fusion.InterferenceInput = function InterferenceInput(handle) {
//         if (!(this instanceof adsk.fusion.InterferenceInput)) {
//             return adsk.fusion.InterferenceInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.InterferenceInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.InterferenceInput.prototype.constructor = adsk.fusion.InterferenceInput;
//     adsk.fusion.InterferenceInput.interfaceId = 'adsk.fusion.InterferenceInput';
//     adsk.objectTypes['adsk.fusion.InterferenceInput'] = adsk.fusion.InterferenceInput;
//     adsk.fusion.InterferenceInput.cast = function (object) {
//         return object instanceof adsk.fusion.InterferenceInput ? object : null;
//     };

//     // Gets and set an ObjectCollection containing BRepBody and/or Occurrence entities that
//     // will be used when checking for interference. All entities must be in the context of
//     // the root component of the top-level design.
//     Object.defineProperty(adsk.fusion.InterferenceInput.prototype, 'entities', {
//         get : function () {
//             var result = this._execute('entities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('entities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether any coincident faces in the input bodies are considered as interference
//     // or not. This property defaults to False for a newly created InterferenceInput object.
//     Object.defineProperty(adsk.fusion.InterferenceInput.prototype, 'areCoincidentFacesIncluded', {
//         get : function () {
//             var result = this._execute('areCoincidentFacesIncluded');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('areCoincidentFacesIncluded', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== InterferenceResult ============
//     // Represents the interference between bodies and/or occurrences in an interference analysis.
//     adsk.fusion.InterferenceResult = function InterferenceResult(handle) {
//         if (!(this instanceof adsk.fusion.InterferenceResult)) {
//             return adsk.fusion.InterferenceResult.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.InterferenceResult.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.InterferenceResult.prototype.constructor = adsk.fusion.InterferenceResult;
//     adsk.fusion.InterferenceResult.interfaceId = 'adsk.fusion.InterferenceResult';
//     adsk.objectTypes['adsk.fusion.InterferenceResult'] = adsk.fusion.InterferenceResult;
//     adsk.fusion.InterferenceResult.cast = function (object) {
//         return object instanceof adsk.fusion.InterferenceResult ? object : null;
//     };

//     // Returns the first entity involved in the interference
//     Object.defineProperty(adsk.fusion.InterferenceResult.prototype, 'entityOne', {
//         get : function () {
//             var result = this._execute('entityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the second entity involved in the interference
//     Object.defineProperty(adsk.fusion.InterferenceResult.prototype, 'entityTwo', {
//         get : function () {
//             var result = this._execute('entityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns a transient BRepBody that represents the volume of interference.
//     Object.defineProperty(adsk.fusion.InterferenceResult.prototype, 'interferenceBody', {
//         get : function () {
//             var result = this._execute('interferenceBody');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//         }
//     });

//     // Gets and sets if this interference volume should be created as a model body. Setting
//     // this to true doesn't create the body just indicates that a body is desired. Calling
//     // the createBodies method on the interferenceResults object will result in the creation
//     // of the model body if this property is true.
//     Object.defineProperty(adsk.fusion.InterferenceResult.prototype, 'isCreateBody', {
//         get : function () {
//             var result = this._execute('isCreateBody');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isCreateBody', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== InterferenceResults ============
//     // Transient object used to return the result of an interference analysis.
//     adsk.fusion.InterferenceResults = function InterferenceResults(handle) {
//         if (!(this instanceof adsk.fusion.InterferenceResults)) {
//             return adsk.fusion.InterferenceResults.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.InterferenceResults.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.InterferenceResults.prototype.constructor = adsk.fusion.InterferenceResults;
//     adsk.fusion.InterferenceResults.interfaceId = 'adsk.fusion.InterferenceResults';
//     adsk.objectTypes['adsk.fusion.InterferenceResults'] = adsk.fusion.InterferenceResults;
//     adsk.fusion.InterferenceResults.cast = function (object) {
//         return object instanceof adsk.fusion.InterferenceResults ? object : null;
//     };

//     // Returns the number of interference results in the collection.
//     Object.defineProperty(adsk.fusion.InterferenceResults.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified interference result using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.InterferenceResults.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.InterferenceResult) : null;
//     };

//     // Creates bodies in the model that represent the interference volumes.
//     // This is not supported in parametric modelling.
//     // allInterferenceBodies : Sets if all bodies or only individual bodies will be created as bodies in the model.
//     // If False, then only interferenceResult objects whose isCreateBody property is true
//     // will be created as a model body. If true, all interface volumes will be created as
//     // a body regardless of the value of the isCreateBody property.
//     adsk.fusion.InterferenceResults.prototype.createBodies = function (allInterferenceBodies) {
//         if (typeof allInterferenceBodies !== 'boolean') { throw new TypeError('allInterferenceBodies must be a boolean'); }
//         var args = {
//             allInterferenceBodies : allInterferenceBodies
//         };
//         var result = this._execute('createBodies', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//     };

//     //=========== MeshRefinementSettings ============
//     // The different refinement settings supported when exporting the design as an STL file.
//     adsk.fusion.MeshRefinementSettings = {
//         MeshRefinementHigh : 0,
//         MeshRefinementMedium : 1,
//         MeshRefinementLow : 2,
//         MeshRefinementCustom : 3
//     };

//     //=========== ModelParameters ============
//     // Provides access to the Model Parameters within a component.
//     adsk.fusion.ModelParameters = function ModelParameters(handle) {
//         if (!(this instanceof adsk.fusion.ModelParameters)) {
//             return adsk.fusion.ModelParameters.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ModelParameters.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ModelParameters.prototype.constructor = adsk.fusion.ModelParameters;
//     adsk.fusion.ModelParameters.interfaceId = 'adsk.fusion.ModelParameters';
//     adsk.objectTypes['adsk.fusion.ModelParameters'] = adsk.fusion.ModelParameters;
//     adsk.fusion.ModelParameters.cast = function (object) {
//         return object instanceof adsk.fusion.ModelParameters ? object : null;
//     };

//     // Returns the number of parameters in the collection.
//     Object.defineProperty(adsk.fusion.ModelParameters.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the component that owns the Model Parameters collection
//     Object.defineProperty(adsk.fusion.ModelParameters.prototype, 'component', {
//         get : function () {
//             var result = this._execute('component');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Function that returns the specified Model Parameter using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection
//     // has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ModelParameters.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//     };

//     // Function that returns the specified Model Parameter using the name of the parameter as it is
//     // displayed in the parameters dialog.
//     // name : The name of the Model Parameter as it is displayed in the parameters dialog
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.ModelParameters.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//     };

//     //=========== Parameter ============
//     // The base class Parameter object that can represent model or user parameters.
//     adsk.fusion.Parameter = function Parameter(handle) {
//         if (!(this instanceof adsk.fusion.Parameter)) {
//             return adsk.fusion.Parameter.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Parameter.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Parameter.prototype.constructor = adsk.fusion.Parameter;
//     adsk.fusion.Parameter.interfaceId = 'adsk.fusion.Parameter';
//     adsk.objectTypes['adsk.fusion.Parameter'] = adsk.fusion.Parameter;
//     adsk.fusion.Parameter.cast = function (object) {
//         return object instanceof adsk.fusion.Parameter ? object : null;
//     };

//     // Gets and sets the real value (a double) of the parameter in database units.
//     // Setting this property will set/reset the expression value for this parameter
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'value', {
//         get : function () {
//             var result = this._execute('value');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('value', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the expression (ie. "22.064 mm") used to calculate the value of the parameter
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'expression', {
//         get : function () {
//             var result = this._execute('expression');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('expression', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the name of the parameter. Setting the name can fail if the name
//     // is not unique with respect to all other parameters in the design.
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'name', {
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

//     // The unit type associated with this parameter. An empty string is returned for parameters
//     // that don't have a unit type.
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'unit', {
//         get : function () {
//             var result = this._execute('unit');
//             return result ? result.value : undefined;
//         }
//     });

//     // The comment associated with this parameter
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'comment', {
//         get : function () {
//             var result = this._execute('comment');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('comment', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether this parameter is included in the Favorites list in the
//     // parameters dialog
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'isFavorite', {
//         get : function () {
//             var result = this._execute('isFavorite');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFavorite', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a list of parameters that are dependent on this parameter as a result
//     // of this parameter being referenced in their equation.
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'dependentParameters', {
//         get : function () {
//             var result = this._execute('dependentParameters');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParameterList) : null;
//         }
//     });

//     // Gets if this parameter can be deleted. Parameters that cannot be deleted are: Model Parameters and
//     // User Parameters that have dependents.
//     Object.defineProperty(adsk.fusion.Parameter.prototype, 'isDeletable', {
//         get : function () {
//             var result = this._execute('isDeletable');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ParameterList ============
//     // Transient object used to pass a set of parameters.
//     adsk.fusion.ParameterList = function ParameterList(handle) {
//         if (!(this instanceof adsk.fusion.ParameterList)) {
//             return adsk.fusion.ParameterList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ParameterList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ParameterList.prototype.constructor = adsk.fusion.ParameterList;
//     adsk.fusion.ParameterList.interfaceId = 'adsk.fusion.ParameterList';
//     adsk.objectTypes['adsk.fusion.ParameterList'] = adsk.fusion.ParameterList;
//     adsk.fusion.ParameterList.cast = function (object) {
//         return object instanceof adsk.fusion.ParameterList ? object : null;
//     };

//     // Returns the number of parameters in the collection.
//     Object.defineProperty(adsk.fusion.ParameterList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if the list is read-only
//     // Some lists returned by API calls (instead of lists created by the
//     // user) are read only. Items cannot be added or remove from such a list.
//     Object.defineProperty(adsk.fusion.ParameterList.prototype, 'isReadOnly', {
//         get : function () {
//             var result = this._execute('isReadOnly');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified parameter using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ParameterList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Parameter) : null;
//     };

//     // Returns the specified parameter using the name of the parameter
//     // as it is displayed in the parameters dialog
//     // name : The name of the parameter as it is displayed in the parameters dialog
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.ParameterList.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Parameter) : null;
//     };

//     // Adds a parameter to the list. This does not create a
//     // new parameter, it adds an existing parameter to the list.
//     // Note that duplicates can exist in the list.
//     // parameter : The existing parameter to add to the list
//     // Returns true if successful. This method will fail if the list is read-only
//     adsk.fusion.ParameterList.prototype.add = function (parameter) {
//         if (parameter !== null && !(parameter instanceof adsk.fusion.Parameter)) { throw new TypeError('parameter must be a adsk.fusion.Parameter'); }
//         var args = {
//             parameter : (parameter === null ? parameter : parameter.handle)
//         };
//         var result = this._execute('add', args);
//         return result ? result.value : undefined;
//     };

//     // Method that removes a parameter from the list using the index of the item
//     // in the list
//     // Will fail if the list is read only.
//     // index : The index of the parameter to be removed from the list
//     // Returns true if successful. This method will fail if the list is read-only
//     adsk.fusion.ParameterList.prototype.removeByIndex = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('removeByIndex', args);
//         return result ? result.value : undefined;
//     };

//     // Method that removes a parameter from the list by specifying the parameter (item)
//     // to remove
//     // item : The parameter item to remove from the list
//     // Returns true if successful. This method will fail if the list is read-only
//     adsk.fusion.ParameterList.prototype.removeByItem = function (item) {
//         if (item !== null && !(item instanceof adsk.fusion.Parameter)) { throw new TypeError('item must be a adsk.fusion.Parameter'); }
//         var args = {
//             item : (item === null ? item : item.handle)
//         };
//         var result = this._execute('removeByItem', args);
//         return result ? result.value : undefined;
//     };

//     // Finds the specified parameter in the list. The search can be started at a specified
//     // index rather than from the beginning of the list.
//     // If not found, -1 is returned.
//     // parameter : The parameter to find
//     // startIndex : the index in the list to start the search from
//     // Returns the index of the parameter found in the list.
//     adsk.fusion.ParameterList.prototype.find = function (parameter, startIndex) {
//         if (parameter !== null && !(parameter instanceof adsk.fusion.Parameter)) { throw new TypeError('parameter must be a adsk.fusion.Parameter'); }
//         if (startIndex === null || (startIndex !== undefined && !isFinite(startIndex))) { throw new TypeError('startIndex must be a number'); }
//         var args = {
//             parameter : (parameter === null ? parameter : parameter.handle)
//         };
//         if (startIndex !== undefined) {
//             args.startIndex = Number(startIndex);
//         }
//         var result = this._execute('find', args);
//         return result ? result.value : undefined;
//     };

//     // Indicates whether or not ParameterList collection contains a specified parameter
//     // parameter : The parameter to look for in the list
//     // Returns true if list contains the specified parameter
//     adsk.fusion.ParameterList.prototype.contains = function (parameter) {
//         if (parameter !== null && !(parameter instanceof adsk.fusion.Parameter)) { throw new TypeError('parameter must be a adsk.fusion.Parameter'); }
//         var args = {
//             parameter : (parameter === null ? parameter : parameter.handle)
//         };
//         var result = this._execute('contains', args);
//         return result ? result.value : undefined;
//     };

//     // Creates a parameter list that the client can use for various purposes.
//     // Use ParameterList.Add to add parameters to the list after creating it.
//     // Returns a ParameterList
//     adsk.fusion.ParameterList.create = function () {
//         var result = adsk.core.Base._executeStatic('adsk.fusion.ParameterList', 'create');
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParameterList) : null;
//     };

//     //=========== PhysicalProperties ============
//     // The physical properties of a Component, Occurrence or BRepBody
//     adsk.fusion.PhysicalProperties = function PhysicalProperties(handle) {
//         if (!(this instanceof adsk.fusion.PhysicalProperties)) {
//             return adsk.fusion.PhysicalProperties.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PhysicalProperties.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PhysicalProperties.prototype.constructor = adsk.fusion.PhysicalProperties;
//     adsk.fusion.PhysicalProperties.interfaceId = 'adsk.fusion.PhysicalProperties';
//     adsk.objectTypes['adsk.fusion.PhysicalProperties'] = adsk.fusion.PhysicalProperties;
//     adsk.fusion.PhysicalProperties.cast = function (object) {
//         return object instanceof adsk.fusion.PhysicalProperties ? object : null;
//     };

//     // Gets the area in the current database units. (ie. cm^2)
//     Object.defineProperty(adsk.fusion.PhysicalProperties.prototype, 'area', {
//         get : function () {
//             var result = this._execute('area');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the density in the current database units. (ie. kg/cm^3)
//     Object.defineProperty(adsk.fusion.PhysicalProperties.prototype, 'density', {
//         get : function () {
//             var result = this._execute('density');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the mass in the current database units. (ie. kg)
//     Object.defineProperty(adsk.fusion.PhysicalProperties.prototype, 'mass', {
//         get : function () {
//             var result = this._execute('mass');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the volume in the current database units. (ie. cm^3)
//     Object.defineProperty(adsk.fusion.PhysicalProperties.prototype, 'volume', {
//         get : function () {
//             var result = this._execute('volume');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== Snapshot ============
//     // Object that represents a Snapshot in the timeline
//     adsk.fusion.Snapshot = function Snapshot(handle) {
//         if (!(this instanceof adsk.fusion.Snapshot)) {
//             return adsk.fusion.Snapshot.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Snapshot.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Snapshot.prototype.constructor = adsk.fusion.Snapshot;
//     adsk.fusion.Snapshot.interfaceId = 'adsk.fusion.Snapshot';
//     adsk.objectTypes['adsk.fusion.Snapshot'] = adsk.fusion.Snapshot;
//     adsk.fusion.Snapshot.cast = function (object) {
//         return object instanceof adsk.fusion.Snapshot ? object : null;
//     };

//     // Gets and sets the name of the snapshot as seen in the timeline.
//     Object.defineProperty(adsk.fusion.Snapshot.prototype, 'name', {
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

//     // Returns the timeline object associated with this snapshot.
//     Object.defineProperty(adsk.fusion.Snapshot.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // Deletes this snapshot.
//     // Returns true if the delete was successful.
//     adsk.fusion.Snapshot.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== Snapshots ============
//     // Provides access to the Snapshots within a design and provides
//     // methods to create new Snapshots.
//     adsk.fusion.Snapshots = function Snapshots(handle) {
//         if (!(this instanceof adsk.fusion.Snapshots)) {
//             return adsk.fusion.Snapshots.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Snapshots.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Snapshots.prototype.constructor = adsk.fusion.Snapshots;
//     adsk.fusion.Snapshots.interfaceId = 'adsk.fusion.Snapshots';
//     adsk.objectTypes['adsk.fusion.Snapshots'] = adsk.fusion.Snapshots;
//     adsk.fusion.Snapshots.cast = function (object) {
//         return object instanceof adsk.fusion.Snapshots ? object : null;
//     };

//     // The number of items in the collection.
//     Object.defineProperty(adsk.fusion.Snapshots.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if there are any changes that have been made than can be snapshot.
//     Object.defineProperty(adsk.fusion.Snapshots.prototype, 'hasPendingSnapshot', {
//         get : function () {
//             var result = this._execute('hasPendingSnapshot');
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates a new snapshot. Creating a snapshot is only valid when the HasPendingTransforms property returns true.
//     // Returns the newly created snapshot.
//     adsk.fusion.Snapshots.prototype.add = function () {
//         var result = this._execute('add');
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Snapshot) : null;
//     };

//     // Function that returns the specified snapshot in the collection using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Snapshots.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Snapshot) : null;
//     };

//     // Reverts and changes that have been made that can be snapshot. This effectively
//     // reverts the design back to the last snapshot. This is only valid when the
//     // HasPendingSnapshot property returns true.
//     // Returns true if the revert was successful.
//     adsk.fusion.Snapshots.prototype.revertPendingSnapshot = function () {
//         var result = this._execute('revertPendingSnapshot');
//         return result ? result.value : undefined;
//     };

//     //=========== Timeline ============
//     // A collection of TimelineObjects in a parametric design.
//     adsk.fusion.Timeline = function Timeline(handle) {
//         if (!(this instanceof adsk.fusion.Timeline)) {
//             return adsk.fusion.Timeline.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Timeline.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Timeline.prototype.constructor = adsk.fusion.Timeline;
//     adsk.fusion.Timeline.interfaceId = 'adsk.fusion.Timeline';
//     adsk.objectTypes['adsk.fusion.Timeline'] = adsk.fusion.Timeline;
//     adsk.fusion.Timeline.cast = function (object) {
//         return object instanceof adsk.fusion.Timeline ? object : null;
//     };

//     // Gets and sets the current position of the marker where
//     // 0 is at the beginning of the timeline and the value of Timeline.count is the end of the
//     // timeline.
//     Object.defineProperty(adsk.fusion.Timeline.prototype, 'markerPosition', {
//         get : function () {
//             var result = this._execute('markerPosition');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('markerPosition', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the number of items in the collection.
//     Object.defineProperty(adsk.fusion.Timeline.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the collection of groups within the timeline.
//     Object.defineProperty(adsk.fusion.Timeline.prototype, 'timelineGroups', {
//         get : function () {
//             var result = this._execute('timelineGroups');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineGroups) : null;
//         }
//     });

//     // Moves the marker to the beginning of the timeline.
//     // Returns true if the move is successful
//     adsk.fusion.Timeline.prototype.moveToBeginning = function () {
//         var result = this._execute('moveToBeginning');
//         return result ? result.value : undefined;
//     };

//     // Moves the marker to the end of the timeline.
//     // Returns true if the move is successful
//     adsk.fusion.Timeline.prototype.moveToEnd = function () {
//         var result = this._execute('moveToEnd');
//         return result ? result.value : undefined;
//     };

//     // Moves the marker to the next step in the timeline.
//     // Returns true if the move is successful
//     adsk.fusion.Timeline.prototype.movetoNextStep = function () {
//         var result = this._execute('movetoNextStep');
//         return result ? result.value : undefined;
//     };

//     // Moves the marker to the previous step in the timeline.
//     // Returns true if the move is successful
//     adsk.fusion.Timeline.prototype.moveToPreviousStep = function () {
//         var result = this._execute('moveToPreviousStep');
//         return result ? result.value : undefined;
//     };

//     // Plays the timeline beginning at the current position of the marker.
//     // Returns true if playing the timeline was successful
//     adsk.fusion.Timeline.prototype.play = function () {
//         var result = this._execute('play');
//         return result ? result.value : undefined;
//     };

//     // Function that returns the specified item in the timeline using an index into the collection.
//     // The items are returned in the order they appear in the timeline.
//     // index : The index of the item within the collection to return. The first item in the collection
//     // has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Timeline.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//     };

//     // Deletes all objects in the timeline that are after the current position of the marker.
//     // Returns true if successful.
//     adsk.fusion.Timeline.prototype.deleteAllAfterMarker = function () {
//         var result = this._execute('deleteAllAfterMarker');
//         return result ? result.value : undefined;
//     };

//     //=========== TimelineGroups ============
//     // Provides access to the time line groups within a design and provides
//     // methods to create new groups.
//     adsk.fusion.TimelineGroups = function TimelineGroups(handle) {
//         if (!(this instanceof adsk.fusion.TimelineGroups)) {
//             return adsk.fusion.TimelineGroups.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TimelineGroups.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TimelineGroups.prototype.constructor = adsk.fusion.TimelineGroups;
//     adsk.fusion.TimelineGroups.interfaceId = 'adsk.fusion.TimelineGroups';
//     adsk.objectTypes['adsk.fusion.TimelineGroups'] = adsk.fusion.TimelineGroups;
//     adsk.fusion.TimelineGroups.cast = function (object) {
//         return object instanceof adsk.fusion.TimelineGroups ? object : null;
//     };

//     // Returns the number of items in the collection.
//     Object.defineProperty(adsk.fusion.TimelineGroups.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates a new group within the timeline. The sequential set of items defined
//     // by the start and end indices will be included in the group. A group cannot contains
//     // another group so none of the items being grouped can be a group of this will fail.
//     // startIndex : The index of the first item in the timeline that will be added to the group.
//     // endIndex : The index of the last item in the timeline that will be added to the group.
//     // Returns the created TimelineGroup object or null in the case of failure.
//     adsk.fusion.TimelineGroups.prototype.add = function (startIndex, endIndex) {
//         if (!isFinite(startIndex)) { throw new TypeError('startIndex must be a number'); }
//         if (!isFinite(endIndex)) { throw new TypeError('endIndex must be a number'); }
//         var args = {
//             startIndex : Number(startIndex),
//             endIndex : Number(endIndex)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineGroup) : null;
//     };

//     // Function that returns the specified timeline group using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.TimelineGroups.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineGroup) : null;
//     };

//     //=========== TimelineObject ============
//     // Represents an object in the timeline.
//     adsk.fusion.TimelineObject = function TimelineObject(handle) {
//         if (!(this instanceof adsk.fusion.TimelineObject)) {
//             return adsk.fusion.TimelineObject.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TimelineObject.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TimelineObject.prototype.constructor = adsk.fusion.TimelineObject;
//     adsk.fusion.TimelineObject.interfaceId = 'adsk.fusion.TimelineObject';
//     adsk.objectTypes['adsk.fusion.TimelineObject'] = adsk.fusion.TimelineObject;
//     adsk.fusion.TimelineObject.cast = function (object) {
//         return object instanceof adsk.fusion.TimelineObject ? object : null;
//     };

//     // Gets and sets if this object is suppressed.
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'isSuppressed', {
//         get : function () {
//             var result = this._execute('isSuppressed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSuppressed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parent group, if this object is part of a group.
//     // Returns null if this object is not part of a group.
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'parentGroup', {
//         get : function () {
//             var result = this._execute('parentGroup');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineGroup) : null;
//         }
//     });

//     // Returns the position of this item within the timeline where
//     // the first item has an index of 0.
//     // This property can return -1 in the two cases where this object
//     // is not currently represented in the timeline. The two cases are:
//     // 1. When this is a TimelineGroup object and the group is expanded.
//     // 2. When this object is part of a group and the group is collapsed.
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'index', {
//         get : function () {
//             var result = this._execute('index');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this item is currently not being computed
//     // because it has been rolled back.
//     // If this is a timelineGroup object and the group is expanded
//     // the value of this property should be ignored.
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'isRolledBack', {
//         get : function () {
//             var result = this._execute('isRolledBack');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the entity associated with this timeline object.
//     // Edit operations can be performed by getting the object
//     // representing the associated entity and using the methods
//     // and properties on that entity to make changes.
//     // Returns null if this is a TimelineGroup object
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'entity', {
//         get : function () {
//             var result = this._execute('entity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Indicates if this TimelineObject represents a group. If True you can
//     // operate on this object as a TimelineGroup object.
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'isGroup', {
//         get : function () {
//             var result = this._execute('isGroup');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the name of this timeline object. This name is shared by the object
//     // the timeline object represents. For example, if the TimelineObject represents a Sketch
//     // and you change the name using the TimelineObject, the name of the sketch in the browser
//     // is also changed. The reverse is also true. Setting the name of an object; sketch, feature
//     // construction geometry, etc, will also change the name of the associated node in the timeline.
//     Object.defineProperty(adsk.fusion.TimelineObject.prototype, 'name', {
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

//     // Rolls the timeline by repositioning the marker to either before or after this object.
//     // This method will fail if this is a timelineGroup object and the group is expanded.
//     // rollBefore : Set rollBefore to true to reposition the marker before this object or to false to
//     // reposition the marker after this object
//     // Returns true if the move was successful
//     adsk.fusion.TimelineObject.prototype.rollTo = function (rollBefore) {
//         if (typeof rollBefore !== 'boolean') { throw new TypeError('rollBefore must be a boolean'); }
//         var args = {
//             rollBefore : rollBefore
//         };
//         var result = this._execute('rollTo', args);
//         return result ? result.value : undefined;
//     };

//     // Checks to see if this object can be reordered to the specified position.
//     // The default value of -1 indicates the end of the timeline.
//     // This method will fail if this is a timelineGroup object and the group is expanded.
//     // beforeIndex : The index number of the position in the timeline to check
//     // Returns true if the object can be reordered to the specified position
//     adsk.fusion.TimelineObject.prototype.canReorder = function (beforeIndex) {
//         if (beforeIndex === null || (beforeIndex !== undefined && !isFinite(beforeIndex))) { throw new TypeError('beforeIndex must be a number'); }
//         var args;
//         if (beforeIndex !== undefined) {
//             args = {};
//             args.beforeIndex = Number(beforeIndex);
//         }
//         var result = this._execute('canReorder', args);
//         return result ? result.value : undefined;
//     };

//     // Reorders this object to the position specified.
//     // The default value of -1 indicates the end of the timeline.
//     // beforeIndex : The index number of the position in the timeline to place this object before
//     // Returns true if the reorder operation was successful
//     // This method will fail and return false if this is a timelineGroup object and the
//     // group is expanded.
//     adsk.fusion.TimelineObject.prototype.reorder = function (beforeIndex) {
//         if (beforeIndex === null || (beforeIndex !== undefined && !isFinite(beforeIndex))) { throw new TypeError('beforeIndex must be a number'); }
//         var args;
//         if (beforeIndex !== undefined) {
//             args = {};
//             args.beforeIndex = Number(beforeIndex);
//         }
//         var result = this._execute('reorder', args);
//         return result ? result.value : undefined;
//     };

//     //=========== UserParameters ============
//     // Provides access to the User Parameters within a design and provides
//     // methods to create new user parameters.
//     adsk.fusion.UserParameters = function UserParameters(handle) {
//         if (!(this instanceof adsk.fusion.UserParameters)) {
//             return adsk.fusion.UserParameters.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.UserParameters.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.UserParameters.prototype.constructor = adsk.fusion.UserParameters;
//     adsk.fusion.UserParameters.interfaceId = 'adsk.fusion.UserParameters';
//     adsk.objectTypes['adsk.fusion.UserParameters'] = adsk.fusion.UserParameters;
//     adsk.fusion.UserParameters.cast = function (object) {
//         return object instanceof adsk.fusion.UserParameters ? object : null;
//     };

//     // Returns the number of parameters in the collection.
//     Object.defineProperty(adsk.fusion.UserParameters.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the design that owns the user parameters collection.
//     Object.defineProperty(adsk.fusion.UserParameters.prototype, 'design', {
//         get : function () {
//             var result = this._execute('design');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Design) : null;
//         }
//     });

//     // Function that returns the specified User Parameter using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection
//     // has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.UserParameters.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UserParameter) : null;
//     };

//     // Function that returns the specified User Parameter using the name of the parameter
//     // as it is displayed in the parameters dialog.
//     // name : The name of the User Parameter as it is displayed in the parameters dialog
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.UserParameters.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UserParameter) : null;
//     };

//     // Adds a new user parameter to the collection.
//     // name : The name of the parameter. This is the name shown in the parameters dialog
//     // value : ValueInput object that specifies the offset distance. If the ValueInput was created using
//     // a real, the value will be interpreted using the internal unit for the unit type specified by
//     // the "units" argument. For example, if the ValueInput was created using the real value 5 and
//     // the input to a "units" argument is any valid length unit the value will be interpreted at 5
//     // centimeters. If the "units" argument is a valid angle unit then the value will be interpreted
//     // as 5 radians.
//     // If the ValueInput was created using a string, the string is used as-is for the expression of
//     // the parameter. This means it must evaluate to the same unit type as that specified by the
//     // "units" argument and if no type is specified it will use the current default units specified
//     // for the current document. For example, if the ValueInput was created with the string "5 in",
//     // then the "units" argument must define any valid length so they are compatible. If the "units"
//     // argument is "cm" a parameter with the unit type of centimeter will be created and it will have
//     // the expression "5 in".
//     // When using a ValueInput created using a string, it's the same as creating a ValueInput in the
//     // user-interface. You can specify any valid expression, i.e. "5", "5 in", "5 in / 2", "5 + Length", etc.
//     // and you can choose from many different types of units. The only requirement is that the units
//     // must match in type. For example, they must both be lengths, or they must both be angles, etc.
//     // units : The units to use for the value of the parameter.
//     // Units specified must match the units specified (if any) in the ValueInput object.
//     // To create a parameter with no units you can specify either an empty string.
//     // comment : The comment to display in the parameters dialog. Specify an empty string ("") for no comment
//     // Returns the newly created UserParameter or null if the creation failed.
//     adsk.fusion.UserParameters.prototype.add = function (name, value, units, comment) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//         if (units === undefined || units === null || units.constructor !== String) { throw new TypeError('units must be a string'); }
//         if (comment === undefined || comment === null || comment.constructor !== String) { throw new TypeError('comment must be a string'); }
//         var args = {
//             name : name,
//             value : (value === null ? value : value.handle),
//             units : units,
//             comment : comment
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UserParameter) : null;
//     };

//     //=========== FusionArchiveExportOptions ============
//     // Defines that a Fusion Archive export is to be done and specifies the various options.
//     adsk.fusion.FusionArchiveExportOptions = function FusionArchiveExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.FusionArchiveExportOptions)) {
//             return adsk.fusion.FusionArchiveExportOptions.cast(handle);
//         }
//         adsk.fusion.ExportOptions.call(this, handle);
//     };
//     adsk.fusion.FusionArchiveExportOptions.prototype = Object.create(adsk.fusion.ExportOptions.prototype);
//     adsk.fusion.FusionArchiveExportOptions.prototype.constructor = adsk.fusion.FusionArchiveExportOptions;
//     adsk.fusion.FusionArchiveExportOptions.interfaceId = 'adsk.fusion.FusionArchiveExportOptions';
//     adsk.objectTypes['adsk.fusion.FusionArchiveExportOptions'] = adsk.fusion.FusionArchiveExportOptions;
//     adsk.fusion.FusionArchiveExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.FusionArchiveExportOptions ? object : null;
//     };

//     //=========== IGESExportOptions ============
//     // Defines that an IGES export is to be done and specifies the various options.
//     adsk.fusion.IGESExportOptions = function IGESExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.IGESExportOptions)) {
//             return adsk.fusion.IGESExportOptions.cast(handle);
//         }
//         adsk.fusion.ExportOptions.call(this, handle);
//     };
//     adsk.fusion.IGESExportOptions.prototype = Object.create(adsk.fusion.ExportOptions.prototype);
//     adsk.fusion.IGESExportOptions.prototype.constructor = adsk.fusion.IGESExportOptions;
//     adsk.fusion.IGESExportOptions.interfaceId = 'adsk.fusion.IGESExportOptions';
//     adsk.objectTypes['adsk.fusion.IGESExportOptions'] = adsk.fusion.IGESExportOptions;
//     adsk.fusion.IGESExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.IGESExportOptions ? object : null;
//     };

//     //=========== ModelParameter ============
//     // Represents a Model Parameter.
//     adsk.fusion.ModelParameter = function ModelParameter(handle) {
//         if (!(this instanceof adsk.fusion.ModelParameter)) {
//             return adsk.fusion.ModelParameter.cast(handle);
//         }
//         adsk.fusion.Parameter.call(this, handle);
//     };
//     adsk.fusion.ModelParameter.prototype = Object.create(adsk.fusion.Parameter.prototype);
//     adsk.fusion.ModelParameter.prototype.constructor = adsk.fusion.ModelParameter;
//     adsk.fusion.ModelParameter.interfaceId = 'adsk.fusion.ModelParameter';
//     adsk.objectTypes['adsk.fusion.ModelParameter'] = adsk.fusion.ModelParameter;
//     adsk.fusion.ModelParameter.cast = function (object) {
//         return object instanceof adsk.fusion.ModelParameter ? object : null;
//     };

//     // Returns the Collection containing the ModelParameter.
//     Object.defineProperty(adsk.fusion.ModelParameter.prototype, 'modelParameters', {
//         get : function () {
//             var result = this._execute('modelParameters');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameters) : null;
//         }
//     });

//     // Returns the Component containing the ModelParameter.
//     Object.defineProperty(adsk.fusion.ModelParameter.prototype, 'component', {
//         get : function () {
//             var result = this._execute('component');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // This property identifies what the parameter is used for. For an extrude, it
//     // could be "Depth", for a Workplane it could be "Offset".
//     Object.defineProperty(adsk.fusion.ModelParameter.prototype, 'role', {
//         get : function () {
//             var result = this._execute('role');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the object that created this parameter. For example,
//     // a feature, a sketch dimension, or a construction plane.
//     Object.defineProperty(adsk.fusion.ModelParameter.prototype, 'createdBy', {
//         get : function () {
//             var result = this._execute('createdBy');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     //=========== SATExportOptions ============
//     // Defines that a SAT export is to be done and specifies the various options.
//     adsk.fusion.SATExportOptions = function SATExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.SATExportOptions)) {
//             return adsk.fusion.SATExportOptions.cast(handle);
//         }
//         adsk.fusion.ExportOptions.call(this, handle);
//     };
//     adsk.fusion.SATExportOptions.prototype = Object.create(adsk.fusion.ExportOptions.prototype);
//     adsk.fusion.SATExportOptions.prototype.constructor = adsk.fusion.SATExportOptions;
//     adsk.fusion.SATExportOptions.interfaceId = 'adsk.fusion.SATExportOptions';
//     adsk.objectTypes['adsk.fusion.SATExportOptions'] = adsk.fusion.SATExportOptions;
//     adsk.fusion.SATExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.SATExportOptions ? object : null;
//     };

//     //=========== SMTExportOptions ============
//     // Defines that an SMT export is to be done and specifies the various options.
//     adsk.fusion.SMTExportOptions = function SMTExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.SMTExportOptions)) {
//             return adsk.fusion.SMTExportOptions.cast(handle);
//         }
//         adsk.fusion.ExportOptions.call(this, handle);
//     };
//     adsk.fusion.SMTExportOptions.prototype = Object.create(adsk.fusion.ExportOptions.prototype);
//     adsk.fusion.SMTExportOptions.prototype.constructor = adsk.fusion.SMTExportOptions;
//     adsk.fusion.SMTExportOptions.interfaceId = 'adsk.fusion.SMTExportOptions';
//     adsk.objectTypes['adsk.fusion.SMTExportOptions'] = adsk.fusion.SMTExportOptions;
//     adsk.fusion.SMTExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.SMTExportOptions ? object : null;
//     };

//     //=========== STEPExportOptions ============
//     // Defines that a STEP export is to be done and specifies the various options.
//     adsk.fusion.STEPExportOptions = function STEPExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.STEPExportOptions)) {
//             return adsk.fusion.STEPExportOptions.cast(handle);
//         }
//         adsk.fusion.ExportOptions.call(this, handle);
//     };
//     adsk.fusion.STEPExportOptions.prototype = Object.create(adsk.fusion.ExportOptions.prototype);
//     adsk.fusion.STEPExportOptions.prototype.constructor = adsk.fusion.STEPExportOptions;
//     adsk.fusion.STEPExportOptions.interfaceId = 'adsk.fusion.STEPExportOptions';
//     adsk.objectTypes['adsk.fusion.STEPExportOptions'] = adsk.fusion.STEPExportOptions;
//     adsk.fusion.STEPExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.STEPExportOptions ? object : null;
//     };

//     //=========== STLExportOptions ============
//     // Defines that a STL export is to be done and specifies the various options.
//     adsk.fusion.STLExportOptions = function STLExportOptions(handle) {
//         if (!(this instanceof adsk.fusion.STLExportOptions)) {
//             return adsk.fusion.STLExportOptions.cast(handle);
//         }
//         adsk.fusion.ExportOptions.call(this, handle);
//     };
//     adsk.fusion.STLExportOptions.prototype = Object.create(adsk.fusion.ExportOptions.prototype);
//     adsk.fusion.STLExportOptions.prototype.constructor = adsk.fusion.STLExportOptions;
//     adsk.fusion.STLExportOptions.interfaceId = 'adsk.fusion.STLExportOptions';
//     adsk.objectTypes['adsk.fusion.STLExportOptions'] = adsk.fusion.STLExportOptions;
//     adsk.fusion.STLExportOptions.cast = function (object) {
//         return object instanceof adsk.fusion.STLExportOptions ? object : null;
//     };

//     // Indicates if the STL file is to be an ASCII or binary STL format. The default is true.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'isBinaryFormat', {
//         get : function () {
//             var result = this._execute('isBinaryFormat');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isBinaryFormat', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // If the input is an Occurrence or the root Component, this specifies if a single file should be created containing
//     // all of the bodies within that occurrence or component or if multiple files should be created; one for each body.
//     // If multiple files are created, the body name is appended to the filename. The default is false.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'isOneFilePerBody', {
//         get : function () {
//             var result = this._execute('isOneFilePerBody');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isOneFilePerBody', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the current simple mesh refinement settings. Setting this property
//     // will reset the surfaceDeviation, normalDeviation, maximumEdgeLength, and aspectRatio
//     // to values that correspond to the specified mesh refinement. The default is MeshRefinementMedium
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'meshRefinement', {
//         get : function () {
//             var result = this._execute('meshRefinement');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('meshRefinement', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the current surface deviation, or the distance the mesh can deviate
//     // from the actual surface. This is defined in centimetre. Setting this property
//     // will automatically set the meshRefinement to MeshRefinementCustom. The default is the value
//     // associated with medium mesh refinement.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'surfaceDeviation', {
//         get : function () {
//             var result = this._execute('surfaceDeviation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('surfaceDeviation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the current normal deviation, or the angle the mesh normals at the vertices can deviate
//     // from the actual surface normals. This is defined in radians. Setting this property
//     // will automatically set the meshRefinement to MeshRefinementCustom. The default is the value
//     // associated with medium mesh refinement.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'normalDeviation', {
//         get : function () {
//             var result = this._execute('normalDeviation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('normalDeviation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the maximum length of any mesh edge. This is defined in centimetre. Setting this property
//     // will automatically set the meshRefinement to MeshRefinementCustom. The default is the value
//     // associated with medium mesh refinement.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'maximumEdgeLength', {
//         get : function () {
//             var result = this._execute('maximumEdgeLength');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('maximumEdgeLength', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the minimum aspect ratio for that triangles that are generated for the mesh. Setting this property
//     // will automatically set the meshRefinement to MeshRefinementCustom. The default is the value
//     // associated with medium mesh refinement.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'aspectRatio', {
//         get : function () {
//             var result = this._execute('aspectRatio');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('aspectRatio', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a list of the known available print utilities. These strings can be used to set the PrintUtility
//     // property to specify which print utility to open the STL file in.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'availablePrintUtilities', {
//         get : function () {
//             var result = this._execute('availablePrintUtilities');
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies which print utility to use when opening the STL file if the sendToPrintUtility property is true.
//     // The value of this property can be one of the strings returned by the availalbePrintUtilities property, which
//     // will specify one of the know print utilities. You can also specify a custom print utility by specifying
//     // the full path to the print utility executable. The default value of this property is the last setting specified
//     // in the user-interface.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'printUtility', {
//         get : function () {
//             var result = this._execute('printUtility');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('printUtility', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether the created STL file will be sent to the print utility specified by the printUtility property. If this
//     // is false a filename must be defined.
//     Object.defineProperty(adsk.fusion.STLExportOptions.prototype, 'sendToPrintUtility', {
//         get : function () {
//             var result = this._execute('sendToPrintUtility');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('sendToPrintUtility', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== TimelineGroup ============
//     // Represents a group in the timeline.
//     adsk.fusion.TimelineGroup = function TimelineGroup(handle) {
//         if (!(this instanceof adsk.fusion.TimelineGroup)) {
//             return adsk.fusion.TimelineGroup.cast(handle);
//         }
//         adsk.fusion.TimelineObject.call(this, handle);
//     };
//     adsk.fusion.TimelineGroup.prototype = Object.create(adsk.fusion.TimelineObject.prototype);
//     adsk.fusion.TimelineGroup.prototype.constructor = adsk.fusion.TimelineGroup;
//     adsk.fusion.TimelineGroup.interfaceId = 'adsk.fusion.TimelineGroup';
//     adsk.objectTypes['adsk.fusion.TimelineGroup'] = adsk.fusion.TimelineGroup;
//     adsk.fusion.TimelineGroup.cast = function (object) {
//         return object instanceof adsk.fusion.TimelineGroup ? object : null;
//     };

//     // Indicates if the group is collapsed or expanded.
//     Object.defineProperty(adsk.fusion.TimelineGroup.prototype, 'isCollapsed', {
//         get : function () {
//             var result = this._execute('isCollapsed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isCollapsed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The number of items in the group.
//     Object.defineProperty(adsk.fusion.TimelineGroup.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes the group with the option of deleting or keeping the contents.
//     // deleteGroupAndContents : Indicates if the group and its contents should be deleted or if only the group
//     // should be deleted and the contents kept and expanded. A value of true will delete
//     // the group and its contents.
//     //
//     adsk.fusion.TimelineGroup.prototype.deleteMe = function (deleteGroupAndContents) {
//         if (typeof deleteGroupAndContents !== 'boolean') { throw new TypeError('deleteGroupAndContents must be a boolean'); }
//         var args = {
//             deleteGroupAndContents : deleteGroupAndContents
//         };
//         var result = this._execute('deleteMe', args);
//         return result ? result.value : undefined;
//     };

//     // Function that returns the specified timeline object within the group using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.TimelineGroup.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//     };

//     //=========== UserParameter ============
//     // Represents a User Parameter.
//     adsk.fusion.UserParameter = function UserParameter(handle) {
//         if (!(this instanceof adsk.fusion.UserParameter)) {
//             return adsk.fusion.UserParameter.cast(handle);
//         }
//         adsk.fusion.Parameter.call(this, handle);
//     };
//     adsk.fusion.UserParameter.prototype = Object.create(adsk.fusion.Parameter.prototype);
//     adsk.fusion.UserParameter.prototype.constructor = adsk.fusion.UserParameter;
//     adsk.fusion.UserParameter.interfaceId = 'adsk.fusion.UserParameter';
//     adsk.objectTypes['adsk.fusion.UserParameter'] = adsk.fusion.UserParameter;
//     adsk.fusion.UserParameter.cast = function (object) {
//         return object instanceof adsk.fusion.UserParameter ? object : null;
//     };

//     // Returns the Collection containing the UserParameter.
//     Object.defineProperty(adsk.fusion.UserParameter.prototype, 'userParameters', {
//         get : function () {
//             var result = this._execute('userParameters');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UserParameters) : null;
//         }
//     });

//     // Returns the Design containing the UserParameter.
//     Object.defineProperty(adsk.fusion.UserParameter.prototype, 'design', {
//         get : function () {
//             var result = this._execute('design');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Design) : null;
//         }
//     });

//     // Deletes the user parameter
//     // A parameter can only be deleted if it is a UserParameter and
//     // it is not referenced by other parameters.
//     // Returns a bool indicating if the delete was successful or not.
//     // Bug!!! Currently returning true if the parameter can't be deleted because it is
//     // being referenced by other parameters.
//     adsk.fusion.UserParameter.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     return adsk;
// }));