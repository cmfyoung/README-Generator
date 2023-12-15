// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const utils = require('utils');


// TODO: Create an array of questions for user input
const questions = [
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
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'build',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'problem-solve',
    },
    {
      type: 'input',
      message: 'What did you learn?',
      name: 'learn',
    },
    {
      type: 'input',
      message: 'Do you have installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
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
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ]





// TODO: Create a function to write README file
// function writeToFile(READEME.md, data) {}

.then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', generateREADME, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
