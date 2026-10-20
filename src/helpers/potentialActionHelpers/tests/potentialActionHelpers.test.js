import { potentialActionHelpers as pa } from '../potentialActionHelpers.js';

describe('comparisonHelpers', () => {
    describe('Get', () => {
        it('Get for ItemList', () => {
            let itemlist1 = {
                '@type': 'ItemList',
                '@id': 'https://www.test.com/itemlist1#itemlist',
                numberOfItems: 3,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        '@id': 'https://www.test.com/listitem0#listitem',
                        position: 0,
                        item: {
                            '@type': 'Thing',
                            '@id': 'https://www.test.com/thing0#thing',
                            name: 'Thing0',
                        },
                    },
                    {
                        '@type': 'ListItem',
                        '@id': 'https://www.test.com/listitem1#listitem',
                        position: 1,
                        item: {
                            '@type': 'Thing',
                            '@id': 'https://www.test.com/thing1#thing',
                            name: 'Thing1',
                        },
                    },
                    {
                        '@type': 'ListItem',
                        '@id': 'https://www.test.com/listitem2#listitem',
                        position: 2,
                        item: {
                            '@type': 'Thing',
                            '@id': 'https://www.test.com/thing2#thing',
                            name: 'Thing2',
                        },
                    },
                ],
            };

            let itemlist2 = JSON.parse(JSON.stringify(itemlist1));
            itemlist2 = pa.add(itemlist2);

            let potentialActions0 = itemlist2.itemListElement[0].potentialAction
            expect(potentialActions0.length).toBe(3);

            let potentialActions1 = itemlist2.itemListElement[1].potentialAction
            expect(potentialActions1.length).toBe(4);

            let potentialActions2 = itemlist2.itemListElement[2].potentialAction
            expect(potentialActions2.length).toBe(3);
          
        });

    })
});
