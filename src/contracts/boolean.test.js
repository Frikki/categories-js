import test from 'tape';
import boolean from './boolean';

test(`\`boolean()\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`boolean(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`boolean(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0, null), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`boolean(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`boolean(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`boolean(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`boolean(Boolean)\` returns \`Boolean\``, (assert) => {
  let value = true;
  assert.equal(boolean(value), value,
    `Failed \`true\`.`);
  value = false;
  assert.equal(boolean(value), value,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`boolean(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(boolean.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(boolean.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(boolean.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(boolean.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(boolean.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(boolean.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
