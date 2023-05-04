//this one is to get the lat and lon of a city: 
var apiCity = 'https://api.openweathermap.org/geo/1.0/direct?q={cityname}&limit=5&appid=d91f911bcf2c0f925fb6535547a5ddc9'

//this one is for the lat and lon to get the weather: 
var apiLatLon = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=d91f911bcf2c0f925fb6535547a5ddc9'

//this one gets the weather icons you'll use: 
var apiIcons = 'https://api.openweathermap.org/img/w/{icon}.png'

//API Key
//d91f911bcf2c0f925fb6535547a5ddc9

function getCity () {
    fetch(apiCity).then(function(response) {
        return response.json();
    })
    .then(function (data) { 
        console.log(data);
    })

    
}