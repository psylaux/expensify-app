function square(x){

    return x*x;

} //es5 function

const squarrow = (x) =>{

    return x*x;

}//es6 function
//es6 functions are anonymous

const squarrow2 = (x) => x*x;

console.log(squarrow2(4));

//Challenge - use arrow functions
//getFirstName('Mike Smith') -> "Mike"
//Create regular arrow function
//Create arrow function using shorthand syntax

const fullName = 'T Clark';
let first;
const getFirstName = (fullName)=>{

    return fullName.split(' ')[0];

}

const getFirstName2 = (first) = fullName.split(' ')[0];

console.log(getFirstName(fullName));