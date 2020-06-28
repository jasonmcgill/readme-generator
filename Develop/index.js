const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a description of the project: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstructions',
        message: 'Would you like to enter some installation instructions or examples of usages?',
        default: false
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide the installation instructions',
        when: ({
            confirmInstructions
        }) => {
            return confirmInstructions
        }
    },
    {
        type: 'input',
        name: 'usages',
        message: 'Please provide any instructions and examples of usages:',
        validate: usagesInput => {
            if (usagesInput) {
                return true;
            } else {
                console.log('Please enter any instructions and examples of usages');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Would you like to enter any contributors?',
        default: false
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide contributors github names:',
        when: ({
            confirmContributors
        }) => {
            return confirmContributors
        }
    },
    {
        type: 'confirm',
        name: 'confirmGuidelines',
        message: 'Would you like to enter any contribution guidelines?',
        default: false
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter any contribution guidelines:',
        when: ({
            confirmGuidelines
        }) => {
            return confirmGuidelines
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to enter any test instructions?',
        default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions:',
        when: ({
            confirmTest
        }) => {
            return confirmTest
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license does your provide?',
        choices: ['Apache', 'GNU', 'MIT']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username: (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!')
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    console.log(`
    ===========================
    Hi! Lets generate a readme!
    ===========================
    `);
    inquirer.prompt(questions)
        .then(data => {
            let markdown = generateMarkdown(data);
            fs.writeFile('./dist/README.md', markdown, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully wrote README!")
                }
            });
        })
        .catch(error => {
            console.log("Something went wrong " + error.message);
        })
};

// function call to initialize program
init();