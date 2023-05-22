const body = document.body;
const image = document.querySelector(".main");
const image2 = document.querySelector(".main2");
const span = document.querySelector("span");
const coffeName = document.querySelector(".coffeName");
const coffeeBean = document.querySelector(".coffeeBean");
const text = document.querySelector("#navText");
const text2 = document.querySelector(".textSec");

console.log(text);
image.addEventListener("click",()=>{
image.style.display=("none");
image2.style.display=("flex");
span.style.color=("yellow");
coffeeBean.style.display=("none");



});
image2.addEventListener("click",()=>{
image2.style.display=("none");
image.style.display=("flex");
span.style.color=("white");
});

setTimeout(()=>{
  image2.style.display=("none");  
  image.style.display=("flex"); 
  span.style.color=("yellow");
  text.style.display=("none");
  text2.style.display=("block")
},9000);

setTimeout(()=>{
  image2.style.display=("flex");  
  image.style.display=("none");  
},9000);