// mult-line strings
let dese=`top college in a andhra pradesh
more recuitments
more activities`;
console.log(dese);
// string interpolation
let firstNme="ankammarao";
let lastName="koniki";
console.log(`${firstNme} ${lastName}`);
// array destructing
let pnames=['realme','lg','vivo'];
let[Brand1,Brand2,Brand3]=pnames;
console.log(Brand1);
console.log(Brand2);
console.log(Brand3);
// object destructing
const movieInfo={
    moviename:"bahubali",
    actor:"prabhas",    
    actress:"anushka"
};
let{moviename,actor,actress}=movieInfo;
console.log(moviename);
console.log(actor);
console.log(actress);
