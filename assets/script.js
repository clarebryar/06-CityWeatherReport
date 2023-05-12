//this one is to get the lat and lon of a city: 




var weatherCard = document.querySelector('#weatherCard')
var chosenCityEl = document.querySelector("#chosenCity")
var searchHistoryContainer = document.querySelector('#citySearchHistory')
//this one gets the weather icons you'll use: 
var apiIcons = 'https://api.openweathermap.org/img/w/{icon}.png'  
var cityNameInputEl = document.querySelector("#cityname");
var searchButton = document.querySelector('#searchButton')

cityArray = []

var searchHistoryBtn = document.createElement('button') 

var searchHandler = function (event) {
    event.preventDefault();
 var cityName = cityNameInputEl.value.trim() 
if (cityName) {
    getCity(cityName)
    console.log(cityName)
} else if (cityName.length === 0) {
    document.querySelector('#notvalidcity').textContent = "sorry can't find that city"
}
cityArray.unshift(cityName)
console.log(cityArray)
weatherCard.textContent = ""
// for (var i = 0;  i < 5; i++) {
//     var citySearch = cityArray[i]
    var searchHistoryBtn = document.createElement('button')
    searchHistoryBtn.setAttribute("class", "searchHistoryBtn")
    
    searchHistoryContainer.appendChild(searchHistoryBtn)
    // localStorage.setItem("Search History", JSON.stringify(cityArray))
    searchHistoryBtn.textContent = cityName
    // JSON.parse(localStorage.getItem("Search History"));
   searchHistoryBtn.addEventListener("onclick", getCity(cityName))
};
 




function getCity (cityName) {
    var apiCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + ',US&limit=5&appid=a4b52d54f93021519848eaf25cda8f87';   
    fetch(apiCity).then(function (response) {
       return response.json()
       .then(function (data)  {
        const lat = data[0].lat 
        const lon = data[0].lon
        console.log(data);     
        getLatLon(lat, lon);   
        chosenCityEl.textContent = "Displaying weather for " + cityName

       
        
    }) 

})
};




var getLatLon = function (lat, lon) {
 var cityLatLon = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a4b52d54f93021519848eaf25cda8f87&units=imperial`;
fetch(cityLatLon).then(function (response) {
console.log(response.status);
    return response.json().then(function (data) {
    console.log(data);
for  (var i = 0; i < data.list.length; i+=7) {
    var today = dayjs();
    var date = data.list[i].dt
    var dateAndTime = dayjs.unix(date).format('MMMM D, YYYY')
   var temp = data.list[i].main.feels_like
   var humidity = data.list[i].main.humidity
   var windSpeed = data.list[i].wind.speed
    console.log(dateAndTime)
   console.log("Temp:", temp + " humidity:", humidity + " wind speed", windSpeed);
   var icon = data.list[i].weather[0].icon
   console.log(icon)
 
var weatherBox = document.createElement('div')

  var dateEl = document.createElement('h3')
  dateEl.textContent = dateAndTime

weatherCard.appendChild(dateEl)
  
var tempEl = document.createElement('h4')
  tempEl.textContent = "Temp: " + temp
  weatherCard.appendChild(tempEl)
  
  var humidityEl = document.createElement('h5')
  humidityEl.textContent = "Humidity: " + humidity + "%"
  weatherCard.appendChild(humidityEl)

  var windEl = document.createElement('h5')
  windEl.textContent = "Wind Speed: " + windSpeed + "mph"
  weatherCard.appendChild(windEl)
}
});
})
}

searchButton.addEventListener('click', searchHandler);

function getIcon(icon) {
var apiIcons = 'https://api.openweathermap.org/img/w/' + icon + '.png'  
fetch(apiIcons).then(function (response) {
    console.log(response)
return response.json().then(function (data) {
 console.log(data)   
})
})
}


// function searchHistoryHandler (event) {
//     event.preventDefault()
//     getCity();
// }


