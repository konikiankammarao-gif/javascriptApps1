function buttonResult(){
    alert("hi");
}
let btnvalue=document.getElementById('demo');
btnvalue.addEventListener('click',buttonResult);
// click logic with arrow function
const buttonresult1=()=>{
    alert("hello");
}
let btnvalue1=document.getElementById('demo1');
btnvalue1.addEventListener('click',buttonresult1);
// mouseover mouseout logic
let h2value=document.getElementById('sample');
const mouseover=()=>{
    h2value.style.color="blue";             
}
const mouseout=()=>{
    h2value.style.color="green";
}
h2value.addEventListener('mouseover',mouseover);
h2value.addEventListener('mouseout',mouseout);