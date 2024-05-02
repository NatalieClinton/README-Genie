// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Other'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    // Prompt the user for input using the questions array
    inquirer
      .prompt(questions)
      .then(answers => {
        // Generate README content using the user's responses
        const { projectTitle, description, installation, usage, contributing, tests, license } = answers;
  
        const readmeContent = `
          # ${projectTitle}
  
          ## Description
          ${description}
  
          ## Installation
          ${installation}
  
          ## Usage
          ${usage}
  
          ## Contributing
          ${contributing}
  
          ## Tests
          ${tests}
  
          ## License
          This project is licensed under the ${license} license.
  
        `;
  
        // Write the README content to a file
        writeToFile('README.md', readmeContent);
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
  }
  
  // Function call to initialize app
  init();