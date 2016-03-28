/// <reference path="dashboard.d.ts"/>
/// <reference path="materials.d.ts"/>
/// <reference path="userInterface.d.ts"/>

interface Base {
    interfaceId: string;
    equals(object: Object): boolean;
    objectType;
    isValid: boolean;
    _execute(method: string, methodArguments: string);
    _executeStatic(interfaceName: string, method: string, methodArguments: string);
    onErrorThrow(error);
    onError();
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

    // Returns the set of favorite appearances.
    favoriteAppearances: FavoriteAppearances;

    // Returns an array containing the names of the products types currently
    // supported by Fusion. For example, the name returned for Fusion is
    // "DesignProductType". These product type names are used to identify
    // specific products in some other API functions such as the productType
    // property on the Workspace and ToolbarPanel objects.
    supportedProductTypes; // return type?

    // Returns the ImportManager. You use the ImportManager
    // to import files (of various neutral formats.) into existing components or new document.
    importManager: ImportManager;

    // Returns the user name of the Autodesk account currently logged in.
    userName: string;

    // Returns the internal name of the Autodesk account currently logged in.
    // This can be used by applications sold through the Autodesk Exchange Store
    // to verify that the user has in fact purchased the product.
    userId: string;

    // Gets and sets if Fusion is offline or not.
    isOffLine: boolean;

    // Boolean property indicating whether Fusion has completed its initialization.
    // This includes initialization of all the Add-ins loaded at startup.
    isStartupComplete: boolean;

    // Returns the User that is currently logged in.
    currentUser: User;

    // Access to the root Application object.
    // Return the root Application object or null if it failed.
    get(): Application;

    /**
     * Returns information about the last error that occurred.
     * @param {Object} description - A description of the last error in English.
     * @returns {Number} Returns the number of the specific error.
     */
    getLastError(description: Object): Number;
}

/**
 * The Camera class represents the information that specifies how a model
 * is viewed and displayed. It's analogous to a real camera where it has
 * a position in space, is pointed towards a specific point and is oriented
 * in a particular way.
 */
interface Camera {
    cast(object: Object): Camera;

    // Gets and sets the position of the eye in world space.
    eye: Point3D;

    // Gets and sets the camera target point in world space.
    target: Point3D;

    // Gets and sets the current camera type.
    cameraType: number;

    // Gets and sets the perspective angle of the camera. This
    // property is only valid when the CameraType property is
    // either Perspective or PerspectiveWithOrthoFaces.
    perspectiveAngle: number;

    // Defines the "up" direction for the camera which controls the orientation of the camera around the line
    // defined between the eye and target points.
    upVector: Vector3D

    // Defines the area that's visible by the camera. This
    // value is the radius of a sphere centered at the target point.
    // The camera will display everything within that sphere and
    // everything in front of and behind the sphere. Additional
    // geometry outside of the sphere will also be visible depending
    // on the shape of the window. Setting this
    // value can cause the eye and/or perspective angle to be
    // modified when the camera type is perspective.
    viewExtents: number;

    // If this property is true, when this camera is applied to a viewport it
    // will modify the camera such that the entire model is displayed in the viewport.
    // When getting a camera from a viewport this property is always initialized to false.
    isFitView: boolean;

    // Determines whether Fusion does a smooth transition to this camera positoin when the
    // camera is assigned to a ViewPort. If this is true it will do a smooth transition from
    // the current camera position to the new camera position. If false, the view will jump
    // to the position defined by the camera with no intermediate steps. This is useful if
    // you're providing a series of cameras to control the camera animation.
    isSmoothTransition: boolean;

    // Sets the camera to a standard orientation. If this is set,
    // it will result in resetting all of the camera values except
    // the camera type.
    viewOrientation: number;
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
    cast(object: Object): Color;

    // Gets and sets the red component of the color. The value can be 0 to 255.
    red: number;

    // Gets and sets the green component of the color. The value can be 0 to 255.
    green: number;

    // Gets and sets the blue component of the color. The value can be 0 to 255.
    blue: number;

    // Gets and sets the opacity of the color. The value can be 0 to 255.
    opacity: number;

    // Gets all of the information defining this color.
    // red : The red component of the color. The value can be 0 to 255.
    // green : The green component of the color. The value can be 0 to 255.
    // blue : The blue component of the color. The value can be 0 to 255.
    // opacity : The opacity of the color. The value can be 0 to 255.
    // Returns true if getting the color information was successful.
    getColor(red: Object, green: Object, blue: Object, opacity: Object);

    // Sets all of the color information.
    // red : The red component of the color. The value can be 0 to 255.
    // green : The green component of the color. The value can be 0 to 255.
    // blue : The blue component of the color. The value can be 0 to 255.
    // opacity : The opacity of the color. The value can be 0 to 255.
    // Returns true if setting the color information was successful.
    setColor(red: number, green: number, blue: number, opacity: number);

