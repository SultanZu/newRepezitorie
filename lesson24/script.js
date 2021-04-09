"use strict"

let person = {
    personName: 'Sultan',
    sureName: 'Zamat uulu',
    yearOfBirth: 2000,
    placeOfBirth: 'Kyrgyzstan'
}

let phones = [
    'Apple',
    'Samsung',
    'Honor'
]

person = 'My name is ' + person.personName + ' my surename is ' 
+ person.sureName + ' i was born in ' + person.yearOfBirth
+ ' in ' + person.placeOfBirth + ' and i like ' + phones[0] + ' and '
+ phones[1] + " and don't like " + phones[2];
console.log(person);