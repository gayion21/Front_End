function FishBeard(flavor, price){
    this.flavor = flavor;
    this.price = price;
    this.base = 'flour';
}

let beard_1 = new FishBeard("cream",1500);
let beard_2 = new FishBeard("redbean",1000);
let beard_3 = FishBeard("milk",1700);

console.log("=== 생성자 함수 기본 예제 ===");
console.log(beard_1);
console.log(beard_2);
console.log(beard_3);  // new연산자를 사용하지 않았기때문에 undefined 출력

// new.target을 이용한 예제
function CheckName(name){
	if(!new.target){  // !false 즉 true로 실행된다.
		return new CheckName(name);
	}

	this.name = name;
}

let user1 = CheckName("Ann");

console.log("\n=== new.target을 이용한 생성자 함수 예제 ===");
console.log(user1);
// CheckName {name:"Ann"}