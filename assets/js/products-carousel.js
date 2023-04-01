let margin = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--margin"))
let elements = document.getElementsByClassName("carousel")

function getScrollDelta(pane) {
    return pane.querySelector(".card").offsetWidth + margin * 2
}

for (let i = 1; i <= elements.length; i++) {
    let carousel = elements[i - 1]
    let pane = carousel.querySelector("#carousel-pane")
    let cards = carousel.querySelectorAll(".card")
    let greatestHeight = 0

    for (let cardIndex = 1; cardIndex <= cards.length; cardIndex++) {
        let styleElement = document.createElement("style")
        styleElement.innerText = `
            .container-wrapper:nth-child(${cardIndex}) {
                position: relative;
                animation-name: card-appearance;
                animation-duration: 1s;
                transform: translate(${500 * cardIndex}px, ${35 * cardIndex}px);
                animation-timing-function: ease;
                animation-fill-mode: forwards;
            }
        `
        carousel.appendChild(styleElement)

        let height = cards[i - 1].offsetHeight
        if (height > greatestHeight)
            greatestHeight = height
    }

    for (let index = 0; index < cards.length; index++)
        cards[index].style.height = greatestHeight - margin * 2 + 'px'

    let arrowRight = carousel.querySelector("#arrow-right")
    arrowRight.addEventListener("click", (event) => {
        let currentEntry = parseInt(pane.dataset.currentEntry) + 1
        if (currentEntry >= cards.length)
            currentEntry = 0

        pane.dataset.currentEntry = currentEntry.toString()
        pane.style.transform = "translateX(" + currentEntry * -getScrollDelta(pane) + "px)"
    })

    let arrowLeft = carousel.querySelector("#arrow-left")
    arrowLeft.addEventListener("click", (event) => {
        let currentEntry = parseInt(pane.dataset.currentEntry) - 1
        if (currentEntry < 0)
            currentEntry = cards.length - 1

        pane.dataset.currentEntry = currentEntry.toString()
        pane.style.transform = "translateX(" + currentEntry * -getScrollDelta(pane) + "px)"
    })
}
