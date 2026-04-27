/*
### Challenge 2: Create a Bug Report
Write code to print a detailed bug report:
- Bug ID
- Title
- Steps to reproduce (3-5 steps)
- Expected result
- Actual result
- Severity
*/

let bugDetails= "||         BUG DETAILS         ||"
console.log("=================================");
console.log(bugDetails);
console.log("=================================");
console.log("");

let bugId= 100;
if(bugId==100)
{
let title="User login is not working";
console.log("Bug ID: "+ bugId);
console.log("Title: "+ title);
console.log("Steps to reproduce:");
console.log("Step1: "+"User enters the username");
console.log("Step2: "+"User enters the password");
console.log("Step3: "+"user clicks on login");
console.log("Expected result: "+"Successful Login")
console.log("Actual Result: "+"Login failed- Incorrect username or password");
console.log("Severity: "+"High Severity");

}
console.log("");

if(bugId>=100)
{
 let title="User login is working with incorrect username";
console.log("Bug ID: "+ "101");
console.log("Title: "+ title);
console.log("Steps to reproduce:");
console.log("Step1: "+"User enters incorrect username");
console.log("Step2: "+"User enters the password");
console.log("Step3: "+"user clicks on login");
console.log("Expected result: "+"Successful Login")
console.log("Actual Result: "+"Login succesfull");
console.log("Severity: "+"High Severity");   
}

console.log("");

if(bugId<=100)
{
 let title="User is able to login but checkbox outside is not working";
console.log("Bug ID: "+ "102");
console.log("Title: "+ title);
console.log("Steps to reproduce:");
console.log("Step1: "+"User enters the username");
console.log("Step2: "+"User enters the password");
console.log("Step3: "+"user clicks on login");
console.log("Expected result: "+"Checkbox shoud be appeared on screen")
console.log("Actual Result: "+"Login succesfull with");
console.log("Severity: "+"Low Severity");    
}
console.log("");

let bugReport= "||         BUG DETAILED REPORT         ||"
console.log("=========================================");
console.log(bugReport);
console.log("=========================================");
console.log("");
console.log("High Severity Bug: "+ "2");
console.log("Low Severity Bug: "+ "1");
console.log("");

console.log("=========================================");

