# JSON-LD Architecture & Interface Specification

## 1. Global Configuration & Environment

The framework relies on a centralized `options` configuration object to govern formatting, API paths, and list controls.

### 1.1 API & Environment
* **`options.baseUrl`**: Base URL used for constructing links to individual records (e.g., `https://testapi.com/api`).
* **`options.currentUrl`**: The URL of the active application page.
* **`options.language`**: Target language tag for unpacking language maps (defaults to `'en'`).
* **`options.currency`**: ISO currency code used for monetary formatting (e.g., `'USD'`).

### 1.2 Formatting & Display
* **`options.decimalsLength`**: Number of decimal places to display for numeric values.
* **`options.charLength`**: Maximum character count before string truncation occurs.
* **`options.properties`**: Array of property keys to present in record views (rendered in specified order).
* **`options.titles`**: Array of display labels corresponding to `options.properties` in the same order.
* **`options.showSelection`**: Boolean indicating if row selection checkboxes should render in tables.
* **`options.showPosition`**: Boolean indicating if item position/index columns should render in tables.
* **`options.showPotentialAction`**: Boolean indicating if interactive action dropdowns should render.

### 1.3 Pagination & Sorting
* **`options.orderBy`**: Property ID used to sort records. If provided as an array, sort records in reverse order.
* **`options.orderDirection`**: Direction of sorting (`1` for ascending, `-1` for descending).
* **`options.offset`**: Starting zero-based index for query results.
* **`options.limit`**: Maximum number of records to return/display per page.

---

## 2. Data Access Layer & Helpers

To maintain consistency, methods must never access or modify record properties directly. All reads and writes MUST pass through helper functions (`_h`). Helper methods must not invoke other helper methods internally.

### 2.1 Core Helper Functions
* **`_h.getValue(record, propertyID)`**: Returns the first value of a property in a record.
* **`_h.getValues(record, propertyID)`**: Returns an array containing all values of a property in a record.
* **`_h.setValue(record, propertyID, value)`**: Sets a property in a record to a single primitive or object value.
* **`_h.setValues(record, propertyID, value)`**: Sets a property in a record to an array. Wraps non-array values into an array automatically.
* **`_h.addValue(record, propertyID, value)`**: Appends a new value to an existing property in a record.

### 2.2 Property Path & Indexing Rules
* Helpers support dot-notation path traversal (e.g., `itemListElement[0].item.name`).
* Indexing strictly uses **0-based indexing** (`[0]` targets the first element).
* If an array path omits an explicit index (e.g., `itemListElement.item.name`), it defaults to index `0`.

### 2.3 Unpacking & Value Normalization
Getters (`getValue`, `getValues`) must automatically unpack JSON-LD primitives:
1. **Expanded Literals:** Objects matching `{"@value": "Example"}` automatically unpack to `"Example"`.
2. **Language Maps:** Value objects containing `@language` tags (e.g., `{"@value": "Bonjour", "@language": "fr"}`) return the string matching `options.language`. If no match exists, fall back to the record context's base `@language` or the first available literal value.

### 2.4 Error Handling Standard
Functions and helper methods must handle invalid inputs defensively:
* Return `undefined` if required parameters are missing or `null`.
* Return `undefined` if parameters are invalid or path resolution fails.

---

## 3. API Architecture

The API handles individual records, arrays of records, and Schema.org `ItemList` structures seamlessly.

### 3.1 Link Generation Protocol
Record links are generated using the `options.baseUrl` and the URI-encoded `@id` of the record:
Record URL = options.baseUrl + "/" + encodeURIComponent(record["@id"])

**Example:**
* `options.baseUrl`: `'https://testapi.com/api'`
* `record["@id"]`: `'https://www.test.com/thing1#thing'`
* **Output Link:** `'https://testapi.com/api/https%3A%2F%2Fwww.test.com%2Fthing1%23thing'`

