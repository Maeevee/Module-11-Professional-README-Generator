// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Questions
  For any questions or feedback, please contact me at:
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown();


