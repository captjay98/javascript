/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
 const Ninjas = ['Naruto', 'Lee', 'Sasuke', 'Sakura'];

 console.log(Ninjas);
 console.log(Ninjas[Ninjas.length - 1]);

 console.log(Ninjas.indexOf('Lee'));

 console.log(Ninjas.includes('Sakura'));

 console.log(Ninjas.pop());

 console.log(Ninjas.shift());

 Ninjas.push('Gaara');
 Ninjas.unshift('Kakashi');

 console.log(Ninjas);
 const AllNinjas = Ninjas.concat(['Temari', 'Kankuro']);

 console.log(AllNinjas);

 console.log(Ninjas.join(', '));

 const strNinjas = 'Naruto Lee Sasuke Sakura';

 const strArr = strNinjas.split(' ');

 console.log(strArr);

 const leaf = AllNinjas.slice(0, 5);
 const sand = AllNinjas.slice(5, 9);

 console.log(leaf);
 console.log(sand);

 AllNinjas.splice(2, 1, 'Sai');

 AllNinjas.splice(5, 0, 'Tsunade');

 const leaf = AllNinjas.slice(0, 6);
 console.log(leaf);

 const sand = AllNinjas.slice(6, 9);
 console.log(sand);

 AllNinjas.splice(5, 1);
 console.log(AllNinjas.reverse());
 console.log(AllNinjas.sort());

  console.log(AllNinjas);



AllNinjas.forEach((value, index) => {
  console.log(`${index} ${value}`);
});

const numebrs = [1, 2, 3, 4, 5];
const ans = numebrs.map(((val) => val * 2));
console.log(ans);

function upperCase(val) {
  return val.toUpperCase();
}

const UpperNinjas = AllNinjas.map((val) => val.toUpperCase());

console.log(UpperNinjas);

const numbers = [1, 28, 3, 4, 51, 24, 31, 49, 5];

let evn = numbers.filter((val) => val % 2 === 0);

console.log(evn);

const numbers = [1, 2, 3, 4, 5, 5];

let red = numbers.reduce((acc, val) => acc + val, 0);

console.log(red);

const numbers = [1, 28, 3, 4, 51, 24, 31, 49, 5];

let  higherthan = numbers.some((val) => val > 49);

console.log(higherthan);

let allhigher = numbers.every((val) => val > 1);

console.log(allhigher);

let finder = AllNinjas.find((val) => val === 'Gaara');
console.log(finder);

const anss = AllNinjas.findIndex((val) => val === 'Kankuro');

console.log(anss);

const Ninjas = new Set(['Naruto', 'Lee', 'Sasuke', 'Sakura']);

console.log(Ninjas);

Ninjas.add('Gaara');

console.log(Ninjas);

Ninjas.delete('Gaara');

console.log(Ninjas);

const ansss = Ninjas.has('Narut');
console.log(ansss);
console.log(Ninjas.size);
Ninjas.clear();
console.log(Ninjas);

const numbers = [1, 2, 3, 4, 5, 5];

const weakset = new WeakSet();

weakset.add(numbers);
console.log(weakset);



const exa = {
  name: 'Naruto',
  village: 'Leaf',
  power: 100,
  rank: 'Hokage',
};

const exaj = new Map([
  ['name', 'Naruto'],
  ['rank', 'Hokage'],
]);

exaj.set('village', 'leaf');
exaj.set('power', 100);

const vil = exaj.get('village');
console.log(exaj);
console.log(vil);
console.log(exaj.has('rank'));
console.log(exaj.size);
exaj.delete('rank');
console.log(exaj.has('rank'));
console.log(exaj.size);

for (const key of exaj.keys()) {
  console.log(key);
}

for (const val of exaj.values()) {
  console.log(val);
}

for (const [key, value] of exaj.entries()) {
  console.log(`${key} : ${value}`);
}

for (e of exaj) {
  console.log(e);
}