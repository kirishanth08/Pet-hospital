/**
 * VETCARE PRO — Form Handling & Validation
 * Vanilla JavaScript validation with accessible states & toast notifications
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Generic Bootstrap Form Validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
        }

        event.preventDefault();
        form.classList.add('was-validated');

        // Form Type Identification
        const formType = form.getAttribute('data-form-type');

        if (formType === 'contact') {
          handleContactSubmit(form);
        } else if (formType === 'login') {
          handleLoginSubmit(form);
        } else if (formType === 'register') {
          handleRegisterSubmit(form);
        } else if (formType === 'forgot-password') {
          handleForgotPasswordSubmit(form);
        } else if (formType === 'newsletter') {
          handleNewsletterSubmit(form);
        } else if (formType === 'appointment-custom') {
          // Handled specifically by appointments.js
          return;
        } else {
          window.showToast('Your request has been submitted successfully!', 'success', 'Success');
          form.reset();
          form.classList.remove('was-validated');
        }
      }, false);
    });

    // Contact Form Handler
    function handleContactSubmit(form) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        window.showToast('Thank you! Our veterinary team will contact you within 24 hours.', 'success', 'Message Sent');
        form.reset();
        form.classList.remove('was-validated');
      }, 900);
    }

    // Login Form Handler
    function handleLoginSubmit(form) {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Authenticating...';
      }

      setTimeout(() => {
        window.showToast('Welcome back! Redirecting to your Pet Health Portal...', 'success', 'Login Successful');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      }, 800);
    }

    // Register Form Handler
    function handleRegisterSubmit(form) {
      const pass = form.querySelector('#reg-password')?.value;
      const confirmPass = form.querySelector('#reg-confirm-password')?.value;

      if (pass && confirmPass && pass !== confirmPass) {
        window.showToast('Passwords do not match. Please verify and try again.', 'danger', 'Validation Error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Creating Account...';
      }

      setTimeout(() => {
        window.showToast('Account created successfully! Welcome to VetCare Pro.', 'success', 'Registration Complete');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      }, 900);
    }

    // Forgot Password Form Handler
    function handleForgotPasswordSubmit(form) {
      const email = form.querySelector('input[type="email"]')?.value || 'your email';
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending link...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Reset Instructions';
        }
        window.showToast(`Password reset link sent to ${email}. Check your inbox!`, 'success', 'Reset Link Sent');
        form.reset();
        form.classList.remove('was-validated');
      }, 800);
    }

    // Password Visibility Toggle
    document.querySelectorAll('.toggle-password-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const inputGroup = btn.closest('.input-group');
        const input = inputGroup?.querySelector('input');
        const icon = btn.querySelector('i');
        if (input) {
          if (input.type === 'password') {
            input.type = 'text';
            if (icon) icon.className = 'bi bi-eye-slash';
          } else {
            input.type = 'password';
            if (icon) icon.className = 'bi bi-eye';
          }
        }
      });
    });

    // Social Authentication (Google & Apple)
    const googleBtns = document.querySelectorAll('#btnGoogleLogin, #btnGoogleRegister');
    googleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Connecting Google Account...';
        btn.disabled = true;
        setTimeout(() => {
          window.showToast('Google authentication verified! Redirecting to Pet Portal...', 'success', 'Google Sign-In');
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 1000);
        }, 700);
      });
    });

    const appleBtns = document.querySelectorAll('#btnAppleLogin, #btnAppleRegister');
    appleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Connecting Apple ID...';
        btn.disabled = true;
        setTimeout(() => {
          window.showToast('Apple ID verified! Redirecting to Pet Portal...', 'success', 'Apple Sign-In');
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 1000);
        }, 700);
      });
    });
  });
})();
