
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
["A&W", "Arby's", "Baker's Dozen Donuts", "BarBurrito Canada", "La Belle Province", "Booster Juice", "Burger Baron", "Burger King", "Captain Submarine", "Carl's Jr.", "Chez Ashton", "Chicken Delight", "Chipotle Mexican Grill", "Chick-fil-A", "Cinnabon", "Coffee Time", "Country Style", "Dairy Queen", "Dixie Lee Fried Chicken", "Domino's", "Edo Japan", "Extreme Pita", "Five Guys", "Fryer's", "Greco Pizza", "Harvey's", "Hero Certified Burgers", "Jimmy the Greek", "Jollibee", "KFC", "Krispy Kreme", "Lafleur Restaurants", "Lick's Homeburgers", "Little Caesars", "Manchu Wok", "Mary Brown's", "McDonald's Canada", "Mr. Sub", "Mucho Burrito", "New York Fries", "Orange Julius", "Panda Express", "Papa John's", "Pita Pit", "Pizza Hut", "Popeyes Louisiana Kitchen", "Quiznos", "Robin's Donuts", "Second Cup", "St-Hubert", "Subway", "Swiss Chalet", "Taco Bell", "Taco del Mar", "Taco Time", "Tha\u00ef Express", "Tim Hortons", "Valentine", "Wendy's", "White Spot", "Yogen Früz"]