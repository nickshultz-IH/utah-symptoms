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
  enabled: true,
  envId: "ed7feca2-785d-47de-926c-faf58bd0d3b9",
  host: "https://maps.freshpaint.io",
  style: "standard-light",     // ← try this first; fallback to standard-dark if needed
  sendPlaceName: false,
  sendAddress: false,
  sendLatLng: false,
  coarsePrecision: 2
}
};
