import test from 'tape';
import string from './string';

test(`\`string()\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`string(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`string(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`string(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`string(String)\` returns \`String\``, (assert) => {
  const value = `a string`;
  assert.equal(string(value), value,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`string(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`string(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(string.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`string(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(string.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(string.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(string.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(string.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(string.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
