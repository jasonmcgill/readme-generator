//generates the installation instructions if they added it
const generateInstructions = instructionsText => {
  if (!instructionsText) {
    return '';
  }
  
  return `
## Installation Instructions 
${instructionsText}
  `;
}

//generates the collaborators section if they added it
const generateCollaborators = collaboratorsText => {
  if (!collaboratorsText) {
    return '';
  }
  
  return `
## Contributors
${collaboratorsText}
  `;
}

//generates the contributing guidelines section if they added it
const generateGuidelines = guidelinesText => {
  if (!guidelinesText) {
    return '';
  }
  
  return `
## Contribution-guidelines
${guidelinesText}
  `;
}

//generates the testing section if they added it
const generateTest = testText => {
  if (!testText) {
    return '';
  }
  
  return `
## Tests
${testText}
  `;
}

//generates the license section with the license
const generateLicense = (licenseText, githubUsername) => {
  if(licenseText === "MIT") {
    return `
Copyright ${new Date().getFullYear()} ${githubUsername}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  }
  if(licenseText === "Apache") {
    return `
Copyright ${new Date().getFullYear()} ${githubUsername}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    `;
  }
  if(licenseText === "GNU"){
    return `
Copyright (C) ${new Date().getFullYear()}  ${githubUsername}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
    `;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
//destructure data to easily usable variables
  const {
    title,
    projectDescription,
    instructions,
    usages,
    contributors,
    guidelines,
    test,
    license,
    githubUsername,
    email
  } = data
 
  return `

# ${title} ![license badge](https://img.shields.io/badge/License-${license}-Green)

## Description 
${projectDescription}



## Table of Contents

${(instructions ? '* [Instructions](#instructions)' : '')}
* [Usage](#usage)
${(contributors ? '* [Contributors](#contributors)' : '')}
${(guidelines ? '* [Guidelines](#contribution guidelines)' : '')}
${(test ? '* [Tests](#tests)' : '')}
* [License](#license)
* [Questions?](#questions?)


${generateInstructions(instructions)}

## Usage
${usages}

${generateCollaborators(contributors)}

${generateGuidelines(guidelines)}

${generateTest(test)}

## Badges
![license badge](https://img.shields.io/badge/License-${license}-Green)

## License
${generateLicense(license, githubUsername)}

## Questions? 
Send me a message on GitHub (${githubUsername}) or E-mail me at: ${email}

`;
}
//exporting the function to index.js
module.exports = generateMarkdown;