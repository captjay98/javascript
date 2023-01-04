const person = {
  first: 'Jamal',
  last: 'Ibrahim',
  fullName(age) {
    return `${this.first} ${this.last} ${age}`;
  },
};

const bestfriend = {
  first: 'Fateema',
  last: 'Musa',
};

let rel = person.fullName.bind(bestfriend, 22);
console.log(rel());