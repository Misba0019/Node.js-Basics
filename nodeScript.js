const fs = require('fs');
// Import the 'fs' (filesystem) module
const folderName = process.argv[2] || 'Project';
// Get the folder name from command-line arguments or use 'Project' as default

// Example of an asynchronous directory creation (commented out)
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In The Callback!"); // Runs after the directory is created
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    // Synchronously create a new directory with the name specified by folderName
    fs.writeFileSync(`${folderName}/index.html`, '');
    // Synchronously create an empty 'index.html' file inside the new directory
    fs.writeFileSync(`${folderName}/app.js`, '');
    // Synchronously create an empty 'app.js' file inside the new directory
    fs.writeFileSync(`${folderName}/app.css`, '');
    // Synchronously create an empty 'app.css' file inside the new directory
} catch (e) {
    console.log("Something went wrong");
    // Log a generic error message if something goes wrong
    console.log(e);
    // Log the actual error details
}

// Note:
// Running this script (`node nodeScript.js [folderName]`) from any location
// will create the specified folder (`folderName`) in the current working directory,
// even if the main script is located elsewhere.
