//=========== ConstructionAxes ============
// Provides access to the construction axes within a component and provides
// methods to create new construction axes.
interface ConstructionAxes {
    //     if (!(this instanceof adsk.fusion.ConstructionAxes)) {
    //         return adsk.fusion.ConstructionAxes.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxes.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionAxes.prototype.constructor = adsk.fusion.ConstructionAxes;
    // adsk.fusion.ConstructionAxes.interfaceId = 'adsk.fusion.ConstructionAxes';
    // adsk.objectTypes['adsk.fusion.ConstructionAxes'] = adsk.fusion.ConstructionAxes;
    // adsk.fusion.ConstructionAxes.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxes ? object : null;
    // };

    // // The number of construction axes in the collection.
    // Object.defineProperty(adsk.fusion.ConstructionAxes.prototype, 'count', {
    //     get : function () {
    //         var result = this._execute('count');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // The component that owns this collection.
    // Object.defineProperty(adsk.fusion.ConstructionAxes.prototype, 'component', {
    //     get : function () {
    //         var result = this._execute('component');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //     }
    // });

    // // Function that returns the specified construction axis using an index into the collection.
    // // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // // Returns the specified item or null if an invalid index was specified.
    // adsk.fusion.ConstructionAxes.prototype.item = function (index) {
    //     if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //     var args = {
    //         index : Number(index)
    //     };
    //     var result = this._execute('item', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    // };

    // // Returns the specified construction axis using the name of the construction
    // // axis as it is displayed in the browser.
    // // name : The name of the axis as it is displayed in the browser
    // // Returns the specified item or null if an invalid name was specified.
    // adsk.fusion.ConstructionAxes.prototype.itemByName = function (name) {
    //     if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //     var args = {
    //         name : name
    //     };
    //     var result = this._execute('itemByName', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    // };

    // // Create a ConstructionAxisInput object that is in turn used to create a ConstructionAxis.
    // // occurrenceForCreation : A creation occurrence is needed if the input is in another component AND the
    // // construction axis is not in the root component. The occurrenceForCreation is analogous
    // // to the active occurrence in the UI.
    // // Returns a ConstructionAxisInput object
    // adsk.fusion.ConstructionAxes.prototype.createInput = function (occurrenceForCreation) {
    //     if (occurrenceForCreation === null || (occurrenceForCreation !== undefined && occurrenceForCreation !== null && !(occurrenceForCreation instanceof adsk.fusion.Occurrence))) { throw new TypeError('occurrenceForCreation must be a adsk.fusion.Occurrence'); }
    //     var args;
    //     if (occurrenceForCreation !== undefined) {
    //         args = {};
    //         args.occurrenceForCreation = (occurrenceForCreation === null ? occurrenceForCreation : occurrenceForCreation.handle);
    //     }
    //     var result = this._execute('createInput', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxisInput) : null;
    // };

    // // Creates and adds a new ConstructionAxis using the creation parameters in
    // // the ConstructionAxisInput.
    // // input : A ConstructionAxisInput object
    // // Returns the newly created construction axis or null if the creation failed.
    // adsk.fusion.ConstructionAxes.prototype.add = function (input) {
    //     if (input !== null && !(input instanceof adsk.fusion.ConstructionAxisInput)) { throw new TypeError('input must be a adsk.fusion.ConstructionAxisInput'); }
    //     var args = {
    //         input : (input === null ? input : input.handle)
    //     };
    //     var result = this._execute('add', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    // };
}
//=========== ConstructionAxis ============
// ConstructionAxis Object
interface ConstructionAxis {
    //     if (!(this instanceof adsk.fusion.ConstructionAxis)) {
    //         return adsk.fusion.ConstructionAxis.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxis.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionAxis.prototype.constructor = adsk.fusion.ConstructionAxis;
    // adsk.fusion.ConstructionAxis.interfaceId = 'adsk.fusion.ConstructionAxis';
    // adsk.objectTypes['adsk.fusion.ConstructionAxis'] = adsk.fusion.ConstructionAxis;
    // adsk.fusion.ConstructionAxis.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxis ? object : null;
    // };

    // // Returns an infinite line that represents the position and orientation of the
    // // construction axis. This geometry is defined in the AssemblyContext of this
    // // ConstructionAxis.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'geometry', {
    //     get : function () {
    //         var result = this._execute('geometry');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.InfiniteLine3D) : null;
    //     }
    // });

    // // The name of the construction axis as it is shown in the browser.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'name', {
    //     get : function () {
    //         var result = this._execute('name');
    //         return result ? result.value : undefined;
    //     },
    //     set : function (value) {
    //         if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('name', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the construction axis definition object which provides access to the information
    // // defining the construction axis.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'definition', {
    //     get : function () {
    //         var result = this._execute('definition');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxisDefinition) : null;
    //     }
    // });

    // // Indicates if this construction axis is parametric or not.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'isParametric', {
    //     get : function () {
    //         var result = this._execute('isParametric');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Indicates if this construction axis can be deleted. Base
    // // construction axes can not be deleted.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'isDeletable', {
    //     get : function () {
    //         var result = this._execute('isDeletable');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Indicates if the light bulb (as displayed in the browser) is on.
    // // A construction axis will only be visible if it's light bulb, and that of it's
    // // containing folder and parent component/s are also on.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'isLightBulbOn', {
    //     get : function () {
    //         var result = this._execute('isLightBulbOn');
    //         return result ? result.value : undefined;
    //     },
    //     set : function (value) {
    //         if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('isLightBulbOn', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Gets if the construction plane is visible.
    // // This property is affected by the AssemblyContext of the construction axis.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'isVisible', {
    //     get : function () {
    //         var result = this._execute('isVisible');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the parent component or base feature. If both the design and the construction
    // // axis are parametric, the parent will be a component. If the design is parametric and
    // // the construction axis is not, the parent will be a base feature. If
    // // the design is not parametric the parent will be a component.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'parent', {
    //     get : function () {
    //         var result = this._execute('parent');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Returns the component this construction plane belongs to.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'component', {
    //     get : function () {
    //         var result = this._execute('component');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //     }
    // });

    // // Returns the timeline object associated with this construction axis.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'timelineObject', {
    //     get : function () {
    //         var result = this._execute('timelineObject');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
    //     }
    // });

    // // Returns the assembly occurrence (i.e. the occurrence) of this object
    // // in an assembly. This is only valid in the case where this is acting
    // // as a proxy in an assembly. Returns null in the case where the object
    // // is not in the context of an assembly but is already the native object.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'assemblyContext', {
    //     get : function () {
    //         var result = this._execute('assemblyContext');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //     }
    // });

    // // The NativeObject is the object outside the context of an assembly and
    // // in the context of it's parent component.
    // // Returns null in the case where this object is not in the context of
    // // an assembly but is already the native object.
    // Object.defineProperty(adsk.fusion.ConstructionAxis.prototype, 'nativeObject', {
    //     get : function () {
    //         var result = this._execute('nativeObject');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    //     }
    // });

    // // Deletes the construction axis.
    // // Returns a bool indicating if the delete was successful or not.
    // adsk.fusion.ConstructionAxis.prototype.deleteMe = function () {
    //     var result = this._execute('deleteMe');
    //     return result ? result.value : undefined;
    // };

    // // Creates or returns a proxy for the native object
    // // - i.e. a new object that represents this object but adds the assembly context
    // // defined by the input occurrence.
    // // occurrence : The occurrence that defines the context to create the proxy in.
    // // Returns the proxy object or null if this isn't the NativeObject.
    // adsk.fusion.ConstructionAxis.prototype.createForAssemblyContext = function (occurrence) {
    //     if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //     var args = {
    //         occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //     };
    //     var result = this._execute('createForAssemblyContext', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    // };
}

//=========== ConstructionAxisDefinition ============
// A Base class to return the information (possibly parametric) used to
// define a ConstructionAxis.
interface ConstructionAxisDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisDefinition)) {
    //         return adsk.fusion.ConstructionAxisDefinition.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisDefinition.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionAxisDefinition.prototype.constructor = adsk.fusion.ConstructionAxisDefinition;
    // adsk.fusion.ConstructionAxisDefinition.interfaceId = 'adsk.fusion.ConstructionAxisDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisDefinition'] = adsk.fusion.ConstructionAxisDefinition;
    // adsk.fusion.ConstructionAxisDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisDefinition ? object : null;
    // };

    // // Returns the ConstructionAxis object
    // Object.defineProperty(adsk.fusion.ConstructionAxisDefinition.prototype, 'parentConstructionAxis', {
    //     get : function () {
    //         var result = this._execute('parentConstructionAxis');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    //     }
    // });
}
//=========== ConstructionAxisInput ============
// A ConstructionAxisInput is a throwaway object used to create a ConstructionAxis
// The usage pattern is:
// a. create a ConstructionAxisInput (ConstructionAxes.CreateInput)
// b. call one of the member functions to specify how the ConstructionAxis is created
// c. create the ConstructionAxis (call ConstructionAxes.Add)
// d. stop referencing the ConstructionAxisInput (so it gets deleted).
interface ConstructionAxisInput {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisInput)) {
    //         return adsk.fusion.ConstructionAxisInput.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisInput.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionAxisInput.prototype.constructor = adsk.fusion.ConstructionAxisInput;
    // adsk.fusion.ConstructionAxisInput.interfaceId = 'adsk.fusion.ConstructionAxisInput';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisInput'] = adsk.fusion.ConstructionAxisInput;
    // adsk.fusion.ConstructionAxisInput.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisInput ? object : null;
    // };

