"use strict";
// Assignment No.1:
// Assignment 1: Building Your Friend List
// Learning Objective:Practice working with objects and arrays in TypeScript to create a data structure.
// Task:Create a program that manages a simple friend list.
// 1.Define an object named people containing an empty array called friends.
// 2.Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
// 3.Add these friend objects to the friends array within the people object.
// 4.Output the entire people object to the console,displaying your information and your friend list.
// Answer:
let people = {
    // Initialize the friends array with a type of array containing objects with properties firstName, lastName, and id
    friends: []
};
// Create friend1 object with properties firstName, lastName, and id.
let friend1 = {
    firstName: "Parizah",
    lastName: "Shaikh",
    id: 1
};
// Create friend2 object with properties firstName, lastName, and id.
let friend2 = {
    firstName: "Sana",
    lastName: "Shaikh",
    id: 2
};
// Create friend3 object with properties firstName, lastName, and id.
let friend3 = {
    firstName: "Sara",
    lastName: "Shaikh",
    id: 3
};
// Add friend1, friend2, and friend3 objects to the friends array within the people object
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
// Output the entire people object to the console 
console.log(people);
