/*
## Exercise 1: Email Validation

**Scenario:** Before running login tests, validate the test email address.

**Requirements:**
1. Create a variable `email` with value `"testuser@example.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"✅ Valid email format"`
   - If no, print: `"❌ Invalid email format"`
*/
let email="testuser@example.com";
if(email.includes("@") && email.includes("."))
{
    console.log(`Testing email: ${email}`);
    console.log(`✅ Valid email format`);
}else{
    console.log(`Testing email: ${email}`);
    console.log(`❌ Invalid email format`);
}
console.log();

/*
## Exercise 2: Test Result Categorizer

**Scenario:** Your test framework returns different status codes. You need to display appropriate messages.

**Requirements:**
1. Create a variable `testResult` with value `"PASSED"`
2. Write an if-else-if statement that handles:
   - `"PASSED"` → Print: `"✓ Test passed successfully"`
   - `"FAILED"` → Print: `"✗ Test failed - check logs"`
   - `"SKIPPED"` → Print: `"⊘ Test skipped"`
   - Anything else → Print: `"? Unknown test status"`

*/
let testResult="PASSED";
if(testResult==="PASSED"){
    console.log(`Test Status: ${testResult}`);
    console.log(`✓ Test passed successfully`);

}else{
    if(testResult==="FAILED"){
        console.log(`Test Status: ${testResult}`);
        console.log(`✗ Test failed - check logs`);
    }
    else{
        if(testResult==="SKIPPED"){
            console.log(`Test Status: ${testResult}`);
            console.log(`⊘ Test skipped`);
        }
        else{
            console.log(`Test Status: ${testResult}`);
           console.log("? Unknown test status"); 
        }
    }
}
console.log();

/*
# Exercise 3: Password Strength Checker

**Scenario:** Validate password strength for test user creation.

**Requirements:**
1. Create a variable `password` with value `"Test@123"`
2. Write an if-else-if statement that checks password length:
   - Less than 6 characters → `"❌ Weak password - too short"`
   - Less than 10 characters → `"⚠️ Medium password strength"`
   - 10 or more characters → `"✅ Strong password"`
*/

let password="Test@12228123";
if(password.length<6)
{
    console.log("Password: "+ password);
    console.log("Length: "+password.length+" character");
    console.log(`❌ Weak password - too short`) ;
}
else{
    if(password.length<10){
        console.log("Password: "+ password);
        console.log("Length: "+password.length+" character");
        console.log(`⚠️ Medium password strength`);
    }
    else{
        if(password.length>=10)
        {
          console.log("Password: "+ password);
          console.log("Length: "+password.length+" character");
          console.log(`✅ Strong password`);  
        }
    }
}

/*
## Exercise 4: Test Score Grading

**Scenario:** Convert test automation scores to letter grades.

**Requirements:**
1. Create a variable `score` with value `85`
2. Write an if-else-if statement that assigns grades:
   - 90 or above → `"Grade: A (Excellent)"`
   - 80-89 → `"Grade: B (Good)"`
   - 70-79 → `"Grade: C (Average)"`
   - 60-69 → `"Grade: D (Pass)"`
   - Below 60 → `"Grade: F (Fail)"`
*/
let testScore=100;
if(testScore<60){
    console.log("Test Score: "+ testScore);
    console.log(`Grade: F (Fail)`);

}else{
    if(testScore<=69){
        console.log("Test Score: "+ testScore);
    console.log(`Grade: D (Pass)`);

    }else{
        if(testScore<=79){
        console.log("Test Score: "+ testScore);
    console.log(`Grade: C (Average)`);
        }
        else{
            if(testScore<=89)
            {
                console.log("Test Score: "+ testScore);
    console.log(`Grade: B (Good)`);
            }
            else{
                if(testScore>=90){
                    console.log("Test Score: "+ testScore);
    console.log(`Grade: A (Excellent)`);
                }
            }
        }
    }
}