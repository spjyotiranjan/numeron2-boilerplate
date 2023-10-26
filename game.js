// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let number1Box = document.getElementById("number1")
let number2Box = document.getElementById("number2")

let num1;
let num2;

// let num1 = Math.round(Math.random()*100)
// let num2 = Math.round(Math.random()*100)

// number1Box.textContent = num1
// number2Box.textContent = num2

// Iteration 3: Creating variables required to make the game functional

let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
let score = 0
let timerBox = document.getElementById("timer")
let interval;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3Box = document.getElementById("number3")
let num3

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    num1 = Math.round(Math.random()*100)
    num2 = Math.round(Math.random()*100)

    number1Box.textContent = num1
    number2Box.textContent = num2

    let operator = Math.ceil(Math.random()*5)

    switch(operator){
        case 1 : num3 = num1+num2;break;
        case 2 : num3 = num1-num2;break;
        case 3 : num3 = num1*num2;break;
        case 4 : num3 = Math.floor(num1/num2);break;
        case 5 : num3 = num1%num2;break;
    }
    number3Box.textContent = num3
    
    startTimer()
}

// Iteration 6: Making the Operators (button) functional
function gameOver(){
    window.location.href = `./gameover.html?score=${score}`
}
randomise()
plus.onclick=()=>{
    if (num3==num2+num1) {
        score++
        randomise()
    }else{
        gameOver()
    }
}
minus.onclick=()=>{
    if (num3==num1-num2) {
        score++
        randomise()
    }else{
        gameOver()
    }
}
mul.onclick=()=>{
    if (num3==num2*num1) {
        score++
        randomise()
    }else{
        gameOver()
    }
}
divide.onclick=()=>{
    if (num3==Math.floor(num1/num2)) {
        score++
        randomise()
    }else{
        gameOver()
    }
}
modulus.onclick=()=>{
    if (num3==num1%num2) {
        score++
        randomise()
    }else{
        gameOver()
    }
}

// Iteration 7: Making Timer functional

function startTimer() {
    let time = 20;
    timerBox.textContent = time
    clearInterval(interval)
    interval = setInterval(() => {
        time--
        timerBox.textContent = time
        if (time==0) {
            gameOver()
        }
    }, 1000);
}
