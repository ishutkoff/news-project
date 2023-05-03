import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';
import { CounterSchema } from '../../types/counterSchema';

describe('getCounterValue.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };
    test('getCounterValue.test', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
