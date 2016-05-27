//=========== CAM ============
// Object that represents the CAM environment of a Fusion document.

interface CAM {
    cast(object);

    // Returns the Setups collection that provides access to existing setups
    setups;

    // Gets a collection containing all of the operations in the document.
    // This includes all operations nested in folders and patterns.
    allOperations;

    // Gets the installation folder with the posts.
    genericPostFolder;

    // Gets the personal post folder.
    personalPostFolder;

    // Gets the folder for temporary files.
    temporaryFolder;

    // Generates/Regenerates all of the toolpaths (including those nested in sub-folders or patterns)
    // for the specified objects.
    // operations : An Operation, Setup, Folder or Pattern object for which to generate the toolpath/s for. You can also
    // specify a collection of any combination of these object types.
    // Return GenerateToolpathFuture that includes the status of toolpath generation.
    generateToolpath(operations);

    // Generates/Regenerates all toolpaths (includes those nested in sub-folders or patterns) in the document.
    // skipValid : Option to skip valid toolpaths and only regenerate invalid toolpaths.
    // Return GenerateToolpathFuture that includes the status of toolpath generation.
    generateAllToolpaths(skipValid);

    // Clears all of the toolpaths (including those nested in sub-folders or patterns) for the specified objects.
    // operations : An Operation, Setup, Folder or Pattern object for which to clear the toolpath/s for. You can also
    // specify a collection of any combination of these object types.
    // Return true if successful.
    clearToolpath(operations);

    // Clears all the toolpaths (includes those nested in sub-folders or patterns) in the document
    // Return true if successful.
    clearAllToolpaths();

    // Checks if toolpath operations (including those nested in sub-folders or patterns) are valid for the specified objects.
    // operations : An Operation, Setup, Folder or Pattern object for which to check the toolpath/s of. You can also
    // specify a collection of any combination of these object types.
    // Returns true if the toolpath operations are valid
    checkToolpath(operations);

    // Checks if all the toolpath operations (includes those nested in sub-folders or patterns) in the document are valid
    // Returns true if the all toolpath operations are valid
    checkAllToolpaths();

    // Post all of the toolpaths (including those nested in sub-folders or patterns) for the specified objects
    // operations : An Operation, Setup, Folder or Pattern object for which to post the toolpath/s of. You can also
    // specify a collection of any combination of these object types.
    // input : The PostProcessInput object that defines the post options and parameters.
    // Returns true if successful
    postProcess(operations, input);

    // Post all of the toolpaths (includes those nested in sub-folders or patterns)in the document
    // input : The PostProcessInput object that defines the post options and parameters.
    // Returns true if successful
    postProcessAll(input);

    // Generate the setup sheets for the specified objects
    // operations : An Operation, Setup, Folder or Pattern object for which to generate the setup sheet/s for. You can also
    // specify a collection of any combination of these object types.
    // format : The document format for the setup sheet. Valid options are HTMLFormat and ExcelFormat.
    // Limitation: "ExcelFormat" can be used in windows OS only.
    // folder : The destination folder to locate the setup sheet documents in.
    // openDocument : An option to allow to open the document instantly after the generation. By default, the document is opened.
    // Returns true if successful
    generateSetupSheet(operations, format, folder, openDocument);

    // Generates all of the setup sheets for all of the operations in the document
    // format : The document format for the setup sheet. Valid options are HTMLFormat and ExcelFormat.
    // Limitation: "ExcelFormat" can be used in windows OS only.
    // folder : The destination folder to locate the setup sheet documents in.
    // openDocument : An option to allow to open the document instantly after the generation. By default, the document is opened.
    // Returns true if successful
    generateAllSetupSheets(format, folder, openDocument);
}

//=========== CAMFolder ============
// Object that represents a folder in an existing Setup, Folder or Pattern.
interface CAMFolder {
    cast(object);

    // Gets if this folder is active.
    isActive: boolean;

    // Returns the Operations collection that provides access to existing individual operations
    // in this folder.
    operations;

    // Returns the Folders collection that provides access to existing folders
    // in this folder.
    folders;

    // Returns the Patterns collection that provides access to existing patterns
    // in this folder.
    patterns;

    // Returns a collection containing all of the immediate (top level) child operations, folders and patterns in this folder
    // in the order they appear in the browser.
    children;

    // Returns the parent Setup, Folder or Pattern for this Folder.
    parent;

    // Gets a collection containing all of the operations in this folder.
    // This includes all operations nested in folders and patterns.
    allOperations;
}

//=========== CAMFolders ============
// Collection that provides access to the folders within an existing setup, folder or pattern.
interface CAMFolders {
    cast(object);

    // The number of items in the collection.
    count: number;

    // Function that returns the specified folder using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index);

    // Returns the folder of the specified name (as appears in the browser).
    // name : The name (as it appears in the browser) of the folder.
    // Returns the specified folder or null in the case where there is no folder with the specified name.
    itemByName(name);
}

//=========== CAMPatterns ============
// Collection that provides access to the patterns within an existing setup, folder or pattern.
interface CAMPatterns {
    cast(object);

    // The number of items in the collection.
    count: number;

    // Function that returns the specified pattern using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): CAMPattern;

    // Returns the pattern of the specified name (as appears in the browser).
    // name : The name (as it appears in the browser) of the pattern.
    // Returns the specified pattern or null in the case where there is no pattern with the specified name.
    itemByName(name);
}
//=========== ChildOperationList ============
// Provides access to the collection of child operations, folders and patterns of an existing setup.
interface ChildOperationList {
    cast(object);

