class Car {
    constructor(stock, color, size) {
        this.stock = stock;
        this.color  = color;
        this.size = size;
    }

    getColor() {
        return this.color;
    }

    getSize() {
        return this.size;
    }

}

const car1 = new Car("3", "blue", "large");
const car2 = new Car ("1", "red", "large");
const car3 = new Car ("1", "blue", "medium");
const car4 = new Car ("1", "red", "medium");
const car5 = new Car ("2", "red", "small");

console.log(car1);
console.log(car2.getColor());
console.log(car3.getSize());


