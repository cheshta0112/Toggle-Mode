const toggleBtn = document.querySelector(".toggle");
const body = document.querySelector("body");
let flag = true;
toggleBtn.addEventListener("click", function () {
  flag = !flag;
  toggleBtn.classList.toggle("active");
  if (flag) {
    body.style.background = "white";
    body.style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
});
