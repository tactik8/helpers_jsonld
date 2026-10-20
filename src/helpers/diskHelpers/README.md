# Helpers funciton to facilitate I/O to disk

 load: loadTextFile,
    save: saveTextFile,
    exists: checkExists,
    list: listFiles,
    delete: deleteFile,
    file: {
        load: loadTextFile,
        save: saveTextFile,
        delete: deleteFile,
        exists: checkExists,
    },
    dir: {
        list: listFiles,
        exists: checkExists,
        delete: deleteDirectory
    },
    getFilePath