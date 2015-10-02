import test from 'tape';
import date from './date';

test(`\`date()\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`date(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`date(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`date(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`date(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`date(Object)\` returns \`Object\``, (assert) => {
  assert.throws(date.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`date(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(date.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`date(Number)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, 0), TypeError,
    `Failed \`0\`.`);
  assert.throws(date.bind(void 0, 1), TypeError,
    `Failed \`1\`.`);
  assert.throws(date.bind(void 0, 2), TypeError,
    `Failed \`2\`.`);
  assert.throws(date.bind(void 0, 123), TypeError,
    `Failed \`123\`.`);
  assert.throws(date.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(date.bind(void 0, 123.4567), TypeError,
    `Failed \`123.4567\`.`);
  assert.end();
});

test(`\`date(Array)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, []), TypeError,
    `Failed \`[]\`.`);
  assert.throws(date.bind(void 0, new Array()), TypeError,
    `Failed \`new Array()\`.`);
  assert.end();
});

test(`\`date(Date)\` returns \`Date\``, (assert) => {
  const value = new Date();
  assert.equals(date(value), value,
    `Failed \`new Date()\`.`);
  assert.end();
});

test(`\`date(RegExp)\` throws \`TypeError\``, (assert) => {
  assert.throws(date.bind(void 0, new RegExp()), TypeError,
    `Failed \`new RegExp()\`.`);
  assert.throws(date.bind(void 0, /ab+c/), TypeError,
    `Failed \`/ab+c/\`.`);
  assert.end();
});
