#!/usr/bin/node
/*
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var  test = [5, 6, 7, 8, 9];

console.log(test);
console.log(nextInLine(test, 55));
//console.log(test);

let val = 9;

if  (val !== '9') {
    console.log(val);
}

basically i am learning javascript
i am still onit 
holding on
still codig
getting tired now omo  din tire o
not there yet
done
expprt function double 

*/
const myself = {
    first_name: 'Jamal',
    last_name: 'Ibrahim',
    other_names: 'Umar',
    age: 23,
    profession: 'Software Engineer',
    introduction: function () {
        return `I am ${this.first_name}, I am a ${this.profession}.`;
    },
};

console.log(myself.introduction());

myself.age = 24


myself.shek = function () {
    return `I am ${this.age} years old`;
};

delete myself.other_names;
console.log(myself.shek());

for (key in myself) {
    console.log(myself[key]);
}

for (key in myself) {
    console.log(key.toUpperCase() + ':', myself[key]);
};

const hel =Object.keys(myself);

const game = {
    name: "MasterChief",
    game_name: "Halo",
    platform: "Xbox",
    exclusice: true,
    showDetails() {
        const accept = this.exclusive ? 'is an Xbox Exclusive' : 'is not an Xbox Exclusive';

        console.log(`${this.name} is a character from ${this.game_name} which is an ${this.platform} exclusive.`);
    }
};

const heyya = Object.create(game);

heyya.name = "Drax";
heyya.game_name = "Gears of War"
heyya.showDetails();
game.showDetails();


// Iterate through the keys
let x = Object.keys(myself);
x.forEach(key => {
    let value = myself[key];

	 console.log(`${key}: ${value}`);
});

Object.keys(myself).length;

const values = Object.values(game);

const entries = Object.entries(game);

entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

const character = Object.assign(name, details);

const character = {...name, ...details}


// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

const employees = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees);


