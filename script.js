const Hour = document.querySelector("#Hour");
const Minute = document.querySelector("#Minute");
const Second = document.querySelector("#Second");
const M = document.querySelector("#M");
const Day = document.querySelector("#day");

function myTime() {
  let myDate = new Date();
  let hr;
  let min =
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
  let sec =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
  let m = myDate.getHours() >= 12 ? "PM" : "AM";

  if (myDate.getHours() == 0) {
    hr = 12;
  } else if (myDate.getHours() > 12) {
    hr = myDate.getHours() - 12;
  } else {
    hr = myDate.getHours();
  }

  Hour.innerHTML = hr;
  Minute.textContent = min;
  Second.textContent = sec;
  M.textContent = m;

  let myDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let myMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepetember",
    "October",
    "November",
    "December",
  ];
  let mon = myMonth[myDate.getMonth()] + " " + myDate.getDate();
  Day.textContent = myDay[myDate.getDay()] + ", ";
  const Span = document.createElement("span");
  Span.innerHTML = mon;
  Day.appendChild(Span);
}
myTime();

setInterval(() => {
  myTime();
}, 1000);
