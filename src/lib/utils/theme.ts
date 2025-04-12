import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const theme = writable('light');

function getInitialTheme(): string {
  if (!browser) return 'light';

  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (error) {
    console.error('Error getting initial theme:', error);
    return 'light';
  }
}

export function updateDocumentClass(newTheme: string) {
  if (!browser) return;

  try {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (error) {
    console.error('Error updating document class:', error);
  }
}

// ✅ THIS IS THE FUNCTION YOU MUST HAVE
export function toggleTheme() {
  theme.update(current => {
    const next = current === 'dark' ? 'light' : 'dark';
    if (browser) {
      localStorage.setItem('theme', next);
      updateDocumentClass(next);
    }
    return next;
  });
}

if (browser) {
  const initialTheme = getInitialTheme();
  theme.set(initialTheme);

  setTimeout(() => {
    updateDocumentClass(initialTheme);
  }, 0);

  theme.subscribe((value) => {
    updateDocumentClass(value);
  });
}
