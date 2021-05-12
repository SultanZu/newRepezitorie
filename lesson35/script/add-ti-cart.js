"use strict"
// строгий режим для обработки данных

// LESSON 35

let userName = 'sultan';
let userSureName = 'zamat uulu';
let age = 20;
let from = 'kyrgyzstan';
let kg = 50;
let height = 170;

let dopInfo = {userAge: age, userFrom: from, userKg: kg, userHeight: height}
function getPersonInfo(name, sureName, dopInfo) {
    let keys = Object.keys(dopInfo);
    if (keys.length < 5) {
        console.log(name, sureName, dopInfo.userAge, dopInfo.userFrom, dopInfo.userKg, dopInfo.userHeight);
    } else {
        console.log(name, sureName, dopInfo.userAge, dopInfo.userFrom, dopInfo.userKg, dopInfo.userHeight + ' функция принимает только 4 опции')
    }
}
getPersonInfo(userName, userSureName, dopInfo);
// //