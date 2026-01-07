//request data gathering logic
let btn = document.getElementById("demo");
let clickresult=document.getElementById("simple");
let triggerres= document.getElementById("sample");
// Business logic
let clickcount=0;
let triggercount=0;
function debounce (fn,delay){
 let timer;
 return function(){
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fn();
    })
 }
},delay;
btn.addEventListener("click",()=>{
    clickcount++;
    clickresult.innerHTML =`user entered characters ${clickcount}`;
}),1000
const debounceresult = debounce(()=>{
    triggercount++;
    triggerres.innerHTML=`triggered ${triggercount }`;
})