    // // In order for geometry to be transformed correctly, an Occurrence for creation needs
    // // to be specified when the ConstructionAxis is created based on geometry
    // // (e.g. a straight edge) in another component AND (the ConstructionAxis) is not in the
    // // root component. The CreationOccurrence is analogous to the active occurrence in the UI
    // Object.defineProperty(adsk.fusion.ConstructionAxisInput.prototype, 'creationOccurrence', {
    //     get : function () {
    //         var result = this._execute('creationOccurrence');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('creationOccurrence', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // This input method is for creating a non-parametric construction axis whose position
    // // in space is defined by an InfiniteLine3D object.
    // // line : An InFiniteLine3D object
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByLine = function (line) {
    //     if (line !== null && !(line instanceof adsk.core.InfiniteLine3D)) { throw new TypeError('line must be a adsk.core.InfiniteLine3D'); }
    //     var args = {
    //         line : (line === null ? line : line.handle)
    //     };
    //     var result = this._execute('setByLine', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating an axis coincident with the axis of a
    // // cylindrical, conical or torus face.
    // // This can result in a parametric or non-parametric construction axis depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // circularFace : The face from a cylinder, cone, or torus.
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByCircularFace = function (circularFace) {
    //     if (circularFace !== null && !(circularFace instanceof adsk.fusion.BRepFace)) { throw new TypeError('circularFace must be a adsk.fusion.BRepFace'); }
    //     var args = {
    //         circularFace : (circularFace === null ? circularFace : circularFace.handle)
    //     };
    //     var result = this._execute('setByCircularFace', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating an axis that is normal to a face
    // // at a specified point.
    // // face : A face (BRepFace object) to create the axis normal to.
    // // pointEntity : A construction point, sketch point or vertex the axis is to pass thru
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByPerpendicularAtPoint = function (face, pointEntity) {
    //     if (face !== null && !(face instanceof adsk.fusion.BRepFace)) { throw new TypeError('face must be a adsk.fusion.BRepFace'); }
    //     if (pointEntity !== null && !(pointEntity instanceof adsk.core.Base)) { throw new TypeError('pointEntity must be a adsk.core.Base'); }
    //     var args = {
    //         face : (face === null ? face : face.handle),
    //         pointEntity : (pointEntity === null ? pointEntity : pointEntity.handle)
    //     };
    //     var result = this._execute('setByPerpendicularAtPoint', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction axis coincident with the
    // // intersection of two planes or planar faces.
    // // This will fail if the the two planes are parallel.
    // // This can result in a parametric or non-parametric construction axis depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // planarEntityOne : The first planar face or construction plane to intersect
    // // planarEntityTwo : The second planar face or construction plane to intersect
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByTwoPlanes = function (planarEntityOne, planarEntityTwo) {
    //     if (planarEntityOne !== null && !(planarEntityOne instanceof adsk.core.Base)) { throw new TypeError('planarEntityOne must be a adsk.core.Base'); }
    //     if (planarEntityTwo !== null && !(planarEntityTwo instanceof adsk.core.Base)) { throw new TypeError('planarEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         planarEntityOne : (planarEntityOne === null ? planarEntityOne : planarEntityOne.handle),
    //         planarEntityTwo : (planarEntityTwo === null ? planarEntityTwo : planarEntityTwo.handle)
    //     };
    //     var result = this._execute('setByTwoPlanes', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction axis that passes through the two points
    // // (work points, sketch points or vertices).
    // // This will fail if the the two points are coincident.
    // // This can result in a parametric or non-parametric construction axis depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // pointEntityOne : The first construction point, sketch point or vertex the axis passes through
    // // pointEntityTwo : The second construction point, sketch point or vertex the axis passes through
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByTwoPoints = function (pointEntityOne, pointEntityTwo) {
    //     if (pointEntityOne !== null && !(pointEntityOne instanceof adsk.core.Base)) { throw new TypeError('pointEntityOne must be a adsk.core.Base'); }
    //     if (pointEntityTwo !== null && !(pointEntityTwo instanceof adsk.core.Base)) { throw new TypeError('pointEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         pointEntityOne : (pointEntityOne === null ? pointEntityOne : pointEntityOne.handle),
    //         pointEntityTwo : (pointEntityTwo === null ? pointEntityTwo : pointEntityTwo.handle)
    //     };
    //     var result = this._execute('setByTwoPoints', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction axis from a specified linear/circular edge
    // // or sketch curve.
    // // This can result in a parametric or non-parametric construction axis depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // edgeEntity : A linear/circular edge, construction line, or sketch line
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByEdge = function (edgeEntity) {
    //     if (edgeEntity !== null && !(edgeEntity instanceof adsk.core.Base)) { throw new TypeError('edgeEntity must be a adsk.core.Base'); }
    //     var args = {
    //         edgeEntity : (edgeEntity === null ? edgeEntity : edgeEntity.handle)
    //     };
    //     var result = this._execute('setByEdge', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method if for creating a construction axis normal to a specified face
    // // or sketch profile and that passes through a specified point.
    // // This can result in a parametric or non-parametric construction axis depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // face : The face (BRepFace object) to create the axis normal to.
    // // pointEntity : A construction point, sketch point or vertex the axis passes through.
    // // This point does not have to lie on the face.
    // // Returns true if the creation of the ConstructionAxisInput is successful.
    // adsk.fusion.ConstructionAxisInput.prototype.setByNormalToFaceAtPoint = function (face, pointEntity) {
    //     if (face !== null && !(face instanceof adsk.fusion.BRepFace)) { throw new TypeError('face must be a adsk.fusion.BRepFace'); }
    //     if (pointEntity !== null && !(pointEntity instanceof adsk.core.Base)) { throw new TypeError('pointEntity must be a adsk.core.Base'); }
    //     var args = {
    //         face : (face === null ? face : face.handle),
    //         pointEntity : (pointEntity === null ? pointEntity : pointEntity.handle)
    //     };
    //     var result = this._execute('setByNormalToFaceAtPoint', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlane ============
// ConstructionPlane Object
interface ConstructionPlane {
    //     if (!(this instanceof adsk.fusion.ConstructionPlane)) {
    //         return adsk.fusion.ConstructionPlane.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlane.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPlane.prototype.constructor = adsk.fusion.ConstructionPlane;
    // adsk.fusion.ConstructionPlane.interfaceId = 'adsk.fusion.ConstructionPlane';
    // adsk.objectTypes['adsk.fusion.ConstructionPlane'] = adsk.fusion.ConstructionPlane;
    // adsk.fusion.ConstructionPlane.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlane ? object : null;
    // };

    // // Returns a plane that represents the position and orientation of the construction plane.
    // // This geometry is defined in the AssemblyContext of this ConstructionPlane.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'geometry', {
    //     get : function () {
    //         var result = this._execute('geometry');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Plane) : null;
    //     }
    // });

    // // Returns the name of the construction plane as it is shown in the browser.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'name', {
    //     get : function () {
    //         var result = this._execute('name');
    //         return result ? result.value : undefined;
    //     },
    //     set : function (value) {
    //         if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('name', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the ConstructionPlaneDefinition object which provides access to the information
    // // defining this ConstructionPlane.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'definition', {
    //     get : function () {
    //         var result = this._execute('definition');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlaneDefinition) : null;
    //     }
    // });

    // // Indicates if this construction plane can be deleted. Base
    // // construction planes can not be deleted.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'isDeletable', {
    //     get : function () {
    //         var result = this._execute('isDeletable');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Indicates if this construction plane is parametric or not.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'isParametric', {
    //     get : function () {
    //         var result = this._execute('isParametric');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Indicates if the light bulb (as displayed in the browser) is on.
    // // A construction plane will only be visible if it's light bulb, and that of it's
    // // containing folder and parent component/s are also on.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'isLightBulbOn', {
    //     get : function () {
    //         var result = this._execute('isLightBulbOn');
    //         return result ? result.value : undefined;
    //     },
    //     set : function (value) {
    //         if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('isLightBulbOn', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Indicates if the construction plane is visible.
    // // This property is affected by the AssemblyContext of the construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'isVisible', {
    //     get : function () {
    //         var result = this._execute('isVisible');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Gets and sets the display size of the construction plane. The bounding
    // // box defines the min and max corners of the plane as defined in the
    // // 2D space of the construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'displayBounds', {
    //     get : function () {
    //         var result = this._execute('displayBounds');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox2D) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.core.BoundingBox2D)) { throw new TypeError('value must be a adsk.core.BoundingBox2D'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('displayBounds', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the parent component or base feature. If both the design and the construction
    // // plane are parametric, the parent will be a component. If the design is parametric and
    // // the construction plane is not, the parent will be a base feature. If
    // // the design is not parametric the parent will be a component.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'parent', {
    //     get : function () {
    //         var result = this._execute('parent');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Returns the component this construction plane belongs to.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'component', {
    //     get : function () {
    //         var result = this._execute('component');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //     }
    // });

    // // Returns the timeline object associated with this construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'timelineObject', {
    //     get : function () {
    //         var result = this._execute('timelineObject');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
    //     }
    // });

    // // Returns the assembly occurrence (i.e. the occurrence) of this object
    // // in an assembly. This is only valid in the case where this is acting
    // // as a proxy in an assembly. Returns null in the case where the object
    // // is not in the context of an assembly but is already the native object.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'assemblyContext', {
    //     get : function () {
    //         var result = this._execute('assemblyContext');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //     }
    // });

    // // The NativeObject is the object outside the context of an assembly.
    // // Returns null in the case where this object is not in the context of
    // // an assembly but is already the native object.
    // Object.defineProperty(adsk.fusion.ConstructionPlane.prototype, 'nativeObject', {
    //     get : function () {
    //         var result = this._execute('nativeObject');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    //     }
    // });

    // // Deletes the construction plane.
    // // Returns a bool indicating if the delete was successful or not.
    // adsk.fusion.ConstructionPlane.prototype.deleteMe = function () {
    //     var result = this._execute('deleteMe');
    //     return result ? result.value : undefined;
    // };

    // // Creates or returns a proxy for the native object
    // // - i.e. a new object that represents this object but adds the assembly context
    // // defined by the input occurrence.
    // // occurrence : The occurrence that defines the context to create the proxy in.
    // // Returns the proxy object or null if this isn't the NativeObject.
    // adsk.fusion.ConstructionPlane.prototype.createForAssemblyContext = function (occurrence) {
    //     if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //     var args = {
    //         occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //     };
    //     var result = this._execute('createForAssemblyContext', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    // };

    //=========== ConstructionPlaneDefinition ============
    // A Base class to return the information, possibly parametric, used to define the ConstructionPlane.
interface ConstructionPlaneDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneDefinition)) {
    //         return adsk.fusion.ConstructionPlaneDefinition.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneDefinition.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPlaneDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneDefinition;
    // adsk.fusion.ConstructionPlaneDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneDefinition'] = adsk.fusion.ConstructionPlaneDefinition;
    // adsk.fusion.ConstructionPlaneDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneDefinition ? object : null;
    // };

    // // Returns the ConstructionPlane object
    // Object.defineProperty(adsk.fusion.ConstructionPlaneDefinition.prototype, 'parentConstructionPlane', {
    //     get : function () {
    //         var result = this._execute('parentConstructionPlane');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    //     }
    // });
}

//=========== ConstructionPlaneInput ============
// A ConstructionPlaneInput is a throwaway object used to create a ConstructionPlane
// The usage pattern is:
// a. create a ConstructionPlaneInput (ConstructionPlanes.CreateInput)
// b. call one of the member functions to specify how the ConstructionPlane is created
// c. create the ConstructionPlane (call ConstructionPlanes.Add)
// d. stop referencing the ConstructionPlaneInput (so it gets deleted).
interface ConstructionPlaneInput {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneInput)) {
    //         return adsk.fusion.ConstructionPlaneInput.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneInput.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPlaneInput.prototype.constructor = adsk.fusion.ConstructionPlaneInput;
    // adsk.fusion.ConstructionPlaneInput.interfaceId = 'adsk.fusion.ConstructionPlaneInput';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneInput'] = adsk.fusion.ConstructionPlaneInput;
    // adsk.fusion.ConstructionPlaneInput.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneInput ? object : null;
    // };

    // // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
    // // specified when the ConstructionPlane is created based on geometry (e.g. a planarEntity)
    // // in another component AND (the ConstructionPlane) is not in the root component.
    // // The CreationOccurrence is analogous to the active occurrence in the UI
    // Object.defineProperty(adsk.fusion.ConstructionPlaneInput.prototype, 'creationOccurrence', {
    //     get : function () {
    //         var result = this._execute('creationOccurrence');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('creationOccurrence', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // This input method is for creating a non-parametric construction plane positioned in
    // // space as defined by the input Plane object.
    // // plane : A transient plane object
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // adsk.fusion.ConstructionPlaneInput.prototype.setByPlane = function (plane) {
    //     if (plane !== null && !(plane instanceof adsk.core.Plane)) { throw new TypeError('plane must be a adsk.core.Plane'); }
    //     var args = {
    //         plane : (plane === null ? plane : plane.handle)
    //     };
    //     var result = this._execute('setByPlane', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane that is offset from a planar
    // // face or construction plane at a specified distance. This can result in
    // // a parametric or non-parametric construction plane depending on whether the parent
    // // component is parametric or is a direct edit component.
    // // planarEntity : A plane, planar face or construction plane from which to create the offset plane
    // // offset : ValueInput object that specifies the offset distance for the plane
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // adsk.fusion.ConstructionPlaneInput.prototype.setByOffset = function (planarEntity, offset) {
    //     if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
    //     if (offset !== null && !(offset instanceof adsk.core.ValueInput)) { throw new TypeError('offset must be a adsk.core.ValueInput'); }
    //     var args = {
    //         planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
    //         offset : (offset === null ? offset : offset.handle)
    //     };
    //     var result = this._execute('setByOffset', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane through an edge, axis or line
    // // at a specified angle. This can result in a parametric or non-parametric construction
    // // plane depending on whether the parent component is parametric or is a direct edit
    // // component.
    // // linearEntity : The axis about which to rotate the plane
    // // angle : The angle at which to create the plane
    // // planarEntity : The planar face or construction plane the angle is measured from.
    // // Returns true if the creation of the ConstructionPlaneInput is successful
    // adsk.fusion.ConstructionPlaneInput.prototype.setByAngle = function (linearEntity, angle, planarEntity) {
    //     if (linearEntity !== null && !(linearEntity instanceof adsk.core.Base)) { throw new TypeError('linearEntity must be a adsk.core.Base'); }
    //     if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //     if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
    //     var args = {
    //         linearEntity : (linearEntity === null ? linearEntity : linearEntity.handle),
    //         angle : (angle === null ? angle : angle.handle),
    //         planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
    //     };
    //     var result = this._execute('setByAngle', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane tangent to a cylindrical or
    // // conical face at a specified point. This can result in a parametric or non-parametric construction
    // // plane depending on whether the parent component is parametric or is a direct edit
    // // component.
    // // tangentFace : A cylindrical or conical face to create the plane tangent to
    // // angle : The angle relative to the planarEntity input at which to create the tangent plane
    // // planarEntity : The planar face or construction plane the tangent is measured from.
    // // Returns true if the creation of the ConstructionPlaneInput is successful
    // adsk.fusion.ConstructionPlaneInput.prototype.setByTangent = function (tangentFace, angle, planarEntity) {
    //     if (tangentFace !== null && !(tangentFace instanceof adsk.fusion.BRepFace)) { throw new TypeError('tangentFace must be a adsk.fusion.BRepFace'); }
    //     if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //     if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
    //     var args = {
    //         tangentFace : (tangentFace === null ? tangentFace : tangentFace.handle),
    //         angle : (angle === null ? angle : angle.handle),
    //         planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
    //     };
    //     var result = this._execute('setByTangent', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane at the midpoint between
    // // two planar faces or construction planes. This can result in a parametric or
    // // non-parametric construction plane depending on whether the parent component is
    // // parametric or is a direct edit component.
    // // planarEntityOne : The first planar face or construction plane to create a bisecting plane between
    // // planarEntityTwo : The second planar face or construction plane to create a bisecting plane between
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // // This will fail if the two planes are co-planar.
    // adsk.fusion.ConstructionPlaneInput.prototype.setByTwoPlanes = function (planarEntityOne, planarEntityTwo) {
    //     if (planarEntityOne !== null && !(planarEntityOne instanceof adsk.core.Base)) { throw new TypeError('planarEntityOne must be a adsk.core.Base'); }
    //     if (planarEntityTwo !== null && !(planarEntityTwo instanceof adsk.core.Base)) { throw new TypeError('planarEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         planarEntityOne : (planarEntityOne === null ? planarEntityOne : planarEntityOne.handle),
    //         planarEntityTwo : (planarEntityTwo === null ? planarEntityTwo : planarEntityTwo.handle)
    //     };
    //     var result = this._execute('setByTwoPlanes', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane that passes through two
    // // coplanar linear entities or axes.
    // // Defines a plane by specifying two coplanar linear entities. This can result in a
    // // parametric or non-parametric construction plane depending on whether the parent
    // // component is parametric or is a direct edit component.
    // // linearEntityOne : The first of two coplanar linear entities to define the plane
    // // linearEntityTwo : The second of two coplanar linear entities to define the plane
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // // This will fail if the two linear entities are not coplanar.
    // adsk.fusion.ConstructionPlaneInput.prototype.setByTwoEdges = function (linearEntityOne, linearEntityTwo) {
    //     if (linearEntityOne !== null && !(linearEntityOne instanceof adsk.core.Base)) { throw new TypeError('linearEntityOne must be a adsk.core.Base'); }
    //     if (linearEntityTwo !== null && !(linearEntityTwo instanceof adsk.core.Base)) { throw new TypeError('linearEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         linearEntityOne : (linearEntityOne === null ? linearEntityOne : linearEntityOne.handle),
    //         linearEntityTwo : (linearEntityTwo === null ? linearEntityTwo : linearEntityTwo.handle)
    //     };
    //     var result = this._execute('setByTwoEdges', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane through three points that
    // // define a triangle. This can result in a parametric or non-parametric construction
    // // plane depending on whether the parent component is parametric or is a direct edit
    // // component.
    // // pointEntityOne : The first construction point, sketch point or vertex in the triangle
    // // pointEntityTwo : The second construction point, sketch point or vertex in the triangle
    // // pointEntityThree : The third construction point, sketch point or vertex in the triangle
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // // This will fail if the points do not form a triangle (no two
    // // points can be coincident and all three cannot be colinear).
    // adsk.fusion.ConstructionPlaneInput.prototype.setByThreePoints = function (pointEntityOne, pointEntityTwo, pointEntityThree) {
    //     if (pointEntityOne !== null && !(pointEntityOne instanceof adsk.core.Base)) { throw new TypeError('pointEntityOne must be a adsk.core.Base'); }
    //     if (pointEntityTwo !== null && !(pointEntityTwo instanceof adsk.core.Base)) { throw new TypeError('pointEntityTwo must be a adsk.core.Base'); }
    //     if (pointEntityThree !== null && !(pointEntityThree instanceof adsk.core.Base)) { throw new TypeError('pointEntityThree must be a adsk.core.Base'); }
    //     var args = {
    //         pointEntityOne : (pointEntityOne === null ? pointEntityOne : pointEntityOne.handle),
    //         pointEntityTwo : (pointEntityTwo === null ? pointEntityTwo : pointEntityTwo.handle),
    //         pointEntityThree : (pointEntityThree === null ? pointEntityThree : pointEntityThree.handle)
    //     };
    //     var result = this._execute('setByThreePoints', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane tangent to a face
    // // and aligned to a point. This can result in a parametric or non-parametric
    // // construction plane depending on whether the parent component is parametric or is a
    // // direct edit component.
    // // tangentFace : A face to create the plane tangent to
    // // pointEntity : A construction point, sketch point or vertex the tangent plane aligns to.
    // // This point need not lie on the tangent face.
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // adsk.fusion.ConstructionPlaneInput.prototype.setByTangentAtPoint = function (tangentFace, pointEntity) {
    //     if (tangentFace !== null && !(tangentFace instanceof adsk.fusion.BRepFace)) { throw new TypeError('tangentFace must be a adsk.fusion.BRepFace'); }
    //     if (pointEntity !== null && !(pointEntity instanceof adsk.core.Base)) { throw new TypeError('pointEntity must be a adsk.core.Base'); }
    //     var args = {
    //         tangentFace : (tangentFace === null ? tangentFace : tangentFace.handle),
    //         pointEntity : (pointEntity === null ? pointEntity : pointEntity.handle)
    //     };
    //     var result = this._execute('setByTangentAtPoint', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction plane normal to, and at
    // // specified distance along, a path defined by an edge or sketch profile.
    // // This can result in a parametric or non-parametric
    // // construction plane depending on whether the parent component is parametric or is a
    // // direct edit component.
    // // pathEntity : The path can be an edge, sketch curve, or a path of multiple entities.
    // // distance : The distance is a value from 0 to 1 indicating the position along the path where 0
    // // is at the start and 1 is at the end.
    // // Returns true if the creation of the ConstructionPlaneInput is successful.
    // adsk.fusion.ConstructionPlaneInput.prototype.setByDistanceOnPath = function (pathEntity, distance) {
    //     if (pathEntity !== null && !(pathEntity instanceof adsk.core.Base)) { throw new TypeError('pathEntity must be a adsk.core.Base'); }
    //     if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
    //     var args = {
    //         pathEntity : (pathEntity === null ? pathEntity : pathEntity.handle),
    //         distance : (distance === null ? distance : distance.handle)
    //     };
    //     var result = this._execute('setByDistanceOnPath', args);
    //     return result ? result.value : undefined;
    // };
}

//=========== ConstructionPlanes ============
// Provides access to the construction planes within a component and provides
// methods to create new construction planes.
interface ConstructionPlanes {
    //     if (!(this instanceof adsk.fusion.ConstructionPlanes)) {
    //         return adsk.fusion.ConstructionPlanes.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlanes.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPlanes.prototype.constructor = adsk.fusion.ConstructionPlanes;
    // adsk.fusion.ConstructionPlanes.interfaceId = 'adsk.fusion.ConstructionPlanes';
    // adsk.objectTypes['adsk.fusion.ConstructionPlanes'] = adsk.fusion.ConstructionPlanes;
    // adsk.fusion.ConstructionPlanes.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlanes ? object : null;
    // };

    // // Returns the number of construction planes in the collection.
    // Object.defineProperty(adsk.fusion.ConstructionPlanes.prototype, 'count', {
    //     get : function () {
    //         var result = this._execute('count');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the component that owns this collection.
    // Object.defineProperty(adsk.fusion.ConstructionPlanes.prototype, 'component', {
    //     get : function () {
    //         var result = this._execute('component');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //     }
    // });

    // // Function that returns the specified construction plane using an index into the collection.
    // // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // // Returns the specified item or null if an invalid index was specified.
    // adsk.fusion.ConstructionPlanes.prototype.item = function (index) {
    //     if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //     var args = {
    //         index : Number(index)
    //     };
    //     var result = this._execute('item', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    // };

    // // Returns the specified construction plane using the name of the construction
    // // plane as it is displayed in the browser.
    // // name : The name of the construction plane as it is displayed in the browser
    // // Returns the specified item or null if an invalid name was specified.
    // adsk.fusion.ConstructionPlanes.prototype.itemByName = function (name) {
    //     if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //     var args = {
    //         name : name
    //     };
    //     var result = this._execute('itemByName', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    // };

    // // Create a ConstructionPlaneInput object that is in turn used to create a ConstructionPlane.
    // // occurrenceForCreation : A creation occurrence is needed if the input is in another component AND the
    // // construction plane is not in the root component. The occurrenceForCreation is analogous
    // // to the active occurrence in the UI.
    // // Returns a ConstructionPlaneInput object
    // adsk.fusion.ConstructionPlanes.prototype.createInput = function (occurrenceForCreation) {
    //     if (occurrenceForCreation === null || (occurrenceForCreation !== undefined && occurrenceForCreation !== null && !(occurrenceForCreation instanceof adsk.fusion.Occurrence))) { throw new TypeError('occurrenceForCreation must be a adsk.fusion.Occurrence'); }
    //     var args;
    //     if (occurrenceForCreation !== undefined) {
    //         args = {};
    //         args.occurrenceForCreation = (occurrenceForCreation === null ? occurrenceForCreation : occurrenceForCreation.handle);
    //     }
    //     var result = this._execute('createInput', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlaneInput) : null;
    // };

    // // Creates and adds a new ConstructionPlane using the creation parameters in
    // // the ConstructionPlaneInput.
    // // input : A ConstructionPlaneInput object
    // // Returns the newly created construction plane or null if the creation failed.
    // adsk.fusion.ConstructionPlanes.prototype.add = function (input) {
    //     if (input !== null && !(input instanceof adsk.fusion.ConstructionPlaneInput)) { throw new TypeError('input must be a adsk.fusion.ConstructionPlaneInput'); }
    //     var args = {
    //         input : (input === null ? input : input.handle)
    //     };
    //     var result = this._execute('add', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    // };

    //=========== ConstructionPoint ============
    // ConstructionPoint Object
interface ConstructionPoint {
    //     if (!(this instanceof adsk.fusion.ConstructionPoint)) {
    //         return adsk.fusion.ConstructionPoint.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPoint.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPoint.prototype.constructor = adsk.fusion.ConstructionPoint;
    // adsk.fusion.ConstructionPoint.interfaceId = 'adsk.fusion.ConstructionPoint';
    // adsk.objectTypes['adsk.fusion.ConstructionPoint'] = adsk.fusion.ConstructionPoint;
    // adsk.fusion.ConstructionPoint.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPoint ? object : null;
    // };

    // // Returns a Point3D object that represents the position of the construction point.
    // // The returned geometry is in the AssemblyContext of this ConstructionPoint.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'geometry', {
    //     get : function () {
    //         var result = this._execute('geometry');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
    //     }
    // });

    // // The name of the construction point as it is displayed in the browser.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'name', {
    //     get : function () {
    //         var result = this._execute('name');
    //         return result ? result.value : undefined;
    //     },
    //     set : function (value) {
    //         if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('name', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the construction point definition object which provides access to the
    // // information defining the construction point.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'definition', {
    //     get : function () {
    //         var result = this._execute('definition');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPointDefinition) : null;
    //     }
    // });

    // // Indicates if this construction point can be deleted. The base
    // // construction point cannot be deleted.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'isDeletable', {
    //     get : function () {
    //         var result = this._execute('isDeletable');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Indicates if the light bulb (as displayed in the browser) is on.
    // // A construction point will only be visible if it's light bulb, and that of it's
    // // containing folder and parent component/s are also on.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'isLightBulbOn', {
    //     get : function () {
    //         var result = this._execute('isLightBulbOn');
    //         return result ? result.value : undefined;
    //     },
    //     set : function (value) {
    //         if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('isLightBulbOn', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Gets if the construction point is visible.
    // // This property is affected by the AssemblyContext of the construction point.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'isVisible', {
    //     get : function () {
    //         var result = this._execute('isVisible');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the parent component or base feature. If both the design and the construction
    // // point are parametric, the parent will be a component. If the design is parametric and
    // // the construction point is not, the parent will be a base feature. If
    // // the design is not parametric the parent will be a component.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'parent', {
    //     get : function () {
    //         var result = this._execute('parent');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Returns the component this construction point belongs to.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'component', {
    //     get : function () {
    //         var result = this._execute('component');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //     }
    // });

    // // Indicates if the construction point is parametric.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'isParametric', {
    //     get : function () {
    //         var result = this._execute('isParametric');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // Returns the timeline object associated with this construction point.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'timelineObject', {
    //     get : function () {
    //         var result = this._execute('timelineObject');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
    //     }
    // });

    // // Returns the assembly occurrence (i.e. the occurrence) of this object
    // // in an assembly. This is only valid in the case where this is acting
    // // as a proxy in an assembly. Returns null in the case where the object
    // // is not in the context of an assembly but is already the native object.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'assemblyContext', {
    //     get : function () {
    //         var result = this._execute('assemblyContext');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //     }
    // });

    // // The NativeObject is the object outside the context of an assembly.
    // // Returns null in the case where this object is not in the context of
    // // an assembly but is already the native object.
    // Object.defineProperty(adsk.fusion.ConstructionPoint.prototype, 'nativeObject', {
    //     get : function () {
    //         var result = this._execute('nativeObject');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    //     }
    // });

    // // Deletes the construction point.
    // // Returns a bool indicating if the delete was successful or not.
    // adsk.fusion.ConstructionPoint.prototype.deleteMe = function () {
    //     var result = this._execute('deleteMe');
    //     return result ? result.value : undefined;
    // };

    // // Creates or returns a proxy for the native object
    // // - i.e. a new object that represents this object but adds the assembly context
    // // defined by the input occurrence.
    // // occurrence : The occurrence that defines the context to create the proxy in.
    // // Returns the proxy object or null if this isn't the NativeObject.
    // adsk.fusion.ConstructionPoint.prototype.createForAssemblyContext = function (occurrence) {
    //     if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
    //     var args = {
    //         occurrence : (occurrence === null ? occurrence : occurrence.handle)
    //     };
    //     var result = this._execute('createForAssemblyContext', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    // };

    //=========== ConstructionPointDefinition ============
    // A Base class to return the information (possibly parametric) used to
    // define a ConstructionPoint.
interface ConstructionPointDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPointDefinition)) {
    //         return adsk.fusion.ConstructionPointDefinition.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointDefinition.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPointDefinition.prototype.constructor = adsk.fusion.ConstructionPointDefinition;
    // adsk.fusion.ConstructionPointDefinition.interfaceId = 'adsk.fusion.ConstructionPointDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPointDefinition'] = adsk.fusion.ConstructionPointDefinition;
    // adsk.fusion.ConstructionPointDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointDefinition ? object : null;
    // };

    // // Returns the ConstructionPoint object
    // Object.defineProperty(adsk.fusion.ConstructionPointDefinition.prototype, 'parentConstructionPoint', {
    //     get : function () {
    //         var result = this._execute('parentConstructionPoint');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    //     }
    // });
}

//=========== ConstructionPointInput ============
// A ConstructionPointInput is a throwaway object used to create a ConstructionPoint
// The usage pattern is
// a. create a ConstructionPointInput (ConstructionPoints.CreateInput)
// b. call one of the member functions to specify how the ConstructionPoint is created
// c. create the ConstructionPoint (call ConstructionPoints.Add)
// d. stop referencing the ConstructionPointInput (so it gets deleted).
interface ConstructionPointInput {
    //     if (!(this instanceof adsk.fusion.ConstructionPointInput)) {
    //         return adsk.fusion.ConstructionPointInput.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointInput.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPointInput.prototype.constructor = adsk.fusion.ConstructionPointInput;
    // adsk.fusion.ConstructionPointInput.interfaceId = 'adsk.fusion.ConstructionPointInput';
    // adsk.objectTypes['adsk.fusion.ConstructionPointInput'] = adsk.fusion.ConstructionPointInput;
    // adsk.fusion.ConstructionPointInput.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointInput ? object : null;
    // };

    // // In order for geometry to be transformed correctly, an occurrence for creation needs
    // // to be specified when the ConstructionPoint is created based on geometry
    // // (e.g. a sketch point) in another component AND (the ConstructionPoint) is not in the
    // // root component. The CreationOccurrence is analogous to the active occurrence in the UI
    // Object.defineProperty(adsk.fusion.ConstructionPointInput.prototype, 'creationOccurrence', {
    //     get : function () {
    //         var result = this._execute('creationOccurrence');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('creationOccurrence', args);
    //         return result ? result.value : undefined;
    //     }
    // });

    // // This input method is for creating a construction point at the intersection of
    // // the two linear edges or sketch lines.
    // // The edges can be B-Rep edges or sketch lines.
    // // This can result in a parametric or non-parametric construction point depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // edgeOne : The first B-Rep edge or sketch line
    // // edgeTwo : The second B-Rep edge or sketch line
    // // Returns true if the creation of the ConstructionPointInput is successful.
    // adsk.fusion.ConstructionPointInput.prototype.setByTwoEdges = function (edgeOne, edgeTwo) {
    //     if (edgeOne !== null && !(edgeOne instanceof adsk.core.Base)) { throw new TypeError('edgeOne must be a adsk.core.Base'); }
    //     if (edgeTwo !== null && !(edgeTwo instanceof adsk.core.Base)) { throw new TypeError('edgeTwo must be a adsk.core.Base'); }
    //     var args = {
    //         edgeOne : (edgeOne === null ? edgeOne : edgeOne.handle),
    //         edgeTwo : (edgeTwo === null ? edgeTwo : edgeTwo.handle)
    //     };
    //     var result = this._execute('setByTwoEdges', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction point at the intersection of the
    // // three planes or planar faces.
    // // This can result in a parametric or non-parametric construction point depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // planeOne : The first plane or planar face to intersect
    // // planeTwo : The second plane or planar face to intersect
    // // planeThree : The third plane or planar face to intersect
    // // Returns true if the creation of the ConstructionPointInput is successful.
    // adsk.fusion.ConstructionPointInput.prototype.setByThreePlanes = function (planeOne, planeTwo, planeThree) {
    //     if (planeOne !== null && !(planeOne instanceof adsk.core.Base)) { throw new TypeError('planeOne must be a adsk.core.Base'); }
    //     if (planeTwo !== null && !(planeTwo instanceof adsk.core.Base)) { throw new TypeError('planeTwo must be a adsk.core.Base'); }
    //     if (planeThree !== null && !(planeThree instanceof adsk.core.Base)) { throw new TypeError('planeThree must be a adsk.core.Base'); }
    //     var args = {
    //         planeOne : (planeOne === null ? planeOne : planeOne.handle),
    //         planeTwo : (planeTwo === null ? planeTwo : planeTwo.handle),
    //         planeThree : (planeThree === null ? planeThree : planeThree.handle)
    //     };
    //     var result = this._execute('setByThreePlanes', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction point at the intersection of a
    // // construction plane, planar face or sketch profile and a linear edge, construction axis
    // // or sketch line.
    // // This can result in a parametric or non-parametric construction point depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // edge : A linear B-Rep edge, construction axis or sketch line.
    // // plane : A plane, planar B-Rep face or construction plane.
    // // Returns true if the creation of the ConstructionPointInput is successful.
    // adsk.fusion.ConstructionPointInput.prototype.setByEdgePlane = function (edge, plane) {
    //     if (edge !== null && !(edge instanceof adsk.core.Base)) { throw new TypeError('edge must be a adsk.core.Base'); }
    //     if (plane !== null && !(plane instanceof adsk.core.Base)) { throw new TypeError('plane must be a adsk.core.Base'); }
    //     var args = {
    //         edge : (edge === null ? edge : edge.handle),
    //         plane : (plane === null ? plane : plane.handle)
    //     };
    //     var result = this._execute('setByEdgePlane', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction point at the center of a spherical
    // // face (sphere or torus), circular edge or sketch arc/circle
    // // This can result in a parametric or non-parametric construction point depending
    // // on whether the parent component is parametric or is a direct edit component.
    // // circularEntity : A spherical face (sphere or torus), circular edge or sketch arc/circle
    // // Returns true if the creation of the ConstructionPointInput is successful.
    // adsk.fusion.ConstructionPointInput.prototype.setByCenter = function (circularEntity) {
    //     if (circularEntity !== null && !(circularEntity instanceof adsk.core.Base)) { throw new TypeError('circularEntity must be a adsk.core.Base'); }
    //     var args = {
    //         circularEntity : (circularEntity === null ? circularEntity : circularEntity.handle)
    //     };
    //     var result = this._execute('setByCenter', args);
    //     return result ? result.value : undefined;
    // };

    // // This input method is for creating a construction point on the specified point
    // // or vertex. The point be either a B-Rep vertex, SketchPoint, or a Point object.
    // // Providing a Point object will always result in the creation of a non-parametric
    // // construction point.
    // // Even when providing a B-Rep vertex, SketchPoint, or Point object, this can result in
    // // a parametric or non-parametric construction point depending
    // // on if the parent component is a parametric or direct edit component.
    // // point : A B-Rep vertex, SketchPoint, or Point object
    // // Returns true if the creation of the ConstructionPointInput is successful.
    // adsk.fusion.ConstructionPointInput.prototype.setByPoint = function (point) {
    //     if (point !== null && !(point instanceof adsk.core.Base)) { throw new TypeError('point must be a adsk.core.Base'); }
    //     var args = {
    //         point : (point === null ? point : point.handle)
    //     };
    //     var result = this._execute('setByPoint', args);
    //     return result ? result.value : undefined;
    // };
}

//=========== ConstructionPoints ============
// Provides access to the construction points within a component and provides
// methods to create new construction points.
interface ConstructionPoints {
    //     if (!(this instanceof adsk.fusion.ConstructionPoints)) {
    //         return adsk.fusion.ConstructionPoints.cast(handle);
    //     }
    //     adsk.core.Base.call(this, handle);
    // };
    // adsk.fusion.ConstructionPoints.prototype = Object.create(adsk.core.Base.prototype);
    // adsk.fusion.ConstructionPoints.prototype.constructor = adsk.fusion.ConstructionPoints;
    // adsk.fusion.ConstructionPoints.interfaceId = 'adsk.fusion.ConstructionPoints';
    // adsk.objectTypes['adsk.fusion.ConstructionPoints'] = adsk.fusion.ConstructionPoints;
    // adsk.fusion.ConstructionPoints.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPoints ? object : null;
    // };

    // // The number of construction points in the collection.
    // Object.defineProperty(adsk.fusion.ConstructionPoints.prototype, 'count', {
    //     get : function () {
    //         var result = this._execute('count');
    //         return result ? result.value : undefined;
    //     }
    // });

    // // The component that owns this collection.
    // Object.defineProperty(adsk.fusion.ConstructionPoints.prototype, 'component', {
    //     get : function () {
    //         var result = this._execute('component');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
    //     }
    // });

    // // Function that returns the specified construction point using an index into the collection.
    // // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // // Returns the specified item or null if an invalid index was specified.
    // adsk.fusion.ConstructionPoints.prototype.item = function (index) {
    //     if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //     var args = {
    //         index : Number(index)
    //     };
    //     var result = this._execute('item', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    // };

    // // Returns the specified construction point using the name of the construction
    // // point as it is displayed in the browser.
    // // name : The name of the construction point as it is displayed in the browser.
    // // Returns the specified item or null if an invalid name was specified.
    // adsk.fusion.ConstructionPoints.prototype.itemByName = function (name) {
    //     if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //     var args = {
    //         name : name
    //     };
    //     var result = this._execute('itemByName', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    // };

    // // Create a ConstructionPointInput object that is in turn used
    // // to create a ConstructionPoint.
    // // occurrenceForCreation : A creation occurrence is needed if the input is in another component AND the
    // // construction point is not in the root component. The occurrenceForCreation is analogous
    // // to the active occurrence in the UI.
    // // Returns a ConstructionPointInput object
    // adsk.fusion.ConstructionPoints.prototype.createInput = function (occurrenceForCreation) {
    //     if (occurrenceForCreation === null || (occurrenceForCreation !== undefined && occurrenceForCreation !== null && !(occurrenceForCreation instanceof adsk.fusion.Occurrence))) { throw new TypeError('occurrenceForCreation must be a adsk.fusion.Occurrence'); }
    //     var args;
    //     if (occurrenceForCreation !== undefined) {
    //         args = {};
    //         args.occurrenceForCreation = (occurrenceForCreation === null ? occurrenceForCreation : occurrenceForCreation.handle);
    //     }
    //     var result = this._execute('createInput', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPointInput) : null;
    // };

    // // Creates a new construction point.
    // // input : A ConstructionPointInput object
    // // Returns the newly created construction point or null if the creation failed.
    // adsk.fusion.ConstructionPoints.prototype.add = function (input) {
    //     if (input !== null && !(input instanceof adsk.fusion.ConstructionPointInput)) { throw new TypeError('input must be a adsk.fusion.ConstructionPointInput'); }
    //     var args = {
    //         input : (input === null ? input : input.handle)
    //     };
    //     var result = this._execute('add', args);
    //     return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    // };
}
//=========== ConstructionAxisByLineDefinition ============
// The definition for a non-parametric construction axis. In a non-parametric design
// all construction planes will return this type of definition regardless of how they
// were initially created.
interface ConstructionAxisByLineDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisByLineDefinition)) {
    //         return adsk.fusion.ConstructionAxisByLineDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisByLineDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisByLineDefinition.prototype.constructor = adsk.fusion.ConstructionAxisByLineDefinition;
    // adsk.fusion.ConstructionAxisByLineDefinition.interfaceId = 'adsk.fusion.ConstructionAxisByLineDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisByLineDefinition'] = adsk.fusion.ConstructionAxisByLineDefinition;
    // adsk.fusion.ConstructionAxisByLineDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisByLineDefinition ? object : null;
    // };

    // // Gets and sets the infinite line that defines the position and direction of the axis
    // Object.defineProperty(adsk.fusion.ConstructionAxisByLineDefinition.prototype, 'axis', {
    //     get : function () {
    //         var result = this._execute('axis');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.InfiniteLine3D) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.core.InfiniteLine3D)) { throw new TypeError('value must be a adsk.core.InfiniteLine3D'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('axis', args);
    //         return result ? result.value : undefined;
    //     }
    // });
}
//=========== ConstructionAxisCircularFaceDefinition ============
// The definition for a parametric construction axis created using the SetbyCircularFace method
interface ConstructionAxisCircularFaceDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisCircularFaceDefinition)) {
    //         return adsk.fusion.ConstructionAxisCircularFaceDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisCircularFaceDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisCircularFaceDefinition.prototype.constructor = adsk.fusion.ConstructionAxisCircularFaceDefinition;
    // adsk.fusion.ConstructionAxisCircularFaceDefinition.interfaceId = 'adsk.fusion.ConstructionAxisCircularFaceDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisCircularFaceDefinition'] = adsk.fusion.ConstructionAxisCircularFaceDefinition;
    // adsk.fusion.ConstructionAxisCircularFaceDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisCircularFaceDefinition ? object : null;
    // };

