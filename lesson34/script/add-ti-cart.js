// for karzina
// let ttl = document.getElementsByClassName('title')[0].innerText;                                   // zagalovka
// let price = document.getElementsByClassName('price')[0].getElementsByTagName('span')[0].innerText; // price
// let img = document.getElementsByClassName('opis_cont')[0].getElementsByTagName('img');             // img
// //

// lesson 29
// с помощью цикла сделайте перебор товаров
// по клику получить название товара с помощью js
// по клику получить цену товара с помощью js
// по клику получить адрес картинки с помощью js
// попробуйте с помощью js поменять название товара цену товара 

// let element = document.getElementsByClassName('add_card');

// for (let i = 0; i < element.length; i++) {
//     element[i].onclick = function () {
//         console.log(this.parentNode.parentNode.querySelectorAll('.title > p')[0].innerText);
//         console.log(this.parentNode.parentNode.querySelectorAll('.price > span')[0].innerText);
//         console.log(this.parentNode.parentNode.querySelectorAll('.img > img')[0]);
//     };
// }

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

// let num1 = +prompt("Enter number 1: ");
// let num2 = +prompt("Enter number 2: ");

// function func(num1, num2) {
//     let result;
//     result = num1 + num2;
//     return result.toFixed(0);
// }

// console.log(func(num1, num2)); 

// LESSON 33
// function regsi() {
//     let login = prompt('Enter your login: ');
//     let password = prompt('Enter your password: ');
//     if (login == 'admin') {
//         if (password == 123) {
//             console.log('Wellcome!')
//         }
//     }
// }
// function addHTML(callback) {
//     callback();
//     let createTag = prompt('Enter Tag name: ');
//     let createClass = prompt('Enter Class name: ');
//     let createText = prompt('Enter text: ');
//     let colorOfText = prompt('Enter color text: ');
//     let tag = document.createElement(createTag);
//     tag.className = createClass;
//     tag.innerHTML = createText;
//     tag.style.color = colorOfText;
//     let body = document.getElementsByTagName('body')[0];
//     body.appendChild(tag)
// }

// addHTML(regsi);

// //

// FOR REMOVE PRODUCTE IN BAG
// function removeProduct() {
//     let it = document.getElementsByClassName('item');

//     let products = document.querySelectorAll('.kor_right i');
//     for (let i = 0; i < products.length; i++) {
//         products[i].addEventListener('click', function (e) {
//            e.preventDefault();
//            console.log(products, [i]);
//         });
//     }
// }
// //

// FOR LENGHT PRODUCT
function forCur() {
    let it = document.getElementsByClassName('item');
    
    // item price
    let price = document.querySelectorAll('.korzina .price > span');
    // for length in about
    if (it.length < 10) {
        let lgth = document.querySelectorAll('.about .for_para p')[3].innerHTML = '0' + it.length;
    } else {
        let lgth = document.querySelectorAll('.about .for_para p')[3].innerHTML = it.length;
    }
    // for sum in bag
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += parseInt(price[i].innerHTML.match(/\d+/));
    }
    // for total price
    if (Number.isInteger(sum)) {
        let totalPrice = document.querySelectorAll('.bottom_total span')[1].innerHTML = '$' + sum + '.00';
    } else {
        let totalPrice = document.querySelectorAll('.bottom_total span')[1].innerHTML = '$' + sum;
    }
    // //
    // FOR REMOVE PRODUCTE
    removeProduct();
    // //
}
// //

// ADD TO BAG

let addToBag = function(e) {
    e.preventDefault();
    let ttl = this.parentNode.parentNode.querySelectorAll('.title p')[0].innerText;
    let img = this.parentNode.parentNode.querySelectorAll('.img img')[0].src;
    let price = this.parentNode.parentNode.querySelectorAll('.price span')[0].innerText;

    let create_element = document.createElement('div');
    create_element.className = 'item del';
    create_element.innerHTML = '<img src="'+img+'" alt="jacket">\
                                <div class="kor_right">\
                                    <p><a href="#">'+ttl+'</a></p>\
                                    <div class="price">\
                                        <span>'+price+'</span><del>$42.00</del>\
                                    </div>\
                                    <p><a href=""><i class="far fa-trash-alt"></i></a></p>\
                                </div>';
    
    let forBag = document.getElementsByClassName('bag')[0];
    forBag.appendChild(create_element);
    // alert('event succes!');
    forCur();
}

let card_button = document.getElementsByClassName('add_card');

for (let i = 0; i < card_button.length; i++) {
    card_button[i].addEventListener('click', addToBag, false);
}

// //


// 34.МАССИВЫ И ПСЕВДОМАССИВЫ
// LESSON 1
let psevdoMassiv = {0: 'first', 1: 'second', 2: 'third', length: 3}
let newMas = []
for (i in psevdoMassiv) {
    newMas.push(psevdoMassiv[i]);
}
newMas.pop();
console.log(newMas);
// LESSON 2

let massiv = ["first", "second", "third" ];
let newmassiv = []
for ( i of massiv) {
    newmassiv.push(i.split(''));    
}
console.log(newmassiv);
// //
