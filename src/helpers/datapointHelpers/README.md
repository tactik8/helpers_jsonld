

# Datapopint helpers
Datapoints are a type of records to track the properties of an entity from different sources or temporality. 


## How it works
Each Value are stored as individual jsonld Datapoint records. 

Each datapoint has the potential of invalidating previous datapoint based on confidence level, or modifiedDate / createdDate. 

Each datapoint can have one of several operation:
- insert: Add a value ot the existing list of exisitng values.
- replace: replace a specific value by another one.
- delete: removes a specific value from the list of values.
- update: replaces all current value by new value. 
- remove: remove all current values. 



## How to use 

```
import { datapointHelpers} from 'datapointHelpers'

let db = new datapointHelpers.DatapointDB()

// Wil add Datapoint or records converted to datapoint
db.add(value)

let allRecords = db.records


```




## Architecture

### Properties
| Property | Example / Assigned Value | Description & Purpose |
| --- | --- | --- |
| `'@type'` | `'dp:Datapoint'` | **Semantic Type:** A JSON-LD type declaration defining the object schema as a `Datapoint` (a discrete property assertion or atomic mutation record). |
| `'@id'` | **Entity URI / ID:** A globally unique identifier (IRI) for this specific datapoint instance. |
| `'dp:object'` | **Target Subject:** A reference or URI pointing to the entity or domain object whose property is being recorded or altered. |
| `'dp:propertyID'` | **Attribute Key:** The name or identifier of the specific field/predicate on the target object that this datapoint describes. |
| `'dp:value'` | **Payload:** The actual data value being asserted, assigned, or updated for the specified property. |
| `'dp:operation'`  | **Mutation Type:** The specific action being performed on the property (e.g., `set`, `add`, `remove`, `replace`). |
| `'dp:replacee'` | `replacee` | **Superseded Value / ID:** Reference to the previous value, state, or preceding datapoint being replaced (used for optimistic locking, rollback, or history tracking). |
| `'dp:source'` | `source` | **Provenance:** The origin of the update, such as a user ID, system service, client application, or ingestion pipeline. |
| `'dp:transactionID'` | `transactionID` | **Batch / Unit of Work ID:** Correlates multiple datapoints belonging to the same atomic operation or multi-property update. |
| `'dp:createdDate'` | `new Date().toISOString()` | **Physical Timestamp:** Wall-clock creation time in ISO 8601 format (`YYYY-MM-DDTHH:mm:ss.sssZ`) for chronological logging and auditing. |
| `'dp:counter'` | `++COUNTER` | **Logical Clock / Sequence:** A monotonically increasing counter used for deterministic ordering of events within the local process, avoiding clock-skew ambiguities. |


### Operations

- insert: Add a value ot the existing list of exisitng values.
- replace: replace a specific value by another one.
- delete: removes a specific value from the lsit of values.
- update: replaces all current value by new value. 
- remove: remove all current values. 

