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
//     if (adsk.core === undefined) {
//         adsk.core = {};
//     }

//     //=========== Command ============
//     // The Command class contains all of the functionality needed by a command to gather
//     // various command input from a user, provide previews, and create the final result
//     // which is also encapsulated within a transaction so it can be undone.
//     adsk.core.Command = function Command(handle) {
//         if (!(this instanceof adsk.core.Command)) {
//             return adsk.core.Command.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Command.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Command.prototype.constructor = adsk.core.Command;
//     adsk.core.Command.interfaceId = 'adsk.core.Command';
//     adsk.objectTypes['adsk.core.Command'] = adsk.core.Command;
//     adsk.core.Command.cast = function (object) {
//         return object instanceof adsk.core.Command ? object : null;
//     };

//     // Gets the parent CommandDefinition object.
//     Object.defineProperty(adsk.core.Command.prototype, 'parentCommandDefinition', {
//         get : function () {
//             var result = this._execute('parentCommandDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//         }
//     });

//     // Gets an event that is fired when the command is first activated or re-activated after being suspended.
//     // Returns a CommandEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'activate', {
//         get : function () {
//             var result = this._execute('activate');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the command is deactivated. The command still exists and could still be activated again.
//     // Returns a CommandEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'deactivate', {
//         get : function () {
//             var result = this._execute('deactivate');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the command is destroyed. The command is destroyed and can be cleaned up.
//     // Returns a CommandEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'destroy', {
//         get : function () {
//             var result = this._execute('destroy');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the command has completed gathering the required input and now
//     // needs to perform whatever action the command does.
//     // Returns a CommandEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'execute', {
//         get : function () {
//             var result = this._execute('execute');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the command has completed gathering the required input and now
//     // needs to perform a preview.
//     // Returns a CommandEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'executePreview', {
//         get : function () {
//             var result = this._execute('executePreview');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandEvent) : null;
//         }
//     });

//     // Gets the associated CommandInputs object which provides the ability
//     // to create new command inputs and provides access to any existing inputs
//     // that have already been created for this command.
//     Object.defineProperty(adsk.core.Command.prototype, 'commandInputs', {
//         get : function () {
//             var result = this._execute('commandInputs');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInputs) : null;
//         }
//     });

//     // Gets an event that is fired whenever an input value is changed.
//     // Returns an InputChangedEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'inputChanged', {
//         get : function () {
//             var result = this._execute('inputChanged');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.InputChangedEvent) : null;
//         }
//     });

//     // Gets an event that is fired to allow you to check if the current state of the inputs are valid for execution.
//     // Returns a ValidateInputsEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'validateInputs', {
//         get : function () {
//             var result = this._execute('validateInputs');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValidateInputsEvent) : null;
//         }
//     });

//     // Geta an event that is fired when a key on the keyboard is pressed down.
//     Object.defineProperty(adsk.core.Command.prototype, 'keyDown', {
//         get : function () {
//             var result = this._execute('keyDown');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.KeyboardEvent) : null;
//         }
//     });

//     // Gets an event that is fired when a key on the keyboard goes up.
//     Object.defineProperty(adsk.core.Command.prototype, 'keyUp', {
//         get : function () {
//             var result = this._execute('keyUp');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.KeyboardEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the mouse is clicked, (a button is pressed and released).
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseClick', {
//         get : function () {
//             var result = this._execute('mouseClick');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the mouse is double-clicked, (clicked twice within the time specified by a system setting.)
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseDoubleClick', {
//         get : function () {
//             var result = this._execute('mouseDoubleClick');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when a mouse button is pressed.
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseDown', {
//         get : function () {
//             var result = this._execute('mouseDown');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the mouse is moved.
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseMove', {
//         get : function () {
//             var result = this._execute('mouseMove');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when a mouse button is released.
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseUp', {
//         get : function () {
//             var result = this._execute('mouseUp');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the mouse wheel is rotated.
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseWheel', {
//         get : function () {
//             var result = this._execute('mouseWheel');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when a mouse drag starts,
//     // (the mouse is pressed and moved).
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseDragBegin', {
//         get : function () {
//             var result = this._execute('mouseDragBegin');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the mouse is in drag mode,
//     // (being moved while a button is pressed).
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseDrag', {
//         get : function () {
//             var result = this._execute('mouseDrag');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Gets an event that is fired when the mouse button is released after a drag.
//     Object.defineProperty(adsk.core.Command.prototype, 'mouseDragEnd', {
//         get : function () {
//             var result = this._execute('mouseDragEnd');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.MouseEvent) : null;
//         }
//     });

//     // Specifies if the OK button is visible or not.
//     // If set to false then the OK button is removed and the
//     // "CANCEL" button text changes to "CLOSE". You can override
//     // the default button text using the cancelButtonText property.
//     Object.defineProperty(adsk.core.Command.prototype, 'isOKButtonVisible', {
//         get : function () {
//             var result = this._execute('isOKButtonVisible');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isOKButtonVisible', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text displayed on the OK button. When the OK and Cancel
//     // buttons are displayed, this text defaults to "OK". If the Cancel button
//     // is not displayed the text defaults to "CLOSE".
//     Object.defineProperty(adsk.core.Command.prototype, 'okButtonText', {
//         get : function () {
//             var result = this._execute('okButtonText');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('okButtonText', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text displayed on the Cancel button. The value of this
//     // property is ignored if the isCancelButtonVisible property is false.
//     Object.defineProperty(adsk.core.Command.prototype, 'cancelButtonText', {
//         get : function () {
//             var result = this._execute('cancelButtonText');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('cancelButtonText', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and Sets if this command is repeatable using the 'Repeat Last Command' option from the Fusion marking menu.
//     Object.defineProperty(adsk.core.Command.prototype, 'isRepeatable', {
//         get : function () {
//             var result = this._execute('isRepeatable');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isRepeatable', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets an event that is fired during the selection process. The event is fired as the
//     // user moves the mouse over the model but before anything is made selectable. The entity
//     // currently under the mouse is provided through the SelectionEventArgs and you can specify
//     // whether it is selectable or not. This provides a dynamic way of defining the selection
//     // filter.
//     // Returns an SelectionEvent object that is used to connect and release from the event.
//     Object.defineProperty(adsk.core.Command.prototype, 'selectionEvent', {
//         get : function () {
//             var result = this._execute('selectionEvent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.SelectionEvent) : null;
//         }
//     });

//     // Specifies what the behavior will be when a command is pre-empted by the user executing another
//     // command. If true (the default), and all of the current inputs are valid, the command will be
//     // executed just the same as if the user clicked the OK button. If false, the command is terminated.
//     Object.defineProperty(adsk.core.Command.prototype, 'isExecutedWhenPreEmpted', {
//         get : function () {
//             var result = this._execute('isExecutedWhenPreEmpted');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isExecutedWhenPreEmpted', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets the initial size of the dialog when it is first displayed. If this is not
//     // set, Fusion will use a default size for the dialog.
//     // width : The width of the dialog in pixels.
//     // height : The height of the dialog in pixels.
//     // Returns true if the default size was successfully set.
//     adsk.core.Command.prototype.setDialogInitialSize = function (width, height) {
//         if (!isFinite(width)) { throw new TypeError('width must be a number'); }
//         if (!isFinite(height)) { throw new TypeError('height must be a number'); }
//         var args = {
//             width : Number(width),
//             height : Number(height)
//         };
//         var result = this._execute('setDialogInitialSize', args);
//         return result ? result.value : undefined;
//     };

//     // Sets the minimum size for the dialog when resized to by the user. If this is not
//     // set, a default minimum size is used.
//     // width : The minimum width of the dialog in pixels.
//     // height : The minimum height of the dialog in pixels.
//     // Returns true if the minimum size was successfully set.
//     adsk.core.Command.prototype.setDialogMinimumSize = function (width, height) {
//         if (!isFinite(width)) { throw new TypeError('width must be a number'); }
//         if (!isFinite(height)) { throw new TypeError('height must be a number'); }
//         var args = {
//             width : Number(width),
//             height : Number(height)
//         };
//         var result = this._execute('setDialogMinimumSize', args);
//         return result ? result.value : undefined;
//     };

//     //=========== CommandCreatedEvent ============
//     // Class that needs to be implemented in order to respond to the CommandCreatedEvent event.
//     adsk.core.CommandCreatedEvent = function CommandCreatedEvent(handle) {
//         if (!(this instanceof adsk.core.CommandCreatedEvent)) {
//             return adsk.core.CommandCreatedEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.CommandCreatedEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.CommandCreatedEvent.prototype.constructor = adsk.core.CommandCreatedEvent;
//     adsk.core.CommandCreatedEvent.interfaceId = 'adsk.core.CommandCreatedEvent';
//     adsk.objectTypes['adsk.core.CommandCreatedEvent'] = adsk.core.CommandCreatedEvent;
//     adsk.core.CommandCreatedEvent.cast = function (object) {
//         return object instanceof adsk.core.CommandCreatedEvent ? object : null;
//     };

//     adsk.core.CommandCreatedEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.CommandCreatedEventArgs);
//     };

//     //=========== CommandCreatedEventArgs ============
//     // Provides data for the CommandCreated event.
//     adsk.core.CommandCreatedEventArgs = function CommandCreatedEventArgs(handle) {
//         if (!(this instanceof adsk.core.CommandCreatedEventArgs)) {
//             return adsk.core.CommandCreatedEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.CommandCreatedEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.CommandCreatedEventArgs.prototype.constructor = adsk.core.CommandCreatedEventArgs;
//     adsk.core.CommandCreatedEventArgs.interfaceId = 'adsk.core.CommandCreatedEventArgs';
//     adsk.objectTypes['adsk.core.CommandCreatedEventArgs'] = adsk.core.CommandCreatedEventArgs;
//     adsk.core.CommandCreatedEventArgs.cast = function (object) {
//         return object instanceof adsk.core.CommandCreatedEventArgs ? object : null;
//     };

//     // Gets the newly created Command object that allows you to perform an action in response to the control being clicked.
//     Object.defineProperty(adsk.core.CommandCreatedEventArgs.prototype, 'command', {
//         get : function () {
//             var result = this._execute('command');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Command) : null;
//         }
//     });

//     //=========== CommandDefinition ============
//     // The CommandDefinition is the base class of the various types of commands. Command types are based
//     // on the type of control used to execute them in the user-interface. For example, most commands will
//     // use a ButtonDefinition since they're executed using a button in the user-interface. A command definition
//     // contains the information that defines the user-interface. For example, the name and icon. The command
//     // definition and also gets the notification when the user interacts with the associated control.
//     adsk.core.CommandDefinition = function CommandDefinition(handle) {
//         if (!(this instanceof adsk.core.CommandDefinition)) {
//             return adsk.core.CommandDefinition.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.CommandDefinition.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.CommandDefinition.prototype.constructor = adsk.core.CommandDefinition;
//     adsk.core.CommandDefinition.interfaceId = 'adsk.core.CommandDefinition';
//     adsk.objectTypes['adsk.core.CommandDefinition'] = adsk.core.CommandDefinition;
//     adsk.core.CommandDefinition.cast = function (object) {
//         return object instanceof adsk.core.CommandDefinition ? object : null;
//     };

//     // This event is fired when the associated control is manipulated by the user. A new Command object
//     // is created and passed back through this event which you can then use to interact with the user
//     // to get any input the command requires.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'commandCreated', {
//         get : function () {
//             var result = this._execute('commandCreated');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandCreatedEvent) : null;
//         }
//     });

//     // Gets if this is a native command definition. If True then there
//     // are limitations to edits that can be done on the command definition.
//     // For example a native command definition cannot be deleted.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'isNative', {
//         get : function () {
//             var result = this._execute('isNative');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the unique id for this command definition. This is guaranteed to be unique with
//     // respect to all other command definitions.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the full filename of the image file (png) used for the tool clip.
//     // The tooltip is always shown but as the user hovers over the control it will progressively display the tool clip along with the tooltip text.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'toolClipFilename', {
//         get : function () {
//             var result = this._execute('toolClipFilename');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('toolClipFilename', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the base tooltip string. This is always shown for commands. If the tooltip description and/or tool clip are also specified then
//     // the tooltip will progressively display more information as the user hovers the mouse over the control.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'tooltip', {
//         get : function () {
//             var result = this._execute('tooltip');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('tooltip', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the directory that contains any additional files associated with this command.
//     // These are typically the image files that will be used for a button and the
//     // html files for a tool clip or helps and tips.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'resourceFolder', {
//         get : function () {
//             var result = this._execute('resourceFolder');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('resourceFolder', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the ControlDefinition associated with this command. The control definition
//     // defines the type of control that can exist in the user interface to execute this command.
//     // You can use properties on the control definition to define the look and behavior of
//     // the control.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'controlDefinition', {
//         get : function () {
//             var result = this._execute('controlDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ControlDefinition) : null;
//         }
//     });

//     // Gets or sets the visible name of the command when seen in the user interface.
//     Object.defineProperty(adsk.core.CommandDefinition.prototype, 'name', {
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

//     // Executes this command definition. This is the same as the user clicking
//     // a button that is associated with this command definition.
//     // input : A list of named values that will provide input to the command. The values supported are unique for each command.
//     // and not all commands support input values.
//     // Returns true or false indicating if the execution was successful.
//     adsk.core.CommandDefinition.prototype.execute = function (input) {
//         if (input === null || (input !== undefined && input !== null && !(input instanceof adsk.core.NamedValues))) { throw new TypeError('input must be a adsk.core.NamedValues'); }
//         var args;
//         if (input !== undefined) {
//             args = {};
//             args.input = (input === null ? input : input.handle);
//         }
//         var result = this._execute('execute', args);
//         return result ? result.value : undefined;
//     };

//     // Deletes this command definition. This is only valid for API created command definitions
//     // and will fail if the IsNative property is true.
//     // Returns true or false indicating if the deletion was successful.
//     adsk.core.CommandDefinition.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== CommandDefinitions ============
//     // Provides access to all of the available command definitions. This is all those created via
//     // the API but also includes the command definitions defined by Fusion for the native commands.
//     adsk.core.CommandDefinitions = function CommandDefinitions(handle) {
//         if (!(this instanceof adsk.core.CommandDefinitions)) {
//             return adsk.core.CommandDefinitions.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.CommandDefinitions.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.CommandDefinitions.prototype.constructor = adsk.core.CommandDefinitions;
//     adsk.core.CommandDefinitions.interfaceId = 'adsk.core.CommandDefinitions';
//     adsk.objectTypes['adsk.core.CommandDefinitions'] = adsk.core.CommandDefinitions;
//     adsk.core.CommandDefinitions.cast = function (object) {
//         return object instanceof adsk.core.CommandDefinitions ? object : null;
//     };

//     // Gets the number of command definitions.
//     Object.defineProperty(adsk.core.CommandDefinitions.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates a new command definition that can be used to create a button control and handle the response when the button is clicked.
//     // id : The unique identifier for this command definition. It must be unique with respect to all other command definitions and is
//     // limited to the following set of characters, [A-Z][a-z][0-9] and _.
//     // name : The name displayed in the UI for the associated button control.
//     // tooltip : The full description of the command as seen in the extended tooltip in the user interface.
//     // Using the returned CommandDefinition you can also optionally set the toolClipFilename property
//     // to show an image the extended tooltip.
//     // resourceFolder : Specifies the folder where the resources for this command are located. These are various sizes and styles of png
//     // files that are used for the button image. To fully support all potential options you should create files with
//     // the following names and sizes: 16x16.png , 32x32.png, 32x32@2x.png (used for retina only), 16x16-dark.png, 32x32-dark.png, 32x32-dark@2x.png
//     // The dark images are used when the command is highlighted and can contain lighter lines to contrast better with the blue highlighting. If
//     // you don't provide dark images Fusion will use the regular images when highlighting the button.
//     // This is an optional argument and if not provided a default icon will be used.
//     // Returns the created CommandDefinition object or null if the creation failed.
//     adsk.core.CommandDefinitions.prototype.addButtonDefinition = function (id, name, tooltip, resourceFolder) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (tooltip === undefined || tooltip === null || tooltip.constructor !== String) { throw new TypeError('tooltip must be a string'); }
//         if (resourceFolder === null || (resourceFolder !== undefined && resourceFolder.constructor !== String)) { throw new TypeError('resourceFolder must be a string'); }
//         var args = {
//             id : id,
//             name : name,
//             tooltip : tooltip
//         };
//         if (resourceFolder !== undefined) {
//             args.resourceFolder = resourceFolder;
//         }
//         var result = this._execute('addButtonDefinition', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//     };

//     // Creates a new command definition that can be used to create a single check box control and handle the response when the check box is clicked.
//     // id : The unique identifier for this command definition. It must be unique with respect to all other command definitions and is
//     // limited to the following set of characters, [A-Z][a-z][0-9] and _.
//     // name : The name displayed in the UI for the associated check box control.
//     // tooltip : The full description of the command as seen in the extended tooltip in the user interface.
//     // Using the returned CommandDefinition you can also optionally set the toolClipFilename property
//     // to show an image in the extended tooltip.
//     // isChecked : Indicates if the initial state of the check box.
//     // Returns the created CommandDefinition object or null if the creation failed.
//     adsk.core.CommandDefinitions.prototype.addCheckBoxDefinition = function (id, name, tooltip, isChecked) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (tooltip === undefined || tooltip === null || tooltip.constructor !== String) { throw new TypeError('tooltip must be a string'); }
//         if (typeof isChecked !== 'boolean') { throw new TypeError('isChecked must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             tooltip : tooltip,
//             isChecked : isChecked
//         };
//         var result = this._execute('addCheckBoxDefinition', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//     };

//     // Creates a new command definition that can be used to create a list of check boxes, radio buttons, or text with an icon within a pop-up.
//     // When the list is of check boxes any combinations of items in the list can be checked. The drop-down also remains displayed allowing the user to
//     // check and uncheck multiple items however a CommandCreated event is fired for every change.
//     // When the list is of radio buttons or a list of text items, only one item in the list can be selected at a time.
//     // When an item is selected the drop-down is immediately dismissed.
//     // The items in the list and their initial state are defined using functionality on the associated ListControlDefinition, which is
//     // accessible through the returned CommandDefinition.
//     // id : The unique identifier for this command definition. It must be unique with respect to all other command definitions and is
//     // limited to the following set of characters, [A-Z][a-z][0-9] and _.
//     // name : The name displayed in the UI for the associated selected check box list control.
//     // listControlDisplayType : Specifies the type of controls to be displayed within the list.
//     // resourceFolder : The folder containing any resources used for items in this list.
//     // Returns the created CommandDefinition object or null if the creation failed.
//     adsk.core.CommandDefinitions.prototype.addListDefinition = function (id, name, listControlDisplayType, resourceFolder) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (!isFinite(listControlDisplayType)) { throw new TypeError('listControlDisplayType must be a number'); }
//         if (resourceFolder === null || (resourceFolder !== undefined && resourceFolder.constructor !== String)) { throw new TypeError('resourceFolder must be a string'); }
//         var args = {
//             id : id,
//             name : name,
//             listControlDisplayType : Number(listControlDisplayType)
//         };
//         if (resourceFolder !== undefined) {
//             args.resourceFolder = resourceFolder;
//         }
//         var result = this._execute('addListDefinition', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//     };

//     // Returns the CommandDefinition at the specified index.
//     // index : The index of the command definition within the collection to return. The first item in the
//     // collection has in index of 0.
//     // Returns the CommandDefinition at the specified index or null if an invalid index is specified.
//     adsk.core.CommandDefinitions.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//     };

//     // Returns the CommandDefinition that has the specified ID.
//     // id : The ID of the command definition to return.
//     // Returns the CommandDefinition with the specified ID or null if there isn't a command definition with that ID.
//     adsk.core.CommandDefinitions.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//     };

//     //=========== CommandEvent ============
//     // An event endpoint that supports the connection to client implemented CommandEventHandlers.
//     adsk.core.CommandEvent = function CommandEvent(handle) {
//         if (!(this instanceof adsk.core.CommandEvent)) {
//             return adsk.core.CommandEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.CommandEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.CommandEvent.prototype.constructor = adsk.core.CommandEvent;
//     adsk.core.CommandEvent.interfaceId = 'adsk.core.CommandEvent';
//     adsk.objectTypes['adsk.core.CommandEvent'] = adsk.core.CommandEvent;
//     adsk.core.CommandEvent.cast = function (object) {
//         return object instanceof adsk.core.CommandEvent ? object : null;
//     };

//     adsk.core.CommandEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.CommandEventArgs);
//     };

//     //=========== CommandEventArgs ============
//     // Provides a set of arguments from a firing CommandEvent to a CommandEventHandler's notify callback method.
//     adsk.core.CommandEventArgs = function CommandEventArgs(handle) {
//         if (!(this instanceof adsk.core.CommandEventArgs)) {
//             return adsk.core.CommandEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.CommandEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.CommandEventArgs.prototype.constructor = adsk.core.CommandEventArgs;
//     adsk.core.CommandEventArgs.interfaceId = 'adsk.core.CommandEventArgs';
//     adsk.objectTypes['adsk.core.CommandEventArgs'] = adsk.core.CommandEventArgs;
//     adsk.core.CommandEventArgs.cast = function (object) {
//         return object instanceof adsk.core.CommandEventArgs ? object : null;
//     };

//     // Gets the Command object.
//     Object.defineProperty(adsk.core.CommandEventArgs.prototype, 'command', {
//         get : function () {
//             var result = this._execute('command');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Command) : null;
//         }
//     });

//     // Used during the execute event to get or set that the execute operations failed
//     // and the commands transaction should be aborted.
//     // This property should be ignored for all events besides the Execute event.
//     Object.defineProperty(adsk.core.CommandEventArgs.prototype, 'executeFailed', {
//         get : function () {
//             var result = this._execute('executeFailed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('executeFailed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Used during the execute event to get or set a description of an execute failure.
//     // This property should be ignored for all events besides the Execute event.
//     Object.defineProperty(adsk.core.CommandEventArgs.prototype, 'executeFailedMessage', {
//         get : function () {
//             var result = this._execute('executeFailedMessage');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('executeFailedMessage', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Used during the commandStarting event to get or set that the result of preview is valid
//     // and the command can reuse the result when Ok is hit.
//     // This property should be ignored for all events besides the executePreview event.
//     Object.defineProperty(adsk.core.CommandEventArgs.prototype, 'isValidResult', {
//         get : function () {
//             var result = this._execute('isValidResult');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isValidResult', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the termination reason of the command. It's only valid on the destroy event.
//     Object.defineProperty(adsk.core.CommandEventArgs.prototype, 'terminationReason', {
//         get : function () {
//             var result = this._execute('terminationReason');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== CommandInput ============
//     // The base class for all command inputs. A CommandInput is used to gather an input value from the user when a command is executed.
//     adsk.core.CommandInput = function CommandInput(handle) {
//         if (!(this instanceof adsk.core.CommandInput)) {
//             return adsk.core.CommandInput.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.CommandInput.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.CommandInput.prototype.constructor = adsk.core.CommandInput;
//     adsk.core.CommandInput.interfaceId = 'adsk.core.CommandInput';
//     adsk.objectTypes['adsk.core.CommandInput'] = adsk.core.CommandInput;
//     adsk.core.CommandInput.cast = function (object) {
//         return object instanceof adsk.core.CommandInput ? object : null;
//     };

