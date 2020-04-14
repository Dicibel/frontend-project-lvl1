export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getProgressionElement = (start, step, i) => start + step * i;

export const isEven = (number) => number % 2 === 0;

export const isGCD = (number1, number2) => {
  const int = number1 > number2 ? number2 : number1;
  let result;
  for (let i = 1; i <= int; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};
export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
