import {headerSection, homeContent} from "./landingPage";
import { displayContact } from "./contact";

headerSection();
homeContent();

export function handleClick(event) {
    const options = ["Home", "Menu", "Contact"]

    for (let i in options) {
        let className = '.' + options[i]
        let element = document.querySelector(className)
        element.style.cssText = 'text-decoration: none;'
    }

    let container = document.querySelector('.container')
    container.remove()

    if (event.target.innerHTML === 'Home') {
        homeContent();
        let element = document.querySelector('.Home')
        element.style.cssText = 'text-decoration: underline'
    } else if (event.target.innerHTML === 'Contact') {
        displayContact()
        let element = document.querySelector('.Contact')
        element.style.cssText = 'text-decoration: underline'
    }
}