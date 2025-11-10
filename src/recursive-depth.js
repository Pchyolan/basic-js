const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let maxL = 1;

    for (const item of arr) {
      if (Array.isArray(item)) {
        maxL = Math.max(maxL, 1 + this.calculateDepth(item));
      }
    }

    return maxL;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
