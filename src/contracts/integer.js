function integer(value) {
  if ((value | 0) !== value) {
    throw new TypeError(`Expected an integer.`);
  }
  return value;
}

export default integer;
