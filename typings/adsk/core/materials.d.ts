/// <reference path="application.d.ts" />

//=========== Appearance ============
// An appearance.
interface Appearance {
    // The unique internal ID of this Appearance.
    id;

    // Returns true if this Appearance is used in the Design.
    isUsed: boolean;

    // Returns a collection of the entities currently using this appearance. This
    // property is only valid for an appearance in a Design and where the IsUsed
    // property returns true. The collection returned can contain
    usedBy: ObjectCollection;

    // Returns the name of this Appearance. This is the localized name
    // shown in the UI.
    name: string;

    // Property that returns the Parent object of this Appearance (a MaterialLibrary, Design, or AppearanceFavorites collection).
    parent: Base;

    // Property that indicates if this appearance has a texture associated with it.
    hasTexture: boolean;

    // returns the collection of Properties that define this appearance
    appearanceProperties: Properties;

    // Deletes the Appearance from the Design. This method is only valid for appearances
    // that are in a Design and are unused.
    // Returns true if the delete was successful.
    deleteMe();

    // Copies this appearance to the specified target.
    // ***Depricated Method: Use the addByCopyMethod on the Appearances object instead, where you can rename the copied Appearance
    // and the return type is Appearance rather than bool.***
    // target : The target can be a Design or MaterialFavorites object.
    // Returns true if the copy was successful.
    copyTo(target: Base);
}

//=========== Appearances ============
// A collection of appearances.
interface Appearances {

    // The number of Materials in the collection.
    count: number;


    // Returns the specified Appearance using an index into the collection.
    // index : The index of the appearance to return where the first item in the collection is 0.
    // Returns the specified appearance or null if an invalid index is specified.
    item(index: number): Appearance;

    // Returns the specified Appearance using the name as seen in the user interface. This often isn't
    // a reliable way of accessing a specific appearance because appearances are not required to be unique.
    // name : The name of the appearance to return,.
    // Returns the specified appearance or null if there isn't a matching name.
    itemByName(name: string): Appearance;

    // Returns the Appearance by it's internal unique ID.
    // id : The ID of the appearance to return.
    // Returns the specified appearance or null if there isn't a matching ID.
    itemById(id: string): Appearance;

    // Add an Appearance to a Design by copying an existing Appearance from Favorites, a Library or from the
    // appearances stored in the Design. This method currently only applies to the Appearances collection from a Design and
    // cannot be used to copy an Appearance to a library.
    // appearanceToCopy : The Appearance you want to copy. The Appearance to copy can be from Favorites, a Library or from the
    // appearances stored in the Design.
    // name : The Appearnce name to apply to the copy.
    // Returns the newly created Appearance or null if the copy operation failed.
    addByCopy(appearanceToCopy: Appearance, name: string): Appearance;
}

//=========== AppearanceSourceTypes ============
// The different types of sources for an appearance.
declare enum AppearanceSourceTypes {
    MaterialAppearanceSource = 0,
    BodyAppearanceSource = 1,
    OccurrenceAppearanceSource = 2,
    FaceAppearanceSource = 3,
    OverrideAppearanceSource = 4
}

//=========== AppearanceTexture ============
// Provides access to a list of properties that define a texture.
interface AppearanceTexture {
    cast(object: Object): AppearanceTexture;

    // Returns a collection of the properties associated with this texture.
    properties: Properties;

    // Gets the type of texture this appearance currently is.
    textureType;

    // Changes the image of this texture.
    // imageFilename : Input String specifying the full filename of the texture file to use.
    // Returns true if the change was successful.
    changeTextureImage(imageFilename: string): boolean;
}

//=========== FavoriteAppearances ============
// Collection of the favorite appearances.
interface FavoriteAppearances {
    cast(object: Object): FavoriteAppearances;

    // The number of Appearances in the collection.
    count: number;

    // Returns the specified Appearance using an index into the collection.
    // index : The index of the appearance to return where the first item in the collection is 0.
    // Returns the specified appearance or null if an invalid index is specified.
    item(index: number): Appearance;

    // Returns the specified appearance using the name as seen in the user interface. This often isn't
    // a reliable way of accessing a specific appearance because appearances are not required to be unique.
    // name : The name of the appearance to return,.
    // Returns the specified appearance or null if there isn't a matching name.
    itemByName(name: string): Appearance;

