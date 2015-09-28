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
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`undefined\`.`);
  assert.end();
});

test(`\`any(null)\` returns \`null\``, (assert) => {
  const value = null;
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`null\`.`);
  assert.end();
});

test(`\`any(Function)\` returns \`Function\``, (assert) => {
  const value = () => {};
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`Function\`.`);
  assert.end();
});

test(`\`any(String)\` returns \`String\``, (assert) => {
  const value = `a string`;
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`String\`.`);
  assert.end();
});

test(`\`any(Object)\` returns \`Object\``, (assert) => {
  const value = {};
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`Object\`.`);
  assert.end();
});

test(`\`any(Boolean)\` returns \`Boolean\``, (assert) => {
  const value = true;
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`Boolean\`.`);
  assert.end();
});

test(`\`any(Number)\` returns \`Number\``, (assert) => {
  const value = 1;
  const expected = value;
  assert.equal(any(value), expected,
    `Failed \`Number\`.`);
  assert.end();
});
