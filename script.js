
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const title = document.getElementById('title')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('q-num')
const questionNum = document.getElementById('q')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})



let shuffledFood,currentQuestionIndex
let currentScore = 0
let resLength

function foodLength(){
    resLength = restaurants.length
}

function startGame(){
    title.classList.add('hide')
    startButton.classList.add('hide')
    shuffledFood = restaurants.sort(() => Math.random()-.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    foodLength()
    setNextQuestion()
    nextButton.classList.remove('hide')
}

function setNextQuestion(){
    if (currentQuestionIndex>=resLength){
        startGame()
    }else{
        showQuestion(shuffledFood[currentQuestionIndex])
    }
}


function resetState(){
    nextButton.classList.add('hide')
}


function showQuestion(question){
    questionElement.innerText = "Let's go to: " + question + "!"
}

const restaurants = 
    ["A&W", "Booster Juice", "Burger Baron", "Captain Submarine", "Chez Ashton", "Coffee Time", "Country Style", "Extreme Pita", "Freshii", "Fryer's", "Harvey's", "Hero Certified Burgers", "King of Donair", "La Belle Province", "Lafleur Restaurants", "Mary Brown's", "Mr. Sub", "New York Fries", "Pita Pit", "Pizza Pizza", "Robin's Donuts", "Tim Hortons", "Valentine", "White Spot", "Yogen Fr\u00fcz"]