    // Creates a new color.
    // red : The red component of the color. The value can be 0 to 255.
    // green : The green component of the color. The value can be 0 to 255.
    // blue : The blue component of the color. The value can be 0 to 255.
    // opacity : The opacity of the color. The value can be 0 to 255.
    // Returns the newly created color or null if the creation failed.
    create(red: number, green: number, blue: number, opacity: number);
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

//=========== DefaultUnitsPreferences ============
// The base class for the default units preference. There is a derived class
// supported by each product where the specific preference values are exposed.
interface DefaultUnitsPreferences {
    cast(object: Object): DefaultUnitsPreferences;
}

//=========== DefaultUnitsPreferencesCollection ============
// A collection that provides access to product specific unit preference objects.
interface DefaultUnitsPreferencesCollection {
    cast(object: Object): DefaultUnitsPreferencesCollection;

    // Returns the number of DefaultUnitsPreference objects.
    count: number;

    // Function that returns the specified DefaultUnitPreferences object using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): DefaultUnitsPreferences;

    // Returns the DefaultUnitsPreference object with the specified name.
    // name : The name of the DefaultUnitsPreference to return.
    // Returns the DefaultUnitsPreference object or null if if an invalid name was specified.
    itemByName(name: string): DefaultUnitsPreferences;
}

//=========== DegradedSelectionDisplayStyles ============
// A list of the valid degraded display styles.
declare enum DegradedSelectionDisplayStyles {
    NormalWithGlowDegradedSelectionStyle = 0,
    SimpleWithoutGlowDegradedSelectionStyle = 1
}

//=========== DegreeDisplayFormats ============
// List of the valid degree display formats.
declare enum DegreeDisplayFormats {
    DecimalDegreeDisplay = 0,
    MinutesAndSecondsDegreeDisplay = 1
}

//=========== Document ============
// Object that represents an open document. This is the base class for all document types.
interface Document {
    cast(object: Object): Document;

    // Gets and sets the name of the document.
    name: string;

    // Property that indicates if the document has been modified since it was last saved.
    isModified: boolean;

    // Property that indicates if this document has been saved or not. The initial save of
    // a document requires that the name and location be specified and requires the saveAs method
    // to be used. If the document has been saved then the save method can be used to save changes made.
    isSaved: boolean;

    // Returns the parent Application object.
    parent: Application;

    // Returns the products associated with this document.
    products: Products;

    // Gets if this document is the active document in the user interface.
    isActive: boolean;

    // Causes this document to become the active document in the user interface.
    // Returns true if the activation was successful.
    activate();

    // Closes this document.
    // saveChanges : This argument defines what the behavior of the close is when the document
    // has been modified. If the document hasn't been modified then this argument
    // is ignored and the document is closed. If the document has been modified
    // and this argument is false then Fusion will close the document and lose
    // any changes. If the document has been modified and this argument is true then
    // it will prompt the user if they want to save the changes or not, just the same
    // as if the user was to interactively close the document.
    // Returns true if closing the document was successful.
    close(saveChanges: boolean);

    // Saves a version of the current document. You must use the SaveAs method the first
    // time a document is saved. You can determine if a document has been saved by checking
    // the value of the isSaved property.
    // description : The version description for this document
    // Returns true if saving the document was successful.
    save(description: string);

    // Performs a Save As on this document. This saves the currently open document to the specified
    // location and this document becomes the saved document. If this is a new document that has
    // never been saved you must use the SaveAs method in order to specify the location and name. You
    // can determine if the document has been saved by checking the value of the isSaved property.
    // name : The name to use for this document. If this is an empty string, Fusion will use the default name
    // assigned when the document was created.
    // dataFolder : The data folder to save this document to.
    // description : The description string of the document. This can be an empty string.
    // tag : The tag string of the document. This can be an empty string.
    // Returns true if the save as was successful.
    saveAs(name: string, dataFolder: DataFolder, description: string, tag: string);
}

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

    // Opens an item that has previously been saved.
    // dataFile : The item to open.
    // visible : Specifies if the document should be opened visibly or not.
    // Returns the open document or null if the open failed.
    open(dataFile: DataFile, visible: boolean): Document;
}

//=========== DocumentTypes ============
// The types of documents that can be created.
declare enum DocumentTypes {
    FusionDesignDocumentType = 0
}

//=========== Event ============
// Objects can have several Event properties that fire when
// some 'event' occurs. Clients can attach EventHandlers
// to one or more Events and they get notified when the 'event' occurs.
// This is a base class - classes like DocumentEvent add type safety
// (i.e. only allow the correct type of handler to be added to them).
interface Event {
    cast(object: Object): Event;

