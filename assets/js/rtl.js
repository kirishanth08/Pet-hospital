/**
 * VETCARE PRO — RTL / LTR Language Direction Handler
 * Provides text-based toggle (LTR | RTL) and toggles dir="rtl" & rtl.css
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'vetcare_dir';
  const htmlElement = document.documentElement;

  function getStoredDir() {
    return localStorage.getItem(STORAGE_KEY) || 'ltr';
  }

  function setDirection(dir) {
    htmlElement.setAttribute('dir', dir);
    localStorage.setItem(STORAGE_KEY, dir);

    // Update or link rtl.css
    let rtlLink = document.getElementById('rtl-stylesheet');
    if (dir === 'rtl') {
      if (!rtlLink) {
        rtlLink = document.createElement('link');
        rtlLink.id = 'rtl-stylesheet';
        rtlLink.rel = 'stylesheet';
        // Compute relative path
        const depth = window.location.pathname.includes('/pages/') ? '../assets/css/rtl.css' : 'assets/css/rtl.css';
        rtlLink.href = depth;
        document.head.appendChild(rtlLink);
      } else {
        rtlLink.disabled = false;
      }
    } else {
      if (rtlLink) {
        rtlLink.disabled = true;
      }
    }

    // Update text toggler buttons
    const togglers = document.querySelectorAll('.rtl-text-toggle');
    togglers.forEach((btn) => {
      btn.textContent = 'RTL';
      if (dir === 'rtl') {
        btn.classList.add('active');
        btn.setAttribute('title', 'Switch to LTR');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('title', 'Switch to RTL');
      }
    });

    window.dispatchEvent(new CustomEvent('vetcareDirChanged', { detail: { dir } }));
  }

  // Set initial direction
  setDirection(getStoredDir());

  document.addEventListener('DOMContentLoaded', () => {
    setDirection(getStoredDir());

    document.body.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.rtl-text-toggle');
      if (toggleBtn) {
        const currentDir = htmlElement.getAttribute('dir') || 'ltr';
        const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        setDirection(nextDir);
      }
    });
  });
})();
