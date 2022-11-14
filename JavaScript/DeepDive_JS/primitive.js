class Person{
    #name = '';

    constructor(name){
        this.#name = name;
    }

		// name은 접근자 프로퍼티
		get name(){
		// private 필드를 참조하여 trim한 다음 반환
		return this.#name.trim();
		}
}
let foo = 5;

// 원시 값을 변경해야 하는 함수 정의
function addTwo(num) {
   num += 2;
}
// 같은 작업을 시도하는 다른 함수
function addTwo_v2(foo) {
   foo += 2;
}

// 원시 값을 인수로 전달해 첫 번째 함수를 호출
addTwo(foo);
// 현재 원시 값 반환
console.log(foo);   // 5

// 두 번째 함수로 다시 시도
addTwo_v2(foo);
console.log(foo);   // 5