// classic way
const startingMsg = document.getElementById("startingMsg");
console.log(startingMsg);

const allH2 = document.getElementsByTagName("h2");
console.log(allH2);

// const allInput = document.getElementsByTagName("input");
// console.log(allInput);





// modern way
const paragaph = document.querySelector(".paragaph");
console.log(paragaph);

const submit = document.querySelector("#submit");
console.log(submit);

const allInput = document.querySelectorAll("input");
console.log(allInput);
