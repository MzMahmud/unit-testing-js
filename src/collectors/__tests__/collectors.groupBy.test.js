const Collectors = require('../collectors');

test('loads', () => {
    const _ = require('../collectors').groupBy;
});

test('should test empty array', () => {
    // given
    const input = [];

    // when
    const expected = new Map();

    // then
    const output = input.reduce(...Collectors.groupBy(n => n % 3, n => n));
    expect(output).toEqual(expected);
});

test('should test single element array', () => {
    // given
    const input = [1];

    // when
    const expected = new Map([[1, [1]]]);

    // then
    const output = input.reduce(...Collectors.groupBy(n => n % 3, n => n));
    expect(output).toEqual(expected);
});

test('should test distinct array', () => {
    // given
    const input = [1, 2, 3];

    // when
    const expected = new Map([
        [0, [3]],
        [1, [1]],
        [2, [2]]
    ]);

    // then
    const output = input.reduce(...Collectors.groupBy(n => n % 3, n => n));
    expect(output).toEqual(expected);
});

test('should test containing duplicate', () => {
    // given
    const input = [1, 2, 1, -1, 3, 4, 6, 0];

    // when
    const expected = new Map([
        [-1, [-1]],
        [0, [3, 6, 0]],
        [1, [1, 1, 4]],
        [2, [2]],
    ]);

    // then
    const output = input.reduce(...Collectors.groupBy(n => n % 3, n => n));
    expect(output).toEqual(expected);
});

test('should test multiple times call', () => {
    // given
    const input1 = [1, 2, 1, -1, 3, 4, 6, 0];

    // when
    const expected1 = new Map([
        [-1, [-1]],
        [0, [3, 6, 0]],
        [1, [1, 1, 4]],
        [2, [2]],
    ]);

    // then
    const output1 = input1.reduce(...Collectors.groupBy(n => n % 3, n => n));
    expect(output1).toEqual(expected1);

    // given
    const input2 = [1, 2, 3];

    // when
    const expected2 = new Map([
        [0, [3]],
        [1, [1]],
        [2, [2]]
    ]);

    // then
    const output2 = input2.reduce(...Collectors.groupBy(n => n % 3, n => n));
    expect(output2).toEqual(expected2);
});