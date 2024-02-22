let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 5;

let a = function (arr, k) {
  for (let i = 0; i < k; i++) {
    arr.push(arr[0]);
    arr.shift();
  }
  return arr;
};
console.log(a(arr, k));
