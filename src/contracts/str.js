function str(value) {
  if (typeof value !== `string`) {
    throw new TypeError(`Expected a string.`);
  } else {
    return value;
  }
}

export default str;
