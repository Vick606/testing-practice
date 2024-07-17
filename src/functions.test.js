/* global describe, test, expect */

import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions';

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('works with already capitalized strings', () => {
    expect(capitalize('World')).toBe('World');
  });

  test('works with empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('works with empty strings', () => {
    expect(reverseString('')).toBe('');
  });

  test('works with palindromes', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('handles division by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow();
  });
});

describe('caesarCipher', () => {
    test('shifts characters correctly', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
    });
  
    test('wraps from z to a', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });
  
    test('maintains case', () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
  
    test('handles punctuation and spaces', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
  
    test('handles empty strings', () => {
      expect(caesarCipher('', 5)).toBe('');
    });
  
    test('handles large shift factors', () => {
      expect(caesarCipher('abc', 28)).toBe('cde');
    });
  });

describe('analyzeArray', () => {
  test('correctly analyzes an array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles an array with one element', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('handles an empty array', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0
    });
  });

  test('handles decimal numbers', () => {
    const result = analyzeArray([1.5, 2.5, 3.5]);
    expect(result).toEqual({
      average: 2.5,
      min: 1.5,
      max: 3.5,
      length: 3
    });
  });
});