//Task 1: Create the Order System
let orders = [
  ["Latte", "Tea", "Espresso"],  // Drinks category (row 0)
  ["Croissant", "Muffin", "Bagel"] // Pastries category (row 1)
];

//Task 2: Log the number of drinks and number of pastries

console.log("Number of drinks:", orders[0].length);  // 3
console.log("Number of pastries:", orders[1].length); // 3

//Task 3: Access Orders Using Bracket Notation
console.log(orders[0][0]); // First drink: "Latte"
console.log(orders[1][2]); // Last pastry: "Bagel"
console.log(orders[0][2]); // Another drink: "Espresso"
console.log(orders[1][0]); // Another pastry: "Croissant"
console.log(orders[0][1]); // Another drink: "Tea"
console.log(orders[1][1]); // Another pastry: "Muffin"

//Task 4: Access Orders Dynamically with Variables
let row, item;

row = 0; // Drinks category
item = 1; // Second drink
console.log(orders[row][item]); // "Tea"

row = 1; // Pastries category
item = 0; // First pastry
console.log(orders[row][item]); // "Croissant"

//Task 5: Write a loop to log all items in the drink category
for (let i = 0; i < orders[0].length; i++) {
  console.log(orders[0][i]);
}
// Output:
// "Latte"
// "Tea"
// "Espresso"

//Task 6: Add a New // Add "Flat White" to the drinks category
orders[0].push("Flat White");
console.log("Updated number of drinks:", orders[0].length); // 4

// Log the selected order dynamically
let category = 0; // Drinks category
let orderIndex = 3; // Newly added order
console.log(orders[category][orderIndex]); // "Flat White"


