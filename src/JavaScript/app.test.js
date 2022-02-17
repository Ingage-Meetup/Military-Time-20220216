const { timeConversion } = require('./app');

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information
// test('doAllTheThings should be true', () => {
//     expect(doAllTheThings()).toBeTruthy();
// });

// empty input
test('nimno forgot to put the date in', () => {
    expect(timeConversion('')).toBe(-1);
})

// 12:00:00AM input
test('12:00:00AM is 00:00:00', () => {
    expect(timeConversion('12:00:00AM')).toBe('00:00:00');
})

// 01:01:00AM input
test('01:01:00AM is 01:01:00', () => {
    expect(timeConversion('01:01:00AM')).toBe('01:01:00');
})

// 11:59:59AM input
test('11:59:59AM is 11:59:59', () => {
    expect(timeConversion('11:59:59AM')).toBe('11:59:59');
})

// 08:30:02AM input
test('08:30:02AM is 08:30:02', () => {
    expect(timeConversion('08:30:02AM')).toBe('08:30:02');
})

test('12:00:00PM is 12:00:00', () => {
    expect(timeConversion('12:00:00PM')).toBe('12:00:00');
})


test('01:01:00PM is 13:01:00', () => {
    expect(timeConversion('01:01:00PM')).toBe('13:01:00');
})

test('11:59:59PM is 23:59:59', () => {
    expect(timeConversion('11:59:59PM')).toBe('23:59:59');
})

test('08:30:02PM is 20:30:02', () => {
    expect(timeConversion('08:30:02PM')).toBe('20:30:02');
})