/* to run this file:
 * 1. go here: https://repl.it/languages/nodejs
 * 2. paste the code below into the left window
 * 3. click the 'run' button on the top of the page
 * 4. results show in the right window
 * 
 * If you need to run this program for any other data simply change the numbers in between the [] on the line where it says 'let arr = [some numbers here];'
 */

let arr = [35, 10, 22, 38, 31, 27, 53, 44, 16, 44, 25, 12];

// range
const max = Math.max(...arr);
const min = Math.min(...arr);
const range = max - min;
console.log(`range = ${max} - ${min} = ${range}\n`);

// mean
const meanNumerator = arr.reduce((x, y) => x + y, 0);
const meanDenominator = arr.length;
const mean = meanNumerator / meanDenominator;
console.log(`mean = ${meanNumerator} / ${meanDenominator} = ${mean}\n`);

let numerator = 0;
for (let i = 0; i < arr.length; i++) {
    const xSubI = arr[i];
    console.log(`x sub i = ${xSubI}`);

    const minusMean = xSubI - mean;
    console.log(`${xSubI} - ${mean} = ${minusMean}`);

    const minusMeanSquared = Math.pow(minusMean, 2);
    console.log(`(${xSubI} - ${mean})^2 = ${minusMeanSquared}`);

    numerator += minusMeanSquared;

    console.log('\n');
}

console.log(`sigma(x sub i - mean)^2 = ${numerator}\n`);

// variance
const variance = numerator / (arr.length - 1);
console.log(`variance = ${numerator} / (${arr.length} - 1) = ${variance}\n`);

// standard deviation
const standardDeviation = Math.sqrt(variance);
console.log(`standard deviation = ${standardDeviation}`);