    // The name of the event - e.g. "DocumentOpening"
    name: string;

    // The object that is firing the event. For example, in the case of a command
    // input event this will return the command.
    sender: Base;

    eventid;

    add(handler, argType: string);

    remove(handler);

    fire(eventid, argsHandle);
}

//=========== EventArgs ============
// When an event handler is called, it is passed
// an EventArgs object that describes the 'event'.
// This is a base class - classes like DocumentEventArgs add more information on
// the 'event'.
interface EventArgs {
    cast(object: Object): EventArgs;

    // The event that the firing is in response to.
    firingEvent: Event;
}

//=========== FootAndInchDisplayFormats ============
// List of the valid foot and inch formats.
declare enum FootAndInchDisplayFormats {
    DecimalFootAndInchDisplay = 0,
    FractionalFootAndInchDisplay = 1,
    ArchitecturalFootAndInchDisplay = 2
}

//=========== GeneralPreferences ============
// Provides access to the general preferences.
interface GeneralPreferences {
    cast(object: Object): GeneralPreferences;

    // Gets and sets the current language. Setting the language does not
    // take effect until the next time Fusion is started.
    userLanguage: number;

    // Gets and sets the length of time, in days, that the offline cache of a document will remain.
    offlineCachePeriod: number;

    // Gets and sets the graphics driver used to display the graphics.
    graphicsDriver: number;

    // Gets and sets if the file is automatically saved on close.
    isAutomaticSaveOnCloseEnabled: boolean;

    // Gets and sets if a version of the file is automatically saved using a background thread.
    isAutomaticVersioningEnabled: boolean;

    // Gets and sets the interval, in minutes, for automatic versioning.
    automateVersioningTimeInterval: number;

    // Gets and sets the default for which direction is considered "up".
    defaultModelingOrientation: number;

    // Gets and sets if tooltips are shown.
    areTooltipsShown: boolean;

    // Gets and sets if the command prompt is shown.
    isCommandPromptShown: boolean;

    // Gets and sets if in command tips and tricks are shown.
    areTipsAndTricksShown: boolean;

    // Gets and sets if in command errors and warnings are shown.
    areInCommandErrorsAndWarningsShown: boolean;

    // Gets and sets if Autodesk 360 notifications are shown.
    areAutodesk360NotificationsShown: boolean;

    // Gets and sets if gesture based view navigation is used.
    isGestureBasedViewNavigationUsed: boolean;

    // Gets and sets if the direction of the zoom is reversed.
    isZoomDirectionReversed: boolean;

    // Gets and sets if zoom and orbit commands use camera pivot point for transition.
    isCameraPivotEnabled: boolean;

    // Get and sets the type of orbit.
    defaultOrbit: number;
}

//=========== GenericErrors ============
// Errors that every API call can return via Application::GetLastError.
// These can be augmented with class and function specific errors.
declare enum GenericErrors {
    Ok = 0,
    UnexpectedError = 1,
    InternalValidationError = 2,
    BadApiCallError = 3,
    UnderlyingObjectDeletedError = 4,
    OperationFailed = 5,
    ExpressionError = 6,
    InvalidGeometryError = 7,
    ClassSpecificError = 100,
    FunctionSpecificError = 200
}

//=========== GraphicsDrivers ============
// A list of the valid graphics drivers.
declare enum GraphicsDrivers {
    DirectX9GraphicsDriver = 0,
    DirectX11GraphicsDriver = 1,
    AutoSelectGraphicsDriver = 2,
    OpenGLCoreProfileGraphicsDriver = 3,
    OpenGLGraphicsDriver = 4
}

//=========== GraphicsPreferences ============
// The GraphicsPreferences object provides access to the various graphics related preferences.
interface GraphicsPreferences {
    cast(object: Object): GraphicsPreferences;

    // Gets and sets the minimum frames per second.
    minimumFramesPerSecond: number;

    // Gets and sets the style of display to use for selections.
    selectionDisplayStyle: number;

    // Gets and sets the style of display for degraded selections.
    degradedSelectionDisplayStyle: number;

    // Gets and sets the style of display for transparency effects.
    transparencyEffects: number;

    // Gets and sets if automatically disable or degrade visual effects to keep the video memory pressure under a safe threshold.
    autoThrottleEffects: boolean;

    // Gets and sets the dimming percentage to use for hidden edges.
    // the value is a percentage expressed by a value between 0 and 100.
    hiddenEdgeDimming: number;
}

//=========== GridPreferences ============
// The GridPreferences object provides access to grid related preferences.
interface GridPreferences {
    cast(object: Object): GridPreferences;
}

//=========== ImportManager ============
interface ImportManager {
    cast(object: Object): ImportManager;

