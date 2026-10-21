import {
    isItemList,
    toItemList,
    clean,
    getItemListElement,
    setItemListElement,
    insert,
    insertBefore,
    insertAfter,
    prepend,
    append,
    remove,
    isListItem,
    toListItem,
    lt,
    gt,
    sort,
    find,
    findByPosition,
    findByListItem,
    findByItem,
    getPosition,
    setPosition,
    incrementPositions,
    decrementPositions,
    ensurePositions,
    getMinPosition,
    getMaxPosition,
    ensurePreviousNextItem,
    getItem,
    setItem
} from '../src/itemListHelpers.js';


describe('JSON-LD ItemList & ListItem Utilities', () => {

    describe('Type Identification & Conversions', () => {
        test('isItemList identifies ItemList correctly', () => {
            expect(isItemList({ '@type': 'ItemList' })).toEqual(true);
            expect(isItemList({ '@type': 'Thing' })).toEqual(false);
            expect(isItemList(null)).toEqual(false);
        });

        test('isListItem identifies ListItem correctly', () => {
            expect(isListItem({ '@type': 'ListItem' })).toEqual(true);
            expect(isListItem({ '@type': 'Thing' })).toEqual(false);
        });

        test('toListItem wraps raw values in a ListItem', () => {
            const raw = 'Simple Item';
            const item = toListItem(raw, 2);

            expect(item['@type']).toEqual('ListItem');
            expect(item.item).toEqual('Simple Item');
            expect(item.position).toEqual([2]);
        });

        test('toItemList converts raw values into an ItemList', () => {
            const rawArray = ['Item 1', 'Item 2'];
            const itemList = toItemList(rawArray);

            expect(itemList['@type']).toEqual('ItemList');
            expect(itemList.numberOfItems).toEqual([2]);
            expect(itemList.itemListElement).toHaveLength(2);
            expect(itemList.itemListElement[0].item).toEqual('Item 1');
            expect(itemList.itemListElement[1].item).toEqual('Item 2');
        });
    });

    describe('Getters & Setters', () => {
        const sampleList = {
            '@type': 'ItemList',
            itemListElement: [{ '@type': 'ListItem', item: 'A' }]
        };

        test('getItemListElement & getItemListElement retrieve elements', () => {
            expect(getItemListElement(sampleList)).toHaveLength(1);
            expect(getItemListElement(sampleList)).toEqual(getItemListElement(sampleList));
        });

        test('setItemListElement & setItemListElement update elements', () => {
            const updated = setItemListElement(sampleList, ['B', 'C']);
            expect(updated.itemListElement).toHaveLength(2);
        });

        test('getItem & setItem work on ListItems', () => {
            const listItem = { '@type': 'ListItem', item: 'Old Value' };
            expect(getItem(listItem)).toEqual('Old Value');

            const updated = setItem(listItem, 'New Value');
            expect(getItem(updated)).toEqual('New Value');
        });
    });

    describe('Positioning & Comparison Math', () => {
        const itemPos0 = { position: 0 };
        const itemPos1 = { position: 1 };
        const itemNoPos = {};

        test('getPosition parses positions and handles invalid values', () => {
            expect(getPosition({ position: '5' })).toEqual(5);
        });

        test('setPosition clamps negative positions to 0', () => {
            const result = setPosition({}, -5);
            expect(result.position).toEqual([0]);
        });

        test('lt & gt compare positions accurately', () => {
            expect(lt(itemPos0, itemPos1)).toEqual(true);
            expect(gt(itemPos1, itemPos0)).toEqual(true);

            // Undefined positions fall back to standard ordering checks
            expect(lt(itemNoPos, itemPos0)).toEqual(true);
            expect(gt(itemNoPos, itemPos0)).toEqual(false);
            expect(lt(itemNoPos, itemNoPos)).toEqual(false);
        });

        test('getMinPosition & getMaxPosition return bounds safely', () => {
            const items = [{ position: 2 }, { position: 10 }, { position: 5 }];
            expect(getMinPosition(items)).toEqual(2);
            expect(getMaxPosition(items)).toEqual(10);

            // Edge Case: Empty array returns undefined (not Infinity)
            expect(getMinPosition([])).toEqual(undefined);
            expect(getMaxPosition([])).toEqual(undefined);
        });

        test('incrementPositions & decrementPositions shift values correctly', () => {
            const items = [{ position: 0 }, { position: 1 }, { position: 2 }];

            const incremented = incrementPositions(items, 1);
            expect(incremented.map(getPosition)).toEqual([0, 2, 3]);

            const decremented = decrementPositions(incremented, 2);
            expect(decremented.map(getPosition)).toEqual([0, 1, 2]);
        });
    });

    describe('Sorting & Alignment Logic', () => {
        test('sort orders items by position', () => {
            const items = [{ position: 5 }, { position: 1 }, { position: 3 }];
            const sorted = sort(items);
            expect(sorted.map(getPosition)).toEqual([1, 3, 5]);
        });

        test('ensurePositions assigns continuous indices', () => {
            const items = [{ position: 10 }, { position: 20 }];
            const aligned = ensurePositions(items, 0);

            expect(aligned[0].position).toEqual([0]);
            expect(aligned[1].position).toEqual([1]);
        });

        test('ensurePreviousNextItem constructs bidirectional links', () => {
            const rawList = toItemList(['First', 'Second']);
            const cleaned = ensurePreviousNextItem(rawList);
            const elements = getItemListElement(cleaned);

            expect(elements[0].previousItem).toEqual([]);
            expect(elements[0].nextItem).toEqual([{ '@id': elements[1]['@id'] }]);

            expect(elements[1].previousItem).toEqual([{ '@id': elements[0]['@id'] }]);
            expect(elements[1].nextItem).toEqual([]);
        });
    });

    describe('Find Helpers', () => {
        const items = [
            { '@type': 'ListItem', '@id': 'id-0', position: 0, item: 'Apple' },
            { '@type': 'ListItem', '@id': 'id-1', position: 1, item: 'Banana' }
        ];

        test('find picks proper search strategy automatically', () => {
            // Find by numeric position
            expect(find(items, 1)).toEqual(items[1]);

            // Find by ListItem object lookup
            expect(find(items, items[0])).toEqual(items[0]);

            // Find by raw inner value match
            expect(find(items, 'Banana')).toEqual(items[1]);

            // Null target returns undefined
            expect(find(items, null)).toEqual(undefined);
        });

        test('findByPosition returns matched element', () => {
            expect(findByPosition(items, 0)).toEqual(items[0]);
            expect(findByPosition(items, 99)).toEqual(undefined);
        });
    });

    describe('CRUD Operations', () => {
        let list;

        beforeEach(() => {
            list = toItemList(['A', 'B', 'C']);
        });

        test('insert inserts item at target position and re-indexes', () => {
            const updated = insert(list, 'Inserted', 1);
            const items = getItemListElement(updated);

            expect(items).toHaveLength(4);
            expect(items[1].item).toEqual('Inserted');
            expect(updated.numberOfItems).toEqual([4]);
        });

        test('insertBefore places item ahead of reference target', () => {
            const items = getItemListElement(list);
            const target = items[1]; // Item 'B'

            const updated = insertBefore(list, 'New-Before-B', target);
            const updatedItems = getItemListElement(updated);

            expect(updatedItems[1].item).toEqual('New-Before-B');
            expect(updatedItems[2].item).toEqual('B');
        });

        test('insertAfter places item after reference target', () => {
            const items = getItemListElement(list);
            const target = items[0]; // Item 'A'

            const updated = insertAfter(list, 'New-After-A', target);
            const updatedItems = getItemListElement(updated);

            expect(updatedItems[1].item).toEqual('New-After-A');
            expect(updatedItems[2].item).toEqual('B');
        });

        test('prepend adds item to beginning of list', () => {
            const updated = prepend(list, 'Start');
            const items = getItemListElement(updated);

            expect(items[0].item).toEqual('Start');
            expect(items[0].position).toEqual([0]);
        });

        test('append adds item to end of list', () => {
            const updated = append(list, 'End');
            const items = getItemListElement(updated);

            expect(items[items.length - 1].item).toEqual('End');
        });

        test('remove deletes element and re-indexes surrounding positions', () => {
            const items = getItemListElement(list);
            const itemToRemove = items[1]; // Item 'B'

            const updated = remove(list, itemToRemove);
            const newItems = getItemListElement(updated);

            expect(newItems).toHaveLength(2);
            expect(newItems[0].item).toEqual('A');
            expect(newItems[1].item).toEqual('C');
            expect(updated.numberOfItems).toEqual([2]);
        });
    });
});