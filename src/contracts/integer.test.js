import test from 'tape';
import integer from './integer';

test(`\`integer()\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`integer(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`integer(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`integer(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`integer(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`integer(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`integer(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(integer.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`integer(Z)\` returns \`Z\``, (assert) => {
  assert.equal(integer(-123), -123,
    `Failed \`-123\`.`);
  assert.equal(integer(-2), -2,
    `Failed \`-2\`.`);
  assert.equal(integer(-1), -1,
    `Failed \`-1\`.`);
  assert.equal(integer(0), 0,
    `Failed \`0\`.`);
  assert.equal(integer(1), 1,
    `Failed \`1\`.`);
  assert.equal(integer(2), 2,
    `Failed \`2\`.`);
  assert.equal(integer(123), 123,
    `Failed \`123\`.`);
  assert.end();
});

test(`\`integer(R)\` throws \`TypeError\``, (assert) => {
  assert.throws(integer.bind(void 0, 0.123), TypeError,
    `Failed \`0.123\`.`);
  assert.throws(integer.bind(void 0, -123.4567), TypeError,
    `Failed \`-123.4567\`.`);
  assert.end();
});
