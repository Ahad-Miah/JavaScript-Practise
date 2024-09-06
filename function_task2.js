// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function evenOrOdd(num){
    let result=0;
    if(num%2===1){
        result = num*2;
        return result;
    }
    else{
        result=num/2;
        return result;
    }
}
let result=evenOrOdd(4);
console.log(result);