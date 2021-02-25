
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];  
  if (matrix !== undefined) 
    for (let i = 0; i < matrix.length; i++){
      ((i + 1) % 2 == 0) ? res = res.concat(matrix[i].reverse()):
      res = res.concat(matrix[i]);
    }
  return res;
}
