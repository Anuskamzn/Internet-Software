//Question 1
function triArea(l,b) {
    let a=(l*b)/2;
    return a;
};
let area = triArea(3,2);
console.log("Area of Triangle = ",area);

//Question 2
function giveMeSomething(a){
    return "Something" +a;
};
console.log(giveMeSomething(" is better than nothing.")); 
console.log(giveMeSomething(" Bob Jane")); 
console.log(giveMeSomething(" something")); 

//Question 3
function score(a,b){
    return a * 2 + b * 3;
}
let sc=score(7,5);
console.log("Final points for the team = ", sc);