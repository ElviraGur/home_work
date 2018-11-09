// var btn = document.querySelector(".but");
// var text = document.querySelector(".text");

// btn.addEventListener("click", function(){
//         text.innerHTML = "!!!"
//     })

// btn.addEventListener("click", function(){
//     text.outerHTML = '<b>' + text.innerHTML + '</b>'
// })

// Дан HTML код (см. под задачей). 
// Поменяйте содержимое абзацев на их 
// порядковый номер в коде по клику на кнопку.

var btn = document.querySelector(".but");
var text = document.getElementsByTagName("p");

btn.addEventListener("click", function(){
    for(var i =0; i < text.length; i++){
        text[i].innerHTML = i + 1;
    }
})