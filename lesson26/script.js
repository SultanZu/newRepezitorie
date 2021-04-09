// calculate
// let enterNum1 = prompt('Enter number 1','');
// let enterSum = prompt('Enter +, -, *, /, %, **')
// let enterNum2 = prompt('Enter number 2','');

// if (enterSum == '+') {
//     console.log(+enterNum1 + +enterNum2);
// } else if (enterSum == '-') {
//     console.log(+enterNum1 - +enterNum2);
// } else if (enterSum == '*') {
//     console.log(+enterNum1 * +enterNum2);
// } else if (enterSum == '/') {
//     console.log(+enterNum1 / +enterNum2);
// } else if (enterSum == '%') {
//     console.log(+enterNum1 % +enterNum2);
// } else if (enterSum == '**') {
//     console.log(Number(enterNum1) ** Number(enterNum2))
// }

// lesson 2

let login = prompt('Enter login','')

if (login == 'admin') {
    let password = prompt('Enter password','')
    if (password == 123) {
        console.log('Welcome!')
    } else {
        console.log('Error password!')
    }
} else {
    console.log('Error login!')
}