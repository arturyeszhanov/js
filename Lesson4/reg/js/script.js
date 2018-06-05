let budget,
	score,
	time,
	price

// Старт программы / Функция старт
function start() {
	budget = +prompt("Ваш бюджет на месяц?", "");
	
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = +prompt("Ваш бюджет на месяц?", "");
	}

	score = prompt("Название вашего магазина?", "").toUpperCase();
}
// start();


//---------------------------------------------------------------

let mainList = {
	budget: budget,
	score: score,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (i = 0; i < 2; i++) { 		

		let a = prompt("Какой тип товаров будем продавать?", "");

			mainList.shopGoods[i] = a;
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				// console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}

	},
	workTime: function workTime(time) {
				if (time < 0) {
					console.log('Такого просто не может быть!');
				} else if (time > 8 && time < 20) {
					console.log('На часах: ' + time);
					console.log('Время работать!');
					mainList.open = true;
					} else if (time < 24) {
						console.log('Уже слишком поздно!');
						} else {
								console.log('В сутках всего 24 часа!');
							}
	},
	budgetOneDay: function budgetOneDay() {
		console.log("Бюджет на 1 день: " + budget / 30);
	},
	discount: function discount() {
		price = prompt('Какова сумма чека?', '');
		//Если у нас параметр discount = true
		if ((typeof(discount)) !== true) { 
			//то от значения переменной price необходимо оставить 80%
			console.log('Ваш чек на сумму: ' + price)
			console.log("Ваш чек с учетом скидки: " + (price * 80)/100);
		}
	},
	employers: function employers() {
		for (let i = 0; i < 4; i++) {
			let w = prompt("Имя сотрудника?", '');
			mainList.employers[i] = (i+1).toString() + '-' + w;
			console.log('Cотрудник: ' + mainList.employers[i])	
		}
		
	},
	chooseShopItem: function chooseShopItem() {
		for (i = 0; i < 1; i++) {

			let items = prompt('Перечислите через запятую товары', '');
			// Делаю проверку: 1. Ввести в типах товара только строку
			// 				   2. Не может оставить строку пустой
			//				   3. Не может отменить вопрос
			//				   3. Не может ввести число
			if ((typeof(items)) === 'string' && items != null && items != '' && isNaN(items)) {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите, еще ", ""));
				mainList.shopItems.sort();
			} else {
				i--;
			}
	}
			// Испольование forEach
			mainList.shopItems.forEach( function(key, i, shopItems) {
				document.write((i+1) + ': ' + 'У нас вы можете купить: ' + key + '<br/>');
			});

			// Использование for in
			for (key in mainList.shopItems) {
				console.log('Наш магазин включает в себя: ' +  mainList.shopItems[key])
			}
	}

}


// Все данные выводятся в консоли, все alert заменены на console.log
// Сделано для удобного отображения данных
console.log(mainList);