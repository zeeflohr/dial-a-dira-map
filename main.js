// Example array of your property locations: [longitude, latitude, zoom, pitch, bearing]
const properties = [
  [-0.1276, 51.5074, 15, 60, 0],    // Property 1: London
  [-74.006, 40.7128, 14, 60, 45],   // Property 2: New York
  [2.3522, 48.8566, 14, 60, 90],    // Property 3: Paris
  [139.6917, 35.6895, 13, 60, 135]  // Property 4: Tokyo
];

let currentIndex = 0;

function flyToProperty() {
  const [lng, lat, zoom, pitch, bearing] = properties[currentIndex];

  map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,       // 3D tilt
    bearing: bearing,   // rotation
    speed: 0.8,
    curve: 1.5,
    essential: true
  });

  currentIndex = (currentIndex + 1) % properties.length;

  // Fly to the next property after 6 seconds
  setTimeout(flyToProperty, 6000);
}

map.on('load', () => {
  flyToProperty();
});
