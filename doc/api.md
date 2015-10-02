
# CategoriesJS API

- [`any`](#any)

- [`func`](#func)

- [`string`](#string)

- [`object`](#object)

- [`boolean`](#boolean)

- [`number`](#number)

- [`integer`](#integer)

- [`int`](#int)

- [`nonnegativeInteger`](#nonnegativeInteger)

- [`nonnegInt`](#nonnegInt)

- [`naturalNumber`](#naturalNumber)

- [`natural`](#natural)

- [`nat`](#nat)

- [`array`](#array)

- [`date`](#date)

### <a id="any"></a> `any(value)`

A contract that allows anything.

#### Arguments:

- `value` The value to test.

#### Return:

*()* The value.

- - -

### <a id="func"></a> `func(value)`

A contract that only allows functions.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Function)* The value.

#### Exceptions:

- `TypeError` If `value` is not a function.

- - -

### <a id="string"></a> `string(value)`

A contract that only allows strings.

#### Arguments:

- `value :: String` The value to test.

#### Return:

*(String)* The value.

#### Exceptions:

- `TypeError` If `value` is not a string.

- - -

### <a id="object"></a> `object(value)`

A contract that only allows objects.

#### Arguments:

- `value :: Object` The value to test.

#### Return:

*(Object)* The value.

#### Exceptions:

- `TypeError` If `value` is not an object.

- - -

### <a id="boolean"></a> `boolean(value)`

A contract that only allows booleans.

#### Arguments:

- `value :: Boolean` The value to test.

#### Return:

*(Boolean)* The value.

#### Exceptions:

- `TypeError` If `value` is not a boolean.

- - -

### <a id="number"></a> `number(value)`

A contract that only allows numbers.

#### Arguments:

- `value :: Number` The value to test.

#### Return:

*(Number)* The value.

#### Exceptions:

- `TypeError` If `value` is not a number.

- - -

### <a id="integer"></a> `integer(value)`

A contract that only allows integers.

#### Arguments:

- `value :: Number` The value to test.

#### Return:

*(Number)* The value.

#### Exceptions:

- `TypeError` If `value` is not an integer.

- - -

### <a id="int"></a> `int`

Alias for `integer`.

See: integer

- - -

### <a id="nonnegativeInteger"></a> `nonnegativeInteger(value)`

A contract that only allows integers that are either 0 or positive,
i.e., members of the set Z^* = {0} U Z^+, where Z^+ denotes
the positive integers.

#### Arguments:

- `value :: Number` The value to test.

#### Return:

*(Number)* The value.

#### Exceptions:

- `TypeError` If `value` is not a nonnegative integer.

- - -

### <a id="nonnegInt"></a> `nonnegInt`

Alias for `nonnegativeInteger`.

See: nonnegativeInteger

- - -

### <a id="naturalNumber"></a> `naturalNumber`

Alias for `nonnegativeInteger`.

See: nonnegativeInteger

- - -

### <a id="natural"></a> `natural`

Alias for `nonnegativeInteger`.

See: nonnegativeInteger

- - -

### <a id="nat"></a> `nat`

Alias for `nonnegativeInteger`.

See: nonnegativeInteger

- - -

### <a id="array"></a> `array(value)`

A contract that only allows Arrays.

#### Arguments:

- `value :: Array` The value to test.

#### Return:

*(Array)* The value.

#### Exceptions:

- `TypeError` If `value`is not an Array.

- - -

### <a id="date"></a> `date(value)`

A contract that only allows Dates.

#### Arguments:

- `value :: Date` The value to test

#### Return:

*(Date)* The value.

#### Exceptions:

- `TypeError` If `value`is not a Date.

- - -

