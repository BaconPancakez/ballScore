let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

function homeAdd1(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function guestAdd1(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function homeAdd2(){
    homeScore += 2
    homeEl.textContent = homeScore
}

function guestAdd2(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function homeAdd3(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function guestAdd3(){
    guestScore += 3
    guestEl.textContent = guestScore
}

function reset(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}