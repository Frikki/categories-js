import test from 'tape';
import str from './str';

test(`\`str()\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`str(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`str(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`str(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`str(String)\` returns \`String\``, (assert) => {
  const value = `a string`;
  assert.equal(str(value), value,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`str(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`str(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(str.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`str(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(str.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(str.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(str.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(str.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(str.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(str.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
