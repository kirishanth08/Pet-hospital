/**
 * VETCARE PRO — Theme Switcher (Light / Dark Mode)
 * Uses Vanilla JavaScript & localStorage
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'vetcare_theme';
  const htmlElement = document.documentElement;

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored) {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update all theme toggle button icons
    const togglers = document.querySelectorAll('.theme-toggle-btn');
    togglers.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun-fill text-warning';
          btn.setAttribute('title', 'Switch to Light Mode');
          btn.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
          icon.className = 'bi bi-moon-stars-fill';
          btn.setAttribute('title', 'Switch to Dark Mode');
          btn.setAttribute('aria-label', 'Switch to Dark Mode');
        }
      }
    });

    window.dispatchEvent(new CustomEvent('vetcareThemeChanged', { detail: { theme } }));
  }

  // Initial setup immediately before DOM finishes rendering to prevent flash
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', () => {
    // Re-sync button states
    setTheme(getPreferredTheme());

    // Listen for click events on theme toggle buttons
    document.body.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.theme-toggle-btn');
      if (toggleBtn) {
        const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      }
    });

    // Listen for OS system theme change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (!getStoredTheme()) {
        setTheme(getPreferredTheme());
      }
    });
  });
})();
