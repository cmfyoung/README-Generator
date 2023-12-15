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
  return `
  
  # Title
  ${data.title}\n


  ## Description
  ${Description}\n


  ## Table of Contents 
  
  - [User Story] (#story)
  - [Acceptance Criteria] (#acceptance)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## About

  ${About}\n
  ---
  
  ## Installation 

  ${Installation}\n

  ---
  
  ## Usage
  
  ${usage}\n

  ## Credits
  
  ${credit}\n
  
  ## License
  ${License}\n
  License used for this project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---

  ##Contact 
  Github Repository : ${repo}\n

  Website URL : ${URL}\n

  Author: ${author}\n

  Email: ${email}\n
`;
}

module.exports = generateMarkdown;
