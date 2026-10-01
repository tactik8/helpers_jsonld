

import {things} from '../things/things.js'

import { dataHelpers} from '../dataHelpers/dataHelpers.js'



/**
 * @fileoverview Helpers to fetch (get, post, etc) to an API endpoint.
 * @module dataHelpers
 */



/**
 * Helpers to fetch (get, post, etc) to an API endpoint.
 * @class 
 */
export class ApiClient {
    /**
     * 
     * @param {*} baseUrl - The base url for the api (https://www.test.com/api)
     */
    constructor(baseUrl, databaseID, tenantID) {
        this._baseUrl 
        this._headers
        this._databaseID 
        this._tenantID 
        this.baseUrl = baseUrl
        this.databaseID = databaseID
        this.tenantID =tenantID
    }


    get baseUrl(){
        return this._baseUrl
    }
    set baseUrl(value){
        this._baseUrl = value
    }

    get databaseID(){
        return this._databaseID
    }
    set databaseID(value){
        this._databaseID = value
    }

    get tenantID(){
        return this._tenantID
    }
    set tenantID(value){
        this._tenantID = value
    }

    get headers(){
        return this._headers
    }

    set headers(value){
        this._headers= value
    }

    /**
     * Returns Action Thing object
     * @param {*} path 
     * @param {*} params 
     * @returns 
     */
    async get(path, params) {
        return await apiGet(this.headers, this.baseUrl, path, params)
    }

     /**
     * Return Action Thing object with post
     * @param {*} path 
     * @param {*} data 
     * @returns 
     */
    async post(path, data) {
        return await apiPost(this.headers, this.baseUrl, path, data)
    }

    /**
     * Return Action Thing object with patch
     * @param {*} path 
     * @param {*} data 
     * @returns 
     */
    async patch(path, data) {
        return await apiPatch(this.headers, this.baseUrl, path, data)
    }

     /**
     * Return Action Thing object with delete
     * @param {*} path 
     * @param {*} data 
     * @returns 
     */
    async delete(path, params) {
        return await apiDelete(this.headers, this.baseUrl, path, params)
    }

    async test(path){
        return await apiTest(this.headers, this.baseUrl, path)
    }


}


export default {
    ApiClient
}

/**
 * 
 * @param {*} headers 
 * @param {*} baseUrl 
 * @param {*} path 
 * @param {*} params 
 * @returns 
 */
async function apiGet(headers, baseUrl, path, params) {

    let action = new things.Action()
    action.name = "API Get"
    action.instrument = new things.WebAPI(baseUrl)

    action.object = params



    try {


        params = JSON.parse(JSON.stringify(params || {}, null, 4))

        params.filter = JSON.stringify(params?.filter || {}, null, 4)


        let url = dataHelpers.url.getUrl(baseUrl, path, params)

        let baseHeaders = {
          
            
        }

        let options = {
            "headers": { ...(headers || {}), ...baseHeaders},
            "method": "GET"
        }

        let response = await fetch(url, options)

        if (response.status >= 300) {
            action.setFailed(response.statusText)
            return action
        }

        let result = await response.json()

        action.setCompleted(result)

        return action

    } catch (err) {
        action.setFailed(String(err))
        return action
    }
}





async function apiPost(headers, baseUrl, path, data) {

    let action = new things.Action()
    action.name = "API Post"
    action.instrument = new things.WebAPI(baseUrl)

    try {

        let url = dataHelpers.url.getUrl(baseUrl, path, {})

        let baseHeaders = {
            "Content-Type": "application/json"
        }

        let options = {
            "headers": { ...(headers || {}), ...baseHeaders},
            "method": "POST",
            "body": JSON.stringify(data, null, 4)
        }

        let response = await fetch(url, options)

        if (response.status >= 300) {
            console.log(url)
            console.log(response.statusText)
            action.setFailed(response.statusText)
            return action
        }

        let result = await response.json()

        action.setCompleted(result)

        return action

    } catch (err) {
        console.log(url)
        console.log(err)
        action.setFailed(String(err))
        return action
    }
}


async function apiPatch(headers, baseUrl, path, data) {

    let action = new things.Action()
    action.name = "API Post"
    action.instrument = new things.WebAPI(baseUrl)

    try {

        let url = dataHelpers.url.getUrl(baseUrl, path, {})

        let baseHeaders = {
            "Content-Type": "application/json"
        }

        let options = {
            "headers": { ...(headers || {}), ...baseHeaders},
            "method": "PATCH",
            "body": JSON.stringify(data, null, 4)
        }

        let response = await fetch(url, options)

        if (response.status >= 300) {
            action.setFailed(response.statusText)
            return action
        }

        let result = await response.json()

        action.setCompleted(result)

        return action

    } catch (err) {
        action.setFailed(String(err))
        return action
    }
}


async function apiDelete(headers, baseUrl, path, params) {

    let action = new things.Action()
    action.name = "API Get"
    action.instrument = new things.WebAPI(baseUrl)

    try {

        params = JSON.parse(JSON.stringify(params || {}, null, 4))

        params.filter = JSON.stringify(params?.filter || {}, null, 4)

        let url = dataHelpers.url.getUrl(baseUrl, path, params)

        let baseHeaders = {}

        let options = {
            "headers": { ...(headers || {}), ...baseHeaders},
            "method": "DELETE"
        }

        let response = await fetch(url, options)

        if (response.status >= 300) {
            action.setFailed(response.statusText)
            return action

        }






        let result = await response.json()

        action.setCompleted(result)

        return action

    } catch (err) {
        action.setFailed(String(err))
        return action
    }
}




async function apiTest(headers, baseUrl, path){

    let record = {
        "@type": "Thing",
        "@id": "https://krknapi.co/testRecordV1",
        "name": "testRecordV1"
    }


    let action = new things.Action()

    let params = {"filter": {"@id": record['@id']}}

    let a


    // Step 1 Delete record to ensure fresh start
    a = await apiDelete(headers, baseUrl, path, params)
    action.hasPart = action.hasPart.concat(a.record)
    if((await a).isFailed){
        action.setFailed('Error step1 delete record')
        return action.record
    }

    // Step 2 Create record
    a = await apiPost(headers, baseUrl, path, record)
    action.hasPart = action.hasPart.concat(a.record)
    if((await a).isFailed){
        action.setFailed('Error step2 create record')
        return action.record
    }


    // Step 3 Get record
     a = await apiGet(headers, baseUrl, path, params)
    action.hasPart = action.hasPart.concat(a.record)
    if((await a).isFailed){
        action.setFailed('Error step3 get record')
        return action.record
    }
    if(a.result[0]?.['@id'] != record?.['@id']){
         action.setFailed('Error step3 got wrong record')
        return action.record
    }


    // Step 4 Delete record to ensure fresh start
     a = await apiDelete(headers, baseUrl, path, params)
    action.hasPart = action.hasPart.concat(a.record)
    if((await a).isFailed){
        action.setFailed('Error step4 delete record')
        return action.record
    }

    // Step 5 get record
      a = await apiGet(headers, baseUrl, path, params)
    action.hasPart = action.hasPart.concat(a.record)
    if((await a).isFailed){
        action.setFailed('Error step5 get record')
        return action
    }
    if(a.result?.name == record?.['name']){
         action.setFailed('Error step5 record still exist')
        return action
    }


    action.setCompleted()
    return action.record
}




