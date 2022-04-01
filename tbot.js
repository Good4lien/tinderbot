/**
 * Created by Roman on 16.04.2021.
 */


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var html='<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">' +
    '</script>' +
    '<div class="tbot-ui Z(2)">'+
    '<h1 class="tbot-header">Tbot</h1>'+
    '<div class="">'+
    '<button type="button" class="tbot-button" id="tbot-id"> &#10016; </button>'+
    '</div></div>';

var div = document.createElement('div');
div.className = "tbot";
div.innerHTML = html;
document.body.prepend(div);

var c = document.getElementById('tbot-id');
var locate='';
var url = 'https://tinder.com/app/recs';
var url1 = 'https://tinder.com/app/matches';
var like =  '';
var dislike = '';
var flag = 1;
var p = 0;

//Сообщения
var input = '';
var name = '';
var m = '. На фотках такая необычная и загадочная 😇 ' +
    'Я тут не часто, ты тоже думаю. Напиши ник и мы спишемся в телеграме. ' +
    'Понимаю, тут много кто пишет, но поверь, наше общение того стоит!';

setInterval(function () {
    locate = document.location.href;
    if (locate == url || locate == url1){
        div.style.display = 'block';
        if (flag){
            var els = document.querySelectorAll('button');
            if (els.length>15){
                els.forEach(function(el) {
                    if (el.innerHTML.indexOf("Лайк") !== -1) {
                        el.id='like';
                        like = document.getElementById('like');
                    }
                });
                els.forEach(function(el) {
                    if (el.innerHTML.indexOf("Нет") !== -1) {
                        el.id='dislike';
                        dislike = document.getElementById('dislike');
                    }
                });
                flag=0;
            }
        }
    }
    else{
        div.style.display = 'none';
    }
    if (locate[25]=='s'){
        div.style.display = 'block';
        var en = document.querySelectorAll('h1');
        name = en[1].innerHTML;
    }
},200);

c.onclick=function(){
        if (locate == url || locate == url1){
            setInterval(function () {
                c.style.color = 'red';
                //Рандомное число от 1 до 100 включительно
                p = rand(1, 100);
                //console.log(p);
                //P(Lke)-Вероятность выпадения лайков
                if (p > 98) {
                    dislike.click();
                }
                else {
                    like.click();
                }

                c.onclick = function () {
                    c.style.color = 'green';
                    location.reload();
                };
            //Каждые n мл секунд выполняется функция
            }, 500);
        }
        else{
            var em = document.querySelector('textarea');
            em.id = 'input';
            input = em;
            input.textContent = 'Привет, '+name+m;
            input.focus();
        }
};