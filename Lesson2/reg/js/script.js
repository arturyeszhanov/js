// ОСНОВНОЕ ЗАДАНИЕ
// Переписать наш цикл for еще двумя способами и закомментировать их

var budget = +prompt("Ваш бюджет на месяц?", 9000),
	score = prompt("Название вашего магазина?", "Маркет");
	time = 19;

mainList = {
	budget: budget,
	score: score,
	shopGoods: [],
	employers: {},
	open: true
};


/*----------------------------- Цикл for ------------------------------*/

for (i = 0; i < 5; i++) { 		

	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(a)) !== a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}

};

/*---------------------------- Завершение цикла for -------------------



/*----------------------------- Цикл while ------------------------------*/

/*	let i =0;				
	while (i < 5) {
	i++;

	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) === null && (typeof(a)) !== a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		
		}
	};*/

/*---------------------------- Завершение цикла while -------------------*/


/*----------------------------- Цикл do while ------------------------------*/

/*	let i = 0;
	do {	
	i++;

	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) === null && (typeof(a)) !== a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		
		}
	}							
	
	while (i < 5);*/

/*---------------------------- Завершение цикла do while -------------------*/


if (time < 0) {
	console.log('Такого просто не может быть!');
} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках всего 24 часа!');
	};


alert("Товары: " + mainList.shopGoods);
alert("Бюджет на 1 день: " + budget / 30);

console.log(mainList);