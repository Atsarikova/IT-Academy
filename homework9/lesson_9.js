
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

1.

const a = new Promise((resolve,reject) => {
    setTimeout(() => {
resolve(1)
    },(random(1,5)) * 1000)
})
const b = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(2)
    }, (random(1,5)) * 1000);
})
const c = new Promise((resolve,reject) =>{
setTimeout(() => {
    resolve(3)
}, (random(1,5)) * 1000);
})
Promise.race ([a, b, c]) 
.then((value) => {
    console.log(value)
});

2.

function getNum() {
    return new Promise((resolve, reject) => {
        const num = random(1, 5);
        console.log(num);
        setTimeout(() => {
            return resolve(num);
        }, 3000);
    });
};
async function getPowNum() {
    const result = await getNum();
    console.log((Math.pow(result,2)));
    return (Math.pow(result,2));
};
getPowNum();

3.

function getNum1() {
    return new Promise((resolve, reject) => {
        const num = random(1, 5);
        console.log(num);
        setTimeout(() => {
            return resolve(num);
        }, 3000);
    });
};
function getNum2() {
    return new Promise((resolve, reject) => {
        const num = random(6, 10);
        console.log(num);
        setTimeout(() => {
            return resolve(num);
        }, 5000);
    });
};
async function returnSum() {
    const result1 = await getNum1();
    const result2 = await getNum2();
    console.log(result1 + result2);
};
returnSum();


