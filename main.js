
let stopButton = document.getElementById("stopButton")
let stopLight = document.getElementById("stopLight")


stopButton.addEventListener("click",()=>{
    stopLight.style.backgroundColor="red"
    slowLight.style.backgroundColor=""
    goLight.style.backgroundColor=""



})

let slowButton = document.getElementById("slowButton")
let slowLight = document.getElementById("slowLight")

slowButton.addEventListener("click",()=>{
    slowLight.style.backgroundColor="yellow"
    stopLight.style.backgroundColor=""
    goLight.style.backgroundColor=""


    stopLight.stopPropagation()
})

let goButton = document.getElementById("goButton")
let goLight = document.getElementById("goLight")

goButton.addEventListener("click",()=>{
    goLight.style.backgroundColor="green"
    slowLight.style.backgroundColor=""
    stopLight.style.backgroundColor=""

})