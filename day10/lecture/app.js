// const form = document.querySelector("#form");
// const inputName = document.querySelector("#name");
// const inputPass = document.querySelector("#password");

// //form -> submit
// alert("dasd");
// form.addEventListener("submit", (e) => {
//   //chan reload form
//   e.preventDefault();
//   console.log(inputName.value);
//   console.log(inputPass.value);
// });

const arr = [9, 4, 1, 3, 4, 5, 6];

for (let i = 0; i <= arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let tempMin = arr[minIndex];

    arr[minIndex] = arr[i];
    arr[i] = tempMin;
  }

  console.log(arr);
}
