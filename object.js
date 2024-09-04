// ### Task-1
// Access the `golden rod` color value in output.
// ```
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'

/*
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520',
}
console.log(colors['golden rod']);
*/
//-------------------------

// ### Task-2
// For this object below add a property named `passenger capacity` with value 5
// ```js
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

/*
const car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
    };
    car['passenger Capacity']=5;
    console.log(car);
*/

//-----------------------

// ### Task-3
// Display the physics marks as output.
// ```js
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

/*
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30,
    }
};
console.log(student.physics.marks);
*/

//----------------------

// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// ```
// **Output:**

// <br>

//     4
/*
let student = {
        name: 'Ariana Grande',
        age: 21,
        city: 'Gaibandha',
        isStudent: true
    };
    console.log(student);

    const key = Object.keys(student);

    console.log(key.length);
*/

//-------------------

// ### Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`
// **Input:**
// <br>
// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };
// **Output:**
// <br>
//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
// const key =Object.keys(myObject);
// const value = Object.values(myObject);

// for(let i=0; i<key.length; i++){
//     console.log("Key:" ,key[i],"|","type:" ,typeof key[i]);
// }

// for(let j=0; j<value.length; j++){
//     console.log("type:" ,typeof value[j]);
// }

for(key in myObject){
    console.log("Key:" ,key,"|","type:" ,typeof myObject[key]);
}

