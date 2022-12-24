// billVal = 1200;

// peopleNumber = 9;

// totalled = (billVal * 15) / 100;

// // console.log(totalled);

// tipPerPerson = totalled / peopleNumber;

// // console.log(tipPerPerson);

// sharedAmount = billVal / peopleNumber;

// totalPerPerson = sharedAmount + tipPerPerson;

// console.log(totalPerPerson);

var bill = Number(document.getElementById("input").value);
var customTip = document.getElementById("custom-tip").value;
var peopleNumber = document.getElementById("people-number").value;

// 1. Bill value times '%' tip that is custom out of 100 and divided by the number of people to get the tip amount per person.

// 2. Total  amount per peron with cosy sharing is bill divided by number of people added to the tip per person.
var tipValue = (bill * (customTip / 100)) / peopleNumber;
var totalled = bill / peopleNumber + tipValue;

//  Log to console to verify calculation was successful.
console.log(totalled);
document.getElementById("num-per-person").innerHTML = `${tipValue.toFixed(1)}`;
document.getElementById("no-total").innerHTML = `${totalled.toFixed(1)}`;
