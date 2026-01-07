// with closure
const counterResult = (() => {
    let counter = 0;
    return function (){
        counter++;
        return counter;
    }
})(); //self invoking
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());