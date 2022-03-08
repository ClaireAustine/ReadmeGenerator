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
    },
    {
        type:'input',
        name: 'decription',
        message:'Write a description of your project, What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
    },
    {
        type:'input',
        name:'installation',
        message:'How do you install this project? Write a step by step description of how to install the project and get it running.',
    },
    {
        type: 'input',
        name: 'usage',
        message:'How is this project used? Show examples using instructions and screenshots.'
    },
    {
        type: 'input',
        name: 'credits',
        message:'Who helped you build this project? List any collaborators and make sure to include thier github profiles. Credit use of third party assets or tutorials with links to their websites.'
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
