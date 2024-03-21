// Arrays and for loop
 
const firstName= ["shiva","varshith","kumar","ravi","rakesh","thirumala","shivani","kalyani"];
let lastName = "Ellavena";
const newArray= [];

//forloop
for(let i = 0; i <= firstName.length-1; i++){
    //console.log(i);
    //console.log(firstName[i]);
    let fullName =`${firstName[i]} ${lastName}`;
    newArray.push(fullName);
}
console.log(firstName);
console.log(newArray);