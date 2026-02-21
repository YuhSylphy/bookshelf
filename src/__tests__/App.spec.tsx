import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App>', () => {
	test('render successfully', async () => {
		render(<App />);
		const dummy = await screen.findByTestId("dummy");
		expect(dummy.textContent).toBe("dummy");
	});
});
