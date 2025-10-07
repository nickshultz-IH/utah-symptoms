window.APP_CONFIG = {
  DATA: {
    sheetsApiKey: "YOUR_GOOGLE_SHEETS_API_KEY",
    sheetId: "YOUR_SHEET_ID",
    sheetRange: "Sheet1!A:Z"
  },
  UI: {
    hideControls: false,
    hideFilters: false,
    clustering: true
  },
  MAP: {
    provider: "auto", // will use Freshpaint later when we add envId
    center: { lat: 37.0953, lng: -113.5786 },
    zoom: 9,
    minZoom: 3,
    style: "https://demotiles.maplibre.org/style.json",
    iconsByGroup: {
      "Cobalt": "map-marker-cobalt.png",
      "Coral": "map-marker-coral.png",
      "Dark Blue": "map-marker-darkblue.png",
      "Soft Blue": "map-marker-softblue.png"
    },
    logo: "logo-light.png"
  }
};
