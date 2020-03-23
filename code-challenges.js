// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

//ONE LINE YO! Map the array, string interpolate the keys, modify the name using regex to select the first letter of all words in the string
function aboutMe(arr){
    arr.map( person => {
        console.log(`${person.name.replace(/\b\w/g, c => c.toUpperCase() )} is ${person.occupation.match(/president/gi)?"the":"a"} ${person.occupation}.`)})
}

console.log("\nQuestion One:");

aboutMe(people)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//Another One Liner! Filter out the non numbers, then map the values by the modulus 3 to get the remainders
function threeRemainder(arr){
    return arr.filter( value => typeof(value)==="number").map(value => value%3)
}

console.log("\nQuestion Two:");

console.log(threeRemainder(testingArray1));
console.log(threeRemainder(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

function makeOne(arrA, arrB){
    return [... new Set(arrA.concat(arrB))]
}
console.log("\nQuestion Three:");
console.log(makeOne(testingArray3, testingArray4));