

// function to generate markdown for README
//the title of your project and sections entitled Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions

function generateMarkdown(data) {
  return `
  # ${data.title}

[![GitHub license](https://img.shields.io/badge/license-${data.license.split(' ').join("")}-blue.svg)](https://github.com/${data.github}/${data.title.toLowerCase().split(' ').join("-")})

## Description

${data.description}

## Table of Contents

* [Installation](#install)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install dependencies, please run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

To run tests, please run the following commands:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about this repo, please contact 
[${data.github}](${data.url}) 
Email me at: ${data.email}.
`;
}

module.exports = generateMarkdown;
