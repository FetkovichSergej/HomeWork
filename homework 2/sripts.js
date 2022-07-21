/*
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
*/
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
