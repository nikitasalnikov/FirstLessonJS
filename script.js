var name = prompt('Введите свое имя: ');
console.log('Ваше имя: ' + name);

var age = prompt('Введите ваш возраст: ');
console.log('Ваш возраст: ' + age + ' лет');

var sum = prompt('Введите ответ суммы: 6 + 3');

if (sum == 9) {
    console.log('6 + 3 = ' + sum);
} else {
    console.log('Вы вели неверный ответ! Правильный ответ 9');
}

var subtraction = prompt('Введите ответ вычитания: 6 - 3');
if (subtraction == 3) {
    console.log('6 - 3 = ' + subtraction);
} else {
    console.log('Вы вели неверный ответ! Правильный ответ 3');
}

var multiple = prompt('Введите ответ умножения: 6 * 3');
if (multiple == 18) {
    console.log('6 * 3 = ' + multiple);
} else {
    console.log('Вы вели неверный ответ! Правильный ответ 18');
}

var division = prompt('Введите ответ деления: 6 / 3');
if (division == 2) {
    console.log('6 / 3 = ' + division);
} else {
    console.log('Вы вели неверный ответ! Правильный ответ 2');
}

var divide = prompt('Введите ответ деления c остатком: 6 % 3');
if (divide == 0) {
    console.log('6 % 3 = ' + divide);
} else {
    console.log('Вы вели неверный ответ! Правильный ответ 0');
}

var str = 'Откройте панель разработчика и откройте консоль!';
alert(str);