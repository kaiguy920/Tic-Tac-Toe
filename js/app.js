const tttBoard = document.querySelector('#ttt')
const r1c1 = document.querySelector('#r1c1')
const r1c2 = document.querySelector('#r1c2')
const r1c3 = document.querySelector('#r1c3')
const r2c1 = document.querySelector('#r2c1')
const r2c2 = document.querySelector('#r2c2')
const r2c3 = document.querySelector('#r2c3')
const r3c1 = document.querySelector('#r3c1')
const r3c2 = document.querySelector('#r3c2')
const r3c3 = document.querySelector('#r3c3')
const reset = document.querySelector('#reset')
const playerOne = document.querySelector('#playerOne')
const playerTwo = document.querySelector('#playerTwo')
const container = document.querySelectorAll('#container')
const squares = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3]


// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
r1c1.addEventListener('click', function () {
    if (r1c1.textContent === "") {
        r1c1.textContent = "X"
    } else if (r1c1.textContent === "X") {
        r1c1.textContent = "O"
    } else {
        r1c1.textContent = ""
    }
})
r1c2.addEventListener('click', function () {
    if (r1c2.textContent === "") {
        r1c2.textContent = "X"
    } else if (r1c2.textContent === "X") {
        r1c2.textContent = "O"
    } else {
        r1c2.textContent = ""
    }
})
r1c3.addEventListener('click', function () {
    if (r1c3.textContent === "") {
        r1c3.textContent = "X"
    } else if (r1c3.textContent === "X") {
        r1c3.textContent = "O"
    } else {
        r1c3.textContent = ""
    }
})
r2c1.addEventListener('click', function () {
    if (r2c1.textContent === "") {
        r2c1.textContent = "X"
    } else if (r2c1.textContent === "X") {
        r2c1.textContent = "O"
    } else {
        r2c1.textContent = ""
    }
})
r2c2.addEventListener('click', function () {
    if (r2c2.textContent === "") {
        r2c2.textContent = "X"
    } else if (r2c2.textContent === "X") {
        r2c2.textContent = "O"
    } else {
        r2c2.textContent = ""
    }
})
r2c3.addEventListener('click', function () {
    if (r2c3.textContent === "") {
        r2c3.textContent = "X"
    } else if (r2c3.textContent === "X") {
        r2c3.textContent = "O"
    } else {
        r2c3.textContent = ""
    }
})

r3c3.addEventListener('click', function () {
    if (r3c3.textContent === "") {
        r3c3.textContent = "X"
    } else if (r3c3.textContent === "X") {
        r3c3.textContent = "O"
    } else {
        r3c3.textContent = ""
    }
})
r3c2.addEventListener('click', function () {
    if (r3c2.textContent === "") {
        r3c2.textContent = "X"
    } else if (r3c2.textContent === "X") {
        r3c2.textContent = "O"
    } else {
        r3c2.textContent = ""
    }
})
r3c1.addEventListener('click', function () {
    if (r3c1.textContent === "") {
        r3c1.textContent = "X"
    } else if (r3c1.textContent === "X") {
        r3c1.textContent = "O"
    } else {
        r3c1.textContent = ""
    }
})
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
const addX = () => {

}

const addY = () => {

}
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.

const resetBoard = () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}
reset.addEventListener('click', resetBoard)

// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.



// style added
reset.addEventListener('mouseover', function () {
    reset.style.color = 'gray';
})
reset.addEventListener('mouseout', function () {
    reset.style.color = 'white';
})
