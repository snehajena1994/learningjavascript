let employeeData={
name:"Lasky",
id: 144556,
doj: "12-07-2001",
salary: 124565386,
xyz:"getting deleted",
};
console.log(employeeData.name);// object. property name --- dot notation
console.log(employeeData["salary"]);// array like call the object
console.log(employeeData);
console.log(typeof employeeData);
console.log(typeof employeeData.doj);
console.log(employeeData["id"]+employeeData["salary"]);

let update="salary";
console.log(employeeData[update]);

console.log("xyz is PRESENT", "xyz" in employeeData);
delete employeeData.xyz;
console.log("xyz is NOT PRESENT", "xyz" in employeeData);


"use strict";
/*
 
Revision
- loops, for of, while, do while,
- break,
- continue
- nested loops
 
*/
 
//Objects in Javascript
//HR System
 
/*
 
employee
id
designation
department
doj
salary date
 
 
 
addEmployee()
 
promoteEmployee()
 
updateEmployee()
 
deActiveEmp();
 
salaryProcessing()
 
 
 
name
no. of employees in department
deptAdmin
deptHead
 
 
addDept/update/delete
 
addEmployee()
 
 
 
 
Policies
 
//All employee related variables and functions/actions in one place?
 
You should be able to maintain your code.
And also you have to bake reusability into your program.
 
*/
 
//objects you can combine variables and actions related to employee in a single data type
 
let a = 17;
let firstName = "Mark";
 
let emoloyees = ["Mak", "Steve", "John"];
 
function doIncrement() {}
 
let testCase = {
  fullname: "Login Test",
  result: "PASSED",
  duration: 2.5,
  name: "ABC",
};
 
console.log(typeof testCase);
 
console.log(testCase);
console.log(testCase.name);
console.log(testCase.result);
console.log(testCase.duration);
console.log(testCase["name"]);
console.log(testCase["result"]);
console.log(testCase["duration"]);
//console.log(result);
 
let propertyName = "result";
 
console.log(testCase.propertyName); //wrong way of referring?
 
console.log(testCase[propertyName]);
 
testCase.tester = "Mark";
 
console.log(testCase);
 
testCase.priority = 1;
console.log(testCase);
testCase.result = "FAILED";
console.log(testCase);
console.log("Is result property exists?", "result" in testCase);
delete testCase.result;
console.log("Is result property exists?", "result" in testCase);
console.log(testCase.result);
delete testCase.name;
console.log("Is result property exists?", "name" in testCase);
console.log(testCase.status);
 
let testRunner = {
  name: "Login Suite",
  totalTests: 5,
  passedTests: 3,
 
  // Method: function inside an object
  run: function () {
    console.log("Running test suite: " + this.name);
    console.log("Total tests: " + this.totalTests);
  },
 
  // Shorthand method syntax (ES6)
  report() {
    console.log("Generating report for: " + this.name);
    console.log("Passed: " + this.passedTests + "/" + this.totalTests);
  },
};
 
testRunner.run();
testRunner.report();
 
//this