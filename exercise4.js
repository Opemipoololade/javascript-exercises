// Question 16
let character = "A";
if (character >= "A" && character <= "Z") {
  console.log("Uppercase letter");
} else if (character >= "a" && character <= "z") {
  console.log("Lowercase letter");
} else {
  console.log("Neither");
}

// Question 17
let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense ? "Can drive" : "Cannot drive");

// Question 18
let totalAmount = 1000;
let isMember = true;

let discountRate = isMember ? 0.2 : 0.05;
let finalAmount = totalAmount - totalAmount * discountRate;
console.log("Final amount:", finalAmount);

// Question 19
let number = 15;
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Question 20
let hour = 14;
if (hour >= 5 && hour <= 11) console.log("Good morning");
else if (hour >= 12 && hour <= 17) console.log("Good afternoon");
else if (hour >= 18 && hour <= 21) console.log("Good evening");
else console.log("Good night");

