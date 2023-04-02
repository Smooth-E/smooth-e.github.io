---
---

// Used to confuse an IDE and not highlight everything in red because of the front matter
console.log("");

let margin = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--margin"))

class ProductsCarousel extends HTMLElement {

    getScrollDelta(pane) {
        return pane.querySelector(".card").offsetWidth + margin * 2
    }

    constructor() {
        super()

        this.innerHTML = `
            <div class="carousel">
    
                <div class="header horizontally-centered top-level-card">
                    <button id="arrow-left" class="arrow rounded-shadow hover-reactive">
                        <img src="/assets/navigation-left.png" alt="Arrow Left"/>
                    </button>
                    <button id="arrow-right" class="arrow rounded-shadow hover-reactive">
                        <img src="/assets/navigation-right.png" alt="Arrow Right"/>
                    </button>
                    <h1>Products</h1>
                    <div class="badge">
                        {{ site.products.size }}<span> in total</span>
                    </div>
                </div>
    
                <div id="carousel-pane"
                     class="horizontally-centered top-level-card no-url-highlighting"
                     data-current-entry="0"
                     data-entry-count="{{ site.products.size }}"
                >
    
                    {% assign sorted_products = site.products |  sort: "latest_release" %}
                    {% for product in sorted_products reversed %}
                        <div class="container-wrapper">
                            <a class="card rounded-shadow hover-reactive container" href="{{ product.url }}">
                                <div class="icon-frame">
                                    <img class="icon" src="{{ product.icon }}" alt="Product Icon"/>
                                </div>
                                <div class="name">{{ product.name }}</div>
                                <div class="description">{{ product.description | markdownify }}</div>
                                <div id="icon-container">
                                    {% for source in product.sources %}
                                        {% assign splitted_source = source |  split: " | " %}
                                        {% assign type = splitted_source.first | strip %}
                                        {% assign slugged_name = type | downcase | slugify: "pretty" %}
                                        <div class="source-badge" data-type="{{ slugged_name }}">
                                            <img src="{{ "/assets/icon-" |  append: slugged_name |  append: ".png" }}"
                                                 alt="{{ slugged_name }}"
                                            />
                                        </div>
                                    {% endfor %}
                                </div>
                            </a>
                        </div>
                    {% endfor %}
    
                </div>
    
            </div>
        `

        let pane = this.querySelector("#carousel-pane")
        let cards = this.querySelectorAll(".card")
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
            this.appendChild(styleElement)

            let height = cards[cardIndex - 1].offsetHeight
            if (height > greatestHeight)
                greatestHeight = height
        }

        for (let index = 0; index < cards.length; index++)
            cards[index].style.height = greatestHeight - margin * 2 + 'px'

        let arrowRight = this.querySelector("#arrow-right")
        arrowRight.addEventListener("click", (event) => {
            let currentEntry = parseInt(pane.dataset.currentEntry) + 1
            if (currentEntry >= cards.length)
                currentEntry = 0

            pane.dataset.currentEntry = currentEntry.toString()
            pane.style.transform = "translateX(" + currentEntry * -this.getScrollDelta(pane) + "px)"
        })

        let arrowLeft = this.querySelector("#arrow-left")
        arrowLeft.addEventListener("click", (event) => {
            let currentEntry = parseInt(pane.dataset.currentEntry) - 1
            if (currentEntry < 0)
                currentEntry = cards.length - 1

            pane.dataset.currentEntry = currentEntry.toString()
            pane.style.transform = "translateX(" + currentEntry * -this.getScrollDelta(pane) + "px)"
        })

    }

}

customElements.define("products-carousel", ProductsCarousel)
