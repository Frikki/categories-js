function integer(value) {
  if ((value | 0) !== value) {
    throw new TypeError();
  }
  return value;
}

export default integer;
