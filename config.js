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
