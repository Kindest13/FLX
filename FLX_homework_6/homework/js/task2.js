const amount = parseFloat(prompt("Input amount of money 0 to 9999999: ","0"));
const discount = parseFloat(prompt("Input discount 0 to 99: ","0"));
let output = 0;
if(amount <= 9999999 && isValidNumber(amount) && discount <= 99 && isValidNumber(discount)) {
    const d_amount = amount * (100 - discount) / 100;
    const saved = amount * discount / 100;
    output = `Price without discount: ${rounding(amount)}$
Discount: ${rounding(discount)}%
Price with discount: ${rounding(d_amount)}$
Saved: ${rounding(saved)}$`;
} else {
    output = "Invalid input data";
}
console.log(output);

function rounding(num) {
    return Math.round(num * 100) / 100;
}

function isValidNumber(num) {
    return !isNaN(num) && num >= 0; 
}