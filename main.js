let color = "black";
let boardColor = "white";
let click = false;


document.addEventListener("DOMContentLoaded", () => {
    createBoard(32);
    console.log("hi")

    document.querySelector("body").addEventListener("click", function (e) {
        console.log(e);
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Now you can Draw";
            } else {
                draw.innerHTML = "You are not allowed to Draw"
            }
        }
    });
})


function createBoard(size) {
    if (size > 100 || size < 0) {
        alert("Invalid Size: Must be greater than 0 and less than 100.")
    }

    let board = document.querySelector(".board");
    board.style.border = "1px solid black"
    board.style.backgroundColor = "white";
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        board.insertAdjacentElement("beforeend", square);
        
        square.addEventListener("mouseover", colorDiv);
    }
}


function changeSize(input) {
    createBoard(input);
}

function reset() {
    createBoard(32);
}


function colorDiv() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        } else {
            this.style.backgroundColor = "black"
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function changeBoardColor(colorChoice) {
    boardColor = colorChoice;

    let board = document.querySelector(".board");
    board.style.backgroundColor = boardColor;

}