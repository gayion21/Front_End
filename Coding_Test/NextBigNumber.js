function solution(n) {
    var answer = n;
    
    let n1Count = answer.toString(2).split("1").length-1;
    let answerCount = 0;
    let answerBin = 0;
    
    while(true){
        answer += 1;
        answerBin = answer.toString(2);
        answerCount = answerBin.split("1").length-1;  
        
        if(answerCount==n1Count){
            break;
        }
    }
    
    
    return answer;
}

console.log(solution(78));
console.log(solution(15));