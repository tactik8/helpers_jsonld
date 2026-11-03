import * as actionExecutionHelpers from '../src/actionExecutionHelpers.js';
import * as potentialActionHelpers from '../src/potentialActionHelpers.js';
import { jsonldBase as h } from '../jsonldBase.js';

let aeh = actionExecutionHelpers;
let pah = potentialActionHelpers;

let base_url = 'https://www.tets.com';

describe('actionExecutionHelpers', () => {
    describe('property', () => {
        it('set property', () => {
            let record = {
                '@context': 'https://schema.org/',
                '@type': 'Thing',
                '@id': 'https://www.test.com/thing1#thing',
                name: 'thing1',
                url: 'https://www.test.com/thing1',
                image: {
                    '@context': 'https://schema.org/',
                    '@type': 'ImageObject',
                    '@id': 'https://www.test.com/imageobject1#imageobject',
                    name: 'image_1',
                    contentUrl: 'https://placehold.co/600x400',
                },
            };

            let name = h.getName(record);
            let propertyID = 'name';
            let new_name = 'thing1_updated';

            let action = pah.getPropertyUpdateAction(
                record,
                base_url,
                propertyID,
                new_name,
            );

            let executed_action = aeh.execute(action);

            let result = h.getResult(executed_action);

            expect(h.getName(result)).toBe(new_name);
        });

        it('set property multiple2', () => {
            let record = {
                '@context': 'https://schema.org/',
                '@type': 'Thing',
                '@id': 'https://www.test.com/thing1#thing',
                name: 'thing1',
                url: 'https://www.test.com/thing1',
                image: {
                    '@context': 'https://schema.org/',
                    '@type': 'ImageObject',
                    '@id': 'https://www.test.com/imageobject1#imageobject',
                    name: 'image_1',
                    contentUrl: 'https://placehold.co/600x400',
                },
            };

            let new_record = {
                '@context': 'https://schema.org/',
                '@type': 'Thing',
                '@id': 'https://www.test.com/thing10#thing',
                name: 'thing10',
            };

          
            let new_name = 'thing1_updated';
            let new_url = 'https://www.test.com/thing1_updated';

            let action = {
                '@type': 'Action',
                '@id': h.randomUUID(),
                hasPart: [
                    pah.getPropertyUpdateAction(
                        record,
                        base_url,
                        'other',
                        new_record,
                    ),
                    pah.getPropertyUpdateAction(
                        record,
                        base_url,
                        'other.name',
                        'thing20',
                    ),
                ],
            };

            let executed_action = aeh.execute(action);

            let result = h.getResult(executed_action);

            expect(h.getValue(result, 'other.name',)).toBe('thing20');
        });

        it('set property multiple', () => {
            let record = {
                '@context': 'https://schema.org/',
                '@type': 'Thing',
                '@id': 'https://www.test.com/thing1#thing',
                name: 'thing1',
                url: 'https://www.test.com/thing1',
                image: {
                    '@context': 'https://schema.org/',
                    '@type': 'ImageObject',
                    '@id': 'https://www.test.com/imageobject1#imageobject',
                    name: 'image_1',
                    contentUrl: 'https://placehold.co/600x400',
                },
            };

            let name = h.getName(record);
            let propertyName = 'name';
            let propertyUrl = 'url';
            let new_name = 'thing1_updated';
            let new_url = 'https://www.test.com/thing1_updated';

            let action = {
                '@type': 'Action',
                '@id': h.randomUUID(),
                hasPart: [
                    pah.getPropertyUpdateAction(
                        record,
                        base_url,
                        propertyName,
                        new_name,
                    ),
                    pah.getPropertyUpdateAction(
                        record,
                        base_url,
                        propertyUrl,
                        new_url,
                    ),
                ],
            };

            let executed_action = aeh.execute(action);

            let result = h.getResult(executed_action);

            expect(h.getName(result)).toBe(new_name);
            expect(h.getUrl(result)).toBe(new_url);
        });
    });
});
