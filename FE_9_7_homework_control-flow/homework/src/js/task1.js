let log = prompt('Input your login:','');
let pass = 0;
let output = 0;
let time = new Date().getHours();
if(log) {
    if(log.length < 4) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else if(log === 'User' || log === 'Admin') {
        pass = prompt('Input your password:','')
        if(pass) {
            output = time < 20 ? `Good day, dear ${log}!` : `Good evening, dear ${log}!`;
            if(log === 'User' && pass === 'UserPass') {
                alert(output);
            } else if(log === 'Admin' && pass === 'RootPass') {
                alert(output);
            } else {
                alert('Wrong password');
            }
        } else {
            alert('Canceled');
        } 
    } else {
        alert('I don\'t know you');
    } 
} else {
        alert('Canceled');
}
