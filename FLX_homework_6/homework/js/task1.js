const a = prompt('Input a: ','0');
const b = prompt('Input b: ','0');
const c = prompt('Input c: ','0');
if(isValidNumber(a) && isValidNumber(b) && isValidNumber(c)) {
    const dis = b * b - 4 * a * c;
    if(dis > 0) {
        alert(`x_1 = ${(-b - Math.sqrt(dis)) / (2 * a)} and x_2 = ${(-b + Math.sqrt(dis)) / (2 * a)}`);
    } else if(dis === 0) {
        alert(`x = ${-b / 2 * a}`);
    } else {
        alert("no solution");
    }
} else {
    alert("Invalid input data");
}

function isValidNumber(num) {
    return !isNaN(num) && num !== '';
}