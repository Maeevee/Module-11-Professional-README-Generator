// function to generate markdown for README
function generateMarkdown(response) {
  return `${`
  # ${response.title}
  ## Description
  ${response.description}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
  
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## Contributing
  ${response.contribution}
  
  ## Tests
  ${response.test}
  
  ## License
  `
  + (response.license === "MIT" ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' : "") +
  (response.license === "Apache 2.0" ? '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' : "") +
  (response.license === "GPL 3.0" ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' : "") +
  (response.license === "BSD 3" ? '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' : "") +
  (response.license === "None" ? "None" : "")}
  
  ## Questions
  For any questions or feedback, please contact me at [GitHub](https://github.com/${response.github}) or Email: ${response.email}
  `;
}

module.exports = generateMarkdown;