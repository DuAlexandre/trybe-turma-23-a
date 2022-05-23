/* Acesse o elemento elementoOndeVoceEsta. */

/* Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */

console.log(document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "blue")

/* Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */

console.log(document.getElementById("elementoOndeVoceEsta").firstElementChild.innerText = "texto")

/* Acesse o primeiroFilho a partir de pai. */

console.log(document.getElementById("pai").firstElementChild);

/* Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. */

console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

/* Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. */

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

/* Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. */

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

/* Agora acesse o terceiroFilho a partir de pai. */



/* Crie um irmão para elementoOndeVoceEsta. */

let criador = document.getElementById("elementoOndeVoceEsta");
let criado = document.createElement("p").innerText = "texto!";
criador.append(criado);

/* Crie um filho para elementoOndeVoceEsta. */
let pai = document.getElementById("elementoOndeVoceEsta");
let filho = document.createElement("p");
pai.appendChild(filho);

/* Crie um filho para primeiroFilhoDoFilho. */

let dad = document.getElementById("primeiroFilhodoFilho").innerText = "oi";
let son = document.createElement("p").innerText = "Olá";
dad.appendChild(son);