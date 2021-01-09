const firstNumber = 34
const lastNumber = 11

var sumNumber = firstNumber + lastNumber

console.log("sum of " + firstNumber + " and " + lastNumber + " is : " + sumNumber)

if (firstNumber % 2 == 0)
    console.log(firstNumber + " is even")
else 
    console.log(firstNumber + " is odd")
// ============
const isTrue = true

if (firstNumber % 2 == 0 && isTrue)
    console.log(firstNumber + " are true and even")
else 
    console.log(firstNumber + " are both false")

// ============
console.log(`${firstNumber} ${lastNumber} ${"are combined using `${}`"}`)