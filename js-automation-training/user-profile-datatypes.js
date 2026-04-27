/*
### Part 1: Test User Profile with Mixed Types

Create `user-profile-datatypes.js` with a complete user profile using all data types.
*/

let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean

let userDetails= "||         TEST USER PROFILE         ||"
console.log("========================================");
console.log(userDetails);
console.log("========================================");

console.log("NAME: "+ "John"+" "+ "Doe");
console.log("USER ID: " + Number(1001));
console.log("AGE: " + Number(28));
console.log("EMAIL:", "john.doe@test.com");
console.log("ACTIVE USER: " + Boolean(1));
console.log("No of Login:", Number(15));
console.log("AVARAGE SCORE:", Number(87.5));
console.log("ACCESS TO THIS PAGE:", Boolean(1));

/* Alternate way
console.log("NAME: "+ firstName+" "+ lastName);
console.log("USER ID: " + userId);
console.log("AGE: " + age);
console.log("EMAIL:", email);
console.log("ACTIVE USER: " + isActive);
console.log("No of Login:", loginCount);
console.log("AVARAGE SCORE:", averageScore);
console.log("ACCESS TO THIS PAGE:", hasAccess);
*/

