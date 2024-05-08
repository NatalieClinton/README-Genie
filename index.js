// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Creates an array of questions for user input
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

// Function to write README file
function writeToFile(fileName, data) {
  // Generates license badge URL
  const licenseBadge = generateLicenseBadge(data.license);

  // Constructs README content with license badge
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

// Function to initialize app
function init() {
  // Prompts the user for input using the questions array
  inquirer
    .prompt(questions)
    .then(answers => {
      // Writes the README content to a file
      writeToFile('README.md', answers);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();

// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function generateLicenseBadge(license) {
  // Map license names to badge URLs
  const licenseBadgeURLs = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    ISC: 'https://img.shields.io/badge/License-ISC-blue.svg',
    Other: '', // You can add a default badge URL here if needed
  };
  
  // Returns the badge URL corresponding to the license
  return licenseBadgeURLs[license] || '';
}