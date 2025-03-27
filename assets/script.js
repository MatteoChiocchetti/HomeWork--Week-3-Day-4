const btn = document.getElementById("btn");
const cellElement = document.getElementById("cells");

for (let i = 1; i <= 90; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = i;
  cellElement.appendChild(cell);
}
