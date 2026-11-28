let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const namesB = names.filter(name => name.charAt(0) === 'B');

console.log(namesB);

const namesLength = names.map(name => name.length);

console.log(namesLength);

const namesReduce = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(namesReduce);

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

console.log(countriesLong);