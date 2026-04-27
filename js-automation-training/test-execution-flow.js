/*
### Part 3: Test Flow Simulation

Create a new file called `test-execution-flow.js` and simulate a test execution flow where variable values change.

**Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses
*/

console.log("==========================================");
console.log("      TEST EXECUTION FLOW");
console.log("==========================================");
const Test_Name="Udemy login flow";
let testername="Tanishq Jena";
let stepNumber= "Step 1";
let status="IN PROGRESS";

console.log("Test Name: "+ Test_Name);
console.log("Tester Name: "+ testername);
console.log();
console.log(stepNumber+":"+"User is opening Udemy browser");
console.log("STATUS: "+ status);
console.log();

stepNumber="Step 2";// value is changed for stepNumber
console.log(stepNumber+":"+"User navigating to login page");
console.log("STATUS: "+ status);
console.log();

stepNumber="Step 3";// value is changed for stepNumber
console.log(stepNumber+":"+"User entering the Username");
console.log("USERNAME: "+"tanishq@abc");
console.log("STATUS: "+ status);
console.log();

stepNumber="Step 3";
console.log(stepNumber+":"+"User entering the Password");
console.log("PASSWORD: "+"test@1234");
console.log("STATUS: "+ status);
console.log();

stepNumber="Step 4";
console.log(stepNumber+":"+"Clicking login button");
console.log("STATUS: "+ status);
console.log();

stepNumber="Step 4";
console.log(stepNumber+":"+"Clicking login button");
console.log("STATUS: "+ status);
console.log();

stepNumber="Step 5";
status="COMPLETED"
console.log(stepNumber+":"+"User is sucessfully logged in");
console.log("STATUS: "+ status);
console.log();

console.log("==========================================");
status="Final Status: PASSED";
console.log(status);
console.log("Test Duration: 2.5 seconds");
console.log("==========================================");



