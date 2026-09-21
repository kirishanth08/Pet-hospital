/**
 * VETCARE PRO — Pet Owner Dashboard Interactions
 * Sidebar responsive toggling, prescription refills, invoice viewer, and appointment management
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle for Mobile Devices
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const dashboardSidebar = document.querySelector('.dashboard-sidebar');
    const sidebarBackdrop = document.querySelector('.dashboard-sidebar-backdrop');

    if (sidebarToggleBtn && dashboardSidebar) {
      sidebarToggleBtn.addEventListener('click', () => {
        dashboardSidebar.classList.toggle('show');
        if (sidebarBackdrop) {
          sidebarBackdrop.classList.toggle('show');
        }
      });
    }

    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', () => {
        dashboardSidebar.classList.remove('show');
        sidebarBackdrop.classList.remove('show');
      });
    }

    // 2. Prescription Refill Request Handler
    const refillForm = document.getElementById('prescription-refill-form');
    if (refillForm) {
      refillForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const medName = document.getElementById('refill-med-name')?.value || 'Medication';
        const pharmacy = document.getElementById('refill-delivery')?.value || 'Clinic Pickup';

        const refillModalEl = document.getElementById('requestRefillModal');
        if (refillModalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
          const bsModal = bootstrap.Modal.getInstance(refillModalEl);
          if (bsModal) bsModal.hide();
        }

        window.showToast(`Refill request for "${medName}" submitted (${pharmacy}). Doctor review is in progress.`, 'success', 'Refill Requested');
        refillForm.reset();
      });
    }

    // 3. Invoice Print / View Demo
    const printInvoiceBtns = document.querySelectorAll('.btn-print-invoice');
    printInvoiceBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    });

    // 4. Appointment Reschedule / Cancel Actions
    const cancelApptBtns = document.querySelectorAll('.btn-cancel-appt');
    cancelApptBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const apptRow = btn.closest('.appointment-card, tr');
        if (confirm('Are you sure you want to cancel this veterinary visit?')) {
          if (apptRow) {
            apptRow.style.opacity = '0.5';
            const badge = apptRow.querySelector('.badge');
            if (badge) {
              badge.className = 'badge bg-danger';
              badge.textContent = 'Cancelled';
            }
          }
          window.showToast('Appointment has been cancelled. You can reschedule anytime.', 'warning', 'Appointment Cancelled');
        }
      });
    });

    // 5. Sign Out Handler
    document.addEventListener('click', (e) => {
      const signoutBtn = e.target.closest('.btn-signout, a[href="index.html"].text-danger');
      if (signoutBtn) {
        e.preventDefault();
        try {
          localStorage.removeItem('vetcare_current_user');
        } catch (err) {}
        if (window.showToast) {
          window.showToast('You have been signed out successfully.', 'info', 'Signed Out');
        }
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 400);
      }
    });
  });
})();
