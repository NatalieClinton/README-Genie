// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)\n\n`;
  } else {
      return '';
  }
}

// Creates a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license) {
      return `[${license} License](LICENSE)\n\n`;
  } else {
      return '';
  }
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      return `This project is licensed under the terms of the ${license} license. See the [LICENSE](LICENSE) file for details.\n\n`;
  } else {
      return '';
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n` +
      renderLicenseBadge(data.license) +
      `## Description\n\n${data.description}\n\n` +
      `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n` +
      `## Installation\n\n${data.installation}\n\n` +
      `## Usage\n\n${data.usage}\n\n` +
      `## License\n\n` +
      renderLicenseLink(data.license) +
      renderLicenseSection(data.license) +
      `## Contributing\n\n${data.contributing}\n\n` +
      `## Tests\n\n${data.tests}\n\n` +
      `## Questions\n\nIf you have any questions about the project, feel free to reach out to me via [GitHub](https://github.com/${data.github}) or email me at ${data.email}.\n\n`;
}

module.exports = generateMarkdown;