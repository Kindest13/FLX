let sum = 0;
let multy = {r_Factor:1,p_Factor:1} // multipliers for range/prize
let max = 5;

if(confirm('Do you want to play a game?')) {
    game(multy.r_Factor,multy.p_Factor);
} else {
    alert('You did not become a millionaire, but can.')
}

function game(r_Factor, p_Factor) {
    let prize = 10;
    let attempts = 3;
    let rand_Number = randomNum(max * r_Factor);
    while(attempts > 0) {
        let guess = +prompt(`Enter a number from 0 to ${max * r_Factor}
Attempts left: ${attempts}
Total prize: ${sum}
Possible prize on current attempt: ${Math.floor(prize * p_Factor)}`,'');
        if(guess === rand_Number) {
            prize *= p_Factor;
            sum += prize;
            sum = Math.floor(sum);
            if(confirm(`Congratulation! Your prize is: ${Math.floor(prize)} \nDo you want to continue?`)) {
                r_Factor *= 2;
                p_Factor *= 3;
                return game(r_Factor, p_Factor);
            } else {
                break;
            }
        }
        prize /= 2;
        attempts--;
    }
    alert(`Thank you for a game. Your prize is: ${sum}`);
    if(!sum) {
        alert('You did not become a millionaire, but can');
        if(confirm(`Do you want to play again?`)) {
            return game(multy.r_Factor, multy.p_Factor);
        } else {
            alert('You did not become a millionaire, but can.');
        }
    }
}


function randomNum(max) {
    return Math.floor(Math.random() * ++max);
}