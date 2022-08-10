// Callback Hell.
// After 1s first red.
// After 3s second blue.
// After 2s third green.

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     first.style.color = "red";
//   }, 1000);
//   setTimeout(() => {
//     second.style.color = "blue";
//   }, 3000);
//   setTimeout(() => {
//     third.style.color = "green";
//   }, 2000);
// });

// In sequence.

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "blue";
      setTimeout(() => {
        third.style.color = "green";
      }, 2000);
    }, 3000);
  }, 1000);
});

/*The above functionality works well but its harder to understand,
read and change the code. The chances of getting error is very high.
This type of functionalityis knows as Callback Hell.*/
