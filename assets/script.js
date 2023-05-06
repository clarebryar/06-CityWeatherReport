//this one is to get the lat and lon of a city: 


//this one is for the lat and lon to get the weather: 


//this one gets the weather icons you'll use: 
var apiIcons = 'https://api.openweathermap.org/img/w/{icon}.png'  
var cityNameInputEl = document.querySelector("#cityname");
var searchButton = document.querySelector('#searchButton')

var searchHandler = function (event) {
    event.preventDefault();
 var cityName = cityNameInputEl.value.trim();
if (cityName) {
    getCity(cityName)
    console.log(cityName)
}
}

function getCity (cityName) {
    var apiCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + ',US&limit=5&appid=a4b52d54f93021519848eaf25cda8f87';   
    fetch(apiCity).then(function (response) {
        console.log(response.status);
       return response.json()
       .then(function (data)  {
        var lat = data[0].lat 
        var lon = data[0].lon
        if (cityName.length === 0){
            document.querySelector('#notvalidcity').textContent = "sorry can't find that city"
        }
        console.log(data);        
    })
    

})
};
var getLatLon = function (lat, lon) {
 var cityLatLon = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&' + lon '=&appid=a4b52d54f93021519848eaf25cda8f87&units=imperial';
fetch(cityLatLon).then(function(response) )

}




searchButton.addEventListener('click', searchHandler);