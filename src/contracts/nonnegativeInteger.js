function nonnegativeInteger(value) {
  if ((value | 0) !== value || value < 0) {
    throw new TypeError(`Expected a nonnegative integer.`);
  }
  return value;
}

export default nonnegativeInteger;
