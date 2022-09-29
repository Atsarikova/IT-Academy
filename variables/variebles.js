let num = 1;
let str = 'first_str555';
let bool = true;

// Сложение
sum = str + ' ' + bool;
sum1 = str + ' ' + num;
sum2 = num + ' ' + bool;
console.log(sum, sum1, sum2);

// Умножение
multi = str * bool;
multi1 = str * num;
multi2 = num * bool;
console.log(multi, multi1, multi2);

// Деление
div = str / bool;
div1 = str / num;
div2 = num / bool;
console.log(div, div1, div2);

// Преобразование
console.log(typeof num);
num = String(1);
console.log(typeof num);
console.log(typeof str);
console.log(typeof +str);
console.log(typeof bool);
bool = String(true);
console.log(typeof bool);



