const generateInstructions = instructionsText => {
  if (!instructionsText) {
    return '';
  }
  
  return `
  ## Installation Instructions 
  ${instructionsText}
  `;
}

const generateCollaborators = collaboratorsText => {
  if (!collaboratorsText) {
    return '';
  }
  
  return `
  ## Contributors
  ${collaboratorsText}
  `;
}


const generateGuidelines = guidelinesText => {
  if (!guidelinesText) {
    return '';
  }
  
  return `
  ## Contribution guidelines
  ${guidelinesText}
  `;
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  const {
    title,
    projectDescription,
    confirmInstructions,
    instructions,
    usages,
    confirmContributors,
    contributors,
    confirmGuidelines,
    guidelines,
    confirmTest,
    test,
    lincense,
    githubUsername
  } = data

  return `
# ${title}

## Description 
${description}


## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Guidelines](#guidelines)
* [Tests](#tests)
* [Questions?](#questions?)


${generateInstructions(instructions)}

## Usage
${usages}

${generateCollaborators(contributors)}

${generateGuidelines(guidelines)}

## Tests

## Badges

## License
---

## Questions? 
Send me a message on GitHub or E-mail me at: 

`;
}

module.exports = generateMarkdown;