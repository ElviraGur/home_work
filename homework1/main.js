// // // // Даны четыре действительных числа: x1, y1, x2, y2.
// // // // Напишите функцию distance(x1, y1, x2, y2), вычисляющая расстояние между точкой (x1,y1) и (x2,y2). 
// // // // Считайте четыре действительных числа и выведите результат работы этой функции.

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

// // // // Дано 10 целых чисел. Вычислите их сумму. Напишите программу, использующую наименьшее число переменных.

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(a, b) {
  return a + b
});
alert(number);

// // // // По данному натуральному n ≤ 9 выведите лесенку из n ступенек, i-я ступенька состоит из чисел от 1 до i без пробелов.

var num = [];

for(var i = 1; i <= 9; i++){
  num.push(i);
  console.log(num); 
}

// // // // Напишите функцию capitalize(), которая принимает слово из маленьких латинских букв и возвращает его же, меняя первую букву на большую.
// // // // Например, print(capitalize('hello')) должно печатать слово Hello.

var slovo = "capitalize";
function capitalize(a) {

return a.charAt(0).toUpperCase() + slovo.substr(1);
}
alert(capitalize(slovo));

// // Для настольной игры используются карточки с номерами от 1 до N. 
// // Одна карточка потерялась. Найдите ее, зная номера оставшихся карточек.
// // Дано число N, далее N − 1 номер оставшихся карточек (различные числа от 1 до N).
// //  Программа должна вывести номер потерянной карточки.

var N = 10;
var cards = [1, 4, 7, 2, 8, 3, 9, 10];

for (i = 1; i <= N; i++){
  if(!cards.includes(i)){
    console.log(i)
  }
}

N = +(prompt('koli4estvo kart', ''));
var truecards = 0, 
    badcards = 0,
    nowcard = 0;

for(var i = 1; i <= N; i++){

  truecards += i;
}

for(var i = 1; i <= N - 1; i++ ){
  nowcard = +(prompt('какя сейчас карта?', ''));
  badcards += nowcard;
}

alert(truecards - badcards);


var n = +(prompt('vvedite 4islo', ''));
var sum = 0;
for(var i = 1; i <= n; i++){

 sum = sum + Math.pow(i, 3);
 console.log( i + ' в 3 степени = ' + Math.pow(i, 3));
 console.log('Текущая сумма элементов' + sum);

} 
console.log(sum);

var n = prompt('vvedite 4islo', '');
var sum = 1;
for(var i = 1; i <= n; i++){

 sum = sum * i;
console.log(sum);

} 
console.log(sum);

var x = prompt('chislo', ''),
    y = prompt('chislo', '');

function num (a, b){
  var c = Math.sqrt( a * a + b * b );

  return c

}
alert(num(x, y));


// Напишите функцию swap(int* a, int* b), которая изменяет
// значения параметров a и b так, что новое значение a равно
// старому значению b и наоборот.

var a = prompt('chislo', ''),
  b = prompt('chislo', ''),
  c;


function swap(c, d) {

  a = d;
  b = c;
}

swap(a, b)

console.log('peremennaya a = ' + a);
console.log('peremennaya b = ' + b);


// Напишите функцию int f(int n), которая
// находит число Фибоначчи nf . Числа Фибоначчи определяются
// соотношениями 1f =1, 2f =1, nn n 1 2 ff f = + − − .

var n = +(prompt('vvedite chislo', '')),
    a = -1,
    b = 1,
    fibsum;
for(var i = 0; i < n; i++) {
  fibsum = a + b;
  a = b;
  b = fibsum;
  console.log(fibsum);
}

var box = document.querySelector('.test');
console.log(box);

box.addEventListener('click', function() {
  console.log('click');
  if(box.classList.contains('blue')){
    box.classList.remove('blue');
    box.classList.add('red');
  } else {
    box.classList.remove('red');
    box.classList.add('blue');
  }
})