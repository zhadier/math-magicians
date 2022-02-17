import operate from '../logic/operate';

describe('Testing different arithmetic operations', () => {
  test('expect 1 + 1 to be 2', () => {
    // arrange
    const operation = '+';
    // act
    const result = operate('1', '1', operation);
    // assert
    expect(result).toBe('2');
  });

  test('expect 2 - 1 to be 1', () => {
    // arrange
    const operation = '-';
    // act
    const result = operate('2', '1', operation);
    // assert
    expect(result).toBe('1');
  });

  test('expect 2 x 2 to be 4', () => {
    // arrange
    const operation = 'x';
    // act
    const result = operate('2', '2', operation);
    // assert
    expect(result).toBe('4');
  });

  test('expect 4 ÷ 2 to be 2', () => {
    // arrange
    const operation = '÷';
    // act
    const result = operate('4', '2', operation);
    // assert
    expect(result).toBe('2');
  });

  test('expect 4 ÷ 0 to throw', () => {
    // arrange
    const operation = '÷';
    // act
    const result = operate('4', '0', operation);
    // assert
    expect(result).toMatch("Can't divide by 0.");
  });

  test('expect 3 % 2 to be 1', () => {
    // arrange
    const operation = '%';
    // act
    const result = operate('3', '2', operation);
    // assert
    expect(result).toBe('1');
  });

  test('expect 4 % 0 to throw', () => {
    // arrange
    const operation = '%';
    // act
    const result = operate('4', '0', operation);
    // assert
    expect(result).toMatch("Can't find modulo as can't divide by 0.");
  });
});
