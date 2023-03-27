let margin = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--margin"))
let elements = document.getElementsByClassName("carousel")

for (let i = 0; i < elements.length; i++) {
    let carousel = elements[i]
    let arrowLeft = carousel.querySelector("#arrow-left")
    let arrowRight = carousel.querySelector("#arrow-right")
    let pane = carousel.querySelector("#carousel-pane")
    let scrollDelta = pane.querySelector(".card").offsetWidth + margin * 2
    let entryCount = parseInt(pane.dataset.entryCount)

    arrowLeft.addEventListener("click", (event) => {
        let currentEntry = parseInt(pane.dataset.currentEntry) + 1
        if (currentEntry >= entryCount)
            currentEntry = 0

        pane.dataset.currentEntry = currentEntry.toString()
        pane.style.transform = "translateX(" + currentEntry * -scrollDelta + "px)"
    })

    arrowRight.addEventListener("click", (event) => {
        let currentEntry = parseInt(pane.dataset.currentEntry) - 1
        if (currentEntry < 0)
            currentEntry = entryCount - 1

        pane.dataset.currentEntry = currentEntry.toString()
        pane.style.transform = "translateX(" + currentEntry * -scrollDelta + "px)"
    })
}
