import { describe, expect, test, vi } from 'vitest';
import { StrictMode } from 'react';
import type { createRoot } from 'react-dom/client';

const { rootDummy } = vi.hoisted(() => ({
	rootDummy: Symbol('root') as unknown as ReturnType<
		typeof document.getElementById
	>,
}));
const { renderMock, createRootMock, getElementByIdSpy, AppMock } = vi.hoisted(
	() => ({
		renderMock: vi.fn<ReturnType<typeof createRoot>['render']>(),
		createRootMock: vi.fn<typeof createRoot>(),
		getElementByIdSpy: vi
			.spyOn(document, 'getElementById')
			.mockImplementation(() => rootDummy),
		AppMock: vi.fn(),
	})
);

vi.mock('react-dom/client', async () => {
	const original = await vi.importActual('react-dom/client');

	// createRoot()が返すオブジェクトのrender()を用意
	type Root = ReturnType<typeof createRoot>;
	const rootDummy = {
		render: renderMock,
	} as Partial<Root> as unknown as Root;

	// renderMockを仕込んだオブジェクトを返すcreateRoot()を用意
	createRootMock.mockReturnValue(rootDummy);

	return {
		...original,
		createRoot: createRootMock,
	};
});

//
vi.mock('../App', async () => {
	const original = await vi.importActual('../App');

	return {
		...original,
		default: AppMock,
	};
});

// await vi.importActual('../main');
import '../main';

describe('entry point', () => {
	test('calls createRoot() and render()', async () => {
		expect(getElementByIdSpy).toHaveBeenCalledWith('root');
		expect(createRootMock).toHaveBeenCalledWith(rootDummy);
		expect(renderMock).toHaveBeenCalledWith(
			<StrictMode>
				<AppMock />
			</StrictMode>
		);
	});
});
