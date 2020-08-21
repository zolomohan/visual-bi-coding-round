const array = [1, 2, 3, 4, 5, 6, 7];
const rotationFactor = 3;

const arrayRotate = (arr, k) => {
  for (let i = 0; i < k; i++) arr.unshift(arr.pop());
  return arr;
};

console.log(arrayRotate(array, rotationFactor));
