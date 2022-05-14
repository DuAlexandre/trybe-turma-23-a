let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//Somar todos os valores da array
let soma = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma);

// Calcule a media aritmética dos valores da array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = numbers.length
for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma / media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
let media = soma / numbers.length
console.log(media);
if (media > 20){
    console.log("Valor maior que 20!");
}else{
    console.log("Valor menor ou igual a 20!");
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] > maior){
        maior = numbers[i]
    }
}
console.log(maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorImpar = 0;
for(let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 == 1){
        contadorImpar += 1;
    }else{
        console.log("Nenhum valor ímpar encontrado.");
    }
}
console.log(contadorImpar);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor= 200;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] < menor)
    menor = numbers[i]
}
console.log(menor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let inicio = 1;
let array = []
for( let i = 1; i < 26; i += 1){
   array.push(inicio ++);
}
console.log(array);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let inicio = 1;
let array = []
for( let i = 1; i < 26; i += 1){
   array.push((inicio ++) / 2);
}
console.log(array);