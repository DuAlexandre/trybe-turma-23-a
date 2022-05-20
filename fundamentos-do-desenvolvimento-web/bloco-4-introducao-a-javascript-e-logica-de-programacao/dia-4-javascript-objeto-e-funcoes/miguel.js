function miguel(indiceInicial, indicePosterior){
let indiceAcumulado = (((indiceInicial / 100) + 1) * ((indicePosterior / 100) +1) - 1) * 100;

return indiceAcumulado
};

console.log(miguel(5,3.5));


let a;
let b;
if (a > b){
    console.log(a);
}else{
    console.log(b);
}
