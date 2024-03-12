// counter program
const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
let count = 0;

increaseBtn.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}


decreaseBtn.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    document.getElementById("countLabel").textContent = count;
}

let username = false ? "Aziz" : 'Karim';

console.log(username);

//spread ...

//fruits = ['mango', 'banana', 'apple'];

//console.log([...fruits, ...fruits]);


//nice forloop 
//this sum function accepts n number of arguments and print their sum 
function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    console.log(result);
}

sum(1,2,3,4,5,6)

const nums = [1,2,3,4,5,6,7]
const fruits = {
    name: "spongebob", 
    age: 20, 
    adress: '124 conch st.'
}

for (const fruit in fruits){
    console.log(fruits[fruit]);

}

