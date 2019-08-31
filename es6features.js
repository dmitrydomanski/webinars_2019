/* eslint-disable no-unused-vars */
// Default parameters
var calculateArea = function (height = 50, width = 100) {
//   height = height || 50
//   width = width || 100
  return width * height
}

// console.log(calculateArea())

// Template literals
var firstName = 'Jane'
var lastName = 'Smith'
// var nameMessage = 'My name is ' + firstName + ' ' + lastName
var nameMessage = `My name is ${firstName.toUpperCase()} ${lastName}`
// console.log(nameMessage)

// Destructuring assignment
// const copy = JSON.stringify(exampleObject) // object copy hint
// const copyTwo = Object.assign({}, exampleObject)
// console.log(copyTwo)
// // console.log(copy)
// var numCopy = copyTwo.num
// var num = exampleObject.num
// var text = exampleObject.text
var exampleObject = { num: 6,
  text: {
    author: 'Jane Smith',
    message: 'Hi there' }
}
var { num, text: { author: empoloyee } } = exampleObject
// exampleObject.num = 10
// console.log(num)
// console.log(empoloyee)

const onInputChange = event => {
  let someStateVariable = null
  const { target: { value } } = event
  someStateVariable = value // must use destructuring assignment
}

// Enhanced Object Literals

function getEmployee (name, salary, department) {
  return {
    name,
    salary,
    department
  }
}

console.log(getEmployee('Jane Smith', 30000, 'Development'))
