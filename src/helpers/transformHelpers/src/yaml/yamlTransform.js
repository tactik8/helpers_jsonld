
export function jsonToYaml(obj, indent = 0) {

    const spaces = ' '.repeat(indent);
    let yaml = '';

    // Handle null or undefined
    if (obj === null || obj === undefined) {
        return 'null\n';
    }

    // Handle primitive types (strings, numbers, booleans)
    if (typeof obj !== 'object') {
        if (typeof obj === 'string') {
            // Wrap strings with quotes if they contain special characters or newlines
            if (/[:\?,\-\{\}\[\]#&*!|<>'"%@`]|\n/.test(obj)) {
                return `"${obj.replace(/"/g, '\\"')}"\n`;
            }
            return `${obj}\n`;
        }
        return `${obj}\n`;
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]\n';
        
        obj.forEach(item => {
            yaml += `${spaces}- `;
            // If the item inside the array is an object or array, indent its content
            if (typeof item === 'object' && item !== null) {
                // Inline the first key's alignment with the hyphen, indent subsequent keys
                const itemYaml = jsonToYaml(item, indent + 2).trimStart();
                yaml += itemYaml;
            } else {
                yaml += jsonToYaml(item, 0);
            }
        });
        return yaml;
    }

    // Handle Nested Objects
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}\n';

    keys.forEach(key => {
        const value = obj[key];
        yaml += `${spaces}${key}:`;

        if (typeof value === 'object' && value !== null) {
            // Newline for nested structures, then recurse with increased indentation
            yaml += '\n' + jsonToYaml(value, indent + 2);
        } else {
            // Space before primitive values
            yaml += ' ' + jsonToYaml(value, 0);
        }
    });

    return yaml;
}

export function yamlToJson(yamlString) {
    const lines = yamlString.split('\n');
    const root = {};
    const stack = [{ indent: -1, value: root, type: 'object' }];

    for (let line of lines) {
        // Skip empty lines or comments
        if (!line.trim() || line.trim().startsWith('#')) continue;

        // Calculate current indentation
        const indent = line.search(/\S/);
        const trimmed = line.trim();

        // Pop elements from stack if the current line's indentation is less or equal
        while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
            stack.pop();
        }

        const currentParent = stack[stack.length - 1];

        // Case 1: Array Item (- value or - key: value)
        if (trimmed.startsWith('-')) {
            // If parent isn't an array yet, initialize it
            if (currentParent.type !== 'array') {
                // If it was an empty object key, change its type to array
                if (currentParent.type === 'object' && currentParent.lastKey) {
                    currentParent.value[currentParent.lastKey] = [];
                    stack.push({ indent: indent, value: currentParent.value[currentParent.lastKey], type: 'array' });
                }
            }

            const arrayParent = stack[stack.length - 1];
            const content = trimmed.substring(1).trim();

            if (content.includes(':')) {
                // Array of objects scenario (- key: value)
                const [key, ...valParts] = content.split(':');
                const cleanKey = key.trim();
                const rawVal = valParts.join(':').trim();
                const parsedVal = parseYamlValue(rawVal);

                const newObj = { [cleanKey]: parsedVal };
                arrayParent.value.push(newObj);
                
                // Push this new object onto the stack for potential nesting
                stack.push({ indent: indent + 2, value: newObj, type: 'object', lastKey: cleanKey });
            } else {
                // Standard primitive array item
                arrayParent.value.push(parseYamlValue(content));
            }
        } 
        // Case 2: Object Key-Value Pair (key: value)
        else if (trimmed.includes(':')) {
            const [key, ...valParts] = trimmed.split(':');
            const cleanKey = key.trim();
            const rawVal = valParts.join(':').trim();

            currentParent.lastKey = cleanKey;

            if (rawVal === '') {
                // Nested object or array coming up next
                currentParent.value[cleanKey] = {};
                stack.push({ indent: indent, value: currentParent.value[cleanKey], type: 'object', lastKey: cleanKey });
            } else {
                // Regular primitive assignment
                currentParent.value[cleanKey] = parseYamlValue(rawVal);
            }
        }
    }

    return root;
}

// Helper to parse types correctly (Numbers, Booleans, Null, Strings)
function parseYamlValue(val) {
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (val === 'null' || val === '~') return null;
    if (!isNaN(val) && val !== '') return Number(val);
    
    // Remove surrounding quotes if they exist
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        return val.slice(1, -1);
    }
    
    return val;
}