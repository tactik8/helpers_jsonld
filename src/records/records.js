
import { getAction } from './src/action.js'

import { getAddress} from './src/address.js'

import { getArticle } from './src/article.js'

import { getImage} from './src/image.js'

import { getItemList } from './src/itemList.js'

import { getOffer } from './src/offer.js'

import { getOrganization } from './src/organization.js'

import { getPerson} from './src/person.js'

import { getPostalAddress } from './src/postalAddress.js'

import { getProduct} from './src/product.js'
import { getProductGroup} from './src/productGroup.js'


import { getThing } from './src/thing.js'

import { getMessage } from './src/message.js'

import { getConversation } from './src/conversation.js'

export const records = {
    
    action: getAction,
    article: getArticle,
    address: getAddress,
    conversation: getConversation,
    image: getImage,
    itemList: getItemList,
    message: getMessage,
    offer: getOffer,
    organization: getOrganization,
    person: getPerson,
    postalAddress: getPostalAddress,
    product: getProduct,
    productGroup: getProductGroup,
    thing: getThing,

    Action: getAction,
    Article: getArticle,
    Address: getAddress,
    Conversation: getConversation,
    Image: getImage,
    ItemList: getItemList,
    Message: getMessage,
    Offer: getOffer,
    Organization: getOrganization,
    Person: getPerson,
    PostalAddress: getPostalAddress,
    Product: getProduct,
    ProductGroup: getProductGroup,
    Thing: getThing
}

export default records