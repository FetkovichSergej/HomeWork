// переменная, в которой хранится выбранное математическое действие

const calculator = function () {
    this.op = null;
    this.on = function () {
        calc.style.visibility = "visible";
        calexp.style.visibility = "visible";
    };
    this.off = function () {
        calc.style.visibility = "hidden";
        calexp.style.visibility = "hidden";
    };

    // функция расчёта
    this.func = function () {
        // переменная для результата
        let result;
        // получаем первое и второе число
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        // смотрим, что было в переменной с действием, и действуем исходя из этого
        switch (this.op) {
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
    };
    this.calculate = function () {
        let expresion = "";
        expresion = document.getElementById("expresion").value;
        expresion = eval(expresion);
        document.getElementById("resultex").innerHTML = expresion;
        return expresion;
    };
};
var test = new calculator();
let newCalculator = function () {
    calculator.apply(this);
    let previouscalculate = this.calculate;
    this.calculate = function () {
        alert(previouscalculate());
    };
};
let test2 = new newCalculator();
let constructor = function () {
    this.create = function (tagName) {
        let body;
        body = document.querySelector("body");
        let element = document.createElement(tagName);
        body.appendChild(element);
        return element;
    };
    this.attr = function (element, name, value) {
        let changeelement = document.querySelector(element);
        console.log(value);
        changeelement.setAttribute(name, value);
    };
    //не могу сообразить
    // this.search = function (element, selector) {
    //     let searichingElement = selector;
    //     let tagname = document.querySelectorAll(element);
    //     for (let index = 0; index < tagname.length; index++) {
    //         const element = tagname[index];

    //     }
    //     console.log(tagname);
};
let test3 = new constructor();
