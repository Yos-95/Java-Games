const squares = document.querySelectorAll('.sqr')
const moles = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPositions
let currentTime = 60
let timerID = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole') //this will remove the moles from sqaures to start fresh
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)] // getting random values for mole math.random will return a random number between 0 and 1 which is then multiplied by 9 causing the result to be rounded between 0 to 8 never more than 8
    randomSquare.classList.add('mole') //this will add the moles to the random squares

    hitPositions = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPositions) {
            result++
            score.textContent = result
            hitPositions = null
        }
    })
})

function moveMole(){
    
    timerID = setInterval(randomSquare, 1000) //this helps with moving the mole in every 500ms, its like in every 500ms the function randomSquare is called
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countdownTimerID)
        clearInterval(timerID)
        alert('Game Over, Your Final Score is ' + result)
    }

}

let countdownTimerID = setInterval(countDown, 1000)