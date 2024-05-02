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

// Function to generate license badge URL
function generateLicenseBadge(license) {
    // Map license names to badge URLs
    const licenseURLs = {
        'MIT': 'https://img.shields.io/badge/license-MIT-green',
        'GNU GPLv3': 'https://img.shields.io/badge/license-GPLv3-blue',
        'Apache 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue',
        'ISC': 'https://img.shields.io/badge/license-ISC-blue',
        'Other': ''
    };

    return licenseURLs[license] || '';
}

// Function to write README file
function writeToFile(fileName, data) {
    // Generate license badge URL
    const licenseBadge = generateLicenseBadge(data.license);

    // Construct README content with license badge
    const readmeContent = `
        ![License](${licenseBadge})
        # ${data.projectTitle}

        ## Description
        ${data.description}

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Contributing
        ${data.contributing}

        ## Tests
        ${data.tests}

        ## License
        This project is licensed under the ${data.license} license.
    `;

    fs.writeFile(fileName, readmeContent, err => {
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
        // Write the README content to a file
        writeToFile('README.md', answers);
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
}

// TODO: Function call to initialize app
init();