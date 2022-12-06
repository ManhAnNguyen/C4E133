//tạo thẻ
//1 : createElement -> tạo thẻ
//2 : cho 1 content
//3 : appendChild

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  //1
  const h1 = document.createElement("h1");
  //2
  h1.innerHTML = "Hello World";
  //3
  document.querySelector("body").appendChild(h1);
});
