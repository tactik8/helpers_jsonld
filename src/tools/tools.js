

import * as apiDB from './apiDB/apiDB.js'
import * as apiClient from './apiClient/apiClient.js'
import * as cacheDB from './cacheDB/cacheDB.js'
import * as diskDB from './diskDB/diskDB.js'

export const tools = {


    apiDB,
    ...apiDB,

    apiClient,
    ...apiClient,

    cacheDB,
    ...cacheDB,

    diskDB,
    ...diskDB

}