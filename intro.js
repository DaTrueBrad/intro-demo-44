console.log("Hello :)")
// helloMyNameIsBrady
const firstName = "Brady"
let age = 27
let isCool = true
let capstoneName = null // Null is intentionally absent of value
let newTattoo = undefined // undefined is unintentionally absent of value
// two slashes
// "ctrl + /" or "cmd + /"     comment out the whole line
// BEnefits are: personal notes to ourselves, alows us to ignore code we don't want yet
/*
take longer notes
comment out whole sections of code
*/

console.log(firstName)
console.log(`Hello ${firstName}, who has rotated around the sun ${age} times.`)
// when using backticks, you can use ${} to references variable values, and they get placed into the string.

// ----------------- MATH -----------------------------
let x = 40
let y = 10
let z = 7 + 8

let sum = x - (y * z)
console.log(sum)

// ---------------------- conditional logic -------------------------
if (x > y) {
    // if code block ONLY runs if conditional results in something true
    console.log("X is greater than y!")
} else {
    //else code block ONLY runs if conditional results in something false
    console.log("Yeah that's wrong.")
}

if (isCool) {
    console.log("I'm cool :)")
} else {
    console.log("Git gud")
}

if (firstName === "Joely") {
    console.log("I'm the GOAT!")
} else {
    console.log("You're just a pretender.")
}