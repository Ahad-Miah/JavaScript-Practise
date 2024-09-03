

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sumOfOddNUmbers=0;
console.log("Odd numbers from 91 to 129")
let odd = 91;
for(odd=91; odd<=129; odd+=2){
    sumOfOddNUmbers+=odd;
    console.log(odd);
}
console.log("sum of odd numbers" ,sumOfOddNUmbers);

//even
let sumOfEvenNumbers = 0;
console.log("even numbers from 51 to 85")
let even = 51;
for(even=51; even<=85; even++){
    if(even %2 === 0){
        console.log(even);
        sumOfEvenNumbers+=even;
    }
    
}
console.log("sum of even numbers", sumOfEvenNumbers);