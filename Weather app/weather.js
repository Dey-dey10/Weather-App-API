let inputval = document.getElementById('cityinput');
let btn = document.getElementById('search');
let weatherIcon = document.querySelector("img");
apik = "d63a39697a90188a435c3afd23a8a6c9";

function convertion(val){
    return (val - 273).toFixed(2);
}
btn.addEventListener("click", function(){
    console.log('click');


fetch('https://api.openweathermap.org/data/2.5/weather?unites=metric&q=' + inputval.value + '&appid=' + apik)
.then(res => res.json())

.then(data =>
{
    
    var cityName = data['name']
    var descrip = data['weather']['0']['description']
    var temp = data['main']['temp']
    var hum = data['main']['humidity']
    var wndspd = data['wind']['speed']
    document.getElementById('cityoutput').innerHTML = cityName
    document.getElementById('temp').innerHTML = Math.round(temp -273) + "°C"
    document.getElementById('humidity').innerHTML =   hum + "%" + "</br>" + "Humidity"
    document.getElementById('desc').innerHTML = descrip
    document.getElementById('wind').innerHTML = wndspd + "Km" + "</br>" + "Windspeed"

    if(data.weather[0].main == "Clouds"){
       weatherIcon.src = "image/cloudy-removebg-preview.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/sunny-removebg-preview.png";
    }  else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "image/rainy-removebg-preview.png";
    }
    console.log(data);
    
})

.catch(err => {
  alert('Invalid City')
})
});