
//Функции кнопок меню
document.getElementById("about-btn").addEventListener("click", function() {
	document.getElementById("about_me_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("portfolio-btn").addEventListener("click", function() {
	document.getElementById("portfolio_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("couching-btn").addEventListener("click", function() {
	document.getElementById("couching_section").scrollIntoView({ behavior: 'smooth' });
});
	
document.getElementById("psychologia-btn").addEventListener("click", function() {
	document.getElementById("psychologia_section").scrollIntoView({ behavior: 'smooth' });
});
	
document.getElementById("tochka-opory-btn").addEventListener("click", function() {
	document.getElementById("tochka-opory_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("contact-btn").addEventListener("click", function() {
	document.getElementById("contact_section").scrollIntoView({ behavior: 'smooth' });
});

//Кнопка для всех блоков ведущая к контактам
var buttons = document.querySelectorAll(".nav_connect_btn");

// Добавить обработчик событий для каждой кнопки
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("contact_section").scrollIntoView({ behavior: 'smooth' });
    });
});

//Функция кнопки прокрутки вверх
function scroll_up() {
	const scroll_up_btn_left = document.getElementById("scroll_up_btn");
	if (document.documentElement.scrollTop > 0) {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	} else {
		scroll_up_btn.scrollIntoView({ behavior: 'smooth' });
	}
}

// Функция для отображения и скрытия кнопки в зависимости от положения прокрутки
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	const scroll_up_btn = document.getElementById("scroll_up_btn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scroll_up_btn.style.display = "block";
	} else {
		scroll_up_btn.style.display = "none";
	}
}

// Функция анимации выезжающего справа
function slideInFromRight(element) {
	let start = performance.now();
	function animate(time) {
		let timeFraction = (time - start) / 600; // Продолжительность анимации в секундах
		if (timeFraction > 1) timeFraction = 1;
		let progress = timeFraction;
		element.style.transform = `translateX(${(1 - progress) * 100}%)`;
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}

// Функция анимации выезжающего слева
function slideInFromLeft(element) {
	let start = performance.now();
	function animate(time) {
		let timeFraction = (time - start) / 600; // Продолжительность анимации в секундах
		if (timeFraction > 1) timeFraction = 1;
		let progress = timeFraction;
		element.style.transform = `translateX(${(-1 + progress) * 100}%)`;
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}

// Функция анимации появления
function fadeIn(element) {
	let start = performance.now();
	function animate(time) {
		let timeFraction = (time - start) / 800; // Продолжительность анимации в миллисекундах
		if (timeFraction > 1) timeFraction = 1;
		let progress = timeFraction;
		element.style.opacity = progress;
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}

// Создаем Intersection Observer для анимации выезжающих элементов
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// Если элемент видим, запускаем соответствующую анимацию
			if (entry.target.id === 'avatar') {
				slideInFromRight(entry.target);
			} else if (entry.target.id === 'name') {
				slideInFromLeft(entry.target);
			} else if (entry.target.id === 'dealing') {
				fadeIn(entry.target);
			} else if (entry.target.id === 'about_me_container' || entry.target.id === 'portfolio_container' || entry.target.id === 'couching_container' || entry.target.id === 'psychologia_container' || entry.target.id === 'tochka-opory_container' || entry.target.id === 'contact_section') {
				fadeIn(entry.target);
			}
		}
	});
});

// Наблюдаем за всеми элементами
document.querySelectorAll('#name, #avatar, #dealing, #about_me_container, #portfolio_container,#couching_container, #psychologia_container, #tochka-opory_container, #contact_section').forEach(element => {
	observer.observe(element);
});

//Функция перехода на сайт Точка опоры!
var button = document.getElementById('tochka-opory_btn');
	// Добавляем обработчик события клика
	button.addEventListener('click', function() {
		// Перенаправляем пользователя на другой сайт
		window.location.href = 'https://tochkaopory.minisite.ai/';
	});
	
	
//Функция перехода на Телеграм канал!	
var button = document.getElementById('telegram_channel_btn');
	// Добавляем обработчик события клика
	button.addEventListener('click', function() {
		// Перенаправляем пользователя на другой сайт
		window.location.href = 'https://t.me/wwFEF3pDseZmOGJk';
	});    
	
//Функция перехода на IPACT сайт!	
var button = document.getElementById('ipact_btn');
	// Добавляем обработчик события клика
	button.addEventListener('click', function() {
		// Перенаправляем пользователя на другой сайт
		window.location.href = 'https://platform.ipactcoach.com/coaches/logosa';
	});    
