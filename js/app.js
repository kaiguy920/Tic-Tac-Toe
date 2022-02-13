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
const container = document.querySelectorAll('#container')
const Player1 = document.querySelector('#p1')
const Player2 = document.querySelector('#p2')
const squares = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3]
let currentPlayer = 1
let currentSquare = ''
const message = document.querySelector('#message')
const winner = document.querySelector('#winner')

// handleClick
// checks current player then either calls addX or addO passing in square id
// updates current user 

const handleClick = () => {
    if (currentPlayer === 1) {
        message.innerText = "Player Two's Turn"
        addX()
        currentPlayer = 2
    } else {
        message.innerText = "Player One's Turn"
        addO()
        currentPlayer = 1
    }
}

// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
r1c1.addEventListener('click', function () {
    if (!r1c1.textContent) {
        currentSquare = r1c1
        handleClick()
    }
})

r1c2.addEventListener('click', function () {
    if (!r1c2.textContent) {
        currentSquare = r1c2
        handleClick()
    }
})


r1c3.addEventListener('click', function () {
    if (!r1c3.textContent) {
        currentSquare = r1c3
        handleClick()
    }
})

r2c1.addEventListener('click', function () {
    if (!r2c1.textContent) {
        currentSquare = r2c1
        handleClick()
    }
})

r2c2.addEventListener('click', function () {
    if (!r2c2.textContent) {
        currentSquare = r2c2
        handleClick()
    }
})

r2c3.addEventListener('click', function () {
    if (!r2c3.textContent) {
        currentSquare = r2c3
        handleClick()
    }
})

r3c3.addEventListener('click', function () {
    if (!r3c3.textContent) {
        currentSquare = r3c3
        handleClick()
    }
})

r3c2.addEventListener('click', function () {
    if (!r3c2.textContent) {
        currentSquare = r3c2
        handleClick()
    }
})

r3c1.addEventListener('click', function () {
    if (!r3c1.textContent) {
        currentSquare = r3c1
        handleClick()
    }
})
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
const addX = () => {
    currentSquare.textContent = "X"
    checkWinX()
    checkWinO()
}
const addO = () => {
    currentSquare.textContent = "O"
    checkWinX()
    checkWinO()
}
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.

const resetBoard = () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
    Player1.style.border = ""
    Player2.style.border = ""
    winner.innerText = ""
    message.innerText = "Player One's Turn"
    currentPlayer = 1
}
reset.addEventListener('click', resetBoard)

// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

const checkWinX = () => {
    if (r1c1.textContent === "X" && r1c2.textContent === "X" && r1c3.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r2c1.textContent === "X" && r2c2.textContent === "X" && r2c3.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r3c1.textContent === "X" && r3c2.textContent === "X" && r3c3.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r1c1.textContent === "X" && r2c1.textContent === "X" && r3c1.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r1c2.textContent === "X" && r2c2.textContent === "X" && r3c2.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r1c3.textContent === "X" && r2c3.textContent === "X" && r3c3.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r1c1.textContent === "X" && r2c2.textContent === "X" && r3c3.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else if (r3c1.textContent === "X" && r2c2.textContent === "X" && r1c3.textContent === "X") {
        Player1.style.border = '3px solid green'
        winner.innerText = "Player One Wins!"
    } else {
        checkForDraw()
    }
}

const checkWinO = () => {
    if (r1c1.textContent === "O" && r1c2.textContent === "O" && r1c3.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r2c1.textContent === "O" && r2c2.textContent === "O" && r2c3.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r3c1.textContent === "O" && r3c2.textContent === "O" && r3c3.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r1c1.textContent === "O" && r2c1.textContent === "O" && r3c1.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r1c2.textContent === "O" && r2c2.textContent === "O" && r3c2.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r1c3.textContent === "O" && r2c3.textContent === "O" && r3c3.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r1c1.textContent === "O" && r2c2.textContent === "O" && r3c3.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else if (r3c1.textContent === "O" && r2c2.textContent === "O" && r1c3.textContent === "O") {
        Player2.style.border = '3px solid green'
        winner.innerText = "Player Two Wins!"
    } else {
        checkForDraw()
    }
}

const checkForDraw = () => {
    let draw = true
    for (let i = 0; i < squares.length; i++) {
        if (!squares[i].textContent) {
            draw = false
        }
    }
    if (draw) {
        winner.innerText = "It's a draw"
    }
}

// style added
reset.addEventListener('mouseover', function () {
    reset.style.color = 'gray';
})
reset.addEventListener('mouseout', function () {
    reset.style.color = 'white';
})
