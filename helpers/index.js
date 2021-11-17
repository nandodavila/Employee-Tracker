const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'trashaf',
      database: 'employee_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

const startQuestion = [
    {
        type: 'list',
        message: 'Would you like to view or edit employees??',
        name: 'start',
        choices: ['Yes', 'No']
    }
];

const commonQuestion = [
    {
        type: 'list',
        message: 'What Would you like to do?',
        name: 'action',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
];

const addDepart = [
    {
        type: 'input',
        message: 'What Would you like the Department name to be?',
        name: 'department',
    }
];

// const allOfDepart

const addRole = [
    {
        type: 'input',
        message: 'What Would you like the role name to be?',
        name: 'role',
    },
    {
        type: 'input',
        message: 'What is this roles salary?',
        name: 'salary',
    },
    {
        type: 'list',
        message: 'What department is this role in?',
        name: 'departRole',
        choices: [allOfDepart]
    }
];

const addEmployee = [
    {
        type: 'input',
        message: 'What is this Employees first name?',
        name: 'fName',
    },
    {
        type: 'input',
        message: 'What is this Employees last name?',
        name: 'lName',
    },
    {
        type: 'input',
        message: 'What is this Employees role?',
        name: 'empRole',
    },
    {
        type: 'list',
        message: 'Who is this Employees manager?',
        name: 'empManager',
        choices: []
    }
];

const updateEmployee = [
    {
        type: 'list',
        message: 'Which Employee Role would you like to update?',
        name: 'updatedEmp',
        choices: []
    },
    {
        type: 'input',
        message: 'What is employees new role? ',
        name: 'empNewRole',
    }
];

function init() { 
     inquirer
        .prompt(startQuestion)
        .then((val) => {
            if (val.start === "Yes") {
                askQuestion()
            } else {
                return console.log('thank you')
            }
        })

} 

function askQuestion() {
    inquirer
        .prompt(commonQuestion)
        .then((data) => {
            switch (data.action) {
                case 'view all departments': 
                console.log(data)
                viewAllDepart();
                    
                    break;

                case 'view all roles': 
                viewAllRoles();
                        
                    break;

                case 'view all employees': 
                viewAllEmp();
                            
                    break;

                case 'add a department': 
                AddDepartment();
                                
                    break;

                case 'add a role': 
                AddRoleFunc();
                                    
                    break;

                case 'add a employee': 
                AddEmpFunc();
                                        
                    break;

                case 'update an employee role': 
                updateEmpFunc();
                                            
                    break;
            
            }
        })
}

const viewAllDepart = async() => {
    const sql = `SELECT * FROM department;`
    db.query(sql, function (err, results) {
        if (err) {
            console.error(err)
        } else {
        console.table(results)
        init();
        }
      });

}

function viewAllRoles() {
    const sql = `SELECT roles.title, roles.id, department.name, roles.salary FROM roles RIGHT JOIN department ON roles.depart_id = department.id ORDER BY roles.id;`
    db.query(sql, function (err, results) {
        if (err) {
            console.error(err)
        } else {
        console.table(results)
        init();
        }
      });
    
}

function viewAllEmp() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name, roles.salary FROM employee 
    JOIN roles ON employee.roles_id = roles.id 
    JOIN department ON department.id = roles.depart_id;`
    db.query(sql, function (err, results) {
        if (err) {
            console.error(err)
        } else {
        console.table(results)
        init();
        }
      });
    
    
}

function AddDepartment() {
    inquirer
        .prompt(addDepart)
        .then((data) => {
            const sql = 'INSERT INTO department (name) VALUES(?);'
            db.query(sql, data.department, function (err, results) {
                console.log(results);
                console.log(`${data.department} has been added to the department table`)
                init();

        })
    
})
}

function AddRoleFunc() {
    inquirer
        .prompt(addRole)
        .then((data) => {
            const sql = `INSERT INTO roles (title, salary, depart_id) VALUES (${data.role},${data.salary},${data.departRole})`
            db.query(sql, data.department, function (err, results) {
                console.log(results);
                console.log(`${data.role} has been added to the roles table`)
                init();

        })
    
})
    
}

function AddEmpFunc() {
    
}

function updateEmpFunc() {
    
}

module.exports = init();
