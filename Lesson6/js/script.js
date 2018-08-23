// Получить кнопку "Открыть магазин" через id
let open = document.getElementById('open-btn'),
// Получить все поля в левом меню через классы	
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');
	

let budget,
	time,
	price
//Запрашиваем бюджет и название магазина
open.addEventListener('click', () => {
	budget = prompt("Ваш бюджет на месяц?", "");
	
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = +prompt("Ваш бюджет на месяц?", "");
	}

	budget_value.textContent = budget;

	name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

	budget_btn.disabled = false;

});

//Заполнение полей категории товаров по кнопке "Утвердить"
goods_btn.addEventListener('click', () => {
	for (i = 0; i < goods_item.length; i++) { 		

	let a = goods_item[i].value

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;

		} else {
			i--;
		}
	}
});

// Проверка полей ввода для категории товаров на пустые строки
// А также активации кнопки: Утвердить, в случае если хотя бы одно поле заполнено
for ( let i = 0; i < goods_item.length; i++) {
	goods_item[i].addEventListener('change', () => {

		let a = goods_item[i].value

		if ((typeof(a)) === 'string' && (isNaN(a)) && a.length < 50) {		
			goods_btn.disabled = false;
		} else {
			goods_btn.disabled = true;
		}
	});
}





choose_item.addEventListener('change', () => {

		let items = choose_item.value;

		if (isNaN(items) && items != '') {

			mainList.shopItems = items.split(", ");
			mainList.shopItems.sort();

			items_value.textContent = mainList.shopItems;

			goods_btn.discount = true;		
		}
});


// Время работы магазина
time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		isopen_value.textContent = 'Такого просто не может быть!';
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		isopen_value.textContent = 'Время работать!';
		mainList.open = true;
		} else if (time < 24) {
			isopen_value.textContent = 'Уже слишком поздно!';
			mainList.open = false;
			} else {
				isopen_value.textContent = 'В сутках всего 24 часа!';
				mainList.open = false;
				};

	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
	}

});

// Расчитываем бюджет
budget_btn.addEventListener('click', () => {
	count_budget_value.value = (budget / 30).toFixed(2);
	mainList.discount = true;
	discount_value.textContent = 'Получить скидку 20%';
			
});

//Ввод продуктов через запятую
employers_btn.addEventListener('click', () => {
	employers_value.textContent = '';
	for (let i = 0; i < hire_employers_item.length; i++) {
	
		let a = hire_employers_item[i].value; 
			if ((typeof(a)) === 'string' && (isNaN(a)) && a.length < 50) {
				mainList.employers[i] = a[0].toUpperCase() + a.slice(1);
				employers_value.textContent += mainList.employers[i] + ', '; 
			} 
	

		
}
});
for ( let i = 0; i < hire_employers_item.length; i++) {
	hire_employers_item[i].addEventListener('change', () => {

		let a = hire_employers_item[i].value

		if ((typeof(a)) === 'string' && (isNaN(a)) && a.length < 50) {		
			employers_btn.disabled = false;
		} else {
			employers_btn.disabled = true;
		}
	});
}

// Реализация дисконтной системы, скидка 20% от дневного бюджета
discount_value.addEventListener('click', () => {
	if (mainList.discount == true) {
		discount_value.style.backgroundColor = 'green';
		discount_value.textContent = 'Со скидкой: ' + (count_budget_value.value * 0.8).toFixed(2);	
	} 
});



let mainList = {
	budget: budget,
	shopGoods: [],
	employers: {},
	open: false,
	shopItems: [],
	discount: false
}