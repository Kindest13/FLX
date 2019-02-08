// Task #2 there's a little error when we input equal values smth like (5,5) === true,
// so issa better to use normal return like a < b or to add check on equality with ternary operator
function isBigger(a,b) {
    return a > b;
}

function isSmaller(a,b) {
    return !isBigger(a, b);
}
isSmaller(5,2);