// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Badges

## Description 


## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Guidelines](#guidelines)
* [Tests](#tests)
* [Questions?](#questions?)



## Installation Instructions

## Usage 

## Contributors

## License
---
## Contribution guidelines

## Tests

## Questions? 
Send me a message on GitHub or E-mail me at: 

`;
}

module.exports = generateMarkdown;
