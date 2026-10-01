import { things } from '../../things/things.js'

import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'

import * as htmlValue from './htmlValue.js'

export function getTable(record, options) {


    // Init itemlist
    let itemList = new things.ItemList(record)

    //console.log(itemList.record)

    // Get properties from record if not provided
    let properties = options?.properties

    if (!properties) {
        let keys = []
        let items = itemList.itemListElement.map(x => h.getValue(x, 'item'))
        console.log(items)
        items.forEach(x => keys = keys.concat(Object.keys(x.record)))
        console.log('kkk', keys)
        keys = [...new Set(keys)]
        keys.sort()
        keys = keys.filter(x => x.startsWith('@') === false)
        keys = ['@type', '@id'].concat(keys)
        properties = keys
    }

    // Get titles
    let titles = options?.titles || properties


    // Init header
    let headContent = ''

    headContent += "<tr>"
    if ((options?.showSelection || true) === true) {
        headContent += `<th scope="col"><input type="checkbox" id="${itemList.record_id}" name="${itemList.record_id}" value=""></th>`
    }
    if ((options?.showPosition || true) === true) {
        headContent += `<th scope="col">#</th>`
    }

    for (let t of titles) {
        headContent += `<th scope="col">${t}</th>`
    }

    if (options.showPotentialAction === true) {
        headContent += `<th scope="col">...</th>`
    }
    headContent += "</tr>"

    // Init body
    let bodyContent = ''

    for (let r of itemList.itemListElement) {
        let item = h.getValue(r, 'item')

        bodyContent += '<tr>'
        if ((options?.showSelection ||true) === true) {
            bodyContent += `<td scope="col"><input type="checkbox" id="${r.record_id}" name="${r.record_id}" value=""></td>`
        }
        if ((options?.showPosition || true) === true) {
            bodyContent += `<td scope="col">${h.getValue(r, 'position')}</td>`
        }

        // Add values
        for (let p of properties) {
            
            let record_type = h.record_type(item)
            let v = h.getValue(item, p)
            let formattedValue = htmlValue.get(record_type, p, v, options)
            bodyContent += `<td scope="col">${formattedValue}</td>`
        }

        // Add potential actions
        if (options.showPotentialAction === true) {
            bodyContent += `<td scope="col">...</td>`
        }

        bodyContent += '</tr>'

    }



    // Integrate content
    let content = `
        <table class="table">
            <thead>
                    ${headContent}
            </thead>
            
            <tbody>
                    ${bodyContent}

            </tbody>
        </table>
    `

    return content

}