// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('correct phone number1', () => {
    expect(functions.isPhoneNumber("(347) 342-3434")).toBe(true);
});

test('correct phone number2', () => {
    expect(functions.isPhoneNumber("(593) 123-1234")).toBe(true);
});

test('wrong phone number1', () => {
    expect(functions.isPhoneNumber("231")).toBe(false);
});

test('wrong phone number2', () => {
    expect(functions.isPhoneNumber("yea")).toBe(false);
});

test('correct email1', () => {
    expect(functions.isEmail("something@gmail.com")).toBe(true);
});

test('correct email2', () => {
    expect(functions.isEmail("person@ucsd.edu")).toBe(true);
});

test('wrong email1', () => {
    expect(functions.isEmail("hello")).toBe(false);
});

test('wrong email2', () => {
    expect(functions.isEmail("something@efe")).toBe(false);
});

test('strong password1', () => {
    expect(functions.isStrongPassword("goodone1233")).toBe(true);
});

test('strong password2', () => {
    expect(functions.isStrongPassword("ffejfe123_1231")).toBe(true);
});

test('not strong password1', () => {
    expect(functions.isStrongPassword("@@@@")).toBe(false);
});

test('not strong password2', () => {
    expect(functions.isStrongPassword("1")).toBe(false);
});

test('correct date1', () => {
    expect(functions.isDate("5/2/2000")).toBe(true);
});

test('correct date2', () => {
    expect(functions.isDate("9/2/2021")).toBe(true);
});

test('wrong date1', () => {
    expect(functions.isDate("400/40/2312")).toBe(false);
});

test('wrong date2', () => {
    expect(functions.isDate("0/231/2")).toBe(false);
});

test('correct hex1', () => {
    expect(functions.isHexColor("000000")).toBe(true);
});

test('correct hex2', () => {
    expect(functions.isHexColor("FF5733")).toBe(true);
});

test('wrong hex1', () => {
    expect(functions.isHexColor("291274903274")).toBe(false);
});

test('wrong hex2', () => {
    expect(functions.isHexColor("yep")).toBe(false);
});