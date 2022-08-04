document.write("Первое задание <br>");
let str = "aaa@bbb@ccc";
str = str.replaceAll("@", "!");
document.write(str, "<br>");
document.write("Второе задание  <br>");
let date = new Date("2025-12-31");

document.write(
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
    "<br>"
);
let sentens = "Я учу javascript!";
document.write("Третье задание  <br>");
document.write("Метод substr <br>");
document.write(sentens.substr(2, 3), "<br>");
document.write(sentens.substr(6, 10), "<br>");
document.write("Метод substring <br>");
document.write(sentens.substring(2, 5), "<br>");
document.write(sentens.substring(6, 16), "<br>");
document.write("Метод slice <br>");
document.write(sentens.slice(2, 5), "<br>");
document.write(sentens.substring(6, 16), "<br>");
document.write("Четвертое задание  <br>");
let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let index = 0; index < array.length; index++) {
    sum += Math.pow(array[index], 3);
}
sum = Math.sqrt(sum);
document.write(sum, " <br>");
// document.write("Пятое  задание  <br>");
// let a = prompt("Введите первое число");
// let b = prompt("Введите второе  число");
// let c = 0;
// c = Math.abs(a - b);
// document.write(" разница равна - <br>", c);
document.write("Шестое   задание  <br>");
let actual_date = new Date();
function get_day_month(actual_date) {
    let proverka = actual_date.getDate();
    if (proverka < 10) {
        document.write(`0${proverka}/`);
    }
    proverka = actual_date.getMonth();
    if (proverka < 10) {
        document.write(`0${proverka}/`);
    }
    document.write(actual_date.getFullYear());
}
get_day_month(actual_date);
document.write("<br>Седьмое   задание  <br>");
let lorem = "aa aba abba abbba abca abea";
document.write(lorem.match(/ab{1,}a/g));
document.write("Восьмое    задание  <br>");
let number = Boolean;
function proverka() {
    return Boolean(
        new RegExp(
            "[+][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
        ).exec(prompt("Введите номер телефона"))
    );
}
number = proverka();
document.write(number, " <br>");
