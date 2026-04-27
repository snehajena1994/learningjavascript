/*
Create a new file called `test-environment-config.js` and create variables for a test environment configuration.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create at least 6 variables
- Print them in a formatted way

**Variables to create:**
1. Application URL (constant)
2. Application name (constant)
3. Environment name (QA, Staging, Production)
4. Current tester name
5. Test execution date
6. Is automation enabled? (we'll use text for now)
*/

const APP_URL= "https://test/this_is_an_assignment/userpage.com";  //URL value cannot be changed as const variable is used.
const APP_NAME="Assignment Userpage";
let envName= "CIT";
let currentTesterName= "Sneha Jena";
let exeDate= "20-04-2026";
let autoEnable="Yes";

console.log("==============================");
console.log("TEST ENVIRONMENT CONFIGURATION");
console.log("==============================");
console.log("");
console.log("APP URL: "+ APP_URL);
console.log("APP NAME: "+ APP_NAME);
console.log("Environment: "+ envName);
console.log("Tester Name: "+ currentTesterName);
console.log("Execution Date: "+ exeDate);
console.log("Automation Enablement: "+autoEnable);
console.log("");
console.log("==============================");