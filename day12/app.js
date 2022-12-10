// import myJson from "./data.json" assert { type: "json" };

// console.log(myJson);

// const data = [
//   {
//     username: "manhan",
//     password: "abc123",
//   },
// ];

// const username = document.getElementById("inputName");
// const password = document.getElementById("inputPassword");
// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const valueUsername = username.value;
//   const valuePassword = password.value;

//   const existingUser = data.find(
//     (el) => el.username === valueUsername && el.password === valuePassword
//   );
//   if (existingUser !== undefined) {
//     alert("Welcome");
//   } else {
//     alert("Information is not correct");
//   }
// });

// const callBtn = document.querySelector("#call-btn");

// callBtn.addEventListener("click", async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   console.log(data);
// });
