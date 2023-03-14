console.log('salt academy batch 6 -- latihan javascript');
var food = 'nasi padang';
let drink = 'coca cola';

function changevar() {
    food = 'nasi campur';
    drink = 'fanta';
}

function changelet() {
    drink = 'pepsi';
}

changevar();
changelet();

console.log(food);
console.log(drink);

const phone = 'samsung';
console.log(phone);

console.log('--------------------------------');
console.log('JS DATA TYPE');
console.log('--------------------------------');
// define variable
const thisBoolean = true;
const thisNull = null;
var thisUndefined;
const thisNumber = 10;
const thisString = 'Hallo guys';
const thisSymbol = Symbol();

const user = {
    name: 'John',
    age: 25
}

const thisArray = ['gajah', 'sapi', 'ayam'];
function thisFuctionobject(param) {
    console.log(param);
}

// output from variable
console.log(thisBoolean);
console.log(thisNull);
console.log(thisUndefined);
console.log(thisNumber);
console.log(thisString);
console.log(thisSymbol);


/* 
*/
console.log(user);
console.log(user.age);

console.log(thisArray);
console.log(thisArray[1]);

function thisFuctionobject(param) {
    console.log(param * param);
};

thisFuctionobject(10, 10)
thisFuctionobject(20, 20);

console.log('--------------------------------');
console.log('OPERATORS');
console.log('--------------------------------');
console.log('--- ARITMATICS ---');
console.log('1+1');

console.log('--- COMPARASSION ---');
console.log('1+1');

for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log('--- in ---');
let nums = [1, 2, 3, 4]

for (let num in nums) {
    console.log(num, nums[num]);
}

console.log('--- of ---');
for (let num of nums) {
    console.log(num);
}

let i = 1
while (i <= 20) {
    console.log('this is number' + i)
    i++
}
