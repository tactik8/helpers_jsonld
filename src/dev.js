

import { _h, helpers } from './index.js'


function test() {

    let webpage = new helpers.things.WebPage()

    webpage.addHeaderLink('/', 'home')
    webpage.addHeaderLink('/components', 'components')
    webpage.addHeaderLink('/data', 'data')
    webpage.addHeaderLink('/tests', 'tests')

    webpage.addFooterLink('/', 'home')
    webpage.addFooterLink('/components', 'components')
    webpage.addFooterLink('/data', 'data')
    webpage.addFooterLink('/tests', 'tests')

    console.log(JSON.stringify(webpage.record))
}

test()