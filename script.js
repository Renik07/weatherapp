/* const btn = document.querySelector('.button-primary'),
			input = document.querySelector('.input');

btn.addEventListener('click', () => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=0a09bb79b78a53df09abb009ee97f5c9`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        console.log(input.value);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        
		});
}); */