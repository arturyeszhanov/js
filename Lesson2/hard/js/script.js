/* УСЛОЖНЕННОЕ ЗАДАНИЕ #1
 	Создать массив week и записать в него дни недели в виде строк
		* Вывести на экран все дни недели
		* Каждый из них с новой строчки
		* Выходные дни - жирным шрифтом
		* Текущий день - курсивом 	
*/

var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
	weekend1 = "Суббота"; 
	weekend2 = "Воскресенье"; 
	today = 'Пятница'; 

	for (let i = 0; i < week.length; i++) {
	
	switch (week[i]) {
		case weekend1:
			document.write(week[i].bold() + '<br>');
			break;
		case weekend2:
			document.write(week[i].bold() + '<br>');
			break;
		case today:
			document.write(week[i].italics() + '<br>');
			break;
		default:
			document.write(week[i] + '<br>');
			break;
	};
};


/* УСЛОЖНЕННОЕ ЗАДАНИЕ #2
		Создать массив arr = []
			* Записать в него 7 многозначных чисел в виде строк
			* Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
*/


 // Решил реализовать двумя способами: 

console.log('---------------------- Вариант #1 ----------------------');

var arr = ['321', '22', '123', '777', '33', '555', '12'];

for (let i = 0; i < arr.length; i++) {
	if ((arr[i].charAt(0) == '3') || (arr[i].charAt(0) == '7')) {
		console.log(arr[i]);
	}

};

console.log('---------------------- Вариант #2 ----------------------');

var arr = ['321', '22', '123', '777', '33', '555', '12'];

for (let i = 0; i < arr.length; i++) {
	switch (arr[i].charAt(0)) {
		case '3':
			console.log(arr[i]);
			break;
		case '7':
			console.log(arr[i]);
			break;
		default:
			
			break;
	}
}; 