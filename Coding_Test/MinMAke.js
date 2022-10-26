function solution(A,B){
    var answer = 0;

    A.sort(function(a,b){
        return a-B;
    });
    B.sort(function(a,b){
        return b-a;
    })
    
    for(i in A){
        answer += A[i]*B[i];
    }

    return answer;
}

let a = [5,1,7,21,4];
let b = [9,12,88,6,8];

console.log(a.sort());

// console.log(solution(a,b));