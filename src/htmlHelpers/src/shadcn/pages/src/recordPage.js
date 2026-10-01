

import { blocks} from '../../blocks/blocks.js'
import { blankPage } from './blankPage.js'


/**
 * 
 * @param {*} param0 
 */
export function recordPage({website, webpage, title, url, headContent, content, record, properties, headers, options}){


    content = content ?? ""
    content += blocks.Record({url, record, options})

    
    let html = blankPage({website, webpage, title, headContent, content, options})
    
    
    return html


}

