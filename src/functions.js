export function capitalize(string) {
    if (string.length === 0) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) throw new Error('Cannot divide by zero');
      return a / b;
    },
  };
  
  function shiftChar(char, shift) {
    const code = char.charCodeAt(0);
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return char;
  }
  
  export function caesarCipher(string, shift) {
    const normalizedShift = shift % 26;
    return string
      .split('')
      .map(char => shiftChar(char, normalizedShift))
      .join('');
  }

export function analyzeArray(arr) {
    if (arr.length === 0) {
      return {
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0
      };
    }
  
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      average,
      min,
      max,
      length: arr.length
    };
  }