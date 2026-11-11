# SchemaObjectHelpers
Library to assist inmanaging schema.org objects








## How to use

### Code generation
The code is automatically generated. 
Run generate() from codeGenerator.js




## Common function

### Properties

All schema.org properties are available at root level
singular for first item, plural for all items (always returns array)

```
import { schemaObjectHelpers as _h} from './schemaObjectHelpers.js'


let record = {
  "@context": "https://schema.org/",
  "@type": "Thing",
  "@id": "https://www.test.com/thing1#thing",
  "name": "thing1",
  "url": "https://www.test.com/thing1",
  "image":  {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "@id": "https://www.test.com/imageobject1#imageobject",
    "name": "image_1",
    "contentUrl": "https://placehold.co/600x400"
  }
}

let name = _h.getName(record)



```

### Record creation

```
import { schemaObjectHelpers as _h} from './schemaObjectHelpers.js'


let thing = _h.Thing.get()


```