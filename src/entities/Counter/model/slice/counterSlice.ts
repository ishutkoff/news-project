/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState = { value: 0 } as CounterSchema;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { actions: CounterActions } = counterSlice;
export const { reducer: CountReducer } = counterSlice;