    // // Gets and sets the cylinder, cone, or torus this work axis
    // // is parametrically dependent on.
    // Object.defineProperty(adsk.fusion.ConstructionAxisCircularFaceDefinition.prototype, 'circularFace', {
    //     get : function () {
    //         var result = this._execute('circularFace');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.fusion.BRepFace)) { throw new TypeError('value must be a adsk.fusion.BRepFace'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('circularFace', args);
    //         return result ? result.value : undefined;
    //     }
    // });
}
//=========== ConstructionAxisEdgeDefinition ============
// The definition for a parametric construction axis created using the SetbyEdge method
interface ConstructionAxisEdgeDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisEdgeDefinition)) {
    //         return adsk.fusion.ConstructionAxisEdgeDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisEdgeDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisEdgeDefinition.prototype.constructor = adsk.fusion.ConstructionAxisEdgeDefinition;
    // adsk.fusion.ConstructionAxisEdgeDefinition.interfaceId = 'adsk.fusion.ConstructionAxisEdgeDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisEdgeDefinition'] = adsk.fusion.ConstructionAxisEdgeDefinition;
    // adsk.fusion.ConstructionAxisEdgeDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisEdgeDefinition ? object : null;
    // };

    // // Gets and sets the linear edge, construction line, or sketch line that defines
    // // the construction axis.
    // Object.defineProperty(adsk.fusion.ConstructionAxisEdgeDefinition.prototype, 'edgeEntity', {
    //     get : function () {
    //         var result = this._execute('edgeEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('edgeEntity', args);
    //         return result ? result.value : undefined;
    //     }
    // });
}

