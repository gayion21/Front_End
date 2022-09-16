function max(x,y){
    result="";

    if(x>y){
        result=x+"이/가 "+y+"보다 큽니다";
    } else if(y>x){
        result=y+"이/가 "+x+"보다 큽니다";
    } else 
        result="두 수는 동일하다!!!!";

        return result;

}

console.log(max(0,3));
console.log(max(-1,5));
console.log(max(100,7));
console.log(max(48,48));