//=========== MeshBodies ============
// Provides access to the MeshBodies in the parent Component and
// supports the creation of new mesh bodies.
interface MeshBodies {
    cast(object: Object): MeshBodies;

    // Returns the number of mesh bodies in the collection.
    count: number;

    // Creates a new mesh body by importing a .stl or .obj file.
    // fullFilename : The full filename (path and file) of a .stl or .obj file.
    // units : The units to use when importing the file.
    // Returns a list of the newly created mesh bodies or null if the creation failed. Multiple
    // bodies can be created in the case where a .obj file that contains multiple bodies was imported.
    // stl files always contain a single body.
    add(fullFilename: string, units: number): MeshBodyList;

    // Provides access to a mesh body within the collection.
    // index : The index of the mesh body to return, where an index of 0 is the first mesh body in the collection.
    // Returns the specified mesh body or null in the case of a invalid index.
    item(index: number): MeshBody;
}

//=========== MeshBody ============
// Provides access to a mesh body.
interface MeshBody {
    cast(object: Object): MeshBody;

    // Gets and sets the name of the mesh body as displayed in the browser.
    name: string;

    // Gets and sets if the mesh body is selectable in the graphics window.
    isSelectable: boolean;

    // Is the light bulb (as displayed in the browser) on.
    // A mesh body will only be visible if the light bulb is switched on. However,
    // the light bulb can be on and the mesh body is still invisible if the light bulb
    // for all bodies or the owning component is off.
    isLightBulbOn: boolean;

    // Gets if the mesh body point is visible.
    isVisible: boolean;

    // Returns the original mesh data that was imported. This can include triangles, quads, and polygons.
    mesh: PolygonMesh;

    // Returns the associated mesh that is used for the display. This will always be triangles and includes any textures.
    displayMesh: TriangleMesh;

    // Returns the parent Component.
    parentComponent: Component;

    // Returns the assembly occurrence (i.e. the occurrence) of this object
    // in an assembly. This is only valid in the case where this is acting
    // as a proxy in an assembly. Returns null in the case where the object
    // is not in the context of an assembly but is already the native object.
    assemblyContext: Occurrence;

    // The NativeObject is the object outside the context of an assembly and
    // in the context of it's parent component.
    // Returns null in the case where this object is not in the context of
    // an assembly but is already the native object.
    nativeObject: MeshBody;

    // Deletes the mesh body.
    // Returns true in the case where the selection was successful.
    deleteMe(): boolean;

    // Creates or returns a proxy for the native object
    // - i.e. a new object that represents this object but adds the assembly context
    // defined by the input occurrence.
    // Fails if this object is not the NativeObject.
    // occurrence : The occurrence that represents the context you want to create this proxy in.
    // Returns the proxy for the occurrence in the context of the specified occurrence. Returns null if it failed.
    createForAssemblyContext(occurrence: Occurrence): MeshBody;
}

//=========== MeshBodyList ============
// Provides access to a list of MeshBody objects.
interface MeshBodyList {
    cast(object: Object): MeshBodyList;

    // Returns the number of mesh bodies in the collection.
    count: number;

    // Provides access to a mesh body within the collection.
    // index : The index of the mesh body to return, where an index of 0 is the first mesh body in the collection.
    // Returns the specified mesh body or null in the case of a invalid index.
    item(index: number): MeshBody;
}

//=========== MeshUnits ============
// The unit types that can be specified when importing a .stl or .obj file as a mesh.
declare enum MeshUnits {
    CentimeterMeshUnit = 0,
    MillimeterMeshUnit = 1,
    MeterMeshUnit = 2,
    InchMeshUnit = 3,
    FootMeshUnit = 4
}