//=========== BaseFeatures ============
// The BaseFeature class represents a direct edit feature within a parametric design.
interface BaseFeatures {
    //         if (!(this instanceof adsk.fusion.BaseFeatures)) {
    //             return adsk.fusion.BaseFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BaseFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BaseFeatures.prototype.constructor = adsk.fusion.BaseFeatures;
    //     adsk.fusion.BaseFeatures.interfaceId = 'adsk.fusion.BaseFeatures';
    //     adsk.objectTypes['adsk.fusion.BaseFeatures'] = adsk.fusion.BaseFeatures;
    //     adsk.fusion.BaseFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.BaseFeatures ? object : null;
    //     };

    //     // The number of base features in the collection.
    //     Object.defineProperty(adsk.fusion.BaseFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified base feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BaseFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BaseFeature) : null;
    //     };

    //     // Function that returns the specified base feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.BaseFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BaseFeature) : null;
    //     };
}

//=========== BoundaryFillFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a BoundaryFillFeatureInput.
interface BoundaryFillFeatureInput {
    //         if (!(this instanceof adsk.fusion.BoundaryFillFeatureInput)) {
    //             return adsk.fusion.BoundaryFillFeatureInput.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BoundaryFillFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BoundaryFillFeatureInput.prototype.constructor = adsk.fusion.BoundaryFillFeatureInput;
    //     adsk.fusion.BoundaryFillFeatureInput.interfaceId = 'adsk.fusion.BoundaryFillFeatureInput';
    //     adsk.objectTypes['adsk.fusion.BoundaryFillFeatureInput'] = adsk.fusion.BoundaryFillFeatureInput;
    //     adsk.fusion.BoundaryFillFeatureInput.cast = function (object) {
    //         return object instanceof adsk.fusion.BoundaryFillFeatureInput ? object : null;
    //     };

    //     // Returns the collection of the valid cells that have been calculated based on the set of input tools.
    //     // You use this collection to specify which cells you want included in the output.
    //     Object.defineProperty(adsk.fusion.BoundaryFillFeatureInput.prototype, 'bRepCells', {
    //         get : function () {
    //             var result = this._execute('bRepCells');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCells) : null;
    //         }
    //     });

    //     // Gets and sets the type of operation performed by the boundary fill feature.
    //     Object.defineProperty(adsk.fusion.BoundaryFillFeatureInput.prototype, 'operation', {
    //         get : function () {
    //             var result = this._execute('operation');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('operation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
    //     // specified when the Boundary Fill is created based on geometry (e.g. a profile and/or face(s))
    //     // in another component AND (the Boundary Fill) is not in the root component.
    //     // The CreationOccurrence is analogous to the active occurrence in the UI
    //     Object.defineProperty(adsk.fusion.BoundaryFillFeatureInput.prototype, 'creationOccurrence', {
    //         get : function () {
    //             var result = this._execute('creationOccurrence');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('creationOccurrence', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the collection of one or more construction planes and open or closed
    //     // BRepBody objects that are used in calculating the possible closed boundaries.
    //     Object.defineProperty(adsk.fusion.BoundaryFillFeatureInput.prototype, 'tools', {
    //         get : function () {
    //             var result = this._execute('tools');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('tools', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//=========== BoundaryFillFeatures ============
// Collection that provides access to all of the existing boundary fill features in a component
// and supports the ability to create new boundary fill features.
interface BoundaryFillFeatures {
    //         if (!(this instanceof adsk.fusion.BoundaryFillFeatures)) {
    //             return adsk.fusion.BoundaryFillFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BoundaryFillFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BoundaryFillFeatures.prototype.constructor = adsk.fusion.BoundaryFillFeatures;
    //     adsk.fusion.BoundaryFillFeatures.interfaceId = 'adsk.fusion.BoundaryFillFeatures';
    //     adsk.objectTypes['adsk.fusion.BoundaryFillFeatures'] = adsk.fusion.BoundaryFillFeatures;
    //     adsk.fusion.BoundaryFillFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.BoundaryFillFeatures ? object : null;
    //     };

    //     // The number of boundary fill features in the collection.
    //     Object.defineProperty(adsk.fusion.BoundaryFillFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified boundary fill feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BoundaryFillFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeature) : null;
    //     };

    //     // Creates a BoundaryFillFeatureInput object. Use properties and methods on this object
    //     // to define the boundary fill you want to create and then use the Add method, passing in
    //     // the BoundaryFillFeatureInput object.
    //     // tools : A collection of one or more construction planes and open or closed BRepBody objects that will be
    //     // used in calculating the possible closed boundaries.
    //     // operation : The operation type to perform.
    //     // Returns the newly created BoundaryFillFeatureInput object or null if the creation failed.
    //     adsk.fusion.BoundaryFillFeatures.prototype.createInput = function (tools, operation) {
    //         if (tools !== null && !(tools instanceof adsk.core.ObjectCollection)) { throw new TypeError('tools must be a adsk.core.ObjectCollection'); }
    //         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
    //         var args = {
    //             tools : (tools === null ? tools : tools.handle),
    //             operation : Number(operation)
    //         };
    //         var result = this._execute('createInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeatureInput) : null;
    //     };

    //     // Creates a new boundary fill feature.
    //     // input : A BoundaryFillFeatureInput object that defines the desired boundary fill feature. Use the createInput
    //     // method to create a new BoundaryFillFeatureInput object and then use methods on it
    //     // (the BoundaryFillFeatureInput object) to define the boundary fill feature.
    //     // Returns the newly created BoundaryFillFeature object or null if the creation failed.
    //     adsk.fusion.BoundaryFillFeatures.prototype.add = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.BoundaryFillFeatureInput)) { throw new TypeError('input must be a adsk.fusion.BoundaryFillFeatureInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeature) : null;
    //     };

    //     // Function that returns the specified boundary fill feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.BoundaryFillFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeature) : null;
    //     };
}

//=========== BoxFeatures ============
// Collection that provides access to all of the existing box features in a design.
interface BoxFeatures {
    //         if (!(this instanceof adsk.fusion.BoxFeatures)) {
    //             return adsk.fusion.BoxFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BoxFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BoxFeatures.prototype.constructor = adsk.fusion.BoxFeatures;
    //     adsk.fusion.BoxFeatures.interfaceId = 'adsk.fusion.BoxFeatures';
    //     adsk.objectTypes['adsk.fusion.BoxFeatures'] = adsk.fusion.BoxFeatures;
    //     adsk.fusion.BoxFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.BoxFeatures ? object : null;
    //     };

    //     // The number of box features in the collection.
    //     Object.defineProperty(adsk.fusion.BoxFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified box feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BoxFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoxFeature) : null;
    //     };

    //     // Function that returns the specified box feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.BoxFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoxFeature) : null;
    //     };
}

//=========== BRepCell ============
// Object that represents an existing BRepCell.
interface BRepCell {
    //         if (!(this instanceof adsk.fusion.BRepCell)) {
    //             return adsk.fusion.BRepCell.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepCell.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepCell.prototype.constructor = adsk.fusion.BRepCell;
    //     adsk.fusion.BRepCell.interfaceId = 'adsk.fusion.BRepCell';
    //     adsk.objectTypes['adsk.fusion.BRepCell'] = adsk.fusion.BRepCell;
    //     adsk.fusion.BRepCell.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepCell ? object : null;
    //     };

    //     // Gets and sets whether the cell is selected. For a Trim feature a selected cell is removed,
    //     // whereas for a boundary fill feature, a selected cell is kept and used in the feature operation.
    //     Object.defineProperty(adsk.fusion.BRepCell.prototype, 'isSelected', {
    //         get : function () {
    //             var result = this._execute('isSelected');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isSelected', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the tools that we're using in the definition of this cell.
    //     Object.defineProperty(adsk.fusion.BRepCell.prototype, 'sourceTools', {
    //         get : function () {
    //             var result = this._execute('sourceTools');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //         }
    //     });

    //     // Returns a BRepBody that represents this cell. This is a transient B-Rep body.
    //     Object.defineProperty(adsk.fusion.BRepCell.prototype, 'cellBody', {
    //         get : function () {
    //             var result = this._execute('cellBody');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         }
    //     });
}

//=========== BRepCells ============
// Collection that provides access to all of the existing BRepCells defined by a BoundaryFillFeatureInput
interface BRepCells {
    //         if (!(this instanceof adsk.fusion.BRepCells)) {
    //             return adsk.fusion.BRepCells.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.BRepCells.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.BRepCells.prototype.constructor = adsk.fusion.BRepCells;
    //     adsk.fusion.BRepCells.interfaceId = 'adsk.fusion.BRepCells';
    //     adsk.objectTypes['adsk.fusion.BRepCells'] = adsk.fusion.BRepCells;
    //     adsk.fusion.BRepCells.cast = function (object) {
    //         return object instanceof adsk.fusion.BRepCells ? object : null;
    //     };

    //     // The number of BRepCells in the collection.
    //     Object.defineProperty(adsk.fusion.BRepCells.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified BRepCell using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.BRepCells.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCell) : null;
    //     };
}

//=========== ChamferFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a chamfer
// feature.
interface ChamferFeatureInput {
    //         if (!(this instanceof adsk.fusion.ChamferFeatureInput)) {
    //             return adsk.fusion.ChamferFeatureInput.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.ChamferFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.ChamferFeatureInput.prototype.constructor = adsk.fusion.ChamferFeatureInput;
    //     adsk.fusion.ChamferFeatureInput.interfaceId = 'adsk.fusion.ChamferFeatureInput';
    //     adsk.objectTypes['adsk.fusion.ChamferFeatureInput'] = adsk.fusion.ChamferFeatureInput;
    //     adsk.fusion.ChamferFeatureInput.cast = function (object) {
    //         return object instanceof adsk.fusion.ChamferFeatureInput ? object : null;
    //     };

    //     // Gets and sets the collection of edges that will be chamfered. In order to access (get) the input edges
    //     // of a chamfer, you must roll the timeline back to just before the chamfer feature
    //     // whose edges you want to access.
    //     Object.defineProperty(adsk.fusion.ChamferFeatureInput.prototype, 'edges', {
    //         get : function () {
    //             var result = this._execute('edges');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('edges', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if any edges that are tangentially connected to any of chamfered
    //     // edges will also be included in the chamfer.
    //     Object.defineProperty(adsk.fusion.ChamferFeatureInput.prototype, 'isTangentChain', {
    //         get : function () {
    //             var result = this._execute('isTangentChain');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isTangentChain', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Adds a set of edges to this input.
    //     // distance : A ValueInput object that defines the size of the chamfer. If the ValueInput uses
    //     // a real then it is interpreted as centimeters. If it is a string then the units
    //     // can be defined as part of the string (i.e. "2 in"). If no units are specified
    //     // it is interpreted using the current default units for length.
    //     // Returns true if the set of edges was successfully added to the ChamferFeatureInput.
    //     adsk.fusion.ChamferFeatureInput.prototype.setToEqualDistance = function (distance) {
    //         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
    //         var args = {
    //             distance : (distance === null ? distance : distance.handle)
    //         };
    //         var result = this._execute('setToEqualDistance', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Adds a set of edges to this input.
    //     // distanceOne : A ValueInput object that defines the distanceOne of the chamfer. This distance
    //     // is along the face which is on the left of the selected edge.
    //     // If the ValueInput uses a real then it is interpreted as centimeters.
    //     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
    //     // If no units are specified it is interpreted using the current default units for length.
    //     // distanceTwo : A ValueInput object that defines the distanceTwo of the chamfer. This distance
    //     // is along the face which is on the right of the selected edge.
    //     // If the ValueInput uses a real then it is interpreted as centimeters.
    //     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
    //     // If no units are specified it is interpreted using the current default units for length.
    //     // Returns true if successful.
    //     adsk.fusion.ChamferFeatureInput.prototype.setToTwoDistances = function (distanceOne, distanceTwo) {
    //         if (distanceOne !== null && !(distanceOne instanceof adsk.core.ValueInput)) { throw new TypeError('distanceOne must be a adsk.core.ValueInput'); }
    //         if (distanceTwo !== null && !(distanceTwo instanceof adsk.core.ValueInput)) { throw new TypeError('distanceTwo must be a adsk.core.ValueInput'); }
    //         var args = {
    //             distanceOne : (distanceOne === null ? distanceOne : distanceOne.handle),
    //             distanceTwo : (distanceTwo === null ? distanceTwo : distanceTwo.handle)
    //         };
    //         var result = this._execute('setToTwoDistances', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Adds a set of edges to this input.
    //     // distance : A ValueInput object that defines the distance of the chamfer. This distance
    //     // is along the face which is on the right of the selected edge.
    //     // If the ValueInput uses a real then it is interpreted as centimeters.
    //     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
    //     // If no units are specified it is interpreted using the current default units for length.
    //     // angle : A valueInput object that defines the angle. The direction will be towards to the face
    //     // which is on the left of the selected edge. This can be a string or a value.
    //     // If it's a string it is interpreted using the current document units and can include
    //     // equations. For example all of the following are valid as long as they result in
    //     // angle units; "45", "45 deg", "a1 / 2". If a value is input it is interpreted
    //     // as radians. It cannot be negative.
    //     // Returns true if successful.
    //     adsk.fusion.ChamferFeatureInput.prototype.setToDistanceAndAngle = function (distance, angle) {
    //         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
    //         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //         var args = {
    //             distance : (distance === null ? distance : distance.handle),
    //             angle : (angle === null ? angle : angle.handle)
    //         };
    //         var result = this._execute('setToDistanceAndAngle', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== ChamferFeatures ============
// Collection that provides access to all of the existing chamfer features in a component
// and supports the ability to create new chamfer features.
interface ChamferFeatures {
    //         if (!(this instanceof adsk.fusion.ChamferFeatures)) {
    //             return adsk.fusion.ChamferFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.ChamferFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.ChamferFeatures.prototype.constructor = adsk.fusion.ChamferFeatures;
    //     adsk.fusion.ChamferFeatures.interfaceId = 'adsk.fusion.ChamferFeatures';
    //     adsk.objectTypes['adsk.fusion.ChamferFeatures'] = adsk.fusion.ChamferFeatures;
    //     adsk.fusion.ChamferFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.ChamferFeatures ? object : null;
    //     };

    //     // The number of chamfer features in the collection.
    //     Object.defineProperty(adsk.fusion.ChamferFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified chamfer feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.ChamferFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeature) : null;
    //     };

    //     // Creates a ChamferFeatureInput object. Use properties and methods on this object
    //     // to define the chamfer you want to create and then use the Add method, passing in
    //     // the ChamferFeatureInput object.
    //     // edges : The collection of edges that will be chamfered.
    //     // isTangentChain : Boolean indicating if all edges that are tangentially connected to any of the input edges should be included in the chamfer or not.
    //     // Returns the newly created ChamferFeatureInput object or null if the creation failed.
    //     adsk.fusion.ChamferFeatures.prototype.createInput = function (edges, isTangentChain) {
    //         if (edges !== null && !(edges instanceof adsk.core.ObjectCollection)) { throw new TypeError('edges must be a adsk.core.ObjectCollection'); }
    //         if (typeof isTangentChain !== 'boolean') { throw new TypeError('isTangentChain must be a boolean'); }
    //         var args = {
    //             edges : (edges === null ? edges : edges.handle),
    //             isTangentChain : isTangentChain
    //         };
    //         var result = this._execute('createInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeatureInput) : null;
    //     };

    //     // Creates a new chamfer feature.
    //     // input : A ChamferFeatureInput object that defines the desired chamfer. Use the createInput
    //     // method to create a new ChamferFeatureInput object and then use methods on it
    //     // (the ChamferFeatureInput object) to define the chamfer.
    //     // Returns the newly created ChamferFeature object or null if the creation failed.
    //     adsk.fusion.ChamferFeatures.prototype.add = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.ChamferFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ChamferFeatureInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeature) : null;
    //     };

    //     // Function that returns the specified chamfer feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.ChamferFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeature) : null;
    //     };
}

//=========== ChamferTypeDefinition ============
// The base class for the classes that define how a chamfer can be defined.
interface ChamferTypeDefinition {
    //         if (!(this instanceof adsk.fusion.ChamferTypeDefinition)) {
    //             return adsk.fusion.ChamferTypeDefinition.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.ChamferTypeDefinition.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.ChamferTypeDefinition.prototype.constructor = adsk.fusion.ChamferTypeDefinition;
    //     adsk.fusion.ChamferTypeDefinition.interfaceId = 'adsk.fusion.ChamferTypeDefinition';
    //     adsk.objectTypes['adsk.fusion.ChamferTypeDefinition'] = adsk.fusion.ChamferTypeDefinition;
    //     adsk.fusion.ChamferTypeDefinition.cast = function (object) {
    //         return object instanceof adsk.fusion.ChamferTypeDefinition ? object : null;
    //     };

    //     // Returns the feature that owns this chamfer type definition
    //     Object.defineProperty(adsk.fusion.ChamferTypeDefinition.prototype, 'parentFeature', {
    //         get : function () {
    //             var result = this._execute('parentFeature');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeature) : null;
    //         }
    //     });
}

//     //=========== ChamferTypes ============
//     // List of the different ways a chamfer can be defined.
//     adsk.fusion.ChamferTypes = {
//         EqualDistanceChamferType : 0,
//         TwoDistancesChamferType : 1,
//         DistanceAndAngleChamferType : 2
//     };

//=========== CircularPatternFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a circular pattern
// feature.
interface CircularPatternFeatureInput {
    //         if (!(this instanceof adsk.fusion.CircularPatternFeatureInput)) {
    //             return adsk.fusion.CircularPatternFeatureInput.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CircularPatternFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CircularPatternFeatureInput.prototype.constructor = adsk.fusion.CircularPatternFeatureInput;
    //     adsk.fusion.CircularPatternFeatureInput.interfaceId = 'adsk.fusion.CircularPatternFeatureInput';
    //     adsk.objectTypes['adsk.fusion.CircularPatternFeatureInput'] = adsk.fusion.CircularPatternFeatureInput;
    //     adsk.fusion.CircularPatternFeatureInput.cast = function (object) {
    //         return object instanceof adsk.fusion.CircularPatternFeatureInput ? object : null;
    //     };

    //     // Gets and sets the input entities. The collection can contain faces, features, bodies or occurrences.
    //     // All of the entities must be of a single type. For example, it can't contain features and occurrences
    //     // but only features or occurrences.
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatureInput.prototype, 'inputEntities', {
    //         get : function () {
    //             var result = this._execute('inputEntities');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('inputEntities', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the axis of circular pattern. This can be a sketch line, linear edge,
    //     // construction axis, an edge/sketch curve that defines an axis (circle, etc.) or a face that defines an axis (cylinder, cone, torus, etc.).
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatureInput.prototype, 'axis', {
    //         get : function () {
    //             var result = this._execute('axis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('axis', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets quantity of the elements.
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatureInput.prototype, 'quantity', {
    //         get : function () {
    //             var result = this._execute('quantity');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('quantity', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets total angle. A negative angle can be used to reverse the direction.
    //     // An angle of 360 degrees or 2 pi radians will create a full circular pattern.
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatureInput.prototype, 'totalAngle', {
    //         get : function () {
    //             var result = this._execute('totalAngle');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('totalAngle', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the angle extent is in one direction or symmetric.
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatureInput.prototype, 'isSymmetric', {
    //         get : function () {
    //             var result = this._execute('isSymmetric');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isSymmetric', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the compute option when patterning features. The default value for this is AdjustPatternCompute.
    //     // This property only applies when patterning features and is ignored in the direct modeling environment.
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatureInput.prototype, 'patternComputeOption', {
    //         get : function () {
    //             var result = this._execute('patternComputeOption');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('patternComputeOption', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//=========== CircularPatternFeatures ============
// Collection that provides access to all of the existing circular pattern features in a component
// and supports the ability to create new circular pattern features.
interface CircularPatternFeatures {
    //         if (!(this instanceof adsk.fusion.CircularPatternFeatures)) {
    //             return adsk.fusion.CircularPatternFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CircularPatternFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CircularPatternFeatures.prototype.constructor = adsk.fusion.CircularPatternFeatures;
    //     adsk.fusion.CircularPatternFeatures.interfaceId = 'adsk.fusion.CircularPatternFeatures';
    //     adsk.objectTypes['adsk.fusion.CircularPatternFeatures'] = adsk.fusion.CircularPatternFeatures;
    //     adsk.fusion.CircularPatternFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.CircularPatternFeatures ? object : null;
    //     };

    //     // The number of circular pattern features in the collection.
    //     Object.defineProperty(adsk.fusion.CircularPatternFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified circular pattern feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.CircularPatternFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeature) : null;
    //     };

    //     // Creates a CircularPatternFeatureInput object. Use properties and methods on this object
    //     // to define the circular pattern you want to create and then use the Add method, passing in
    //     // the CircularPatternFeatureInput object.
    //     // inputEntities : The collection can contain faces, features, bodies or occurrences.
    //     // All of the entities must be of a single type. For example, it can't contain features and occurrences
    //     // but only features or occurrences.
    //     // axis : Input linear entity or the entity has axis that defines axis of circular pattern. This can be a sketch line, linear edge,
    //     // construction axis, an edge/sketch curve that defines an axis (circle, etc.) or a face that defines an axis (cylinder, cone, torus, etc.).
    //     // Returns the newly created CircularPatternFeatureInput object or null if the creation failed.
    //     adsk.fusion.CircularPatternFeatures.prototype.createInput = function (inputEntities, axis) {
    //         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Base)) { throw new TypeError('axis must be a adsk.core.Base'); }
    //         var args = {
    //             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle),
    //             axis : (axis === null ? axis : axis.handle)
    //         };
    //         var result = this._execute('createInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeatureInput) : null;
    //     };

    //     // Creates a new circular pattern feature.
    //     // input : A CircularPatternFeatureInput object that defines the desired circular pattern. Use the createInput
    //     // method to create a new CircularPatternFeatureInput object and then use methods on it
    //     // (the CircularPatternFeatureInput object) to define the circular pattern.
    //     // Returns the newly created CircularPatternFeature object or null if the creation failed.
    //     adsk.fusion.CircularPatternFeatures.prototype.add = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.CircularPatternFeatureInput)) { throw new TypeError('input must be a adsk.fusion.CircularPatternFeatureInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeature) : null;
    //     };

    //     // Function that returns the specified circular pattern feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.CircularPatternFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeature) : null;
    //     };
}

//=========== CoilFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a coil feature.
interface CoilFeatureInput {
    //         if (!(this instanceof adsk.fusion.CoilFeatureInput)) {
    //             return adsk.fusion.CoilFeatureInput.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CoilFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CoilFeatureInput.prototype.constructor = adsk.fusion.CoilFeatureInput;
    //     adsk.fusion.CoilFeatureInput.interfaceId = 'adsk.fusion.CoilFeatureInput';
    //     adsk.objectTypes['adsk.fusion.CoilFeatureInput'] = adsk.fusion.CoilFeatureInput;
    //     adsk.fusion.CoilFeatureInput.cast = function (object) {
    //         return object instanceof adsk.fusion.CoilFeatureInput ? object : null;
    //     };

    //     // Specifies if the coil should be created as a solid or surface. This is
    //     // initialized to true so a solid will be created if it's not changed.
    //     // It only can be set to false in non-parametric modeling.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'isSolid', {
    //         get : function () {
    //             var result = this._execute('isSolid');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isSolid', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the revolutions number. Returns null in the case where the coilType property returns HeightAndPitchCoilType.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'revolutions', {
    //         get : function () {
    //             var result = this._execute('revolutions');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         }
    //     });

    //     // Gets the height. Returns null in the case where the coilType property returns RevolutionsAndPitchCoilType.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'height', {
    //         get : function () {
    //             var result = this._execute('height');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         }
    //     });

    //     // Gets the pitch. Returns null in the case where the coilType property returns RevolutionsAndHeightCoilType or SpiralCoilType.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'pitch', {
    //         get : function () {
    //             var result = this._execute('pitch');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         }
    //     });

    //     // Gets the angle. Returns null in the case where the coilType property returns SpiralCoilType.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'angle', {
    //         get : function () {
    //             var result = this._execute('angle');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         }
    //     });

    //     // Gets the type of the coil.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'coilType', {
    //         get : function () {
    //             var result = this._execute('coilType');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the type of operation performed by the coil.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'operation', {
    //         get : function () {
    //             var result = this._execute('operation');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('operation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the base plane.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'basePlane', {
    //         get : function () {
    //             var result = this._execute('basePlane');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('basePlane', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets whether the rotation is clockwise or counter-clockwise. A value of true indicates clockwise rotation.
    //     // It defaults to true.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'isClockwiseRotation', {
    //         get : function () {
    //             var result = this._execute('isClockwiseRotation');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isClockwiseRotation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the diameter.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'diameter', {
    //         get : function () {
    //             var result = this._execute('diameter');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('diameter', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the section type of the coil.
    //     // It defaults to CircularCoilSectionType.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'coilSectionType', {
    //         get : function () {
    //             var result = this._execute('coilSectionType');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('coilSectionType', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the section position of the coil.
    //     // It defaults to InsideCoilSectionPosition.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'coilSectionPosition', {
    //         get : function () {
    //             var result = this._execute('coilSectionPosition');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('coilSectionPosition', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the section size.
    //     Object.defineProperty(adsk.fusion.CoilFeatureInput.prototype, 'sectionSize', {
    //         get : function () {
    //             var result = this._execute('sectionSize');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('sectionSize', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Sets the coil type to RevolutionsAndHeightCoilType.
    //     // revolutions : A ValueInput object that defines the number of revolutions.
    //     // height : A ValueInput object that defines the height.
    //     // angle : A ValueInput object that defines angle.
    //     // Returns true if successful.
    //     adsk.fusion.CoilFeatureInput.prototype.setToRevolutionAndHeight = function (revolutions, height, angle) {
    //         if (revolutions !== null && !(revolutions instanceof adsk.core.ValueInput)) { throw new TypeError('revolutions must be a adsk.core.ValueInput'); }
    //         if (height !== null && !(height instanceof adsk.core.ValueInput)) { throw new TypeError('height must be a adsk.core.ValueInput'); }
    //         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //         var args = {
    //             revolutions : (revolutions === null ? revolutions : revolutions.handle),
    //             height : (height === null ? height : height.handle),
    //             angle : (angle === null ? angle : angle.handle)
    //         };
    //         var result = this._execute('setToRevolutionAndHeight', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the coil type to RevolutionsAndPitchCoilType.
    //     // revolutions : A ValueInput object that defines the number of revolutions.
    //     // pitch : A ValueInput object that defines the pitch.
    //     // angle : A ValueInput object that defines angle.
    //     // Returns true if successful.
    //     adsk.fusion.CoilFeatureInput.prototype.setToRevolutionsAndPitch = function (revolutions, pitch, angle) {
    //         if (revolutions !== null && !(revolutions instanceof adsk.core.ValueInput)) { throw new TypeError('revolutions must be a adsk.core.ValueInput'); }
    //         if (pitch !== null && !(pitch instanceof adsk.core.ValueInput)) { throw new TypeError('pitch must be a adsk.core.ValueInput'); }
    //         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //         var args = {
    //             revolutions : (revolutions === null ? revolutions : revolutions.handle),
    //             pitch : (pitch === null ? pitch : pitch.handle),
    //             angle : (angle === null ? angle : angle.handle)
    //         };
    //         var result = this._execute('setToRevolutionsAndPitch', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the coil type to HeightAndPitchCoilType.
    //     // height : A ValueInput object that defines the height.
    //     // pitch : A ValueInput object that defines the pitch.
    //     // angle : A ValueInput object that defines angle.
    //     // Returns true if successful.
    //     adsk.fusion.CoilFeatureInput.prototype.setToHeightAndPitchCoil = function (height, pitch, angle) {
    //         if (height !== null && !(height instanceof adsk.core.ValueInput)) { throw new TypeError('height must be a adsk.core.ValueInput'); }
    //         if (pitch !== null && !(pitch instanceof adsk.core.ValueInput)) { throw new TypeError('pitch must be a adsk.core.ValueInput'); }
    //         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //         var args = {
    //             height : (height === null ? height : height.handle),
    //             pitch : (pitch === null ? pitch : pitch.handle),
    //             angle : (angle === null ? angle : angle.handle)
    //         };
    //         var result = this._execute('setToHeightAndPitchCoil', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Sets the coil type to SpiralCoilType.
    //     // revolutions : A ValueInput object that defines the number of revolutions.
    //     // pitch : A ValueInput object that defines the pitch.
    //     // Returns true if successful.
    //     adsk.fusion.CoilFeatureInput.prototype.setToSpiral = function (revolutions, pitch) {
    //         if (revolutions !== null && !(revolutions instanceof adsk.core.ValueInput)) { throw new TypeError('revolutions must be a adsk.core.ValueInput'); }
    //         if (pitch !== null && !(pitch instanceof adsk.core.ValueInput)) { throw new TypeError('pitch must be a adsk.core.ValueInput'); }
    //         var args = {
    //             revolutions : (revolutions === null ? revolutions : revolutions.handle),
    //             pitch : (pitch === null ? pitch : pitch.handle)
    //         };
    //         var result = this._execute('setToSpiral', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== CoilFeatures ============
// Collection that provides access to all of the existing coil features in a design
// and supports the ability to create new coil features.
interface CoilFeatures {
    //         if (!(this instanceof adsk.fusion.CoilFeatures)) {
    //             return adsk.fusion.CoilFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CoilFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CoilFeatures.prototype.constructor = adsk.fusion.CoilFeatures;
    //     adsk.fusion.CoilFeatures.interfaceId = 'adsk.fusion.CoilFeatures';
    //     adsk.objectTypes['adsk.fusion.CoilFeatures'] = adsk.fusion.CoilFeatures;
    //     adsk.fusion.CoilFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.CoilFeatures ? object : null;
    //     };

    //     // The number of coil features in the collection.
    //     Object.defineProperty(adsk.fusion.CoilFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified coil feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.CoilFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CoilFeature) : null;
    //     };

    //     // Function that returns the specified coil feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.CoilFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CoilFeature) : null;
    //     };
}

//     //=========== CoilFeatureSectionPositions ============
//     // List of the section positions of coil feature.
//     adsk.fusion.CoilFeatureSectionPositions = {
//         InsideCoilFeatureSectionPosition : 0,
//         OnCenterCoilFeatureSectionPosition : 1,
//         OutsideCoilFeatureSectionPosition : 2
//     };

//     //=========== CoilFeatureSectionTypes ============
//     // List of the section types of coil primitive feature.
//     adsk.fusion.CoilFeatureSectionTypes = {
//         CircularCoilFeatureSectionType : 0,
//         SquareCoilFeatureSectionType : 1,
//         TriangularExternalCoilFeatureSectionType : 2,
//         TriangularInternalCoilFeatureSectionType : 3
//     };

//     //=========== CoilFeatureTypes ============
//     // List of the coil types.
//     adsk.fusion.CoilFeatureTypes = {
//         RevolutionsAndHeightCoilFeatureType : 0,
//         RevolutionsAndPitchCoilFeatureType : 1,
//         HeightAndPitchCoilFeatureType : 2,
//         SpiralCoilFeatureType : 3
//     };

//=========== CombineFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a combine
// feature.
interface CombineFeatureInput {
    //         if (!(this instanceof adsk.fusion.CombineFeatureInput)) {
    //             return adsk.fusion.CombineFeatureInput.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CombineFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CombineFeatureInput.prototype.constructor = adsk.fusion.CombineFeatureInput;
    //     adsk.fusion.CombineFeatureInput.interfaceId = 'adsk.fusion.CombineFeatureInput';
    //     adsk.objectTypes['adsk.fusion.CombineFeatureInput'] = adsk.fusion.CombineFeatureInput;
    //     adsk.fusion.CombineFeatureInput.cast = function (object) {
    //         return object instanceof adsk.fusion.CombineFeatureInput ? object : null;
    //     };

    //     // Gets and sets the BRep Body object that represents the blank body.
    //     Object.defineProperty(adsk.fusion.CombineFeatureInput.prototype, 'targetBody', {
    //         get : function () {
    //             var result = this._execute('targetBody');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.fusion.BRepBody)) { throw new TypeError('value must be a adsk.fusion.BRepBody'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('targetBody', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the BRep Body objects that represent the tool bodies.
    //     Object.defineProperty(adsk.fusion.CombineFeatureInput.prototype, 'toolBodies', {
    //         get : function () {
    //             var result = this._execute('toolBodies');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('toolBodies', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the type of operation performed by the combine.
    //     // The valid values are JoinFeatureOperation, CutFeatureOperation and IntersectFeatureOperation.
    //     // The default value is JoinFeatureOperation.
    //     Object.defineProperty(adsk.fusion.CombineFeatureInput.prototype, 'operation', {
    //         get : function () {
    //             var result = this._execute('operation');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
    //             var args = {
    //                 value : Number(value)
    //             };
    //             var result = this._execute('operation', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets a boolean value for whether or not a new component will be created with the results. The default value is false.
    //     // In Base feature environment NewComponent does not work.
    //     Object.defineProperty(adsk.fusion.CombineFeatureInput.prototype, 'isNewComponent', {
    //         get : function () {
    //             var result = this._execute('isNewComponent');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isNewComponent', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets a boolean value for whether or not the tool bodies are retrained after the combine results. The default value is false.
    //     Object.defineProperty(adsk.fusion.CombineFeatureInput.prototype, 'isKeepToolBodies', {
    //         get : function () {
    //             var result = this._execute('isKeepToolBodies');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isKeepToolBodies', args);
    //             return result ? result.value : undefined;
    //         }
    //     });
}

//=========== CombineFeatures ============
// Collection that provides access to all of the existing Combine features in a component
// and supports the ability to create new Combine features.
interface CombineFeatures {
    //         if (!(this instanceof adsk.fusion.CombineFeatures)) {
    //             return adsk.fusion.CombineFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CombineFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CombineFeatures.prototype.constructor = adsk.fusion.CombineFeatures;
    //     adsk.fusion.CombineFeatures.interfaceId = 'adsk.fusion.CombineFeatures';
    //     adsk.objectTypes['adsk.fusion.CombineFeatures'] = adsk.fusion.CombineFeatures;
    //     adsk.fusion.CombineFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.CombineFeatures ? object : null;
    //     };

    //     // The number of combine features in the collection.
    //     // This property returns nothing in the case where the feature is non-parametric.
    //     Object.defineProperty(adsk.fusion.CombineFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified combine feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     // This property returns nothing in the case where the feature is non-parametric.
    //     adsk.fusion.CombineFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeature) : null;
    //     };

    //     // Creates a CombineFeatureInput object. Use properties and methods on this object
    //     // to define the combine you want to create and then use the Add method, passing in
    //     // the CombineFeatureInput object.
    //     // targetBody : A BRep body that represents the blank body.
    //     // toolBodies : An ObjectCollection containing one or more BRep bodies that represent tool bodies.
    //     // Returns the newly created CombineFeatureInput object or null if the creation failed.
    //     adsk.fusion.CombineFeatures.prototype.createInput = function (targetBody, toolBodies) {
    //         if (targetBody !== null && !(targetBody instanceof adsk.fusion.BRepBody)) { throw new TypeError('targetBody must be a adsk.fusion.BRepBody'); }
    //         if (toolBodies !== null && !(toolBodies instanceof adsk.core.ObjectCollection)) { throw new TypeError('toolBodies must be a adsk.core.ObjectCollection'); }
    //         var args = {
    //             targetBody : (targetBody === null ? targetBody : targetBody.handle),
    //             toolBodies : (toolBodies === null ? toolBodies : toolBodies.handle)
    //         };
    //         var result = this._execute('createInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeatureInput) : null;
    //     };

    //     // Creates a new combine feature.
    //     // input : A CombineFeatureInput object that defines the desired combine. Use the createInput
    //     // method to create a new CombineFeatureInput object and then use methods on it
    //     // (the CombineFeatureInput object) to define the combine.
    //     // Returns the newly created CombineFeature object or null if the creation failed.
    //     // This function returns nothing in the case where the feature is non-parametric.
    //     adsk.fusion.CombineFeatures.prototype.add = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.CombineFeatureInput)) { throw new TypeError('input must be a adsk.fusion.CombineFeatureInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeature) : null;
    //     };

    //     // Function that returns the specified combine feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.CombineFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeature) : null;
    //     };
}

//=========== CylinderFeatures ============
// Collection that provides access to all of the existing cylinder features in a design.
interface CylinderFeatures {
    //         if (!(this instanceof adsk.fusion.CylinderFeatures)) {
    //             return adsk.fusion.CylinderFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.CylinderFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.CylinderFeatures.prototype.constructor = adsk.fusion.CylinderFeatures;
    //     adsk.fusion.CylinderFeatures.interfaceId = 'adsk.fusion.CylinderFeatures';
    //     adsk.objectTypes['adsk.fusion.CylinderFeatures'] = adsk.fusion.CylinderFeatures;
    //     adsk.fusion.CylinderFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.CylinderFeatures ? object : null;
    //     };

    //     // The number of cylinder features in the collection.
    //     Object.defineProperty(adsk.fusion.CylinderFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified cylinder feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.CylinderFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CylinderFeature) : null;
    //     };

    //     // Function that returns the specified cylinder feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.CylinderFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CylinderFeature) : null;
    //     };
}

//=========== DraftFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a draft
// feature.
interface DraftFeatureInput {
    //         if (!(this instanceof adsk.fusion.DraftFeatureInput)) {
    //             return adsk.fusion.DraftFeatureInput.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.DraftFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.DraftFeatureInput.prototype.constructor = adsk.fusion.DraftFeatureInput;
    //     adsk.fusion.DraftFeatureInput.interfaceId = 'adsk.fusion.DraftFeatureInput';
    //     adsk.objectTypes['adsk.fusion.DraftFeatureInput'] = adsk.fusion.DraftFeatureInput;
    //     adsk.fusion.DraftFeatureInput.cast = function (object) {
    //         return object instanceof adsk.fusion.DraftFeatureInput ? object : null;
    //     };

    //     // Gets and sets the input faces.
    //     // If IsTangentChain is true, all the faces that are tangentially connected to the input faces (if any) will also be included.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'inputFaces', {
    //         get : function () {
    //             var result = this._execute('inputFaces');
    //             if (!result || !Array.isArray(result.value)) {
    //                 return undefined
    //             }
    //             var resultIter;
    //             var resultValue = [];
    //             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
    //                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.fusion.BRepFace) : null;
    //             }
    //             return resultValue
    //         },
    //         set : function (value) {
    //             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
    //             var valueLength = value.length;
    //             var valueIt;
    //             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
    //                 if (value[valueIt] !== null && !(value[valueIt] instanceof adsk.fusion.BRepFace)) { throw new TypeError('value[valueIt] must be a adsk.fusion.BRepFace'); }
    //             }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('inputFaces', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the plane that defines the direction in which the draft is applied. This can be a planar BrepFace, or a ConstructionPlane.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'plane', {
    //         get : function () {
    //             var result = this._execute('plane');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
    //         },
    //         set : function (value) {
    //             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('plane', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if any faces that are tangentially connected to any of
    //     // the input faces will also be included in setting InputEntities. It defaults to true.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'isTangentChain', {
    //         get : function () {
    //             var result = this._execute('isTangentChain');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isTangentChain', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the direction of the draft is flipped.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'isDirectionFlipped', {
    //         get : function () {
    //             var result = this._execute('isDirectionFlipped');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isDirectionFlipped', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets the first, or the only angle in the case of a single angle definition.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'angleOne', {
    //         get : function () {
    //             var result = this._execute('angleOne');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         }
    //     });

    //     // Gets the second angle. This can be null in the case where a single angle definition is used.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'angleTwo', {
    //         get : function () {
    //             var result = this._execute('angleTwo');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
    //         }
    //     });

    //     // Gets if the draft is symmetric from the draft plane. This only applies in the case where two
    //     // angles have been specified and should be ignored otherwise.
    //     Object.defineProperty(adsk.fusion.DraftFeatureInput.prototype, 'isSymmetric', {
    //         get : function () {
    //             var result = this._execute('isSymmetric');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Defines the draft to be defined so that a single angle is used for all drafts.
    //     // If the isSymmetric is true then the faces are split along the parting plane and drafted
    //     // independently using the same angle.
    //     // isSymmetric : Set to 'true' if the faces are to be split along the plane and drafted symmetrically. This
    //     // will have the side effect of setting the isSymmetric property to the same value.
    //     // angle : The ValueInput object that defines the angle of the draft. This can be a positive or negative
    //     // value which will affect the direction of the draft along with the isDirectionFlipped property.
    //     // Returns true if successful
    //     adsk.fusion.DraftFeatureInput.prototype.setSingleAngle = function (isSymmetric, angle) {
    //         if (typeof isSymmetric !== 'boolean') { throw new TypeError('isSymmetric must be a boolean'); }
    //         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
    //         var args = {
    //             isSymmetric : isSymmetric,
    //             angle : (angle === null ? angle : angle.handle)
    //         };
    //         var result = this._execute('setSingleAngle', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Defines both angles to use when the surfaces are split along the draft plane and
    //     // the faces on each side of the plane are drafted independently from the other side.
    //     // angleOne : The ValueInput object that defines the angle for the faces on the first side of the draft plane.
    //     // angleTwo : The ValueInput object that defines the angle for the faces on the second side of the draft plane.
    //     // Returns true if successful
    //     adsk.fusion.DraftFeatureInput.prototype.setTwoAngles = function (angleOne, angleTwo) {
    //         if (angleOne !== null && !(angleOne instanceof adsk.core.ValueInput)) { throw new TypeError('angleOne must be a adsk.core.ValueInput'); }
    //         if (angleTwo !== null && !(angleTwo instanceof adsk.core.ValueInput)) { throw new TypeError('angleTwo must be a adsk.core.ValueInput'); }
    //         var args = {
    //             angleOne : (angleOne === null ? angleOne : angleOne.handle),
    //             angleTwo : (angleTwo === null ? angleTwo : angleTwo.handle)
    //         };
    //         var result = this._execute('setTwoAngles', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== DraftFeatures ============
// Collection that provides access to all of the existing draft features in a component
// and supports the ability to create new draft features.
interface DraftFeatures {
    //         if (!(this instanceof adsk.fusion.DraftFeatures)) {
    //             return adsk.fusion.DraftFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.DraftFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.DraftFeatures.prototype.constructor = adsk.fusion.DraftFeatures;
    //     adsk.fusion.DraftFeatures.interfaceId = 'adsk.fusion.DraftFeatures';
    //     adsk.objectTypes['adsk.fusion.DraftFeatures'] = adsk.fusion.DraftFeatures;
    //     adsk.fusion.DraftFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.DraftFeatures ? object : null;
    //     };

    //     // The number of draft features in the collection.
    //     Object.defineProperty(adsk.fusion.DraftFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified draft feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.DraftFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeature) : null;
    //     };

    //     // Creates a DraftFeatureInput object. Use properties and methods on this object
    //     // to define the draft you want to create and then use the Add method, passing in
    //     // the DraftFeatureInput object.
    //     // inputFaces : BRepFace array that contains the faces to which draft will be applied.
    //     // The picked point on face is always the point returned from pointOnFace property of the first BRepFace in this collection.
    //     // plane : Input object that defines the direction in which the draft is applied. This can be a planar BrepFace, or a ConstructionPlane.
    //     // isTangentChain : A boolean value for setting whether or not faces that are tangentially connected to
    //     // any of the input faces (if any) will also be included. It defaults to true.
    //     // Returns the newly created DraftFeatureInput object or null if the creation failed.
    //     adsk.fusion.DraftFeatures.prototype.createInput = function (inputFaces, plane, isTangentChain) {
    //         if (!Array.isArray(inputFaces)) { throw new TypeError('inputFaces must be an array'); }
    //         var inputFacesLength = inputFaces.length;
    //         var inputFacesIt;
    //         for (inputFacesIt = 0; inputFacesIt < inputFacesLength; ++inputFacesIt) {
    //             if (inputFaces[inputFacesIt] !== null && !(inputFaces[inputFacesIt] instanceof adsk.fusion.BRepFace)) { throw new TypeError('inputFaces[inputFacesIt] must be a adsk.fusion.BRepFace'); }
    //         }
    //         if (plane !== null && !(plane instanceof adsk.core.Base)) { throw new TypeError('plane must be a adsk.core.Base'); }
    //         if (isTangentChain === null || (isTangentChain !== undefined && typeof isTangentChain !== 'boolean')) { throw new TypeError('isTangentChain must be a boolean'); }
    //         var args = {
    //             inputFaces : inputFaces,
    //             plane : (plane === null ? plane : plane.handle)
    //         };
    //         if (isTangentChain !== undefined) {
    //             args.isTangentChain = isTangentChain;
    //         }
    //         var result = this._execute('createInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeatureInput) : null;
    //     };

    //     // Creates a new draft feature.
    //     // input : A DraftFeatureInput object that defines the desired draft. Use the createInput
    //     // method to create a new DraftFeatureInput object and then use methods on it
    //     // (the DraftFeatureInput object) to define the draft.
    //     // Returns the newly created DraftFeature object or null if the creation failed.
    //     adsk.fusion.DraftFeatures.prototype.add = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.DraftFeatureInput)) { throw new TypeError('input must be a adsk.fusion.DraftFeatureInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeature) : null;
    //     };

    //     // Function that returns the specified draft feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.DraftFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeature) : null;
    //     };
}
//     //=========== ExtendFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a extend feature.
//     adsk.fusion.ExtendFeatureInput = function ExtendFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ExtendFeatureInput)) {
//             return adsk.fusion.ExtendFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExtendFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExtendFeatureInput.prototype.constructor = adsk.fusion.ExtendFeatureInput;
//     adsk.fusion.ExtendFeatureInput.interfaceId = 'adsk.fusion.ExtendFeatureInput';
//     adsk.objectTypes['adsk.fusion.ExtendFeatureInput'] = adsk.fusion.ExtendFeatureInput;
//     adsk.fusion.ExtendFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ExtendFeatureInput ? object : null;
//     };

//     // Gets and sets the edges to extend
//     Object.defineProperty(adsk.fusion.ExtendFeatureInput.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('edges', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the ValueInput object that defines the extend distance
//     Object.defineProperty(adsk.fusion.ExtendFeatureInput.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distance', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets surface extend type to use
//     Object.defineProperty(adsk.fusion.ExtendFeatureInput.prototype, 'extendType', {
//         get : function () {
//             var result = this._execute('extendType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('extendType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if all edges that are tangent or curvature continuous, and end point connected, will be found
//     // automatically and extended.
//     Object.defineProperty(adsk.fusion.ExtendFeatureInput.prototype, 'isChainingEnabled', {
//         get : function () {
//             var result = this._execute('isChainingEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isChainingEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ExtendFeatures ============
//     // Collection that provides access to all of the existing Extend features in a component
//     // and supports the ability to create new Extend features.
//     adsk.fusion.ExtendFeatures = function ExtendFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ExtendFeatures)) {
//             return adsk.fusion.ExtendFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExtendFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExtendFeatures.prototype.constructor = adsk.fusion.ExtendFeatures;
//     adsk.fusion.ExtendFeatures.interfaceId = 'adsk.fusion.ExtendFeatures';
//     adsk.objectTypes['adsk.fusion.ExtendFeatures'] = adsk.fusion.ExtendFeatures;
//     adsk.fusion.ExtendFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ExtendFeatures ? object : null;
//     };

//     // The number of Extend features in the collection.
//     Object.defineProperty(adsk.fusion.ExtendFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified extend feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ExtendFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeature) : null;
//     };

//     // Creates a ExtendFeatureInput object. Use properties and methods on this object
//     // to define the extend feature you want to create and then use the Add method, passing in
//     // the ExtendFeatureInput object.
//     // edges : The surface edges to extend.
//     // Only the outer edges from an open body can be extended. The edges must all be from the same body.
//     // Depending on the extend type there can also be some limitations on the edges being input as described below
//     // for the extendType argument.
//     // distance : ValueInput object that defines the distance to extend the face/s.
//     // Natural and Tangent Extend types require a positive distance value.
//     // Perpendicular Extend Type supports either a positive or negative value to
//     // control the direction of the extend. A positive number results in the
//     // perpendicular extension being in the same direction as the positive normal
//     // of the connected faces.
//     // extendType : The extension type to use when extending the face(s).
//     // Input edges must be connected at endpoints when Tangent or Perpendicular Extend Types are used.
//     // Input edges need not be connected when Natural Extend type is used.
//     // isChainingEnabled : An optional boolean argument whose default is true. If this argument is true, all edges that are
//     // tangent or curvature continuous, and end point connected, will be found automatically and include
//     // in the set of edges to extend.
//     // Returns the newly created ExtendFeatureInput object or null if the creation failed.
//     adsk.fusion.ExtendFeatures.prototype.createInput = function (edges, distance, extendType, isChainingEnabled) {
//         if (edges !== null && !(edges instanceof adsk.core.ObjectCollection)) { throw new TypeError('edges must be a adsk.core.ObjectCollection'); }
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         if (!isFinite(extendType)) { throw new TypeError('extendType must be a number'); }
//         if (isChainingEnabled === null || (isChainingEnabled !== undefined && typeof isChainingEnabled !== 'boolean')) { throw new TypeError('isChainingEnabled must be a boolean'); }
//         var args = {
//             edges : (edges === null ? edges : edges.handle),
//             distance : (distance === null ? distance : distance.handle),
//             extendType : Number(extendType)
//         };
//         if (isChainingEnabled !== undefined) {
//             args.isChainingEnabled = isChainingEnabled;
//         }
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeatureInput) : null;
//     };

//     // Creates a new extend feature.
//     // input : An ExtendFeatureInput object that defines the desired extend feature. Use the createInput
//     // method to create a new ExtendFeatureInput object and then use methods on it
//     // (the ExtendFeatureInput object) to define the desired options for the extent feature.
//     // Returns the newly created ExtendFeature object or null if the creation failed.
//     adsk.fusion.ExtendFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ExtendFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ExtendFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeature) : null;
//     };

//     // Function that returns the specified extend feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ExtendFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeature) : null;
//     };

//     //=========== ExtentDefinition ============
//     // The base class for all extent definition classes
//     adsk.fusion.ExtentDefinition = function ExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.ExtentDefinition)) {
//             return adsk.fusion.ExtentDefinition.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExtentDefinition.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExtentDefinition.prototype.constructor = adsk.fusion.ExtentDefinition;
//     adsk.fusion.ExtentDefinition.interfaceId = 'adsk.fusion.ExtentDefinition';
//     adsk.objectTypes['adsk.fusion.ExtentDefinition'] = adsk.fusion.ExtentDefinition;
//     adsk.fusion.ExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.ExtentDefinition ? object : null;
//     };

//     // Returns the feature that owns this extent definition
//     Object.defineProperty(adsk.fusion.ExtentDefinition.prototype, 'parentFeature', {
//         get : function () {
//             var result = this._execute('parentFeature');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Feature) : null;
//         }
//     });

//     //=========== ExtentDirections ============
//     // List of the valid extent directions.
//     adsk.fusion.ExtentDirections = {
//         PositiveExtentDirection : 0,
//         NegativeExtentDirection : 1,
//         SymmetricExtentDirection : 2
//     };

//     //=========== ExtrudeFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of an extrude
//     // feature. This class also provides properties for setting/getting the Profile and Operation
//     // of the extrude. The Profile and Operation are defined when the ExtrudeFeatures.createInput
//     // method is called so they do not exist as properties on this class.
//     adsk.fusion.ExtrudeFeatureInput = function ExtrudeFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ExtrudeFeatureInput)) {
//             return adsk.fusion.ExtrudeFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExtrudeFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExtrudeFeatureInput.prototype.constructor = adsk.fusion.ExtrudeFeatureInput;
//     adsk.fusion.ExtrudeFeatureInput.interfaceId = 'adsk.fusion.ExtrudeFeatureInput';
//     adsk.objectTypes['adsk.fusion.ExtrudeFeatureInput'] = adsk.fusion.ExtrudeFeatureInput;
//     adsk.fusion.ExtrudeFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ExtrudeFeatureInput ? object : null;
//     };

//     // Gets and sets the profiles or planar faces used to define the shape of the extrude.
//     // This property can return or be set with a single profile, a single planar face, or
//     // an ObjectCollection consisting of multiple profiles and planar faces. When an
//     // ObjectCollection is used all of the profiles and faces must be co-planar.
//     Object.defineProperty(adsk.fusion.ExtrudeFeatureInput.prototype, 'profile', {
//         get : function () {
//             var result = this._execute('profile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('profile', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the type of operation performed by the extrusion.
//     Object.defineProperty(adsk.fusion.ExtrudeFeatureInput.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the taper angle of the extrusion. This property is initialized
//     // with a taper angle of zero. A negative angle will taper the extrusion inward
//     // while a positive value will taper the extrusion outward.
//     // This property is valid for both parametric and non-parametric extrusions.
//     Object.defineProperty(adsk.fusion.ExtrudeFeatureInput.prototype, 'taperAngle', {
//         get : function () {
//             var result = this._execute('taperAngle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('taperAngle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
//     // specified when the Extrusion is created based on geometry (e.g. a profile and/or face(s))
//     // in another component AND (the Extrusion) is not in the root component.
//     // The CreationOccurrence is analogous to the active occurrence in the UI
//     Object.defineProperty(adsk.fusion.ExtrudeFeatureInput.prototype, 'creationOccurrence', {
//         get : function () {
//             var result = this._execute('creationOccurrence');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('creationOccurrence', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies if the extrusion should be created as a solid or surface. If
//     // it's a surface then there aren't any end caps and it's open. This is
//     // initialized to true so a solid will be created if it's not changed.
//     Object.defineProperty(adsk.fusion.ExtrudeFeatureInput.prototype, 'isSolid', {
//         get : function () {
//             var result = this._execute('isSolid');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSolid', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets the extrusion extents option to 'Distance'.
//     // isSymmetric : Set to 'true' for an extrusion symmetrical about the profile plane
//     // distance : ValueInput object that defines the extrude distance.
//     // If the isSymmetric argument is 'false', a positive or negative distance can be used to control the direction.
//     // Returns true if successful
//     adsk.fusion.ExtrudeFeatureInput.prototype.setDistanceExtent = function (isSymmetric, distance) {
//         if (typeof isSymmetric !== 'boolean') { throw new TypeError('isSymmetric must be a boolean'); }
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         var args = {
//             isSymmetric : isSymmetric,
//             distance : (distance === null ? distance : distance.handle)
//         };
//         var result = this._execute('setDistanceExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extrusion extents option to 'Two Side'.
//     // This method will fail in the case of a non-parametric extrusion.
//     // distanceOne : ValueInput object that defines the extrude distance for the first side.
//     // distanceTwo : ValueInput object that defines the extrude distance for the second side.
//     // Returns true if successful
//     adsk.fusion.ExtrudeFeatureInput.prototype.setTwoSidesDistanceExtent = function (distanceOne, distanceTwo) {
//         if (distanceOne !== null && !(distanceOne instanceof adsk.core.ValueInput)) { throw new TypeError('distanceOne must be a adsk.core.ValueInput'); }
//         if (distanceTwo !== null && !(distanceTwo instanceof adsk.core.ValueInput)) { throw new TypeError('distanceTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             distanceOne : (distanceOne === null ? distanceOne : distanceOne.handle),
//             distanceTwo : (distanceTwo === null ? distanceTwo : distanceTwo.handle)
//         };
//         var result = this._execute('setTwoSidesDistanceExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extrusion extents option to 'All' (i.e. the extrusion is through-all, in both directions.)
//     // This method will fail in the case of a non-parametric extrusion.
//     // direction : The direction can be either positive, negative, or symmetric.
//     // Returns true if successful
//     adsk.fusion.ExtrudeFeatureInput.prototype.setAllExtent = function (direction) {
//         if (!isFinite(direction)) { throw new TypeError('direction must be a number'); }
//         var args = {
//             direction : Number(direction)
//         };
//         var result = this._execute('setAllExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extrusion Direction option to 'One Side' and the Extents option to 'To' (a specified face)
//     // toEntity : The entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For an extrude it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // matchShape : If the matchShape argument is 'true', the toEntity is extended to fully intersect the extrusion.
//     // directionHint : Specifies the direction of the extrusion. This is only used in the case where there are two possible solutions and the extrusion can
//     // hit the toEntity in either direction. An example is if the profile of the extrusion is within a hole.
//     // The extrusion will intersect the cylinder of the hole in either direction.
//     // Typically there is only a single solution and the direction is determined automatically.
//     // Returns true if successful.
//     adsk.fusion.ExtrudeFeatureInput.prototype.setOneSideToExtent = function (toEntity, matchShape, directionHint) {
//         if (toEntity !== null && !(toEntity instanceof adsk.core.Base)) { throw new TypeError('toEntity must be a adsk.core.Base'); }
//         if (typeof matchShape !== 'boolean') { throw new TypeError('matchShape must be a boolean'); }
//         if (directionHint === null || (directionHint !== undefined && directionHint !== null && !(directionHint instanceof adsk.core.Vector3D))) { throw new TypeError('directionHint must be a adsk.core.Vector3D'); }
//         var args = {
//             toEntity : (toEntity === null ? toEntity : toEntity.handle),
//             matchShape : matchShape
//         };
//         if (directionHint !== undefined) {
//             args.directionHint = (directionHint === null ? directionHint : directionHint.handle);
//         }
//         var result = this._execute('setOneSideToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Set the extrusion Direction option to 'Two Side'
//     // This method will fail in the case of a non-parametric extrusion.
//     // toEntityOne : The first entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For an extrude it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // toEntityTwo : The second entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For an extrude it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // matchShape : If the matchShape argument is 'true', the toEntity is extended to fully intersect the extrusion.
//     // Returns true if successful.
//     adsk.fusion.ExtrudeFeatureInput.prototype.setTwoSidesToExtent = function (toEntityOne, toEntityTwo, matchShape) {
//         if (toEntityOne !== null && !(toEntityOne instanceof adsk.core.Base)) { throw new TypeError('toEntityOne must be a adsk.core.Base'); }
//         if (toEntityTwo !== null && !(toEntityTwo instanceof adsk.core.Base)) { throw new TypeError('toEntityTwo must be a adsk.core.Base'); }
//         if (typeof matchShape !== 'boolean') { throw new TypeError('matchShape must be a boolean'); }
//         var args = {
//             toEntityOne : (toEntityOne === null ? toEntityOne : toEntityOne.handle),
//             toEntityTwo : (toEntityTwo === null ? toEntityTwo : toEntityTwo.handle),
//             matchShape : matchShape
//         };
//         var result = this._execute('setTwoSidesToExtent', args);
//         return result ? result.value : undefined;
//     };

//     //=========== ExtrudeFeatures ============
//     // Collection that provides access to all of the existing extrude features in a design
//     // and supports the ability to create new extrude features.
//     adsk.fusion.ExtrudeFeatures = function ExtrudeFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ExtrudeFeatures)) {
//             return adsk.fusion.ExtrudeFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ExtrudeFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ExtrudeFeatures.prototype.constructor = adsk.fusion.ExtrudeFeatures;
//     adsk.fusion.ExtrudeFeatures.interfaceId = 'adsk.fusion.ExtrudeFeatures';
//     adsk.objectTypes['adsk.fusion.ExtrudeFeatures'] = adsk.fusion.ExtrudeFeatures;
//     adsk.fusion.ExtrudeFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ExtrudeFeatures ? object : null;
//     };

//     // The number of extrude features in the collection.
//     Object.defineProperty(adsk.fusion.ExtrudeFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified extrude feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ExtrudeFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeature) : null;
//     };

//     // Creates a new ExtrudeFeatureInput object that is used to specify the input needed
//     // to create a new extrude feature.
//     // profile : The profile argument can be a single Profile, a single planar face, a single SketchText object,
//     // or an ObjectCollection consisting of multiple profiles, planar faces, and sketch texts.
//     // When an ObjectCollection is used all of the profiles, faces, and sketch texts must be co-planar.
//     // operation : The feature operation to perform.
//     // Returns the newly created ExtrudeFeatureInput object or null if the creation failed.
//     adsk.fusion.ExtrudeFeatures.prototype.createInput = function (profile, operation) {
//         if (profile !== null && !(profile instanceof adsk.core.Base)) { throw new TypeError('profile must be a adsk.core.Base'); }
//         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
//         var args = {
//             profile : (profile === null ? profile : profile.handle),
//             operation : Number(operation)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeatureInput) : null;
//     };

//     // Creates a new extrude feature based on the information defined by the provided ExtrudeFeatureInput object.
//     // To create a new extrusion use the createInput function to create a new input object and use the methods and
//     // properties on that object to define the required input for an extrusion. Once the information is defined on the
//     // input object you can pass it to the Add method to create the extrusion.
//     // input : The ExtrudeFeatureInput object that specifies the input needed to create a new extrude
//     // feature.
//     // Returns the newly created ExtrudeFeature or null if the creation failed.
//     adsk.fusion.ExtrudeFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ExtrudeFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ExtrudeFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeature) : null;
//     };

//     // Function that returns the specified extrude feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ExtrudeFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeature) : null;
//     };

//     //=========== Feature ============
//     // Base class object representing all features.
//     adsk.fusion.Feature = function Feature(handle) {
//         if (!(this instanceof adsk.fusion.Feature)) {
//             return adsk.fusion.Feature.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Feature.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Feature.prototype.constructor = adsk.fusion.Feature;
//     adsk.fusion.Feature.interfaceId = 'adsk.fusion.Feature';
//     adsk.objectTypes['adsk.fusion.Feature'] = adsk.fusion.Feature;
//     adsk.fusion.Feature.cast = function (object) {
//         return object instanceof adsk.fusion.Feature ? object : null;
//     };

//     // Returns the name of the feature as seen in the browser (non-parametric) or in the timeline (parametric).
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'name', {
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

//     // Gets and sets if this feature is suppressed. This is only valid
//     // for parametric features.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'isSuppressed', {
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

//     // Indicates if this feature is parametric or not.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'isParametric', {
//         get : function () {
//             var result = this._execute('isParametric');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the faces that were created by this feature.
//     // This works for both parametric and non-parametric features.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'faces', {
//         get : function () {
//             var result = this._execute('faces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Returns the parent component that owns this feature.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'parentComponent', {
//         get : function () {
//             var result = this._execute('parentComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Returns the set of features that are linked to this feature. The set of linked features
//     // are all of the features that were created in various components as the result of a
//     // single feature being created in the user interface.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'linkedFeatures', {
//         get : function () {
//             var result = this._execute('linkedFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FeatureList) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Returns the timeline object associated with this feature.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // Returns the bodies that were modified or created by this feature.
//     // This works for both parametric and non-parametric features.
//     Object.defineProperty(adsk.fusion.Feature.prototype, 'bodies', {
//         get : function () {
//             var result = this._execute('bodies');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBodies) : null;
//         }
//     });

//     // Deletes the feature.
//     // This works for both parametric and non-parametric features.
//     // Returns a bool indicating if the delete was successful or not.
//     adsk.fusion.Feature.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Dissolves the feature so that the feature information is lost
//     // and only the B-Rep geometry defined by the feature remains.
//     // This is only valid for non-parametric features.
//     // Returns a bool indicating if the dissolve was successful or not.
//     adsk.fusion.Feature.prototype.dissolve = function () {
//         var result = this._execute('dissolve');
//         return result ? result.value : undefined;
//     };

//     //=========== FeatureList ============
//     // Provides access to a list of features. This is used in the API to return
//     // a list of features from an API call.
//     adsk.fusion.FeatureList = function FeatureList(handle) {
//         if (!(this instanceof adsk.fusion.FeatureList)) {
//             return adsk.fusion.FeatureList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.FeatureList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.FeatureList.prototype.constructor = adsk.fusion.FeatureList;
//     adsk.fusion.FeatureList.interfaceId = 'adsk.fusion.FeatureList';
//     adsk.objectTypes['adsk.fusion.FeatureList'] = adsk.fusion.FeatureList;
//     adsk.fusion.FeatureList.cast = function (object) {
//         return object instanceof adsk.fusion.FeatureList ? object : null;
//     };

//     // The number of features in this collection.
//     Object.defineProperty(adsk.fusion.FeatureList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified folder.
//     // index : The index of the feature to return. The first feature in the list has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.FeatureList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Feature) : null;
//     };

//     //=========== FeatureOperations ============
//     // List of the different operations a feature can perform.
//     adsk.fusion.FeatureOperations = {
//         JoinFeatureOperation : 0,
//         CutFeatureOperation : 1,
//         IntersectFeatureOperation : 2,
//         NewBodyFeatureOperation : 3,
//         NewComponentFeatureOperation : 4
//     };

//     //=========== Features ============
//     // The features collection which provides access to all existing features. This collection
//     // provides direct access to all features regardless of type. It also provides access
//     // to type specific collections where you can get features of a specific type and also create
//     // new features of that type.
//     adsk.fusion.Features = function Features(handle) {
//         if (!(this instanceof adsk.fusion.Features)) {
//             return adsk.fusion.Features.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Features.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Features.prototype.constructor = adsk.fusion.Features;
//     adsk.fusion.Features.interfaceId = 'adsk.fusion.Features';
//     adsk.objectTypes['adsk.fusion.Features'] = adsk.fusion.Features;
//     adsk.fusion.Features.cast = function (object) {
//         return object instanceof adsk.fusion.Features ? object : null;
//     };

//     // Returns the number of bodies in the collection.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the collection that provides access to the extrude features within the component
//     // and supports the creation of new extrude features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'extrudeFeatures', {
//         get : function () {
//             var result = this._execute('extrudeFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the revolve features within the component
//     // and supports the creation of new revolved features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'revolveFeatures', {
//         get : function () {
//             var result = this._execute('revolveFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the hole features within the component
//     // and supports the creation of new hole features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'holeFeatures', {
//         get : function () {
//             var result = this._execute('holeFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the fillet features within the component
//     // and supports the creation of new fillet features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'filletFeatures', {
//         get : function () {
//             var result = this._execute('filletFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the sweep features within the component
//     // and supports the creation of new sweep features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'sweepFeatures', {
//         get : function () {
//             var result = this._execute('sweepFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the chamfer features within the component
//     // and supports the creation of new chamfer features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'chamferFeatures', {
//         get : function () {
//             var result = this._execute('chamferFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the shell features within the component
//     // and supports the creation of new shell features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'shellFeatures', {
//         get : function () {
//             var result = this._execute('shellFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the mirror features within the component
//     // and supports the creation of new mirror features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'mirrorFeatures', {
//         get : function () {
//             var result = this._execute('mirrorFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the circular pattern features within the component
//     // and supports the creation of new circular pattern features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'circularPatternFeatures', {
//         get : function () {
//             var result = this._execute('circularPatternFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the rectangular pattern features within the component
//     // and supports the creation of new rectangular pattern features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'rectangularPatternFeatures', {
//         get : function () {
//             var result = this._execute('rectangularPatternFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the path pattern features within the component
//     // and supports the creation of new path pattern features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'pathPatternFeatures', {
//         get : function () {
//             var result = this._execute('pathPatternFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the combine features within the component
//     // and supports the creation of new combine features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'combineFeatures', {
//         get : function () {
//             var result = this._execute('combineFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the thread features within the component
//     // and supports the creation of new thread features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'threadFeatures', {
//         get : function () {
//             var result = this._execute('threadFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the draft features within the component
//     // and supports the creation of new draft features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'draftFeatures', {
//         get : function () {
//             var result = this._execute('draftFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the scale features within the component
//     // and supports the creation of new scale features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'scaleFeatures', {
//         get : function () {
//             var result = this._execute('scaleFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the replaceFace features within the component
//     // and supports the creation of new replaceFace features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'replaceFaceFeatures', {
//         get : function () {
//             var result = this._execute('replaceFaceFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Move features within the component
//     // and supports the creation of new Move features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'moveFeatures', {
//         get : function () {
//             var result = this._execute('moveFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the SplitFace features within the component and supports the creation
//     // of new SplitFace features
//     Object.defineProperty(adsk.fusion.Features.prototype, 'splitFaceFeatures', {
//         get : function () {
//             var result = this._execute('splitFaceFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the SplitBody features within the component and supports the creation
//     // of new SplitBody features
//     Object.defineProperty(adsk.fusion.Features.prototype, 'splitBodyFeatures', {
//         get : function () {
//             var result = this._execute('splitBodyFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Parting Line Split features within the component and supports
//     // the creation of new Parting Line Split features
//     Object.defineProperty(adsk.fusion.Features.prototype, 'silhouetteSplitFeatures', {
//         get : function () {
//             var result = this._execute('silhouetteSplitFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Offset features within the component
//     // and supports the creation of new Offset features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'offsetFeatures', {
//         get : function () {
//             var result = this._execute('offsetFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Extend features within the component
//     // and supports the creation of new Extend features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'extendFeatures', {
//         get : function () {
//             var result = this._execute('extendFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Stitch features within the component
//     // and supports the creation of new Stitch features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'stitchFeatures', {
//         get : function () {
//             var result = this._execute('stitchFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Boundary Fill features within the component
//     // and supports the creation of new Boundary Fill features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'boundaryFillFeatures', {
//         get : function () {
//             var result = this._execute('boundaryFillFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Trim features within the component
//     // and supports the creation of new Trim features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'trimFeatures', {
//         get : function () {
//             var result = this._execute('trimFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Thicken features within the component
//     // and supports the creation of new Thicken features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'thickenFeatures', {
//         get : function () {
//             var result = this._execute('thickenFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Unstitch features within the component
//     // and supports the creation of new Unstitch features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'unstitchFeatures', {
//         get : function () {
//             var result = this._execute('unstitchFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UnstitchFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Remove features within the component
//     // and supports the creation of new Remove features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'removeFeatures', {
//         get : function () {
//             var result = this._execute('removeFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RemoveFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing base features
//     // and supports the creation of new base features. A base feature represents
//     // a body that is non-parametric.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'baseFeatures', {
//         get : function () {
//             var result = this._execute('baseFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BaseFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Coil Primitive features within the component
//     // and supports the creation of new Coil Primitive features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'coilFeatures', {
//         get : function () {
//             var result = this._execute('coilFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CoilFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing box features
//     // and supports the creation of new box features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'boxFeatures', {
//         get : function () {
//             var result = this._execute('boxFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoxFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing cylinder features
//     // and supports the creation of new cylinder features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'cylinderFeatures', {
//         get : function () {
//             var result = this._execute('cylinderFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CylinderFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing sphere features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'sphereFeatures', {
//         get : function () {
//             var result = this._execute('sphereFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SphereFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing torus features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'torusFeatures', {
//         get : function () {
//             var result = this._execute('torusFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TorusFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing pipe features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'pipeFeatues', {
//         get : function () {
//             var result = this._execute('pipeFeatues');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PipeFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing rib features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'ribFeatures', {
//         get : function () {
//             var result = this._execute('ribFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RibFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing web features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'webFeatures', {
//         get : function () {
//             var result = this._execute('webFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.WebFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing form features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'formFeatures', {
//         get : function () {
//             var result = this._execute('formFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FormFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Reverse Normal features within the component
//     // and supports the creation of new Reverse Normal features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'reverseNormalFeatures', {
//         get : function () {
//             var result = this._execute('reverseNormalFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReverseNormalFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the Patch features within the component
//     // and supports the creation of new Patch features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'patchFeatures', {
//         get : function () {
//             var result = this._execute('patchFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatchFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing form features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'loftFeatures', {
//         get : function () {
//             var result = this._execute('loftFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.LoftFeatures) : null;
//         }
//     });

//     // Returns the collection that provides access to the existing form features.
//     Object.defineProperty(adsk.fusion.Features.prototype, 'ruleFilletFeatures', {
//         get : function () {
//             var result = this._execute('ruleFilletFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RuleFilletFeatures) : null;
//         }
//     });

//     // Function that returns the specified feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Features.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Feature) : null;
//     };

//     // Method that creates a path used to define the shape of several features such as Sweep, etc.
//     // curve : Inputs a SketchCurve/BRepEdge or a ObjectCollection that includes sketch curves/edges.
//     // If the input is a ObjectCollection, all the curves/edges in the collection should be connected, and ignore the second argument.
//     // isChain : Optional argument, default to true. If this argument is set to true, all curves/edges that are end point connected will be found and used to create the path.
//     // This argument is only available when the first argument is a SketchCurve/BRepEdge object.
//     // Returns the newly created Path.
//     adsk.fusion.Features.prototype.createPath = function (curve, isChain) {
//         if (curve !== null && !(curve instanceof adsk.core.Base)) { throw new TypeError('curve must be a adsk.core.Base'); }
//         if (isChain === null || (isChain !== undefined && typeof isChain !== 'boolean')) { throw new TypeError('isChain must be a boolean'); }
//         var args = {
//             curve : (curve === null ? curve : curve.handle)
//         };
//         if (isChain !== undefined) {
//             args.isChain = isChain;
//         }
//         var result = this._execute('createPath', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//     };

//     // Function that returns the specified feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the same name seen in the timeline.
//     // Returns the specified item or null if a feature matching the name was not found.
//     adsk.fusion.Features.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Feature) : null;
//     };

//     //=========== FilletEdgeSet ============
//     // The base class for the classes that define the different types of fillet edge sets.
//     adsk.fusion.FilletEdgeSet = function FilletEdgeSet(handle) {
//         if (!(this instanceof adsk.fusion.FilletEdgeSet)) {
//             return adsk.fusion.FilletEdgeSet.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.FilletEdgeSet.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.FilletEdgeSet.prototype.constructor = adsk.fusion.FilletEdgeSet;
//     adsk.fusion.FilletEdgeSet.interfaceId = 'adsk.fusion.FilletEdgeSet';
//     adsk.objectTypes['adsk.fusion.FilletEdgeSet'] = adsk.fusion.FilletEdgeSet;
//     adsk.fusion.FilletEdgeSet.cast = function (object) {
//         return object instanceof adsk.fusion.FilletEdgeSet ? object : null;
//     };

//     //=========== FilletEdgeSets ============
//     // Collection that provides access to all of the existing fillet edge sets in a component
//     adsk.fusion.FilletEdgeSets = function FilletEdgeSets(handle) {
//         if (!(this instanceof adsk.fusion.FilletEdgeSets)) {
//             return adsk.fusion.FilletEdgeSets.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.FilletEdgeSets.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.FilletEdgeSets.prototype.constructor = adsk.fusion.FilletEdgeSets;
//     adsk.fusion.FilletEdgeSets.interfaceId = 'adsk.fusion.FilletEdgeSets';
//     adsk.objectTypes['adsk.fusion.FilletEdgeSets'] = adsk.fusion.FilletEdgeSets;
//     adsk.fusion.FilletEdgeSets.cast = function (object) {
//         return object instanceof adsk.fusion.FilletEdgeSets ? object : null;
//     };

//     // The number of fillet edge sets in the collection.
//     Object.defineProperty(adsk.fusion.FilletEdgeSets.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified fillet edge set using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.FilletEdgeSets.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletEdgeSet) : null;
//     };

//     //=========== FilletFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a fillet
//     // feature.
//     adsk.fusion.FilletFeatureInput = function FilletFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.FilletFeatureInput)) {
//             return adsk.fusion.FilletFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.FilletFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.FilletFeatureInput.prototype.constructor = adsk.fusion.FilletFeatureInput;
//     adsk.fusion.FilletFeatureInput.interfaceId = 'adsk.fusion.FilletFeatureInput';
//     adsk.objectTypes['adsk.fusion.FilletFeatureInput'] = adsk.fusion.FilletFeatureInput;
//     adsk.fusion.FilletFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.FilletFeatureInput ? object : null;
//     };

//     // Gets and sets if the fillet uses the G2 (curvature-continuity) surface quality option .
//     Object.defineProperty(adsk.fusion.FilletFeatureInput.prototype, 'isG2', {
//         get : function () {
//             var result = this._execute('isG2');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isG2', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if a rolling ball solution is to be used in any corners.
//     Object.defineProperty(adsk.fusion.FilletFeatureInput.prototype, 'isRollingBallCorner', {
//         get : function () {
//             var result = this._execute('isRollingBallCorner');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isRollingBallCorner', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if any edges that are tangentially connected to any of filleted
//     // edges will also be included in the fillet.
//     Object.defineProperty(adsk.fusion.FilletFeatureInput.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isTangentChain', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Adds a set of edges with a constant radius to this input.
//     // edges : An ObjectCollection containing the edges to be filleted. If the isTangentChain argument is true
//     // additional edges may also get filleted if they are tangentially connected to any of the
//     // input edges.
//     // radius : A ValueInput object that defines the radius of the fillet. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "2 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // isTangentChain : A boolean value for setting whether or not edges that are tangentially connected to
//     // the input edges (if any) will also be filleted.
//     // Returns true if the set of edges was successfully added to the FilletFeatureInput.
//     adsk.fusion.FilletFeatureInput.prototype.addConstantRadiusEdgeSet = function (edges, radius, isTangentChain) {
//         if (edges !== null && !(edges instanceof adsk.core.ObjectCollection)) { throw new TypeError('edges must be a adsk.core.ObjectCollection'); }
//         if (radius !== null && !(radius instanceof adsk.core.ValueInput)) { throw new TypeError('radius must be a adsk.core.ValueInput'); }
//         if (typeof isTangentChain !== 'boolean') { throw new TypeError('isTangentChain must be a boolean'); }
//         var args = {
//             edges : (edges === null ? edges : edges.handle),
//             radius : (radius === null ? radius : radius.handle),
//             isTangentChain : isTangentChain
//         };
//         var result = this._execute('addConstantRadiusEdgeSet', args);
//         return result ? result.value : undefined;
//     };

//     // Adds a single edge or set of tangent edges along with variable radius information to this input.
//     // tangentEdges : An object collection containing a single edge or multiple edges. Multiple edges
//     // must be tangentially connected and added to the collection in order.
//     // startRadius : A ValueInput object that defines the starting radius of the fillet. If a single edge is
//     // being filleted, the start radius is at the start end of the edge. If multiple tangent
//     // edges are being filleted the start radius is the open end of the first edge in the
//     // collection.
//     // If the ValueInput uses a real then it is interpreted as centimeters. If it is a string then
//     // the units can be defined as part of the string (i.e. "2 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // endRadius : A ValueInput object that defines the ending radius of the fillet. If a single edge is
//     // being filleted, the end radius is at the end of the edge. If multiple tangent
//     // edges are being filleted the end radius is the open end of the last edge in the
//     // collection.
//     // If the ValueInput uses a real then it is interpreted as centimeters. If it is a string then
//     // the units can be defined as part of the string (i.e. "2 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // positions : An array of ValueInput objects that defines the positions of any additonal radii
//     // along the edge(s). The value must be between 0 and 1 and defines the percentage along the
//     // curve where a radius is defined. The value is unitless. This array must have the same
//     // number of values as the array passed in for the radii argument.
//     // radii : An array of ValueInput objects that define the radii at positions along the edge(s).
//     // This array must have the same number of values as the array passed in for
//     // the positions argument. If the ValueInput uses a real then it is interpreted as centimeters.
//     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
//     // If no units are specified it will be interpreted using the current default units for length.
//     // Returns true if the edge set was successfully added to the FilletFeatureInput.
//     adsk.fusion.FilletFeatureInput.prototype.addVariableRadiusEdgeSet = function (tangentEdges, startRadius, endRadius, positions, radii) {
//         if (tangentEdges !== null && !(tangentEdges instanceof adsk.core.ObjectCollection)) { throw new TypeError('tangentEdges must be a adsk.core.ObjectCollection'); }
//         if (startRadius !== null && !(startRadius instanceof adsk.core.ValueInput)) { throw new TypeError('startRadius must be a adsk.core.ValueInput'); }
//         if (endRadius !== null && !(endRadius instanceof adsk.core.ValueInput)) { throw new TypeError('endRadius must be a adsk.core.ValueInput'); }
//         if (!Array.isArray(positions)) { throw new TypeError('positions must be an array'); }
//         var positionsLength = positions.length;
//         var positionsIt;
//         for (positionsIt = 0; positionsIt < positionsLength; ++positionsIt) {
//             if (positions[positionsIt] !== null && !(positions[positionsIt] instanceof adsk.core.ValueInput)) { throw new TypeError('positions[positionsIt] must be a adsk.core.ValueInput'); }
//         }
//         if (!Array.isArray(radii)) { throw new TypeError('radii must be an array'); }
//         var radiiLength = radii.length;
//         var radiiIt;
//         for (radiiIt = 0; radiiIt < radiiLength; ++radiiIt) {
//             if (radii[radiiIt] !== null && !(radii[radiiIt] instanceof adsk.core.ValueInput)) { throw new TypeError('radii[radiiIt] must be a adsk.core.ValueInput'); }
//         }
//         var args = {
//             tangentEdges : (tangentEdges === null ? tangentEdges : tangentEdges.handle),
//             startRadius : (startRadius === null ? startRadius : startRadius.handle),
//             endRadius : (endRadius === null ? endRadius : endRadius.handle),
//             positions : positions,
//             radii : radii
//         };
//         var result = this._execute('addVariableRadiusEdgeSet', args);
//         return result ? result.value : undefined;
//     };

//     // Adds a set of edges with a chord length to this input.
//     // edges : An ObjectCollection containing the edges to be filleted. If the isTangentChain argument is true
//     // additional edges may also get filleted if they are tangentially connected to any of the
//     // input edges.
//     // chordLength : A ValueInput object that defines the chord length of the fillet. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "2 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // isTangentChain : A boolean value for setting whether or not edges that are tangentially connected to
//     // the input edges (if any) will also be filleted.
//     // Returns true if the set of edges was successfully added to the FilletFeatureInput.
//     adsk.fusion.FilletFeatureInput.prototype.addChordLengthEdgeSet = function (edges, chordLength, isTangentChain) {
//         if (edges !== null && !(edges instanceof adsk.core.ObjectCollection)) { throw new TypeError('edges must be a adsk.core.ObjectCollection'); }
//         if (chordLength !== null && !(chordLength instanceof adsk.core.ValueInput)) { throw new TypeError('chordLength must be a adsk.core.ValueInput'); }
//         if (typeof isTangentChain !== 'boolean') { throw new TypeError('isTangentChain must be a boolean'); }
//         var args = {
//             edges : (edges === null ? edges : edges.handle),
//             chordLength : (chordLength === null ? chordLength : chordLength.handle),
//             isTangentChain : isTangentChain
//         };
//         var result = this._execute('addChordLengthEdgeSet', args);
//         return result ? result.value : undefined;
//     };

//     //=========== FilletFeatures ============
//     // Collection that provides access to all of the existing fillet features in a component
//     // and supports the ability to create new fillet features.
//     adsk.fusion.FilletFeatures = function FilletFeatures(handle) {
//         if (!(this instanceof adsk.fusion.FilletFeatures)) {
//             return adsk.fusion.FilletFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.FilletFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.FilletFeatures.prototype.constructor = adsk.fusion.FilletFeatures;
//     adsk.fusion.FilletFeatures.interfaceId = 'adsk.fusion.FilletFeatures';
//     adsk.objectTypes['adsk.fusion.FilletFeatures'] = adsk.fusion.FilletFeatures;
//     adsk.fusion.FilletFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.FilletFeatures ? object : null;
//     };

//     // The number of fillet features in the collection.
//     Object.defineProperty(adsk.fusion.FilletFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified fillet feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.FilletFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeature) : null;
//     };

//     // Creates a FilletFeatureInput object. Use properties and methods on this object
//     // to define the fillet you want to create and then use the Add method, passing in
//     // the FilletFeatureInput object.
//     // Returns the newly created FilletFeatureInput object or null if the creation failed.
//     adsk.fusion.FilletFeatures.prototype.createInput = function () {
//         var result = this._execute('createInput');
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeatureInput) : null;
//     };

//     // Creates a new fillet feature.
//     // input : A FilletFeatureInput object that defines the desired fillet. Use the createInput
//     // method to create a new FilletFeatureInput object and then use methods on it
//     // (the FilletFeatureInput object) to define the fillet.
//     // Returns the newly created FilletFeature object or null if the creation failed.
//     adsk.fusion.FilletFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.FilletFeatureInput)) { throw new TypeError('input must be a adsk.fusion.FilletFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeature) : null;
//     };

//     // Function that returns the specified fillet feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.FilletFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeature) : null;
//     };

//     //=========== FormFeatures ============
//     // Collection that provides access to all of the existing Form features in a component.
//     adsk.fusion.FormFeatures = function FormFeatures(handle) {
//         if (!(this instanceof adsk.fusion.FormFeatures)) {
//             return adsk.fusion.FormFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.FormFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.FormFeatures.prototype.constructor = adsk.fusion.FormFeatures;
//     adsk.fusion.FormFeatures.interfaceId = 'adsk.fusion.FormFeatures';
//     adsk.objectTypes['adsk.fusion.FormFeatures'] = adsk.fusion.FormFeatures;
//     adsk.fusion.FormFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.FormFeatures ? object : null;
//     };

//     // The number of Form features in the collection.
//     Object.defineProperty(adsk.fusion.FormFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified Form feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.FormFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FormFeature) : null;
//     };

//     // Function that returns the specified form feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.FormFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FormFeature) : null;
//     };

//     //=========== HoleEdgePositions ============
//     // List of the valid edge positions for holes.
//     adsk.fusion.HoleEdgePositions = {
//         EdgeStartPointPosition : 0,
//         EdgeMidPointPosition : 1,
//         EdgeEndPointPosition : 2
//     };

//     //=========== HoleFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a hole
//     // feature.
//     adsk.fusion.HoleFeatureInput = function HoleFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.HoleFeatureInput)) {
//             return adsk.fusion.HoleFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.HoleFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.HoleFeatureInput.prototype.constructor = adsk.fusion.HoleFeatureInput;
//     adsk.fusion.HoleFeatureInput.interfaceId = 'adsk.fusion.HoleFeatureInput';
//     adsk.objectTypes['adsk.fusion.HoleFeatureInput'] = adsk.fusion.HoleFeatureInput;
//     adsk.fusion.HoleFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.HoleFeatureInput ? object : null;
//     };

//     // Gets the ValueInput object that defines the angle of the tip of the hole. The default
//     // is "118.0 deg" but can be modified by setting it using another Value object.
//     Object.defineProperty(adsk.fusion.HoleFeatureInput.prototype, 'tipAngle', {
//         get : function () {
//             var result = this._execute('tipAngle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('tipAngle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if the hole goes in the default direction or is reversed.
//     Object.defineProperty(adsk.fusion.HoleFeatureInput.prototype, 'isDefaultDirection', {
//         get : function () {
//             var result = this._execute('isDefaultDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDefaultDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
//     // specified when the Hole is created based on geometry (e.g. a face or point)
//     // in another component AND (the Hole) is not in the root component.
//     // The CreationOccurrence is analogous to the active occurrence in the UI
//     // A value of null indicates that everything is in the context of a single component.
//     Object.defineProperty(adsk.fusion.HoleFeatureInput.prototype, 'creationOccurrence', {
//         get : function () {
//             var result = this._execute('creationOccurrence');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('creationOccurrence', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Defines the position of a the hole using a point. The point can be a vertex on the face
//     // or it can be a Point3D object to define any location on the face. If a Point3D object is
//     // provided it will be projected onto the plane along the planes normal. The orientation of the
//     // hole is defined by the planar face or construction plane. If a vertex is used, the position of
//     // the hole is associative to that vertex. If a Point3D object is used the position of the hole
//     // is not associative.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole.
//     // The natural direction of the hole will be opposite the normal of the face or construction plane.
//     // point : A Point3D object or vertex that defines the position of the hole. The point will be projected
//     // onto the plane along the normal of the plane.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setPositionByPoint = function (planarEntity, point) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (point !== null && !(point instanceof adsk.core.Base)) { throw new TypeError('point must be a adsk.core.Base'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             point : (point === null ? point : point.handle)
//         };
//         var result = this._execute('setPositionByPoint', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the position of the hole at the center of a circular or elliptical edge of the face.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole.
//     // The natural direction of the hole will be opposite the normal of the face or construction plane.
//     // centerEdge : A circular or elliptical edge whose center point will be the position of the hole.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setPositionAtCenter = function (planarEntity, centerEdge) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (centerEdge !== null && !(centerEdge instanceof adsk.fusion.BRepEdge)) { throw new TypeError('centerEdge must be a adsk.fusion.BRepEdge'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             centerEdge : (centerEdge === null ? centerEdge : centerEdge.handle)
//         };
//         var result = this._execute('setPositionAtCenter', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the position and orientation of the hole using a sketch point.
//     // sketchPoint : The sketch point that defines the position of the hole. The orientation is
//     // inferred from the normal of the point's parent sketch. The natural direction will be
//     // opposite the normal of the sketch.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setPositionBySketchPoint = function (sketchPoint) {
//         if (sketchPoint !== null && !(sketchPoint instanceof adsk.fusion.SketchPoint)) { throw new TypeError('sketchPoint must be a adsk.fusion.SketchPoint'); }
//         var args = {
//             sketchPoint : (sketchPoint === null ? sketchPoint : sketchPoint.handle)
//         };
//         var result = this._execute('setPositionBySketchPoint', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the orientation of the hole using a planar face or construction plane.
//     // The position of the hole is defined by the distance from one or two edges.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole.
//     // The natural direction of the hole will be opposite the normal of the face or construction plane.
//     // point : A Point3D object that defines the approximate initial position of the hole. The point will be
//     // projected onto the plane. This point should be close to the final position of the hole and
//     // is used to determine which solution out of several possible solutions should be chosen
//     // for the hole location.
//     // edgeOne : A linear BRepEdge object that the position of the hole will be measured from. The position
//     // of the hole will be measured along a perpendicular from this edge.
//     // offsetOne : A ValueInput object that defines the offset distance from edgeOne. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "3 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // edgeTwo : You can optionally define a second edge and offset to specify the position of the hole. If you use a
//     // second edge it has the same requirements as the edgeOne argument. If you provide a second edge you
//     // must also provide the offsetTwo argument.
//     // offsetTwo : If edgeTwo is defined, you must provide this argument which is a ValueInput object that
//     // defines the offset from the edgeTwo. If the ValueInput uses a real then it is interpreted
//     // as centimeters. If it is a string then the units can be defined as part of the string
//     // (i.e. "3 in"). If no units are specified it is interpreted using the current default units
//     // for length.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setPositionByPlaneAndOffsets = function (planarEntity, point, edgeOne, offsetOne, edgeTwo, offsetTwo) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
//         if (edgeOne !== null && !(edgeOne instanceof adsk.fusion.BRepEdge)) { throw new TypeError('edgeOne must be a adsk.fusion.BRepEdge'); }
//         if (offsetOne !== null && !(offsetOne instanceof adsk.core.ValueInput)) { throw new TypeError('offsetOne must be a adsk.core.ValueInput'); }
//         if (edgeTwo === null || (edgeTwo !== undefined && edgeTwo !== null && !(edgeTwo instanceof adsk.fusion.BRepEdge))) { throw new TypeError('edgeTwo must be a adsk.fusion.BRepEdge'); }
//         if (offsetTwo === null || (offsetTwo !== undefined && offsetTwo !== null && !(offsetTwo instanceof adsk.core.ValueInput))) { throw new TypeError('offsetTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             point : (point === null ? point : point.handle),
//             edgeOne : (edgeOne === null ? edgeOne : edgeOne.handle),
//             offsetOne : (offsetOne === null ? offsetOne : offsetOne.handle)
//         };
//         if (edgeTwo !== undefined) {
//             args.edgeTwo = (edgeTwo === null ? edgeTwo : edgeTwo.handle);
//         }
//         if (offsetTwo !== undefined) {
//             args.offsetTwo = (offsetTwo === null ? offsetTwo : offsetTwo.handle);
//         }
//         var result = this._execute('setPositionByPlaneAndOffsets', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the position and orientation of the hole to be on the start, end or center of an edge.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole
//     // and start of the hole. The natural direction of the hole will be opposite the normal of
//     // the face or construction plane.
//     // edge : The edge to position the hole on.
//     // position : The position along the edge to place the hole.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setPositionOnEdge = function (planarEntity, edge, position) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (edge !== null && !(edge instanceof adsk.fusion.BRepEdge)) { throw new TypeError('edge must be a adsk.fusion.BRepEdge'); }
//         if (!isFinite(position)) { throw new TypeError('position must be a number'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             edge : (edge === null ? edge : edge.handle),
//             position : Number(position)
//         };
//         var result = this._execute('setPositionOnEdge', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the depth of the hole using a specified distance.
//     // distance : The depth of the hole. If a real is specified the value is in centimeters.
//     // If a string is specified the units are derived from the string. If no units are specified,
//     // the default units of the document are used.
//     // Returns true if setting the extent was successful.
//     adsk.fusion.HoleFeatureInput.prototype.setDistanceExtent = function (distance) {
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         var args = {
//             distance : (distance === null ? distance : distance.handle)
//         };
//         var result = this._execute('setDistanceExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the extent of the hole to be through-all. The direction can be
//     // either positive, negative.
//     // direction : The direction of the hole relative to the normal of the sketch plane.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setAllExtent = function (direction) {
//         if (!isFinite(direction)) { throw new TypeError('direction must be a number'); }
//         var args = {
//             direction : Number(direction)
//         };
//         var result = this._execute('setAllExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extent of the hole to be from the sketch plane to the specified "to" face.
//     // toEntity : The entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For a hole it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // matchShape : Indicates if the hole is not contained on the face that the hole should match
//     // the shape of the entity as if it extended beyond it's current boundaries.
//     // directionHint : Specifies the direction of the hole. This is only used in the case where there are two possible solutions and the hole can
//     // hit the toEntity in either direction.
//     // Typically there is only a single solution and the direction is determined automatically.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setOneSideToExtent = function (toEntity, matchShape, directionHint) {
//         if (toEntity !== null && !(toEntity instanceof adsk.core.Base)) { throw new TypeError('toEntity must be a adsk.core.Base'); }
//         if (typeof matchShape !== 'boolean') { throw new TypeError('matchShape must be a boolean'); }
//         if (directionHint === null || (directionHint !== undefined && directionHint !== null && !(directionHint instanceof adsk.core.Vector3D))) { throw new TypeError('directionHint must be a adsk.core.Vector3D'); }
//         var args = {
//             toEntity : (toEntity === null ? toEntity : toEntity.handle),
//             matchShape : matchShape
//         };
//         if (directionHint !== undefined) {
//             args.directionHint = (directionHint === null ? directionHint : directionHint.handle);
//         }
//         var result = this._execute('setOneSideToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the position and orientation of the hole using a set of sketch points.
//     // sketchPoints : A collection of sketch points that defines the positions of the holes. The orientation is
//     // inferred from the normal of the point's parent sketch. The natural direction will be
//     // opposite the normal of the sketch. The points can be from multiple sketches but they
//     // must all be co-planar.
//     // Returns true if successful.
//     adsk.fusion.HoleFeatureInput.prototype.setPositionBySketchPoints = function (sketchPoints) {
//         if (sketchPoints !== null && !(sketchPoints instanceof adsk.core.ObjectCollection)) { throw new TypeError('sketchPoints must be a adsk.core.ObjectCollection'); }
//         var args = {
//             sketchPoints : (sketchPoints === null ? sketchPoints : sketchPoints.handle)
//         };
//         var result = this._execute('setPositionBySketchPoints', args);
//         return result ? result.value : undefined;
//     };

//     //=========== HoleFeatures ============
//     // Collection that provides access to all of the existing hole features in a component
//     // and supports the ability to create new hole features.
//     adsk.fusion.HoleFeatures = function HoleFeatures(handle) {
//         if (!(this instanceof adsk.fusion.HoleFeatures)) {
//             return adsk.fusion.HoleFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.HoleFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.HoleFeatures.prototype.constructor = adsk.fusion.HoleFeatures;
//     adsk.fusion.HoleFeatures.interfaceId = 'adsk.fusion.HoleFeatures';
//     adsk.objectTypes['adsk.fusion.HoleFeatures'] = adsk.fusion.HoleFeatures;
//     adsk.fusion.HoleFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.HoleFeatures ? object : null;
//     };

//     // The number of hole features in the collection.
//     Object.defineProperty(adsk.fusion.HoleFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified hole feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.HoleFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeature) : null;
//     };

//     // Creates a HoleFeatureInput object that defines a simple hole (a single diameter).
//     // This is not a hole feature, but an object used to create a hole feature. Functionality
//     // on the returned HoleFeatureInput object is used to define the position and extent
//     // of the hole.
//     // holeDiameter : A ValueInput object that defines the diameter of the hole. If the ValueInput uses
//     // a real, it is interpreted as centimeters. If it is a string, the units
//     // can be defined as part of the string (i.e. "3 in") If no units are specified,
//     // it is interpreted using the current default units for length.
//     // Returns the newly created HoleFeatureInput object or null if the creation failed.
//     adsk.fusion.HoleFeatures.prototype.createSimpleInput = function (holeDiameter) {
//         if (holeDiameter !== null && !(holeDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('holeDiameter must be a adsk.core.ValueInput'); }
//         var args = {
//             holeDiameter : (holeDiameter === null ? holeDiameter : holeDiameter.handle)
//         };
//         var result = this._execute('createSimpleInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeatureInput) : null;
//     };

//     // Creates a HoleFeatureInput object that defines a counterbore hole. This is not
//     // a hole feature but an object used to create a hole feature. Functionality
//     // on the returned HoleFeatureInput object is used to define the position and extent
//     // of the hole.
//     // holeDiameter : A ValueInput object that defines the diameter of the hole. If the ValueInput uses
//     // a real, it is interpreted as centimeters. If it is a string, the units
//     // can be defined as part of the string (i.e. "3 in") If no units are specified,
//     // it is interpreted using the current default units for length.
//     // counterboreDiameter : A ValueInput object that defines the counterbore diameter of the hole. If the ValueInput uses
//     // a real, it is interpreted as centimeters. If it is a string, the units
//     // can be defined as part of the string (i.e. "3 in") If no units are specified,
//     // it is interpreted using the current default units for length.
//     // counterboreDepth : A ValueInput object that defines the counterbore depth of the hole. If the ValueInput uses
//     // a real, it is interpreted as centimeters. If it is a string, the units
//     // can be defined as part of the string (i.e. "3 in") If no units are specified,
//     // it is interpreted using the current default units for length.
//     // Returns the newly created HoleFeatureInput object or null if the creation failed.
//     adsk.fusion.HoleFeatures.prototype.createCounterboreInput = function (holeDiameter, counterboreDiameter, counterboreDepth) {
//         if (holeDiameter !== null && !(holeDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('holeDiameter must be a adsk.core.ValueInput'); }
//         if (counterboreDiameter !== null && !(counterboreDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('counterboreDiameter must be a adsk.core.ValueInput'); }
//         if (counterboreDepth !== null && !(counterboreDepth instanceof adsk.core.ValueInput)) { throw new TypeError('counterboreDepth must be a adsk.core.ValueInput'); }
//         var args = {
//             holeDiameter : (holeDiameter === null ? holeDiameter : holeDiameter.handle),
//             counterboreDiameter : (counterboreDiameter === null ? counterboreDiameter : counterboreDiameter.handle),
//             counterboreDepth : (counterboreDepth === null ? counterboreDepth : counterboreDepth.handle)
//         };
//         var result = this._execute('createCounterboreInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeatureInput) : null;
//     };

//     // Creates a HoleFeatureInput object that defines a countersink hole. This is not
//     // a hole feature but an object used to create a hole feature. Functionality
//     // on the returned HoleFeatureInput object is used to define the position and extent of the hole.
//     // holeDiameter : A ValueInput object that defines the diameter of the hole. If the ValueInput uses
//     // a real, it is interpreted as centimeters. If it is a string, the units
//     // can be defined as part of the string (i.e. "3 in") If no units are specified,
//     // it is interpreted using the current default units for length.
//     // countersinkDiameter : A ValueInput object that defines the diameter of the countersink. If the ValueInput uses
//     // a real, it is interpreted as centimeters. If it is a string, the units
//     // can be defined as part of the string (i.e. "3 in") If no units are specified,
//     // it is interpreted using the current default units for length.
//     // countersinkAngle : A ValueInput object that defines the angle of the countersink. If the ValueInput uses
//     // a real then it is interpreted as radians. If it is a string then the units
//     // can be defined as part of the string (i.e. "120 deg"). If no units are specified
//     // it is interpreted using the current default units for angles.
//     // Returns the newly created HoleFeatureInput object or null if the creation failed.
//     adsk.fusion.HoleFeatures.prototype.createCountersinkInput = function (holeDiameter, countersinkDiameter, countersinkAngle) {
//         if (holeDiameter !== null && !(holeDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('holeDiameter must be a adsk.core.ValueInput'); }
//         if (countersinkDiameter !== null && !(countersinkDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('countersinkDiameter must be a adsk.core.ValueInput'); }
//         if (countersinkAngle !== null && !(countersinkAngle instanceof adsk.core.ValueInput)) { throw new TypeError('countersinkAngle must be a adsk.core.ValueInput'); }
//         var args = {
//             holeDiameter : (holeDiameter === null ? holeDiameter : holeDiameter.handle),
//             countersinkDiameter : (countersinkDiameter === null ? countersinkDiameter : countersinkDiameter.handle),
//             countersinkAngle : (countersinkAngle === null ? countersinkAngle : countersinkAngle.handle)
//         };
//         var result = this._execute('createCountersinkInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeatureInput) : null;
//     };

//     // Creates a new hole feature based on the information provided by a HoleFeatureInput object.
//     // To create a new hole, use one of the createInput functions to define a new input object for
//     // the type of hole you want to create. Use the methods and properties on the input object
//     // to define any additional input. Once the information is defined on the input object, you
//     // can pass it to the Add method to create the hole.
//     // input : The HoleFeatureInput object that defines the hole you want to create.
//     // Returns the newly created HoleFeature or null if the creation failed.
//     adsk.fusion.HoleFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.HoleFeatureInput)) { throw new TypeError('input must be a adsk.fusion.HoleFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeature) : null;
//     };

//     // Function that returns the specified hole feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.HoleFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeature) : null;
//     };

//     //=========== HolePositionDefinition ============
//     // The base class for the classes that define how a hole can be positioned.
//     adsk.fusion.HolePositionDefinition = function HolePositionDefinition(handle) {
//         if (!(this instanceof adsk.fusion.HolePositionDefinition)) {
//             return adsk.fusion.HolePositionDefinition.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.HolePositionDefinition.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.HolePositionDefinition.prototype.constructor = adsk.fusion.HolePositionDefinition;
//     adsk.fusion.HolePositionDefinition.interfaceId = 'adsk.fusion.HolePositionDefinition';
//     adsk.objectTypes['adsk.fusion.HolePositionDefinition'] = adsk.fusion.HolePositionDefinition;
//     adsk.fusion.HolePositionDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.HolePositionDefinition ? object : null;
//     };

//     //=========== HoleTypes ============
//     // List of the different types of holes.
//     adsk.fusion.HoleTypes = {
//         SimpleHoleType : 0,
//         CounterboreHoleType : 1,
//         CountersinkHoleType : 2
//     };

//     //=========== LoftFeatures ============
//     // Collection that provides access to all of the existing rule fillet features in a design.
//     adsk.fusion.LoftFeatures = function LoftFeatures(handle) {
//         if (!(this instanceof adsk.fusion.LoftFeatures)) {
//             return adsk.fusion.LoftFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.LoftFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.LoftFeatures.prototype.constructor = adsk.fusion.LoftFeatures;
//     adsk.fusion.LoftFeatures.interfaceId = 'adsk.fusion.LoftFeatures';
//     adsk.objectTypes['adsk.fusion.LoftFeatures'] = adsk.fusion.LoftFeatures;
//     adsk.fusion.LoftFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.LoftFeatures ? object : null;
//     };

//     // The number of loft features in the collection.
//     Object.defineProperty(adsk.fusion.LoftFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified loft feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.LoftFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.LoftFeature) : null;
//     };

//     // Function that returns the specified loft feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.LoftFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.LoftFeature) : null;
//     };

//     //=========== MirrorFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a mirror
//     // feature.
//     adsk.fusion.MirrorFeatureInput = function MirrorFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.MirrorFeatureInput)) {
//             return adsk.fusion.MirrorFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.MirrorFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.MirrorFeatureInput.prototype.constructor = adsk.fusion.MirrorFeatureInput;
//     adsk.fusion.MirrorFeatureInput.interfaceId = 'adsk.fusion.MirrorFeatureInput';
//     adsk.objectTypes['adsk.fusion.MirrorFeatureInput'] = adsk.fusion.MirrorFeatureInput;
//     adsk.fusion.MirrorFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.MirrorFeatureInput ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features and bodies.
//     // The collection can contain Components in direct modelling mode only.
//     // In parametric modeling, the pattern compute type is set to pattern features when the collection
//     // only contains features; the pattern compute type is set to pattern bodies when the collection only contains bodies;
//     // otherwise the pattern compute type is set to pattern faces.
//     Object.defineProperty(adsk.fusion.MirrorFeatureInput.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the mirror plane. This can be either a planar face or construction plane.
//     Object.defineProperty(adsk.fusion.MirrorFeatureInput.prototype, 'mirrorPlane', {
//         get : function () {
//             var result = this._execute('mirrorPlane');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('mirrorPlane', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the compute option when mirroring features. The default value for this is AdjustPatternCompute.
//     // This property only applies when mirroring features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.MirrorFeatureInput.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== MirrorFeatures ============
//     // Collection that provides access to all of the existing mirror features in a component
//     // and supports the ability to create new mirror features.
//     adsk.fusion.MirrorFeatures = function MirrorFeatures(handle) {
//         if (!(this instanceof adsk.fusion.MirrorFeatures)) {
//             return adsk.fusion.MirrorFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.MirrorFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.MirrorFeatures.prototype.constructor = adsk.fusion.MirrorFeatures;
//     adsk.fusion.MirrorFeatures.interfaceId = 'adsk.fusion.MirrorFeatures';
//     adsk.objectTypes['adsk.fusion.MirrorFeatures'] = adsk.fusion.MirrorFeatures;
//     adsk.fusion.MirrorFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.MirrorFeatures ? object : null;
//     };

//     // The number of mirror features in the collection.
//     Object.defineProperty(adsk.fusion.MirrorFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified mirror feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.MirrorFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeature) : null;
//     };

//     // Creates a MirrorFeatureInput object. Use properties and methods on this object
//     // to define the mirror you want to create and then use the Add method, passing in
//     // the MirrorFeatureInput object.
//     // inputEntities : The collection can contain faces, features and bodies. The collection can contain Components in
//     // direct modelling mode only.
//     // In parametric modeling, the pattern compute type is set to pattern features when the collection only
//     // contains features; the pattern compute type is set to pattern bodies when the collection only contains bodies;
//     // otherwise the pattern compute type is set to pattern faces.
//     // The pattern compute type is set to pattern components when the collection only contains components
//     // while in direct modelling mode.
//     // mirrorPlane : Input planar entity that defines the mirror plane. This can be either a planar face or a construction plane.
//     // Returns the newly created MirrorFeatureInput object or null if the creation failed.
//     adsk.fusion.MirrorFeatures.prototype.createInput = function (inputEntities, mirrorPlane) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (mirrorPlane !== null && !(mirrorPlane instanceof adsk.core.Base)) { throw new TypeError('mirrorPlane must be a adsk.core.Base'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle),
//             mirrorPlane : (mirrorPlane === null ? mirrorPlane : mirrorPlane.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeatureInput) : null;
//     };

//     // Creates a new mirror feature.
//     // input : A MirrorFeatureInput object that defines the desired mirror. Use the createInput
//     // method to create a new MirrorFeatureInput object and then use methods on it
//     // (the MirrorFeatureInput object) to define the mirror.
//     // Returns the newly created MirrorFeature object or null if the creation failed.
//     adsk.fusion.MirrorFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.MirrorFeatureInput)) { throw new TypeError('input must be a adsk.fusion.MirrorFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeature) : null;
//     };

//     // Function that returns the specified mirror feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.MirrorFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeature) : null;
//     };

//     //=========== MoveFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a move feature.
//     adsk.fusion.MoveFeatureInput = function MoveFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.MoveFeatureInput)) {
//             return adsk.fusion.MoveFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.MoveFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.MoveFeatureInput.prototype.constructor = adsk.fusion.MoveFeatureInput;
//     adsk.fusion.MoveFeatureInput.interfaceId = 'adsk.fusion.MoveFeatureInput';
//     adsk.objectTypes['adsk.fusion.MoveFeatureInput'] = adsk.fusion.MoveFeatureInput;
//     adsk.fusion.MoveFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.MoveFeatureInput ? object : null;
//     };

//     // Gets and sets the entities to move.
//     // This collection can only contain BRepBody objects in parametric modeling.
//     // It can be BRep bodies, T-Spline bodies and mesh bodies mixed or faces and features mixed in non-parametric modeling.
//     Object.defineProperty(adsk.fusion.MoveFeatureInput.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the tranform to apply to the input entities. This can describe a move (translation)
//     // or a rotation. The matrix must define an orthogonal transform. That is the axes remain
//     // perpendicular to each other and there isn't any scale or mirror defined.
//     Object.defineProperty(adsk.fusion.MoveFeatureInput.prototype, 'transform', {
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

//     //=========== MoveFeatures ============
//     // Collection that provides access to all of the existing move features in a component
//     // and supports the ability to create new move features.
//     adsk.fusion.MoveFeatures = function MoveFeatures(handle) {
//         if (!(this instanceof adsk.fusion.MoveFeatures)) {
//             return adsk.fusion.MoveFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.MoveFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.MoveFeatures.prototype.constructor = adsk.fusion.MoveFeatures;
//     adsk.fusion.MoveFeatures.interfaceId = 'adsk.fusion.MoveFeatures';
//     adsk.objectTypes['adsk.fusion.MoveFeatures'] = adsk.fusion.MoveFeatures;
//     adsk.fusion.MoveFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.MoveFeatures ? object : null;
//     };

//     // The number of move features in the collection.
//     Object.defineProperty(adsk.fusion.MoveFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified move feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.MoveFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeature) : null;
//     };

//     // Creates a MoveFeatureInput object. Use properties and methods on this object
//     // to define the move feature you want to create and then use the Add method, passing in
//     // the MoveFeatureInput object.
//     // inputEntities : Input the entities to move.
//     // This collection can only contain BRepBody objects in parametric modeling.
//     // It can be BRep bodies, T-Spline bodies, mesh bodies mixed or faces and features mixed in non-parametric modeling.
//     // transform : The transform to apply to the input entities. This can describe a move (translation) or a rotation. The
//     // matrix must define an orthogonal transform. That is the axes remain perpendicular to each other and there
//     // isn't any scale or mirror defined.
//     // Returns the newly created MoveFeatureInput object or null if the creation failed.
//     adsk.fusion.MoveFeatures.prototype.createInput = function (inputEntities, transform) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (transform !== null && !(transform instanceof adsk.core.Matrix3D)) { throw new TypeError('transform must be a adsk.core.Matrix3D'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle),
//             transform : (transform === null ? transform : transform.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeatureInput) : null;
//     };

//     // Creates a new move feature.
//     // input : A MoveFeatureInput object that defines the desired move feature. Use the createInput
//     // method to create a new MoveFeatureInput object and then use methods on it
//     // (the MoveFeatureInput object) to define the move feature.
//     // Returns the newly created MoveFeature object or null if the creation failed.
//     // Returns nothing in the case where the feature is non-parametric.
//     adsk.fusion.MoveFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.MoveFeatureInput)) { throw new TypeError('input must be a adsk.fusion.MoveFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeature) : null;
//     };

//     // Function that returns the specified move feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.MoveFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeature) : null;
//     };

//     //=========== OffsetFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a offset feature.
//     adsk.fusion.OffsetFeatureInput = function OffsetFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.OffsetFeatureInput)) {
//             return adsk.fusion.OffsetFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.OffsetFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.OffsetFeatureInput.prototype.constructor = adsk.fusion.OffsetFeatureInput;
//     adsk.fusion.OffsetFeatureInput.interfaceId = 'adsk.fusion.OffsetFeatureInput';
//     adsk.objectTypes['adsk.fusion.OffsetFeatureInput'] = adsk.fusion.OffsetFeatureInput;
//     adsk.fusion.OffsetFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.OffsetFeatureInput ? object : null;
//     };

//     // An ObjectCollection containing the BRepBody or BRepFace object(s) being offset.
//     Object.defineProperty(adsk.fusion.OffsetFeatureInput.prototype, 'entities', {
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

//     // Get and sets whether faces that are tangentially connected to the input faces will be included in the offset.
//     Object.defineProperty(adsk.fusion.OffsetFeatureInput.prototype, 'isChainSelection', {
//         get : function () {
//             var result = this._execute('isChainSelection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isChainSelection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the ValueInput object that defines the offset distance.
//     Object.defineProperty(adsk.fusion.OffsetFeatureInput.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distance', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the feature operation to perform. Can be 'NewBodyFeatureOperation' or 'NewComponentFeatureOperation'.
//     Object.defineProperty(adsk.fusion.OffsetFeatureInput.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== OffsetFeatures ============
//     // Collection that provides access to all of the existing Offset features in a component
//     // and supports the ability to create new Offset features.
//     adsk.fusion.OffsetFeatures = function OffsetFeatures(handle) {
//         if (!(this instanceof adsk.fusion.OffsetFeatures)) {
//             return adsk.fusion.OffsetFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.OffsetFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.OffsetFeatures.prototype.constructor = adsk.fusion.OffsetFeatures;
//     adsk.fusion.OffsetFeatures.interfaceId = 'adsk.fusion.OffsetFeatures';
//     adsk.objectTypes['adsk.fusion.OffsetFeatures'] = adsk.fusion.OffsetFeatures;
//     adsk.fusion.OffsetFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.OffsetFeatures ? object : null;
//     };

//     // The number of Offset features in the collection.
//     Object.defineProperty(adsk.fusion.OffsetFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified offset feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.OffsetFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeature) : null;
//     };

//     // Creates a OffsetFeatureInput object. Use properties and methods on this object
//     // to define the offset feature you want to create and then use the Add method, passing in
//     // the OffsetFeatureInput object to create the feature.
//     // entities : The BRepBody or BRepFace objects to offset. If a BRepBody is used it must be open,
//     // (the isSolid property must be False). Faces from both solid and quilt bodies can be offset.
//     // Input faces need not be from the same closed or open body.
//     // distance : ValueInput object that defines the offset distance.
//     // operation : The feature operation to perform. 'NewBodyFeatureOperation' and 'NewComponentFeatureOperation' are the
//     // options supported.
//     // isChainSelection : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will be included in the offset. The default value is true.
//     // Returns the newly created OffsetFeatureInput object or null if the creation failed.
//     adsk.fusion.OffsetFeatures.prototype.createInput = function (entities, distance, operation, isChainSelection) {
//         if (entities !== null && !(entities instanceof adsk.core.ObjectCollection)) { throw new TypeError('entities must be a adsk.core.ObjectCollection'); }
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
//         if (isChainSelection === null || (isChainSelection !== undefined && typeof isChainSelection !== 'boolean')) { throw new TypeError('isChainSelection must be a boolean'); }
//         var args = {
//             entities : (entities === null ? entities : entities.handle),
//             distance : (distance === null ? distance : distance.handle),
//             operation : Number(operation)
//         };
//         if (isChainSelection !== undefined) {
//             args.isChainSelection = isChainSelection;
//         }
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeatureInput) : null;
//     };

//     // Creates a new offset feature.
//     // input : A FeatureInput object that defines the desired offset feature. Use the createInput
//     // method to create a new OffsetFeatureInput object and then use methods on it
//     // (the OffsetFeatureInput object) to define the offset feature.
//     // Returns the newly created OffsetFeature object or null if the creation failed.
//     adsk.fusion.OffsetFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.OffsetFeatureInput)) { throw new TypeError('input must be a adsk.fusion.OffsetFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeature) : null;
//     };

//     // Function that returns the specified offset feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.OffsetFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeature) : null;
//     };

//     //=========== PatchFeatures ============
//     // Collection that provides access to all of the existing Patch features in a component
//     // and supports the ability to create new Patch features.
//     adsk.fusion.PatchFeatures = function PatchFeatures(handle) {
//         if (!(this instanceof adsk.fusion.PatchFeatures)) {
//             return adsk.fusion.PatchFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PatchFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PatchFeatures.prototype.constructor = adsk.fusion.PatchFeatures;
//     adsk.fusion.PatchFeatures.interfaceId = 'adsk.fusion.PatchFeatures';
//     adsk.objectTypes['adsk.fusion.PatchFeatures'] = adsk.fusion.PatchFeatures;
//     adsk.fusion.PatchFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.PatchFeatures ? object : null;
//     };

//     // The number of Patch features in the collection.
//     Object.defineProperty(adsk.fusion.PatchFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified patch feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.PatchFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatchFeature) : null;
//     };

//     // Function that returns the specified patch feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.PatchFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatchFeature) : null;
//     };

//     //=========== Path ============
//     // The Path object represents a single set of connected curves. The order of the objects within the collection is the same as the connection order of the entities.
//     adsk.fusion.Path = function Path(handle) {
//         if (!(this instanceof adsk.fusion.Path)) {
//             return adsk.fusion.Path.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Path.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Path.prototype.constructor = adsk.fusion.Path;
//     adsk.fusion.Path.interfaceId = 'adsk.fusion.Path';
//     adsk.objectTypes['adsk.fusion.Path'] = adsk.fusion.Path;
//     adsk.fusion.Path.cast = function (object) {
//         return object instanceof adsk.fusion.Path ? object : null;
//     };

//     // The number of entities in the path.
//     Object.defineProperty(adsk.fusion.Path.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets a Boolean indicating if the path is closed or not. Returns True in the case of a closed path.
//     Object.defineProperty(adsk.fusion.Path.prototype, 'isClosed', {
//         get : function () {
//             var result = this._execute('isClosed');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Path.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Path.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         }
//     });

//     // Function that returns the specified curve using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Path.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathEntity) : null;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.Path.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//     };

//     //=========== PathEntity ============
//     // The PathEntity object represents a curve within a path
//     adsk.fusion.PathEntity = function PathEntity(handle) {
//         if (!(this instanceof adsk.fusion.PathEntity)) {
//             return adsk.fusion.PathEntity.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PathEntity.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PathEntity.prototype.constructor = adsk.fusion.PathEntity;
//     adsk.fusion.PathEntity.interfaceId = 'adsk.fusion.PathEntity';
//     adsk.objectTypes['adsk.fusion.PathEntity'] = adsk.fusion.PathEntity;
//     adsk.fusion.PathEntity.cast = function (object) {
//         return object instanceof adsk.fusion.PathEntity ? object : null;
//     };

//     // Property that returns the geometry of the entity.
//     // This is different from the original path curve if the true start point is not the same as the start point of the original path curve.
//     Object.defineProperty(adsk.fusion.PathEntity.prototype, 'curve', {
//         get : function () {
//             var result = this._execute('curve');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Curve3D) : null;
//         }
//     });

//     // Property that returns the type of the curve referenced by the path entity. This property allows you to determine what type of object will be returned by the Curve property.
//     Object.defineProperty(adsk.fusion.PathEntity.prototype, 'curveType', {
//         get : function () {
//             var result = this._execute('curveType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Property that gets the sketch curve or edge this entity was derived from.
//     Object.defineProperty(adsk.fusion.PathEntity.prototype, 'entity', {
//         get : function () {
//             var result = this._execute('entity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Property that returns the parent Path of the entity.
//     Object.defineProperty(adsk.fusion.PathEntity.prototype, 'parentPath', {
//         get : function () {
//             var result = this._execute('parentPath');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.PathEntity.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.PathEntity.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathEntity) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.PathEntity.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathEntity) : null;
//     };

//     //=========== PathPatternFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a path pattern
//     // feature.
//     adsk.fusion.PathPatternFeatureInput = function PathPatternFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.PathPatternFeatureInput)) {
//             return adsk.fusion.PathPatternFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PathPatternFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PathPatternFeatureInput.prototype.constructor = adsk.fusion.PathPatternFeatureInput;
//     adsk.fusion.PathPatternFeatureInput.interfaceId = 'adsk.fusion.PathPatternFeatureInput';
//     adsk.objectTypes['adsk.fusion.PathPatternFeatureInput'] = adsk.fusion.PathPatternFeatureInput;
//     adsk.fusion.PathPatternFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.PathPatternFeatureInput ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the path to create the pattern on path.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'path', {
//         get : function () {
//             var result = this._execute('path');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Path)) { throw new TypeError('value must be a adsk.fusion.Path'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('path', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets quantity of the elements.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'quantity', {
//         get : function () {
//             var result = this._execute('quantity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('quantity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the distance.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distance', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the start point on the path to count the distance.
//     // It's between 0 and 1. 0 means start point of the path, 1 means end point of the path.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'startPoint', {
//         get : function () {
//             var result = this._execute('startPoint');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('startPoint', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if flip the direction from start point.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'isFlipDirection', {
//         get : function () {
//             var result = this._execute('isFlipDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFlipDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets how the distance between elements is computed.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'patternDistanceType', {
//         get : function () {
//             var result = this._execute('patternDistanceType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternDistanceType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the pattern is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the orientation is along path.
//     // If false, the orientation is identical.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'isOrientationAlongPath', {
//         get : function () {
//             var result = this._execute('isOrientationAlongPath');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isOrientationAlongPath', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the compute option when patterning features. The default value for this is AdjustPatternCompute.
//     // This property only applies when patterning features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.PathPatternFeatureInput.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== PathPatternFeatures ============
//     // Collection that provides access to all of the existing path pattern features in a component
//     // and supports the ability to create new path pattern features.
//     adsk.fusion.PathPatternFeatures = function PathPatternFeatures(handle) {
//         if (!(this instanceof adsk.fusion.PathPatternFeatures)) {
//             return adsk.fusion.PathPatternFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PathPatternFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PathPatternFeatures.prototype.constructor = adsk.fusion.PathPatternFeatures;
//     adsk.fusion.PathPatternFeatures.interfaceId = 'adsk.fusion.PathPatternFeatures';
//     adsk.objectTypes['adsk.fusion.PathPatternFeatures'] = adsk.fusion.PathPatternFeatures;
//     adsk.fusion.PathPatternFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.PathPatternFeatures ? object : null;
//     };

//     // The number of path pattern features in the collection.
//     Object.defineProperty(adsk.fusion.PathPatternFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified path pattern feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.PathPatternFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeature) : null;
//     };

//     // Creates a PathPatternFeatureInput object. Use properties and methods on this object
//     // to define the path pattern you want to create and then use the Add method, passing in
//     // the PathPatternFeatureInput object.
//     // inputEntities : The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     // path : The Path object that represents a single set of connected curves along which to drive the pattern.
//     // quantity : Specifies the number of instances in the first direction.
//     // distance : Specifies the distance. How this value is used depends on the value of the PatternDistanceType property. A
//     // negative value can be used to change the direction.
//     // If the value is ExtentPatternDistanceType then it defines the total distance of the pattern.
//     // If the value is SpacingPatternDistanceType then it defines the distance between each element.
//     // patternDistanceType : Specifies how the distance between elements is computed.
//     // Returns the newly created PathPatternFeatureInput object or null if the creation failed.
//     adsk.fusion.PathPatternFeatures.prototype.createInput = function (inputEntities, path, quantity, distance, patternDistanceType) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (path !== null && !(path instanceof adsk.fusion.Path)) { throw new TypeError('path must be a adsk.fusion.Path'); }
//         if (quantity !== null && !(quantity instanceof adsk.core.ValueInput)) { throw new TypeError('quantity must be a adsk.core.ValueInput'); }
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         if (!isFinite(patternDistanceType)) { throw new TypeError('patternDistanceType must be a number'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle),
//             path : (path === null ? path : path.handle),
//             quantity : (quantity === null ? quantity : quantity.handle),
//             distance : (distance === null ? distance : distance.handle),
//             patternDistanceType : Number(patternDistanceType)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeatureInput) : null;
//     };

//     // Creates a new path pattern feature.
//     // input : A PathPatternFeatureInput object that defines the desired path pattern. Use the createInput
//     // method to create a new PathPatternFeatureInput object and then use methods on it
//     // (the PathPatternFeatureInput object) to define the path pattern.
//     // Returns the newly created PathPatternFeature object or null if the creation failed.
//     adsk.fusion.PathPatternFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.PathPatternFeatureInput)) { throw new TypeError('input must be a adsk.fusion.PathPatternFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeature) : null;
//     };

//     // Function that returns the specified path pattern feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.PathPatternFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeature) : null;
//     };

//     //=========== PatternComputeOptions ============
//     // List of the compute options for mirroring and patterning features in the parametric modeling environment.
//     adsk.fusion.PatternComputeOptions = {
//         OptimizedPatternCompute : 0,
//         IdenticalPatternCompute : 1,
//         AdjustPatternCompute : 2
//     };

//     //=========== PatternDistanceType ============
//     // Defines the different ways to specify the spacing between elements in a pattern.
//     adsk.fusion.PatternDistanceType = {
//         ExtentPatternDistanceType : 0,
//         SpacingPatternDistanceType : 1
//     };

//     //=========== PatternElement ============
//     // This class defines the properties that pertain to the pattern element.
//     adsk.fusion.PatternElement = function PatternElement(handle) {
//         if (!(this instanceof adsk.fusion.PatternElement)) {
//             return adsk.fusion.PatternElement.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PatternElement.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PatternElement.prototype.constructor = adsk.fusion.PatternElement;
//     adsk.fusion.PatternElement.interfaceId = 'adsk.fusion.PatternElement';
//     adsk.objectTypes['adsk.fusion.PatternElement'] = adsk.fusion.PatternElement;
//     adsk.fusion.PatternElement.cast = function (object) {
//         return object instanceof adsk.fusion.PatternElement ? object : null;
//     };

//     // Gets the faces generated as a result of this particular element.
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'faces', {
//         get : function () {
//             var result = this._execute('faces');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.fusion.BRepFace) : null;
//             }
//             return resultValue
//         }
//     });

//     // Gets the id of this element within the pattern.
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the feature pattern this element is a member of.
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'parentFeature', {
//         get : function () {
//             var result = this._execute('parentFeature');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Feature) : null;
//         }
//     });

//     // Gets and sets whether the element is suppressed or not. A value of True indicates it is suppressed
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'isSuppressed', {
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

//     // Get the transform that describes this elements relative position to the parent object(s).
//     // The transform returned for the first element in a pattern will be an identity matrix.
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'transform', {
//         get : function () {
//             var result = this._execute('transform');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix3D) : null;
//         }
//     });

//     // Get the name of the pattern element.
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//     // If the patternEntityType property of the parent feature returns OccurrencesPatternType
//     // then this property will return the occurrences associated with this particular pattern
//     // element.
//     Object.defineProperty(adsk.fusion.PatternElement.prototype, 'occurrences', {
//         get : function () {
//             var result = this._execute('occurrences');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.fusion.Occurrence) : null;
//             }
//             return resultValue
//         }
//     });

//     //=========== PatternElements ============
//     // Collection that provides access to pattern elements of mirror and pattern features.
//     adsk.fusion.PatternElements = function PatternElements(handle) {
//         if (!(this instanceof adsk.fusion.PatternElements)) {
//             return adsk.fusion.PatternElements.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PatternElements.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PatternElements.prototype.constructor = adsk.fusion.PatternElements;
//     adsk.fusion.PatternElements.interfaceId = 'adsk.fusion.PatternElements';
//     adsk.objectTypes['adsk.fusion.PatternElements'] = adsk.fusion.PatternElements;
//     adsk.fusion.PatternElements.cast = function (object) {
//         return object instanceof adsk.fusion.PatternElements ? object : null;
//     };

//     // The number of pattern elements in the collection.
//     Object.defineProperty(adsk.fusion.PatternElements.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified pattern element using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.PatternElements.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatternElement) : null;
//     };

//     //=========== PatternEntityTypes ============
//     // Specifies the different types of entities that can be patterned.
//     adsk.fusion.PatternEntityTypes = {
//         FacesPatternType : 0,
//         FeaturesPatternType : 1,
//         BodiesPatternType : 2,
//         OccurrencesPatternType : 3
//     };

//     //=========== PipeFeatures ============
//     // Collection that provides access to all of the existing pipe features in a design.
//     adsk.fusion.PipeFeatures = function PipeFeatures(handle) {
//         if (!(this instanceof adsk.fusion.PipeFeatures)) {
//             return adsk.fusion.PipeFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PipeFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PipeFeatures.prototype.constructor = adsk.fusion.PipeFeatures;
//     adsk.fusion.PipeFeatures.interfaceId = 'adsk.fusion.PipeFeatures';
//     adsk.objectTypes['adsk.fusion.PipeFeatures'] = adsk.fusion.PipeFeatures;
//     adsk.fusion.PipeFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.PipeFeatures ? object : null;
//     };

//     // The number of pipe features in the collection.
//     Object.defineProperty(adsk.fusion.PipeFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified pipe feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.PipeFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PipeFeature) : null;
//     };

//     // Function that returns the specified pipe feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.PipeFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PipeFeature) : null;
//     };

//     //=========== RectangularPatternFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a rectangular pattern
//     // feature.
//     adsk.fusion.RectangularPatternFeatureInput = function RectangularPatternFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.RectangularPatternFeatureInput)) {
//             return adsk.fusion.RectangularPatternFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RectangularPatternFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RectangularPatternFeatureInput.prototype.constructor = adsk.fusion.RectangularPatternFeatureInput;
//     adsk.fusion.RectangularPatternFeatureInput.interfaceId = 'adsk.fusion.RectangularPatternFeatureInput';
//     adsk.objectTypes['adsk.fusion.RectangularPatternFeatureInput'] = adsk.fusion.RectangularPatternFeatureInput;
//     adsk.fusion.RectangularPatternFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.RectangularPatternFeatureInput ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the first direction entity.
//     // This can be a linear edge, construction axis, sketch line or rectangular pattern feature.
//     // If a rectangular pattern feature is set, the directionOneEntity and directionTwoEntity properties return the same rectangular pattern feature.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'directionOneEntity', {
//         get : function () {
//             var result = this._execute('directionOneEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('directionOneEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the second direction entity.
//     // This can be a linear edge, construction axis, sketch line or rectangular pattern feature.
//     // If a rectangular pattern feature is set, the directionOneEntity and directionTwoEntity properties return the same rectangular pattern feature.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'directionTwoEntity', {
//         get : function () {
//             var result = this._execute('directionTwoEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('directionTwoEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the number of instances in the first direction.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'quantityOne', {
//         get : function () {
//             var result = this._execute('quantityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('quantityOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the number of instances in the second direction.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'quantityTwo', {
//         get : function () {
//             var result = this._execute('quantityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('quantityTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the distance in the first direction.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'distanceOne', {
//         get : function () {
//             var result = this._execute('distanceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distanceOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the distance in the second direction.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'distanceTwo', {
//         get : function () {
//             var result = this._execute('distanceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distanceTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a Vector3D indicating the positive direction of direction one.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'directionOne', {
//         get : function () {
//             var result = this._execute('directionOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns a Vector3D indicating the positive direction of direction two.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'directionTwo', {
//         get : function () {
//             var result = this._execute('directionTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets and sets if the pattern in direction one is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'isSymmetricInDirectionOne', {
//         get : function () {
//             var result = this._execute('isSymmetricInDirectionOne');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetricInDirectionOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the pattern in direction two is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'isSymmetricInDirectionTwo', {
//         get : function () {
//             var result = this._execute('isSymmetricInDirectionTwo');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetricInDirectionTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets how the distance between elements is computed.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'patternDistanceType', {
//         get : function () {
//             var result = this._execute('patternDistanceType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternDistanceType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the compute option when patterning features. The default value for this is AdjustPatternCompute.
//     // This property only applies when patterning features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatureInput.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets all of the input required to define the pattern in the second direction.
//     // directionTwoEntity : Specifies the entity used to define the second direction entity. This can be a linear edge, construction axis, sketch line or rectangular pattern feature.
//     // If a rectangular pattern feature is set, the directionOneEntity and directionTwoEntity properties return the same rectangular pattern feature.
//     // This argument can be null to indicate that the default second direction is to be used, which is 90 degrees to the first direction.
//     // quantityTwo : Specifies the number of instances in the second direction.
//     // distanceTwo : Specifies the distance in the second direction. How this value is used depends on the value of the PatternDistanceType property.
//     // If the value is ExtentPatternDistanceType then it defines the total distance of the pattern.
//     // If the value is SpacingPatternDistanceType then it defines the distance between each element.
//     // Returns true if it was successful.
//     adsk.fusion.RectangularPatternFeatureInput.prototype.setDirectionTwo = function (directionTwoEntity, quantityTwo, distanceTwo) {
//         if (directionTwoEntity !== null && !(directionTwoEntity instanceof adsk.core.Base)) { throw new TypeError('directionTwoEntity must be a adsk.core.Base'); }
//         if (quantityTwo !== null && !(quantityTwo instanceof adsk.core.ValueInput)) { throw new TypeError('quantityTwo must be a adsk.core.ValueInput'); }
//         if (distanceTwo !== null && !(distanceTwo instanceof adsk.core.ValueInput)) { throw new TypeError('distanceTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             directionTwoEntity : (directionTwoEntity === null ? directionTwoEntity : directionTwoEntity.handle),
//             quantityTwo : (quantityTwo === null ? quantityTwo : quantityTwo.handle),
//             distanceTwo : (distanceTwo === null ? distanceTwo : distanceTwo.handle)
//         };
//         var result = this._execute('setDirectionTwo', args);
//         return result ? result.value : undefined;
//     };

//     //=========== RectangularPatternFeatures ============
//     // Collection that provides access to all of the existing rectangular pattern features in a component
//     // and supports the ability to create new rectangular pattern features.
//     adsk.fusion.RectangularPatternFeatures = function RectangularPatternFeatures(handle) {
//         if (!(this instanceof adsk.fusion.RectangularPatternFeatures)) {
//             return adsk.fusion.RectangularPatternFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RectangularPatternFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RectangularPatternFeatures.prototype.constructor = adsk.fusion.RectangularPatternFeatures;
//     adsk.fusion.RectangularPatternFeatures.interfaceId = 'adsk.fusion.RectangularPatternFeatures';
//     adsk.objectTypes['adsk.fusion.RectangularPatternFeatures'] = adsk.fusion.RectangularPatternFeatures;
//     adsk.fusion.RectangularPatternFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.RectangularPatternFeatures ? object : null;
//     };

//     // The number of rectangular pattern features in the collection.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified rectangular pattern feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.RectangularPatternFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeature) : null;
//     };

//     // Creates a RectangularPatternFeatureInput object. Use properties and methods on this object
//     // to define the rectangular pattern you want to create and then use the Add method, passing in
//     // the RectangularPatternFeatureInput object.
//     // inputEntities : The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     // directionOneEntity : Specifies the entity used to define the first direction entity. This can be a linear edge, construction axis, sketch line or rectangular pattern feature.
//     // If a rectangular pattern feature is set, the directionOneEntity and directionTwoEntity properties return the same rectangular pattern feature.
//     // quantityOne : Specifies the number of instances in the first direction.
//     // distanceOne : Specifies the distance in the first direction. How this value is used depends on the value of the PatternDistanceType property. A
//     // negative value can be used to change the direction.
//     // If the value is ExtentPatternDistanceType then it defines the total distance of the pattern.
//     // If the value is SpacingPatternDistanceType then it defines the distance between each element.
//     // patternDistanceType : Specifies how the distance between elements is computed.
//     // Returns the newly created RectangularPatternFeatureInput object or null if the creation failed.
//     adsk.fusion.RectangularPatternFeatures.prototype.createInput = function (inputEntities, directionOneEntity, quantityOne, distanceOne, patternDistanceType) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (directionOneEntity !== null && !(directionOneEntity instanceof adsk.core.Base)) { throw new TypeError('directionOneEntity must be a adsk.core.Base'); }
//         if (quantityOne !== null && !(quantityOne instanceof adsk.core.ValueInput)) { throw new TypeError('quantityOne must be a adsk.core.ValueInput'); }
//         if (distanceOne !== null && !(distanceOne instanceof adsk.core.ValueInput)) { throw new TypeError('distanceOne must be a adsk.core.ValueInput'); }
//         if (!isFinite(patternDistanceType)) { throw new TypeError('patternDistanceType must be a number'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle),
//             directionOneEntity : (directionOneEntity === null ? directionOneEntity : directionOneEntity.handle),
//             quantityOne : (quantityOne === null ? quantityOne : quantityOne.handle),
//             distanceOne : (distanceOne === null ? distanceOne : distanceOne.handle),
//             patternDistanceType : Number(patternDistanceType)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeatureInput) : null;
//     };

//     // Creates a new rectangular pattern feature.
//     // input : A RectangularPatternFeatureInput object that defines the desired rectangular pattern. Use the createInput
//     // method to create a new RectangularPatternFeatureInput object and then use methods on it
//     // (the RectangularPatternFeatureInput object) to define the rectangular pattern.
//     // Returns the newly created RectangularPatternFeature object or null if the creation failed.
//     adsk.fusion.RectangularPatternFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.RectangularPatternFeatureInput)) { throw new TypeError('input must be a adsk.fusion.RectangularPatternFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeature) : null;
//     };

//     // Function that returns the specified rectangular pattern feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.RectangularPatternFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeature) : null;
//     };

//     //=========== RemoveFeatures ============
//     // Collection that provides access to all of the existing Remove features in a component
//     // and supports the ability to create new Remove features.
//     adsk.fusion.RemoveFeatures = function RemoveFeatures(handle) {
//         if (!(this instanceof adsk.fusion.RemoveFeatures)) {
//             return adsk.fusion.RemoveFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RemoveFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RemoveFeatures.prototype.constructor = adsk.fusion.RemoveFeatures;
//     adsk.fusion.RemoveFeatures.interfaceId = 'adsk.fusion.RemoveFeatures';
//     adsk.objectTypes['adsk.fusion.RemoveFeatures'] = adsk.fusion.RemoveFeatures;
//     adsk.fusion.RemoveFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.RemoveFeatures ? object : null;
//     };

//     // The number of Remove features in the collection.
//     Object.defineProperty(adsk.fusion.RemoveFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified Remove feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.RemoveFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RemoveFeature) : null;
//     };

//     // Function that returns the specified remove feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.RemoveFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RemoveFeature) : null;
//     };

//     // Creates a new Remove feature.
//     // itemToRemove : A single body (solid or surface) or component occurrence to remove.
//     // Returns the newly created RemoveFeature object or null if the creation failed.
//     adsk.fusion.RemoveFeatures.prototype.add = function (itemToRemove) {
//         if (itemToRemove !== null && !(itemToRemove instanceof adsk.core.Base)) { throw new TypeError('itemToRemove must be a adsk.core.Base'); }
//         var args = {
//             itemToRemove : (itemToRemove === null ? itemToRemove : itemToRemove.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RemoveFeature) : null;
//     };

//     //=========== ReplaceFaceFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a replace face feature.
//     adsk.fusion.ReplaceFaceFeatureInput = function ReplaceFaceFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ReplaceFaceFeatureInput)) {
//             return adsk.fusion.ReplaceFaceFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ReplaceFaceFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ReplaceFaceFeatureInput.prototype.constructor = adsk.fusion.ReplaceFaceFeatureInput;
//     adsk.fusion.ReplaceFaceFeatureInput.interfaceId = 'adsk.fusion.ReplaceFaceFeatureInput';
//     adsk.objectTypes['adsk.fusion.ReplaceFaceFeatureInput'] = adsk.fusion.ReplaceFaceFeatureInput;
//     adsk.fusion.ReplaceFaceFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ReplaceFaceFeatureInput ? object : null;
//     };

//     // Gets and sets the entities that define the source faces to perform replace.
//     // The collection can contain the faces from a solid and/or from features. All the faces must be on the same body.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeatureInput.prototype, 'sourceFaces', {
//         get : function () {
//             var result = this._execute('sourceFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('sourceFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entities that define the target faces. The new faces must completely intersect the part.
//     // The collection can contain the surface faces, surface bodies and construction planes.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeatureInput.prototype, 'targetFaces', {
//         get : function () {
//             var result = this._execute('targetFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('targetFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if any faces that are tangentially connected to any of
//     // the input faces will also be included in setting InputEntities. It defaults to true.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeatureInput.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isTangentChain', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ReplaceFaceFeatures ============
//     // Collection that provides access to all of the existing replace face features in a component
//     // and supports the ability to create new replace face features.
//     adsk.fusion.ReplaceFaceFeatures = function ReplaceFaceFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ReplaceFaceFeatures)) {
//             return adsk.fusion.ReplaceFaceFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ReplaceFaceFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ReplaceFaceFeatures.prototype.constructor = adsk.fusion.ReplaceFaceFeatures;
//     adsk.fusion.ReplaceFaceFeatures.interfaceId = 'adsk.fusion.ReplaceFaceFeatures';
//     adsk.objectTypes['adsk.fusion.ReplaceFaceFeatures'] = adsk.fusion.ReplaceFaceFeatures;
//     adsk.fusion.ReplaceFaceFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ReplaceFaceFeatures ? object : null;
//     };

//     // The number of replace face features in the collection.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified replace face feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ReplaceFaceFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeature) : null;
//     };

//     // Creates a ReplaceFaceFeatureInput object. Use properties and methods on this object
//     // to define the replace face you want to create and then use the Add method, passing in
//     // the ReplaceFaceFeatureInput object.
//     // sourceFaces : Input the entities that define the source faces (the faces to be replaced).
//     // The collection can contain the faces from a solid and/or features. All the faces must be on the same body.
//     // isTangentChain : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will also be included. A value of true indicates that tangent
//     // faces will be included.
//     // targetFaces : Input the entities that define the target faces. The new faces must completely intersect the part.
//     // The collection can contain the surface faces, surface bodies and construction planes.
//     // Returns the newly created ReplaceFaceFeatureInput object or null if the creation failed.
//     adsk.fusion.ReplaceFaceFeatures.prototype.createInput = function (sourceFaces, isTangentChain, targetFaces) {
//         if (sourceFaces !== null && !(sourceFaces instanceof adsk.core.ObjectCollection)) { throw new TypeError('sourceFaces must be a adsk.core.ObjectCollection'); }
//         if (typeof isTangentChain !== 'boolean') { throw new TypeError('isTangentChain must be a boolean'); }
//         if (targetFaces !== null && !(targetFaces instanceof adsk.core.Base)) { throw new TypeError('targetFaces must be a adsk.core.Base'); }
//         var args = {
//             sourceFaces : (sourceFaces === null ? sourceFaces : sourceFaces.handle),
//             isTangentChain : isTangentChain,
//             targetFaces : (targetFaces === null ? targetFaces : targetFaces.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeatureInput) : null;
//     };

//     // Creates a new replace face feature.
//     // input : A ReplaceFaceFeatureInput object that defines the desired replace face. Use the createInput
//     // method to create a new ReplaceFaceFeatureInput object and then use methods on it
//     // (the ReplaceFaceFeatureInput object) to define the replace face.
//     // Returns the newly created ReplaceFaceFeature object or null if the creation failed.
//     adsk.fusion.ReplaceFaceFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ReplaceFaceFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ReplaceFaceFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeature) : null;
//     };

//     // Function that returns the specified replace face feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ReplaceFaceFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeature) : null;
//     };

//     //=========== ReverseNormalFeatures ============
//     // Collection that provides access to all of the existing Reverse Normal features in a component
//     // and supports the ability to create new Reverse Normal features.
//     adsk.fusion.ReverseNormalFeatures = function ReverseNormalFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ReverseNormalFeatures)) {
//             return adsk.fusion.ReverseNormalFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ReverseNormalFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ReverseNormalFeatures.prototype.constructor = adsk.fusion.ReverseNormalFeatures;
//     adsk.fusion.ReverseNormalFeatures.interfaceId = 'adsk.fusion.ReverseNormalFeatures';
//     adsk.objectTypes['adsk.fusion.ReverseNormalFeatures'] = adsk.fusion.ReverseNormalFeatures;
//     adsk.fusion.ReverseNormalFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ReverseNormalFeatures ? object : null;
//     };

//     // The number of Reverse Normal features in the collection.
//     Object.defineProperty(adsk.fusion.ReverseNormalFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified Reverse Normal feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ReverseNormalFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReverseNormalFeature) : null;
//     };

//     // Function that returns the specified reverse normal feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ReverseNormalFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReverseNormalFeature) : null;
//     };

//     // Creates a new Reverse Normal feature.
//     // surfaces : One or more surface bodies (open BRepBodies) containing the faces whose normals are to be reversed.
//     // All faces of the input surface bodies get reversed.
//     // Returns the newly created ReverseNormalFeature object or null if the creation failed.
//     adsk.fusion.ReverseNormalFeatures.prototype.add = function (surfaces) {
//         if (surfaces !== null && !(surfaces instanceof adsk.core.ObjectCollection)) { throw new TypeError('surfaces must be a adsk.core.ObjectCollection'); }
//         var args = {
//             surfaces : (surfaces === null ? surfaces : surfaces.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReverseNormalFeature) : null;
//     };

//=========== RevolveFeatureInput ============
// This class defines the methods and properties that pertain to the definition of a revolve
// feature.
interface RevolveFeatureInput {
    cast(object: Object): RevolveFeatureInput;

    // Gets and sets the profiles or planar faces used to define the shape of the revolve.
    // This property can return or be set with a single Profile, a single planar face, or
    // an ObjectCollection consisting of multiple profiles and planar faces. When an
    // ObjectCollection is used all of the profiles and faces must be co-planar.
    // This property returns null in the case where the feature is non-parametric.
    profile: Base;

    // Gets and sets the type of operation performed by the revolve.
    operation: number;

    // Gets and sets the entity used to define the axis of revolution.
    // The axis can be a sketch line, construction axis, or linear edge. If it is not in
    // the same plane as the profile, it is projected onto the profile plane.
    axis: Base;

    // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
    // specified when the Revolve is created based on geometry (e.g. a profile and/or face(s))
    // in another component AND (the Revolve) is not in the root component.
    // The CreationOccurrence is analogous to the active occurrence in the UI
    creationOccurrence: Occurrence;

    // Specifies if the revolution should be created as a solid or surface. If
    // it's a surface then there aren't any end caps and it's open. This is
    // initialized to true so a solid will be created if it's not changed.
    isSolid: boolean;

    // Defines the extent of the revolution to be at a specified angle.
    // An angle and whether the extent is symmetric or only in one direction
    // is specified. If it's not symmetric a positive or negative angle can be
    // used to control the direction. If symmetric, the angle is the angle on one
    // side so the entire angle of the revolution will be twice the specified angle.
    // Use an angle of 360 deg or 2 pi radians to create a full revolve.
    // isSymmetric : Set to 'true' for a revolve symmetrical about the profile plane
    // angle : The ValueInput object that defines the angle of the revolution
    // Returns true if successful
    setAngleExtent(isSymmetric: boolean, angle: ValueInput): boolean;

    // Defines the angle of the revolve to be to applied to both sides of the profile
    // at the specified angles.
    // angleOne : The ValueInput object that defines the angle for the first side of the revolution
    // angleTwo : The ValueInput object that defines the angle for the second side of the revolution
    // Returns true if successful
    setTwoSideAngleExtent(angleOne: ValueInput, angleTwo: ValueInput): boolean;

    //     // Defines the extent of the revolve to be from the sketch or profile plane to the
    //     // specified "To" face.
    //     // toEntity : The entity that defines the "to" extent. The valid types of entities can vary depending on
    //     // the type of feature this is being used with. For a revolve it can be a BRepBody, BRepFace,
    //     // BRepVertex, ConstructionPlane, or ConstructionPoint.
    //     // directionHint : Specifies the direction of the revolve.
    //     // Returns true if successful.
    //     adsk.fusion.RevolveFeatureInput.prototype.setOneSideToExtent = function (toEntity, directionHint) {
    //         if (toEntity !== null && !(toEntity instanceof adsk.core.Base)) { throw new TypeError('toEntity must be a adsk.core.Base'); }
    //         if (directionHint === null || (directionHint !== undefined && directionHint !== null && !(directionHint instanceof adsk.core.Vector3D))) { throw new TypeError('directionHint must be a adsk.core.Vector3D'); }
    //         var args = {
    //             toEntity : (toEntity === null ? toEntity : toEntity.handle)
    //         };
    //         if (directionHint !== undefined) {
    //             args.directionHint = (directionHint === null ? directionHint : directionHint.handle);
    //         }
    //         var result = this._execute('setOneSideToExtent', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Defines the extents of the revolve to be from the sketch plane to specified
    //     // faces in both directions. If the matchShape argument is true, the faces to revolve to
    //     // are extended to fully intersect the revolve.
    //     // toEntityOne : The first entity that defines the "to" extent. The valid types of entities can vary depending on
    //     // the type of feature this is being used with. For a revolve it can be a BRepBody, BRepFace,
    //     // BRepVertex, ConstructionPlane, or ConstructionPoint.
    //     // toEntityTwo : The second entity that defines the "to" extent. The valid types of entities can vary depending on
    //     // the type of feature this is being used with. For a revolve it can be a BRepBody, BRepFace,
    //     // BRepVertex, ConstructionPlane, or ConstructionPoint.
    //     // Returns true if successful.
    //     adsk.fusion.RevolveFeatureInput.prototype.setTwoSideToExtent = function (toEntityOne, toEntityTwo) {
    //         if (toEntityOne !== null && !(toEntityOne instanceof adsk.core.Base)) { throw new TypeError('toEntityOne must be a adsk.core.Base'); }
    //         if (toEntityTwo !== null && !(toEntityTwo instanceof adsk.core.Base)) { throw new TypeError('toEntityTwo must be a adsk.core.Base'); }
    //         var args = {
    //             toEntityOne : (toEntityOne === null ? toEntityOne : toEntityOne.handle),
    //             toEntityTwo : (toEntityTwo === null ? toEntityTwo : toEntityTwo.handle)
    //         };
    //         var result = this._execute('setTwoSideToExtent', args);
    //         return result ? result.value : undefined;
    //     };
}

//=========== RevolveFeatures ============
// Collection that provides access to all of the existing revolve features in a design
// and supports the ability to create new revolve features.
interface RevolveFeatures {
    //         if (!(this instanceof adsk.fusion.RevolveFeatures)) {
    //             return adsk.fusion.RevolveFeatures.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.fusion.RevolveFeatures.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.fusion.RevolveFeatures.prototype.constructor = adsk.fusion.RevolveFeatures;
    //     adsk.fusion.RevolveFeatures.interfaceId = 'adsk.fusion.RevolveFeatures';
    //     adsk.objectTypes['adsk.fusion.RevolveFeatures'] = adsk.fusion.RevolveFeatures;
    //     adsk.fusion.RevolveFeatures.cast = function (object) {
    //         return object instanceof adsk.fusion.RevolveFeatures ? object : null;
    //     };

    //     // The number of revolve features in the collection.
    //     Object.defineProperty(adsk.fusion.RevolveFeatures.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Function that returns the specified revolve feature using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.fusion.RevolveFeatures.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeature) : null;
    //     };

    //     // Creates a new RevolveFeatureInput object that is used to specify the input needed
    //     // to create a new revolve feature.
    //     // profile : The profile argument can be a single Profile, a single
    //     // planar face, or an ObjectCollection consisting of multiple profiles and planar faces.
    //     // When an ObjectCollection is used all of the profiles and faces must be co-planar.
    //     // axis : The axis can be a sketch line, construction axis, or linear edge. If it is not in
    //     // the same plane as the profile, it is projected onto the profile plane.
    //     // operation : The operation type to perform.
    //     // Returns the newly created RevolveFeatureInput object or null if the creation failed.
    //     adsk.fusion.RevolveFeatures.prototype.createInput = function (profile, axis, operation) {
    //         if (profile !== null && !(profile instanceof adsk.core.Base)) { throw new TypeError('profile must be a adsk.core.Base'); }
    //         if (axis !== null && !(axis instanceof adsk.core.Base)) { throw new TypeError('axis must be a adsk.core.Base'); }
    //         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
    //         var args = {
    //             profile : (profile === null ? profile : profile.handle),
    //             axis : (axis === null ? axis : axis.handle),
    //             operation : Number(operation)
    //         };
    //         var result = this._execute('createInput', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeatureInput) : null;
    //     };

    //     // Creates a new revolve feature based on the information provided by the provided
    //     // RevolveFeatureInput object.
    //     // To create a new revolve, use the createInput function to create a new input object
    //     // and then use the methods and properties on that object to define the required input
    //     // for a revolve. Once the information is defined on the input object you can pass it
    //     // to the Add method to create the revolve.
    //     // input : The RevolveFeatureInput object that specifies the input needed to create a new extrude
    //     // Returns the newly created RevolveFeature or null if the creation failed.
    //     adsk.fusion.RevolveFeatures.prototype.add = function (input) {
    //         if (input !== null && !(input instanceof adsk.fusion.RevolveFeatureInput)) { throw new TypeError('input must be a adsk.fusion.RevolveFeatureInput'); }
    //         var args = {
    //             input : (input === null ? input : input.handle)
    //         };
    //         var result = this._execute('add', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeature) : null;
    //     };

    //     // Function that returns the specified revolve feature using the name of the feature.
    //     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
    //     // Returns the specified item or null if the specified name was not found.
    //     adsk.fusion.RevolveFeatures.prototype.itemByName = function (name) {
    //         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
    //         var args = {
    //             name : name
    //         };
    //         var result = this._execute('itemByName', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeature) : null;
    //     };
}

//     //=========== RibFeatures ============
//     // Collection that provides access to all of the existing rib features in a design.
//     adsk.fusion.RibFeatures = function RibFeatures(handle) {
//         if (!(this instanceof adsk.fusion.RibFeatures)) {
//             return adsk.fusion.RibFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RibFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RibFeatures.prototype.constructor = adsk.fusion.RibFeatures;
//     adsk.fusion.RibFeatures.interfaceId = 'adsk.fusion.RibFeatures';
//     adsk.objectTypes['adsk.fusion.RibFeatures'] = adsk.fusion.RibFeatures;
//     adsk.fusion.RibFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.RibFeatures ? object : null;
//     };

//     // The number of Rib features in the collection.
//     Object.defineProperty(adsk.fusion.RibFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified Rib feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.RibFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RibFeature) : null;
//     };

//     // Function that returns the specified Rib feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.RibFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RibFeature) : null;
//     };

//     //=========== RuleFilletFeatures ============
//     // Collection that provides access to all of the existing rule fillet features in a design.
//     adsk.fusion.RuleFilletFeatures = function RuleFilletFeatures(handle) {
//         if (!(this instanceof adsk.fusion.RuleFilletFeatures)) {
//             return adsk.fusion.RuleFilletFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RuleFilletFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RuleFilletFeatures.prototype.constructor = adsk.fusion.RuleFilletFeatures;
//     adsk.fusion.RuleFilletFeatures.interfaceId = 'adsk.fusion.RuleFilletFeatures';
//     adsk.objectTypes['adsk.fusion.RuleFilletFeatures'] = adsk.fusion.RuleFilletFeatures;
//     adsk.fusion.RuleFilletFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.RuleFilletFeatures ? object : null;
//     };

//     // The number of rule fillet features in the collection.
//     Object.defineProperty(adsk.fusion.RuleFilletFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified rule fillet feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.RuleFilletFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RuleFilletFeature) : null;
//     };

//     // Function that returns the specified rule fillet feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.RuleFilletFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RuleFilletFeature) : null;
//     };

//     //=========== ScaleFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a scale
//     // feature.
//     adsk.fusion.ScaleFeatureInput = function ScaleFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ScaleFeatureInput)) {
//             return adsk.fusion.ScaleFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ScaleFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ScaleFeatureInput.prototype.constructor = adsk.fusion.ScaleFeatureInput;
//     adsk.fusion.ScaleFeatureInput.interfaceId = 'adsk.fusion.ScaleFeatureInput';
//     adsk.objectTypes['adsk.fusion.ScaleFeatureInput'] = adsk.fusion.ScaleFeatureInput;
//     adsk.fusion.ScaleFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ScaleFeatureInput ? object : null;
//     };

//     // Gets and sets the input entities.
//     // This collection can contain sketches, BRep bodies and T-Spline bodies in parametric modeling.
//     // It can contain sketches, BRep bodies, T-Spline bodies, mesh bodies, root component and occurrences in non-parametric modeling.
//     // If the scaling is non-uniform (the isUniform property is false), this collection cannot contain sketches or components.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the origin point of the scale. This can be a BRepVertex, a SketchPoint or a ConstructionPoint.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'point', {
//         get : function () {
//             var result = this._execute('point');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('point', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the scale factor used for a uniform scale.
//     // Setting this value will cause the isUniform property to be set to true.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'scaleFactor', {
//         get : function () {
//             var result = this._execute('scaleFactor');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('scaleFactor', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if the scale is uniform.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'isUniform', {
//         get : function () {
//             var result = this._execute('isUniform');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the scale in X direction.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'xScale', {
//         get : function () {
//             var result = this._execute('xScale');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         }
//     });

//     // Gets the scale in Y direction.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'yScale', {
//         get : function () {
//             var result = this._execute('yScale');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         }
//     });

//     // Gets the scale in Z direction.
//     Object.defineProperty(adsk.fusion.ScaleFeatureInput.prototype, 'zScale', {
//         get : function () {
//             var result = this._execute('zScale');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         }
//     });

//     // Sets the scale factor for the x, y, z directions to define a non-uniform scale.
//     // Calling this method will cause the isUniform property to be set to false.
//     // This will fail if the inputEntities collection contains sketches or components.
//     // xScale : A ValueInput object that defines the scale in the X direction.
//     // yScale : A ValueInput object that defines the scale in the Y direction.
//     // zScale : A ValueInput object that defines the scale in the Z direction.
//     // Returns true if successful.
//     adsk.fusion.ScaleFeatureInput.prototype.setToNonUniform = function (xScale, yScale, zScale) {
//         if (xScale !== null && !(xScale instanceof adsk.core.ValueInput)) { throw new TypeError('xScale must be a adsk.core.ValueInput'); }
//         if (yScale !== null && !(yScale instanceof adsk.core.ValueInput)) { throw new TypeError('yScale must be a adsk.core.ValueInput'); }
//         if (zScale !== null && !(zScale instanceof adsk.core.ValueInput)) { throw new TypeError('zScale must be a adsk.core.ValueInput'); }
//         var args = {
//             xScale : (xScale === null ? xScale : xScale.handle),
//             yScale : (yScale === null ? yScale : yScale.handle),
//             zScale : (zScale === null ? zScale : zScale.handle)
//         };
//         var result = this._execute('setToNonUniform', args);
//         return result ? result.value : undefined;
//     };

//     //=========== ScaleFeatures ============
//     // Collection that provides access to all of the existing scale features in a component
//     // and supports the ability to create new scale features.
//     adsk.fusion.ScaleFeatures = function ScaleFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ScaleFeatures)) {
//             return adsk.fusion.ScaleFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ScaleFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ScaleFeatures.prototype.constructor = adsk.fusion.ScaleFeatures;
//     adsk.fusion.ScaleFeatures.interfaceId = 'adsk.fusion.ScaleFeatures';
//     adsk.objectTypes['adsk.fusion.ScaleFeatures'] = adsk.fusion.ScaleFeatures;
//     adsk.fusion.ScaleFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ScaleFeatures ? object : null;
//     };

//     // The number of scale features in the collection.
//     Object.defineProperty(adsk.fusion.ScaleFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified scale feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ScaleFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeature) : null;
//     };

//     // Creates a ScaleFeatureInput object. Use properties and methods on this object
//     // to define the scale you want to create and then use the Add method, passing in
//     // the ScaleFeatureInput object.
//     // inputEntities : This collection can contain sketches, BRep bodies and T-Spline bodies in parametric modeling.
//     // It can contain sketches, BRep bodies, T-Spline bodies, mesh bodies, root component and occurrences in non-parametric modeling.
//     // point : Input a point as reference to scale. This can be a BRepVertex, a SketchPoint or a ConstructionPoint.
//     // scaleFactor : The ValueInput object that defines the scale factor for uniform scale.
//     // Returns the newly created ScaleFeatureInput object or null if the creation failed.
//     adsk.fusion.ScaleFeatures.prototype.createInput = function (inputEntities, point, scaleFactor) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (point !== null && !(point instanceof adsk.core.Base)) { throw new TypeError('point must be a adsk.core.Base'); }
//         if (scaleFactor !== null && !(scaleFactor instanceof adsk.core.ValueInput)) { throw new TypeError('scaleFactor must be a adsk.core.ValueInput'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle),
//             point : (point === null ? point : point.handle),
//             scaleFactor : (scaleFactor === null ? scaleFactor : scaleFactor.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeatureInput) : null;
//     };

//     // Creates a new scale feature.
//     // input : A ScaleFeatureInput object that defines the desired scale. Use the createInput
//     // method to create a new ScaleFeatureInput object and then use methods on it
//     // (the ScaleFeatureInput object) to define the scale.
//     // Returns the newly created ScaleFeature object or null if the creation failed.
//     // Returns nothing in the case where the feature is non-parametric.
//     adsk.fusion.ScaleFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ScaleFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ScaleFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeature) : null;
//     };

//     // Function that returns the specified scale feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ScaleFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeature) : null;
//     };

//     //=========== ShellFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a shell
//     // feature.
//     adsk.fusion.ShellFeatureInput = function ShellFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ShellFeatureInput)) {
//             return adsk.fusion.ShellFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ShellFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ShellFeatureInput.prototype.constructor = adsk.fusion.ShellFeatureInput;
//     adsk.fusion.ShellFeatureInput.interfaceId = 'adsk.fusion.ShellFeatureInput';
//     adsk.objectTypes['adsk.fusion.ShellFeatureInput'] = adsk.fusion.ShellFeatureInput;
//     adsk.fusion.ShellFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ShellFeatureInput ? object : null;
//     };

//     // Gets and sets the input faces/bodies.
//     // If IsTangentChain is true, all the faces that are tangentially connected to the input faces (if any) will also be included.
//     // Fails if any faces are input, and the owning bodies of the faces are also input.
//     Object.defineProperty(adsk.fusion.ShellFeatureInput.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if any faces that are tangentially connected to any of
//     // the input faces will also be included in setting InputEntities. It defaults to true.
//     Object.defineProperty(adsk.fusion.ShellFeatureInput.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isTangentChain', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the inside thickness.
//     Object.defineProperty(adsk.fusion.ShellFeatureInput.prototype, 'insideThickness', {
//         get : function () {
//             var result = this._execute('insideThickness');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('insideThickness', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the outside thickness.
//     Object.defineProperty(adsk.fusion.ShellFeatureInput.prototype, 'outsideThickness', {
//         get : function () {
//             var result = this._execute('outsideThickness');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('outsideThickness', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
//     // specified when the shell is created based on geometry (e.g. a profile and/or face(s))
//     // in another component AND (the shell) is not in the root component.
//     // The CreationOccurrence is analogous to the active occurrence in the UI
//     Object.defineProperty(adsk.fusion.ShellFeatureInput.prototype, 'creationOccurrence', {
//         get : function () {
//             var result = this._execute('creationOccurrence');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('creationOccurrence', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ShellFeatures ============
//     // Collection that provides access to all of the existing shell features in a component
//     // and supports the ability to create new shell features.
//     adsk.fusion.ShellFeatures = function ShellFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ShellFeatures)) {
//             return adsk.fusion.ShellFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ShellFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ShellFeatures.prototype.constructor = adsk.fusion.ShellFeatures;
//     adsk.fusion.ShellFeatures.interfaceId = 'adsk.fusion.ShellFeatures';
//     adsk.objectTypes['adsk.fusion.ShellFeatures'] = adsk.fusion.ShellFeatures;
//     adsk.fusion.ShellFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ShellFeatures ? object : null;
//     };

//     // The number of shell features in the collection.
//     Object.defineProperty(adsk.fusion.ShellFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified shell feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ShellFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeature) : null;
//     };

//     // Creates a ShellFeatureInput object. Use properties and methods on this object
//     // to define the shell you want to create and then use the Add method, passing in
//     // the ShellFeatureInput object.
//     // inputEntities : The collection contains the faces to remove and the bodies to perform shell.
//     // Fails if any faces are input, and the owning bodies of the faces are also input.
//     // isTangentChain : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will also be included. It defaults to true.
//     // Returns the newly created ShellFeatureInput object or null if the creation failed.
//     adsk.fusion.ShellFeatures.prototype.createInput = function (inputEntities, isTangentChain) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (isTangentChain === null || (isTangentChain !== undefined && typeof isTangentChain !== 'boolean')) { throw new TypeError('isTangentChain must be a boolean'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle)
//         };
//         if (isTangentChain !== undefined) {
//             args.isTangentChain = isTangentChain;
//         }
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeatureInput) : null;
//     };

//     // Creates a new shell feature.
//     // input : A ShellFeatureInput object that defines the desired shell. Use the createInput
//     // method to create a new ShellFeatureInput object and then use methods on it
//     // (the ShellFeatureInput object) to define the shell.
//     // Returns the newly created ShellFeature object or null if the creation failed.
//     adsk.fusion.ShellFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ShellFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ShellFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeature) : null;
//     };

//     // Function that returns the specified shell feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ShellFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeature) : null;
//     };

//     //=========== SilhouetteSplitFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a silhouette split feature.
//     adsk.fusion.SilhouetteSplitFeatureInput = function SilhouetteSplitFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.SilhouetteSplitFeatureInput)) {
//             return adsk.fusion.SilhouetteSplitFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SilhouetteSplitFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SilhouetteSplitFeatureInput.prototype.constructor = adsk.fusion.SilhouetteSplitFeatureInput;
//     adsk.fusion.SilhouetteSplitFeatureInput.interfaceId = 'adsk.fusion.SilhouetteSplitFeatureInput';
//     adsk.objectTypes['adsk.fusion.SilhouetteSplitFeatureInput'] = adsk.fusion.SilhouetteSplitFeatureInput;
//     adsk.fusion.SilhouetteSplitFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.SilhouetteSplitFeatureInput ? object : null;
//     };

//     // Gets and sets the solid body to split.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeatureInput.prototype, 'targetBody', {
//         get : function () {
//             var result = this._execute('targetBody');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.BRepBody)) { throw new TypeError('value must be a adsk.fusion.BRepBody'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('targetBody', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the silhouette view direction, which can be a
//     // construction axis, linear BRepEdge, planar BRepFace or a construction plane.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeatureInput.prototype, 'viewDirection', {
//         get : function () {
//             var result = this._execute('viewDirection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('viewDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the type of silhouette split operation to perform.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeatureInput.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== SilhouetteSplitFeatures ============
//     // Collection that provides access to all of the existing Silhouette Split features in a component
//     // and supports the ability to create new Silhouette Split features.
//     adsk.fusion.SilhouetteSplitFeatures = function SilhouetteSplitFeatures(handle) {
//         if (!(this instanceof adsk.fusion.SilhouetteSplitFeatures)) {
//             return adsk.fusion.SilhouetteSplitFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SilhouetteSplitFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SilhouetteSplitFeatures.prototype.constructor = adsk.fusion.SilhouetteSplitFeatures;
//     adsk.fusion.SilhouetteSplitFeatures.interfaceId = 'adsk.fusion.SilhouetteSplitFeatures';
//     adsk.objectTypes['adsk.fusion.SilhouetteSplitFeatures'] = adsk.fusion.SilhouetteSplitFeatures;
//     adsk.fusion.SilhouetteSplitFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.SilhouetteSplitFeatures ? object : null;
//     };

//     // The number of Silhouette Split features in the collection.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified silhouette split feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SilhouetteSplitFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeature) : null;
//     };

//     // Creates a SilhouetteSplitFeatureInput object. Use properties and methods on this object
//     // to define the silhouette split you want to create and then use the Add method, passing in
//     // the SilhouetteSplitFeatureInput object.
//     // viewDirection : A construction axis, linear BRepEdge, planar BRepFace or a construction plane that defines the view direction
//     // where the silhouette is calculated.
//     // targetBody : Input the single solid body to split
//     // operation : The type of silhouette split operation to perform.
//     // Returns the newly created SilhouetteSplitFeatureInput object or null if the creation failed.
//     adsk.fusion.SilhouetteSplitFeatures.prototype.createInput = function (viewDirection, targetBody, operation) {
//         if (viewDirection !== null && !(viewDirection instanceof adsk.core.Base)) { throw new TypeError('viewDirection must be a adsk.core.Base'); }
//         if (targetBody !== null && !(targetBody instanceof adsk.fusion.BRepBody)) { throw new TypeError('targetBody must be a adsk.fusion.BRepBody'); }
//         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
//         var args = {
//             viewDirection : (viewDirection === null ? viewDirection : viewDirection.handle),
//             targetBody : (targetBody === null ? targetBody : targetBody.handle),
//             operation : Number(operation)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeatureInput) : null;
//     };

//     // Creates a new silhouette split feature.
//     // input : A SilhouetteSplitFeatureInput object that defines the desired silhouette split feature. Use the createInput
//     // method to create a new SilhouetteSplitFeatureInput object and then use methods on it
//     // (the SilhouetteSplitFeatureInput object) to define the silhouette split.
//     // Returns the newly created SilhouetteSplitFeature object or null if the creation failed.
//     adsk.fusion.SilhouetteSplitFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.SilhouetteSplitFeatureInput)) { throw new TypeError('input must be a adsk.fusion.SilhouetteSplitFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeature) : null;
//     };

//     // Function that returns the specified silhouette split feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.SilhouetteSplitFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeature) : null;
//     };

//     //=========== SilhouetteSplitOperations ============
//     // List of Silhouette Split feature operations.
//     adsk.fusion.SilhouetteSplitOperations = {
//         SilhouetteSplitFacesOnlyOperation : 0,
//         SilhouetteSplitShelledBodyOperation : 1,
//         SilhouetteSplitSolidBodyOperation : 2
//     };

//     //=========== SphereFeatures ============
//     // Collection that provides access to all of the existing torus features in a design.
//     adsk.fusion.SphereFeatures = function SphereFeatures(handle) {
//         if (!(this instanceof adsk.fusion.SphereFeatures)) {
//             return adsk.fusion.SphereFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SphereFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SphereFeatures.prototype.constructor = adsk.fusion.SphereFeatures;
//     adsk.fusion.SphereFeatures.interfaceId = 'adsk.fusion.SphereFeatures';
//     adsk.objectTypes['adsk.fusion.SphereFeatures'] = adsk.fusion.SphereFeatures;
//     adsk.fusion.SphereFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.SphereFeatures ? object : null;
//     };

//     // The number of sphere features in the collection.
//     Object.defineProperty(adsk.fusion.SphereFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sphere feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SphereFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SphereFeature) : null;
//     };

//     // Function that returns the specified sphere feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.SphereFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SphereFeature) : null;
//     };

//     //=========== SplitBodyFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a split body feature.
//     adsk.fusion.SplitBodyFeatureInput = function SplitBodyFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.SplitBodyFeatureInput)) {
//             return adsk.fusion.SplitBodyFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SplitBodyFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SplitBodyFeatureInput.prototype.constructor = adsk.fusion.SplitBodyFeatureInput;
//     adsk.fusion.SplitBodyFeatureInput.interfaceId = 'adsk.fusion.SplitBodyFeatureInput';
//     adsk.objectTypes['adsk.fusion.SplitBodyFeatureInput'] = adsk.fusion.SplitBodyFeatureInput;
//     adsk.fusion.SplitBodyFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.SplitBodyFeatureInput ? object : null;
//     };

//     // Gets and sets the input solid or open bodies to be split. This can be a
//     // single BRepBody or an ObjectCollection if multiple bodies are to be split.
//     Object.defineProperty(adsk.fusion.SplitBodyFeatureInput.prototype, 'splitBodies', {
//         get : function () {
//             var result = this._execute('splitBodies');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('splitBodies', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the splitting tool. The splitting tool is a single
//     // entity that can be either a solid or open BRepBody, construction plane, profile, or a face.
//     Object.defineProperty(adsk.fusion.SplitBodyFeatureInput.prototype, 'splittingTool', {
//         get : function () {
//             var result = this._execute('splittingTool');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('splittingTool', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether or not the splitting tool is to be automatically extended (if possible) so as to
//     // completely intersect the bodyToSplit.
//     Object.defineProperty(adsk.fusion.SplitBodyFeatureInput.prototype, 'isSplittingToolExtended', {
//         get : function () {
//             var result = this._execute('isSplittingToolExtended');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSplittingToolExtended', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== SplitBodyFeatures ============
//     // Collection that provides access to all of the existing split body features in a component
//     // and supports the ability to create new split body features.
//     adsk.fusion.SplitBodyFeatures = function SplitBodyFeatures(handle) {
//         if (!(this instanceof adsk.fusion.SplitBodyFeatures)) {
//             return adsk.fusion.SplitBodyFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SplitBodyFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SplitBodyFeatures.prototype.constructor = adsk.fusion.SplitBodyFeatures;
//     adsk.fusion.SplitBodyFeatures.interfaceId = 'adsk.fusion.SplitBodyFeatures';
//     adsk.objectTypes['adsk.fusion.SplitBodyFeatures'] = adsk.fusion.SplitBodyFeatures;
//     adsk.fusion.SplitBodyFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.SplitBodyFeatures ? object : null;
//     };

//     // The number of split body features in the collection.
//     Object.defineProperty(adsk.fusion.SplitBodyFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified split body feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SplitBodyFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeature) : null;
//     };

//     // Creates a SplitBodyFeatureInput object. Use properties and methods on this object
//     // to define the split body you want to create and then use the Add method, passing in
//     // the SplitBodyFeatureInput object.
//     // splitBodies : Input solid body or open bodies to be split. This can be a single BRepBody or an ObjectCollection if multliple
//     // bodies are to be split.
//     // splittingTool : Input entity that defines the splitting tool. The splitting tool is a single entity that can be either a solid or open BRepBody,
//     // construction plane, profile, or a face.
//     // isSplittingToolExtended : A boolean value for setting whether or not the splitting tool is to be automatically extended (if possible) so as to
//     // completely intersect the bodyToSplit.
//     // Returns the newly created SplitBodyFeatureInput object or null if the creation failed.
//     adsk.fusion.SplitBodyFeatures.prototype.createInput = function (splitBodies, splittingTool, isSplittingToolExtended) {
//         if (splitBodies !== null && !(splitBodies instanceof adsk.core.Base)) { throw new TypeError('splitBodies must be a adsk.core.Base'); }
//         if (splittingTool !== null && !(splittingTool instanceof adsk.core.Base)) { throw new TypeError('splittingTool must be a adsk.core.Base'); }
//         if (typeof isSplittingToolExtended !== 'boolean') { throw new TypeError('isSplittingToolExtended must be a boolean'); }
//         var args = {
//             splitBodies : (splitBodies === null ? splitBodies : splitBodies.handle),
//             splittingTool : (splittingTool === null ? splittingTool : splittingTool.handle),
//             isSplittingToolExtended : isSplittingToolExtended
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeatureInput) : null;
//     };

//     // Creates a new split body feature.
//     // input : A SplitBodyFeatureInput object that defines the desired split body feature. Use the createInput
//     // method to create a new SplitBodyFeatureInput object and then use methods on it
//     // (the SplitBodyFeatureInput object) to define the split body.
//     // Returns the newly created SplitBodyFeature object or null if the creation failed.
//     adsk.fusion.SplitBodyFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.SplitBodyFeatureInput)) { throw new TypeError('input must be a adsk.fusion.SplitBodyFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeature) : null;
//     };

//     // Function that returns the specified split body feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.SplitBodyFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeature) : null;
//     };

//     //=========== SplitFaceFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a split face feature.
//     adsk.fusion.SplitFaceFeatureInput = function SplitFaceFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.SplitFaceFeatureInput)) {
//             return adsk.fusion.SplitFaceFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SplitFaceFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SplitFaceFeatureInput.prototype.constructor = adsk.fusion.SplitFaceFeatureInput;
//     adsk.fusion.SplitFaceFeatureInput.interfaceId = 'adsk.fusion.SplitFaceFeatureInput';
//     adsk.objectTypes['adsk.fusion.SplitFaceFeatureInput'] = adsk.fusion.SplitFaceFeatureInput;
//     adsk.fusion.SplitFaceFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.SplitFaceFeatureInput ? object : null;
//     };

//     // Gets and sets the faces to be split.
//     // The collection can contain one or more faces selected from solid and/or open bodies.
//     Object.defineProperty(adsk.fusion.SplitFaceFeatureInput.prototype, 'facesToSplit', {
//         get : function () {
//             var result = this._execute('facesToSplit');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('facesToSplit', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity(s) that define the splitting tool(s). The splitting tool can consist of one or more of
//     // the following: BRepBody, ConstructionPlane, BRepFace, sketch curve that extends or can
//     // be extended beyond the extents of the face.
//     // The input for this argument can be one of the valid types or an ObjectCollection in the case where multiple splitting
//     // tools are being defined.
//     Object.defineProperty(adsk.fusion.SplitFaceFeatureInput.prototype, 'splittingTool', {
//         get : function () {
//             var result = this._execute('splittingTool');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('splittingTool', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether or not the splittingTool is to be automatically extended (if possible) so as to
//     // completely intersect the facesToSplit.
//     Object.defineProperty(adsk.fusion.SplitFaceFeatureInput.prototype, 'isSplittingToolExtended', {
//         get : function () {
//             var result = this._execute('isSplittingToolExtended');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSplittingToolExtended', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== SplitFaceFeatures ============
//     // Collection that provides access to all of the existing split face features in a component
//     // and supports the ability to create new split face features.
//     adsk.fusion.SplitFaceFeatures = function SplitFaceFeatures(handle) {
//         if (!(this instanceof adsk.fusion.SplitFaceFeatures)) {
//             return adsk.fusion.SplitFaceFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SplitFaceFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SplitFaceFeatures.prototype.constructor = adsk.fusion.SplitFaceFeatures;
//     adsk.fusion.SplitFaceFeatures.interfaceId = 'adsk.fusion.SplitFaceFeatures';
//     adsk.objectTypes['adsk.fusion.SplitFaceFeatures'] = adsk.fusion.SplitFaceFeatures;
//     adsk.fusion.SplitFaceFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.SplitFaceFeatures ? object : null;
//     };

//     // The number of split face features in the collection.
//     Object.defineProperty(adsk.fusion.SplitFaceFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified split face feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SplitFaceFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeature) : null;
//     };

//     // Creates a SplitFaceFeatureInput object. Use properties and methods on this object
//     // to define the split face you want to create and then use the Add method, passing in
//     // the SplitFaceFeatureInput object.
//     // facesToSplit : Input the faces to be split.
//     // The collection can contain one or more faces selected from solid and/or open bodies.
//     // splittingTool : Input entity that defines the splitting tool. The splitting tool is a single entity that can be either a solid body,
//     // open body, construction plane, face, or sketch curve that partially or fully intersects the facesToSplit.
//     // isSplittingToolExtended : A boolean value for setting whether or not the splittingTool is to be automatically extended (if possible) so as to
//     // completely intersect the faces that are to be split.
//     // Returns the newly created SplitFaceFeatureInput object or null if the creation failed.
//     adsk.fusion.SplitFaceFeatures.prototype.createInput = function (facesToSplit, splittingTool, isSplittingToolExtended) {
//         if (facesToSplit !== null && !(facesToSplit instanceof adsk.core.ObjectCollection)) { throw new TypeError('facesToSplit must be a adsk.core.ObjectCollection'); }
//         if (splittingTool !== null && !(splittingTool instanceof adsk.core.Base)) { throw new TypeError('splittingTool must be a adsk.core.Base'); }
//         if (typeof isSplittingToolExtended !== 'boolean') { throw new TypeError('isSplittingToolExtended must be a boolean'); }
//         var args = {
//             facesToSplit : (facesToSplit === null ? facesToSplit : facesToSplit.handle),
//             splittingTool : (splittingTool === null ? splittingTool : splittingTool.handle),
//             isSplittingToolExtended : isSplittingToolExtended
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeatureInput) : null;
//     };

//     // Creates a new split face feature.
//     // input : A SplitFaceFeatureInput object that defines the desired split face feature. Use the createInput
//     // method to create a new SplitFaceFeatureInput object and then use methods on it
//     // (the SplitFaceFeatureInput object) to define the split face.
//     // Returns the newly created SplitFaceFeature object or null if the creation failed.
//     adsk.fusion.SplitFaceFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.SplitFaceFeatureInput)) { throw new TypeError('input must be a adsk.fusion.SplitFaceFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeature) : null;
//     };

//     // Function that returns the specified split face feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.SplitFaceFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeature) : null;
//     };

//     //=========== StitchFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a stitch feature.
//     adsk.fusion.StitchFeatureInput = function StitchFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.StitchFeatureInput)) {
//             return adsk.fusion.StitchFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.StitchFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.StitchFeatureInput.prototype.constructor = adsk.fusion.StitchFeatureInput;
//     adsk.fusion.StitchFeatureInput.interfaceId = 'adsk.fusion.StitchFeatureInput';
//     adsk.objectTypes['adsk.fusion.StitchFeatureInput'] = adsk.fusion.StitchFeatureInput;
//     adsk.fusion.StitchFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.StitchFeatureInput ? object : null;
//     };

//     // Gets and sets the surfaces to stitch together.
//     Object.defineProperty(adsk.fusion.StitchFeatureInput.prototype, 'stitchSurfaces', {
//         get : function () {
//             var result = this._execute('stitchSurfaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('stitchSurfaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the ValueInput object that defines the stitching tolerance. It must define a length.
//     Object.defineProperty(adsk.fusion.StitchFeatureInput.prototype, 'tolerance', {
//         get : function () {
//             var result = this._execute('tolerance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('tolerance', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the feature operation to perform. This property value is ignored if the stitched result does not
//     // form a solid body.
//     Object.defineProperty(adsk.fusion.StitchFeatureInput.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== StitchFeatures ============
//     // Collection that provides access to all of the existing Stitch features in a component
//     // and supports the ability to create new Stitch features.
//     adsk.fusion.StitchFeatures = function StitchFeatures(handle) {
//         if (!(this instanceof adsk.fusion.StitchFeatures)) {
//             return adsk.fusion.StitchFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.StitchFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.StitchFeatures.prototype.constructor = adsk.fusion.StitchFeatures;
//     adsk.fusion.StitchFeatures.interfaceId = 'adsk.fusion.StitchFeatures';
//     adsk.objectTypes['adsk.fusion.StitchFeatures'] = adsk.fusion.StitchFeatures;
//     adsk.fusion.StitchFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.StitchFeatures ? object : null;
//     };

//     // The number of Stitch features in the collection.
//     Object.defineProperty(adsk.fusion.StitchFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified stitch feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.StitchFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeature) : null;
//     };

//     // Creates a StitchFeatureInput object. Use properties and methods on this object
//     // to define the stitch feature you want to create and then use the Add method, passing in
//     // the StitchFeatureInput object.
//     // stitchSurfaces : The surfaces (open BRepBodies) to stitch together.
//     // Stitching surfaces can form multiple closed volumes resulting in multiple solids.
//     // Stitch Surfaces can form multiple BRepShells (entirely connected set of entities) that would result in a
//     // single non-solid BRepBody.
//     // tolerance : ValueInput object that defines the stitching tolerance. It must define a distance value.
//     // operation : Specifies the operation type for the result when the final result is a closed solid. Otherwise
//     // this argument is ignored.
//     // Returns the newly created StitchFeatureInput object or null if the creation failed.
//     adsk.fusion.StitchFeatures.prototype.createInput = function (stitchSurfaces, tolerance, operation) {
//         if (stitchSurfaces !== null && !(stitchSurfaces instanceof adsk.core.ObjectCollection)) { throw new TypeError('stitchSurfaces must be a adsk.core.ObjectCollection'); }
//         if (tolerance !== null && !(tolerance instanceof adsk.core.ValueInput)) { throw new TypeError('tolerance must be a adsk.core.ValueInput'); }
//         if (operation === null || (operation !== undefined && !isFinite(operation))) { throw new TypeError('operation must be a number'); }
//         var args = {
//             stitchSurfaces : (stitchSurfaces === null ? stitchSurfaces : stitchSurfaces.handle),
//             tolerance : (tolerance === null ? tolerance : tolerance.handle)
//         };
//         if (operation !== undefined) {
//             args.operation = Number(operation);
//         }
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeatureInput) : null;
//     };

//     // Creates a new stitch feature.
//     // input : A StitchFeatureInput object that defines the desired stitch feature. Use the createInput
//     // method to create a new StitchFeatureInput object and then use methods on it
//     // (the StitchFeatureInput object) to define the stitch feature.
//     // Returns the newly created StitchFeature object or null if the creation failed.
//     adsk.fusion.StitchFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.StitchFeatureInput)) { throw new TypeError('input must be a adsk.fusion.StitchFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeature) : null;
//     };

//     // Function that returns the specified stitch feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.StitchFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeature) : null;
//     };

//     //=========== SurfaceContinuityTypes ============
//     // List of Surface Continuity Types.
//     adsk.fusion.SurfaceContinuityTypes = {
//         ConnectedSurfaceContinuityType : 0,
//         TangentSurfaceContinuityType : 1,
//         CurvatureSurfaceContinuityType : 2
//     };

//     //=========== SurfaceExtendTypes ============
//     // List of Surface Extend Types.
//     adsk.fusion.SurfaceExtendTypes = {
//         NaturalSurfaceExtendType : 0,
//         TangentSurfaceExtendType : 1,
//         PerpendicularSurfaceExtendType : 2
//     };

//     //=========== SweepFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a sweep
//     // feature.
//     adsk.fusion.SweepFeatureInput = function SweepFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.SweepFeatureInput)) {
//             return adsk.fusion.SweepFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SweepFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SweepFeatureInput.prototype.constructor = adsk.fusion.SweepFeatureInput;
//     adsk.fusion.SweepFeatureInput.interfaceId = 'adsk.fusion.SweepFeatureInput';
//     adsk.objectTypes['adsk.fusion.SweepFeatureInput'] = adsk.fusion.SweepFeatureInput;
//     adsk.fusion.SweepFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.SweepFeatureInput ? object : null;
//     };

//     // Gets and sets the profiles or planar faces used to define the shape of the sweep.
//     // This property can return or be set with a single Profile, a single planar face, or
//     // an ObjectCollection consisting of multiple profiles and planar faces. When an
//     // ObjectCollection is used all of the profiles and faces must be co-planar.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'profile', {
//         get : function () {
//             var result = this._execute('profile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('profile', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the type of operation performed by the sweep.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the path to create the sweep.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'path', {
//         get : function () {
//             var result = this._execute('path');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Path)) { throw new TypeError('value must be a adsk.fusion.Path'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('path', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the distance for the first side.
//     // The distance is a value from 0 to 1 indicating the position along the path where 0
//     // is at the start and 1 is at the end. The value is default to 1.0.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'distanceOne', {
//         get : function () {
//             var result = this._execute('distanceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distanceOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the distance for the second side.
//     // The distance is a value from 0 to 1 indicating the position along the path where 0
//     // is at the start and 1 is at the end. The value defaults to 0 in the case where the path is closed, otherwise it defaults to 1.0.
//     // It is ignored if the path is only on one side of the profile or if the sweep definition includes a guide rail.
//     // It's always the distance against the normal of the profile if available.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'distanceTwo', {
//         get : function () {
//             var result = this._execute('distanceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('distanceTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the sweep orientation. It defaults to PerpendicularOrientationType.
//     // This property is ignored when a guide rail has been specified.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'orientation', {
//         get : function () {
//             var result = this._execute('orientation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('orientation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // In order for geometry to be transformed correctly, an Occurrence for creation needs to be
//     // specified when the sweep is created based on geometry (e.g. a profile and/or face(s))
//     // in another component AND (the sweep) is not in the root component.
//     // The CreationOccurrence is analogous to the active occurrence in the UI
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'creationOccurrence', {
//         get : function () {
//             var result = this._execute('creationOccurrence');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('creationOccurrence', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies if the sweep should be created as a solid or surface. If
//     // it's a surface then there aren't any end caps and it's open. This is
//     // initialized to true so a solid will be created if it's not changed.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'isSolid', {
//         get : function () {
//             var result = this._execute('isSolid');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSolid', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the guide rail to create the sweep. This can be set to
//     // null to remove the guide rail definition and have a single path sweep feature.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'guideRail', {
//         get : function () {
//             var result = this._execute('guideRail');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Path)) { throw new TypeError('value must be a adsk.fusion.Path'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('guideRail', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the direction of the sweep is flipped.
//     // This property only applies to sweep features that include a guide rail and whose path runs on both
//     // sides of the profile.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'isDirectionFlipped', {
//         get : function () {
//             var result = this._execute('isDirectionFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDirectionFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the sweep profile scaling option. It defaults to SweepProfileScaleOption.
//     // This property is only used when a guide rail has been specified.
//     Object.defineProperty(adsk.fusion.SweepFeatureInput.prototype, 'profileScaling', {
//         get : function () {
//             var result = this._execute('profileScaling');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('profileScaling', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== SweepFeatures ============
//     // Collection that provides access to all of the existing sweep features in a component
//     // and supports the ability to create new sweep features.
//     adsk.fusion.SweepFeatures = function SweepFeatures(handle) {
//         if (!(this instanceof adsk.fusion.SweepFeatures)) {
//             return adsk.fusion.SweepFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.SweepFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.SweepFeatures.prototype.constructor = adsk.fusion.SweepFeatures;
//     adsk.fusion.SweepFeatures.interfaceId = 'adsk.fusion.SweepFeatures';
//     adsk.objectTypes['adsk.fusion.SweepFeatures'] = adsk.fusion.SweepFeatures;
//     adsk.fusion.SweepFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.SweepFeatures ? object : null;
//     };

//     // The number of sweep features in the collection.
//     Object.defineProperty(adsk.fusion.SweepFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified sweep feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.SweepFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeature) : null;
//     };

//     // Creates a SweepFeatureInput object for defining a simple sweep feature with only a path and no guide rail.
//     // Use properties and methods on this object to define the sweep you want to create and then use the Add method,
//     // passing in the SweepFeatureInput object.
//     // profile : The profile argument can be a single Profile, a single
//     // planar face, or an ObjectCollection consisting of multiple profiles and planar faces.
//     // When an ObjectCollection is used all of the profiles and faces must be co-planar.
//     // path : The path to create the sweep
//     // operation : The feature operation to perform
//     // Returns the newly created SweepFeatureInput object or null if the creation failed.
//     adsk.fusion.SweepFeatures.prototype.createInput = function (profile, path, operation) {
//         if (profile !== null && !(profile instanceof adsk.core.Base)) { throw new TypeError('profile must be a adsk.core.Base'); }
//         if (path !== null && !(path instanceof adsk.fusion.Path)) { throw new TypeError('path must be a adsk.fusion.Path'); }
//         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
//         var args = {
//             profile : (profile === null ? profile : profile.handle),
//             path : (path === null ? path : path.handle),
//             operation : Number(operation)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeatureInput) : null;
//     };

//     // Creates a new sweep feature.
//     // input : A SweepFeatureInput object that defines the desired sweep. Use the createInput
//     // method to create a new SweepFeatureInput object and then use methods on it
//     // (the SweepFeatureInput object) to define the sweep.
//     // Returns the newly created SweepFeature object or null if the creation failed.
//     adsk.fusion.SweepFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.SweepFeatureInput)) { throw new TypeError('input must be a adsk.fusion.SweepFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeature) : null;
//     };

//     // Function that returns the specified sweep feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.SweepFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeature) : null;
//     };

//     //=========== SweepOrientationTypes ============
//     // List of the types of sweep orientation.
//     adsk.fusion.SweepOrientationTypes = {
//         ParallelOrientationType : 0,
//         PerpendicularOrientationType : 1
//     };

//     //=========== SweepProfileScalingOptions ============
//     // List of the sweep profile scaling options.
//     adsk.fusion.SweepProfileScalingOptions = {
//         SweepProfileScaleOption : 0,
//         SweepProfileStretchOption : 1,
//         SweepProfileNoScalingOption : 2
//     };

//     //=========== ThickenFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a Thicken feature.
//     adsk.fusion.ThickenFeatureInput = function ThickenFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ThickenFeatureInput)) {
//             return adsk.fusion.ThickenFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ThickenFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ThickenFeatureInput.prototype.constructor = adsk.fusion.ThickenFeatureInput;
//     adsk.fusion.ThickenFeatureInput.interfaceId = 'adsk.fusion.ThickenFeatureInput';
//     adsk.objectTypes['adsk.fusion.ThickenFeatureInput'] = adsk.fusion.ThickenFeatureInput;
//     adsk.fusion.ThickenFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ThickenFeatureInput ? object : null;
//     };

//     // An ObjectCollection containing the face and/or patch bodies to thicken.
//     Object.defineProperty(adsk.fusion.ThickenFeatureInput.prototype, 'inputFaces', {
//         get : function () {
//             var result = this._execute('inputFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the ValueInput object that defines the thickness distance.
//     Object.defineProperty(adsk.fusion.ThickenFeatureInput.prototype, 'thickness', {
//         get : function () {
//             var result = this._execute('thickness');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('thickness', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether to add thickness symetrically or only on one side of the face/s to thicken
//     Object.defineProperty(adsk.fusion.ThickenFeatureInput.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the feature operation to perform.
//     Object.defineProperty(adsk.fusion.ThickenFeatureInput.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Get and sets whether faces that are tangentially connected to the input faces will be included in the thicken feature.
//     Object.defineProperty(adsk.fusion.ThickenFeatureInput.prototype, 'isChainSelection', {
//         get : function () {
//             var result = this._execute('isChainSelection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isChainSelection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ThickenFeatures ============
//     // Collection that provides access to all of the existing Thicken features in a component
//     // and supports the ability to create new Thicken features.
//     adsk.fusion.ThickenFeatures = function ThickenFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ThickenFeatures)) {
//             return adsk.fusion.ThickenFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ThickenFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ThickenFeatures.prototype.constructor = adsk.fusion.ThickenFeatures;
//     adsk.fusion.ThickenFeatures.interfaceId = 'adsk.fusion.ThickenFeatures';
//     adsk.objectTypes['adsk.fusion.ThickenFeatures'] = adsk.fusion.ThickenFeatures;
//     adsk.fusion.ThickenFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ThickenFeatures ? object : null;
//     };

//     // The number of Thicken features in the collection.
//     Object.defineProperty(adsk.fusion.ThickenFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified Thicken feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ThickenFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeature) : null;
//     };

//     // Creates a ThickenFeatureInput object. Use properties and methods on this object
//     // to define the Thicken feature you want to create and then use the Add method, passing in
//     // the ThickenFeatureInput object to create the feature.
//     // inputFaces : The faces or patch bodies to thicken. Faces need not be from the same component or body, nor do they need to be
//     // connected or touching one another.
//     // thickness : ValueInput object that defines the thickness.
//     // isSymmetric : A boolean value for setting whether to add thickness symetrically or only on one side of the face/s to thicken
//     // operation : The feature operation to perform.
//     // isChainSelection : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will be included in the thicken. The default value is true.
//     // Returns the newly created ThickenFeatureInput object or null if the creation failed.
//     adsk.fusion.ThickenFeatures.prototype.createInput = function (inputFaces, thickness, isSymmetric, operation, isChainSelection) {
//         if (inputFaces !== null && !(inputFaces instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputFaces must be a adsk.core.ObjectCollection'); }
//         if (thickness !== null && !(thickness instanceof adsk.core.ValueInput)) { throw new TypeError('thickness must be a adsk.core.ValueInput'); }
//         if (typeof isSymmetric !== 'boolean') { throw new TypeError('isSymmetric must be a boolean'); }
//         if (!isFinite(operation)) { throw new TypeError('operation must be a number'); }
//         if (isChainSelection === null || (isChainSelection !== undefined && typeof isChainSelection !== 'boolean')) { throw new TypeError('isChainSelection must be a boolean'); }
//         var args = {
//             inputFaces : (inputFaces === null ? inputFaces : inputFaces.handle),
//             thickness : (thickness === null ? thickness : thickness.handle),
//             isSymmetric : isSymmetric,
//             operation : Number(operation)
//         };
//         if (isChainSelection !== undefined) {
//             args.isChainSelection = isChainSelection;
//         }
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeatureInput) : null;
//     };

//     // Creates a new Thicken feature.
//     // input : A FeatureInput object that defines the desired Thicken feature. Use the createInput
//     // method to create a new ThickenFeatureInput object and then use methods on it
//     // (the ThickenFeatureInput object) to define the Thicken feature.
//     // Returns the newly created ThickenFeature object or null if the creation failed.
//     adsk.fusion.ThickenFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ThickenFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ThickenFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeature) : null;
//     };

//     // Function that returns the specified thicken feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ThickenFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeature) : null;
//     };

//     //=========== ThreadDataQuery ============
//     // This object provides methods to query the thread data contained in the XML files under ThreadData folder.
//     adsk.fusion.ThreadDataQuery = function ThreadDataQuery(handle) {
//         if (!(this instanceof adsk.fusion.ThreadDataQuery)) {
//             return adsk.fusion.ThreadDataQuery.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ThreadDataQuery.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ThreadDataQuery.prototype.constructor = adsk.fusion.ThreadDataQuery;
//     adsk.fusion.ThreadDataQuery.interfaceId = 'adsk.fusion.ThreadDataQuery';
//     adsk.objectTypes['adsk.fusion.ThreadDataQuery'] = adsk.fusion.ThreadDataQuery;
//     adsk.fusion.ThreadDataQuery.cast = function (object) {
//         return object instanceof adsk.fusion.ThreadDataQuery ? object : null;
//     };

//     // Gets all the available thread types (families).
//     Object.defineProperty(adsk.fusion.ThreadDataQuery.prototype, 'allThreadTypes', {
//         get : function () {
//             var result = this._execute('allThreadTypes');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the default inch thread type.
//     Object.defineProperty(adsk.fusion.ThreadDataQuery.prototype, 'defaultInchThreadType', {
//         get : function () {
//             var result = this._execute('defaultInchThreadType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the default metric thread type.
//     Object.defineProperty(adsk.fusion.ThreadDataQuery.prototype, 'defaultMetricThreadType', {
//         get : function () {
//             var result = this._execute('defaultMetricThreadType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Method that returns all the available thread sizes for a given thread type.
//     // threadType : Specify the thread type.
//     // Returns the specified thread sizes or empty array if an invalid thread type was specified.
//     adsk.fusion.ThreadDataQuery.prototype.allSizes = function (threadType) {
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         var args = {
//             threadType : threadType
//         };
//         var result = this._execute('allSizes', args);
//         return result ? result.value : undefined;
//     };

//     // Method that returns all the available thread designations for a thread type of a given size.
//     // threadType : Specify the thread type.
//     // size : Specify the thread size.
//     // Returns the specified thread designations or empty array if an invalid thread type or size was specified.
//     adsk.fusion.ThreadDataQuery.prototype.allDesignations = function (threadType, size) {
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         if (size === undefined || size === null || size.constructor !== String) { throw new TypeError('size must be a string'); }
//         var args = {
//             threadType : threadType,
//             size : size
//         };
//         var result = this._execute('allDesignations', args);
//         return result ? result.value : undefined;
//     };

//     // Method that returns all the available classes for a thread type of a given thread designation.
//     // isInternal : Indicates if the thread is an internal or external thread.
//     // threadType : Specify the thread type.
//     // designation : Specify the thread designation.
//     // Returns the specified thread classes or empty array if an invalid thread type or designation was specified.
//     adsk.fusion.ThreadDataQuery.prototype.allClasses = function (isInternal, threadType, designation) {
//         if (typeof isInternal !== 'boolean') { throw new TypeError('isInternal must be a boolean'); }
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         if (designation === undefined || designation === null || designation.constructor !== String) { throw new TypeError('designation must be a string'); }
//         var args = {
//             isInternal : isInternal,
//             threadType : threadType,
//             designation : designation
//         };
//         var result = this._execute('allClasses', args);
//         return result ? result.value : undefined;
//     };

//     // Method that returns the custom name for a given thread type.
//     // threadType : Thread type identifier string.
//     // Returns the specified custom name or empty string if an invalid thread type was specified.
//     adsk.fusion.ThreadDataQuery.prototype.threadTypeCustomName = function (threadType) {
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         var args = {
//             threadType : threadType
//         };
//         var result = this._execute('threadTypeCustomName', args);
//         return result ? result.value : undefined;
//     };

//     // Method that returns the unit for a given thread type.
//     // threadType : Specify the thread type.
//     // Returns the specified unit or empty string if an invalid thread type was specified.
//     adsk.fusion.ThreadDataQuery.prototype.threadTypeUnit = function (threadType) {
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         var args = {
//             threadType : threadType
//         };
//         var result = this._execute('threadTypeUnit', args);
//         return result ? result.value : undefined;
//     };

//     // Method that gets the recommended thread data for a given model diameter.
//     // modelDiameter : The model diameter. The unit is centimeter.
//     // isInternal : Indicates if the thread is an internal or external thread.
//     // threadType : Specifies the thread type to query the thread data.
//     // designation : The output thread designation.
//     // threadClass : The output thread class.
//     // Returns true if successful.
//     adsk.fusion.ThreadDataQuery.prototype.recommendThreadData = function (modelDiameter, isInternal, threadType, designation, threadClass) {
//         if (!isFinite(modelDiameter)) { throw new TypeError('modelDiameter must be a number'); }
//         if (typeof isInternal !== 'boolean') { throw new TypeError('isInternal must be a boolean'); }
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         if (typeof designation !== 'object') { throw new TypeError('designation must be an object'); }
//         if (typeof threadClass !== 'object') { throw new TypeError('threadClass must be an object'); }
//         var args = {
//             modelDiameter : Number(modelDiameter),
//             isInternal : isInternal,
//             threadType : threadType,
//             designation : null,
//             threadClass : null
//         };
//         var result = this._execute('recommendThreadData', args);
//         if (result && result.outargs) {
//             designation.value = (result.outargs.designation !== undefined) ? result.outargs.designation : undefined;
//             threadClass.value = (result.outargs.threadClass !== undefined) ? result.outargs.threadClass : undefined;
//         }
//         return result ? result.value : undefined;
//     };

//     //=========== ThreadFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a thread
//     // feature.
//     adsk.fusion.ThreadFeatureInput = function ThreadFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.ThreadFeatureInput)) {
//             return adsk.fusion.ThreadFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ThreadFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ThreadFeatureInput.prototype.constructor = adsk.fusion.ThreadFeatureInput;
//     adsk.fusion.ThreadFeatureInput.interfaceId = 'adsk.fusion.ThreadFeatureInput';
//     adsk.objectTypes['adsk.fusion.ThreadFeatureInput'] = adsk.fusion.ThreadFeatureInput;
//     adsk.fusion.ThreadFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.ThreadFeatureInput ? object : null;
//     };

//     // Gets and sets the threaded face. In the case where there are multiple faces, only the first one is returned.
//     // Setting this results in a thread being applied to only a single face.
//     // It is recommended that you use the inputCylindricalfaces property in order to have full access to the collection of faces
//     // to be threaded.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'inputCylindricalFace', {
//         get : function () {
//             var result = this._execute('inputCylindricalFace');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.BRepFace)) { throw new TypeError('value must be a adsk.fusion.BRepFace'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputCylindricalFace', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the thread is physical or cosmetic thread. A value of true indicates a physical thread.
//     // It defaults to false.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'isModeled', {
//         get : function () {
//             var result = this._execute('isModeled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isModeled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if this thread is the full length of the cylinder.
//     // It defaults to true.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'isFullLength', {
//         get : function () {
//             var result = this._execute('isFullLength');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFullLength', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the thread length.
//     // It is only used in the case where the isFullLength property is false.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'threadLength', {
//         get : function () {
//             var result = this._execute('threadLength');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadLength', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the thread offset.
//     // The offset is the distance along the axis of the cylinder from the edge to the start of the thread.
//     // It is only used in the case where the isFullLength property is false.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'threadOffset', {
//         get : function () {
//             var result = this._execute('threadOffset');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadOffset', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets where the thread length is measured from.
//     // This property is only used in the case where the isFullLength property is false.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'threadLocation', {
//         get : function () {
//             var result = this._execute('threadLocation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('threadLocation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the thread data.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'threadInfo', {
//         get : function () {
//             var result = this._execute('threadInfo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadInfo) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.ThreadInfo)) { throw new TypeError('value must be a adsk.fusion.ThreadInfo'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadInfo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the thread is right or left-handed thread. A value of true indicates a right-handed thread.
//     // It defaults to true.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'isRightHanded', {
//         get : function () {
//             var result = this._execute('isRightHanded');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isRightHanded', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the cylindrical input faces.
//     Object.defineProperty(adsk.fusion.ThreadFeatureInput.prototype, 'inputCylindricalFaces', {
//         get : function () {
//             var result = this._execute('inputCylindricalFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputCylindricalFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ThreadFeatures ============
//     // Collection that provides access to all of the existing thread features in a component
//     // and supports the ability to create new thread features.
//     adsk.fusion.ThreadFeatures = function ThreadFeatures(handle) {
//         if (!(this instanceof adsk.fusion.ThreadFeatures)) {
//             return adsk.fusion.ThreadFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ThreadFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ThreadFeatures.prototype.constructor = adsk.fusion.ThreadFeatures;
//     adsk.fusion.ThreadFeatures.interfaceId = 'adsk.fusion.ThreadFeatures';
//     adsk.objectTypes['adsk.fusion.ThreadFeatures'] = adsk.fusion.ThreadFeatures;
//     adsk.fusion.ThreadFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.ThreadFeatures ? object : null;
//     };

//     // The number of thread features in the collection.
//     Object.defineProperty(adsk.fusion.ThreadFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Property that returns the ThreadDataQuery object.
//     // This object has methods to query the thread data contained in the XML files under ThreadData folder.
//     // It's a singleton object.
//     Object.defineProperty(adsk.fusion.ThreadFeatures.prototype, 'threadDataQuery', {
//         get : function () {
//             var result = this._execute('threadDataQuery');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadDataQuery) : null;
//         }
//     });

//     // Function that returns the specified thread feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ThreadFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeature) : null;
//     };

//     // Creates a ThreadFeatureInput object. Use properties and methods on this object
//     // to define the thread you want to create and then use the Add method, passing in
//     // the ThreadFeatureInput object.
//     // inputCylindricalFaces : A single cylindrical BRep face or a collection of cylindrical BRep faces to thread.
//     // A collection of faces must all be from either holes (for internal threading) or all from cylinders (for external threading).
//     // Both internal and external threads cannot be created in the same feature.
//     // The faces in a collection can come from different bodies or components.
//     // threadInfo : The thread data to create the thread.
//     // Returns the newly created ThreadFeatureInput object or null if the creation failed.
//     adsk.fusion.ThreadFeatures.prototype.createInput = function (inputCylindricalFaces, threadInfo) {
//         if (inputCylindricalFaces !== null && !(inputCylindricalFaces instanceof adsk.core.Base)) { throw new TypeError('inputCylindricalFaces must be a adsk.core.Base'); }
//         if (threadInfo !== null && !(threadInfo instanceof adsk.fusion.ThreadInfo)) { throw new TypeError('threadInfo must be a adsk.fusion.ThreadInfo'); }
//         var args = {
//             inputCylindricalFaces : (inputCylindricalFaces === null ? inputCylindricalFaces : inputCylindricalFaces.handle),
//             threadInfo : (threadInfo === null ? threadInfo : threadInfo.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeatureInput) : null;
//     };

//     // Method that creates a new ThreadInfo object that can be used in creating thread features.
//     // isInternal : Input Boolean that indicates if the thread is an internal or external thread. A value of true indicates an internal thread.
//     // threadType : Input string that defines the thread type.
//     // threadDesignation : Input string that contains the thread designation.
//     // This is input as the full thread designation that will be used in a drawing for the thread callout.
//     // The nominal size and pitch information are extracted from the designation.
//     // threadClass : Input string that defines the thread class.
//     // Returns the newly created ThreadInfo object or null if the creation failed.
//     adsk.fusion.ThreadFeatures.prototype.createThreadInfo = function (isInternal, threadType, threadDesignation, threadClass) {
//         if (typeof isInternal !== 'boolean') { throw new TypeError('isInternal must be a boolean'); }
//         if (threadType === undefined || threadType === null || threadType.constructor !== String) { throw new TypeError('threadType must be a string'); }
//         if (threadDesignation === undefined || threadDesignation === null || threadDesignation.constructor !== String) { throw new TypeError('threadDesignation must be a string'); }
//         if (threadClass === undefined || threadClass === null || threadClass.constructor !== String) { throw new TypeError('threadClass must be a string'); }
//         var args = {
//             isInternal : isInternal,
//             threadType : threadType,
//             threadDesignation : threadDesignation,
//             threadClass : threadClass
//         };
//         var result = this._execute('createThreadInfo', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadInfo) : null;
//     };

//     // Creates a new thread feature.
//     // input : A ThreadFeatureInput object that defines the desired thread. Use the createInput
//     // method to create a new ThreadFeatureInput object and then use methods on it
//     // (the ThreadFeatureInput object) to define the thread.
//     // Returns the newly created ThreadFeature object or null if the creation failed.
//     adsk.fusion.ThreadFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.ThreadFeatureInput)) { throw new TypeError('input must be a adsk.fusion.ThreadFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeature) : null;
//     };

//     // Function that returns the specified thread feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.ThreadFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeature) : null;
//     };

//     //=========== ThreadInfo ============
//     // This class defines the methods and properties that pertain to the thread data of a thread feature.
//     // If the ThreadInfo object is returned from a thread feature, setting this ThreadInfo will cause the thread feature to be edited.
//     adsk.fusion.ThreadInfo = function ThreadInfo(handle) {
//         if (!(this instanceof adsk.fusion.ThreadInfo)) {
//             return adsk.fusion.ThreadInfo.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ThreadInfo.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ThreadInfo.prototype.constructor = adsk.fusion.ThreadInfo;
//     adsk.fusion.ThreadInfo.interfaceId = 'adsk.fusion.ThreadInfo';
//     adsk.objectTypes['adsk.fusion.ThreadInfo'] = adsk.fusion.ThreadInfo;
//     adsk.fusion.ThreadInfo.cast = function (object) {
//         return object instanceof adsk.fusion.ThreadInfo ? object : null;
//     };

//     // Gets and sets the string that defines the thread type.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'threadType', {
//         get : function () {
//             var result = this._execute('threadType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the string that defines the thread size.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'threadSize', {
//         get : function () {
//             var result = this._execute('threadSize');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the string that defines the thread designation.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'threadDesignation', {
//         get : function () {
//             var result = this._execute('threadDesignation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadDesignation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the string that defines the thread class.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'threadClass', {
//         get : function () {
//             var result = this._execute('threadClass');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadClass', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the thread is an internal or external thread. A value of true indicates an internal thread.
//     // It defaults to true.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'isInternal', {
//         get : function () {
//             var result = this._execute('isInternal');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isInternal', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the value that defines the thread angle.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'threadAngle', {
//         get : function () {
//             var result = this._execute('threadAngle');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the value that defines the thread pitch.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'threadPitch', {
//         get : function () {
//             var result = this._execute('threadPitch');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the value that defines the major diameter.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'majorDiameter', {
//         get : function () {
//             var result = this._execute('majorDiameter');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the value that defines the minor diameter.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'minorDiameter', {
//         get : function () {
//             var result = this._execute('minorDiameter');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the value that defines the pitch diameter.
//     Object.defineProperty(adsk.fusion.ThreadInfo.prototype, 'pitchDiameter', {
//         get : function () {
//             var result = this._execute('pitchDiameter');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ThreadLocations ============
//     // List of the types of thread location.
//     adsk.fusion.ThreadLocations = {
//         HighEndThreadLocation : 0,
//         LowEndThreadLocation : 1
//     };

//     //=========== TorusFeatures ============
//     // Collection that provides access to all of the existing torus features in a design.
//     adsk.fusion.TorusFeatures = function TorusFeatures(handle) {
//         if (!(this instanceof adsk.fusion.TorusFeatures)) {
//             return adsk.fusion.TorusFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TorusFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TorusFeatures.prototype.constructor = adsk.fusion.TorusFeatures;
//     adsk.fusion.TorusFeatures.interfaceId = 'adsk.fusion.TorusFeatures';
//     adsk.objectTypes['adsk.fusion.TorusFeatures'] = adsk.fusion.TorusFeatures;
//     adsk.fusion.TorusFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.TorusFeatures ? object : null;
//     };

//     // The number of torus features in the collection.
//     Object.defineProperty(adsk.fusion.TorusFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified torus feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.TorusFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TorusFeature) : null;
//     };

//     // Function that returns the specified torus feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.TorusFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TorusFeature) : null;
//     };

//     //=========== TrimFeatureInput ============
//     // This class defines the methods and properties that pertain to the definition of a TrimFeatureInput.
//     adsk.fusion.TrimFeatureInput = function TrimFeatureInput(handle) {
//         if (!(this instanceof adsk.fusion.TrimFeatureInput)) {
//             return adsk.fusion.TrimFeatureInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TrimFeatureInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TrimFeatureInput.prototype.constructor = adsk.fusion.TrimFeatureInput;
//     adsk.fusion.TrimFeatureInput.interfaceId = 'adsk.fusion.TrimFeatureInput';
//     adsk.objectTypes['adsk.fusion.TrimFeatureInput'] = adsk.fusion.TrimFeatureInput;
//     adsk.fusion.TrimFeatureInput.cast = function (object) {
//         return object instanceof adsk.fusion.TrimFeatureInput ? object : null;
//     };

//     // Returns the collection of the valid cells that have been calculated based on the trim tool.
//     // Use this collection to specify which cells to trim away.
//     Object.defineProperty(adsk.fusion.TrimFeatureInput.prototype, 'bRepCells', {
//         get : function () {
//             var result = this._execute('bRepCells');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCells) : null;
//         }
//     });

//     // Gets and sets the entity (a patch body, B-Rep face, construction plane or sketch curve) that intersects the trim tool
//     Object.defineProperty(adsk.fusion.TrimFeatureInput.prototype, 'trimTool', {
//         get : function () {
//             var result = this._execute('trimTool');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('trimTool', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== TrimFeatures ============
//     // Collection that provides access to all of the existing trim features in a component
//     // and supports the ability to create new trim features.
//     adsk.fusion.TrimFeatures = function TrimFeatures(handle) {
//         if (!(this instanceof adsk.fusion.TrimFeatures)) {
//             return adsk.fusion.TrimFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TrimFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TrimFeatures.prototype.constructor = adsk.fusion.TrimFeatures;
//     adsk.fusion.TrimFeatures.interfaceId = 'adsk.fusion.TrimFeatures';
//     adsk.objectTypes['adsk.fusion.TrimFeatures'] = adsk.fusion.TrimFeatures;
//     adsk.fusion.TrimFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.TrimFeatures ? object : null;
//     };

//     // The number of trim features in the collection.
//     Object.defineProperty(adsk.fusion.TrimFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified trim feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.TrimFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeature) : null;
//     };

//     // Creates a TrimFeatureInput object. Use properties and methods on this object
//     // to define the trim feature you want to create and then use the Add method, passing in
//     // the TrimFeatureInput object.
//     // trimTool : A patch body, B-Rep face, construction plane or sketch curve that intersects the surface or surfaces to be trimmed
//     // Returns the newly created TrimFeatureInput object or null if the creation failed.
//     adsk.fusion.TrimFeatures.prototype.createInput = function (trimTool) {
//         if (trimTool !== null && !(trimTool instanceof adsk.core.Base)) { throw new TypeError('trimTool must be a adsk.core.Base'); }
//         var args = {
//             trimTool : (trimTool === null ? trimTool : trimTool.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeatureInput) : null;
//     };

//     // Creates a new trim feature.
//     // input : A TrimFeatureInput object that defines the desired trim feature. Use the createInput
//     // method to create a new TrimFeatureInput object and then use methods on it
//     // (the TrimFeatureInput object) to define the trim feature.
//     // Returns the newly created TrimFeature object or null if the creation failed.
//     adsk.fusion.TrimFeatures.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.TrimFeatureInput)) { throw new TypeError('input must be a adsk.fusion.TrimFeatureInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeature) : null;
//     };

//     // Function that returns the specified trim feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.TrimFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeature) : null;
//     };

//     //=========== UnstitchFeatures ============
//     // Collection that provides access to all of the existing Unstitch features in a component
//     // and supports the ability to create new Unstitch features.
//     adsk.fusion.UnstitchFeatures = function UnstitchFeatures(handle) {
//         if (!(this instanceof adsk.fusion.UnstitchFeatures)) {
//             return adsk.fusion.UnstitchFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.UnstitchFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.UnstitchFeatures.prototype.constructor = adsk.fusion.UnstitchFeatures;
//     adsk.fusion.UnstitchFeatures.interfaceId = 'adsk.fusion.UnstitchFeatures';
//     adsk.objectTypes['adsk.fusion.UnstitchFeatures'] = adsk.fusion.UnstitchFeatures;
//     adsk.fusion.UnstitchFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.UnstitchFeatures ? object : null;
//     };

//     // The number of Unstitch features in the collection.
//     Object.defineProperty(adsk.fusion.UnstitchFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified Unstitch feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.UnstitchFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UnstitchFeature) : null;
//     };

//     // Creates a new Unstitch feature.
//     // faces : The faces and/or bodies to Unstitch. Individual faces can be unstitched from solid and/or patch bodies. The faces being unstitched
//     // need not all come from the same body.
//     // isChainSelection : A boolean value for setting whether or not faces that are connected and adjacent to
//     // the input faces will be included in the selection. The default value is true.
//     // Returns the newly created UnstitchFeature object or null if the creation failed.
//     adsk.fusion.UnstitchFeatures.prototype.add = function (faces, isChainSelection) {
//         if (faces !== null && !(faces instanceof adsk.core.ObjectCollection)) { throw new TypeError('faces must be a adsk.core.ObjectCollection'); }
//         if (isChainSelection === null || (isChainSelection !== undefined && typeof isChainSelection !== 'boolean')) { throw new TypeError('isChainSelection must be a boolean'); }
//         var args = {
//             faces : (faces === null ? faces : faces.handle)
//         };
//         if (isChainSelection !== undefined) {
//             args.isChainSelection = isChainSelection;
//         }
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UnstitchFeature) : null;
//     };

//     // Function that returns the specified unstitch feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.UnstitchFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UnstitchFeature) : null;
//     };

//     //=========== WebFeatures ============
//     // Collection that provides access to all of the existing web features in a design.
//     adsk.fusion.WebFeatures = function WebFeatures(handle) {
//         if (!(this instanceof adsk.fusion.WebFeatures)) {
//             return adsk.fusion.WebFeatures.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.WebFeatures.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.WebFeatures.prototype.constructor = adsk.fusion.WebFeatures;
//     adsk.fusion.WebFeatures.interfaceId = 'adsk.fusion.WebFeatures';
//     adsk.objectTypes['adsk.fusion.WebFeatures'] = adsk.fusion.WebFeatures;
//     adsk.fusion.WebFeatures.cast = function (object) {
//         return object instanceof adsk.fusion.WebFeatures ? object : null;
//     };

//     // The number of web features in the collection.
//     Object.defineProperty(adsk.fusion.WebFeatures.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified web feature using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.WebFeatures.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.WebFeature) : null;
//     };

//     // Function that returns the specified web feature using the name of the feature.
//     // name : The name of the feature within the collection to return. This is the name seen in the timeline.
//     // Returns the specified item or null if the specified name was not found.
//     adsk.fusion.WebFeatures.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.WebFeature) : null;
//     };

//     //=========== AllExtentDefinition ============
//     // Defines the inputs for a AllExtentDefinition object.
//     // This defines a feature extent where the direction can be positive, negative, or symmetric.
//     // Setting the direction to Symmetric specifies that the extrusion is through-all,
//     // and goes in both directions.
//     adsk.fusion.AllExtentDefinition = function AllExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.AllExtentDefinition)) {
//             return adsk.fusion.AllExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.AllExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.AllExtentDefinition.prototype.constructor = adsk.fusion.AllExtentDefinition;
//     adsk.fusion.AllExtentDefinition.interfaceId = 'adsk.fusion.AllExtentDefinition';
//     adsk.objectTypes['adsk.fusion.AllExtentDefinition'] = adsk.fusion.AllExtentDefinition;
//     adsk.fusion.AllExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.AllExtentDefinition ? object : null;
//     };

//     // Gets and sets the direction of the extent.
//     Object.defineProperty(adsk.fusion.AllExtentDefinition.prototype, 'direction', {
//         get : function () {
//             var result = this._execute('direction');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('direction', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== AngleExtentDefinition ============
//     // Defines the inputs for a AngleExtentDefinition object.
//     // This feature extent is defined by an angle as well as whether the extent is symmetric or only in one direction.
//     // If the extent is not symmetric, a positive or negative angle can be used to control the direction.
//     adsk.fusion.AngleExtentDefinition = function AngleExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.AngleExtentDefinition)) {
//             return adsk.fusion.AngleExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.AngleExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.AngleExtentDefinition.prototype.constructor = adsk.fusion.AngleExtentDefinition;
//     adsk.fusion.AngleExtentDefinition.interfaceId = 'adsk.fusion.AngleExtentDefinition';
//     adsk.objectTypes['adsk.fusion.AngleExtentDefinition'] = adsk.fusion.AngleExtentDefinition;
//     adsk.fusion.AngleExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.AngleExtentDefinition ? object : null;
//     };

//     // Gets and sets if the angle extent is in one direction or symmetric.
//     // For a hole this property will always return false and setting it is ignored.
//     Object.defineProperty(adsk.fusion.AngleExtentDefinition.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the ModelParameter that defines the angle
//     Object.defineProperty(adsk.fusion.AngleExtentDefinition.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== AtCenterHolePositionDefinition ============
//     // Provides positioning information for a hole that is positioned at the center of a
//     // circular or elliptical edge.
//     adsk.fusion.AtCenterHolePositionDefinition = function AtCenterHolePositionDefinition(handle) {
//         if (!(this instanceof adsk.fusion.AtCenterHolePositionDefinition)) {
//             return adsk.fusion.AtCenterHolePositionDefinition.cast(handle);
//         }
//         adsk.fusion.HolePositionDefinition.call(this, handle);
//     };
//     adsk.fusion.AtCenterHolePositionDefinition.prototype = Object.create(adsk.fusion.HolePositionDefinition.prototype);
//     adsk.fusion.AtCenterHolePositionDefinition.prototype.constructor = adsk.fusion.AtCenterHolePositionDefinition;
//     adsk.fusion.AtCenterHolePositionDefinition.interfaceId = 'adsk.fusion.AtCenterHolePositionDefinition';
//     adsk.objectTypes['adsk.fusion.AtCenterHolePositionDefinition'] = adsk.fusion.AtCenterHolePositionDefinition;
//     adsk.fusion.AtCenterHolePositionDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.AtCenterHolePositionDefinition ? object : null;
//     };

//     // Returns the plane that defines the orientation and start of the hole.
//     Object.defineProperty(adsk.fusion.AtCenterHolePositionDefinition.prototype, 'planarEntity', {
//         get : function () {
//             var result = this._execute('planarEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the circular or elliptical edge the hole is centered at.
//     Object.defineProperty(adsk.fusion.AtCenterHolePositionDefinition.prototype, 'centerEdge', {
//         get : function () {
//             var result = this._execute('centerEdge');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
//         }
//     });

//     //=========== BaseFeature ============
//     // The BaseFeature class represents a direct edit feature within a parametric design.
//     adsk.fusion.BaseFeature = function BaseFeature(handle) {
//         if (!(this instanceof adsk.fusion.BaseFeature)) {
//             return adsk.fusion.BaseFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.BaseFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.BaseFeature.prototype.constructor = adsk.fusion.BaseFeature;
//     adsk.fusion.BaseFeature.interfaceId = 'adsk.fusion.BaseFeature';
//     adsk.objectTypes['adsk.fusion.BaseFeature'] = adsk.fusion.BaseFeature;
//     adsk.fusion.BaseFeature.cast = function (object) {
//         return object instanceof adsk.fusion.BaseFeature ? object : null;
//     };

//     //=========== BoundaryFillFeature ============
//     // Object that represents an existing boundary fill feature in a design.
//     adsk.fusion.BoundaryFillFeature = function BoundaryFillFeature(handle) {
//         if (!(this instanceof adsk.fusion.BoundaryFillFeature)) {
//             return adsk.fusion.BoundaryFillFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.BoundaryFillFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.BoundaryFillFeature.prototype.constructor = adsk.fusion.BoundaryFillFeature;
//     adsk.fusion.BoundaryFillFeature.interfaceId = 'adsk.fusion.BoundaryFillFeature';
//     adsk.objectTypes['adsk.fusion.BoundaryFillFeature'] = adsk.fusion.BoundaryFillFeature;
//     adsk.fusion.BoundaryFillFeature.cast = function (object) {
//         return object instanceof adsk.fusion.BoundaryFillFeature ? object : null;
//     };

//     // A collection of construction planes and open or closed BRepBody objects that define the
//     // set of boundaries that have been used in the calculation of available closed boundaries.
//     // Setting this property will clear all currently selected tools.
//     Object.defineProperty(adsk.fusion.BoundaryFillFeature.prototype, 'tools', {
//         get : function () {
//             var result = this._execute('tools');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('tools', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the set of closed boundaries that have been calculated based on the current set of
//     // tools. To get this collection the model must be in the state it was when the feature
//     // was initially computed, which means the timeline marker must be positioned to immediately
//     // before this feature.
//     // After changing any selected cells you must call the applyCellChanges method to update
//     // the feature with the changes.
//     Object.defineProperty(adsk.fusion.BoundaryFillFeature.prototype, 'bRepCells', {
//         get : function () {
//             var result = this._execute('bRepCells');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCells) : null;
//         }
//     });

//     // Gets and sets the type of operation performed by the boundary fill feature.
//     Object.defineProperty(adsk.fusion.BoundaryFillFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.BoundaryFillFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.BoundaryFillFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BoundaryFillFeature) : null;
//     };

//     // After making any changes to the set of selected cells you must call this method to
//     // indicate all changes have been made and to apply those changes to the feature.
//     // Returns true if the apply was successful.
//     adsk.fusion.BoundaryFillFeature.prototype.applyCellChanges = function () {
//         var result = this._execute('applyCellChanges');
//         return result ? result.value : undefined;
//     };

//     //=========== BoxFeature ============
//     // Object that represents an existing box feature in a design.
//     adsk.fusion.BoxFeature = function BoxFeature(handle) {
//         if (!(this instanceof adsk.fusion.BoxFeature)) {
//             return adsk.fusion.BoxFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.BoxFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.BoxFeature.prototype.constructor = adsk.fusion.BoxFeature;
//     adsk.fusion.BoxFeature.interfaceId = 'adsk.fusion.BoxFeature';
//     adsk.objectTypes['adsk.fusion.BoxFeature'] = adsk.fusion.BoxFeature;
//     adsk.fusion.BoxFeature.cast = function (object) {
//         return object instanceof adsk.fusion.BoxFeature ? object : null;
//     };

//     //=========== ChamferFeature ============
//     // Object that represents an existing chamfer feature in a design.
//     adsk.fusion.ChamferFeature = function ChamferFeature(handle) {
//         if (!(this instanceof adsk.fusion.ChamferFeature)) {
//             return adsk.fusion.ChamferFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ChamferFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ChamferFeature.prototype.constructor = adsk.fusion.ChamferFeature;
//     adsk.fusion.ChamferFeature.interfaceId = 'adsk.fusion.ChamferFeature';
//     adsk.objectTypes['adsk.fusion.ChamferFeature'] = adsk.fusion.ChamferFeature;
//     adsk.fusion.ChamferFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ChamferFeature ? object : null;
//     };

//     // Gets and sets the edges being chamfered. In order to access (get) the input edges
//     // of a chamfer, you must roll the timeline back to just before the chamfer feature
//     // whose edges you want to access. When setting the edges, if the IsTangentChain property is true then
//     // all edges that are tangent to the input edges will be include in the chamfer.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ChamferFeature.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('edges', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether or not edges that are tangentially connected to
//     // the input edges (if any) will also be chamfered.
//     Object.defineProperty(adsk.fusion.ChamferFeature.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isTangentChain', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets an enum indicating how the chamfer was defined. The valid return values are
//     // EqualDistanceType, TwoDistancesType and DistanceAndAngleType.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ChamferFeature.prototype, 'chamferType', {
//         get : function () {
//             var result = this._execute('chamferType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the definition object that is defining the type of chamfer. Modifying the
//     // definition object will cause the chamfer to recompute. Various types of definition objects can
//     // be returned depending on how the chamfer is defined. The ChamferType property can
//     // be used to determine which type of definition will be returned.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ChamferFeature.prototype, 'chamferTypeDefinition', {
//         get : function () {
//             var result = this._execute('chamferTypeDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferTypeDefinition) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ChamferFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeature) : null;
//         }
//     });

//     // Changes the type of chamfer to be an equal distance chamfer.
//     // distance : A ValueInput object that defines the distance of the chamfer. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "2 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // Returns true if the feature is successfully changed
//     adsk.fusion.ChamferFeature.prototype.setEqualDistance = function (distance) {
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         var args = {
//             distance : (distance === null ? distance : distance.handle)
//         };
//         var result = this._execute('setEqualDistance', args);
//         return result ? result.value : undefined;
//     };

//     // Changes the type of chamfer to be a two distances chamfer.
//     // distanceOne : A ValueInput object that defines the distanceOne of the chamfer. This distance
//     // is along the face which is on the left of the selected edge.
//     // If the ValueInput uses a real then it is interpreted as centimeters.
//     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
//     // If no units are specified it is interpreted using the current default units for length.
//     // distanceTwo : A ValueInput object that defines the distanceTwo of the chamfer. This distance
//     // is along the face which is on the right of the selected edge.
//     // If the ValueInput uses a real then it is interpreted as centimeters.
//     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
//     // If no units are specified it is interpreted using the current default units for length.
//     // Returns true if the feature is successfully changed
//     adsk.fusion.ChamferFeature.prototype.setTwoDistances = function (distanceOne, distanceTwo) {
//         if (distanceOne !== null && !(distanceOne instanceof adsk.core.ValueInput)) { throw new TypeError('distanceOne must be a adsk.core.ValueInput'); }
//         if (distanceTwo !== null && !(distanceTwo instanceof adsk.core.ValueInput)) { throw new TypeError('distanceTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             distanceOne : (distanceOne === null ? distanceOne : distanceOne.handle),
//             distanceTwo : (distanceTwo === null ? distanceTwo : distanceTwo.handle)
//         };
//         var result = this._execute('setTwoDistances', args);
//         return result ? result.value : undefined;
//     };

//     // Changes the type of chamfer to be a distance and angle chamfer.
//     // distance : A ValueInput object that defines the distance of the chamfer. This distance
//     // is along the face which is on the right of the selected edge.
//     // If the ValueInput uses a real then it is interpreted as centimeters.
//     // If it is a string then the units can be defined as part of the string (i.e. "2 in").
//     // If no units are specified it is interpreted using the current default units for length.
//     // angle : A valueInput object that defines the angle. The direction will be towards to the face
//     // which is on the left of the selected edge. This can be a string or a value.
//     // If it's a string it is interpreted using the current document units and can include
//     // equations. For example all of the following are valid as long as they result in
//     // angle units; "45", "45 deg", "a1 / 2". If a value is input it is interpreted
//     // as radians.
//     // It cannot be negative.
//     // Returns true if the feature is successfully changed
//     adsk.fusion.ChamferFeature.prototype.setDistanceAndAngle = function (distance, angle) {
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
//         var args = {
//             distance : (distance === null ? distance : distance.handle),
//             angle : (angle === null ? angle : angle.handle)
//         };
//         var result = this._execute('setDistanceAndAngle', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ChamferFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ChamferFeature) : null;
//     };

//     //=========== ChordLengthFilletEdgeSet ============
//     // Provides access to the edges and the parameter associated with a chord length fillet.
//     adsk.fusion.ChordLengthFilletEdgeSet = function ChordLengthFilletEdgeSet(handle) {
//         if (!(this instanceof adsk.fusion.ChordLengthFilletEdgeSet)) {
//             return adsk.fusion.ChordLengthFilletEdgeSet.cast(handle);
//         }
//         adsk.fusion.FilletEdgeSet.call(this, handle);
//     };
//     adsk.fusion.ChordLengthFilletEdgeSet.prototype = Object.create(adsk.fusion.FilletEdgeSet.prototype);
//     adsk.fusion.ChordLengthFilletEdgeSet.prototype.constructor = adsk.fusion.ChordLengthFilletEdgeSet;
//     adsk.fusion.ChordLengthFilletEdgeSet.interfaceId = 'adsk.fusion.ChordLengthFilletEdgeSet';
//     adsk.objectTypes['adsk.fusion.ChordLengthFilletEdgeSet'] = adsk.fusion.ChordLengthFilletEdgeSet;
//     adsk.fusion.ChordLengthFilletEdgeSet.cast = function (object) {
//         return object instanceof adsk.fusion.ChordLengthFilletEdgeSet ? object : null;
//     };

//     // Gets and sets the edges that will be filleted. In order to access (get) the input edges
//     // of a fillet, you must roll the timeline back to just before the fillet feature
//     // whose edges you want to access.
//     Object.defineProperty(adsk.fusion.ChordLengthFilletEdgeSet.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('edges', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the model parameter that controls the chord length of the fillet. You can edit
//     // the chord length by using the properties on the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.ChordLengthFilletEdgeSet.prototype, 'chordLength', {
//         get : function () {
//             var result = this._execute('chordLength');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== CircularPatternFeature ============
//     // Object that represents an existing circular pattern feature in a design.
//     adsk.fusion.CircularPatternFeature = function CircularPatternFeature(handle) {
//         if (!(this instanceof adsk.fusion.CircularPatternFeature)) {
//             return adsk.fusion.CircularPatternFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.CircularPatternFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.CircularPatternFeature.prototype.constructor = adsk.fusion.CircularPatternFeature;
//     adsk.fusion.CircularPatternFeature.interfaceId = 'adsk.fusion.CircularPatternFeature';
//     adsk.objectTypes['adsk.fusion.CircularPatternFeature'] = adsk.fusion.CircularPatternFeature;
//     adsk.fusion.CircularPatternFeature.cast = function (object) {
//         return object instanceof adsk.fusion.CircularPatternFeature ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the axis of circular pattern. This can be a sketch line, linear edge,
//     // construction axis, an edge/sketch curve that defines an axis (circle, etc.) or a face that defines an axis (cylinder, cone, torus, etc.).
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'axis', {
//         get : function () {
//             var result = this._execute('axis');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('axis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the total angle.
//     // To edit the angle use properties on the parameter to edit its value.
//     // This property returns null in the case where the feature is non-parametric.
//     // A negative value can be used to change the direction of the pattern.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'totalAngle', {
//         get : function () {
//             var result = this._execute('totalAngle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets if the angle extent is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the number of pattern elements, including any suppressed elements.
//     // To edit the quantity use properties on the parameter to edit its value.
//     // This property returns null in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'quantity', {
//         get : function () {
//             var result = this._execute('quantity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets the id's of the elements to suppress.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'suppressedElementsIds', {
//         get : function () {
//             var result = this._execute('suppressedElementsIds');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
//             var valueLength = value.length;
//             var valueIt;
//             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
//                 if (!isFinite(value[valueIt])) { throw new TypeError('value[valueIt] must be a number'); }
//             }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('suppressedElementsIds', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the PatternElements collection that contains the elements created by this pattern.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'patternElements', {
//         get : function () {
//             var result = this._execute('patternElements');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatternElements) : null;
//         }
//     });

//     // Returns the features that were created as a result of this pattern.
//     // This is only valid for a direct edit model and this returns null
//     // in the case where the feature is parametric.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'resultFeatures', {
//         get : function () {
//             var result = this._execute('resultFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeature) : null;
//         }
//     });

//     // Returns the type of entities the pattern consists of. This can be used to help
//     // determine the type of results that will be found in the pattern elements.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'patternEntityType', {
//         get : function () {
//             var result = this._execute('patternEntityType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the compute option for this pattern feature.
//     // This property only applies when patterning features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.CircularPatternFeature.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.CircularPatternFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CircularPatternFeature) : null;
//     };

//     //=========== CoilFeature ============
//     // Object that represents an existing coil primitive feature in a design.
//     adsk.fusion.CoilFeature = function CoilFeature(handle) {
//         if (!(this instanceof adsk.fusion.CoilFeature)) {
//             return adsk.fusion.CoilFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.CoilFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.CoilFeature.prototype.constructor = adsk.fusion.CoilFeature;
//     adsk.fusion.CoilFeature.interfaceId = 'adsk.fusion.CoilFeature';
//     adsk.objectTypes['adsk.fusion.CoilFeature'] = adsk.fusion.CoilFeature;
//     adsk.fusion.CoilFeature.cast = function (object) {
//         return object instanceof adsk.fusion.CoilFeature ? object : null;
//     };

//     //=========== CombineFeature ============
//     // Object that represents an existing Combine feature in a design.
//     // In non-parametric environment this object does not exist.
//     adsk.fusion.CombineFeature = function CombineFeature(handle) {
//         if (!(this instanceof adsk.fusion.CombineFeature)) {
//             return adsk.fusion.CombineFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.CombineFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.CombineFeature.prototype.constructor = adsk.fusion.CombineFeature;
//     adsk.fusion.CombineFeature.interfaceId = 'adsk.fusion.CombineFeature';
//     adsk.objectTypes['adsk.fusion.CombineFeature'] = adsk.fusion.CombineFeature;
//     adsk.fusion.CombineFeature.cast = function (object) {
//         return object instanceof adsk.fusion.CombineFeature ? object : null;
//     };

//     // Gets and sets the BRep Body object that represents the blank body.
//     Object.defineProperty(adsk.fusion.CombineFeature.prototype, 'targetBody', {
//         get : function () {
//             var result = this._execute('targetBody');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.BRepBody)) { throw new TypeError('value must be a adsk.fusion.BRepBody'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('targetBody', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the BRep Body objects that represent the tool bodies.
//     Object.defineProperty(adsk.fusion.CombineFeature.prototype, 'toolBodies', {
//         get : function () {
//             var result = this._execute('toolBodies');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('toolBodies', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the type of operation performed by the combine.
//     // The valid values are JoinFeatureOperation, CutFeatureOperation and IntersectFeatureOperation.
//     Object.defineProperty(adsk.fusion.CombineFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets a boolean value for whether or not a new component was created when this feature was created.
//     Object.defineProperty(adsk.fusion.CombineFeature.prototype, 'isNewComponent', {
//         get : function () {
//             var result = this._execute('isNewComponent');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets a boolean value for whether or not the tool bodies are retrained after the combine results.
//     Object.defineProperty(adsk.fusion.CombineFeature.prototype, 'isKeepToolBodies', {
//         get : function () {
//             var result = this._execute('isKeepToolBodies');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isKeepToolBodies', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.CombineFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.CombineFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.CombineFeature) : null;
//     };

//     //=========== ConstantRadiusFilletEdgeSet ============
//     // Provides access to the edges and the parameter associated with a constant radius fillet.
//     adsk.fusion.ConstantRadiusFilletEdgeSet = function ConstantRadiusFilletEdgeSet(handle) {
//         if (!(this instanceof adsk.fusion.ConstantRadiusFilletEdgeSet)) {
//             return adsk.fusion.ConstantRadiusFilletEdgeSet.cast(handle);
//         }
//         adsk.fusion.FilletEdgeSet.call(this, handle);
//     };
//     adsk.fusion.ConstantRadiusFilletEdgeSet.prototype = Object.create(adsk.fusion.FilletEdgeSet.prototype);
//     adsk.fusion.ConstantRadiusFilletEdgeSet.prototype.constructor = adsk.fusion.ConstantRadiusFilletEdgeSet;
//     adsk.fusion.ConstantRadiusFilletEdgeSet.interfaceId = 'adsk.fusion.ConstantRadiusFilletEdgeSet';
//     adsk.objectTypes['adsk.fusion.ConstantRadiusFilletEdgeSet'] = adsk.fusion.ConstantRadiusFilletEdgeSet;
//     adsk.fusion.ConstantRadiusFilletEdgeSet.cast = function (object) {
//         return object instanceof adsk.fusion.ConstantRadiusFilletEdgeSet ? object : null;
//     };

//     // Gets and sets the edges that will be filleted. In order to access (get) the input edges
//     // of a fillet, you must roll the timeline back to just before the fillet feature
//     // whose edges you want to access.
//     Object.defineProperty(adsk.fusion.ConstantRadiusFilletEdgeSet.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('edges', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the model parameter that controls the radius of the fillet. You can edit
//     // the radius by using the properties on the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.ConstantRadiusFilletEdgeSet.prototype, 'radius', {
//         get : function () {
//             var result = this._execute('radius');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== CylinderFeature ============
//     // Object that represents an existing cylinder feature in a design.
//     adsk.fusion.CylinderFeature = function CylinderFeature(handle) {
//         if (!(this instanceof adsk.fusion.CylinderFeature)) {
//             return adsk.fusion.CylinderFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.CylinderFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.CylinderFeature.prototype.constructor = adsk.fusion.CylinderFeature;
//     adsk.fusion.CylinderFeature.interfaceId = 'adsk.fusion.CylinderFeature';
//     adsk.objectTypes['adsk.fusion.CylinderFeature'] = adsk.fusion.CylinderFeature;
//     adsk.fusion.CylinderFeature.cast = function (object) {
//         return object instanceof adsk.fusion.CylinderFeature ? object : null;
//     };

//     //=========== DistanceAndAngleChamferTypeDefinition ============
//     // Provides information to create a chamfer that is defined by a distance from the edge and an angle.
//     adsk.fusion.DistanceAndAngleChamferTypeDefinition = function DistanceAndAngleChamferTypeDefinition(handle) {
//         if (!(this instanceof adsk.fusion.DistanceAndAngleChamferTypeDefinition)) {
//             return adsk.fusion.DistanceAndAngleChamferTypeDefinition.cast(handle);
//         }
//         adsk.fusion.ChamferTypeDefinition.call(this, handle);
//     };
//     adsk.fusion.DistanceAndAngleChamferTypeDefinition.prototype = Object.create(adsk.fusion.ChamferTypeDefinition.prototype);
//     adsk.fusion.DistanceAndAngleChamferTypeDefinition.prototype.constructor = adsk.fusion.DistanceAndAngleChamferTypeDefinition;
//     adsk.fusion.DistanceAndAngleChamferTypeDefinition.interfaceId = 'adsk.fusion.DistanceAndAngleChamferTypeDefinition';
//     adsk.objectTypes['adsk.fusion.DistanceAndAngleChamferTypeDefinition'] = adsk.fusion.DistanceAndAngleChamferTypeDefinition;
//     adsk.fusion.DistanceAndAngleChamferTypeDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.DistanceAndAngleChamferTypeDefinition ? object : null;
//     };

//     // Returns the parameter controlling the distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.DistanceAndAngleChamferTypeDefinition.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the parameter controlling the angle. You can edit the angle
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.DistanceAndAngleChamferTypeDefinition.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== DistanceExtentDefinition ============
//     // Defines the inputs for a distance ExtentDefinition object.
//     // This feature extent type defines the distance as well as whether the extent is symmetric
//     // or in only one direction. If the extent is not symmetric, a positive or negative distance
//     // can be used to control the direction.
//     // For a hole, the IsSymmetric property value will always be false.
//     adsk.fusion.DistanceExtentDefinition = function DistanceExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.DistanceExtentDefinition)) {
//             return adsk.fusion.DistanceExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.DistanceExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.DistanceExtentDefinition.prototype.constructor = adsk.fusion.DistanceExtentDefinition;
//     adsk.fusion.DistanceExtentDefinition.interfaceId = 'adsk.fusion.DistanceExtentDefinition';
//     adsk.objectTypes['adsk.fusion.DistanceExtentDefinition'] = adsk.fusion.DistanceExtentDefinition;
//     adsk.fusion.DistanceExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.DistanceExtentDefinition ? object : null;
//     };

//     // Gets and sets if the distance extent is symmetric or not
//     // For a hole this property will always return false and setting it is ignored.
//     Object.defineProperty(adsk.fusion.DistanceExtentDefinition.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.DistanceExtentDefinition.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== DraftFeature ============
//     // Object that represents an existing draft feature in a design.
//     adsk.fusion.DraftFeature = function DraftFeature(handle) {
//         if (!(this instanceof adsk.fusion.DraftFeature)) {
//             return adsk.fusion.DraftFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.DraftFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.DraftFeature.prototype.constructor = adsk.fusion.DraftFeature;
//     adsk.fusion.DraftFeature.interfaceId = 'adsk.fusion.DraftFeature';
//     adsk.objectTypes['adsk.fusion.DraftFeature'] = adsk.fusion.DraftFeature;
//     adsk.fusion.DraftFeature.cast = function (object) {
//         return object instanceof adsk.fusion.DraftFeature ? object : null;
//     };

//     // Gets and sets the input faces.
//     // If isTangentChain is true, all the faces that are tangentially connected to the input faces (if any) will also be included.
//     Object.defineProperty(adsk.fusion.DraftFeature.prototype, 'inputFaces', {
//         get : function () {
//             var result = this._execute('inputFaces');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.fusion.BRepFace) : null;
//             }
//             return resultValue
//         },
//         set : function (value) {
//             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
//             var valueLength = value.length;
//             var valueIt;
//             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
//                 if (value[valueIt] !== null && !(value[valueIt] instanceof adsk.fusion.BRepFace)) { throw new TypeError('value[valueIt] must be a adsk.fusion.BRepFace'); }
//             }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the plane that defines the direction in which the draft is applied. This can be a planar BrepFace, or a ConstructionPlane.
//     Object.defineProperty(adsk.fusion.DraftFeature.prototype, 'plane', {
//         get : function () {
//             var result = this._execute('plane');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('plane', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if any faces that are tangentially connected to any of
//     // the input faces will also be included in setting InputEntities. It defaults to true.
//     Object.defineProperty(adsk.fusion.DraftFeature.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isTangentChain', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the direction of the draft is flipped.
//     Object.defineProperty(adsk.fusion.DraftFeature.prototype, 'isDirectionFlipped', {
//         get : function () {
//             var result = this._execute('isDirectionFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDirectionFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the definition object that specifies how the draft is defined. Modifying the
//     // definition object will cause the draft to recompute. This can return either an
//     // AngleExtentDefinition or TwoSidesAngleExtentDefinition object. This property
//     // returns nothing in the case where the feature is non-parametric. Use this property
//     // to access the parameters controlling the draft and whether the draft is symmetric or not.
//     Object.defineProperty(adsk.fusion.DraftFeature.prototype, 'draftDefinition', {
//         get : function () {
//             var result = this._execute('draftDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtentDefinition) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.DraftFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeature) : null;
//         }
//     });

//     // Changes the definition of the feature so that a single angle is used for all drafts.
//     // If the isSymmetric is true then the faces are split along the parting plane and drafted
//     // independently using the same angle.
//     // isSymmetric : Set to 'true' if the faces are to be split along the plane and drafted symmetrically. This
//     // will have the side effect of setting the isSymmetric property to the same value.
//     // angle : The ValueInput object that defines the angle of the draft. This can be a positive or negative
//     // value which will affect the direction of the draft along with the isDirectionFlipped property.
//     // Returns true if successful
//     adsk.fusion.DraftFeature.prototype.setSingleAngle = function (isSymmetric, angle) {
//         if (typeof isSymmetric !== 'boolean') { throw new TypeError('isSymmetric must be a boolean'); }
//         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
//         var args = {
//             isSymmetric : isSymmetric,
//             angle : (angle === null ? angle : angle.handle)
//         };
//         var result = this._execute('setSingleAngle', args);
//         return result ? result.value : undefined;
//     };

//     // Changes the definition of the feature so that the surfaces are split along the draft plane and
//     // the faces on each side of the plane are drafted independently from the other side.
//     // angleOne : The ValueInput object that defines the angle for the faces on the first side of the draft plane.
//     // angleTwo : The ValueInput object that defines the angle for the faces on the second side of the draft plane.
//     // Returns true if successful
//     adsk.fusion.DraftFeature.prototype.setTwoAngles = function (angleOne, angleTwo) {
//         if (angleOne !== null && !(angleOne instanceof adsk.core.ValueInput)) { throw new TypeError('angleOne must be a adsk.core.ValueInput'); }
//         if (angleTwo !== null && !(angleTwo instanceof adsk.core.ValueInput)) { throw new TypeError('angleTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             angleOne : (angleOne === null ? angleOne : angleOne.handle),
//             angleTwo : (angleTwo === null ? angleTwo : angleTwo.handle)
//         };
//         var result = this._execute('setTwoAngles', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.DraftFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.DraftFeature) : null;
//     };

//     //=========== EqualDistanceChamferTypeDefinition ============
//     // Provides information to create a chamfer that is defined by a single distance and has an equal offset from the edge.
//     adsk.fusion.EqualDistanceChamferTypeDefinition = function EqualDistanceChamferTypeDefinition(handle) {
//         if (!(this instanceof adsk.fusion.EqualDistanceChamferTypeDefinition)) {
//             return adsk.fusion.EqualDistanceChamferTypeDefinition.cast(handle);
//         }
//         adsk.fusion.ChamferTypeDefinition.call(this, handle);
//     };
//     adsk.fusion.EqualDistanceChamferTypeDefinition.prototype = Object.create(adsk.fusion.ChamferTypeDefinition.prototype);
//     adsk.fusion.EqualDistanceChamferTypeDefinition.prototype.constructor = adsk.fusion.EqualDistanceChamferTypeDefinition;
//     adsk.fusion.EqualDistanceChamferTypeDefinition.interfaceId = 'adsk.fusion.EqualDistanceChamferTypeDefinition';
//     adsk.objectTypes['adsk.fusion.EqualDistanceChamferTypeDefinition'] = adsk.fusion.EqualDistanceChamferTypeDefinition;
//     adsk.fusion.EqualDistanceChamferTypeDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.EqualDistanceChamferTypeDefinition ? object : null;
//     };

//     // Returns the parameter controlling the distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.EqualDistanceChamferTypeDefinition.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== ExtendFeature ============
//     // Object that represents an existing extend feature in a design.
//     adsk.fusion.ExtendFeature = function ExtendFeature(handle) {
//         if (!(this instanceof adsk.fusion.ExtendFeature)) {
//             return adsk.fusion.ExtendFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ExtendFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ExtendFeature.prototype.constructor = adsk.fusion.ExtendFeature;
//     adsk.fusion.ExtendFeature.interfaceId = 'adsk.fusion.ExtendFeature';
//     adsk.objectTypes['adsk.fusion.ExtendFeature'] = adsk.fusion.ExtendFeature;
//     adsk.fusion.ExtendFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ExtendFeature ? object : null;
//     };

//     // Gets the edges that were extended. In many cases the extend operation results in
//     // the edges being consumed so they're no longer available after the feature is created.
//     // in this case you need to reposition the timeline marker to just before this feature
//     // when the edges do exist.
//     Object.defineProperty(adsk.fusion.ExtendFeature.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // Returns the parameter controlling the extend distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.ExtendFeature.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets surface extend type to use
//     Object.defineProperty(adsk.fusion.ExtendFeature.prototype, 'extendType', {
//         get : function () {
//             var result = this._execute('extendType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('extendType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if all edges that are tangent or curvature continuous, and end point connected, will be found
//     // automatically and extended.
//     Object.defineProperty(adsk.fusion.ExtendFeature.prototype, 'isChainingEnabled', {
//         get : function () {
//             var result = this._execute('isChainingEnabled');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ExtendFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeature) : null;
//         }
//     });

//     // Sets the edges for the extend feature
//     // edges : The surface edges to extend.
//     // Only the surface edges from an open body can be extended.
//     // The edges must all be from the same open body.
//     // isChainingEnabled : An optional boolean argument whose default is true. If this argument is set to true, all edges that are
//     // tangent or curvature continuous, and end point connected, will be found automatically and extended.
//     // Returns true if successful
//     adsk.fusion.ExtendFeature.prototype.setInputEntities = function (edges, isChainingEnabled) {
//         if (edges !== null && !(edges instanceof adsk.core.ObjectCollection)) { throw new TypeError('edges must be a adsk.core.ObjectCollection'); }
//         if (isChainingEnabled === null || (isChainingEnabled !== undefined && typeof isChainingEnabled !== 'boolean')) { throw new TypeError('isChainingEnabled must be a boolean'); }
//         var args = {
//             edges : (edges === null ? edges : edges.handle)
//         };
//         if (isChainingEnabled !== undefined) {
//             args.isChainingEnabled = isChainingEnabled;
//         }
//         var result = this._execute('setInputEntities', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.ExtendFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtendFeature) : null;
//     };

//     //=========== ExtrudeFeature ============
//     // Object that represents an existing extrude feature in a design.
//     adsk.fusion.ExtrudeFeature = function ExtrudeFeature(handle) {
//         if (!(this instanceof adsk.fusion.ExtrudeFeature)) {
//             return adsk.fusion.ExtrudeFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ExtrudeFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ExtrudeFeature.prototype.constructor = adsk.fusion.ExtrudeFeature;
//     adsk.fusion.ExtrudeFeature.interfaceId = 'adsk.fusion.ExtrudeFeature';
//     adsk.objectTypes['adsk.fusion.ExtrudeFeature'] = adsk.fusion.ExtrudeFeature;
//     adsk.fusion.ExtrudeFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ExtrudeFeature ? object : null;
//     };

//     // Gets and sets the profiles or planar faces used to define the shape of the extrude.
//     // This property can return or be set with a single Profile, a single planar face, or
//     // an ObjectCollection consisting of multiple profiles and planar faces. When an
//     // ObjectCollection is used all of the profiles and faces must be co-planar.
//     // This property returns null in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'profile', {
//         get : function () {
//             var result = this._execute('profile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('profile', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the taper angle of the extrusion. To
//     // edit the taper angle use properties on the parameter to edit its value.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'taperAngle', {
//         get : function () {
//             var result = this._execute('taperAngle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets the type of operation performed by the extrusion.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the ExtentDefinition object that defines the extent of the extrude. Modifying the
//     // definition object will cause the extrude to recompute. Various types of objects can
//     // be returned depending on the type of extent currently defined for the extrusion.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'extentDefinition', {
//         get : function () {
//             var result = this._execute('extentDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtentDefinition) : null;
//         }
//     });

//     // Property that returns the set of faces that cap the end of the extrusion and are coincident
//     // with the sketch plane. In the case of a symmetric extrusion, these faces are the ones on the
//     // positive normal side of the sketch plane. In the case where there are no start faces,
//     // this property will return null.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'startFaces', {
//         get : function () {
//             var result = this._execute('startFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns the set of faces that cap the end of the extrusion, opposite the
//     // start faces. In the case where there are no end faces, this property will return null.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'endFaces', {
//         get : function () {
//             var result = this._execute('endFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns all of the side faces (i.e. those running perpendicular to the extrude direction)
//     // of the feature.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'sideFaces', {
//         get : function () {
//             var result = this._execute('sideFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeature) : null;
//         }
//     });

//     // Indicates if this feature was initially created as a solid or a surface.
//     Object.defineProperty(adsk.fusion.ExtrudeFeature.prototype, 'isSolid', {
//         get : function () {
//             var result = this._execute('isSolid');
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets the extrusion extents option to 'Distance'.
//     // isSymmetric : Set to 'true' for an extrusion symmetrical about the profile plane
//     // distance : ValueInput object that defines the extrude distance.
//     // If the isSymmetric argument is 'false', a positive or negative distance can be used to control the direction.
//     // Returns true if successful
//     adsk.fusion.ExtrudeFeature.prototype.setDistanceExtent = function (isSymmetric, distance) {
//         if (typeof isSymmetric !== 'boolean') { throw new TypeError('isSymmetric must be a boolean'); }
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         var args = {
//             isSymmetric : isSymmetric,
//             distance : (distance === null ? distance : distance.handle)
//         };
//         var result = this._execute('setDistanceExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extrusion extents option to 'Two Side'.
//     // This method will fail in the case of a non-parametric extrusion.
//     // distanceOne : ValueInput object that defines the extrude distance for the first side.
//     // distanceTwo : ValueInput object that defines the extrude distance for the second side.
//     // Returns true if successful
//     adsk.fusion.ExtrudeFeature.prototype.setTwoSidesDistanceExtent = function (distanceOne, distanceTwo) {
//         if (distanceOne !== null && !(distanceOne instanceof adsk.core.ValueInput)) { throw new TypeError('distanceOne must be a adsk.core.ValueInput'); }
//         if (distanceTwo !== null && !(distanceTwo instanceof adsk.core.ValueInput)) { throw new TypeError('distanceTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             distanceOne : (distanceOne === null ? distanceOne : distanceOne.handle),
//             distanceTwo : (distanceTwo === null ? distanceTwo : distanceTwo.handle)
//         };
//         var result = this._execute('setTwoSidesDistanceExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extrusion extents option to 'All' (i.e. the extrusion is through-all, in both directions.)
//     // This method will fail in the case of a non-parametric extrusion.
//     // direction : The direction can be either positive, negative, or symmetric.
//     // Returns true if successful
//     adsk.fusion.ExtrudeFeature.prototype.setAllExtent = function (direction) {
//         if (!isFinite(direction)) { throw new TypeError('direction must be a number'); }
//         var args = {
//             direction : Number(direction)
//         };
//         var result = this._execute('setAllExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extrusion Direction option to 'One Side' and the Extents option to 'To' (a specified face)
//     // toEntity : The entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For an extrude it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // matchShape : If the matchShape argument is 'true', the toEntity is extended to fully intersect the extrusion.
//     // directionHint : Specifies the direction of the extrusion. This is only used in the case where there are two possible solutions and the extrusion can
//     // hit the toEntity in either direction. An example is if the profile of the extrusion is within a hole.
//     // The extrusion will intersect the cylinder of the hole in either direction.
//     // Typically there is only a single solution and the direction is determined automatically.
//     // Returns true if successful.
//     adsk.fusion.ExtrudeFeature.prototype.setOneSideToExtent = function (toEntity, matchShape, directionHint) {
//         if (toEntity !== null && !(toEntity instanceof adsk.core.Base)) { throw new TypeError('toEntity must be a adsk.core.Base'); }
//         if (typeof matchShape !== 'boolean') { throw new TypeError('matchShape must be a boolean'); }
//         if (directionHint === null || (directionHint !== undefined && directionHint !== null && !(directionHint instanceof adsk.core.Vector3D))) { throw new TypeError('directionHint must be a adsk.core.Vector3D'); }
//         var args = {
//             toEntity : (toEntity === null ? toEntity : toEntity.handle),
//             matchShape : matchShape
//         };
//         if (directionHint !== undefined) {
//             args.directionHint = (directionHint === null ? directionHint : directionHint.handle);
//         }
//         var result = this._execute('setOneSideToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Set the extrusion Direction option to 'Two Side'
//     // This method will fail in the case of a non-parametric extrusion.
//     // toEntityOne : The first entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For an extrude it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // toEntityTwo : The second entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For an extrude it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // matchShape : If the matchShape argument is 'true', the toEntity is extended to fully intersect the extrusion.
//     // Returns true if successful.
//     adsk.fusion.ExtrudeFeature.prototype.setTwoSidesToExtent = function (toEntityOne, toEntityTwo, matchShape) {
//         if (toEntityOne !== null && !(toEntityOne instanceof adsk.core.Base)) { throw new TypeError('toEntityOne must be a adsk.core.Base'); }
//         if (toEntityTwo !== null && !(toEntityTwo instanceof adsk.core.Base)) { throw new TypeError('toEntityTwo must be a adsk.core.Base'); }
//         if (typeof matchShape !== 'boolean') { throw new TypeError('matchShape must be a boolean'); }
//         var args = {
//             toEntityOne : (toEntityOne === null ? toEntityOne : toEntityOne.handle),
//             toEntityTwo : (toEntityTwo === null ? toEntityTwo : toEntityTwo.handle),
//             matchShape : matchShape
//         };
//         var result = this._execute('setTwoSidesToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ExtrudeFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtrudeFeature) : null;
//     };

//     //=========== FilletFeature ============
//     // Object that represents an existing fillet feature in a design.
//     adsk.fusion.FilletFeature = function FilletFeature(handle) {
//         if (!(this instanceof adsk.fusion.FilletFeature)) {
//             return adsk.fusion.FilletFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.FilletFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.FilletFeature.prototype.constructor = adsk.fusion.FilletFeature;
//     adsk.fusion.FilletFeature.interfaceId = 'adsk.fusion.FilletFeature';
//     adsk.objectTypes['adsk.fusion.FilletFeature'] = adsk.fusion.FilletFeature;
//     adsk.fusion.FilletFeature.cast = function (object) {
//         return object instanceof adsk.fusion.FilletFeature ? object : null;
//     };

//     // Returns the edge sets associated with this fillet.
//     Object.defineProperty(adsk.fusion.FilletFeature.prototype, 'edgeSets', {
//         get : function () {
//             var result = this._execute('edgeSets');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletEdgeSets) : null;
//         }
//     });

//     // Gets and sets if the fillet uses the G2 (curvature-continuity) surface quality option .
//     Object.defineProperty(adsk.fusion.FilletFeature.prototype, 'isG2', {
//         get : function () {
//             var result = this._execute('isG2');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isG2', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if a rolling ball solution is to be used in any corners.
//     Object.defineProperty(adsk.fusion.FilletFeature.prototype, 'isRollingBallCorner', {
//         get : function () {
//             var result = this._execute('isRollingBallCorner');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isRollingBallCorner', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether or not edges that are tangentially connected to
//     // the input edges (if any) will also be filleted.
//     Object.defineProperty(adsk.fusion.FilletFeature.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isTangentChain', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of its parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.FilletFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.FilletFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.FilletFeature) : null;
//     };

//     //=========== FormFeature ============
//     // Object that represents an existing Form feature in a design.
//     adsk.fusion.FormFeature = function FormFeature(handle) {
//         if (!(this instanceof adsk.fusion.FormFeature)) {
//             return adsk.fusion.FormFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.FormFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.FormFeature.prototype.constructor = adsk.fusion.FormFeature;
//     adsk.fusion.FormFeature.interfaceId = 'adsk.fusion.FormFeature';
//     adsk.objectTypes['adsk.fusion.FormFeature'] = adsk.fusion.FormFeature;
//     adsk.fusion.FormFeature.cast = function (object) {
//         return object instanceof adsk.fusion.FormFeature ? object : null;
//     };

//     //=========== HoleFeature ============
//     // Object that represents an existing hole feature in a design.
//     adsk.fusion.HoleFeature = function HoleFeature(handle) {
//         if (!(this instanceof adsk.fusion.HoleFeature)) {
//             return adsk.fusion.HoleFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.HoleFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.HoleFeature.prototype.constructor = adsk.fusion.HoleFeature;
//     adsk.fusion.HoleFeature.interfaceId = 'adsk.fusion.HoleFeature';
//     adsk.objectTypes['adsk.fusion.HoleFeature'] = adsk.fusion.HoleFeature;
//     adsk.fusion.HoleFeature.cast = function (object) {
//         return object instanceof adsk.fusion.HoleFeature ? object : null;
//     };

//     // Returns the position of the hole.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'position', {
//         get : function () {
//             var result = this._execute('position');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Returns the direction of the hole.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'direction', {
//         get : function () {
//             var result = this._execute('direction');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the current type of hole this feature represents.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'holeType', {
//         get : function () {
//             var result = this._execute('holeType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the model parameter controlling the hole diameter. The diameter of
//     // the hole can be edited through the returned parameter object.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'holeDiameter', {
//         get : function () {
//             var result = this._execute('holeDiameter');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the model parameter controlling the angle of the tip of the hole. The tip angle of
//     // the hole can be edited through the returned parameter object.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'tipAngle', {
//         get : function () {
//             var result = this._execute('tipAngle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the model parameter controlling the counterbore diameter.
//     // This will return null in the case the hole type is not a counterbore.
//     // The diameter of the counterbore can be edited through the returned parameter.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'counterboreDiameter', {
//         get : function () {
//             var result = this._execute('counterboreDiameter');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the model parameter controlling the counterbore depth.
//     // This will return null in the case the hole type is not a counterbore.
//     // The depth of the counterbore can be edited through the returned parameter.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'counterboreDepth', {
//         get : function () {
//             var result = this._execute('counterboreDepth');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the model parameter controlling the countersink diameter.
//     // This will return null in the case the hole type is not a countersink.
//     // The diameter of the countersink can be edited through the returned parameter.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'countersinkDiameter', {
//         get : function () {
//             var result = this._execute('countersinkDiameter');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the model parameter controlling the countersink angle.
//     // This will return null in the case the hole type is not a countersink.
//     // The angle of the countersink can be edited through the returned parameter.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'countersinkAngle', {
//         get : function () {
//             var result = this._execute('countersinkAngle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets if the hole is in the default direction or not.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'isDefaultDirection', {
//         get : function () {
//             var result = this._execute('isDefaultDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDefaultDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the definition object that is defining the extent of the hole. Modifying the
//     // definition object will cause the hole to recompute. The extent type of a hole
//     // is currently limited to a distance extent.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'extentDefinition', {
//         get : function () {
//             var result = this._execute('extentDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtentDefinition) : null;
//         }
//     });

//     // Property that returns the faces at the bottom of the hole. This will typically be a single face
//     // but could return more than one face in the case where the bottom of the hole is uneven.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'endFaces', {
//         get : function () {
//             var result = this._execute('endFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns all of the side faces of the hole.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'sideFaces', {
//         get : function () {
//             var result = this._execute('sideFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Returns a HolePositionDefinition object that provides access to the information used
//     // to define the position of the hole. This returns null in the case where IsParametric
//     // is false.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'holePositionDefinition', {
//         get : function () {
//             var result = this._execute('holePositionDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HolePositionDefinition) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.HoleFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeature) : null;
//         }
//     });

//     // Calling this method will change the hole to a simple hole.
//     // Returns true if changing the hole was successful.
//     adsk.fusion.HoleFeature.prototype.setToSimple = function () {
//         var result = this._execute('setToSimple');
//         return result ? result.value : undefined;
//     };

//     // Calling this method will change the hole to a counterbore hole.
//     // counterboreDiameter : A ValueInput object that defines the counterbore diameter. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "3 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // counterboreDepth : A ValueInput object that defines the counterbore depth. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "3 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // Returns true if changing the hole was successful.
//     adsk.fusion.HoleFeature.prototype.setToCounterbore = function (counterboreDiameter, counterboreDepth) {
//         if (counterboreDiameter !== null && !(counterboreDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('counterboreDiameter must be a adsk.core.ValueInput'); }
//         if (counterboreDepth !== null && !(counterboreDepth instanceof adsk.core.ValueInput)) { throw new TypeError('counterboreDepth must be a adsk.core.ValueInput'); }
//         var args = {
//             counterboreDiameter : (counterboreDiameter === null ? counterboreDiameter : counterboreDiameter.handle),
//             counterboreDepth : (counterboreDepth === null ? counterboreDepth : counterboreDepth.handle)
//         };
//         var result = this._execute('setToCounterbore', args);
//         return result ? result.value : undefined;
//     };

//     // Calling this method will change the hole to a countersink hole.
//     // countersinkDiameter : A ValueInput object that defines the countersink diameter. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "3 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // countersinkAngle : A ValueInput object that defines the countersink angle. If the ValueInput uses
//     // a real then it is interpreted as radians. If it is a string then the units
//     // can be defined as part of the string (i.e. "120 deg"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // Returns true if changing the hole was successful.
//     adsk.fusion.HoleFeature.prototype.setToCountersink = function (countersinkDiameter, countersinkAngle) {
//         if (countersinkDiameter !== null && !(countersinkDiameter instanceof adsk.core.ValueInput)) { throw new TypeError('countersinkDiameter must be a adsk.core.ValueInput'); }
//         if (countersinkAngle !== null && !(countersinkAngle instanceof adsk.core.ValueInput)) { throw new TypeError('countersinkAngle must be a adsk.core.ValueInput'); }
//         var args = {
//             countersinkDiameter : (countersinkDiameter === null ? countersinkDiameter : countersinkDiameter.handle),
//             countersinkAngle : (countersinkAngle === null ? countersinkAngle : countersinkAngle.handle)
//         };
//         var result = this._execute('setToCountersink', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the depth of the hole using a specific distance.
//     // distance : The depth of the hole. If a real is specified the value is in centimeters. If a string is
//     // specified the units are derived from the string. If no units are specified, the default
//     // units of the document are used.
//     // Returns true if setting the extent was successful.
//     adsk.fusion.HoleFeature.prototype.setDistanceExtent = function (distance) {
//         if (distance !== null && !(distance instanceof adsk.core.ValueInput)) { throw new TypeError('distance must be a adsk.core.ValueInput'); }
//         var args = {
//             distance : (distance === null ? distance : distance.handle)
//         };
//         var result = this._execute('setDistanceExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the extent of the hole to be through-all. The direction can be
//     // either positive, negative.
//     // direction : The direction of the hole relative to the normal of the sketch plane.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setAllExtent = function (direction) {
//         if (!isFinite(direction)) { throw new TypeError('direction must be a number'); }
//         var args = {
//             direction : Number(direction)
//         };
//         var result = this._execute('setAllExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the extent of the hole to be from the sketch plane to the specified "to" face.
//     // toEntity : The entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For a hole it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // matchShape : Indicates if the hole is not contained on the face that the hole should match
//     // the shape of the entity as if it extended beyond it's current boundaries.
//     // directionHint : Specifies the direction of the hole. This is only used in the case where there are two possible solutions and the hole can
//     // hit the toEntity in either direction.
//     // Typically there is only a single solution and the direction is determined automatically.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setOneSideToExtent = function (toEntity, matchShape, directionHint) {
//         if (toEntity !== null && !(toEntity instanceof adsk.core.Base)) { throw new TypeError('toEntity must be a adsk.core.Base'); }
//         if (typeof matchShape !== 'boolean') { throw new TypeError('matchShape must be a boolean'); }
//         if (directionHint === null || (directionHint !== undefined && directionHint !== null && !(directionHint instanceof adsk.core.Vector3D))) { throw new TypeError('directionHint must be a adsk.core.Vector3D'); }
//         var args = {
//             toEntity : (toEntity === null ? toEntity : toEntity.handle),
//             matchShape : matchShape
//         };
//         if (directionHint !== undefined) {
//             args.directionHint = (directionHint === null ? directionHint : directionHint.handle);
//         }
//         var result = this._execute('setOneSideToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the position of a the hole using a point. The point can be a vertex on the face
//     // or it can be a Point3D object to define any location on the face. If a Point3D object is
//     // provided it will be projected onto the plane along the planes normal. The orientation of the
//     // hole is defined by the planar face or construction plane. If a vertex is used, the position of
//     // the hole is associative to that vertex. If a Point3D object is used the position of the hole
//     // is not associative.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole.
//     // The natural direction of the hole will be opposite the normal of the face or construction plane.
//     // point : A Point3D object or vertex that defines the position of the hole. The point will be projected
//     // onto the plane along the normal of the plane.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setPositionByPoint = function (planarEntity, point) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (point !== null && !(point instanceof adsk.core.Base)) { throw new TypeError('point must be a adsk.core.Base'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             point : (point === null ? point : point.handle)
//         };
//         var result = this._execute('setPositionByPoint', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the position of the hole at the center of a circular or elliptical edge of the face.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole.
//     // The natural direction of the hole will be opposite the normal of the face or construction plane.
//     // centerEdge : A circular or elliptical edge whose center point will be the position of the hole.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setPositionAtCenter = function (planarEntity, centerEdge) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (centerEdge !== null && !(centerEdge instanceof adsk.fusion.BRepEdge)) { throw new TypeError('centerEdge must be a adsk.fusion.BRepEdge'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             centerEdge : (centerEdge === null ? centerEdge : centerEdge.handle)
//         };
//         var result = this._execute('setPositionAtCenter', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the position and orienation of the hole using a sketch point.
//     // sketchPoint : The sketch point that defines the position of the hole. The orientation is
//     // inferred from the normal of the point's parent sketch. The natural direction will be
//     // opposite the normal of the sketch.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setPositionBySketchPoint = function (sketchPoint) {
//         if (sketchPoint !== null && !(sketchPoint instanceof adsk.fusion.SketchPoint)) { throw new TypeError('sketchPoint must be a adsk.fusion.SketchPoint'); }
//         var args = {
//             sketchPoint : (sketchPoint === null ? sketchPoint : sketchPoint.handle)
//         };
//         var result = this._execute('setPositionBySketchPoint', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the position and orientation of the hole using a set of points.
//     // sketchPoints : A collection of sketch points that defines the positions of the holes. The orientation is
//     // inferred from the normal of the point's parent sketch. The natural direction will be
//     // opposite the normal of the sketch. All of the points must be in the same sketch.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setPositionBySketchPoints = function (sketchPoints) {
//         if (sketchPoints !== null && !(sketchPoints instanceof adsk.core.ObjectCollection)) { throw new TypeError('sketchPoints must be a adsk.core.ObjectCollection'); }
//         var args = {
//             sketchPoints : (sketchPoints === null ? sketchPoints : sketchPoints.handle)
//         };
//         var result = this._execute('setPositionBySketchPoints', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the orientation of the hole using a planar face or construction plane.
//     // The position of the hole is defined by the distance from one or two edges.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole.
//     // The natural direction of the hole will be opposite the normal of the face or construction plane.
//     // point : A Point3D object that defines the approximate initial position of the hole. The point will be
//     // projected onto the plane. This point should be close to the final position of the hole and
//     // is used to determine which solution out of several possible solutions should be chosen
//     // for the hole location.
//     // edgeOne : A linear BRepEdge object that the position of the hole will be measured from. The position
//     // of the hole will be measured along a perpendicular from this edge.
//     // offsetOne : A ValueInput object that defines the offset distance from edgeOne. If the ValueInput uses
//     // a real then it is interpreted as centimeters. If it is a string then the units
//     // can be defined as part of the string (i.e. "3 in"). If no units are specified
//     // it is interpreted using the current default units for length.
//     // edgeTwo : You can optionally define a second edge and offset to specify the position of the hole. If you use a
//     // second edge it has the same requirements as the edgeOne argument. If you provide a second edge you
//     // must also provide the offsetTwo argument.
//     // offsetTwo : If edgeTwo is defined, you must provide this argument which is a ValueInput object that
//     // defines the offset from the edgeTwo. If the ValueInput uses a real then it is interpreted
//     // as centimeters. If it is a string then the units can be defined as part of the string
//     // (i.e. "3 in"). If no units are specified it is interpreted using the current default units
//     // for length.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setPositionByPlaneAndOffsets = function (planarEntity, point, edgeOne, offsetOne, edgeTwo, offsetTwo) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (point !== null && !(point instanceof adsk.core.Point3D)) { throw new TypeError('point must be a adsk.core.Point3D'); }
//         if (edgeOne !== null && !(edgeOne instanceof adsk.fusion.BRepEdge)) { throw new TypeError('edgeOne must be a adsk.fusion.BRepEdge'); }
//         if (offsetOne !== null && !(offsetOne instanceof adsk.core.ValueInput)) { throw new TypeError('offsetOne must be a adsk.core.ValueInput'); }
//         if (edgeTwo === null || (edgeTwo !== undefined && edgeTwo !== null && !(edgeTwo instanceof adsk.fusion.BRepEdge))) { throw new TypeError('edgeTwo must be a adsk.fusion.BRepEdge'); }
//         if (offsetTwo === null || (offsetTwo !== undefined && offsetTwo !== null && !(offsetTwo instanceof adsk.core.ValueInput))) { throw new TypeError('offsetTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             point : (point === null ? point : point.handle),
//             edgeOne : (edgeOne === null ? edgeOne : edgeOne.handle),
//             offsetOne : (offsetOne === null ? offsetOne : offsetOne.handle)
//         };
//         if (edgeTwo !== undefined) {
//             args.edgeTwo = (edgeTwo === null ? edgeTwo : edgeTwo.handle);
//         }
//         if (offsetTwo !== undefined) {
//             args.offsetTwo = (offsetTwo === null ? offsetTwo : offsetTwo.handle);
//         }
//         var result = this._execute('setPositionByPlaneAndOffsets', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the position and orientation of the hole to be on the start, end or center of an edge.
//     // planarEntity : The planar BRepFace or ConstructionPlane object that defines the orientation of the hole
//     // and start of the hole. The natural direction of the hole will be opposite the normal of
//     // the face or construction plane.
//     // edge : The edge to position the hole on.
//     // position : The position along the edge to place the hole.
//     // Returns true if successful.
//     adsk.fusion.HoleFeature.prototype.setPositionOnEdge = function (planarEntity, edge, position) {
//         if (planarEntity !== null && !(planarEntity instanceof adsk.core.Base)) { throw new TypeError('planarEntity must be a adsk.core.Base'); }
//         if (edge !== null && !(edge instanceof adsk.fusion.BRepEdge)) { throw new TypeError('edge must be a adsk.fusion.BRepEdge'); }
//         if (!isFinite(position)) { throw new TypeError('position must be a number'); }
//         var args = {
//             planarEntity : (planarEntity === null ? planarEntity : planarEntity.handle),
//             edge : (edge === null ? edge : edge.handle),
//             position : Number(position)
//         };
//         var result = this._execute('setPositionOnEdge', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.HoleFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.HoleFeature) : null;
//     };

//     //=========== LoftFeature ============
//     // Object that represents an existing loft feature in a design.
//     adsk.fusion.LoftFeature = function LoftFeature(handle) {
//         if (!(this instanceof adsk.fusion.LoftFeature)) {
//             return adsk.fusion.LoftFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.LoftFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.LoftFeature.prototype.constructor = adsk.fusion.LoftFeature;
//     adsk.fusion.LoftFeature.interfaceId = 'adsk.fusion.LoftFeature';
//     adsk.objectTypes['adsk.fusion.LoftFeature'] = adsk.fusion.LoftFeature;
//     adsk.fusion.LoftFeature.cast = function (object) {
//         return object instanceof adsk.fusion.LoftFeature ? object : null;
//     };

//     //=========== MirrorFeature ============
//     // Object that represents an existing mirror feature in a design.
//     adsk.fusion.MirrorFeature = function MirrorFeature(handle) {
//         if (!(this instanceof adsk.fusion.MirrorFeature)) {
//             return adsk.fusion.MirrorFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.MirrorFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.MirrorFeature.prototype.constructor = adsk.fusion.MirrorFeature;
//     adsk.fusion.MirrorFeature.interfaceId = 'adsk.fusion.MirrorFeature';
//     adsk.objectTypes['adsk.fusion.MirrorFeature'] = adsk.fusion.MirrorFeature;
//     adsk.fusion.MirrorFeature.cast = function (object) {
//         return object instanceof adsk.fusion.MirrorFeature ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features and bodies.
//     // The collection can contain Components in direct modelling mode only.
//     // In parametric modeling, the pattern compute type is set to pattern features when the collection
//     // only contains features; the pattern compute type is set to pattern bodies when the collection only contains bodies;
//     // otherwise the pattern compute type is set to pattern faces.
//     // The pattern compute type is set to pattern components when the collection only contains components
//     // while in direct modelling mode.
//     Object.defineProperty(adsk.fusion.MirrorFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the mirror plane. This can be either a planar face or construction plane.
//     // This works only for parametric features.
//     Object.defineProperty(adsk.fusion.MirrorFeature.prototype, 'mirrorPlane', {
//         get : function () {
//             var result = this._execute('mirrorPlane');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('mirrorPlane', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the PatternElements collection that contains the elements created by this pattern.
//     Object.defineProperty(adsk.fusion.MirrorFeature.prototype, 'patternElements', {
//         get : function () {
//             var result = this._execute('patternElements');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatternElements) : null;
//         }
//     });

//     // Get the features that were created for this mirror.
//     // Returns null in the case where the feature is not parametric.
//     Object.defineProperty(adsk.fusion.MirrorFeature.prototype, 'resultFeatures', {
//         get : function () {
//             var result = this._execute('resultFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.MirrorFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeature) : null;
//         }
//     });

//     // Gets and sets the compute option for this mirror feature.
//     // This property only applies when mirroring features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.MirrorFeature.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.MirrorFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MirrorFeature) : null;
//     };

//     //=========== MoveFeature ============
//     // Object that represents an existing move feature in a design.
//     adsk.fusion.MoveFeature = function MoveFeature(handle) {
//         if (!(this instanceof adsk.fusion.MoveFeature)) {
//             return adsk.fusion.MoveFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.MoveFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.MoveFeature.prototype.constructor = adsk.fusion.MoveFeature;
//     adsk.fusion.MoveFeature.interfaceId = 'adsk.fusion.MoveFeature';
//     adsk.objectTypes['adsk.fusion.MoveFeature'] = adsk.fusion.MoveFeature;
//     adsk.fusion.MoveFeature.cast = function (object) {
//         return object instanceof adsk.fusion.MoveFeature ? object : null;
//     };

//     // Gets and sets the entities to move.
//     // This collection can only contain BRepBody objects in parametric modeling.
//     Object.defineProperty(adsk.fusion.MoveFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the move transform of the input bodies.
//     Object.defineProperty(adsk.fusion.MoveFeature.prototype, 'transform', {
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

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.MoveFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.MoveFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MoveFeature) : null;
//     };

//     //=========== OffsetFeature ============
//     // Object that represents an existing offset feature in a design.
//     adsk.fusion.OffsetFeature = function OffsetFeature(handle) {
//         if (!(this instanceof adsk.fusion.OffsetFeature)) {
//             return adsk.fusion.OffsetFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.OffsetFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.OffsetFeature.prototype.constructor = adsk.fusion.OffsetFeature;
//     adsk.fusion.OffsetFeature.interfaceId = 'adsk.fusion.OffsetFeature';
//     adsk.objectTypes['adsk.fusion.OffsetFeature'] = adsk.fusion.OffsetFeature;
//     adsk.fusion.OffsetFeature.cast = function (object) {
//         return object instanceof adsk.fusion.OffsetFeature ? object : null;
//     };

//     // Gets and sets the open bodies or faces to be offset.
//     Object.defineProperty(adsk.fusion.OffsetFeature.prototype, 'entities', {
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

//     // Get if the faces that are tangentially connected to the input faces (if any) are also offset.
//     Object.defineProperty(adsk.fusion.OffsetFeature.prototype, 'isChainSelection', {
//         get : function () {
//             var result = this._execute('isChainSelection');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the offset distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.OffsetFeature.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the feature operation that was performed when the feature was created,
//     // (either 'NewBodyFeatureOperation' or 'NewComponentFeatureOperation'.
//     Object.defineProperty(adsk.fusion.OffsetFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.OffsetFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeature) : null;
//         }
//     });

//     // Sets the faces and sheet bodies to offset
//     // entities : The BRepBody or BRepFace objects to offset. If a BRepBody is used it must be open,
//     // (the isSolid property must be False). Faces from both solid and open bodies can be offset.
//     // Input faces need not be from the same closed or open body.
//     // isChainSelection : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will also be offset. The default value is true.
//     // Returns true if successful
//     adsk.fusion.OffsetFeature.prototype.setInputEntities = function (entities, isChainSelection) {
//         if (entities !== null && !(entities instanceof adsk.core.ObjectCollection)) { throw new TypeError('entities must be a adsk.core.ObjectCollection'); }
//         if (isChainSelection === null || (isChainSelection !== undefined && typeof isChainSelection !== 'boolean')) { throw new TypeError('isChainSelection must be a boolean'); }
//         var args = {
//             entities : (entities === null ? entities : entities.handle)
//         };
//         if (isChainSelection !== undefined) {
//             args.isChainSelection = isChainSelection;
//         }
//         var result = this._execute('setInputEntities', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.OffsetFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OffsetFeature) : null;
//     };

//     //=========== OnEdgeHolePositionDefinition ============
//     // Provides positioning information for a hole that is positioned
//     // on the start, end or center of an edge.
//     adsk.fusion.OnEdgeHolePositionDefinition = function OnEdgeHolePositionDefinition(handle) {
//         if (!(this instanceof adsk.fusion.OnEdgeHolePositionDefinition)) {
//             return adsk.fusion.OnEdgeHolePositionDefinition.cast(handle);
//         }
//         adsk.fusion.HolePositionDefinition.call(this, handle);
//     };
//     adsk.fusion.OnEdgeHolePositionDefinition.prototype = Object.create(adsk.fusion.HolePositionDefinition.prototype);
//     adsk.fusion.OnEdgeHolePositionDefinition.prototype.constructor = adsk.fusion.OnEdgeHolePositionDefinition;
//     adsk.fusion.OnEdgeHolePositionDefinition.interfaceId = 'adsk.fusion.OnEdgeHolePositionDefinition';
//     adsk.objectTypes['adsk.fusion.OnEdgeHolePositionDefinition'] = adsk.fusion.OnEdgeHolePositionDefinition;
//     adsk.fusion.OnEdgeHolePositionDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.OnEdgeHolePositionDefinition ? object : null;
//     };

//     // Returns the plane that defines the orientation and start of the hole.
//     Object.defineProperty(adsk.fusion.OnEdgeHolePositionDefinition.prototype, 'planarEntity', {
//         get : function () {
//             var result = this._execute('planarEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the edge the hole is positioned on.
//     Object.defineProperty(adsk.fusion.OnEdgeHolePositionDefinition.prototype, 'edge', {
//         get : function () {
//             var result = this._execute('edge');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
//         }
//     });

//     // Returns the position of the hole on the edge.
//     // The hole can be at the start, midpoint, or end of the edge.
//     Object.defineProperty(adsk.fusion.OnEdgeHolePositionDefinition.prototype, 'position', {
//         get : function () {
//             var result = this._execute('position');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== OneSideToExtentDefinition ============
//     // Defines the inputs for a OneSideToExtentDefinition object.
//     // This defines a feature extent that goes up to a face or construction plane in one direction.
//     adsk.fusion.OneSideToExtentDefinition = function OneSideToExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.OneSideToExtentDefinition)) {
//             return adsk.fusion.OneSideToExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.OneSideToExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.OneSideToExtentDefinition.prototype.constructor = adsk.fusion.OneSideToExtentDefinition;
//     adsk.fusion.OneSideToExtentDefinition.interfaceId = 'adsk.fusion.OneSideToExtentDefinition';
//     adsk.objectTypes['adsk.fusion.OneSideToExtentDefinition'] = adsk.fusion.OneSideToExtentDefinition;
//     adsk.fusion.OneSideToExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.OneSideToExtentDefinition ? object : null;
//     };

//     // Gets and sets the entity that defines the extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with.
//     Object.defineProperty(adsk.fusion.OneSideToExtentDefinition.prototype, 'toEntity', {
//         get : function () {
//             var result = this._execute('toEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('toEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies if the face should be extended or use adjacent faces if necessary to define the termination
//     // of the extrusion.
//     // When used for a revolve feature this is ignored and is always treated as true.
//     Object.defineProperty(adsk.fusion.OneSideToExtentDefinition.prototype, 'matchShape', {
//         get : function () {
//             var result = this._execute('matchShape');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('matchShape', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== PatchFeature ============
//     // Object that represents an existing patch feature in a design.
//     adsk.fusion.PatchFeature = function PatchFeature(handle) {
//         if (!(this instanceof adsk.fusion.PatchFeature)) {
//             return adsk.fusion.PatchFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.PatchFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.PatchFeature.prototype.constructor = adsk.fusion.PatchFeature;
//     adsk.fusion.PatchFeature.interfaceId = 'adsk.fusion.PatchFeature';
//     adsk.objectTypes['adsk.fusion.PatchFeature'] = adsk.fusion.PatchFeature;
//     adsk.fusion.PatchFeature.cast = function (object) {
//         return object instanceof adsk.fusion.PatchFeature ? object : null;
//     };

//     //=========== PathPatternFeature ============
//     // Object that represents an existing path pattern feature in a design.
//     adsk.fusion.PathPatternFeature = function PathPatternFeature(handle) {
//         if (!(this instanceof adsk.fusion.PathPatternFeature)) {
//             return adsk.fusion.PathPatternFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.PathPatternFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.PathPatternFeature.prototype.constructor = adsk.fusion.PathPatternFeature;
//     adsk.fusion.PathPatternFeature.interfaceId = 'adsk.fusion.PathPatternFeature';
//     adsk.objectTypes['adsk.fusion.PathPatternFeature'] = adsk.fusion.PathPatternFeature;
//     adsk.fusion.PathPatternFeature.cast = function (object) {
//         return object instanceof adsk.fusion.PathPatternFeature ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the path to create the pattern on path.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'path', {
//         get : function () {
//             var result = this._execute('path');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Path)) { throw new TypeError('value must be a adsk.fusion.Path'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('path', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the quantity of the elements.
//     // Edit the value through ModelParameter.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'quantity', {
//         get : function () {
//             var result = this._execute('quantity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the distance.
//     // Edit the value through ModelParameter.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'distance', {
//         get : function () {
//             var result = this._execute('distance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets the start point on the path to count the distance.
//     // It's between 0 and 1. 0 means start point of the path, 1 means end point of the path.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'startPoint', {
//         get : function () {
//             var result = this._execute('startPoint');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('startPoint', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if flip the direction from start point.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'isFlipDirection', {
//         get : function () {
//             var result = this._execute('isFlipDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFlipDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets how the distance between elements is computed.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'patternDistanceType', {
//         get : function () {
//             var result = this._execute('patternDistanceType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternDistanceType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the pattern is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the orientation is along path.
//     // If false, the orientation is identical.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'isOrientationAlongPath', {
//         get : function () {
//             var result = this._execute('isOrientationAlongPath');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isOrientationAlongPath', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the id's of the elements to suppress.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'suppressedElementsIds', {
//         get : function () {
//             var result = this._execute('suppressedElementsIds');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
//             var valueLength = value.length;
//             var valueIt;
//             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
//                 if (!isFinite(value[valueIt])) { throw new TypeError('value[valueIt] must be a number'); }
//             }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('suppressedElementsIds', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the PatternElements collection that contains the elements created by this pattern.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'patternElements', {
//         get : function () {
//             var result = this._execute('patternElements');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatternElements) : null;
//         }
//     });

//     // Get the features that were created for this mirror.
//     // Returns null in the case where the feature is parametric.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'resultFeatures', {
//         get : function () {
//             var result = this._execute('resultFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeature) : null;
//         }
//     });

//     // Returns the type of entities the pattern consists of. This can be used to help
//     // determine the type of results that will be found in the pattern elements.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'patternEntityType', {
//         get : function () {
//             var result = this._execute('patternEntityType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the compute option for this pattern feature.
//     // This property only applies when patterning features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.PathPatternFeature.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.PathPatternFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PathPatternFeature) : null;
//     };

//     //=========== PipeFeature ============
//     // Object that represents an existing pipe feature in a design.
//     adsk.fusion.PipeFeature = function PipeFeature(handle) {
//         if (!(this instanceof adsk.fusion.PipeFeature)) {
//             return adsk.fusion.PipeFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.PipeFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.PipeFeature.prototype.constructor = adsk.fusion.PipeFeature;
//     adsk.fusion.PipeFeature.interfaceId = 'adsk.fusion.PipeFeature';
//     adsk.objectTypes['adsk.fusion.PipeFeature'] = adsk.fusion.PipeFeature;
//     adsk.fusion.PipeFeature.cast = function (object) {
//         return object instanceof adsk.fusion.PipeFeature ? object : null;
//     };

//     //=========== PlaneAndOffsetsHolePositionDefinition ============
//     // Provides positioning information for a hole that is positioned on a plane
//     // and at a distance from one or two edges.
//     adsk.fusion.PlaneAndOffsetsHolePositionDefinition = function PlaneAndOffsetsHolePositionDefinition(handle) {
//         if (!(this instanceof adsk.fusion.PlaneAndOffsetsHolePositionDefinition)) {
//             return adsk.fusion.PlaneAndOffsetsHolePositionDefinition.cast(handle);
//         }
//         adsk.fusion.HolePositionDefinition.call(this, handle);
//     };
//     adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype = Object.create(adsk.fusion.HolePositionDefinition.prototype);
//     adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype.constructor = adsk.fusion.PlaneAndOffsetsHolePositionDefinition;
//     adsk.fusion.PlaneAndOffsetsHolePositionDefinition.interfaceId = 'adsk.fusion.PlaneAndOffsetsHolePositionDefinition';
//     adsk.objectTypes['adsk.fusion.PlaneAndOffsetsHolePositionDefinition'] = adsk.fusion.PlaneAndOffsetsHolePositionDefinition;
//     adsk.fusion.PlaneAndOffsetsHolePositionDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.PlaneAndOffsetsHolePositionDefinition ? object : null;
//     };

//     // Returns the plane that defines the orientation and start of the hole.
//     Object.defineProperty(adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype, 'planarEntity', {
//         get : function () {
//             var result = this._execute('planarEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // The first of 2 edges the hole position is measured from. OffsetOne provides access to
//     // the model parameter controlling the offset distance.
//     Object.defineProperty(adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype, 'edgeOne', {
//         get : function () {
//             var result = this._execute('edgeOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
//         }
//     });

//     // Returns the model parameter controlling the distance from the center of the hole
//     // to EdgeOne.
//     Object.defineProperty(adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype, 'offsetOne', {
//         get : function () {
//             var result = this._execute('offsetOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // The second of two edges the hole position is measured from. OffsetTwo provides access
//     // to the model parameter controlling the offset distance. This property can return null
//     // in the case where only one edge is used.
//     Object.defineProperty(adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype, 'edgeTwo', {
//         get : function () {
//             var result = this._execute('edgeTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepEdge) : null;
//         }
//     });

//     // Returns the model parameter controlling the distance from the center of the hole
//     // to EdgeTwo. This property returns null in the case where only one edge is used.
//     Object.defineProperty(adsk.fusion.PlaneAndOffsetsHolePositionDefinition.prototype, 'offsetTwo', {
//         get : function () {
//             var result = this._execute('offsetTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== PointHolePositionDefinition ============
//     // Provides positioning information for a hole that is positioned relative to a 3D coordinate
//     // point.
//     adsk.fusion.PointHolePositionDefinition = function PointHolePositionDefinition(handle) {
//         if (!(this instanceof adsk.fusion.PointHolePositionDefinition)) {
//             return adsk.fusion.PointHolePositionDefinition.cast(handle);
//         }
//         adsk.fusion.HolePositionDefinition.call(this, handle);
//     };
//     adsk.fusion.PointHolePositionDefinition.prototype = Object.create(adsk.fusion.HolePositionDefinition.prototype);
//     adsk.fusion.PointHolePositionDefinition.prototype.constructor = adsk.fusion.PointHolePositionDefinition;
//     adsk.fusion.PointHolePositionDefinition.interfaceId = 'adsk.fusion.PointHolePositionDefinition';
//     adsk.objectTypes['adsk.fusion.PointHolePositionDefinition'] = adsk.fusion.PointHolePositionDefinition;
//     adsk.fusion.PointHolePositionDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.PointHolePositionDefinition ? object : null;
//     };

//     // Returns the plane that defines the orientation and start of the hole.
//     Object.defineProperty(adsk.fusion.PointHolePositionDefinition.prototype, 'planarEntity', {
//         get : function () {
//             var result = this._execute('planarEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the coordinates defining the position of the hole.
//     Object.defineProperty(adsk.fusion.PointHolePositionDefinition.prototype, 'point', {
//         get : function () {
//             var result = this._execute('point');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     //=========== RectangularPatternFeature ============
//     // Object that represents an existing rectangular pattern feature in a design.
//     adsk.fusion.RectangularPatternFeature = function RectangularPatternFeature(handle) {
//         if (!(this instanceof adsk.fusion.RectangularPatternFeature)) {
//             return adsk.fusion.RectangularPatternFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.RectangularPatternFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.RectangularPatternFeature.prototype.constructor = adsk.fusion.RectangularPatternFeature;
//     adsk.fusion.RectangularPatternFeature.interfaceId = 'adsk.fusion.RectangularPatternFeature';
//     adsk.objectTypes['adsk.fusion.RectangularPatternFeature'] = adsk.fusion.RectangularPatternFeature;
//     adsk.fusion.RectangularPatternFeature.cast = function (object) {
//         return object instanceof adsk.fusion.RectangularPatternFeature ? object : null;
//     };

//     // Gets and sets the input entities. The collection can contain faces, features, bodies or occurrences.
//     // All of the entities must be of a single type. For example, it can't contain features and occurrences
//     // but only features or occurrences.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the first direction entity.
//     // This can be a linear edge, construction axis, sketch line or rectangular pattern feature.
//     // If a rectangular pattern feature is set, the directionOneEntity and directionTwoEntity properties return the same rectangular pattern feature.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'directionOneEntity', {
//         get : function () {
//             var result = this._execute('directionOneEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('directionOneEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the second direction entity.
//     // This can be a linear edge, construction axis, sketch line or rectangular pattern feature.
//     // If a rectangular pattern feature is set, the directionOneEntity and directionTwoEntity properties return the same rectangular pattern feature.
//     // This can be null when not entity has been specified to control the second direction. In this case Fusion will compute a default direction which is
//     // 90 degrees to the direction one.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'directionTwoEntity', {
//         get : function () {
//             var result = this._execute('directionTwoEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('directionTwoEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a Vector3D indicating the positive direction of direction one.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'directionOne', {
//         get : function () {
//             var result = this._execute('directionOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns a Vector3D indicating the positive direction of direction two.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'directionTwo', {
//         get : function () {
//             var result = this._execute('directionTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets the number of instances in the first direction.
//     // Edit the value through ModelParameter.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'quantityOne', {
//         get : function () {
//             var result = this._execute('quantityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the number of instances in the second direction.
//     // Edit the value through ModelParameter.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'quantityTwo', {
//         get : function () {
//             var result = this._execute('quantityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the distance in the first direction.
//     // Edit the value through ModelParameter.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'distanceOne', {
//         get : function () {
//             var result = this._execute('distanceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the distance in the second direction.
//     // Edit the value through ModelParameter.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'distanceTwo', {
//         get : function () {
//             var result = this._execute('distanceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets if the pattern in direction one is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'isSymmetricInDirectionOne', {
//         get : function () {
//             var result = this._execute('isSymmetricInDirectionOne');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetricInDirectionOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the pattern in direction two is in one direction or symmetric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'isSymmetricInDirectionTwo', {
//         get : function () {
//             var result = this._execute('isSymmetricInDirectionTwo');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetricInDirectionTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets how the distance between elements is computed. Is initialized to ExtentPatternDistanceType when a new
//     // RectangularPatternFeatureInput has been created.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'patternDistanceType', {
//         get : function () {
//             var result = this._execute('patternDistanceType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternDistanceType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the ids of the patterns to suppress.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'suppressedElementsIds', {
//         get : function () {
//             var result = this._execute('suppressedElementsIds');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
//             var valueLength = value.length;
//             var valueIt;
//             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
//                 if (!isFinite(value[valueIt])) { throw new TypeError('value[valueIt] must be a number'); }
//             }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('suppressedElementsIds', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the PatternElements collection that contains the elements created by this pattern.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'patternElements', {
//         get : function () {
//             var result = this._execute('patternElements');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PatternElements) : null;
//         }
//     });

//     // Get the features that were created for this pattern.
//     // Returns null in the case where the feature is parametric.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'resultFeatures', {
//         get : function () {
//             var result = this._execute('resultFeatures');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeature) : null;
//         }
//     });

//     // Returns the type of entities the pattern consists of. This can be used to help
//     // determine the type of results that will be found in the pattern elements.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'patternEntityType', {
//         get : function () {
//             var result = this._execute('patternEntityType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the compute option for this pattern feature.
//     // This property only applies when patterning features and is ignored in the direct modeling environment.
//     Object.defineProperty(adsk.fusion.RectangularPatternFeature.prototype, 'patternComputeOption', {
//         get : function () {
//             var result = this._execute('patternComputeOption');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('patternComputeOption', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.RectangularPatternFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RectangularPatternFeature) : null;
//     };

//     //=========== RemoveFeature ============
//     // Object that represents an existing Remove feature in a design.
//     adsk.fusion.RemoveFeature = function RemoveFeature(handle) {
//         if (!(this instanceof adsk.fusion.RemoveFeature)) {
//             return adsk.fusion.RemoveFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.RemoveFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.RemoveFeature.prototype.constructor = adsk.fusion.RemoveFeature;
//     adsk.fusion.RemoveFeature.interfaceId = 'adsk.fusion.RemoveFeature';
//     adsk.objectTypes['adsk.fusion.RemoveFeature'] = adsk.fusion.RemoveFeature;
//     adsk.fusion.RemoveFeature.cast = function (object) {
//         return object instanceof adsk.fusion.RemoveFeature ? object : null;
//     };

//     // Gets and sets the body or component occurrence to remove. In order to access (get) the item
//     // removed, you must roll the timeline back to just before the remove feature whose item you want to access.
//     Object.defineProperty(adsk.fusion.RemoveFeature.prototype, 'itemToRemove', {
//         get : function () {
//             var result = this._execute('itemToRemove');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.RemoveFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RemoveFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.RemoveFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RemoveFeature) : null;
//     };

//     //=========== ReplaceFaceFeature ============
//     // Object that represents an existing replace face feature in a design.
//     adsk.fusion.ReplaceFaceFeature = function ReplaceFaceFeature(handle) {
//         if (!(this instanceof adsk.fusion.ReplaceFaceFeature)) {
//             return adsk.fusion.ReplaceFaceFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ReplaceFaceFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ReplaceFaceFeature.prototype.constructor = adsk.fusion.ReplaceFaceFeature;
//     adsk.fusion.ReplaceFaceFeature.interfaceId = 'adsk.fusion.ReplaceFaceFeature';
//     adsk.objectTypes['adsk.fusion.ReplaceFaceFeature'] = adsk.fusion.ReplaceFaceFeature;
//     adsk.fusion.ReplaceFaceFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ReplaceFaceFeature ? object : null;
//     };

//     // Gets and sets the entities that define the target faces. The new faces must completely intersect the part.
//     // The collection can contain the surface faces, surface bodies and construction planes.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeature.prototype, 'targetFaces', {
//         get : function () {
//             var result = this._execute('targetFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('targetFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if any faces that are tangentially connected to any of
//     // the input faces will also be included in setting InputEntities.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeature.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ReplaceFaceFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeature) : null;
//         }
//     });

//     // Method that sets faces to replace.
//     // sourceFaces : The collection can contain the faces from a solid and/or from features. All the faces must be on the same body.
//     // isTangentChain : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will also be included. A value of true indicates that tangent
//     // faces will be included.
//     // Returns true if successful.
//     adsk.fusion.ReplaceFaceFeature.prototype.setInputEntities = function (sourceFaces, isTangentChain) {
//         if (sourceFaces !== null && !(sourceFaces instanceof adsk.core.ObjectCollection)) { throw new TypeError('sourceFaces must be a adsk.core.ObjectCollection'); }
//         if (typeof isTangentChain !== 'boolean') { throw new TypeError('isTangentChain must be a boolean'); }
//         var args = {
//             sourceFaces : (sourceFaces === null ? sourceFaces : sourceFaces.handle),
//             isTangentChain : isTangentChain
//         };
//         var result = this._execute('setInputEntities', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ReplaceFaceFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReplaceFaceFeature) : null;
//     };

//     //=========== ReverseNormalFeature ============
//     // Object that represents an existing Reverse Normal feature in a design.
//     adsk.fusion.ReverseNormalFeature = function ReverseNormalFeature(handle) {
//         if (!(this instanceof adsk.fusion.ReverseNormalFeature)) {
//             return adsk.fusion.ReverseNormalFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ReverseNormalFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ReverseNormalFeature.prototype.constructor = adsk.fusion.ReverseNormalFeature;
//     adsk.fusion.ReverseNormalFeature.interfaceId = 'adsk.fusion.ReverseNormalFeature';
//     adsk.objectTypes['adsk.fusion.ReverseNormalFeature'] = adsk.fusion.ReverseNormalFeature;
//     adsk.fusion.ReverseNormalFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ReverseNormalFeature ? object : null;
//     };

//     // Gets and sets the surface bodies (open BRepBodies) whose faces normals are to be reversed.
//     // All faces of the input surface bodies get reversed.
//     Object.defineProperty(adsk.fusion.ReverseNormalFeature.prototype, 'surfaces', {
//         get : function () {
//             var result = this._execute('surfaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('surfaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ReverseNormalFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReverseNormalFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.ReverseNormalFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ReverseNormalFeature) : null;
//     };

//     //=========== RevolveFeature ============
//     // Object that represents an existing revolve feature in a design.
//     adsk.fusion.RevolveFeature = function RevolveFeature(handle) {
//         if (!(this instanceof adsk.fusion.RevolveFeature)) {
//             return adsk.fusion.RevolveFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.RevolveFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.RevolveFeature.prototype.constructor = adsk.fusion.RevolveFeature;
//     adsk.fusion.RevolveFeature.interfaceId = 'adsk.fusion.RevolveFeature';
//     adsk.objectTypes['adsk.fusion.RevolveFeature'] = adsk.fusion.RevolveFeature;
//     adsk.fusion.RevolveFeature.cast = function (object) {
//         return object instanceof adsk.fusion.RevolveFeature ? object : null;
//     };

//     // Gets and sets the profiles or planar faces used to define the shape of the revolve.
//     // This property can return or be set with a single Profile, a single planar face, or
//     // an ObjectCollection consisting of multiple profiles and planar faces. When an
//     // ObjectCollection is used all of the profiles and faces must be co-planar.
//     // This property returns null in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'profile', {
//         get : function () {
//             var result = this._execute('profile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('profile', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity used to define the axis of revolution.
//     // The axis can be a sketch line, construction axis, or linear edge. If it is not in
//     // the same plane as the profile, it is projected onto the profile plane.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'axis', {
//         get : function () {
//             var result = this._execute('axis');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('axis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the type of operation performed by the revolve.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the definition object that is defining the extent of the revolve. Modifying the
//     // definition object will cause the revolve to recompute. Various types of objects can
//     // be returned depending on the type of extent currently defined for the revolve.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'extentDefinition', {
//         get : function () {
//             var result = this._execute('extentDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ExtentDefinition) : null;
//         }
//     });

//     // Property that returns the set of faces that cap one end of the revolve and are coincident
//     // with the sketch plane. In the case of a symmetric revolve these faces are the ones on the
//     // positive normal side of the sketch plane. In the case where there aren't any start faces,
//     // this property will return null.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'startFaces', {
//         get : function () {
//             var result = this._execute('startFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns the set of faces that cap the end of the revolve opposite the
//     // start faces. In the case where there aren't any start faces, this property will return null.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'endFaces', {
//         get : function () {
//             var result = this._execute('endFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns all of the faces created around the perimeter of the feature.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'sideFaces', {
//         get : function () {
//             var result = this._execute('sideFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeature) : null;
//         }
//     });

//     // Indicates if this feature was initially created as a solid or a surface.
//     Object.defineProperty(adsk.fusion.RevolveFeature.prototype, 'isSolid', {
//         get : function () {
//             var result = this._execute('isSolid');
//             return result ? result.value : undefined;
//         }
//     });

//     // Defines the extent of the revolution to be at a defined angle.
//     // isSymmetric : Boolean that specifies if the extent is symmetric or not.
//     // angle : ValueInput object that defines the angle. This can be a string or a value. If
//     // it's a string it is interpreted using the current document units and can include
//     // equations. For example all of the following are valid as long as they result in
//     // angle units; "45", "45 deg", "a1 / 2". If a value is input it is interpreted
//     // as radians.
//     // If isSymmetric is false a positive or negative angle can be
//     // used to control the direction. If isSymmetric is true, the angle is the extent in one
//     // direction so the entire angle of the revolution will be twice the specified angle.
//     // Use an angle of 360 deg or 2 pi radians to create a full revolve.
//     // Returns true if successful
//     adsk.fusion.RevolveFeature.prototype.setAngleExtent = function (isSymmetric, angle) {
//         if (typeof isSymmetric !== 'boolean') { throw new TypeError('isSymmetric must be a boolean'); }
//         if (angle !== null && !(angle instanceof adsk.core.ValueInput)) { throw new TypeError('angle must be a adsk.core.ValueInput'); }
//         var args = {
//             isSymmetric : isSymmetric,
//             angle : (angle === null ? angle : angle.handle)
//         };
//         var result = this._execute('setAngleExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Changes the extent of the revolve to be defined as a two sided angle extent.
//     // angleOne : ValueInput object that defines the first angle. This can be a string or a value. If
//     // it's a string it is interpreted using the current document units and can include
//     // equations. For example all of the following are valid as long as they result in
//     // angle units; "45", "45 deg", "a1 / 2". If a value is input it is interpreted
//     // as radians.
//     // angleTwo : ValueInput object that defines the second angle. This can be a string or a value. If
//     // it's a string it is interpreted using the current document units and can include
//     // equations. For example all of the following are valid as long as they result in
//     // angle units; "45", "45 deg", "a1 / 2". If a value is input it is interpreted
//     // as radians.
//     // Returns true if successful
//     adsk.fusion.RevolveFeature.prototype.setTwoSideAngleExtent = function (angleOne, angleTwo) {
//         if (angleOne !== null && !(angleOne instanceof adsk.core.ValueInput)) { throw new TypeError('angleOne must be a adsk.core.ValueInput'); }
//         if (angleTwo !== null && !(angleTwo instanceof adsk.core.ValueInput)) { throw new TypeError('angleTwo must be a adsk.core.ValueInput'); }
//         var args = {
//             angleOne : (angleOne === null ? angleOne : angleOne.handle),
//             angleTwo : (angleTwo === null ? angleTwo : angleTwo.handle)
//         };
//         var result = this._execute('setTwoSideAngleExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Changes the extent of the revolve to be from the sketch plane to the specified "to" face.
//     // toEntity : The entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For a revolve it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // directionHint : Specifies the direction of the revolve.
//     // Returns true if successful.
//     adsk.fusion.RevolveFeature.prototype.setOneSideToExtent = function (toEntity, directionHint) {
//         if (toEntity !== null && !(toEntity instanceof adsk.core.Base)) { throw new TypeError('toEntity must be a adsk.core.Base'); }
//         if (directionHint === null || (directionHint !== undefined && directionHint !== null && !(directionHint instanceof adsk.core.Vector3D))) { throw new TypeError('directionHint must be a adsk.core.Vector3D'); }
//         var args = {
//             toEntity : (toEntity === null ? toEntity : toEntity.handle)
//         };
//         if (directionHint !== undefined) {
//             args.directionHint = (directionHint === null ? directionHint : directionHint.handle);
//         }
//         var result = this._execute('setOneSideToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Changes the extent of the revolve to be defined as a two sided to extent.
//     // toEntityOne : The first entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For a revolve it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // toEntityTwo : The second entity that defines the "to" extent. The valid types of entities can vary depending on
//     // the type of feature this is being used with. For a revolve it can be a BRepBody, BRepFace,
//     // BRepVertex, ConstructionPlane, or ConstructionPoint.
//     // Returns true if successful
//     adsk.fusion.RevolveFeature.prototype.setTwoSidesToExtent = function (toEntityOne, toEntityTwo) {
//         if (toEntityOne !== null && !(toEntityOne instanceof adsk.core.Base)) { throw new TypeError('toEntityOne must be a adsk.core.Base'); }
//         if (toEntityTwo !== null && !(toEntityTwo instanceof adsk.core.Base)) { throw new TypeError('toEntityTwo must be a adsk.core.Base'); }
//         var args = {
//             toEntityOne : (toEntityOne === null ? toEntityOne : toEntityOne.handle),
//             toEntityTwo : (toEntityTwo === null ? toEntityTwo : toEntityTwo.handle)
//         };
//         var result = this._execute('setTwoSidesToExtent', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.RevolveFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RevolveFeature) : null;
//     };

//     //=========== RibFeature ============
//     // Object that represents an existing Rib feature in a design.
//     adsk.fusion.RibFeature = function RibFeature(handle) {
//         if (!(this instanceof adsk.fusion.RibFeature)) {
//             return adsk.fusion.RibFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.RibFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.RibFeature.prototype.constructor = adsk.fusion.RibFeature;
//     adsk.fusion.RibFeature.interfaceId = 'adsk.fusion.RibFeature';
//     adsk.objectTypes['adsk.fusion.RibFeature'] = adsk.fusion.RibFeature;
//     adsk.fusion.RibFeature.cast = function (object) {
//         return object instanceof adsk.fusion.RibFeature ? object : null;
//     };

//     //=========== RuleFilletFeature ============
//     // Object that represents an existing rule fillet feature in a design.
//     adsk.fusion.RuleFilletFeature = function RuleFilletFeature(handle) {
//         if (!(this instanceof adsk.fusion.RuleFilletFeature)) {
//             return adsk.fusion.RuleFilletFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.RuleFilletFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.RuleFilletFeature.prototype.constructor = adsk.fusion.RuleFilletFeature;
//     adsk.fusion.RuleFilletFeature.interfaceId = 'adsk.fusion.RuleFilletFeature';
//     adsk.objectTypes['adsk.fusion.RuleFilletFeature'] = adsk.fusion.RuleFilletFeature;
//     adsk.fusion.RuleFilletFeature.cast = function (object) {
//         return object instanceof adsk.fusion.RuleFilletFeature ? object : null;
//     };

//     //=========== ScaleFeature ============
//     // Object that represents an existing scale feature in a design.
//     adsk.fusion.ScaleFeature = function ScaleFeature(handle) {
//         if (!(this instanceof adsk.fusion.ScaleFeature)) {
//             return adsk.fusion.ScaleFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ScaleFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ScaleFeature.prototype.constructor = adsk.fusion.ScaleFeature;
//     adsk.fusion.ScaleFeature.interfaceId = 'adsk.fusion.ScaleFeature';
//     adsk.objectTypes['adsk.fusion.ScaleFeature'] = adsk.fusion.ScaleFeature;
//     adsk.fusion.ScaleFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ScaleFeature ? object : null;
//     };

//     // Gets and sets the input entities.
//     // This collection can contain sketches, BRep bodies and T-Spline bodies in parametric modeling.
//     // It can contain sketches, BRep bodies, T-Spline bodies, mesh bodies, root component and occurrences in non-parametric modeling.
//     // If the scaling is non-uniform (the isUniform property is false), this collection cannot contain sketches or components.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the point as reference to scale. This can be a BRepVertex, a SketchPoint or a ConstructionPoint.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'point', {
//         get : function () {
//             var result = this._execute('point');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('point', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if it's uniform scale.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'isUniform', {
//         get : function () {
//             var result = this._execute('isUniform');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter that controls the uniform scale factor. This will return null in the case
//     // where isUniform is false or the feature is non-parametric. You can use the properties and
//     // methods on the ModelParameter object to get and set the value.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'scaleFactor', {
//         get : function () {
//             var result = this._execute('scaleFactor');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the parameter that controls the X scale factor. This will return null in the case
//     // where isUniform is false or the feature is non-parametric. You can use the properties and
//     // methods on the ModelParameter object to get and set the value.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'xScale', {
//         get : function () {
//             var result = this._execute('xScale');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the parameter that controls the Y scale factor. This will return null in the case
//     // where isUniform is false or the feature is non-parametric. You can use the properties and
//     // methods on the ModelParameter object to get and set the value.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'yScale', {
//         get : function () {
//             var result = this._execute('yScale');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the parameter that controls the Z scale factor. This will return null in the case
//     // where isUniform is false or the feature is non-parametric. You can use the properties and
//     // methods on the ModelParameter object to get and set the value.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'zScale', {
//         get : function () {
//             var result = this._execute('zScale');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ScaleFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeature) : null;
//         }
//     });

//     // Calling this method will change to a uniform scale.
//     // The isUniform is set to true if successful.
//     // scaleFactor : A ValueInput object that defines the scale factor.
//     // Returns true if successful.
//     adsk.fusion.ScaleFeature.prototype.setToUniform = function (scaleFactor) {
//         if (scaleFactor !== null && !(scaleFactor instanceof adsk.core.ValueInput)) { throw new TypeError('scaleFactor must be a adsk.core.ValueInput'); }
//         var args = {
//             scaleFactor : (scaleFactor === null ? scaleFactor : scaleFactor.handle)
//         };
//         var result = this._execute('setToUniform', args);
//         return result ? result.value : undefined;
//     };

//     // Calling this method will change to a non-uniform scale.
//     // Fails of the inputEntities collection contains sketches or components.
//     // The isUniform is set to false if successful.
//     // xScale : A ValueInput object that defines the scale in the X direction.
//     // yScale : A ValueInput object that defines the scale in the Y direction.
//     // zScale : A ValueInput object that defines the scale in the Z direction.
//     // Returns true if successful.
//     adsk.fusion.ScaleFeature.prototype.setToNonUniform = function (xScale, yScale, zScale) {
//         if (xScale !== null && !(xScale instanceof adsk.core.ValueInput)) { throw new TypeError('xScale must be a adsk.core.ValueInput'); }
//         if (yScale !== null && !(yScale instanceof adsk.core.ValueInput)) { throw new TypeError('yScale must be a adsk.core.ValueInput'); }
//         if (zScale !== null && !(zScale instanceof adsk.core.ValueInput)) { throw new TypeError('zScale must be a adsk.core.ValueInput'); }
//         var args = {
//             xScale : (xScale === null ? xScale : xScale.handle),
//             yScale : (yScale === null ? yScale : yScale.handle),
//             zScale : (zScale === null ? zScale : zScale.handle)
//         };
//         var result = this._execute('setToNonUniform', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ScaleFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ScaleFeature) : null;
//     };

//     //=========== ShellFeature ============
//     // Object that represents an existing shell feature in a design.
//     adsk.fusion.ShellFeature = function ShellFeature(handle) {
//         if (!(this instanceof adsk.fusion.ShellFeature)) {
//             return adsk.fusion.ShellFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ShellFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ShellFeature.prototype.constructor = adsk.fusion.ShellFeature;
//     adsk.fusion.ShellFeature.interfaceId = 'adsk.fusion.ShellFeature';
//     adsk.objectTypes['adsk.fusion.ShellFeature'] = adsk.fusion.ShellFeature;
//     adsk.fusion.ShellFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ShellFeature ? object : null;
//     };

//     // Gets the input faces/bodies.
//     Object.defineProperty(adsk.fusion.ShellFeature.prototype, 'inputEntities', {
//         get : function () {
//             var result = this._execute('inputEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // Gets if any faces that are tangentially connected to any of
//     // the input faces will also be included in setting InputEntities.
//     Object.defineProperty(adsk.fusion.ShellFeature.prototype, 'isTangentChain', {
//         get : function () {
//             var result = this._execute('isTangentChain');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the inside thickness.
//     // Edit the thickness through ModelParameter.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ShellFeature.prototype, 'insideThickness', {
//         get : function () {
//             var result = this._execute('insideThickness');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the outside thickness.
//     // Edit the thickness through ModelParameter.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ShellFeature.prototype, 'outsideThickness', {
//         get : function () {
//             var result = this._execute('outsideThickness');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ShellFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeature) : null;
//         }
//     });

//     // Method that sets faces to remove and bodies to preform shell. Return false if any faces are input, and the owning bodies of the faces are also input.
//     // inputEntities : The collection contains the faces to remove and the bodies to perform shell.
//     // Fails if any faces are input, and the owning bodies of the faces are also input.
//     // isTangentChain : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will also be included. It defaults to true.
//     // Returns true if successful
//     adsk.fusion.ShellFeature.prototype.setInputEntities = function (inputEntities, isTangentChain) {
//         if (inputEntities !== null && !(inputEntities instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputEntities must be a adsk.core.ObjectCollection'); }
//         if (isTangentChain === null || (isTangentChain !== undefined && typeof isTangentChain !== 'boolean')) { throw new TypeError('isTangentChain must be a boolean'); }
//         var args = {
//             inputEntities : (inputEntities === null ? inputEntities : inputEntities.handle)
//         };
//         if (isTangentChain !== undefined) {
//             args.isTangentChain = isTangentChain;
//         }
//         var result = this._execute('setInputEntities', args);
//         return result ? result.value : undefined;
//     };

//     // Method that sets inside and outside thicknesses of the shell.
//     // insideThickness : ValueInput object that defines the inside thickness. If set to null, remove the existing inside thickness.
//     // outsideThickness : ValueInput object that defines the outside thickness. If set to null, remove the existing outside thickness.
//     // Returns true if successful
//     adsk.fusion.ShellFeature.prototype.setThicknesses = function (insideThickness, outsideThickness) {
//         if (insideThickness !== null && !(insideThickness instanceof adsk.core.ValueInput)) { throw new TypeError('insideThickness must be a adsk.core.ValueInput'); }
//         if (outsideThickness !== null && !(outsideThickness instanceof adsk.core.ValueInput)) { throw new TypeError('outsideThickness must be a adsk.core.ValueInput'); }
//         var args = {
//             insideThickness : (insideThickness === null ? insideThickness : insideThickness.handle),
//             outsideThickness : (outsideThickness === null ? outsideThickness : outsideThickness.handle)
//         };
//         var result = this._execute('setThicknesses', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ShellFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ShellFeature) : null;
//     };

//     //=========== SilhouetteSplitFeature ============
//     // Object that represents an existing silhouette split feature in a design.
//     adsk.fusion.SilhouetteSplitFeature = function SilhouetteSplitFeature(handle) {
//         if (!(this instanceof adsk.fusion.SilhouetteSplitFeature)) {
//             return adsk.fusion.SilhouetteSplitFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.SilhouetteSplitFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.SilhouetteSplitFeature.prototype.constructor = adsk.fusion.SilhouetteSplitFeature;
//     adsk.fusion.SilhouetteSplitFeature.interfaceId = 'adsk.fusion.SilhouetteSplitFeature';
//     adsk.objectTypes['adsk.fusion.SilhouetteSplitFeature'] = adsk.fusion.SilhouetteSplitFeature;
//     adsk.fusion.SilhouetteSplitFeature.cast = function (object) {
//         return object instanceof adsk.fusion.SilhouetteSplitFeature ? object : null;
//     };

//     // Gets and sets the entity that defines the silhouette view direction, which can be a
//     // construction axis, linear BRepEdge, planar BRepFace or a construction plane.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeature.prototype, 'viewDirection', {
//         get : function () {
//             var result = this._execute('viewDirection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('viewDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the solid body to split.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeature.prototype, 'targetBody', {
//         get : function () {
//             var result = this._execute('targetBody');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBody) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.BRepBody)) { throw new TypeError('value must be a adsk.fusion.BRepBody'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('targetBody', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the type of silhouette split operation.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SilhouetteSplitFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.SilhouetteSplitFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SilhouetteSplitFeature) : null;
//     };

//     //=========== SketchPointHolePositionDefinition ============
//     // Provides positioning information for a hole that is positioned by a sketch point.
//     adsk.fusion.SketchPointHolePositionDefinition = function SketchPointHolePositionDefinition(handle) {
//         if (!(this instanceof adsk.fusion.SketchPointHolePositionDefinition)) {
//             return adsk.fusion.SketchPointHolePositionDefinition.cast(handle);
//         }
//         adsk.fusion.HolePositionDefinition.call(this, handle);
//     };
//     adsk.fusion.SketchPointHolePositionDefinition.prototype = Object.create(adsk.fusion.HolePositionDefinition.prototype);
//     adsk.fusion.SketchPointHolePositionDefinition.prototype.constructor = adsk.fusion.SketchPointHolePositionDefinition;
//     adsk.fusion.SketchPointHolePositionDefinition.interfaceId = 'adsk.fusion.SketchPointHolePositionDefinition';
//     adsk.objectTypes['adsk.fusion.SketchPointHolePositionDefinition'] = adsk.fusion.SketchPointHolePositionDefinition;
//     adsk.fusion.SketchPointHolePositionDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.SketchPointHolePositionDefinition ? object : null;
//     };

//     // Returns the sketch point that defines the center of the hole.
//     Object.defineProperty(adsk.fusion.SketchPointHolePositionDefinition.prototype, 'sketchPoint', {
//         get : function () {
//             var result = this._execute('sketchPoint');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SketchPoint) : null;
//         }
//     });

//     //=========== SphereFeature ============
//     // Object that represents an existing sphere feature in a design.
//     adsk.fusion.SphereFeature = function SphereFeature(handle) {
//         if (!(this instanceof adsk.fusion.SphereFeature)) {
//             return adsk.fusion.SphereFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.SphereFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.SphereFeature.prototype.constructor = adsk.fusion.SphereFeature;
//     adsk.fusion.SphereFeature.interfaceId = 'adsk.fusion.SphereFeature';
//     adsk.objectTypes['adsk.fusion.SphereFeature'] = adsk.fusion.SphereFeature;
//     adsk.fusion.SphereFeature.cast = function (object) {
//         return object instanceof adsk.fusion.SphereFeature ? object : null;
//     };

//     //=========== SplitBodyFeature ============
//     // Object that represents an existing split body feature in a design.
//     adsk.fusion.SplitBodyFeature = function SplitBodyFeature(handle) {
//         if (!(this instanceof adsk.fusion.SplitBodyFeature)) {
//             return adsk.fusion.SplitBodyFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.SplitBodyFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.SplitBodyFeature.prototype.constructor = adsk.fusion.SplitBodyFeature;
//     adsk.fusion.SplitBodyFeature.interfaceId = 'adsk.fusion.SplitBodyFeature';
//     adsk.objectTypes['adsk.fusion.SplitBodyFeature'] = adsk.fusion.SplitBodyFeature;
//     adsk.fusion.SplitBodyFeature.cast = function (object) {
//         return object instanceof adsk.fusion.SplitBodyFeature ? object : null;
//     };

//     // Gets and sets the input solid or open bodies that are split.
//     Object.defineProperty(adsk.fusion.SplitBodyFeature.prototype, 'splitBodies', {
//         get : function () {
//             var result = this._execute('splitBodies');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('splitBodies', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the entity that defines the splitting tool. The splitting tool is a single entity that can be either a
//     // solid body, open body, plane, sketch curve or face that partially or fully intersects the bodyToSplit.
//     Object.defineProperty(adsk.fusion.SplitBodyFeature.prototype, 'splittingTool', {
//         get : function () {
//             var result = this._execute('splittingTool');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Gets whether or not the splitting tool is to be automatically extended (if possible) so as to
//     // completely intersect the bodyToSplit.
//     Object.defineProperty(adsk.fusion.SplitBodyFeature.prototype, 'isSplittingToolExtended', {
//         get : function () {
//             var result = this._execute('isSplittingToolExtended');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SplitBodyFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeature) : null;
//         }
//     });

//     // Sets the splitting tool used for the feature.
//     // splittingTool : Input entity that defines the splitting tool. The splitting tool is a single entity that can be either a solid body,
//     // open body, construction plane, face, or sketch curve that partially or fully intersects the body to split.
//     // isSplittingToolExtended : A boolean value for setting whether or not the splittingTool is to be automatically extended (if possible) so as to
//     // completely intersect the facesToSplit.
//     // Returns true if successful.
//     adsk.fusion.SplitBodyFeature.prototype.setSplittingTool = function (splittingTool, isSplittingToolExtended) {
//         if (splittingTool !== null && !(splittingTool instanceof adsk.core.Base)) { throw new TypeError('splittingTool must be a adsk.core.Base'); }
//         if (typeof isSplittingToolExtended !== 'boolean') { throw new TypeError('isSplittingToolExtended must be a boolean'); }
//         var args = {
//             splittingTool : (splittingTool === null ? splittingTool : splittingTool.handle),
//             isSplittingToolExtended : isSplittingToolExtended
//         };
//         var result = this._execute('setSplittingTool', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.SplitBodyFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitBodyFeature) : null;
//     };

//     //=========== SplitFaceFeature ============
//     // Object that represents an existing split face feature in a design.
//     adsk.fusion.SplitFaceFeature = function SplitFaceFeature(handle) {
//         if (!(this instanceof adsk.fusion.SplitFaceFeature)) {
//             return adsk.fusion.SplitFaceFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.SplitFaceFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.SplitFaceFeature.prototype.constructor = adsk.fusion.SplitFaceFeature;
//     adsk.fusion.SplitFaceFeature.interfaceId = 'adsk.fusion.SplitFaceFeature';
//     adsk.objectTypes['adsk.fusion.SplitFaceFeature'] = adsk.fusion.SplitFaceFeature;
//     adsk.fusion.SplitFaceFeature.cast = function (object) {
//         return object instanceof adsk.fusion.SplitFaceFeature ? object : null;
//     };

//     // Gets and sets the faces to be split.
//     // The collection can contain one or more faces selected from solid and/or open bodies.
//     Object.defineProperty(adsk.fusion.SplitFaceFeature.prototype, 'facesToSplit', {
//         get : function () {
//             var result = this._execute('facesToSplit');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('facesToSplit', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity(s) that define the splitting tool(s). The splitting tool can consist of one or more of
//     // the following: BRepBody, ConstructionPlane, BRepFace, sketch curve that extends or can
//     // be extended beyond the extents of the face.
//     Object.defineProperty(adsk.fusion.SplitFaceFeature.prototype, 'splittingTool', {
//         get : function () {
//             var result = this._execute('splittingTool');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // Gets whether or not the setting to automatically extend the splittingTool was set when the feature was created.
//     Object.defineProperty(adsk.fusion.SplitFaceFeature.prototype, 'isSplittingToolExtended', {
//         get : function () {
//             var result = this._execute('isSplittingToolExtended');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SplitFaceFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeature) : null;
//         }
//     });

//     // Sets the splitting tool used for the feature.
//     // splittingTool : Input entity that defines the splitting tool. The splitting tool is a single entity that can be either a solid body,
//     // open body, construction plane, face, or sketch curve that partially or fully intersects the facesToSplit.
//     // The input for this argument can be one of the valid types or an ObjectCollection in the case where multiple splitting
//     // tools are being defined.
//     // isSplittingToolExtended : A boolean value for setting whether or not the splittingTool is to be automatically extended (if possible) so as to
//     // completely intersect the facesToSplit.
//     // Returns true if successful.
//     adsk.fusion.SplitFaceFeature.prototype.setSplittingTool = function (splittingTool, isSplittingToolExtended) {
//         if (splittingTool !== null && !(splittingTool instanceof adsk.core.Base)) { throw new TypeError('splittingTool must be a adsk.core.Base'); }
//         if (typeof isSplittingToolExtended !== 'boolean') { throw new TypeError('isSplittingToolExtended must be a boolean'); }
//         var args = {
//             splittingTool : (splittingTool === null ? splittingTool : splittingTool.handle),
//             isSplittingToolExtended : isSplittingToolExtended
//         };
//         var result = this._execute('setSplittingTool', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.SplitFaceFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SplitFaceFeature) : null;
//     };

//     //=========== StitchFeature ============
//     // Object that represents an existing stitch feature in a design.
//     adsk.fusion.StitchFeature = function StitchFeature(handle) {
//         if (!(this instanceof adsk.fusion.StitchFeature)) {
//             return adsk.fusion.StitchFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.StitchFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.StitchFeature.prototype.constructor = adsk.fusion.StitchFeature;
//     adsk.fusion.StitchFeature.interfaceId = 'adsk.fusion.StitchFeature';
//     adsk.objectTypes['adsk.fusion.StitchFeature'] = adsk.fusion.StitchFeature;
//     adsk.fusion.StitchFeature.cast = function (object) {
//         return object instanceof adsk.fusion.StitchFeature ? object : null;
//     };

//     // Gets and sets the surfaces to stitch together. In some cases the stitch operation results in
//     // faces being merged so the original faces are no longer available after the feature is created.
//     // in this case you need to reposition the timeline marker to just before this feature
//     // when the faces do exist.
//     Object.defineProperty(adsk.fusion.StitchFeature.prototype, 'stitchSurfaces', {
//         get : function () {
//             var result = this._execute('stitchSurfaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('stitchSurfaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the tolerance. You can edit the tolerance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.StitchFeature.prototype, 'tolerance', {
//         get : function () {
//             var result = this._execute('tolerance');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets the feature operation to perform. This property value is ignored if the stitched result does not
//     // form a solid body.
//     Object.defineProperty(adsk.fusion.StitchFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.StitchFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.StitchFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.StitchFeature) : null;
//     };

//     //=========== SweepFeature ============
//     // Object that represents an existing sweep feature in a design.
//     adsk.fusion.SweepFeature = function SweepFeature(handle) {
//         if (!(this instanceof adsk.fusion.SweepFeature)) {
//             return adsk.fusion.SweepFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.SweepFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.SweepFeature.prototype.constructor = adsk.fusion.SweepFeature;
//     adsk.fusion.SweepFeature.interfaceId = 'adsk.fusion.SweepFeature';
//     adsk.objectTypes['adsk.fusion.SweepFeature'] = adsk.fusion.SweepFeature;
//     adsk.fusion.SweepFeature.cast = function (object) {
//         return object instanceof adsk.fusion.SweepFeature ? object : null;
//     };

//     // Gets and sets the profiles or planar faces used to define the shape of the sweep.
//     // This property can return or be set with a single Profile, a single planar face, or
//     // an ObjectCollection consisting of multiple profiles and planar faces. When an
//     // ObjectCollection is used all of the profiles and faces must be co-planar.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'profile', {
//         get : function () {
//             var result = this._execute('profile');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('profile', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the type of operation performed by the sweep.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the path to create the sweep.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'path', {
//         get : function () {
//             var result = this._execute('path');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Path)) { throw new TypeError('value must be a adsk.fusion.Path'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('path', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the distance for the first side.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'distanceOne', {
//         get : function () {
//             var result = this._execute('distanceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the distance for the second side.
//     // Returns nothing if the path is only on one side of the profile or if the sweep definition includes a guide rail.
//     // It's always the distance against the normal of the profile if available.
//     // This property returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'distanceTwo', {
//         get : function () {
//             var result = this._execute('distanceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets the sweep orientation. It defaults to PerpendicularOrientationType.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'orientation', {
//         get : function () {
//             var result = this._execute('orientation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('orientation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Property that returns the set of that cap one end of the sweep that are coincident with the sketch plane.
//     // In the cases where there aren't any start faces this property will return Nothing.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'startFaces', {
//         get : function () {
//             var result = this._execute('startFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns the set of that cap one end of the sweep that are coincident with the sketch plane.
//     // The end faces are those not coincident to the sketch plane of the feature's profile.
//     // In the case of a symmetric revolution these faces are the ones on the negative normal side of the sketch plane.
//     // In the cases where there aren't any end faces this property will return Nothing.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'endFaces', {
//         get : function () {
//             var result = this._execute('endFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // Property that returns a object that provides access to all of the faces created around the perimeter of the feature.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'sideFaces', {
//         get : function () {
//             var result = this._execute('sideFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFaces) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeature) : null;
//         }
//     });

//     // Indicates if this feature was initially created as a solid or a surface.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'isSolid', {
//         get : function () {
//             var result = this._execute('isSolid');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the guide rail to create the sweep. This can be set to null
//     // to have a path only sweep.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'guideRail', {
//         get : function () {
//             var result = this._execute('guideRail');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Path) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Path)) { throw new TypeError('value must be a adsk.fusion.Path'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('guideRail', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the direction of the sweep is flipped.
//     // This property only applies to sweep features that include a guide rail and whose path runs on both
//     // sides of the profile.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'isDirectionFlipped', {
//         get : function () {
//             var result = this._execute('isDirectionFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isDirectionFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the sweep profile scaling option. It defaults to SweepProfileScaleOption. This
//     // property is only used when a guide rail has been specified.
//     Object.defineProperty(adsk.fusion.SweepFeature.prototype, 'profileScaling', {
//         get : function () {
//             var result = this._execute('profileScaling');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('profileScaling', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.SweepFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.SweepFeature) : null;
//     };

//     //=========== ThickenFeature ============
//     // Object that represents an existing Thicken feature in a design.
//     adsk.fusion.ThickenFeature = function ThickenFeature(handle) {
//         if (!(this instanceof adsk.fusion.ThickenFeature)) {
//             return adsk.fusion.ThickenFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ThickenFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ThickenFeature.prototype.constructor = adsk.fusion.ThickenFeature;
//     adsk.fusion.ThickenFeature.interfaceId = 'adsk.fusion.ThickenFeature';
//     adsk.objectTypes['adsk.fusion.ThickenFeature'] = adsk.fusion.ThickenFeature;
//     adsk.fusion.ThickenFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ThickenFeature ? object : null;
//     };

//     // Gets and sets the ObjectCollection containing the face and/or patch bodies to thicken.
//     Object.defineProperty(adsk.fusion.ThickenFeature.prototype, 'inputFaces', {
//         get : function () {
//             var result = this._execute('inputFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the thickness. You can edit the thickness value
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.ThickenFeature.prototype, 'thickness', {
//         get : function () {
//             var result = this._execute('thickness');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets whether to add thickness symmetrically or only on one side of the face/s to thicken
//     Object.defineProperty(adsk.fusion.ThickenFeature.prototype, 'isSymmetric', {
//         get : function () {
//             var result = this._execute('isSymmetric');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isSymmetric', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the feature operation to perform.
//     Object.defineProperty(adsk.fusion.ThickenFeature.prototype, 'operation', {
//         get : function () {
//             var result = this._execute('operation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('operation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Get and sets whether faces that are tangentially connected to the input faces will be included in the thicken feature.
//     Object.defineProperty(adsk.fusion.ThickenFeature.prototype, 'isChainSelection', {
//         get : function () {
//             var result = this._execute('isChainSelection');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ThickenFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeature) : null;
//         }
//     });

//     // Sets the faces and patch bodies to thicken
//     // inputFaces : The faces or patch bodies to thicken. Faces need not be from the same component or body, nor do they need to be
//     // connected or touching one another.
//     // isChainSelection : A boolean value for setting whether or not faces that are tangentially connected to
//     // the input faces (if any) will be included in the offset. The default value is true.
//     // Returns true if successful
//     adsk.fusion.ThickenFeature.prototype.setInputEntities = function (inputFaces, isChainSelection) {
//         if (inputFaces !== null && !(inputFaces instanceof adsk.core.ObjectCollection)) { throw new TypeError('inputFaces must be a adsk.core.ObjectCollection'); }
//         if (isChainSelection === null || (isChainSelection !== undefined && typeof isChainSelection !== 'boolean')) { throw new TypeError('isChainSelection must be a boolean'); }
//         var args = {
//             inputFaces : (inputFaces === null ? inputFaces : inputFaces.handle)
//         };
//         if (isChainSelection !== undefined) {
//             args.isChainSelection = isChainSelection;
//         }
//         var result = this._execute('setInputEntities', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.ThickenFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThickenFeature) : null;
//     };

//     //=========== ThreadFeature ============
//     // Object that represents an existing thread feature in a design.
//     adsk.fusion.ThreadFeature = function ThreadFeature(handle) {
//         if (!(this instanceof adsk.fusion.ThreadFeature)) {
//             return adsk.fusion.ThreadFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.ThreadFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.ThreadFeature.prototype.constructor = adsk.fusion.ThreadFeature;
//     adsk.fusion.ThreadFeature.interfaceId = 'adsk.fusion.ThreadFeature';
//     adsk.objectTypes['adsk.fusion.ThreadFeature'] = adsk.fusion.ThreadFeature;
//     adsk.fusion.ThreadFeature.cast = function (object) {
//         return object instanceof adsk.fusion.ThreadFeature ? object : null;
//     };

//     // Gets and sets the threaded face. In the case where there are multiple faces, only the first one is returned.
//     // Setting this results in a thread being applied to only a single face.
//     // It is recommended that you use the inputCylindricalfaces property in order to have full access to the collection of faces
//     // to be threaded.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'inputCylindricalFace', {
//         get : function () {
//             var result = this._execute('inputCylindricalFace');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepFace) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.BRepFace)) { throw new TypeError('value must be a adsk.fusion.BRepFace'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputCylindricalFace', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the thread is physical or cosmetic thread. A value of true indicates a physical thread.
//     // It defaults to false.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'isModeled', {
//         get : function () {
//             var result = this._execute('isModeled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isModeled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if this thread is the full length of the cylinder.
//     // It only can be set to true.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'isFullLength', {
//         get : function () {
//             var result = this._execute('isFullLength');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFullLength', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the parameter that controls the depth of the thread.
//     // Even though the parameter for the thread depth is always created and accessible through this property,
//     // it is only used in the case where the isFullLength property is false.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'threadLength', {
//         get : function () {
//             var result = this._execute('threadLength');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the parameter that controls the offset value of the thread.
//     // The offset is the distance along the axis of the cylinder from the edge to the start of the thread,
//     // it is only used in the case where the isFullLength property is false.
//     // Returns nothing in the case where the feature is non-parametric.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'threadOffset', {
//         get : function () {
//             var result = this._execute('threadOffset');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets where the thread length is measured from.
//     // This property is only used in the case where the isFullLength property is false.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'threadLocation', {
//         get : function () {
//             var result = this._execute('threadLocation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('threadLocation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the thread data.
//     // Also can edit the thread through the properties and methods on the ThreadInfo object.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'threadInfo', {
//         get : function () {
//             var result = this._execute('threadInfo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadInfo) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.ThreadInfo)) { throw new TypeError('value must be a adsk.fusion.ThreadInfo'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('threadInfo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the thread is right or left-handed thread. A value of true indicates a right-handed thread.
//     // It defaults to true.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'isRightHanded', {
//         get : function () {
//             var result = this._execute('isRightHanded');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isRightHanded', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeature) : null;
//         }
//     });

//     // Gets and sets the cylindrical input faces.
//     Object.defineProperty(adsk.fusion.ThreadFeature.prototype, 'inputCylindricalFaces', {
//         get : function () {
//             var result = this._execute('inputCylindricalFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('inputCylindricalFaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets the thread offset, length and location.
//     // Calling this method will cause the isFullLength property to be set to false.
//     // threadOffset : A ValueInput object that defines the thread offset.
//     // threadLength : A ValueInput object that defines the thread length.
//     // threadLocation : Indicates where the thread length is measured from.
//     // Returns true if successful.
//     adsk.fusion.ThreadFeature.prototype.setThreadOffsetLength = function (threadOffset, threadLength, threadLocation) {
//         if (threadOffset !== null && !(threadOffset instanceof adsk.core.ValueInput)) { throw new TypeError('threadOffset must be a adsk.core.ValueInput'); }
//         if (threadLength !== null && !(threadLength instanceof adsk.core.ValueInput)) { throw new TypeError('threadLength must be a adsk.core.ValueInput'); }
//         if (!isFinite(threadLocation)) { throw new TypeError('threadLocation must be a number'); }
//         var args = {
//             threadOffset : (threadOffset === null ? threadOffset : threadOffset.handle),
//             threadLength : (threadLength === null ? threadLength : threadLength.handle),
//             threadLocation : Number(threadLocation)
//         };
//         var result = this._execute('setThreadOffsetLength', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.ThreadFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ThreadFeature) : null;
//     };

//     //=========== TorusFeature ============
//     // Object that represents an existing torus feature in a design.
//     adsk.fusion.TorusFeature = function TorusFeature(handle) {
//         if (!(this instanceof adsk.fusion.TorusFeature)) {
//             return adsk.fusion.TorusFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.TorusFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.TorusFeature.prototype.constructor = adsk.fusion.TorusFeature;
//     adsk.fusion.TorusFeature.interfaceId = 'adsk.fusion.TorusFeature';
//     adsk.objectTypes['adsk.fusion.TorusFeature'] = adsk.fusion.TorusFeature;
//     adsk.fusion.TorusFeature.cast = function (object) {
//         return object instanceof adsk.fusion.TorusFeature ? object : null;
//     };

//     //=========== TrimFeature ============
//     // Object that represents an existing trim feature in a design.
//     adsk.fusion.TrimFeature = function TrimFeature(handle) {
//         if (!(this instanceof adsk.fusion.TrimFeature)) {
//             return adsk.fusion.TrimFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.TrimFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.TrimFeature.prototype.constructor = adsk.fusion.TrimFeature;
//     adsk.fusion.TrimFeature.interfaceId = 'adsk.fusion.TrimFeature';
//     adsk.objectTypes['adsk.fusion.TrimFeature'] = adsk.fusion.TrimFeature;
//     adsk.fusion.TrimFeature.cast = function (object) {
//         return object instanceof adsk.fusion.TrimFeature ? object : null;
//     };

//     // Gets and sets the entity (a patch body, B-Rep face, construction plane or sketch curve) that intersects the trim tool
//     Object.defineProperty(adsk.fusion.TrimFeature.prototype, 'trimTool', {
//         get : function () {
//             var result = this._execute('trimTool');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('trimTool', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the collection of the valid cells that have been calculated based on the trim tool.
//     // Use this collection to specify which cells to trim away.
//     Object.defineProperty(adsk.fusion.TrimFeature.prototype, 'bRepCells', {
//         get : function () {
//             var result = this._execute('bRepCells');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepCells) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.TrimFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeature) : null;
//         }
//     });

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.TrimFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TrimFeature) : null;
//     };

//     // After making any changes to the set of selected cells you must call this method to
//     // indicate all changes have been made and to apply those changes to the feature.
//     // Returns true if the apply was successful.
//     adsk.fusion.TrimFeature.prototype.applyCellChanges = function () {
//         var result = this._execute('applyCellChanges');
//         return result ? result.value : undefined;
//     };

//     //=========== TwoDistancesChamferTypeDefinition ============
//     // Provides information to create a chamfer that is defined by a two distances from the edge.
//     adsk.fusion.TwoDistancesChamferTypeDefinition = function TwoDistancesChamferTypeDefinition(handle) {
//         if (!(this instanceof adsk.fusion.TwoDistancesChamferTypeDefinition)) {
//             return adsk.fusion.TwoDistancesChamferTypeDefinition.cast(handle);
//         }
//         adsk.fusion.ChamferTypeDefinition.call(this, handle);
//     };
//     adsk.fusion.TwoDistancesChamferTypeDefinition.prototype = Object.create(adsk.fusion.ChamferTypeDefinition.prototype);
//     adsk.fusion.TwoDistancesChamferTypeDefinition.prototype.constructor = adsk.fusion.TwoDistancesChamferTypeDefinition;
//     adsk.fusion.TwoDistancesChamferTypeDefinition.interfaceId = 'adsk.fusion.TwoDistancesChamferTypeDefinition';
//     adsk.objectTypes['adsk.fusion.TwoDistancesChamferTypeDefinition'] = adsk.fusion.TwoDistancesChamferTypeDefinition;
//     adsk.fusion.TwoDistancesChamferTypeDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.TwoDistancesChamferTypeDefinition ? object : null;
//     };

//     // Returns the parameter controlling the first distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.TwoDistancesChamferTypeDefinition.prototype, 'distanceOne', {
//         get : function () {
//             var result = this._execute('distanceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the parameter controlling the second distance. You can edit the distance
//     // by editing the value of the parameter object.
//     Object.defineProperty(adsk.fusion.TwoDistancesChamferTypeDefinition.prototype, 'distanceTwo', {
//         get : function () {
//             var result = this._execute('distanceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== TwoSidesAngleExtentDefinition ============
//     // Defines the inputs for a TwoSidesAngleExtentDefinition object.
//     // This feature extent type defines the extents of the feature using angle extents on two sides.
//     adsk.fusion.TwoSidesAngleExtentDefinition = function TwoSidesAngleExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.TwoSidesAngleExtentDefinition)) {
//             return adsk.fusion.TwoSidesAngleExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.TwoSidesAngleExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.TwoSidesAngleExtentDefinition.prototype.constructor = adsk.fusion.TwoSidesAngleExtentDefinition;
//     adsk.fusion.TwoSidesAngleExtentDefinition.interfaceId = 'adsk.fusion.TwoSidesAngleExtentDefinition';
//     adsk.objectTypes['adsk.fusion.TwoSidesAngleExtentDefinition'] = adsk.fusion.TwoSidesAngleExtentDefinition;
//     adsk.fusion.TwoSidesAngleExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.TwoSidesAngleExtentDefinition ? object : null;
//     };

//     // Gets the ModelParameter that defines the angle on the first side
//     Object.defineProperty(adsk.fusion.TwoSidesAngleExtentDefinition.prototype, 'angleOne', {
//         get : function () {
//             var result = this._execute('angleOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the ModelParameter that defines the angle on the second side
//     Object.defineProperty(adsk.fusion.TwoSidesAngleExtentDefinition.prototype, 'angleTwo', {
//         get : function () {
//             var result = this._execute('angleTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== TwoSidesDistanceExtentDefinition ============
//     // Defines the inputs for a TwoSidesDistanceExtentDefinition object.
//     // This defines a feature extent where the distance in each direction can be a different value.
//     adsk.fusion.TwoSidesDistanceExtentDefinition = function TwoSidesDistanceExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.TwoSidesDistanceExtentDefinition)) {
//             return adsk.fusion.TwoSidesDistanceExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.TwoSidesDistanceExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.TwoSidesDistanceExtentDefinition.prototype.constructor = adsk.fusion.TwoSidesDistanceExtentDefinition;
//     adsk.fusion.TwoSidesDistanceExtentDefinition.interfaceId = 'adsk.fusion.TwoSidesDistanceExtentDefinition';
//     adsk.objectTypes['adsk.fusion.TwoSidesDistanceExtentDefinition'] = adsk.fusion.TwoSidesDistanceExtentDefinition;
//     adsk.fusion.TwoSidesDistanceExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.TwoSidesDistanceExtentDefinition ? object : null;
//     };

//     // Gets the ModelParameter that defines the first distance
//     Object.defineProperty(adsk.fusion.TwoSidesDistanceExtentDefinition.prototype, 'distanceOne', {
//         get : function () {
//             var result = this._execute('distanceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the ModelParameter that defines the second distance
//     Object.defineProperty(adsk.fusion.TwoSidesDistanceExtentDefinition.prototype, 'distanceTwo', {
//         get : function () {
//             var result = this._execute('distanceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     //=========== TwoSidesToExtentDefinition ============
//     // Defines the inputs for a TwoSidesToExtentDefinition object
//     // This defines a feature extent where the extents of feature go up to faces or construction planes in both directions.
//     adsk.fusion.TwoSidesToExtentDefinition = function TwoSidesToExtentDefinition(handle) {
//         if (!(this instanceof adsk.fusion.TwoSidesToExtentDefinition)) {
//             return adsk.fusion.TwoSidesToExtentDefinition.cast(handle);
//         }
//         adsk.fusion.ExtentDefinition.call(this, handle);
//     };
//     adsk.fusion.TwoSidesToExtentDefinition.prototype = Object.create(adsk.fusion.ExtentDefinition.prototype);
//     adsk.fusion.TwoSidesToExtentDefinition.prototype.constructor = adsk.fusion.TwoSidesToExtentDefinition;
//     adsk.fusion.TwoSidesToExtentDefinition.interfaceId = 'adsk.fusion.TwoSidesToExtentDefinition';
//     adsk.objectTypes['adsk.fusion.TwoSidesToExtentDefinition'] = adsk.fusion.TwoSidesToExtentDefinition;
//     adsk.fusion.TwoSidesToExtentDefinition.cast = function (object) {
//         return object instanceof adsk.fusion.TwoSidesToExtentDefinition ? object : null;
//     };

//     // Gets and sets the entity that defines the extent on side one. The valid types of entities can vary depending on
//     // the type of feature this is being used with.
//     Object.defineProperty(adsk.fusion.TwoSidesToExtentDefinition.prototype, 'toEntityOne', {
//         get : function () {
//             var result = this._execute('toEntityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('toEntityOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the extent on side two. The valid types of entities can vary depending on
//     // the type of feature this is being used with.
//     Object.defineProperty(adsk.fusion.TwoSidesToExtentDefinition.prototype, 'toEntityTwo', {
//         get : function () {
//             var result = this._execute('toEntityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('toEntityTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether the toEntity is extended to fully intersect the extrusion.
//     Object.defineProperty(adsk.fusion.TwoSidesToExtentDefinition.prototype, 'matchShape', {
//         get : function () {
//             var result = this._execute('matchShape');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('matchShape', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== UnstitchFeature ============
//     // Object that represents an existing Unstitch feature in a design.
//     adsk.fusion.UnstitchFeature = function UnstitchFeature(handle) {
//         if (!(this instanceof adsk.fusion.UnstitchFeature)) {
//             return adsk.fusion.UnstitchFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.UnstitchFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.UnstitchFeature.prototype.constructor = adsk.fusion.UnstitchFeature;
//     adsk.fusion.UnstitchFeature.interfaceId = 'adsk.fusion.UnstitchFeature';
//     adsk.objectTypes['adsk.fusion.UnstitchFeature'] = adsk.fusion.UnstitchFeature;
//     adsk.fusion.UnstitchFeature.cast = function (object) {
//         return object instanceof adsk.fusion.UnstitchFeature ? object : null;
//     };

//     // Gets the faces that were input to be unstitched.
//     Object.defineProperty(adsk.fusion.UnstitchFeature.prototype, 'inputFaces', {
//         get : function () {
//             var result = this._execute('inputFaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         }
//     });

//     // A boolean value for setting whether or not faces that are connected and adjacent to
//     // the input faces will be included in the selection. The default value is true.
//     Object.defineProperty(adsk.fusion.UnstitchFeature.prototype, 'isChainSelection', {
//         get : function () {
//             var result = this._execute('isChainSelection');
//             return result ? result.value : undefined;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.UnstitchFeature.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UnstitchFeature) : null;
//         }
//     });

//     // Sets the faces and/or bodies to be unstiched
//     // faces : The faces and/or bodies to Unstitch. Individual faces can be unstitched from solids and/or patch bodies.
//     // The faces being unstitched need not all come from the same body.
//     // isChainSelection : A boolean value for setting whether or not faces that are connected and adjacent to
//     // the input faces will be included in the selection. The default value is true.
//     // Returns true if successful.
//     adsk.fusion.UnstitchFeature.prototype.setInputFaces = function (faces, isChainSelection) {
//         if (faces !== null && !(faces instanceof adsk.core.ObjectCollection)) { throw new TypeError('faces must be a adsk.core.ObjectCollection'); }
//         if (isChainSelection === null || (isChainSelection !== undefined && typeof isChainSelection !== 'boolean')) { throw new TypeError('isChainSelection must be a boolean'); }
//         var args = {
//             faces : (faces === null ? faces : faces.handle)
//         };
//         if (isChainSelection !== undefined) {
//             args.isChainSelection = isChainSelection;
//         }
//         var result = this._execute('setInputFaces', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this is not the NativeObject.
//     adsk.fusion.UnstitchFeature.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.UnstitchFeature) : null;
//     };

//     //=========== VariableRadiusFilletEdgeSet ============
//     // Provides access to the edges and the parameters associated with a variable radius fillet.
//     adsk.fusion.VariableRadiusFilletEdgeSet = function VariableRadiusFilletEdgeSet(handle) {
//         if (!(this instanceof adsk.fusion.VariableRadiusFilletEdgeSet)) {
//             return adsk.fusion.VariableRadiusFilletEdgeSet.cast(handle);
//         }
//         adsk.fusion.FilletEdgeSet.call(this, handle);
//     };
//     adsk.fusion.VariableRadiusFilletEdgeSet.prototype = Object.create(adsk.fusion.FilletEdgeSet.prototype);
//     adsk.fusion.VariableRadiusFilletEdgeSet.prototype.constructor = adsk.fusion.VariableRadiusFilletEdgeSet;
//     adsk.fusion.VariableRadiusFilletEdgeSet.interfaceId = 'adsk.fusion.VariableRadiusFilletEdgeSet';
//     adsk.objectTypes['adsk.fusion.VariableRadiusFilletEdgeSet'] = adsk.fusion.VariableRadiusFilletEdgeSet;
//     adsk.fusion.VariableRadiusFilletEdgeSet.cast = function (object) {
//         return object instanceof adsk.fusion.VariableRadiusFilletEdgeSet ? object : null;
//     };

//     // Gets and sets the edges that will be filleted. In order to access (get) the input edges
//     // of a fillet, you must roll the timeline back to just before the fillet feature
//     // whose edges you want to access.
//     Object.defineProperty(adsk.fusion.VariableRadiusFilletEdgeSet.prototype, 'edges', {
//         get : function () {
//             var result = this._execute('edges');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('edges', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the model parameter that controls the start radius of the fillet. You can edit
//     // the start radius by using the properties on the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.VariableRadiusFilletEdgeSet.prototype, 'startRadius', {
//         get : function () {
//             var result = this._execute('startRadius');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the model parameter that controls the end radius of the fillet. You can edit
//     // the end radius by using the properties on the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.VariableRadiusFilletEdgeSet.prototype, 'endRadius', {
//         get : function () {
//             var result = this._execute('endRadius');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns a list of model parameters that control radius of the fillet at each position defined along the edge set.
//     // You can edit any of these radii by using the properties on its returned ModelParameter object. This list does
//     // not include the parameters for the start and end radii. Use the startRadius and endRadius properties to get those.
//     Object.defineProperty(adsk.fusion.VariableRadiusFilletEdgeSet.prototype, 'midRadii', {
//         get : function () {
//             var result = this._execute('midRadii');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParameterList) : null;
//         }
//     });

//     // Returns a list of model parameters that control the location of each mid point radius. These positions are defined
//     // from 0 to 1 where 0 is at the start of the edge and 1 is at the end. You can edit any of these positions by
//     // using the properties on its returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.VariableRadiusFilletEdgeSet.prototype, 'midPositions', {
//         get : function () {
//             var result = this._execute('midPositions');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ParameterList) : null;
//         }
//     });

//     // Creates a new mid position radius on the variable radius edge set.
//     // position : The position where the new radius is to be created. This is a value between 0 and 1 where 0 is at the start of the
//     // edge and 1 is at the end. If the ValueInput uses a real then it is interpreted as a unitless value. If it is a string
//     // then it must resolve to a unitless value.
//     // radius : A ValueInput object that defines the radius at the defined position. If the ValueInput uses a real
//     // then it is interpreted as centimeters. If it is a string then the units can be defined as part of
//     // the string (i.e. "2 in"). If no units are specified it will be interpreted using the current
//     // default units for length.
//     // Returns true if successful.
//     adsk.fusion.VariableRadiusFilletEdgeSet.prototype.addMidPosition = function (position, radius) {
//         if (position !== null && !(position instanceof adsk.core.ValueInput)) { throw new TypeError('position must be a adsk.core.ValueInput'); }
//         if (radius !== null && !(radius instanceof adsk.core.ValueInput)) { throw new TypeError('radius must be a adsk.core.ValueInput'); }
//         var args = {
//             position : (position === null ? position : position.handle),
//             radius : (radius === null ? radius : radius.handle)
//         };
//         var result = this._execute('addMidPosition', args);
//         return result ? result.value : undefined;
//     };

//     // Deletes the specified mid position from the variable radius fillet.
//     // positionIndex : The index of the mid position to delete. The points are in the order they appear along the edge
//     // where the first point has an index of 0. The number of mid positions and their locations can be
//     // obtained by getting the list of mid positions using the midPositions property.
//     // Returns true if successful.
//     adsk.fusion.VariableRadiusFilletEdgeSet.prototype.deleteMidPosition = function (positionIndex) {
//         if (!isFinite(positionIndex)) { throw new TypeError('positionIndex must be a number'); }
//         var args = {
//             positionIndex : Number(positionIndex)
//         };
//         var result = this._execute('deleteMidPosition', args);
//         return result ? result.value : undefined;
//     };

//     //=========== WebFeature ============
//     // Object that represents an existing web feature in a design.
//     adsk.fusion.WebFeature = function WebFeature(handle) {
//         if (!(this instanceof adsk.fusion.WebFeature)) {
//             return adsk.fusion.WebFeature.cast(handle);
//         }
//         adsk.fusion.Feature.call(this, handle);
//     };
//     adsk.fusion.WebFeature.prototype = Object.create(adsk.fusion.Feature.prototype);
//     adsk.fusion.WebFeature.prototype.constructor = adsk.fusion.WebFeature;
//     adsk.fusion.WebFeature.interfaceId = 'adsk.fusion.WebFeature';
//     adsk.objectTypes['adsk.fusion.WebFeature'] = adsk.fusion.WebFeature;
//     adsk.fusion.WebFeature.cast = function (object) {
//         return object instanceof adsk.fusion.WebFeature ? object : null;
//     };

//     return adsk;
// }));