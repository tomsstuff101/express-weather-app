const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')


const main = async (place) => {

    const location = await getLocation(place)
    const weather = await getWeather(location)

   
    console.log({weatherInfo: weather, placeInfo: place})

    return {weatherInfo: weather, placeInfo: location.name}
    
}

module.exports = {
    main
}




