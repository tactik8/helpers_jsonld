


import fs from 'fs/promises';
import path from 'path';


export const diskHelpers = {

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

}




async function checkExists(filePath, filename,) {

    filePath = getFilePath(filePath, filename)

    try {
        await fs.access(filePath);
        return true;
    } catch {

        return false;
    }
}

async function ensureDirectoryExists(dirPath) {
    try {
        await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
        throw error;
    }
}

async function saveTextFile(filePath, filename, content) {

    await ensureDirectoryExists(filePath)

    filePath = getFilePath(filePath, filename)


    try {
        await fs.writeFile(filePath, content, 'utf8');
    } catch (error) {
        throw error;
    }
}

async function loadTextFile(filePath, filename) {

    filePath = getFilePath(filePath, filename)

    try {
        let text = await fs.readFile(filePath, 'utf8');
        return text
    } catch (error) {

        let e = String(error)
        if (e.includes('no such file or directory')) {
            return []
        }
        console.error(`Error loading file: ${error.message}`);
        throw error;
    }
}

async function deleteFile(filePath, filename) {

    filePath = getFilePath(filePath, filename)

    try {
        await fs.rm(filePath, { force: true });
    } catch (error) {
        console.error(`Error deleting file: ${error.message}`);
    }

}

async function deleteDirectory(dirPath) {


    try {
        // force: true ignores errors if the directory doesn't exist
        await fs.rm(dirPath, { recursive: true, force: true });
    } catch (error) {
        console.error(`Error deleting directory: ${error.message}`);
    }
}

async function listFiles(directoryPath) {

    let exists = await checkExists(directoryPath)
    if (exists == false) {
        return []
    }

    try {
        const files = await fs.readdir(directoryPath);
        return files
    } catch (error) {
        console.error(`Error listing files: ${error.message}`);
    }
}



function getFilePath(filePath, fileName) {

    filePath = filePath ?? ""

    fileName = fileName ?? ""

    let r = [filePath, fileName]
    r = r.filter(x => x && x != "")
    r = r.join('/')
    r = r.replaceAll('//', '/')


    return r

}