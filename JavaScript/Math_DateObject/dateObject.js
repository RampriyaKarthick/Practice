let date = new Date(); 

console.log(date); //current date and time op: 2025-12-01T14:47:24.419Z
console.log(date.toString());//string representation of date op:Mon Dec 01 2025 15:47:24 GMT+0100 (Central European Standard Time)
console.log(date.toDateString()); //date portion in human readable form op: Mon Dec 01 2025
let localTime = new Date().toLocaleString();
console.log(localTime); //local date and time op:12/1/2025, 3:47:24 PM


console.log(date.getFullYear()); //get current year
console.log(date.getMonth());//get current month (0-11) 0=January, 11=December
console.log(date.getDate());//get current date (1-31)
console.log(date.getDay());//get current day of the week (0-6) 0=Sunday, 6=Saturday
console.log(date.getHours());//get current hour (0-23)
console.log(date.getMinutes());//get current minutes (0-59)
console.log(date.getSeconds());//get current seconds (0-59)
console.log(date.getMilliseconds());//get current milliseconds (0-999)
console.log(date.getTime());//get time in milliseconds since January 1, 1970
console.log(Date.now());//get current time in milliseconds since January 1, 1970
let date1 =new Date()  //set year to 2023
let convertYear =date1.setFullYear(2023);
console.log(new Date(convertYear ))
