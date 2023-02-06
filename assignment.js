// Problem 1: Let’s play a mind game
// First I multiplied my input by 3, then added 10 to the product, then divided the sum by 2, then subtracted 5 from the quotient and returned the subtraction.

function mindGame(myNumber){
    const newNumber = myNumber * 3;
    const addNumber = newNumber + 10;
    const devidedNumber = addNumber / 2;
    const finalNumber = devidedNumber - 5;
    return finalNumber;
    
}


// Problem 2: Finding even or odd
// In the second problem I took a string as input and then counted how many characters there were. Put the number of characters into a variable and return whether the number is even or odd.

function evenOdd(number){
    const totalCharacter = 7;
    return 'odd';
}


// Problem 3: Is Less or Greater than seven
// In the third problem I took an input number and subtracted 7 from it. Since the subtraction was less than 7, I returned the subtraction.

function isLGSeven(myNumber){
    const subtraction = myNumber - 7;
    return subtraction;
}


// Problem 4: Finding Bad data
// In the fourth problem I took an array as input, took some numbers in the array, found the bad data from the numbers, put it in a variable and returned the number of bad data.

function findingBadData(ages){
     const myBadData =  0;
     return myBadData;  
}


// Problem 5: Convert your gems into diamond
// In the fifth problem I have taken as input permutations the numbers of 3 friends. Then I added 21 to the first, 32 to the second and 43 to the third. Then I added the products together and since the sum is twice 1000, subtracted 2000 from the total and returned the subtraction.

function gemsToDiamond(friend1, friend2, friend3){
     const firstFriendGems = friend1 * 21;
     const secoundFriendGems = friend2 * 32;
     const thirdFriendGems = friend3 * 43;
     const totalDiamond = firstFriendGems + secoundFriendGems + thirdFriendGems;
     const remainingDiamond = totalDiamond - 2000;
     return remainingDiamond;
}
