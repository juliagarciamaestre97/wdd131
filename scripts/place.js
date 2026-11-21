//Last Modified

const currentYear = document.querySelector('#currentyear');

const lastModified = document.querySelector('#lastModified');

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = document.lastModified;

//Windchill

const temperature = 24;
const windSpeed = 10;

function calculateWindChill(temperature, speed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temperature * Math.pow(speed, 0.16)).toFixed(1);
}

const windChillSpan = document.querySelector("#windchill");

if (windChillSpan) {
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillSpan.textContent = "N/A";
    }
}