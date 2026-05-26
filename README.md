
# Installation
```
npm install github:tactik8/jsonldHelpers_v1
```


## Development
for development continuous :
```
npx nodemon index.js
```

for testing :
```
npm test
```

## Build
for packaging:
```
npm run build
```


## Funcionalities

### helpers.records
Provides pre-made records, useful for testing purposes

- helpers.records.action
- helpers.records.address
- helpers.records.article
- helpers.records.image
- helpers.records.itemList
- helpers.records.person
- helpers.records.product
- helpers.records.thing



## How to use


### Standardize / Clean records
Ensure all records have @id, standardize @id


```
import * as helpers from 'jsonld_helpers' 

// Clean record (ensure all records have @id, standardize @id)
let record = {...}
let baseUrl = 'https://testdomain.com'
record = helpers.clean(record, baseUrl)

```


### Flatten records

```
import * as helpers from 'jsonldHelpers' 

// Flatten record
let record = {...}
let records = helpers.flatten(record)

```



### Dedupe records


```
import * as helpers from 'jsonldHelpers' 

let record = {...}

let db = new helpers.DB()

db.post(record)

let dedupedRecords = db.records

```


### Use as database (in memory)
```

import * as helpers from 'jsonldHelpers' 


let db = new helpers.DB()

db.post(record)


let r2 = db.get('someRecordId')


db.delete('someRecordId')


```


### Test conditions 

```

import * as helpers from 'jsonldHelpers' 

let c = {
    "@type": "Thing"
}



```
