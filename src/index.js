import "./styles.css";
import homePageSetup from './initialpageload'
import menuPageSetup from "./menu";
import aboutPageSetup from "./about";
const content = document.getElementById('content')
let activeTab = ''
// Logic for switching tabs
// event listeners will open a new 'tab' that will load a module binded to the button 
const homeBtn = document.getElementById('home')
homeBtn.addEventListener('click', () => {
    wipeContent()
    homePageSetup()
    activeTab = 'home'
})
const menuBtn = document.getElementById('menu')
menuBtn.addEventListener('click', () => {
    wipeContent()
    menuPageSetup()
    activeTab = 'menu'
})
const aboutBtn = document.getElementById('about')
aboutBtn.addEventListener('click', () => {
    wipeContent()
    aboutPageSetup()
    activeTab = 'about'
})

function wipeContent() {
    if (activeTab == 'home') {
        content.removeChild(homeContent)
    } else if (activeTab == 'menu') {
        content.removeChild(menuContent)
    } else if (activeTab == 'about') {
        content.removeChild(aboutContent)
    }
}

