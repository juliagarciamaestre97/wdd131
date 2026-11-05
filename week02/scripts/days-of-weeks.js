const diasSemana = 6;
const opciones = { weekday: "long" }; // Configura cómo se mostrará el nombre del día. Al usar "long", obtienes el nombre completo (por ejemplo, Thursday o Viernes). Si usaras "short", obtendrías una abreviatura (como Thu o Vie).

// BEGIN
const hoy = new Date();

//Test de hoy output
let hoystring = new Intl.DateTimeFormat("es-ES", opciones).format(hoy);

document.getElementById("hoy").innerHTML = `Today is <strong>${hoystring}</strong>`;

// next days loop for example

for (let i = 1; i <= diasSemana; i++) {
    const diaSiguiente = new Date();
    diaSiguiente.setDate(hoy.getDate() + i);

    let diaSiguienteString = new Intl.DateTimeFormat("es-ES", opciones).format(diaSiguiente);

    const item = document.createElement("li");
    item.textContent = diaSiguienteString;
    document.querySelector("ul").appendChild(item);
}


