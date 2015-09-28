
# CategoriesJS API

- [`any`](#any)

- [`func`](#func)

- [`str`](#str)

- [`obj`](#obj)

- [`bool`](#bool)

- [`num`](#num)

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

### <a id="str"></a> `str(value)`

A contract that only allows strings.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(String)* 

#### Exceptions:

- `TypeError` If `value` is not a string.

- - -

### <a id="obj"></a> `obj(value)`

A contract that only allows objects.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Object)* 

#### Exceptions:

- `TypeError` If `value` is not an object.

- - -

### <a id="bool"></a> `bool(value)`

A contract that only allows booleans.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Boolean)* 

#### Exceptions:

- `TypeError` If `value` is not a boolean.

- - -

### <a id="num"></a> `num(value)`

A contract that only allows numbers.

#### Arguments:

- `value :: Function` The value to test.

#### Return:

*(Number)* 

#### Exceptions:

- `TypeError` If `value` is not a number.

- - -

