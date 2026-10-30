import { jsonldBase as h } from '../../../../../jsonldBase/jsonldBase.js';

import * as dataConversion from '../../dataConversion/dataConversion.js';
import { components } from '../../components/components.js';
import { things } from '../../../../../things/things.js';

import * as htmlValue from '../../../formating/htmlValue.js';

import { formatHelpers } from '../../../../../formatHelpers/formatHelpers.js';
/**
 *
 * @param {*} param0
 */
export function Media(
    record,
    className
) {

    let contentUrl = h.getValue(record, 'contentUrl')

    if(!contentUrl){
        return ''
    }


    let poster = ''

    if (h.record_type(record) == 'VideoObject') {

        return MediaVideo(record, className)
    }

    return MediaImage(record, className)
        
        
}



export function MediaVideo(record, className){

    let contentUrl = h.getValue(record, 'contentUrl')

    if(!contentUrl){
        return ''
    }

    let poster = ''

    return `
    
            <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${poster || ""}">
                    <source src="${contentUrl}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
            </video>
    
    `

}

export function MediaImage(record, className){

    let contentUrl = h.getValue(record, 'contentUrl')

    if(!contentUrl){
        return ''
    }


    return components.Modal(


        components.ImageModal(contentUrl)

    )
    

}