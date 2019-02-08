// Task #5
function reverseNumber(a) {
    let arr = '' + Math.abs(a);
    let num = '';
    for(let i = arr.length - 1; i >= 0; i--) {
        num += arr[i];
    }
    
    return a < 0 ? -num : +num;
}
reverseNumber(-456);