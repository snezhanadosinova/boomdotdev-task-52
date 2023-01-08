import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  document.body.addEventListener("click", () => {
    const length = 5;
    let count = 0;

    for (let i = 0; i < length; i++) {
      let element = document.createElement("article");

      count += 1;

      let text = "sample text";
      element.classList.add("message");
      element.innerHTML = text;

      document.body.appendChild(element);
    }
  });
});
