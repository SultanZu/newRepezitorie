(function () {
    'use strict';

    let person = {
        name: "Sultan",
        age: "20"
    }
    fetch("current.json", {
        method: "POST",
        body: JSON.stringify(person),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => {
        let p = document.createElement('p');
        let cont = document.querySelector('.container');
        p.innerHTML = `<h1>${json.currentSom.rub}</h1>`;

        cont.append(p);
    })
    .catch('error');

}());