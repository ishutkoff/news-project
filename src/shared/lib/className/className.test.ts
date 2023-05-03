import { classNames } from './className';

describe('className', () => {
    test('simple class classes', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('simple class and mods classes', () => {
        expect(classNames('someClass', { mod1: true, mod2: false, mod3: true }))
            .toBe('someClass mod1 mod3');
    });
    test('simple class and mods and additional classes', () => {
        expect(classNames('someClass', { mod1: true, mod2: false, mod3: true }, ['add1', 'add2']))
            .toBe('someClass mod1 mod3 add1 add2');
    });
});
