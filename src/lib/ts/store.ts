import { writable } from 'svelte/store';

export const agentCount = writable(0);
export const portfolio = writable([]);