const inquirer = require('inquirer');
const allOptions = require('./db/query');
require("console.table");


function Questions(){
inquirer
    .prompt([
    {
        type: 'rawlist',
        name: 'initial',
        message: 'Select from the following options:',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    },
    ])
    .then(response => {
        switch(response.initial){
            case 'View all Departments':
                /*llamo a mi funcion que mostrará todos los departamentos*/
                viewAllDepartments();
                break;
            
            case 'View all roles':
                AllRoles();
                break;
            
            case 'View all employees':
                AllEmployees();
                break;

            case 'Add a department':
                AddDepartment();
                break;
            
            case 'Add a role':
                AddRole();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'Update an employee role':
                newEmployeeRole();
                break;

            default:
                console.log("Ocurrió un error, intenta de nuevo");
                break;
        }
    });
}

    const viewAllDepartments = () => {
        allOptions.AllDepartments().then((response) => {
            console.table(response[0]);
            Questions();
        })
    }

    const AllRoles = () => {
        allOptions.AllRoles().then((response) => {
            console.table(response[0]);
            Questions();
        })
    }

    const AllEmployees = () => {
        allOptions.AllEmployees().then((response) => {
            console.table(response[0]);
            Questions();
        })
    }

function AddDepartment() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'department',
        message: 'Enter the name of the New Department: ',
    },
    ])
    .then((response) => {
        newDepartment(response.department);
    });
};

const newDepartment = (department) => {
    allOptions.newDepartment(department).then(() => {
        console.log(`Successfully added ${department} department`);
        Questions();
    });
};

function AddRole() {
    allOptions.selectDepartment().then((data) => {
        const departmentChoices = data[0];

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the role´s name: ',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the role´s salary: ',
        },
        {
            type: 'list',
            name: 'department',
            message: 'Where does it belong to? ',
            choices: departmentChoices,
        },
    ])
        .then(response => {
            newRole(response.name, response.salary, response.department);
        });
    });
}

const newRole = (job, salary, role) => {
    allOptions.newRole(job, salary, role).then(() => {
        console.log(`Added ${job} to the database`);
        console.log(`Added ${salary} as salary`);
        console.log(`Added ${role} to the database`);
        Questions();
    });
};

function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'employee_first_name',
            message: 'Enter the employee´s first name: ',
        },
        {
            type: 'input',
            name: 'employee_last_name',
            message: 'Enter the employee´s last name: ',
        },
        {
            type: 'input',
            name: 'employee_role',
            message: 'Enter the employee´s role: ',
        },
    ])
        .then(response => {
            newEmployee(response.employee_first_name, response.employee_last_name, response.employee_role);
        });
};


const newEmployee = (employee_first_name, employee_last_name, employee_role) => {
    allOptions.newEmployee(employee_first_name, employee_last_name, employee_role).then(() => {
        console.log(`Added ${employee_first_name} to the database`);
        console.log(`Added ${employee_last_name} as last name`);
        console.log(`Added ${employee_role} to the database`);
        Questions();
    });
};

function newEmployeeRole() {
    allOptions.EmployeeSelection().then((data) => {
        const EChoices = data[0];

        allOptions.JobTitle().then((data) => {
        const JobChoices = data[0];

    inquirer
        .prompt([
            {
                type: "list",
                message: "Select the role to be updated",
                name: "e_update",
                choices: EChoices,
            },
            {
                type: "list",
                message: "New role for the employee?",
                name: "u_role",
                choices: JobChoices,
            },
        ])

        .then((answers) => {
            updateEmployeeRole(answers.u_role, answers.e_update)
        });
    });
    });
};

const updateEmployeeRole = (role_id, employee_id) => {
    allOptions.updateEmployeeRole(role_id, employee_id).then(() => {
        console.log(`Updated employee's role`);
        Questions();
    });
};

    Questions();