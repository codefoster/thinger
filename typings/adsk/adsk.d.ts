interface Point3D {

}
interface Vector3D {

}

declare enum CameraTypes {
    OrthographicCameraType = 0,
    PerspectiveCameraType = 1,
    PerspectiveWithOrthoFacesCameraType = 2
}

declare enum CloseError {
    CloseCancelledError = 200
}

declare enum DefaultModelingOrientations {
    YUpModelingOrientation = 0,
    ZUpModelingOrientation = 1
}

declare enum DefaultOrbits {
    ConstrainedOrbit = 0,
    FreeOrbit = 1
}

declare enum DegradedSelectionDisplayStyles {
    NormalWithGlowDegradedSelectionStyle = 0,
    SimpleWithoutGlowDegradedSelectionStyle = 1
}

declare enum DegreeDisplayFormats {
    DecimalDegreeDisplay = 0,
    MinutesAndSecondsDegreeDisplay = 1
}

interface Fusion {
    ConstructionAxes: ConstructionAxes;

}

interface ConstructionAxes {
    count: number;
    component;
    item(index: number);
    itemByName(name: string);
    createInput(occurrenceForCreation: Occurrence);
    add(input: ConstructionAxisInput)
}

interface ConstructionAxis {
    geometry;
    name: string;
    definition: ConstructionAxisDefinition;
    isParametric: boolean;
    isDeletable: boolean;
    isLightBulbOn: boolean;
    isVisible: boolean;
    parent: Base;
    component: Component;
    timelineObject: TimelineObject;
    assemblyContext;
    nativeObject;
    createForAssemblyContext: Occurrence;
}

interface TimelineObject {

}

interface ConstructionAxisDefinition {
    parentConstructionAxis
}

interface ConstructionAxisInput {
    creationOccurrence: Occurrence;
    setByLine(line: InfiniteLine3D);
    setBycircularFace(circularFace: BRepFace);
    setByPerpendicularAtPoint(face: BRepFace, pointEntity: Base);
    setByTwoPlanes(planarEntityOne: Base, planarEntityTwo: Base);
    setByTwoPoints(pointEntityOne: Base, pointEntityTwo: Base);
    setByEdge(edgeEntity: Base);

}

interface ConstructionPlane {
    geometry: Plane;
    name: string;
    definition: ConstructionPlaneDefinition;
    isDeletable: boolean;
    isParametric: boolean;
    isLightBulbOn: boolean;
    isVisible: boolean;
    displayBounds: BoundingBox2D;
    parent: Base;
    component: Component;
    timelineObject: TimelineObject;
    assemblyContext: Occurrence;
    nativeObject: ConstructionPlane;
    deleteMe();
    createForAssemblyContext(occurrence: Occurrence);
}

interface Component {

}

interface BoundingBox2D {

}

interface ConstructionPlaneDefinition {
    parentConstructionPlane: ConstructionPlane;
}

interface ConstructionPlaneInput {
    creationOccurrence: Occurrence;
    setByPlane(plane: Plane);
    setByOffset(planarEntity: Base, offset: ValueInput);
    setByAngle(linearEntity: Base, angle: ValueInput, planarEntity: Base);
    setByTangent(tangentFace: BRepFace, angle: ValueInput, planarEntity: Base);
    setByTwoPlanes(planarEntityOne: Base, planarEntityTwo: Base);
    setByTwoEdges(linearEntityOne: Base, linearEntityTwo: Base);
    setByThreePoints(pointEntityOne: Base, pointEntityTwo: Base, pointEntityThree: Base);
    setByTangentAtPoint(tangentFace: BRepFace, pointEntity: Base);
    setByDistanceOnPath(pathEntity: Base, distance: ValueInput);

}

interface ConstructionPlanes {
    count: number;
    component: Component;
    item(index: number): ConstructionPlane;
    itemByName(name: string);
    createInput(occurrenceForCreation: Occurrence);
    add(input: ConstructionPlaneInput): ConstructionPlane;
}

interface ConstructionPoint {
    geometry: Point3D;
    name: string;
    definition: ConstructionPointDefinition;
    isDeletable: boolean;
    isLightBulbOn: boolean;
    isVisible: boolean;
    parent: Base;
    component: Component;
    isParametric: boolean;
    timelineObject: TimelineObject;
    assemblyContext: Occurrence;
    nativeObject: ConstructionPoint;
    deleteMe();
    createForAssemblyContext(occurrence: Occurrence);
}

interface ConstructionPointDefinition {
    parentConstructionPoint: ConstructionPoint;

}

interface ConstructionPointInput {
    creationOccurrence: Occurrence;
    setByTwoEdges(edgeOne: Base, edgeTwo: Base);
    setByThreePlanes(planeOne: Base, planeTwo: Base, planeThree: Base);
    setByEdgePlane(edge: Base, plane: Base);
    setByCenter(circularEntity: Base);
    setByPoint(point: Base);

}

interface ConstructionPoints {
    count: number;
    component: Component;
    item(index: number): ConstructionPoint;
    itemByName(name: string);
    createInput(occurrenceForCreation: Occurrence);
    add(input: ConstructionPointInput): ConstructionPoint;
}

interface ConstructionAxisByLineDefinition {
    axis: InfiniteLine3D;
}

interface ConstructionAxisCircularFaceDefinition {
    circularFace: BRepFace;

}

interface ConstructionAxisEdgeDefinition {
    edgeEntity: Base;
}

