const users = ['John', 'Alex']

function sayHello(array, item){
    for (let i = 0; i < array.length; i++)  {
        if (array[i] === item)  {
        return `Hello ${item}`
      }
    }
    return 'Hello 2'
  }
console.log(sayHello(users, 'Alex'));


function sumNumbers(firstNumber, secondNumber)  {
  return firstNumber + secondNumber

}

const result = sumNumbers(4*5)
console.log(result)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function numberCheck (array, item)  {
//   for (let i = 0; i < array.length; i-1)  {
//     if (item > 10)
//   }
// }

// console.log(item)