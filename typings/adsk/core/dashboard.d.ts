//=========== Data ============
// The Data class provides access to data files
interface Data {

    // Gets and sets the active DataProject
    activeProject: DataProject;

    // Gets the DataProjects collection
    dataProjects: DataProjects;
}

interface DataFile {
    name: string;
    description;
    parentFolder: DataFolder;

    parentProject: DataProject;

}
interface DataFileFuture {
    dataFile: DataFile;

    uploadState;


}
interface DataFiles {
    count: number;
    item(index: number): DataFile;
}

interface DataFolder {
    name: string;
    dataFiles: DataFiles;
    dataFolders: DataFolders;
    parentFolder: DataFolder;
    parentProject: DataProject;
    isRoot: boolean;
    uploadFile(filename: string)

    // Uploads a set of files that represent an assembly There should only
    // be a single top-level assembly file but there can be any number of other
    // files that represent subassemblies.
    // filenames : An array of strings that contains the list of all of the files that
    // are part of the assembly. The name of the the top-level assembly file
    // must be the first file in the array.
    // The upload process is asynchronous which means that this method
    // will return before the upload process had completed. The returned
    // DataFileFuture object can be used to check on the current state of the
    // upload to determine if it is still uploading, is complete, or has failed.
    // If it is complete the final DataFinal can be retrieved through the
    // DataFileFuture object.
    uploadAssembly(filenames: string[])
}

//     // Collection object the provides a list of data folders.
interface DataFolders {
    count: number;
    item(index: number): DataFolder;



    // Returns the folder specified using the name of the folder.
    // name : The name of the folder to return.
    // Returns the folder or null if a folder of the specified name is not found.
    itemByName(name: string): DataFolder;
}

//=========== DataProject ============
// Represents a project within a hub.
interface DataProject {
    name: string;
    rootFolder: DataFolder;

    // Returns the unique ID for this project.
    id;
}

//     //=========== DataProjects ============
//     // Collection object that provides a list of all available projects.
interface DataProjects {

    //     // The number of projects in this collection.
    //     Object.defineProperty(adsk.core.DataProjects.prototype, 'count', {
    //         get : function () {
    //             var result = this._execute('count');
    //             return result ? result.value : undefined;
    //         }
    //     });

    // Returns the specified project.
    // index : The index of the project to return. The first project in the list has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): DataProject;
}

//=========== UploadStates ============
// The different states of a file upload process.
declare enum UploadStates {
    UploadProcessing = 0,
    UploadFinished = 1,
    UploadFailed = 2
}
