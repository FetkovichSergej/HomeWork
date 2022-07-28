let arr = [1, 2, 3, 4, 5];
document.write("первое задание <br>");
for (let index = 0, l = arr.length; index < l; index++) {
    document.write(" ", arr[index]);
}
let minus = -1;
arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
document.write("<br>Второе задание <br>");
for (let index = 0, l = arr.length; index < l; index++) {
    if (arr[index] < 0) {
        document.write(" ", arr[index]);
    }
}
document.write("<br>Третье  задание <br>");
let arr_for = [];
let arr_while = [];
for (let index = 23, count = 0; index < 57; index++) {
    arr_for[count] = index;
    ++count;
}
let index = 23;
let count = 0;
document.write("Массив чеерез фор <br>", arr_for, "<br>");
while (index != 57) {
    arr_while[count] = index;
    ++index;
    ++count;
}
let result = 0;
document.write("Массив чеерез while <br>", arr_while, "<br>");
for (let index = 0; index < arr_for.length; index++) {
    result += arr_for[index];
}
document.write("<br>Сумма сложения<br>", result);
document.write("<br>Четвертое  задание <br>");
let arr_string = ["10", "20", "30", "50", "235", "3000"];
document.write(arr_string.filter((num) => ["1", "2", "5"].includes(num[0])));
document.write("<br>пятое  задание <br>");
let arr_days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for (let index = 0; index < arr_days.length; index++) {
    if (arr_days[index] == "СБ" || arr_days[index] == "ВС") {
        document.write(" ", "<b>" + arr_days[index] + "</b>");
    } else {
        document.write(" ", arr_days[index]);
    }
}
document.write("<br>Шестое задание <br>");
let arr_proizvol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr_proizvol.push(5798);
document.write(
    "Последний элемент массива",
    arr_proizvol[arr_proizvol.length - 1]
);

document.write("<br>Седьмое задание <br>");
let arr_polz = [];
let i = 0;
let proverka = "";
while (true) {
    proverka = prompt("Введите число");
    if (proverka == "") {
        break;
    }

    arr_polz[i] = +proverka;
    ++i;
}

document.write("", arr_polz, "<br>");
document.write("Остортированный массив ", `${arr_polz.sort((a, b) => a - b)}`);
document.write("<br>Восьмое задание <br>");
let arr_reverse = [12, false, "Текст", 4, 2, -5, 0];
index = arr_reverse.length - 1;
while (index >= 0) {
    document.write(" ", arr_reverse[index]);
    --index;
}
arr_reverse.reverse();
document.write("<br>", arr_reverse);
document.write("<br>Девятое  задание <br>");
let arr_nul = [5, 9, 21, , , 9, 78, , , , 6];
let chet = 0;
for (let index = 0; index < arr_nul.length; index++) {
    if (isNaN(arr_nul[index])) {
        ++chet;
    }
}
document.write("<br>Количество пустых элементов- ", chet);

let array = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let number_zero = [];
for (let index = 0; index < array.length; index++) {
    if (array[index] == 0) {
        number_zero.push(index);
    }
}
console.log(number_zero);
let sum = 0;
if (number_zero.length == 0 || number_zero.length == 1) {
    document.write("Невозомжно посчитать сумму");
} else {
    for (
        let index = number_zero[0];
        index <= number_zero[number_zero.length - 1];
        index++
    ) {
        sum = sum + array[index];
    }
}
document.write("<br> Сумма между нулями- ", sum);
