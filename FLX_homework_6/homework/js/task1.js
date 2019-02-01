const a = prompt('Input a: ','0');
const b = prompt('Input b: ','0');
const c = prompt('Input c: ','0');
if(!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    const dis = b * b - 4 * a * c;
    if(dis > 0) {
        console.log(`x_1 = ${(-b - Math.sqrt(dis)) / (2 * a)} and x_2 = ${(-b + Math.sqrt(dis)) / (2 * a)}`);
    } else if(dis === 0) {
        console.log(`x = ${-b / 2 * a}`);
    } else {
        console.log("no solution");
    }
} else {
    console.log("Invalid input data");
}