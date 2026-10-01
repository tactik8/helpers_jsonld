



import { jsonldBase as h } from '../../../../../jsonldBase/jsonldBase.js'

import * as dataConversion from '../../dataConversion/dataConversion.js'

import {components} from '../../components/components.js'
import { things} from '../../../../../things/things.js'


/**
 * 
 * @param {*} param0 
 */
export function blankPage({website, webpage, title, headContent, content,  options}){

    // Init website object
    webpage = new things.WebPage(webpage)
    website = new things.WebSite(website)

    // Init config
    let config = {}

    config.title = title
    config.title = config.title || h.getValue(webpage, 'title') 
    config.title = config.title || h.getValue(webpage, 'name') 
    config.title = config.title || h.getValue(website, 'title')
    config.title = config.title || h.getValue(website, 'name')


    // Add head content
    config.headContent = headContent 

    // Add breadcrumb
    config.breadcrumb = components.Breadcrumb({links: h.getValue(webpage, 'breadcrumb')})

    // Add headers / footers

    let brandName = h.getValue(website, 'about.name') ?? h.getValue(website, 'name') ?? h.getValue(webpage, 'about.name') ?? h.webpage(website, 'name')

    config.header = components.Header({ brand: brandName, navItems: webpage.WPHeader.hasPart }) 
    config.footer = components.Footer({ brand: brandName, navItems: webpage.WPFooter.hasPart }) 


    // add content 
    config.content = content

    // Generate html
    let html =  components.Webpage(config)


    return html


}
