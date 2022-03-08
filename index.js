const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "decription",
    message:
      "Write a description of your project, What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "How do you install this project? Write a step by step description of how to install the project and get it running.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "How is this project used? Show examples using instructions and screenshots.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Who helped you build this project? List any collaborators and make sure to include thier github profiles. Credit use of third party assets or tutorials with links to their websites.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select one of the following licenses:",
    choices: [
      "Academic Free License",
      "GNU General Public License",
      "ISC",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "University of Illinois/NCSA Open Source License",
      "Does not apply",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "What tests did you do? How do you run them?",
  },
  {
    type: "input",
    name: "github",
    message:
      "Input your github username to recieve questions about your project.",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

init();
