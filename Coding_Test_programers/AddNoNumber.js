function solution(numbers) {
    let checkArr = [];
    let hopNum = 0;
    
    for(let i=0; i<=9; i++){
        checkArr = numbers.some(v => v==i);
        
        if (checkArr==false) {
            hopNum += i;
        }
    }
    
    
    return hopNum;
}

let arrayA = [0,1,2,3,4,5,6,7,8];
console.log(solution(arrayA));