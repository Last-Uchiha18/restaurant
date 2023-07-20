
export function headerSection() {
    const options = ["Home", "Menu", "Contact"]

    const headerDiv = document.createElement('div')
    headerDiv.className = "header"

    const restaruantName = document.createElement('h1')
    restaruantName.textContent = "King of Spices";

    headerDiv.appendChild(restaruantName)

    const unorderedList = document.createElement('ul')
    for (let i = 0; i < 3; i++) {
        let listItem = document.createElement('li')
        let link = document.createElement('a')
        link.setAttribute('href', "#")
        link.textContent = options[i];
        listItem.appendChild(link)
        unorderedList.appendChild(listItem)
    }

    headerDiv.appendChild(unorderedList)

    const mainDiv = document.querySelector('.content')
    mainDiv.appendChild(headerDiv)
}

export function homeContent() {
    const container = document.createElement('div')
    container.className = 'container'

    const p1 = document.createElement('p')
    p1.textContent = "Best Indian food in town"
    const p2 = document.createElement('p')
    p2.textContent = "Made with passion since 1920"
    const img = document.createElement('img')
    img.setAttribute('src', './chef.jpg')

    const p3 = document.createElement('p')
    p3.textContent = "Order online or visit us"

    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(img)
    container.appendChild(p3)

    const mainDiv = document.querySelector('.content')
    mainDiv.appendChild(container)
 
}
