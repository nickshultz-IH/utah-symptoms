window.APP_CONFIG = {
  DATA: {
    sheetsApiKey: "AIzaSyBc6wdW7Dz9P0oq-x6SoOJmySHwEBbfo-I",
    sheetId: "1cd3VUWQKs3zB68Ji-JXVjJkqyXi87KOoSErjypixD4I",
    sheetRange: "Sheet1!A:Z",
  },
  UI: {
    hideControls: false,
    hideFilters: false,
    clustering: true,
  },
  MAP: {
    /**
     * provider:
     *  - "auto"       -> try Freshpaint if envId present, else MapLibre
     *  - "freshpaint" -> force Freshpaint (will fallback if envId missing)
     *  - "maplibre"   -> force MapLibre (dev preview)
     */
    provider: "auto",

    // Freshpaint wiring (leave envId empty for now)
    freshpaint: {
      envId: "",          // 👈 paste later, e.g. "env_xxxxx"
      accessToken: "",    // if their SDK requires one; otherwise leave blank
      style: null         // optional: provider style url/json if needed
    },

    // Map initial camera
    center: { lat: 37.0953, lng: -113.5786 },
    zoom: 9,
    minZoom: 3,

    // Fallback dev style (MapLibre)
    style: "https://demotiles.maplibre.org/style.json",

    // Default marker icons by Group (domain-agnostic paths)
    iconsByGroup: {
      "Cobalt":   "map-marker-cobalt.png",
      "Coral":    "map-marker-coral.png",
      "Dark Blue":"amap-marker-darkblue.png",
      "Soft Blue":"map-marker-softblue.png"
    }
  }
};