    // Creates an IGESImportOptions object that is used to import a design from IGES format. Creation
    // of the IGESImportOptions object does not perform the import. You must pass this object to one of the
    // ImportManager import methods to perform the import. The IGESImportOptions supports any available
    // options when importing from IGES format.
    // filename : The filename or url of the IGES file to be imported.
    // The created IGESImportOptions object or null if the creation failed.
    createIGESImportOptions(filename: string): IGESImportOptions;

    // Creates an STEPImportOptions object that's used to import a design from STEP format. Creation
    // of the STEPImportOptions object does not perform the import. You must pass this object to one of the
    // ImportManager import methods to perform the import. The STEPImportOptions supports any available
    // options when importing from STEP format.
    // filename : The filename or url of the STEP file to be imported.
    // The created STEPImportOptions object or null if the creation failed.
    createSTEPImportOptions(filename: string): STEPImportOptions;

    // Creates an SATImportOptions object that's used to import a design from SAT format. Creation
    // of the SATImportOptions object does not perform the import. You must pass this object to one of the
    // ImportManager import methods to perform the import. The SATImportOptions supports any available
    // options when importing from SAT format.
    // filename : The filename or url of the SAT file to be imported.
    // The created SATImportOptions object or null if the creation failed.
    createSATImportOptions(filename: string): SATImportOptions;

    // Creates an SMTImportOptions object that's used to import a design from SMT format. Creation
    // of the SMTImportOptions object does not perform the import. You must pass this object to one of the
    // ImportManager import methods to perform the import. The SMTImportOptions supports any available
    // options when importing from SMT format.
    // filename : The filename or url of the SMT file to be imported.
    // The created SMTImportOptions object or null if the creation failed.
    createSMTImportOptions(filename: string): SMTImportOptions;

    // Creates an FusionArchiveImportOptions object that is used to import a design from a Fusion archive format. Creation
    // of the FusionArchiveImportOptions object does not perform the import. You must pass this object to one of the
    // ImportManager import methods to perform the import. The FusionArchiveImportOptions supports any available
    // options when importing from Fusion archive format.
    // filename : The filename or url of the Fusion archive file to be imported.
    // .f3z files and .f3d files containing externally referenced designs are currently not supported.
    // The created FusionArchiveImportOptions object or null if the creation failed.
    createFusionArchiveImportOptions(filename: string): FusionArchiveImportOptions;

    // Executes the import operation to import a file (of the format specified by the input ImportOptions object)
    // to a new document.
    // ***This method does not currently support the DXF2DImportOptions ImportOptions object.***
    // importOptions : An ImportOptions object that is created using one of the create methods on the ImportManager object. This
    // defines the type of file and any available options supported for that file type.
    // Returns the newly created Document object or null if the creation failed.
    // A new unnamed, unsaved document will be opened in Fusion as a result.
    importToNewDocument(importOptions: ImportOptions): Document;

    // Executes the import operation to import a file (of the format specified by the input ImportOptions object)
    // into an existing component in an existing design.
    // importOptions : An ImportOptions object that is created using one of the create methods on the ImportManager object. This
    // defines the type of file and any available options supported for that file type.
    // Supplying a DXF2DImportOptions object will result in the creation of one or more sketches
    // (depending on the layers in the DXF file) in the target component.
    // target : Currently supports importing to a Fusion Component.
    // Returns true if the import was successful.
    importToTarget(importOptions: ImportOptions, target: Base);

    // Creates a DXF2DImportOptions object that is used to import 2D data to create sketches. Creation
    // of the createDXF2DImportOptions object does not perform the import. You must pass this object to the
    // ImportManager.importToTarget method to perform the import. The sketches created as a result of
    // the import are available through the 'results' property of the DXF2DImportOptions.
    // filename : The filename of the DXF file to be imported.
    // planarEntity : The construction plane or planar face that defines the plane that the resulting sketches will
    // be created on.
    // The created DXF2DImportOptions object or null if the creation failed.
    createDXF2DImportOptions(filename: string, planarEntity: Base): DXF2DImportOptions;
}

//=========== ImportOptions ============
// The base class for the different import types. This class is never directly used
// in an import because you need the specific import type to specify the type of
// import to be performed.
interface ImportOptions {
    cast(object: Object): ImportOptions;
}

//=========== MaterialDisplayUnits ============
// List of the different types of material related units supported for displaying values.
declare enum MaterialDisplayUnits {
    MetricStandardDisplayUnits = 0,
    MetricMKSDisplayUnits = 1,
    MetricMMNSDisplayUnits = 2,
    MetricCGSDisplayUnits = 3,
    MetricUMNSDisplayUnits = 4,
    EnglishStandardDisplayUnits = 5,
    EnglishInchDisplayUnits = 6,
    EnglishFootDisplayUnits = 7
}

//=========== MaterialPreferences ============
// Provides access to the material related preferences.
interface MaterialPreferences {
    cast(object: Object): MaterialPreferences;

