
import * as h from '../jsonldBase/jsonldBase.js'

import {things} from  '../things/things.js'



export function getRules(record){


    let record_type = h.record_type(record)


    if(record_type == "ItemList"){
        return getRulesItemList(record)
    }


    if(record_type == "ListItem"){
        return getRulesListItem(record)
    }

}



function getRulesItemList(record){

    let rules = []

    let a = new things.InsertAction("New record")

    


}


function getRulesListItem(record){

    let rules = []

    if(record?.position != 0){
        let a = new things.InsertAction("New record")

    }
    let a = new things.InsertAction("New record")

    


}