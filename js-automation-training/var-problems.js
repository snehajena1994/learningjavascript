/*

// Running the codes------------
//PART-1
// Hoisting using var 
console.log("Status before declaration: " + testStatus);// Print undefined
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);//Print PASSED


//PART-2
/*
// replacing var with let---- "It should be throwing error will not give any output"
console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);


//PART-3
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // var value will be used inside and outside of block


//PART-4

for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);//print i=0 then i=1,i=2 then it will store i=3
}
console.log("After loop, i = " + i); //i=3
*/
/*
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  //tempUser will be undefined


for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);//print i=0 then i=1,i=2
}
console.log("After loop, i = " + i); //i=undefined
*/


//Correcting the code---
//PART-1
let testStatus= "PASSED";
console.log("------------------------------------------------");
console.log("                      TEST STATUS               ");
console.log("------------------------------------------------");
console.log("Status before declaration: " + testStatus);// Print PASSED
console.log();
testStatus = "FAILED";
console.log("Status after declaration: " + testStatus);//Print FAILED
console.log();



//PART-2
testStatus = "SKIPPED";
console.log("Status before declaration: " + testStatus);
testStatus = "PAUSED";
console.log();
console.log("Status after declaration: " + testStatus);
console.log("------------------------------------------------");


//PART-3
const USER_DETAILS="         USER DETAILS.          "
let tempUser="test@123.com";
console.log("========================================");
console.log(USER_DETAILS);
console.log("========================================");
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
    console.log();
}
console.log("Outside block: " + tempUser); 
console.log("========================================"); 


//PART-4
const TEST_TITLE="             TEST STEPS               ";
console.log("//////////////////////////////////////////");
console.log(TEST_TITLE);
console.log("//////////////////////////////////////////");
let testSteps;
for ( testSteps = 0; testSteps < 3; testSteps++) {
    console.log("Running test step " + testSteps);//print i=0 then i=1,i=2 then it will store i=3
    console.log();
}
console.log("After loop, i = " + testSteps); //i=3
console.log("//////////////////////////////////////////");



