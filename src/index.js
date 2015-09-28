import any from './contracts/any';
import func from './contracts/func';
import str from './contracts/str';
import obj from './contracts/obj';
import bool from './contracts/bool';
import num from './contracts/num';

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

  /**
   * A contract that only allows objects.
   * @param {Function} value The value to test.
   * @returns {String}
   * @throws {TypeError} If `value` is not an object.
   * @function obj
   */
  obj,

  /**
   * A contract that only allows booleans.
   * @param {Function} value The value to test.
   * @returns {String}
   * @throws {TypeError} If `value` is not a boolean.
   * @function bool
   */
  bool,

  /**
   * A contract that only allows numbers.
   * @param {Function} value The value to test.
   * @returns {String}
   * @throws {TypeError} If `value` is not a number.
   * @function num
   */
  num,
};
