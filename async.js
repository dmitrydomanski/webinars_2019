// console.log('AsyncJS')

// callbacks
function greeting() {
  console.log("hallo");
}

// setTimeout(greeting(), 1000)

// const fs = require('fs')

const pathFile = "./paths.json";

// function onReadFile(err, result) {
//     if (err) {
//         console.log(`there's an error`)
//         return
//     }
//    return result
//    console.log(`Content ${result}`)
// }

// const content = function () {
//     fs.readFile(pathFile, function (err, paths) {
//         if (err) {
//             console.log(`there's an error`)
//             return
//         }
//         console.log(`paths: ${paths}`)
//         })
//     }
// content()

// promises
// new Promise (/* executor */ (resolve, reject))
const promiseResult = true;
promise1 = new Promise(function(resolve, reject) {
  if (promiseResult) {
    resolve("Promise is filfilled");
  } else {
    reject("Promise was broken");
  }
});

// resolved
// rejected

// pending

promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({
      message: "Promise is kept",
      code: "someCode"
    });
  }, 4000);
});

// .catch()

// .then()

// .finally()
function moneyLeft (savings, price) {
    return savings - price
}

function parentsPromise(savings, price, condition) {
  return new Promise(function(resolve, reject) {
    if (price > savings) {
      reject("We are not ready yet, lets save more");
    } else {
            resolve({
                brand: "Xiaomi",
                model: "Redmi",
                moneyLeft: moneyLeft(savings, price)
              });
    }
  });
}


function presentSuccess(value) {
  console.log(`Hooray I got a phone ${value.brand} ${value.model}, parents still have ${value.moneyLeft} shekels`);
}

function presentFailure(reason) {
  console.log(`Parents do not buy me a phone because ${reason.toLowerCase()}`);
}

function conclusion() {
  console.log("Parents love me anyway");
}

parentsPromise(499, 500)
  .then(function(result) {
    presentSuccess(result)
    // say this returns promise
    // .then(do smth)
    // .catch(catch)
    // .finally(do smth)
  })
  .catch(function(reason) {
    presentFailure(reason);
  })
  .finally(function () {
      conclusion()
  });

// parentsPromise.then()

// parentsPromise.catch()

// parentsPromise.finally(function(){
// })

// async await
