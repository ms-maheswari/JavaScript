## Operators
JavaScript operators are used to perform different types of mathematical and logical computations.

---
## 1. Arithmetic Operators
Arithmetic operators are used to perform **basic mathematical operations**.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `+`          | Addition                            | `5 + 2 = 7`                            |
| `-`          | Subtraction                         | `5 - 2 = 3`                            |
| `*`          | Multiplication                      | `5 * 2 = 10`                           |
| `/`          | Division                            | `10 / 2 = 5`                           |
| `%`          | Modulus (Remainder)                 | `10 % 3 = 1`                           |
| `**`         | Exponentiation (Power)              | `2 ** 3 = 8`                           |

---

## 2. Assignment Operators
Used to assign values to variables.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `=`          | Assign                              | `x = 10`                               |
| `+=`         | Add and assign                      | `x += 5` (same as `x = x + 5`)         |
| `-=`         | Subtract and assign                 | `x -= 3` (same as `x = x - 3`)         |
| `*=`         | Multiply and assign                 | `x *= 2`                               |
| `/=`         | Divide and assign                   | `x /= 2`                               |
| `%=`         | Modulus and assign                  | `x %= 2`                               |
| `**=`        | Power and assign                    | `x **= 3`                              |

---

## 3. Comparison Operators
Used to compare two values.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `==`         | Equal (value only)                  | `5 == '5'` → `true`                    |
| `===`        | Strict equal (value & type)         | `5 === '5'` → `false`                  |
| `!=`         | Not equal (value only)              | `5 != '5'` → `false`                   |
| `!==`        | Strict not equal                    | `5 !== '5'` → `true`                   |
| `>`          | Greater than                        | `6 > 5` → `true`                       |
| `<`          | Less than                           | `4 < 5` → `true`                       |
| `>=`         | Greater than or equal to            | `5 >= 5` → `true`                      |
| `<=`         | Less than or equal to               | `4 <= 5` → `true`                      |

---

## 4. Logical Operators
Used to combine multiple conditions.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `&&`         | Logical AND                         | `(x > 5 && x < 10)`                    |
| `\|\|`       | Logical OR                          | `(x < 5 \|\| x > 10)`                  |
| `!`          | Logical NOT                         | `!(x == 5)`                            |

---


## 5. Bitwise Operators
Operate on binary values.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `&`          | AND                                 | `5 & 1` → `1`                          |
| `\|`         | OR                                  | `5 \| 1` → `5`                          |
| `^`          | XOR                                 | `5 ^ 1` → `4`                          |
| `~`          | NOT                                 | `~5` → `-6`                            |
| `<<`         | Left shift                          | `5 << 1` → `10`                        |
| `>>`         | Right shift                         | `5 >> 1` → `2`                         |

---


## 6. String Operator
Used to combine or join strings.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `+`          | Concatenation (joins strings)       | `"Hello" + " World"` → `"Hello World"` |
| `+=`         | Append string to variable           | `msg += "!"` → `msg = msg + "!"`       |

---

## 7. Ternary Operator
A shortcut for if-else.

| **Syntax**                 | **Description**                     | **Example**                            |
|----------------------------|-------------------------------------|----------------------------------------|
| `condition ? expr1 : expr2`| If condition is true, return expr1; otherwise return expr2 | `x > 10 ? "Big" : "Small"` |

---


## 8. Type Operators
Used to find or test data types.

| **Operator** | **Description**                     | **Example**                            |
|--------------|-------------------------------------|----------------------------------------|
| `typeof`     | Returns the type of a variable      | `typeof 42` → `"number"`               |
| `instanceof` | Checks if an object is an instance of a class | `arr instanceof Array` → `true`   |

---