
const conc = require('./someModule').conc


test('concat test', () => {
    expect(conc('a','b')).toBe('ab');
});

test('concat null', () => {
    expect(conc(null,null)).toBe(null);
});

test('concat null and 1', () => {
    expect(conc(null,1))).toBe(1);
});
