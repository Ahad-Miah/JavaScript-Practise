// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

// Declare an array of 3 tourist destinations
const touristPlace = ['Rangamati','Bandarban','Chottoram']
console.log(touristPlace);

// Add a new tourist destination to tourist array
touristPlace.push('Coxs-Bazar');
console.log(touristPlace);

// Add two more to your array
touristPlace.push('Khagrachari');
touristPlace.push('Barishal');
console.log(touristPlace);

// Remove the last tourist destination you have added
touristPlace.pop();

// display the final array as output
console.log(touristPlace);