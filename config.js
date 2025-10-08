// config.js
window.APP_CONFIG = {
  DATA: {
    // Google Sheets (public read) — make sure the sheet is shared:
    // Share → General access → "Anyone with the link" (Viewer)
    sheetsApiKey: "AIzaSyBc6wdW7Dz9P0oq-x6SoOJmySHwEBbfo-I",
    sheetId: "1cd3VUWQKs3zB68Ji-JXVjJkqyXi87KOoSErjypixD4I",
    sheetRange: "Sheet1!A:Z"
  },
  UI: {
    // Show/hide sidebar sections
    hideControls: false,
    hideFilters: false,
    // Marker clustering on the map
    clustering: true
  },
  MAP: {
    // We're using MapLibre (no Google Maps key needed)
    provider: "maplibre",
    // Start view (St. George area as in your previous config)
    center: { lat: 37.0953, lng: -113.5786 },
    zoom: 9,
    minZoom: 3,

    // Basemap style — Mapbox GL style JSON (free demo style shown).
    // Swap for your preferred gray/desaturated style to better match Snazzy.
    style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",

    // Brand/logo at top of sidebar
    logo: "logo-light.png",

    // Optional per-group marker icons (filenames live at your site root)
    iconsByGroup: {
      "Cobalt": "map-marker-cobalt.png",
      "Coral": "map-marker-coral.png",
      "Dark Blue": "map-marker-darkblue.png",
      "Soft Blue": "map-marker-softblue.png"
    }
  }
};
