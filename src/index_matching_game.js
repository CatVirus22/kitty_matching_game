let checkbox1 = document.querySelector("#box1");
let checkbox2 = document.querySelector("#box2");
let checkbox3 = document.querySelector("#box3");

checkbox1.onclick = function () {
  if (checkbox1.checked === true) {
    checkbox1.disabled = "true";
  }
};

checkbox2.onclick = function () {
  if (checkbox2.checked === true) {
    checkbox2.disabled = "true";
  }
};

checkbox3.onclick = function () {
  if (checkbox3.checked === true) {
    checkbox3.disabled = "true";
  }
};
function resetBox() {
  document.querySelector("#checkboxes").reset();

  checkbox1.disabled = false;
  checkbox1.checked = false;

  checkbox2.disabled = false;
  checkbox2.checked = false;

  checkbox3.disabled = false;
  checkbox3.checked = false;
}
