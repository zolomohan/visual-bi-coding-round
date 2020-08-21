const mx = [
  [1, 1, 1, 1],
  [0, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
];

let total = 0;
for (let i = 0; i < mx.length; i++)
  for (let j = 0; j < mx[i].length; j++)
    if (mx[i][j] == 1) {
      total++;
      findIslands(i, j);
    }

console.log(total);

function findIslands(i, j) {
  try {
    if (mx[i][j] == 1) {
      mx[i][j] = 0;
      findIslands(i + 1, j);
      findIslands(i, j + 1);
      findIslands(i - 1, j);
      findIslands(i, j - 1);
    }
  } catch (e) {}
}
