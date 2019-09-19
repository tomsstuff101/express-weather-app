// Client side JavaScript here
console.log('weather app working')

const title = document.getElementById('title')
const getLocation = document.getElementById('location')
const fetchWeather = document.getElementById('fetchWeather')
const summary = document.getElementById('summary')
const temp = document.getElementById('temp')



fetchWeather.addEventListener('click', async ()=>{

    summary.textContent = "Loading weather ..."
    temp.textContent = ""

    let responce = await fetch(`http://localhost:3001/weather?location=${getLocation.value}`)
    let data = await responce.json()
    summary.textContent = data.summary
    temp.textContent = `${Math.floor(((data.temperature) -32) * (5/9))} C`
})

