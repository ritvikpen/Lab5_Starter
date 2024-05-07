// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as functions from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber valid', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber invalid', () => {
  expect(functions.isPhoneNumber('123-456-789')).toBe(false);
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('isEmail valid', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
  expect(functions.isEmail('test_test@example.com')).toBe(true);
});

test('isEmail invalid', () => {
  expect(functions.isEmail('test@example')).toBe(false);
  expect(functions.isEmail('test@.com')).toBe(false);
});

test('isStrongPassword valid', () => {
  expect(functions.isStrongPassword('Test1234')).toBe(true);
  expect(functions.isStrongPassword('a1b2c3d4')).toBe(true);
});

test('isStrongPassword invalid', () => {
  expect(functions.isStrongPassword('1234')).toBe(false);
  expect(functions.isStrongPassword('p@$$w0rd')).toBe(false);
});

test('isDate valid', () => {
  expect(functions.isDate('01/01/2000')).toBe(true);
  expect(functions.isDate('12/31/1999')).toBe(true);
});

test('isDate invalid', () => {
  expect(functions.isDate('01/01/00')).toBe(false);
  expect(functions.isDate('1231/1999')).toBe(false);
});

test('isHexColor valid', () => {
  expect(functions.isHexColor('#FFFFFF')).toBe(true);
  expect(functions.isHexColor('#000')).toBe(true);
});

test('isHexColor invalid', () => {
  expect(functions.isHexColor('#FFF0')).toBe(false);
  expect(functions.isHexColor('##123')).toBe(false);
});