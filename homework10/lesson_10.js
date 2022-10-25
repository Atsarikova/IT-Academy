
class Car {
    constructor(model, year, color, seats, fuel, price) {
      this.model = model;
      this.year = year;
      this.color = color;
      this.seats = seats;
      this.fuel = fuel;
      this.price = price;
     
    }

}
class limousine {
    constructor() {
        this.parktronic = false;
        this.model = 'Lincoln';
        this.color = 'black';
        this.fuel = '12/100';
        this.price = 11125;
    }
} 

class limousineBuilder {
    constructor() {
        this.limousine1 = new limousine();
    }

    addParktronic(parktronic) {
        this.limousine1.parktronic = parktronic;
        return this;
    }
    build() {
        return this.limousine1;
    }
}

let limousine1 =(new limousineBuilder().addParktronic(true).build());

console.log(limousine1);

class Sedan extends Car {
    constructor(model, year, color, seats, fuel, price) {
        super(model, year,color, seats, fuel, price);
        this.conditioner = false;
    }
}
const sedan = new Sedan("reno", "1999" ,"grey", "5", "8/100", 3500)
const sedan_2 = new Sedan("pegeot", "2015" ,"red", "5", "10/100", 8150)

class Minivan extends Car {
    constructor(model, year, color, seats, fuel, price) {
        super(model, year,color, seats, fuel, price);
        this.conditioner = true;
    }
}
const minivan = new Minivan("subaru", "1996" ,"green", "7", "7/100", 9250)

let arr = [limousine1, sedan, sedan_2, minivan];

arr.sort((a, b) => parseFloat(a.fuel) - parseFloat(b.fuel))
console.log(arr.sort())

const sumTotal = arr =>
  arr.reduce((sum, { price}) => sum + price, 0)

const data = [limousine1, sedan, sedan_2, minivan];

const total = sumTotal(data)

console.log("Стоимость всего автопарка составит " + total)


const index = arr.map(item => item.model).indexOf('reno');

console.log(arr[index]);