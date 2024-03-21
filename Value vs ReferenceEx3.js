//Reference vs Value 
//Primitive data types
// String, Numbers,Symbol,Boolean,Undefinded,Null,
//Array,Functions Objects = objects
//typeof

//when assigning primitive data type if a variable any changes are made directly to that value, without affecting original value
//when assigning non-primitive data types value to a variable is done by refernce so many changes will effect all the reference.

let number1 =10;
let number2 =20;
console.log(`the first number is ${number1}`);
console.log(`the second number is ${number2}`);

let person1 ={ name: "shiva"}
let person2 = { name:"kumar"};
console.log(`the first person${person1.name}`);
console.log(`the second person${person2.name}`);