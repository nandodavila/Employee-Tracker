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
        choices: []
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

(async function init() { 
    await inquirer
        .prompt(startQuestion)
        .then((val) => {
            console.log(val)
            if (val.start === "Yes") {
                askQuestion()
            } else {
                return 'Thank you!'
            }
        })

} )

function askQuestion() {
    inquirer
        .prompt(commonQuestion)
        .then((data) => {
            switch (data) {
                case 'view all departments': 
                viewAllDepart(db);
                    
                    break;

                case 'view all roles': 
                viewAllRoles(db);
                        
                    break;

                case 'view all employees': 
                viewAllEmp(db);
                            
                    break;

                case 'add a department': 
                AddDepartment(db);
                                
                    break;

                case 'add a role': 
                AddRoleFunc(db);
                                    
                    break;

                case 'add a employee': 
                AddEmpFunc(db);
                                        
                    break;

                case 'update an employee role': 
                updateEmpFunc(db);
                                            
                    break;
            
            }
        })
}

function viewAllDepart(db) {
    const sql = `SELECT * FROM department`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });

}

function viewAllRoles(db) {
    
}

function viewAllEmp(db) {
    
}

function AddDepartment(db) {
    
}

function AddRoleFunc(db) {
    
}

function AddEmpFunc(db) {
    
}

function updateEmpFunc(db) {
    
}

module.exports = init();
