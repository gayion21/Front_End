// 함수도 객체에 저장할 수 있다!!!
let list = [
    "John",
    27,
    function hello_fun(){
        console.log("hello");
    }
]

let obj = {
    name : "John",
    age : 27,
    hello_fun(){
        console.log("hello~");
    }
}

function hello_fun(){
    console.log("hello!");
}

list[2]();
hello_fun();
obj.hello_fun();

// type check!
console.log("\n"+typeof list[2]);
console.log(typeof hello_fun);
console.log(typeof obj.hello_fun);
console.log();

// 객체에 메서드 추가하기
let user = {name:"AA"};
let admin = {name:"admin"};

function hi(){
    console.log("hi~ "+this.name); // this 사용해보기
}

user.func = hi;
admin.func = hi;

user.func();
admin.func();

console.log();

user['func']();
admin['func']();

// 일반적으로 .을 이용해서 호출
// []를 이용할 땐 식별자를 이용한 호출 ex) $name  1apple ~과 같은 $나 숫자를 포함한 key name