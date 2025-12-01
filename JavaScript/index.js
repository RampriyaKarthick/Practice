// // let checkIn = true;
// // let securityCheck = true;
// // let immigrationCheck = true;
// // Nested If-Else Statement
// // if(checkIn === true){
// // if(immigrationCheck=== false){
// // if(securityCheck === true){
// //     console.log("You can board the plane");
  
// // }
// //   else{
// //     console.log("You cannot board the plane");
// // }
// // }
// // else {
// //     console.log("You cannot board the plane");

// // }
// // }
// // else{
// //     console.log("You cannot board the plane");
// // }



// function add(x, a, b){
// console.log(a+b);
// y = x(100,200)
// return y;

// }
// function subtract(a,b){
//     console.log(a-b);
//     return a-b;
// }

// let addValue = add(subtract, 20, 10);
// console.log(addValue)
// function outerFunction(){
//     let outerVar = "I am from outer function"
//     function innerFunction(){}
//     return innerFunction
// }
// let innerFunc = outerFunction();
// console.log(innerFunc)
// innerFunc();
// function* generatorfunction(){
// yield "first output";
// yield "second output";
// yield "third output";

// }
// let gen = generatorfunction();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// let arrIndex = [10,20,30,40,50]
// let lastIndex = arrIndex.length-1
// console.log(lastIndex)

let obj = {
    "vehicle type" : "car",
    "seatertype" :5,
    vinno :"12345ABCDE",
    horsePower : [10,20,30,40],
    horsePower1:{        model1 : "10HP",
                        model2 : "20HP",
    },
    horsePower3 : function(){
        return function(){
            return "30HP"
        };
    }
}
// console.log(obj["vehicle type"])
// console.log(obj.horsePower1.model2)
// let obj1 = obj.horsePower3()()
// console.log(obj.horsePower.length)
// console.log(obj.horsePower[horsePower.length-1])
// console.log(obj1)
// console.log(obj1[3])

// let arr = [10,20,30,40]
// for(let x of arr){

//     console.log(x)

// }

for(let x in obj){
    console.log(obj[x])
}