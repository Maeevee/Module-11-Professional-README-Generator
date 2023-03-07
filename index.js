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
    {
        type: "input",
        message: "Description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "test"
    },
    {
        type: "input",
        message: "Your GitHub username:",
        name: "github"
    },
    {
        type: "input",
        message: "Your email address:",
        name: "email"
    }
])
// function to write README file
.then((response) => {
    const markdown = generateMarkdown(response);

    // function to initialize program
    fs.writeFile("CreatedREADME.md", markdown, (error) => {
    error ? console.log(error) : console.log("README generated!");
    });
});