interface ConstructionAxisNormalToFaceAtPointDefinition {
    face: Base;
    pointEntity: Base;
    redefine(face: Base, pointEntity: Base);
}
interface ConstructionAxisPerpendicularAtPointDefinition {
    face: BRepFace;
    point: Base;
    redefine(face: BRepFace, point: Base);

}
interface ConstructionAxisTwoPlaneDefinition {
    planarEntityOne: Base;
    planarEntityTwo: Base;
    redefine(planarEntityOne: Base, planarEntityTwo: Base);

}
interface ConstructionAxisTwoPointDefinition {
    pointEntityOne: Base;
    pointEntityTwo: Base;
    redefine(pointEntityOne: Base, pointEntityTwo: Base);
}
interface ConstructionPlaneAtAngleDefinition {
    angle: Parameter;
    linearEntity: Base;
    planarEntity: Base;
    redefine(angle: ValueInput, linearEntity: Base, planarEntity: Base);
}
interface Parameter {

}
interface ConstructionPlaneByPlaneDefinition {
    plane: Plane;

}
interface ConstructionPlaneDistanceOnPathDefinition {
    pathEntity: Base;
    redefine(pathEntity: Base, distance: ValueInput);

}
interface ConstructionPlaneMidplaneDefinition {
    planarEntityOne: Base;
    planarEntityTwo: Base;
    redefine(planarEntityOne: Base, planarEntityTwo: Base);


}
interface ConstructionPlaneOffsetDefinition {
    offset: Parameter;
    redefine(offset: ValueInput, planarEntity: Base);

}
interface ConstructionPlaneTangentAtPointDefinition {
    tangentFace: BRepFace;
    pointEntity: Base;
    redefine(tangentFace: Base, pointEntity: Base);

}
interface ConstructionPlaneTangentDefinition {
    angle: Parameter;
    tangentFace: Base;
    planarEntity: Base;
    redefine(angle: ValueInput, tangentFace: Base, planarEntity: Base);
}
interface ConstructionPlaneThreePointsDefinition {
    pointEntityOne: Base;
    pointEntityTwo: Base;
    pointEntityThreeo: Base;
    redefine(pointEntityOne: Base, pointEntityTwo: Base, pointEntityThree: Base);
}
interface ConstructionPlaneTwoEdgesDefinition {
    linearEntityOne:Base;
    linearEntityTwo:Base;
    redefine(linearEntityOne:Base, linearEntityTwo:Base);
}
interface ConstructionPointCenterDefinition {
    circularEntity:Base;
    
}
interface ConstructionPointEdgePlaneDefinition {
    edge:Base;
    plane:Base;
    redefine(edge:Base, plane:Base);
    
}
interface ConstructionPointPointDefinition {
    pointEntity:base;
}
interface ConstructionPointThreePlanesDefinition {
    planeOne:Base;
    planeTwo:Base;
    planeThree:Base;
    redefine(planeOne:Base, planeTwo:Base, planeThree:Base);
}
interface ConstructionPointTwoEdgesDefinition {
    edgeOne:Base;
    edgeTwo:Base;
    redefine(edgeOne:Base, edgeTwo:Base);
    
}
interface ValueInput {

}
interface Plane {

}

interface BRepFace {

}
interface InfiniteLine3D {

}

interface Occurrence {

}


interface AutoDeskFusion {
    core: Core;
    fusion: Fusion;
    toBase64(buffer: ArrayBuffer): string;
    fromBase64(encoded: string): ArrayBuffer;
    utf8ToString(buffer: ArrayBuffer): string;
    readFile(filename);
    writeFile(filename, data, mode);
    copyFile(fromFilename, toFilename);
    renameFile(fromFilename, toFilename);
    removeFile(filename);
    createDirectory(filename);
    listDirectoryFiles(filename, regularFilesOnly, recursive);
    fileExists(filename);
    fileIsDirectory(filename);
    fileSize(filename);
    tempDirectory();
}

interface Core {
    Application: Application;
    Base: Base;
    Camera: Camera;
}

interface DefaultUnitsPreferences {
    interfaceId: string;
    name: string;
}

interface DefaultUnitsPreferencesCollection {
    interfaceId: string;
    count: number;
    item(index: number);
    itemByName(name: string);
}

interface Color {
    interfaceId: string;
    red: number;
    green: number;
    blue: number;
    opacity: number;
    getColor(red, green, blue, opacity);
    setColor(red, green, blue, opacity);
    create(red, green, blue, opacity);
}

interface Camera {
    interfaceId: string;
    eye: Point3D;
    target: Point3D;
    cameraType: number;
    perspectiveAngle: number;
    upVector: Vector3D;
    viewExtents: number;
    isFitView: boolean;
    isSmoothTransition: boolean;
    viewOrientation: number;
}

interface Document {
    interfaceId: string;
    name: string;
    isModified: boolean;
    isSaved: boolean;
    parent;
    products;
    isActive: boolean;
    activate();

}

interface Base {
    interfaceId: string;
    _execute(method, methodArguments);
    executeStatic(interfaceName, method, methodArguments);
    objectType(): any;
    isValid(): boolean;
}

interface Application {
    interfaceId: string;
    get(): Application;
    documents;
    activeDocument;
    activeProduct;
    activeViewport;
    activeEditObject;
    data;
    pointTolerance;
    vectorAngleTolerance;
    preferences;
    documentOpening;
    documentOpened;
    userInterface;
    materialLibraries;
    favoriteMaterials;
    favoriteAppearances;
    supportedProductTypes;
    importManager;
    userName: string;
    userId;
    isOffLine: boolean;
    isStartupComplete: boolean;
    currentUser;
    getLastError(description);

}

declare var adsk: AutoDeskFusion;
