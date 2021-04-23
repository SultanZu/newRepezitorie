// for karzina
let ttl = document.getElementsByClassName('title')[0].innerText;                                   // zagalovka
let price = document.getElementsByClassName('price')[0].getElementsByTagName('span')[0].innerText; // price
let img = document.getElementsByClassName('opis_cont')[0].getElementsByTagName('img');             // img
// //

// lesson 29
// с помощью цикла сделайте перебор товаров
// по клику получить название товара с помощью js
// по клику получить цену товара с помощью js
// по клику получить адрес картинки с помощью js
// попробуйте с помощью js поменять название товара цену товара 

let element = document.getElementsByClassName('add_card');

for (let i = 0; i < element.length; i++) {
    element[i].onclick = function () {
        console.log(this.parentNode.parentNode.querySelectorAll('.title > p')[0].innerText);
        console.log(this.parentNode.parentNode.querySelectorAll('.price > span')[0].innerText);
        console.log(this.parentNode.parentNode.querySelectorAll('.img > img')[0]);
    };
}

// lesson 30

// let radius = +prompt('Enter radius: ');

// function rad(p) {
//     return (2 * radius) * 3.14;
// }

// console.log(rad(radius));

// lesson 2

// function min(a, b) {
//     a--;
//     b--;
//     console.log(a, b);
// }
// min(3, 4);

// LESSON 31

// lesson 1

// let num1 = +prompt('Возведение в степень','Enter number 1: ');
// let num2 = +prompt('Возведение в степень','Enter number 2: ');

// function step(num1, num2) {
//     return num1 ** num2;
// }
// console.log('Возведение в степень ' + num1 + ' в ' + num2 + ': ' + step(num1, num2));

// // lesson 2

// let radus = +prompt('Площадь круга','Enter radius: ');

// function rad(p) {
//     return (2 * radus) * 3.14;
// }

// console.log('Площадь: ' + rad(radus));

// // lesson 3

// let width = +prompt('Площадь прямоугольника',"Enter X: ");
// let height = +prompt('Площадь прямоугольника',"Enter Y: ");

// function ploshad(w, h) {
//     return w * h;
// }

// console.log('площадь прямоугольника X=' + width + ' Y=' + height + ': ' + ploshad(width, height));

// lesson 32

let num1 = +prompt("Enter number 1: ");
let num2 = +prompt("Enter number 2: ");

function func(num1, num2) {
    let result;
    result = num1 + num2;
    return result.toFixed(0);
}

console.log(func(num1, num2));