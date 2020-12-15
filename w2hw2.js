/* 
Write a function maxOfTwoNumbers that takes two numbers as arguments
 and returns the largest of them. 
 Use the if-then-else construct available in Javascript
*/

function maxOfTwoNumbers(firstnum, secondnum) {
    if(firstnum > secondnum) {
        console.log(`${firstnum} is larger than ${secondnum}`);
    } else {
        console.log(`${secondnum} is larger than ${firstnum}`);
    }
    return;
}

maxOfTwoNumbers(32, 50);

/*
Write a function maxOfThree that takes three numbers as arguments 
and returns the largest of them.
*/

function maxOfThree(firstnum, secondnum, thirdnum) {
    return Math.max(firstnum, secondnum, thirdnum);
}

console.log(maxOfThree (13, 42, 30) + " is the largest of the three numbers");

/*
Write a function isCharacterAVowel that takes a character 
(i.e. a string of length 1) and returns true if 
it is a vowel, false otherwise
*/

function isCharacterAVowel(char) {
    let character = char;
    if (character === 'A' || character === 'E' || character === 'I' || character === 'O'|| character === 'U' ||
        character === 'a' || character === 'e' || character === 'i' || character === ''|| character === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(`\n` + isCharacterAVowel('b') + `\n`);


/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
 all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
 should return 10, and multiplyArray([1,2,3,4]) should return 24
*/

testArray = [1, 2, 3, 4];

function sumArray(testArray) {
    let arr1 = testArray;
    let arrSum = 0;
    let i = 0;
    while (i < arr1.length) {
        arrSum += arr1[i];
        i++;
    }
    console.log(`The sum of the array is ${arrSum}.`);
}

function multiplyArray(testArray) {
    let arr1 = testArray;
    let arrProduct = 1;
    let i2 = 0;
    while (i2 < arr1.length) {
        arrProduct *= arr1[i2];
        i2++;
    }
    console.log(`The product of the array is ${arrProduct}.`);
}

function runArrayMath(sumArray, multiplyArray) {
    console.log(`The array being tested is ${testArray}.`);
    sumArray(testArray);
    multiplyArray(testArray);
}

runArrayMath(sumArray, multiplyArray);

/* 
Write a function that returns the number of arguments
 passed to the function when called.
*/
function learnArguments() {
    return(arguments.length);
}

console.log(learnArguments(12, 16, 18));

/*
Define a function reverseString that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(str) {
    if (!str) { 
        str = this; 
    }

    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
};

reverseString('jag testar');

/*
Write a function findLongestWord that takes an array of words
 and returns the length of the longest one.
*/

function findLongestWord(arr) {
    let longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length;
        }
    }
    return longestWord;
}

const wordArray = ['find', 'longest', 'word', 'opportunity']
console.log(findLongestWord(wordArray));

/*
Write a function filterLongWords that takes an array of 
words and a number i and returns the array of words that are longer 
than i characters long.
*/

function filterLongWords(arr, i) {
    let longWordArray = [];
    for (let test = 0; test < arr.length; test++) {
        if (arr[test].length > i) {
            longWordArray += arr[test];
        }
    }
    return longWordArray;
}

const newWordArray = filterLongWords(wordArray, 5);
console.log(newWordArray);
