import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('getFullYear should return the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
describe('getFooterCopy', () => {
  test('should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test('should return "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
});

// Test for getLatestNotification
test('getLatestNotification should return the correct HTML string', () => {
  const expectedOutput = {
    __html: "<strong>Urgent requirement</strong> - complete by EOD"
  };
  expect(getLatestNotification()).toEqual(expectedOutput);
});
