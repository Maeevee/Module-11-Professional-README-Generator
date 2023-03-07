// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ## Description
  ${response.description}
  
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## Contributing
  ${response.contribution}
  
  ## Tests
  ${response.test}
  
  ## License
  
  ## Questions
  For any questions or feedback, please contact me at [GitHub](https://github.com/${response.github}) or Email: ${response.email}
  `;
}

module.exports = generateMarkdown;