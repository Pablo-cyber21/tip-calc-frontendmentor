// billVal = 1200;

// peopleNumber = 9;

// totalled = (billVal * 15) / 100;

// // console.log(totalled);

// tipPerPerson = totalled / peopleNumber;

// // console.log(tipPerPerson);

// sharedAmount = billVal / peopleNumber;

// totalPerPerson = sharedAmount + tipPerPerson;

// console.log(totalPerPerson);

var customTip = document.getElementById("custom-tip").value;
var btn10 = document.querySelector("#btn10");
var btn5 = document.querySelector("#btn5");
var btn25 = document.querySelector("#btn25");
var btn50 = document.querySelector("#btn50");
var btn15 = document.querySelector("#btn15");

// // 1. Bill value times '%' tip that is custom out of 100 and divided by the number of people to get the tip amount per person.
btn5.addEventListener("click", () => {
  var bill = Number(document.getElementById("input").value);
  var peopleNumber = document.getElementById("people-number").value;
  // // 2. Total  amount per peron with cosy sharing is bill divided by number of people added to the tip per person.

  var tipPercent = 5 / 100;
  var tipValue = (bill * tipPercent) / peopleNumber;
  var totalled = bill / peopleNumber + tipValue;

  document.getElementById("num-per-person").innerHTML = `${tipValue.toFixed(
    1
  )}`;
  document.getElementById("no-total").innerHTML = `${totalled.toFixed(1)}`;
});

btn25.addEventListener("click", () => {
  var bill = Number(document.getElementById("input").value);
  var peopleNumber = document.getElementById("people-number").value;
  var tipPercent = 25 / 100;
  var tipValue = (bill * tipPercent) / peopleNumber;
  var totalled = bill / peopleNumber + tipValue;

  document.getElementById("num-per-person").innerHTML = `${tipValue.toFixed(
    1
  )}`;
  document.getElementById("no-total").innerHTML = `${totalled.toFixed(1)}`;
});

btn15.addEventListener("click", () => {
  var bill = Number(document.getElementById("input").value);
  var peopleNumber = document.getElementById("people-number").value;
  var tipPercent = 15 / 100;
  var tipValue = (bill * tipPercent) / peopleNumber;
  var totalled = bill / peopleNumber + tipValue;

  document.getElementById("num-per-person").innerHTML = `${tipValue.toFixed(
    1
  )}`;
  document.getElementById("no-total").innerHTML = `${totalled.toFixed(1)}`;
});

btn50.addEventListener("click", () => {
  var bill = Number(document.getElementById("input").value);
  var peopleNumber = document.getElementById("people-number").value;
  var tipPercent = 50 / 100;
  var tipValue = (bill * tipPercent) / peopleNumber;
  var totalled = bill / peopleNumber + tipValue;

  document.getElementById("num-per-person").innerHTML = `${tipValue.toFixed(
    1
  )}`;
  document.getElementById("no-total").innerHTML = `${totalled.toFixed(1)}`;
});

btn10.addEventListener("click", () => {
  var bill = Number(document.getElementById("input").value);
  var peopleNumber = document.getElementById("people-number").value;
  var tipPercent = 10 / 100;
  var tipValue = (bill * tipPercent) / peopleNumber;
  var totalled = bill / peopleNumber + tipValue;

  document.getElementById("num-per-person").innerHTML = `${tipValue.toFixed(
    1
  )}`;
  document.getElementById("no-total").innerHTML = `${totalled.toFixed(1)}`;
});
