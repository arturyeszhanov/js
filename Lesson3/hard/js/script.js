var str = "урок-3-был слишком легким";

function lesson3() {
	// Делаю первую букву заглавной
  w = str[0].toUpperCase() + str.slice(1);

  	// Заменяю '-' на пробелы
  w = w.replace( /-/g, ' ' )

  	// Вырезаем слово 'легким'
  legko = w.replace('легким', '');

  	//Меняю "им" на "о"
  return w.replace('им', 'о'); 
}

console.log(lesson3());

// Пункт4 и Пункт5, Не совсем понимаю что нужно сделать