    // Returns the Appearance by it's internal unique ID.
    // id : The ID of the appearance to return.
    // Returns the specified appearance or null if there isn't a matching ID.
    itemById(id: string): Appearance;

    // Adds an existing appearance to the Favorites list
    // appearance : The appearance to be added to the favorites list. This can come from a Library or from a Design.
    // Returns the Appearance added to the favorites list or null if the operation failed.
    add(appearance: Appearance): Appearance;
}

//=========== FavoriteMaterials ============
// Collection of the favorite materials.
interface FavoriteMaterials {
    cast(object: Object): FavoriteMaterials;

    // The number of Materials in the collection.
    count: number;

    // Returns the specified Material using an index into the collection.
    // index : The index of the material to return where the first item in the collection is 0.
    // Returns the specified material or null if an invalid index is specified.
    item(index: number): Material;

    // Returns the specified Material using the name as seen in the user interface. This often isn't
    // a reliable way of accessing a specific material because materials are not required to be unique.
    // name : The name of the material to return,.
    // Returns the specified material or null if there isn't a matching name.
    itemByName(name: string): Material;

    // Returns the Material by it's internal unique ID.
    // id : The ID of the material to return.
    // Returns the specified material or null if there isn't a matching ID.
    itemById(id: string): Material;

    // Adds an existing material to the Favorites list
    // material : The material to be added to the favorites list. This can come from a Library or from a Design.
    // Returns the Material added to the favorites list or null if the operation failed.
    add(material: Material): Material;
}

//=========== Material ============
// A material.
interface Material {
    cast(object: Object): Material;

    // Gets the Appearance of this material.
    appearance: Appearance;

    // Returns the unique internal ID of this material.
    id: any;

    // Returns true if this material is used in the Design
    isUsed: boolean;

    // Returns the collection of material properties associated with this material.
    materialProperties: Properties;

    // Returns the name of this Material. This is the name of the material as seen in the user interface.
    // The name can only be edited if the material is in a Design or the favorites list.
    name: string;

    // Returns the Parent object (a Library or a Design).
    parent: Base;

    // Deletes the material from the Design. This method only applies to materials
    // in a Design that are unused
    // Returns true if the delete was successful.
    deleteMe(): boolean;

    // Copies this material to the specified target.
    // ***Depricated Method: Use the addByCopyMethod on the Materials object instead, where you can rename the copied Material***
    // target : The target can be a Design or MaterialFavorites object.
    // Returns the new copy of the material or null if the copy failed.
    copyTo(target): Material;
}

//=========== MaterialLibraries ============
// The MaterialLibraries collection object provides access to
// currently loaded Material and Appearance libraries
interface MaterialLibraries {
    cast(object: Object): MaterialLibraries;

    // The number of Material Libraries in the collection.
    count: number;

    // Method that returns the specified Material Library using an index into the collection.
    // index : The index of the item within the collection. The first item has an index of 0.
    // Returns the specified material library or null if an invalid index was specified.
    item(index: number): MaterialLibrary;

    // Returns the specified Material Library using the name as seen in the user interface.
    // name : The name of the library to return.
    // Returns the specified material library or null if there's no match on the name.
    itemByName(name: string): MaterialLibrary;

    // Returns the Material Library at the specified ID.
    // id : The ID of the library to return.
    // Returns the specified material library or null if there's no match on the ID.
    itemById(id): MaterialLibrary;
}

//=========== MaterialLibrary ============
// A material library.
interface MaterialLibrary {
    cast(object: Object): MaterialLibrary;

    // Property that gets the name of this Library. This is the localized name
    // shown in the user interface.
    name: string;

    // The unique internal ID of this Library.
    id;

    // Returns the appearances defined within this library.
    appearances: Appearances;

    // Returns the materials defined within this library.
    materials: Materials;
}

//=========== Materials ============
// Collection of materials within a Library or Design.
interface Materials {
    cast(object: Object): Materials;

    // The number of Materials in the collection.
    count: number;

    // Returns the specified Material using an index into the collection.
    // index : The index of the material to return where the first item in the collection is 0.
    // Returns the specified material or null if an invalid index is specified.
    item(index: number): Material;

