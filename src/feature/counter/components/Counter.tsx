import { useAppDispatch, useAppSelector, type RootState } from '@/core';
import React, { useCallback } from 'react';
import { createSelector } from '@reduxjs/toolkit';

import { counterActions } from '../logic/ducks';

const useCounterHooks = () => {
	const dispatch = useAppDispatch();
	const { count } = useAppSelector(
		createSelector(
			({ counter: { value } }: RootState) => value,
			(count) => ({ count })
		)
	);

	const increment = useCallback(async () => {
		dispatch(counterActions.incremented());
	}, [dispatch]);
	const decrement = useCallback(async () => {
		dispatch(counterActions.decremented());
	}, [dispatch]);

	return { count, increment, decrement };
};

export function Counter() {
	const { count, increment, decrement } = useCounterHooks();
	return (
		<React.Fragment>
			<p data-testid="dummy" className="read-the-docs">
				dummy
			</p>
			<p data-testid="counter" className="read-the-docs">
				count: {count}
			</p>
			<p data-testid="counter-op" className="read-the-docs">
				<button id="decrement" onClick={decrement}>
					-
				</button>
				<button id="increment" onClick={increment}>
					+
				</button>
			</p>
		</React.Fragment>
	);
}
