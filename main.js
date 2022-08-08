let cards = document.getElementById("cards")
let score = document.getElementById("score")
let startBtn = document.getElementById("start")
let messageEl = document.getElementById("message")
let newCard = document.getElementById("new")
let cardList = []
let sum = 0
let inGame = false
let hasWon = false
let message = ""

startBtn.addEventListener("click", ()=>{
    let firstCard = rollIt()
    let secondCard = rollIt()
    inGame = true
    cardList= [firstCard, secondCard]

    sum = cardList[0] + cardList[1]
    displayIt()
})
function rollIt(){
    let randNum = Math.floor(Math.random()*13)+1;

    if(randNum==1){
        return 13;
    }else if(randNum>10){
        return 10;
    }else{
        return randNum;
    }
}
function displayIt(){   
    score.textContent = "Sum: " + sum
    cards.textContent = "Cards: "

    for(let i=0; i<cardList.length; i++){
        cards.textContent += cardList[i] + " "
    }

    if(sum<21){
        message = "Draw a new card to keep on trying?"
    }else if(sum === 21){
        message = "Congrats!! You got BlackJack"
        hasWon = true
    }else if( sum>21){
        message = "You Lost!"
        inGame = false
    }
    messageEl.textContent = message
}

newCard.addEventListener("click", ()=>{
    if(inGame && !(hasWon)){
        let newCard = rollIt() 
        cardList.push(newCard)
        sum += newCard
        displayIt()
    }else{
        alert("Game Over!")
    }
})