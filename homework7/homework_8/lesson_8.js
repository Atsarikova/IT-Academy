1.
let array =[1,2,3,4,5,6];
let new_array = reverse(array);
function reverse(array) {
    let new_array = new Array;
    let i = array.length - 1;
    for (i ; i >= 0; i--) 
        new_array.push(array[i]);
    return new_array;
}
console.log(new_array);

2.
let my_array = [3,63,15,20,55];
function max(prev, current) {
      return Math.max(prev, current);
    };
  console.log(my_array.reduce(max));

3.
let element = 10;
function subsequence(element){
    let array = [0,1];
    let i = 2;

    for (i; i <= element; i++){
    let element1 = array[i - 1];
    let element2 = array[i - 2];
    array.push(element1 + element2);
    }
    return(array); 

}
console.log(subsequence(element));

4.
let figure1 = "3487";
let figure2 = "3794";
 let arr1 = figure1.split("", 4);
 let arr2 = figure2.split("", 4);
console.log(typeof arr1);
let newArr = [];
function coincidence (arr1, arr2){
    
    for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
    if (arr1 [i] == arr2 [j]) {
        newArr.push(arr1[i]);
    }
    }
}
    return newArr;
}
console.log(coincidence (arr1, arr2));
console.log('Количество цифр совподающих по значению в числах = ' + newArr.length);


let array5 = [3,4,8,7];
let array6 =[3,7,9,4];
let total_point = 0;
let i = 0;
for (i; i <array5.length; i++) {;
if (array5[i] == " ") continue;
else total_point += (array5[i] == array6[i])
}
console.log("Количество элементов совподающих по индексу и значению =" + total_point);

5.
let array_5 = [1,9,7,2,5];
array_5.sort (function(a, b) {
    return(a-b);
});
console.log(array_5);

const array55 = [3,20,9,7,2,5,1];
array55.sort (function(a, b) {
    return(a-b);
});
let array1 = array55.reverse();
console.log(array1);

6.
let array_6= [1,1,2,2,5];
let mossiv = [];
array_6.forEach(function(element) {
    if (!mossiv.includes(element))
    mossiv.push(element);
});
console.log(mossiv);

