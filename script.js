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
img.style.width = "700px";

const paragaph = document.querySelector(".paragaph");
console.log(paragaph);

const submit = document.querySelector("#submit");
console.log(submit);

const allInput = document.querySelectorAll("input");
console.log(allInput);

//
const alertBtn = document.getElementById("img-btn");
alertBtn.addEventListener("click", () => {
  img.src =
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
});

const myInput = document.getElementById("my-input");
myInput.addEventListener("keypress", (event) => {
  // console.log(myInput.value);
  // console.log(event.target);
  console.log(event.type);
  const inputValue = event.target.value;
  localStorage.setItem("inputValue", inputValue);
  const msg = document.getElementById("msg");
  msg.innerText = localStorage.getItem(`inputValue`);
});

console.log(document);
console.log(window);
console.log(location);
console.log(location.href);
console.log(history);

const Reload = document.getElementById("Reload");
Reload.addEventListener("click", () => {
  location.reload();
});

// set data in browser local storage
localStorage.setItem("name", "Hridoy");
localStorage.setItem("age", 20);

const getName = localStorage.getItem("name");
const getAge = localStorage.getItem("age");

const myName = document.getElementById("nameData");
const myAge = document.getElementById("ageData");

myName.innerText = `Name : ${getName}`;
myAge.innerText = `Age : ${getAge}`;
