# DbDIsk

Tool to save jsonld records to disk.

## How to use

### Initialize
```
let pathname = './testdata/dbDisk';
    
let db = new _h.DbDisk(pathname);

```

### CRUD
```
// Delete all records
await db.purge();

// Check if record exists (true / false)
let a1 = await db.exists(record_id);
console.log('a1', a1);

// Get record by @id (action record)
let a2 = await db.get(record_id);
console.log('a2', a2);

// Insert / replace a record to database
let a3 = await db.set(record);
console.log('a3', a3);

// Delete a record


```


