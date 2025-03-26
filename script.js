function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);
    
    if (draggedElement) {
        let newElement = draggedElement.cloneNode(true);
        newElement.removeAttribute("id");
        newElement.style.position = "absolute";
        newElement.style.left = event.clientX + "px";
        newElement.style.top = event.clientY + "px";
        document.getElementById("canvas").appendChild(newElement);
    }
}

// Attach drag event to elements dynamically
document.querySelectorAll(".draggable").forEach(item => {
    item.setAttribute("id", "drag-" + Math.random().toString(36).substr(2, 9)); 
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", drag);
});
