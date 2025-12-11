let newPromise = new Promise((fulfilled, failure)=>{
    let condition = false;
    if(condition){
        fulfilled("Promise is fulfilled");
    } else {
        // failure("Promise is rejected");
        throw new Error("Message is rejected due to an error ")
    }
})
// newPromise.then(message=>{
//     console.log(message)
// })
async function executePromise(){
try{
let message = await newPromise
let newMessage = await newPromise
console.log(message)
console.log(`Next Message : ${newMessage}`)
}
catch(error){
console.log((error.message))
}
finally{
    console.log("Promise is settled")
}
}
executePromise()


console.log("End of async function");