//     // Gets the CommandInputs class of the parent, which can be a Command, GroupCommandInput or TabCommandInput.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'commandInputs', {
//         get : function () {
//             var result = this._execute('commandInputs');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInputs) : null;
//         }
//     });

//     // Gets the unique identifier for this input in the command's CommandInputs.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the user visible name of this input.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this input is currently enabled or disabled for user interaction.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'isEnabled', {
//         get : function () {
//             var result = this._execute('isEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this input will be visible to the user.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'isVisible', {
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

//     // Gets the parent Command.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'parentCommand', {
//         get : function () {
//             var result = this._execute('parentCommand');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Command) : null;
//         }
//     });

//     // Gets or sets if this input fills the entire width of the dialog. If
//     // true, the name is ignored and the input control will fill the entire width of the command dialog.
//     // The default value for this property in a new command input if false, or not to fill the width.
//     // This property does not apply to GroupCommandInputs or TabCommandInputs.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'isFullWidth', {
//         get : function () {
//             var result = this._execute('isFullWidth');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isFullWidth', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the full filename of the image file (png) used for the tool clip.
//     // The tooltip is always shown but as the user hovers over the control it will progressively display
//     // the tool clip and description text.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'toolClipFilename', {
//         get : function () {
//             var result = this._execute('toolClipFilename');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('toolClipFilename', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the base tooltip string. This is always shown for commands. If the tooltip description
//     // and/or tool clip are also specified then the tooltip will progressively display more information as the
//     // user hovers the mouse over the control.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'tooltip', {
//         get : function () {
//             var result = this._execute('tooltip');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('tooltip', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets additional text to display progressively along with the tooltip. The text for the description
//     // can contain some basic html formatting tags to format the tags. For example the br tag can be used to
//     // create multiple paragraphs. The tooltip is always shown but as the user hovers over the control it will
//     // progressively display the tool clip and description text.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'tooltipDescription', {
//         get : function () {
//             var result = this._execute('tooltipDescription');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('tooltipDescription', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the parent CommandInput if this commandInput is the child of a TabCommandInput or GroupCommandInput.
//     // Returns null if their is no parent.
//     Object.defineProperty(adsk.core.CommandInput.prototype, 'parentCommandInput', {
//         get : function () {
//             var result = this._execute('parentCommandInput');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInput) : null;
//         }
//     });

//     //=========== CommandInputs ============
//     // Provides access to the set of inputs for a command. Command inputs are used to gather inputs from the user when a command is executed.
//     // The set of inputs used by a command are created and added to the command with the methods in this class.
//     adsk.core.CommandInputs = function CommandInputs(handle) {
//         if (!(this instanceof adsk.core.CommandInputs)) {
//             return adsk.core.CommandInputs.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.CommandInputs.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.CommandInputs.prototype.constructor = adsk.core.CommandInputs;
//     adsk.core.CommandInputs.interfaceId = 'adsk.core.CommandInputs';
//     adsk.objectTypes['adsk.core.CommandInputs'] = adsk.core.CommandInputs;
//     adsk.core.CommandInputs.cast = function (object) {
//         return object instanceof adsk.core.CommandInputs ? object : null;
//     };

//     // Gets the parent Command object.
//     Object.defineProperty(adsk.core.CommandInputs.prototype, 'command', {
//         get : function () {
//             var result = this._execute('command');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Command) : null;
//         }
//     });

//     // Gets the number of inputs.
//     Object.defineProperty(adsk.core.CommandInputs.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified command input using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.CommandInputs.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInput) : null;
//     };

//     // Returns the command input that has the specified ID.
//     // id : The unique ID of the command input you want to get.
//     // Returns the specified command input or null if the input ID doesn't match an existing command input.
//     adsk.core.CommandInputs.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInput) : null;
//     };

//     // Adds a new value input to the command.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // unitType : The unit type of the value. This will be used to validate the input and the returned Value object
//     // will be of this type.
//     // initialValue : The initial value of this input as shown in the dialog. This can be a string or a real. If it's a string
//     // it must be able to be evaluated using the specified unit type. If it's a real it is assumed to be in database
//     // units for the specified unit type and is displayed as a string
//     // Returns the created ValueCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addValueInput = function (id, name, unitType, initialValue) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (unitType === undefined || unitType === null || unitType.constructor !== String) { throw new TypeError('unitType must be a string'); }
//         if (initialValue !== null && !(initialValue instanceof adsk.core.ValueInput)) { throw new TypeError('initialValue must be a adsk.core.ValueInput'); }
//         var args = {
//             id : id,
//             name : name,
//             unitType : unitType,
//             initialValue : (initialValue === null ? initialValue : initialValue.handle)
//         };
//         var result = this._execute('addValueInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ValueCommandInput) : null;
//     };

//     // Adds a new boolean input to the command. The input can be shown as a check box or a button. If it's a button
//     // you need to specify the resource folder to define the icon to use. Buttons don't have an up or down state but
//     // can just be clicked.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // isCheckBox : Specifies if this input should be displayed as a check box or a button. If true a check box is
//     // displayed, if false a button is displayed that can be clicked to toggle it's state.
//     // resourceFolder : Specifies the folder that contains the image for the input.
//     // It's optional if isCheckBox is true. If it's set for check box, the check box will be present as a button and has an up or down state.
//     // initialValue : Specifies the initial value of the check box or button where for a check box the value of True results
//     // in it being checked and for a button a value of true results in the button being pressed.
//     // Returns the created BoolValueCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addBoolValueInput = function (id, name, isCheckBox, resourceFolder, initialValue) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (typeof isCheckBox !== 'boolean') { throw new TypeError('isCheckBox must be a boolean'); }
//         if (resourceFolder === null || (resourceFolder !== undefined && resourceFolder.constructor !== String)) { throw new TypeError('resourceFolder must be a string'); }
//         if (initialValue === null || (initialValue !== undefined && typeof initialValue !== 'boolean')) { throw new TypeError('initialValue must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             isCheckBox : isCheckBox
//         };
//         if (resourceFolder !== undefined) {
//             args.resourceFolder = resourceFolder;
//         }
//         if (initialValue !== undefined) {
//             args.initialValue = initialValue;
//         }
//         var result = this._execute('addBoolValueInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.BoolValueCommandInput) : null;
//     };

//     // Adds a new string input to the command.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // initialValue : Specifies the initial value as shown in the dialog.
//     // Returns the created StringValueCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addStringValueInput = function (id, name, initialValue) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (initialValue === null || (initialValue !== undefined && initialValue.constructor !== String)) { throw new TypeError('initialValue must be a string'); }
//         var args = {
//             id : id,
//             name : name
//         };
//         if (initialValue !== undefined) {
//             args.initialValue = initialValue;
//         }
//         var result = this._execute('addStringValueInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.StringValueCommandInput) : null;
//     };

//     // Adds a new selection input to the command. This allows you to get entity selections from the user. The default
//     // behavior is that only one entity can be selected and it can be of any type. To change the selection behavior to
//     // select specific types and control the number of items selected use the methods and properties on the returned
//     // SelectionCommandInput object. You can also
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // commandPrompt : The text in the tooltip shown next to the cursor.
//     // Returns the created SelectionCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addSelectionInput = function (id, name, commandPrompt) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (commandPrompt === undefined || commandPrompt === null || commandPrompt.constructor !== String) { throw new TypeError('commandPrompt must be a string'); }
//         var args = {
//             id : id,
//             name : name,
//             commandPrompt : commandPrompt
//         };
//         var result = this._execute('addSelectionInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.SelectionCommandInput) : null;
//     };

//     // Adds a new empty drop-down input to the command. drop-downs of various types are supported.
//     // To add items to the drop down use the returned DropDownCommandInput object.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this command as seen in the dialog.
//     // dropDownStyle : Specifies the style of the drop-down.
//     // Returns the created DropDownCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addDropDownCommandInput = function (id, name, dropDownStyle) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (!isFinite(dropDownStyle)) { throw new TypeError('dropDownStyle must be a number'); }
//         var args = {
//             id : id,
//             name : name,
//             dropDownStyle : Number(dropDownStyle)
//         };
//         var result = this._execute('addDropDownCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DropDownCommandInput) : null;
//     };

//     // Adds a new row of buttons as a command input. Depending on the isMultiSelectEnabled argument it can act like an option list
//     // where only a single button on the row can be selected at a time or multiple buttons can be selected.
//     // The buttons are defined by using the returned ButtonRowCommandInput object.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this command as seen in the dialog.
//     // isMultiSelectEnabled : Sets if this button row can have multiple items selected at once or not.
//     // If True, multiple buttons can be selected at once. If False only one button
//     // can be selected and selecting another button unselects the one currently selected.
//     // Returns the created ButtonRowCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addButtonRowCommandInput = function (id, name, isMultiSelectEnabled) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (typeof isMultiSelectEnabled !== 'boolean') { throw new TypeError('isMultiSelectEnabled must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             isMultiSelectEnabled : isMultiSelectEnabled
//         };
//         var result = this._execute('addButtonRowCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ButtonRowCommandInput) : null;
//     };

//     // Adds a new slider input to the command. The value type is double.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // unitType : The unit type of the value. This will be used to validate the input and the returned value will be in the base units for this
//     // unit type. For example if you specify the unitType to be "in" the returned value will be in centimeters because inches are
//     // a length unit and the base unit for length is centimeters.
//     // min : Provides the minimum value in database units
//     // max : Provides the maximum value in database units
//     // hasTwoSliders : Optional input. Indicates if the slider input has two sliders.
//     // Returns the created FloatSliderCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addFloatSliderCommandInput = function (id, name, unitType, min, max, hasTwoSliders) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (unitType === undefined || unitType === null || unitType.constructor !== String) { throw new TypeError('unitType must be a string'); }
//         if (!isFinite(min)) { throw new TypeError('min must be a number'); }
//         if (!isFinite(max)) { throw new TypeError('max must be a number'); }
//         if (hasTwoSliders === null || (hasTwoSliders !== undefined && typeof hasTwoSliders !== 'boolean')) { throw new TypeError('hasTwoSliders must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             unitType : unitType,
//             min : Number(min),
//             max : Number(max)
//         };
//         if (hasTwoSliders !== undefined) {
//             args.hasTwoSliders = hasTwoSliders;
//         }
//         var result = this._execute('addFloatSliderCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.FloatSliderCommandInput) : null;
//     };

//     // Adds a new slider input to the command. The value type is float.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // unitType : The unit type of the value. This will be used to validate the input and the returned Value object
//     // will be of this type.
//     // valueList : Provides the value list (in database units) of the slider command input. This defines all of the values that the slider
//     // can return. As the user moves the slider it will jump between these values. The low and high values
//     // of the list are used as the minimum and maximum values of the slider.
//     // hasTwoSliders : Optional input. Indicates if the slider input has two sliders.
//     // Returns the created FloatSliderCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addFloatSliderListCommandInput = function (id, name, unitType, valueList, hasTwoSliders) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (unitType === undefined || unitType === null || unitType.constructor !== String) { throw new TypeError('unitType must be a string'); }
//         if (!Array.isArray(valueList)) { throw new TypeError('valueList must be an array'); }
//         var valueListLength = valueList.length;
//         var valueListIt;
//         for (valueListIt = 0; valueListIt < valueListLength; ++valueListIt) {
//             if (!isFinite(valueList[valueListIt])) { throw new TypeError('valueList[valueListIt] must be a number'); }
//         }
//         if (hasTwoSliders === null || (hasTwoSliders !== undefined && typeof hasTwoSliders !== 'boolean')) { throw new TypeError('hasTwoSliders must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             unitType : unitType,
//             valueList : valueList
//         };
//         if (hasTwoSliders !== undefined) {
//             args.hasTwoSliders = hasTwoSliders;
//         }
//         var result = this._execute('addFloatSliderListCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.FloatSliderCommandInput) : null;
//     };

//     // Adds a new slider input to the command. The value type is integer.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // min : Provides the minimum value.
//     // max : Provides the maximum value.
//     // hasTwoSliders : Optional input. Indicates if the slider input has two sliders.
//     // Returns the created IntegerSliderCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addIntegerSliderCommandInput = function (id, name, min, max, hasTwoSliders) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (!isFinite(min)) { throw new TypeError('min must be a number'); }
//         if (!isFinite(max)) { throw new TypeError('max must be a number'); }
//         if (hasTwoSliders === null || (hasTwoSliders !== undefined && typeof hasTwoSliders !== 'boolean')) { throw new TypeError('hasTwoSliders must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             min : Number(min),
//             max : Number(max)
//         };
//         if (hasTwoSliders !== undefined) {
//             args.hasTwoSliders = hasTwoSliders;
//         }
//         var result = this._execute('addIntegerSliderCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.IntegerSliderCommandInput) : null;
//     };

//     // Adds a new slider input to the command. The value type is integer.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // valueList : Provides the value list of the slider command input. This defines all of the values that the slider
//     // can return. As the user moves the slider it will jump between these values. The low and high values
//     // of the list are used as the minimum and maximum values of the slider.
//     // hasTwoSliders : Optional input. Indicates if the slider has two sliders.
//     // Returns the created IntegerSliderCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addIntegerSliderListCommandInput = function (id, name, valueList, hasTwoSliders) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (!Array.isArray(valueList)) { throw new TypeError('valueList must be an array'); }
//         var valueListLength = valueList.length;
//         var valueListIt;
//         for (valueListIt = 0; valueListIt < valueListLength; ++valueListIt) {
//             if (!isFinite(valueList[valueListIt])) { throw new TypeError('valueList[valueListIt] must be a number'); }
//         }
//         if (hasTwoSliders === null || (hasTwoSliders !== undefined && typeof hasTwoSliders !== 'boolean')) { throw new TypeError('hasTwoSliders must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             valueList : valueList
//         };
//         if (hasTwoSliders !== undefined) {
//             args.hasTwoSliders = hasTwoSliders;
//         }
//         var result = this._execute('addIntegerSliderListCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.IntegerSliderCommandInput) : null;
//     };

//     // Adds a text box input to the command.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog. If an empty string is provided then
//     // no name will be displayed and the text box will span the width of the command dialog.
//     // formattedText : Gets and sets the formatted text displayed in the dialog. Formatted text includes
//     // any basic html formatting that has been defined. For example, you can use basic html formatting such as
//     // <b>Bold</b>, <i>Italic</i>, and <br /> for a line break. It also supports hyperlinks, which when clicked
//     // by the user, Fusion will open the specified url in the default browser. Hyperlinks are defined using the
//     // <a> tag such as "You are using Autodesk's <a href="http://fusion360.autodesk.com">Fusion 360</a>.".
//     // numRows : Specifies the height of the text box as defined by the number of rows of text that can be displayed.
//     // If the text is larger than will fit in the box a scroll bar will automatically be displayed.
//     // isReadOnly : Specifies if the text box is read-only or not.
//     // Returns the created TextBoxCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addTextBoxCommandInput = function (id, name, formattedText, numRows, isReadOnly) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (formattedText === undefined || formattedText === null || formattedText.constructor !== String) { throw new TypeError('formattedText must be a string'); }
//         if (!isFinite(numRows)) { throw new TypeError('numRows must be a number'); }
//         if (typeof isReadOnly !== 'boolean') { throw new TypeError('isReadOnly must be a boolean'); }
//         var args = {
//             id : id,
//             name : name,
//             formattedText : formattedText,
//             numRows : Number(numRows),
//             isReadOnly : isReadOnly
//         };
//         var result = this._execute('addTextBoxCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.TextBoxCommandInput) : null;
//     };

//     // Adds a new spinner input to the command. The value type is float.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // unitType : The unit type of the value. This will be used to validate the input and the returned Value object
//     // will be of this type.
//     // min : Provides the minimum value in database units.
//     // max : Provides the maximum value in database units.
//     // spinStep : Sets the spin step value in the unit type set by the unitType argument.
//     // The value should be more than zero. This is the amount the slider will advance
//     // when the user clicks the spin button beside the value.
//     // initialValue : The initial value of this input as shown in the dialog. This value is assumed to be in database
//     // units for the specified unit type
//     // Returns the created FloatSpinnerCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addFloatSpinnerCommandInput = function (id, name, unitType, min, max, spinStep, initialValue) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (unitType === undefined || unitType === null || unitType.constructor !== String) { throw new TypeError('unitType must be a string'); }
//         if (!isFinite(min)) { throw new TypeError('min must be a number'); }
//         if (!isFinite(max)) { throw new TypeError('max must be a number'); }
//         if (!isFinite(spinStep)) { throw new TypeError('spinStep must be a number'); }
//         if (!isFinite(initialValue)) { throw new TypeError('initialValue must be a number'); }
//         var args = {
//             id : id,
//             name : name,
//             unitType : unitType,
//             min : Number(min),
//             max : Number(max),
//             spinStep : Number(spinStep),
//             initialValue : Number(initialValue)
//         };
//         var result = this._execute('addFloatSpinnerCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.FloatSpinnerCommandInput) : null;
//     };

//     // Adds a new spinner input to the command. The value type is integer.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // min : Provides the minimum value.
//     // max : Provides the maximum value.
//     // spinStep : Provides the spin step. The value should be more than zero. This is the amount the slider will advance
//     // when the user clicks the spin button beside the value.
//     // initialValue : The initial value of this input as shown in the dialog.
//     // Returns the created IntegerSpinnerCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addIntegerSpinnerCommandInput = function (id, name, min, max, spinStep, initialValue) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (!isFinite(min)) { throw new TypeError('min must be a number'); }
//         if (!isFinite(max)) { throw new TypeError('max must be a number'); }
//         if (!isFinite(spinStep)) { throw new TypeError('spinStep must be a number'); }
//         if (!isFinite(initialValue)) { throw new TypeError('initialValue must be a number'); }
//         var args = {
//             id : id,
//             name : name,
//             min : Number(min),
//             max : Number(max),
//             spinStep : Number(spinStep),
//             initialValue : Number(initialValue)
//         };
//         var result = this._execute('addIntegerSpinnerCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.IntegerSpinnerCommandInput) : null;
//     };

//     // Adds a new Radio Button Group input to the command.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this radio button group as seen in the dialog.
//     // Returns the created RadioButtonGroupCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addRadioButtonGroupCommandInput = function (id, name) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === null || (name !== undefined && name.constructor !== String)) { throw new TypeError('name must be a string'); }
//         var args = {
//             id : id
//         };
//         if (name !== undefined) {
//             args.name = name;
//         }
//         var result = this._execute('addRadioButtonGroupCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.RadioButtonGroupCommandInput) : null;
//     };

//     // Adds a new Group input to the command. Group Command inputs organize a set of command inputs into a collapsible
//     // list within a command dialog.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this group as seen in the dialog.
//     // Returns the created GroupCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addGroupCommandInput = function (id, name) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         var args = {
//             id : id,
//             name : name
//         };
//         var result = this._execute('addGroupCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.GroupCommandInput) : null;
//     };

//     // Adds a new Tab input to the command. Tab command inputs contain a set of command inputs and/or group command inputs
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this tab as seen in the dialog.
//     // resourceFolder : An optional parameter that specifies the folder that contains the image for the tab.
//     // If no name is specified (no text on tab), a resourceFolder containing the image to appear
//     // on the tab needs to be provided.
//     // Returns the created TabCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addTabCommandInput = function (id, name, resourceFolder) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (resourceFolder === null || (resourceFolder !== undefined && resourceFolder.constructor !== String)) { throw new TypeError('resourceFolder must be a string'); }
//         var args = {
//             id : id,
//             name : name
//         };
//         if (resourceFolder !== undefined) {
//             args.resourceFolder = resourceFolder;
//         }
//         var result = this._execute('addTabCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.TabCommandInput) : null;
//     };

//     // Adds a new Image input to the command.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this Image as seen in the dialog.
//     // If a name is not specified (an empty string), the image will be centered horizontally within it's row in the dialog.
//     // If a name is specified it will appear as a left justified label aligned with the other command input labels,
//     // and the left side of the image will be aligned with the other command input controls.
//     // imageFile : The full path and file name of the image file.
//     // Supported image format is .png
//     // Images are displayed in the command dialog using their actual size.
//     // Returns the created ImageCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addImageCommandInput = function (id, name, imageFile) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (imageFile === undefined || imageFile === null || imageFile.constructor !== String) { throw new TypeError('imageFile must be a string'); }
//         var args = {
//             id : id,
//             name : name,
//             imageFile : imageFile
//         };
//         var result = this._execute('addImageCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ImageCommandInput) : null;
//     };

//     // Adds a new distance value input to the command. This displays a field in the command dialog where a
//     // distance value can be entered. It displays the distance in the dialog using current document default unit.
//     // There is also a graphical manipulator associated with the input.
//     // You use the setManipulator method of the returned DistanceValueCommandInput
//     // object to define the position and orientation of the manipulator.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed label of this input as seen in the dialog.
//     // If a name is not specified (an empty string), the input will be centered horizontally within it's row in the dialog.
//     // If a name is specified it will appear as a left justified label aligned with the other command input labels,
//     // and the left side of the image will be aligned with the other command input controls.
//     // initialValue : The initial value of the input. If the value input is a number then it is interpreted as centimeters. If it is
//     // a string it uses the units specified in the string or if no units are specified it uses the active units of the design.
//     // Returns the created DistanceValueCommandInput object or null if the creation failed.
//     adsk.core.CommandInputs.prototype.addDistanceValueCommandInput = function (id, name, initialValue) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (initialValue !== null && !(initialValue instanceof adsk.core.ValueInput)) { throw new TypeError('initialValue must be a adsk.core.ValueInput'); }
//         var args = {
//             id : id,
//             name : name,
//             initialValue : (initialValue === null ? initialValue : initialValue.handle)
//         };
//         var result = this._execute('addDistanceValueCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DistanceValueCommandInput) : null;
//     };

//     // Adds a new direction command input to the command. The input can be shown as a check box or a button. If it's a button
//     // you need to specify the resource folder to define the icon to use for the Button.
//     // id : The unique ID of this command input. It must be unique with respect to the other inputs associated with this command.
//     // name : The displayed name of this command as seen in the dialog.
//     // resourceFolder : Specifies the folder that contains the image for the input.
//     // This is an optional argument. The input is shown as a check box if the resource folder is not set.
//     adsk.core.CommandInputs.prototype.addDirectionCommandInput = function (id, name, resourceFolder) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (resourceFolder === null || (resourceFolder !== undefined && resourceFolder.constructor !== String)) { throw new TypeError('resourceFolder must be a string'); }
//         var args = {
//             id : id,
//             name : name
//         };
//         if (resourceFolder !== undefined) {
//             args.resourceFolder = resourceFolder;
//         }
//         var result = this._execute('addDirectionCommandInput', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DirectionCommandInput) : null;
//     };

