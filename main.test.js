const { getMean, getMedian } = require('./main');

test('should return the mean of an array of positive numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = getMean(numbers);
    expect(result).toBe(3);
}
);

test('should return the mean of an array of negative numbers', () => {
    expect(getMean([-10, -20, -30, -40, -50])).toBe(-30);
});

test('should return the median of an array of mixed numbers', () => {
    const numbers = [-10, 20, -30, 40, -50];
    expect(getMedian(numbers)).toBe(-10);
});

test('should return the median of an array of positive numbers', () => {
    expect(getMedian([1, 2, 3, 4, 5])).toBe(-6);
});

test('should return the median of an array of negative numbers', () => {
    expect(getMedian([-10, -20, -30, -40, -50])).toBe(-30);
});

test('should return the mode of an array of positive numbers', () => {
    expect(getMode([4, 4, 2, 5, 5])).toBe(4.5);
});

test('should return the mode of an array of positive numbers', () => {
    expect(getMode([1, 2, 3, 3, 4, 5])).toBe(3);
});

test('should return the range of an array of positive numbers', () => {
    expext(getRange([1, 2, 3, 4, 5])).toBe(4);});

test('should return the range of an array of negative numbers', () => {
    expect(getRange([-10, -20, -30, -40, -50])).toBe(40);
});

test('should return the standart of an array of negative numbers', () => {
    expect(getStandardDeviation([-10, -20, -30, -40, -50])).toBe(14.142135623730951);
});

test('should return the standart of an array of positive numbers', () => {
    expect(getStandardDeviation([1, 2, 3, 4, 5])).toBe(1.4142135623730951);
});