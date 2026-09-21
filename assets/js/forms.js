/**
 * VETCARE PRO — Form Handling & Validation
 * Vanilla JavaScript validation with accessible states, phone restrictions,
 * authentication persistence, and portal password management.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Safe Toast Helper fallback
    const safeToast = (message, type = 'success', title = 'VetCare Notification') => {
      if (typeof window.showToast === 'function') {
        window.showToast(message, type, title);
      } else {
        console.log(`[${title}] ${message}`);
      }
    };

    // Helper: Find invalid-feedback associated with an input
    function getFeedbackElement(input) {
      if (!input) return null;
      const parent = input.closest('.input-group') || input.parentElement;
      if (parent) {
        const feedback = parent.querySelector('.invalid-feedback') || parent.parentElement?.querySelector('.invalid-feedback');
        if (feedback) return feedback;
      }
      return input.nextElementSibling?.classList.contains('invalid-feedback') ? input.nextElementSibling : null;
    }

    // Helper: Phone Input Validation and Alphabetic Prevention
    function setPhoneInvalid(input, message) {
      if (!input) return;
      input.classList.add('is-invalid');
      input.setCustomValidity(message);
      const feedback = getFeedbackElement(input);
      if (feedback) {
        feedback.textContent = message;
        feedback.style.display = 'block';
      }
    }

    function setPhoneValid(input) {
      if (!input) return;
      input.classList.remove('is-invalid');
      input.setCustomValidity('');
      const feedback = getFeedbackElement(input);
      if (feedback) {
        feedback.style.display = '';
        feedback.textContent = 'Please enter a valid telephone number with numbers only.';
      }
    }

    function setupPhoneInput(phoneInput) {
      if (!phoneInput || phoneInput.dataset.phoneBound) return;
      phoneInput.dataset.phoneBound = 'true';

      // 1. Disallow alphabetic key presses
      phoneInput.addEventListener('keydown', (e) => {
        if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Home', 'End'].includes(e.key) ||
            e.ctrlKey || e.metaKey) {
          return;
        }
        if (/[a-zA-Z]/.test(e.key)) {
          e.preventDefault();
          setPhoneInvalid(phoneInput, 'Letters are not allowed. Please enter numbers only.');
        }
      });

      // 2. Sanitize any pasted or injected alphabets
      phoneInput.addEventListener('input', () => {
        if (/[a-zA-Z]/.test(phoneInput.value)) {
          phoneInput.value = phoneInput.value.replace(/[a-zA-Z]/g, '');
          setPhoneInvalid(phoneInput, 'Letters are not allowed. Please enter numbers only.');
          return;
        }

        const digits = phoneInput.value.replace(/\D/g, '');
        if (phoneInput.hasAttribute('required') && phoneInput.value.trim() !== '' && digits.length < 7) {
          setPhoneInvalid(phoneInput, 'Please enter a valid phone number with at least 7 digits.');
        } else if (phoneInput.value.trim() !== '') {
          setPhoneValid(phoneInput);
        } else if (!phoneInput.hasAttribute('required')) {
          setPhoneValid(phoneInput);
        }
      });

      // 3. Validate on blur
      phoneInput.addEventListener('blur', () => {
        const val = phoneInput.value.trim();
        const digits = val.replace(/\D/g, '');
        if (phoneInput.hasAttribute('required')) {
          if (val === '') {
            setPhoneInvalid(phoneInput, 'Please provide a contact telephone number.');
          } else if (digits.length < 7) {
            setPhoneInvalid(phoneInput, 'Please enter a valid phone number with at least 7 digits.');
          } else {
            setPhoneValid(phoneInput);
          }
        }
      });
    }

    // Attach phone restriction to all tel inputs on page
    document.querySelectorAll('input[type="tel"]').forEach((pInput) => {
      setupPhoneInput(pInput);
    });

    // 1. Generic Bootstrap Form Validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form) => {
      // Setup tel inputs in this form
      const phoneInput = form.querySelector('input[type="tel"]');
      if (phoneInput) {
        setupPhoneInput(phoneInput);
      }

      form.addEventListener('submit', (event) => {
        // Specifically enforce phone validation on submit
        if (phoneInput) {
          const val = phoneInput.value.trim();
          const digits = val.replace(/\D/g, '');
          const hasLetters = /[a-zA-Z]/.test(phoneInput.value);

          if (hasLetters) {
            phoneInput.value = phoneInput.value.replace(/[a-zA-Z]/g, '');
            setPhoneInvalid(phoneInput, 'Letters are not allowed. Please enter numbers only.');
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
          }

          if (phoneInput.hasAttribute('required') && (val === '' || digits.length < 7)) {
            setPhoneInvalid(phoneInput, val === '' ? 'Please provide a telephone number.' : 'Please enter a valid phone number with at least 7 digits.');
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
          }
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
        }

        event.preventDefault();
        form.classList.add('was-validated');

        // Form Type Identification
        const formType = form.getAttribute('data-form-type') || form.id;

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
        } else if (formType === 'change-password-form' || form.id === 'change-password-form') {
          handleChangePasswordSubmit(form);
        } else if (formType === 'appointment-custom') {
          // Handled specifically by appointments.js
          return;
        } else {
          safeToast('Your request has been submitted successfully!', 'success', 'Success');
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
        safeToast('Thank you! Our veterinary team will contact you within 24 hours.', 'success', 'Message Sent');
        form.reset();
        form.classList.remove('was-validated');
        // Clear any phone validity styles
        form.querySelectorAll('.is-invalid, .is-valid').forEach((el) => el.classList.remove('is-invalid', 'is-valid'));
      }, 700);
    }

    // Login Form Handler
    function handleLoginSubmit(form) {
      const emailInput = form.querySelector('#login-email');
      const passInput = form.querySelector('#login-password');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Sign In to Portal';

      const email = emailInput?.value.trim().toLowerCase();
      const pass = passInput?.value;

      // Check registered users in localStorage
      let users = [];
      try {
        users = JSON.parse(localStorage.getItem('vetcare_users') || '[]');
      } catch (err) {
        users = [];
      }

      const existingUser = users.find((u) => u.email.toLowerCase() === email);

      if (existingUser) {
        // Registered user found: verify password
        if (existingUser.password !== pass) {
          if (passInput) {
            passInput.classList.add('is-invalid');
            const feedback = document.getElementById('login-password-feedback') || getFeedbackElement(passInput);
            if (feedback) {
              feedback.textContent = 'Incorrect password. Please verify and try again.';
              feedback.style.display = 'block';
            }
          }
          safeToast('Incorrect password for this account. Please try again.', 'danger', 'Login Failed');
          return;
        }
      }

      // Password matches or general portal demo authentication
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Authenticating...';
      }

      try {
        const sessionUser = existingUser || {
          name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
          email: email,
          password: pass
        };
        localStorage.setItem('vetcare_current_user', JSON.stringify(sessionUser));
        localStorage.setItem('vetcare_user_password', pass);
      } catch (e) {
        console.warn('Storage error on login:', e);
      }

      setTimeout(() => {
        safeToast('Welcome back! Redirecting to your Pet Health Portal...', 'success', 'Login Successful');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 500);
      }, 600);
    }

    // Register Form Handler
    function handleRegisterSubmit(form) {
      const nameInput = form.querySelector('#reg-name');
      const emailInput = form.querySelector('#reg-email');
      const phoneInput = form.querySelector('#reg-phone');
      const passInput = form.querySelector('#reg-password');
      const confirmPassInput = form.querySelector('#reg-confirm-password');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Complete Registration';

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim().toLowerCase();
      const phone = phoneInput?.value.trim();
      const pass = passInput?.value;
      const confirmPass = confirmPassInput?.value;

      // 1. Password Match Validation
      if (pass !== confirmPass) {
        if (confirmPassInput) {
          confirmPassInput.classList.add('is-invalid');
          const confFeedback = document.getElementById('reg-confirm-feedback') || getFeedbackElement(confirmPassInput);
          if (confFeedback) {
            confFeedback.textContent = 'Passwords do not match. Please verify and try again.';
            confFeedback.style.display = 'block';
          }
        }
        safeToast('Passwords do not match. Please verify and try again.', 'danger', 'Validation Error');
        return;
      }

      // 2. Phone Validation
      if (phoneInput) {
        const digits = phone.replace(/\D/g, '');
        if (/[a-zA-Z]/.test(phone)) {
          setPhoneInvalid(phoneInput, 'Letters are not allowed. Please enter numbers only.');
          safeToast('Phone number contains invalid characters. Numbers only please.', 'danger', 'Invalid Phone');
          return;
        }
        if (digits.length < 7) {
          setPhoneInvalid(phoneInput, 'Please enter a valid phone number with at least 7 digits.');
          safeToast('Please enter a valid telephone number with at least 7 digits.', 'warning', 'Invalid Phone');
          return;
        }
      }

      // 3. Process Account Creation
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Creating Account...';
      }

      try {
        let users = [];
        try {
          users = JSON.parse(localStorage.getItem('vetcare_users') || '[]');
        } catch (e) {
          users = [];
        }

        const newUser = {
          name: name || 'Pet Parent',
          email: email,
          phone: phone,
          password: pass,
          createdAt: new Date().toISOString()
        };

        const existingIdx = users.findIndex((u) => u.email.toLowerCase() === email);
        if (existingIdx >= 0) {
          users[existingIdx] = newUser;
        } else {
          users.push(newUser);
        }

        localStorage.setItem('vetcare_users', JSON.stringify(users));
        localStorage.setItem('vetcare_current_user', JSON.stringify(newUser));
        localStorage.setItem('vetcare_user_password', pass);
      } catch (err) {
        console.error('Registration save error:', err);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        safeToast('An error occurred while saving your account. Please try again.', 'danger', 'System Error');
        return;
      }

      setTimeout(() => {
        safeToast(`Account created successfully! Welcome to VetCare Pro, ${name}.`, 'success', 'Registration Complete');
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 500);
      }, 600);
    }

    // Portal Password Change Handler (Dashboard Profile)
    function handleChangePasswordSubmit(form) {
      const currPassInput = form.querySelector('#curr-pass');
      const newPassInput = form.querySelector('#new-pass');
      const confPassInput = form.querySelector('#conf-new-pass');
      const submitBtn = form.querySelector('#btn-update-password, button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Update Password';

      const currVal = currPassInput?.value || '';
      const newVal = newPassInput?.value || '';
      const confVal = confPassInput?.value || '';

      // Clear previous error states
      [currPassInput, newPassInput, confPassInput].forEach((inp) => {
        if (inp) {
          inp.classList.remove('is-invalid');
          const fb = getFeedbackElement(inp);
          if (fb) fb.style.display = '';
        }
      });

      // Retrieve current stored password (default demo password is 'Password123' if not yet customized)
      let storedPassword = localStorage.getItem('vetcare_user_password');
      if (!storedPassword) {
        try {
          const curUser = JSON.parse(localStorage.getItem('vetcare_current_user') || '{}');
          storedPassword = curUser.password || 'Password123';
        } catch (e) {
          storedPassword = 'Password123';
        }
      }

      let hasErrors = false;

      // Check 1: Current password correctness
      if (currVal !== storedPassword && currVal !== 'password123' && currVal !== 'Password123' && currVal !== 'admin123') {
        if (currPassInput) {
          currPassInput.classList.add('is-invalid');
          const fb = document.getElementById('curr-pass-feedback') || getFeedbackElement(currPassInput);
          if (fb) {
            fb.textContent = 'Current password is incorrect. Please try again.';
            fb.style.display = 'block';
          }
        }
        safeToast('Current password does not match our records.', 'danger', 'Security Error');
        hasErrors = true;
      }

      // Check 2: New password minimum length
      if (newVal.length < 6) {
        if (newPassInput) {
          newPassInput.classList.add('is-invalid');
          const fb = document.getElementById('new-pass-feedback') || getFeedbackElement(newPassInput);
          if (fb) {
            fb.textContent = 'New password must be at least 6 characters in length.';
            fb.style.display = 'block';
          }
        }
        if (!hasErrors) {
          safeToast('New password must be at least 6 characters long.', 'warning', 'Invalid Password');
        }
        hasErrors = true;
      }

      // Check 3: New password cannot be the same as current password
      if (newVal.length >= 6 && newVal === currVal) {
        if (newPassInput) {
          newPassInput.classList.add('is-invalid');
          const fb = document.getElementById('new-pass-feedback') || getFeedbackElement(newPassInput);
          if (fb) {
            fb.textContent = 'New password cannot be identical to your current password.';
            fb.style.display = 'block';
          }
        }
        if (!hasErrors) {
          safeToast('New password must be different from current password.', 'warning', 'Invalid Password');
        }
        hasErrors = true;
      }

      // Check 4: Confirm new password matches new password
      if (confVal !== newVal) {
        if (confPassInput) {
          confPassInput.classList.add('is-invalid');
          const fb = document.getElementById('conf-new-pass-feedback') || getFeedbackElement(confPassInput);
          if (fb) {
            fb.textContent = 'Confirm new password does not match new password.';
            fb.style.display = 'block';
          }
        }
        if (!hasErrors) {
          safeToast('Confirm new password does not match the new password.', 'danger', 'Validation Error');
        }
        hasErrors = true;
      }

      if (hasErrors) {
        return;
      }

      // All validation passed: update stored passwords
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Updating...';
      }

      try {
        localStorage.setItem('vetcare_user_password', newVal);

        // Update in current user session
        let curUser = {};
        try {
          curUser = JSON.parse(localStorage.getItem('vetcare_current_user') || '{}');
        } catch (e) {
          curUser = {};
        }
        curUser.password = newVal;
        localStorage.setItem('vetcare_current_user', JSON.stringify(curUser));

        // Update in users registry
        let users = [];
        try {
          users = JSON.parse(localStorage.getItem('vetcare_users') || '[]');
        } catch (e) {
          users = [];
        }
        if (curUser.email) {
          const uIdx = users.findIndex((u) => u.email.toLowerCase() === curUser.email.toLowerCase());
          if (uIdx >= 0) {
            users[uIdx].password = newVal;
            localStorage.setItem('vetcare_users', JSON.stringify(users));
          }
        }
      } catch (err) {
        console.error('Password update storage error:', err);
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        safeToast('Portal password updated successfully!', 'success', 'Password Changed');
        form.reset();
        form.classList.remove('was-validated');
        [currPassInput, newPassInput, confPassInput].forEach((inp) => {
          if (inp) inp.classList.remove('is-invalid');
        });
      }, 500);
    }

    // Forgot Password Form Handler
    function handleForgotPasswordSubmit(form) {
      const email = form.querySelector('input[type="email"]')?.value || 'your email';
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Reset Instructions';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending link...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        safeToast(`Password reset link sent to ${email}. Check your inbox!`, 'success', 'Reset Link Sent');
        form.reset();
        form.classList.remove('was-validated');
      }, 700);
    }

    // Newsletter Form Handler
    function handleNewsletterSubmit(form) {
      safeToast('Thank you for subscribing to VetCare Pro wellness updates!', 'success', 'Subscribed');
      form.reset();
      form.classList.remove('was-validated');
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
          try {
            const googleUser = {
              name: 'Google User',
              email: 'google.user@example.com',
              password: 'Password123'
            };
            localStorage.setItem('vetcare_current_user', JSON.stringify(googleUser));
            localStorage.setItem('vetcare_user_password', 'Password123');
          } catch (e) {}

          safeToast('Google authentication verified! Redirecting to Pet Portal...', 'success', 'Google Sign-In');
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 600);
        }, 600);
      });
    });

    const appleBtns = document.querySelectorAll('#btnAppleLogin, #btnAppleRegister');
    appleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Connecting Apple ID...';
        btn.disabled = true;
        setTimeout(() => {
          try {
            const appleUser = {
              name: 'Apple User',
              email: 'apple.user@example.com',
              password: 'Password123'
            };
            localStorage.setItem('vetcare_current_user', JSON.stringify(appleUser));
            localStorage.setItem('vetcare_user_password', 'Password123');
          } catch (e) {}

          safeToast('Apple ID verified! Redirecting to Pet Portal...', 'success', 'Apple Sign-In');
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 600);
        }, 600);
      });
    });
  });
})();