//     //=========== CommandTerminationReason ============
//     // Defines the termination reason for a command.
//     // Commands can be terminated for a number of different reasons, and
//     // based on the reason commands have to do different things during
//     // termination so this enum defines various reasons for termination
//     adsk.core.CommandTerminationReason = {
//         UnknownTerminationReason : 0,
//         CompletedTerminationReason : 1,
//         CancelledTerminationReason : 2,
//         AbortedTerminationReason : 3,
//         PreEmptedTerminationReason : 4,
//         SessionEndingTerminationReason : 5
//     };

//     //=========== ControlDefinition ============
//     // The ControlDefinition is the base class for the various types of control definitions.
//     // You can use properties on the control definition to define the look and behavior of
//     // the control.
//     adsk.core.ControlDefinition = function ControlDefinition(handle) {
//         if (!(this instanceof adsk.core.ControlDefinition)) {
//             return adsk.core.ControlDefinition.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ControlDefinition.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ControlDefinition.prototype.constructor = adsk.core.ControlDefinition;
//     adsk.core.ControlDefinition.interfaceId = 'adsk.core.ControlDefinition';
//     adsk.objectTypes['adsk.core.ControlDefinition'] = adsk.core.ControlDefinition;
//     adsk.core.ControlDefinition.cast = function (object) {
//         return object instanceof adsk.core.ControlDefinition ? object : null;
//     };

//     // Gets or sets if this definition is enabled or not. This has the effect of enabling and disabling any associated controls.
//     Object.defineProperty(adsk.core.ControlDefinition.prototype, 'isEnabled', {
//         get : function () {
//             var result = this._execute('isEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this definition is visible or not. This has the effect of making any associated controls visible or invisible in the user interface.
//     Object.defineProperty(adsk.core.ControlDefinition.prototype, 'isVisible', {
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

//     // Gets or sets the name for this control. This is the visible name displayed in the user interface.
//     Object.defineProperty(adsk.core.ControlDefinition.prototype, 'name', {
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

//     //=========== DialogResults ============
//     // Defines the valid return types from a dialog.
//     adsk.core.DialogResults = {
//         DialogError : -1,
//         DialogOK : 0,
//         DialogCancel : 1,
//         DialogYes : 2,
//         DialogNo : 3
//     };

//     //=========== DropDownStyles ============
//     // Defines the different styles that a drop-down input can be.
//     adsk.core.DropDownStyles = {
//         LabeledIconDropDownStyle : 0,
//         TextListDropDownStyle : 1,
//         CheckBoxDropDownStyle : 2
//     };

//     //=========== FileDialog ============
//     // Provides access to a file dialog. A file dialog can be used to prompt the user
//     // for file names to open or save to.
//     adsk.core.FileDialog = function FileDialog(handle) {
//         if (!(this instanceof adsk.core.FileDialog)) {
//             return adsk.core.FileDialog.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.FileDialog.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.FileDialog.prototype.constructor = adsk.core.FileDialog;
//     adsk.core.FileDialog.interfaceId = 'adsk.core.FileDialog';
//     adsk.objectTypes['adsk.core.FileDialog'] = adsk.core.FileDialog;
//     adsk.core.FileDialog.cast = function (object) {
//         return object instanceof adsk.core.FileDialog ? object : null;
//     };