    count: number;

    // Returns the specified item using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number);

    // Returns the operation, folder or pattern of the specified name (the name seen in the browser).
    // name : The name of the operation, folder or pattern as seen in the browser.
    // Returns the specified item or null in the case where there is no item with the specified name.
    itemByName(name);
}
//=========== GenerateToolpathFuture ============
// Used to check the state and get back the results of toolpath generation.
interface GenerateToolpathFuture {
    cast(object);

    // Returns a number of operations need to be generated.
    numberOfOperations;

    // Returns a number of operations whose toolpath generation are completed.
    numberOfCompleted;

    // Returns all operations that need to be generated.
    operations: Operations;

    // Returns true if all operations are generated.
    isGenerationCompleted: boolean;
}

//=========== PostOutputUnitOptions ============
// List of the valid options for the outputUnit property on a PostProcessInput object .
// adsk.cam.PostOutputUnitOptions = {
//     DocumentUnitsOutput: 0,
//     InchesOutput: 1,
//     MillimetersOutput: 2
// };

//=========== PostProcessInput ============
// This class defines the properties that pertain to the settings and options required for posting a
// toolpath to generate a CNC file. A PostProcessInput object is a required parameter for the
// postProcessAll() and postProcess() methods on the CAM class.
interface PostProcessInput {
    cast(object);

    // Gets and sets the program name or number.
    // If the post configuration specifies the parameter programNameIsInteger = true, then the program name must be a number.
    programName;

    // Gets and sets the program comment. The default value for this property is an empty string ("").
    programComment;

    // Gets and sets the full filename (including the path) for the post configuration file (.cps)
    postConfiguration;

    // Gets and sets the path for the output folder where the .cnc files will be located.
    outputFolder;

    // Gets and sets the units option for the cnc output.
    // Valid options are DocumentUnitsOutput, InchesOutput or MillimetersOutput
    outputUnits;

    // Gets and sets the option if opening the cnc file with the editor after it is created.
    // The default value for this property is true.
    isOpenInEditor: boolean;

    // Gets and sets that operations may be reordered between setups to minimize the number of tool changes.
    // Operations within each setup will still be executed in the programmed order.
    // This is commonly used for tombstone machining where you have multiple setups.
    // The default value for this property is false.
    areToolChangesMinimized: boolean;

    // Creates a new PostProcessInput object to be used as an input arguement by the postProcess() and postProcessAll()
    // methods on the CAM class for posting toolpaths and generating CNC files.
    // programName : The program name or number.
    // If the post configuration specifies the parameter programNameIsInteger = true, then the program name must be a number.
    // postConfiguration : The full filename (including the path) for the post configuration file (.cps)
    // The post config file can be stored in any path but for convenience you can use the genericPostFolder or the personalPostFolder property on the CAM class to specify
    // the path if your .cps file is stored in either of those locations. You must add a forward slash (this works for Mac or Windows) to the path defined by these folder
    // properties before the filename (i.e. postConfiguration = cam.genericPostFolder + '/' + 'fanuc.cps')
    // outputFolder : The path for the existing output folder where the .cnc files will be located. This method will create the specified output folder if it does not already exist.
    // It is not necessary to add a slash to the end of the outputFolder path. You should use forward slashes in your path definition if you want your script to run on both Mac and Windows.
    // outputUnits : The units option for the cnc output.
    // Valid options are DocumentUnitsOutput, InchesOutput or MillimetersOutput
    // Returns the newly created PostProcessInput object or null if the creation failed.
    create(programName, postConfiguration, outputFolder, outputUnits);
}
//=========== Setup ============
// Object that represents an existing Setup.
interface Setup {
    cast(object);

    // Gets the Operation Type (MillingOperation or TurningOperation).
    operationType;

    // Gets if this setup is active.
    isActive: boolean;

    // Returns the Operations collection that provides access to existing operations
    // in this setup.
    operations: Operations;

    // Returns the Folders collection that provides access to existing folders
    // in this setup.
    folders: CAMFolders;

    // Returns the Patterns collection that provides access to existing patterns
    // in this setup.
    patterns: CAMPatterns;

    // Returns a collection containing all of the immediate (top level) child operations, folders and patterns in this setup
    // in the order they appear in the browser.
    children: ChildOperationList;

    // Gets a collection containing all of the operations in this setup.
    // This includes all operations nested in folders and patterns.
    allOperations: ObjectCollection;
}
//=========== Setups ============
// Collection that provides access to all of the existing setups in a document.
interface Setups {
    cast(object): Setups;

    // The number of setups in the collection.
    count: number;

    // Function that returns the specified setup using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): Setup;

    // Returns the setup of the specified name.
    // name : The name (as it appears in the browser) of the operation.
    // Returns the specified setup or null in the case where there is no setup with the specified name.
    itemByName(name: string): Setup;

    //=========== SetupSheetFormats ============
    // List of the formats to choose from when generating setup sheets
    // adsk.cam.SetupSheetFormats = {
    //     HTMLFormat: 0,
    //     ExcelFormat: 1
    // };
}
//=========== CAMPattern ============
// Object that represents a pattern in an existing Setup, Folder or Pattern.
interface CAMPattern {
    cast(object): CAMPattern;
}
