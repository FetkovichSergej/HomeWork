let name1;
let age;
let city;
let phone;
let email;
let company;
name1 = prompt("Введите ваше Имя");
age = prompt("Введите ваш возвраст");
city = prompt("Введите ваш город");
phone = prompt("Введите ваше номер телефона");
email = prompt("Введите ваш email");
company = prompt("Введите ваше место работы");
alert(
    ` Меня зовут-${name1}, Мне ${age} лет. Я проживаю в городе ${city}  и работаю в компании ${company}. Мои контактные данные:
        ${phone}
        ${email}.`
);
let birthday = 2022 - age;
alert(`${name1} родился в ${birthday} году `);
let number = "";
number = prompt("Введите 6 значное число");
arr = number.split("");
for (let i = 0; i < 6; i++) {
    arr[i] = parseInt(a[i]);
}
if (number[0] + number[1] + number[2] == number[3] + number[4] + number[5]) {
    alert("Да");
} else {
    alert("Нет");
}

let c, number;
c = prompt(`Введите число`);
if (c > 0) {
    alert("Верно");
} else {
    alert("неверно");
}
let a;
let b;
a = 10;
b = 2;
alert(
    `Сумма=${a + b}, Разность=${a - b}, произведение=${a * b}, частное=${
        a / b
    }, `
);
let n;
n = prompt("Введите число от 0 до 59");
if (n <= 15 && n > 0) {
    alert("Первая четверть часа");
} else if (n <= 30) {
    alert("Вторая четверть часа");
} else if (n <= 45) {
    alert("Третья четверть часа");
} else {
    alert("Четвертая четверть часа");
}
let day;
day = prompt("Введите какой сегодня по счету день");
if (day <= 10 && n > 0) {
    alert("Первая декада месяца");
} else if (n <= 20) {
    alert("Вторая декада месяца");
} else if (n <= 31) {
    alert("Третья декада месяца");
}
let days;
let year;
let weeks;
let month;
let hours;
let minutes;
let seconds;
days = prompt("Введите количество дней");
year = days / 365;
month = days / 30;
weeks = days / 7;
hours = days * 24;
minutes = hours * 60;
seconds = minutes * 60;
year = year < 1 ? "Меньше года " : year;
month = month < 1 ? "Меньше месяца " : month;
weeks = weeks < 1 ? "Меньше недели " : weeks;
alert(`     Год- ${year}
    Месяцов- ${month}
    недель- ${weeks}
    часов- ${hours}
    минут- ${minutes}
    секунд- ${seconds}`);
days = prompt("Введите какой по счету день в году");
month = days / 30;
month = month == Math.round(month) ? month : Math.round(month) + 1;
switch (month) {
    case 1:
        alert("январь, зима");
        break;
    case 2:
        alert("февраль, зима");
        break;
    case 3:
        alert("март, весна");
        break;
    case 4:
        alert("апрель, весна");
        break;
    case 5:
        alert("май, весна");
        break;
    case 6:
        alert("июнь, лето");
        break;
    case 7:
        alert("июль, лето");
        break;
    case 8:
        alert("август, лето");
        break;
    case 9:
        alert("сентябрь, осень");
        break;
    case 10:
        alert("октябрь, осень");
        break;
    case 11:
        alert("ноябрь, осень");
        break;
    case 12:
        alert("декабрь, зима");
        break;
}
