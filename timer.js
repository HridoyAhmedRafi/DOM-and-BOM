// set timer
// const timer = setTimeout(() => {
//   console.log("hello world");
// }, 2000);
// clearTimeout(timer);

// console.log("this is after timer");

// set interval
let countDown = 0;
const interval = setInterval(() => {
  if (countDown === 4) {
    clearInterval(interval);
  }

  countDown++;
  console.log(countDown);
}, 1000);

// live time with set interval
// setInterval(() => {
//   const date = new Date();
//   let time = date.toLocaleTimeString();
//   console.log(time);
// }, 1000);
