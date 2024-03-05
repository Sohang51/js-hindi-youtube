// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true(because comparison operator converts null into 0)

console.log(undefined > 0);  //false
console.log(undefined == 0); //false
console.log(undefined < 0);//false

// ===(strict check)

console.log("2" === 2); //(as its strict check, it will check datatype also and will not convert string to no.)