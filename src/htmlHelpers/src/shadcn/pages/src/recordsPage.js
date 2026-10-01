

import { blocks} from '../../blocks/blocks.js'
import { blankPage } from './blankPage.js'



/**
 * 
 * @param {*} param0 
 */
export function recordsPage({website, webpage, title, url, headContent, content, records, properties, headers, offset, limit, options}){


    content = content ?? ""
    content += blocks.Table({url, records, offset, limit, options})

    
    let html = blankPage({website, webpage, title, headContent, content, options})
    
    
    return html


}

