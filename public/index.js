// Client side JavaScript here
// console.log('weather app working')

// const title = document.getElementById('title')
// const getLocation = document.getElementById('getLocation')
// const fetchWeather = document.getElementById('fetchWeather')
// const summary = document.getElementById('summary')
// const temp = document.getElementById('temp')
// const placeFound = document.getElementById('placeFound')
// const loading = document.getElementById('loading')


// fetchWeather.addEventListener('click', async ()=>{

    
//     loading.innerHTML = '<i class="fas fa-spinner"></i>'
//     temp.textContent = ""

//     // let responce = await fetch(`http://localhost:3001/weather?location=${getLocation.value}`)
//     let responce = await fetch(`/weather?location=${getLocation.value}`)
//     let data = await responce.json()

//     loading.innerHTML = ""
//     iconDisplay.innerHTML = '<i class="far fa-sun"></i>'
//     placeFound.textContent = data.placeInfo
//     summary.textContent = data.weatherInfo.summary

//     temp.innerHTML = `${Math.floor(((data.weatherInfo.temperature) -32) * (5/9))}`+ '<i class="fas fa-temperature-high"></i>'

// })

