const btn = document.getElementById("btn");
const cellElement = document.getElementById("cells");

for (let i = 1; i <= 90; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = i;
  cellElement.appendChild(cell);
}
const clickedBtn = function () {
  let randomNum = Math.floor(Math.random() * 90)+1;
  console.log(randomNum);
  const cells = document.querySelectorAll(".cell");
  cells[randomNum].classList.add("selected");

  console.log(cells[randomNum]);
};
