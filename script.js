function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let newElement = document.createElement("div");
    newElement.innerText = data;
    newElement.style.padding = "10px";
    newElement.style.margin = "5px";
    newElement.style.border = "1px solid black";
    event.target.appendChild(newElement);
}

document.querySelectorAll(".draggable").forEach(item => {
    item.addEventListener("dragstart", drag);
});