    // Returns the specified Material using the name as seen in the user interface. This often isn't
    // a reliable way of accessing a specific material because materials are not required to be unique.
    // name : The name of the material to return,.
    // Returns the specified material or null if there isn't a matching name.
    itemByName(name: string): Material;

    // Returns the Material by it's internal unique ID.
    // id : The ID of the material to return.
    // Returns the specified material or null if there isn't a matching ID.
    itemById(id): Material;

    // Add a Material to a Design by copying an existing Material from Favorites, a Library or from the
    // Materials stored in the Design. This method currently only applies to the Materials collection from a Design and
    // cannot be used to copy a Material to a library.
    // materialToCopy : The Material you want to copy. The Material to copy can be from Favorites, a Library or from the
    // materials stored in the Design.
    // name : The Material name to apply to the copy.
    // Returns the newly created Material or null if the copy operation failed.
    addByCopy(materialToCopy: Material, name: string): Material;
}

//=========== Properties ============
// A collection of properties that are associated with a material or appearance.
interface Properties {
    cast(object: Object): Properties;

    // Returns the number of properties within the collection.
    count: number;

    // Returns the specified property from the collection using an index into the collection.
    // index : The index of the property within the collection where the first item is 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): Property;

    // Returns the specified property from the collection using the unique ID of the property.
    // id : The unique ID of the property.
    // Returns the specified property or null if the ID doesn't match a property within the collection.
    itemById(id): Property;

    // Returns the specified Property using the name of the property.
    // name : The name of the property to return. This is the name as seen in the user interface.
    // Returns the specified property or null if the name doesn't match a property within the collection.
    itemByName(name: string): Property;
}

//=========== Property ============
// The base class for the specific property types used by materials and appearances.
interface Property {
    cast(object: Object): Property;

    // Returns the name of this property as seen in the user interface. This name is localized
    // and can change based on the current language
    name: Property;

    // Indicates if this property is read-only. If True any attempted edits will fail.
    isReadOnly: boolean;

    // Returns the unique ID of this property.
    id;

    // Returns the parent of this property.
    parent: Base;
}

//=========== TextureTypes ============
// The different types of textures.

declare enum TextureTypes {
    UnknownTexture = 0,
    ImageTexture = 1,
    CheckerTexture = 2,
    GradientTexture = 3,
    MarbleTexture = 4,
    NoiseTexture = 5,
    SpeckleTexture = 6,
    TileTexture = 7,
    WaveTexture = 8,
    WoodTexture = 9
}

//=========== AppearanceTextureProperty ============
// A texture value property associated with a material or appearance.
interface AppearanceTextureProperty {
    cast(object);

    // Gets and sets this property value.
    value;
}

//=========== BooleanProperty ============
// A material or appearance property that is a Boolean value.
interface BooleanProperty {
    cast(object);

    // Gets and sets the value of this property.
    value;
}

//=========== ChoiceProperty ============
// A material or appearance property that is a pre-defined list of choices.
interface ChoiceProperty {
    cast(object);

    // Gets and sets the which choice is selected from the set of choices.
    // The value is a string that matches one of the pre-defined choices.
    // The names of the available choices can be obtained using GetChoices method.
    value;

    // Method that returns the list of available choices.
    // names : An array of the names of the choices. These coincide with the array of choices returned by the choices argument.
    // choices : An array of the choices. These coincide with the array of names returned by the names argument.
    // Returns true if the call was successful.
    getChoices(names, choices);
}

//=========== ColorProperty ============
// A color property associated with an appearance.
interface ColorProperty {
    cast(object);
    // Gets the associated texture, if one exists. The HasConnectedTexture property controls
    // if there is an associated texture or not. If the parent is writable you can edit the
    // texture. If no texture exists, this property will return null.
    connectedTexture;

    // Specifies if this color is specified using a simple color or a texture. If this returns true
    // the color is defined using a texture. If the parent is writable, this property can be set to
    // true to change the definition from a simple color to a texture. You can then use the ConnectedTexture
    // property to get the associated texture and modify it.
    hasConnectedTexture;

    // Indicates if this property has multiple values or not.
    hasMultipleValues;

    // Gets and sets this property value if there is a color and not a texture defining
    // this color . If a texture is used, this property returns null. Setting this property
    // when a texture is used removes the texture and changes the color definition to a simple color.
    value;

