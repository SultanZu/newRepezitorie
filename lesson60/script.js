import {getData} from './init.js';
const gData = getData();
const ul = document.createElement('ul');
const keys = Object.values(gData);

keys.forEach(elem => {
    ul.innerHTML += `<li>${elem}</li>`;
});

document.body.append(ul);