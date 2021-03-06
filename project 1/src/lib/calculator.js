module.exports.sum = (num1, num2) => {
  // +num1 converts any value into a number as long as possible

  const int1 = parseInt(num1);
  const int2 = parseInt(num2);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
};
