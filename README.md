# VetCare Pro — Veterinary Clinic & Animal Hospital Website Template
**Commercial Quality HTML5, CSS3, Vanilla JavaScript & Bootstrap 5 Template**

VetCare Pro is a premium, modern, fully responsive website template designed specifically for **Veterinary Clinics, Animal Hospitals, Pet Healthcare Centers, and 24/7 Emergency Animal Facilities**. Built to the highest ThemeForest and TemplateMonster standards, it delivers a warm, trustworthy, compassionate, and medically credible user experience.

---

## 🌟 Key Highlights & Features

- **Strict Framework Standard**: Built **ONLY** with pure semantic **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5**. Zero dependencies on React, Vue, Angular, jQuery, or heavy third-party UI bloat.
- **27 Complete Pages**:
  - 13 Public-Facing Clinic Pages (2 distinct Home layouts, About, Services, Service Details, Team Directory, Specialist Profile, 24/7 Emergency Care, Interactive Appointment Booking, Pricing, Blog, Blog Details, Contact).
  - 3 Authentication Pages (Login, Registration, Password Recovery).
  - 8 Dedicated Pet Parent Dashboard Portal Pages (Overview, My Pets, Health Profile, Vaccination Passports, Medical History, Prescriptions Refill, Billing & Invoices, Owner Profile).
  - 3 Utility Pages (Playful 404, Live Countdown Coming Soon, Maintenance Pawse).
- **Strict Content & Section Structure**: Every single page contains **5–6 substantial, medically responsible content sections** (excluding header and footer) with **zero Lorem Ipsum** or artificial filler.
- **Unique Visual Identity**: Every page includes a **distinct, prominent high-resolution SVG/vector illustration**. No repeated hero artwork.
- **Sophisticated Color Palette**:
  - Primary: Deep Botanical Forest Green (`#16382b`)
  - Secondary & Accent: Soft Sage & Mint (`#40916c` / `#52b788`)
  - Emergency / Alert: Warm Amber Coral (`#e07a5f` / `#c85a3b`)
  - Backgrounds: Warm Ivory (`#fcfbfa`) & Clean Surface White (`#ffffff`)
- **First-Class Dark Mode**: Complete dark mode with proper text contrast, card backgrounds, and surface tints persisted via `localStorage`.
- **Text-Driven RTL / LTR Switching**: Built-in bidirectional support displaying an intuitive text toggle (`LTR | RTL`) with dynamic `assets/css/rtl.css` activation.
- **Interactive Vanilla JS Functionality**:
  - Interactive multi-step appointment booking with live confirmation modal.
  - Interactive Add Pet & Edit Pet modals with dynamic card addition.
  - Prescription Refill Request modal with toast notifications.
  - Itemized Printable Invoice modal for pet insurance claims.
  - Live blog and service category filtering with real-time text search and pagination.
  - Live animated countdown timer on the Coming Soon page.
  - Form validation with accessible invalid/valid feedback states.

---

## 📁 Project Directory Structure

