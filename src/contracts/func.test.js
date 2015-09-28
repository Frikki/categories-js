import test from 'tape';
import func from './func';

test(`\`func()\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`func(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`func(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`func(Function)\` returns \`Function\``, (assert) => {
  const value = () => {};
  assert.equal(func(value), value,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`func(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, new String(`a string`)), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`func(Object)\` throws \`TypeError\``, (assert) => {
  const value = {};
  assert.throws(func.bind(void 0, value), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`func(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, new Boolean(true)), TypeError,
    `Failed \`Boolean(true)\`.`);
  assert.throws(func.bind(void 0, new Boolean(false)), TypeError,
    `Failed \`Boolean(false)\`.`);
  assert.end();
});

test(`\`func(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, new Number(0)), TypeError,
    `Failed \`Number(0)\`.`);
  assert.throws(func.bind(void 0, new Number(1)), TypeError,
    `Failed \`Number(1)\`.`);
  assert.throws(func.bind(void 0, new Number(2)), TypeError,
    `Failed \`Number(2)\`.`);
  assert.throws(func.bind(void 0, new Number(123)), TypeError,
    `Failed \`Number(123)\`.`);
  assert.throws(func.bind(void 0, new Number(-123)), TypeError,
    `Failed \`Number(-123)\`.`);
  assert.throws(func.bind(void 0, new Number(123.4567)), TypeError,
    `Failed \`Number(123.4567)\`.`);
  assert.end();
});
