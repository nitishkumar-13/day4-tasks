let sumArr = function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
};
console.log(sumArr([1, 3, 4, 5]));
