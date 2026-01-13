// ====== main.js ======

// 1️⃣ Mapbox access token — replace with your actual token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvaHIiLCJhIjoiY21nbjVnM204MWhibDJycXF0a284NGV6NiJ9.3ZEJ3wOlf8qN2W9KgUh3VA';

// 2️⃣ Initialize the map
const map = new mapboxgl.Map({
    container: 'map',                    // HTML container id
    style: 'mapbox://styles/mapbox/streets-v11', // Map style
    center: [-0.1276, 51.5074],          // Starting coordinates (London)
    zoom: 14,                             // Initial zoom
    pitch: 60,                            // Tilt for 3D effect
    bearing: 0                             // Initial rotation
});

// 3️⃣ Define your property locations
// Format: [longitude, latitude, zoom, pitch, bearing]
const properties = [
    [-0.1276, 51.5074, 15, 60, 0],    // London
    [-74.006, 40.7128, 14, 60, 45],   // New York
    [2.3522, 48.8566, 14, 60, 90],    // Paris
    [139.6917, 35.6895, 13, 60, 135]  // Tokyo
];

let currentIndex = 0;

// 4️⃣ Fly to next property after the map loads
map.on('load', () => {
    flyToProperty();
});

// 5️⃣ Function to fly to properties in a loop
function flyToProperty() {
    const [lng, lat, zoom, pitch, bearing] = properties[currentIndex];

    map.flyTo({
        center: [lng, lat],
        zoom: zoom,
        pitch: pitch,
        bearing: bearing,
        speed: 0.8,    // flight speed
        curve: 1.5,    // smoothness of flight
        essential: true
    });

    // Move to next property
    currentIndex = (currentIndex + 1) % properties.length;

    // Fly to next property after 6 seconds
    setTimeout(flyToProperty, 6000);
}