    // Gets and sets the values associated with this property. The HasMultipleValues property
    // indicates if this property will be returning more than one value.
    values;
}

//=========== FilenameProperty ============
// A file name property associated with an appearance.
interface FilenameProperty {
    cast(object);

    // Gets the boolean flag that indicates if this property has multiple values or not.
    hasMultipleValues;

    // Gets and sets the value of this property.
    value;

    // Gets and sets the values associated with this property. HasMultipleValues
    // property indicates if this property will be returning more than one value.
    values;
}

//=========== FloatProperty ============
// A float or real value property associated with a material or appearance.
interface FloatProperty {
    cast(object: Object): FloatProperty;

    // Gets and sets the boolean flag that indicates if the float value has been overridden
    // using a texture. Setting this property to False will remove the texture so that a float
    // value is used. Setting this property to True will connect a texture to this float value.
    hasConnectedTexture: boolean;

    // Gets the associated texture, if one exists. The HasConnectedTexture property controls
    // if there is an associated texture or not. If it's parent writable you can edit the
    // texture. If no texture exists, this property will return Nothing.
    connectedTexture: AppearanceTexture;

    // Gets the boolean flag that indicates if the value of this property has any limits it must be within to
    // be valid. If True, use the GetLimits method to get the limit values.
    hasLimits: boolean;

    // Gets the boolean flag that indicates if this property has multiple values or not.
    hasMultipleValues: boolean;

    // Gets the boolean flag that indicates that this property represents a percentage value so
    // the valid values must be in the range of 0.0 to 1.0 unless they’re further limited by
    // additional limits which can be determined with the HasLimits property.
    isPercentage: boolean;

    // Gets the units that the value of this property is returned in. The String returned is a
    // valid Fusion unit string.
    units: string;

    // Gets and sets this property value. The value of this property should be ignored
    // if the HasConnectedTexture property is true. Setting this will remove any
    // associated texture, if there is one.
    value: number;

    // Gets and sets the values associated with this property. HasMultipleValues property
    // indicates if this property will be returning more than one value.
    values: number[];

    // Method that returns any limits for the value of this property. The HasLimits property can
    // be used to see if there are any limits or not.
    // hasLowLimit : Output Boolean that indicates if there is a low limit or not.
    // lowLimit : If the hasLowLimit argument is true, this argument returns the low limit.
    // hasHighLimit : Output Boolean that indicates if there is a high limit or not.
    // highLimit : If the hasHighLimit argument is true, this argument returns the high limit.
    // Returns true if the method call was successful.
    getLimits(hasLowLimit: Object, lowLimit: Object, hasHighLimit: Object, highLimit: Object): boolean;
}

//=========== IntegerProperty ============
// An integer value property associated with a material or appearance.
interface IntegerProperty {
    cast(object: Object): IntegerProperty;

    // Gets the boolean flag that indicates if the value of this property has any limits it must
    // be within to be valid. If True, use the GetLimits method to get the limit values.
    hasLimits: boolean;

    // Gets the boolean flag that indicates if this property has multiple values or not.
    hasMultipleValues: boolean;

    // Gets and sets this property value. The value of this property should be ignored
    // if the HasConnectedTexture property is true. Setting this will remove any
    // associated texture, if there is one.
    value: number;

    // Gets and sets the values associated with this property. HasMultipleValues property
    // indicates if this property will be returning more than one value.
    values: number[];

    // Method that returns any limits for the value of this property. The HasLimits property can
    // be used to see if there are any limits or not.
    // hasLowLimit : Output Boolean that indicates if there is a low limit or not.
    // lowLimit : If the hasLowLimit argument is true, this argument returns the low limit.
    // hasHighLimit : Output Boolean that indicates if there is a high limit or not.
    // highLimit : If the hasHighLimit argument is true, this argument returns the high limit.
    // Returns true if the method call was successful.
    getLimits(hasLowLimit: Object, lowLimit: Object, hasHighLimit: Object, highLimit: Object): boolean;
}

//=========== StringProperty ============
// A string value property associated with a material or appearance.
interface StringProperty {
    cast(object: Object): StringProperty;

    // Gets and sets the property value.
    value: string;
}