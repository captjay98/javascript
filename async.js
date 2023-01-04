/* eslint-disable no-console */
/* const second = () => {
  console.log("Hello there!");
}

const first = () => {
  console.log("Hi there!");
  second();
  console.log("Bye bye!");
}

first();
*/

const netreq = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 5000);
};
console.log('Hello world');
netreq();
console.log('The End');

this;
