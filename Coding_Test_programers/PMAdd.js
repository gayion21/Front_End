function solution(absolutes, signs) {
    let hopString = "";
    let hop=0;
    let sign=false;
    
     for(let i=0;i<absolutes.length;i++){
        if(signs[i]==true)
            sign="+";
         else
            sign="-";
         
        hopString = sign+absolutes[i];
        hop += Number(hopString);
     }
    
    return hop;
}

let a = [4,7,12];
let b = [true,false,true];
console.log(solution(a,b));