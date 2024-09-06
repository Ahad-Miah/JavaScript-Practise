// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count = 0;
    for(let num of str){
    if(num.includes(0))
        count++;
    }
    return count;
}

let afterCount = count_zero('0101010101');
console.log(afterCount);