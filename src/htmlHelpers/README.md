
# HTML Helpers

## Overview
Basic components to converts jsonld records to html components and pages.

## How to use

### Configure a website Thing object

```
    let website = new _h.things.WebSite({ url: "http://localhost" })
    website.name = "testName"
    website.addHeaderLink('/', 'Home')
    website.addHeaderLink('/ItemList', 'ItemList')
    website.addHeaderLink('/ImageObject', 'ImageObject')
    website.addHeaderLink('/VideoObject', 'VideoObject')
    website.addFooterLink('/ItemList', 'ItemList')
    website.addFooterLink('/ImageObject', 'ImageObject')
    website.addFooterLink('/VideoObject', 'VideoObject')

```

### Configure options 

- baseUrl: the base url to configure records paths when generating @id links
```
    let options = {
        baseUrl: "http://localhost:3021/things"
    }
```

### Configure end points 


#### GET /things
Retrieve records. 

```
    // Generate webpage object from website with page url and title
    let webpage = website.getWebPage(req.originalUrl, 'Things')
    webpage.addBreadcrumb('/things', 'Things')

    // Get parameters

    let offset = Number(req.query?.offset)
    let limit = Number(req.query?.limit)
    let orderBy = req.query?.orderBy
    let orderDirection = req.query?.orderDirection

    // Retrieve filter either from a json query params filter or from remaining query parameters
    let filter = { ...req.query}
    if(req.query?.filter){
        try {
            filter = JSON.parse(req.query?.filter)
        } catch {}
    }
    // remove params starting with _
    Object.keys(filter).forEach(x => x.startsWith('_') == true).forEach(x => delete filter[x])
    
    // remove special keywords from filter
    let specialKeywords = ['filter', 'offset', 'limit', 'orderBy', 'orderDirection']
    specialKeywords.forEach(x => delete filter[x])


    // Get records
    let records = db.search(filter, offset, limit, orderBy, orderDirection)

    // Generate and return html
    let html = _h.html.shadcn.recordsPage({ website, webpage, title: "Test Title", req.originalUrl, records, filter, offset, limit, orderBy, orderDirection, options })

    res.status(200).send(html)

```

#### POST /things

Create or replace one or several records.

```
    
    // Get data from post request
    let data = req.body

    // Add data to local db (or post to external db)
    db.post(data)
   
    // Return to the page that called it
    res.redirect(req.get('referer'));

```
#### PATCH /things

Create or updates one or several records.

```
    
    // Get data from post request
    let data = req.body

    // Add data to local db (or post to external db)
    db.patch(data)
   
    // Return to the page that called it
    res.redirect(req.get('referer'));

```

#### POST /things/execute

Execute an action sent by post request

```

    res.redirect(req.get('referer'));

```


#### GET /things/:record_id

Retrieves an individual record from the local db (or from external)

```
    // Generate webpage object from website with page url and title
    let webpage = website.getWebPage(req.originalUrl, 'Things')
    webpage.addBreadcrumb('/things', 'Things')
    webpage.addBreadcrumb(`/${options.baseUrl}/${encodeURIComponent(req.params.record_id)}`, req.params.record_id)
    
    // Retrieve record from local db (or from external db)
    let record = db.get(req.params.record_id)

    // Generate html from record
    let html = _h.html.shadcn.recordPage({ website, webpage, title: req.params.record_id, url: req.originalUrl, record, options })

    res.status(200).send(html)

```
