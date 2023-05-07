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
for  (var i = 0; i < data.list.length; i++) {
    var today = dayjs();
    var date = data.list[i].dt
    var dateAndTime = dayjs.unix(date).format('MMMM D, YYYY, hh:mm:ss')
   var tempFeelsLike = data.list[i].main.feels_like
   var humidity = data.list[i].main.humidity
   var windSpeed = data.list[i].wind.speed
    console.log(dateAndTime)
   console.log("Temp:", tempFeelsLike + " humidity:", humidity + " wind speed", windSpeed);
}
});
})
}

searchButton.addEventListener('click', searchHandler);