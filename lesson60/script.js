import {getData} from './init.js';
const gData = getData();
const ul = document.createElement('ul');
const values = Object.values(gData);
const keys = Object.keys(gData);

for (let i = 0; i < keys.length; i++) {
    ul.innerHTML += `<li><b>${keys[i]}</b>: ${values[i]}</li>`;
}

document.body.append(ul);