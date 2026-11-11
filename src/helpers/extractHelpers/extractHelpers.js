
import  * as textExtractor from './src/text/textExtractor.js'
import  * as htmlExtractor from './src/html/htmlExtractor.js'
import  * as markdownExtractor from './src/markdown/markdownExtractor.js'

export const extractor = {
    text: textExtractor,
    html: htmlExtractor,
    markdown: markdownExtractor,
    md: markdownExtractor
}

export const extractHelpers = extractor