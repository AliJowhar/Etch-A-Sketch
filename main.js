"use strict";
const board = document.querySelector(".board");
const blackBtn = document.querySelector(".black");
const rainbowBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".erase");

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

    rainbowBtn.addEventListener("click", () => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = randomColor();
      });
    });
    eraserBtn.addEventListener("click", () => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "white";
      });
    });
  }
}

// makeRows(8, 8);
makeRows(16, 16);

// Random color generator

//The randomInt() function generates a random number between the range of 0 and 255,
function randomInt(min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
}
