// TypoPlay_01.js (You'll create this file)

document.addEventListener('DOMContentLoaded', () => {
    const inputTextarea = document.getElementById('input-text');
    const outputDiv = document.getElementById('output-text');
    const randomSwapOption = document.querySelector('.option:nth-child(1)'); // Selects "Random Swap"

    // Function to apply random swap typo effect
    function applyRandomSwap(text) {
        if (text.length < 2) {
            return text; // Cannot swap with less than 2 characters
        }
        let characters = text.split('');
        const randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);

        // Ensure the two random indices are different
        while (randomIndex1 === randomIndex2) {
            randomIndex2 = Math.floor(Math.random() * characters.length);
        }

        // Swap characters
        const temp = characters[randomIndex1];
        characters[randomIndex1] = characters[randomIndex2];
        characters[randomIndex2] = temp;

        return characters.join('');
    }

    // Event listener for the "Random Swap" option
    randomSwapOption.addEventListener('click', () => {
        const inputText = inputTextarea.value;
        if (inputText.trim() === '') {
            outputDiv.textContent = 'Please enter some text to generate a typo.';
            return;
        }
        const generatedTypo = applyRandomSwap(inputText);
        outputDiv.textContent = generatedTypo;
    });

    // Optional: Clear output when input changes
    inputTextarea.addEventListener('input', () => {
        outputDiv.textContent = 'Your generated typo will appear here...';
    });
});