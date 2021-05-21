"use strict";
// строгий режим для обработки данных

// LESSON 36
let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};
let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
};

let resultBonus = function () {
    let result = [];
    for (let i in salary) {
        result.push('name: ' + i + ',' + ' total: ' + (salary[i] + bonus[i]))
    }
    return result;

} 

console.log(resultBonus());
//