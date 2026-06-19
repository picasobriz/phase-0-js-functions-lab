// Function to calculate tax
function calculateTax(amount) {
    let tax = amount * 0.1; 
    return tax;
}
let amount =100
console.log(calculateTax(100));
//function to convert a string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
let text = "racecar";
console.log(convertToUpperCase(text));

// Function to find the maximum of two numbers
function findMaximum(num1, num2) {
    if (num1 > num2) {return num1;}
    if (num2 > num1) {return num2;}
    if (num1 === num2) {return "Both numbers are equal";}
}
let num1=5;
let num2=15;
console.log(findMaximum(num1, num2));

//palindrome
function isPalindrome(word){
    let reservedWord=word.split('').reverse().join('')
    return word === reservedWord;
}
let word ="racecar"
console.log(isPalindrome("racecar"));

//discounted price
function calculateDiscountedPrice(originalPrice, discountedPercentage){
    let discountedPrice = originalPrice - (originalPrice * discountedPercentage / 100);
    return discountedPrice;
}
let originalPrice = 50000;
let discountedPercentage = 5;
console.log(calculateDiscountedPrice(originalPrice, discountedPercentage));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };