let input = "(())(())))))";

let state = true;
let arr = [];

for(let i=0; i<input.length; i++){  // (let i of input)
    if(input[i]=="("){
        arr.push(input[i]);
    } else if(input[i]==")"){
        if(arr.pop()==undefined) {
            state = false;
            break;
        }
    }
}

if(arr.length != 0) state=false;

console.log(state);