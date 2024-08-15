# Bikram Sambat

## Introduction

The `stringGenerator` function is a simple and flexible utility that generates a random string based on specified character type options. You can control the length of the string and choose to include or exclude lowercase letters, uppercase letters, numbers, and symbols.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Reference](#api-reference)

## Features

- **Customizable Length**: Specify the length of the generated string.
- **Flexible Character Options**: Choose to include or exclude lowercase letters, uppercase letters, numbers, and symbols.
- **Default Settings**: If no options are provided, the function will generate a string with all character types.

## Installation

### Package Manager

Using npm:

```bash
npm install @nakarmi23/random-string-generator
```

Using yarn:

```bash
yarn add @nakarmi23/random-string-generator
```

Using pnpm:

```bash
pnpm add @nakarmi23/random-string-generator
```

Once the package is installed, you can import the library using `import` or `require` approach:

```typescript
import stringGenerator from '@nakarmi23/random-string-generator';
```

or

```typescript
const {stringGenerator} = require('@nakarmi23/random-string-generator');
```

## Usage

### Generating a Default String
By default, the stringGenerator function generates a string of 20 characters, including lowercase letters, uppercase letters, numbers, and symbols.

```javascript
const randomString = stringGenerator();
console.log(randomString); // Example output: 'aB3#cD4@eF5%gH6^'
```

### Customizing the String Length and Character Types
You can customize the length of the string and specify which types of characters to include:

```javascript
// Generate a string with 10 characters, including only uppercase letters and numbers.
const randomString = stringGenerator(10, { lowercase: false, symbol: false });
console.log(randomString); // Example output: 'A9B8C7D6E5'
```

### Error Handling
If you disable all character options, the function will throw an error, as at least one option must be enabled:

```javascript
try {
  const randomString = stringGenerator(10, { lowercase: false, uppercase: false, number: false, symbol: false });
} catch (error) {
  console.error(error.message); // Output: 'At least one option must be enabled'
}
```

## API Reference

### stringGenerator(length = 20, options)
Generates a random string based on the provided parameters.
- Parameter:
  - `length` (`number`, optional): The length of the generated string. Defaults to 20.
  - `options` (`object`, optional): An object specifying which character types to include:
    - `lowercase` (`boolean`, optional): Include lowercase letters (a-z). Defaults to `true`.
    - `uppercase` (`boolean`, optional): Include uppercase letters (A-Z). Defaults to `true`.
    - `number` (`boolean`, optional): Include numbers (0-9). Defaults to `true`.
    - `symbol` (`boolean`, optional): Include symbols (e.g., @, #, $, etc.). Defaults to `true`.
  - returns: A randomly generated string of the specified length and character types.
  - throws: If all options are disabled, an error is thrown to indicate that at least one option must be enabled.