    // Gets and sets the default material.
    defaultMaterial: Material;

    // Gets and sets an appearance override.
    // This property return null indicating that there is no override, or be set to null to remove
    // the current appearance override.
    appearanceOverride: Appearance;
}

//=========== NamedValues ============
// Wraps a list of named values.
interface NamedValues {
    cast(object: Object): NamedValues;

    // Returns the number of name value pairs in this object.
    count: number;

    // Creates a transient NamedValues object.
    create(): NamedValues;

    // Adds a name value pair to the NamedValues object
    // name : A name for the name value pair
    // value : A ValueInput object that defines the value of the name value pair
    // Returns true if the name value pair is added successfully.
    add(name: string, value: ValueInput): boolean;

    // Function that returns the name and ValueInput object of a name value pair
    // by specifying an index number
    // index : The index of the name value pair to return. The first pair in the collection
    // has an index of 0.
    // name : The name
    // value : The ValueInput object
    // Returns true if successful
    getByIndex(index: number, name: string, value: ValueInput): boolean;

    // Function that returns the ValueInput object of a name value pair
    // by specifying its name
    // name : The name of the name value pair to return the ValueInput object from
    // value : The ValueInput object
    // Returns true if successful
    getValueByName(name: string, value: ValueInput): boolean;
}

//=========== NetworkPreferences ============
// The NetworkPreferences object provides access to network related preferences.
interface NetworkPreferences {
    case(object: Object): NetworkPreferences;

    // Gets and sets the network proxy setting.
    networkProxySetting: number;

    // Gets and sets the proxy host.
    proxyHost: string;

    // Gets and sets the proxy host.
    proxyPort: number;
}

//=========== NetworkProxySettings ============
// A list of the valid network proxy settings.
declare enum NetworkProxySettings {
    AutomaticProxySettings = 0,
    NoProxyProxySettings = 1,
    WindowsDefaultProxySettings = 2,
    OverrideProxySettings = 3
}

//=========== ObjectCollection ============
// Generic collection used to handle lists of any object type.
interface ObjectCollection {
    cast(object: Object): ObjectCollection;

    // Returns the number of occurrences in the collection.
    count: number;

    // Function that returns the specified object using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): Base;

    // Adds an object to the end of the collection.
    // Duplicates can be added to the collection.
    // item : The item to add to the list.
    // Returns false if the item was not added.
    add(item: Base): boolean;

    // Function that removes an item from the collection.
    // item : The object to remove from the collection.
    // Returns true if the removal was successful.
    removeByItem(item: Base): boolean;

    // Function that removes an item from the list.
    // Will fail if the list is read only.
    // index : The index of the item to remove from the collection. The first item has an index of 0.
    // Returns true if the removal was successful.
    removeByIndex(index: number): boolean;

    // Finds the specified component in the collection.
    // item : The item to search for within the collection.
    // startIndex : The index to begin the search.
    // Returns the index of the found item. If not found, -1 is returned.
    find(item: Base, startIndex: number): number;

    // Returns whether the specified object exists within the collection.
    // item : The item to look for in the collection.
    // Returns true if the specified item is found in the collection.
    contains(item: Base): boolean;

    // Clears the entire contents of the collection.
    // Returns true if successful.
    clear(): boolean;

    // Creates a new ObjectCollection object.
    // Returns the newly created ObjectCollection.
    create(): ObjectCollection;
}

//=========== OpenDocumentError ============
// The possible errors when a document is opened.
declare enum OpenDocumentError {
    DocumentNotFoundError = 200
}

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

    // Gets the GridPreferences object.
    gridPreferences: GridPreferences;

    // Gets the ProductUsageData object.
    productUsageData: ProductUsageData;
}

//=========== Product ============
// The base class for the various product specific containers. For
// Fusion this is the Design object. For CAM this is Toolpath object.
interface Product {
    cast(object: Object): Product;

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

    // Function that returns the specified product using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): Product;

    // Returns the specified product, if it exists within this document.
    // productType : The product type string. For example, to get the product that represents the design data
    // you use "DesignProductType" or to get the product that represent the CAM data you use "CAMProductType".
    // A complete list of available products can be obtained by using the Application.supportedProductTypes property.
    // Returns the specified item or null if the specified productType does not exist within this document.
    itemByProductType(productType: string): Product;
}

//=========== ProductUsageData ============
// Provides access to the product usage data settings.
interface ProductUsageData {
    cast(object: Object): ProductUsageData;

    // Gets and sets if tracking to improve the software is enabled.
    isTrackingToImproveSoftwareEnabled: boolean;

    // Gets and sets if tracking to improve communication is enabled.
    isTrackingToImproveCommunicationEnabled;
}

