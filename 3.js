// // loops in js
// // for loop
// for(let i=1; i<=10; i++){
//     console.log("i value is:" + i);
// }


// // while loop
// let j=1;
// while(j<=10){
//     console.log("j value is:" + j);
//     j++;
// }


// // Do while loop
// let k=1;
// do{
//     console.log("k value is:" + k);
//     k++;
// }while(k<=10);

// // loops in advanced javascript(Es-6)
// // for in and for of
// // these loops are used to get data from iterables(array ,object and string)
// let productNames=["Laptop","Mobile","Tablet","Smart Watch"];
// for(let names of productNames){
//     console.log("product name is:" + names);
// } 



// let  empinfo = {
//     eid:1001,
//     ename:"sai",
//     esalary:60000
// }


//  for(let info in empinfo){
//     console.log(empinfo[info]);
//  }

//  let collegename="vignan";
//  for (let char of collegename){
//     console.log(char);
//  }

//  collegename="vignan";
//  for(let char in collegename){
//     console.log(collegename[char]);
//  }
//   //functions in javascript
// function showMessage(){
//     console.log("welcome to js functions");
// }
// showMessage();

// //functions with parameters
// // sum numbers
// function sumnum(a,b){
//     console.log("sum is:" + (a+b));
// }
// sumnum(10,20);

// // function with return values
// // mul of two numbers
// function mulnum(c,d){
//     return c*d ;
// }
//  let result=mulnum(5,10);
//  console.log("mul is:" + result);

//  // new features functions syntax in Es-6
//  // arrow function
//  const arrowDemo=()=>{
//     console.log("arrow function demo");
//  }
//  arrowDemo();

// // arrow function with parameters
// const addnums=(a,b)=>{
//     console.log("sum is:" +(a+b));
// }
// addnums(10,20);
// // in a simple eau
// const addnums1=(a,b)=> a+b;
// console.log(addnums1(5,10));

// // arrow function with return a value
// const mulnums1=(c,d)=>c*d;
// let res=mulnums1(5,10);
// console.log("mul is:" + res);

// const printvalues=(a,b)=>
//     console.log(a);
//     console.log(b);

// printvalues(10,20);

// rest parameters
const printvalues1=(a,b,...c)=>{
    console.log("a value is:" + a);
    console.log("b value is:" + b);
    console.log("c values are:" + c);
    
}
printvalues1(10,20,30,40,50);

// default parameters
const addnums=(a=10,b)=>{
    console.log(a+b);
}
 addnums();


