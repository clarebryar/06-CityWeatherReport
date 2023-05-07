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
} else if (cityName.length === 0) {
    document.querySelector('#notvalidcity').textContent = "sorry can't find that city"
}
}

function getCity (cityName) {
    var apiCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + ',US&limit=5&appid=a4b52d54f93021519848eaf25cda8f87';   
    fetch(apiCity).then(function (response) {
       return response.json()
       .then(function (data)  {
        const lat = data[0].lat 
        const lon = data[0].lon
        console.log(data);     
        getLatLon(lat, lon);   
    })
    

})
};
var getLatLon = function (lat, lon) {
 var cityLatLon = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a4b52d54f93021519848eaf25cda8f87&units=imperial`;
fetch(cityLatLon).then(function (response) {
console.log(response.status);
    return response.json().then(function (data) {
    console.log(data);
for  (var i = 0; i < data.length; i++) {
    var weatherData = data.map(function ()
    {
      return list.main.feels_like;
    })
    console.log(data[i].list.main.feels_like);
}
    // const day1Temp = data.list[3].main.feels_like
    // console.log("day 1 Temp:", day1Temp);
    // const day1Humidity = data.list[3].main.humidity
    // console.log("day 1 Humidity:", day1Humidity);
    // const day1Wind = data.list[3].wind.speed 
    // console.log("day 1 Wind Speed", day1Wind)
    // const day2Temp = data.list[10].main.feels_like
    // console.log("day 2Temp:", day2Temp);
    // const day2Humidity = data.list[10].main.humidity
    // console.log("day 2 Humidity:", day2Humidity);
    // const day2Wind = data.list[10].wind.speed 
    // console.log("day 2 Wind Speed", day2Wind)
    // const day3Temp = data.list[19].main.feels_like
    // console.log("day 2Temp:", day3Temp);
    // const day3Humidity = data.list[19].main.humidity
    // console.log("day 2 Humidity:", day3Humidity);
    // const day3Wind = data.list[19].wind.speed 
    // console.log("day 2 Wind Speed", day3Wind)
});
});
};

searchButton.addEventListener('click', searchHandler);