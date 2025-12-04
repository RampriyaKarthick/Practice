let person ={
    name: "John",
    age: 30,
}
console.log(person);

// let arr = [1,2,3,4,5];
// console.log(arr)

// Object create

// let newObj = Object.create(person);

// console.log(newObj.__proto__); 
// // console.log(newObj.name);//John

// newObj.location="USA";
// //  console.log(newObj.location); //USA
// // console.log(newObj);
// console.log(Object.getPrototypeOf(newObj));

// // Object assign
// let targetObj = {
//     id:"QUI123",
//     name1:"Priya",
// }
// Object.assign(targetObj, person);
// let newObj1= Object.assign(newObj,{role:"Admin"});
// // console.log(targetObj);
// // console.log(newObj1.name); 

let multiarr= Object.entries(person);
multiarr.push( ["m","ice"])
console.log(multiarr);

let normObj= Object.fromEntries(multiarr);
console.log(normObj);

let onlyKays = Object.keys(normObj);
console.log(onlyKays);

let onlyValues = Object.values(normObj);
console.log(onlyValues);

let newObj3 = {
    id:"A123",
    ...person,}
    console.log(newObj3);
// Object.freeze(newObj3);
    newObj3.age=35;
    console.log(newObj3);
    console.log(Object.isFrozen(newObj3));
    let nnn = Object.seal(newObj3);//it will not allow to add or delete but allow to modify
    newObj3.age=40;
   newObj3["country"]="India";//it will not allow to add new property
    console.log(nnn)
    console.log(newObj3);
    
    console.log(Object.isSealed(newObj3));