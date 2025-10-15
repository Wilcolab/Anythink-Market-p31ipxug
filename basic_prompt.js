function toCamelCase(str) {
    if (!str) return '';
    // Replace all delimiters with a space
    const cleaned = str.replace(/[_\-\s]+/g, ' ');
    // Split into words
    const words = cleaned.trim().split(' ');
    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("user_id")); // "userId"
// console.log(toCamelCase("User-Name")); // "userName"
// console.log(toCamelCase("hello world")); // "helloWorld"