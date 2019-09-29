# Express Weather App



<a href="">
<img src="https://github.com/tomsstuff101/express-weather-app/blob/master/README-images/express%20weather.png?raw=true">
</a>



```
server.js
    Express is set up to listen to a URL
    The URL/weather endpont is where the lient sends get requests to.
    
    app.get sets up the get request on /weather and responds by stripping
    the query information from the clients URL eg if client sends a get request as
    
    localhost:3001/weather?location=chester
    
    this is req.query.location and is passed to a function 
    (which is in a seperate module) returing the required data that 
    is then sent to the client
    


    lib/ -------
                |
                |
                
                This contains the modules for getting the location and weather using the
                Map Box and DarkSky api's respectivley.
                The main function is app.js. This is the main function which connects the
                getLocation and getWeather methods. It is exported to be used by the server
                
                app.js
                getLocation.js
                getWeather.js
                
    
    
    
                
    public/ ----
                |
                |
                
                The client side code is contained in this public folder. this is available 
                to the client on localhost:3001/weather once the server is running
                
                index.html ->   GUI interface tfor user to input place name and get 
                                the weather back
                
                index.js  ->    makes a GET request using the fetch api, and displays 
                                the responce on the DOM
                
                css/  directory containing general css and icons from fontawsome 
                (this may be ammended in future)
                        
    
    
```

to execute, install

```
$npm install node

$npm install express

$ node server.js

```

and then on your browser go to 

```

http://localhost:3001/weather

```

## Current Functionality

The app works well, the only fixs required are to implement proper icon usage. Presently the icon is fixed to Fontawsome's 'sun' in index.js.
A proper implementation would have a sepearte module externally e.g. ```weatherIcon.js``` with a method called say ```getWeatherIcon``` just to determine from a given icon description what icon css should be employed.

index.js would then require this module and the current demo fixed icon line would become

```

inconDisplay.innerHTML = getWeatherIcon.data.weatherInfo.icon

```

I have previously used [Eric Flowers weather icons](https://erikflowers.github.io/weather-icons/) on [another Weather app I created in ES5 and jQuery](https://github.com/appijumbo/weatherAppv1) using the ajax methods. 

So I am confident that I can implement this functionality in this revised Node/Express weather app


