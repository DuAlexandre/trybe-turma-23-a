/* Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito. */

document.getElementById("page-title").innerText = "Avengers";

/* Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo. */

document.getElementById("second-paragraph").innerText = "Eu mudei esse parágrafo";

/* Por fim, recupere o subtítulo e altere-o também. */

document.getElementById("subtitle").innerText = "Filme bom!"

/*Muda a cor do paragrafo*/

let paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";

/* Adicione uma classe igual para os dois parágrafos. */

/* Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName */

let classes = document.getElementsByClassName("par");
for (let index = 0; index < classes.length; index += 1){
    classes[index].style.color = "green";
}

/* Altere algum estilo do primeiro deles. */

classes[0].style.color = "blue";

/* Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName. */

let tags = document.getElementsByTagName("p");
for (let index = 0; index < tags.length; index += 1){
    tags[index].style.backgroundColor = "black"
}

/*O querySelector encontra apenas a primeira seleção que ele encontrar*/

/* Para praticar, substitua todas as funções que você usou no exercício anterior por querySelector e/ou querySelectorAll.

 */

document.querySelector("#page-title").innerText = "Mudando o título"

document.querySelectorAll("header p")[0].innerText = "Mudando esse paragrafo com query"