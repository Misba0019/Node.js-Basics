// Arithmetic Functions

// Addition function: Adds two numbers
const add = (a, b) => a + b;

// Subtraction function: Subtracts the second number from the first
const sub = (x, y) => x - y;

// Multiplication function: Multiplies two numbers
const square = x => x * x;

// Division function: Divides the first number by the second
const div = (x, y) => x / y;

// Modulus function: Finds the remainder of the division of the first number by the second
const mod = (x, y) => x % y;

const PI = 3.14159; // Constant value of PI

// Exponentiation function: Raises the base to the power of the exponent
const pow = (base, exp) => Math.pow(base, exp);

// Square Root function: Finds the square root of the number
const sqrt = x => Math.sqrt(x);

// Exporting Individual Functions
module.exports.square = x => x * x; // Export the square function
exports.sub = sub; // Export the subtraction function

// Grouping in an Object
const math = {
    add: add,
    PI: PI,
    sub: sub,
    square: square,
    div: div,
    mod: mod,
    pow: pow,
    sqrt: sqrt
};

module.exports = math; // Export the math object
// module.exports.add = add; // Alternatively, export functions individually
// module.exports.PI = PI;
// module.exports.square = square;

//-----------------------------------------------

// Explanation:
// module.exports in Node.js allows us to export objects, functions, or variables from a module.
// This makes them accessible in other files using require(), helping to modularize our code.
