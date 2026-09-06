// classic way
// const startingMsg = document.getElementById("startingMsg");
// console.log(startingMsg);

// const allH2 = document.getElementsByTagName("h2");
// console.log(allH2);

// const allInput = document.getElementsByTagName("input");
// console.log(allInput);

// modern way
const startingMsg = document.querySelector("#startingMsg");
console.log(startingMsg.innerHTML);
console.log(startingMsg.textContent);
startingMsg.textContent = "Hello";

console.log(startingMsg.getAttribute("id"));

const img = document.querySelector("#img");
console.log(img.getAttribute("src"));
img.setAttribute(
  "src",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
);
console.log(img.hasAttribute("alt"));
img.alt = "this is image";
img.style.height = "500px";

const paragaph = document.querySelector(".paragaph");
console.log(paragaph);

const submit = document.querySelector("#submit");
console.log(submit);

const allInput = document.querySelectorAll("input");
console.log(allInput);
