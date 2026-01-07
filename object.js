// objects in js
const movieinfo = {
    moviename:"akhandha",
    heroname:"nbk",
    director:"boyapatti"
}

// how to get 
console.log(movieinfo.director);

//another way
console.log(movieinfo["heroname"]);

for(let info in movieinfo){
    console.log(movieinfo[info]);   
}

// for(let info of movieinfo){
//     console.log(info);

// }
// ES-6+ new features
// object.keys
Object.keys(movieinfo).forEach((key)=>{
    console.log(key);
});
// to get only one values
// object.values
Object.values(movieinfo).forEach((value)=>{
    console.log(value);
}); 

// to get key and values both
Object.entries(movieinfo).forEach((entry)=>{
 console.log(entry[0] + ":" + entry[1]);
});
  // for-of loop
for(let [info,infovalue] of Object.entries(movieinfo)){
    console.log(info + ":" + infovalue);
}
// nested objects
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.log(myObj.cars[0].models);
  // cart object
  const placeorder={
    products:[
        {pid:1234,pname:"drone",price:10000},
        {pid:5678,pname:"ac",price:30000}
    ],
    shippingaddress:{
        street:"vignan college",
        area:"vadlamudi",
        city:"guntur",
        pincode:522213,
        state:"andhra pradesh"
    },
    userinfo:{
        userid:1001,
        username:"sai",
        email:"konikiankammarao@gmail.com"
    }
}
    console.log(placeorder.userinfo.username);

        
    