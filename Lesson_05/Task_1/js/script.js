let titleId = document.getElementById('title'),
	item = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    li = document.createElement("li"),
    column = document.getElementsByClassName("column")[1],
    adv = document.querySelector(".adv"),
    promptQuestion = document.getElementById('prompt');

menu.insertBefore(item[1], item[3]);
column.removeChild(adv);
li.appendChild(document.createTextNode("Пятый пункт"));
li.setAttribute("class", "menu-item");
menu.appendChild(li);
document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';
document.title = 'Apple genuine';
titleId.innerHTML = titleId.textContent.replace(/технику/, 'подлинную технику');
promptQuestion.innerHTML = prompt('Как вы относитесь к технике Apple');