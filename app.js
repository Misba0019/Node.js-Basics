const math = require('./math'); // Import the 'math' module
const cats = require('./shelter'); // Import the 'shelter' directory, which exports an array of cat objects


console.log("Required an entire directory!", cats); // Log the array of cat objects

// Explanation:
// When we require a directory (shelter), Node.js looks for an index.js file in that directory.
// The exports from index.js are what we get when we require the directory.

// Import and use math.js methods
console.log(math.add(2, 3)); // Output: 5
console.log(math.sub(10, 4)); // Output: 6
console.log(math.square(4)); // Output: 16
console.log(math.PI); // Output: 3.14159

// Note:
// When we require a file, we only get the exports that are explicitly defined in that file.

