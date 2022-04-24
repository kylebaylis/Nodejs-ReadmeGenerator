// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data.table}

## Installation Instructions
${data.installation}

## Usage Info
${data.usage}

## Contribution Notes
${data.contributing}

## Testing Info
${data.tests}

## Frequently Asked Questions
${data.questions}

## Licensing
${data.license}

`;
}

module.exports = generateMarkdown;
