// Получить кнопку "Открыть магазин" через id
let btn = document.getElementById('open-btn'),
// Получить все поля в левом меню через классы	
	name = document.getElementsByClassName('name'),
	nameValue = document.getElementsByClassName('name-value'),
	budget = document.getElementsByClassName('budget'),
	budgetValue = document.getElementsByClassName('budget-value'),
	goods = document.getElementsByClassName('goods'),
	goodsValue = document.getElementsByClassName('goods-value'),
	items = document.getElementsByClassName('items'),
	employers = document.getElementsByClassName('employers'),
	employersValue = document.getElementsByClassName('employers-value'),
	discount = document.getElementsByClassName('discount'),
	discountValue = document.getElementsByClassName('discount-value'),
	isopen = document.getElementsByClassName('isopen'),
	isopenValue = document.getElementsByClassName('isopen-value'),
// Получить поля категории товаров через класс
	chooseGoods = document.getElementsByClassName('goods-item'),
// Получить все 3 кнопки через Tag
	tag = document.querySelector('.main-functions'),
	button = tag.getElementsByTagName('button');
// Получить поля ввода товаров, времени и расчета бюджета через querySelector
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value');
// Получить поля имен сотрудников через querySelectorAll
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');