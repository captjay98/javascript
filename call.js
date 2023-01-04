/* eslint-disable no-console */

const person = {
  fullName(age) {
    return `${this.first} ${this.last} ${age}`;
  },
};

const person1 = {
  first: 'Jamal',
  last: 'Ibrahim',
};

const person2 = {
  first: 'Fateema',
  last: 'Musa',
};
console.log(person.fullName.call(person1, 24));
