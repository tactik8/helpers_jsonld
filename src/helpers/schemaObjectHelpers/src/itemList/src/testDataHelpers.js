import { itemList as lh} from '../itemList.js'

import { listItem } from '../../listItem/listItem.js'

/**
 * 
 * @param {*} name 
 * @param {*} nbOfChildrens - Number of itemListElement
 * @param {*} nbOfItems - Number of items (will return an array if > 1)
 */
export function getTestRecord(name, nbOfChildrens, nbOfItems) {


     if(nbOfItems && nbOfItems > 1){
        let results = []
        for(let i =0; i < nbOfItems; i++){
            results.push(getTestRecord(name + "_" + String(i), nbOfChildrens, 0))
        }
        return 
    }

    
    let r = lh.newRecord()
    r["@id"] = name + "_id"


    for(let i =0; i < nbOfChildrens; i++){

        let l = listItem.getTestRecord(name + '_listitem_' + String(i))
        r = lh.append(l)
    }

    return r

}