/**
 * Converts a given string to camelCase format.
 *
 * The function performs the following steps:
 * 1. Validates that the input is a non-empty string.
 * 2. Trims leading and trailing whitespace.
 * 3. Replaces all non-alphanumeric delimiters (spaces, underscores, hyphens) with a single space.
 * 4. Removes all other special characters except alphanumerics and spaces.
 * 5. Splits the string into words.
 * 6. Converts all words to lowercase.
 * 7. Returns a camelCase string: the first word is lowercase, subsequent words are capitalized.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty.
 *
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('  some_example-string '); // returns 'someExampleString'
 * toCamelCase('AlreadyCamelCase'); // returns 'alreadycamelcase'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (input.length === 0) {
        throw new Error('Input string cannot be empty');
    }
    // Remove leading/trailing whitespace
    let str = input.trim();
    // Replace all non-alphanumeric delimiters (space, _, -) with a single space
    str = str.replace(/[\s_-]+/g, ' ');
    // Remove all other special characters except alphanumerics and spaces
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');
    // Split into words
    const words = str.split(' ').filter(Boolean);
    if (words.length === 0) return '';
    // Lowercase all words
    const lowerWords = words.map(w => w.toLowerCase());
    // First word stays lowercase, subsequent words capitalize first letter

    // Dot case: all lowercase, words joined by dots
    function toDotCase(str) {
        if (typeof str !== 'string') {
            throw new TypeError('Input must be a string');
        }
        if (str.length === 0) {
            throw new Error('Input string cannot be empty');
        }
        // Remove leading/trailing whitespace
        let s = str.trim();
        // Replace all non-alphanumeric delimiters (space, _, -) with a single space
        s = s.replace(/[\s_-]+/g, ' ');
        // Remove all other special characters except alphanumerics and spaces
        s = s.replace(/[^a-zA-Z0-9 ]+/g, '');
        // Split into words
        const words = s.split(' ').filter(Boolean);
        // Lowercase all words and join with dots
        return words.map(w => w.toLowerCase()).join('.');
    }
    const camelCased = lowerWords[0] +
        lowerWords.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return camelCased;
}

// Example usage:
// console.log(toCamelCase("first name")); // "firstName"
// console.log(toCamelCase("user_id")); // "userId"
// console.log(toCamelCase("SCREEN_NAME")); // "screenName"
// console.log(toCamelCase("mobile-number")); // "mobileNumber"
// console.log(toCamelCase("first___name")); // "firstName"
// console.log(toCamelCase("_firstName_")); // "firstName"
// console.log(toCamelCase("first_name-last name")); // "firstNameLastName"
// console.log(toCamelCase("user_id_123")); // "userId123"