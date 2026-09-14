/**
 * VETCARE PRO — Interactive Filters & Search
 * Supports Services, Veterinarians, and Blog articles filtering
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Generic Category Filter (for Services, Vets, Pets)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('[data-category]');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Toggle active button state
        const group = btn.closest('.filter-group') || document;
        group.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active', 'btn-primary'));
        btn.classList.add('active', 'btn-primary');

        const filterValue = btn.getAttribute('data-filter') || 'all';

        filterItems.forEach((item) => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = '';
            item.classList.add('animate-fade-in');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // 2. Blog Search Input
    const blogSearchInput = document.getElementById('blog-search-input');
    const blogCards = document.querySelectorAll('.blog-article-card');

    if (blogSearchInput) {
      blogSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        blogCards.forEach((card) => {
          const title = card.querySelector('.article-title')?.textContent.toLowerCase() || '';
          const snippet = card.querySelector('.article-snippet')?.textContent.toLowerCase() || '';
          const category = card.getAttribute('data-category')?.toLowerCase() || '';

          if (title.includes(query) || snippet.includes(query) || category.includes(query)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }

    // 3. Blog Pagination Demo
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    paginationLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        paginationLinks.forEach((l) => l.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
        window.scrollTo({ top: 350, behavior: 'smooth' });
        window.showToast('Displaying page ' + link.textContent.trim(), 'info', 'Page Loaded');
      });
    });
  });
})();
