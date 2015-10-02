import test from 'tape';
import array from './array';

test(`\`array()\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`array(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`array(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`array(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`array(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`array(Object)\` returns \`Object\``, (assert) => {
  assert.throws(array.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`array(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(array.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`array(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(array.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(array.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(array.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(array.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(array.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(array.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});

test(`\`array(Array)\` returns \`Array\``, (assert) => {
  let value = [];
  assert.equals(array(value), value,
    `Failed \`[]\`.`);
  value = [1, 2, 3];
  assert.equals(array(value), value,
    `Failed \`[1, 2, 3]\`.`);
  value = new Array();
  assert.equals(array(value), value,
    `Failed \`new Array()\`.`);
  value = new Array(1, 2, 3);
  assert.equals(array(value), value,
    `Failed \`new Array(1, 2, 3)\`.`);
  assert.end();
});
