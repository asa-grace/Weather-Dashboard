var button = document.querySelector('.btn')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var forecastSymbol = document.querySelector('forecast')

button.addEventListener('click', function() {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='+
        inputValue.value +
        '&appid=e12acf058398663e5a5c79e83134f180&units=imperial'
    )
        .then(response => response.json())
        
        .then(data => {   
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var symbolValue = data['forecast.symbol'];
        
        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue + ' °F ';
        desc.innerHTML = descValue + '';
        forecastSymbol.innerHTML = symbolValue;
        })
})