//     // Gets or sets the title displayed on the dialog.
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'title', {
//         get : function () {
//             var result = this._execute('title');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('title', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the filename specified by the user in the dialog. This property is
//     // used after the ShowOpen or ShowSave methods have been called to retrieve
//     // the filename specified by the user. The file name includes both the
//     // file path and the extension.
//     // If ShowOpen was used and IsMultiSelectEnabled is true, then this property will
//     // only display the first filename selected and the Filenames property should be
//     // used instead to retrieved the full list. Is ShowSave was used, then only a
//     // single file name is ever returned.
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'filename', {
//         get : function () {
//             var result = this._execute('filename');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the filenames specified by the user in the dialog. This property is
//     // used after the ShowOpen or ShowSave methods have been called to retrieve
//     // the filenames specified by the user. Each file name includes both the
//     // file path and the extension.
//     // If ShowOpen is used and IsMultiSelectEnabled is true, the user is able to select
//     // more than one file. This property returns all of the files that were selected. If
//     // ShowSave is used or IsMultiSelectEnabled is false then this array will contain
//     // the single file name.
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'filenames', {
//         get : function () {
//             var result = this._execute('filenames');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the current file name filter string, which determines the choices
//     // that appear in the "Save as file type" or "Files of type" box in the dialog box.
//     // For each filtering option, the filter string contains a description of the filter,
//     // followed by the vertical bar (|) and the filter pattern. The strings for different
//     // filtering options are separated by the vertical bar.
//     // The following is an example of a filter string:
//     // Text files (*.txt);;All files (*.*)
//     // You can add several filter patterns to a filter by separating the file types with semicolons, for example:
//     // Image Files (*.BMP;*.JPG;*.GIF);;All files (*.*)
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'filter', {
//         get : function () {
//             var result = this._execute('filter');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('filter', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the index of the filter currently selected in the file dialog box. Use the FilterIndex
//     // property to set which filtering option is shown first to the user. You can also use the value of
//     // FilterIndex after showing the file dialog to perform special file operations depending upon the filter chosen.
//     // The first item in the filter list is index 0.
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'filterIndex', {
//         get : function () {
//             var result = this._execute('filterIndex');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('filterIndex', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the initial directory displayed by the file dialog box.
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'initialDirectory', {
//         get : function () {
//             var result = this._execute('initialDirectory');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('initialDirectory', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets a value indicating whether the dialog box allows multiple files to be selected.
//     Object.defineProperty(adsk.core.FileDialog.prototype, 'isMultiSelectEnabled', {
//         get : function () {
//             var result = this._execute('isMultiSelectEnabled');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isMultiSelectEnabled', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Displays a modal open dialog, allowing the user to select one or more files. The return value
//     // can be used to determine if the dialog was cancelled without selecting a file. The Filename
//     // and Filenames properties can be used to get the selected files.
//     // Returns an enum value indicating which button was clicked on the dialog.
//     adsk.core.FileDialog.prototype.showOpen = function () {
//         var result = this._execute('showOpen');
//         return result ? result.value : undefined;
//     };

//     // Displays a modal save dialog, allowing the user to specify a file. The return value
//     // can be used to determine if the dialog was cancelled without selecting a file. The Filename
//     // and Filenames properties can be used to get the selected files.
//     // Returns an enum value indicating which button was clicked on the dialog.
//     adsk.core.FileDialog.prototype.showSave = function () {
//         var result = this._execute('showSave');
//         return result ? result.value : undefined;
//     };

//     //=========== InputChangedEvent ============
//     // An event endpoint that supports the connection to client implemented InputChangedEventHandlers.
//     adsk.core.InputChangedEvent = function InputChangedEvent(handle) {
//         if (!(this instanceof adsk.core.InputChangedEvent)) {
//             return adsk.core.InputChangedEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.InputChangedEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.InputChangedEvent.prototype.constructor = adsk.core.InputChangedEvent;
//     adsk.core.InputChangedEvent.interfaceId = 'adsk.core.InputChangedEvent';
//     adsk.objectTypes['adsk.core.InputChangedEvent'] = adsk.core.InputChangedEvent;
//     adsk.core.InputChangedEvent.cast = function (object) {
//         return object instanceof adsk.core.InputChangedEvent ? object : null;
//     };

//     adsk.core.InputChangedEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.InputChangedEventArgs);
//     };

//     //=========== InputChangedEventArgs ============
//     // Provides a set of arguments from a firing InputChangedEvent to a InputEventChangedEventHandler's notify callback method.
//     adsk.core.InputChangedEventArgs = function InputChangedEventArgs(handle) {
//         if (!(this instanceof adsk.core.InputChangedEventArgs)) {
//             return adsk.core.InputChangedEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.InputChangedEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.InputChangedEventArgs.prototype.constructor = adsk.core.InputChangedEventArgs;
//     adsk.core.InputChangedEventArgs.interfaceId = 'adsk.core.InputChangedEventArgs';
//     adsk.objectTypes['adsk.core.InputChangedEventArgs'] = adsk.core.InputChangedEventArgs;
//     adsk.core.InputChangedEventArgs.cast = function (object) {
//         return object instanceof adsk.core.InputChangedEventArgs ? object : null;
//     };

//     // Gets the parent CommandInput object.
//     Object.defineProperty(adsk.core.InputChangedEventArgs.prototype, 'input', {
//         get : function () {
//             var result = this._execute('input');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInput) : null;
//         }
//     });

//     //=========== KeyboardEvent ============
//     // An event endpoint that supports the connection to client implemented KeyboardEventHandlers.
//     adsk.core.KeyboardEvent = function KeyboardEvent(handle) {
//         if (!(this instanceof adsk.core.KeyboardEvent)) {
//             return adsk.core.KeyboardEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.KeyboardEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.KeyboardEvent.prototype.constructor = adsk.core.KeyboardEvent;
//     adsk.core.KeyboardEvent.interfaceId = 'adsk.core.KeyboardEvent';
//     adsk.objectTypes['adsk.core.KeyboardEvent'] = adsk.core.KeyboardEvent;
//     adsk.core.KeyboardEvent.cast = function (object) {
//         return object instanceof adsk.core.KeyboardEvent ? object : null;
//     };

//     adsk.core.KeyboardEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.KeyboardEventArgs);
//     };

//     //=========== KeyboardEventArgs ============
//     // Provides a set of arguments from a firing KeyboardEvent to a KeyboardEventHandler's notify callback method.
//     adsk.core.KeyboardEventArgs = function KeyboardEventArgs(handle) {
//         if (!(this instanceof adsk.core.KeyboardEventArgs)) {
//             return adsk.core.KeyboardEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.KeyboardEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.KeyboardEventArgs.prototype.constructor = adsk.core.KeyboardEventArgs;
//     adsk.core.KeyboardEventArgs.interfaceId = 'adsk.core.KeyboardEventArgs';
//     adsk.objectTypes['adsk.core.KeyboardEventArgs'] = adsk.core.KeyboardEventArgs;
//     adsk.core.KeyboardEventArgs.cast = function (object) {
//         return object instanceof adsk.core.KeyboardEventArgs ? object : null;
//     };

//     // Gets the set of keyboard modifiers that were active. The value is the Boolean
//     // combination of KeyboardModifiers values.
//     Object.defineProperty(adsk.core.KeyboardEventArgs.prototype, 'modifierMask', {
//         get : function () {
//             var result = this._execute('modifierMask');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the keyboard key.
//     Object.defineProperty(adsk.core.KeyboardEventArgs.prototype, 'keyCode', {
//         get : function () {
//             var result = this._execute('keyCode');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== KeyboardModifiers ============
//     // Keyboard modifier values.
//     adsk.core.KeyboardModifiers = {
//         NoKeyboardModifier : 0,
//         ShiftKeyboardModifier : 33554432,
//         CtrlKeyboardModifier : 67108864,
//         AltKeyboardModifier : 134217728,
//         MetaKeyboardModifier : 268435456
//     };

//     //=========== KeyCodes ============
//     // Key values on the keyboard.
//     adsk.core.KeyCodes = {
//         NoKeyCode : 0,
//         SpaceKeyCode : 32,
//         AsteriskKeyCode : 42,
//         PlusKeyCode : 43,
//         CommaKeyCode : 44,
//         MinusKeyCode : 45,
//         PeriodKeyCode : 46,
//         SlashKeyCode : 47,
//         D0KeyCode : 48,
//         D1KeyCode : 49,
//         D2KeyCode : 50,
//         D3KeyCode : 51,
//         D4KeyCode : 52,
//         D5KeyCode : 53,
//         D6KeyCode : 54,
//         D7KeyCode : 55,
//         D8KeyCode : 56,
//         D9KeyCode : 57,
//         ColonKeyCode : 58,
//         SemicolonKeyCode : 59,
//         LessKeyCode : 60,
//         EqualKeyCode : 61,
//         GreaterKeyCode : 62,
//         QuestionKeyCode : 63,
//         AKeyCode : 65,
//         BKeyCode : 66,
//         CKeyCode : 67,
//         DKeyCode : 68,
//         EKeyCode : 69,
//         FKeyCode : 70,
//         GKeyCode : 71,
//         HKeyCode : 72,
//         IKeyCode : 73,
//         JKeyCode : 74,
//         KKeyCode : 75,
//         LKeyCode : 76,
//         MKeyCode : 77,
//         NKeyCode : 78,
//         OKeyCode : 79,
//         PKeyCode : 80,
//         QKeyCode : 81,
//         RKeyCode : 82,
//         SKeyCode : 83,
//         TKeyCode : 84,
//         UKeyCode : 85,
//         VKeyCode : 86,
//         WKeyCode : 87,
//         XKeyCode : 88,
//         YKeyCode : 89,
//         ZKeyCode : 90,
//         BracketLeftKeyCode : 91,
//         BackslashKeyCode : 92,
//         BracketRightKeyCode : 93,
//         AsciiCircumKeyCode : 94,
//         UnderscoreKeyCode : 95,
//         QuoteLeftKeyCode : 96,
//         BraceLeftKeyCode : 123,
//         BarKeyCode : 124,
//         BraceRightKeyCode : 125,
//         AsciiTildeKeyCode : 126,
//         GraveAccentKeyCode : 96,
//         EscapeKeyCode : 16777216,
//         TabKeyCode : 16777217,
//         BacktabKeyCode : 16777218,
//         BackspaceKeyCode : 16777219,
//         ReturnKeyCode : 16777220,
//         EnterKeyCode : 16777221,
//         InsertKeyCode : 16777222,
//         DeleteKeyCode : 16777223,
//         PauseKeyCode : 16777224,
//         PrintKeyCode : 16777225,
//         SysReqKeyCode : 16777226,
//         ClearKeyCode : 16777227,
//         HomeKeyCode : 16777232,
//         EndKeyCode : 16777233,
//         LeftKeyCode : 16777234,
//         UpKeyCode : 16777235,
//         RightKeyCode : 16777236,
//         DownKeyCode : 16777237,
//         PageUpKeyCode : 16777238,
//         PageDownKeyCode : 16777239,
//         ShiftKeyCode : 16777248,
//         ControlKeyCode : 16777249,
//         MetaKeyCode : 16777250,
//         AltKeyCode : 16777251,
//         F1KeyCode : 16777264,
//         F2KeyCode : 16777265,
//         F3KeyCode : 16777266,
//         F4KeyCode : 16777267,
//         F5KeyCode : 16777268,
//         F6KeyCode : 16777269,
//         F7KeyCode : 16777270,
//         F8KeyCode : 16777271,
//         F9KeyCode : 16777272,
//         F10KeyCode : 16777273,
//         F11KeyCode : 16777274,
//         F12KeyCode : 16777275,
//         MenuKeyCode : 16777301
//     };

//     //=========== ListControlDisplayTypes ============
//     // The different types of items that can be displayed in a list control.
//     adsk.core.ListControlDisplayTypes = {
//         CheckBoxListType : 0,
//         RadioButtonlistType : 1,
//         StandardListType : 2
//     };

//     //=========== ListItem ============
//     // Represents a single item in a check box list or a drop-down command input.
//     adsk.core.ListItem = function ListItem(handle) {
//         if (!(this instanceof adsk.core.ListItem)) {
//             return adsk.core.ListItem.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ListItem.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ListItem.prototype.constructor = adsk.core.ListItem;
//     adsk.core.ListItem.interfaceId = 'adsk.core.ListItem';
//     adsk.objectTypes['adsk.core.ListItem'] = adsk.core.ListItem;
//     adsk.core.ListItem.cast = function (object) {
//         return object instanceof adsk.core.ListItem ? object : null;
//     };

//     // Gets or sets the name of this item as displayed in the list. If
//     // this control is a separator (isSeparator is true) or it's a button row,
//     // setting this property is ignored and getting it will return an empty string.
//     Object.defineProperty(adsk.core.ListItem.prototype, 'name', {
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

//     // Gets or sets the location for the icon file used for this item in the list.
//     // This is the path to a directory that contains the image files associated
//     // with this item. This is only valid when this is a standard list or button row and is
//     // ignored for check box lists, radio control lists, and radio button groups.
//     Object.defineProperty(adsk.core.ListItem.prototype, 'icon', {
//         get : function () {
//             var result = this._execute('icon');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('icon', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets whether this item is selected. If the item is
//     // being displayed as a check box, this controls whether it is
//     // checked or not. If it's a drop-down list or button row it controls whether
//     // this is the single selected item. Setting a drop-down list, button row item, or radio button
//     // from a group to be selected will unselect the currently selected item.
//     // For a standard list, this will get or set the single item currently
//     // selected. For a separator, setting this property is ignored and
//     // it will always return false.
//     Object.defineProperty(adsk.core.ListItem.prototype, 'isSelected', {
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

//     // Gets the index position within the list of this item.
//     Object.defineProperty(adsk.core.ListItem.prototype, 'index', {
//         get : function () {
//             var result = this._execute('index');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the parent CheckBoxListControlDefinition or object.
//     Object.defineProperty(adsk.core.ListItem.prototype, 'parentList', {
//         get : function () {
//             var result = this._execute('parentList');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Gets if this control is a separator.
//     Object.defineProperty(adsk.core.ListItem.prototype, 'isSeparator', {
//         get : function () {
//             var result = this._execute('isSeparator');
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes this item from the list.
//     // Returns true if the delete was successful.
//     adsk.core.ListItem.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== ListItems ============
//     // Provides access to the list of items in a check box list. This object supports the ability to add
//     // items to the list and iterate through the existing items.
//     adsk.core.ListItems = function ListItems(handle) {
//         if (!(this instanceof adsk.core.ListItems)) {
//             return adsk.core.ListItems.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ListItems.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ListItems.prototype.constructor = adsk.core.ListItems;
//     adsk.core.ListItems.interfaceId = 'adsk.core.ListItems';
//     adsk.objectTypes['adsk.core.ListItems'] = adsk.core.ListItems;
//     adsk.core.ListItems.cast = function (object) {
//         return object instanceof adsk.core.ListItems ? object : null;
//     };

//     // Gets the number of items in the collection.
//     Object.defineProperty(adsk.core.ListItems.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Adds a new item to the list.
//     // name : The name of this item as it is displayed in the list.
//     // isSelected : Sets whether this item is selected or not. If this list is associated with a control
//     // or input that can only have one item selected any other selected items will be unselected
//     // and this one will be the only selected item.
//     // icon : The path to the icon directory.
//     // beforeIndex : The position of the item within the list. This value indicates the index of the current
//     // item to insert this new item just before. For example, a value of 0 will insert it before
//     // the first item in the list. An index of -1 will position the button at the bottom of the list.
//     // Returns the new ListControlItem or null in the case of a failure.
//     adsk.core.ListItems.prototype.add = function (name, isSelected, icon, beforeIndex) {
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (typeof isSelected !== 'boolean') { throw new TypeError('isSelected must be a boolean'); }
//         if (icon === null || (icon !== undefined && icon.constructor !== String)) { throw new TypeError('icon must be a string'); }
//         if (beforeIndex === null || (beforeIndex !== undefined && !isFinite(beforeIndex))) { throw new TypeError('beforeIndex must be a number'); }
//         var args = {
//             name : name,
//             isSelected : isSelected
//         };
//         if (icon !== undefined) {
//             args.icon = icon;
//         }
//         if (beforeIndex !== undefined) {
//             args.beforeIndex = Number(beforeIndex);
//         }
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//     };

//     // Adds a separator to the list. This is not supported for button rows.
//     // beforeIndex : The position of the item within the list. This value indicates the index of the current
//     // item to insert this new item just before. For example, a value of 0 will insert it before
//     // the first item in the list. An index of -1 will position the button at the bottom of the list.
//     // Returns the new ListControlItem or null in the case of a failure.
//     adsk.core.ListItems.prototype.addSeparator = function (beforeIndex) {
//         if (!isFinite(beforeIndex)) { throw new TypeError('beforeIndex must be a number'); }
//         var args = {
//             beforeIndex : Number(beforeIndex)
//         };
//         var result = this._execute('addSeparator', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//     };

//     // Returns the specified check box list item using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.ListItems.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//     };

//     //=========== MessageBoxButtonTypes ============
//     // Defines the valid return types from a message box.
//     adsk.core.MessageBoxButtonTypes = {
//         OKButtonType : 0,
//         OKCancelButtonType : 1,
//         RetryCancelButtonType : 2,
//         YesNoButtonType : 3,
//         YesNoCancelButtonType : 4
//     };

//     //=========== MessageBoxIconTypes ============
//     // Defines the different icons that can be used in a message box.
//     adsk.core.MessageBoxIconTypes = {
//         NoIconIconType : 0,
//         QuestionIconType : 1,
//         InformationIconType : 2,
//         WarningIconType : 3,
//         CriticalIconType : 4
//     };

//     //=========== MouseButtons ============
//     // Mouse button values.
//     adsk.core.MouseButtons = {
//         NoMouseButton : 0,
//         LeftMouseButton : 1,
//         RightMouseButton : 2,
//         MiddleMouseButton : 4
//     };

//     //=========== MouseEvent ============
//     // An event endpoint that supports the connection to client implemented MouseEventHandlers.
//     adsk.core.MouseEvent = function MouseEvent(handle) {
//         if (!(this instanceof adsk.core.MouseEvent)) {
//             return adsk.core.MouseEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.MouseEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.MouseEvent.prototype.constructor = adsk.core.MouseEvent;
//     adsk.core.MouseEvent.interfaceId = 'adsk.core.MouseEvent';
//     adsk.objectTypes['adsk.core.MouseEvent'] = adsk.core.MouseEvent;
//     adsk.core.MouseEvent.cast = function (object) {
//         return object instanceof adsk.core.MouseEvent ? object : null;
//     };

//     adsk.core.MouseEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.MouseEventArgs);
//     };

//     //=========== MouseEventArgs ============
//     // Provides a set of arguments from a firing MouseEvent to a MouseEventHandler's notify callback method.
//     adsk.core.MouseEventArgs = function MouseEventArgs(handle) {
//         if (!(this instanceof adsk.core.MouseEventArgs)) {
//             return adsk.core.MouseEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.MouseEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.MouseEventArgs.prototype.constructor = adsk.core.MouseEventArgs;
//     adsk.core.MouseEventArgs.interfaceId = 'adsk.core.MouseEventArgs';
//     adsk.objectTypes['adsk.core.MouseEventArgs'] = adsk.core.MouseEventArgs;
//     adsk.core.MouseEventArgs.cast = function (object) {
//         return object instanceof adsk.core.MouseEventArgs ? object : null;
//     };

//     // Gets which mouse button(s) are pressed. The returned value
//     // is bitwise and can indicate that more than one button is pressed.
//     Object.defineProperty(adsk.core.MouseEventArgs.prototype, 'button', {
//         get : function () {
//             var result = this._execute('button');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the number of times the button was pressed and released.
//     Object.defineProperty(adsk.core.MouseEventArgs.prototype, 'clicks', {
//         get : function () {
//             var result = this._execute('clicks');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets a signed count of the number of detents the mouse wheel has rotated.
//     Object.defineProperty(adsk.core.MouseEventArgs.prototype, 'wheelDelta', {
//         get : function () {
//             var result = this._execute('wheelDelta');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets which modifier keys are currently pressed. The returned value
//     // is bitwise and can indicate that more than one button is pressed.
//     Object.defineProperty(adsk.core.MouseEventArgs.prototype, 'keyboardModifiers', {
//         get : function () {
//             var result = this._execute('keyboardModifiers');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the coordinate of the mouse in screen space.
//     Object.defineProperty(adsk.core.MouseEventArgs.prototype, 'position', {
//         get : function () {
//             var result = this._execute('position');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point2D) : null;
//         }
//     });

//     //=========== ProgressDialog ============
//     // Provides access to the progress dialog.
//     adsk.core.ProgressDialog = function ProgressDialog(handle) {
//         if (!(this instanceof adsk.core.ProgressDialog)) {
//             return adsk.core.ProgressDialog.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ProgressDialog.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ProgressDialog.prototype.constructor = adsk.core.ProgressDialog;
//     adsk.core.ProgressDialog.interfaceId = 'adsk.core.ProgressDialog';
//     adsk.objectTypes['adsk.core.ProgressDialog'] = adsk.core.ProgressDialog;
//     adsk.core.ProgressDialog.cast = function (object) {
//         return object instanceof adsk.core.ProgressDialog ? object : null;
//     };

//     // Gets and sets the title of the progress dialog
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'title', {
//         get : function () {
//             var result = this._execute('title');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('title', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the message to display along with the progress bar. The following symbols can be used
//     // to display values. "%p" is replaced by the percentage completed. "%v" is replaced
//     // by the current value. %m is replaced by the total number of steps. For example, the
//     // message "Processing section %v of %m." will result in the message "Processing section
//     // 1 of 10." to be displayed if the maximum value is 10 and the current value is 1.
//     // Specify an empty string ("") for no message to appear along with the progress panel.
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'message', {
//         get : function () {
//             var result = this._execute('message');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('message', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // The minimum value of the progress bar. This is used along with the maximum value and the
//     // progress value to compute the current percentage complete. This is also the initial
//     // progress value when the progress bar is first displayed.
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'minimumValue', {
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

//     // The maximum value of the progress bar. This is used along with the minimum value and the
//     // progress value to compute the current percentage complete.
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'maximumValue', {
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

//     // Gets and sets the current progress bar value. Progress is determined based on this value relative to
//     // the minimum and maximum values. This will update the values displayed
//     // in the message string.
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'progressValue', {
//         get : function () {
//             var result = this._execute('progressValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('progressValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the cancel button is included in the dialog. This is false by default.
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'isCancelButtonShown', {
//         get : function () {
//             var result = this._execute('isCancelButtonShown');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isCancelButtonShown', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if the cancel button was selected the last time the Progress Dialog was shown.
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'wasCancelled', {
//         get : function () {
//             var result = this._execute('wasCancelled');
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets the text label on the Cancel button. The default text label is "Cancel".
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'cancelButtonText', {
//         get : function () {
//             var result = this._execute('cancelButtonText');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('cancelButtonText', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the dialog background is translucent. This is false by default
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'isBackgroundTranslucent', {
//         get : function () {
//             var result = this._execute('isBackgroundTranslucent');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isBackgroundTranslucent', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if the Progress Dialog is currently being displayed
//     Object.defineProperty(adsk.core.ProgressDialog.prototype, 'isShowing', {
//         get : function () {
//             var result = this._execute('isShowing');
//             return result ? result.value : undefined;
//         }
//     });

//     // Displays the progress dialog that includes a progress bar that can be used to display a continually updated
//     // message indicating the progress of a process that will take more than a few seconds.
//     // The progress is determined by comparing the current progress value with the minimum and maximum values.
//     // title : Sets the title for the progress dialog
//     // message : The message to display along with the progress bar. The following symbols can be used
//     // to display values. "%p" is replaced by the percentage completed. "%v" is replaced
//     // by the current value. %m is replaced by the total number of steps. For example, the
//     // message "Processing section %v of %m." will result in the message "Processing section
//     // 1 of 10." to be displayed if the maximum value is 10 and the current value is 1.
//     // minimumValue : The minimum value of the progress bar. This is used along with the maximum value and the
//     // progress value to compute the current percentage complete. This is also the initial
//     // progress value when the progress bar is first displayed.
//     // maximumValue : The maximum value of the progress bar. This is used along with the minimum value and the
//     // progress value to compute the current percentage complete.
//     // delay : Specifies the time interval in seconds to delay displaying the Progress Dialog. This provides a way to hide
//     // the progress dialog before it actually gets displayed, which is useful for cases where the progress of the
//     // operation being tracked completes quickly and there is no need to indicate progress to the user.
//     // Returns true if successful.
//     adsk.core.ProgressDialog.prototype.show = function (title, message, minimumValue, maximumValue, delay) {
//         if (title === undefined || title === null || title.constructor !== String) { throw new TypeError('title must be a string'); }
//         if (message === undefined || message === null || message.constructor !== String) { throw new TypeError('message must be a string'); }
//         if (!isFinite(minimumValue)) { throw new TypeError('minimumValue must be a number'); }
//         if (!isFinite(maximumValue)) { throw new TypeError('maximumValue must be a number'); }
//         if (delay === null || (delay !== undefined && !isFinite(delay))) { throw new TypeError('delay must be a number'); }
//         var args = {
//             title : title,
//             message : message,
//             minimumValue : Number(minimumValue),
//             maximumValue : Number(maximumValue)
//         };
//         if (delay !== undefined) {
//             args.delay = Number(delay);
//         }
//         var result = this._execute('show', args);
//         return result ? result.value : undefined;
//     };

//     // Hides the progress dialog. This should be used when the process has completed.
//     // Returns true if successful.
//     adsk.core.ProgressDialog.prototype.hide = function () {
//         var result = this._execute('hide');
//         return result ? result.value : undefined;
//     };

//     // Method that resets the progress bar. The progress bar "rewinds" and shows no progress.
//     // This is the same as setting the progress value to the minimum value.
//     // Returns true if successful
//     adsk.core.ProgressDialog.prototype.reset = function () {
//         var result = this._execute('reset');
//         return result ? result.value : undefined;
//     };

//     //=========== Selection ============
//     // Provides access to a selection of an entity in the user interface.
//     adsk.core.Selection = function Selection(handle) {
//         if (!(this instanceof adsk.core.Selection)) {
//             return adsk.core.Selection.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Selection.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Selection.prototype.constructor = adsk.core.Selection;
//     adsk.core.Selection.interfaceId = 'adsk.core.Selection';
//     adsk.objectTypes['adsk.core.Selection'] = adsk.core.Selection;
//     adsk.core.Selection.cast = function (object) {
//         return object instanceof adsk.core.Selection ? object : null;
//     };

//     // Gets the selected entity.
//     Object.defineProperty(adsk.core.Selection.prototype, 'entity', {
//         get : function () {
//             var result = this._execute('entity');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Gets the selection point on the object.
//     Object.defineProperty(adsk.core.Selection.prototype, 'point', {
//         get : function () {
//             var result = this._execute('point');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     //=========== SelectionEvent ============
//     // An event endpoint that supports the connection to client implemented SelectionEventHandlers.
//     adsk.core.SelectionEvent = function SelectionEvent(handle) {
//         if (!(this instanceof adsk.core.SelectionEvent)) {
//             return adsk.core.SelectionEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.SelectionEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.SelectionEvent.prototype.constructor = adsk.core.SelectionEvent;
//     adsk.core.SelectionEvent.interfaceId = 'adsk.core.SelectionEvent';
//     adsk.objectTypes['adsk.core.SelectionEvent'] = adsk.core.SelectionEvent;
//     adsk.core.SelectionEvent.cast = function (object) {
//         return object instanceof adsk.core.SelectionEvent ? object : null;
//     };

//     // Returns the SelectionCommandInput that is currently active in the command dialog and
//     // that the user is selecting entities for. This can be used to determine which set of
//     // rules you want to apply to determine if the current entity is selectable or not.
//     Object.defineProperty(adsk.core.SelectionEvent.prototype, 'activeInput', {
//         get : function () {
//             var result = this._execute('activeInput');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.SelectionCommandInput) : null;
//         }
//     });

//     adsk.core.SelectionEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.SelectionEventArgs);
//     };

//     //=========== SelectionEventArgs ============
//     // Provides a set of arguments from a firing SelectionEvent to a SelectionEventHandler's notify callback method.
//     adsk.core.SelectionEventArgs = function SelectionEventArgs(handle) {
//         if (!(this instanceof adsk.core.SelectionEventArgs)) {
//             return adsk.core.SelectionEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.SelectionEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.SelectionEventArgs.prototype.constructor = adsk.core.SelectionEventArgs;
//     adsk.core.SelectionEventArgs.interfaceId = 'adsk.core.SelectionEventArgs';
//     adsk.objectTypes['adsk.core.SelectionEventArgs'] = adsk.core.SelectionEventArgs;
//     adsk.core.SelectionEventArgs.cast = function (object) {
//         return object instanceof adsk.core.SelectionEventArgs ? object : null;
//     };

//     // Gets the entity that is valid for selection.
//     Object.defineProperty(adsk.core.SelectionEventArgs.prototype, 'selection', {
//         get : function () {
//             var result = this._execute('selection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Selection) : null;
//         }
//     });

//     // Gets or sets whether this entity should be made available to be selected.
//     // The value is initialized to true, so doing nothing will result
//     // in the entity being selectable.
//     Object.defineProperty(adsk.core.SelectionEventArgs.prototype, 'isSelectable', {
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

//     // Gets or sets any additional entities that should be pre-highlighted
//     // and selected if this entity is selected. An example of use is that
//     // the mouse passes over an edge of a body and all tangentially connected
//     // edges are highlighted with that edge so they can be selected as a set.
//     // The additional entities should all be valid based on the current selection filter.
//     Object.defineProperty(adsk.core.SelectionEventArgs.prototype, 'additionalEntities', {
//         get : function () {
//             var result = this._execute('additionalEntities');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('additionalEntities', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== Selections ============
//     // Provides access to and control over the set of selected entities in the user interface.
//     adsk.core.Selections = function Selections(handle) {
//         if (!(this instanceof adsk.core.Selections)) {
//             return adsk.core.Selections.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Selections.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Selections.prototype.constructor = adsk.core.Selections;
//     adsk.core.Selections.interfaceId = 'adsk.core.Selections';
//     adsk.objectTypes['adsk.core.Selections'] = adsk.core.Selections;
//     adsk.core.Selections.cast = function (object) {
//         return object instanceof adsk.core.Selections ? object : null;
//     };

//     // Gets the number of entities currently selected.
//     Object.defineProperty(adsk.core.Selections.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets all entities currently selected.
//     Object.defineProperty(adsk.core.Selections.prototype, 'all', {
//         get : function () {
//             var result = this._execute('all');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('all', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified selection using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.Selections.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Selection) : null;
//     };

//     // Adds the entity to the set of currently selected entities.
//     // The user will see the entity become selected in the user interface.
//     // entity : The entity to select and add to this selection set.
//     // Returns true if successful.
//     adsk.core.Selections.prototype.add = function (entity) {
//         if (entity !== null && !(entity instanceof adsk.core.Base)) { throw new TypeError('entity must be a adsk.core.Base'); }
//         var args = {
//             entity : (entity === null ? entity : entity.handle)
//         };
//         var result = this._execute('add', args);
//         return result ? result.value : undefined;
//     };

//     // Clears the selection set so no entities are currently selected.
//     // Returns true if successful.
//     adsk.core.Selections.prototype.clear = function () {
//         var result = this._execute('clear');
//         return result ? result.value : undefined;
//     };

//     // Removes the specified selection from the set of selected entities.
//     // selection : The selection to remove.
//     // Returns true if the item was removed or not currently selected.
//     adsk.core.Selections.prototype.removeBySelection = function (selection) {
//         if (selection !== null && !(selection instanceof adsk.core.Selection)) { throw new TypeError('selection must be a adsk.core.Selection'); }
//         var args = {
//             selection : (selection === null ? selection : selection.handle)
//         };
//         var result = this._execute('removeBySelection', args);
//         return result ? result.value : undefined;
//     };

//     // Removes the selections that are associated with the specified entity from the set of selected entities.
//     // entity : The entity to remove selections of.
//     // Returns true if the item was removed or not currently selected.
//     adsk.core.Selections.prototype.removeByEntity = function (entity) {
//         if (entity !== null && !(entity instanceof adsk.core.Base)) { throw new TypeError('entity must be a adsk.core.Base'); }
//         var args = {
//             entity : (entity === null ? entity : entity.handle)
//         };
//         var result = this._execute('removeByEntity', args);
//         return result ? result.value : undefined;
//     };

//     // Removes an item from the set of selected entities.
//     // index : The index of the selection to remove.
//     // Returns true if the item was removed successfully.
//     adsk.core.Selections.prototype.removeByIndex = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('removeByIndex', args);
//         return result ? result.value : undefined;
//     };

//     //=========== Toolbar ============
//     // Provides access to a toolbar in the user interface. A toolbar is a collection of toolbar controls.
//     adsk.core.Toolbar = function Toolbar(handle) {
//         if (!(this instanceof adsk.core.Toolbar)) {
//             return adsk.core.Toolbar.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Toolbar.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Toolbar.prototype.constructor = adsk.core.Toolbar;
//     adsk.core.Toolbar.interfaceId = 'adsk.core.Toolbar';
//     adsk.objectTypes['adsk.core.Toolbar'] = adsk.core.Toolbar;
//     adsk.core.Toolbar.cast = function (object) {
//         return object instanceof adsk.core.Toolbar ? object : null;
//     };

//     // Gets the unique ID of the toolbar that can be used programmatically
//     // to find a specific toolbar.
//     Object.defineProperty(adsk.core.Toolbar.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the owning UserInterface object.
//     Object.defineProperty(adsk.core.Toolbar.prototype, 'parentUserInterface', {
//         get : function () {
//             var result = this._execute('parentUserInterface');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.UserInterface) : null;
//         }
//     });

//     // Gets the controls in this toolbar.
//     Object.defineProperty(adsk.core.Toolbar.prototype, 'controls', {
//         get : function () {
//             var result = this._execute('controls');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControls) : null;
//         }
//     });

//     //=========== ToolbarControl ============
//     // The base class for all toolbar controls.
//     adsk.core.ToolbarControl = function ToolbarControl(handle) {
//         if (!(this instanceof adsk.core.ToolbarControl)) {
//             return adsk.core.ToolbarControl.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ToolbarControl.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ToolbarControl.prototype.constructor = adsk.core.ToolbarControl;
//     adsk.core.ToolbarControl.interfaceId = 'adsk.core.ToolbarControl';
//     adsk.objectTypes['adsk.core.ToolbarControl'] = adsk.core.ToolbarControl;
//     adsk.core.ToolbarControl.cast = function (object) {
//         return object instanceof adsk.core.ToolbarControl ? object : null;
//     };

//     // Gets the unique ID of this control. The ID is unique with respect to the other
//     // controls within the same panel, toolbar, or drop-down control.
//     Object.defineProperty(adsk.core.ToolbarControl.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the position of this control within the list of controls within the panel, toolbar, or drop-down control.
//     Object.defineProperty(adsk.core.ToolbarControl.prototype, 'index', {
//         get : function () {
//             var result = this._execute('index');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this control is currently visible.
//     Object.defineProperty(adsk.core.ToolbarControl.prototype, 'isVisible', {
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

//     // Gets the Parent object. When associated with a toolbar (right or left QAT or the Nav Bar) this
//     // returns the parent Toolbar object. When associated with a panel it returns the parent ToolbarPanel object.
//     // When associated with a control (DropDownControl) it returns the parent control.
//     Object.defineProperty(adsk.core.ToolbarControl.prototype, 'parent', {
//         get : function () {
//             var result = this._execute('parent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Deletes the ToolbarControl
//     // Returns a boolean indicating if the deletion was successful.
//     adsk.core.ToolbarControl.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== ToolbarControlList ============
//     // Provides access to a list of toolbar controls.
//     adsk.core.ToolbarControlList = function ToolbarControlList(handle) {
//         if (!(this instanceof adsk.core.ToolbarControlList)) {
//             return adsk.core.ToolbarControlList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ToolbarControlList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ToolbarControlList.prototype.constructor = adsk.core.ToolbarControlList;
//     adsk.core.ToolbarControlList.interfaceId = 'adsk.core.ToolbarControlList';
//     adsk.objectTypes['adsk.core.ToolbarControlList'] = adsk.core.ToolbarControlList;
//     adsk.core.ToolbarControlList.cast = function (object) {
//         return object instanceof adsk.core.ToolbarControlList ? object : null;
//     };

//     // Gets the number of toolbar controls.
//     Object.defineProperty(adsk.core.ToolbarControlList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the ToolbarControl at the specified index.
//     // When iterating by index, the controls are returned
//     // in the same order as they are shown in the user interface.
//     // index : The index of the control within the collection to return. The first item in the
//     // collection has in index of 0.
//     // Returns the ToolbarControl at the specified index or null if an invalid index was specified.
//     adsk.core.ToolbarControlList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControl) : null;
//     };

//     // Returns the ToolbarControl at the specified ID.
//     // id : The ID of the control within the collection to return.
//     // Returns the ToolbarControl with the specified ID or null if no control has this ID.
//     adsk.core.ToolbarControlList.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControl) : null;
//     };

//     //=========== ToolbarControls ============
//     // ToolbarControls is a collection of ToolbarControl objects displayed in a toolbar or menu.
//     adsk.core.ToolbarControls = function ToolbarControls(handle) {
//         if (!(this instanceof adsk.core.ToolbarControls)) {
//             return adsk.core.ToolbarControls.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ToolbarControls.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ToolbarControls.prototype.constructor = adsk.core.ToolbarControls;
//     adsk.core.ToolbarControls.interfaceId = 'adsk.core.ToolbarControls';
//     adsk.objectTypes['adsk.core.ToolbarControls'] = adsk.core.ToolbarControls;
//     adsk.core.ToolbarControls.cast = function (object) {
//         return object instanceof adsk.core.ToolbarControls ? object : null;
//     };

//     // Gets the number of controls in the collection.
//     Object.defineProperty(adsk.core.ToolbarControls.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the ToolbarControl at the specified index.
//     // When iterating by index, the controls are returned
//     // in the same order as they are shown in the user interface.
//     // index : The index of the control within the collection to return. The first item in the
//     // collection has in index of 0.
//     // Returns the ToolbarControl at the specified index or null if an invalid index was specified.
//     adsk.core.ToolbarControls.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControl) : null;
//     };

//     // Returns the ToolbarControl at the specified ID.
//     // id : The ID of the control within the collection to return.
//     // Returns the ToolbarControl with the specified ID or null if no control has this ID.
//     adsk.core.ToolbarControls.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControl) : null;
//     };

//     // Adds a button to the controls in the toolbar, panel, or drop-down. The ID of the created
//     // command control is inherited from the associated command definition.
//     // commandDefinition : The associated CommandDefinition that defines the resources and receives events related to this control.
//     // positionID : Specifies the reference id of the control to position this control relative to.
//     // Not setting this value indicates that the control will be created at the end of all other controls in toolbar. The isBefore
//     // parameter specifies whether to place the control before or after the reference control.
//     // isBefore : Specifies whether to place the control before or after the reference control specified by the positionID parameter.
//     // This argument is ignored is positionID is not specified.
//     // Returns the newly created ButtonControl object or null if the creation fails.
//     adsk.core.ToolbarControls.prototype.addCommand = function (commandDefinition, positionID, isBefore) {
//         if (commandDefinition !== null && !(commandDefinition instanceof adsk.core.CommandDefinition)) { throw new TypeError('commandDefinition must be a adsk.core.CommandDefinition'); }
//         if (positionID === null || (positionID !== undefined && positionID.constructor !== String)) { throw new TypeError('positionID must be a string'); }
//         if (isBefore === null || (isBefore !== undefined && typeof isBefore !== 'boolean')) { throw new TypeError('isBefore must be a boolean'); }
//         var args = {
//             commandDefinition : (commandDefinition === null ? commandDefinition : commandDefinition.handle)
//         };
//         if (positionID !== undefined) {
//             args.positionID = positionID;
//         }
//         if (isBefore !== undefined) {
//             args.isBefore = isBefore;
//         }
//         var result = this._execute('addCommand', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandControl) : null;
//     };

//     // Adds a drop-down to the controls in the toolbar, panel, or drop-down. When the drop-down is initially created it will be empty.
//     // you can get the associated ToolbarControls object from the DropDownControl to add additional controls to the drop-down.
//     // text : The text displayed for the drop-down in a menu. For a drop-down in a toolbar this argument is ignored
//     // because an icon is used.
//     // resourceFolder : The resource folder containing the image used for the icon when the drop-down is in a toolbar.
//     // id : Optional unique ID for the control. It must be unique with respect to other controls in this collection.
//     // If the default empty string is provided, Fusion will create a unique ID.
//     // positionID : Specifies the reference id of the control to position this control relative to.
//     // Not setting this value indicates that the control will be created at the end of all other controls in toolbar. The isBefore
//     // parameter specifies whether to place the control before or after the reference control.
//     // isBefore : Specifies whether to place the control before or after the reference control specified by the positionID parameter.
//     // This argument is ignored is positionID is not specified.
//     // Returns the newly created DropDownControl object or null if the creation fails.
//     adsk.core.ToolbarControls.prototype.addDropDown = function (text, resourceFolder, id, positionID, isBefore) {
//         if (text === undefined || text === null || text.constructor !== String) { throw new TypeError('text must be a string'); }
//         if (resourceFolder === undefined || resourceFolder === null || resourceFolder.constructor !== String) { throw new TypeError('resourceFolder must be a string'); }
//         if (id === null || (id !== undefined && id.constructor !== String)) { throw new TypeError('id must be a string'); }
//         if (positionID === null || (positionID !== undefined && positionID.constructor !== String)) { throw new TypeError('positionID must be a string'); }
//         if (isBefore === null || (isBefore !== undefined && typeof isBefore !== 'boolean')) { throw new TypeError('isBefore must be a boolean'); }
//         var args = {
//             text : text,
//             resourceFolder : resourceFolder
//         };
//         if (id !== undefined) {
//             args.id = id;
//         }
//         if (positionID !== undefined) {
//             args.positionID = positionID;
//         }
//         if (isBefore !== undefined) {
//             args.isBefore = isBefore;
//         }
//         var result = this._execute('addDropDown', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.DropDownControl) : null;
//     };

//     // Adds a separator to the controls in the toolbar, panel, or drop-down.
//     // id : Optional unique ID for the control. It must be unique with respect to other controls in this collection.
//     // If the default empty string is provided, Fusion will create a unique ID.
//     // positionID : Specifies the reference id of the control to position this separator control relative to.
//     // Not setting this value indicates that the separator control will be created at the end of all other controls in toolbar.
//     // The isBefore parameter specifies whether to place the control before or after the reference control.
//     // isBefore : Specifies whether to place the separator control before or after the reference control specified by the positionID parameter.
//     // This argument is ignored is positionID is not specified.
//     // Returns the newly created separator controls or null if the creation fails.
//     adsk.core.ToolbarControls.prototype.addSeparator = function (id, positionID, isBefore) {
//         if (id === null || (id !== undefined && id.constructor !== String)) { throw new TypeError('id must be a string'); }
//         if (positionID === null || (positionID !== undefined && positionID.constructor !== String)) { throw new TypeError('positionID must be a string'); }
//         if (isBefore === null || (isBefore !== undefined && typeof isBefore !== 'boolean')) { throw new TypeError('isBefore must be a boolean'); }
//         var args;
//         if (id !== undefined || positionID !== undefined || isBefore !== undefined) {
//             args = {};
//             if (id !== undefined) {
//                 args.id = id;
//             }
//             if (positionID !== undefined) {
//                 args.positionID = positionID;
//             }
//             if (isBefore !== undefined) {
//                 args.isBefore = isBefore;
//             }
//         }
//         var result = this._execute('addSeparator', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.SeparatorControl) : null;
//     };

//     // Adds a split button to the controls in a toolbar. A split button has two active areas that the user can click;
//     // the main button portion and the drop-down arrow. Clicking the main button, executes the displayed command.
//     // Clicking the drop-down displays the drop-down with additional commands.
//     // The split button itself does not fire any events, but the buttons within it will fire events to their associated
//     // command definitions.
//     // defaultDefinition : A command definition that will be used to create the main button. A button will also be created in the drop-down
//     // for this definition.
//     // additionalDefinitions : A collection of command definitions that will be used to create the buttons on the drop-down.
//     // showLastUsed : Specifies if the split button should have the behavior where the command shown on the main button changes
//     // to the last executed command.
//     // id : Optional unique ID for the control. It must be unique with respect to other controls in this collection.
//     // If the default empty string is provided, Fusion will create a unique ID.
//     // positionID : Specifies the reference id of the control to position this control relative to.
//     // Not setting this value indicates that the control will be created at the end of all other controls in toolbar. The isBefore
//     // parameter specifies whether to place the control before or after the reference control.
//     // isBefore : Specifies whether to place the control before or after the reference control specified by the positionID parameter.
//     // This argument is ignored is positionID is not specified
//     // Returns the newly created SplitButtonControl object or null if the creation fails.
//     adsk.core.ToolbarControls.prototype.addSplitButton = function (defaultDefinition, additionalDefinitions, showLastUsed, id, positionID, isBefore) {
//         if (defaultDefinition !== null && !(defaultDefinition instanceof adsk.core.CommandDefinition)) { throw new TypeError('defaultDefinition must be a adsk.core.CommandDefinition'); }
//         if (!Array.isArray(additionalDefinitions)) { throw new TypeError('additionalDefinitions must be an array'); }
//         var additionalDefinitionsLength = additionalDefinitions.length;
//         var additionalDefinitionsIt;
//         for (additionalDefinitionsIt = 0; additionalDefinitionsIt < additionalDefinitionsLength; ++additionalDefinitionsIt) {
//             if (additionalDefinitions[additionalDefinitionsIt] !== null && !(additionalDefinitions[additionalDefinitionsIt] instanceof adsk.core.CommandDefinition)) { throw new TypeError('additionalDefinitions[additionalDefinitionsIt] must be a adsk.core.CommandDefinition'); }
//         }
//         if (typeof showLastUsed !== 'boolean') { throw new TypeError('showLastUsed must be a boolean'); }
//         if (id === null || (id !== undefined && id.constructor !== String)) { throw new TypeError('id must be a string'); }
//         if (positionID === null || (positionID !== undefined && positionID.constructor !== String)) { throw new TypeError('positionID must be a string'); }
//         if (isBefore === null || (isBefore !== undefined && typeof isBefore !== 'boolean')) { throw new TypeError('isBefore must be a boolean'); }
//         var args = {
//             defaultDefinition : (defaultDefinition === null ? defaultDefinition : defaultDefinition.handle),
//             additionalDefinitions : additionalDefinitions,
//             showLastUsed : showLastUsed
//         };
//         if (id !== undefined) {
//             args.id = id;
//         }
//         if (positionID !== undefined) {
//             args.positionID = positionID;
//         }
//         if (isBefore !== undefined) {
//             args.isBefore = isBefore;
//         }
//         var result = this._execute('addSplitButton', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.SplitButtonControl) : null;
//     };

//     //=========== ToolbarPanel ============
//     // Toolbar panels are the panels shown in the command toolbar.
//     adsk.core.ToolbarPanel = function ToolbarPanel(handle) {
//         if (!(this instanceof adsk.core.ToolbarPanel)) {
//             return adsk.core.ToolbarPanel.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ToolbarPanel.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ToolbarPanel.prototype.constructor = adsk.core.ToolbarPanel;
//     adsk.core.ToolbarPanel.interfaceId = 'adsk.core.ToolbarPanel';
//     adsk.objectTypes['adsk.core.ToolbarPanel'] = adsk.core.ToolbarPanel;
//     adsk.core.ToolbarPanel.cast = function (object) {
//         return object instanceof adsk.core.ToolbarPanel ? object : null;
//     };

//     // Gets The unique, language independent, ID of this panel.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the position this panel is in within the toolbar.
//     // The first panel is at position 0. This value is with respect
//     // to the complete list of panels so this value could be outside
//     // of the expected range if you have a collection of panels
//     // associated with a workspace, which is a subset of the entire
//     // list of panels.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'index', {
//         get : function () {
//             var result = this._execute('index');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets whether this panel is currently being displayed in the user interface.
//     // Visibility of a panel is controlled by it being associated with the currently
//     // active workspace.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'isVisible', {
//         get : function () {
//             var result = this._execute('isVisible');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the name of the panel as seen in the user interface.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the controls associated with this panel. These are all in the panel's
//     // drop-down (assuming their visible property is true) and are selectively shown
//     // within the panel.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'controls', {
//         get : function () {
//             var result = this._execute('controls');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControls) : null;
//         }
//     });

//     // Gets the parent UserInterface object.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'parentUserInterface', {
//         get : function () {
//             var result = this._execute('parentUserInterface');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.UserInterface) : null;
//         }
//     });

//     // Gets the controls in the panel that have been promoted. Promoted
//     // controls are the controls that are displayed within the panel.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'promotedControls', {
//         get : function () {
//             var result = this._execute('promotedControls');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControlList) : null;
//         }
//     });

//     // Gets or sets the set of workspaces that this panel is displayed for.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'relatedWorkspaces', {
//         get : function () {
//             var result = this._execute('relatedWorkspaces');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ObjectCollection) : null;
//         },
//         set : function (value) {
//             if (value !== null && !(value instanceof adsk.core.ObjectCollection)) { throw new TypeError('value must be a adsk.core.ObjectCollection'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('relatedWorkspaces', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the name of the product this toolbar panel is associated with.
//     Object.defineProperty(adsk.core.ToolbarPanel.prototype, 'productType', {
//         get : function () {
//             var result = this._execute('productType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Deletes this toolbar panel.
//     // Returns true if the delete was successful.
//     adsk.core.ToolbarPanel.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== ToolbarPanelList ============
//     // A ToolbarPanelList is a list of ToolbarPanel objects.
//     adsk.core.ToolbarPanelList = function ToolbarPanelList(handle) {
//         if (!(this instanceof adsk.core.ToolbarPanelList)) {
//             return adsk.core.ToolbarPanelList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ToolbarPanelList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ToolbarPanelList.prototype.constructor = adsk.core.ToolbarPanelList;
//     adsk.core.ToolbarPanelList.interfaceId = 'adsk.core.ToolbarPanelList';
//     adsk.objectTypes['adsk.core.ToolbarPanelList'] = adsk.core.ToolbarPanelList;
//     adsk.core.ToolbarPanelList.cast = function (object) {
//         return object instanceof adsk.core.ToolbarPanelList ? object : null;
//     };

//     // Gets the number of toolbar panels in the collection.
//     Object.defineProperty(adsk.core.ToolbarPanelList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified work space using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.ToolbarPanelList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanel) : null;
//     };

//     // Returns the ToolbarPanel of the specified ID.
//     // id : The ID of the ToolbarPanel to get.
//     // Returns the specified ToolbarPanel or null in the case where there isn't a ToolbarPanel with the specified ID.
//     adsk.core.ToolbarPanelList.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanel) : null;
//     };

//     //=========== ToolbarPanels ============
//     // Provides access to a set of toolbar panels. There exist many toolbar panels and their
//     // visibility is determined by the active workspace. A panel can be associated with one
//     // or more workspaces and when the associated workspace is active, the panel is made visible.
//     adsk.core.ToolbarPanels = function ToolbarPanels(handle) {
//         if (!(this instanceof adsk.core.ToolbarPanels)) {
//             return adsk.core.ToolbarPanels.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.ToolbarPanels.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.ToolbarPanels.prototype.constructor = adsk.core.ToolbarPanels;
//     adsk.core.ToolbarPanels.interfaceId = 'adsk.core.ToolbarPanels';
//     adsk.objectTypes['adsk.core.ToolbarPanels'] = adsk.core.ToolbarPanels;
//     adsk.core.ToolbarPanels.cast = function (object) {
//         return object instanceof adsk.core.ToolbarPanels ? object : null;
//     };

//     // Gets the number of ToolbarPanels.
//     Object.defineProperty(adsk.core.ToolbarPanels.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Creates a new ToolbarPanel. The panel is initially empty.
//     // Use the associated ToolbarControls collection to add buttons.
//     // id : The unique id for this panel. The id must be unique with respect to all of the panels.
//     // name : The displayed name of this panel. This is the name visible in the user interface.
//     // positionID : Specifies the id of the panel to position this panel relative to.
//     // Not setting this value indicates that the panel will be created at the end of all other panels. The isBefore
//     // parameter specifies whether to place the panel before or after this panel.
//     // isBefore : Specifies whether to place the panel before or after the panel specified by the positionID argument.
//     // This argument is ignored is positionID is not specified
//     // Returns the newly created panel or null in the case the creation failed.
//     adsk.core.ToolbarPanels.prototype.add = function (id, name, positionID, isBefore) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (positionID === null || (positionID !== undefined && positionID.constructor !== String)) { throw new TypeError('positionID must be a string'); }
//         if (isBefore === null || (isBefore !== undefined && typeof isBefore !== 'boolean')) { throw new TypeError('isBefore must be a boolean'); }
//         var args = {
//             id : id,
//             name : name
//         };
//         if (positionID !== undefined) {
//             args.positionID = positionID;
//         }
//         if (isBefore !== undefined) {
//             args.isBefore = isBefore;
//         }
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanel) : null;
//     };

//     // Returns the specified toolbar panel using an index into the collection.
//     // When iterating by index, the panels are returned in the same order as they are shown in the user interface.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.ToolbarPanels.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanel) : null;
//     };

//     // Returns the ToolbarPanel at the specified ID.
//     // id : The Id of the panel within the collection to return.
//     // Returns the ToolbarPanel of the specified id or null no panel has the specified id.
//     adsk.core.ToolbarPanels.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanel) : null;
//     };

//     //=========== Toolbars ============
//     // Provides access to the toolbars. These are currently the right and left QAT's and the NavBar.
//     adsk.core.Toolbars = function Toolbars(handle) {
//         if (!(this instanceof adsk.core.Toolbars)) {
//             return adsk.core.Toolbars.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Toolbars.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Toolbars.prototype.constructor = adsk.core.Toolbars;
//     adsk.core.Toolbars.interfaceId = 'adsk.core.Toolbars';
//     adsk.objectTypes['adsk.core.Toolbars'] = adsk.core.Toolbars;
//     adsk.core.Toolbars.cast = function (object) {
//         return object instanceof adsk.core.Toolbars ? object : null;
//     };

//     // Gets the number of Toolbar objects in the collection.
//     Object.defineProperty(adsk.core.Toolbars.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified toolbar using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.Toolbars.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Toolbar) : null;
//     };

//     // Returns the Toolbar of the specified ID.
//     // id : The Id of the toolbar to return.
//     // Returns the toolbar with the specified ID or null if there's not a toolbar with the specified ID.
//     adsk.core.Toolbars.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Toolbar) : null;
//     };

//=========== UserInterface ============
// Provides access to the user-interface related objects and functionality.
interface UserInterface {
    //         if (!(this instanceof adsk.core.UserInterface)) {
    //             return adsk.core.UserInterface.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.UserInterface.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.UserInterface.prototype.constructor = adsk.core.UserInterface;
    //     adsk.core.UserInterface.interfaceId = 'adsk.core.UserInterface';
    //     adsk.objectTypes['adsk.core.UserInterface'] = adsk.core.UserInterface;
    //     adsk.core.UserInterface.cast = function (object) {
    //         return object instanceof adsk.core.UserInterface ? object : null;
    //     };

    //     // Gets the current set of selected objects.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'activeSelections', {
    //         get : function () {
    //             var result = this._execute('activeSelections');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Selections) : null;
    //         }
    //     });

    //     // Gets the active workspace. The active workspace is the one currently active in the user interface.
    //     // This can be null if there is no active product.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'activeWorkspace', {
    //         get : function () {
    //             var result = this._execute('activeWorkspace');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
    //         }
    //     });

    //     // Gets all of the command definitions currently defined. This is all
    //     // command definitions both internal and those defined through the API.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'commandDefinitions', {
    //         get : function () {
    //             var result = this._execute('commandDefinitions');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinitions) : null;
    //         }
    //     });

    //     // Gets a collection that provides access to the toolbars. This includes
    //     // the left and right QAT, and the Navbar.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'toolbars', {
    //         get : function () {
    //             var result = this._execute('toolbars');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Toolbars) : null;
    //         }
    //     });

    //     // Gets all of the workspaces currently available.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'workspaces', {
    //         get : function () {
    //             var result = this._execute('workspaces');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspaces) : null;
    //         }
    //     });

    //     // Gets all of the toolbar panels. This returns all of the panels
    //     // available, regardless of which workspace or product they're associated with.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'allToolbarPanels', {
    //         get : function () {
    //             var result = this._execute('allToolbarPanels');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanelList) : null;
    //         }
    //     });

    //     // The workspacePreActivate event fires at the VERY start of a workspace being activated.
    //     // The client can add or remove WorkspaceEventHandlers from the WorkspaceEvent.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'workspacePreActivate', {
    //         get : function () {
    //             var result = this._execute('workspacePreActivate');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.WorkspaceEvent) : null;
    //         }
    //     });

    //     // The workspaceActivated event fires at the VERY end of a workspace being activated.
    //     // The client can add or remove WorkspaceEventHandlers from the WorkspaceEvent.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'workspaceActivated', {
    //         get : function () {
    //             var result = this._execute('workspaceActivated');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.WorkspaceEvent) : null;
    //         }
    //     });

    //     // The workspacePreDeactivate event fires at the VERY start of a workspace being deactivated.
    //     // The client can add or remove WorkspaceEventHandlers from the WorkspaceEvent.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'workspacePreDeactivate', {
    //         get : function () {
    //             var result = this._execute('workspacePreDeactivate');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.WorkspaceEvent) : null;
    //         }
    //     });

    //     // The workspaceDeactivated event fires at the VERY end of a workspace being deactivated.
    //     // The client can add or remove WorkspaceEventHandlers from the WorkspaceEvent.
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'workspaceDeactivated', {
    //         get : function () {
    //             var result = this._execute('workspaceDeactivated');
    //             return (result && result.value) ? adsk.createObject(result.value, adsk.core.WorkspaceEvent) : null;
    //         }
    //     });

    //     // Gets the id of the command definition from the active command (the one that is currently running)
    //     Object.defineProperty(adsk.core.UserInterface.prototype, 'activeCommand', {
    //         get : function () {
    //             var result = this._execute('activeCommand');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Display a modal message box with the provided text.
    //     // text : The message text to display in the dialog.
    //     // title : If the optional title argument is provided, it sets the title for the dialog, otherwise the default product name is used.
    //     // buttons : The optional buttons array can be used to specify which buttons to display on the dialog.
    //     // The first button provided is the default action.
    //     // If buttons are not specified, the dialog will default to a single OK button.
    //     // icon : The optional icon argument can be used to specify which icon to display, otherwise the default of no icon is used.
    //     // The button pressed to dismiss the dialog is returned.
    //     adsk.core.UserInterface.prototype.messageBox = function (text, title, buttons, icon) {
    //         if (text === undefined || text === null || text.constructor !== String) { throw new TypeError('text must be a string'); }
    //         if (title === null || (title !== undefined && title.constructor !== String)) { throw new TypeError('title must be a string'); }
    //         if (buttons === null || (buttons !== undefined && !isFinite(buttons))) { throw new TypeError('buttons must be a number'); }
    //         if (icon === null || (icon !== undefined && !isFinite(icon))) { throw new TypeError('icon must be a number'); }
    //         var args = {
    //             text : text
    //         };
    //         if (title !== undefined) {
    //             args.title = title;
    //         }
    //         if (buttons !== undefined) {
    //             args.buttons = Number(buttons);
    //         }
    //         if (icon !== undefined) {
    //             args.icon = Number(icon);
    //         }
    //         var result = this._execute('messageBox', args);
    //         return result ? result.value : undefined;
    //     };

    //     // Displays a modal dialog to get string input from the user.
    //     // prompt : The message text to display in the dialog.
    //     // cancelled : Indicates if the dialog was cancelled.
    //     // title : Sets the title for the dialog if specified, otherwise the default product name is used.
    //     // defaultValue : The default string that's shown when the dialog is initially displayed, otherwise the input box is empty.
    //     // Returns the string entered by the user but because the user can click Cancel, the cancelled argument should be tested before using the string.
    //     adsk.core.UserInterface.prototype.inputBox = function (prompt, cancelled, title, defaultValue) {
    //         if (prompt === undefined || prompt === null || prompt.constructor !== String) { throw new TypeError('prompt must be a string'); }
    //         if (typeof cancelled !== 'object') { throw new TypeError('cancelled must be an object'); }
    //         if (title === null || (title !== undefined && title.constructor !== String)) { throw new TypeError('title must be a string'); }
    //         if (defaultValue === null || (defaultValue !== undefined && defaultValue.constructor !== String)) { throw new TypeError('defaultValue must be a string'); }
    //         var args = {
    //             prompt : prompt,
    //             cancelled : null
    //         };
    //         if (title !== undefined) {
    //             args.title = title;
    //         }
    //         if (defaultValue !== undefined) {
    //             args.defaultValue = defaultValue;
    //         }
    //         var result = this._execute('inputBox', args);
    //         if (result && result.outargs) {
    //             cancelled.value = (result.outargs.cancelled !== undefined) ? result.outargs.cancelled : undefined;
    //         }
    //         return result ? result.value : undefined;
    //     };

    //     // Supports the selection of a single entity. This provides a simple way to prompt
    //     // the user for a selection in a script. If you need more control over the selection a command
    //     // should be created and a SelectionCommandInput used.
    //     // prompt : The prompt displayed to the user during the selection.
    //     // filter : A string defining the types of entities valid for selection. The valid list of selection filters can be found here: <a href="SelectionFilters_UM.htm">Selection Filters</a>.
    //     // You can combine multiple types by using a comma delimiter. For example,
    //     // the string "PlanarFaces,ConstructionPlanes" will allow the selection of either a planar face or a construction plane.
    //     // Returns a Selection object that provides access the selected entity through it's "entity"
    //     // property along with the location in space where the entity was selected. Returns null if the selection was aborted.
    //     adsk.core.UserInterface.prototype.selectEntity = function (prompt, filter) {
    //         if (prompt === undefined || prompt === null || prompt.constructor !== String) { throw new TypeError('prompt must be a string'); }
    //         if (filter === undefined || filter === null || filter.constructor !== String) { throw new TypeError('filter must be a string'); }
    //         var args = {
    //             prompt : prompt,
    //             filter : filter
    //         };
    //         var result = this._execute('selectEntity', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Selection) : null;
    //     };

    //     // Creates a new FileDialog object which provides the ability to show a standard file selection dialog
    //     // to the user.
    //     // Returns the created FileDialog object that you can use to define the contents of and display a standard file dialog.
    //     adsk.core.UserInterface.prototype.createFileDialog = function () {
    //         var result = this._execute('createFileDialog');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.FileDialog) : null;
    //     };

    //     // Returns all of the workspaces associated with the specified product.
    //     // productType : The name of the product that you want the associated workspaces for. The full list
    //     // of available products can be obtained by using the Application.supportedProductTypes property.
    //     // Returns a list of the associated work spaces.
    //     adsk.core.UserInterface.prototype.workspacesByProductType = function (productType) {
    //         if (productType === undefined || productType === null || productType.constructor !== String) { throw new TypeError('productType must be a string'); }
    //         var args = {
    //             productType : productType
    //         };
    //         var result = this._execute('workspacesByProductType', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.WorkspaceList) : null;
    //     };

    //     // Gets all of the toolbar panels associated with the specified product.
    //     // productType : The name of the product that you want the associated workspaces for. The full list
    //     // of available products can be obtained by using the Application.supportedProductTypes property.
    //     // Returns a list of the toolbars associated with the specified product.
    //     adsk.core.UserInterface.prototype.toolbarPanelsByProductType = function (productType) {
    //         if (productType === undefined || productType === null || productType.constructor !== String) { throw new TypeError('productType must be a string'); }
    //         var args = {
    //             productType : productType
    //         };
    //         var result = this._execute('toolbarPanelsByProductType', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanelList) : null;
    //     };

    //     // Method that causes the currently active (running) command to be terminated
    //     // Returns true if terminating the active command was successful.
    //     adsk.core.UserInterface.prototype.terminateActiveCommand = function () {
    //         var result = this._execute('terminateActiveCommand');
    //         return result ? result.value : undefined;
    //     };

    //     // Creates a new ProgressDialog object that you can use to display and control a progress dialog.
    //     adsk.core.UserInterface.prototype.createProgressDialog = function () {
    //         var result = this._execute('createProgressDialog');
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.ProgressDialog) : null;
    //     };
}

//=========== ValidateInputsEvent ============
// An event endpoint that supports the connection to client implemented ValidateInputsEventHandlers.
interface ValidateInputsEvent {
    //         if (!(this instanceof adsk.core.ValidateInputsEvent)) {
    //             return adsk.core.ValidateInputsEvent.cast(handle);
    //         }
    //         adsk.core.Event.call(this, handle);
    //     };
    //     adsk.core.ValidateInputsEvent.prototype = Object.create(adsk.core.Event.prototype);
    //     adsk.core.ValidateInputsEvent.prototype.constructor = adsk.core.ValidateInputsEvent;
    //     adsk.core.ValidateInputsEvent.interfaceId = 'adsk.core.ValidateInputsEvent';
    //     adsk.objectTypes['adsk.core.ValidateInputsEvent'] = adsk.core.ValidateInputsEvent;
    //     adsk.core.ValidateInputsEvent.cast = function (object) {
    //         return object instanceof adsk.core.ValidateInputsEvent ? object : null;
    //     };

    //     adsk.core.ValidateInputsEvent.prototype.add = function (handler) {
    //         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
    //         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.ValidateInputsEventArgs);
    //     };
}

//     //=========== ValidateInputsEventArgs ============
//     // Provides a set of arguments from a firing ValidateInputsEvent to a ValidateInputsEventHandler's notify callback method.
//     adsk.core.ValidateInputsEventArgs = function ValidateInputsEventArgs(handle) {
//         if (!(this instanceof adsk.core.ValidateInputsEventArgs)) {
//             return adsk.core.ValidateInputsEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.ValidateInputsEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.ValidateInputsEventArgs.prototype.constructor = adsk.core.ValidateInputsEventArgs;
//     adsk.core.ValidateInputsEventArgs.interfaceId = 'adsk.core.ValidateInputsEventArgs';
//     adsk.objectTypes['adsk.core.ValidateInputsEventArgs'] = adsk.core.ValidateInputsEventArgs;
//     adsk.core.ValidateInputsEventArgs.cast = function (object) {
//         return object instanceof adsk.core.ValidateInputsEventArgs ? object : null;
//     };

//     // Used during the AreInputsValid event to get or set if all inputs are valid
//     // and the OK button should be enabled.
//     Object.defineProperty(adsk.core.ValidateInputsEventArgs.prototype, 'areInputsValid', {
//         get : function () {
//             var result = this._execute('areInputsValid');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('areInputsValid', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== Workspace ============
//     // A Workspace provides access to a set of panels, which contain commands that
//     // are relevant for that particular workspace. The user can switch from one
//     // workspace to another in a product (e.g. switch from Model to Sculpt in Fusion).
//     adsk.core.Workspace = function Workspace(handle) {
//         if (!(this instanceof adsk.core.Workspace)) {
//             return adsk.core.Workspace.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Workspace.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Workspace.prototype.constructor = adsk.core.Workspace;
//     adsk.core.Workspace.interfaceId = 'adsk.core.Workspace';
//     adsk.objectTypes['adsk.core.Workspace'] = adsk.core.Workspace;
//     adsk.core.Workspace.cast = function (object) {
//         return object instanceof adsk.core.Workspace ? object : null;
//     };

//     // Gets the unique Id of the workspace that can be used programmatically
//     // to find a specific workspace. It is not affected by the current
//     // language.
//     Object.defineProperty(adsk.core.Workspace.prototype, 'id', {
//         get : function () {
//             var result = this._execute('id');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if the workspace is currently active - i.e. displayed
//     Object.defineProperty(adsk.core.Workspace.prototype, 'isActive', {
//         get : function () {
//             var result = this._execute('isActive');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if this workspace is native to Fusion or was created via the API.
//     Object.defineProperty(adsk.core.Workspace.prototype, 'isNative', {
//         get : function () {
//             var result = this._execute('isNative');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the visible name of the workspace as seen in the user interface.
//     // This is the localized name.
//     Object.defineProperty(adsk.core.Workspace.prototype, 'name', {
//         get : function () {
//             var result = this._execute('name');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the collection containing the panels associated with this workspace.
//     // It's through this collection that you can add new toolbar panels.
//     Object.defineProperty(adsk.core.Workspace.prototype, 'toolbarPanels', {
//         get : function () {
//             var result = this._execute('toolbarPanels');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarPanels) : null;
//         }
//     });

//     // Gets or sets the resource folder.
//     Object.defineProperty(adsk.core.Workspace.prototype, 'resourceFolder', {
//         get : function () {
//             var result = this._execute('resourceFolder');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('resourceFolder', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the name of the product this workspace is associated with.
//     Object.defineProperty(adsk.core.Workspace.prototype, 'productType', {
//         get : function () {
//             var result = this._execute('productType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Activate the workspace (assuming it is valid to do so - a SIM workspace can't
//     // be activated if Fusion is the active product).
//     // Boolean return that indicates if the activation was successful or not.
//     adsk.core.Workspace.prototype.activate = function () {
//         var result = this._execute('activate');
//         return result ? result.value : undefined;
//     };

//     // Deletes this workspace. Only a workspace added by the API can be deleted, (IsNative is false).
//     // Boolean return that indicates if the deletion was successful or not.
//     adsk.core.Workspace.prototype.deleteMe = function () {
//         var result = this._execute('deleteMe');
//         return result ? result.value : undefined;
//     };

//     //=========== WorkspaceEvent ============
//     // A WorkspaceEvent represents a workspace related event. For example, workspaceActivate or workspaceDeactivate.
//     adsk.core.WorkspaceEvent = function WorkspaceEvent(handle) {
//         if (!(this instanceof adsk.core.WorkspaceEvent)) {
//             return adsk.core.WorkspaceEvent.cast(handle);
//         }
//         adsk.core.Event.call(this, handle);
//     };
//     adsk.core.WorkspaceEvent.prototype = Object.create(adsk.core.Event.prototype);
//     adsk.core.WorkspaceEvent.prototype.constructor = adsk.core.WorkspaceEvent;
//     adsk.core.WorkspaceEvent.interfaceId = 'adsk.core.WorkspaceEvent';
//     adsk.objectTypes['adsk.core.WorkspaceEvent'] = adsk.core.WorkspaceEvent;
//     adsk.core.WorkspaceEvent.cast = function (object) {
//         return object instanceof adsk.core.WorkspaceEvent ? object : null;
//     };

//     adsk.core.WorkspaceEvent.prototype.add = function (handler) {
//         if (typeof handler !== 'function') { throw new TypeError('handler must be a function'); }
//         return adsk.core.Event.prototype.add.call(this, handler, adsk.core.WorkspaceEventArgs);
//     };

//     //=========== WorkspaceEventArgs ============
//     // The WorkspaceEventArgs provides information associated with a workspace event.
//     adsk.core.WorkspaceEventArgs = function WorkspaceEventArgs(handle) {
//         if (!(this instanceof adsk.core.WorkspaceEventArgs)) {
//             return adsk.core.WorkspaceEventArgs.cast(handle);
//         }
//         adsk.core.EventArgs.call(this, handle);
//     };
//     adsk.core.WorkspaceEventArgs.prototype = Object.create(adsk.core.EventArgs.prototype);
//     adsk.core.WorkspaceEventArgs.prototype.constructor = adsk.core.WorkspaceEventArgs;
//     adsk.core.WorkspaceEventArgs.interfaceId = 'adsk.core.WorkspaceEventArgs';
//     adsk.objectTypes['adsk.core.WorkspaceEventArgs'] = adsk.core.WorkspaceEventArgs;
//     adsk.core.WorkspaceEventArgs.cast = function (object) {
//         return object instanceof adsk.core.WorkspaceEventArgs ? object : null;
//     };

//     // Provides access to the workspace.
//     Object.defineProperty(adsk.core.WorkspaceEventArgs.prototype, 'workspace', {
//         get : function () {
//             var result = this._execute('workspace');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
//         }
//     });

//=========== WorkspaceList ============
// A WorkspaceList is a list of Workspaces - e.g. the Workspaces for a given product.
interface WorkspaceList {
    //         if (!(this instanceof adsk.core.WorkspaceList)) {
    //             return adsk.core.WorkspaceList.cast(handle);
    //         }
    //         adsk.core.Base.call(this, handle);
    //     };
    //     adsk.core.WorkspaceList.prototype = Object.create(adsk.core.Base.prototype);
    //     adsk.core.WorkspaceList.prototype.constructor = adsk.core.WorkspaceList;
    //     adsk.core.WorkspaceList.interfaceId = 'adsk.core.WorkspaceList';
    //     adsk.objectTypes['adsk.core.WorkspaceList'] = adsk.core.WorkspaceList;
    //     adsk.core.WorkspaceList.cast = function (object) {
    //         return object instanceof adsk.core.WorkspaceList ? object : null;
    //     };

    //     // Gets the number of workspaces in the collection.
    //     Object.defineProperty(adsk.core.WorkspaceList.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    //     // Returns the specified work space using an index into the collection.
    //     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    //     // Returns the specified item or null if an invalid index was specified.
    //     adsk.core.WorkspaceList.prototype.item = function (index) {
    //         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
    //         var args = {
    //             index : Number(index)
    //         };
    //         var result = this._execute('item', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
    //     };

    //     // Returns the Workspace of the specified ID.
    //     // id : The ID of the workspace to get.
    //     // Returns the specified workspace or null in the case where there isn't a workspace with the specified ID.
    //     adsk.core.WorkspaceList.prototype.itemById = function (id) {
    //         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
    //         var args = {
    //             id : id
    //         };
    //         var result = this._execute('itemById', args);
    //         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
    //     };
}

//     //=========== Workspaces ============
//     // Provides access to all of the existing workspaces.
//     adsk.core.Workspaces = function Workspaces(handle) {
//         if (!(this instanceof adsk.core.Workspaces)) {
//             return adsk.core.Workspaces.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.core.Workspaces.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.core.Workspaces.prototype.constructor = adsk.core.Workspaces;
//     adsk.core.Workspaces.interfaceId = 'adsk.core.Workspaces';
//     adsk.objectTypes['adsk.core.Workspaces'] = adsk.core.Workspaces;
//     adsk.core.Workspaces.cast = function (object) {
//         return object instanceof adsk.core.Workspaces ? object : null;
//     };

//     // Gets the number of workspaces in the collection.
//     Object.defineProperty(adsk.core.Workspaces.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified work space using an index into the collection.
//     // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
//     // Returns the specified item or null if an invalid index was specified.
//     adsk.core.Workspaces.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
//     };

//     // Returns the Workspace of the specified ID.
//     // id : The ID of the workspace to get.
//     // Returns the specified workspace or null in the case where there isn't a workspace with the specified ID.
//     adsk.core.Workspaces.prototype.itemById = function (id) {
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         var args = {
//             id : id
//         };
//         var result = this._execute('itemById', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
//     };

//     // Creates a new workspace for a specific product.
//     // productType : The name of the product this workspace will be displayed with.
//     // id : The unique ID for this workspace. It must be unique with respect to all other workspaces.
//     // name : The displayed name of this workspace.
//     // resourceFolder : The resource folder should contain two files; 49X31.png and 98x62.png. The larger is used for the Apple Retina display.
//     // Returns the created workspace or null if the creation failed.
//     adsk.core.Workspaces.prototype.add = function (productType, id, name, resourceFolder) {
//         if (productType === undefined || productType === null || productType.constructor !== String) { throw new TypeError('productType must be a string'); }
//         if (id === undefined || id === null || id.constructor !== String) { throw new TypeError('id must be a string'); }
//         if (name === undefined || name === null || name.constructor !== String) { throw new TypeError('name must be a string'); }
//         if (resourceFolder === undefined || resourceFolder === null || resourceFolder.constructor !== String) { throw new TypeError('resourceFolder must be a string'); }
//         var args = {
//             productType : productType,
//             id : id,
//             name : name,
//             resourceFolder : resourceFolder
//         };
//         var result = this._execute('add', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Workspace) : null;
//     };

//     //=========== BoolValueCommandInput ============
//     // Provides a command input to get a boolean value from the user. This is represented
//     // in the user inteface as either a button or a check box.
//     adsk.core.BoolValueCommandInput = function BoolValueCommandInput(handle) {
//         if (!(this instanceof adsk.core.BoolValueCommandInput)) {
//             return adsk.core.BoolValueCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.BoolValueCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.BoolValueCommandInput.prototype.constructor = adsk.core.BoolValueCommandInput;
//     adsk.core.BoolValueCommandInput.interfaceId = 'adsk.core.BoolValueCommandInput';
//     adsk.objectTypes['adsk.core.BoolValueCommandInput'] = adsk.core.BoolValueCommandInput;
//     adsk.core.BoolValueCommandInput.cast = function (object) {
//         return object instanceof adsk.core.BoolValueCommandInput ? object : null;
//     };

//     // Gets or sets the state of this input. If it's being displayed as a checkbox a value of true indicates the input is checked.
//     // If it's being displayed as a button, a value of true indicates the button is currently depressed.
//     Object.defineProperty(adsk.core.BoolValueCommandInput.prototype, 'value', {
//         get : function () {
//             var result = this._execute('value');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('value', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the folder that contains the image to display on the button. Text
//     // can also be displayed, which is specified using the text property.
//     Object.defineProperty(adsk.core.BoolValueCommandInput.prototype, 'resourceFolder', {
//         get : function () {
//             var result = this._execute('resourceFolder');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('resourceFolder', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if this is being shown as a button or check box.
//     Object.defineProperty(adsk.core.BoolValueCommandInput.prototype, 'isCheckBox', {
//         get : function () {
//             var result = this._execute('isCheckBox');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets text to be displayed on the button. If the resourceFolder
//     // is not specified then the button will be displayed with only text. If
//     // text and the resource folder are specified then both the icon and text
//     // will be displayed.
//     Object.defineProperty(adsk.core.BoolValueCommandInput.prototype, 'text', {
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

//     //=========== ButtonControlDefinition ============
//     // Represents the information used to define a button. This isn't the visible button control but
//     // is the information needed to create a button control and fully defines a button except for
//     // it's position within the user interface.
//     adsk.core.ButtonControlDefinition = function ButtonControlDefinition(handle) {
//         if (!(this instanceof adsk.core.ButtonControlDefinition)) {
//             return adsk.core.ButtonControlDefinition.cast(handle);
//         }
//         adsk.core.ControlDefinition.call(this, handle);
//     };
//     adsk.core.ButtonControlDefinition.prototype = Object.create(adsk.core.ControlDefinition.prototype);
//     adsk.core.ButtonControlDefinition.prototype.constructor = adsk.core.ButtonControlDefinition;
//     adsk.core.ButtonControlDefinition.interfaceId = 'adsk.core.ButtonControlDefinition';
//     adsk.objectTypes['adsk.core.ButtonControlDefinition'] = adsk.core.ButtonControlDefinition;
//     adsk.core.ButtonControlDefinition.cast = function (object) {
//         return object instanceof adsk.core.ButtonControlDefinition ? object : null;
//     };

//     //=========== ButtonRowCommandInput ============
//     // Provides a command input to get a selection of a single button from a row of buttons.
//     adsk.core.ButtonRowCommandInput = function ButtonRowCommandInput(handle) {
//         if (!(this instanceof adsk.core.ButtonRowCommandInput)) {
//             return adsk.core.ButtonRowCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.ButtonRowCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.ButtonRowCommandInput.prototype.constructor = adsk.core.ButtonRowCommandInput;
//     adsk.core.ButtonRowCommandInput.interfaceId = 'adsk.core.ButtonRowCommandInput';
//     adsk.objectTypes['adsk.core.ButtonRowCommandInput'] = adsk.core.ButtonRowCommandInput;
//     adsk.core.ButtonRowCommandInput.cast = function (object) {
//         return object instanceof adsk.core.ButtonRowCommandInput ? object : null;
//     };

//     // Returns if this button row can have multiple items selected at once or not.
//     // If True, multiple buttons can be selected at once. If False only one button
//     // can be selected and selecting another button unselects the one currently selected.
//     Object.defineProperty(adsk.core.ButtonRowCommandInput.prototype, 'isMultiSelectEnabled', {
//         get : function () {
//             var result = this._execute('isMultiSelectEnabled');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the ListItems object associated with this button row. You use this
//     // object to populate and interact with the buttons in the row.
//     Object.defineProperty(adsk.core.ButtonRowCommandInput.prototype, 'listItems', {
//         get : function () {
//             var result = this._execute('listItems');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItems) : null;
//         }
//     });

//     // Gets the button in the row that is currently selected. This can return null in the
//     // case where no button in the row has been selected.
//     Object.defineProperty(adsk.core.ButtonRowCommandInput.prototype, 'selectedItem', {
//         get : function () {
//             var result = this._execute('selectedItem');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//         }
//     });

//     //=========== CheckBoxControlDefinition ============
//     // Represents the information used to define a check box. This isn't the visible check box control but
//     // is the information needed to create a check box control and fully defines a check box except for
//     // it's position within the user interface.
//     adsk.core.CheckBoxControlDefinition = function CheckBoxControlDefinition(handle) {
//         if (!(this instanceof adsk.core.CheckBoxControlDefinition)) {
//             return adsk.core.CheckBoxControlDefinition.cast(handle);
//         }
//         adsk.core.ControlDefinition.call(this, handle);
//     };
//     adsk.core.CheckBoxControlDefinition.prototype = Object.create(adsk.core.ControlDefinition.prototype);
//     adsk.core.CheckBoxControlDefinition.prototype.constructor = adsk.core.CheckBoxControlDefinition;
//     adsk.core.CheckBoxControlDefinition.interfaceId = 'adsk.core.CheckBoxControlDefinition';
//     adsk.objectTypes['adsk.core.CheckBoxControlDefinition'] = adsk.core.CheckBoxControlDefinition;
//     adsk.core.CheckBoxControlDefinition.cast = function (object) {
//         return object instanceof adsk.core.CheckBoxControlDefinition ? object : null;
//     };

//     // Gets or sets whether the check box is checked. Changing this will result in changing any
//     // associated controls and will execute the associated command.
//     Object.defineProperty(adsk.core.CheckBoxControlDefinition.prototype, 'isChecked', {
//         get : function () {
//             var result = this._execute('isChecked');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isChecked', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== CommandControl ============
//     // Represents a button, check box, or radio control list in a panel, toolbar, or drop-down.
//     adsk.core.CommandControl = function CommandControl(handle) {
//         if (!(this instanceof adsk.core.CommandControl)) {
//             return adsk.core.CommandControl.cast(handle);
//         }
//         adsk.core.ToolbarControl.call(this, handle);
//     };
//     adsk.core.CommandControl.prototype = Object.create(adsk.core.ToolbarControl.prototype);
//     adsk.core.CommandControl.prototype.constructor = adsk.core.CommandControl;
//     adsk.core.CommandControl.interfaceId = 'adsk.core.CommandControl';
//     adsk.objectTypes['adsk.core.CommandControl'] = adsk.core.CommandControl;
//     adsk.core.CommandControl.cast = function (object) {
//         return object instanceof adsk.core.CommandControl ? object : null;
//     };

//     // Gets the command definition associated with this button. The command definition defines
//     // all of the resource information used to display this button and receives the event when the button is clicked.
//     Object.defineProperty(adsk.core.CommandControl.prototype, 'commandDefinition', {
//         get : function () {
//             var result = this._execute('commandDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//         }
//     });

//     // Gets or sets if this command has been promoted to the parent panel.
//     // This property is ignored in the case where this control isn't in a panel.
//     Object.defineProperty(adsk.core.CommandControl.prototype, 'isPromoted', {
//         get : function () {
//             var result = this._execute('isPromoted');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isPromoted', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this command is a default command in the panel.
//     // This defines the default state of the panel if the UI is reset.
//     // This property is ignored in the case where this control isn't in a panel.
//     Object.defineProperty(adsk.core.CommandControl.prototype, 'isPromotedByDefault', {
//         get : function () {
//             var result = this._execute('isPromotedByDefault');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isPromotedByDefault', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== DirectionCommandInput ============
//     // Represents a command input that gets a direction from the user. This displays
//     // a button or a checkbox in the command dialog where the user can flip the direction if desired and also displays
//     // a manipulator in the graphics window to allow flipping the direction by clicking and dragging on the manipulator.
//     adsk.core.DirectionCommandInput = function DirectionCommandInput(handle) {
//         if (!(this instanceof adsk.core.DirectionCommandInput)) {
//             return adsk.core.DirectionCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.DirectionCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.DirectionCommandInput.prototype.constructor = adsk.core.DirectionCommandInput;
//     adsk.core.DirectionCommandInput.interfaceId = 'adsk.core.DirectionCommandInput';
//     adsk.objectTypes['adsk.core.DirectionCommandInput'] = adsk.core.DirectionCommandInput;
//     adsk.core.DirectionCommandInput.cast = function (object) {
//         return object instanceof adsk.core.DirectionCommandInput ? object : null;
//     };

//     // Gets the origin point of the direction manipulator (arrow) in the model space of the root component.
//     // To set the origin use the setManipulator method.
//     Object.defineProperty(adsk.core.DirectionCommandInput.prototype, 'manipulatorOrigin', {
//         get : function () {
//             var result = this._execute('manipulatorOrigin');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Gets the direction of the manipulator (arrow) in the model space of the root component.
//     // To set the direction use the setManipulator method.
//     Object.defineProperty(adsk.core.DirectionCommandInput.prototype, 'manipulatorDirection', {
//         get : function () {
//             var result = this._execute('manipulatorDirection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Gets and sets if the direction manipulator displayed is flipped (reversed 180 degrees as compared to the
//     // direction defined by the manipulatorDirection property). This is false for a newly created DirectionCommandInput.
//     Object.defineProperty(adsk.core.DirectionCommandInput.prototype, 'isDirectionFlipped', {
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

//     // Gets and sets the folder that contains the image to display on the button.
//     // The input is shown as a check box if set resource folder to empty.
//     Object.defineProperty(adsk.core.DirectionCommandInput.prototype, 'resourceFolder', {
//         get : function () {
//             var result = this._execute('resourceFolder');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('resourceFolder', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Defines a direction manipulator arrow in the graphics viewport whose direction can be flipped by the
//     // toggling the checkbox, clicking the button or by the user clicking and dragging on the manipulator arrow.
//     // origin : The origin point of the direction manipulator (arrow) in the model space of the root component.
//     // direction : The direction of the manipulator (arrow) in the model space of the root component.
//     // Returns true if successful
//     adsk.core.DirectionCommandInput.prototype.setManipulator = function (origin, direction) {
//         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
//         if (direction !== null && !(direction instanceof adsk.core.Vector3D)) { throw new TypeError('direction must be a adsk.core.Vector3D'); }
//         var args = {
//             origin : (origin === null ? origin : origin.handle),
//             direction : (direction === null ? direction : direction.handle)
//         };
//         var result = this._execute('setManipulator', args);
//         return result ? result.value : undefined;
//     };

//     //=========== DistanceValueCommandInput ============
//     // Represents a command input that gets a distance from the user. This displays
//     // an entry in the command dialog where the user can enter a value and also displays
//     // a manipulator in the graphics window to allow them to graphically set the value.
//     // The input box is displayed in the dialog when the isVisible property of the command
//     // input is true. The manipulator is displayed in the graphics when both the isVisible
//     // and isEnabled properties are true.
//     adsk.core.DistanceValueCommandInput = function DistanceValueCommandInput(handle) {
//         if (!(this instanceof adsk.core.DistanceValueCommandInput)) {
//             return adsk.core.DistanceValueCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.DistanceValueCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.DistanceValueCommandInput.prototype.constructor = adsk.core.DistanceValueCommandInput;
//     adsk.core.DistanceValueCommandInput.interfaceId = 'adsk.core.DistanceValueCommandInput';
//     adsk.objectTypes['adsk.core.DistanceValueCommandInput'] = adsk.core.DistanceValueCommandInput;
//     adsk.core.DistanceValueCommandInput.cast = function (object) {
//         return object instanceof adsk.core.DistanceValueCommandInput ? object : null;
//     };

//     // Gets and sets the current value of the command input. The value is
//     // in centimeters but will be displayed to the user in the current default
//     // document units. Setting this value can fail if the input value is
//     // not within the minimum and maximum value range.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'value', {
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

//     // Gets or sets the expression displayed in the input field. This can contain equations and
//     // references to parameters but must result in a valid length expression. If units are not
//     // specified as part of the expression, the default units for the design are used.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'expression', {
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

//     // Gets and sets minimum value, if any, that the value can be. When getting this
//     // property you should first check the hasMinimumValue property to see if this property
//     // applies. Also, the isMinimumValueInclusive indicates if the minimum includes this
//     // value or will be up to this value.
//     // Setting this value will change the isMinimumValueInclusive to True and the hasMinimumValue property to True if hasMinimumValue is currently
//     // False, otherwise it will just update the value.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'minimumValue', {
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

//     // Gets and sets if there is a minimum value for this command input. When setting this property, it is only valid
//     // to set it to False to remove the minimum value. Setting the minimumValue property will result in this property
//     // being set to True.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'hasMinimumValue', {
//         get : function () {
//             var result = this._execute('hasMinimumValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('hasMinimumValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the value of the input includes the minimum value or is up to the minimum value. For example,
//     // if the minimum value is zero and this property is True, the minimum value can be zero. If this is False, the
//     // minimum value must be greater than zero. When the minimum value is first defined using the minimumValue property,
//     // this property is set to True. The value returned by this property is only meaningful when the hasMinimumValue property
//     // returns True.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'isMinimumValueInclusive', {
//         get : function () {
//             var result = this._execute('isMinimumValueInclusive');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isMinimumValueInclusive', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets maximum value, if any, that the value can be. When getting this
//     // property you should first check the hasMaximumValue property to see if this property
//     // applies. Also, the isMaximumValueInclusive indicates if the maximum includes this
//     // value or will be up to this value.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'maximumValue', {
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

//     // Gets and sets if there is a maximum value for this command input. When setting this property, it is only valid
//     // to set it to False to remove the maximum value. Setting the maximumValue property will result in this property
//     // being set to True.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'hasMaximumValue', {
//         get : function () {
//             var result = this._execute('hasMaximumValue');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('hasMaximumValue', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the value of the input includes the maximum value or is up to the maximum value. For example,
//     // if the maximum value is 100 and this property is True, the maximum value can be 100. If this is False, the
//     // minimum value must be less than 100. When the maximum value is first defined using the maximumValue property,
//     // this property is set to True. The value returned by this property is only meaninful when the hasMaximumValue property
//     // returns True.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'isMaximumValueInclusive', {
//         get : function () {
//             var result = this._execute('isMaximumValueInclusive');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isMaximumValueInclusive', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the origin point of the manipulator in the model space of the root component.
//     // To set the origin use the setManipulator method.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'manipulatorOrigin', {
//         get : function () {
//             var result = this._execute('manipulatorOrigin');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Point3D) : null;
//         }
//     });

//     // Gets the positive direction of the manipulator in the model space or the root component.
//     // To set the direction use the setManipulator method.
//     Object.defineProperty(adsk.core.DistanceValueCommandInput.prototype, 'manipulatorDirection', {
//         get : function () {
//             var result = this._execute('manipulatorDirection');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Vector3D) : null;
//         }
//     });

//     // Defines the position and orientation of the manipulator. The manipulator is only visible
//     // when both the isVisible and isEnabled properties are true. If those properties are
//     // true and the setManipulator has not been called, the manipulator will be displayed in
//     // a default location (0,0,0) and direction (1,0,0). Because of that the input is typically
//     // set to be invisible and/or disabled and then enabled once enough input has been specified
//     // that you can display the manipulator in the desired location.
//     // origin : Defines the position of the manipulator in root component space.
//     // direction : Defines the direction of the manipulator in root component space.
//     // Returns true if successful.
//     adsk.core.DistanceValueCommandInput.prototype.setManipulator = function (origin, direction) {
//         if (origin !== null && !(origin instanceof adsk.core.Point3D)) { throw new TypeError('origin must be a adsk.core.Point3D'); }
//         if (direction !== null && !(direction instanceof adsk.core.Vector3D)) { throw new TypeError('direction must be a adsk.core.Vector3D'); }
//         var args = {
//             origin : (origin === null ? origin : origin.handle),
//             direction : (direction === null ? direction : direction.handle)
//         };
//         var result = this._execute('setManipulator', args);
//         return result ? result.value : undefined;
//     };

//     //=========== DropDownCommandInput ============
//     // Provides a command input to get the choice in a dropdown list from the user.
//     adsk.core.DropDownCommandInput = function DropDownCommandInput(handle) {
//         if (!(this instanceof adsk.core.DropDownCommandInput)) {
//             return adsk.core.DropDownCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.DropDownCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.DropDownCommandInput.prototype.constructor = adsk.core.DropDownCommandInput;
//     adsk.core.DropDownCommandInput.interfaceId = 'adsk.core.DropDownCommandInput';
//     adsk.objectTypes['adsk.core.DropDownCommandInput'] = adsk.core.DropDownCommandInput;
//     adsk.core.DropDownCommandInput.cast = function (object) {
//         return object instanceof adsk.core.DropDownCommandInput ? object : null;
//     };

//     // Returns the style of drop down this was created as.
//     Object.defineProperty(adsk.core.DropDownCommandInput.prototype, 'dropDownStyle', {
//         get : function () {
//             var result = this._execute('dropDownStyle');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the ListItems object associated with this drop-down. You use this
//     // object to populate and interact with the items in the drop-down.
//     Object.defineProperty(adsk.core.DropDownCommandInput.prototype, 'listItems', {
//         get : function () {
//             var result = this._execute('listItems');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItems) : null;
//         }
//     });

//     // Gets the item in the list that is currently selected. This can return null in the
//     // case where no item in the list has been selected. This should be ignored
//     // for CheckBoxDropDownStyle style drop-downs because multiple items can be selected
//     // and each LiteItem should be checked individually.
//     Object.defineProperty(adsk.core.DropDownCommandInput.prototype, 'selectedItem', {
//         get : function () {
//             var result = this._execute('selectedItem');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//         }
//     });

//     // Gets or sets the maximum allowed size on screen of the drop down list, measured in items.
//     Object.defineProperty(adsk.core.DropDownCommandInput.prototype, 'maxVisibleItems', {
//         get : function () {
//             var result = this._execute('maxVisibleItems');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('maxVisibleItems', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== DropDownControl ============
//     // Represents a drop-down control.
//     adsk.core.DropDownControl = function DropDownControl(handle) {
//         if (!(this instanceof adsk.core.DropDownControl)) {
//             return adsk.core.DropDownControl.cast(handle);
//         }
//         adsk.core.ToolbarControl.call(this, handle);
//     };
//     adsk.core.DropDownControl.prototype = Object.create(adsk.core.ToolbarControl.prototype);
//     adsk.core.DropDownControl.prototype.constructor = adsk.core.DropDownControl;
//     adsk.core.DropDownControl.interfaceId = 'adsk.core.DropDownControl';
//     adsk.objectTypes['adsk.core.DropDownControl'] = adsk.core.DropDownControl;
//     adsk.core.DropDownControl.cast = function (object) {
//         return object instanceof adsk.core.DropDownControl ? object : null;
//     };

//     // Gets the associated ToolbarControls collection. Through this you can add additional controls to the drop-down.
//     Object.defineProperty(adsk.core.DropDownControl.prototype, 'controls', {
//         get : function () {
//             var result = this._execute('controls');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ToolbarControls) : null;
//         }
//     });

//     // Gets or sets the resource folder containing the image used for the icon when the drop-down is in a toolbar.
//     Object.defineProperty(adsk.core.DropDownControl.prototype, 'resourceFolder', {
//         get : function () {
//             var result = this._execute('resourceFolder');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('resourceFolder', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the Name displayed for this drop down. This isn't used when the drop-down is in a toolbar because an icon is used in that case.
//     Object.defineProperty(adsk.core.DropDownControl.prototype, 'name', {
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

//     //=========== FloatSpinnerCommandInput ============
//     // Provides a command input to get the value of a spinner from the user, the value type is float.
//     adsk.core.FloatSpinnerCommandInput = function FloatSpinnerCommandInput(handle) {
//         if (!(this instanceof adsk.core.FloatSpinnerCommandInput)) {
//             return adsk.core.FloatSpinnerCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.FloatSpinnerCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.FloatSpinnerCommandInput.prototype.constructor = adsk.core.FloatSpinnerCommandInput;
//     adsk.core.FloatSpinnerCommandInput.interfaceId = 'adsk.core.FloatSpinnerCommandInput';
//     adsk.objectTypes['adsk.core.FloatSpinnerCommandInput'] = adsk.core.FloatSpinnerCommandInput;
//     adsk.core.FloatSpinnerCommandInput.cast = function (object) {
//         return object instanceof adsk.core.FloatSpinnerCommandInput ? object : null;
//     };

//     // Gets the value associated with this input. The value is always in
//     // the database units of the unit type specified. For example, if the unit type is "inch"
//     // this value is in centimeters since centimeters are the database length unit. When setting the
//     // value it is converted into a string using the unit type and displayed in the input box.
//     Object.defineProperty(adsk.core.FloatSpinnerCommandInput.prototype, 'value', {
//         get : function () {
//             var result = this._execute('value');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the unit type that is used when evaluating the user's input.
//     Object.defineProperty(adsk.core.FloatSpinnerCommandInput.prototype, 'unitType', {
//         get : function () {
//             var result = this._execute('unitType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the minimum allowed value of the spinner in database units.
//     Object.defineProperty(adsk.core.FloatSpinnerCommandInput.prototype, 'minimumValue', {
//         get : function () {
//             var result = this._execute('minimumValue');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the maximum allowed value of the spinner in database units.
//     Object.defineProperty(adsk.core.FloatSpinnerCommandInput.prototype, 'maximumValue', {
//         get : function () {
//             var result = this._execute('maximumValue');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the spin step value in the unit type set by the unitType argument.
//     // The value should be more than zero. This is the amount the spinner will advance
//     // when the user clicks the spin button beside the value.
//     Object.defineProperty(adsk.core.FloatSpinnerCommandInput.prototype, 'spinStep', {
//         get : function () {
//             var result = this._execute('spinStep');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== GroupCommandInput ============
//     // Group Command inputs organize a set of command inputs into a collapsible
//     // list within a command dialog
//     adsk.core.GroupCommandInput = function GroupCommandInput(handle) {
//         if (!(this instanceof adsk.core.GroupCommandInput)) {
//             return adsk.core.GroupCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.GroupCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.GroupCommandInput.prototype.constructor = adsk.core.GroupCommandInput;
//     adsk.core.GroupCommandInput.interfaceId = 'adsk.core.GroupCommandInput';
//     adsk.objectTypes['adsk.core.GroupCommandInput'] = adsk.core.GroupCommandInput;
//     adsk.core.GroupCommandInput.cast = function (object) {
//         return object instanceof adsk.core.GroupCommandInput ? object : null;
//     };

//     // Gets the CommandInputs collection for this GroupCommandInput.
//     // Use the add methods on this collection to add child CommandInputs to this Group in the desired order.
//     Object.defineProperty(adsk.core.GroupCommandInput.prototype, 'children', {
//         get : function () {
//             var result = this._execute('children');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInputs) : null;
//         }
//     });

//     // Gets or sets if this group is expanded.
//     // If this is a sub-group of another group and the isEnabledCheckBoxDisplayed property is set to false
//     // then the isExpanded property must be set to true.
//     Object.defineProperty(adsk.core.GroupCommandInput.prototype, 'isExpanded', {
//         get : function () {
//             var result = this._execute('isExpanded');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isExpanded', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this group has a checkbox for enabling/disabling the group.
//     // If this is a sub-group of another group and the isEnabledCheckBoxDisplayed property is set to false
//     // then the isExpanded property must be set to true.
//     Object.defineProperty(adsk.core.GroupCommandInput.prototype, 'isEnabledCheckBoxDisplayed', {
//         get : function () {
//             var result = this._execute('isEnabledCheckBoxDisplayed');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isEnabledCheckBoxDisplayed', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ImageCommandInput ============
//     // Provides an image command input for including an image in a command dialog.
//     adsk.core.ImageCommandInput = function ImageCommandInput(handle) {
//         if (!(this instanceof adsk.core.ImageCommandInput)) {
//             return adsk.core.ImageCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.ImageCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.ImageCommandInput.prototype.constructor = adsk.core.ImageCommandInput;
//     adsk.core.ImageCommandInput.interfaceId = 'adsk.core.ImageCommandInput';
//     adsk.objectTypes['adsk.core.ImageCommandInput'] = adsk.core.ImageCommandInput;
//     adsk.core.ImageCommandInput.cast = function (object) {
//         return object instanceof adsk.core.ImageCommandInput ? object : null;
//     };

//     // Gets and sets the full path and file name of the image file.
//     // Supported image format is .png
//     // Images are displayed in the command dialog using their actual size.
//     Object.defineProperty(adsk.core.ImageCommandInput.prototype, 'imageFile', {
//         get : function () {
//             var result = this._execute('imageFile');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('imageFile', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== IntegerSpinnerCommandInput ============
//     // Provides a command input to get the value of a spinner from the user, the value type is integer.
//     adsk.core.IntegerSpinnerCommandInput = function IntegerSpinnerCommandInput(handle) {
//         if (!(this instanceof adsk.core.IntegerSpinnerCommandInput)) {
//             return adsk.core.IntegerSpinnerCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.IntegerSpinnerCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.IntegerSpinnerCommandInput.prototype.constructor = adsk.core.IntegerSpinnerCommandInput;
//     adsk.core.IntegerSpinnerCommandInput.interfaceId = 'adsk.core.IntegerSpinnerCommandInput';
//     adsk.objectTypes['adsk.core.IntegerSpinnerCommandInput'] = adsk.core.IntegerSpinnerCommandInput;
//     adsk.core.IntegerSpinnerCommandInput.cast = function (object) {
//         return object instanceof adsk.core.IntegerSpinnerCommandInput ? object : null;
//     };

//     // Gets the value associated with this input.
//     Object.defineProperty(adsk.core.IntegerSpinnerCommandInput.prototype, 'value', {
//         get : function () {
//             var result = this._execute('value');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the minimum allowed value of the spinner.
//     Object.defineProperty(adsk.core.IntegerSpinnerCommandInput.prototype, 'minimumValue', {
//         get : function () {
//             var result = this._execute('minimumValue');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the maximum allowed value of the spinner.
//     Object.defineProperty(adsk.core.IntegerSpinnerCommandInput.prototype, 'maximumValue', {
//         get : function () {
//             var result = this._execute('maximumValue');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the spin step. The value should be more than zero. This is the amount the spinner will advance
//     // when the user clicks the spin button beside the value.
//     Object.defineProperty(adsk.core.IntegerSpinnerCommandInput.prototype, 'spinStep', {
//         get : function () {
//             var result = this._execute('spinStep');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ListControlDefinition ============
//     // Represents the information used to define a list of check boxes, radio buttons, or text with icons. This class
//     // isn't the visible list control but is the information needed to create a list control and fully defines a list except for
//     // it's position within the user interface.
//     adsk.core.ListControlDefinition = function ListControlDefinition(handle) {
//         if (!(this instanceof adsk.core.ListControlDefinition)) {
//             return adsk.core.ListControlDefinition.cast(handle);
//         }
//         adsk.core.ControlDefinition.call(this, handle);
//     };
//     adsk.core.ListControlDefinition.prototype = Object.create(adsk.core.ControlDefinition.prototype);
//     adsk.core.ListControlDefinition.prototype.constructor = adsk.core.ListControlDefinition;
//     adsk.core.ListControlDefinition.interfaceId = 'adsk.core.ListControlDefinition';
//     adsk.objectTypes['adsk.core.ListControlDefinition'] = adsk.core.ListControlDefinition;
//     adsk.core.ListControlDefinition.cast = function (object) {
//         return object instanceof adsk.core.ListControlDefinition ? object : null;
//     };

//     // Gets the associated ListControlItems collection through which you can add and modify items in the list.
//     Object.defineProperty(adsk.core.ListControlDefinition.prototype, 'listItems', {
//         get : function () {
//             var result = this._execute('listItems');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItems) : null;
//         }
//     });

//     // Gets how this list control will be displayed; as a standard list, a list of check boxes, or a list of radio buttons.
//     Object.defineProperty(adsk.core.ListControlDefinition.prototype, 'listControlDisplayType', {
//         get : function () {
//             var result = this._execute('listControlDisplayType');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the item in the list that was last selected. This can return null
//     // in the case where this control is displayed as a list of check boxes and there hasn't
//     // been any interaction by the end-user. In the case of a list of check boxes, this returns
//     // the item that was last clicked by the user, whether it was to check or uncheck the item.
//     // In the case of a list of radio buttons, this always returns the item that is currently selected.
//     Object.defineProperty(adsk.core.ListControlDefinition.prototype, 'lastSelected', {
//         get : function () {
//             var result = this._execute('lastSelected');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//         }
//     });

//     //=========== RadioButtonGroupCommandInput ============
//     // Provides a command input to get the choice from a radio button group from the user.
//     adsk.core.RadioButtonGroupCommandInput = function RadioButtonGroupCommandInput(handle) {
//         if (!(this instanceof adsk.core.RadioButtonGroupCommandInput)) {
//             return adsk.core.RadioButtonGroupCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.RadioButtonGroupCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.RadioButtonGroupCommandInput.prototype.constructor = adsk.core.RadioButtonGroupCommandInput;
//     adsk.core.RadioButtonGroupCommandInput.interfaceId = 'adsk.core.RadioButtonGroupCommandInput';
//     adsk.objectTypes['adsk.core.RadioButtonGroupCommandInput'] = adsk.core.RadioButtonGroupCommandInput;
//     adsk.core.RadioButtonGroupCommandInput.cast = function (object) {
//         return object instanceof adsk.core.RadioButtonGroupCommandInput ? object : null;
//     };

//     // Returns the ListItems object associated with this radio button group. You use this
//     // object to populate and interact with the items in the radio button group.
//     Object.defineProperty(adsk.core.RadioButtonGroupCommandInput.prototype, 'listItems', {
//         get : function () {
//             var result = this._execute('listItems');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItems) : null;
//         }
//     });

//     // Gets and sets the item in the radio button list that is currently selected.
//     Object.defineProperty(adsk.core.RadioButtonGroupCommandInput.prototype, 'selectedItem', {
//         get : function () {
//             var result = this._execute('selectedItem');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.ListItem) : null;
//         }
//     });

//     //=========== SelectionCommandInput ============
//     // Provides a command input to get a selection from the user.
//     adsk.core.SelectionCommandInput = function SelectionCommandInput(handle) {
//         if (!(this instanceof adsk.core.SelectionCommandInput)) {
//             return adsk.core.SelectionCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.SelectionCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.SelectionCommandInput.prototype.constructor = adsk.core.SelectionCommandInput;
//     adsk.core.SelectionCommandInput.interfaceId = 'adsk.core.SelectionCommandInput';
//     adsk.objectTypes['adsk.core.SelectionCommandInput'] = adsk.core.SelectionCommandInput;
//     adsk.core.SelectionCommandInput.cast = function (object) {
//         return object instanceof adsk.core.SelectionCommandInput ? object : null;
//     };

//     adsk.core.SelectionCommandInput.Bodies = 'Bodies';
//     adsk.core.SelectionCommandInput.SolidBodies = 'SolidBodies';
//     adsk.core.SelectionCommandInput.SurfaceBodies = 'SurfaceBodies';
//     adsk.core.SelectionCommandInput.MeshBodies = 'MeshBodies';
//     adsk.core.SelectionCommandInput.Faces = 'Faces';
//     adsk.core.SelectionCommandInput.SolidFaces = 'SolidFaces';
//     adsk.core.SelectionCommandInput.SurfaceFaces = 'SurfaceFaces';
//     adsk.core.SelectionCommandInput.PlanarFaces = 'PlanarFaces';
//     adsk.core.SelectionCommandInput.CylindricalFaces = 'CylindricalFaces';
//     adsk.core.SelectionCommandInput.ConicalFaces = 'ConicalFaces';
//     adsk.core.SelectionCommandInput.SphericalFaces = 'SphericalFaces';
//     adsk.core.SelectionCommandInput.ToroidalFaces = 'ToroidalFaces';
//     adsk.core.SelectionCommandInput.SplineFaces = 'SplineFaces';
//     adsk.core.SelectionCommandInput.Edges = 'Edges';
//     adsk.core.SelectionCommandInput.LinearEdges = 'LinearEdges';
//     adsk.core.SelectionCommandInput.CircularEdges = 'CircularEdges';
//     adsk.core.SelectionCommandInput.EllipticalEdges = 'EllipticalEdges';
//     adsk.core.SelectionCommandInput.TangentEdges = 'TangentEdges';
//     adsk.core.SelectionCommandInput.NonTangentEdges = 'NonTangentEdges';
//     adsk.core.SelectionCommandInput.Vertices = 'Vertices';
//     adsk.core.SelectionCommandInput.RootComponents = 'RootComponents';
//     adsk.core.SelectionCommandInput.Occurrences = 'Occurrences';
//     adsk.core.SelectionCommandInput.Sketches = 'Sketches';
//     adsk.core.SelectionCommandInput.SketchCurves = 'SketchCurves';
//     adsk.core.SelectionCommandInput.SketchLines = 'SketchLines';
//     adsk.core.SelectionCommandInput.SketchCircles = 'SketchCircles';
//     adsk.core.SelectionCommandInput.SketchPoints = 'SketchPoints';
//     adsk.core.SelectionCommandInput.ConstructionPoints = 'ConstructionPoints';
//     adsk.core.SelectionCommandInput.ConstructionLines = 'ConstructionLines';
//     adsk.core.SelectionCommandInput.ConstructionPlanes = 'ConstructionPlanes';
//     adsk.core.SelectionCommandInput.Features = 'Features';
//     adsk.core.SelectionCommandInput.Canvases = 'Canvases';
//     adsk.core.SelectionCommandInput.Decals = 'Decals';
//     adsk.core.SelectionCommandInput.JointOrigins = 'JointOrigins';
//     adsk.core.SelectionCommandInput.Joints = 'Joints';
//     adsk.core.SelectionCommandInput.SketchConstraints = 'SketchConstraints';
//     adsk.core.SelectionCommandInput.Profiles = 'Profiles';
//     adsk.core.SelectionCommandInput.Texts = 'Texts';

//     // Gets or sets the tooltip shown next to the cursor.
//     Object.defineProperty(adsk.core.SelectionCommandInput.prototype, 'commandPrompt', {
//         get : function () {
//             var result = this._execute('commandPrompt');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('commandPrompt', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the list of selection filters. The valid list of selection filters can be found here: <a href="SelectionFilters_UM.htm">Selection Filters</a>.
//     Object.defineProperty(adsk.core.SelectionCommandInput.prototype, 'selectionFilters', {
//         get : function () {
//             var result = this._execute('selectionFilters');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
//             var valueLength = value.length;
//             var valueIt;
//             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
//                 if (value[valueIt] === undefined || value[valueIt] === null || value[valueIt].constructor !== String) { throw new TypeError('value[valueIt] must be a string'); }
//             }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('selectionFilters', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets the current number of selections the user has made for this input.
//     Object.defineProperty(adsk.core.SelectionCommandInput.prototype, 'selectionCount', {
//         get : function () {
//             var result = this._execute('selectionCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Adds an additional filter to the existing filter list.
//     // filter : The name of a selection filter to add. The valid list of selection filters can be found here: <a href="SelectionFilters_UM.htm">Selection Filters</a>.
//     // Returns true if the filter was added successfully.
//     adsk.core.SelectionCommandInput.prototype.addSelectionFilter = function (filter) {
//         if (filter === undefined || filter === null || filter.constructor !== String) { throw new TypeError('filter must be a string'); }
//         var args = {
//             filter : filter
//         };
//         var result = this._execute('addSelectionFilter', args);
//         return result ? result.value : undefined;
//     };

//     // Clears the list of selection filters.
//     // Returns true if successful.
//     adsk.core.SelectionCommandInput.prototype.clearSelectionFilter = function () {
//         var result = this._execute('clearSelectionFilter');
//         return result ? result.value : undefined;
//     };

//     // Returns the selection at the specified index.
//     // index : The index of the selection to return.
//     // Returns the Selection at the specified index, or null on error.
//     adsk.core.SelectionCommandInput.prototype.selection = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('selection', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.core.Selection) : null;
//     };

//     // Adds the selection to the list of selections associated with this input.
//     // selection : The entity to add a selection of to this input. The addition may fail if the entity
//     // does not match the selection filter, or adding it would exceed the limits.
//     // Returns true if a selection to the entity was added to this input.
//     adsk.core.SelectionCommandInput.prototype.addSelection = function (selection) {
//         if (selection !== null && !(selection instanceof adsk.core.Base)) { throw new TypeError('selection must be a adsk.core.Base'); }
//         var args = {
//             selection : (selection === null ? selection : selection.handle)
//         };
//         var result = this._execute('addSelection', args);
//         return result ? result.value : undefined;
//     };

//     // Get the limits currently defined for this input.
//     // minimum : The minimum number of selections required. A value of zero means that there is no minimum limit.
//     // maximum : The maximum number of selections required. A value of zero means that there is no maximum limit.
//     //
//     adsk.core.SelectionCommandInput.prototype.getSelectionLimits = function (minimum, maximum) {
//         if (typeof minimum !== 'object') { throw new TypeError('minimum must be an object'); }
//         if (typeof maximum !== 'object') { throw new TypeError('maximum must be an object'); }
//         var args = {
//             minimum : null,
//             maximum : null
//         };
//         var result = this._execute('getSelectionLimits', args);
//         if (result && result.outargs) {
//             minimum.value = (result.outargs.minimum !== undefined) ? result.outargs.minimum : undefined;
//             maximum.value = (result.outargs.maximum !== undefined) ? result.outargs.maximum : undefined;
//         }
//         return result ? result.value : undefined;
//     };

//     // Defines the limits for the number of selections associated with this input.
//     // A maximum value of 0 indicates that there is no maximum.
//     // minimum : The minimum number of selections required. A value of zero means that there is no minimum limit.
//     // maximum : The maximum number of selections required. A value of zero means that there is no maximum limit.
//     // If maximum is equal to minimim, then exactly that number of selections is required.
//     // Returns true if the limits were successfully set.
//     adsk.core.SelectionCommandInput.prototype.setSelectionLimits = function (minimum, maximum) {
//         if (!isFinite(minimum)) { throw new TypeError('minimum must be a number'); }
//         if (maximum === null || (maximum !== undefined && !isFinite(maximum))) { throw new TypeError('maximum must be a number'); }
//         var args = {
//             minimum : Number(minimum)
//         };
//         if (maximum !== undefined) {
//             args.maximum = Number(maximum);
//         }
//         var result = this._execute('setSelectionLimits', args);
//         return result ? result.value : undefined;
//     };

//     // Clears the current selection so no entities are in the selection.
//     // Returns true if successful.
//     adsk.core.SelectionCommandInput.prototype.clearSelection = function () {
//         var result = this._execute('clearSelection');
//         return result ? result.value : undefined;
//     };

//     //=========== SeparatorControl ============
//     // Represents a separator within a panel, toolbar, or drop-down control.
//     adsk.core.SeparatorControl = function SeparatorControl(handle) {
//         if (!(this instanceof adsk.core.SeparatorControl)) {
//             return adsk.core.SeparatorControl.cast(handle);
//         }
//         adsk.core.ToolbarControl.call(this, handle);
//     };
//     adsk.core.SeparatorControl.prototype = Object.create(adsk.core.ToolbarControl.prototype);
//     adsk.core.SeparatorControl.prototype.constructor = adsk.core.SeparatorControl;
//     adsk.core.SeparatorControl.interfaceId = 'adsk.core.SeparatorControl';
//     adsk.objectTypes['adsk.core.SeparatorControl'] = adsk.core.SeparatorControl;
//     adsk.core.SeparatorControl.cast = function (object) {
//         return object instanceof adsk.core.SeparatorControl ? object : null;
//     };

//     //=========== SliderCommandInput ============
//     // Provides a command input to get the value of a slider from the user.
//     adsk.core.SliderCommandInput = function SliderCommandInput(handle) {
//         if (!(this instanceof adsk.core.SliderCommandInput)) {
//             return adsk.core.SliderCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.SliderCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.SliderCommandInput.prototype.constructor = adsk.core.SliderCommandInput;
//     adsk.core.SliderCommandInput.interfaceId = 'adsk.core.SliderCommandInput';
//     adsk.objectTypes['adsk.core.SliderCommandInput'] = adsk.core.SliderCommandInput;
//     adsk.core.SliderCommandInput.cast = function (object) {
//         return object instanceof adsk.core.SliderCommandInput ? object : null;
//     };

//     // Uses an expression to set the value in the first input field. This can contain equations and
//     // is evaluated using the specified unit type.
//     Object.defineProperty(adsk.core.SliderCommandInput.prototype, 'expressionOne', {
//         get : function () {
//             var result = this._execute('expressionOne');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('expressionOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Uses an expression to set the value in the second input field. This can contain equations and
//     // is evaluated using the specified unit type.
//     // This property is only available when the hasTwoSliders property returns true.
//     Object.defineProperty(adsk.core.SliderCommandInput.prototype, 'expressionTwo', {
//         get : function () {
//             var result = this._execute('expressionTwo');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('expressionTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the unit type that is used when evaluating the user's input.
//     Object.defineProperty(adsk.core.SliderCommandInput.prototype, 'unitType', {
//         get : function () {
//             var result = this._execute('unitType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('unitType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if the command input has two sliders.
//     Object.defineProperty(adsk.core.SliderCommandInput.prototype, 'hasTwoSliders', {
//         get : function () {
//             var result = this._execute('hasTwoSliders');
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets the text of the slider. Both the left and the right text should be set.
//     // left : Indicates the text on the left side of the slider.
//     // right : Indicates the text on the right side of the slider.
//     // Returns true if successful.
//     adsk.core.SliderCommandInput.prototype.setText = function (left, right) {
//         if (left === undefined || left === null || left.constructor !== String) { throw new TypeError('left must be a string'); }
//         if (right === undefined || right === null || right.constructor !== String) { throw new TypeError('right must be a string'); }
//         var args = {
//             left : left,
//             right : right
//         };
//         var result = this._execute('setText', args);
//         return result ? result.value : undefined;
//     };

//     // Gets the texts of the slider if text has been defined.
//     // isLeft : Indicates to get the left or right text.
//     // Returns the left or right text of the slider.
//     adsk.core.SliderCommandInput.prototype.getText = function (isLeft) {
//         if (typeof isLeft !== 'boolean') { throw new TypeError('isLeft must be a boolean'); }
//         var args = {
//             isLeft : isLeft
//         };
//         var result = this._execute('getText', args);
//         return result ? result.value : undefined;
//     };

//     //=========== SplitButtonControl ============
//     // A split button has two active areas that the user can click;
//     // the main button portion and the drop-down arrow. Clicking the main button, executes the displayed command.
//     // Clicking the drop-down displays the drop-down with additional commands.
//     adsk.core.SplitButtonControl = function SplitButtonControl(handle) {
//         if (!(this instanceof adsk.core.SplitButtonControl)) {
//             return adsk.core.SplitButtonControl.cast(handle);
//         }
//         adsk.core.ToolbarControl.call(this, handle);
//     };
//     adsk.core.SplitButtonControl.prototype = Object.create(adsk.core.ToolbarControl.prototype);
//     adsk.core.SplitButtonControl.prototype.constructor = adsk.core.SplitButtonControl;
//     adsk.core.SplitButtonControl.interfaceId = 'adsk.core.SplitButtonControl';
//     adsk.objectTypes['adsk.core.SplitButtonControl'] = adsk.core.SplitButtonControl;
//     adsk.core.SplitButtonControl.cast = function (object) {
//         return object instanceof adsk.core.SplitButtonControl ? object : null;
//     };

//     // Gets the command definition that is used as the default command on the main portion of the split button.
//     Object.defineProperty(adsk.core.SplitButtonControl.prototype, 'defaultCommandDefinition', {
//         get : function () {
//             var result = this._execute('defaultCommandDefinition');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandDefinition) : null;
//         }
//     });

//     // Gets if this button behaves where the last executed command becomes the command on the main portion of the split button.
//     Object.defineProperty(adsk.core.SplitButtonControl.prototype, 'isLastUsedShown', {
//         get : function () {
//             var result = this._execute('isLastUsedShown');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the command definitions used to define the buttons associated with the split button.
//     Object.defineProperty(adsk.core.SplitButtonControl.prototype, 'additionalDefinitions', {
//         get : function () {
//             var result = this._execute('additionalDefinitions');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.CommandDefinition) : null;
//             }
//             return resultValue
//         },
//         set : function (value) {
//             if (!Array.isArray(value)) { throw new TypeError('value must be an array'); }
//             var valueLength = value.length;
//             var valueIt;
//             for (valueIt = 0; valueIt < valueLength; ++valueIt) {
//                 if (value[valueIt] !== null && !(value[valueIt] instanceof adsk.core.CommandDefinition)) { throw new TypeError('value[valueIt] must be a adsk.core.CommandDefinition'); }
//             }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('additionalDefinitions', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== StringValueCommandInput ============
//     // Provides a command input to get a string value from the user.
//     adsk.core.StringValueCommandInput = function StringValueCommandInput(handle) {
//         if (!(this instanceof adsk.core.StringValueCommandInput)) {
//             return adsk.core.StringValueCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.StringValueCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.StringValueCommandInput.prototype.constructor = adsk.core.StringValueCommandInput;
//     adsk.core.StringValueCommandInput.interfaceId = 'adsk.core.StringValueCommandInput';
//     adsk.objectTypes['adsk.core.StringValueCommandInput'] = adsk.core.StringValueCommandInput;
//     adsk.core.StringValueCommandInput.cast = function (object) {
//         return object instanceof adsk.core.StringValueCommandInput ? object : null;
//     };

//     // Gets or sets the value of this input.
//     Object.defineProperty(adsk.core.StringValueCommandInput.prototype, 'value', {
//         get : function () {
//             var result = this._execute('value');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('value', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets if this string input behaves as a password field.
//     // This defaults to false for a newly created StringValueCommandInput.
//     // If true, dots are displayed instead of the actual characters but
//     // the value property will get and set the actual string.
//     Object.defineProperty(adsk.core.StringValueCommandInput.prototype, 'isPassword', {
//         get : function () {
//             var result = this._execute('isPassword');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isPassword', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== TabCommandInput ============
//     // Tab command inputs contain a set of command inputs and/or group command inputs/
//     adsk.core.TabCommandInput = function TabCommandInput(handle) {
//         if (!(this instanceof adsk.core.TabCommandInput)) {
//             return adsk.core.TabCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.TabCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.TabCommandInput.prototype.constructor = adsk.core.TabCommandInput;
//     adsk.core.TabCommandInput.interfaceId = 'adsk.core.TabCommandInput';
//     adsk.objectTypes['adsk.core.TabCommandInput'] = adsk.core.TabCommandInput;
//     adsk.core.TabCommandInput.cast = function (object) {
//         return object instanceof adsk.core.TabCommandInput ? object : null;
//     };

//     // Gets the CommandInputs collection for this TabCommandInput.
//     // Use the add methods on this collection to add child CommandInputs to this Tab in the desired order.
//     Object.defineProperty(adsk.core.TabCommandInput.prototype, 'children', {
//         get : function () {
//             var result = this._execute('children');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.CommandInputs) : null;
//         }
//     });

//     // Gets the folder that contains the image for the tab. If no name is specified (no text on tab),
//     // a resourceFolder containing the image to appear on the tab needs to be provided.
//     Object.defineProperty(adsk.core.TabCommandInput.prototype, 'resourceFolder', {
//         get : function () {
//             var result = this._execute('resourceFolder');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets if this is the currently activated (selected) tab.
//     Object.defineProperty(adsk.core.TabCommandInput.prototype, 'isActive', {
//         get : function () {
//             var result = this._execute('isActive');
//             return result ? result.value : undefined;
//         }
//     });

//     // Sets this to be the currently activated (selected) tab.
//     adsk.core.TabCommandInput.prototype.activate = function () {
//         var result = this._execute('activate');
//         return result ? result.value : undefined;
//     };

//     //=========== TextBoxCommandInput ============
//     // Provides a command input to interact with a text box.
//     adsk.core.TextBoxCommandInput = function TextBoxCommandInput(handle) {
//         if (!(this instanceof adsk.core.TextBoxCommandInput)) {
//             return adsk.core.TextBoxCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.TextBoxCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.TextBoxCommandInput.prototype.constructor = adsk.core.TextBoxCommandInput;
//     adsk.core.TextBoxCommandInput.interfaceId = 'adsk.core.TextBoxCommandInput';
//     adsk.objectTypes['adsk.core.TextBoxCommandInput'] = adsk.core.TextBoxCommandInput;
//     adsk.core.TextBoxCommandInput.cast = function (object) {
//         return object instanceof adsk.core.TextBoxCommandInput ? object : null;
//     };

//     // Gets and sets the formatted text displayed in the dialog. Formatted text includes
//     // any html formatting that has been defined. For example, you can use basic html formatting such as
//     // <b>Bold</b>, <i>Italic</i>, and <br /> for a line break.
//     Object.defineProperty(adsk.core.TextBoxCommandInput.prototype, 'formattedText', {
//         get : function () {
//             var result = this._execute('formattedText');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('formattedText', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the text in the text box. This returns the string
//     // as seen in the text box with any formatting stripped out.
//     Object.defineProperty(adsk.core.TextBoxCommandInput.prototype, 'text', {
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

//     // Gets and sets the height of the text box as defined by the number of rows of
//     // text that can be displayed. If the text is larger than will fit in the box
//     // a scroll bar will automatically be displayed.
//     Object.defineProperty(adsk.core.TextBoxCommandInput.prototype, 'numRows', {
//         get : function () {
//             var result = this._execute('numRows');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('numRows', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets if the text box is read-only or not. If it is read-only the user
//     // cannot edit the text.
//     Object.defineProperty(adsk.core.TextBoxCommandInput.prototype, 'isReadOnly', {
//         get : function () {
//             var result = this._execute('isReadOnly');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (typeof value !== 'boolean') { throw new TypeError('value must be a boolean'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('isReadOnly', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== ValueCommandInput ============
//     // Provides a command input to get a unit based value from the user.
//     adsk.core.ValueCommandInput = function ValueCommandInput(handle) {
//         if (!(this instanceof adsk.core.ValueCommandInput)) {
//             return adsk.core.ValueCommandInput.cast(handle);
//         }
//         adsk.core.CommandInput.call(this, handle);
//     };
//     adsk.core.ValueCommandInput.prototype = Object.create(adsk.core.CommandInput.prototype);
//     adsk.core.ValueCommandInput.prototype.constructor = adsk.core.ValueCommandInput;
//     adsk.core.ValueCommandInput.interfaceId = 'adsk.core.ValueCommandInput';
//     adsk.objectTypes['adsk.core.ValueCommandInput'] = adsk.core.ValueCommandInput;
//     adsk.core.ValueCommandInput.cast = function (object) {
//         return object instanceof adsk.core.ValueCommandInput ? object : null;
//     };

//     // Gets or sets the value associated with this input. The value is always in
//     // the database units of the unit type specified. For example, if the unit type is "inch"
//     // this value is in centimeters since centimeters are the database length unit. When setting the
//     // value it is converted into a string using the unit type and displayed in the input box.
//     // When getting the value, the current expression string is evaluated and the database value
//     // for the unit type is returned.
//     Object.defineProperty(adsk.core.ValueCommandInput.prototype, 'value', {
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

//     // Gets or sets the expression displayed in the input field. This can contain equations and
//     // references to parameters. It is evaluated using the specified unit type.
//     Object.defineProperty(adsk.core.ValueCommandInput.prototype, 'expression', {
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

//     // Gets and sets the unit type that is used when evaluating the user's input.
//     Object.defineProperty(adsk.core.ValueCommandInput.prototype, 'unitType', {
//         get : function () {
//             var result = this._execute('unitType');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (value === undefined || value === null || value.constructor !== String) { throw new TypeError('value must be a string'); }
//             var args = {
//                 value : value
//             };
//             var result = this._execute('unitType', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== FloatSliderCommandInput ============
//     // Provides a command input to get the value of a slider from the user, the value type is float.
//     adsk.core.FloatSliderCommandInput = function FloatSliderCommandInput(handle) {
//         if (!(this instanceof adsk.core.FloatSliderCommandInput)) {
//             return adsk.core.FloatSliderCommandInput.cast(handle);
//         }
//         adsk.core.SliderCommandInput.call(this, handle);
//     };
//     adsk.core.FloatSliderCommandInput.prototype = Object.create(adsk.core.SliderCommandInput.prototype);
//     adsk.core.FloatSliderCommandInput.prototype.constructor = adsk.core.FloatSliderCommandInput;
//     adsk.core.FloatSliderCommandInput.interfaceId = 'adsk.core.FloatSliderCommandInput';
//     adsk.objectTypes['adsk.core.FloatSliderCommandInput'] = adsk.core.FloatSliderCommandInput;
//     adsk.core.FloatSliderCommandInput.cast = function (object) {
//         return object instanceof adsk.core.FloatSliderCommandInput ? object : null;
//     };

//     // Gets or sets the first value associated with this input. The value is always in
//     // the database units of the unit type specified. For example, if the unit type is "inch"
//     // this value is in centimeters since centimeters are the database length unit. When setting the
//     // value it is converted into a string using the unit type and displayed in the input box.
//     Object.defineProperty(adsk.core.FloatSliderCommandInput.prototype, 'valueOne', {
//         get : function () {
//             var result = this._execute('valueOne');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('valueOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets or sets the second value associated with this input. The value is always in
//     // the database units of the unit type specified. For example, if the unit type is "inch"
//     // this value is in centimeters since centimeters are the database length unit. When setting the
//     // value it is converted into a string using the unit type and displayed in the input box.
//     // This property is only available when the hasTwoSliders property returns true.
//     Object.defineProperty(adsk.core.FloatSliderCommandInput.prototype, 'valueTwo', {
//         get : function () {
//             var result = this._execute('valueTwo');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('valueTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets minimum value of the slider in database units.
//     // Gets a failure when set if the value of this command input was added by value list.
//     Object.defineProperty(adsk.core.FloatSliderCommandInput.prototype, 'minimumValue', {
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

//     // Gets and sets maximum value of the slider in database units.
//     // Gets a failure when set if the value of this command input was added by value list.
//     Object.defineProperty(adsk.core.FloatSliderCommandInput.prototype, 'maximumValue', {
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

//     // Gets the value list of the slider. This property is valid when this input represents a list type of slider command input.
//     // Otherwise an empty list will be returned.
//     Object.defineProperty(adsk.core.FloatSliderCommandInput.prototype, 'valueList', {
//         get : function () {
//             var result = this._execute('valueList');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the spin step value in the unit type set by the unitType argument.
//     // The value should be more than zero. This is the amount the slider will advance
//     // when the user clicks the spin button beside the value.
//     Object.defineProperty(adsk.core.FloatSliderCommandInput.prototype, 'spinStep', {
//         get : function () {
//             var result = this._execute('spinStep');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('spinStep', args);
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== IntegerSliderCommandInput ============
//     // Provides a command input to get the value of a slider from the user, the value type is integer.
//     adsk.core.IntegerSliderCommandInput = function IntegerSliderCommandInput(handle) {
//         if (!(this instanceof adsk.core.IntegerSliderCommandInput)) {
//             return adsk.core.IntegerSliderCommandInput.cast(handle);
//         }
//         adsk.core.SliderCommandInput.call(this, handle);
//     };
//     adsk.core.IntegerSliderCommandInput.prototype = Object.create(adsk.core.SliderCommandInput.prototype);
//     adsk.core.IntegerSliderCommandInput.prototype.constructor = adsk.core.IntegerSliderCommandInput;
//     adsk.core.IntegerSliderCommandInput.interfaceId = 'adsk.core.IntegerSliderCommandInput';
//     adsk.objectTypes['adsk.core.IntegerSliderCommandInput'] = adsk.core.IntegerSliderCommandInput;
//     adsk.core.IntegerSliderCommandInput.cast = function (object) {
//         return object instanceof adsk.core.IntegerSliderCommandInput ? object : null;
//     };

//     // Gets or sets the value associated with the first slider.
//     Object.defineProperty(adsk.core.IntegerSliderCommandInput.prototype, 'valueOne', {
//         get : function () {
//             var result = this._execute('valueOne');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('valueOne', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // If the hasTwoSliders property is true, this returns the value associated with
//     // the second slider.
//     Object.defineProperty(adsk.core.IntegerSliderCommandInput.prototype, 'valueTwo', {
//         get : function () {
//             var result = this._execute('valueTwo');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('valueTwo', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets minimum value of the slider. This will fail if there is a value list because the
//     // minimum and maximum values are defined by the value list.
//     Object.defineProperty(adsk.core.IntegerSliderCommandInput.prototype, 'minimumValue', {
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

//     // Gets and sets maximum value of the slider. This will fail if there is a value list because the
//     // minimum and maximum values are defined by the value list.
//     Object.defineProperty(adsk.core.IntegerSliderCommandInput.prototype, 'maximumValue', {
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

//     // Gets the value list of the slider. The list is empty if this command input was not added by value list.
//     Object.defineProperty(adsk.core.IntegerSliderCommandInput.prototype, 'valueList', {
//         get : function () {
//             var result = this._execute('valueList');
//             return result ? result.value : undefined;
//         }
//     });

//     // Gets and sets the spin step. This defines the amount the slider moves when the user clicks the spin
//     // button beside the value. The spin step should be more than zero.
//     Object.defineProperty(adsk.core.IntegerSliderCommandInput.prototype, 'spinStep', {
//         get : function () {
//             var result = this._execute('spinStep');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('spinStep', args);
//             return result ? result.value : undefined;
//         }
//     });

//     return adsk;
// }));