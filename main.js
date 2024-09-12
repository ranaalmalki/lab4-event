
let stopButton = document.getElementById("stopButton")
let stopLight = document.getElementById("stopLight")


stopButton.addEventListener("click",()=>{
    stopLight.style.backgroundColor="red"
 
})

let slowButton = document.getElementById("slowButton")
let slowLight = document.getElementById("slowLight")

slowButton.addEventListener("click",()=>{
    slowLight.style.backgroundColor="yellow"
    stopLight.stopPropagation()
})

let goButton = document.getElementById("goButton")
let goLight = document.getElementById("goLight")

goButton.addEventListener("click",()=>{
    goLight.style.backgroundColor="green"
})