### 3.2 Main Endpoints
* **`GET /api/:recordID`**: Retrieves a single record by its URI-encoded ID. Returns `null` if not found.
* **`GET /api/`**: Retrieves a list of records encapsulated inside an `ItemList` JSON-LD object.
  * `ListItem.position`: Reflects the record's calculated index considering `orderBy`, `offset`, and `limit`.
  * `numberOfItems`: Returns total matching records in the database (ignoring `limit`/`offset`).
  * **Query Parameters:**
    * `offset`: Integer starting index (Default: `0`).
    * `limit`: Integer page length (Default: `20`).
    * `orderBy`: Comma-separated property keys (Default: `'@id'`).
    * `orderDirection`: Comma-separated directions (`1` or `-1`, Default: `1`).
    * `filter`: JSON-encoded filter object.
    * *Unrecognized parameters are treated as filter properties.*
* **`POST /api/`**: Creates or replaces one or multiple records.
* **`PATCH /api/`**: Patches one or multiple records.
* **`DELETE /api/:recordID`**: Deletes the specified record.

### 3.3 Property Sub-Methods
Endpoint variants targeting a specific property within a record:
* **`GET /api/:recordID/:property`**: Returns the value of a specific property.
* **`POST /api/:recordID/:property`**: Creates or replaces a property value. Creates parent record if missing.
* **`PATCH /api/:recordID/:property`**: Appends or patches a property value. Creates parent record if missing.
* **`DELETE /api/:recordID/:property`**: Deletes all values associated with the property.

### 3.4 Action Execution Endpoint
* **`POST /api/action`**: Executes a Schema.org `Action` record passed as the JSON request payload.

---

## 4. UI & Presentation Rules

### 4.1 Record Presentation (Key-Value View)
Renders a single record as a 2-column key-value table (Key on left, Value on right).
* **Property Selection:** Uses properties defined in `options.properties`. If omitted, properties are sorted alphabetically.

#### Component Value Rules:
* **Arrays:** Rendered inside a `<details>` HTML element.
  * `<summary>`: Displays total item count as `(count)`.
  * `<content>`: Nested list applying appropriate value formatting rules.
* **`@id` Property:** Rendered as a hyperlink targeting the record's API endpoint URL.
* **JSON-LD Nested Objects:** Rendered inside a `<details>` HTML element.
  * `<summary>`: Record URL (`options.baseUrl` + `record["@id"]`).
  * `<content>`: Sub-table applying key-value presentation rules recursively.
* **Numbers:** Right-aligned and rounded using `options.decimalsLength`.
* **Dates:** Formatted as `yyyy/mm/dd`. If time components are present and non-zero, append `hh:mm:ss`.
* **Strings:** Strings exceeding `options.charLength` render in a `<details>` element (truncated preview in `<summary>`, full text in `<content>`).

---

### 4.2 Table Presentation (Multi-Record View)

#### Column Definition Rules:
* If `options.properties` and `options.titles` are omitted, extract all unique first-level properties from all dataset records.
* Order columns starting with `@type`, followed by `@id`, then remaining properties alphabetically.

#### Optional Table Columns (`options`):
* **`options.showSelection`**: Appends a checkbox column on the far left with a "Select All" checkbox in the header.
* **`options.showPosition`**: Appends a position column showing `ListItem.position` (or array index).
* **`options.showPotentialAction`**: Appends an action column on the far right containing a dropdown menu populated with operations listed under `potentialAction`.

#### Cell Rendering Rules:
* **Arrays:**
  * If length > 1: Rendered as `(length)` (e.g., `(3)`).
  * If length = 1: Formatted using cell rules enclosed in brackets `[ value ]`.
* **JSON-LD Records:** Rendered as a hyperlink where link text is `record["@id"]` and `href` points to the generated API record link.
* **Numbers:** Right-aligned, rounded to `options.decimalsLength`.
* **Dates:** Formatted as `yyyy/mm/dd` (or `yyyy/mm/dd hh:mm:ss`).
* **Strings:** Truncated to `options.charLength`. For `@id` values, preserve string start and end characters (e.g., `https://...#thing`).

---

### 4.3 Schema-Specific Visual Renderers

The following rules apply across both single record and table views when specific Schema.org types are detected:

