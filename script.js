window.addEventListener('DOMContentLoaded', () => {

	const mainTemp = document.querySelector('.header__temp'),
				img = document.querySelector('.header__img'),
				description = document.querySelector('.header__descr'),
				feelsTemp = document.querySelector('.center__temp span'),
				minTemp = document.querySelector('.center__temp-min span'),
				maxTemp = document.querySelector('.center__temp-max span'),
				cityName = document.querySelector('.center__title'),
				input = document.querySelector('.center__input'),
				button = document.querySelector('.center__btn'),
				humidity = document.querySelector('.footer__value.humidity'),
				precipitation = document.querySelector('.footer__value.wind'),
				pressure = document.querySelector('.footer__value.pressure'),
				visibility = document.querySelector('.footer__value.visibility');
				

	button.addEventListener('click', () => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=0a09bb79b78a53df09abb009ee97f5c9&lang=ru&units=metric`)
		.then(function (resp) { return resp.json() })
		.then(function (data) {
				console.log(data);

				mainTemp.innerHTML = Math.round(data.main.temp) + '&deg;';
				img.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
				description.textContent = data.weather[0]['description'];
				feelsTemp.innerHTML = Math.round(data.main.feels_like) + '&deg;';
				minTemp.innerHTML = Math.round(data.main.temp_min) + '&deg;';
				maxTemp.innerHTML = Math.round(data.main.temp_max) + '&deg;';
				cityName.textContent = `${data.name}, ${data.sys.country}`;
				humidity.innerHTML = data.main.humidity + '%';
				precipitation.innerHTML = data.wind.speed + ' m/s';
				pressure.innerHTML = data.main.pressure + ' mm';
				visibility.innerHTML = (data.visibility)/1000 + ' km';
				
				input.value = '';
		})
		.catch(function () {
				
		});
	});



});