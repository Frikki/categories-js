import any from './contracts/any';
import func from './contracts/func';
import str from './contracts/str';

module.exports = {
  /**
   * A contract that allows anything.
   * @param {*} value The value to test.
   * @returns {*}
   * @function any
   */
  any,

  /**
   * A contract that only allows functions.
   * @param {Function} value The value to test.
   * @returns {Function}
   * @throws {TypeError} If `value` is not a function.
   * @function func
   */
  func,

  /**
   * A contract that only allows strings.
   * @param {Function} value The value to test.
   * @returns {String}
   * @throws {TypeError} If `value` is not a string.
   * @function str
   */
  str,
};
