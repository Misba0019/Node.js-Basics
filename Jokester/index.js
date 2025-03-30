const oneLineJokes = require("one-liner-joke"); // Import the one-liner-joke library
const colors = require("colors"); // Import the colors library for colorful output

// Providing an empty array for exclude_tags to avoid errors
// Get a random joke, ensuring exclude_tags is defined
const randomJoke = oneLineJokes.getRandomJoke({
    exclude_tags: []
});

try {
    console.log(randomJoke.body.rainbow); // Print the joke in rainbow colors
} catch (e) {
    console.log("Error: No joke found!".red, e.message); // Print an error message in red if no joke is found
}

// Explanation:
// This script fetches a random joke using the one-liner-joke library and prints it in rainbow colors using the colors library.
// If no joke is found, it prints an error message in red.

