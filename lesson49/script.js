(function () {
    'use strict';

    const inputSom = document.querySelector('#som'),
        inputUsd = document.querySelector('#usd'),
        inputRub = document.querySelector('#rub');

    function reqFunc() {
        const re = new XMLHttpRequest();

        re.open("GET", "current.json");

        re.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        re.send();
        return re;
    }
 
    inputSom.addEventListener('input', () => {

        let request = reqFunc();

        request.addEventListener('readystatechange', () => {
            
            if(request.readyState === 4 && request.status === 200) {

                const currency = JSON.parse(request.response);

                const resultUsd = inputSom.value / currency.currentSom.usd;
                const resultRub = inputSom.value / currency.currentSom.rub;

                inputUsd.value = resultUsd.toFixed(2);
                inputRub.value = resultRub.toFixed(2);
            }

        });
    });
    inputUsd.addEventListener('input', () => {

        let request = reqFunc();

        request.addEventListener('readystatechange', () => {
            
            if(request.readyState === 4 && request.status === 200) {

                const currency = JSON.parse(request.response);

                const resultSom = inputUsd.value * currency.currentUsd.som;
                const resultRub = inputUsd.value * currency.currentUsd.rub;

                inputSom.value = resultSom.toFixed(2);
                inputRub.value = resultRub.toFixed(2);
            }

        });
    });
    inputRub.addEventListener('input', () => {

       let request = reqFunc();
       
        request.addEventListener('readystatechange', () => {
            
            if(request.readyState === 4 && request.status === 200) {

                const currency = JSON.parse(request.response);

                const resultSom = inputRub.value * currency.currentRub.som;
                const resultUsd = inputRub.value * currency.currentRub.usd;

                inputSom.value = resultSom.toFixed(2);
                inputUsd.value = resultUsd.toFixed(2);
            }

        });
    });

}());