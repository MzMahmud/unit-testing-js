const Collectors = require('./collectors');

test('loads', () => {
    const _ = require('./collectors').maxBy;
});

test('should test empty array', () => {
    // given
    const input = [];

    // when

    // then
    const output = input.reduce(...Collectors.maxBy());
    expect(output).toBeNull();
});

test('should test single element array', () => {
    // given
    const input = [1];

    // when
    const expected = 1;

    // then
    const output = input.reduce(...Collectors.maxBy());
    expect(output).toEqual(expected);
});

test('should test distinct array', () => {
    // given
    const input = [1, 2, 3];

    // when
    const expected = 3;

    // then
    const output = input.reduce(...Collectors.maxBy());
    expect(output).toEqual(expected);
});

test('should test containing duplicate', () => {
    // given
    const input = [1, 2, 1, -1];

    // when
    const expected = 2;

    // then
    const output = input.reduce(...Collectors.maxBy());
    expect(output).toEqual(expected);
});

test('should test multiple times call', () => {
    // given
    const input1 = [1, 2, 1, -1];

    // when
    const expected1 = 2;

    // then
    const output1 = input1.reduce(...Collectors.maxBy());
    expect(output1).toEqual(expected1);

    // given
    const input2 = [1, 2, 1];

    // when
    const expected2 = 2;

    // then
    const output2 = input2.reduce(...Collectors.maxBy());
    expect(output2).toEqual(expected2);
});