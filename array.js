// const array = [];
const array = new Array();

// Mutating
    // push
    // pop
    // shift
    // unshift
// Non-mutating
// * Iterating
    // forEach
    // filter
    // map
    // reduce

// Others
    // concat
    // slice
    // splice

const newArray = array.push(5)

// array.splice()

const personArray = [
    {name: "John", age: 20},
    {name: "James", age: 19},
    {name: "Greg", age: 38},
    {name: "Daniel", age: 25}
]

const avAge = personArray.reduce((acc, curr) => acc + curr.age, 0)/personArray.length

// console.log(avAge)

// function nearestFibNumber (num){
//     const sum = 0
//     const fibPrev = 1
//     const fib = 0
//     for (let i = 1; i < num; i++) {
//         if ( i%2 == 0) {
//             sum += i
//         }
//         fib = i
//         i = i + fibPrev
//         fibPrev = fib
//     }
//     return sum
// }



// return sum of even fibonacci numbers,
// that are less thaen the given number
const nearestFibNumber = function (num) {
    let arr = [0,1];
    while (num > (arr[arr.length - 1] + arr[arr.length -2])) {
        arr.push(arr[arr.length - 1] + arr[arr.length -2] )
        console.log(arr)
    }
    return arr
    .filter(element => element % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0)
}

console.log(nearestFibNumber(9))





