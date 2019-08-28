// var a // declaration

// a = 100 // assignment/itialization

// console.log(a + 30) // usage

// console.log(a)

// a = 100;

// function checkOne (one) {
//   if (one) {
//     console.log('true')
//   } else {
//     console.log('false')
//   }
// }

// function hoist () {
//   a = 20
//   var b = 100
// }

// var c = 150

// hoist()

// console.log('a: ', a)
// console.log('b: ', b)

// console.log(hoist)
// var hoist = 'the variable has been hoisted'

function hoist () {
  var message = 'Hosited'
  console.log(message)
}

hoist()

// checkOne('')

// checkOne(one)

// var checkOne = function (one) {
//   if (one) {
//     console.log('true')
//   } else {
//     console.log('false')
//   }
// }

// var a = 100
