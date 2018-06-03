let budget,
	score,
	time,
	price

// Старт программы / Функция старт
function start() {
	budget = +prompt("Ваш бюджет на месяц?");
	
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = +prompt("Ваш бюджет на месяц?");
	}

	score = prompt("Название вашего магазина?").toUpperCase();
}
start();

//---------------------------------------------------------------

let mainList = {
	budget: budget,
	score: score,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
}

// Спрашиваем у пользователя о типах товаров
function chooseGoods() {
		for (i = 0; i < 2; i++) { 		

		let a = prompt("Какой тип товаров будем продавать?");
		mainList.shopGoods[i] = a;
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(a)) !== a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}

	}
}
chooseGoods();

//---------------------------------------------------------------


// Определяем время работы
function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('На часах: ' + time);
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
					console.log('В сутках всего 24 часа!');
				}
	}

workTime(11); // Переназначаем время, изначально в переменную было занесено значение: 22

//---------------------------------------------------------------

// Определяем бюджет на 1 день
function budgetOneDay() {
	console.log("Бюджет на 1 день: " + budget / 30);
}
budgetOneDay();

//---------------------------------------------------------------


// Считаем скидку 
function discount() {
	price = prompt('Какова сумма чека?');
	//Если у нас параметр discount = true
	if ((typeof(discount)) !== true) { 
		//то от значения переменной price необходимо оставить 80%
		console.log('Ваш чек на сумму: ' + price)
		console.log("Ваш чек с учетом скидки: " + (price * 80)/100);
	}
}
discount();											

// Набираем сотрудников
function employers() {
	for (let i = 0; i < 4; i++) {
		let w = prompt("Имя сотрудника?");
		mainList.employers[i] = (i+1).toString() + '-' + w;
		console.log('Cотрудник: ' + mainList.employers[i])	
	}
	
}

employers();

// Все данные выводятся в консоли, все alert заменены на console.log
// Сделано для удобного отображения данных
console.log(mainList);