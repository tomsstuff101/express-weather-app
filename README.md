# Express Weather App



<a href="">
<img src="https://github.com/tomsstuff101/express-weather-app/blob/master/README-images/express%20weather.png?raw=true">
</a>


Node.js   Express.js  
MapBox  DarkSky

```
server.js
    Express is set up to listen to a URL
    The URL/weather endpont is where the lient sends get requests to
    
    app.get setu up the get request on /weather and responds by 
    taing the quer information from the clients URL eg if client sends a get request as
    
    localhost:3001/weather?location=chester
    
    this is req.query.location and is passed to a function (which is in a seperate module) which returns the required data that is then sent to the client
    


    lib/ -------
                |
                |
                This conatin the modules for getting the location and weather using the Map Box and DarkSky api's respectivley.
                The main function is app.js. This is the main function which connects the getLocation and getWeather methods. IT is exported to be used by the server
                
                app.js
                getLocation.js
                getWeather.js
                
    
                The client side code is contained in this public folder. this is availableto the client on localhost:3001/weather once the server is running
    public/ ----
                |
                |
                index.html -> GUI interface tfor user to input place name and get the weather back
                index.js  -> makes a GET request using the fetch api, and displays the responce on the DOM
                
                css/  directory containing css and icons from fontawsome (this may be ammended in future)
                        
    
    
```

to execute, install

```
$npm install node

$npm install express

```


    
    
    
    


https://darksky.net/dev/docs/faq

"Where do I find the icons?
The API itself doesn't come with any icons: instead, 
we provide a generic icon property so you can select whatever icons 
you like! If you want to use the same icon set we use on darksky.net, 
ut our Skycons library. We also really like Adam Whitcroft's Climacons."

http://adamwhitcroft.com/climacons/

http://darkskyapp.github.io/skycons/

