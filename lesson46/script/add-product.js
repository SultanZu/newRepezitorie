"use strict";

class product {
    constructor(tooltipsClass, tooltips, img, title, originPrice, oldPrice, innerBlock) {
        this.tooltipsClass = tooltipsClass;
        this.tooltips = tooltips;
        this.img = img;
        this.title = title;
        this.originPrice = originPrice;
        this.oldPrice = oldPrice;
        this.innerBlock = document.querySelector(innerBlock);
        this.valuta = 85;
        this.originPrice = this.convertTOUSD(this.originPrice);
        this.oldPrice = this.convertTOUSD(this.oldPrice);
    }

    convertTOUSD(price) {
        const result = price / this.valuta;
        return result.toFixed(2);
    }

    render() {
        const div = document.createElement("div");
        div.classList.add("block_product");
        div.innerHTML = `<div class="img">
                                <div class="new ${this.tooltipsClass}">
                                    ${this.tooltips}
                                </div>
                                <div class="opis_cont">
                                    <div class="opis">
                                        <p>our of stock!</p>
                                        <span><span>see </span>similar products</span>
                                    </div>
                                </div>
                                <img src=${this.img} alt="sviter">
                            </div>
                            <div class="title">
                                <p>${this.title}</p>
                            </div>
                            <div class="ocenca">
                                <span><i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i></span><span><i>6 Review(s)</i></span>
                            </div>
                            <div class="price">
                                <span>$${this.originPrice}</span><span><del>$${this.oldPrice}</del></span>
                            </div>
                            <div class="for_bo_ic">
                                <div class="for_icon add_card">
                                    <i class="fas fa-shopping-bag"></i>
                                </div>
                                <div class="for_icon">
                                    <i class="fas fa-balance-scale"></i>
                                </div>
                                <div class="for_icon">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>`;

                            this.innerBlock.append(div);
    }

}

new product(
    'orange',
    'New',
    "http://landing.engotheme.com/html/miukid/demo/images/img61.jpg",
    'animal swirt',
    1230,
    2500,
    'section'
).render();

new product(
    'green',
    '-21%',
    "http://landing.engotheme.com/html/miukid/demo/images/img50.jpg",
    'animal swirt',
    1230,
    2500,
    'section'
).render();

new product(
    'green',
    '-21%',
    "http://landing.engotheme.com/html/miukid/demo/images/img51.jpg",
    'animal swirt',
    1230,
    2500,
    'section'
).render();

new product(
    'orange',
    'New',
    "http://landing.engotheme.com/html/miukid/demo/images/img63.jpg",
    'Baby backpack',
    1130,
    2400,
    'section'
).render();

new product(
    'green',
    '-21%',
    "http://landing.engotheme.com/html/miukid/demo/images/img50.jpg",
    'animal swirt',
    1230,
    2500,
    'section'
).render();


// LESSON 46 

function myfunc() {
    class userProduct {
        constructor(produName, price, number, inp) {
            this.produName = produName;
            this.price = price;
            this.number = number;
            this.inp = inp;
        }
    
        totalPrice() {
            let h1 = document.createElement('h1');
            h1.innerHTML = `Name: ${this.produName}, Kolichestvo: ${this.number}, Total price: ${this.price * this.number}`;
             this.inp.after(h1);
        }
    }
    let id1 = document.querySelectorAll('.inp > .los')[0];
    let id2 = document.querySelectorAll('.inp > .los')[1];
    let id3 = document.querySelectorAll('.inp > .los')[2];
    let inp = document.querySelector('.inp');
    let restult = new userProduct(id1.value, id2.value, id3.value, inp);
    
    console.log(restult.totalPrice());
}
