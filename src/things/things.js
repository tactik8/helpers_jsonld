
import { jsonldBase } from '../jsonldBase/jsonldBase.js'
import * as format from './format/format.js'

import { Action, UpdateAction, AddAction, InsertAction, AppendAction, PrependAction, DeleteAction, ReplaceAction } from './src/action.js'
import { BrandDesign } from './src/brandDesign.js'
import { Conversation } from './src/conversation.js'
import { CreativeWork } from './src/creativeWork.js'
import { DataFeed } from './src/dataFeed.js'
import { DataFeedItem } from './src/dataFeedItem.js'
import { ItemList } from './src/itemList.js'
import { ListItem } from './src/listItem.js'
import { Message } from './src/message.js'
import { Offer } from './src/offer.js'
import { Product } from './src/product.js'
import { ProductGroup } from './src/productGroup.js'
import { PropertyValue } from './src/propertyValue.js'
import { WebSite } from './src/webSite.js'
import { WebPage } from './src/webPage.js'
import { Thing } from './src/thing.js'
import { WebAPI } from './src/webAPI.js'


/**
 * @fileoverview Classes to generate JSON-LD.
 * @module things
 */


export const things = {
    get: Thing.toThing,
    toThing: Thing.toThing,
    Action,
    AddAction,
    AppendAction,
    BrandDesign,
    Conversation,
    CreativeWork,
    DataFeed,
    DataFeedItem,
    DeleteAction,
    InsertAction,
    ItemList,
    Message,
    Offer,
    Product,
    ProductGroup,
    PropertyValue,
    Thing,
    PrependAction,
    ReplaceAction,
    UpdateAction,
    WebAPI,
    WebPage,
    WebSite,
    format,
    toThing
}



export default things



function toThing(record) {

    let record_type = jsonldBase.record_type(record)

    if (things?.[record_type]) {
        let t = new things[record_type](record)
        return t
    } else {
        let t = new things.Thing(record)
        return t
    }

}