function isSumOfTwo(inputArray: number[], sum: number) {
    if (!Array.isArray(inputArray)) return false;

    for (let i = 0; i < inputArray.length; i++) {
        const firstNumber = inputArray[i];

        for (let j = i + 1; j < inputArray.length; j++) {
            const secondNumber = inputArray[j];

            if (i !== j) {
                if (firstNumber + secondNumber === sum) {
                    return true;
                }
            }
        }
    }

    return false;
}

console.log(isSumOfTwo([10, 15, 3, 7], 17) === true);
console.log(isSumOfTwo([1, 3, 2, 0], 3) === true);
console.log(isSumOfTwo([1, 3, 2, 0], 6) === false);