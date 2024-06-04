#! /usr/bin/env node 
type Employee = {
   name: string,
   department: string,
   role: "Manager" | "Engineer" | "Intern",
   contact?: Contact,
   skills?: string[]
}

type Contact = {
   phone?: string,
   email?: string
}


const Employee1: Employee = {
   name: "Jan ALI",
   department: "Engineering",
   role: "Engineer",
   contact: {
       phone: "0300-0033033",
       email: "jan.ali@X.com"
   },
   skills: ["JavaScript", "TypeScript", "Python"]
}

const Employee2: Employee = {
   name: "Fayaz Ali",
   department: "IT",
   role: "Manager"
}

console.log(Employee1);
console.log(Employee2);


type Engine = {
   horsepower: number
 }
 

 type Car = {
   engine: Engine
   
   getHorsepower: () => number
 }
 

 const myCar: Car = {
   engine: {
     horsepower: 2050
   },
   getHorsepower: function() {
     return this.engine.horsepower;
   }
 }
 
 
 console.log(myCar.getHorsepower()); 
 
 const myTShirt: Product = {
   name: "Cool T-Shirt",
   price: 20,
   color: "green",
   inventory: {
     stock: 100,
     colorOptions: ["red", "blue", "green"],
     changeColor: function(newColor: string) {
       this.stock -= 1
       if (newColor === "red") {
         this.stock += 1
         myTShirt.price *= 1.10; 
       } else if (newColor === "blue") {
         this.stock += 1
         myTShirt.price *= 0.95; 
       } else {
         this.stock += 1
       }
       myTShirt.color = newColor
     }
   }
 }
 type Inventory = {
   stock: number;
   colorOptions?: string[];
   changeColor: (newColor: string) => void;
 }
 

 type Product = {
   name: string;
   price: number;
   color: string;
   inventory: Inventory;
 }
 

 console.log(myTShirt.price)
 myTShirt.inventory.changeColor("red")
 console.log(myTShirt.color)
 console.log(myTShirt.price) 
 myTShirt.inventory.changeColor("blue")
 console.log(myTShirt.color) 
 console.log(myTShirt.price) 