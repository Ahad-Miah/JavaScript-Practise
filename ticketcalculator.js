/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age = 6;
var price = 100;
var discount;
if(age < 10 ){
    console.log("Free ticket!")
}
else if(age >=10 && age < 30){
    discount=price* (50/100);
    price=price-discount
    console.log(price);
}
else if(age >= 60){
    discount=price*(15/100);
    price=price-discount;
    console.log(price);
}
else{
    console.log("Regular price")
}