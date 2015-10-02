import test from 'tape';
import regExp from './regExp';

test(`\`regExp()\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`regExp(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`regExp(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`regExp(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`regExp(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`regExp(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`regExp(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(regExp.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`regExp(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(regExp.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(regExp.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(regExp.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(regExp.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(regExp.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});

test(`\`regExp(Array)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, []), TypeError,
    `Failed \`[]\`.`);
  assert.throws(regExp.bind(void 0, new Array()), TypeError,
    `Failed \`new Array()\`.`);
  assert.end();
});

test(`\`regExp(Date)\` throws \`TypeError\``, (assert) => {
  assert.throws(regExp.bind(void 0, new Date()), TypeError,
    `Failed \`new Date()\`.`);
  assert.end();
});

test(`\`regExp(RegExp)\` returns \`RegExp\``, (assert) => {
  let value = new RegExp();
  assert.equals(regExp(value), value,
    `Failed \`new RegExp()\`.`);
  value = /ab+c/;
  assert.equals(regExp(value), value,
    `Failed \`/ab+c/\`.`);
  assert.end();
});
