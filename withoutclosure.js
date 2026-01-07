// without closure
//global variable
let counter=1;
const counterResult = () => {
    // local variable
    let counter = 0;
    counter++;
    return counter;
}
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());

