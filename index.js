const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
inquirer.prompt([
    {
        type: "input",
        message: "Name of your repo:",
        name: "title"
    },
])
// function to write README file
.then((response) => {
    const markdown = generateMarkdown(response);
});