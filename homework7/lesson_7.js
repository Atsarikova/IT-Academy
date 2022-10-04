// 1.
let randNum1 = Math.round(Math.random() * 6);
let randNum2 = Math.round(Math.random() * 6);
let randNum3 = Math.round(Math.random() * 6);
let randNum4 = Math.round(Math.random() * 6);
let randNum5 = Math.round(Math.random() * 6);
let randNum6 = Math.round(Math.random() * 6);
let plaer1 = randNum1 + randNum3 + randNum5;
let plaer2 = randNum2 + randNum4 + randNum6;
console.log(plaer1);
console.log(plaer2);
if(plaer1 === plaer2){
    console.log("Ничья!!!")
}  else if(plaer1 <= plaer2) {
    console.log("Победа Игрока №1!")
} else {(plaer1 <= plaer2) 
console.log("Победа Игрока №2!")
}

// 2.
function numberOfFridaythe13thsIn(jahr) {
    var count = 0;
    for (var month=0; month<12; month++) {
        var d = new Date(jahr,month,13);
        if(d.getDay() == 5){
          count++;
     
       }
    }
    return count;                            
}
 
console.log(numberOfFridaythe13thsIn(2020));
console.log(numberOfFridaythe13thsIn(2021));
console.log(numberOfFridaythe13thsIn(2022));
let all = numberOfFridaythe13thsIn(2020) + numberOfFridaythe13thsIn(2021) + numberOfFridaythe13thsIn(2022);
console.log("Всего пятниц 13 = " + all);

// 3.
// Целые числа
let n = Math.floor(Math.random() * 15);
console.log(n);
let n1 = Math.floor(Math.random() * (15 - n));
console.log(n1);
let n2 = 15 - n - n1;
console.log(n2);
console.log(n + n1 + n2);

// Дробные числа
let m = Math.random() * 15;
let m1 = (m.toFixed(2));
console.log(m1);
let number = (15 - +m1);
let k = Math.random() * number;
let k1 = (k.toFixed(2));
console.log(k.toFixed(2))
let d = 15 - m1 -k1;
console.log(d.toFixed(2));
console.log(m1 + " " +k1 + " " +(d.toFixed(2)));
let answer = 15 - m1 - k1 -d;
console.log('Проверка 15 - 3 числа = ' + answer);

