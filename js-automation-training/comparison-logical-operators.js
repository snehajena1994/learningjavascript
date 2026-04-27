/*
## Exercise 1: Age Range Validation
*/

let age=25;
console.log("---------------------------------------------------");
console.log("       AGE RANGE VALIDATION          ");
console.log("---------------------------------------------------");

//if(age>=18)
    if(age>=18 && age<=65)
{
    //let age=18;/// agssigning the local variable value with 18
    console.log("Age:", age);
    console.log("✅ Valid age range (18-65)");
    console.log();
}
else{
    console.log("Age:", age);
    console.log("❌ Age must be between 18 and 65");
    console.log();
}
/*
if(age<=17){

    console.log("Age:", age);
    console.log("✅ Valid age range (18-65)");
}
else
{
    let age=17;// re-assigning the value to 17 inside the block
    console.log("Age:", age);
    console.log("❌ Age must be between 18 and 65");
    console.log();
}

if(age>=25)
{
    console.log("Age:", age);
    console.log("✅ Valid age range (18-65)");
    console.log();
}  
else{
    console.log("Age:", age);
    console.log("❌ Age must be between 18 and 65");
}

if(age<=65)
{
    let age=65;// re-assigning the value to 65
    console.log("Age:", age);
    console.log("✅ Valid age range (18-65)");
    console.log();
}
else {
    console.log("Age:", age);
    console.log("❌ Age must be between 18 and 65");
}

age=66;// globally changing the value to 66 for further use
if(age<=65)
{
    console.log("Age:", age);
    console.log("✅ Valid age range (18-65)");
}
else
    console.log("Age:",age);
    console.log("❌ Age must be between 18 and 65");
    */
   console.log("---------------------------------------------------");

/*

## Exercise 2: Login Credentials Validator

**Scenario:** A user can login with EITHER (username AND password) OR email.

*/
console.log("---------------------------------------------------");
console.log("       Login Credentials Validator          ");
console.log("---------------------------------------------------");
let userName="usertest";
let userPassword="test1234";
let email="";
if ((userName!=="" && userPassword!=="") || email!=="")
{
console.log("Checking credentials...");
console.log("Username: "+ userName);
console.log("Password: "+ userPassword);
console.log("Email: "+ email);
}
else
{
    console.log("Invalid condition");
}
console.log("---------------------------------------------------");

/*
## Exercise 3: Test Status Validator

**Scenario:** A test is considered successful if status is "PASSED" OR "SKIPPED", AND there are no errors.

**Requirements:**
1. Create two variables:
   - `status` with value `"PASSED"`
   - `errorCount` with value `0`
2. Write an if-else statement that:
   - Checks if (status is "PASSED" OR "SKIPPED") AND errorCount equals 0
   - If yes, print: `"✅ Test completed successfully"`
   - If no, print: `"❌ Test has issues"`

**Test Cases:**
- `status="PASSED"`, `errorCount=0` → Success
- `status="SKIPPED"`, `errorCount=0` → Success
- `status="PASSED"`, `errorCount=2` → Issues
- `status="FAILED"`, `errorCount=0` → Issues

**Example Output:**
```
Test Status: PASSED
Error Count: 0

Validation:
  Status is acceptable: true
  No errors: true

✅ Test completed successfully
```

---
*/
console.log("---------------------------------------------------");
console.log("       Test Status Validator          ");
console.log("---------------------------------------------------");
let testStatus="PASSED";
let errorCount=0;
if ((testStatus=="PASSED" || testStatus=="SKIPPED") && errorCount== 0)
{
console.log("✅ Test completed successfully");
}
else{
    console.log("❌ Test has issues");
}
console.log("---------------------------------------------------");
/*
## Exercise 4: Response Time Validator

**Scenario:** Performance test - response time must be less than 3 seconds.

**Requirements:**
1. Create a variable `responseTime` with value `2.5`
*/
console.log("---------------------------------------------------");
console.log("       Response Time Validator          ");
console.log("---------------------------------------------------");
let responseTime=3;
if (responseTime < 3)
{
    console.log("Response Time Test");
    console.log("Threshold: 3 seconds");
    console.log("Actual:"+ responseTime + "seconds")
    console.log("✅ Performance test PASSED "+ "(response time: "+ responseTime + " seconds)");
   
}else{
    console.log("❌ Performance test FAILED (response time: "+responseTime+ " seconds",","+ "threshold: 3 seconds)");
}
console.log("---------------------------------------------------");

