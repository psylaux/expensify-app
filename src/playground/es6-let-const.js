var nameVar = 'Tiffa';
var nameVar = 'Nottiff'
console.log('nameVar',nameVar);

let nameLet = 'Tiffer';
nameLet = 'James';

console.log('nameLet', nameLet);

const nameConst = 'Jude';
console.log('nameConst', nameConst);

function getName(){
    var name = 'Jimmy';
    return name;
}

getName();
console.log(getName());

let fullName = 'T Scott';
let first;
if(fullName) {

    first = fullName.split(' ')[0];
    console.log(first);

}