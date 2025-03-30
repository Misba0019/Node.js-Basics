console.log("Hello from the Args File!"); // Log a greeting message
// console.log(process.argv); // Log the array of command-line arguments

const args = process.argv.slice(2); // Remove the first two elements (node executable and script path)
if(args.length === 0) {
    console.log("No arguments provided.");
} else {
    for(let arg of args) {
        console.log(`Hey there, ${arg}!`); // Greet each argument
    }
}

// Explanation:
// process.argv is an array containing the command-line arguments.
// slice(2) removes the first two elements, leaving only the additional arguments provided by the user.

// Eg:- Running the script with 'node args.js colby happy' will log:
// Hi there, colby
// Hi there, happy
