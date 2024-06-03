const container = document.getElementById("container")
for (i = 0; i <= 15; i++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    container.append(cell);
}