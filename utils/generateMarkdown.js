// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'Does not apply') {
  return '';
} 
return `![githut license](https://img.shields.io/badge/License-${license}-blueviolet.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Does not apply') {
  return '';
} 
return `* [License](#license)`;}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Does not apply') {
    return '';
  } 
  return `
  ## License
  
  This project is licensed under the ${license}  license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

## Installation

## Usage

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
