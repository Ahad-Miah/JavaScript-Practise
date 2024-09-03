/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let num=1;
for(num=1;num<=100;num++){
    if(Math.sqrt(num)%1===0){
        console.log("Found a square number");
        break;
    }
    console.log(num);
}
