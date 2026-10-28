import { jsonldBase as h } from '../../../../../jsonldBase/jsonldBase.js';

import * as htmlValue from '../../../formating/htmlValue.js';

import * as dataConversion from '../../dataConversion/dataConversion.js';
import { components } from '../../components/components.js';
import { blocks} from '../blocks.js'
import { things } from '../../../../../things/things.js';
import { Media } from './media.js';

import * as hpv from '../../../formating/htmlPropertyValue.js';
import { setValues } from '../../../../../jsonldBase/src/propertyHelpers.js';

export function Record(
    record,
    baseUrl,
    properties,
    className = '',
    attrs = '',
    expandAll = false,
    depth = 0,
    options = {}
) {


    // ensure record is not circular
    record = h.removeCircularRefs(record) 



    // Get properties
    properties = properties || Object.keys(record);

    options.baseUrl = baseUrl || options?.baseUrl
    // Make data
    let result = {
        rows: [],
    };

    let recordContent = formatRecordForObject({
        record,
        baseUrl,
        properties,
        className,
        attrs,
        expandAll,
        depth: 0,
        options,
    });

    // Assemble
    let html = `

        <div class="space-y-4 ${className || ''}" ${attrs || ''}>
            <div class="flex-1">
                ${Media({ record, options }) || ''}
            </div>
            
            <div class="flex-1">
                ${recordContent || ''}
            </div>
            
             <div class="flex-1">
              <details class="space-y-4">
                <summary>JSON Editor</summary>
                ${components.JsonEditor({
                    initialData: record,
                    endpoint: baseUrl,
                })}
              </details>
            </div>
        </div>

    `;

    return html;
}






function formatRecordForObject({
    record,
    properties,
    className = '',
    attrs = '',
    expandAll = false,
    depth = 0,
    options,
}) {
    // Get properties
    properties = properties || Object.keys(record);

    let atProperties = properties.filter(x => x.startsWith('@'))

    let nonAtProperties = properties.filter(x => !x.startsWith('@'))

    properties = (atProperties.sort()).concat(nonAtProperties.sort())

    // Make data
    let result = {
        rows: [],
    };


    let html = components.Table( 
        components.TableHeader(
            components.TableRow(
                components.TableCellRight(
                    ""
                ) + 
                components.TableCellRight(
                    blocks.DropdownMenu(h.getPotentialActions(record))
                )
            )
        ) +
        components.TableBody(
            properties.map(k => (
                components.TableRow(
                    [components.TableCell(k + ':'),
                    components.TableCell(
                        formatRecordForGeneric({
                            record: record,
                            propertyID: k,
                            className,
                            attrs,
                            expandAll,
                            depth: depth + 1,
                            options
                        })
                    )].join(' ')
                )
            )).join(' ')
        )
    )

    return html;
}

function formatRecordForArray({
    record,
    propertyID,
    className = '',
    attrs = '',
    expandAll = false,
    depth = 0,
    options,
}) {
    let values = h.getValues(record, propertyID);

    let content = [];

    for (let v of values) {
        let r = h.clone(record);
        r = h.setValue(r, propertyID, v);
        content.push(
            formatRecordForGeneric({
                record: r,
                propertyID,
                className,
                attrs,
                expandAll,
                depth: depth + 1,
                options,
            }),
        );
    }

    return `
        <ul class="space-y-4 ">
          ${content
              .map(
                  (x) => `
            <li>
              ${x}
            </li>
            `,
              )
              .join('')}

        </ul>
     
  
  `;
}

function formatRecordForGeneric({
    record,
    propertyID,
    className = '',
    attrs = '',
    expandAll = false,
    depth = 0,
    options,
}) {
    let v = h.getValues(record, propertyID);

  
     if (h.isArray(v) && v.length == 1) {
        v = v[0];
    }



    if (h.isArray(v) && v.length == 0) {
       return ''
    }

    if (h.isArray(v) && v.length > 0) {
       
        return  `
            <details class="space-y-4"> 
            
                <summary>${blocks.ValueArray(v, propertyID, options?.baseUrl)}</summary>
      
                ${formatRecordForArray({ record: record, propertyID, className, attrs, expandAll, depth, options })}
            
            </details>
      `;
    }


    // object

    if (v?.['@id']) {

      
        return `
        <details class="space-y-4"> 
        
            <summary>${blocks.ValueThing(v, propertyID, options?.baseUrl)}</summary>
      
            ${formatRecordForObject({ record: v, propertyID: undefined, className, attrs, expandAll, depth, options })}
        
        </details>
      `;
    }

    if (v === undefined) {
        return '';
    }

    return blocks.Value(v, propertyID, options?.baseUrl)

}


