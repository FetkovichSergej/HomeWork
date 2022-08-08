// переменная, в которой хранится выбранное математическое действие

function on() {
    calc.style.visibility = "visible";
    calexp.style.visibility = "visible";
}
function off() {
    calc.style.visibility = "hidden";
    calexp.style.visibility = "hidden";
}
var op;

// функция расчёта
function func() {
    // переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}
function calculate() {
    var expresion = "";
    expresion = document.getElementById("expresion").value;
    expresion = eval(expresion);
    result = expresion;
    document.getElementById("resultex").innerHTML = result;
}
