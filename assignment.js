//Code 1: kilometertoMeter
function kilometertoMeter(kilometer){
    var Meter;
    if (kilometer > 0){
    var Meter =kilometer*1000; //1 kilometer = 1000 Meter
}
else{
    console.log("Meter cannot be negative");
}
    return Meter;
}
var result = kilometertoMeter(5);
console.log(result);

//Code 2 :budgetCalculator
function budgetCalculator(watch,phone,laptop){
    var totalbudget;
   if (watch < 0 || phone < 0 || laptop < 0){
    console.log("budget cannot be negative");
   }
else{
    totalbudget= watch*50+phone*100+laptop*500;
}
return totalbudget;
}
var result = budgetCalculator(6,5,4);
console.log(result);

//Code 3: hotelCost
function hotelCost(days){
    var cost;
    if(days>=0 && days<=10){
        cost=days*100;
    }
    else if (days>10 && days<=20){
        cost=10*100+(days-10)*80;
    }
    else if(days>20){
        cost=10*100+10*80+(days-20)*50;//over 20 days,the cost is 50
    }
    else{
        console.log("hotelCost cannot be negative")
    }
    return cost;
}
var totalcost= hotelCost(71);
console.log(totalcost);

//Code 4:megaFriend
function megaFriend(friendsArray) {
    var largestFriendName = '';
    if (friendsArray.length == 0 || typeof (friendsArray) != 'object') {
        console.log("Invalid Name");
    }
    else {
        var largestFriendCharNum = 0;
        for (i = 0; i < friendsArray.length; i++) {
            var char = friendsArray[i];
            var friendsCharCount = char.length;
            if (friendsCharCount > largestFriendCharNum) {
                largestFriendCharNum = friendsCharCount;
                largestFriendName = char;
            }
        }
    }
    return largestFriendName;
}
var result= megaFriend(["Asif","Ria","Ashfaq","Sweet"]);
console.log(result);