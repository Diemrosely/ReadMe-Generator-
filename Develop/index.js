const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
//the title of your project and sections entitled Description, Table of Contents, 
//Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "URL",
    message: "What is the URL to your project?"
},
{
    type: "input",
    name: "title",
    message: "What is your project's name?"
},
{
    type: "input",
    name: "description",
    message: "Please provide a short description of your project."
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "NONE"]
},
{
    type: "input",
    name: "usage",
    message: "What are things that user needs to know about the repo?"
},
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
},
{
    type: "input",
    name: "test",
    message: "Please enter testing instructions for your project."
},
{
    type: "input",
    name: "install",
    message: "How is the project installed?"
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// function call to initialize program
init();
