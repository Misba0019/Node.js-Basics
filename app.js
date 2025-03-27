const math = require('./math'); // Import the 'math' module
const cats = require('./shelter'); // Import the 'shelter' directory, which exports an array of cat objects

// console.log(math.PI);
// console.log(math.square(9));

console.log("Required an entire directory!", cats); // Log the array of cat objects

// Explanation:
// When we require a directory (shelter), Node.js looks for an index.js file in that directory.
// The exports from index.js are what we get when we require the directory.

// Note:
// When we require a file, we only get the exports that are explicitly defined in that file.

