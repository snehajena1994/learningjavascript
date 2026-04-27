/*
### Part 2: Test Data Generator

Create a new file called `test-user-generator.js` and create multiple test user credentials.

**Requirements:**
- Create 3 different test users
- Each user should have: firstName, lastName, email, password
- Use descriptive variable names (user1FirstName, user1Email, etc.)
- Print all users in a formatted table-like structure

*/
let userDetails= "||         TEST USER DATABASE         ||"
console.log("========================================");
console.log(userDetails);
console.log("========================================");
let user1FirstName= "SNEHA";
let user1LastName= "JENA";
let emailID="sj@gmail.com";
let password= "abc@12345";

    console.log("USER 1");
    console.log("-----------")
    console.log("USERNAME:"+" "+user1FirstName+" "+user1LastName);
    console.log("EMAIL-ID:"+" "+emailID);
    console.log("PASSWORD:"+" "+password);

    console.log();

    userName= "TANISHQ JENA";
    emailID="tj@gmail.com";
    password= "xyz@12345";

    console.log("USER 2");
    console.log("-----------")
    console.log("USERNAME:"+" "+userName);
    console.log("EMAIL-ID:"+" "+emailID);
    console.log("PASSWORD:"+" "+password);
    console.log(" ");

    userName= "MANOJ KUMAR JENA";
    emailID="mj@gmail.com";
    password= "test@12345";

    console.log("USER 3");
    console.log("-----------")
    console.log("USERNAME:"+" "+userName);
    console.log("EMAIL-ID:"+" "+emailID);
    console.log("PASSWORD:"+" "+password);
    console.log("");
    console.log("==============")
    console.log("Total User: 3");
    console.log("==============")