```text
pet-hospital/
│
├── index.html                    # Home 1 — Compassionate Care for Every Paw
├── home-2.html                   # Home 2 — Pet Wellness & Prevention
├── about.html                    # About Us — History, Facilities & Philosophy
├── services.html                 # Comprehensive Services Catalog & Filter
├── service-details.html          # Service Details — Routine Vaccinations
├── vets.html                     # Veterinary Specialists Directory & Filters
├── vet-details.html              # Individual Profile — Dr. Emily Carter, DACVS
├── emergency-care.html           # 24/7 Emergency Care, Triage & First Aid
├── appointments.html             # Multi-step Interactive Appointment Booking
├── pricing.html                  # Transparent Wellness Plans & Fee Schedule
├── blog.html                     # Pet Health Knowledge Hub, Search & Filters
├── blog-details.html             # Clinical Article — Feline Pain Recognition
├── contact.html                  # Hospital Campus Location, Hours & Inquiry Form
│
├── login.html                    # Pet Parent Portal Sign In Demo
├── register.html                 # New Pet Parent Registration Demo
├── forgot-password.html          # Password Recovery Request Interface
│
├── dashboard.html                # Pet Health Portal Home & Visit Alerts
├── my-pets.html                  # Family Pets Directory & Add Pet Modal
├── pet-details.html              # Pet Medical File — Max Golden Retriever
├── vaccination-records.html      # Immunization Passport & Rabies Certificates
├── medical-history.html          # Encounter Timeline & Diagnostic Archive
├── prescriptions.html            # Hospital Pharmacy & Refill Request Modal
├── billing-history.html          # Statements, Invoices & Printable Modal
├── appointments-history.html     # Visit Manager & Reschedule / Cancel Triggers
├── profile.html                  # Pet Owner Profile & Emergency Proxies
│
├── 404.html                      # Creative Pet-Themed Page Not Found
├── coming-soon.html              # Expansion Launch with Live Countdown Timer
├── maintenance.html              # Friendly Scheduled Maintenance Notice
│
├── assets/
│   ├── css/
│   │   ├── style.css             # Core design system, variables & dark mode
│   │   ├── responsive.css        # Responsive breakpoints (320px to 1920px)
│   │   └── rtl.css               # Right-to-left layout rules (Arabic/Hebrew)
│   │
│   ├── js/
│   │   ├── main.js               # Global UI, sticky navbar, back-to-top, toasts
│   │   ├── theme.js              # Vanilla JS Dark/Light mode with localStorage
│   │   ├── rtl.js                # LTR/RTL text-based switcher & stylesheet link
│   │   ├── forms.js              # Client-side form validation & submissions
│   │   ├── appointments.js       # Dynamic booking wizard & confirmation modal
│   │   ├── dashboard.js          # Sidebar offcanvas, invoices & refill triggers
│   │   ├── pets.js               # Add/edit pet modals & dynamic pet cards
│   │   └── filters.js            # Category filter, blog search & pagination
│   │
│   └── images/
│       ├── hero/                 # 26 distinct hero SVG visuals
│       ├── pets/                 # Companion portraits (Max, Luna, etc.)
│       ├── vets/                 # Clinician profile illustrations
│       ├── services/             # Surgical, dental, diagnostic graphics
│       ├── emergency/            # Critical trauma visual assets
│       ├── blog/                 # Article thumbnail illustrations
│       └── dashboard/            # Health cards, badge icons, illustrations
│
└── README.md                     # Template documentation and setup guide
```

---

## 🎨 Customizing Design Tokens

All colors, border radiuses, typography, and spacing tokens are centralized in `:root` inside `assets/css/style.css`:

```css
:root {
  /* Brand Identity */
  --primary: #16382b;
  --secondary: #2d6a4f;
  --accent: #40916c;
  --accent-light: #74c69d;
  --emergency: #e07a5f;

  /* Surfaces */
  --bg-body: #fcfbfa;
  --bg-surface: #ffffff;
  --bg-subtle: #f4f1ea;

  /* Typography */
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

Dark mode tokens are configured under `[data-bs-theme="dark"]` in the same file.

---

## 💻 Browser & Device Support

The template has been tested across all modern browsers and viewport breakpoints:
- Mobile: `320px`, `360px`, `375px`, `390px`, `414px`
- Tablet: `768px`, `820px`, `1024px`
- Desktop: `1280px`, `1440px`, `1920px`

Supported Browsers:
- Google Chrome (Desktop & Mobile)
- Apple Safari (macOS & iOS)
- Mozilla Firefox
- Microsoft Edge

---

## 📜 Credits & Licensing

- **Framework**: Bootstrap 5.3.3 (MIT License)
- **Icons**: Bootstrap Icons 1.11.3 (MIT License)
- **Fonts**: Google Fonts (`Outfit`, `Plus Jakarta Sans`)
- **Illustrations**: Custom curated SVG assets designed specifically for VetCare Pro.

© 2026 VetCare Pro. Commercial Template. All rights reserved.
