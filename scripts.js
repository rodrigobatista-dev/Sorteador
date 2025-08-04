function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById("resultado").textContent =
      "Insira valores válidos!";
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("resultado").textContent = result;
}
