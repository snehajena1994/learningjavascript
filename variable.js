/*
var a = 12
console.log(a)
let emailAddress = "sneha.jena4@gmail.com";
console.log(emailAddress);
const personName = "Sneha Jena";
console.log(personName);
emailAddress = "sneha.jena1994@gmail.com";
console.log(emailAddress);
*/

let score=85;
if(score>=80){
    let studentA= "Gets score B"
    console.log(studentA);
}
else{
    console.log("Get score A");
}
 score=90;
if(!score>=90){
    let studentA= "Gets score A"
    console.log(studentA);
}
else{
    console.log("Get score C");
}
console.log("score:" + (score>=90? "A" : score >=80 ?"B" : "C or below"));