//arguments object is no longer bound with arrow functions

const add = function(a,b){

    console.log(arguments);
    return a+b;

} //es5 example

console.log(add(56,72,2000));

const add2 =(a,b) => {

    //console.log(arguments);//no longer have access to this
    return a+b;

}

const user = {

    name: 'Tiffa',
    cities: ['Georgia', 'WPB', 'Gville', 'Jville'],
    printPlacesLived(){

        ///**************Where is city defined??? *****************/
        return this.cities.map((city) => this.name + ' has lived in ' + city); 

    }

}
//console.log(user.printPlacesLived());
//this keyword is no longer bound with arrow functions



//CHALLENGE

/*
    numbers- array of numbers
    multiplyBy - single number
    multiply - return a new array where the numbers have been multiplied
*/

const multiplier = {

    multiplyBy: 3,
    numbers: [1,2,3],
    multiply(){

        return this.numbers.map((number) => this.multiplyBy*number) ;     

    }

}

console.log(multiplier.multiply());