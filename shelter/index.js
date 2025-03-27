const coazy = require('./coazy'); // Import the 'coazy' module
const casper = require('./casper'); // Import the 'casper' module

const allCats = [coazy, casper]; // Create an array containing both cat objects

module.exports = allCats; // Export the array of cat objects

// Explanation:
// We can have any number of JavaScript files in a directory and a single index.js.
// index.js is like the entry point, the main file for this directory.
// When we require an entire directory, Node.js looks for an index.js file and exports what it exports.