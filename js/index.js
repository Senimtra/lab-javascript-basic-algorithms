//################################
//# Iteration 1: Names and Input #
//################################

// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "DangerMouse";

// 1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}.`);

// 1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "ErnestPenfold";

// 1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator's name is ${hacker2}.`);


//#############################
//# Iteration 2: Conditionals #
//#############################

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}


//######################
//# Iteration 3: Loops #
//######################

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let threeOne = '';
for (i = 0; i < hacker1.length; i++) {
    threeOne += hacker1[i] + " ";
}
console.log(threeOne.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let threeTwo = [];
for (i = 0; i < hacker2.length; i++) {
    threeTwo.unshift(hacker2[i]);
}

let threeTwoResult = '';
for (i = 0; i < threeTwo.length; i++) {
    threeTwoResult += threeTwo[i];
}

console.log(threeTwoResult);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

for (i = 0; i < hacker1.length; i++) {
    if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
        console.log("What?! You both have the same name?");
        break;
    } else if (hacker1.localeCompare(hacker2) === -1) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1.localeCompare(hacker2) === 1) {
        console.log("Yo, the navigator goes first definitely.");
        break;
    }
}


//###########
//# Bonus 1 #
//###########

// Go to lorem ipsum generator and: Generate 3 paragraphs.
// Store the text in a variable type of string.

// B1.1: Make your program count the number of words in the string.

let loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

let wordCount = 1; // starting at 1, because there will be one more word than spaces
for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === " ") {
        wordCount += 1;
    }
}
console.log(`The text contains ${wordCount} words.`);

// B1.2: Make your program count the number of times the Latin word et appears.

let punctReduce = '';
for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] !== "," && loremIpsum[i] !== ".") { // remove "," + "."
        punctReduce += loremIpsum[i]
    }
}

let etCount = 0;
for (i = 0; i < punctReduce.length; i++) {
    if ((punctReduce[i] === " ") && (punctReduce[i + 1] === "e") && (punctReduce[i + 2] === "t") && (punctReduce[i] === " ")) {
        etCount += 1; // check for " et " + increment counter
    }
}

console.log(`The Latin word "et" appears ${etCount} times.`);


//###########
//# Bonus 2 #
//###########

// Create a new variable phraseToCheck and have it contain some string value.
// Write a code that will check if the value we assigned to this variable is a Palindrome.

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃

// Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

palinTest = "A man, a planT, a canal, Panama!"

palinShort = '';
for (i = 0; i < palinTest.length; i++) {
    if ((/[a-zA-Z]/).test(palinTest[i]) === true) { // check for letters
        palinShort += palinTest[i];
    }
}

palinLow = palinShort.toLowerCase();

for (i = 0; i < palinLow.length / 2; i++) {
    if (palinLow[i] !== palinLow[palinLow.length - (i + 1)]) {
        console.log("The string is NOT a palindrome.")
        break;
    }
}