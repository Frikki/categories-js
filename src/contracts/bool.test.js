import test from 'tape';
import bool from './bool';

test(`\`bool()\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`bool(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`bool(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0, null), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`bool(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`bool(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`bool(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`bool(Boolean)\` returns \`Boolean\``, (assert) => {
  let value = true;
  assert.equal(bool(value), value,
    `Failed \`true\`.`);
  value = false;
  assert.equal(bool(value), value,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`bool(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(bool.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(bool.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(bool.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(bool.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(bool.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(bool.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
