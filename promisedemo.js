// // promises demo
// const movieRating=new Promise((resolve,reject) => {
//     let rating=4.5;
//     if(rating>4){
//         resolve("Good movie");
//     }else{
//         reject("waste of our time");
//     }
// });
// // to call promise
// movieRating.then((result) =>{
//     console.log(result);
// }).catch((result)=>{
//     console.log(result);
// });

// bubble shoot
const bubbleScore=new Promise((resolve,reject)=>{
    let num=Math.floor(Math.random()*10);
    if(num>5){
        resolve("top score");
    }else{
        reject("lower score");
    }
});
// to call promise
bubbleScore.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
});