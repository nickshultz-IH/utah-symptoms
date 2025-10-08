// config.js
window.APP_CONFIG = {
  DATA: {
    sheetsApiKey: "AIzaSyBc6wdW7Dz9P0oq-x6SoOJmySHwEBbfo-I",
    sheetId: "1vYe0uLH_G4jE6XI1MATo8JOFvkYn-sGtIYkBpG2XFVE",
    sheetRange: "Sheet1!A:Z"
  },
  UI: {
    hideControls: false,
    hideFilters: false,
    clustering: true
  },
  MAP: {
    provider: "maplibre",            // keep MapLibre now
    center: { lat: 37.0953, lng: -113.5786 },
    zoom: 9,
    minZoom: 3,
       // Basemap style — Mapbox GL style JSON (free demo style shown).
    // Swap for your preferred gray/desaturated style to better match Snazzy.
    style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
    iconsByGroup: {
      "Cobalt": "map-marker-cobalt.png",
      "Coral": "map-marker-coral.png",
      "Dark Blue": "map-marker-darkblue.png",
      "Soft Blue": "map-marker-softblue.png"
    },
    logo: "logo-light.png"
  },

  /* Freshpaint — safe by default until envId is provided */
  FRESHPAINT: {
    enabled: true,       // leave true; we still won’t send anything unless envId is set
    envId: "",           // <-- paste your Freshpaint Environment ID here later
    // Safety knobs (HIPAA-sensitive data should NOT be sent)
    sendPlaceName: false,     // keep OFF by default
    sendAddress: false,       // keep OFF by default
    sendLatLng: false,        // keep OFF by default (we’ll send a coarse “tile/precision bucket” instead)
    coarsePrecision: 2        // number of decimals if you later allow lat/lng (≈1.1 km); 0-2 recommended
  }
};
