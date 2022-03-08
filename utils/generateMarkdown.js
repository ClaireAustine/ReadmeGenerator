
function renderLicenseBadge(license) {
  if (license === "Does not apply") {
    return "";
  }
  return `![githut license](https://img.shields.io/badge/License-${license}-blueviolet.svg)`;
}

function renderLicenseLink(license) {
  if (license === "Does not apply") {
    return "";
  }
  return `* [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === "Does not apply") {
    return "";
  }
  return `
  ## License
  
  This project is licensed under the ${license}  license.
  `;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.decription}
## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Tests
${data.tests}

## Questions
https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