//=========== ConstructionAxisNormalToFaceAtPointDefinition ============
// The definition for a parametric construction axis created using the
// SetByNormalToFaceAtPoint method
interface ConstructionAxisNormalToFaceAtPointDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition)) {
    //         return adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.prototype.constructor = adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition;
    // adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.interfaceId = 'adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition'] = adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition;
    // adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition ? object : null;
    // };

    // // Gets the face the axis is normal to
    // Object.defineProperty(adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.prototype, 'face', {
    //     get : function () {
    //         var result = this._execute('face');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the point that positions the axis
    // Object.defineProperty(adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.prototype, 'pointEntity', {
    //     get : function () {
    //         var result = this._execute('pointEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction axis.
    // // face : The face the axis is normal to
    // // pointEntity : The point that positions the axis
    // // Returns true if the redefinition of the construction axis is successful.
    // adsk.fusion.ConstructionAxisNormalToFaceAtPointDefinition.prototype.redefine = function (face, pointEntity) {
    //     if (face !== null && !(face instanceof adsk.core.Base)) { throw new TypeError('face must be a adsk.core.Base'); }
    //     if (pointEntity !== null && !(pointEntity instanceof adsk.core.Base)) { throw new TypeError('pointEntity must be a adsk.core.Base'); }
    //     var args = {
    //         face : (face === null ? face : face.handle),
    //         pointEntity : (pointEntity === null ? pointEntity : pointEntity.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}

//=========== ConstructionAxisPerpendicularAtPointDefinition ============
// The definition for a parametric construction axis created using the
// SetByPerpendicularAtPoint method
interface ConstructionAxisPerpendicularAtPointDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition)) {
    //         return adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.prototype.constructor = adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition;
    // adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.interfaceId = 'adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition'] = adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition;
    // adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition ? object : null;
    // };

