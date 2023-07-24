export function displayMenu() {

    const container = document.createElement('div')
    container.className = 'container grid'

    for (let i = 0; i < 4; i++) {
        let item = document.createElement('div');
        let img = document.createElement('img');
        img.src = './menu.jpeg'
        img.className = 'menuImg'
        item.className = 'grid-item'
        let h2 = document.createElement('h2');
        h2.textContent = 'Salalala'
        let p = document.createElement('p')
        p.textContent = 'About the dish; ingridients;About the dish; ingridients;'
        item.appendChild(img)
        item.appendChild(h2)
        item.appendChild(p)
        container.appendChild(item)
    }
    
    const mainDiv = document.querySelector('.content')
    mainDiv.appendChild(container)

}