(function () {
    "use strict"

    class user {
        constructor(name, surename) {
            this.name = name;
            this.surename = surename;
        }
        getFullName(){
            return 'Your name is: ' + this.name + ' ' + this.surename;
        }
    }
    class student extends user {
        constructor(name, surename, year) {
            super(name,surename);
            this.year = year;
        }
        getCourse() {
            return `Your course: ${2021 - this.year}`;
        }
    }
    const result = new student('Sultan','Zamat uulu', 2020);
    console.log(result.getFullName());
    console.log(result.getCourse());
}());
