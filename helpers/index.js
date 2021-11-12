const inquirer = require('inquirer');

const commonQuestion = [
    {
        type: 'list',
        message: 'What Would you like to do?',
        name: 'role',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
];