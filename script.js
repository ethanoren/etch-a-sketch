const container = document.getElementById("container")
function createGrid(num) {
    for (i = 1; i <= num ** 2; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black"
        })
        // cell.addEventListener("mouseleave", () => {
        //     cell.style.backgroundColor = "gray"
        // })
        cell.style.width = (500 / num) + "px";
        cell.style.height = (500 / num) + "px";
        container.append(cell);
    }
}
function destroyCell() {
    cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.remove();
    })
}

console.log(document.getElementById("gridButton"))
newGridButton = document.getElementById("gridButton");
newGridButton.addEventListener("click", () => {
    getGridSize();
});

function getGridSize() {
    var gridLength = +prompt("Enter length of one side of the square")
    if (gridLength > 256) {
        alert("my balls");
        gridLength = 1;
    }
    destroyCell();
    createGrid(gridLength);
}

createGrid(4);