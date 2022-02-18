function multiplyOtherItemsV1(inputArray: number[]) {
    if (!Array.isArray(inputArray)) return inputArray;
    if (!inputArray.length) return inputArray;

    let totalValue: number = inputArray.reduce((total, item, index) => !index ? item : total * item, 0);

    return inputArray.map(item => totalValue / item);
}

interface Array<T> {
    equals(o: T[]): boolean;
}

Array.prototype.equals = function (array: number[]) {
    return this.length === array.length && this.every((value, index) => value === array[index]);
}

// function compareArrays(array1: number[], array2: number[]) {
//     if (array1.length !== array2.length) return false;

//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) return false;
//     }

//     return true;
// }

console.log(multiplyOtherItemsV1([1, 2, 3, 4, 5]).equals([120, 60, 40, 30, 24]));
console.log(multiplyOtherItemsV1([3, 2, 1]).equals([2, 3, 6]));
