'use strict'
// FOR LENGHT PRODUCT
function forCur() {
    let it = document.getElementsByClassName('item');
    
    // item price
    let price = document.querySelectorAll('.korzina .price > span');
    // economy
    let del = document.querySelectorAll('.price del');
    // for length in about
    if (it.length < 10) {
        let lgth = document.querySelectorAll('.about .for_para p')[3].innerHTML = '0' + it.length;
    } else {
        let lgth = document.querySelectorAll('.about .for_para p')[3].innerHTML = it.length;
    }
    // for sum in bag
    let sum = 0;
    let economySum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += parseInt(price[i].innerHTML.match(/\d+/));
        economySum += parseInt(del[i].innerHTML.match(/\d+/));
    }
    // for total price
    if (Number.isInteger(sum)) {
        document.querySelectorAll('.for_para span')[3].innerHTML = '/ $' + sum + '.00'; 
        let totalPrice = document.querySelectorAll('.bottom_total span')[1].innerHTML = '$' + sum + '.00 <del>\
                                                                                                            <sub> $'+ economySum + ".00" + '</sub>\
                                                                                                         </del>';
    } else {
        document.querySelectorAll('.for_para span')[0].innerHTML = '/ $' + sum; 
        let totalPrice = document.querySelectorAll('.bottom_total span')[1].innerHTML = '$' + sum + '.00 <del>\
                                                                                                            <sub>'+ economySum +'</sub>\
                                                                                                        </del>';
    }
    // //

}
// //

// FOR MESSAGE IN BAG
function forMessage() {
    let proLen = document.querySelectorAll('.bag .item');
    let bag = document.querySelectorAll('.bag')[0];
    if (proLen.length < 1) {
        bag.innerHTML = '<h6>Your cart is empty</h6>';      // create tag h6 for message
        bag.style.textAlign = 'center';                     // create style for message
    } else {
        document.querySelectorAll('.bag h6')[0].remove();   // remove message if elemnts in bag
        bag.style.textAlign = 'left';                       // remove style 
    }
}

forMessage();
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
                                    <p><a href="#"><i class="far fa-trash-alt"></i></a></p>\
                                </div>';
    let forBag = document.getElementsByClassName('bag')[0];
    forBag.appendChild(create_element);
    // alert('event succes!');

    let products = document.querySelectorAll('.kor_right i');

    for (var i = 0; i < products.length; i++) {
        products[i].addEventListener('click', function (e) {
           e.preventDefault();
           console.log(this.parentNode.parentNode.parentNode.parentNode.remove())
            forCur();
            forMessage();
        });
    }
    forCur();

    forMessage();
}

let card_button = document.getElementsByClassName('add_card');

for (let i = 0; i < card_button.length; i++) {
    card_button[i].addEventListener('click', addToBag, false);
}

// //