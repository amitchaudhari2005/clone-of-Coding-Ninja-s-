import { capitalizeFirst } from '../../utils/helpers';

describe('capitalizeFirst', () => {
  test('capitalizes first letter', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
  });

  test('returns empty string if no input', () => {
    expect(capitalizeFirst('')).toBe('');
  });
});
