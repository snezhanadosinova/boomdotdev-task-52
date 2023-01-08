import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click", (event) => {
    let articleArray = document.getElementsByClassName("message");
    let articleArrayLenght = articleArray.length;

    for (let i = 0; i < articleArrayLenght; i++) {
      articleArray[i].innerHTML = "sample text here";
    }
  });
});
