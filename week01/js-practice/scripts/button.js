//With variable
const buttonA = document.querySelector("#button_A"); //# is used to call the id in html

const headingA = document.querySelector("#heading_A");

let count = 1;// crea una variable cuyo valor es 1

buttonA.onclick = () => {
    buttonA.textContent = "Try again!";// al hacer click cambia el texto del boton
    headingA.textContent = `${count} click so far`;
    count += 1;//al hacer click la variable count suma 1 
}

//Without variable
const buttonB = document.querySelector("#button_B");

const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
    buttonB.textContent = "Try again!";
    headingB.textContent = "1 click so far";
}

let myName;
let myAge;

myName = "Julia";
myAge = 29;

console.log(myName);
console.log(myAge);
