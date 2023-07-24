 export function displayContact() {
    
    const container = document.createElement('div')
    container.className = 'container'

    const p1 = document.createElement('p')
    const logo1 = document.createElement('i')
    logo1.className = 'fa-solid fa-phone'
    p1.appendChild(logo1)
    p1.innerHTML += "123 456 789"

    const p2 = document.createElement('p')
    const logo2 = document.createElement('i')
    logo2.className = 'fa-solid fa-house'
    p2.appendChild(logo2)
    p2.innerHTML += "Hollywood Boulevard 42, Los Angeles, USA"
   
    const image = document.createElement('img')
    image.setAttribute('src', './map.webp')
    image.className = 'mapImage'

    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(image)

    const mainDiv = document.querySelector('.content')
    mainDiv.appendChild(container)

 }