//Arrays Functioin and Objects
//Arrays -[],0 index based
const fruit1 = "apple";
const fruit2 = "mango";
const fruit3  = "banana"
const fruit4 = "cherries";

const fruitList = ["apple","mango", "banana", "cherries",5, null, true,false,];
// const fruitList =[0,1,2,3,4,5,5,......]
//console.log(fruitList);
console.log(fruitList[1]);
fruitList[4]="orange";
console.log(fruitList);

let bestFruit = fruitList[3];
console.log(bestFruit);
console.log(fruitList[100]);