// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Map license names to badge URLs
  const licenseBadgeURLs = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    ISC: 'https://img.shields.io/badge/License-ISC-blue.svg',
    Other: '', // You can add a default badge URL here if needed
  };
  
  // Return the badge URL corresponding to the license
  return licenseBadgeURLs[license] || '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Return the license link corresponding to the license
  return license !== 'Other' ? `[${license} License](https://opensource.org/licenses/${license})` : '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Return the license section text based on the license
  return license !== 'Other' ? `This project is licensed under the ${license} license.` : '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate license badge URL
  const licenseBadge = renderLicenseBadge(data.license);

  // Generate license link
  const licenseLink = renderLicenseLink(data.license);

  // Generate license section
  const licenseSection = renderLicenseSection(data.license);

  // Construct README content with license badge and other data
  const markdownContent = `
    ![License](${licenseBadge})

    # ${data.projectTitle}

    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## License
    ${licenseSection}
    ${licenseLink}
  `;

  return markdownContent;
}

module.exports = generateMarkdown;