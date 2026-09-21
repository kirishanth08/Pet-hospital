/**
 * VETCARE PRO — Appointment Booking Logic
 * Dynamic multi-step booking, veterinarian selection, slot selection, and confirmation alert & modal
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('appointment-booking-form');
    if (!bookingForm) return;

    // Time slot selection pills
    const timeSlots = document.querySelectorAll('.time-slot-btn');
    const selectedTimeInput = document.getElementById('selected-time-slot');

    timeSlots.forEach((slot) => {
      slot.addEventListener('click', (e) => {
        e.preventDefault();
        timeSlots.forEach((s) => s.classList.remove('btn-accent', 'active'));
        slot.classList.add('btn-accent', 'active');
        if (selectedTimeInput) {
          selectedTimeInput.value = slot.getAttribute('data-time') || slot.textContent.trim();
        }
      });
    });

    // Success Alert Element
    const successAlert = document.getElementById('appointment-success-alert');
    const bookAnotherBtn = document.getElementById('btn-book-another');

    if (bookAnotherBtn) {
      bookAnotherBtn.addEventListener('click', () => {
        if (successAlert) successAlert.classList.add('d-none');
        bookingForm.style.display = '';
        bookingForm.reset();
        bookingForm.classList.remove('was-validated');
        bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // Reschedule Query Parameter Handler
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('reschedule')) {
      const ticket = urlParams.get('reschedule');
      const rescheduleNotice = document.createElement('div');
      rescheduleNotice.className = 'alert alert-warning border-warning d-flex align-items-center gap-2 mb-4';
      rescheduleNotice.innerHTML = `<i class="bi bi-calendar-range-fill fs-5"></i> <div><strong>Rescheduling Visit #${ticket}:</strong> Please select your updated preferred date, time slot, and confirm details below.</div>`;
      bookingForm.prepend(rescheduleNotice);
    }

    // Phone input validation - strictly reject alphabets and require valid digits
    const phoneInput = document.getElementById('owner-phone');
    const phoneFeedback = phoneInput?.parentElement?.querySelector('.invalid-feedback') || document.getElementById('owner-phone-feedback');

    function validateAppointmentPhone(showErrorImmediately = false) {
      if (!phoneInput) return true;
      const val = phoneInput.value;
      const hasLetters = /[a-zA-Z]/.test(val);
      const digits = val.replace(/\D/g, '');

      if (hasLetters) {
        phoneInput.value = val.replace(/[a-zA-Z]/g, '');
        phoneInput.classList.add('is-invalid');
        phoneInput.setCustomValidity('Letters are not allowed in telephone numbers.');
        if (phoneFeedback) {
          phoneFeedback.textContent = 'Letters are not allowed. Please enter numbers only.';
          phoneFeedback.style.display = 'block';
        }
        return false;
      }

      if (val.trim() === '' && phoneInput.hasAttribute('required')) {
        if (showErrorImmediately) {
          phoneInput.classList.add('is-invalid');
          phoneInput.setCustomValidity('Please enter your phone number.');
          if (phoneFeedback) {
            phoneFeedback.textContent = 'Please enter your phone number.';
            phoneFeedback.style.display = 'block';
          }
        }
        return false;
      }

      if (digits.length < 7) {
        phoneInput.setCustomValidity('Please enter a valid phone number with at least 7 digits.');
        if (showErrorImmediately || val.length > 0) {
          phoneInput.classList.add('is-invalid');
          if (phoneFeedback) {
            phoneFeedback.textContent = 'Please enter a valid phone number with at least 7 digits.';
            phoneFeedback.style.display = 'block';
          }
        }
        return false;
      }

      // Valid phone
      phoneInput.classList.remove('is-invalid');
      phoneInput.setCustomValidity('');
      if (phoneFeedback) {
        phoneFeedback.style.display = '';
        phoneFeedback.textContent = 'Please enter a valid telephone number with numbers only.';
      }
      return true;
    }

    if (phoneInput) {
      // Disallow typing alphabets
      phoneInput.addEventListener('keydown', (e) => {
        if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Home', 'End'].includes(e.key) ||
            e.ctrlKey || e.metaKey) {
          return;
        }
        if (/[a-zA-Z]/.test(e.key)) {
          e.preventDefault();
          phoneInput.classList.add('is-invalid');
          if (phoneFeedback) {
            phoneFeedback.textContent = 'Letters are not allowed. Please enter numbers only.';
            phoneFeedback.style.display = 'block';
          }
        }
      });

      phoneInput.addEventListener('input', () => {
        validateAppointmentPhone(false);
      });

      phoneInput.addEventListener('blur', () => {
        validateAppointmentPhone(true);
      });
    }

    // Form Submission
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isPhoneValid = validateAppointmentPhone(true);

      if (!bookingForm.checkValidity() || !isPhoneValid) {
        bookingForm.classList.add('was-validated');
        if (window.showToast) {
          window.showToast('Please correct errors and provide a valid phone number before booking.', 'warning', 'Validation Error');
        }
        return;
      }

      // Gather form values
      const ownerName = document.getElementById('owner-name')?.value || 'Valued Pet Parent';
      const petName = document.getElementById('pet-name')?.value || 'Your Pet';
      const petType = document.getElementById('pet-type')?.value || 'Companion Animal';
      const serviceType = document.getElementById('appointment-service')?.value || 'General Wellness Exam';
      const vetName = document.getElementById('preferred-vet')?.value || 'First Available Specialist';
      const apptDate = document.getElementById('appointment-date')?.value || 'Upcoming Date';
      const apptTime = selectedTimeInput?.value || '09:00 AM';
      const ticketNumber = 'VET-' + Math.floor(100000 + Math.random() * 900000);

      // 1. Update In-Page Success Alert
      if (successAlert) {
        const sOwner = document.getElementById('success-owner-name');
        const sPet = document.getElementById('success-pet-name');
        const sTicket = document.getElementById('success-ticket');
        const sService = document.getElementById('success-service');
        const sVet = document.getElementById('success-vet');
        const sDateTime = document.getElementById('success-datetime');

        if (sOwner) sOwner.textContent = ownerName;
        if (sPet) sPet.textContent = `${petName} (${petType})`;
        if (sTicket) sTicket.textContent = `#${ticketNumber}`;
        if (sService) sService.textContent = serviceType;
        if (sVet) sVet.textContent = vetName;
        if (sDateTime) sDateTime.textContent = `${apptDate} at ${apptTime}`;

        successAlert.classList.remove('d-none');
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // 2. Update Confirmation Modal Elements
      const modalPet = document.getElementById('conf-pet-name');
      const modalService = document.getElementById('conf-service');
      const modalVet = document.getElementById('conf-vet');
      const modalDateTime = document.getElementById('conf-datetime');
      const modalTicket = document.getElementById('conf-ticket');

      if (modalPet) modalPet.textContent = `${petName} (${petType})`;
      if (modalService) modalService.textContent = serviceType;
      if (modalVet) modalVet.textContent = vetName;
      if (modalDateTime) modalDateTime.textContent = `${apptDate} at ${apptTime}`;
      if (modalTicket) modalTicket.textContent = ticketNumber;

      // 3. Trigger Confirmation Modal or Toast
      const confirmModalEl = document.getElementById('appointmentConfirmationModal');
      if (confirmModalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        try {
          const modal = new bootstrap.Modal(confirmModalEl);
          modal.show();
        } catch (err) {
          console.warn('Bootstrap modal init error:', err);
        }
      }

      if (window.showToast) {
        window.showToast(`Appointment confirmed for ${petName} on ${apptDate} at ${apptTime}! Ticket #${ticketNumber}`, 'success', 'Appointment Booked');
      }

      // Hide form after successful booking so success message is prominent
      bookingForm.style.display = 'none';
    });
  });
})();
