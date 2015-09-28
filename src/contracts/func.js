function func(value) {
  if (typeof value !== `function`) {
    throw new TypeError();
  } else {
    return value;
  }
}

export default func;
