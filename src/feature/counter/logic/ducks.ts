import { createSlice } from '@reduxjs/toolkit';

/** Counter state (sample) */
export type CounterState = {
	/** value */
	value: number;
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	} as CounterState,
	reducers: {
		incremented: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decremented: (state) => {
			state.value -= 1;
		},
	},
});

export const { actions: counterActions, reducer: counterReducer } =
	counterSlice;
export type CounterAction = ReturnType<
	(typeof counterActions)[keyof typeof counterActions]
>;
