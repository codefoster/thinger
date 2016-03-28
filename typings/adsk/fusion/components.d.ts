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

//     //=========== AsBuiltJoint ============
//     // Represent an as-built joint.
//     adsk.fusion.AsBuiltJoint = function AsBuiltJoint(handle) {
//         if (!(this instanceof adsk.fusion.AsBuiltJoint)) {
//             return adsk.fusion.AsBuiltJoint.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.AsBuiltJoint.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.AsBuiltJoint.prototype.constructor = adsk.fusion.AsBuiltJoint;
//     adsk.fusion.AsBuiltJoint.interfaceId = 'adsk.fusion.AsBuiltJoint';
//     adsk.objectTypes['adsk.fusion.AsBuiltJoint'] = adsk.fusion.AsBuiltJoint;
//     adsk.fusion.AsBuiltJoint.cast = function (object) {
//         return object instanceof adsk.fusion.AsBuiltJoint ? object : null;
//     };

//     // Returns the parent component that owns this AsBuiltJoint.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'parentComponent', {
//         get : function () {
//             var result = this._execute('parentComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // The name of the as-built joint as it is displayed in the timeline and the browser. The
//     // name can be changed.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'name', {
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

//     // Specifies the first of two occurrences the joint is between.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'occurrenceOne', {
//         get : function () {
//             var result = this._execute('occurrenceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Specifies the second of two occurrences the joint is between.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'occurrenceTwo', {
//         get : function () {
//             var result = this._execute('occurrenceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Specifies the position of the joint. Getting this property will return null and
//     // setting it will be ignored in the case where the joint motion is rigid.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.JointGeometry)) { throw new TypeError('value must be a adsk.fusion.JointGeometry'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometry', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the timeline object associated with this as-built joint.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // Returns a JointMotion object that defines the motion relationship between the two geometries.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'jointMotion', {
//         get : function () {
//             var result = this._execute('jointMotion');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointMotion) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Gets and sets if this as-built joint is suppressed.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'isSuppressed', {
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

//     // Gets and sets if the light bulb of this as-built joint as displayed in the browser is on or off.
//     // A joint will only be visible if the light bulb is switched on. However,
//     // the light bulb can be on and the joint still invisible if a higher level occurrence
//     // in the assembly context is not visible because its light bulb is off or the joints folder
//     // is light bulb is off.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'isLightBulbOn', {
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

