//5 Programas para cada operação aritmética:
let a = 10;
let b = 5;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(modulo);

//Programa que retorne o maior de dois números:
let a = 12;
let b = 11;

if (a > b){
    console.log(a);
}else{
    console.log(b);
}

// Programa que retorne o maior de três números:
let a = 5;
let b = 4;
let c = 3;

if (a > b && a > c){
    console.log(a);

} else if (b > a && b > c){
    console.log(b);
} else{
    console.log(c);
}

//Programa retorne positivo, negativo ou zero:
let numero = 0;

if (numero < 0){
    console.log("negativo");
} else if (numero == 0){
    console.log("zero");
} else{
    console.log("positivo");
}

// Programa retorna true ou false para saber se é um triângulo:
const a =  61;
const b = - 70;
const c =  49;

if (a + b + c === 180){
    console.log(true);
} else if(a < 0 || b < 0 || c < 0){
    console.log("Ângulo inválido")
} else {
    console.log(false);
}

// Programa retorna movimento que peça de xadrez faz:
let xadrez = "KING";
let lowerxadrez = xadrez.toLowerCase();

switch (lowerxadrez){
    case "bishop":
        console.log("diagonal");
        break;
    case "knight":
        console.log("duas casas na horizontal e uma na vertical");
        break;
    case "rook":
        console.log("horizontal e vertical");
        break;
    case "king":
        console.log("todos os lados, uma casa por vez");
        break;
    case "queen":
        console.log("todos os lados");
    case "pawn":
        console.log("apenas pra frente, uma casa por vez");

    default:
        console.log("Erro.")
}

//Programa que converte nota dada em porcentagem (de 0 a 100) em conceitos de A a F

function conceito (nota){

if (nota >= 90 && nota <= 100){
    console.log("A");
}else if (nota >= 80 && nota < 90){
    console.log("B");
}else if (nota >= 70 && nota < 80){
    console.log("C");
}else if (nota >= 60 && nota < 70){
    console.log("D");
}else if (nota >= 50 && nota < 60){
    console.log("E");
}else if (nota < 50){
    console.log("F");
}else if(nota >100 || nota < 0){
    console.log("Erro!");
}
}
console.log(conceito(101));
// Programa retorna true ou false se encontrar um número par entre três

const n1 = 3;
const n2 = 9;
const n3 = 7;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
    console.log(true);
} else{
    console.log(false);
}

// Programa retorna true ou false se encontrar um número ímpar entre três

const n1 = 3;
const n2 = 9;
const n3 = 7;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
    console.log(false);
} else{
    console.log(true);
}

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = - 5;
const valor = 2000;

const imposto = 1.2
const ci = custo * imposto;
const lucro = valor - ci;

if (custo >= 0 && valor >= 0){
    console.log(lucro);
}else{
    console.log("Erro, valor negativo!");
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//const salBruto = 3000;

//if (salBruto <= 1556.94){
  //  console.log(salBruto * 0.92);
//}else if (salBruto >= 1556.95 && salBruto <= 1903.98){
    //console.log(salBruto * 0.91);
//}else if (salBruto >= 1903.99 && salBruto <= 2594.92){
  //  console.log(salBruto * 0.91 * 0.925 + 142.8);
//}else if (salBruto >= 2594.93 && salBruto <= 2826.65){
  //  console.log(salBruto * 0.89 * 0.925 + 142.8);
//}else if (salBruto >= 2826.66 && salBruto <= 3751.05){
  //  console.log(salBruto * 0.89 * 0.85 + 354.8);
//}else if (salBruto >= 3751.06 && salBruto <= 4664.68){
  //  console.log(salBruto * 0.89 * 0.775 + 636.13);
//}else if (salBruto >= 4664.69 &&salBruto <= 5189.82){
  //  console.log(salBruto * 0.89 * 0.725 + 869.36);
//}else if (salBruto >= 5189.83){
  //  console.log((salBruto - 570.88) * 0.725 + 869.36 );
//}

const salarioBruto = 6000;
let salarioBrutoMenosINSS;
let salarioLiquido;

if (salarioBruto <= 1556.94){
    salarioBrutoMenosINSS = salarioBruto * 0.92;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBrutoMenosINSS = salarioBruto * 0.91;
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBrutoMenosINSS = salarioBruto * 0.89;
}else if (salarioBruto >= 5189.63){
    salarioBrutoMenosINSS = salarioBruto - 570.88;
};

if (salarioBrutoMenosINSS <= 1903.98){
    salarioLiquido = salarioBrutoMenosINSS
}else if (salarioBrutoMenosINSS >= 1903.99 && salarioBrutoMenosINSS <= 2826.65){
    salarioLiquido = salarioBrutoMenosINSS * 0.925 +142.8;
}else if (salarioBrutoMenosINSS >= 2826.66 && salarioBrutoMenosINSS <= 3751.05){
    salarioLiquido = salarioBrutoMenosINSS * 0.85 + 354.8;
}else if (salarioBrutoMenosINSS >= 3751.06 && salarioBrutoMenosINSS <= 4664.68){
    salarioLiquido = salarioBrutoMenosINSS * 0.775 + 636.13;
}else if (salarioBrutoMenosINSS >= 4664.69){
    salarioLiquido = salarioBrutoMenosINSS * 0.725 + 869.36;
}
console.log(salarioLiquido);


