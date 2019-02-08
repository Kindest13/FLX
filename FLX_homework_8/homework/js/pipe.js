// Task #6
function addOne(x) {
    return x + 1;
  }
  
function pipe(num) {
    for(let i = 1; i < arguments.length; i++) {
        num = arguments[i](num);
    }
    
    return num;
}

pipe(45, addOne, addOne);