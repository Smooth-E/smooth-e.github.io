let margin = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--margin"))
let elements = document.getElementsByClassName("carousel")

function getScrollDelta(pane) {
    return pane.querySelector(".card").offsetWidth + margin * 2
}

for (let i = 0; i < elements.length; i++) {
    let carousel = elements[i]
    let arrowLeft = carousel.querySelector("#arrow-left")
    let arrowRight = carousel.querySelector("#arrow-right")
    let pane = carousel.querySelector("#carousel-pane")
    let entryCount = parseInt(pane.dataset.entryCount)

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
