console.log("Hello from Args File!"); // Log a greeting message
console.log(process.argv); // Log the array of command-line arguments

const args = process.argv.slice(2); // Remove the first two elements (node executable and script path)
for (let arg of args) {
    console.log(`Hi there, ${arg}`); // Greet each argument
}

// Explanation:
// process.argv is an array containing the command-line arguments.
// slice(2) removes the first two elements, leaving only the additional arguments provided by the user.

// Eg:- Running the script with 'node args.js colby happy' will log:
// Hi there, colby
// Hi there, happy
