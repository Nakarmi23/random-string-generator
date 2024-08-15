type StringOptionsKeys = 'lowercase' | 'uppercase' | 'number' | 'symbol';

/**
 *
 * @param {number} [length=20] - Length of the generated string. Defaults to 20 if not provided.
 * @param {Partial<Record<StringOptionsKeys, boolean>>} [options] - An object specifying which character types to include in the string. If not provided, all character types are included by default.
 * @param {boolean} [options.lowercase=true] - Whether to include lowercase letters (a-z).
 * @param {boolean} [options.uppercase=true] - Whether to include uppercase letters (A-Z).
 * @param {boolean} [options.number=true] - Whether to include numbers (0-9).
 * @param {boolean} [options.symbol=true] - Whether to include symbols.
 * @returns {string} A randomly generated string of the specified length and options.
 * @throws {Error} If all options are disabled, an error is thrown to indicate that at least one option must be enabled. *
 * @example
 * // Generates a string with the default length of 20 characters including all character types.
 * const randomString = stringGenerator();
 *
 * @example
 * // Generates a string with 10 characters, including only uppercase letters and numbers.
 * const randomString = stringGenerator(10, { lowercase: false, symbol: false });
 *
 * @example
 * // Throws an error as all options are disabled.
 * const randomString = stringGenerator(10, { lowercase: false, uppercase: false, number: false, symbol: false });
 */
export const stringGenerator = (
  length = 20,
  options?: Partial<Record<StringOptionsKeys, boolean>>
): string => {
  options = {
    lowercase: true,
    number: true,
    symbol: true,
    uppercase: true,
    ...options,
  };
  let main = '';
  let finalString = '';

  if (Object.values(options).every((value) => value === false))
    throw Error('At least one option must be enabled');

  const passOptions: Record<StringOptionsKeys, string> = {
    lowercase: 'abcdefghijklmnopqrsstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '*;<>(){}#$?!^|@%&[]+-_=~/:..',
  };

  for (const optionKey in options) {
    if (options[optionKey as StringOptionsKeys] !== false) {
      main += passOptions[optionKey as StringOptionsKeys];
    }
  }

  if (main !== '' && length > 0) {
    //Generating a random index from 0 to defined length
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * main.length);
      finalString += main[randomIndex];
    }
  }

  return finalString;
};

export default stringGenerator;
