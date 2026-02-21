import type { ReducerState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/feature/counter';

const reducer = {
	counter: counterReducer,
};

export type RootState = {
	[K in keyof typeof reducer]: ReducerState<(typeof reducer)[K]>;
};

/**
 * App store from Redux
 */
export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: false,
		}).concat([]),
});

export type AppDispatch = typeof store.dispatch;
