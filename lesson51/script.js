(function () {
    'use strict';

    /// LESSON 51

    const inputSom = document.querySelector('#som');
    const inputUsd = document.querySelector('#usd');
    const inputRub = document.querySelector('#rub');
    const paEuro = document.querySelector('#euro');

    inputRub.addEventListener('input', () => {
        fetch('current.json', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        /// rub
        .then(response => response.json())
        .then(json => {
            inputUsd.value = (inputRub.value / json.currentRub.usd).toFixed(2);
            inputSom.value = (inputRub.value / json.currentRub.som).toFixed(2);
        })
 
    });
    inputSom.addEventListener('input', () => {
        fetch('current.json', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        /// som
        .then(response => response.json())
        .then(json => {
            inputUsd.value = (inputSom.value / json.currentSom.usd).toFixed(2);
            inputRub.value = (inputSom.value / json.currentSom.rub).toFixed(2);
            paEuro.innerHTML = (inputSom.value / json.currentSom.euro).toFixed(2);
        })
    });


    inputUsd.addEventListener('input', () => {
        fetch('current.json', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        /// usd
        .then(response => response.json())
        .then(json => {
            inputSom.value = (inputUsd.value / json.currentUsd.som).toFixed(2);
            inputRub.value = (inputUsd.value / json.currentUsd.rub).toFixed(2);
        })
    });
    ///
}());