import test from 'tape';
import number from './number';

test(`\`number()\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`number(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`number(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`number(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`number(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`number(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`number(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(number.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(number.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`number(Number)\` returns \`Number\``, (assert) => {
  assert.equal(number(0), 0,
    `Failed \`0\`.`);
  assert.equal(number(1), 1,
    `Failed \`1\`.`);
  assert.equal(number(2), 2,
    `Failed \`2\`.`);
  assert.equal(number(123), 123,
    `Failed \`123\`.`);
  assert.equal(number(-123), -123,
    `Failed \`-123\`.`);
  assert.equal(number(123.4567), 123.4567,
    `Failed \`123.4567\`.`);
  assert.end();
});
