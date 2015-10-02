const call = Function.prototype.call;
const getClassName = call.bind({}.toString);

function classOf(name) {
  return (value) => {
    if (getClassName(value) !== `[object ${name}]`) {
      throw new TypeError(`Expected ${name}`);
    }
    return value;
  };
}

export default classOf;
