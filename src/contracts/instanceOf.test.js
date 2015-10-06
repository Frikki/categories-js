import test from 'tape';
import instanceOf from './instanceOf';

test(`\`instanceOf\` returns \`Function\``, (assert) => {
  assert.equals(typeof instanceOf(), `function`,
    `Failed return \`Function\`.`);
  assert.end();
});

test(`\`instanceOf(Ctor)\` returns contract ` +
`for an object inheriting from \`Ctor\``, (assert) => {
  const Ctor = function Ctor() {};
  const ctor = new Ctor();
  assert.equals(instanceOf(Ctor)(ctor), ctor,
    `Failed create contract for \`Ctor\`.`);
  const contract = instanceOf(Ctor);
  assert.throws(contract.bind(void 0, new Array()), TypeError,
    `Failed to throw error for failing object.`);
  assert.end();
});
