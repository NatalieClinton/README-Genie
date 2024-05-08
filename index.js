const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to write README file
function writeREADME(content) {
  // Writes the README content to a file named README.md
    fs.writeFile('README.md', content, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md created successfully!');
        }
    });
}

// Questions for the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'Other']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Prompt user for input
inquirer
    .prompt(questions)
    .then(answers => {
        // Generate markdown content based on user's answers
        const readmeContent = generateMarkdown(answers);
        // Write generated content to README.md file
        writeREADME(readmeContent);
    })
    .catch(error => {
        console.error(error);
    });