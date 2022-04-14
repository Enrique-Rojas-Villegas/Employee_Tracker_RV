const db = require("../src/connection");

class allOptions {
    constructor (db) {
        this.db = db;
    };

    AllDepartments() {
        return this.db.promise().query("SELECT department.id AS 'ID', department.name AS 'Department' FROM department");
    };

    AllRoles() {
        return this.db.promise().query("SELECT role.id AS 'Role ID', title AS 'JOB', department.name AS 'BELONGS TO', salary AS 'SALARY' FROM role, department WHERE department_id=department.id ORDER BY role.id");
    };

    AllEmployees() {
        return this.db.promise().query("SELECT employee.id AS 'ID', employee.first_name AS 'First', employee.last_name AS 'Last', role.title AS 'Job', department.name AS 'Department', role.salary AS 'Salary' FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id");
    };

    newDepartment(department) {
        return this.db.promise().query(`INSERT INTO department (name) VALUES (?)`, [department]);
    };

    newRole(job, salary, department) {
        return this.db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [job, salary, department]);
    };

    selectDepartment() {
        return this.db.promise().query("SELECT name, id AS value FROM department");
    };

    newEmployee(employee_first_name, employee_last_name, employee_role) {
        return this.db.promise().query(`INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`, [employee_first_name, employee_last_name, employee_role]);
    };

    updateEmployeeRole(role_id, employee_id) {
        return this.db.promise().query(`UPDATE employee SET role_id = (?) WHERE id = (?)`, [role_id, employee_id]);
    };

    EmployeeSelection() {
        return this.db.promise().query("SELECT CONCAT(first_name, ' ', last_name) AS name, id AS value FROM employee");
    };

    JobTitle() {
        return this.db.promise().query("SELECT title AS name, id AS value FROM role");
    };
}

module.exports = new allOptions(db);