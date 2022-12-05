const Collectors = require('../collectors');

test('loads', () => {
    const _ = require('../collectors').joining;
});

test('should test empty array', () => {
    const input = [];

    expect("").toEqual(input.reduce(...Collectors.joining()));
    expect("").toEqual(input.reduce(...Collectors.joining("-")));
    expect("").toEqual(input.reduce(...Collectors.joining(",", "[", "]")));
});

test('should test single element array', () => {
    const input = [1];

    expect("1").toEqual(input.reduce(...Collectors.joining()));
    expect("1").toEqual(input.reduce(...Collectors.joining("-")));
    expect("[1]").toEqual(input.reduce(...Collectors.joining(",", "[", "]")));
});

test('should test more than one element array', () => {
    const input = [1, 2, 3];

    expect("1,2,3").toEqual(input.reduce(...Collectors.joining()));
    expect("1-2-3").toEqual(input.reduce(...Collectors.joining("-")));
    expect("[1,2,3]").toEqual(input.reduce(...Collectors.joining(",", "[", "]")));
});

test('should test multiple times call', () => {
    const input1 = [1, 2, 1, -1];
    expect("1,2,1,-1").toEqual(input1.reduce(...Collectors.joining()));
    expect("1_2_1_-1").toEqual(input1.reduce(...Collectors.joining("_")));
    expect("[1,2,1,-1]").toEqual(input1.reduce(...Collectors.joining(",", "[", "]")));

    const input2 = [1, 2, 1];
    expect("1,2,1").toEqual(input2.reduce(...Collectors.joining()));
    expect("1_2_1").toEqual(input2.reduce(...Collectors.joining("_")));
    expect("[1,2,1]").toEqual(input2.reduce(...Collectors.joining(",", "[", "]")));
});