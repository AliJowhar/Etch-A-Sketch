"use strict";
const board = document.querySelector(".board");
const blackBtn = document.querySelector(".black");

//generate board
function makeRows(rows, cols) {
  board.style.setProperty("--grid-rows", rows);
  board.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    board.appendChild(cell).className = "grid-item";

    blackBtn.addEventListener("click", () => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      });
    });
  }
}

makeRows(8, 8);

//black hover effect
