// Function to check if a string is a palindrome
function checkPalindrome() {
    let keepGoing = true; 

    // result with a palindrome example
    document.getElementById("result").innerText = `"racecar" is a palindrome!`;

    // While loop allow user to check multiple words
    while (keepGoing) {
        // Prompt the user for input
        let input = prompt("Enter a word to check if it's a palindrome (or click Cancel to stop):");

        // If the user cancels or inputs nothing, break out of the loop
        if (input === null || input === "") {
            alert("Thanks for checking palindromes! Goodbye!");
            keepGoing = false;
            break;
        }

        // Use the ID to reference the result div
        let resultElement = document.getElementById("result");

        // Remove spaces and make the string lowercase for checking
        let cleanedInput = input.replace(/\s+/g, '').toLowerCase();
        
        // Reverse the string and compare to original
        let reversedInput = cleanedInput.split('').reverse().join('');
        
        // Check if the word is a palindrome
        if (cleanedInput === reversedInput) {
            resultElement.innerText = `"${input}" is a palindrome!`;
        } else {
            resultElement.innerText = `"${input}" is not a palindrome.`;
        }

        // Ask if the user wants to check another word
        keepGoing = confirm("Would you like to check another word?");
    }
}

