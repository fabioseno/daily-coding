function firstMissingPositive(inputArray: number[]) {
    if (!Array.isArray(inputArray)) return inputArray;
    if (!inputArray.length) return inputArray;

    let sortedArray = inputArray.sort((num1, num2) => num1 - num2);

    let missingPositive = 1;
    for (let i = 0; i < sortedArray.length; i++) {
        const number = sortedArray[i];

        // if (number >= missingPositive) missingPositive = number;

        if (number > 0 && missingPositive < number) {
            return ++missingPositive;
        }
    }

    return ++missingPositive;
}

console.log(firstMissingPositive([3, 4, -1, 1]) === 2);
console.log(firstMissingPositive([1, 2, 0]) === 3);
