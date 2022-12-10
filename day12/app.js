import dataJson from "./data.json";

const data = [
  {
    username: "manhan",
    password: "abc123",
  },
];

const username = document.getElementById("inputName");
const password = document.getElementById("inputPassword");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueUsername = username.value;
  const valuePassword = password.value;

  const existingUser = data.find(
    (el) => el.username === valueUsername && el.password === valuePassword
  );
  if (existingUser !== undefined) {
    alert("Welcome");
  } else {
    alert("Information is not correct");
  }
});
