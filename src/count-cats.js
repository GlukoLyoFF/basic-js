const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0,
      ears = '^^';
  if (!Array.isArray(matrix) || matrix.length == 0) {return res; };
  matrix.forEach(item => res += item.filter(x => x == ears).length);
  return res;
};
