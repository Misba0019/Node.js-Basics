# Node.js Project
## Overview

This is a simple Node.js project that demonstrates basic concepts like module importing, directory exports, file system operations, and using external libraries.

## Features

- **Module Importing**:
   - Import custom modules (`math.js`) and directories (`shelter`).

- **Directory Exports**:
   - Use `index.js` to export multiple files from a directory.

- **File System Operations**:
   - Create directories and files dynamically using the `fs` module (`nodeScript.js`).

- **Command-Line Arguments**:
   - Process and log command-line arguments (`args.js`).

- **External Libraries**:
   - Fetch and display jokes in colorful output using `one-liner-joke` and `colors` libraries (`Jokester/index.js`).

## Installation

Follow these steps to set up the project and install all necessary dependencies:

1. **Clone the Repository**:
   Clone the repository to your local machine:
```bash
git clone https://github.com/Misba0019/NodeJS-Basics.git
```
2. **Navigate to the Project Directory**:
   Change into the main project directory:
```bash
cd NodeJS-Basics
```
3. **Install Main Project Dependencies**:
   Install the dependencies for the main project (if any are listed in the package.json file):
```bash
npm install
```
4. **Install Dependencies for the Jokester Subproject**:
   Navigate to the Jokester folder and install its dependencies
```bash
cd Jokester
npm install
cd ..
```

### Explanation of Each Step
1. **Clone the Repository**:
   - Downloads the project from GitHub to your local machine.

2. **Navigate to the Project Directory**:
   - Moves into the main project folder where the code is located.

3. **Install Main Project Dependencies**:
   - Runs `npm install` in the main project directory to install any dependencies listed in the `package.json` file (if applicable).

4. **Install Dependencies for the [Jokester](https://github.com/Misba0019/Node.js-Basics/tree/main/Jokester) Subproject**:
   - Since the [Jokester](https://github.com/Misba0019/Node.js-Basics/tree/main/Jokester) folder has its own `package.json` file, you need to navigate into that folder and run `npm install` to install its dependencies (e.g., `one-liner-joke`, `colors`).

## Usage

### Running `args.js`:
```bash
node args.js Alice Casey
```
- **Expected Output**: Hello from Args File!
Hi there, Alice!
Hi there, Casey! 

### Running `nodeScript.js` (Only if you need to make a new project dir):
```bash
node nodeScript.js MyProject
```
- **Expected Output**: Folder "MyProject" created successfully!

### Running `Jokester/index.js`:
```bash
node index.js
```
- **Expected Output**:  A random joke will be displayed in rainbow colors using the `colors` library.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
