// Function declaration
function add1(a, b) {        
    console.log(a**b);
}
add1(2, 5);


// Function Expression
const add2 = function(a, b) {
    console.log(a+b);
}
add2(2, 4);


// Single line of code
let add3 = (a, b) => a + b;
console.log(add3(3, 2));

// Multiple line of code
const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
} 
console.log(great(3,5));

//Immediately Invoked Function Expressions
(function () {
    let a ='30';
    let  b='20';

    console.log(a*b);
  })();

  //Hoisting
  greet();
function greet() {
    console.log("Hello world");
}
function myFunc(theObject){
    theObject.make ='mango'
} 
const myCar =
{
    make: 'apple',
    rate : '30rs'
}
let x = myCar.make;
console.log(x);
myFunc(myCar)
var y = myCar.make;
console.log(y);
 


function myFunc1(theArr){
    theArr[0] =30;
}
const arr=[34];
console.log(arr);
myFunc1(arr)
console.log(arr[0]);

const Factorial = function fac(n)
{
    return n < 2 ? 1 : n*fac(n-1);
}
console.log(Factorial(3));

console.log(square(5));
// …
function square(n) {
  return n * n;
}
var a = prompt("entera a number");
var b = prompt('enter a number');
var op = prompt('enter a operator');
function calculate() {
    switch(op){
        case'+':
        console.log ( "add:" + (a+b));
        break;
        case'-':
        console.log("subract:" + (a-b));
        break;
        case'*':
        console.log("multiply:" + (a*b));
    case'**':
    console.log("power:" + (a**b) );
    break;
        case'/':
        console.log("division is:" + (a/b));
        break;
    case'square':
    console.log("square value is :" + square(a));
    console.log("square value is :" + square(b));

    break;
    case'a*a*a':
    console.log("cube value is :"+ (a*a*a) );
    break;
    case'b*b*b':
    console.log("cube value is :"+ (b*b*b) );
    }
    
      
}
calculate();