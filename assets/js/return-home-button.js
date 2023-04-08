buttonHome = document.querySelector("#floating-action-button")
buttonHome.setAttribute("data-state", "floating")

window.onscroll = function (event) {
    let contentHeight = document.querySelector("body").offsetHeight
    console.log(window.scrollY)
    if (window.scrollY + window.innerHeight >= contentHeight)
        buttonHome.setAttribute("data-state", "docked")
    else
        buttonHome.setAttribute("data-state", "floating")
}
