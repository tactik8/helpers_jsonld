

import * as dataConversion from './dataConversion/dataConversion.js'

import * as components from './components/components.js'

import * as webpage from './webpage.js'

import * as breadcrumbs from './components/src/breadcrumb.js'

import { pages } from './pages/pages.js'

export const shadcn = {
    ...pages, 
    components,
    ...components
}

export default shadcn