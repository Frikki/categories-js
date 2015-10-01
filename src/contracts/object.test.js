import test from 'tape';
import object from './object';

test(`\`object()\` throws \`TypeError\``, (assert) => {
  assert.throws(object.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`object(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(object.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`object(null)\` returns \`null\``, (assert) => {
  const value = null;
  assert.equal(object(value), value,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`object(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(object.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`object(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(object.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`object(Object)\` returns \`Object\``, (assert) => {
  const value = {};
  assert.equals(object(value), value,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`object(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(object.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(object.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`object(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(object.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(object.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(object.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(object.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(object.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(object.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
