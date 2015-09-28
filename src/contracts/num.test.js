import test from 'tape';
import num from './num';

test(`\`num()\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`num(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`num(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`num(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`num(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`num(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`num(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(num.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(num.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`num(Number)\` returns \`Number\``, (assert) => {
  assert.equal(num(0), 0,
    `Failed \`0\`.`);
  assert.equal(num(1), 1,
    `Failed \`1\`.`);
  assert.equal(num(2), 2,
    `Failed \`2\`.`);
  assert.equal(num(123), 123,
    `Failed \`123\`.`);
  assert.equal(num(-123), -123,
    `Failed \`-123\`.`);
  assert.equal(num(123.4567), 123.4567,
    `Failed \`123.4567\`.`);
  assert.end();
});
