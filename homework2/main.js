// Создайте массив d1 с числовыми величинами 45, 78, 10, 3. Добавьте в массив d1 еще одно число ( d1[7] = 100).
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
var d1 = [45, 78, 10, 3];

d1.splice(4, 0, ' ', ' ', ' ', 100);

console.log(d1);
console.log(d1.slice(6));


// Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d1[7] = 100)
//  Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

var d1 = [45, 78, 10, 3];
d1.splice(4, 0, ' ', ' ', ' ', 100);
d1.splice(4, 3);

console.log(d1);

function sumd1 (arr){
    var sum3 = 0;
    for(var i = 0; i < arr.length; i++){
        sum3 += arr[i];
        }
    console.log(sum3);
    }
sumd1(d1);

// var sum3 = d1.reduce(function(sum, curretn){
//     return sum + curretn;
// }, 0);

// console.log(sum3);



