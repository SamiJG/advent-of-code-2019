const PASSWORD_RANGE = "273025-767253";

const isPossiblePassword = n => {
  if (n < 273025 || n > 767253) return false;

  let hasDouble = false;
  let digitsIncrease = true;
  for (let i = 0; i < 5; i++) {
    const str = n.toString();
    if (str[i] === str[i + 1]) {
      hasDouble = true;
    }
    if (str[i] > str[i + 1]) {
      digitsIncrease = false;
    }
  }
  if (!hasDouble) return false;
  if (!digitsIncrease) return false;

  return true;
};

const isPossiblePasswordPart2 = n => {
  if (n < 273025 || n > 767253) return false;

  let digitsIncrease = true;
  for (let i = 0; i < 5; i++) {
    const str = n.toString();
    if (str[i] > str[i + 1]) {
      digitsIncrease = false;
    }
  }
  if (!digitsIncrease) return false;

  const numberCount = n
    .toString()
    .split("")
    .reduce((acc, value) => {
      acc[value] !== undefined ? (acc[value]++) : (acc[value] = 1);
      return acc;
    }, {});
  return Object.values(numberCount).includes(2);
};

const possiblePasswords = (min, max) => {
  let possiblePasswords = [];
  for (let n = min; n <= max; n++) {
    if (isPossiblePasswordPart2(n)) possiblePasswords.push(n);
  }
  return possiblePasswords.length;
};

module.exports = {
  isPossiblePassword,
  isPossiblePasswordPart2,
  possiblePasswords
};

// console.log(possiblePasswords(273025, 767253));
