// let hoist = 'Hoisted'
// console.log(hoist)

// let & const

// let: can be reassigned, block-scoped
// const: can not be reassigned, function-scoped

// constant = 1
// console.log(constant)
// let constant = 'constant'

// function constExample () {
//   console.log(constant)
//   constant = 1
//   const constant = 'constant'
// }

// constExample()

function blockedScope () {
  const array = [1, 2, 3]
  const a = 3
  for (let item of array) {
    let blocked = item * 2
    console.log(blocked, item)
  }
  console.log(a)
}

blockedScope()
