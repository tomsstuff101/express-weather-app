const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')


const main = async (place) => {

    const location = await getLocation(place)
    const weather = await getWeather(location)

    return weather
    
}


// main()

exports.module = {
    main
}




