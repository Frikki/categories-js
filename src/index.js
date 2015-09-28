import any from './contracts/any';
import func from './contracts/func';

module.exports = {
  /**
   * A contract that allows anything.
   * @param {*} value The value to test.
   * @returns {*}
   * @function any
   */
  any,

  /**
   * A contract that only allows `Function`
   * @param {Function} value The value to test.
   * @returns {Function}
   * @throws {TypeError} If `value` is not a function.
   * @function func
   */
  func,
};
