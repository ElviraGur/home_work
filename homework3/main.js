// Найти все div и вывести их количество

// var element = document.querySelectorAll('div');

// console.log(element);
// console.log("Количество div - " + element.length);

// Все дивы без текста заполнить строкой текста

// var elements = document.querySelectorAll("div");

//     for(var i = 0; i < elements.length; i++){
//         if(elements.innerHTML = 'undefined'){
//             var textElemens = document.createElement('p');
//             textElemens.innerHTML = "новый";
//             elements[i].appendChild(textElemens);
         
//         }
//      }

// 3) Найти div с классом red и убедиться что это действительно div

// var red = document.querySelector('.red');
// console.log(red);
// var redTrue = red.tagName;
// console.log(redTrue);

// 4) Внутри div создать p с текстом и img в картинку добавить класс и ссылку на картинку

// var element = document.querySelector('div');

// var textElemens = document.createElement('p');
// textElemens.innerHTML = "новый";
// element.appendChild(textElemens);

// var imgElemens = document.createElement('img');
// imgElemens.classList.add('image');
// imgElemens.src = "data:image/jpeg;base64,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";

// element.appendChild(imgElemens);
// console.log(element);


// 5) Удалить предпоследний элемент в body
// var elemens = document.body.querySelectorAll("*");

// elemens[24].remove();

//var allelem = document.body.getElementsByTagName('*');
//document.body.removeChild(allelem[allelem.length-3]);


// 6) Получить кол-во узлов в body

// var elemens = document.body.childNodes;
// console.log(elemens.length)

// 7) Удалить все узлы типа text

// var elemens = document.body.childNodes;
// for(var i = 0; i < elemens.length; i++){
//     if(elemens[i].nodeType == 3){
//         elemens[i].remove()
//     }
// }

// 8) Создать узел типа комментарий и вставить его в начало body 

// var parentElem = document.body;
// var comment = document.createComment('Это комментарий');
// parentElem.insertBefore(comment, parentElem.children[0]);

// 9) Достать текст из комментария

// console.log(comment.nodeValue)


// 10) Удалить все узлы в body

// document.body.innerHTML = '';


