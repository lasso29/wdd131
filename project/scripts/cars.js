
const pets = [
    {
        imageurl: "images/lost/th.jpg",
        name: "Brabus",
        type: "Rocket 1000",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/4th.jpg",
        name: "Chevrolet",
        type: "Camaro",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/supra.jpg",
        name: "Toyota",
        type: "Supra",
        status: "Stolen",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/3rd.jpg",
        name: "Chevrolet",
        type: "Corvette",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/5th.jpg",
        name: "Dodge",
        type: "Challenger",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/dodge 2016.jpg",
        name: "Dodge",
        animal: "Charger",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/8th.jpg",
        name: "Ford",
        animal: "Mustang",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/gtr3.jpg",
        name: "Nissan",
        animal: "Gtr r-35",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/lost/porsche.jpg",
        name: "Porsche",
        animal: "GT",
        status: "Missing",
        telephone: 2340000000000
    },
    
];

function createPetCard(pets){
    document.querySelector(".grid-pets").innerHTML = "";
    pets.forEach(pet => {
        let card = document.createElement("article");
        let image = document.createElement("img");
        let name = document.createElement("h1");
        let type = document.createElement("p");
        let status = document.createElement("p");
        let contact = document.createElement("a");

        card.setAttribute("class","pet-card");
        image.setAttribute("src",pet.imageurl);
        image.setAttribute("alt",`${pet.name} ${pet.status} ${pet.type}`);
        image.setAttribute("loading","lazy");
        name.textContent = pet.name;
        type.textContent = `Type: ${pet.type}`;
        status.textContent = `Status: ${pet.status}`;
        contact.setAttribute("class","pet-contact-button");
        contact.setAttribute("href",`tel:${pet.telephone}`);
        contact.textContent = "Contact";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(status);
        card.appendChild(contact);

        document.querySelector(".grid-pets").appendChild(card);
    });
}

createPetCard(pets);