//     // Gets whether the as-built joint is visible. To change the visibility see the isLightBulbOn property.
//     // This property is affected by the assembly context.
//     Object.defineProperty(adsk.fusion.AsBuiltJoint.prototype, 'isVisible', {
//         get : function () {
//             var result = this._execute('isVisible');
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes this as-built joint.
//     // Returns true if the delete was successful.
//     adsk.fusion.AsBuiltJoint.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a rigid joint.
//     // Returns true if successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsRigidJointMotion = function () {
//         var result = this._execute('setAsRigidJointMotion');
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a revolute joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // geometry : Redefines the joint geometry. If not provided, the existing geometry is used. This argument is
//     // required if the current joint motion is rigid.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsRevoluteJointMotion = function (rotationAxis, geometry, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry))) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsRevoluteJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a slider joint.
//     // sliderDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSliderDirectionEntity argument must also be provided.
//     // geometry : Redefines the joint geometry. If not provided, the existing geometry is used. This argument is
//     // required if the current joint motion is rigid.
//     // customSliderDirectionEntity : If the sliderDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slider direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsSliderJointMotion = function (sliderDirection, geometry, customSliderDirectionEntity) {
//         if (!isFinite(sliderDirection)) { throw new TypeError('sliderDirection must be a number'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry))) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         if (customSliderDirectionEntity === null || (customSliderDirectionEntity !== undefined && customSliderDirectionEntity !== null && !(customSliderDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSliderDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             sliderDirection : Number(sliderDirection)
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         if (customSliderDirectionEntity !== undefined) {
//             args.customSliderDirectionEntity = (customSliderDirectionEntity === null ? customSliderDirectionEntity : customSliderDirectionEntity.handle);
//         }
//         var result = this._execute('setAsSliderJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a cylindrical joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // geometry : Redefines the joint geometry. If not provided, the existing geometry is used. This argument is
//     // required if the current joint motion is rigid.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsCylindricalJointMotion = function (rotationAxis, geometry, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry))) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsCylindricalJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a pin-slot joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // slideDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSlideDirectionEntity argument must also be provided.
//     // geometry : Redefines the joint geometry. If not provided, the existing geometry is used. This argument is
//     // required if the current joint motion is rigid.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // customSlideDirectionEntity : If the slideDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slide direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsPinSlotJointMotion = function (rotationAxis, slideDirection, geometry, customRotationAxisEntity, customSlideDirectionEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (!isFinite(slideDirection)) { throw new TypeError('slideDirection must be a number'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry))) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         if (customSlideDirectionEntity === null || (customSlideDirectionEntity !== undefined && customSlideDirectionEntity !== null && !(customSlideDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSlideDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis),
//             slideDirection : Number(slideDirection)
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         if (customSlideDirectionEntity !== undefined) {
//             args.customSlideDirectionEntity = (customSlideDirectionEntity === null ? customSlideDirectionEntity : customSlideDirectionEntity.handle);
//         }
//         var result = this._execute('setAsPinSlotJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a planar joint.
//     // normalDirection : Defines the direction of the normal of the single degree of rotation.
//     // This can be set to XAxisJointDirection, YAxisJointDirection, ZAxisJointDirection,
//     // or CustomJointDirection. If set to CustomJointDirection then the customNormalDirectionEntity
//     // argument must also be provided.
//     // geometry : Redefines the joint geometry. If not provided, the existing geometry is used. This argument is
//     // required if the current joint motion is rigid.
//     // customNormalDirectionEntity : If the normalDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the direction of the normal. This can be several types of entities that can define a direction.
//     // customPrimarySlideDirection : This arguments defines the direction of the primary slide direction. A default primary slide direction
//     // is automatically chosen and will be used if this argument is not provided or is null. The secondary slide
//     // direction is automatically inferred from the normal and primary slide directions.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsPlanarJointMotion = function (normalDirection, geometry, customNormalDirectionEntity, customPrimarySlideDirection) {
//         if (!isFinite(normalDirection)) { throw new TypeError('normalDirection must be a number'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry))) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         if (customNormalDirectionEntity === null || (customNormalDirectionEntity !== undefined && customNormalDirectionEntity !== null && !(customNormalDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customNormalDirectionEntity must be a adsk.core.Base'); }
//         if (customPrimarySlideDirection === null || (customPrimarySlideDirection !== undefined && customPrimarySlideDirection !== null && !(customPrimarySlideDirection instanceof adsk.core.Base))) { throw new TypeError('customPrimarySlideDirection must be a adsk.core.Base'); }
//         var args = {
//             normalDirection : Number(normalDirection)
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         if (customNormalDirectionEntity !== undefined) {
//             args.customNormalDirectionEntity = (customNormalDirectionEntity === null ? customNormalDirectionEntity : customNormalDirectionEntity.handle);
//         }
//         if (customPrimarySlideDirection !== undefined) {
//             args.customPrimarySlideDirection = (customPrimarySlideDirection === null ? customPrimarySlideDirection : customPrimarySlideDirection.handle);
//         }
//         var result = this._execute('setAsPlanarJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a ball joint.
//     // pitchDirection : Defines the direction the pitch angle is measured from. This can be ZAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customPitchDirection argument.
//     // yawDirection : Defines the direction the yaw is measured from. This can be XAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customYawDirection argument.
//     // geometry : Redefines the joint geometry. If not provided, the existing geometry is used. This argument is
//     // required if the current joint motion is rigid.
//     // customPitchDirection : If the pitchDirection argument is customPitchDirection this argument is used to define the direction the pitch
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // customYawDirection : If the yawDirection argument is customPitchDirection this argument is used to define the direction the yaw
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJoint.prototype.setAsBallJointMotion = function (pitchDirection, yawDirection, geometry, customPitchDirection, customYawDirection) {
//         if (!isFinite(pitchDirection)) { throw new TypeError('pitchDirection must be a number'); }
//         if (!isFinite(yawDirection)) { throw new TypeError('yawDirection must be a number'); }
//         if (geometry === null || (geometry !== undefined && geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry))) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         if (customPitchDirection === null || (customPitchDirection !== undefined && customPitchDirection !== null && !(customPitchDirection instanceof adsk.core.Base))) { throw new TypeError('customPitchDirection must be a adsk.core.Base'); }
//         if (customYawDirection === null || (customYawDirection !== undefined && customYawDirection !== null && !(customYawDirection instanceof adsk.core.Base))) { throw new TypeError('customYawDirection must be a adsk.core.Base'); }
//         var args = {
//             pitchDirection : Number(pitchDirection),
//             yawDirection : Number(yawDirection)
//         };
//         if (geometry !== undefined) {
//             args.geometry = (geometry === null ? geometry : geometry.handle);
//         }
//         if (customPitchDirection !== undefined) {
//             args.customPitchDirection = (customPitchDirection === null ? customPitchDirection : customPitchDirection.handle);
//         }
//         if (customYawDirection !== undefined) {
//             args.customYawDirection = (customYawDirection === null ? customYawDirection : customYawDirection.handle);
//         }
//         var result = this._execute('setAsBallJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.AsBuiltJoint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//     };

//     //=========== AsBuiltJointInput ============
//     // Defines all of the information needed to create an as-built joint.
//     adsk.fusion.AsBuiltJointInput = function AsBuiltJointInput(handle) {
//         if (!(this instanceof adsk.fusion.AsBuiltJointInput)) {
//             return adsk.fusion.AsBuiltJointInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.AsBuiltJointInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.AsBuiltJointInput.prototype.constructor = adsk.fusion.AsBuiltJointInput;
//     adsk.fusion.AsBuiltJointInput.interfaceId = 'adsk.fusion.AsBuiltJointInput';
//     adsk.objectTypes['adsk.fusion.AsBuiltJointInput'] = adsk.fusion.AsBuiltJointInput;
//     adsk.fusion.AsBuiltJointInput.cast = function (object) {
//         return object instanceof adsk.fusion.AsBuiltJointInput ? object : null;
//     };

//     // Specifies the first of two occurrences the joint is between.
//     Object.defineProperty(adsk.fusion.AsBuiltJointInput.prototype, 'occurrenceOne', {
//         get : function () {
//             var result = this._execute('occurrenceOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('occurrenceOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the second of two occurrences the joint is between.
//     Object.defineProperty(adsk.fusion.AsBuiltJointInput.prototype, 'occurrenceTwo', {
//         get : function () {
//             var result = this._execute('occurrenceTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.Occurrence)) { throw new TypeError('value must be a adsk.fusion.Occurrence'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('occurrenceTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the position of the joint.
//     Object.defineProperty(adsk.fusion.AsBuiltJointInput.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.JointGeometry)) { throw new TypeError('value must be a adsk.fusion.JointGeometry'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometry', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns one of the objects derived from JointMotion that defines how the motion between
//     // the two joint geometries is defined. Can be null if the motion hasn't yet been defined.
//     Object.defineProperty(adsk.fusion.AsBuiltJointInput.prototype, 'jointMotion', {
//         get : function () {
//             var result = this._execute('jointMotion');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointMotion) : null;
//         }
//     });

//     // Defines the relationship between the two joint geometries as a rigid joint.
//     // Returns true if successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsRigidJointMotion = function () {
//         var result = this._execute('setAsRigidJointMotion');
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a revolute joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsRevoluteJointMotion = function (rotationAxis, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsRevoluteJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a slider joint.
//     // sliderDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSliderDirectionEntity argument must also be provided.
//     // customSliderDirectionEntity : If the sliderDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slider direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsSliderJointMotion = function (sliderDirection, customSliderDirectionEntity) {
//         if (!isFinite(sliderDirection)) { throw new TypeError('sliderDirection must be a number'); }
//         if (customSliderDirectionEntity === null || (customSliderDirectionEntity !== undefined && customSliderDirectionEntity !== null && !(customSliderDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSliderDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             sliderDirection : Number(sliderDirection)
//         };
//         if (customSliderDirectionEntity !== undefined) {
//             args.customSliderDirectionEntity = (customSliderDirectionEntity === null ? customSliderDirectionEntity : customSliderDirectionEntity.handle);
//         }
//         var result = this._execute('setAsSliderJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a cylindrical joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsCylindricalJointMotion = function (rotationAxis, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsCylindricalJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a pin-slot joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // slideDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSlideDirectionEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // customSlideDirectionEntity : If the slideDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slide direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsPinSlotJointMotion = function (rotationAxis, slideDirection, customRotationAxisEntity, customSlideDirectionEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (!isFinite(slideDirection)) { throw new TypeError('slideDirection must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         if (customSlideDirectionEntity === null || (customSlideDirectionEntity !== undefined && customSlideDirectionEntity !== null && !(customSlideDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSlideDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis),
//             slideDirection : Number(slideDirection)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         if (customSlideDirectionEntity !== undefined) {
//             args.customSlideDirectionEntity = (customSlideDirectionEntity === null ? customSlideDirectionEntity : customSlideDirectionEntity.handle);
//         }
//         var result = this._execute('setAsPinSlotJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a planar joint.
//     // normalDirection : Defines the direction of the normal of the single degree of rotation.
//     // This can be set to XAxisJointDirection, YAxisJointDirection, ZAxisJointDirection,
//     // or CustomJointDirection. If set to CustomJointDirection then the customNormalDirectionEntity
//     // argument must also be provided.
//     // customNormalDirectionEntity : If the normalDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the direction of the normal. This can be several types of entities that can define a direction.
//     // customPrimarySlideDirection : This arguments defines the direction of the primary slide direction. A default primary slide direction
//     // is automatically chosen and will be used if this argument is not provided or is null. The secondary slide
//     // direction is automatically inferred from the normal and primary slide directions.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsPlanarJointMotion = function (normalDirection, customNormalDirectionEntity, customPrimarySlideDirection) {
//         if (!isFinite(normalDirection)) { throw new TypeError('normalDirection must be a number'); }
//         if (customNormalDirectionEntity === null || (customNormalDirectionEntity !== undefined && customNormalDirectionEntity !== null && !(customNormalDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customNormalDirectionEntity must be a adsk.core.Base'); }
//         if (customPrimarySlideDirection === null || (customPrimarySlideDirection !== undefined && customPrimarySlideDirection !== null && !(customPrimarySlideDirection instanceof adsk.core.Base))) { throw new TypeError('customPrimarySlideDirection must be a adsk.core.Base'); }
//         var args = {
//             normalDirection : Number(normalDirection)
//         };
//         if (customNormalDirectionEntity !== undefined) {
//             args.customNormalDirectionEntity = (customNormalDirectionEntity === null ? customNormalDirectionEntity : customNormalDirectionEntity.handle);
//         }
//         if (customPrimarySlideDirection !== undefined) {
//             args.customPrimarySlideDirection = (customPrimarySlideDirection === null ? customPrimarySlideDirection : customPrimarySlideDirection.handle);
//         }
//         var result = this._execute('setAsPlanarJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a ball joint.
//     // pitchDirection : Defines the direction the pitch angle is measured from. This can be ZAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customPitchDirection argument.
//     // yawDirection : Defines the direction the yaw is measured from. This can be XAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customYawDirection argument.
//     // customPitchDirection : If the pitchDirection argument is customPitchDirection this argument is used to define the direction the pitch
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // customYawDirection : If the yawDirection argument is customPitchDirection this argument is used to define the direction the yaw
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.AsBuiltJointInput.prototype.setAsBallJointMotion = function (pitchDirection, yawDirection, customPitchDirection, customYawDirection) {
//         if (!isFinite(pitchDirection)) { throw new TypeError('pitchDirection must be a number'); }
//         if (!isFinite(yawDirection)) { throw new TypeError('yawDirection must be a number'); }
//         if (customPitchDirection === null || (customPitchDirection !== undefined && customPitchDirection !== null && !(customPitchDirection instanceof adsk.core.Base))) { throw new TypeError('customPitchDirection must be a adsk.core.Base'); }
//         if (customYawDirection === null || (customYawDirection !== undefined && customYawDirection !== null && !(customYawDirection instanceof adsk.core.Base))) { throw new TypeError('customYawDirection must be a adsk.core.Base'); }
//         var args = {
//             pitchDirection : Number(pitchDirection),
//             yawDirection : Number(yawDirection)
//         };
//         if (customPitchDirection !== undefined) {
//             args.customPitchDirection = (customPitchDirection === null ? customPitchDirection : customPitchDirection.handle);
//         }
//         if (customYawDirection !== undefined) {
//             args.customYawDirection = (customYawDirection === null ? customYawDirection : customYawDirection.handle);
//         }
//         var result = this._execute('setAsBallJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     //=========== AsBuiltJointList ============
//     // A list of as-built joints.
//     adsk.fusion.AsBuiltJointList = function AsBuiltJointList(handle) {
//         if (!(this instanceof adsk.fusion.AsBuiltJointList)) {
//             return adsk.fusion.AsBuiltJointList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.AsBuiltJointList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.AsBuiltJointList.prototype.constructor = adsk.fusion.AsBuiltJointList;
//     adsk.fusion.AsBuiltJointList.interfaceId = 'adsk.fusion.AsBuiltJointList';
//     adsk.objectTypes['adsk.fusion.AsBuiltJointList'] = adsk.fusion.AsBuiltJointList;
//     adsk.fusion.AsBuiltJointList.cast = function (object) {
//         return object instanceof adsk.fusion.AsBuiltJointList ? object : null;
//     };

//     // Returns number of as-built joints in the list.
//     Object.defineProperty(adsk.fusion.AsBuiltJointList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified as-built joint using an index into the list.
//     // index : The index of the item within the list to return. The first item in the list has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.AsBuiltJointList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//     };

//     // Function that returns the specified as-built joint using a name.
//     // name : The name of the item within the list to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.AsBuiltJointList.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//     };

//     //=========== AsBuiltJoints ============
//     // The collection of as-built joints in this component. This provides access to all existing
//     // as-built joints and supports the ability to create new as-built joints.
//     adsk.fusion.AsBuiltJoints = function AsBuiltJoints(handle) {
//         if (!(this instanceof adsk.fusion.AsBuiltJoints)) {
//             return adsk.fusion.AsBuiltJoints.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.AsBuiltJoints.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.AsBuiltJoints.prototype.constructor = adsk.fusion.AsBuiltJoints;
//     adsk.fusion.AsBuiltJoints.interfaceId = 'adsk.fusion.AsBuiltJoints';
//     adsk.objectTypes['adsk.fusion.AsBuiltJoints'] = adsk.fusion.AsBuiltJoints;
//     adsk.fusion.AsBuiltJoints.cast = function (object) {
//         return object instanceof adsk.fusion.AsBuiltJoints ? object : null;
//     };

//     // Returns number of joint origins in the collection.
//     Object.defineProperty(adsk.fusion.AsBuiltJoints.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified as-built joint using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.AsBuiltJoints.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//     };

//     // Function that returns the specified as-built joint using a name.
//     // name : The name of the item within the collection to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.AsBuiltJoints.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//     };

//     // Creates an AsBuiltJointInput object which is used to collect all of the information needed
//     // to create an as-built joint. This object is equivalent to the as-built joint dialog in the
//     // user-interface in that it doesn't represent an actual joint but just the information needed
//     // to create an as-built joint. Once this is fully defined the add method can be called, passing
//     // this object in to create the actual joint.
//     // occurrenceOne : Specifies the first of two occurrences the joint is between.
//     // occurrenceTwo : Specifies the second of two occurrences the joint is between.
//     // geometry : Specifies the geometry of where the joint will be positioned. If the as-built joint is
//     // a rigid joint, this argument should be null because no geometry is needed.
//     // Returns the new AsBuiltJointInput object or null in the case of failure.
//     adsk.fusion.AsBuiltJoints.prototype.createInput = function (occurrenceOne, occurrenceTwo, geometry) {
//         if (occurrenceOne !== null && !(occurrenceOne instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrenceOne must be a adsk.fusion.Occurrence'); }
//         if (occurrenceTwo !== null && !(occurrenceTwo instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrenceTwo must be a adsk.fusion.Occurrence'); }
//         if (geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry)) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         var args = {
//             occurrenceOne : (occurrenceOne === null ? occurrenceOne : occurrenceOne.handle),
//             occurrenceTwo : (occurrenceTwo === null ? occurrenceTwo : occurrenceTwo.handle),
//             geometry : (geometry === null ? geometry : geometry.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJointInput) : null;
//     };

//     // Creates a new as-built joint.
//     // input : An AsBuiltJointInput object that was created using the AsBuiltJoints.createInput method and then fully defined
//     // using the properties and methods on the AsBuiltJointInput object.
//     // Returns the new AsBuiltJoint object or null in the case of failure.
//     adsk.fusion.AsBuiltJoints.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.AsBuiltJointInput)) { throw new TypeError('input must be a adsk.fusion.AsBuiltJointInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoint) : null;
//     };

//     //=========== BaseComponent ============
//     // The BaseComponent object that defines all of the common design data
//     // and is the base class for the product specific components.
//     adsk.fusion.BaseComponent = function BaseComponent(handle) {
//         if (!(this instanceof adsk.fusion.BaseComponent)) {
//             return adsk.fusion.BaseComponent.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.BaseComponent.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.BaseComponent.prototype.constructor = adsk.fusion.BaseComponent;
//     adsk.fusion.BaseComponent.interfaceId = 'adsk.fusion.BaseComponent';
//     adsk.objectTypes['adsk.fusion.BaseComponent'] = adsk.fusion.BaseComponent;
//     adsk.fusion.BaseComponent.cast = function (object) {
//         return object instanceof adsk.fusion.BaseComponent ? object : null;
//     };

//     // Property that gets and sets the name of this component. This is the name
//     // shown in the browser for each occurrence referencing this component.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'name', {
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

//     // Property that returns the Occurrences collection associated with this component.
//     // This provides access to the occurrences at the top-level of this component and provides
//     // the functionality to add new occurrences.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'occurrences', {
//         get : function () {
//             var result = this._execute('occurrences');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrences) : null;
//         }
//     });

//     // Returns all of the occurrences in the assembly regardless of their level within the assembly structure.
//     // The returned list is read-only.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'allOccurrences', {
//         get : function () {
//             var result = this._execute('allOccurrences');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OccurrenceList) : null;
//         }
//     });

//     // Returns the construction planes collection associated with this component.
//     // This provides access to the existing construction planes and supports
//     // the creation of new construction planes.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'constructionPlanes', {
//         get : function () {
//             var result = this._execute('constructionPlanes');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlanes) : null;
//         }
//     });

//     // Returns the construction axes collection associated with this component.
//     // This provides access to the existing construction axes and supports
//     // the creation of new construction axes.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'constructionAxes', {
//         get : function () {
//             var result = this._execute('constructionAxes');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxes) : null;
//         }
//     });

//     // Returns the construction points collection associated with this component.
//     // This provides access to the existing construction points and supports
//     // the creation of new construction points.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'constructionPoints', {
//         get : function () {
//             var result = this._execute('constructionPoints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoints) : null;
//         }
//     });

//     // Returns the B-Rep bodies collection associated with this component.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'bRepBodies', {
//         get : function () {
//             var result = this._execute('bRepBodies');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.BRepBodies) : null;
//         }
//     });

//     // Returns the parent product this component is owned by.
//     Object.defineProperty(adsk.fusion.BaseComponent.prototype, 'parentDesign', {
//         get : function () {
//             var result = this._execute('parentDesign');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Design) : null;
//         }
//     });

//     // Returns all occurrences at the top-level of this component that reference the specified component.
//     // The returned list is read-only.
//     // component : The component that is being referenced by the occurrences that will be returned.
//     // The occurrences referenced by the specified component.
//     adsk.fusion.BaseComponent.prototype.occurrencesByComponent = function (component) {
//         if (component !== null && !(component instanceof adsk.fusion.Component)) { throw new TypeError('component must be a adsk.fusion.Component'); }
//         var args = {
//             component : (component === null ? component : component.handle)
//         };
//         var result = this._execute('occurrencesByComponent', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OccurrenceList) : null;
//     };

//     // Returns all occurrences, at any level of the assembly, that reference the specified component.
//     // The returned list is read-only.
//     // component : The component that is being referenced by the occurrences that will be returned.
//     // The occurrences referenced by the specified component.
//     adsk.fusion.BaseComponent.prototype.allOccurrencesByComponent = function (component) {
//         if (component !== null && !(component instanceof adsk.fusion.Component)) { throw new TypeError('component must be a adsk.fusion.Component'); }
//         var args = {
//             component : (component === null ? component : component.handle)
//         };
//         var result = this._execute('allOccurrencesByComponent', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OccurrenceList) : null;
//     };

//     //=========== ComponentList ============
//     // Provides a list of components.
//     adsk.fusion.ComponentList = function ComponentList(handle) {
//         if (!(this instanceof adsk.fusion.ComponentList)) {
//             return adsk.fusion.ComponentList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.ComponentList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.ComponentList.prototype.constructor = adsk.fusion.ComponentList;
//     adsk.fusion.ComponentList.interfaceId = 'adsk.fusion.ComponentList';
//     adsk.objectTypes['adsk.fusion.ComponentList'] = adsk.fusion.ComponentList;
//     adsk.fusion.ComponentList.cast = function (object) {
//         return object instanceof adsk.fusion.ComponentList ? object : null;
//     };

//     // Returns the number of components in the collection.
//     Object.defineProperty(adsk.fusion.ComponentList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified component using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.ComponentList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//     };

//     //=========== Components ============
//     // The Components collection object provides access to existing components in a design.
//     adsk.fusion.Components = function Components(handle) {
//         if (!(this instanceof adsk.fusion.Components)) {
//             return adsk.fusion.Components.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Components.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Components.prototype.constructor = adsk.fusion.Components;
//     adsk.fusion.Components.interfaceId = 'adsk.fusion.Components';
//     adsk.objectTypes['adsk.fusion.Components'] = adsk.fusion.Components;
//     adsk.fusion.Components.cast = function (object) {
//         return object instanceof adsk.fusion.Components ? object : null;
//     };

//     // The number of components in the collection.
//     Object.defineProperty(adsk.fusion.Components.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified component using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Components.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//     };

//     // Function that returns the specified component by name.
//     // name : The name of the component within the collection to return.
//     // Returns the specified component or null if the name is not found.
//     adsk.fusion.Components.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//     };

//     //=========== Joint ============
//     // A joint in a design.
//     adsk.fusion.Joint = function Joint(handle) {
//         if (!(this instanceof adsk.fusion.Joint)) {
//             return adsk.fusion.Joint.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Joint.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Joint.prototype.constructor = adsk.fusion.Joint;
//     adsk.fusion.Joint.interfaceId = 'adsk.fusion.Joint';
//     adsk.objectTypes['adsk.fusion.Joint'] = adsk.fusion.Joint;
//     adsk.fusion.Joint.cast = function (object) {
//         return object instanceof adsk.fusion.Joint ? object : null;
//     };

//     // Returns the parent component that owns this joint.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'parentComponent', {
//         get : function () {
//             var result = this._execute('parentComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Gets and sets the name of the joint.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'name', {
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

//     // Gets and sets the first JointGeometry or JointOrigin for this joint.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'geometryOrOriginOne', {
//         get : function () {
//             var result = this._execute('geometryOrOriginOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometryOrOriginOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the second JointGeometry or JointOrigin for this joint.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'geometryOrOriginTwo', {
//         get : function () {
//             var result = this._execute('geometryOrOriginTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometryOrOriginTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parameter controlling the angle between the two input geometries. This is effectively the
//     // angle between the two primary axes of the two joint geometries.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Returns the parameter controlling the offset between the two input geometries. This is effectively the
//     // offset distance between the two planes defined by the primary and secondary axes
//     // of the input geometries.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'offset', {
//         get : function () {
//             var result = this._execute('offset');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets if the joint direction is flipped or not. This is effectively
//     // specifying if the third axis of the two input geometries is facing (false) or
//     // opposed (true).
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'isFlipped', {
//         get : function () {
//             var result = this._execute('isFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointMotion object that defines the motion relationship between the two geometries.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'jointMotion', {
//         get : function () {
//             var result = this._execute('jointMotion');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointMotion) : null;
//         }
//     });

//     // Returns the timeline object associated with this joint.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Gets and sets if this joint is suppressed.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'isSuppressed', {
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

//     // Gets and sets if the light bulb of this joint as displayed in the browser is on or off.
//     // A joint will only be visible if the light bulb is switched on. However,
//     // the light bulb can be on and the joint still invisible if a higher level occurrence
//     // in the assembly context is not visible because its light bulb is off or the joints folder
//     // is light bulb is off.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'isLightBulbOn', {
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

//     // Gets whether the joint is visible. To change the visibility see the isLightBulbOn property.
//     // This property is affected by the assembly context.
//     Object.defineProperty(adsk.fusion.Joint.prototype, 'isVisible', {
//         get : function () {
//             var result = this._execute('isVisible');
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes this joint.
//     // Returns true if the delete is successful.
//     adsk.fusion.Joint.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a rigid joint.
//     // Returns true if successful.
//     adsk.fusion.Joint.prototype.setAsRigidJointMotion = function () {
//         var result = this._execute('setAsRigidJointMotion');
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a revolute joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.Joint.prototype.setAsRevoluteJointMotion = function (rotationAxis, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsRevoluteJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a slider joint.
//     // sliderDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSliderDirectionEntity argument must also be provided.
//     // customSliderDirectionEntity : If the sliderDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slider direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.Joint.prototype.setAsSliderJointMotion = function (sliderDirection, customSliderDirectionEntity) {
//         if (!isFinite(sliderDirection)) { throw new TypeError('sliderDirection must be a number'); }
//         if (customSliderDirectionEntity === null || (customSliderDirectionEntity !== undefined && customSliderDirectionEntity !== null && !(customSliderDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSliderDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             sliderDirection : Number(sliderDirection)
//         };
//         if (customSliderDirectionEntity !== undefined) {
//             args.customSliderDirectionEntity = (customSliderDirectionEntity === null ? customSliderDirectionEntity : customSliderDirectionEntity.handle);
//         }
//         var result = this._execute('setAsSliderJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a cylindrical joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.Joint.prototype.setAsCylindricalJointMotion = function (rotationAxis, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsCylindricalJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a pin-slot joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // slideDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSlideDirectionEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // customSlideDirectionEntity : If the slideDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slide direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.Joint.prototype.setAsPinSlotJointMotion = function (rotationAxis, slideDirection, customRotationAxisEntity, customSlideDirectionEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (!isFinite(slideDirection)) { throw new TypeError('slideDirection must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         if (customSlideDirectionEntity === null || (customSlideDirectionEntity !== undefined && customSlideDirectionEntity !== null && !(customSlideDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSlideDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis),
//             slideDirection : Number(slideDirection)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         if (customSlideDirectionEntity !== undefined) {
//             args.customSlideDirectionEntity = (customSlideDirectionEntity === null ? customSlideDirectionEntity : customSlideDirectionEntity.handle);
//         }
//         var result = this._execute('setAsPinSlotJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a planar joint.
//     // normalDirection : Defines the direction of the normal of the single degree of rotation.
//     // This can be set to XAxisJointDirection, YAxisJointDirection, ZAxisJointDirection,
//     // or CustomJointDirection. If set to CustomJointDirection then the customNormalDirectionEntity
//     // argument must also be provided.
//     // customNormalDirectionEntity : If the normalDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the direction of the normal. This can be several types of entities that can define a direction.
//     // customPrimarySlideDirection : This arguments defines the direction of the primary slide direction. A default primary slide direction
//     // is automatically chosen and will be used if this argument is not provided or is null. The secondar slide
//     // direction is automatically inferred from the normal and primary slide directions.
//     // Returns true if the operation was successful.
//     adsk.fusion.Joint.prototype.setAsPlanarJointMotion = function (normalDirection, customNormalDirectionEntity, customPrimarySlideDirection) {
//         if (!isFinite(normalDirection)) { throw new TypeError('normalDirection must be a number'); }
//         if (customNormalDirectionEntity === null || (customNormalDirectionEntity !== undefined && customNormalDirectionEntity !== null && !(customNormalDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customNormalDirectionEntity must be a adsk.core.Base'); }
//         if (customPrimarySlideDirection === null || (customPrimarySlideDirection !== undefined && customPrimarySlideDirection !== null && !(customPrimarySlideDirection instanceof adsk.core.Base))) { throw new TypeError('customPrimarySlideDirection must be a adsk.core.Base'); }
//         var args = {
//             normalDirection : Number(normalDirection)
//         };
//         if (customNormalDirectionEntity !== undefined) {
//             args.customNormalDirectionEntity = (customNormalDirectionEntity === null ? customNormalDirectionEntity : customNormalDirectionEntity.handle);
//         }
//         if (customPrimarySlideDirection !== undefined) {
//             args.customPrimarySlideDirection = (customPrimarySlideDirection === null ? customPrimarySlideDirection : customPrimarySlideDirection.handle);
//         }
//         var result = this._execute('setAsPlanarJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Redefines the relationship between the two joint geometries as a ball joint.
//     // pitchDirection : Defines the direction the pitch angle is measured from. This can be ZAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customPitchDirection argument.
//     // yawDirection : Defines the direction the yaw is measured from. This can be XAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customYawDirection argument.
//     // customPitchDirection : If the pitchDirection argument is customPitchDirection this argument is used to define the direction the pitch
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // customYawDirection : If the yawDirection argument is customPitchDirection this argument is used to define the direction the yaw
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.Joint.prototype.setAsBallJointMotion = function (pitchDirection, yawDirection, customPitchDirection, customYawDirection) {
//         if (!isFinite(pitchDirection)) { throw new TypeError('pitchDirection must be a number'); }
//         if (!isFinite(yawDirection)) { throw new TypeError('yawDirection must be a number'); }
//         if (customPitchDirection === null || (customPitchDirection !== undefined && customPitchDirection !== null && !(customPitchDirection instanceof adsk.core.Base))) { throw new TypeError('customPitchDirection must be a adsk.core.Base'); }
//         if (customYawDirection === null || (customYawDirection !== undefined && customYawDirection !== null && !(customYawDirection instanceof adsk.core.Base))) { throw new TypeError('customYawDirection must be a adsk.core.Base'); }
//         var args = {
//             pitchDirection : Number(pitchDirection),
//             yawDirection : Number(yawDirection)
//         };
//         if (customPitchDirection !== undefined) {
//             args.customPitchDirection = (customPitchDirection === null ? customPitchDirection : customPitchDirection.handle);
//         }
//         if (customYawDirection !== undefined) {
//             args.customYawDirection = (customYawDirection === null ? customYawDirection : customYawDirection.handle);
//         }
//         var result = this._execute('setAsBallJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.Joint.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//     };

//     //=========== JointDirections ============
//     // Specifies the different types of directions that can be used to define directions of a joint.
//     adsk.fusion.JointDirections = {
//         XAxisJointDirection : 0,
//         YAxisJointDirection : 1,
//         ZAxisJointDirection : 2,
//         CustomJointDirection : 3
//     };

//     //=========== JointGeometry ============
//     // A transient object used to define and query the geometric input of a joint and the resulting coordinate
//     // system it defines. New JointGeometry objects are created using its various static create methods and
//     // are then used as input to the Joints.createInput method.
//     adsk.fusion.JointGeometry = function JointGeometry(handle) {
//         if (!(this instanceof adsk.fusion.JointGeometry)) {
//             return adsk.fusion.JointGeometry.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointGeometry.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointGeometry.prototype.constructor = adsk.fusion.JointGeometry;
//     adsk.fusion.JointGeometry.interfaceId = 'adsk.fusion.JointGeometry';
//     adsk.objectTypes['adsk.fusion.JointGeometry'] = adsk.fusion.JointGeometry;
//     adsk.fusion.JointGeometry.cast = function (object) {
//         return object instanceof adsk.fusion.JointGeometry ? object : null;
//     };

//     // Returns the type of geometry this JointGeometry object represents.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'geometryType', {
//         get : function () {
//             var result = this._execute('geometryType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the keypoint type this JointGeometry is using.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'keyPointType', {
//         get : function () {
//             var result = this._execute('keyPointType');
//             return result ? result.value : undefined;
//         }
//     });

//     // The first entity that's defining this joint geometry. This can be various types of geometry depending
//     // on how this joint geometry is defined. The geometryType property indicates how this joint geometry is
//     // defined a provides a clue about the type of geometry to expect back from this property.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'entityOne', {
//         get : function () {
//             var result = this._execute('entityOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // This is the second entity that defines this joint geometry. This isn't used for all joint geometry types
//     // and will return null in the cases where it's not used. A second geometry is used in the case where the geometryType
//     // property returns JointProfileGeometry, JointPlanarBRepFaceGeometry, or JointBetweenTowFacesGeometry.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'entityTwo', {
//         get : function () {
//             var result = this._execute('entityTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the origin point that's been calculated for this joint geometry.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'origin', {
//         get : function () {
//             var result = this._execute('origin');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Returns the direction of the primary axis that's been calculated for this joint geometry.
//     // Conceptually, this is the X-axis of the computed coordinate system.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'primaryAxisVector', {
//         get : function () {
//             var result = this._execute('primaryAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction of the secondary axis that's been calculated for this joint geometry.
//     // Conceptually, this is the Y-axis of the computed coordinate system.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'secondaryAxisVector', {
//         get : function () {
//             var result = this._execute('secondaryAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction of the third axis that's been calculated for this joint geometry.
//     // Conceptually, this is the Z-axis of the computed coordinate system.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'thirdAxisVector', {
//         get : function () {
//             var result = this._execute('thirdAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the first plane for joint geometry that is defined between two planes. Returns null in all other cases.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'planeOne', {
//         get : function () {
//             var result = this._execute('planeOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Returns the second plane for joint geometry that is defined between two planes. Returns null in all other cases.
//     Object.defineProperty(adsk.fusion.JointGeometry.prototype, 'planeTwo', {
//         get : function () {
//             var result = this._execute('planeTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Creates a new transient JointGeometry object based on a planar BRepFace object. A JointGeometry
//     // object can be used to create a joint or joint origin.
//     // face : The planar BRepFace object
//     // edge : A BRepEdge edge object that is one of the edges of the specified face. This argument can be
//     // null in the case where the keyPointType is CenterKeypoint indicating the center of the face
//     // is to be used. When an edge is used, the keyPointType specifies the position along the edge
//     // for the keypoint.
//     // keyPointType : Specifies the position along the edge where the joint keypoint will be located. For open edges
//     // this can be StartKeyPoint, MiddleKeyPoint, or EndKeyPoint. For closed edges (i.e. circles), it
//     // must be CenterKeyPoint. When no edge is specified, it must be CenterKeyPoint indicating the center
//     // of area of the face is to be used.
//     // Returns the transient JointGeometry object that can be used to create a joint or joint origin or null in case of a failure.
//     adsk.fusion.JointGeometry.createByPlanarFace = function (face, edge, keyPointType) {
//         if (face !== null && !(face instanceof adsk.fusion.BRepFace)) { throw new TypeError('face must be a adsk.fusion.BRepFace'); }
//         if (edge !== null && !(edge instanceof adsk.fusion.BRepEdge)) { throw new TypeError('edge must be a adsk.fusion.BRepEdge'); }
//         if (!isFinite(keyPointType)) { throw new TypeError('keyPointType must be a number'); }
//         var args = {
//             face : (face === null ? face : face.handle),
//             edge : (edge === null ? edge : edge.handle),
//             keyPointType : Number(keyPointType)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.fusion.JointGeometry', 'createByPlanarFace', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//     };

//     // Creates a new transient JointGeometry object based on a non-planar analytical BRepFace object. This is limited
//     // to cylinders, cones, spheres, and tori. A JointGeometry object can be used to create a joint or joint origin.
//     // face : The cylindrical, conical, spherical, or toroidal BRepFace object.
//     // keyPointType : Specifies the position relative to the input face where joint keypoint will be located. For cylinders
//     // and cones this can be StartKeyPoint, MiddleKeyPoint, or EndKeyPoint. For spheres and tori this must be
//     // CenterKeyPoint.
//     // Returns the transient JointGeometry object that can be used to create a joint or joint origin or null in case of a failure.
//     adsk.fusion.JointGeometry.createByNonPlanarFace = function (face, keyPointType) {
//         if (face !== null && !(face instanceof adsk.fusion.BRepFace)) { throw new TypeError('face must be a adsk.fusion.BRepFace'); }
//         if (!isFinite(keyPointType)) { throw new TypeError('keyPointType must be a number'); }
//         var args = {
//             face : (face === null ? face : face.handle),
//             keyPointType : Number(keyPointType)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.fusion.JointGeometry', 'createByNonPlanarFace', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//     };

//     // Creates a new transient JointGeometry object based on a planar BRepFace object. A JointGeometry
//     // object can be used to create a joint or joint origin.
//     // profile : The Profile object.
//     // sketchCurve : A sketch curve that is part of the input profile. This argument can be
//     // null in the case where the keyPointType is CenterKeypoint indicating the center of the profile
//     // is to be used. When a curve is used, the keyPointType specifies the position along the curve
//     // for the keypoint.
//     // keyPointType : Specifies the position along the curve where the joint keypoint will be located. For open curves (lines, arcs, elliptical arcs, and open splines)
//     // this can be StartKeyPoint, MiddleKeyPoint, or EndKeyPoint. For closed analytic (circles and ellipses), it
//     // must be CenterKeyPoint. When no curve is specified, it must be CenterKeyPoint indicating the center
//     // of area of the profile is to be used.
//     // Returns the transient JointGeometry object that can be used to create a joint or joint origin or null in case of a failure.
//     adsk.fusion.JointGeometry.createByProfile = function (profile, sketchCurve, keyPointType) {
//         if (profile !== null && !(profile instanceof adsk.fusion.Profile)) { throw new TypeError('profile must be a adsk.fusion.Profile'); }
//         if (sketchCurve !== null && !(sketchCurve instanceof adsk.fusion.SketchCurve)) { throw new TypeError('sketchCurve must be a adsk.fusion.SketchCurve'); }
//         if (!isFinite(keyPointType)) { throw new TypeError('keyPointType must be a number'); }
//         var args = {
//             profile : (profile === null ? profile : profile.handle),
//             sketchCurve : (sketchCurve === null ? sketchCurve : sketchCurve.handle),
//             keyPointType : Number(keyPointType)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.fusion.JointGeometry', 'createByProfile', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//     };

//     // Creates a new transient JointGeometry object using a BRepEdge or SketchCurve as input. A JointGeometry
//     // object can be used to create a joint or joint origin.
//     // curve : Input BRepEdge or SketchCurve.
//     // keyPointType : The position on the curve where to position the joint coordinate system. For any open curves
//     // the valid types are StartKeyPoint, MiddleKeyPoint, and EndKeyPoint. For circular and elliptical
//     // shaped curves the option is CenterKeyPoint. For closed spline curves either StartKeyPoint or
//     // EndKeyPoint can be used and the result is the same.
//     // Returns the transient JointGeometry object that can be used to create a joint or joint origin or null in case of a failure.
//     adsk.fusion.JointGeometry.createByCurve = function (curve, keyPointType) {
//         if (curve !== null && !(curve instanceof adsk.core.Base)) { throw new TypeError('curve must be a adsk.core.Base'); }
//         if (!isFinite(keyPointType)) { throw new TypeError('keyPointType must be a number'); }
//         var args = {
//             curve : (curve === null ? curve : curve.handle),
//             keyPointType : Number(keyPointType)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.fusion.JointGeometry', 'createByCurve', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//     };

//     // Creates a new transient JointGeometry object using a ConstructionPoint, SketchPoint or BRepVertex as input.
//     // A JointGeometry object can be used to create a joint or joint origin.
//     // point : The ConstructionPoint, SketchPoint or BRepVertex object.
//     // Returns the transient JointGeometry object that can be used to create a joint or joint origin or null in case of a failure.
//     adsk.fusion.JointGeometry.createByPoint = function (point) {
//         if (point !== null && !(point instanceof adsk.core.Base)) { throw new TypeError('point must be a adsk.core.Base'); }
//         var args = {
//             point : (point === null ? point : point.handle)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.fusion.JointGeometry', 'createByPoint', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//     };

//     // Creates a new transient JointGeometry object based on a plane bisecting the two input planes.
//     // planeOne : The first planar entity that the joint origin will be created between. This can be a planar BRepFace
//     // or a ConstructionPlane object.
//     // planeTwo : The second planar entity that the joint origin will be created between. This can be a planar BRepFace
//     // or a ConstructionPlane object.
//     // entityOne : Specifies the entity that is used to define the keypoint. This can be many types of geometry including
//     // edges, planar and non-planar faces, profiles, and sketch geometry.
//     // entityTwo : If the entityOne argument is a planar BRepFace or a Profile, then this argument specifies either
//     // an edge on the face or a sketch curve on the profile. For a planar face this argument is optional in the
//     // case where the keyPointType argument is CenterKeyPoint indicating the center of area of the face is to be used.
//     // keyPointType : Specifies the position on the keyPointGeometry where the keypoint will be defined. This keypoint is then
//     // projected onto the plane to define the position of the joint geometry.
//     // The values that are valid for this argument depend on the type of geometry specified for the geometry and edgeOrCurve
//     // arguments.
//     // If the geometry argument is a planar face and the edgeOrCurve argument is an open BRepEdge object
//     // then this can be StartKeyPoint, MiddleKeyPoint, or EndKeyPoint. If the geometry argument is a planar face and the edgeOrCurve argument
//     // is a closed BRepEdge object (i.e. circles), it must be CenterKeyPoint. If the geometry argument is a planar face and
//     // the edgeOrCurve argument is null, then this must be CenterKeyPoint indicating the center of area of the face.
//     // If the geometry argument is a non-planar face (cylinder, cone, sphere, or torus) this can be StartKeyPoint, MiddleKeyPoint, or EndKeyPoint
//     // for cylinders and cones but must be CenterKeyPoint for spheres and tori. The edgeOrCurve argument is ignored in this case.
//     // If the geometry argument is a profile and the edgeOrCurve argument is null this can be CenterKeyPoint indicating the center of area
//     // of the profile. If the geometry argument is a profile and the edgeOrCurve argument is an open sketch curve on the profile
//     // then this can be StartKeyPoint, MiddleKeyPoint, or EndKeyPoint. If the geometry argument is a profile and the edgeOrCurve argument
//     // is a closed sketch curve (i.e. circles), it must be CenterKeyPoint.
//     // Returns the transient JointGeometry object that can be used to create a joint or joint origin or null in case of a failure.
//     adsk.fusion.JointGeometry.createByBetweenTwoPlanes = function (planeOne, planeTwo, entityOne, entityTwo, keyPointType) {
//         if (planeOne !== null && !(planeOne instanceof adsk.core.Base)) { throw new TypeError('planeOne must be a adsk.core.Base'); }
//         if (planeTwo !== null && !(planeTwo instanceof adsk.core.Base)) { throw new TypeError('planeTwo must be a adsk.core.Base'); }
//         if (entityOne !== null && !(entityOne instanceof adsk.core.Base)) { throw new TypeError('entityOne must be a adsk.core.Base'); }
//         if (entityTwo !== null && !(entityTwo instanceof adsk.core.Base)) { throw new TypeError('entityTwo must be a adsk.core.Base'); }
//         if (!isFinite(keyPointType)) { throw new TypeError('keyPointType must be a number'); }
//         var args = {
//             planeOne : (planeOne === null ? planeOne : planeOne.handle),
//             planeTwo : (planeTwo === null ? planeTwo : planeTwo.handle),
//             entityOne : (entityOne === null ? entityOne : entityOne.handle),
//             entityTwo : (entityTwo === null ? entityTwo : entityTwo.handle),
//             keyPointType : Number(keyPointType)
//         };
//         var result = adsk.core.Base._executeStatic('adsk.fusion.JointGeometry', 'createByBetweenTwoPlanes', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//     };

//     //=========== JointGeometryTypes ============
//     // List of the different types of ways that geometry for a joint can be defined.
//     adsk.fusion.JointGeometryTypes = {
//         JointConstructionPointGeometry : 0,
//         JointSketchPointGeometry : 1,
//         JointBRepVertexGeometry : 2,
//         JointBRepEdgeGeometry : 3,
//         JointSketchCurveGeometry : 4,
//         JointProfileGeometry : 5,
//         JointPlanarBRepFaceGeometry : 6,
//         JointNonPlanarBRepFaceGeometry : 7,
//         JointBetweenTwoPlanesGeometry : 8
//     };

//     //=========== JointInput ============
//     // Defines all of the information required to create a new joint. This object provides
//     // equivalent functionality to the Joint command dialog in that it gathers the required
//     // information to create a joint.
//     adsk.fusion.JointInput = function JointInput(handle) {
//         if (!(this instanceof adsk.fusion.JointInput)) {
//             return adsk.fusion.JointInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointInput.prototype.constructor = adsk.fusion.JointInput;
//     adsk.fusion.JointInput.interfaceId = 'adsk.fusion.JointInput';
//     adsk.objectTypes['adsk.fusion.JointInput'] = adsk.fusion.JointInput;
//     adsk.fusion.JointInput.cast = function (object) {
//         return object instanceof adsk.fusion.JointInput ? object : null;
//     };

//     // Gets and sets the first JointGeometry or JointOrigin for this joint.
//     Object.defineProperty(adsk.fusion.JointInput.prototype, 'geometryOrOriginOne', {
//         get : function () {
//             var result = this._execute('geometryOrOriginOne');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometryOrOriginOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the second JointGeometry or JointOrigin for this joint.
//     Object.defineProperty(adsk.fusion.JointInput.prototype, 'geometryOrOriginTwo', {
//         get : function () {
//             var result = this._execute('geometryOrOriginTwo');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometryOrOriginTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the angle between two input geometries. This is effectively the
//     // angle between the two primary axes of the input geometries. When a new
//     // JointInput object is created, this value defaults to zero. When the joint
//     // is created this will become the value of the parameter that controls the joint angle.
//     // When using a real value to define the angle, the value is in radians. When
//     // using a string the expression is evaluated using the document default units for angles.
//     Object.defineProperty(adsk.fusion.JointInput.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('angle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the offset between two input geometries. This is effectively the
//     // offset distance between the two planes defined by the primary and secondary axes
//     // of the input geometries. When a new JointInput object is created, this value defaults to zero.
//     // When the joint is created this will become the value of the parameter that controls the joint offset.
//     // When using a real value to define the offset, the value is in centimeters. When
//     // using a string the expression is evaluated using the document default units for distance.
//     Object.defineProperty(adsk.fusion.JointInput.prototype, 'offset', {
//         get : function () {
//             var result = this._execute('offset');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('offset', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the joint direction is flipped or not. This is effectively
//     // specifying if the third axis of the two input geometries is facing (false) or
//     // opposed (true).
//     Object.defineProperty(adsk.fusion.JointInput.prototype, 'isFlipped', {
//         get : function () {
//             var result = this._execute('isFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns an object derived from JointMotion that defines how the motion between the two joint geometries is defined.
//     Object.defineProperty(adsk.fusion.JointInput.prototype, 'jointMotion', {
//         get : function () {
//             var result = this._execute('jointMotion');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointMotion) : null;
//         }
//     });

//     // Defines the relationship between the two joint geometries as a rigid joint.
//     // Returns true if successful.
//     adsk.fusion.JointInput.prototype.setAsRigidJointMotion = function () {
//         var result = this._execute('setAsRigidJointMotion');
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a revolute joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.JointInput.prototype.setAsRevoluteJointMotion = function (rotationAxis, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsRevoluteJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a slider joint.
//     // sliderDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSliderDirectionEntity argument must also be provided.
//     // customSliderDirectionEntity : If the sliderDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slider direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.JointInput.prototype.setAsSliderJointMotion = function (sliderDirection, customSliderDirectionEntity) {
//         if (!isFinite(sliderDirection)) { throw new TypeError('sliderDirection must be a number'); }
//         if (customSliderDirectionEntity === null || (customSliderDirectionEntity !== undefined && customSliderDirectionEntity !== null && !(customSliderDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSliderDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             sliderDirection : Number(sliderDirection)
//         };
//         if (customSliderDirectionEntity !== undefined) {
//             args.customSliderDirectionEntity = (customSliderDirectionEntity === null ? customSliderDirectionEntity : customSliderDirectionEntity.handle);
//         }
//         var result = this._execute('setAsSliderJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a cylindrical joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // from.
//     // Returns true if the operation was successful.
//     adsk.fusion.JointInput.prototype.setAsCylindricalJointMotion = function (rotationAxis, customRotationAxisEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         var result = this._execute('setAsCylindricalJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a pin-slot joint.
//     // rotationAxis : Specifies which axis the rotation is around. If this is set to CustomJointDirection then the
//     // customRotationAxisEntity argument must also be provided.
//     // slideDirection : Specifies which axis the slide direction is along. If this is set to CustomJointDirection then the
//     // customSlideDirectionEntity argument must also be provided.
//     // customRotationAxisEntity : If the rotationAxis is customAxisEntity this argument is used to specify the entity that defines
//     // the custom axis of rotation. This can be several types of entities that an axis can be derived
//     // customSlideDirectionEntity : If the slideDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the custom slide direction. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.JointInput.prototype.setAsPinSlotJointMotion = function (rotationAxis, slideDirection, customRotationAxisEntity, customSlideDirectionEntity) {
//         if (!isFinite(rotationAxis)) { throw new TypeError('rotationAxis must be a number'); }
//         if (!isFinite(slideDirection)) { throw new TypeError('slideDirection must be a number'); }
//         if (customRotationAxisEntity === null || (customRotationAxisEntity !== undefined && customRotationAxisEntity !== null && !(customRotationAxisEntity instanceof adsk.core.Base))) { throw new TypeError('customRotationAxisEntity must be a adsk.core.Base'); }
//         if (customSlideDirectionEntity === null || (customSlideDirectionEntity !== undefined && customSlideDirectionEntity !== null && !(customSlideDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customSlideDirectionEntity must be a adsk.core.Base'); }
//         var args = {
//             rotationAxis : Number(rotationAxis),
//             slideDirection : Number(slideDirection)
//         };
//         if (customRotationAxisEntity !== undefined) {
//             args.customRotationAxisEntity = (customRotationAxisEntity === null ? customRotationAxisEntity : customRotationAxisEntity.handle);
//         }
//         if (customSlideDirectionEntity !== undefined) {
//             args.customSlideDirectionEntity = (customSlideDirectionEntity === null ? customSlideDirectionEntity : customSlideDirectionEntity.handle);
//         }
//         var result = this._execute('setAsPinSlotJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a planar joint.
//     // normalDirection : Defines the direction of the normal of the single degree of rotation.
//     // This can be set to XAxisJointDirection, YAxisJointDirection, ZAxisJointDirection,
//     // or CustomJointDirection. If set to CustomJointDirection then the customNormalDirectionEntity
//     // argument must also be provided.
//     // customNormalDirectionEntity : If the normalDirection is CustomJointDirection this argument is used to specify the entity that defines
//     // the direction of the normal. This can be several types of entities that can define a direction.
//     // customPrimarySlideDirection : This arguments defines the direction of the primary slide direction. A default primary slide direction
//     // is automatically chosen and will be used if this argument is not provided or is null. The secondary slide
//     // direction is automatically inferred from the normal and primary slide directions.
//     // Returns true if the operation was successful.
//     adsk.fusion.JointInput.prototype.setAsPlanarJointMotion = function (normalDirection, customNormalDirectionEntity, customPrimarySlideDirection) {
//         if (!isFinite(normalDirection)) { throw new TypeError('normalDirection must be a number'); }
//         if (customNormalDirectionEntity === null || (customNormalDirectionEntity !== undefined && customNormalDirectionEntity !== null && !(customNormalDirectionEntity instanceof adsk.core.Base))) { throw new TypeError('customNormalDirectionEntity must be a adsk.core.Base'); }
//         if (customPrimarySlideDirection === null || (customPrimarySlideDirection !== undefined && customPrimarySlideDirection !== null && !(customPrimarySlideDirection instanceof adsk.core.Base))) { throw new TypeError('customPrimarySlideDirection must be a adsk.core.Base'); }
//         var args = {
//             normalDirection : Number(normalDirection)
//         };
//         if (customNormalDirectionEntity !== undefined) {
//             args.customNormalDirectionEntity = (customNormalDirectionEntity === null ? customNormalDirectionEntity : customNormalDirectionEntity.handle);
//         }
//         if (customPrimarySlideDirection !== undefined) {
//             args.customPrimarySlideDirection = (customPrimarySlideDirection === null ? customPrimarySlideDirection : customPrimarySlideDirection.handle);
//         }
//         var result = this._execute('setAsPlanarJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     // Defines the relationship between the two joint geometries as a ball joint.
//     // pitchDirection : Defines the direction the pitch angle is measured from. This can be ZAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customPitchDirection argument.
//     // yawDirection : Defines the direction the yaw is measured from. This can be XAxisJointDirection or CustomJointDirection. If
//     // CustomJointDirection is specified then you must also provide a value for the customYawDirection argument.
//     // customPitchDirection : If the pitchDirection argument is customPitchDirection this argument is used to define the direction the pitch
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // customYawDirection : If the yawDirection argument is customPitchDirection this argument is used to define the direction the yaw
//     // angel is measured from. This can be several types of entities that can define a direction.
//     // Returns true if the operation was successful.
//     adsk.fusion.JointInput.prototype.setAsBallJointMotion = function (pitchDirection, yawDirection, customPitchDirection, customYawDirection) {
//         if (!isFinite(pitchDirection)) { throw new TypeError('pitchDirection must be a number'); }
//         if (!isFinite(yawDirection)) { throw new TypeError('yawDirection must be a number'); }
//         if (customPitchDirection === null || (customPitchDirection !== undefined && customPitchDirection !== null && !(customPitchDirection instanceof adsk.core.Base))) { throw new TypeError('customPitchDirection must be a adsk.core.Base'); }
//         if (customYawDirection === null || (customYawDirection !== undefined && customYawDirection !== null && !(customYawDirection instanceof adsk.core.Base))) { throw new TypeError('customYawDirection must be a adsk.core.Base'); }
//         var args = {
//             pitchDirection : Number(pitchDirection),
//             yawDirection : Number(yawDirection)
//         };
//         if (customPitchDirection !== undefined) {
//             args.customPitchDirection = (customPitchDirection === null ? customPitchDirection : customPitchDirection.handle);
//         }
//         if (customYawDirection !== undefined) {
//             args.customYawDirection = (customYawDirection === null ? customYawDirection : customYawDirection.handle);
//         }
//         var result = this._execute('setAsBallJointMotion', args);
//         return result ? result.value : undefined;
//     };

//     //=========== JointKeyPointTypes ============
//     // List of the various keypoints of geometry that can be used when defining joint geometry.
//     adsk.fusion.JointKeyPointTypes = {
//         StartKeyPoint : 0,
//         MiddleKeyPoint : 1,
//         EndKeyPoint : 2,
//         CenterKeyPoint : 3
//     };

//     //=========== JointLimits ============
//     // Used to define limits for the range of motion of a joint.
//     adsk.fusion.JointLimits = function JointLimits(handle) {
//         if (!(this instanceof adsk.fusion.JointLimits)) {
//             return adsk.fusion.JointLimits.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointLimits.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointLimits.prototype.constructor = adsk.fusion.JointLimits;
//     adsk.fusion.JointLimits.interfaceId = 'adsk.fusion.JointLimits';
//     adsk.objectTypes['adsk.fusion.JointLimits'] = adsk.fusion.JointLimits;
//     adsk.fusion.JointLimits.cast = function (object) {
//         return object instanceof adsk.fusion.JointLimits ? object : null;
//     };

//     // The minimum value of the value. This is in either centimeters
//     // or radians depending on if the joint value this is associated with
//     // defines a distance or an angle.
//     Object.defineProperty(adsk.fusion.JointLimits.prototype, 'minimumValue', {
//         get : function () {
//             var result = this._execute('minimumValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('minimumValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The maximum value of the value. This is in either centimeters
//     // or radians depending on if the joint value this is associated with
//     // defines a distance or an angle.
//     Object.defineProperty(adsk.fusion.JointLimits.prototype, 'maximumValue', {
//         get : function () {
//             var result = this._execute('maximumValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('maximumValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The resting state value. This is in either centimeters
//     // or radians depending on if the joint value this is associated with
//     // defines a distance or an angle.
//     Object.defineProperty(adsk.fusion.JointLimits.prototype, 'restValue', {
//         get : function () {
//             var result = this._execute('restValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('restValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether the minimum joint limit is enabled or not.
//     Object.defineProperty(adsk.fusion.JointLimits.prototype, 'isMinimumValueEnabled', {
//         get : function () {
//             var result = this._execute('isMinimumValueEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isMinimumValueEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether the maximum joint limit is enabled or not.
//     Object.defineProperty(adsk.fusion.JointLimits.prototype, 'isMaximumValueEnabled', {
//         get : function () {
//             var result = this._execute('isMaximumValueEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isMaximumValueEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether the resting joint value is enabled or not.
//     Object.defineProperty(adsk.fusion.JointLimits.prototype, 'isRestValueEnabled', {
//         get : function () {
//             var result = this._execute('isRestValueEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isRestValueEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== JointList ============
//     // A list of joints.
//     adsk.fusion.JointList = function JointList(handle) {
//         if (!(this instanceof adsk.fusion.JointList)) {
//             return adsk.fusion.JointList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointList.prototype.constructor = adsk.fusion.JointList;
//     adsk.fusion.JointList.interfaceId = 'adsk.fusion.JointList';
//     adsk.objectTypes['adsk.fusion.JointList'] = adsk.fusion.JointList;
//     adsk.fusion.JointList.cast = function (object) {
//         return object instanceof adsk.fusion.JointList ? object : null;
//     };

//     // Returns number of joints in the list.
//     Object.defineProperty(adsk.fusion.JointList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified joint using an index into the list.
//     // index : The index of the item within the list to return. The first item in the list has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.JointList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//     };

//     // Function that returns the specified joint using a name.
//     // name : The name of the item within the list to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.JointList.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//     };

//     //=========== JointMotion ============
//     // The base class for the classes that represent all of the
//     // various joint types.
//     adsk.fusion.JointMotion = function JointMotion(handle) {
//         if (!(this instanceof adsk.fusion.JointMotion)) {
//             return adsk.fusion.JointMotion.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointMotion.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointMotion.prototype.constructor = adsk.fusion.JointMotion;
//     adsk.fusion.JointMotion.interfaceId = 'adsk.fusion.JointMotion';
//     adsk.objectTypes['adsk.fusion.JointMotion'] = adsk.fusion.JointMotion;
//     adsk.fusion.JointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.JointMotion ? object : null;
//     };

//     // Returns an enum value indicating the type of joint this joint represents.
//     Object.defineProperty(adsk.fusion.JointMotion.prototype, 'jointType', {
//         get : function () {
//             var result = this._execute('jointType');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== JointOrigin ============
//     // Represents an existing joint origin in a design.
//     adsk.fusion.JointOrigin = function JointOrigin(handle) {
//         if (!(this instanceof adsk.fusion.JointOrigin)) {
//             return adsk.fusion.JointOrigin.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointOrigin.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointOrigin.prototype.constructor = adsk.fusion.JointOrigin;
//     adsk.fusion.JointOrigin.interfaceId = 'adsk.fusion.JointOrigin';
//     adsk.objectTypes['adsk.fusion.JointOrigin'] = adsk.fusion.JointOrigin;
//     adsk.fusion.JointOrigin.cast = function (object) {
//         return object instanceof adsk.fusion.JointOrigin ? object : null;
//     };

//     // Returns the parent component that owns this joint origin.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'parentComponent', {
//         get : function () {
//             var result = this._execute('parentComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Gets and sets the name of this joint origin. This is the name seen by the user in the timeline.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'name', {
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

//     // Gets and sets the joint geometry for this joint origin input. This
//     // defines the location of the joint origin.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.JointGeometry)) { throw new TypeError('value must be a adsk.fusion.JointGeometry'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometry', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the parameter that controls the angle. The value can be changed
//     // using the functionality of the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the parameter that controls the X offset direction. The value can be changed
//     // using the functionality of the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'offsetX', {
//         get : function () {
//             var result = this._execute('offsetX');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the parameter that controls the Y offset direction. The value can be changed
//     // using the functionality of the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'offsetY', {
//         get : function () {
//             var result = this._execute('offsetY');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets the parameter that controls the Z offset direction. The value can be changed
//     // using the functionality of the returned ModelParameter object.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'offsetZ', {
//         get : function () {
//             var result = this._execute('offsetZ');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameter) : null;
//         }
//     });

//     // Gets and sets if the joint origin direction is flipped or not.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'isFlipped', {
//         get : function () {
//             var result = this._execute('isFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the X axis direction. This defaults
//     // to null meaning the X axis is inferred from the input geometry.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'xAxisEntity', {
//         get : function () {
//             var result = this._execute('xAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('xAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the Z axis direction. This defaults
//     // to null meaning the Z axis is inferred from the input geometry.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'zAxisEntity', {
//         get : function () {
//             var result = this._execute('zAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('zAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the primary axis that's been calculated for this joint origin.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'primaryAxisVector', {
//         get : function () {
//             var result = this._execute('primaryAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction of the secondary axis that's been calculated for this joint origin.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'secondaryAxisVector', {
//         get : function () {
//             var result = this._execute('secondaryAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction of the third axis that's been calculated for this joint origin.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'thirdAxisVector', {
//         get : function () {
//             var result = this._execute('thirdAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the timeline object associated with this joint origin.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.JointOrigin.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Deletes this joint origin.
//     // Returns true if successful.
//     adsk.fusion.JointOrigin.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.JointOrigin.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//     };

//     //=========== JointOriginInput ============
//     // Defines all of the information required to create a new joint origin. This object provides
//     // equivalent functionality to the Joint Origin command dialog in that it gathers the required
//     // information to create a joint origin.
//     adsk.fusion.JointOriginInput = function JointOriginInput(handle) {
//         if (!(this instanceof adsk.fusion.JointOriginInput)) {
//             return adsk.fusion.JointOriginInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointOriginInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointOriginInput.prototype.constructor = adsk.fusion.JointOriginInput;
//     adsk.fusion.JointOriginInput.interfaceId = 'adsk.fusion.JointOriginInput';
//     adsk.objectTypes['adsk.fusion.JointOriginInput'] = adsk.fusion.JointOriginInput;
//     adsk.fusion.JointOriginInput.cast = function (object) {
//         return object instanceof adsk.fusion.JointOriginInput ? object : null;
//     };

//     // Gets and sets the joint geometry for this joint origin input. This
//     // defines the location of the joint origin.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'geometry', {
//         get : function () {
//             var result = this._execute('geometry');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointGeometry) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.fusion.JointGeometry)) { throw new TypeError('value must be a adsk.fusion.JointGeometry'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('geometry', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the value that defines the angle for the joint origin. This defaults to zero
//     // if it's not specified. The value defines an angle and if the ValueInput is defined using
//     // the createByReal method the value is assumed to be radians.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'angle', {
//         get : function () {
//             var result = this._execute('angle');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('angle', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the value that defines the X offset direction. This defaults to zero
//     // if it's not specified. The value defines a distance and if the ValueInput is defined using
//     // the createByReal method the value is assumed to be centimeters.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'offsetX', {
//         get : function () {
//             var result = this._execute('offsetX');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('offsetX', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the value that defines the Y offset direction. This defaults to zero
//     // if it's not specified. The value defines a distance and if the ValueInput is defined using
//     // the createByReal method the value is assumed to be centimeters.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'offsetY', {
//         get : function () {
//             var result = this._execute('offsetY');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('offsetY', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the value that defines the Z offset direction. This defaults to zero
//     // if it's not specified. The value defines a distance and if the ValueInput is defined using
//     // the createByReal method the value is assumed to be centimeters.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'offsetZ', {
//         get : function () {
//             var result = this._execute('offsetZ');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueInput) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ValueInput)) { throw new TypeError('value must be a adsk.core.ValueInput'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('offsetZ', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the joint origin direction is flipped or not.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'isFlipped', {
//         get : function () {
//             var result = this._execute('isFlipped');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFlipped', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the X axis direction. This defaults
//     // to null meaning the X axis is inferred from the input geometry.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'xAxisEntity', {
//         get : function () {
//             var result = this._execute('xAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('xAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the entity that defines the Z axis direction. This defaults
//     // to null meaning the Z axis is inferred from the input geometry.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'zAxisEntity', {
//         get : function () {
//             var result = this._execute('zAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('zAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the primary axis that's been calculated for this joint origin.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'primaryAxisVector', {
//         get : function () {
//             var result = this._execute('primaryAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction of the secondary axis that's been calculated for this joint origin.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'secondaryAxisVector', {
//         get : function () {
//             var result = this._execute('secondaryAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction of the third axis that's been calculated for this joint origin.
//     Object.defineProperty(adsk.fusion.JointOriginInput.prototype, 'thirdAxisVector', {
//         get : function () {
//             var result = this._execute('thirdAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     //=========== JointOriginList ============
//     // A list of joint origins.
//     adsk.fusion.JointOriginList = function JointOriginList(handle) {
//         if (!(this instanceof adsk.fusion.JointOriginList)) {
//             return adsk.fusion.JointOriginList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointOriginList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointOriginList.prototype.constructor = adsk.fusion.JointOriginList;
//     adsk.fusion.JointOriginList.interfaceId = 'adsk.fusion.JointOriginList';
//     adsk.objectTypes['adsk.fusion.JointOriginList'] = adsk.fusion.JointOriginList;
//     adsk.fusion.JointOriginList.cast = function (object) {
//         return object instanceof adsk.fusion.JointOriginList ? object : null;
//     };

//     // Returns number of joint origins in the list.
//     Object.defineProperty(adsk.fusion.JointOriginList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified joint origin using an index into the list.
//     // index : The index of the item within the list to return. The first item in the list has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.JointOriginList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//     };

//     // Function that returns the specified joint origin using a name.
//     // name : The name of the item within the list to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.JointOriginList.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//     };

//     //=========== JointOrigins ============
//     // The collection of joint origins in this component. This provides access to all existing
//     // joint origins and supports the ability to create new joint origins.
//     adsk.fusion.JointOrigins = function JointOrigins(handle) {
//         if (!(this instanceof adsk.fusion.JointOrigins)) {
//             return adsk.fusion.JointOrigins.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.JointOrigins.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.JointOrigins.prototype.constructor = adsk.fusion.JointOrigins;
//     adsk.fusion.JointOrigins.interfaceId = 'adsk.fusion.JointOrigins';
//     adsk.objectTypes['adsk.fusion.JointOrigins'] = adsk.fusion.JointOrigins;
//     adsk.fusion.JointOrigins.cast = function (object) {
//         return object instanceof adsk.fusion.JointOrigins ? object : null;
//     };

//     // Returns number of joint origins in the collection.
//     Object.defineProperty(adsk.fusion.JointOrigins.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified joint origin using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.JointOrigins.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//     };

//     // Function that returns the specified joint origin using a name.
//     // name : The name of the item within the collection to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.JointOrigins.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//     };

//     // Creates a JointOriginInput object which is used to collect all of the information
//     // needed to create a simple joint origin. The creation of the input object takes the required
//     // input as the geometry argument and you can optionally use methods and properties on the created
//     // JointOriginInput to set other optional settings. The JointOrigin is created by calling the add
//     // method of the JointOrigins object and passing it the JointOriginInput object.
//     // geometry : A JointGeometry object that defines the geometry the joint origin will be created on.
//     // Returns a JointOriginInput object if successfully created and null if it fails.
//     adsk.fusion.JointOrigins.prototype.createInput = function (geometry) {
//         if (geometry !== null && !(geometry instanceof adsk.fusion.JointGeometry)) { throw new TypeError('geometry must be a adsk.fusion.JointGeometry'); }
//         var args = {
//             geometry : (geometry === null ? geometry : geometry.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOriginInput) : null;
//     };

//     // Create a new joint origin.
//     // input : A JointOriginInput object that full defines all of the information needed to create a joint origin.
//     // You create a JointOriginInput by using the createInput method of the JointOrigins object.
//     // Returns a JointOrigin object if successfully created and null if it fails.
//     adsk.fusion.JointOrigins.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.JointOriginInput)) { throw new TypeError('input must be a adsk.fusion.JointOriginInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigin) : null;
//     };

//     //=========== Joints ============
//     // The collection of joints in this component. This provides access to all existing joints
//     // and supports the ability to create new joints.
//     adsk.fusion.Joints = function Joints(handle) {
//         if (!(this instanceof adsk.fusion.Joints)) {
//             return adsk.fusion.Joints.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Joints.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Joints.prototype.constructor = adsk.fusion.Joints;
//     adsk.fusion.Joints.interfaceId = 'adsk.fusion.Joints';
//     adsk.objectTypes['adsk.fusion.Joints'] = adsk.fusion.Joints;
//     adsk.fusion.Joints.cast = function (object) {
//         return object instanceof adsk.fusion.Joints ? object : null;
//     };

//     // Returns number of joints in the collection.
//     Object.defineProperty(adsk.fusion.Joints.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified joint using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Joints.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//     };

//     // Creates a JointInput object, which is the API equivalent to the Joint command dialog. You
//     // you use methods and properties on the returned class to set the desired options, similar to
//     // providing input and setting options in the Joint command dialog. Once the settings are defined
//     // you call the Joints.add method passing in the JointInput object to create the actual joint.
//     // geometryOrOriginOne : A JointGeometry or JointOrigin object that defines the first set of geometry of the joint.
//     // JointGeometry objects are created by using the various static methods on the JointGeometry class
//     // and JointOrigin objects are created through the JointOrigins object.
//     // geometryOrOriginTwo : A JointGeometry or JointOrigin object that defines the second set of geometry of the joint.
//     // JointGeometry objects are created by using the various static methods on the JointGeometry class
//     // and JointOrigin objects are created through the JointOrigins object.
//     // Returns the JointInput object or null if the creation failed.
//     adsk.fusion.Joints.prototype.createInput = function (geometryOrOriginOne, geometryOrOriginTwo) {
//         if (geometryOrOriginOne !== null && !(geometryOrOriginOne instanceof adsk.core.Base)) { throw new TypeError('geometryOrOriginOne must be a adsk.core.Base'); }
//         if (geometryOrOriginTwo !== null && !(geometryOrOriginTwo instanceof adsk.core.Base)) { throw new TypeError('geometryOrOriginTwo must be a adsk.core.Base'); }
//         var args = {
//             geometryOrOriginOne : (geometryOrOriginOne === null ? geometryOrOriginOne : geometryOrOriginOne.handle),
//             geometryOrOriginTwo : (geometryOrOriginTwo === null ? geometryOrOriginTwo : geometryOrOriginTwo.handle)
//         };
//         var result = this._execute('createInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointInput) : null;
//     };

//     // Creates a new joint.
//     // input : The JointInput object that defines the geometry and various inputs that fully define a joint.
//     // A JointInput object is created using the Joints.createInput method.
//     // Returns the newly created Joint or null in the case of failure.
//     adsk.fusion.Joints.prototype.add = function (input) {
//         if (input !== null && !(input instanceof adsk.fusion.JointInput)) { throw new TypeError('input must be a adsk.fusion.JointInput'); }
//         var args = {
//             input : (input === null ? input : input.handle)
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//     };

//     // Function that returns the specified joint using a name.
//     // name : The name of the item within the collection to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.Joints.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joint) : null;
//     };

//     //=========== JointTypes ============
//     // List of the various types of joints.
//     adsk.fusion.JointTypes = {
//         RigidJointType : 0,
//         RevoluteJointType : 1,
//         SliderJointType : 2,
//         CylindricalJointType : 3,
//         PinSlotJointType : 4,
//         PlanarJointType : 5,
//         BallJointType : 6
//     };

//     //=========== Occurrence ============
//     // Represents an occurrence of a component at any level within a subassembly.
//     adsk.fusion.Occurrence = function Occurrence(handle) {
//         if (!(this instanceof adsk.fusion.Occurrence)) {
//             return adsk.fusion.Occurrence.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Occurrence.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Occurrence.prototype.constructor = adsk.fusion.Occurrence;
//     adsk.fusion.Occurrence.interfaceId = 'adsk.fusion.Occurrence';
//     adsk.objectTypes['adsk.fusion.Occurrence'] = adsk.fusion.Occurrence;
//     adsk.fusion.Occurrence.cast = function (object) {
//         return object instanceof adsk.fusion.Occurrence ? object : null;
//     };

//     // This is the sourceComponent for the occurrence and is affected
//     // by the assembly context.
//     // This is the top-level component where the path begins.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'sourceComponent', {
//         get : function () {
//             var result = this._execute('sourceComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Returns a read only list of child occurrences where only the occurrences
//     // in this occurrence's AssemblyContext are returned .
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'childOccurrences', {
//         get : function () {
//             var result = this._execute('childOccurrences');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OccurrenceList) : null;
//         }
//     });

//     // The component this occurrence references.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'component', {
//         get : function () {
//             var result = this._execute('component');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // The name of the occurrence. This is the name as seen in the browser. It is a reflection
//     // of the component name with an added counter suffix (i.e. 'OccurrenceName:1').
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//     // The name of the occurrence, including the full path of occurrences as seen in the browser.
//     // The top-level component will depend on the context but will typically be the root component
//     // of the design. A name for an occurrence that is at the third level of an assembly could be
//     // "Sub1:1+Sub2:1+PartA:1".
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'fullPathName', {
//         get : function () {
//             var result = this._execute('fullPathName');
//             return result ? result.value : undefined;
//         }
//     });

//     // Read-write property that gets and sets the appearance override for this occurrence.
//     // This property can return null indicating there is no override appearance and that the
//     // contents of the occurrence are displayed using there defined appearance.
//     // Setting the property to null will remove any override appearance for this occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'appearance', {
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

//     // Gets and sets if the light bulb of this occurrence as displayed in the browser is on or off.
//     // An occurrence will only be visible if the light bulb is switched on. However,
//     // the light bulb can be on and the occurrence still invisible if a higher level occurrence
//     // in the assembly context is not visible because its light bulb is off.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isLightBulbOn', {
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

//     // Gets whether the occurrence is visible.
//     // This property is affected by the assembly context.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isVisible', {
//         get : function () {
//             var result = this._execute('isVisible');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the 3d matrix data that defines this occurrences orientation and
//     // position in its assembly context
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'transform', {
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

//     // Returns the timeline object associated with the creation of this occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this
//     // object in an assembly. This is only valid in the case where this
//     // references the component the object is defined within.
//     // Returns null in the case where the object is not in the context of an assembly
//     // but is already the native object.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // The NativeObject is the object outside the context of an assembly.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     // The return type is strongly typed for each object.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Gets and sets whether this occurrence is grounded or not.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isGrounded', {
//         get : function () {
//             var result = this._execute('isGrounded');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isGrounded', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets whether this occurrence is selectable or not.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isSelectable', {
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

//     // Gets and sets whether this occurrence is isolated in the UI. When an occurrence
//     // is isolated it is the only one visible in the user-interface. Only one occurrence
//     // can be isolated at a time so setting this property to true will unisolate an occurrence
//     // that is currently isolated. Setting this property to false for an occurrence that is
//     // current isolated will unisolate it so that no occurrence will be isolated.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isIsolated', {
//         get : function () {
//             var result = this._execute('isIsolated');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isIsolated', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets whether this occurrence is the active edit target in the user interface.
//     // This is the same as checking the state of the radio button next to the occurrence in the browser.
//     // To activate the occurrence use the Activate method.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isActive', {
//         get : function () {
//             var result = this._execute('isActive');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the PhysicalProperties object that has properties for getting the area, density, mass, volume, etc
//     // of this occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'physicalProperties', {
//         get : function () {
//             var result = this._execute('physicalProperties');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PhysicalProperties) : null;
//         }
//     });

//     // Gets if this occurrence is referencing an external component.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'isReferencedComponent', {
//         get : function () {
//             var result = this._execute('isReferencedComponent');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the bounding box of this occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'boundingBox', {
//         get : function () {
//             var result = this._execute('boundingBox');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
//         }
//     });

//     // Returns the joints that affect the position of this occurrence. For example, if a joint has
//     // been created between this occurrence and another occurrence, this property will return that
//     // joint. If the occurrence is a proxy, the joints returned will also be proxies in the same
//     // context as the occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'joints', {
//         get : function () {
//             var result = this._execute('joints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointList) : null;
//         }
//     });

//     // Returns the rigid groups that this occurrence is a member of. If the occurrence is a proxy,
//     // the joints returned will also be proxies in the same context as the occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'rigidGroups', {
//         get : function () {
//             var result = this._execute('rigidGroups');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroupList) : null;
//         }
//     });

//     // Returns the as-built joints that affect the position of this occurrence. If the occurrence is a proxy,
//     // the as-built joints returned will also be proxies in the same context as the occurrence.
//     Object.defineProperty(adsk.fusion.Occurrence.prototype, 'asBuiltJoints', {
//         get : function () {
//             var result = this._execute('asBuiltJoints');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJointList) : null;
//         }
//     });

//     // Deletes the occurrence from the design. If this is the last occurrence
//     // referencing a specific Component, the component is also deleted.
//     // Returns true if the delete was successful.
//     adsk.fusion.Occurrence.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // Fails if this object is not the NativeObject.
//     // occurrence : The occurrence that represents the context you want to create this proxy in.
//     // Returns the proxy for the occurrence in the context of the specified occurrence.
//     // Returns null if it failed.
//     adsk.fusion.Occurrence.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     // Makes the occurrence the active edit target in the user interface. This is the same
//     // as enabling the radio button next to the occurrence in the browser.
//     // Returns true if the activation was successful.
//     adsk.fusion.Occurrence.prototype.activate = function () {
//         var result = this._execute('activate');
//         return result ? result.value : undefined;
//     };

//     // Moves this occurrence from it's current component into the component owned by the specified occurrence.
//     // This occurrence and the target occurrence must be in the same context.
//     // targetOccurrence : The target occurrence defines both the component and the transform to apply when moving the occurrence. The
//     // occurrence will be copied into the parent component of the target occurrence and the target occurrence also defines
//     // the transform of how the occurrence will be copied so that the occurrence maintains it's same position in model space.
//     // Returns the moved Occurrence or null in the case the move failed.
//     adsk.fusion.Occurrence.prototype.moveToComponent = function (targetOccurrence) {
//         if (targetOccurrence !== null && !(targetOccurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('targetOccurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             targetOccurrence : (targetOccurrence === null ? targetOccurrence : targetOccurrence.handle)
//         };
//         var result = this._execute('moveToComponent', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     //=========== OccurrenceList ============
//     // Provides a list of occurrences.
//     adsk.fusion.OccurrenceList = function OccurrenceList(handle) {
//         if (!(this instanceof adsk.fusion.OccurrenceList)) {
//             return adsk.fusion.OccurrenceList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.OccurrenceList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.OccurrenceList.prototype.constructor = adsk.fusion.OccurrenceList;
//     adsk.fusion.OccurrenceList.interfaceId = 'adsk.fusion.OccurrenceList';
//     adsk.objectTypes['adsk.fusion.OccurrenceList'] = adsk.fusion.OccurrenceList;
//     adsk.fusion.OccurrenceList.cast = function (object) {
//         return object instanceof adsk.fusion.OccurrenceList ? object : null;
//     };

//     // Returns the number of occurrences in the collection.
//     Object.defineProperty(adsk.fusion.OccurrenceList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified occurrence using an index into the collection.
//     // index : The index of the occurrence within the collection to return. The first item has an index of 0.
//     // Returns the specified occurrence or null in the case of an invalid index.
//     adsk.fusion.OccurrenceList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     //=========== Occurrences ============
//     // Provides access to occurrences within a component and provides
//     // methods to create new occurrences.
//     adsk.fusion.Occurrences = function Occurrences(handle) {
//         if (!(this instanceof adsk.fusion.Occurrences)) {
//             return adsk.fusion.Occurrences.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.Occurrences.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.Occurrences.prototype.constructor = adsk.fusion.Occurrences;
//     adsk.fusion.Occurrences.interfaceId = 'adsk.fusion.Occurrences';
//     adsk.objectTypes['adsk.fusion.Occurrences'] = adsk.fusion.Occurrences;
//     adsk.fusion.Occurrences.cast = function (object) {
//         return object instanceof adsk.fusion.Occurrences ? object : null;
//     };

//     // Returns the number of occurrences in the collection.
//     Object.defineProperty(adsk.fusion.Occurrences.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the contents of this collection as an OccurrencesList object. This
//     // is useful when writing a function that traverses an assembly.
//     Object.defineProperty(adsk.fusion.Occurrences.prototype, 'asList', {
//         get : function () {
//             var result = this._execute('asList');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OccurrenceList) : null;
//         }
//     });

//     // Function that returns the specified occurrence using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.Occurrences.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     // Returns the specified occurrence using the name of the occurrence.
//     // name : The name of the component occurrence to return.
//     // Returns the occurrence or null if an invalid name was specified
//     adsk.fusion.Occurrences.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     // Method that creates a new occurrence using an existing component. This is the equivalent
//     // of copying and pasting an occurrence in the user interface.
//     // component : The component to create a new occurrence of
//     // transform : A transform that defines the location for the new occurrence
//     // Returns the newly created occurrence or null if the creation failed.
//     adsk.fusion.Occurrences.prototype.addExistingComponent = function (component, transform) {
//         if (component !== null && !(component instanceof adsk.fusion.Component)) { throw new TypeError('component must be a adsk.fusion.Component'); }
//         if (transform !== null && !(transform instanceof adsk.core.Matrix3D)) { throw new TypeError('transform must be a adsk.core.Matrix3D'); }
//         var args = {
//             component : (component === null ? component : component.handle),
//             transform : (transform === null ? transform : transform.handle)
//         };
//         var result = this._execute('addExistingComponent', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     // Method that creates a new component and an occurrence that references it.
//     // transform : A transform that defines the location for the new occurrence.
//     // Returns the newly created occurrence or null if the creation failed.
//     adsk.fusion.Occurrences.prototype.addNewComponent = function (transform) {
//         if (transform !== null && !(transform instanceof adsk.core.Matrix3D)) { throw new TypeError('transform must be a adsk.core.Matrix3D'); }
//         var args = {
//             transform : (transform === null ? transform : transform.handle)
//         };
//         var result = this._execute('addNewComponent', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     // Method that inserts an existing file.
//     // dataFile : The dataFile to insert.
//     // transform : A transform that defines the location for the new occurrence.
//     // isReferencedComponent : Indicates if the insert is to be an external reference or embedded within this document.
//     // This method will fail if the dataFile being inserted is not from the same project as the document
//     // it is being inserted into while isReferencedComponent is True.
//     // Returns the newly created occurrence or null if the insert failed.
//     // Insert will fail if the dataFile being inserted is not from the same project as the document
//     // it is being inserted into while isReferencedComponent is True.
//     adsk.fusion.Occurrences.prototype.addByInsert = function (dataFile, transform, isReferencedComponent) {
//         if (dataFile !== null && !(dataFile instanceof adsk.core.DataFile)) { throw new TypeError('dataFile must be a adsk.core.DataFile'); }
//         if (transform !== null && !(transform instanceof adsk.core.Matrix3D)) { throw new TypeError('transform must be a adsk.core.Matrix3D'); }
//         if (typeof isReferencedComponent !== 'boolean') { throw new TypeError('isReferencedComponent must be a boolean'); }
//         var args = {
//             dataFile : (dataFile === null ? dataFile : dataFile.handle),
//             transform : (transform === null ? transform : transform.handle),
//             isReferencedComponent : isReferencedComponent
//         };
//         var result = this._execute('addByInsert', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//     };

//     //=========== RigidGroup ============
//     // Represents a rigid group within an assembly.
//     adsk.fusion.RigidGroup = function RigidGroup(handle) {
//         if (!(this instanceof adsk.fusion.RigidGroup)) {
//             return adsk.fusion.RigidGroup.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RigidGroup.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RigidGroup.prototype.constructor = adsk.fusion.RigidGroup;
//     adsk.fusion.RigidGroup.interfaceId = 'adsk.fusion.RigidGroup';
//     adsk.objectTypes['adsk.fusion.RigidGroup'] = adsk.fusion.RigidGroup;
//     adsk.fusion.RigidGroup.cast = function (object) {
//         return object instanceof adsk.fusion.RigidGroup ? object : null;
//     };

//     // Returns the parent component that owns this rigid group.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'parentComponent', {
//         get : function () {
//             var result = this._execute('parentComponent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Component) : null;
//         }
//     });

//     // Gets and sets the name of the rigid group as seen in the timeline.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'name', {
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

//     // Returns the list of occurrences that are part of the rigid group.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'occurrences', {
//         get : function () {
//             var result = this._execute('occurrences');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.OccurrenceList) : null;
//         }
//     });

//     // Returns the timeline object associated with this rigid group.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'timelineObject', {
//         get : function () {
//             var result = this._execute('timelineObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TimelineObject) : null;
//         }
//     });

//     // Gets and sets if this rigid group is suppressed.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'isSuppressed', {
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

//     // The NativeObject is the object outside the context of an assembly and
//     // in the context of it's parent component.
//     // Returns null in the case where this object is not in the context of
//     // an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'nativeObject', {
//         get : function () {
//             var result = this._execute('nativeObject');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//         }
//     });

//     // Returns the assembly occurrence (i.e. the occurrence) of this object
//     // in an assembly. This is only valid in the case where this is acting
//     // as a proxy in an assembly. Returns null in the case where the object
//     // is not in the context of an assembly but is already the native object.
//     Object.defineProperty(adsk.fusion.RigidGroup.prototype, 'assemblyContext', {
//         get : function () {
//             var result = this._execute('assemblyContext');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Occurrence) : null;
//         }
//     });

//     // Deletes this rigid group.
//     // Returns True if the delete was successful.
//     adsk.fusion.RigidGroup.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     // Sets which occurrences are to be part of this rigid group.
//     // occurrences : An ObjectCollection containing the occurrences to use in creating the rigid group.
//     // includeChildren : Boolean indicating if the children of the input occurrences should be included in the rigid group.
//     // Returns true if successful.
//     adsk.fusion.RigidGroup.prototype.setOccurrences = function (occurrences, includeChildren) {
//         if (occurrences !== null && !(occurrences instanceof adsk.core.ObjectCollection)) { throw new TypeError('occurrences must be a adsk.core.ObjectCollection'); }
//         if (typeof includeChildren !== 'boolean') { throw new TypeError('includeChildren must be a boolean'); }
//         var args = {
//             occurrences : (occurrences === null ? occurrences : occurrences.handle),
//             includeChildren : includeChildren
//         };
//         var result = this._execute('setOccurrences', args);
//         return result ? result.value : undefined;
//     };

//     // Creates or returns a proxy for the native object
//     // - i.e. a new object that represents this object but adds the assembly context
//     // defined by the input occurrence.
//     // occurrence : The occurrence that defines the context to create the proxy in.
//     // Returns the proxy object or null if this isn't the NativeObject.
//     adsk.fusion.RigidGroup.prototype.createForAssemblyContext = function (occurrence) {
//         if (occurrence !== null && !(occurrence instanceof adsk.fusion.Occurrence)) { throw new TypeError('occurrence must be a adsk.fusion.Occurrence'); }
//         var args = {
//             occurrence : (occurrence === null ? occurrence : occurrence.handle)
//         };
//         var result = this._execute('createForAssemblyContext', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//     };

//     //=========== RigidGroupList ============
//     // A list of rigid groups.
//     adsk.fusion.RigidGroupList = function RigidGroupList(handle) {
//         if (!(this instanceof adsk.fusion.RigidGroupList)) {
//             return adsk.fusion.RigidGroupList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RigidGroupList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RigidGroupList.prototype.constructor = adsk.fusion.RigidGroupList;
//     adsk.fusion.RigidGroupList.interfaceId = 'adsk.fusion.RigidGroupList';
//     adsk.objectTypes['adsk.fusion.RigidGroupList'] = adsk.fusion.RigidGroupList;
//     adsk.fusion.RigidGroupList.cast = function (object) {
//         return object instanceof adsk.fusion.RigidGroupList ? object : null;
//     };

//     // Returns number of rigid groups in the list.
//     Object.defineProperty(adsk.fusion.RigidGroupList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified rigid group using an index into the list.
//     // index : The index of the item within the list to return. The first item in the list has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.RigidGroupList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//     };

//     // Function that returns the specified rigid group using a name.
//     // name : The name of the item within the list to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.RigidGroupList.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//     };

//     //=========== RigidGroups ============
//     // The collection of rigid groups in this component. This provides access to all existing
//     // rigid groups and supports the ability to create new rigid groups.
//     adsk.fusion.RigidGroups = function RigidGroups(handle) {
//         if (!(this instanceof adsk.fusion.RigidGroups)) {
//             return adsk.fusion.RigidGroups.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.RigidGroups.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.RigidGroups.prototype.constructor = adsk.fusion.RigidGroups;
//     adsk.fusion.RigidGroups.interfaceId = 'adsk.fusion.RigidGroups';
//     adsk.objectTypes['adsk.fusion.RigidGroups'] = adsk.fusion.RigidGroups;
//     adsk.fusion.RigidGroups.cast = function (object) {
//         return object instanceof adsk.fusion.RigidGroups ? object : null;
//     };

//     // Returns number of joint origins in the collection.
//     Object.defineProperty(adsk.fusion.RigidGroups.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Function that returns the specified rigid group using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.fusion.RigidGroups.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//     };

//     // Function that returns the specified rigid group using a name.
//     // name : The name of the item within the collection to return.
//     // Returns the specified item or null if an invalid name was specified.
//     adsk.fusion.RigidGroups.prototype.itemByName = function (name) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             name : name
//         };
//         var result = this._execute('itemByName', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//     };

//     // Creates a new rigid group.
//     // occurrences : An ObjectCollection containing the occurrences to use in creating the rigid group.
//     // includeChildren : Boolean indicating if the children of the input occurrences should be included in the rigid group.
//     // Returns the new RigidGroup object or null in the case of failure.
//     adsk.fusion.RigidGroups.prototype.add = function (occurrences, includeChildren) {
//         if (occurrences !== null && !(occurrences instanceof adsk.core.ObjectCollection)) { throw new TypeError('occurrences must be a adsk.core.ObjectCollection'); }
//         if (typeof includeChildren !== 'boolean') { throw new TypeError('includeChildren must be a boolean'); }
//         var args = {
//             occurrences : (occurrences === null ? occurrences : occurrences.handle),
//             includeChildren : includeChildren
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroup) : null;
//     };

//     //=========== BallJointMotion ============
//     // Represents the set of information specific to a ball joint.
//     adsk.fusion.BallJointMotion = function BallJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.BallJointMotion)) {
//             return adsk.fusion.BallJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.BallJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.BallJointMotion.prototype.constructor = adsk.fusion.BallJointMotion;
//     adsk.fusion.BallJointMotion.interfaceId = 'adsk.fusion.BallJointMotion';
//     adsk.objectTypes['adsk.fusion.BallJointMotion'] = adsk.fusion.BallJointMotion;
//     adsk.fusion.BallJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.BallJointMotion ? object : null;
//     };

//     // Gets and sets the direction that the pitch is measured from.
//     // This can only be set to ZAxisJointDirection and can return ZAxisJointDirection
//     // or CustomJointDirection. If this returns CustomJointDirection then the
//     // customNormalDirectionEntity will return an entity that defines the direction.
//     // If there is a custom direction defined and this property is set to ZAxisJointDirection,
//     // the custom direction will be removed and customNormalDirectionEntity will return null.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'pitchDirection', {
//         get : function () {
//             var result = this._execute('pitchDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('pitchDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // This property defines a custom pitch direction and can be set using various types
//     // of entities that can infer a direction. For example, a linear edge, sketch line,
//     // planar face, and cylindrical face.This property is only valid in the case where the
//     // pitchDirection property returns CustomJointDirection. Setting this property will
//     // automatically set the pitchDirection property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'customPitchDirectionEntity', {
//         get : function () {
//             var result = this._execute('customPitchDirectionEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customPitchDirectionEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction that the pitch angle is measured from. This property will return null in the case
//     // where the BallJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'pitchDirectionVector', {
//         get : function () {
//             var result = this._execute('pitchDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets and sets the direction that the pitch is measured from.
//     // This can only be set to XAxisJointDirection and can return XAxisJointDirection
//     // or CustomJointDirection. If this returns CustomJointDirection then the
//     // customYawDirectionEntity will return an entity that defines the direction.
//     // If there is a custom direction defined and this property is set to XAxisJointDirection,
//     // the custom direction will be removed and customYawDirectionEntity will return null.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'yawDirection', {
//         get : function () {
//             var result = this._execute('yawDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('yawDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // This property defines a custom yaw direction and can be set using various types
//     // of entities that can infer a direction. For example, a linear edge, sketch line,
//     // planar face, and cylindrical face.This property is only valid in the case where the
//     // yawDirection property returns CustomJointDirection. Setting this property will
//     // automatically set the yawDirection property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'customYawDirectionEntity', {
//         get : function () {
//             var result = this._execute('customYawDirectionEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customYawDirectionEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction that the yaw angle is measured from. This property will return null in the case
//     // where the BallJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'yawDirectionVector', {
//         get : function () {
//             var result = this._execute('yawDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Returns the direction that the roll angle is measured from. This property will return null in the case
//     // where the BallJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'rollDirectionVector', {
//         get : function () {
//             var result = this._execute('rollDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets and sets the pitch value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'pitchValue', {
//         get : function () {
//             var result = this._execute('pitchValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('pitchValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the limits of rotation for the pitch.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'pitchLimits', {
//         get : function () {
//             var result = this._execute('pitchLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     // Gets and sets the yaw value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'yawValue', {
//         get : function () {
//             var result = this._execute('yawValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('yawValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the limits of rotation for the yaw.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'yawLimits', {
//         get : function () {
//             var result = this._execute('yawLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     // Gets and sets the roll value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'rollValue', {
//         get : function () {
//             var result = this._execute('rollValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rollValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the limits of rotation for the roll.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.BallJointMotion.prototype, 'rollLimits', {
//         get : function () {
//             var result = this._execute('rollLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//=========== Component ============
// Represents a component in the data model.
// A component represents a set of geometry, features, and parameters that make up an item in the design.
// A component can be referenced multiple times into a design with a Occurrence object.
interface Component {
    cast(object: Object): Component;


    //     // Returns the sketches collection associated with this component.
    //     // This provides access to the existing sketches and supports
    //     // the creation of new sketches.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'sketches', {
    //         get : function () {
    //             var result = this._execute('sketches');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Sketches) : null;
    //         }
    //     });

    //     // Returns the collection that provides access to all of the features
    //     // associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'features', {
    //         get : function () {
    //             var result = this._execute('features');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Features) : null;
    //         }
    //     });

    //     // Returns the mesh bodies collection associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'meshBodies', {
    //         get : function () {
    //             var result = this._execute('meshBodies');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MeshBodies) : null;
    //         }
    //     });

    //     // Returns the collection of model parameters in the Component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'modelParameters', {
    //         get : function () {
    //             var result = this._execute('modelParameters');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ModelParameters) : null;
    //         }
    //     });

    //     // Gets and sets if the light bulb of the origin folder as seen in the browser is on or off.
    //     // This controls the visibility of the origin construction geometry.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'isOriginFolderLightBulbOn', {
    //         get : function () {
    //             var result = this._execute('isOriginFolderLightBulbOn');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isOriginFolderLightBulbOn', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the light bulb of the construction folder as seen in the browser is on or off.
    //     // This controls the visibility of the (non-origin) construction geometry
    //     // (i.e. planes, points, axes).
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'isConstructionFolderLightBulbOn', {
    //         get : function () {
    //             var result = this._execute('isConstructionFolderLightBulbOn');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isConstructionFolderLightBulbOn', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets if the light bulb of the sketch folder as seen in the browser is on or off.
    //     // This controls the visibility of the sketches in this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'isSketchFolderLightBulbOn', {
    //         get : function () {
    //             var result = this._execute('isSketchFolderLightBulbOn');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isSketchFolderLightBulbOn', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the XY origin construction plane.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'xYConstructionPlane', {
    //         get : function () {
    //             var result = this._execute('xYConstructionPlane');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    //         }
    //     });

    //     // Returns the XZ origin construction plane.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'xZConstructionPlane', {
    //         get : function () {
    //             var result = this._execute('xZConstructionPlane');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    //         }
    //     });

    //     // Returns the YZ origin construction plane.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'yZConstructionPlane', {
    //         get : function () {
    //             var result = this._execute('yZConstructionPlane');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPlane) : null;
    //         }
    //     });

    //     // Returns the X origin construction axis.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'xConstructionAxis', {
    //         get : function () {
    //             var result = this._execute('xConstructionAxis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    //         }
    //     });

    //     // Returns the Y origin construction axis.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'yConstructionAxis', {
    //         get : function () {
    //             var result = this._execute('yConstructionAxis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    //         }
    //     });

    //     // Returns the Z origin construction axis.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'zConstructionAxis', {
    //         get : function () {
    //             var result = this._execute('zConstructionAxis');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionAxis) : null;
    //         }
    //     });

    //     // Returns the origin construction point.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'originConstructionPoint', {
    //         get : function () {
    //             var result = this._execute('originConstructionPoint');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.ConstructionPoint) : null;
    //         }
    //     });

    //     // Gets and sets the part number associated with this component. Setting this
    //     // to an empty string will reset it to be the same as the component name.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'partNumber', {
    //         get : function () {
    //             var result = this._execute('partNumber');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('partNumber', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Gets and sets the description associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'description', {
    //         get : function () {
    //             var result = this._execute('description');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('description', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the collection of joints associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'joints', {
    //         get : function () {
    //             var result = this._execute('joints');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Joints) : null;
    //         }
    //     });

    //     // Returns the collection of joint origins associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'jointOrgins', {
    //         get : function () {
    //             var result = this._execute('jointOrgins');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointOrigins) : null;
    //         }
    //     });

    //     // Returns the collection of as-built joints associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'asBuiltJoints', {
    //         get : function () {
    //             var result = this._execute('asBuiltJoints');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.AsBuiltJoints) : null;
    //         }
    //     });

    //     // Returns the collection of rigid groups associated with this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'rigidGroups', {
    //         get : function () {
    //             var result = this._execute('rigidGroups');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.RigidGroups) : null;
    //         }
    //     });

    //     // Gets and sets the physical material assigned to this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'material', {
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

    //     // Returns the PhysicalProperties object that has properties for getting the area, density, mass, volume, etc
    //     // of this component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'physicalProperties', {
    //         get : function () {
    //             var result = this._execute('physicalProperties');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.PhysicalProperties) : null;
    //         }
    //     });

    //     // Returns the bounding box of this component. This is always in world space of the component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'boundingBox', {
    //         get : function () {
    //             var result = this._execute('boundingBox');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoundingBox3D) : null;
    //         }
    //     });

    //     // Gets and sets if the light bulb of the joints folder as seen in the browser is on or off.
    //     // This controls the visibility of the joints in this occurrence. The light
    //     // bulb is occurrence specific and independent of the component.
    //     Object.defineProperty(adsk.fusion.Component.prototype, 'isJointsFolderLightBulbOn', {
    //         get : function () {
    //             var result = this._execute('isJointsFolderLightBulbOn');
    //             return result ? result.value : undefined;
    //         },
    //         set : function (value) {
    //             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
    //             var args = {
    //                 value : value
    //             };
    //             var result = this._execute('isJointsFolderLightBulbOn', args);
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Creates an open profile based on the input curve(s).
    //     // curves : A SketchCurve or an ObjectCollection containing multiple sketch entities. If a single sketch curve
    //     // is input the chainCurves argument is checked to determine if connected curves (they do not need to be tangent)
    //     // should be automatically found. If multiple curves are provided then the chainCurves argument is always
    //     // treated as false so you must provide all of the curves in the object collection that you want included in the profile.
    //     // The provided curves must all connect together in a single path and they must all be co-planar.
    //     // chainCurves : If true, this finds any co-planar curves that connect to the single input curve and automatically includes them in the profile. If
    //     // false, only the curves provided will be used to define the profile. This argument is ignored and treated as false if multipled curves are input.
    //     // Returns the new Profile object or null in the case of a failure.
    //     adsk.fusion.Component.prototype.createOpenProfile = function (curves, chainCurves) {
    //         if (curves !== null && !(curves instanceof adsk.core.Base)) { throw new TypeError('curves must be a adsk.core.Base'); }
    //         if (chainCurves === null || (chainCurves !== undefined && typeof chainCurves !== 'boolean')) { throw new TypeError('chainCurves must be a boolean'); }
    //         var args = {
    //             curves : (curves === null ? curves : curves.handle)
    //         };
    //         if (chainCurves !== undefined) {
    //             args.chainCurves = chainCurves;
    //         }
    //         var result = this._execute('createOpenProfile', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
    //     };

    //     // Creates a profile based on the outside open edges of a BRepFace.
    //     // edges : A single BRepEdge object or an ObjectCollection containing multiple BRepEdge objects. If a single edge
    //     // is input the chainEdges argument is checked to determine if connected edges (they do not need to be tangent)
    //     // should be automatically found. If multiple edges are provided then the chainEdges argument is always
    //     // treated as false so must provide all of the edges in the object collection that you want included in the profile.
    //     // The provided edges must all connect together in a single path and they must all be co-planar.
    //     // chainEdges : If true, this finds any co-planar edges that connect to the single input edge and automatically includes them in the profile. If
    //     // false, only the edges provided will be used to define the profile. This argument is ignored and treated as false if multipled edges are input.
    //     // Returns the new Profile object or null in the case of a failure.
    //     adsk.fusion.Component.prototype.createBRepEdgeProfile = function (edges, chainEdges) {
    //         if (edges !== null && !(edges instanceof adsk.core.Base)) { throw new TypeError('edges must be a adsk.core.Base'); }
    //         if (chainEdges === null || (chainEdges !== undefined && typeof chainEdges !== 'boolean')) { throw new TypeError('chainEdges must be a boolean'); }
    //         var args = {
    //             edges : (edges === null ? edges : edges.handle)
    //         };
    //         if (chainEdges !== undefined) {
    //             args.chainEdges = chainEdges;
    //         }
    //         var result = this._execute('createBRepEdgeProfile', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.Profile) : null;
    //     };

    //     // Performs a Save Copy As on this component. This saves the specified component as a new document
    //     // in the specified location.
    //     // name : The name to use for the new document. If this is an empty string, Fusion will use the
    //     // name of the component being saved.
    //     // dataFolder : The data folder to save the new document to.
    //     // description : The description string of the document. This can be an empty string.
    //     // tag : The tag string of the document. This can be an empty string.
    //     // Returns a DataFileFuture object that can be used to track the progress of the upload and get the
    //     // resulting DataFile once it's available on A360.
    //     adsk.fusion.Component.prototype.saveCopyAs = function (name, dataFolder, description, tag) {
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
    //         var result = this._execute('saveCopyAs', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DataFileFuture) : null;
    //     };
}

//     //=========== CylindricalJointMotion ============
//     // Represents the set of information specific to a cylindrical joint.
//     adsk.fusion.CylindricalJointMotion = function CylindricalJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.CylindricalJointMotion)) {
//             return adsk.fusion.CylindricalJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.CylindricalJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.CylindricalJointMotion.prototype.constructor = adsk.fusion.CylindricalJointMotion;
//     adsk.fusion.CylindricalJointMotion.interfaceId = 'adsk.fusion.CylindricalJointMotion';
//     adsk.objectTypes['adsk.fusion.CylindricalJointMotion'] = adsk.fusion.CylindricalJointMotion;
//     adsk.fusion.CylindricalJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.CylindricalJointMotion ? object : null;
//     };

//     // Gets and sets the direction of the axis of rotation. This can be set to
//     // XAxisJointDirection, YAxisJointDirection, or ZAxisJointDirection. It can
//     // return those three directions and CustomJointDirection. If this returns
//     // CustomJointDirection then the customRotationAxisEntity will return an entity
//     // that defines the axis. If there is a custom rotation axis defined and this
//     // property is set to one of the three standard axes, the custom rotation will
//     // be removed and customRotationAxisEntity will return null.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'rotationAxis', {
//         get : function () {
//             var result = this._execute('rotationAxis');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationAxis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the rotation axis. This property will return null in the case
//     // where the CylindricalJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'rotationAxisVector', {
//         get : function () {
//             var result = this._execute('rotationAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property can be set using various types of entities that can infer an
//     // axis. For example, a linear edge, sketch line, planar face, and cylindrical face.
//     // This property is only valid in the case where the rotationAxis property returns
//     // CustomJointDirection. Setting this property will automatically set
//     // the rotationAxis property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'customRotationAxisEntity', {
//         get : function () {
//             var result = this._execute('customRotationAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customRotationAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the rotation value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'rotationValue', {
//         get : function () {
//             var result = this._execute('rotationValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the rotation limits for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'rotationLimits', {
//         get : function () {
//             var result = this._execute('rotationLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     // Gets and sets the slide value. This is in centimeters. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'slideValue', {
//         get : function () {
//             var result = this._execute('slideValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('slideValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the slide limits for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.CylindricalJointMotion.prototype, 'slideLimits', {
//         get : function () {
//             var result = this._execute('slideLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     //=========== PinSlotJointMotion ============
//     // Represents the set of information specific to a pin slot joint.
//     adsk.fusion.PinSlotJointMotion = function PinSlotJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.PinSlotJointMotion)) {
//             return adsk.fusion.PinSlotJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.PinSlotJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.PinSlotJointMotion.prototype.constructor = adsk.fusion.PinSlotJointMotion;
//     adsk.fusion.PinSlotJointMotion.interfaceId = 'adsk.fusion.PinSlotJointMotion';
//     adsk.objectTypes['adsk.fusion.PinSlotJointMotion'] = adsk.fusion.PinSlotJointMotion;
//     adsk.fusion.PinSlotJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.PinSlotJointMotion ? object : null;
//     };

//     // Gets and sets the direction of the axis of rotation. This can be set to
//     // XAxisJointDirection, YAxisJointDirection, or ZAxisJointDirection. It can
//     // return those three directions and CustomJointDirection. If this returns
//     // CustomJointDirection then the customRotationAxisEntity will return an entity
//     // that defines the axis. If there is a custom rotation axis defined and this
//     // property is set to one of the three standard axes, the custom rotation will
//     // be removed and customRotationAxisEntity will return null.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'rotationAxis', {
//         get : function () {
//             var result = this._execute('rotationAxis');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationAxis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the rotation axis. This property will return null in the case
//     // where the PinSlotJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'rotationAxisVector', {
//         get : function () {
//             var result = this._execute('rotationAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property can be set using various types of entities that can infer an
//     // axis. For example, a linear edge, sketch line, planar face, and cylindrical face.
//     // This property is only valid in the case where the rotationAxis property returns
//     // CustomJointDirection. Setting this property will automatically set
//     // the rotationAxis property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'customRotationAxisEntity', {
//         get : function () {
//             var result = this._execute('customRotationAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customRotationAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the rotation value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'rotationValue', {
//         get : function () {
//             var result = this._execute('rotationValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the rotation limits for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'rotationLimits', {
//         get : function () {
//             var result = this._execute('rotationLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     // Gets and sets the direction of the slide motion in the slot. This can be set to
//     // XAxisJointDirection, YAxisJointDirection, or ZAxisJointDirection. It can
//     // return those three directions and CustomJointDirection. If this returns
//     // CustomJointDirection then the customSlideDirectionEntity will return an entity
//     // that defines the direction. If there is a custom direction defined and this
//     // property is set to one of the three standard axes, the custom direction will
//     // be removed and customSlideDirectionEntity will return null.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'slideDirection', {
//         get : function () {
//             var result = this._execute('slideDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('slideDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the primary slide direction. This property will return null in the case
//     // where the PinSlotJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'slideDirectionVector', {
//         get : function () {
//             var result = this._execute('slideDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property can be set using various types of entities that can infer a
//     // direction. For example, a linear edge, sketch line, planar face, and cylindrical face.
//     // This property is only valid in the case where the slideDirection property returns
//     // CustomJointDirection. Setting this property will automatically set
//     // the slideDirection property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'customSlideDirectionEntity', {
//         get : function () {
//             var result = this._execute('customSlideDirectionEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customSlideDirectionEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the slide value. This is in centimeters. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'slideValue', {
//         get : function () {
//             var result = this._execute('slideValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('slideValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the slide limits for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.PinSlotJointMotion.prototype, 'slideLimits', {
//         get : function () {
//             var result = this._execute('slideLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     //=========== PlanarJointMotion ============
//     // Represents the set of information specific to a planar joint.
//     adsk.fusion.PlanarJointMotion = function PlanarJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.PlanarJointMotion)) {
//             return adsk.fusion.PlanarJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.PlanarJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.PlanarJointMotion.prototype.constructor = adsk.fusion.PlanarJointMotion;
//     adsk.fusion.PlanarJointMotion.interfaceId = 'adsk.fusion.PlanarJointMotion';
//     adsk.objectTypes['adsk.fusion.PlanarJointMotion'] = adsk.fusion.PlanarJointMotion;
//     adsk.fusion.PlanarJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.PlanarJointMotion ? object : null;
//     };

//     // Gets and sets the direction of the normal of the single degree of rotation.
//     // This can be set to XAxisJointDirection, YAxisJointDirection, or ZAxisJointDirection.
//     // It can return those three directions and CustomJointDirection. If this returns
//     // CustomJointDirection then the customNormalDirectionEntity will return an entity
//     // that defines the direction. If there is a custom direction defined and this
//     // property is set to one of the three standard axes, the custom direction will
//     // be removed and customNormalDirectionEntity will return null.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'normalDirection', {
//         get : function () {
//             var result = this._execute('normalDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('normalDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the normal direction. This property will return null in the case
//     // where the PlanarJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'normalDirectionVector', {
//         get : function () {
//             var result = this._execute('normalDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property defines a custom normal direction and can be set using various types
//     // of entities that can infer a direction. For example, a linear edge, sketch line,
//     // planar face, and cylindrical face.This property is only valid in the case where the
//     // normalDirection property returns CustomJointDirection. Setting this property will
//     // automatically set the normalDirection property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'customNormalDirectionEntity', {
//         get : function () {
//             var result = this._execute('customNormalDirectionEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customNormalDirectionEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the direction used as the primary direction for the two translational degrees of
//     // freedom. The value of this property is automatically set when setting the normalDirection.
//     // When reading this value it can return XAxisJointDirection, YAxisJointDirection, ZAxisJointDirection,
//     // or CustomJointDirection. If it's CustomJointDirection then the direction the direction can be
//     // determined using the primarySlideDirectionVector and the entity controlling the direction can
//     // be get and set using the customPrimarySlideDirectionEntity.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'primarySlideDirection', {
//         get : function () {
//             var result = this._execute('primarySlideDirection');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the primary slide direction. This property will return null in the case
//     // where the PlanarJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'primarySlideDirectionVector', {
//         get : function () {
//             var result = this._execute('primarySlideDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property can be set using various types of entities that can infer a
//     // direction. For example, a linear edge, sketch line, planar face, and cylindrical face.
//     // When reading this property, it is only valid in the case where the primarySlideDirection property returns
//     // CustomJointDirection. Setting this property will automatically set the primarySlideDirection property to
//     // CustomJointDirection. The entity defining the custom direction by be perpendicular to the normal direction.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'customPrimarySlideDirectionEntity', {
//         get : function () {
//             var result = this._execute('customPrimarySlideDirectionEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customPrimarySlideDirectionEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the secondary slide direction. This property will return null in the case
//     // where the PlanarJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'secondarySlideDirectionVector', {
//         get : function () {
//             var result = this._execute('secondarySlideDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets and sets the rotation value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'rotationValue', {
//         get : function () {
//             var result = this._execute('rotationValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the limits of rotation for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'rotationLimits', {
//         get : function () {
//             var result = this._execute('rotationLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     // Gets and sets the offset value in the primary direction. This is in centimeters.
//     // Setting this value is the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'primarySlideValue', {
//         get : function () {
//             var result = this._execute('primarySlideValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('primarySlideValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the limits in the primary direction for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'primarySlideLimits', {
//         get : function () {
//             var result = this._execute('primarySlideLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     // Gets and sets the offset value in the secondary direction. This is in centimeters.
//     // Setting this value is the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'secondarySlideValue', {
//         get : function () {
//             var result = this._execute('secondarySlideValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('secondarySlideValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the limits in the secondary direction for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.PlanarJointMotion.prototype, 'secondarySlideLimits', {
//         get : function () {
//             var result = this._execute('secondarySlideLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     //=========== RevoluteJointMotion ============
//     // Represents the set of information specific to a revolute joint.
//     adsk.fusion.RevoluteJointMotion = function RevoluteJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.RevoluteJointMotion)) {
//             return adsk.fusion.RevoluteJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.RevoluteJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.RevoluteJointMotion.prototype.constructor = adsk.fusion.RevoluteJointMotion;
//     adsk.fusion.RevoluteJointMotion.interfaceId = 'adsk.fusion.RevoluteJointMotion';
//     adsk.objectTypes['adsk.fusion.RevoluteJointMotion'] = adsk.fusion.RevoluteJointMotion;
//     adsk.fusion.RevoluteJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.RevoluteJointMotion ? object : null;
//     };

//     // Gets and sets the direction of the axis of rotation. This can be set to
//     // XAxisJointDirection, YAxisJointDirection, or ZAxisJointDirection. It can
//     // return those three directions and CustomJointDirection. If this returns
//     // CustomJointDirection then the customRotationAxisEntity will return an entity
//     // that defines the axis. If there is a custom rotation axis defined and this
//     // property is set to one of the three standard axes, the custom rotation will
//     // be removed and customRotationAxisEntity will return null.
//     Object.defineProperty(adsk.fusion.RevoluteJointMotion.prototype, 'rotationAxis', {
//         get : function () {
//             var result = this._execute('rotationAxis');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationAxis', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the rotation axis. This property will return null in the case
//     // where the RevolutionJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.RevoluteJointMotion.prototype, 'rotationAxisVector', {
//         get : function () {
//             var result = this._execute('rotationAxisVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property can be set using various types of entities that can infer an
//     // axis. For example, a linear edge, sketch line, planar face, and cylindrical face.
//     // This property is only valid in the case where the rotationAxis property returns
//     // CustomJointDirection. Setting this property will automatically set
//     // the rotationAxis property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.RevoluteJointMotion.prototype, 'customRotationAxisEntity', {
//         get : function () {
//             var result = this._execute('customRotationAxisEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customRotationAxisEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the rotation value. This is in radians. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.RevoluteJointMotion.prototype, 'rotationValue', {
//         get : function () {
//             var result = this._execute('rotationValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('rotationValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the rotation limits for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.RevoluteJointMotion.prototype, 'rotationLimits', {
//         get : function () {
//             var result = this._execute('rotationLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     //=========== RigidJointMotion ============
//     // Represents the set of information specific to a rigid joint. A
//     // rigid joint doesn't support any additional information beyond
//     // getting the joint type which it derives from JointMotion.
//     adsk.fusion.RigidJointMotion = function RigidJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.RigidJointMotion)) {
//             return adsk.fusion.RigidJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.RigidJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.RigidJointMotion.prototype.constructor = adsk.fusion.RigidJointMotion;
//     adsk.fusion.RigidJointMotion.interfaceId = 'adsk.fusion.RigidJointMotion';
//     adsk.objectTypes['adsk.fusion.RigidJointMotion'] = adsk.fusion.RigidJointMotion;
//     adsk.fusion.RigidJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.RigidJointMotion ? object : null;
//     };

//     //=========== SliderJointMotion ============
//     // Represents the set of information specific to a slider joint.
//     adsk.fusion.SliderJointMotion = function SliderJointMotion(handle) {
//         if (!(this instanceof adsk.fusion.SliderJointMotion)) {
//             return adsk.fusion.SliderJointMotion.cast(handle);
//         }
//         adsk.fusion.JointMotion.call(this, handle);
//     };
//     adsk.fusion.SliderJointMotion.prototype = Object.create(adsk.fusion.JointMotion.prototype);
//     adsk.fusion.SliderJointMotion.prototype.constructor = adsk.fusion.SliderJointMotion;
//     adsk.fusion.SliderJointMotion.interfaceId = 'adsk.fusion.SliderJointMotion';
//     adsk.objectTypes['adsk.fusion.SliderJointMotion'] = adsk.fusion.SliderJointMotion;
//     adsk.fusion.SliderJointMotion.cast = function (object) {
//         return object instanceof adsk.fusion.SliderJointMotion ? object : null;
//     };

//     // Gets and sets the direction of the slide. This can be set to
//     // XAxisJointDirection, YAxisJointDirection, or ZAxisJointDirection. It can
//     // return those three directions and CustomJointDirection. If this returns
//     // CustomJointDirection then the customSlideDirectionEntity will return an entity
//     // that defines the direction. If there is a custom direction defined and this
//     // property is set to one of the three standard axes, the custom direction will
//     // be removed and customSlideDirectionEntity will return null.
//     Object.defineProperty(adsk.fusion.SliderJointMotion.prototype, 'slideDirection', {
//         get : function () {
//             var result = this._execute('slideDirection');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('slideDirection', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the direction of the slide. This property will return null in the case
//     // where the SliderJointMotion object was obtained from a JointInput object.
//     Object.defineProperty(adsk.fusion.SliderJointMotion.prototype, 'slideDirectionVector', {
//         get : function () {
//             var result = this._execute('slideDirectionVector');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // This property can be set using various types of entities that can infer a
//     // direction. For example, a linear edge, sketch line, planar face, and cylindrical face.
//     // This property is only valid in the case where the slideDirection property returns
//     // CustomJointDirection. Setting this property will automatically set
//     // the slideDirection property to CustomJointDirection.
//     Object.defineProperty(adsk.fusion.SliderJointMotion.prototype, 'customSlideDirectionEntity', {
//         get : function () {
//             var result = this._execute('customSlideDirectionEntity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.Base)) { throw new TypeError('value must be a adsk.core.Base'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('customSlideDirectionEntity', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the slide value. This is in centimeters. Setting this value is
//     // the equivalent of using the Drive Joints command.
//     Object.defineProperty(adsk.fusion.SliderJointMotion.prototype, 'slideValue', {
//         get : function () {
//             var result = this._execute('slideValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('slideValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns a JointLimits object that defines the slide limits for this joint.
//     // Use the functionality of the returned JointLimits object to get, set, and modify
//     // the joint limits.
//     Object.defineProperty(adsk.fusion.SliderJointMotion.prototype, 'slideLimits', {
//         get : function () {
//             var result = this._execute('slideLimits');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.JointLimits) : null;
//         }
//     });

//     return adsk;
// }));