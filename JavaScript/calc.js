function add(x,y){
    return x+"+"+ y +"=" +x+y;
}

function multi(x,y){
    return x+"*"+ y +"=" +x*y;
}

function sub(x,y){
    return x+"-"+ y +"=" +(x-y); // 왜 그냥 x-y 하면 NaN이 나오는걸까 미스테리..
    
}
function division(x,y){
    return x+"/"+ y +"=" +x/y;
}

function calc(callback,x,y){
    return callback(x,y);
}

console.log(calc(add,1,2));
console.log(calc(multi,1,2));
console.log(calc(sub,1,2));
console.log(calc(division,1,2));
