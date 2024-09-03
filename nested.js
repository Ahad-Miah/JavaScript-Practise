/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var myNumber = 81;
var friendsNumber = 80;
if(myNumber > 80){
    if(friendsNumber > 80){
        console.log("LEts go for a lunch");
    }
    else if(friendsNumber < 80 && friendsNumber>=60){
        console.log("Good luck next time.");
    }
    else if(friendsNumber < 60 && friendsNumber>=40){
        console.log("I will not seen your message");
    }
    else if(friendsNumber<40){
        console.log("Sorry brother I block you now");
    }
    else{
        console.log("your number is 80.so it is out of condition")
    }
}
else{
    console.log("I am so sad");
}