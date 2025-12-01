//math.abs() absoulte value
console.log(Math.abs(-8.90)); //8.9
console.log(Math.abs(5)); //5
console.log(Math.abs(0)); //0

// math.sign() sign of number
console.log(Math.sign(-5)); //-1
console.log(Math.sign(5)); //1
console.log(Math.sign(0)); //0
console.log(Math.sign(-0)); //-0

// math.sqrt() square root
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(2)); //1.4142135623730951

// math.cbrt() cube root
console.log(Math.cbrt(27)); //3

// math.pow(base,exponent)
console.log(Math.pow(2, 3)); //8 2*2*2
console.log(Math.pow(5, 2)); //25 5*5
console.log(Math.pow(9, 0.5)); //3 square root of 9

// math.min(...values)
let arr=[1,2,3,4,5];
console.log(Math.min(...arr)); //1
console.log(Math.min(...arr, 20, 3,12, -9,0 )); //-9

// math.max(...values)
console.log(Math.max(...arr)); //5
console.log(Math.max(...arr, 20, 3,12, -9,0 )); //20


// math.random()
let randomNum = Math.random().toFixed(2); 
let randomNum1 =Math.random()*100
let randomNum2 = (1+ Math.random()*100).toFixed()//random number between 1 and 100
console.log(typeof(randomNum2)) 
let randomNum3 = parseInt(randomNum2) //converting string to number Number(),parseFloat(), unarty plus(+) also works let n3 = +str;
console.log(typeof(randomNum3))
console.log(randomNum); //random number between 0 and 1
console.log(randomNum1);//random number between 0 and 100
console.log(randomNum2);
 

// math.ceil()
console.log(Math.ceil(4.3)); //5

// math.floor()
console.log(Math.floor(4.7)); //4
console.log(Math.floor(-4.7)); //-5

// math.round()
console.log(Math.round(4.5)); //5
console.log(Math.round(4.4)); //4

// math.trunc()
console.log(Math.trunc(4.9999999)); //4
console.log(Math.trunc(-4.9999999)); //-4
