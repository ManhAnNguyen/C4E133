//tạo thẻ
//1 : createElement -> tạo thẻ
//2 : cho 1 content
//3 : appendChild

// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   //1
//   const h1 = document.createElement("h1");
//   //2
//   h1.innerHTML = "Hello World";
//   //3
//   document.querySelector("body").appendChild(h1);
// });

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueInput = input.value;
  if (valueInput === "") return alert("Yeu cau nhap du");
  if (valueInput.length < 5) return alert("Todo fai lon hon 5!");
  //1
  const div = document.createElement("div");
  //2
  div.classList.add("todo");
  div.innerHTML = `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    <h1>${valueInput}</h1>
    <h2>X</h2>
  `;
  //3
  document.querySelector("body").appendChild(div);

  input.value = "";
});
