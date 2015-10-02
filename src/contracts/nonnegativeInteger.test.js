import test from 'tape';
import nonnegativeInteger from './nonnegativeInteger';

test(`\`nonnegativeInteger()\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0), TypeError,
    `Failed no argument.`);
  assert.end();
});

test(`\`nonnegativeInteger(undefined)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, void 0), TypeError,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(null)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, null), TypeError,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(Function)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, () => {}), TypeError,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(String)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, `a string`), TypeError,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(Object)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, {}), TypeError,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(Boolean)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, true), TypeError,
    `Failed \`true\`.`);
  assert.throws(nonnegativeInteger.bind(void 0, false), TypeError,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(Z^*)\` returns \`Z^*\``, (assert) => {
  assert.equal(nonnegativeInteger(0), 0,
    `Failed \`0\`.`);
  assert.equal(nonnegativeInteger(1), 1,
    `Failed \`1\`.`);
  assert.equal(nonnegativeInteger(2), 2,
    `Failed \`2\`.`);
  assert.equal(nonnegativeInteger(123), 123,
    `Failed \`123\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(Z^-)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, -123), TypeError,
    `Failed \`-123\`.`);
  assert.throws(nonnegativeInteger.bind(void 0, -2), TypeError,
    `Failed \`-2\`.`);
  assert.throws(nonnegativeInteger.bind(void 0, -1), TypeError,
    `Failed \`-1\`.`);
  assert.end();
});

test(`\`nonnegativeInteger(R)\` throws \`TypeError\``, (assert) => {
  assert.throws(nonnegativeInteger.bind(void 0, 0.123), TypeError,
    `Failed \`0.123\`.`);
  assert.throws(nonnegativeInteger.bind(void 0, -123.4567), TypeError,
    `Failed \`-123.4567\`.`);
  assert.end();
});
