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
      message: 'Go into more detail about the project (motivation, why was it built, what problem does it solve, what did you learn, etc) :',
      name: 'about',
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
      message: 'Would you like to acknowledge any collaborators?',
      name: 'credit',
    },
    {
      type: 'list',
      message: 'Select the license you used for this project',
      name: 'license',
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause \"Simplified\" License",
        "BSD 3-Clause \"New\" or \"Revised\" License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense",
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
