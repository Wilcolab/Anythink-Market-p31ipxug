function toKebabCase(str) {
    if (!str) return '';

    // Remove all underscores and hyphens
    let cleaned = str.replace(/[_-]/g, '');

    // Insert hyphen before each uppercase letter (except at the start)
    let kebab = cleaned.replace(/([A-Z])/g, (match, p1, offset) => {
        return (offset !== 0 ? '-' : '') + p1.toLowerCase();
    });

    // Convert the whole string to lowercase (already handled in replace, but for safety)
    return kebab.toLowerCase();
}

// Example usages:
// console.log(toKebabCase("firstNode")); // "first-node"
// console.log(toKebabCase("for_Node")); // "for-node"
// console.log(toKebabCase("user-id")); // "userid"
// console.log(toKebabCase("XMLHttpRequest")); // "x-m-l-http-request"