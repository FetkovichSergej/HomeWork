document.write("Первое задание <br>");
function subtract(a, b, c) {
    return (a - b) / c;
}
let a = 10;
let b = 6;
let c = 2;
let result = subtract(a, b, c);

document.write("резултат -", result, "<br>");
document.write("Второе  задание <br>");
function square_and_cube(a) {
    let square = a * a;
    let cube = a * a * a;
    return [square, cube];
}
let result_square = [];
result_square = square_and_cube(a);
document.write("резултат - ", result_square, "<br>");
document.write("третье  задание <br>");
function min(a, b) {
    if (a > b) {
        return b;
    } else {
        if (a < b) {
            return a;
        }
    }
}
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        if (a < b) {
            return b;
        }
    }
}
let min_number = min(a, b);
let max_number = max(a, b);
document.write(
    `Минимальное число - ${min_number}, максимальное - ${max_number}`,
    "<br>"
);
document.write("Четвертое   задание <br>");
let array = [];
function array_random() {
    let lenght_arr = prompt("Введите длину массива");
    min_number = prompt("Введите мин число из диапозона");
    max_number = prompt("Введите макс число из диапозона");
    min_number = Math.ceil(min_number);
    max_number = Math.floor(max_number);
    for (let i = 0; i < lenght_arr; i++) {
        array.push(
            Math.floor(Math.random() * (max_number - min_number + 1)) +
                min_number
        );
    }
    return array;
}
function array_write(array) {
    array = array_random(array);
    document.write("Ваш массив - ", array, "<br>");
}
array_write(array);
document.write("Пятое    задание <br>");
let whole = prompt("Введите целое число");
function inEven(whole) {
    if (whole % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let true_false = inEven(whole);
document.write("Ваше число четное? ", true_false, "<br>");
document.write("Шестое задание <br>");
let array_whole = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function array_whole_check(array_whole) {
    let cheked = [];
    for (let index = 0; index < array_whole.length; index++) {
        if (inEven(array_whole[index]) == true) {
            cheked.push(array_whole[index]);
        }
    }
    return cheked;
}
array_whole = array_whole_check(array_whole);
document.write("Массив целых чисел", array_whole, "<br>");
document.write("Седьмое  задание <br>");
function piramids() {
    let floor = prompt("введите число");
    let array_element = prompt("Введите доп параметр");
    for (let i = 0; i < +floor + 1; i++) {
        if (
            array_element !== null &&
            array_element !== " " &&
            array_element !== ""
        ) {
            for (let n = 0; n < i; n++) {
                document.write(array_element);
            }
        } else {
            for (let n = 0; n < i; n++) {
                document.write(floor);
            }
        }
        document.write("<br>");
    }
}
piramids();
