arr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

document.write('Массив из простых чисел от 1 до 100: <br/><br/>');
document.write((arr) + '<br/>');
document.write('---------------------------------------------------------' + '<br/>');

document.write('Количество элементов в массиве: ' + (arr.length) + '<br/>');
document.write('---------------------------------------------------------' + '<br/>');

for (key in arr) {
	document.write('Делители этого числа: ' + '1 и ' + (arr[key]) + '<br/>');
}