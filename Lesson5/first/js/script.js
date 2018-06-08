// Меняем местами пункты меню 2 и 3
let item = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu");
	menu.insertBefore(item[1], item[3]);

// Создаем 5-ый пункт меню
item = document.createElement('li');
item.textContent = 'Пятый пункт';
item.classList.add('menu-item');
// Добавляем 5-ый пунт меню в навигацию
	menu.appendChild(item);

// Меняем background
let bg = document.querySelector('body');
	bg.style.background = 'url(img/apple_true.jpg) center no-repeat';

// Добавляем слово "подлинную"
let text = document.getElementById('title');
	text.textContent = "Мы продаем только подлинную технику Apple";
	column = document.querySelectorAll('.column');
	w = document.querySelector('.title');
	column[1].replaceChild(text, w);

// Удаляем рекламу
	del = document.querySelector('.adv');
	column[1].removeChild(del);

// Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
let	question = document.getElementById('prompt');
	question.textContent = prompt('Как вы относитесь к технике Apple?','');


	

	

	