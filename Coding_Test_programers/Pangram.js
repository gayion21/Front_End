function solution(s) {
    s = s.replace(/ /g,"");  // 대소문자 구별 안 하고 싶다면 / /gi
    var answer = true;
    let setS = [...new Set(s)].join('');

    (setS.length === 26)? answer=true : answer = false;


    return answer;
}

let testStr = 'abdjslfkjxxvh hdkhfke dfdfd';
console.log(solution());

class abc{


}

let num = 123; // 선언 초기화

const me = new abc();