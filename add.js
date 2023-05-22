const body = document.body;
const image = document.querySelector(".main");
const image2 = document.querySelector(".main2");
const span = document.querySelector("span");
const coffeName = document.querySelector(".coffeName");
const coffeeBean = document.querySelector(".coffeeBean");
console.log(span)
image.addEventListener("click",()=>{
image.style.display=("none");
image2.style.display=("flex");
span.style.color=("yellow");
coffeeBean.style.display=("none")
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
},7000);
setTimeout(()=>{
  image.style.display=("none");  
  image2.style.display=("flex");
  span.style.color=("yellow");  
},7000);
setTimeout(()=>{
  image2.style.display=("flex");  
  image.style.display=("none");  
},7000);