import test from 'tape';
import any from './any';

test(`\`any()\` returns \`undefined\``, (assert) => {
  assert.equal(any(), void 0,
    `Failed no argument.`);
  assert.end();
});

test(`\`any(undefined)\` returns \`undefined\``, (assert) => {
  const value = void 0;
  assert.equal(any(value), value,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`any(null)\` returns \`null\``, (assert) => {
  const value = null;
  assert.equal(any(value), value,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`any(Function)\` returns \`Function\``, (assert) => {
  const value = () => {};
  assert.equal(any(value), value,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`any(String)\` returns \`String\``, (assert) => {
  const value = `a string`;
  assert.equal(any(value), value,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`any(Object)\` returns \`Object\``, (assert) => {
  const value = {};
  assert.equal(any(value), value,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`any(Boolean)\` returns \`Boolean\``, (assert) => {
  let value = true;
  assert.equal(any(value), value,
    `Failed \`true\`.`);
  value = false;
  assert.equal(any(value), value,
    `Failed \`false\`.`);
  assert.end();
});

test(`\`any(Number)\` returns \`Number\``, (assert) => {
  let value = 0;
  assert.equal(any(value), value,
    `Failed \`0\`.`);
  value = 1;
  assert.equal(any(value), value,
    `Failed \`1\`.`);
  value = 2;
  assert.equal(any(value), value,
    `Failed \`2\`.`);
  value = 123;
  assert.equal(any(value), value,
    `Failed \`123\`.`);
  value = -123;
  assert.equal(any(value), value,
    `Failed \`-123\`.`);
  value = 123.4567;
  assert.equal(any(value), value,
    `Failed \`123.4567\`.`);
  assert.end();
});
