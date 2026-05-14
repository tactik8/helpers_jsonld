
import { getAction } from './src/action.js'

import { getAddress} from './src/address.js'

import { getArticle } from './src/article.js'

import { getImage} from './src/image.js'

import { getItemList } from './src/itemList.js'

import { getPerson} from './src/person.js'

import { getProduct} from './src/product.js'

import { getThing } from './src/thing.js'


export const records = {
    
    action: getAction,
    article: getArticle,
    address: getAddress,
    image: getImage,
    itemList: getItemList,
    person: getPerson,
    product: getProduct,
    thing: getThing


}

export default records