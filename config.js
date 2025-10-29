// v2025-10-29 freshpaint-wireup
// config.js
window.APP_CONFIG = {
  DATA: {
    sheetsApiKey: "AIzaSyBc6wdW7Dz9P0oq-x6SoOJmySHwEBbfo-I",
    sheetId: "1cd3VUWQKs3zB68Ji-JXVjJkqyXi87KOoSErjypixD4I",
    sheetRange: "Sheet1!A:Z"
  },
  UI: {
    hideControls: false,
    hideFilters: false,
    clustering: true
  },
  MAP: {
    provider: "maplibre",
    center: { lat: 37.0953, lng: -113.5786 },
    zoom: 9,
    minZoom: 3,
    // Basemap style fallback when Freshpaint is not active
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
    enabled: true,            // keep true; we still won’t use it unless envId is set
    envId: "",               // <-- paste your Freshpaint Environment ID here later
    style: "visualization-light", // Freshpaint style key (e.g., standard-light | standard-dark)

    // Safety knobs (HIPAA-sensitive data should NOT be sent)
    sendPlaceName: false,     // keep OFF by default
    sendAddress: false,       // keep OFF by default
    sendLatLng: false,        // keep OFF by default
    coarsePrecision: 2        // number of decimals if you later allow lat/lng (≈1.1 km)
  }
};
