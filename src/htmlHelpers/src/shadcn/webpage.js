


import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'

import * as dataConversion from './dataConversion/dataConversion.js'

import * as components from './components/components.js'
import { things} from '../../../things/things.js'


/**
 * 
 * @param {*} param0 
 */
export function get({website, webpage, title, headContent, content,  options}){

    let w = new things.WebSite(website)

    

    let config = {
        title: title || h.getValue(webpage, 'title') || h.getValue(website, 'title'),
        headContent: headContent,
        content: content
    }

    // Add breadcrumbs
    config.breadcrumbs = components.

    // Add headers
    config.header = components.header({ brand: w?.brand?.name || w?.name, navItems: w.WPHeader.hasPart }) 
    config.footer = components.footer({ brand: w?.brand?.name || w?.name, navItems: w.WPHeader.hasPart }) 

    let html =  components.webpage(config)


    return html


}
