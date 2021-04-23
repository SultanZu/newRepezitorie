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
        console.log(this.parentNode.parentNode.querySelectorAll('.img > img')[0])
    }
}