//Functions ,return ,if,arrays,for loop,objects

/*const gas =[20,40,50,100];
const food =[30,50,30];

function calculateTotal(arr){
    let total=0;

    for(let   i = 0; i <= arr.length-1;i++){
        total += arr[i];
    }
    return total; 
}
calculateTotal(gas);
*/


const gas  =[20,40, 50,60];
const room =[5500,1600];
const others =[1000,669,1500,500];
  
function calculateTotal(arr){
    let total=0;
    for (let i =0; i <= arr.length-1;i++){
    total += arr[i];
    }
    if(total > 100){
        console.log("Hyy You are spending too much money");
        return total;
    }
    console.log("Hyy you are good totoal is less than 100");
    return total;
}
let gasTotal =calculateTotal(gas);
let roomTotal = calculateTotal(room);
let othersTotal=calculateTotal(others);

//console.log(gasTotal);
//console.log(roomTotal);
//console.log(othersTotal);

console.log({
    gas: gasTotal,
    room: roomTotal,
    others:othersTotal,

});



