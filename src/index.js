module.exports = function reverse (n) {
    if (isNaN(n) || n === null || n === undefined) return 0;

    const positiveN = Math.abs(n);
    const arrayOfChars = Array.from(String(positiveN));
    const reversString = arrayOfChars.reverse().join('');
    return Number(reversString);
}