| Schema `@type` / Property | Rendering Rule | Example Output |
| :--- | :--- | :--- |
| **`QuantitativeValue`** | Render `value` concatenated with `unitCode` or `unitText`. | `50 KGM` |
| **`MonetaryAmount`** | Format using `Intl.NumberFormat` matching `options.currency` and `options.decimalsLength`. | `$1,250.00` |
| **`ImageObject`** (or `image` key) | Display an image thumbnail preview (Max height 40px in tables; max 150px in details view) hyperlinked to full resolution. | `[Thumbnail Image]` |
| **`Action`** | Render as styled interactive buttons instead of nested data tables. | `<button>Execute</button>` |


### 4.4 String representation
Rules for rendering strings in the context of a jsonld record or array of records

#### Representing arrays

- Header with number of records between ( )
- Line with '-' as separator between header and record lines
- For each lines:
    - starting with a space and a -
    - line number 
- If more than twenty lines, stop at 20 and add a line with ...
- Records should be sorted in order by property: position, any date field, name or @id

```
(number of records)
---------------------------------------------------------------
 -  0. (specific format for record)
 -  1. (specific format for record)
 -  2. (specific format for record)
 -  3. (specific format for record)
 -  4. (specific format for record)
...

```


#### Format
List of properties separated by two spaces.



#### Representing specific jsonld objects
##### @type: Action (or starting with Action)
Properties:
- startTime (formatted as yyyy-mm-dd) 
- endTime (formatted as yyyy-mm-dd) 
- name or @id 
- actionStatus value replacing 'ActionStatus' 
- result (using formating rules for result value)

```
2025-01-01  2026-01-01  Action1  Completed 
```

##### @ItemList
- First line with name or @id of the record and numberOfItems value between ( )
- Line with '-' as separator between header and record lines
- For each record in itemListElement:
    - starting with a space and a -
    - position
    - the format rules for the item property value

##### WebPage
Properties:
- url or @id

##### WebSite
Properties:
- url or @id


##### Al other
Properties:
- @type
- name or @id



---

## 5. Security & Data Integrity

1. **DOM Sanitization & HTML Escaping:** All dynamic string inputs rendered into table cells, summaries, or details components MUST be HTML-entity escaped before mounting into the DOM to prevent Cross-Site Scripting (XSS).
2. **URI Scheme Validation:** All links (`@id`, `url`, `href`) must be validated. Schemes like `javascript:`, `vbscript:`, or unapproved `data:` URIs must be stripped prior to rendering anchor tags.


## 6. Datapoints
Datapoints are a special type of jsonld record who's objective is to be able to track the source of a value. They are useful for tracking the origin of a value, and for managing several different data sources. 

### Schema
- object
- propertyID
- value
- dataSource:
- dataSourceItem: 
- confidence Number: Nuber from 0 to 1 indicating the confidence in the data. Assumed to be 0 if absent. 
- observationDate: Date at which the data was observed. 
- workflow: The workflow that was responsible for updating the data.

#### Override rules
Here are the rules that dictates datapoint precedence in order of priority.  

##### 0. Different object or propertyID
Datapoints that are with different object or propertyID are considered both equal. 

##### 1. workflow
Datapoints that are from the same workflow (same workflow.@id value) are considered to be both valid. 

##### 2. Confidence
Datapoints with higher confidence are considered to be more valid than datapoints with lower confidence. 

##### 3. dataSourceItem.modifiedDate
Datapoints with newer dataSourceItem.modifiedDate are considered to be more valid than datapoints with older dataSourceItem.modifiedDate. 
In case of missing modifiedDate, it is assumed to be the same as dataSourceItem.createdDate.

##### 4. dataSourceItem.createdDate
Datapoints with newer dataSourceItem.createdDate are considered to be more valid than datapoints with older or missing dataSourceItem.createdDate. 

##### 5. ObservationDate
Datapoints with newer observationDate are considered to be more valid than datapoints with older or missing observationDate. 


## 7. Testing
Methods, classes and function should have unit tests (using jest).
The unit tests should include edge cases. 