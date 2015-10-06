function instanceOf(Ctor) {
  return (instance) => {
    if (!(instance instanceof Ctor)) {
      throw new TypeError(`Expected an instance of ${Ctor}`);
    }
    return instance;
  };
}

export default instanceOf;
