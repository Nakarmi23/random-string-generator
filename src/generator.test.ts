import { describe, test } from '@jest/globals';
import stringGenerator from '.';

describe('String Generator Default', () => {
  test('Returns expected default value', () => {
    const s = stringGenerator();

    expect(s.length).toEqual(20);
    expect(s).toMatch(/^[\w*;<>(){}#$?!^|@%&\[\]+-_=~/:.]{20}$/);
  });

  test('Only upper letters and numbers are allowed', () => {
    const s = stringGenerator(20, {
      lowercase: false,
      symbol: false,
    });

    expect(s.length).toEqual(20);
    expect(s).toMatch(/^[A-Z0-9]{20}$/);
  });

  test('Only lower letters are allowed', () => {
    const s = stringGenerator(20, {
      uppercase: false,
      symbol: false,
      number: false,
    });

    expect(s.length).toEqual(20);
    expect(s).toMatch(/^[a-z]{20}$/);
  });

  test('custom length', () => {
    const s = stringGenerator(10);

    expect(s.length).toEqual(10);
  });
});
