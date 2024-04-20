
//Функции кнопок меню
document.getElementById("about-btn").addEventListener("click", function() {
	document.getElementById("about_me_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("portfolio-btn").addEventListener("click", function() {
	document.getElementById("portfolio_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("contact-btn").addEventListener("click", function() {
	document.getElementById("contact_section").scrollIntoView({ behavior: 'smooth' });
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

//Фунцкия выезжающего названия текста
function slideInFromRight(element) {
    let start = performance.now();
    function animate(time) {
        let timeFraction = (time - start) / 400; // Продолжительность анимации в секундах
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
        let timeFraction = (time - start) / 400; // Продолжительность анимации в секундах
        if (timeFraction > 1) timeFraction = 1;
        let progress = timeFraction;
        element.style.transform = `translateX(${(-1 + progress) * 100}%)`;
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

// Функция анимации выезжающего снизу
function slideInFromDown(element) {
    let start = performance.now();
    function animate(time) {
        let timeFraction = (time - start) / 400; // Продолжительность анимации в секундах
        if (timeFraction > 1) timeFraction = 1;
        let progress = timeFraction;
        element.style.transform = `translateY(${(1 - progress) * 100}%)`;
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
            if (entry.target.id === 'inf_container') {
                slideInFromRight(entry.target);
            } else if (entry.target.id === 'avatar') {
                slideInFromLeft(entry.target);
            } else if (entry.target.id === 'dealing') {
                slideInFromDown(entry.target);
            } else if (entry.target.id === 'about_me_head' || entry.target.id === 'portfolio_head' || entry.target.id === 'contact_head') {
                slideInFromUp(entry.target);
            }
        }
    });
});

// Наблюдаем за всеми элементами
document.querySelectorAll('#inf_container, #avatar, #dealing, #about_me_head, #portfolio_head, #contact_head').forEach(element => {
    observer.observe(element);
});

// Функция анимации выезжающего сверху
function slideInFromUp(element) {
    let start = performance.now();
    function animate(time) {
        let timeFraction = (time - start) / 400; // Продолжительность анимации в миллисекундах
        if (timeFraction > 1) timeFraction = 1;
        let progress = timeFraction;
        element.style.transform = `translateY(${(-1 + progress) * 100}%)`;
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}
