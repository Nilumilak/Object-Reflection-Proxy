import orderByProps from '../task_1';

const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

test.each([
    ['No sort list', obj, undefined, [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' },
    ]],
    ['name, level sort list', obj, ['name', 'level'], [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ]],
    ['all keys in sort list', obj, ['name', 'level', 'health', 'attack', 'defence'], [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'health', value: 10 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
    ]],
])('Testing case: %s', (_, testObj, keylist, expected) => {
    expect(orderByProps(testObj, keylist)).toEqual(expected);
});
