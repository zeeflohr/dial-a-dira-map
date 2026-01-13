// ====== main.js (Optimized for Smooth 3D) ======

// 1️⃣ Mapbox access token — replace with your actual token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvaHIiLCJhIjoiY21nbjVnM204MWhibDJycXF0a284NGV6NiJ9.3ZEJ3wOlf8qN2W9KgUh3VA';

// 2️⃣ Initialize the map with lighter style & optimized pitch/zoom
const map = new mapboxgl.Map({
    container: 'map',                        // HTML container id
    style: 'mapbox://styles/mapbox/light-v11', // Lighter, faster style
    center: [-0.1276, 51.5074],              // Starting coordinates (London)
    zoom: 14,                                 // Slightly lower zoom
    pitch: 50,                                // Slightly lower pitch for smoother 3D
    bearing: 0                                // Initial rotation
});

// 3️⃣ Define your property locations
// Format: [longitude, latitude, zoom, pitch, bearing]
const properties = [
    [-0.1276, 51.5074, 14, 50, 0],    // London
    [-74.006, 40.7128, 13, 50, 45],   // New York
    [2.3522, 48.8566, 13, 50, 90],    // Paris
    [139.6917, 35.6895, 12, 50, 135]  // Tokyo
];

let currentIndex = 0;

// 4️⃣ Fly to next property after the map loads
map.on('load', () => {
    flyToProperty();
});

// 5️⃣ Function to fly to properties in a loop with optimized speed & curve
function flyToProperty() {
    const [lng, lat, zoom, pitch, bearing] = properties[currentIndex];

    map.flyTo({
        center: [lng, lat],
        zoom: zoom,
        pitch: pitch,
        bearing: bearing,
        speed: 1,    // slightly faster for smoother feel
        curve: 1.3,  // slightly less curve for less load
        essential: true
    });

    // Move to next property
    currentIndex = (currentIndex + 1) % properties.length;

    // Fly to next property every 6 seconds
    setTimeout(flyToProperty, 6000);
}
