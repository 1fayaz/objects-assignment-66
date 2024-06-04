var Employee1 = {
    name: "Jan ALI",
    department: "Engineering",
    role: "Engineer",
    contact: {
        phone: "0300-0033033",
        email: "jan.ali@X.com"
    },
    skills: ["JavaScript", "TypeScript", "Python"]
};
var Employee2 = {
    name: "Fayaz Ali",
    department: "IT",
    role: "Manager"
};
console.log(Employee1);
console.log(Employee2);
var myCar = {
    engine: {
        horsepower: 2050
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    }
};
console.log(myCar.getHorsepower());
var myTShirt = {
    name: "Cool T-Shirt",
    price: 20,
    color: "green",
    inventory: {
        stock: 100,
        colorOptions: ["red", "blue", "green"],
        changeColor: function (newColor) {
            this.stock -= 1;
            if (newColor === "red") {
                this.stock += 1;
                myTShirt.price *= 1.10;
            }
            else if (newColor === "blue") {
                this.stock += 1;
                myTShirt.price *= 0.95;
            }
            else {
                this.stock += 1;
            }
            myTShirt.color = newColor;
        }
    }
};
console.log(myTShirt.price);
myTShirt.inventory.changeColor("red");
console.log(myTShirt.color);
console.log(myTShirt.price);
myTShirt.inventory.changeColor("blue");
console.log(myTShirt.color);
console.log(myTShirt.price);
