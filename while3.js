

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


let odd = 81;
let sumOfOddNumbers=0;
console.log("Odd numbers from 81 to 131")
while( odd <=131){
    console.log(odd);
    sumOfOddNumbers+=odd;
    odd+=2;
}
console.log("Sum of all odd numbers from 81 to 131")
console.log(sumOfOddNumbers);