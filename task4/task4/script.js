let answer1 = prompt('Как тебя зовут?');
if (answer1 === "") {
    alert('Введи свое имя!');
    answer1 = prompt('Как тебя зовут?'); 
}
let answer2 = prompt('Сколько тебе лет?');
if ((parseInt(answer2) <= 0) || (parseInt(answer2) > 100) || (answer2 === "")) {
    alert('Введи корректный возраст!');
    answer2 = prompt('Сколько тебе лет?');
}

alert(`Привет, ${answer1.charAt(0).toUpperCase() + answer1.slice(1).toLowerCase()}, тебе уже ${answer2} лет!`);
