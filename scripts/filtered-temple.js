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

//Temple array

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Asuncion Paraguay",
        location: "Asuncion, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6952.jpg"
    },

    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/montevideo-uruguay-temple/montevideo-uruguay-temple-18474.jpg"
    },

    {
        templeName: "Lima Peru Los Olivos",
        location: "Lima, Peru",
        dedicated: "2024, January, 14",
        area: 47413,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524.jpg"
    },
];

//Create a card for the temple holder
const albumContainer = document.querySelector(".album");

function renderTempleCards(templeArray) {
    albumContainer.innerHTML = "";

    templeArray.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        albumContainer.appendChild(card);

    });


}

renderTempleCards(temples);

//Navigation Pages

const filterLinks = document.querySelectorAll(".navigation a[data-filter]");

const pageHeading = document.querySelector("main h1");

function getDedicatedYear(dedicated) {
    return parseInt(dedicated, 10);
}

function applyTempleFilter(filterType) {
    let filteredList = temples;
    let headingText = "Home";

    if (filterType === "old") {
        filteredList = temples.filter((temple) =>
            getDedicatedYear(temple.dedicated) < 1900);

        headingText = "Old";
    } else if (filterType === "new") {
        filteredList = temples.filter((temple) =>
            getDedicatedYear(temple.dedicated) > 2000);

        headingText = "New";
    } else if (filterType === "large") {
        filteredList = temples.filter((temple) =>
            temple.area > 90000
        );
        headingText = "Large";
    } else if (filterType === "small") {
        filteredList = temples.filter((temple) =>
            temple.area < 10000
        );
        headingText = "Small";
    } else {
        filteredList = temples;
        headingText = "Home";
    }


    if (pageHeading) {
        pageHeading.textContent = headingText;
    }

    renderTempleCards(filteredList);

    mainnav.classList.remove("show");
    hambutton.classList.remove("show");
}
filterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedFilter = link.dataset.filter;
        applyTempleFilter(selectedFilter);
    });
});