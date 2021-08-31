// Retornar um array de pares
function arrayOfNumbers(vector) {
    let a = [];
    for (let i of vector) for (let j of i) if(j % 2 == 0) a.push(j);
    return a;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));