//=========== SaveLocalErrors ============
// List of possible errors when saving a document locally.
declare enum SaveLocalErrors {
    SaveCancelledSaveLocalError = 200,
    DiskFullSaveLocalError = 201,
    FileReadOnlySaveLocalError = 202
}

//=========== SelectionDisplayStyles ============
// A list of the valid selection display styles.
declare enum SelectionDisplayStyles {
    NormalDisplayStyle = 0,
    SimpleDisplayStyle = 1
}

//=========== TransparencyDisplayEffects ============
// A list of the valid transparency display effects.
declare enum TransparencyDisplayEffects {
    BetterPerformanceTransparencyEffect = 0,
    BetterDisplayTransparencyEffect = 1
}

//=========== UnitAndValuePreferences ============
// The UnitAndValuePreferences object provides access to unit and value precision
// related preferences.
interface UnitAndValuePreferences {
    cast(object: Object): UnitAndValuePreferences;

    // Gets and sets the general precision for distance values. This
    // value specifies the number of decimals to display.
    generalPrecision: number;

    // Gets and sets the angular precision. This
    // value specifies the number of decimals to display.
    angularPrecision: number;

    // Gets and sets the number scientific notation precision. This
    // value specifies the number of decimals to display.
    scientificNotationPrecision: number;

    // Gets and sets the foot and inch display format.
    footAndInchDisplayFormat: number;

    // Gets and sets the degree display format.
    degreeDisplayFormat: number;

    // Gets and sets if the decimal is a period or comma.
    isPeriodDecimalPoint: boolean;

    // Gets and sets if abbreviations are used for units display.
    areAbbreviationsForUnitDisplayed: boolean;

    // Gets and sets if symbols are used for units display.
    areSymbolsForUnitDisplayed: boolean;

    // Gets and sets if scientific notation is used when displaying numbers.
    isScientificNotationUsed: boolean;

    // Gets and sets the number of whole digits that will be displayed before
    // switching to scientific notation.
    useScientficNotationAbove: number;

    // Gets and sets the number of non zero decimal places that will be
    // displayed before switching to scientific notation.
    useScientficNotationBelow: number;

    // Gets and sets if trailing zeros are hidden when displaying numbers.
    areTrailingZerosHidden: boolean;

    // Gets and sets the minimum number of digits to the right of the decimal to display
    // before hiding trailing zeros.
    minimumPrecisionWhenHidingZeros: number;

    // Gets and sets the units types to use when displaying values.
    materialDisplayUnit: number;
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
    cast(object: Object): UnitsManager;

    // Returns the parent Product.
    product: Product;

    // Returns a string that represents internal units - i.e. "internalUnits".
    // This can be used when performing conversions via Convert.
    internalUnits: string;

    // Returns the unit strings for the current default length unit as specified in preferences. - e.g. "cm" or "in"
    defaultLengthUnits: string;

    // Checks to see if the given expression is valid.
    // expression :
    // units : The units to use when validating the expression.
    // Returns True if it is a valid expression.
    isValidExpression(expression: string, units: string): boolean;

    // Gets the value (in internal units) of the expression.
    // expression : EvaluateExpression("1cm + 1in") -> 3.54
    // EvaluateExpression("1") -> -> depends on the DistanceUnits, with "mm" it gives 0.1
    // units : If not supplied the units will default to the default length specified in the preferences.
    // Returns -1 AND GetLastError will return ExpressionError in the event of an error.
    evaluateExpression(expression: string, units: string): number;

    // Converts a value from one unit to another. The input and output unit specifiers must be compatible.
    // For example, "in" (inches) and "cm" (centimeters) will work because they both define length.
    // So Convert(1.5, "in", "ft") -> 0.125
    // Convert(1.5, unitsManager.defaultLengthUnits, "cm") -> depends on the current default distance units, with "mm" it gives 0.15
    // So Convert(1.5, "in", "kg") -> -1 and GetLastError returns ExpressionError (to denote error)
    // So Convert(1, "in", "internalUnits") -> 2.54
    // So Convert(1, "internalUnits", "in") -> 0.3937...
    // valueInInputUnits : The value to convert
    // inputUnits : The units of the value to convert
    // outputUnits : The units to convert the value to
    // Returns -1 AND GetLastError returns ExpressionError in the event of an error.
    convert(valueInInputUnits: number, inputUnits: string, outputUnits: string): number;

    // Formats the internal value as a string. The output string is formatted using the current
    // unit settings in preferences. The preferences control the number of decimal places, whether
    // units are abbreviated and several other things.
    // FormatInternalValue(1.5, "in") -> "0.591 in"
    // FormatInternalValue(1.5, "in", false) -> "0.591"
    // FormatInternalValue(1.5, "mm", true) -> "15.00 mm"
    // FormatInternalValue(1.5) -> depends on DistanceUnits, might be "15.0 mm"
    // internalValue : The internal value to format.
    // displayUnits : The units to display the value in. If not supplied the units will default to the default length specified in the preferences.
    // showUnits : Specify false to exclude units from the format. The default is true.
    // Returns an empty string if the units are incorrectly specified.
    formatInternalValue(internalValue: number, displayUnits: string, showUnits: string): string;

