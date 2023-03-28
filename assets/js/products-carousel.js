let margin = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--margin"))
let elements = document.getElementsByClassName("carousel")

function getScrollDelta(pane) {
    return pane.querySelector(".card").offsetWidth + margin * 2
}

for (let i = 1; i <= elements.length; i++) {
    let carousel = elements[i - 1]
    let arrowLeft = carousel.querySelector("#arrow-left")
    let arrowRight = carousel.querySelector("#arrow-right")
    let pane = carousel.querySelector("#carousel-pane")
    let entryCount = parseInt(pane.dataset.entryCount)

    for (let cardIndex = 1; cardIndex <= entryCount; cardIndex++) {
        let styleElement = document.createElement("style")
        styleElement.innerText = `
            .card:nth-child(${cardIndex}) {
                position: relative;
                animation-name: card-appearance;
                animation-duration: 1s;
                left: ${500 * cardIndex}px;
                top: ${50 * cardIndex}px;
                animation-timing-function: ease;
                animation-fill-mode: forwards;
            }
        `
        carousel.appendChild(styleElement)
    }

    arrowRight.addEventListener("click", (event) => {
        let currentEntry = parseInt(pane.dataset.currentEntry) + 1
        if (currentEntry >= entryCount)
            currentEntry = 0

        pane.dataset.currentEntry = currentEntry.toString()
        pane.style.transform = "translateX(" + currentEntry * -getScrollDelta(pane) + "px)"
    })

    arrowLeft.addEventListener("click", (event) => {
        let currentEntry = parseInt(pane.dataset.currentEntry) - 1
        if (currentEntry < 0)
            currentEntry = entryCount - 1

        pane.dataset.currentEntry = currentEntry.toString()
        pane.style.transform = "translateX(" + currentEntry * -getScrollDelta(pane) + "px)"
    })
}
