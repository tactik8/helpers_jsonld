


import { _h } from '../src/index.js'


function test() {


      const input = { name: ['Alice'], empty: undefined, details: { role: ['Admin'] } };
         const output = _h.simplify(input);

         console.log('o', output)
}

test()



