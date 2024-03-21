//Arrays, /function and objects
//Objects -keywords paris.Methods
// dot notation
const person ={
    name: "bro",
    lastName: "Ellavena",
    age: 24,
    education:true,
    married:false,
    friends: ["Ganesh","ravi","sonu"],
    greeting: function () 
    {
        console.log("hyy bro ");
    },
};
console.log(person.name);
console.log(person.friends);
console.log(person["age"]);

const emp = {
     
    name: "suresh",
    salary: 25000,
    location:"Hyd",
    married:"single",
    parents:["Narasimha","Devika"],
    greeting: function () 
    {
        console.log("Be Hapopy for this Time !!!!!!!!!!!!!");
    },

     
};
console.log(emp.name);
console.log(emp["name"]);
console.log(emp["salary"]);