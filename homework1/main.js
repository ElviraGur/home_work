// // Даны четыре действительных числа: x1, y1, x2, y2.
// // Напишите функцию distance(x1, y1, x2, y2), вычисляющая расстояние между точкой (x1,y1) и (x2,y2). 
// // Считайте четыре действительных числа и выведите результат работы этой функции.

 var x1 = prompt('Vvedite chislo', '');
     y1 = prompt('Vvedite chislo', '');
     x2 = prompt('Vvedite chislo', '');
     y2 = prompt('Vvedite chislo', '');

 function distance(q, w, e, r) {
  
  var a = (w - q);
  var b = (r - e);
  var c = Math.sqrt( a*a + b*b );
  return (c);
}
alert(distance(x1, y1, x2, y2));

// // Дано 10 целых чисел. Вычислите их сумму. Напишите программу, использующую наименьшее число переменных.

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(a, b) {
  return a + b
});
alert(number);

// // По данному натуральному n ≤ 9 выведите лесенку из n ступенек, i-я ступенька состоит из чисел от 1 до i без пробелов.

var num = [];

for(var i = 1; i <= 9; i++){
  num.push(i);
  console.log(num); 
}

// // Напишите функцию capitalize(), которая принимает слово из маленьких латинских букв и возвращает его же, меняя первую букву на большую.
// // Например, print(capitalize('hello')) должно печатать слово Hello.

var slovo = "capitalize";
function capitalize(a) {

return a.charAt(0).toUpperCase() + slovo.substr(1);
}
alert(capitalize(slovo));
<<<<<<< HEAD

// Для настольной игры используются карточки с номерами от 1 до N. 
// Одна карточка потерялась. Найдите ее, зная номера оставшихся карточек.
// Дано число N, далее N − 1 номер оставшихся карточек (различные числа от 1 до N).
//  Программа должна вывести номер потерянной карточки.

var N = 10;
var cards = [1, 4, 7, 2, 8, 3, 9, 10];

for (i = 1; i <= N; i++){
  if(!cards.includes(i)){
    console.log(i)
  }
}

=======
>>>>>>> master