    // Formats the unit according to the user preferences
    // "centimeter" -> "cm"
    // "inch" -> "in"
    // "cm* cm *cm / s" -> , "cm^3 / s"
    // units : The unit to use when converting the value into a string.
    // Returns an empty string and GetLastError returns ExpressionError in the event of an error.
    formatUnits(units: string): string;

    // Standardizes the expression in terms of spacing and user preferences.
    // StandardizeExpression("1.5") -> depends on distance units, but with mmight be "1.5 mm"
    // StandardizeExpression("1.5", "in") -> "1.5 in"
    // StandardizeExpression("1.5 cm + 1.50001 centimeter") -> "1.5 cm + 1.50001 cm"
    // StandardizeExpression("1.5", "m * m * m / s") -> "1.5 m^3 /s"
    // expression : The expression to standardize
    // units : The units to apply to the standardized expression. If not supplied the units will default to the default length specified in the preferences.
    // Returns an empty string AND GetLastError returns ExpressionError in the event of an error.
    standardizeExpression(expression: string, units: string): string;
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
}

//=========== UserLanguages ============
// A list of the valid languages.
declare enum UserLanguages {
    ChinesePRCLanguage = 0,
    ChineseTaiwanLanguage = 1,
    CzechLanguage = 2,
    EnglishLanguage = 3,
    FrenchLanguage = 4,
    GermanLanguage = 5,
    HungarianLanguage = 6,
    ItalianLanguage = 7,
    JapaneseLanguage = 8,
    KoreanLanguage = 9,
    PolishLanguage = 10,
    PortugueseBrazilianLanguage = 11,
    RussianLanguage = 12,
    SpanishLanguage = 13
}

//=========== ValueInput ============
// A ValueInput provides a flexible way of specifying a string or a double.
// No semantics are associated with a ValueInput (e.g. is the string valid, can the string
// be converted to a double) - it is merely a way of supplying information in
// either string OR double form as a function parameter.
// ValueInput objects are typically used to specify things like an extrude depth, or hole dia, etc.
interface ValueInput {
    cast(object: Object): ValueInput;

    // Gets the real value (if there is one) in this object.
    // Returns -1 AND GetLastError returns ValueNotOfType if there is no real value in this object.
    realValue: number;

    // Gets the string value (if there is one) in this object.
    // Returns an empty string AND GetLastError returns ValueNotOfType if there is no string value in this object.
    stringValue: string;

    // Creates a new ValueInput object using a double. For example, if you create a value using
    // the double value 2 and use it as input for a length, it will be interpreted as 2 cm because
    // centimeters are the internal unit for length. Values defined by a real are are always
    // interpreted to be in the appropriate internal unit.
    // For example, if the value 2 is used to define the depth of an extrusion (a length value),
    // it will be 2 cm because cm is the internal unit for lengths. If the value 2 is used
    // to define the angle of the extrude, it will be 2 radians because radians are the internal
    // unit for angles.
    // realValue : a double value
    // Returns the newly created ValueInput object or null if the creation failed.
    createByReal(realValue: number): ValueInput;

    // When a string is used to create a value it needs to be evaluated as an expression so
    // its value can be determined using the UnitsManager class.
    // The units of an expression can be explicitly defined or will default to the current default
    // units.
    // For example, if you create an expression with the string "6" and specify it as a length,
    // it will use the current active units. If the current active units are defined as inches
    // the expression will be interpreted as 6 inches.
    // You can specify the units as part of the string (i.e. "6 mm").
    // You can also use equations in the string (ie. "6 + 5mm")
    // In order for an expression to be valid, its units must be compatible with the value it
    // represents. For example if you specify "5 in + 3 cm" as an expresssion to supply the value
    // of an angle, it will fail because the units of the expression define a length.
    // stringValue : The expression string
    // Returns the newly created ValueInput object or null if the creation failed.
    createByString(stringValue: string): ValueInput;
}

//=========== ValueInputError ============
// Errors that can occur when using the ValueInput object.
declare enum ValueInputError {
    ValueNotOfTypeError = 100
}

//=========== ViewOrientations ============
// Common view orientations.
declare enum ViewOrientations {
    ArbitraryViewOrientation = 0,
    BackViewOrientation = 1,
    BottomViewOrientation = 2,
    FrontViewOrientation = 3,
    IsoBottomLeftViewOrientation = 4,
    IsoBottomRightViewOrientation = 5,
    IsoTopLeftViewOrientation = 6,
    IsoTopRightViewOrientation = 7,
    LeftViewOrientation = 8,
    RightViewOrientation = 9,
    TopViewOrientation = 10
}

