//promises chaining
const bookTicket=(Message)=>{
   return new Promise((resolve,reject)=>{
    resolve("ticket booked");
   });
}
const getpopcorn=(Message)=>{
    return new Promise((resolve,reject)=>{
        resolve( Message+ " popcorn obtained ");
    });
}

const getcoke=(Message)=>{
    return new Promise((resolve,reject)=>{
        resolve(Message+ 'coke obtained');
    });
}
// to execute
bookTicket().then((result)=>{
    return getpopcorn(result);
}).then((result)=>{
    return getcoke(result);
}).then((result)=>{
   console.log("wanna go to movie??" +result);
}).catch((error)=>{
    console.log(error);
});

