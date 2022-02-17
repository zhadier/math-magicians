import calculate from '../logic/calculate';

test('If buttonName passed as parameter is AC, expect returned values to be null', () => {
  // Arrange
  const obj = { total: null, next: null, operation: null };
  const buttonName = 'AC';
  // Act
  const solution = calculate(obj, buttonName);
  // Assert
  expect(solution).toEqual({ total: null, next: null, operation: null });
});

describe('Testing for when there are no operations added yet', () => {
  test('If there is an operation, and button pressed is a number,concatenate next with button pressed', () => {
    // Arrange
    const obj = { total: '2', next: '3', operation: '+' };
    const buttonName = '5';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.next).toEqual('35');
  });

  test('If there is no operation, and button pressed is a number,concatenate next with button pressed and total should be null', () => {
    // Arrange
    const obj = { total: '3', next: '3', operation: null };
    const buttonName = '5';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.next).toEqual('35');
    expect(solution.total).toEqual(null);
  });
});

test('If button pressed is ., concatenate . to next or total, depending on if total is there', () => {
  // Arrange
  const obj = { total: '3', next: '3', operation: 'Hello' };
  const obj1 = { total: null, next: null, operation: null };
  const buttonName = '.';
  // Act
  const solution = calculate(obj, buttonName);
  const solution1 = calculate(obj1, buttonName);
  // Assert
  expect(solution.next).toEqual('3.');
  expect(solution1.total).toEqual('0.');
});

test('If button pressed is =, and next and total have values, operate on them', () => {
  // Arrange
  const obj = { total: '3', next: '3', operation: '+' };
  const buttonName = '=';
  // Act
  const solution = calculate(obj, buttonName);
  // Assert
  expect(solution.total).toEqual('6');
  expect(solution.next).toEqual(null);
});

test('If button pressed is +/-, and next or total have values, reverse their sign', () => {
  // Arrange
  const obj = { total: '3', next: '3', operation: '+' };
  const obj1 = { total: '3', next: null, operation: null };
  const obj2 = { total: '-3', next: null, operation: null };
  const buttonName = '+/-';
  // Act
  const solution = calculate(obj, buttonName);
  const solution1 = calculate(obj1, buttonName);
  const solution2 = calculate(obj2, buttonName);
  // Assert
  expect(solution.next).toEqual('-3');
  expect(solution1.total).toEqual('-3');
  expect(solution2.total).toEqual('3');
});

describe('Testing for when operation button is pressed', () => {
  test('If user presses an operation after total and there is no operation beforehand, update the operation', () => {
    // Arrange
    const obj = { total: '3', next: null, operation: null };
    const buttonName = '+';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.next).toEqual(null);
    expect(solution.operation).toEqual('+');
  });

  test('If user presses an operation after total, and there is already an operation, update the operation', () => {
    // Arrange
    const obj = { total: '3', next: null, operation: '-' };
    const buttonName = '+';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.next).toEqual(null);
    expect(solution.operation).toEqual('+');
  });

  test('If user presses an operation after next, and there is already an operation, run the prev operation and update total, set operation to new operation', () => {
    // Arrange
    const obj = { total: '3', next: '2', operation: '-' };
    const buttonName = '+';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.total).toEqual('1');
    expect(solution.operation).toEqual('+');
  });

  test('If user presses an operation after total, and there is already an operation, update the operation', () => {
    // Arrange
    const obj = { total: '3', next: null, operation: '-' };
    const buttonName = '+';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.next).toEqual(null);
    expect(solution.operation).toEqual('+');
  });

  test('If user presses an operation and there is no total yet, shift next to total and update the operation', () => {
    // Arrange
    const obj = { total: null, next: '3', operation: null };
    const buttonName = '+';
    // Act
    const solution = calculate(obj, buttonName);
    // Assert
    expect(solution.next).toEqual(null);
    expect(solution.operation).toEqual('+');
    expect(solution.total).toEqual('3');
  });
});
