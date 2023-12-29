const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge (license) {
  if (!license) {
    return '';
  } else if (license ==="MIT"){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license ==="GNU3"){
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)IT-yellow.svg)"
  }
 else if (license ==="Apache"){
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license ==="MPL2"){
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[License](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else if (license === "MIT") {
    return "## License \n https://opensource.org/license/mit/"
  }

  return `[License](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let readmeText = `
  
  # Title
  ${data.title}\n


  ## Description
  ${data.description}\n


  ## Table of Contents 
  
  - [User Story] (#story)
  - [Acceptance Criteria] (#acceptance)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## User Story

  ${data.story}\n
  ---
  
  ## Acceptance Criteria

  ${data.acceptance}\n
  ---

  ## Installation 

  ${data.installation}\n

  ---
  
  ## Usage
  
  ${data.usage}\n

  ## Tests
  
  ${data.tests}\n

  ## Credits
  
  ${data.credit}\n
  
  ## License
  ${data.license}\n
  License used for this project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---

  ##Contact 
  Github Repository : ${data.repo}\n

  Website URL : ${data.URL}\n

  Author: ${data.author}\n

  Email: ${data.email}\n
`

fs.writeFile('README.md', readmeText, (err) => {
  if (err) {
     console.log(err);
   } else {
    console.log('Successfully created README.md!');
   }
});
}

module.exports = generateMarkdown;
