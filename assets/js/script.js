var button = document.querySelector('.btn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click' , function() {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e12acf058398663e5a5c79e83134f180'
    )
        .then(response => response.json()
        )
        .then(data => console.log(data)
        )
        
})