const currentYear = document.querySelector('#currentyear');

const lastModified = document.querySelector('#lastModified');

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = document.lastModified;

//Hamburger Menu Button
const mainnav = document.querySelector('.navigation');

const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

