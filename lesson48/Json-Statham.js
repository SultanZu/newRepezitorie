const Data = {
    name: 'Sultan',
    age: 20
};

let json = JSON.parse(JSON.stringify(Data));

console.log(Data);
json.sureName = 'Zamat uulu';
console.log(json);