// Matrix creation and basic operations
let matrixA = math.matrix([[1, 2], [3, 4]]);
let matrixB = math.matrix([[5, 6], [7, 8]]);

// Matrix addition
let matrixSum = math.add(matrixA, matrixB);
console.log(`Matrix Addition: ${math.format(matrixSum)}`);

// Matrix multiplication
let matrixProduct = math.multiply(matrixA, matrixB);
console.log(`Matrix Multiplication: ${math.format(matrixProduct)}`);