//=========== Viewport ============
// A viewport within Fusion. A viewport is the window where the model is displayed.
interface Viewport {
    cast(object: Object): Viewport;

    // Gets and sets the camera associated with the view.
    // The camera returned is a copy of the current camera
    // settings of the view. Editing the properties of the
    // camera will have no affect on the viewport until the
    // camera is assigned back to the viewport.
    camera: Camera;

    // Returns the height of the viewport in pixels.
    height: number;

    // Returns the width of the viewport in pixels.
    width: number;

    // Gets and sets if the view is in full screen mode.
    isFullScreen: boolean;

    // Gets and sets the current visual style being used.
    visualStyle: number;

    // Forces the view to refresh. It is sometimes useful to force a refresh to
    // be able to see edits that have been made using the API.
    // Returns true if the operation was successful.
    refresh(): boolean;

    // Saves the current view to the specified image file.
    // filename : The full filename, including the path, of the image file. The type of image file to be created is inferred from the extension of the filename.
    // width : The width in pixels of the output image. A value of zero indicates that the current width of the viewport is to be used.
    // height : The height in pixels of the output image. A value of zero indicates that the current height of the viewport is to be used.
    // Returns true if the operation was successful.
    saveAsImageFile(filename: string, width: number, height: number): boolean;

    // Forces a camera change so that all of the graphics are visible in the viewport.
    // Returns true if the fit was successful.
    fit(): boolean;
}

//=========== VisualStyles ============
// A list of the support visual styles that Fusion uses when rendering the model.
declare enum VisualStyles {
    RayTracingVisualStyle = 0,
    ShadedVisualStyle = 1,
    ShadedWithHiddenEdgesVisualStyle = 2,
    ShadedWithVisibleEdgesOnlyVisualStyle = 3,
    WireframeVisualStyle = 4,
    WireframeWithHiddenEdgesVisualStyle = 5,
    WireframeWithVisibleEdgesOnlyVisualStyle = 6
}

//=========== DocumentEvent ============
// A DocumentEvent represents a document related event. For example, DocumentOpening or DocumentOpened.
interface DocumentEvent {
    cast(object: Object): DocumentEvent;

    add(handler: (args: DocumentEventArgs) => {})
}

//=========== DocumentEventArgs ============
// The DocumentEventArgs provides information associated with a document event.
// Note that some properties are not available on every event
// - for example, the Document is not available on the DocumentOpening event because
// the Document is not yet available.
interface DocumentEventArgs {
    cast(object: Object): DocumentEventArgs;

    // Provides access to the document that is open. Can be null in the case
    // where the event is fired before the document has been opened or after it has been closed.
    document: Document;

    // The full path to the file.
    fullPath: string;
}

//=========== DXF2DImportOptions ============
// Defines that a 2D DXF Import to create sketches (based on layers in the DXF file) is to be performed and
// specifies the various options.
interface DXF2DImportOptions {
    cast(object: Object): DXF2DImportOptions;

    // Gets and sets the construction plane or planar face that defines the plane that the resulting sketches will
    // be created on.
    planarEntity: Base;

    // Gets and sets the X,Y offset position for the origin of the imported DXF data relative to the sketch origin.
    // This defaults to (0,0) in a newly created DXF2DImportOptions object.
    position: Point2D;

    // Returns a collection of Sketch objects. A sketch is created for each layer in the dxf file
    // that contains 2D geometry. Any 3D geometry contained in the DXF file is ignored.
    // The names of the resulting sketches correspond to the layer names in the DXF file.
    // Currently, the only way to get a single sketch as a result is to supply a DXF file that only has 2D geometry
    // on a single layer.
    results: ObjectCollection;
}

//=========== FusionArchiveImportOptions ============
// Defines that a Fusion Archive import is to be done and specifies the various options.
interface FusionArchiveImportOptions {
    cast(object:Object):FusionArchiveImportOptions;
}

//=========== IGESImportOptions ============
// Defines that an IGES import is to be done and specifies the various options.
interface IGESImportOptions {
    cast(object:Object):IGESImportOptions;
}

//=========== SATImportOptions ============
// Defines that a SAT import is to be done and specifies the various options.
interface SATImportOptions {
    cast(object:Object):SATImportOptions;
}

//=========== SMTImportOptions ============
// Defines that an SMT import is to be done and specifies the various options.
interface SMTImportOptions {
    cast(object:Object):SMTImportOptions;
}

//=========== STEPImportOptions ============
// Defines that a STEP import is to be done and specifies the various options.
interface STEPImportOptions {
    cast(object:Object):STEPImportOptions;
}