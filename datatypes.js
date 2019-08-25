/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// Data types JS:

// Primitives:

    // * Number
    // * String
    // * Boolean
    // * Undefined
    // * Null

// Non-Primitives:

    // * Object

// Types coercion

    // true + false
    // 12 /'6'
    // 'num' + 15 + 5
    // ['x'] == 'x'
    // 'foo'+ +'bar'
    // [1,2,3] == [1,2,3]
    // {}+[]+{}+[1]

    // Explicit coercion
    // Implicit coercion

// Boolean coercion

var one = 0.1
var two = null
var three = 3

var checkOne = function (one) {
    if (one) {
        console.log('true')
    } else {
        console.log('false')
    }
}

// checkOne('')

// console.log(one && two && three)

// false is:

    // Boolean('')
    // Boolean(0)
    // Boolean(NaN)
    // Boolean(null)
    // Boolean(undefined)
    // Boolean(false)
