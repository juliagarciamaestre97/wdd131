let person = {
    name: "Antonio Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbie: ["reading", "playing guitar", "hiking"],
    address: {
        street: "123 Camino Real",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(person[`isEmployed`]);

console.log(person.hobbie[0]);

console.log(person.age);

console.log(person['address'].city);

person.age = 31;

console.log(person.age);

//Second exercise

let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundaments",
    credits: 2,
    sections: [
        {
            section: "001",
            enrolled: 95,
            instructor: "Roberto Diaz Rodriguez"
        },
        { 
            section: "002",
            enrolled: 80,
            instructor: "Sarah Gobble"
        }
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

setCourseInformation(aCourse);

function renderSections(course) {
    const tbody = document.querySelector("#sections tbody"); //Selecciona el tbody del html y lo storage en una variable
    let rows = ""; //crea una variable con una string vacia para rows
    for (const section of course.sections) {
        rows += `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
            </tr>
            `
    }// Recorre cada objeto de course.sections y va pegando su fila <tr>...</tr> dentro de rows hasta terminar el array
    tbody.innerHTML = rows; //Inserta en el documento html rows llamando la variable que se creo anteriormente
}

renderSections(aCourse);