    // // Returns the face the construction axis is perpendicular to.
    // Object.defineProperty(adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.prototype, 'face', {
    //     get : function () {
    //         var result = this._execute('face');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //     }
    // });

    // // Returns the point (construction or sketch point) that positions the axis.
    // Object.defineProperty(adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.prototype, 'point', {
    //     get : function () {
    //         var result = this._execute('point');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction axis.
    // // face : The face (BRepFace object) to create the axis perpendicular to.
    // // pointEntity : The point (sketch point, vertex, construction point) used to position the axis.
    // // Returns true if the redefinition of the axis is successful.
    // adsk.fusion.ConstructionAxisPerpendicularAtPointDefinition.prototype.redefine = function (face, pointEntity) {
    //     if (face !== null && !(face instanceof adsk.fusion.BRepFace)) { throw new TypeError('face must be a adsk.fusion.BRepFace'); }
    //     if (pointEntity !== null && !(pointEntity instanceof adsk.core.Base)) { throw new TypeError('pointEntity must be a adsk.core.Base'); }
    //     var args = {
    //         face : (face === null ? face : face.handle),
    //         pointEntity : (pointEntity === null ? pointEntity : pointEntity.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionAxisTwoPlaneDefinition ============
// The definition for a parametric construction axis created using the SetByTwoPlanes method
interface ConstructionAxisTwoPlaneDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisTwoPlaneDefinition)) {
    //         return adsk.fusion.ConstructionAxisTwoPlaneDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisTwoPlaneDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisTwoPlaneDefinition.prototype.constructor = adsk.fusion.ConstructionAxisTwoPlaneDefinition;
    // adsk.fusion.ConstructionAxisTwoPlaneDefinition.interfaceId = 'adsk.fusion.ConstructionAxisTwoPlaneDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisTwoPlaneDefinition'] = adsk.fusion.ConstructionAxisTwoPlaneDefinition;
    // adsk.fusion.ConstructionAxisTwoPlaneDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisTwoPlaneDefinition ? object : null;
    // };

