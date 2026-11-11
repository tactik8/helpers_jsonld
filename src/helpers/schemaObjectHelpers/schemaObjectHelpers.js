import * as Action from './src/action/action.js';
import * as ItemList from './src/itemList/itemList.js';
import * as ListItem from './src/listItem/listItem.js';
import * as Organization from './src/organization/organization.js';
import * as Person from './src/person/person.js';
import * as Rating from './src/rating/rating.js';
import * as Review from './src/review/review.js';
import * as Thing from './src/Thing/Thing.js';
import * as WebPage from './src/WebPage/WebPage.js';
import * as WebSite from './src/WebSite/WebSite.js';

export const schemaObjectHelpers = {
    Action,
    ItemList,
    ListItem,
    Organization,
    Person,
    Rating,
    Review,
    Thing,
    WebPage,
    WebSite,

    ...Action.propertyHelpers,
    ...ItemList.propertyHelpers,
    ...ListItem.propertyHelpers,
    ...Organization.propertyHelpers,
    ...Person.propertyHelpers,
    ...Rating.propertyHelpers,
    ...Review.propertyHelpers,
    ...Thing.propertyHelpers,
    ...WebPage.propertyHelpers,
    ...WebSite.propertyHelpers,
};
