// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = readmeData => {
    console.log(`
    ===================
    Create a New README
    ===================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:'
        },
        {
            type: 'input',
            name: 'table',
            message: 'Enter the table of contents for your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions for your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this application used for?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'What type of license will this project have?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution notes:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter examples for how to test the code:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter common questions:'
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();

//questions();
