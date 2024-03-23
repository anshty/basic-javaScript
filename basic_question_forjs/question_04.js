/**Question 1: Create an array of numbers. Write a function called sumArray that takes this array as an argument and calculates the sum of all the numbers in the array. Return the sum from the function. */

const numArray=[1,2,3,22,5,36,7,82,9]

function sumArray(sumofnum) {
    let sum=0;
    for (let index = 0; index < sumofnum.length; index++) {
        sum += sumofnum[index];
        
    }
    return sum
    }
    let total_ofArray=sumArray(numArray)
    console.log(total_ofArray);

