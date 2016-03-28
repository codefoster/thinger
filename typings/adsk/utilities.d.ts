interface Autodesk {
    toBase64(buffer:ArrayBuffer):string;
    fromBase64(encoded:string):ArrayBuffer;
    utf8ToString(buffer:ArrayBuffer):string;
    readFile(filename:string)
    writeFile(filename:string, data:ArrayBuffer, mode:string);
    copyFile(fromFilename:string,toFilename:string);
    renameFile(fromFilename:string, toFilename:string);
    removeFile(filename:string);
    createDirectory(filename:string);
    listDirectoryFiles(filename:string, regularFilesOnly:boolean, recursive:boolean); // return type?
    fileExists(filename:string); // return type?
    fileIsDirectory(filename:string); // return type?
    fileSize(filename:string); // return type?
    tempDirectory(); //return type?
}