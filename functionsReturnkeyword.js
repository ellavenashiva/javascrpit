//Arrays, Functions and Objects
//return
//default undefinded ,shortcuts,ignore after 
//1 inch 2.54cm


const wallHeight = 80;
function calculated(value) 
{
    const newValue = value * 2.54;
    //console.log("The value in cm is: " + value * 2.54 + "cm");
  return value * 2.54;
}

const width = calculated[100];
const length =calculated(wallHeight);

const dimensions = [width,length];
console.log(dimensions);