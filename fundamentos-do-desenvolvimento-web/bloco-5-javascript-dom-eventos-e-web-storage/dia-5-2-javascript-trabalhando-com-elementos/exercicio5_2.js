function criador (filho){
    let filhao = document.createElement(filho);
    return filhao
}

function associa (dad, son){
    let paizao = document.getElementsByTagName(dad);
    paizao.createElement(son)
}


/* Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body; */

criador("h1");
associa ("body", criador("h1"));

