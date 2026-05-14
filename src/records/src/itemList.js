import { records} from '../records.js'
import { v4 as uuidv4 } from 'uuid';


export function getItemList(name=0, noOfItems=5) {


    let record_type = "Thing"
     if (!Number.isNaN(name)) {
        name = record_type + String(name)
    }

    let record_id = "https://www.testrecord.com/itemlist/" + name

    let record = {
        "@type": record_type,
        "@id": record_id,
        "name": name,
        "itemListElement": [] 
    }

    

    let currentItem 
    for (let i = 0; i < noOfItems; i++) {

        let newItem = getListItem(records.thing(i), i)

        if(currentItem){
            currentItem.nextItem = {"@type": newItem?.['@id'] }
            newItem.previousItem = {"@type": currentItem?.['@id'] }
        }

        record.itemListElement.push(newItem)
        currentItem = newItem

    }
    


    return record


}


function getListItem(item, position=0){

    let record = {
        "@type": "ListItem",
        "@id": "https://www.testrecord.com/listitem/"  + uuidv4(),
        "item": item,
        "position": position,
        "previousItem": "",
        "nextItem": ""
    }

    return record
}