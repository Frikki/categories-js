import test from 'tape';
import string from './string';

test(`\`string)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`stringundefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`stringnull)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`stringFunction)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`stringString)\` returns \`String\``, (assert) => {
  const value = `a string`;
  assert.equal(string(value), value,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`stringObject)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`stringBoolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(string.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(string.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`stringNumber)\` throws \`TypeError\``, (assert) => {
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
