// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arrays,arraysSize){
    let result=0;
    let sum = 0;
    for( let num of arrays){
        sum = sum+num;
    }
    result = sum/arraysSize;
    return result;
}
let num = [10, 20, 30, 40,50];
let size = num.length;
let avgResults = make_avg(num,size);
console.log(avgResults);
