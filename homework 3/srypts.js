let a = 0;
while (a !== 50) {
    a = ++a;
    console.log(a);
}

a = 36;
while (a !== 8) {
    a = --a;
    console.log(a);
}

a = 90;
while (a !== 11) {
    a = --a;
    document.write(a + "<br>");
}
let sum = 0;
a = 0;
while (a !== 100) {
    a = ++a;
    sum = a + sum;
}
console.log("сумма 100");
console.log(sum);
a = 1;
sum = 0;
while (a <= 5) {
    sum = a + sum;
    console.log(a + " =" + sum);
    a = ++a;
}
console.log("четные числа");
a = 8;
while (a !== 56) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a = ++a;
}
console.log("четные числа for");
for (let index = 8; index < 57; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}
// }
for (let math = 2; math < 11; math++) {
    for (let index = 1; index < 11; index++) {
        console.log(math + "*" + index + "=" + math * index);
    }
    console.log("\n");
}
let n = 1000;
let num = 0;
while (true) {
    n = n / 2;
    num++;
    if (n < 50) {
        break;
    }
}
console.log("Получилось число " + n);
console.log("Количество итераций " + num);
let count = 0;
sum = 0;
while (true) {
    let a = prompt("Введите число");
    if (!a || a == 0) {
        break;
    }
    if (Number.isNaN(+a)) {
        alert("not a number");
    }
    sum += +a;
    count++;
}

alert("sum = " + sum);
alert("count = " + count);
alert("avg = " + sum / count);

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let arr = str.split(" ");
let min = arr[0];
let max = 0;
for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
        min = arr[index];
    }
    if (arr[index] > max) {
        max = arr[index];
    }
}

console.log("Минимальное значение-", min);
console.log("Максимальное значение-", max);
console.log("Задание с произвольным числом");
let proizvol = prompt("Введите произвольное число");
let numarray = proizvol.split("");
sum = 0;
for (let index = 0; index < numarray.length; index++) {
    console.log(numarray[index]);
    sum += +numarray[index];
}
console.log("Количевство цифр", numarray.length);
console.log("Сумма чисел равно ", sum);

let revers = "";
for (let index = numarray.length - 1; index >= 0; index--) {
    revers += numarray[index];
}
console.log("Обратный порядок", revers);
