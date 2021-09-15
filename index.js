// Code your solutions in this file
const thankYou = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return thankYou;
}

function countDown() {
    let i = 10;
    while (i <= 10 && i >=0) {
        console.log(i--);
    }
}