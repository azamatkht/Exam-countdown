let noDaysContainer = document.getElementById("no_days")
let noHoursContainer = document.getElementById("no_hours")
let noMinutesContainer = document.getElementById("no_minutes")
let noSecondsContainer = document.getElementById("no_seconds")

let oopDaysContainer = document.getElementById("oop_days")
let oopHoursContainer = document.getElementById("oop_hours")
let oopMinutesContainer = document.getElementById("oop_minutes")
let oopSecondsContainer = document.getElementById("oop_seconds")

function noCountdown(){
   let cw = new Date("November 18, 2024 23:59:59")
   let currentTime = new Date()

   let diff = cw - currentTime

   let days = Math.floor(diff / (1000 * 60 * 60 * 24))
   let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
   let seconds = Math.floor((diff % (1000 * 60)) / 1000)


   noDaysContainer.innerHTML = days + "<span> Days</span>"
   noHoursContainer.innerHTML = hours + "<span> Hours</span>"
   noMinutesContainer.innerHTML = minutes + "<span> Minutes</span>"
   noSecondsContainer.innerHTML = seconds + "<span> Seconds</span>"
}

function oopCountdown(){
   let cw = new Date("November 25, 2024 23:59:59")
   let currentTime = new Date()

   let diff = cw - currentTime

   let days = Math.floor(diff / (1000 * 60 * 60 * 24))
   let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
   let seconds = Math.floor((diff % (1000 * 60)) / 1000)


   oopDaysContainer.innerHTML = days + "<span> Days</span>"
   oopHoursContainer.innerHTML = hours + "<span> Hours</span>"
   oopMinutesContainer.innerHTML = minutes + "<span> Minutes</span>"
   oopSecondsContainer.innerHTML = seconds + "<span> Seconds</span>"
}

setInterval(noCountdown, 1000)
setInterval(oopCountdown, 1000)