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
  
  # ${data.title}


  ## ${Description}


  ## Table of Contents 
  
 
  - [User Story] (#story)
  - [Acceptance Criteria] (#acceptance)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## User Story 

  ---
  
  ## Acceptance Criteria
  
  ---

  ## Screenshots

  ---
  
  ## Installation

  ---
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.

  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  License used for this project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
`;
}

module.exports = generateMarkdown;
