/**
 * VetCare Pro — Real Interactive Hospital Campus Map (Leaflet.js + OSM / CartoDB)
 * Features:
 * - Live real-world interactive map tiles (Street & Satellite layers)
 * - Custom pulsing hospital marker with 24/7 ER status badge
 * - Auto-popup with direct navigation & ER hotline actions
 * - Interactive layer toggle (Streets / Satellite / OSM) & Recenter control
 * - Theme-aware tiles matching Light & Dark modes
 */

(function () {
  'use strict';

  function initHospitalMap() {
    const mapEl = document.getElementById('hospital-map');
    if (!mapEl) return;

    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
      console.warn('Leaflet library not detected, using fallback iframe.');
      return;
    }

    // Hospital Coordinates (Springfield Medical Center District)
    const HOSPITAL_COORDS = [42.1055, -72.5875];
    const DEFAULT_ZOOM = 16;

    // Initialize Map
    const map = L.map('hospital-map', {
      center: HOSPITAL_COORDS,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      scrollWheelZoom: false // prevents accidental scroll capture
    });

    // Custom Zoom Control top-right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Tile Layers
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';

    const tilesVoyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd'
    });

    const tilesDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd'
    });

    const tilesSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    const tilesOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Default layer based on theme
    let activeLayer = currentTheme === 'dark' ? tilesDark : tilesVoyager;
    activeLayer.addTo(map);

    // Custom Hospital Pin Marker
    const hospitalIcon = L.divIcon({
      className: 'hospital-marker-wrapper',
      html: `
        <div class="hospital-map-pin">
          <span class="hospital-pin-pulse"></span>
          <i class="bi bi-hospital-fill"></i>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -42]
    });

    // Marker & Rich Clinical Popup
    const marker = L.marker(HOSPITAL_COORDS, { icon: hospitalIcon }).addTo(map);

    const popupContent = `
      <div class="map-popup-card">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="badge bg-danger"><i class="bi bi-lightning-charge-fill me-1"></i> 24/7 ER OPEN</span>
          <span class="badge bg-success">Parking Bay 1–4</span>
        </div>
        <h6 class="fw-bold mb-1 text-dark" style="font-size: 0.95rem;">VetCare Pro Animal Hospital</h6>
        <p class="small text-muted mb-2" style="font-size: 0.8rem; line-height: 1.35;">
          <i class="bi bi-geo-alt-fill text-danger me-1"></i> 742 Evergreen Terrace, Medical District, Springfield
        </p>
        <div class="d-flex gap-2 mt-2">
          <a href="https://maps.google.com/?q=742+Evergreen+Terrace,+Springfield" target="_blank" rel="noopener" class="btn btn-sm btn-primary py-1 px-2" style="font-size: 0.78rem;">
            <i class="bi bi-compass me-1"></i> Directions
          </a>
          <a href="tel:5559247387" class="btn btn-sm btn-outline-danger py-1 px-2" style="font-size: 0.78rem;">
            <i class="bi bi-telephone-fill me-1"></i> Call ER
          </a>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent, { maxWidth: 280, closeButton: true });

    // Open popup after map settles
    setTimeout(() => {
      marker.openPopup();
    }, 400);

    // Wire Layer Control Buttons
    const streetBtn = document.getElementById('map-btn-streets');
    const satBtn = document.getElementById('map-btn-satellite');
    const osmBtn = document.getElementById('map-btn-osm');
    const recenterBtn = document.getElementById('map-btn-recenter');

    function switchLayer(newLayer, activeBtn) {
      map.removeLayer(activeLayer);
      newLayer.addTo(map);
      activeLayer = newLayer;

      [streetBtn, satBtn, osmBtn].forEach(b => b && b.classList.remove('active'));
      if (activeBtn) activeBtn.classList.add('active');
    }

    if (streetBtn) {
      streetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        switchLayer(isDark ? tilesDark : tilesVoyager, streetBtn);
      });
    }

    if (satBtn) {
      satBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchLayer(tilesSatellite, satBtn);
      });
    }

    if (osmBtn) {
      osmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchLayer(tilesOSM, osmBtn);
      });
    }

    if (recenterBtn) {
      recenterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        map.flyTo(HOSPITAL_COORDS, DEFAULT_ZOOM, { duration: 1.2 });
        marker.openPopup();
      });
    }

    // Theme Switcher Observer to adjust street tiles
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-bs-theme') {
          const theme = document.documentElement.getAttribute('data-bs-theme');
          if (activeLayer === tilesVoyager || activeLayer === tilesDark) {
            switchLayer(theme === 'dark' ? tilesDark : tilesVoyager, streetBtn);
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHospitalMap);
  } else {
    initHospitalMap();
  }
})();
