// .toFixed() .toPrecision()

let num1 = 108.7999;
let num2 = 39.01;

let result = num1+num2;

console.log(result.toFixed(2));     // output : 147.81 소수점 이하 n번째 위치까지 추출
console.log(result.toPrecision(2)); // output : 1.5e+2 (150)  숫자 n자리까지 추출 (이하 반올림!)

// .isNan()   숫자 판별
//.isFinite() 유한 숫자 판별

console.log();
console.log(!isNaN(123));
console.log(!isNaN("123"));
console.log(!isNaN('java'));
// Number.isNan()  number에서만 사용 가능

console.log();
console.log(isFinite(123));
console.log(isFinite("123"));
console.log(isFinite("javaScript"));