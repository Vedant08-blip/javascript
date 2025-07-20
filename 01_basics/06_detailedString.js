// JavaScript String Methods: charAt(), indexOf(), and length

let text = "JavaScript";

// charAt(index)
// Returns the character at the specified index (0-based)
console.log(text.charAt(0)); // Output: 'J'
console.log(text.charAt(4)); // Output: 'S'

// indexOf(substring)
// Returns the index of the first occurrence of the substring
// Returns -1 if not found
console.log(text.indexOf("S")); // Output: 4
console.log(text.indexOf("a")); // Output: 1 (first 'a')
console.log(text.indexOf("z")); // Output: -1 (not found)

// length
// Returns the total number of characters in the string
console.log(text.length); // Output: 10


// substring(start, end)
// Extracts characters from start index to (end index - 1)
// Does not include the character at the end index
console.log(text.substring(0, 4)); // Output: 'Java'
console.log(text.substring(4, 10)); // Output: 'Script'
console.log(text.substring(4)); // Output: 'Script' (to end of string)

// slice(start, end)
// Similar to substring, but supports negative indices
console.log(text.slice(0, 4));    // 'Java'
console.log(text.slice(4, 10));   // 'Script'
console.log(text.slice(4));       // 'Script'
console.log(text.slice(-6));      // 'Script' (starts from end)
console.log(text.slice(-6, -3));  // 'Scr'

// Trim()
// Removes whitespace from both ends (doesn't affect middle)
let trimmed = text.trim();
console.log(trimmed);            // 'JavaScript String Methods'
console.log(trimmed.length);     // 26

// Replace(search, newValue)
// Replaces first occurrence of search value with new value
let updated = trimmed.replace("String", "Text");
console.log(updated); // 'JavaScript Text Methods'


//   Summary:
// - charAt(index) → get character at index
// - indexOf(substring) → position of first occurrence
// - length → total number of characters
// - substring(start, end) → extract part (no negatives)
// - slice(start, end) → extract part (supports negatives)
// - trim() → remove leading/trailing whitespace
// - replace(old, new) → replace first match