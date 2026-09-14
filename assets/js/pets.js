/**
 * VETCARE PRO — Pet Management Logic (My Pets & Pet Details)
 * Add Pet modal submission, dynamic pet listing updates, and health profile management
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Add Pet Form Handler
    const addPetForm = document.getElementById('add-pet-form');
    if (addPetForm) {
      addPetForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const petName = document.getElementById('new-pet-name')?.value || 'New Pet';
        const petSpecies = document.getElementById('new-pet-species')?.value || 'Dog';
        const petBreed = document.getElementById('new-pet-breed')?.value || 'Mixed Breed';
        const petAge = document.getElementById('new-pet-age')?.value || '1 Year';
        const petWeight = document.getElementById('new-pet-weight')?.value || '10 kg';

        const petsGrid = document.getElementById('pets-container-grid');
        if (petsGrid) {
          const newCard = document.createElement('div');
          newCard.className = 'col-lg-4 col-md-6 mb-4';
          newCard.innerHTML = `
            <div class="card h-100 card-hover">
              <div class="card-body">
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div class="pet-avatar bg-primary-light d-flex align-items-center justify-content-center text-primary fs-3">
                    <i class="bi bi-${petSpecies.toLowerCase() === 'cat' ? 'github' : 'shield-heart'}"></i>
                  </div>
                  <div>
                    <h5 class="mb-0">${petName}</h5>
                    <span class="text-muted small">${petBreed} • ${petAge}</span>
                  </div>
                  <span class="badge badge-subtle-accent ms-auto">Healthy</span>
                </div>
                <div class="bg-subtle p-3 rounded mb-3">
                  <div class="row g-2 small">
                    <div class="col-6"><span class="text-muted">Weight:</span> <strong>${petWeight}</strong></div>
                    <div class="col-6"><span class="text-muted">Vaccines:</span> <strong class="text-success">Up to date</strong></div>
                  </div>
                </div>
                <div class="d-flex gap-2">
                  <a href="pet-details.html" class="btn btn-sm btn-outline-primary w-100">View Records</a>
                  <button class="btn btn-sm btn-light" title="Edit Pet"><i class="bi bi-pencil"></i></button>
                </div>
              </div>
            </div>
          `;
          petsGrid.prepend(newCard);
        }

        const addPetModalEl = document.getElementById('addPetModal');
        if (addPetModalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
          const bsModal = bootstrap.Modal.getInstance(addPetModalEl);
          if (bsModal) bsModal.hide();
        }

        window.showToast(`${petName} has been added to your care profile!`, 'success', 'Pet Added');
        addPetForm.reset();
      });
    }

    // 2. Pet Health Records Print / Export
    const exportRecordsBtn = document.getElementById('btn-export-health-records');
    if (exportRecordsBtn) {
      exportRecordsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    }
  });
})();
