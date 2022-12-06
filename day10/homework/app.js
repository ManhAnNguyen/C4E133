//queryselector
const textHello = document.querySelector("#text");

textHello.addEventListener("click", (e) => {
  const innerTextContent = textHello.innerHTML;

  if (innerTextContent === "hello") {
    textHello.innerHTML = "bye";
  } else {
    textHello.innerHTML = "hello";
  }
});
