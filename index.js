// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(
  [
  {
    type: 'input',
      message: 'What is the title of your project ?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is the User Story?',
      name: 'story',
    },
    {
      type: 'input',
      message: 'What is the Acceptance Criteria?',
      name: 'acceptance',
    },
    {
      type: 'input',
      message: 'Do you have installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide instructions and examples for use. Include screenshots as needed:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'If you have any tests for your application you can provide them here:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Would you like to acknowledge any collaborators?',
      name: 'credit',
    },
    {
      type: 'list',
      message: 'Select the license you used for this project',
      name: 'license',
      choices: [
        "Apache",
        "GNU3",
        "MIT",
        "MPL2"
        ],
      },
    {
      type: 'input',
      message: 'What is Github repo URL for the project',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What is the URL for the deployed site?',
      name: 'URL',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'author',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  
  .then ((response) => {
    markdown(response);
  }) 
  .catch((err) => {
    console.error(err);
  })
};
  
  // Function call to initialize app
init();
