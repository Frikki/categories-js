import test from 'tape';
import obj from './obj';

test(`\`obj()\` throws \`TypeError\``, (assert) => {
  assert.throws(obj.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`obj(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(obj.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`obj(null)\` returns \`null\``, (assert) => {
  const value = null;
  assert.equal(obj(value), value,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`obj(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(obj.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`obj(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(obj.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`obj(Object)\` returns \`Object\``, (assert) => {
  const value = {};
  assert.equals(obj(value), value,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`obj(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(obj.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(obj.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`obj(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(obj.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(obj.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(obj.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(obj.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(obj.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(obj.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
