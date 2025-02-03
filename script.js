var list = document.getElementById("list");


function add() {
    var text = document.getElementById("text").value;
    if (text === "") {
        alert("Please enter a task");
    }
    else {
        var add = document.createElement("div");
        add.classList.add("list-item");
        add.innerHTML = `${text}
        <button class='delete' onclick='del(this)' type="button">X</button>`;
        document.getElementById("text").value = "";
        list.appendChild(add);
    }
}

function del(e) {
    e.parentNode.remove();
}