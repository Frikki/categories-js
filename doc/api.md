
# CategoriesJS API

- [`any`](#any)

- [`func`](#func)

- [`string`](#string)

- [`object`](#object)

- [`boolean`](#boolean)

- [`number`](#number)

- [`integer`](#integer)

- [`int`](#int)

### <a id="any"></a> `any(value)`

A contract that allows anything.

#### Arguments:

- `value` The value to test.

#### Return:

*()* 

- - -

### <a id="func"></a> `func(value)`

A contract that only allows functions.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Function)* 

#### Exceptions:

- `TypeError` If `value` is not a function.

- - -

### <a id="string"></a> `string(value)`

A contract that only allows strings.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(String)* 

#### Exceptions:

- `TypeError` If `value` is not a string.

- - -

### <a id="object"></a> `object(value)`

A contract that only allows objects.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Object)* 

#### Exceptions:

- `TypeError` If `value` is not an object.

- - -

### <a id="boolean"></a> `boolean(value)`

A contract that only allows booleans.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Boolean)* 

#### Exceptions:

- `TypeError` If `value` is not a boolean.

- - -

### <a id="number"></a> `number(value)`

A contract that only allows numbers.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Number)* 

#### Exceptions:

- `TypeError` If `value` is not a number.

- - -

### <a id="integer"></a> `integer(value)`

A contract that only allows integers.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Number)* 

#### Exceptions:

- `TypeError` If `value` is not an integer.

- - -

### <a id="int"></a> `int`

See: integer

- - -

