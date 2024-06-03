// Assignment No.3:
// Assignment 3: Company Product Catalog
// Learning Objective:Implement data structures in TypeScript to represent and manage product information.
// Task:Create a program to represent a product catalog using an array and perform basic queries.
// 1.Define an array named inventory to store product information.
// 2.Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
// 3.Add these product objects to the inventory array using an appropriate array method.
// 4.Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
// 5.Explore adding and accessing more elements within the inventory array to understand how to manage product data.



// Answer:
let inventory = [];

let product1 = {
    name: "Laptop",
    model: "Dell",
    cost: 50000,
    quantity: 5
}

inventory.push(product1);

let product2 = {
    name: "Mobile",
    model: "Samsung",
    cost: 20000,
    quantity: 10
}

inventory.push(product2);

let product3 = {
    name: "Laptop",
    model: "HP",
    cost: 30000,
    quantity: 15
}

inventory.push(product3);

console.log(inventory);

console.log(inventory[2].quantity);

inventory[2].quantity = 20;

console.log(inventory[2].quantity);

inventory.push({
    name: "Laptop",
    model: "Lenovo",
    cost: 40000,
    quantity: 20
});
