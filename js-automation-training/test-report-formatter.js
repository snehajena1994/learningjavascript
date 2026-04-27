/*
### Part 2: Design a Test Report

Create a new file called `test-report-formatter.js` and write code to print a test execution report for any application you've tested.

**Requirements:**
1. Print a test suite name (e.g., "Login Test Suite")
2. Print 5 different test cases with names
3. Each test should have a status: PASSED, FAILED, or SKIPPED
4. Use blank lines to make it readable
5. Print a summary at the end (e.g., "3 Passed, 2 Failed")
*/

let testSuit= "           Login Test Suite               ";
console.log("==========================================");
console.log(testSuit);
console.log("==========================================");
let testCase1=3;
let print1="Give correct user name";
if(testCase1==3){
console.log("Test Case1:" + " "+ print1);
console.log("Status:" + " "+ "✓ PASSED");
}
if(testCase1>=1){
    print1="Give in-correct user name";
console.log("Test Case2:" + " "+ print1);
console.log("Status:" + " "+ "✗ FAILED");
}
if(testCase1<=4){
    print1="Already logged in user";
console.log("Test Case3:" + " "+ print1);
console.log("Status:" + " "+ "⏭ SKIPPED");
}
if(testCase1>=2){
    print1="Give correct password";
console.log("Test Case4:" + " "+ print1);
console.log("Status:" + " "+ "✓ PASSED");
}
if(testCase1<=3){
    print1="Give incorrect password";
console.log("Test Case5:" + " "+ print1);
console.log("Status:" + " "+ "✗ FAILED");
}
testSuit= "               Test Summary                ";
console.log("==========================================");
console.log(testSuit);
console.log("==========================================");
console.log("Total Test Cases : 5");
console.log("✓ PASSED: 2");
console.log("✗ FAILED: 2");
console.log("⏭ SKIPPED: 1");
console.log("==========================================");
