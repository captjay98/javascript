/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
/*
const myPromise = new Promise((myResolve, myReject) => {
  const x = 3;

  if (x === 3) {
    myResolve('OK');
  } else {
    myReject('Error');
  }
});

myPromise
  .then(
    (value) => { console.log(value); },
  )
  .catch(
    (error) => { console.log(error); },
  );

function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    resolve('True');
    reject('False');
  });

  myPromise
    .then(
      (value) => value,
    )
    .catch(
      (error) => error,
    );
  return myPromise;
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);

function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: '200',
        body: 'success',
      });
    } else {
      reject({
        error: 'The fake API is not working currently',
      });
    }

    myPromise
      .then(
        (value) => value,
      ).catch(
        (error) => error,
      );
  });
  return myPromise;
}

//console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject({
        Error: '',
      });
    }

    myPromise
      .then(
        (value) => value,
      ).catch(
        (error) => error,
      ).finally(
        console.log('Got a response from the API')
      );
  });
  return myPromise;
}

const promise = Promise.resolve();
handleResponseFromAPI(promise);

function get() {
  return new Promise((resolve, reject,) => {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(Error("Network Error"));
    };

    req.send();
  })
}

get().then(function (response) {
  console.log("Success!", response);
}, function (error) {
  console.error("Failed!", error);
})

const myPromise = new Promise((resolve, reject) => {
  resolve(1);
});

myPromise
  .then((val) => {
    console.log(val);
    return val += 2;
  }).then((val) => {
    console.log(val);
    return val += 7;
  }).then((val) => {
    console.log(val);
  });

  async yyhing1651515
  ijfiefh
  async stuff

function resolveAfter(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
    console.log('waiting');
  });

}

async function f1() {
  const x = await resolveAfter(5);
  console.log(x);
}

f1();
*/

function f1() {
  console.log('slow One');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow');
      console.log('slow Done');
    }, 2000);
  });
}

function f2() {
  console.log('Fast One');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fast');
      console.log('fast DOne');
    }, 1000);
  });
}

async function seqstart() {
  console.log('Starting Sequential');

  const slow = await f1();
  console.log(slow);

  const fast = await f2();
  console.log(fast);
}

async function constart() {
  console.log('Starting Concurrent');

  const slow = await f1();

  const fast = await f2();

  console.log(await slow);
  console.log(await fast);
}

function conpr() {
  console.log('Con pronise');
  return Promise.all([f1(), f2()]).then(
    (messages) => {
      console.log(messages[0]);
      console.log(messages[1]);
    },
  );
}

async function paral() {
  console.log('Starting Parallel');

  await Promise.all([
    (async () => console.log(await f1()))(),
    (async () => console.log(await f2()))(),
  ]);
}

seqstart();
setTimeout(constart(), 4000);
setTimeout(conpr(), 7000);
setTimeout(paral(), 9000);
