



// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Cleans a date string or object. Returns a Date object or undefined or defaultValue.
 * @param {*} value 
 * @param {*} defaultValue 
 * @returns 
 */
export function clean(value, defaultValue=undefined){
    return toDate(value) || defaultValue
}


/**
 * Returns true if valid
 * @param {*} value 
 */
export function isValid(value){
    return isDuration(value)
}


/**
 * Returns formattted date (yyyy-mm-dd)
 * @param {*} value 
 * @returns 
 */
export function format(value){
    return formatFullISODuration(value)
}




// -------------------------------------------------------------------------------------
//  methods
// -------------------------------------------------------------------------------------

export function isDuration(value){
    return isISODuration(value)
}

// todo: complete this
export function toDuration(value){
    return value
}




function isISODuration(str) {
  if (typeof str !== 'string' || str.trim() === '') return false;

  // Official ISO 8601 duration format regex
  const isoDurationRegex = /^P(?!$)(?:(\d+(?:\.\d+)?)Y)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)W)?(?:(\d+(?:\.\d+)?)D)?(?:T(?=[0-9])(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i;

  return isoDurationRegex.test(str.trim());
}


function formatFullISODuration(durationStr) {
  // Regex parsing both the Period (Date) and Time blocks
  const regex = /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/;
  const matches = durationStr.match(regex);

  if (!matches) return "00:00:00";

  const [_, years, months, weeks, days, hours, minutes, seconds] = matches.map(val => parseInt(val, 10) || 0);

  // Format the time block with leading zeros
  const timeBlock = [hours, minutes, seconds].map(val => String(val).padStart(2, '0')).join(':');

  // Build the date block dynamically based on what exists
  const dateParts = [];
  if (years) dateParts.push(`${years}y`);
  if (months) dateParts.push(`${months}m`);
  if (weeks) dateParts.push(`${weeks}w`);
  if (days) dateParts.push(`${days}d`);

  // Combine them (e.g., "1y 2m 3w 4d 05:06:07")
  return dateParts.length > 0 ? `${dateParts.join(' ')} ${timeBlock}` : timeBlock;
}