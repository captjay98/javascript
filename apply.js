const person = {
  fullName(age, profession) {
    return `${this.first} ${this.last} ${age} ${profession}`;
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
console.log(person.fullName.apply(person1, [24, 'software engineer']));
