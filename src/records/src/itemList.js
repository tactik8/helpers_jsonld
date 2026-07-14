import { records} from '../records.js'
const randomUUID = globalThis.crypto.randomUUID


export function getItemList(noOfItems=5) {


    let record_type = "Thing"
     

    let record_id = "https://www.testrecord.com/" + randomUUID() + "#" + record_type

    let record = {
        "@type": record_type,
        "@id": record_id,
        "itemListElement": [],
        "numberOfItems": noOfItems
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
        "@id": "https://www.testrecord.com/listitem/"  + randomUUID(),
        "item": item,
        "position": position,
        "previousItem": "",
        "nextItem": ""
    }

    return record
}