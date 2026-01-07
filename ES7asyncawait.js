// async await logic
const movieresult=()=>{
    return new Promise((resolve,reject)=>{
        let rating=4.5;
        if(rating>4.5){
            resolve("Good movie");
        }else{
            reject("waste of our time");
        }
    });
}
// calling promise with async await methods
const result = async() =>{
    try{
        await movieresult();
        console.log(res);
    }
    catch (error){
        console.log(error);
    }
};
result();