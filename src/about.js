export default function aboutPageSetup() {
    const content = document.getElementById('content')
    const aboutContent = document.createElement('div')
    aboutContent.setAttribute('id', 'aboutContent')
    content.appendChild(aboutContent)

    const contactInfo = document.createElement('h3')
    contactInfo.textContent = 'Phone Number: 10385 123908 58'
    aboutContent.appendChild(contactInfo)
}