import test from 'tape';
import func from './func';

test(`\`func()\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`func(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`func(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`func(Function)\` returns \`Function\``, (assert) => {
  const value = () => {};
  assert.equal(func(value), value,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`func(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`func(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`func(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(func.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`func(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(func.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(func.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(func.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(func.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(func.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(func.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});
