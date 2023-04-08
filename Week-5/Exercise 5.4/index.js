/*
 * Exercise 5.4 : Create a simple Javascript function code for addition, subtraction, and multiplication of 2numbers and
 * write the corresponding Jest based tests for it.
*/

const mathOperation = {
    sum: (a, b) => {
      return a + b;
    },
    diff: (a, b) => {
      return a - b;
    },
    product: (a, b) => {
      return a * b;
    }
  }
  
  
  // console.log(mathOperation.sum(2, 3))
  module.exports = mathOperation