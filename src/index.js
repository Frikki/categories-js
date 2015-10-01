import any from './contracts/any';
import func from './contracts/func';
import string from './contracts/string';
import object from './contracts/object';
import boolean from './contracts/boolean';
import number from './contracts/number';

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
   * @function string
   */
  string,

  /**
   * A contract that only allows objects.
   * @param {Function} value The value to test.
   * @returns {Object}
   * @throws {TypeError} If `value` is not an object.
   * @function object
   */
  object,

  /**
   * A contract that only allows booleans.
   * @param {Function} value The value to test.
   * @returns {Boolean}
   * @throws {TypeError} If `value` is not a boolean.
   * @function boolean
   */
  boolean,

  /**
   * A contract that only allows numbers.
   * @param {Function} value The value to test.
   * @returns {Number}
   * @throws {TypeError} If `value` is not a number.
   * @function number
   */
  number,
};
