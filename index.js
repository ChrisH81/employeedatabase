const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'What would you like to do?',
      choices: [
        'view all departments', 
        'view all roles',
         'view all employees',
         'add a department',
         'add a role',
         'add an employee',
         'update an employee role'
      ]
    }
  ])
  .then(answers => {
      if (answers.menuChoice === 'view all departments') {
        viewDepartments();
      }
      else if (answers.menuChoice === 'view all roles') {
        viewRoles();
      }
      else if (answers.menuChoice === 'view all employees') {
        viewEmployees();
      }
      else if (answers.menuChoice === 'add a department') {
        addDepartment();
      }
      else if (answers.menuChoice === 'add a role') {
        addRole();
      }
      else if (answers.menuChoice === 'add an employee') {
        addEmployee();
      }
      else if (answers.menuChoice === 'update an employee role') {
        updateEmployee();
      }
  
  });


function viewDepartments() {
  console.table([
  {
    name: 'department1',
    age: 10
  }
]);

}

function viewRoles() {
  console.table([
  {
    title: 'department1',
    salary: 150000,
    department_id: 25
  }
]);
}

function viewEmployees() {
  console.table([
    {
      first_name: 'John',
      last_name: 'Smith',
      role_id: 1,
      manager_id: 25
    }
  ]);
}

function addDepartment() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Database'
  });
   
   const payload = {
     name: "name",
     age: "age",
   }
  // simple query
  connection.query(
    'INSERT INTO Department (name, age) VALUES (?, ?)"',
    payload,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

}

function addRole() {
   const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Database'
  });
   
   const payload = {
     title: "title",
     salary: "salary",
     department_id: "department_id"
   }
  // simple query
  connection.query(
    'INSERT INTO Department (name, age) VALUES (?, ?)"',
    payload,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}

function addEmployee() {
   const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Database'
  });
   
   const payload = {
     first_name: "first_name",
     last_name: "last_name",
     role_id: "role_id",
     manager_id: "manager_id"
   }
  // simple query
  connection.query(
    'INSERT INTO Department (name, age) VALUES (?, ?)"',
    payload,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}

function updateEmployee() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Database'
  });
   
   const payload = {
     first_name: "first_name",
     last_name: "last_name",
     role_id: "role_id",
     manager_id: "manager_id"
   }
  // simple query
  connection.query(
    'INSERT INTO Department (name, age) VALUES (?, ?)"',
    payload,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}



