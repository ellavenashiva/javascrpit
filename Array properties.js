//Array properties and Methods

let fruitNames =["apple" , "banana" ,"mango" ,"orange", "gova",5,55,6];

//length(array size of length)
console.log(fruitNames.length);
console.log(fruitNames[fruitNames.length-1]);

//concat(adding one or more arrays elements)
const firstName = ["raju","ravi","ramu","rani"];
const name = firstName.concat(fruitNames);
console.log(name);

// reverse(last to element)
console.log(name.reverse());

// push( last element will be added)
name.push("shiva","blackberries");
console.log(name);

//pop(last element will be delete)

name.pop();
name.pop();
console.log(name);

// unshift (Added firsrt elemnet)
name.unshift("shivakumarellavenea");
name.unshift("Ganesh");
console.log(name);

//shift( Added first element will be deleted)
name.shift();
name.shift();
console.log(name);