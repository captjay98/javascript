class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    setTimeout(function pri() {
      console.log(`i am ${this.name}`);
    }, 100);
  }

  say1() {
    setTimeout(() => {
      console.log(`i am ${this.name}`);
    }, 100);
  }
}

const person = new Person('Jamal');
person.say();
person.say1();
console.log(this);
eh