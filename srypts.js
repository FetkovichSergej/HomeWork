let str = "привет";
console.log(typeof str);
let sum = 123;
console.log(typeof sum);
let num = 15.8;
console.log(typeof num);
let flag = true;
console.log(typeof flag);
let txt = "true";
console.log(txt, typeof txt);
let a1 = 5 % 3;
console.log(a1, typeof a1);
let a2 = 3 % 5;
console.log(a2, typeof a2);
let a3 = 5 + "3";
console.log(a3, typeof a3);
let a4 = "5" - 3;
console.log(a4, typeof a4);
let a5 = 75 + "кг";
console.log(a5, typeof a5);
let a6 = 785 * 653;
console.log(a6, typeof a6);
let a7 = 100 / 25;
console.log(a7, typeof a7);
let a8 = 0 * 0;
console.log(a8, typeof a8);
let a9 = 0 / 2;
console.log(a9, typeof a9);
let a10 = 89 / 0;
console.log(a10, typeof a10);
let a11 = 98 + 2;
console.log(a11, typeof a11);
let a12 = 5 - 98;
console.log(a12, typeof a12);
let a13 = (8 + 56 * 4) / 5;
console.log(a13, typeof a13);
let a14 = ((9 - 12) * 7) / (5 + 2);
console.log(a14, typeof a14);
let a15 = +"123";
console.log(a15, typeof a15);
let a16 = {} || 1;
console.log(a16, typeof a16);
let a17 = false || true;
console.log(a17, typeof a17);
let a18 = true > false;
console.log(a18, typeof a18);
let width = 10;
let height = 23;
let SPryam = width * height;
console.log(`Площадь прямоугольника равна - ${SPryam}`);
height = 10;
let VCilindra = height * a7;
console.log(`Обьем цилиндра - ${VCilindra}`);
let Skruga = Math.PI * Math.pow(5, 2);
console.log(`Площадь круга - ${Skruga}`);
let STrap = ((5 * 7) / 2) * 10;
console.log(`Площадь трапеции - ${STrap}`);
let Pereplata = 2000000 * 0.1 * 5;
console.log(`Переплата - ${Pereplata}`);
let a = 8;
let b = 3;
let x = (16 - a) / 2 + b;
console.log(`Х равно - ${x}`);
x = (a * b - 15) / (1 - b);
console.log(`Х равно - ${x}`);
x = 23780 / (1 + 2 + a + b);
console.log(`Х равно - ${x}`);
str = `Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою.`;
console.log(str);
let text1 = "индо земля зашаталась под ногами-и вырос,";
let text2 = "и заревел он голосом диким...";
let text3 = "блеснула молния и ударил гром,";
let text4 = "а так какое-то чудище, страшное и мохнатое,";
let text5 = "как будто из-под земли, перед купцом:";
let text6 = "Он подошёл и сорвал аленький цветочек.";
let text7 = "зверь не зверь, человек не человек,";
let text8 = "В ту же минуту, безо всяких туч,";
let final = [text6, text8, text3, text1, text5, text7, text4, text2];
let stix = final.join("\n");
console.log(stix);
