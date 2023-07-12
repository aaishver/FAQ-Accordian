const arrowClick = document.querySelectorAll(".arrow").length;

for (var i = 0; i < arrowClick; i++) {
  let arrowLength = document.querySelectorAll(".arrow")[i];
  arrowLength.addEventListener("click", function () {
    document.querySelector(".answer").classList.toggle("shown");
  });
}
