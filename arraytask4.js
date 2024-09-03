// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.
//--------------------------------

// 1. Create different variables, each containing either an array or a non-array value.
const name = 'Ahad Miah';
const age = 22;
const student = true;
const hobby = ['cricket','footbal'];
const phone = [0 ,1 , 7 , 4 ,5];
// 2. Now use isArray to check if each variable is an array.
console.log(name);
console.log(age);
console.log(student);
console.log(hobby);
console.log(phone);

// 3. Print a message to the console indicating whether each variable is an array or not.

console.log('Array or not')
console.log('--------------------')
console.log(Array.isArray(name));
console.log(Array.isArray(age));
console.log(Array.isArray(student));
console.log(Array.isArray(hobby));
console.log(Array.isArray(phone));
