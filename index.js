// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const  path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one of the following licenses:',
        choices:['a', 'b', 'c', 'Does not apply']
    }
    // 'What is the title of your project?',
    // 'What does your project do?'
];

// TODO: Create a function to write README file
function writeToFile( fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers);
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
