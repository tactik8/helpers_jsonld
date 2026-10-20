import { _h, helpers } from '../src/index.js';

async function test4() {
    let t = {
        '@context': 'https://schema.org/',
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing0#thing',
        name: 'thing0',
        url: 'https://www.test.com/thing0',
        other: {
            '@context': 'https://schema.org/',
            '@type': 'Thing',
            '@id': 'https://www.test.com/thing1#thing',
            name: 'thing1',
            url: 'https://www.test.com/thing1',
            other: {
                '@context': 'https://schema.org/',
                '@type': 'Thing',
                '@id': 'https://www.test.com/thing2#thing',
                name: 'thing2',
                url: 'https://www.test.com/thing2',
                other: {
                    '@id': 'https://www.test.com/thing0#thing',
                },
            },
        },
    };

    let things = _h.flatten(t);

    console.dir(things, { depth: null, colors: true });

    let t2 = _h.expand(things, _h.ref(t), true);

    console.log('------------------------------------------------------------');
    console.dir(t2, { depth: null, colors: true });

     let store = [
                    { '@id': 'c1', name: 'Parent', child: { '@id': 'c2' } },
                    { '@id': 'c2', name: 'Child' }
                ];
                let record = { '@id': 'c1' };
                const result = _h.expand(store, record);
              //  expect(result).toBe('Child');
                console.log('dd', result)
    // expect(result.child.name).toBe('Child');
}

test4();
