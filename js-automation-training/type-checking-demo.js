/* 
### Part 3: Type Checking

Create `type-checking-demo.js` using typeof for all variables.

--- */
let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean

let userDetails= "||         TYPE CHECKING DEMO         ||"
console.log("========================================");
console.log(userDetails);
console.log("========================================");

console.log("NAME: "+ typeof firstName+" "+ typeof lastName);
console.log("USER ID: " + typeof userId);
console.log("AGE: " + typeof age);
console.log("EMAIL:", typeof email);
console.log("ACTIVE USER: " + typeof isActive);
console.log("No of Login:", typeof loginCount);
console.log("AVARAGE SCORE:", typeof averageScore);
console.log("ACCESS TO THIS PAGE:", typeof hasAccess);
