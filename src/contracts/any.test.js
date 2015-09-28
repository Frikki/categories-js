import test from 'tape';
import any from './any';

test(`\`any()\` returns \`undefined\``, (assert) => {
  const expected = void 0;
  assert.equal(any(), expected,
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
  const value = new String(`a string`);
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
  let value = new Boolean(true);
  assert.equal(any(value), value,
    `Failed \`Boolean(true)\`.`);
  value = new Boolean(false);
  assert.equal(any(value), value,
    `Failed \`Boolean(false)\`.`);
  assert.end();
});

test(`\`any(Number)\` returns \`Number\``, (assert) => {
  let value = new Number(0);
  assert.equal(any(value), value,
    `Failed \`Number(0)\`.`);
  value = new Number(1);
  assert.equal(any(value), value,
    `Failed \`Number(1)\`.`);
  value = new Number(2);
  assert.equal(any(value), value,
    `Failed \`Number(2)\`.`);
  value = new Number(123);
  assert.equal(any(value), value,
    `Failed \`Number(123)\`.`);
  value = new Number(-123);
  assert.equal(any(value), value,
    `Failed \`Number(-123)\`.`);
  value = new Number(123.4567);
  assert.equal(any(value), value,
    `Failed \`Number(123.4567)\`.`);
  assert.end();
});
