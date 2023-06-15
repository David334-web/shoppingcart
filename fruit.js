let header = document.createElement("header");
let main = document.createElement("main");

let listeFruit = [
    {
        id:1,
        name:"Melon",
        image:"./assets/logofruit/melon.gif",
    },

    {
        id:2,
        name:"Pomme",
        image:"./assets/logofruit/pomme.gif",
    },

    {
        id:3,
        name:"Cerise",
        image:"./assets/logofruit/cerise.gif",
    },

    {
        id:4,
        name:"Banane",
        image:"./assets/logofruit/banane.gif",
    },
];

var compagnyLogo = document.createElement("img");
compagnyLogo.src = "./assets/logo/logo.png";
compagnyLogo.classList.add("Logocompagny");

let button1 = document.createElement("button");
var buttonlogo = document.createElement("img");
buttonlogo.src ="./assets/logo/local.svg";
buttonlogo.classList.add("locallogo");
let text = document.createTextNode("Localisation");
button1.appendChild(text);
button1.appendChild(buttonlogo);
button1.classList.add("buttonlocal");

let buttton2 = document.createElement("button");
var button2logo = document.createElement("img");
button2logo.src ="./assets/logo/contact.svg";
button2logo.classList.add("contactlogo");
let text2 = document.createTextNode("Contact");
buttton2.appendChild(text2);
buttton2.appendChild(button2logo);
buttton2.classList.add("buttoncont");

let lesButtons = document.createElement("p");
lesButtons.appendChild(button1);
lesButtons.appendChild(buttton2);

var fruitLogo = document.createElement("img");
fruitLogo.src = "./assets/logofruit/giffruit.gif";
fruitLogo.classList.add("Fruitlogo");

let textLogo = document.createElement("p");
textLogo.classList.add("fruta");
let textlogo = document.createElement("span");
let text3 = document.createTextNode("Sabor");
let text4 = document.createTextNode("Fruta");
textLogo.appendChild(textlogo);
textlogo.appendChild(text3);
textLogo.appendChild(text4);


header.appendChild(compagnyLogo);
header.appendChild(lesButtons);
main.appendChild(fruitLogo);
main.appendChild(textLogo);

document.getElementsByTagName("body")[0].appendChild(header);
document.getElementsByTagName("body")[0].appendChild(main);


for(let i = 0; i < listeFruit.length; i++){
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    let nameFruit = document.createTextNode(listeFruit[i].name);

    let image = document.createElement("img");
    image.classList.add("giffruit");
    image.src = listeFruit[i].image;

    li.appendChild(nameFruit);
    li.appendChild(image);
    ul.appendChild(li);

    main.append(ul);
}


let payButton = document.createElement("button");
var paylogo = document.createElement("img");
paylogo.src = "./assets/logo/moneylogo.svg";
let payText = document.createTextNode("Payer");
paylogo.classList.add("paylogo");
payButton.appendChild(payText);
payButton.appendChild(paylogo);
payButton.classList.add("Payerbutton");

main.appendChild(payButton);