(function () {
    'use strict';

    /// LESSON 52

    var arr = ["apple", "banana", "potato"];
    
    // forEach
    

    // filter
    // const result = arr.filter((name) => {
    //     if (name.length <= 5) {
    //         return name;
    //     }
    // });
    // console.log(result);

    //map
    // const result = arr.map(item => item.toUpperCase());
    // console.log(result);
    // console.log(arr);

    // every/some
    // const arr2 = ['one', 'THREE']
    // // const result = arr2.some(item => typeof(item) === 'number');
    // const result = arr2.every(item => typeof(item) === 'string');

    // console.log(result);

    // reduce
    // const one = [1, 2, 3, 4, 5];

    // const result = one.reduce((count, item) => count + item);

    // console.log(result);

    // const obj = {
    //     zamatuulu: "sname",
    //     sultan: "name",
    //     21: "age"
    // }

    // const result = Object.entries(obj)
    // .filter(item => item[1] === 'name')
    // .map(item => item[0]);

    // console.log(result);


    // HOMEWORK
    // №1

    let quest = 'Sultan, Belek, Aibek';
    let result = quest.split(', ');
    console.log(result);

    // №2
    let input = '1, 2, 3, 12';
    let res = () => {
        let convert = input.split(', ');
        return convert.reduce((count, item) => +count + +item);
    }
    console.log(res());
    // //

    ///
}());