    // // Gets the first planar face or construction plane
    // Object.defineProperty(adsk.fusion.ConstructionAxisTwoPlaneDefinition.prototype, 'planarEntityOne', {
    //     get : function () {
    //         var result = this._execute('planarEntityOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the second planar face or construction plane
    // Object.defineProperty(adsk.fusion.ConstructionAxisTwoPlaneDefinition.prototype, 'planarEntityTwo', {
    //     get : function () {
    //         var result = this._execute('planarEntityTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction axis.
    // // planarEntityOne : The first planar face or construction plane
    // // planarEntityTwo : The second planar face or construction plane
    // // Returns true if the redefinition of the axis is successful.
    // adsk.fusion.ConstructionAxisTwoPlaneDefinition.prototype.redefine = function (planarEntityOne, planarEntityTwo) {
    //     if (planarEntityOne !== null && !(planarEntityOne instanceof adsk.core.Base)) { throw new TypeError('planarEntityOne must be a adsk.core.Base'); }
    //     if (planarEntityTwo !== null && !(planarEntityTwo instanceof adsk.core.Base)) { throw new TypeError('planarEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         planarEntityOne : (planarEntityOne === null ? planarEntityOne : planarEntityOne.handle),
    //         planarEntityTwo : (planarEntityTwo === null ? planarEntityTwo : planarEntityTwo.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionAxisTwoPointDefinition ============
// The definition for a parametric construction axis created using the SetbyTwoPoints method
interface ConstructionAxisTwoPointDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionAxisTwoPointDefinition)) {
    //         return adsk.fusion.ConstructionAxisTwoPointDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionAxisDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionAxisTwoPointDefinition.prototype = Object.create(adsk.fusion.ConstructionAxisDefinition.prototype);
    // adsk.fusion.ConstructionAxisTwoPointDefinition.prototype.constructor = adsk.fusion.ConstructionAxisTwoPointDefinition;
    // adsk.fusion.ConstructionAxisTwoPointDefinition.interfaceId = 'adsk.fusion.ConstructionAxisTwoPointDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionAxisTwoPointDefinition'] = adsk.fusion.ConstructionAxisTwoPointDefinition;
    // adsk.fusion.ConstructionAxisTwoPointDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionAxisTwoPointDefinition ? object : null;
    // };

    // // Gets the first point.
    // Object.defineProperty(adsk.fusion.ConstructionAxisTwoPointDefinition.prototype, 'pointEntityOne', {
    //     get : function () {
    //         var result = this._execute('pointEntityOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the second point.
    // Object.defineProperty(adsk.fusion.ConstructionAxisTwoPointDefinition.prototype, 'pointEntityTwo', {
    //     get : function () {
    //         var result = this._execute('pointEntityTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction axis.
    // // pointEntityOne : The first point
    // // pointEntityTwo : The second point
    // // Returns true if the redefinition of the construction axis is successful.
    // adsk.fusion.ConstructionAxisTwoPointDefinition.prototype.redefine = function (pointEntityOne, pointEntityTwo) {
    //     if (pointEntityOne !== null && !(pointEntityOne instanceof adsk.core.Base)) { throw new TypeError('pointEntityOne must be a adsk.core.Base'); }
    //     if (pointEntityTwo !== null && !(pointEntityTwo instanceof adsk.core.Base)) { throw new TypeError('pointEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         pointEntityOne : (pointEntityOne === null ? pointEntityOne : pointEntityOne.handle),
    //         pointEntityTwo : (pointEntityTwo === null ? pointEntityTwo : pointEntityTwo.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneAtAngleDefinition ============
// ConstructionPlaneAtAngleDefinition defines a ConstructionPlane by...
interface ConstructionPlaneAtAngleDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneAtAngleDefinition)) {
    //         return adsk.fusion.ConstructionPlaneAtAngleDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneAtAngleDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneAtAngleDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneAtAngleDefinition;
    // adsk.fusion.ConstructionPlaneAtAngleDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneAtAngleDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneAtAngleDefinition'] = adsk.fusion.ConstructionPlaneAtAngleDefinition;
    // adsk.fusion.ConstructionPlaneAtAngleDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneAtAngleDefinition ? object : null;
    // };

    // // Returns a Value object that for a transient definition provides the current
    // // assigned value. For a definition associated with a construction plane, this
    // // provides access to the associated parameter controlling the angle.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneAtAngleDefinition.prototype, 'angle', {
    //     get : function () {
    //         var result = this._execute('angle');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Parameter) : null;
    //     }
    // });

    // // Gets the linear edge, construction line, or sketch line that defines
    // // the axis of rotation for the construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneAtAngleDefinition.prototype, 'linearEntity', {
    //     get : function () {
    //         var result = this._execute('linearEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the planar face or construction plane the angle for this
    // // construction plane is measured from and is parametrically dependent on.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneAtAngleDefinition.prototype, 'planarEntity', {
    //     get : function () {
    //         var result = this._execute('planarEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // angle : A ValueInput object that defines the angle at which to create the construction plane
    // // linearEntity : The linear edge, construction line, or sketch line that defines the axis of rotation to
    // // measure the angle about
    // // planarEntity : A plane, planar face or construction plane the angle of the construction plane is
    // // measured from
    // // Returns true if the redefinition of the plane is successful.
    // adsk.fusion.ConstructionPlaneAtAngleDefinition.prototype.redefine = function (angle, linearEntity, planarEntity) {
    //     if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //     if (linearEntity !== null && !(linearEntity instanceof adsk.core.Base)) { throw new TypeError('linearEntity must be a adsk.core.Base'); }
    //     if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
    //     var args = {
    //         angle : (angle === null ? angle : angle.handle),
    //         linearEntity : (linearEntity === null ? linearEntity : linearEntity.handle),
    //         planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneByPlaneDefinition ============
// The definition for a non-parametric construction plane. All constructions planes will
// return this type of definition regardless of method used to initially create them.
interface ConstructionPlaneByPlaneDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneByPlaneDefinition)) {
    //         return adsk.fusion.ConstructionPlaneByPlaneDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneByPlaneDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneByPlaneDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneByPlaneDefinition;
    // adsk.fusion.ConstructionPlaneByPlaneDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneByPlaneDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneByPlaneDefinition'] = adsk.fusion.ConstructionPlaneByPlaneDefinition;
    // adsk.fusion.ConstructionPlaneByPlaneDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneByPlaneDefinition ? object : null;
    // };

    // // Gets and sets the position of the construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneByPlaneDefinition.prototype, 'plane', {
    //     get : function () {
    //         var result = this._execute('plane');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Plane) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.core.Plane)) { throw new TypeError('value must be a adsk.core.Plane'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('plane', args);
    //         return result ? result.value : undefined;
    //     }
    // });
}
//=========== ConstructionPlaneDistanceOnPathDefinition ============
// ConstructionDistanceOnPathDefinition defines a ConstructionPlane normal to an edge or
// sketch profile at a specified position along the path defined by the edge or sketch profile.
interface ConstructionPlaneDistanceOnPathDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneDistanceOnPathDefinition)) {
    //         return adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneDistanceOnPathDefinition;
    // adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneDistanceOnPathDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneDistanceOnPathDefinition'] = adsk.fusion.ConstructionPlaneDistanceOnPathDefinition;
    // adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneDistanceOnPathDefinition ? object : null;
    // };

    // // Gets the sketch curve, edge, or a profile object.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.prototype, 'pathEntity', {
    //     get : function () {
    //         var result = this._execute('pathEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input defining the construction plane.
    // // pathEntity : The sketch curve, edge, or a profile object
    // // distance : The ValueInput object that defines the distance along the path
    // // Returns true if the redefinition of the plane is successful.
    // adsk.fusion.ConstructionPlaneDistanceOnPathDefinition.prototype.redefine = function (pathEntity, distance) {
    //     if (pathEntity !== null && !(pathEntity instanceof adsk.core.Base)) { throw new TypeError('pathEntity must be a adsk.core.Base'); }
    //     if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
    //     var args = {
    //         pathEntity : (pathEntity === null ? pathEntity : pathEntity.handle),
    //         distance : (distance === null ? distance : distance.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneMidplaneDefinition ============
// ConstructionPlaneMidplaneDefinition defines a ConstructionPlane by...
interface ConstructionPlaneMidplaneDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneMidplaneDefinition)) {
    //         return adsk.fusion.ConstructionPlaneMidplaneDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneMidplaneDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneMidplaneDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneMidplaneDefinition;
    // adsk.fusion.ConstructionPlaneMidplaneDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneMidplaneDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneMidplaneDefinition'] = adsk.fusion.ConstructionPlaneMidplaneDefinition;
    // adsk.fusion.ConstructionPlaneMidplaneDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneMidplaneDefinition ? object : null;
    // };

