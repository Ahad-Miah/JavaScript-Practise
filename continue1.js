/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
let odd=1;
for(odd=1;odd<=40;odd++){
    if(odd %2===0){
        continue;
    }
    console.log(odd);
   
}