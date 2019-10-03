const sum = require('../main/sum');
const hello = require('../main/hello');
const Clazz = require('../main/classUsage');

test('1 + 2 は 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5 + 8 は 13', () => {
    expect(sum(5, 8)).toBe(13);
});

test('-30 + -21 は -51', () => {
    expect(sum(-30, -21)).toBe(-51);
});

test('Class const', () => {
    let clazz = new Clazz(1, 2);
    expect(clazz.value).toBe(3);
})

test('class me', () => {
    let clazz = new Clazz(2, 2);
    expect(clazz.getValue()).toBe(4);
})

test('hello yy', () => {
    expect(hello('yy')).toBe('yeah');
})

test('hello he', () => {
    expect(hello('he')).toBe('hello');
})

test('hello bo', () => {
    expect(hello('bo')).toBe('boy');
})
