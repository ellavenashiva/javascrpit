//string properties and Methods
// Wrapper string Object,Don't Memorize methods

let text ="  shiva kumar  ";

 let result = text.length;
  console.log(result);
  console.log(text.length);
  console.log(text.toLocaleUpperCase());
  console.log(text.charAt(5));
  console.log(text.toLowerCase());
  console.log(text.charAt(text.length-2));
  console.log(text.indexOf("s"));
  //console.log(text.startsWith("shivakumar"));
  console.log(text);
  console.log(text.trim());
  console.log(text.trim().toLowerCase().startsWith("shiva"));
  console.log(text.toLocaleUpperCase().includes("shi"));
  console.log(text.slice(0,6));
  console.log(text.slice(-3));


/*console.log(text.toUpperCase());
console.log(text.toLocaleUpperCase());
*/

/*const person ={
    name : "shiva",
    greeting: function(){
        console.log("Hyy how are you");
        return ;
    },
};
console.log(person);
console.log(person.name);
console.log(person.greeting());
*/