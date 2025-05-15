export default function initalPageSetup() {
    console.log('Running Initial Page Setup')
    const content = document.getElementById('content')
    const homeContent = document.createElement('div')
    homeContent.setAttribute('id', 'homeContent')
    content.appendChild(homeContent)
    

    // main content of the div
        const title = document.createElement('h1')
        title.textContent = 'Brekie Techie'
        homeContent.appendChild(title)

        const info = document.createElement('p')
        info.textContent = 'This is a fantastic new restauarant that was built using the webpack feature. A webpack is a bundler for javascript that will compile multiple files of dependencies to have a file run. In this cause because it is a website it will have a html, css and js files to build this nice webpage that is the peak of my styling career'
        homeContent.appendChild(info)

        const openingHours = document.createElement('div')
        homeContent.appendChild(openingHours)

        const subheadingOpeningHours = document.createElement('h2')
        subheadingOpeningHours.textContent = 'Opening Hours'
        openingHours.appendChild(subheadingOpeningHours)

        const listOpeningHours = document.createElement('ul')
        openingHours.appendChild(listOpeningHours)

        const openingDays = ['Monday', 'Tuesdary', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        for (let i =0; i < 7; i++) {
            if (openingDays[i] == 'Sunday') {
                let dayInfo = document.createElement('li')
                dayInfo.textContent = openingDays[i] + ': Closed'
                listOpeningHours.appendChild(dayInfo)           
            } else {
            let dayInfo = document.createElement('li')
            dayInfo.textContent = openingDays[i] + ': 8am - 3pm'
            listOpeningHours.appendChild(dayInfo)
        }}

        const location = document.createElement('h2')
        location.textContent = 'Location'
        homeContent.appendChild(location)

        const locationInfo = document.createElement('p')
        locationInfo.textContent = '123 Sesame Street, 3024, Mainville, NYC'
        homeContent.appendChild(locationInfo)
}
    
