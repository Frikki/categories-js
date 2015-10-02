
# CategoriesJS API

- [`any`](#any)

- [`func`](#func)

- [`string`](#string)

- [`object`](#object)

- [`boolean`](#boolean)

- [`number`](#number)

- [`integer`](#integer)

- [`nonnegativeInteger`](#nonnegativeInteger)

- [`array`](#array)

- [`date`](#date)

- [`regExp`](#regExp)

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

### <a id="regExp"></a> `regExp(value)`

A contract that only allows regular expressions.

#### Arguments:

- `value :: RegExp` The value to test

#### Return:

*(RegExp)* The value.

#### Exceptions:

- `TypeError` If `value`is not a regular expression.

- - -

