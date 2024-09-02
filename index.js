const countToDate = new Date().setHours(new Date().getHours() + 192);

setInterval(() => {
    const currentDate = new Date()
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
    flipAllCards(timeBetweenDates)
}, 250)

function flipAllCards(time) {
    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600) % 24
    const days  = Math.floor(time /86400)
  
    flip(document.querySelector("[data-days]"), days);
    flip(document.querySelector("[data-hours]"), hours);
    flip(document.querySelector("[data-minutes]"), minutes);
    flip(document.querySelector("[data-seconds]"), seconds);
  }

function flip(flipCard, newNumber) {
    const formattedNumber = String(newNumber).padStart(2, '0');
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if(newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")

    topHalf.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = formattedNumber

    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = formattedNumber
    })

    topFlip.addEventListener("animationend", e => {
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = formattedNumber
        bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)
}