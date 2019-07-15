class Person {

    constructor(name = 'Anon', age = 0) {

        this.name = name;
        this.age = age;

    }

    getGreeting(){

        //return 'Hi me llamo ' + this.name + "!";
        return `Hola, me llamo ${this.name}`;
    }

    getDescription(){

        return `${this.name} is ${this.age} year(s) old.`;

    }

}

class Student extends Person {

    constructor(name, age, major){

        super(name, age);
        this.major = major;

    }

    hasMajor(){

        return !!this.major;

    }

    getDescription(){

        let description = super.getDescription();
        if (this.hasMajor()) {

            description += ` Their major is  ${this.major}.`;

        }
        return description ;

    }

}

class Traveler extends Person {

    constructor(name, age, location){

        super(name, age);
        this.location = location;

    }

    hasLocation(){

        return !!this.location;

    }

    getGreeting(){

        let greeting = `Hola, me llamo ${this.name}`;

        if(this.hasLocation()){

            greeting += ` y soy de ${this.location}`;

        }

        return greeting;
    }

}

const myPerson = new Traveler('Tiffany Svott', 20, 'Venezuela');
const yourPerson = new Traveler();
console.log(myPerson.getGreeting());
console.log(yourPerson.getGreeting());