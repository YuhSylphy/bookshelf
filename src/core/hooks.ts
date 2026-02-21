import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

export const useAppDispatch = () => useDispatch<AppDispatch>();

createSelector(
	({ counter: { value } }: RootState) => value,
	(count) => ({ count })
);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 没
// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// /**
//  * createSelectorを間に噛ませたuseSelector
//  * 複数のselector指定、combiner指定をしたい場合は直接or utilを増やす
//  * @param selector
//  * @returns
//  */
// export const useAppSelector = <R>(selector: (state: RootState) => R): R => {
// 	const cachedSelector = useMemo(
// 		() => createSelector(selector, (x) => x),
// 		[selector]
// 	);
// 	return useTypedSelector(cachedSelector);
// };
