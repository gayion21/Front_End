let numToStr = 123;
let strToNum = "345";
let numToBoolean = 1;

numToStr = String(numToStr); // == numToStr.toString();
strToNum = Number(strToNum); // == strToNum.parseInt(); strToNum.parseFloat();
numToBoolean = Boolean(numToBoolean);

console.log("=== 명시적 형변환 ===");
console.log(numToStr + " : " + typeof numToStr);
console.log(numToBoolean + " : " + typeof numToBoolean);
console.log(strToNum + " : " + typeof strToNum + "\n");


// 묵시적 형변환
let num = 123;

num += "456";

console.log("=== 묵시적 형변환 ===");
console.log(num + " : " + typeof num);
