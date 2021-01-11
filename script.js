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
				visibility = document.querySelector('.footer__value.visibility'),
				date = document.querySelector('.footer__date');
	/* weather forecast */
	const mainTempTwo = document.querySelector('.block__top-temp.day__two'),
				mainTempThree = document.querySelector('.block__top-temp.day__three'),
				mainTempFour = document.querySelector('.block__top-temp.day__four'),
				imgDayTwo = document.querySelector('.block__top-img.img__two'),
				imgDayThree = document.querySelector('.block__top-img.img__three'),
				imgDayFour = document.querySelector('.block__top-img.img__four'),
				descrDayTwo = document.querySelector('.block__descr.descr__two'),
				descrDayThree = document.querySelector('.block__descr.descr__three'),
				descrDayFour = document.querySelector('.block__descr.descr__four'),
				dateDayTwo = document.querySelector('.block__date.date__two'),
				dateDayThree = document.querySelector('.block__date.date__three'),
				dateDayFour = document.querySelector('.block__date.date__four');
	button.addEventListener('click', () => {
		
		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input.value}&cnt=4&appid=0a09bb79b78a53df09abb009ee97f5c9&lang=ru&units=metric`)
			.then(function (resp) { return resp.json() })
			.then(function (data) {
				console.log(data);

				mainTemp.innerHTML = Math.round(data.list[0].main.temp) + '&deg;';
				img.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png`;
				description.textContent = data.list[0].weather[0]['description'];
				feelsTemp.innerHTML = Math.round(data.list[0].main.feels_like) + '&deg;';
				minTemp.innerHTML = Math.round(data.list[0].main.temp_min) + '&deg;';
				maxTemp.innerHTML = Math.round(data.list[0].main.temp_max) + '&deg;';
				cityName.textContent = `${data.city.name}, ${data.city.country}`;
				humidity.innerHTML = data.list[0].main.humidity + '%';
				precipitation.innerHTML = data.list[0].wind.speed + ' m/s';
				pressure.innerHTML = data.list[0].main.pressure + ' mm';
				visibility.innerHTML = (data.list[0].visibility)/1000 + ' km';
				date.innerHTML = data.list[0].dt_txt;
				
				input.value = '';

				/* weather forecast */
				mainTempTwo.innerHTML = Math.round(data.list[1].main.temp) + '&deg;';
				mainTempThree.innerHTML = Math.round(data.list[2].main.temp) + '&deg;';
				mainTempFour.innerHTML = Math.round(data.list[3].main.temp) + '&deg;';
				imgDayTwo.src = `https://openweathermap.org/img/wn/${data.list[1].weather[0]['icon']}@2x.png`;
				imgDayThree.src = `https://openweathermap.org/img/wn/${data.list[2].weather[0]['icon']}@2x.png`;
				imgDayFour.src = `https://openweathermap.org/img/wn/${data.list[3].weather[0]['icon']}@2x.png`;
				descrDayTwo.textContent = data.list[1].weather[0]['description'];
				descrDayThree.textContent = data.list[2].weather[0]['description'];
				descrDayFour.textContent = data.list[3].weather[0]['description'];
				dateDayTwo.innerHTML = data.list[1].dt_txt;
				dateDayThree.innerHTML = data.list[2].dt_txt;
				dateDayFour.innerHTML = data.list[3].dt_txt;


			})
			.catch(function () {
					
			});
	});
	/* button.addEventListener('click', () => {
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
	}); */

});