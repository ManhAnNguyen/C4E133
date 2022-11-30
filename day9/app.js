// laays element từ dom
// + id, class, tagName

//class
// const buttons = document.getElementsByClassName("button-class");

//tagName
// const buttons = document.getElementsByTagName("button");
// console.log(buttons);

//+id

//DOM

// 1. Lấy element ra
// 2. Gán event

const button = document.getElementById("button-id");

button.addEventListener("click", () => {
  window.location = "about.html";
});
