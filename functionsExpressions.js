// Arrays, Function and Objects
// Expressions - another way to define a function
// create a variable , assign to function (not a value), use variable
// diff - hoisting, use - arrow function and libraries.


  function addNumber(num1,num2){
    return num1 + num2;
  }

const firstValue = addNumber(5,6);
const secondValue = addNumber(6,8);

// Function expressions
const add = function(num1,num2){
    return num1 + num2;
};
//const thirdvalue =add(100,20);


const result =(firstValue,secondValue,add(10,200));
console.log(result);