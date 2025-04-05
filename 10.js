let purchasedItem = "perfume";
let stock = 4;
let bill = 20;
let customerPayment = 25;

const result = (purchasedItem === "perfume") && (stock > 0) && (bill <= customerPayment);

console.log("Transaction approved? : " + result);
