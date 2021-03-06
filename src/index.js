import any from './contracts/any';
import func from './contracts/func';
import string from './contracts/string';
import object from './contracts/object';
import boolean from './contracts/boolean';
import number from './contracts/number';
import integer from './contracts/integer';
import nonnegativeInteger from './contracts/nonnegativeInteger';
import array from './contracts/array';
import date from './contracts/date';
import regExp from './contracts/regExp';
import instanceOf from './contracts/instanceOf';

module.exports = {
  /**
   * A contract that allows anything.
   * @param {*} value The value to test.
   * @returns {*} The value.
   * @function any
   */
  any,

  /**
   * A contract that only allows functions.
   * @param {Function} value The value to test.
   * @returns {Function} The value.
   * @throws {TypeError} If `value` is not a function.
   * @function func
   */
  func,

  /**
   * A contract that only allows strings.
   * @param {String} value The value to test.
   * @returns {String} The value.
   * @throws {TypeError} If `value` is not a string.
   * @function string
   */
  string,

  /**
   * A contract that only allows objects.
   * @param {Object} value The value to test.
   * @returns {Object} The value.
   * @throws {TypeError} If `value` is not an object.
   * @function object
   */
  object,

  /**
   * A contract that only allows booleans.
   * @param {Boolean} value The value to test.
   * @returns {Boolean} The value.
   * @throws {TypeError} If `value` is not a boolean.
   * @function boolean
   */
  boolean,

  /**
   * A contract that only allows numbers.
   * @param {Number} value The value to test.
   * @returns {Number} The value.
   * @throws {TypeError} If `value` is not a number.
   * @function number
   */
  number,

  /**
   * A contract that only allows integers.
   * @param {Number} value The value to test.
   * @returns {Number} The value.
   * @throws {TypeError} If `value` is not an integer.
   * @function integer
   */
  integer,

  /**
   * A contract that only allows integers that are either 0 or positive,
   * i.e., members of the set Z^* = {0} U Z^+, where Z^+ denotes
   * the positive integers.
   * @param {Number} value The value to test.
   * @returns {Number} The value.
   * @throws {TypeError} If `value` is not a nonnegative integer.
   * @function nonnegativeInteger
   */
  nonnegativeInteger,

  /**
   * A contract that only allows Arrays.
   * @param {Array} value The value to test.
   * @returns {Array} The value.
   * @throws {TypeError} If `value`is not an Array.
   * @function array
   */
  array,

  /**
   * A contract that only allows Dates.
   * @param {Date} value The value to test
   * @returns {Date} The value.
   * @throws {TypeError} If `value`is not a Date.
   * @function date
   */
  date,

  /**
   * A contract that only allows regular expressions.
   * @param {RegExp} value The value to test
   * @returns {RegExp} The value.
   * @throws {TypeError} If `value`is not a regular expression.
   * @function regExp
   */
  regExp,

  /**
   * Creates a contract for an object inheriting from `Ctor`.
   * @param {Function} Ctor The constructor function.
   * @returns {Function} The contract.
   * @function instanceOf
   */
  instanceOf,
};
