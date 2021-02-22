const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let depth = 0;
      arr.forEach(e => {
        depth = Math.max(depth, this.calculateDepth(e));
      });
      return depth + 1;
    } else {
      return 0;
    };
  }
};