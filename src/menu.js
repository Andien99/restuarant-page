export default function menuPageSetup () {
    const content = document.getElementById('content')
    const menuContent = document.createElement('div')
    menuContent.setAttribute('id', 'menuContent')
    content.appendChild(menuContent)


    const menuTitle = document.createElement('h3')
    menuTitle.textContent = 'Menu'
    menuContent.appendChild(menuTitle)
    
    const menuList = document.createElement('ul')
    menuContent.appendChild(menuList)
    
    const menuItems = ['Pizza', 'Pasta', 'Hamburger', 'Chips', 'Garlic Bread']
    
    for (let i = 0; i < 5; i++) {
        let  item = document.createElement('li')
        item.textContent = menuItems[i]
        menuList.appendChild(item)
    }
}