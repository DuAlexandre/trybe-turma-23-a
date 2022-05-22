let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 

function multiplicaSeguinte (array){
    let proximo = [];
    for (let index = 0; index < array.length; index += 1){
        if (index < array.length - 1){
            proximo.push(array[index] * array[index + 1]);
        }else{
            proximo.push(array[index] * 2)
        }
    }return proximo
}
console.log(multiplicaSeguinte(numbers));
// [
//     45,  27,  57, 1330,
//    560, 800, 200,   70,
//    945,  54
// ]