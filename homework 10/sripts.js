// переменная, в которой хранится выбранное математическое действие
window.onload = function () {
    let test3 = new constructor_elementov();
    test3.search("#operator_btns", "#plus");
    test3.addClass("#operator_btns", "proverka");
    setTimeout(() => test3.removeClass("#operator_btns", "proverka"), 2000);
    test3.toggleClass("#operator_btns", "proverka1");
    test3.hasClass("#operator_btns", "proverka1");
    test3.append("#On_Off", "button");
    test3.on("#off", "click", test.off);
};
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
let constructor_elementov = function () {
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
    this.search = function (element, selector) {
        let searched_selector;
        let searched_element = document.querySelector(element);
        if (searched_element == null) {
            searched_element = document.querySelector(selector);
            console.log(searched_element);
        } else {
            searched_selector = searched_element.querySelector(selector);
            console.log(searched_selector);
        }
    };
    this.addClass = function (element, className) {
        const searched_element = document.querySelector(element);
        if (searched_element == null) {
            console.log("Элемент не найден");
        } else {
            searched_element.classList.add(className);
        }
    };
    this.removeClass = function (element, className) {
        const searched_element = document.querySelector(element);
        if (searched_element == null) {
            console.log("Элемент не найден");
        } else {
            searched_element.classList.remove(className);
        }
    };
    this.toggleClass = function (element, className) {
        const searched_element = document.querySelector(element);
        if (searched_element == null) {
            console.log("Элемент не найден");
        } else {
            searched_element.classList.toggle(className);
        }
    };
    this.hasClass = function (element, className) {
        const searched_element = document.querySelector(element);
        if (searched_element == null) {
            console.log("Элемент не найден");
        } else {
            const exist = searched_element.classList.contains(className);
            console.log(exist);
        }
    };
    this.append = function (element, newElement, beforeElement) {
        const searched_element = document.querySelector(element);
        if (searched_element == null) {
            console.log("Элемент не найден");
        } else if (beforeElement == undefined) {
            const element_name = document.createElement(newElement);
            searched_element.appendChild(element_name);
        } else {
            const element_name = document.createElement(newElement);
            const imsertedBeforEelement =
                searched_element.querySelector(beforeElement);
            const insertedElement = searched_element.insertBefore(
                element_name,
                imsertedBeforEelement
            );
        }
    };
    this.on = function (element, eventName, funcName) {
        const searched_element = document.querySelector(element);
        console.log(searched_element);
        searched_element.addEventListener(eventName, funcName);
    };
};