    // // Gets the first planar face or construction plane that defines this ConstructionPlane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneMidplaneDefinition.prototype, 'planarEntityOne', {
    //     get : function () {
    //         var result = this._execute('planarEntityOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the second planar face or construction plane that defines this ConstructionPlane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneMidplaneDefinition.prototype, 'planarEntityTwo', {
    //     get : function () {
    //         var result = this._execute('planarEntityTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // planarEntityOne : The first planar face or construction plane that defines this ConstructionPlane.
    // // planarEntityTwo : The second planar face or construction plane that defines this ConstructionPlane.
    // // Returns true if the redefinition of the plane is successful.
    // adsk.fusion.ConstructionPlaneMidplaneDefinition.prototype.redefine = function (planarEntityOne, planarEntityTwo) {
    //     if (planarEntityOne !== null && !(planarEntityOne instanceof adsk.core.Base)) { throw new TypeError('planarEntityOne must be a adsk.core.Base'); }
    //     if (planarEntityTwo !== null && !(planarEntityTwo instanceof adsk.core.Base)) { throw new TypeError('planarEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         planarEntityOne : (planarEntityOne === null ? planarEntityOne : planarEntityOne.handle),
    //         planarEntityTwo : (planarEntityTwo === null ? planarEntityTwo : planarEntityTwo.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneOffsetDefinition ============
// ConstructionPlaneOffsetDefinition defines a ConstructionPlane by...
interface ConstructionPlaneOffsetDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneOffsetDefinition)) {
    //         return adsk.fusion.ConstructionPlaneOffsetDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneOffsetDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneOffsetDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneOffsetDefinition;
    // adsk.fusion.ConstructionPlaneOffsetDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneOffsetDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneOffsetDefinition'] = adsk.fusion.ConstructionPlaneOffsetDefinition;
    // adsk.fusion.ConstructionPlaneOffsetDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneOffsetDefinition ? object : null;
    // };

    // // Returns a Value object that for a transient definition that provides the current
    // // assigned value and for a definition associated with a construction plane
    // // Provides access to the associated parameter controlling the offset.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneOffsetDefinition.prototype, 'offset', {
    //     get : function () {
    //         var result = this._execute('offset');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Parameter) : null;
    //     }
    // });

    // // Gets the planar face or construction plane this construction plane
    // // is parametrically dependent on.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneOffsetDefinition.prototype, 'planarEntity', {
    //     get : function () {
    //         var result = this._execute('planarEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // offset : ValueInput object that specifies the offset distance
    // // planarEntity : A plane, planar face or construction plane from which to measure the offset from
    // // Returns true is the operation is successful
    // adsk.fusion.ConstructionPlaneOffsetDefinition.prototype.redefine = function (offset, planarEntity) {
    //     if (offset !== null && !(offset instanceof adsk.core.ValueInput)) { throw new TypeError('offset must be a adsk.core.ValueInput'); }
    //     if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
    //     var args = {
    //         offset : (offset === null ? offset : offset.handle),
    //         planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneTangentAtPointDefinition ============
// ConstructionPlaneTangentAtPointDefinition defines a ConstructionPlane tangent to a
// face and aligned to a point.
interface ConstructionPlaneTangentAtPointDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneTangentAtPointDefinition)) {
    //         return adsk.fusion.ConstructionPlaneTangentAtPointDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneTangentAtPointDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneTangentAtPointDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneTangentAtPointDefinition;
    // adsk.fusion.ConstructionPlaneTangentAtPointDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneTangentAtPointDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneTangentAtPointDefinition'] = adsk.fusion.ConstructionPlaneTangentAtPointDefinition;
    // adsk.fusion.ConstructionPlaneTangentAtPointDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneTangentAtPointDefinition ? object : null;
    // };

    // // Gets the tangent face.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTangentAtPointDefinition.prototype, 'tangentFace', {
    //     get : function () {
    //         var result = this._execute('tangentFace');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
    //     }
    // });

    // // Gets the point (sketch point, vertex, construction point) used to align the plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTangentAtPointDefinition.prototype, 'pointEntity', {
    //     get : function () {
    //         var result = this._execute('pointEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // tangentFace : The face to create the plane tangent to
    // // pointEntity : The point (sketch point, vertex, construction point) used to align the plane.
    // // Returns true if the redefinition of the plane is successful.
    // adsk.fusion.ConstructionPlaneTangentAtPointDefinition.prototype.redefine = function (tangentFace, pointEntity) {
    //     if (tangentFace !== null && !(tangentFace instanceof adsk.core.Base)) { throw new TypeError('tangentFace must be a adsk.core.Base'); }
    //     if (pointEntity !== null && !(pointEntity instanceof adsk.core.Base)) { throw new TypeError('pointEntity must be a adsk.core.Base'); }
    //     var args = {
    //         tangentFace : (tangentFace === null ? tangentFace : tangentFace.handle),
    //         pointEntity : (pointEntity === null ? pointEntity : pointEntity.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneTangentDefinition ============
// ConstructionPlaneTangentDefinition defines a ConstructionPlane tangent to a cylindrical or conical
// face at a point.
interface ConstructionPlaneTangentDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneTangentDefinition)) {
    //         return adsk.fusion.ConstructionPlaneTangentDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneTangentDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneTangentDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneTangentDefinition;
    // adsk.fusion.ConstructionPlaneTangentDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneTangentDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneTangentDefinition'] = adsk.fusion.ConstructionPlaneTangentDefinition;
    // adsk.fusion.ConstructionPlaneTangentDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneTangentDefinition ? object : null;
    // };

    // // Returns a Value object that for a transient definition provides the current
    // // assigned value. For a definition associated with a construction plane, it
    // // provides access to the associated parameter controlling the angle.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTangentDefinition.prototype, 'angle', {
    //     get : function () {
    //         var result = this._execute('angle');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Parameter) : null;
    //     }
    // });

    // // Gets the cylindrical or conical face that the construction plane
    // // is tangent to.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTangentDefinition.prototype, 'tangentFace', {
    //     get : function () {
    //         var result = this._execute('tangentFace');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the planar face or construction plane the angle for this
    // // construction plane is measured from and is parametrically dependent on.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTangentDefinition.prototype, 'planarEntity', {
    //     get : function () {
    //         var result = this._execute('planarEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // angle : A Value object that defines the angle of the construction plane
    // // tangentFace : The cylindrical or conical face that the construction plane is tangent to.
    // // planarEntity : The planar face or construction plane the angle for this
    // // construction plane is measured from
    // // Returns true if the redefinition of the plane is successful.
    // adsk.fusion.ConstructionPlaneTangentDefinition.prototype.redefine = function (angle, tangentFace, planarEntity) {
    //     if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //     if (tangentFace !== null && !(tangentFace instanceof adsk.core.Base)) { throw new TypeError('tangentFace must be a adsk.core.Base'); }
    //     if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
    //     var args = {
    //         angle : (angle === null ? angle : angle.handle),
    //         tangentFace : (tangentFace === null ? tangentFace : tangentFace.handle),
    //         planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneThreePointsDefinition ============
// ConstructionPlaneThreePointDefinition defines a ConstructionPlane by 3 point entities
// (e.g. (sketch points, vectrices or construction points) that form a triangle (i.e.
// no two points the same and they aren't collinear).
interface ConstructionPlaneThreePointsDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneThreePointsDefinition)) {
    //         return adsk.fusion.ConstructionPlaneThreePointsDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneThreePointsDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneThreePointsDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneThreePointsDefinition;
    // adsk.fusion.ConstructionPlaneThreePointsDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneThreePointsDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneThreePointsDefinition'] = adsk.fusion.ConstructionPlaneThreePointsDefinition;
    // adsk.fusion.ConstructionPlaneThreePointsDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneThreePointsDefinition ? object : null;
    // };

    // // Gets the first construction point, sketch point or vertex.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneThreePointsDefinition.prototype, 'pointEntityOne', {
    //     get : function () {
    //         var result = this._execute('pointEntityOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the second construction point, sketch point or vertex.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneThreePointsDefinition.prototype, 'pointEntityTwo', {
    //     get : function () {
    //         var result = this._execute('pointEntityTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the third construction point, sketch point or vertex.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneThreePointsDefinition.prototype, 'pointEntityThree', {
    //     get : function () {
    //         var result = this._execute('pointEntityThree');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // pointEntityOne : Gets the first construction point, sketch point or vertex.
    // // pointEntityTwo : Gets the second construction point, sketch point or vertex.
    // // pointEntityThree : Gets the third construction point, sketch point or vertex.
    // // Returns true if the redefinition of the plane is successful.
    // adsk.fusion.ConstructionPlaneThreePointsDefinition.prototype.redefine = function (pointEntityOne, pointEntityTwo, pointEntityThree) {
    //     if (pointEntityOne !== null && !(pointEntityOne instanceof adsk.core.Base)) { throw new TypeError('pointEntityOne must be a adsk.core.Base'); }
    //     if (pointEntityTwo !== null && !(pointEntityTwo instanceof adsk.core.Base)) { throw new TypeError('pointEntityTwo must be a adsk.core.Base'); }
    //     if (pointEntityThree !== null && !(pointEntityThree instanceof adsk.core.Base)) { throw new TypeError('pointEntityThree must be a adsk.core.Base'); }
    //     var args = {
    //         pointEntityOne : (pointEntityOne === null ? pointEntityOne : pointEntityOne.handle),
    //         pointEntityTwo : (pointEntityTwo === null ? pointEntityTwo : pointEntityTwo.handle),
    //         pointEntityThree : (pointEntityThree === null ? pointEntityThree : pointEntityThree.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPlaneTwoEdgesDefinition ============
// ConstructionPlaneTwoEdgesDefinition defines a ConstructionPlane by two co-planar
// linear entities like edges, sketch lines or construction axis.
interface ConstructionPlaneTwoEdgesDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPlaneTwoEdgesDefinition)) {
    //         return adsk.fusion.ConstructionPlaneTwoEdgesDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPlaneDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPlaneTwoEdgesDefinition.prototype = Object.create(adsk.fusion.ConstructionPlaneDefinition.prototype);
    // adsk.fusion.ConstructionPlaneTwoEdgesDefinition.prototype.constructor = adsk.fusion.ConstructionPlaneTwoEdgesDefinition;
    // adsk.fusion.ConstructionPlaneTwoEdgesDefinition.interfaceId = 'adsk.fusion.ConstructionPlaneTwoEdgesDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPlaneTwoEdgesDefinition'] = adsk.fusion.ConstructionPlaneTwoEdgesDefinition;
    // adsk.fusion.ConstructionPlaneTwoEdgesDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPlaneTwoEdgesDefinition ? object : null;
    // };

