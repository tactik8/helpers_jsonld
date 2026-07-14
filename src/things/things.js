

import { Thing } from './src/thing.js'
import { Action, UpdateAction, AddAction, InsertAction, AppendAction, PrependAction, DeleteAction, ReplaceAction } from './src/action.js'
import { ItemList } from './src/itemList.js'

import { Conversation } from './src/conversation.js'
import { CreativeWork } from './src/creativeWork.js'

import { Message } from './src/message.js'

import { Offer} from './src/offer.js'
import { Product} from './src/product.js'
import { ProductGroup } from './src/productGroup.js'
import { PropertyValue} from './src/propertyValue.js'

import { WebSite, WebPage, WebAPI } from './src/other.js'

export * from './src/thing.js'
export * from './src/action.js'
export * from './src/itemList.js'
export * from './src/creativeWork.js'



export const things = {
    get: Thing.toThing,
    toThing: Thing.toThing,
    Action,
    AddAction,
    AppendAction,
    Conversation,
    CreativeWork,
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
    WebSite
}

export default things