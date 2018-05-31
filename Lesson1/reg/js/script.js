var budget = +prompt("Ваш бюджет на месяц?", 9000),
	score = prompt("Название вашего магазина?", "Маркет");

mainList = {
	budget,
	score,
	shopGoods: [prompt("Какой тип товаров будем продавать?", "Напитки"),
				prompt("Какой тип товаров будем продавать?", "Сладости"),
				prompt("Какой тип товаров будем продавать?", "Хоз.товары")],
	employers: {},
	open: true
};

alert("Товары: " + mainList.shopGoods);
alert("Бюджет на 1 день: " + budget / 30);