    // // Gets the first linear edge, construction line, or sketch line that defines
    // // the construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTwoEdgesDefinition.prototype, 'linearEntityOne', {
    //     get : function () {
    //         var result = this._execute('linearEntityOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Gets the second linear edge, construction line, or sketch line that defines
    // // the construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPlaneTwoEdgesDefinition.prototype, 'linearEntityTwo', {
    //     get : function () {
    //         var result = this._execute('linearEntityTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction plane.
    // // linearEntityOne : The first linear edge, construction line, or sketch line that defines
    // // the construction plane.
    // // linearEntityTwo : The second linear edge, construction line, or sketch line that defines
    // // the construction plane.
    // //
    // adsk.fusion.ConstructionPlaneTwoEdgesDefinition.prototype.redefine = function (linearEntityOne, linearEntityTwo) {
    //     if (linearEntityOne !== null && !(linearEntityOne instanceof adsk.core.Base)) { throw new TypeError('linearEntityOne must be a adsk.core.Base'); }
    //     if (linearEntityTwo !== null && !(linearEntityTwo instanceof adsk.core.Base)) { throw new TypeError('linearEntityTwo must be a adsk.core.Base'); }
    //     var args = {
    //         linearEntityOne : (linearEntityOne === null ? linearEntityOne : linearEntityOne.handle),
    //         linearEntityTwo : (linearEntityTwo === null ? linearEntityTwo : linearEntityTwo.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPointCenterDefinition ============
// The definition for a parametric construction point created using the SetbyCenter method
interface ConstructionPointCenterDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPointCenterDefinition)) {
    //         return adsk.fusion.ConstructionPointCenterDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPointDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointCenterDefinition.prototype = Object.create(adsk.fusion.ConstructionPointDefinition.prototype);
    // adsk.fusion.ConstructionPointCenterDefinition.prototype.constructor = adsk.fusion.ConstructionPointCenterDefinition;
    // adsk.fusion.ConstructionPointCenterDefinition.interfaceId = 'adsk.fusion.ConstructionPointCenterDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPointCenterDefinition'] = adsk.fusion.ConstructionPointCenterDefinition;
    // adsk.fusion.ConstructionPointCenterDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointCenterDefinition ? object : null;
    // };

    // // Gets and sets the spherical face (sphere or torus), circular edge or sketch arc/circle
    // // whose center defines the location for the construction point.
    // Object.defineProperty(adsk.fusion.ConstructionPointCenterDefinition.prototype, 'circularEntity', {
    //     get : function () {
    //         var result = this._execute('circularEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('circularEntity', args);
    //         return result ? result.value : undefined;
    //     }
    // });
}
//=========== ConstructionPointEdgePlaneDefinition ============
// The definition for a parametric construction point created using the SetbyEdgePlane method
interface ConstructionPointEdgePlaneDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPointEdgePlaneDefinition)) {
    //         return adsk.fusion.ConstructionPointEdgePlaneDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPointDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointEdgePlaneDefinition.prototype = Object.create(adsk.fusion.ConstructionPointDefinition.prototype);
    // adsk.fusion.ConstructionPointEdgePlaneDefinition.prototype.constructor = adsk.fusion.ConstructionPointEdgePlaneDefinition;
    // adsk.fusion.ConstructionPointEdgePlaneDefinition.interfaceId = 'adsk.fusion.ConstructionPointEdgePlaneDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPointEdgePlaneDefinition'] = adsk.fusion.ConstructionPointEdgePlaneDefinition;
    // adsk.fusion.ConstructionPointEdgePlaneDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointEdgePlaneDefinition ? object : null;
    // };

    // // A linear B-Rep edge, construction axis or sketch line.
    // Object.defineProperty(adsk.fusion.ConstructionPointEdgePlaneDefinition.prototype, 'edge', {
    //     get : function () {
    //         var result = this._execute('edge');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // A plane, planar B-Rep face or construction plane.
    // Object.defineProperty(adsk.fusion.ConstructionPointEdgePlaneDefinition.prototype, 'plane', {
    //     get : function () {
    //         var result = this._execute('plane');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction point.
    // // edge : A linear B-Rep edge, construction axis or sketch line.
    // // plane : A plane, planar B-Rep face or construction plane.
    // // Returns true if the redefinition of the Construction Point is successful.
    // adsk.fusion.ConstructionPointEdgePlaneDefinition.prototype.redefine = function (edge, plane) {
    //     if (edge !== null && !(edge instanceof adsk.core.Base)) { throw new TypeError('edge must be a adsk.core.Base'); }
    //     if (plane !== null && !(plane instanceof adsk.core.Base)) { throw new TypeError('plane must be a adsk.core.Base'); }
    //     var args = {
    //         edge : (edge === null ? edge : edge.handle),
    //         plane : (plane === null ? plane : plane.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPointPointDefinition ============
// The definition for a parametric construction point created using the SetbyPoint method
// All non-parametric constructions points will return this type of definition regardless
// of the method used to initially create them.
interface ConstructionPointPointDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPointPointDefinition)) {
    //         return adsk.fusion.ConstructionPointPointDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPointDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointPointDefinition.prototype = Object.create(adsk.fusion.ConstructionPointDefinition.prototype);
    // adsk.fusion.ConstructionPointPointDefinition.prototype.constructor = adsk.fusion.ConstructionPointPointDefinition;
    // adsk.fusion.ConstructionPointPointDefinition.interfaceId = 'adsk.fusion.ConstructionPointPointDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPointPointDefinition'] = adsk.fusion.ConstructionPointPointDefinition;
    // adsk.fusion.ConstructionPointPointDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointPointDefinition ? object : null;
    // };

    // // Gets and sets the position of the point using a construction point, sketch point or
    // // vertex.
    // // Non-parametric points will always return a Point3D object
    // Object.defineProperty(adsk.fusion.ConstructionPointPointDefinition.prototype, 'pointEntity', {
    //     get : function () {
    //         var result = this._execute('pointEntity');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     },
    //     set : function (value) {
    //         if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
    //         var args = {
    //             value : value
    //         };
    //         var result = this._execute('pointEntity', args);
    //         return result ? result.value : undefined;
    //     }
    // });
}
//=========== ConstructionPointThreePlanesDefinition ============
// The definition for a parametric construction point created using the SetbyThreePlanes method
interface ConstructionPointThreePlanesDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPointThreePlanesDefinition)) {
    //         return adsk.fusion.ConstructionPointThreePlanesDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPointDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointThreePlanesDefinition.prototype = Object.create(adsk.fusion.ConstructionPointDefinition.prototype);
    // adsk.fusion.ConstructionPointThreePlanesDefinition.prototype.constructor = adsk.fusion.ConstructionPointThreePlanesDefinition;
    // adsk.fusion.ConstructionPointThreePlanesDefinition.interfaceId = 'adsk.fusion.ConstructionPointThreePlanesDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPointThreePlanesDefinition'] = adsk.fusion.ConstructionPointThreePlanesDefinition;
    // adsk.fusion.ConstructionPointThreePlanesDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointThreePlanesDefinition ? object : null;
    // };

    // // The first plane or planar face
    // Object.defineProperty(adsk.fusion.ConstructionPointThreePlanesDefinition.prototype, 'planeOne', {
    //     get : function () {
    //         var result = this._execute('planeOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // The second plane or planar face
    // Object.defineProperty(adsk.fusion.ConstructionPointThreePlanesDefinition.prototype, 'planeTwo', {
    //     get : function () {
    //         var result = this._execute('planeTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // The third plane or planar face
    // Object.defineProperty(adsk.fusion.ConstructionPointThreePlanesDefinition.prototype, 'planeThree', {
    //     get : function () {
    //         var result = this._execute('planeThree');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction point.
    // // planeOne : The first plane or planar face to intersect
    // // planeTwo : The second plane or planar face to intersect
    // // planeThree : The third plane or planar face to intersect
    // // Returns true if the redefinition of the Construction Point is successful.
    // adsk.fusion.ConstructionPointThreePlanesDefinition.prototype.redefine = function (planeOne, planeTwo, planeThree) {
    //     if (planeOne !== null && !(planeOne instanceof adsk.core.Base)) { throw new TypeError('planeOne must be a adsk.core.Base'); }
    //     if (planeTwo !== null && !(planeTwo instanceof adsk.core.Base)) { throw new TypeError('planeTwo must be a adsk.core.Base'); }
    //     if (planeThree !== null && !(planeThree instanceof adsk.core.Base)) { throw new TypeError('planeThree must be a adsk.core.Base'); }
    //     var args = {
    //         planeOne : (planeOne === null ? planeOne : planeOne.handle),
    //         planeTwo : (planeTwo === null ? planeTwo : planeTwo.handle),
    //         planeThree : (planeThree === null ? planeThree : planeThree.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}
//=========== ConstructionPointTwoEdgesDefinition ============
// The definition for a parametric construction point created using the SetbyTwoEdges method
interface ConstructionPointTwoEdgesDefinition {
    //     if (!(this instanceof adsk.fusion.ConstructionPointTwoEdgesDefinition)) {
    //         return adsk.fusion.ConstructionPointTwoEdgesDefinition.cast(handle);
    //     }
    //     adsk.fusion.ConstructionPointDefinition.call(this, handle);
    // };
    // adsk.fusion.ConstructionPointTwoEdgesDefinition.prototype = Object.create(adsk.fusion.ConstructionPointDefinition.prototype);
    // adsk.fusion.ConstructionPointTwoEdgesDefinition.prototype.constructor = adsk.fusion.ConstructionPointTwoEdgesDefinition;
    // adsk.fusion.ConstructionPointTwoEdgesDefinition.interfaceId = 'adsk.fusion.ConstructionPointTwoEdgesDefinition';
    // adsk.objectTypes['adsk.fusion.ConstructionPointTwoEdgesDefinition'] = adsk.fusion.ConstructionPointTwoEdgesDefinition;
    // adsk.fusion.ConstructionPointTwoEdgesDefinition.cast = function (object) {
    //     return object instanceof adsk.fusion.ConstructionPointTwoEdgesDefinition ? object : null;
    // };

    // // Returns a B-Rep edge or sketch line
    // Object.defineProperty(adsk.fusion.ConstructionPointTwoEdgesDefinition.prototype, 'edgeOne', {
    //     get : function () {
    //         var result = this._execute('edgeOne');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Returns a B-Rep edge or sketch line
    // Object.defineProperty(adsk.fusion.ConstructionPointTwoEdgesDefinition.prototype, 'edgeTwo', {
    //     get : function () {
    //         var result = this._execute('edgeTwo');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //     }
    // });

    // // Redefines the input geometry of the construction point.
    // // edgeOne : The first B-Rep edge or sketch line
    // // edgeTwo : The second B-Rep edge or sketch line
    // // Returns true if the redefinition of the Construction Point is successful.
    // adsk.fusion.ConstructionPointTwoEdgesDefinition.prototype.redefine = function (edgeOne, edgeTwo) {
    //     if (edgeOne !== null && !(edgeOne instanceof adsk.core.Base)) { throw new TypeError('edgeOne must be a adsk.core.Base'); }
    //     if (edgeTwo !== null && !(edgeTwo instanceof adsk.core.Base)) { throw new TypeError('edgeTwo must be a adsk.core.Base'); }
    //     var args = {
    //         edgeOne : (edgeOne === null ? edgeOne : edgeOne.handle),
    //         edgeTwo : (edgeTwo === null ? edgeTwo : edgeTwo.handle)
    //     };
    //     var result = this._execute('redefine', args);
    //     return result ? result.value : undefined;
    // };
}