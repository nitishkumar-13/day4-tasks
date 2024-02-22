const findMedian = function (arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;
  const totalLength = arr1.length + arr2.length;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  const mid = totalLength / 2;
  return totalLength % 2 === 0
    ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
    : mergedArray[Math.floor(mid)];
};

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = findMedian(arr1, arr2);
console.log(median);
