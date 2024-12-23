 const add = require('tests/math.test.js');

// Calculate trigonometric functions
const angleInRadians = math.pi / 4; // 45 degrees in radians 
const sinValue = math.sin(angleInRadians);  // sin(45 degrees)
const cosValue = math.cos(angleInRadians);  // cos(45 degrees)
const tanValue = math.tan(angleInRadians);  // tan(45 degrees)

console.log('sin(45°):', sinValue);
console.log('cos(45°):', cosValue);
console.log('tan(45°):', tanValue);
