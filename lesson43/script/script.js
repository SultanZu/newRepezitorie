"use strict"

let btn = document.getElementsByClassName('change');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        if (btn[i].innerText == 'OWN') {
            document.body.style.backgroundColor = 'white';
        }
        document.body.style.backgroundColor = (btn[i].innerText);
    })
}