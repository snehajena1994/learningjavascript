/*

### Part 3: Create Test Data Display

Create a new file called `test-data-display.js` and write code to print test data you would use for testing.

**Requirements:**
- Print 3 different test users with their details
- Each user should have: username, email, and password
- Format it nicely so it's easy to read
*/

let userDetails= "||         USER DETAILS         ||"
console.log("==================================");
console.log(userDetails);
console.log("==================================");
let userName= "SNEHA JENA";
let emailID="sj@gmail.com";
let password= "abc@12345";
if(userName== "SNEHA JENA")
{
    console.log("USER1");
    console.log("USERNAME:"+" "+userName);
    console.log("EMAIL-ID:"+" "+emailID);
    console.log("PASSWORD:"+" "+password);
}
    console.log("          ");

    userName= "TANISHQ JENA";
    emailID="tj@gmail.com";
    password= "xyz@12345";

    console.log("USER2");
    console.log("USERNAME:"+" "+userName);
    console.log("EMAIL-ID:"+" "+emailID);
    console.log("PASSWORD:"+" "+password);
    console.log("          ");

    userName= "MANOJ KUMAR JENA";
    emailID="mj@gmail.com";
    password= "test@12345";

    console.log("USER3");
    console.log("USERNAME:"+" "+userName);
    console.log("EMAIL-ID:"+" "+emailID);
    console.log("PASSWORD:"+" "+password);
    console.log("          ");
    console.log("All 3 customers test details are printed");

