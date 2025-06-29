import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		const { container } = await render(Page, { page });
		expect(container.querySelector('h1')?.textContent).toBe('Ping Client');
	});
});
