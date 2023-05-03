import { DeepPartial } from '@reduxjs/toolkit';
import { CountReducer, CounterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            CountReducer(state as CounterSchema, CounterActions.increment()),
        ).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            CountReducer(state as CounterSchema, CounterActions.decrement()),
        ).toEqual({ value: 9 });
    });
});
