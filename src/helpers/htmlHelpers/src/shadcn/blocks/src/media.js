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
export function Media({
    url,
    record,
    options,
    layoutClasses,
    className,
    attrs,
}) {

    let contentUrl = h.getValue(record, 'contentUrl')

        if(!contentUrl){
            return ''
        }

        
    if (h.record_type(record) == 'VideoObject') {
        
        let poster = h.getValue(record, 'thumbnailUrl');

        

        return `  
        

                <video class="w-full min-w-64 h-auto max-w-full " controls loop poster="${poster}">
                    <source src="${contentUrl}" onerror="this.style.display='none';" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>
           
            
        `;
    }

    return `
        
                    <div class="block-media  ">

          
                ${components.ImageModal({ src: h.getImageUrl(record), alt: h.getImageName(record) })}
         
                    </div>

        `;
}
