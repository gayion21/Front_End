// 괄호 안에 있지 않는 문자열 출력
const input = "(A(GBB)Q)ABF(CP)"  // output : ABF
let stack = [];

for(s of input){
    if(s !== ")") {
        stack.push(s);
        console.log(stack);
    } else{
        while(true){
            if(stack.pop() == "(") break;
            console.log(stack);
        }
    }
}

console.log(stack.join(""));