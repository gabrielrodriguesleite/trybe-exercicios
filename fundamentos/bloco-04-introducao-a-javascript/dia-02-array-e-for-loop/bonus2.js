// Ordene o array numbers em ordem decrescente e imprima seus valores; 
let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for ( let n = 0; n < (numbers.length-1); n += 1 ) {
    for (let x = 0; x < numbers.length; x += 1) {
        // console.log(x);
        let a;
        a = numbers[x];
        if (a < numbers[x+1]) {
            let b = numbers[x+1]
            numbers[x] = b;
            numbers[x+1] = a;
        }
    }
}
console.log(numbers);