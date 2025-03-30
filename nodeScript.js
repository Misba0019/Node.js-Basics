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
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        fs.writeFileSync(`${folderName}/index.html`, '<!DOCTYPE html>\n<html>\n<head>\n<title>My Project</title>\n</head>\n<body>\n</body>\n</html>');
        fs.writeFileSync(`${folderName}/app.js`, '// JavaScript entry point');
        fs.writeFileSync(`${folderName}/app.css`, '/* CSS entry point */');
        console.log(`Folder "${folderName}" created successfully!`);
    } else {
        console.log(`Folder "${folderName}" already exists.`);
    }
} catch (e) {
    console.error("An error occurred while creating the project structure:", e.message);
}

// Note:
// Running this script (`node nodeScript.js [folderName]`) from any location
// will create the specified folder (`folderName`) in the current working directory,
// even if the main script is located elsewhere.
