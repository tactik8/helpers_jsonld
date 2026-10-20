# Tool to facilitate the use of api


## How to use

```

let baseUrl = 'https://www.test.com/api'

// Specific for mongodb custom api
let databaseID = "db1"
let tenantID = "tenant1"


let c = new ApiClient(baseUrl, databaseID, tenantID)


// Get
let endPoint = '/users/'
let r = await c.get(endPoint)


```