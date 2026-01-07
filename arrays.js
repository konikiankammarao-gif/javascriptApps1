// arrays in javascript
// literal syntax
const demoArray=[10,20,30,40,"ramesh"];
 console.log("array elements are:" + demoArray);

// literal syntax
 const names=["realme","infinix","samsung","apple"];
 console.log(names[3]); 


 console.log(names);
// object syntax
 let prices=new Array(30000,20000,60000,40000);
 console.log(prices);
 // to get values
 console.log(prices[3]);

 // for of loop to get all values from array
 for(let index of names){
    console.log(index);
 }

 // for each access 
 // callback function is used for purpose of function inside function written 
 let pnames=names.forEach((value)=>{
    console.log(value);
 });
  //to add array elements
  names.push("oneplus"); 
  console.log(names);

  // unshift to add elements at the beginning
  names.unshift("poco");
  console.log(names);
  //splice to add elements at specific positio
  names.splice(2,0,"nokia","htc");
  console.log(names);

  // to remove elements from array
  //pop method
  names.pop();
    console.log(names);
    //shift method
    names.shift();
    console.log(names);
    // splice to remove elements at specific position
    names.splice(2,2);
    console.log(names);
    delete names[1];
    console.log(names);
    // sort method
    console.log(names.sort());
    console.log(prices.sort());
    console.log(prices.reverse());
    // to  update
    names[2]="motopro"
console.log(names);



//concatenateion
let names2=['lg','sony'];
console.log(names.concat(names2));

// spread operator
// spread operator is used to add arrays
let allnames=[...names,...names2];
console.log(allnames);

// // array advanced methods
// let sum=prices.reduce((total,val)=>{
// console.log(sum);
// });


// map method
let offerprice=prices.map((val)=>{
    return val-2000;
});
console.log(offerprice);