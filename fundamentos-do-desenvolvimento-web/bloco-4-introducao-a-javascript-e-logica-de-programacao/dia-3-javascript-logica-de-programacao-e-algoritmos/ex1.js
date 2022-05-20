//Ex1:

let numeros = [];
let fatorial = 1;

for (let index = 10; index >= 1; index -= 1){
    numeros.push(index)
    if (index + 1 > index ){
        fatorial *= index;
    }
}
console.log(numeros);
console.log(fatorial);

//Ex2:
let palavra = "banana";
let inversor = palavra.split('').reverse();
let invertido = '';

for (let index = 0; index < inversor.length; index += 1){
    invertido += inversor[index];
}
console.log(invertido);


//Ex3:
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maior.length){
        maior = array[index];
    }
}
console.log(maior);
let menor = '';
for (let index2 = 0; index2 < array.length; index2 += 1){
    if (array[index2].length < maior.length){
        menor = array[index2];
    }
}
console.log(menor);

//Ex4:
let maiorNumero = 50;
let menorNumero = 0;
let primo = 0;
for (let index = menorNumero; index <= maiorNumero; index += 1){
    for (let index2 = maiorNumero; index2 >= menorNumero; index2 -= 1){
        if (index2 %index === 0)
    }
}




