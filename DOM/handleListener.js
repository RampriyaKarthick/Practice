let button1 = document.getElementById("listener");
let button2 = document.getElementById("handler");
let imageVariable = document.querySelector("img");
let paraText = document.querySelector("p");
// // console.log(button1);
// button1.addEventListener("click", function() { //takes three arguments as argument
// // console.log("Button clicked using event listener");
// console.log("Button clicked using event listener");

// })
// button1.addEventListener("click", function() { //takes three arguments as argument
// // console.log("Button clicked using event listener");
// console.log("Button clicked using event listener for the secondtime");})

// function secondHandler(){
// console.log("Button clicked using event handler");
// }

// // button2.onclick = function(){
// //  console.log("Button clicked using event handler for the second time");
// // }
// function firstHandler(){
// console.log("Button clicked using event handler secondTime");
// }
imageVariable.addEventListener("mouseover", function(){
console.log("Image mouseover event triggered");
imageVariable.src="https://tse1.mm.bing.net/th/id/OIP.VFZrdoj_wa6okIcHLrFucAHaFp?pid=Api&P=0&h=180"
paraText.innerText="I am a random dash of colors"
});
imageVariable.addEventListener("mouseout", function(){
console.log("Image mouseover event triggered");
imageVariable.src="https://tse3.mm.bing.net/th/id/OIP.xgCfFbBHAxgYu-OQDwgJHAHaE6?pid=Api&P=0&h=180"
paraText.innerText="I am a flower"
});