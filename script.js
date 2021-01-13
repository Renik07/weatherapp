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
	const body = document.getElementById('body');

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
		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input.value}&cnt=23&appid=0a09bb79b78a53df09abb009ee97f5c9&lang=ru&units=metric`)
			.then(function (resp) { return resp.json() })
			.then(function (data) {
				console.log(data);
				const indexImg = `${data.list[0].weather[0]['icon']}`;

				mainTemp.innerHTML = Math.round(data.list[0].main.temp) + '&deg;';
				img.src = `https://openweathermap.org/img/wn/${indexImg}@2x.png`;
				description.textContent = data.list[0].weather[0]['description'];
				feelsTemp.innerHTML = Math.round(data.list[0].main.feels_like) + '&deg;';
				minTemp.innerHTML = Math.round(data.list[0].main.temp_min) + '&deg;';
				maxTemp.innerHTML = Math.round(data.list[0].main.temp_max) + '&deg;';
				cityName.textContent = `${data.city.name}, ${data.city.country}`;
				humidity.innerHTML = data.list[0].main.humidity + '%';
				precipitation.innerHTML = data.list[0].wind.speed + ' m/s';
				pressure.innerHTML = Math.round(data.list[0].main.pressure / 1.33322) + ' mm';
				visibility.innerHTML = (data.list[0].visibility)/1000 + ' km';
				date.innerHTML = (data.list[0].dt_txt).slice(0, 10);
			
				/* weather forecast */
				mainTempTwo.innerHTML = Math.round(data.list[5].main.temp) + '&deg;';
				mainTempThree.innerHTML = Math.round(data.list[14].main.temp) + '&deg;';
				mainTempFour.innerHTML = Math.round(data.list[22].main.temp) + '&deg;';
				imgDayTwo.src = `https://openweathermap.org/img/wn/${data.list[5].weather[0]['icon']}@2x.png`;
				imgDayThree.src = `https://openweathermap.org/img/wn/${data.list[14].weather[0]['icon']}@2x.png`;
				imgDayFour.src = `https://openweathermap.org/img/wn/${data.list[22].weather[0]['icon']}@2x.png`;
				descrDayTwo.textContent = data.list[5].weather[0]['description'];
				descrDayThree.textContent = data.list[14].weather[0]['description'];
				descrDayFour.textContent = data.list[22].weather[0]['description'];
				dateDayTwo.innerHTML = (data.list[5].dt_txt).slice(0, 10);
				dateDayThree.innerHTML = (data.list[14].dt_txt).slice(0, 10);
				dateDayFour.innerHTML = (data.list[22].dt_txt).slice(0, 10);

				input.value = '';

				/* background */
				if (indexImg == '01d' || indexImg == '01n') {
						body.style.background = `url('img/clear_sky-min.jpg') 0 0/cover no-repeat`;
				} else if (indexImg == '02d' || indexImg == '02n' || indexImg == '03d' || indexImg == '03n') {
						body.style.background = `url('img/few_clouds-min.jpg') 0 0/cover no-repeat`;
				} else if (indexImg == '04d' || indexImg == '04n') {
						body.style.background = `url('img/broken_clouds-min.jpg') 0 0/cover no-repeat`;
				} else if (indexImg == '09d' || indexImg == '09n' || indexImg == '10d' || indexImg == '10n') {
						body.style.background = `url('img/rain-min.jpg') 0 0/cover no-repeat`;
				} else if (indexImg == '11d' || indexImg == '11n') {
						body.style.background = `url('img/thunderstorm-min.jpg') 0 0/cover no-repeat`;
				} else if (indexImg == '13d' || indexImg == '13n') {
						body.style.background = `url('img/snow-min.jpg') 0 0/cover no-repeat`;
				} else {
						body.style.background = `url('img/background-min.jpg') 0 0/cover no-repeat;`;
				}

			})
			.catch(function () {
					
			});

		/* animation weather forecast and background */
		const blockOne = document.querySelector('.block-1'),
					blockTwo = document.querySelector('.block-2'),
					blockThree = document.querySelector('.block-3'),
					iconOne = document.querySelector('.img__two'),
					iconTwo = document.querySelector('.img__three'),
					iconThree = document.querySelector('.img__four');

		const animation = item => {
			item.classList.add('active');
		};

		blockOne.classList.add('active');
		setTimeout(animation, 100, blockTwo);
		setTimeout(animation, 200, blockThree);
		setTimeout(animation, 250, iconOne);
		setTimeout(animation, 350, iconTwo);
		setTimeout(animation, 450, iconThree);
	});

	/* animation title */
	const container = document.querySelector('.container'),
				title = document.querySelector('.center__title');

	container.addEventListener('mousemove', (e) => {
		let offsetX = (window.innerWidth / 2 - e.pageX) / 30;
		let offsetY = (window.innerHeight / 2 - e.pageY) / 30;

		title.style.transform = `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`;
	});
	

});