// ### Task-1: 
// Count how many times a string has the letter `a`

/*let name='ahadahadahad';
let count=0;
for(let i=0;i<name.length;i++){
    if(name[i] === 'a'){
        count++;
    }
}
console.log(count);
*/
// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

/*
let name = "ahadAhadahadAhadahad"
let count1=0;
let count2=0;
for(let i=0;i<name.length;i++){
    if(name[i]==='a'){
        count1++;
    }
    else if(name[i]==='A'){
        count2++;
    }
}
console.log("NUmber of a ",count1);
console.log("NUmber of A ",count2);
*/

// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

/*
let number="A quick brown fox jumps over the lazy dog"
count=0;
for(let i=0;i<number.length;i++){
    if(number[i]==='a' && number[i]==='e' && number[i]==='i' && number[i]==='o' && number[i]==='u'){
        count++;
    }
}
if(count>=0){
    console.log("It Contains all the vowels");
}
else{
    console.log("It doesn't contains all the vowels");
}
*/


// ### Task-5:
// Capitalize Every first Letter of each word in a String

const name = "abu jakaria";
const spiltedName= name.split(" ");
const capitalizedWords = []


for(word of spiltedName){
    // console.log(word);
   let test = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
   capitalizedWords.push(test)
   
   
    
}
const final = capitalizedWords.join(" ")

console.log(final)





