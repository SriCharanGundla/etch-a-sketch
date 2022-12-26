let container = document.createElement("div");
container.classList.add("container");
container.style.gridTemplateColumns = "repeat(16, 1fr)";

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let sqr = document.createElement("div");
    sqr.classList.add("sqrdiv");
    container.appendChild(sqr);
    sqr.addEventListener("mouseenter", function () {
      sqr.style.backgroundColor = "blue";
    });
    /*sqr.addEventListener("mouseleave", function () {
      sqr.style.backgroundColor = "rgb(29, 175, 185)";
    });*/
  }
}

let button = document.createElement("button");
button.textContent = "New Grid";

document.body.appendChild(button);

document.body.appendChild(container);

button.addEventListener("click", newGrid);

function newGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  let value = prompt("Enter a number less than 100");
  if (value > 100) {
    alert("Please enter a number less than 100");
    return;
  }

  container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  let v1 = Math.floor(Math.random() * 255);
  let v2 = Math.floor(Math.random() * 255);
  let v3 = Math.floor(Math.random() * 255);
  for (i = 0; i < value; i++) {
    for (j = 0; j < value; j++) {
      let sqr = document.createElement("div");
      sqr.classList.add("sqrdiv");
      container.appendChild(sqr);
      sqr.addEventListener("mouseenter", function () {
        sqr.style.backgroundColor = `rgb(${v1}, ${v2}, ${v3})`;
      });
      /*sqr.addEventListener("mouseleave", function () {
        sqr.style.backgroundColor = "rgb(29, 175, 185)";
      });*/
    }
  }
  document.body.appendChild(container);
}
