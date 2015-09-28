/**
 * Creates a contract for a value of type `type`.
 * @param {String} type The type.
 * @returns {Function} A contract that allows the specified `type`.
 */
function typeOf(type) {
  return (value) => {
    if (typeof value !== type) {
      throw new TypeError(`Expected a${type === `object` ? `n` : ``} ${type}.`);
    } else {
      return value;
    }
  };
}

export default typeOf;
