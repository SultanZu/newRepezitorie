(function () {
    "use strict"
    // function user(name, age) {
    //     this.name = name,
    //     this.age = age,
    //     this.data = function() {
    //         console.log('hello ' + this.name);
    //     }
    // }
    // let person = new user('Sultan', 20);
    // person.data();

    // function hello(age) {
    //     console.log(this);
    //     console.log(this.name);
    //     console.log(age);
    // }

    // const newObj = {
    //     name: 'Sultan'
    // }

    // hello.call(newObj, 20)
    // hello.apply(newObj, ['20'])

    // function count(num){
    //     return (this + num) + this;
    // }

    // const mnojitel = count.bind(5);
    // console.log(mnojitel(10));

    /// LESSON 44 ///
    // let userName = prompt('Your name?')
    // let age = prompt('Your age?')
    // let from = prompt('Where are you from?')
    let btn = document.getElementsByTagName('button')[0];
    
    btn.addEventListener('click', function () {
        let userName = document.getElementsByTagName('input')[0].value;
        let age = document.getElementsByTagName('input')[1].value;
        let from = document.getElementsByTagName('input')[2].value;
        function createUser(name, age, from) {
            this.name = name,
            this.age = age,
            this.from = from;
            let h1 = document.createElement('h1');
            h1.innerHTML = ` Name: ${name}, Age: ${age}, From: ${from}.`;
            document.body.appendChild(h1);
        }

        const user = new createUser(userName, age, from)
    });

}());
