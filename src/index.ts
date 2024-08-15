type StringOptionsKeys = 'lowercase' | 'uppercase' | 'number' | 'symbol';

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
    symbol: '*;<>(){}#$?!^|@%&[]+-_=~`/:\\.',
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
