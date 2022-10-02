1.
let str = ('1, 2, 3, 4, 5, 6');
let a = 1 +2 +3;
let b = 4 + 5 +6;
if(a===b) {
    console.log('yes')
} else if(a !== b) {
    console.log("No")
}

2.
let n = 1000, num= 0;
while(n >= 50){
    n = n/2;
  num++;
}
console.log( num , n);

3.
let arr = [12, 15, 20, 25, 59, 79];
let result = arr.reduce(function(sum, current) {
    return sum + current;
});
console.log(result);
let result2 = result / arr.length;
console.log(result2);

4.
let arr4 = [1,2,3,4,5];
arr4.splice(3, 0, 'a', 'b', 'c');
console.log(arr4);


5.
let arr5 = [1,2,3,4,5];
arr5.splice(1, 0, 'a', 'b');
arr5.splice(6, 0, 'c');
arr5.push('e');
console.log(arr5);

6.
let arr6 = [3, 4, 1, 2, 7];
arr6.sort();
console.log(arr6);
