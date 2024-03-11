

// let myAge = 26
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let breakPoints = 50
// breakPoints = breakPoints + 50
// breakPoints = breakPoints - 75
// breakPoints = breakPoints + 45


// console.log(breakPoints)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLap(){

//    let total = lap1 + lap2 + lap3
//    console.log(total)
// }

// totalLap()


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}
save()



// 1. Grab the save-el paragrah and store it in a variable called saveEl

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph



// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page



// Render the welcome message using welcomeEl.innerText






let welcomeEl = document.getElementById("welcome-el")

let newName = "Queensley Iniedu"
let greetings = "Welcome back "

let welcomeMessage = greetings + newName

 welcomeEl.innerText = welcomeMessage 





